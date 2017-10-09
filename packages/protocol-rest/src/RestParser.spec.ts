import {extractMetadata} from '@aws/response-metadata-extractor';
import {
    HttpResponse,
    OperationModel,
    StreamCollector
} from '@aws/types';
import {RestParser} from './RestParser';
import {
    bodyBlobMember,
    bodyBlobStreamingMember,
    bodyBooleanMember,
    bodyFloatMember,
    bodyIntegerMember,
    bodyListMember,
    bodyStringMember,
    bodyStructureMember,
    bodyTimestampMember,
    headerJsonMember,
    headerMapMember,
    headerMapCustomLocationMember
} from './shapes.fixture';
import {
    complexGetOperation,
    getSimpleHeadersOperation,
    minimalPostOperation
} from './operations.fixture';


describe('RestParser', () => {
    const bodyParser = {
        parse: jest.fn(() => { return {}; }) 
    };
    const collectedStream = new Uint8Array([0xde, 0xad, 0xbe, 0xef]);
    const streamCollector = jest.fn(() => Promise.resolve(collectedStream));

    const restParser = new RestParser(
        bodyParser,
        streamCollector,
        jest.fn(),
        jest.fn()
    );

    describe('#parse', () => {
        beforeEach(() => {
            bodyParser.parse.mockClear();
            streamCollector.mockClear();
        });

        it('handles errors', async () => {
            const httpResponse: HttpResponse = {
                statusCode: 400,
                body: '',
                headers: {'Content-Type': 'text/plain'}
            };

            try {
                await restParser.parse(minimalPostOperation, httpResponse);
                // should never be called
                expect(false).toBe(true);
            } catch (err) {
                expect(err).toBeDefined();
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
                'should pass the operation output and HTTP response body to the body parser',
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
                    jest.fn()
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
                    jest.fn()
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
                        jest.fn()
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
                                            name: 'bytes'
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
                            jest.fn()
                        );
    
                        const parsed = await restParser.parse(operation, {
                            ...httpResponse,
                            body: streamBody
                        });
    
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
                                            name: 'bytes'
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
                            jest.fn()
                        );
    
                        const parsed = await restParser.parse(operation, {
                            ...httpResponse,
                            body: streamBody
                        });
    
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
                                            name: 'data'
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
                            jest.fn()
                        );
    
                        const parsed = await restParser.parse(operation, {
                            ...httpResponse,
                            body: streamBody
                        });
    
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
                                            name: 'items'
                                        }
                                    },
                                    payload: 'items'
                                }
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
                            jest.fn()
                        );
    
                        const parsed = await restParser.parse(operation, {
                            ...httpResponse,
                            body: streamBody
                        });
    
                        expect(streamCollector.mock.calls.length).toBe(1);
                        expect(utf8Encoder.mock.calls.length).toBe(1);
                        expect(bodyParser.parse.mock.calls.length).toBe(1);

                        expect(parsed).toEqual({
                            $metadata,
                            items: []
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
                                            name: 'bool'
                                        }
                                    },
                                    payload: 'bool'
                                }
                            }
                        };

                        const utf8Encoder = jest.fn(() => 'a string');
                        const restParser = new RestParser(
                            bodyParser,
                            streamCollector,
                            utf8Encoder,
                            jest.fn()
                        );
    
                        let parsed = await restParser.parse(operation, {
                            ...httpResponse,
                            body: 'false'
                        });
    
    
                        expect(bodyParser.parse.mock.calls.length).toBe(0);
                        expect(parsed).toEqual({
                            $metadata,
                            bool: false
                        });

                        parsed = await restParser.parse(operation, {
                            ...httpResponse,
                            body: 'true'
                        });
    
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
                                            name: 'float'
                                        }
                                    },
                                    payload: 'float'
                                }
                            }
                        };

                        const utf8Encoder = jest.fn(() => 'a string');
                        const restParser = new RestParser(
                            bodyParser,
                            streamCollector,
                            utf8Encoder,
                            jest.fn()
                        );
    
                        let parsed = await restParser.parse(operation, {
                            ...httpResponse,
                            body: '3.14'
                        });
    
    
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
                                            name: 'integer'
                                        }
                                    },
                                    payload: 'integer'
                                }
                            }
                        };

                        const utf8Encoder = jest.fn(() => 'a string');
                        const restParser = new RestParser(
                            bodyParser,
                            streamCollector,
                            utf8Encoder,
                            jest.fn()
                        );
    
                        let parsed = await restParser.parse(operation, {
                            ...httpResponse,
                            body: '3'
                        });
    
    
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
                                            name: 'string'
                                        }
                                    },
                                    payload: 'string'
                                }
                            }
                        };

                        const utf8Encoder = jest.fn(() => 'a string');
                        const restParser = new RestParser(
                            bodyParser,
                            streamCollector,
                            utf8Encoder,
                            jest.fn()
                        );
    
                        let parsed = await restParser.parse(operation, httpResponse);
    
    
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
                                            name: 'timestamp'
                                        }
                                    },
                                    payload: 'timestamp'
                                }
                            }
                        };

                        const utf8Encoder = jest.fn(() => 'a string');
                        const restParser = new RestParser(
                            bodyParser,
                            streamCollector,
                            utf8Encoder,
                            jest.fn()
                        );
    
                        let parsed = await restParser.parse(operation, {
                            ...httpResponse,
                            body: '1970-01-01T00:00:00Z'
                        });
    
    
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
                                    name: 'status',
                                    location: 'statusCode'
                                }
                            }
                        }
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
                    jest.fn()
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
                    const headerMapName = <string>headerMapMember.name;
                    const operation:OperationModel = {
                        ...minimalPostOperation,
                        output: {
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    bool: {
                                        ...bodyBooleanMember,
                                        name: 'bool',
                                        location: 'header',
                                        locationName: 'x-amz-bool'
                                    }
                                }
                            }
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
                    const headerMapName = <string>headerMapMember.name;
                    const operation:OperationModel = {
                        ...minimalPostOperation,
                        output: {
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    float: {
                                        ...bodyFloatMember,
                                        name: 'float',
                                        location: 'header',
                                        locationName: 'x-amz-float'
                                    }
                                }
                            }
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
                    const headerMapName = <string>headerMapMember.name;
                    const operation:OperationModel = {
                        ...minimalPostOperation,
                        output: {
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    int: {
                                        ...bodyIntegerMember,
                                        name: 'int',
                                        location: 'header',
                                        locationName: 'x-amz-int'
                                    }
                                }
                            }
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
                    const headerMapName = <string>headerMapMember.name;
                    const operation:OperationModel = {
                        ...minimalPostOperation,
                        output: {
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    headerJSON: headerJsonMember
                                }
                            }
                        }
                    };

                    const utf8Encoder = jest.fn(() => '{"data":{"bool":true,"float":3.14,"int":3,"string":"test"}}');
                    const restParser = new RestParser(
                        bodyParser,
                        jest.fn(),
                        utf8Encoder,
                        jest.fn()
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
                    const headerMapName = <string>headerMapMember.name;
                    const operation:OperationModel = {
                        ...minimalPostOperation,
                        output: {
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    timestamp: {
                                        ...bodyTimestampMember,
                                        name: 'timestamp',
                                        location: 'header',
                                        locationName: 'x-amz-timestamp'
                                    }
                                }
                            }
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
                    const headerMapName = <string>headerMapMember.name;
                    const operation:OperationModel = {
                        ...minimalPostOperation,
                        output: {
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    [headerMapName]: headerMapMember
                                }
                            }
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
                    const headerMapName = <string>headerMapCustomLocationMember.name;
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
                            }
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
                    const headerMapName = <string>headerMapCustomLocationMember.name;
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
                            }
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