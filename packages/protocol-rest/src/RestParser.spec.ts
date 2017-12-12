import {extractMetadata} from '@aws/response-metadata-extractor';
import {
    HttpResponse,
    OperationModel    
} from '@aws/types';
import {RestParser} from './RestParser';
import {
    bodyBlobMember,
    bodyBlobStreamingMember,
    bodyBooleanMember,
    bodyFloatMember,
    bodyIntegerMember,
    bodyListMember,
    bodyMapMember,
    bodyStringMember,
    bodyStructureMember,
    bodyTimestampMember,
    headerJsonMember,
    headerMapMember,
    headerMapCustomLocationMember
} from './shapes.fixture';
import {
    getSimpleHeadersOperation,
    minimalPostOperation
} from './operations.fixture';


describe('RestParser', () => {
    const bodyParser = {
        parse: jest.fn(() => { return {}; }) 
    };
    const collectedStream = new Uint8Array([0xde, 0xad, 0xbe, 0xef]);
    const streamCollector = jest.fn(() => Promise.resolve(collectedStream));
    const restErrorUnmarshaller = jest.fn();
    const restParser = new RestParser(
        bodyParser,
        streamCollector,
        jest.fn(),
        jest.fn(),
        restErrorUnmarshaller
    );

    describe('#parse', () => {
        beforeEach(() => {
            bodyParser.parse.mockClear();
            streamCollector.mockClear();
        });

        it('should call throw service exception when response code is bigger than 299', async () => {
            const httpResponse: HttpResponse = {
                statusCode: 400,
                body: 'This is body.',
                headers: {'Content-Type': 'text/plain'}
            };
            try {
                const parsed = await restParser.parse(minimalPostOperation, httpResponse);
            } catch(e) {
                expect(restErrorUnmarshaller).toBeCalled();
                expect(restErrorUnmarshaller.mock.calls[0][0]).toEqual(minimalPostOperation);
                expect(restErrorUnmarshaller.mock.calls[0][1].body).toEqual('This is body.');
                expect(restErrorUnmarshaller.mock.calls[0][2]).toEqual(bodyParser);
            }
        });

        describe('body', () => {
            const httpResponse: HttpResponse = {
                statusCode: 200,
                body: 'foo bar buzz',
                headers: {'Content-Type': 'text/plain'}
            };
            const $metadata = extractMetadata(httpResponse);

            it(
                'should pass the operation and HTTP response body to the body parser',
                async () => {
                    const parsed = await restParser.parse(getSimpleHeadersOperation, httpResponse);
                    expect(parsed).toEqual({
                        $metadata,
                        ContentType: 'text/plain'
                    });
                    expect(bodyParser.parse.mock.calls.length).toBe(1);
                    expect(bodyParser.parse.mock.calls[0]).toEqual([
                        getSimpleHeadersOperation.output,
                        'foo bar buzz'
                    ]);
                }
            );

            it('should UTF-8 encode ArrayBuffer bodies', async () => {
                const bufferBody = new ArrayBuffer(0);
                const utf8Encoder = jest.fn(() => 'a string');
                
                const restParser = new RestParser(
                    bodyParser,
                    streamCollector,
                    utf8Encoder,
                    jest.fn(),
                    jest.fn(),
                );
                
                await restParser.parse(getSimpleHeadersOperation, {
                    ...httpResponse,
                    body: bufferBody
                });
        
                expect(utf8Encoder.mock.calls.length).toBe(1);
                expect(utf8Encoder.mock.calls[0][0].buffer).toBe(bufferBody);
                expect(bodyParser.parse.mock.calls.length).toBe(1);
                expect(bodyParser.parse.mock.calls[0]).toEqual([
                    getSimpleHeadersOperation.output,
                    'a string'
                ]);
            });

            it('should UTF-8 encode ArrayBufferView bodies', async () => {
                const bufferBody = new Int32Array(0);
                const utf8Encoder = jest.fn(() => 'a string');
                
                const restParser = new RestParser(
                    bodyParser,
                    streamCollector,
                    utf8Encoder,
                    jest.fn(),
                    jest.fn(),
                );
                
                await restParser.parse(getSimpleHeadersOperation, {
                    ...httpResponse,
                    body: bufferBody
                });
        
                expect(utf8Encoder.mock.calls.length).toBe(1);
                expect(utf8Encoder.mock.calls[0][0].buffer).toBe(bufferBody.buffer);
                expect(bodyParser.parse.mock.calls.length).toBe(1);
                expect(bodyParser.parse.mock.calls[0]).toEqual([
                    getSimpleHeadersOperation.output,
                    'a string'
                ]);
            });

            it(
                'should collect and UTF-8 encode stream bodies for non-streaming bodies',
                async () => {
                    const streamBody = {
                        chunks: [
                            new Uint8Array([0xde, 0xad]),
                            new Uint8Array([0xbe, 0xef])
                        ]
                    };
                    const utf8Encoder = jest.fn(() => 'a string');
                    const restParser = new RestParser(
                        bodyParser,
                        streamCollector,
                        utf8Encoder,
                        jest.fn(),
                        jest.fn(),
                    );

                    await restParser.parse(getSimpleHeadersOperation, {
                        ...httpResponse,
                        body: streamBody
                    });

                    expect(streamCollector.mock.calls.length).toBe(1);
                    expect(streamCollector.mock.calls[0][0]).toBe(streamBody);
            
                    expect(utf8Encoder.mock.calls.length).toBe(1);
                    expect(utf8Encoder.mock.calls[0][0].buffer).toBe(collectedStream.buffer);
            
                    expect(bodyParser.parse.mock.calls.length).toBe(1);
                    expect(bodyParser.parse.mock.calls[0]).toEqual([
                        getSimpleHeadersOperation.output,
                        'a string'
                    ]);
                }
            );

            describe('payloads', () => {
                const streamBody = {
                    chunks: [
                        new Uint8Array([0xde, 0xad]),
                        new Uint8Array([0xbe, 0xef])
                    ]
                };
                it(
                    'should collect and return a byte array for non-streaming blobs',
                    async () => {
                        const operation:OperationModel = {
                            ...minimalPostOperation,
                            output: {
                                shape: {
                                    type: 'structure',
                                    required: [],
                                    members: {
                                        bytes: {
                                            ...bodyBlobMember,
                                        }
                                    },
                                    payload: 'bytes'
                                }
                            }
                        };
                        const utf8Encoder = jest.fn(() => 'a string');
                        const restParser = new RestParser(
                            bodyParser,
                            streamCollector,
                            utf8Encoder,
                            jest.fn(),
                            jest.fn(),
                        );
                        const streamResponse = {
                            ...httpResponse,
                            body: streamBody
                        }
                        const $metadata = extractMetadata(streamResponse)
                        const parsed = await restParser.parse(operation, streamResponse);
    
                        expect(streamCollector.mock.calls.length).toBe(1);
                        expect(streamCollector.mock.calls[0][0]).toBe(streamBody);
                
                        expect(utf8Encoder.mock.calls.length).toBe(0);
                        expect(bodyParser.parse.mock.calls.length).toBe(0);

                        expect(parsed).toEqual({
                            $metadata,
                            bytes: collectedStream
                        });
                    }
                );

                it(
                    'should return a stream for streaming blobs',
                    async () => {
                        const operation:OperationModel = {
                            ...minimalPostOperation,
                            output: {
                                shape: {
                                    type: 'structure',
                                    required: [],
                                    members: {
                                        bytes: {
                                            ...bodyBlobStreamingMember,
                                        }
                                    },
                                    payload: 'bytes'
                                }
                            }
                        };

                        const utf8Encoder = jest.fn(() => 'a string');
                        const restParser = new RestParser(
                            bodyParser,
                            streamCollector,
                            utf8Encoder,
                            jest.fn(),
                            jest.fn(),
                        );
    
                        const streamResponse = {
                            ...httpResponse,
                            body: streamBody
                        }
                        const $metadata = extractMetadata(streamResponse)
                        const parsed = await restParser.parse(operation, streamResponse);
    
                        expect(streamCollector.mock.calls.length).toBe(0);
                
                        expect(utf8Encoder.mock.calls.length).toBe(0);
                        expect(bodyParser.parse.mock.calls.length).toBe(0);

                        expect(parsed).toEqual({
                            $metadata,
                            bytes: streamBody
                        });
                    }
                );

                it(
                    'should return a stream for streaming member blobs',
                    async () => {
                        const operation:OperationModel = {
                            ...minimalPostOperation,
                            output: {
                                shape: {
                                    type: 'structure',
                                    required: [],
                                    members: {
                                        bytes: {
                                            ...bodyBlobMember,
                                            streaming: true
                                        }
                                    },
                                    payload: 'bytes'
                                }
                            }
                        };

                        const utf8Encoder = jest.fn(() => 'a string');
                        const restParser = new RestParser(
                            bodyParser,
                            streamCollector,
                            utf8Encoder,
                            jest.fn(),
                            jest.fn(),
                        );
    
                        const streamResponse = {
                            ...httpResponse,
                            body: streamBody
                        }
                        const $metadata = extractMetadata(streamResponse)
                        const parsed = await restParser.parse(operation, streamResponse);
    
                        expect(streamCollector.mock.calls.length).toBe(0);
                
                        expect(utf8Encoder.mock.calls.length).toBe(0);
                        expect(bodyParser.parse.mock.calls.length).toBe(0);

                        expect(parsed).toEqual({
                            $metadata,
                            bytes: streamBody
                        });
                    }
                );

                it(
                    'should parse a structure',
                    async () => {
                        const operation:OperationModel = {
                            ...minimalPostOperation,
                            output: {
                                shape: {
                                    type: 'structure',
                                    required: [],
                                    members: {
                                        data: {
                                            ...bodyStructureMember,
                                        }
                                    },
                                    payload: 'data'
                                }
                            }
                        };

                        const utf8Encoder = jest.fn(() => 'a string');
                        const restParser = new RestParser(
                            bodyParser,
                            streamCollector,
                            utf8Encoder,
                            jest.fn(),
                            jest.fn(),
                        );
    
                        const streamResponse = {
                            ...httpResponse,
                            body: streamBody
                        }
                        const $metadata = extractMetadata(streamResponse)
                        const parsed = await restParser.parse(operation, streamResponse);
    
                        expect(streamCollector.mock.calls.length).toBe(1);
                        expect(utf8Encoder.mock.calls.length).toBe(1);
                        expect(bodyParser.parse.mock.calls.length).toBe(1);

                        expect(parsed).toEqual({
                            $metadata,
                            data: {}
                        });
                    }
                );

                it(
                    'should parse a list',
                    async () => {
                        const operation:OperationModel = {
                            ...minimalPostOperation,
                            output: {
                                shape: {
                                    type: 'structure',
                                    required: [],
                                    members: {
                                        items: {
                                            ...bodyListMember,
                                        }
                                    },
                                    payload: 'items'
                                },
                            }
                        };

                        const bodyParser = {
                            parse: jest.fn(() => { return []; }) 
                        };
                        const utf8Encoder = jest.fn(() => 'a string');
                        const restParser = new RestParser(
                            bodyParser,
                            streamCollector,
                            utf8Encoder,
                            jest.fn(),
                            jest.fn(),
                        );
    
                        const streamResponse = {
                            ...httpResponse,
                            body: streamBody
                        }
                        const $metadata = extractMetadata(streamResponse)
                        const parsed = await restParser.parse(operation, streamResponse);
    
                        expect(streamCollector.mock.calls.length).toBe(1);
                        expect(utf8Encoder.mock.calls.length).toBe(1);
                        expect(bodyParser.parse.mock.calls.length).toBe(1);

                        expect(parsed).toEqual({
                            $metadata,
                            items: []
                        });
                    }
                );

                it(
                    'should parse a map',
                    async () => {
                        const operation:OperationModel = {
                            ...minimalPostOperation,
                            output: {
                                shape: {
                                    type: 'structure',
                                    required: [],
                                    members: {
                                        items: {
                                            ...bodyMapMember,
                                        }
                                    },
                                    payload: 'items'
                                },
                            }
                        };

                        const bodyParser = {
                            parse: jest.fn(() => { return {}; }) 
                        };
                        const utf8Encoder = jest.fn(() => 'a string');
                        const restParser = new RestParser(
                            bodyParser,
                            streamCollector,
                            utf8Encoder,
                            jest.fn(),
                            jest.fn(),
                        );
    
                        const streamResponse = {
                            ...httpResponse,
                            body: streamBody
                        }
                        const $metadata = extractMetadata(streamResponse)
                        const parsed = await restParser.parse(operation, streamResponse);
    
                        expect(streamCollector.mock.calls.length).toBe(1);
                        expect(utf8Encoder.mock.calls.length).toBe(1);
                        expect(bodyParser.parse.mock.calls.length).toBe(1);

                        expect(parsed).toEqual({
                            $metadata,
                            items: {}
                        });
                    }
                );

                describe('scalars', () => {
                    it('should parse a boolean', async () => {
                        const operation:OperationModel = {
                            ...minimalPostOperation,
                            output: {
                                shape: {
                                    type: 'structure',
                                    required: [],
                                    members: {
                                        bool: {
                                            ...bodyBooleanMember,
                                        }
                                    },
                                    payload: 'bool'
                                },
                            }
                        };

                        const utf8Encoder = jest.fn(() => 'a string');
                        const restParser = new RestParser(
                            bodyParser,
                            streamCollector,
                            utf8Encoder,
                            jest.fn(),
                            jest.fn(),
                        );
                        
                        let booleanResponse = {
                            ...httpResponse,
                            body: 'false'
                        }
                        let $metadata = extractMetadata(booleanResponse)
                        let parsed = await restParser.parse(operation, booleanResponse);
    
                        expect(bodyParser.parse.mock.calls.length).toBe(0);
                        expect(parsed).toEqual({
                            $metadata,
                            bool: false
                        });

                        booleanResponse = {
                            ...httpResponse,
                            body: 'true'
                        }
                        $metadata = extractMetadata(booleanResponse)
                        parsed = await restParser.parse(operation, booleanResponse);
    
                        expect(bodyParser.parse.mock.calls.length).toBe(0);
                        expect(parsed).toEqual({
                            $metadata,
                            bool: true
                        });
                    });

                    it('should parse a float', async () => {
                        const operation:OperationModel = {
                            ...minimalPostOperation,
                            output: {
                                shape: {
                                    type: 'structure',
                                    required: [],
                                    members: {
                                        float: {
                                            ...bodyFloatMember,
                                        }
                                    },
                                    payload: 'float'
                                },
                            }
                        };

                        const utf8Encoder = jest.fn(() => 'a string');
                        const restParser = new RestParser(
                            bodyParser,
                            streamCollector,
                            utf8Encoder,
                            jest.fn(),
                            jest.fn(),
                        );
                        
                        const floatResponse = {
                            ...httpResponse,
                            body: '3.14'
                        }
                        const parsed = await restParser.parse(operation, floatResponse);
                        const $metadata = extractMetadata(floatResponse)
                        expect(bodyParser.parse.mock.calls.length).toBe(0);
                        expect(parsed).toEqual({
                            $metadata,
                            float: 3.14
                        });
                    });

                    it('should parse an integer', async () => {
                        const operation:OperationModel = {
                            ...minimalPostOperation,
                            output: {
                                shape: {
                                    type: 'structure',
                                    required: [],
                                    members: {
                                        integer: {
                                            ...bodyIntegerMember,
                                        }
                                    },
                                    payload: 'integer'
                                },
                            }
                        };

                        const utf8Encoder = jest.fn(() => 'a string');
                        const restParser = new RestParser(
                            bodyParser,
                            streamCollector,
                            utf8Encoder,
                            jest.fn(),
                            jest.fn(),
                        );
                        const integerResponse = {
                            ...httpResponse,
                            body: '3'
                        }
                        const parsed = await restParser.parse(operation, integerResponse);
                        const $metadata = extractMetadata(integerResponse);
    
                        expect(bodyParser.parse.mock.calls.length).toBe(0);
                        expect(parsed).toEqual({
                            $metadata,
                            integer: 3
                        });
                    });

                    it('should parse an string', async () => {
                        const operation:OperationModel = {
                            ...minimalPostOperation,
                            output: {
                                shape: {
                                    type: 'structure',
                                    required: [],
                                    members: {
                                        string: {
                                            ...bodyStringMember,
                                        }
                                    },
                                    payload: 'string'
                                },
                            }
                        };

                        const utf8Encoder = jest.fn(() => 'a string');
                        const restParser = new RestParser(
                            bodyParser,
                            streamCollector,
                            utf8Encoder,
                            jest.fn(),
                            jest.fn(),
                        );
    
                        let parsed = await restParser.parse(operation, httpResponse);
                        const $metadata = extractMetadata(httpResponse)
    
                        expect(bodyParser.parse.mock.calls.length).toBe(0);
                        expect(parsed).toEqual({
                            $metadata,
                            string: 'foo bar buzz'
                        });
                    });

                    it('should parse an timestamp', async () => {
                        const operation:OperationModel = {
                            ...minimalPostOperation,
                            output: {
                                shape: {
                                    type: 'structure',
                                    required: [],
                                    members: {
                                        timestamp: {
                                            ...bodyTimestampMember,
                                        }
                                    },
                                    payload: 'timestamp'
                                },
                            }
                        };

                        const utf8Encoder = jest.fn(() => 'a string');
                        const restParser = new RestParser(
                            bodyParser,
                            streamCollector,
                            utf8Encoder,
                            jest.fn(),
                            jest.fn(),
                        );
    
                        const timestampResponse = {
                            ...httpResponse,
                            body: '1970-01-01T00:00:00Z'
                        }
                        const parsed = await restParser.parse(operation, timestampResponse);
                        const $metadata = extractMetadata(timestampResponse);
    
                        expect(bodyParser.parse.mock.calls.length).toBe(0);
                        expect(parsed).toEqual({
                            $metadata,
                            timestamp: new Date(0)
                        });
                    });
                });
            });
        });

        describe('statusCode', () => {
            it('can be extracted', async () => {
                const operation:OperationModel = {
                    ...minimalPostOperation,
                    output: {
                        shape: {
                            type: 'structure',
                            required: [],
                            members: {
                                status: {
                                    ...bodyIntegerMember,
                                    location: 'statusCode'
                                }
                            }
                        },
                    }
                };

                const httpResponse: HttpResponse = {
                    statusCode: 208,
                    body: 'foo bar buzz',
                    headers: {'Content-Type': 'text/plain'}
                };
                const $metadata = extractMetadata(httpResponse);

                const restParser = new RestParser(
                    bodyParser,
                    streamCollector,
                    jest.fn(),
                    jest.fn(),
                    jest.fn(),
                );

                let parsed = await restParser.parse(operation, httpResponse);

                expect(parsed).toEqual({
                    $metadata,
                    status: 208
                });
            });
        });

        describe('headers', () => {
            it('extracts header values', async () => {
                const httpResponse: HttpResponse = {
                    statusCode: 200,
                    body: 'foo bar buzz',
                    headers: {'Content-Type': 'text/plain'}
                };
                const $metadata = extractMetadata(httpResponse);

                const parsed = await restParser.parse(getSimpleHeadersOperation, httpResponse);
                expect(parsed).toEqual({
                    $metadata,
                    ContentType: 'text/plain'
                });
            });

            it('treats response headers as case insensitive', async () => {
                const httpResponse: HttpResponse = {
                    statusCode: 200,
                    body: 'foo bar buzz',
                    headers: {'Content-Type': 'text/plain'}
                };
                let $metadata = extractMetadata(httpResponse);

                let parsed = await restParser.parse(getSimpleHeadersOperation, httpResponse);
                expect(parsed).toEqual({
                    $metadata,
                    ContentType: 'text/plain'
                });

                httpResponse.headers = {'content-type': 'text/foo'};
                $metadata = extractMetadata(httpResponse);

                parsed = await restParser.parse(getSimpleHeadersOperation, httpResponse);
                expect(parsed).toEqual({
                    $metadata,
                    ContentType: 'text/foo'
                });

                httpResponse.headers = {'CONTENT-type': 'text/bar'};
                $metadata = extractMetadata(httpResponse);

                parsed = await restParser.parse(getSimpleHeadersOperation, httpResponse);
                expect(parsed).toEqual({
                    $metadata,
                    ContentType: 'text/bar'
                });
            });

            describe('scalars', () => {
                it('extracts booleans', async () => {
                    const operation:OperationModel = {
                        ...minimalPostOperation,
                        output: {
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    bool: {
                                        ...bodyBooleanMember,
                                        location: 'header',
                                        locationName: 'x-amz-bool'
                                    }
                                }
                            },
                        }
                    };
                    
                    const httpResponse: HttpResponse = {
                        statusCode: 200,
                        body: 'foo bar buzz',
                        headers: {
                            'x-amz-bool': 'true'
                        }
                    };
                    let $metadata = extractMetadata(httpResponse);
                    
                    let parsed = await restParser.parse(operation, httpResponse);
                    expect(parsed).toEqual({
                        $metadata,
                        'bool': true
                    });

                    httpResponse.headers['x-amz-bool'] = 'false';
                    $metadata = extractMetadata(httpResponse);
                    
                    parsed = await restParser.parse(operation, httpResponse);
                    expect(parsed).toEqual({
                        $metadata,
                        'bool': false
                    });
                });

                it('extracts floats', async () => {
                    const operation:OperationModel = {
                        ...minimalPostOperation,
                        output: {
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    float: {
                                        ...bodyFloatMember,
                                        location: 'header',
                                        locationName: 'x-amz-float'
                                    }
                                }
                            },
                        }
                    };
                    
                    const httpResponse: HttpResponse = {
                        statusCode: 200,
                        body: 'foo bar buzz',
                        headers: {
                            'x-amz-float': '3.14'
                        }
                    };
                    const $metadata = extractMetadata(httpResponse);
                    
                    const parsed = await restParser.parse(operation, httpResponse);
                    expect(parsed).toEqual({
                        $metadata,
                        float: 3.14
                    });
                });

                it('extracts integers', async () => {
                    const operation:OperationModel = {
                        ...minimalPostOperation,
                        output: {
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    int: {
                                        ...bodyIntegerMember,
                                        location: 'header',
                                        locationName: 'x-amz-int'
                                    }
                                }
                            },
                        }
                    };
                    
                    const httpResponse: HttpResponse = {
                        statusCode: 200,
                        body: 'foo bar buzz',
                        headers: {
                            'x-amz-int': '3'
                        }
                    };
                    const $metadata = extractMetadata(httpResponse);
                    
                    const parsed = await restParser.parse(operation, httpResponse);
                    expect(parsed).toEqual({
                        $metadata,
                        int: 3
                    });
                });

                it('extracts string JSON member', async () => {
                    const operation:OperationModel = {
                        ...minimalPostOperation,
                        output: {
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    headerJSON: headerJsonMember
                                }
                            },
                        }
                    };

                    const utf8Encoder = jest.fn(() => '{"data":{"bool":true,"float":3.14,"int":3,"string":"test"}}');
                    const base64Decoder = jest.fn();
                    const restParser = new RestParser(
                        bodyParser,
                        jest.fn(),
                        utf8Encoder,
                        base64Decoder,
                        jest.fn(),
                    );

                    const httpResponse: HttpResponse = {
                        statusCode: 200,
                        body: 'foo bar buzz',
                        headers: {
                            'x-amz-json': '{"data":{"bool":true,"float":3.14,"int":3,"string":"test"}}'
                        }
                    };
                    const $metadata = extractMetadata(httpResponse);
                    
                    const parsed = await restParser.parse(operation, httpResponse);
                    expect(base64Decoder.mock.calls.length).toBe(1);
                    expect(parsed).toEqual({
                        $metadata,
                        headerJSON: {
                            data: {
                                bool: true,
                                float: 3.14,
                                int: 3,
                                string: 'test'
                            }
                        }
                    });
                });

                it('extracts timestamp', async () => {
                    const operation:OperationModel = {
                        ...minimalPostOperation,
                        output: {
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    timestamp: {
                                        ...bodyTimestampMember,
                                        location: 'header',
                                        locationName: 'x-amz-timestamp'
                                    }
                                }
                            },
                        }
                    };

                    const httpResponse: HttpResponse = {
                        statusCode: 200,
                        body: 'foo bar buzz',
                        headers: {
                            'x-amz-timestamp': '1970-01-01T00:00:00Z'
                        }
                    };
                    const $metadata = extractMetadata(httpResponse);
                    
                    const parsed = await restParser.parse(operation, httpResponse);
                    expect(parsed).toEqual({
                        $metadata,
                        timestamp: new Date(0)
                    });
                });
            });

            describe('maps', () => {
                it('extracts maps from header values (without locationName)', async () => {
                    const headerMapName = 'testHeader';
                    const operation:OperationModel = {
                        ...minimalPostOperation,
                        output: {
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    [headerMapName]: headerMapMember
                                }
                            },
                        }
                    };
                    
                    const httpResponse: HttpResponse = {
                        statusCode: 200,
                        body: 'foo bar buzz',
                        headers: {
                            [`${headerMapName}Foo`]: 'fizz',
                            [`${headerMapName}Bar`]: 'bar'
                        }
                    };
                    const $metadata = extractMetadata(httpResponse);
                    
                    let parsed = await restParser.parse(operation, httpResponse);
                    expect(parsed).toEqual({
                        $metadata,
                        [headerMapName]: {
                            Foo: 'fizz',
                            Bar: 'bar'
                        }
                    });
                });

                it('extracts maps from header values (with locationName)', async () => {
                    const headerMapName = 'testHeader';
                    const headerMapLocationName = <string>headerMapCustomLocationMember.locationName;
                    const operation:OperationModel = {
                        ...minimalPostOperation,
                        output: {
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    [headerMapName]: headerMapCustomLocationMember
                                }
                            },
                        }
                    };
                    
                    const httpResponse: HttpResponse = {
                        statusCode: 200,
                        body: 'foo bar buzz',
                        headers: {
                            [`${headerMapLocationName}Foo`]: 'fizz',
                            [`${headerMapLocationName}Bar`]: 'bar'
                        }
                    };
                    const $metadata = extractMetadata(httpResponse);
    
                    expect(headerMapName).not.toBe(headerMapLocationName);
                    let parsed = await restParser.parse(operation, httpResponse);
                    expect(parsed).toEqual({
                        $metadata,
                        [headerMapName]: {
                            Foo: 'fizz',
                            Bar: 'bar'
                        }
                    });
                });

                it('adds an empty map if no matching headers are found', async () => {
                    const headerMapName = 'testHeader';
                    const headerMapLocationName = <string>headerMapCustomLocationMember.locationName;
                    const operation:OperationModel = {
                        ...minimalPostOperation,
                        output: {
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    [headerMapName]: headerMapCustomLocationMember
                                }
                            },
                        }
                    };
                    
                    const httpResponse: HttpResponse = {
                        statusCode: 200,
                        body: 'foo bar buzz',
                        headers: {}
                    };
                    const $metadata = extractMetadata(httpResponse);
    
                    expect(headerMapName).not.toBe(headerMapLocationName);
                    let parsed = await restParser.parse(operation, httpResponse);
                    expect(parsed).toEqual({
                        $metadata,
                        [headerMapName]: {}
                    });
                });

            });
        });
    });
});
