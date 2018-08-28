import {
    OperationModel,
    ServiceMetadata
} from '@aws/types';

const minimumMetadata: ServiceMetadata = {
    apiVersion: '2017-09-21',
    endpointPrefix: 'foo',
    protocol: 'rest-xml',
    serviceFullName: 'AWS Foo Service',
    signatureVersion: 'v4',
    uid: 'foo-2017-09-21'
}

export const minimalPostOperation: OperationModel = {
    http: {
        method: 'POST',
        requestUri: '/'
    },
    name: 'minimalPostOperation',
    metadata: minimumMetadata,
    input: {
        shape: {
            type: 'structure',
            required: [],
            members: {}
        }
    },
    output: {
        shape: {
            type: 'structure',
            required: [],
            members: {}
        },
    },
    errors: []
};

export const streamingPostOperation: OperationModel = {
    http: {
        method: 'POST',
        requestUri: '/'
    },
    name: 'minimalPostOperation',
    metadata: minimumMetadata,
    input: {
        shape: {
            type: 'structure',
            required: [],
            members: {
                body: {
                    shape: {
                        type: 'blob'
                    },
                    streaming: true
                }
            },
            payload: 'body'
        }
    },
    output: {
        shape: {
            type: 'structure',
            required: [],
            members: {}
        },
    },
    errors: []
};

export const containsSubresourceGetOperation: OperationModel = {
    http: {
        method: 'POST',
        requestUri: '/operation?sdk'
    },
    name: 'minimalPostOperation',
    metadata: minimumMetadata,
    input: {
        shape: {
            type: 'structure',
            required: [],
            members: {
                Id: {
                    shape: {type: 'string'},
                    location: 'querystring',
                    locationName: 'id-param'
                }
            }
        },
    },
    output: {
        shape: {
            type: 'structure',
            required: [],
            members: {}
        },
    },
    errors: []
};

