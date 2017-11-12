import {
    EndpointRules,
    Partition
} from './endpoint-rules';

export const fooPartition: Partition = {
    defaults: {
        hostname: '{service}.{region}.{dnsSuffix}',
        protocols: ['https'],
        signatureVersions: ['v4'],
    },
    dnsSuffix: 'foo.com',
    partition: 'foo',
    regionRegex: '^(foo)\\-\\w+\\-\\d+$',
    regions: {
        'foo-north-1': {
            description: 'The Foo North'
        },
        'foo-north-2': {
            description: 'Foo North: The Sequel'
        }
    },
    services: {
        bar: {
            endpoints: {
                'foo-north-1': {}
            }
        },
        baz: {
            endpoints: {
                'aws-global': {
                    credentialScope: {
                        region: 'foo-north-1'
                    },
                    hostname: 'baz.foo.com'
                }
            },
            isRegionalized: false,
            partitionEndpoint: 'aws-global'
        },
        buzz: {
            endpoints: {
                'foo-north-1': {},
                'foo-north-2': {
                    signatureVersions: ['v2']
                },
                
            },
            defaults: {
                sslCommonName: 'ssl-buzz',
                signatureVersions: ['v2', 's3']
            }
        }
    }
};

export const fizzPartition: Partition = {
    defaults: {
        protocols: ['https'],
        signatureVersions: ['v4']
    },
    dnsSuffix: 'fizz.com',
    partition: 'fizz',
    regionRegex: '^(fizz)\\-\\w+\\-\\d+$',
    regions: {
        'fizz-north-1': {
            description: 'The Fizzy North'
        },
        'fizz-north-2': {
            description: 'Fizzy North: The Sequel'
        }
    },
    services: {
        bar: {
            endpoints: {
                'fizz-north-1': {
                    hostname: 'bar.fizz-north-1.fizz.com'
                }
            }
        },
        baz: {
            endpoints: {
                'aws-global': {
                    credentialScope: {
                        region: 'fizz-north-1'
                    },
                    hostname: 'baz.fizz.com'
                }
            },
            isRegionalized: false,
            partitionEndpoint: 'aws-global'
        },
        buzz: {
            endpoints: {
                'fizz-north-2': {}
            },
            defaults: {
                protocols: ['http'],
                signatureVersions: ['v2'],
                hostname: '{region}-{service}.{dnsSuffix}'
            }
        },
        blarg: {
            endpoints: {
                'fizz-north-1': {}
            }
        }
    }
};