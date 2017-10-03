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
        }
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
                    name: 'Id',
                    location: 'querystring',
                    locationName: 'id-param'
                }
            }
        }
    },
    output: {
        shape: {
            type: 'structure',
            required: [],
            members: {}
        }
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
                    name: 'ACL',
                    location: 'header',
                    locationName: 'x-amz-acl'
                },
                Bucket: {
                    shape: {type: 'string'},
                    name: 'Bucket',
                    location: 'uri'
                },
                Key: {
                    shape: {type: 'string'},
                    name: 'Key',
                    location: 'uri',
                    locationName: 'key'
                },
                Id: {
                    shape: {type: 'string'},
                    name: 'Id',
                    location: 'querystring',
                    locationName: 'id-param'
                },
                Boolean: {
                    shape: {type: 'boolean'},
                    name: 'Boolean',
                    location:'querystring',
                    locationName: 'bool'
                },
                HeaderJSON: {
                    shape: {
                        type: 'string',
                        jsonValue: true
                    },
                    name: 'HeaderJSON',
                    location: 'header',
                    locationName: 'x-amz-json'
                },
                HeaderBlob: {
                    shape: {type: 'blob'},
                    name: 'HeaderBlob',
                    location: 'header',
                    locationName: 'x-amz-blob'
                },
                HeaderBoolean: {
                    shape: {type: 'boolean'},
                    name: 'HeaderBoolean',
                    location: 'header',
                    locationName: 'x-amz-bool'
                },
                HeaderFloat: {
                    shape: {type: 'float'},
                    name: 'HeaderFloat',
                    location: 'header',
                    locationName: 'x-amz-float'
                },
                HeaderInteger: {
                    shape: {type: 'integer'},
                    name: 'HeaderInteger',
                    location: 'header'
                },
                HeaderMap: {
                    shape: {
                        type: 'map',
                        key: {shape: {type: 'string'}},
                        value: {shape: {type: 'string'}}
                    },
                    name: 'HeaderMap',
                    location: 'headers'
                },
                HeaderMapLocation: {
                    shape: {
                        type: 'map',
                        key: {shape: {type: 'string'}},
                        value: {shape: {type: 'string'}}
                    },
                    name: 'HeaderMap',
                    location: 'headers',
                    locationName: 'x-amz-map-'
                },
                HeaderTimestamp: {
                    shape: {type: 'timestamp'},
                    name: 'HeaderTimestamp',
                    location: 'header',
                    locationName: 'x-amz-timestamp'
                },
                HeaderTimestampOverride: {
                    shape: {
                        type: 'timestamp',
                        timestampFormat: 'iso8601'
                    },
                    name: 'HeaderTimestampOverride',
                    location: 'header',
                    locationName: 'x-amz-timestamp-ovr'
                },
                QueryList: {
                    shape: {
                        type: 'list',
                        member: {
                            shape: {type: 'string'}
                        }
                    },
                    name: 'QueryList',
                    location: 'querystring'
                },
                QueryStringToStringMap: {
                    shape: {
                        type: 'map',
                        key: {shape: {type: 'string'}},
                        value: {shape: {type: 'string'}}
                    },
                    name: 'QueryStringToStringMap',
                    location: 'querystring'
                },
                QueryStringToListOfStringsMap: {
                    shape: {
                        type: 'map',
                        key: {shape: {type: 'string'}},
                        value: {shape: {
                            type: 'list',
                            member: {
                                shape: {type:'string'}
                            }
                        }}
                    },
                    name: 'QueryStringToListOfStringsMap',
                    location: 'querystring'
                }
                
            }
        }
    },
    output: {
        shape: {
            type: 'structure',
            required: [],
            members: {}
        }
    },
    errors: []
};