export const complexGetOperation: OperationModel = {
    http: {
        method: 'GET',
        requestUri: '/{Bucket}/{key+}'
    },
    name: 'complexGetOperation',
    metadata: minimumMetadata,
    input: {
        shape: {
            type: 'structure',
            required: [],
            members: {
                ACL: {
                    shape: {type: 'string'},
                    location: 'header',
                    locationName: 'x-amz-acl'
                },
                Bucket: {
                    shape: {type: 'string'},
                    location: 'uri'
                },
                Key: {
                    shape: {type: 'string'},
                    location: 'uri',
                    locationName: 'key'
                },
                Id: {
                    shape: {type: 'string'},
                    location: 'querystring',
                    locationName: 'id-param'
                },
                Boolean: {
                    shape: {type: 'boolean'},
                    location:'querystring',
                    locationName: 'bool'
                },
                HeaderJSON: {
                    shape: {
                        type: 'string',
                        jsonValue: true
                    },
                    location: 'header',
                    locationName: 'x-amz-json'
                },
                HeaderBlob: {
                    shape: {type: 'blob'},
                    location: 'header',
                    locationName: 'x-amz-blob'
                },
                HeaderBoolean: {
                    shape: {type: 'boolean'},
                    location: 'header',
                    locationName: 'x-amz-bool'
                },
                HeaderFloat: {
                    shape: {type: 'float'},
                    location: 'header',
                    locationName: 'x-amz-float'
                },
                HeaderInteger: {
                    shape: {type: 'integer'},
                    location: 'header'
                },
                HeaderMap: {
                    shape: {
                        type: 'map',
                        key: {shape: {type: 'string'}},
                        value: {
                            shape: {type: 'string'},
                        }
                    },
                    location: 'headers'
                },
                HeaderMapLocation: {
                    shape: {
                        type: 'map',
                        key: {shape: {type: 'string'}},
                        value: {
                            shape: {type: 'string'},
                        }
                    },
                    location: 'headers',
                    locationName: 'x-amz-map-'
                },
                HeaderTimestamp: {
                    shape: {type: 'timestamp'},
                    location: 'header',
                    locationName: 'x-amz-timestamp'
                },
                HeaderTimestampOverride: {
                    shape: {
                        type: 'timestamp',
                        timestampFormat: 'iso8601'
                    },
                    location: 'header',
                    locationName: 'x-amz-timestamp-ovr'
                },
                QueryList: {
                    shape: {
                        type: 'list',
                        member: {
                            shape: {type: 'string'},
                        }
                    },
                    location: 'querystring'
                },
                QueryStringToStringMap: {
                    shape: {
                        type: 'map',
                        key: {shape: {type: 'string'}},
                        value: {
                            shape: {type: 'string'},
                        }
                    },
                    location: 'querystring'
                },
                QueryStringToListOfStringsMap: {
                    shape: {
                        type: 'map',
                        key: {shape: {type: 'string'}},
                        value: {
                            shape: {
                                type: 'list',
                                member: {
                                    shape: {type:'string'},
                                }
                            },
                        }
                    },
                    location: 'querystring'
                }
            }
        },
    },
    output: {
        shape: {
            type: 'structure',
            required: [],
            members: {
                ACL: {
                    shape: {type: 'string'},
                    location: 'header',
                    locationName: 'x-amz-acl'
                },
                Bucket: {
                    shape: {type: 'string'},
                    location: 'uri'
                },
                Key: {
                    shape: {type: 'string'},
                    location: 'uri',
                    locationName: 'key'
                },
                Id: {
                    shape: {type: 'string'},
                    location: 'querystring',
                    locationName: 'id-param'
                },
                Boolean: {
                    shape: {type: 'boolean'},
                    location:'querystring',
                    locationName: 'bool'
                },
                HeaderJSON: {
                    shape: {
                        type: 'string',
                        jsonValue: true
                    },
                    location: 'header',
                    locationName: 'x-amz-json'
                },
                HeaderBlob: {
                    shape: {type: 'blob'},
                    location: 'header',
                    locationName: 'x-amz-blob'
                },
                HeaderBoolean: {
                    shape: {type: 'boolean'},
                    location: 'header',
                    locationName: 'x-amz-bool'
                },
                HeaderFloat: {
                    shape: {type: 'float'},
                    location: 'header',
                    locationName: 'x-amz-float'
                },
                HeaderInteger: {
                    shape: {type: 'integer'},
                    location: 'header'
                },
                HeaderMap: {
                    shape: {
                        type: 'map',
                        key: {shape: {type: 'string'}},
                        value: {
                            shape: {type: 'string'},
                        }
                    },
                    location: 'headers'
                },
                HeaderMapLocation: {
                    shape: {
                        type: 'map',
                        key: {shape: {type: 'string'}},
                        value: {
                            shape: {type: 'string'},
                        }
                    },
                    location: 'headers',
                    locationName: 'x-amz-map-'
                },
                HeaderTimestamp: {
                    shape: {type: 'timestamp'},
                    location: 'header',
                    locationName: 'x-amz-timestamp'
                },
                HeaderTimestampOverride: {
                    shape: {
                        type: 'timestamp',
                        timestampFormat: 'iso8601'
                    },
                    location: 'header',
                    locationName: 'x-amz-timestamp-ovr'
                },
                QueryList: {
                    shape: {
                        type: 'list',
                        member: {
                            shape: {type: 'string'},
                        }
                    },
                    location: 'querystring'
                },
                QueryStringToStringMap: {
                    shape: {
                        type: 'map',
                        key: {shape: {type: 'string'}},
                        value: {
                            shape: {type: 'string'},
                        }
                    },
                    location: 'querystring'
                },
                QueryStringToListOfStringsMap: {
                    shape: {
                        type: 'map',
                        key: {shape: {type: 'string'}},
                        value: {
                            shape: {
                                type: 'list',
                                member: {
                                    shape: {type:'string'},
                                }
                            },
                        }
                    },
                    location: 'querystring'
                }
            }
        },
    },
    errors: []
};

export const getSimpleHeadersOperation: OperationModel = {
    metadata: minimumMetadata,
    name: 'GetSimpleHeadersOperation',
    http: {
        method: 'GET',
        requestUri: '/'
    },
    input: {
        shape: {
            type: 'structure',
            required: [],
            members: {}
        },
    },
    output: {
        shape: {
            type: 'structure',
            required: [],
            members: {
                ContentType: {
                    shape: {type: 'string'},
                    location: 'header',
                    locationName: 'Content-Type'
                },
                Date: {
                    shape: {type: 'timestamp'},
                    location: 'header'
                }
            }
        },
    },
    errors:[]
}