import {RestSerializer} from './RestSerializer';
import {
    HttpEndpoint,
    OperationModel
} from '@aws/types';

import {
    complexGetOperation,
    containsSubresourceGetOperation,
    minimalPostOperation
} from './operations.fixture';

describe('RestMarshaller', () => {
    const endpoint: HttpEndpoint = {
        protocol: 'https:',
        hostname: 'foo.region.amazonaws.com',
        path: '/path'
    }
    const bodySerializer = {
        build: jest.fn(() => 'serialized')
    };

    const restMarshaller = new RestSerializer(
        endpoint,
        bodySerializer,
        jest.fn(),
        jest.fn()
    );
    describe('#serialize', () => {
        it('should use the injected body serializer to build the HTTP request body', () => {
            const input = {foo: 'bar'};
            expect(restMarshaller.serialize(minimalPostOperation, input).body).toBe('serialized');
    
            expect(bodySerializer.build.mock.calls.length).toBe(1);
            expect(bodySerializer.build.mock.calls[0]).toEqual([
                minimalPostOperation,
                input
            ]);
        });
    
        it('should use the operation HTTP trait to build the request', () => {
            const serialized = restMarshaller.serialize(minimalPostOperation, {foo: 'bar'});
            
            expect(serialized.method).toBe(minimalPostOperation.http.method);
            expect(serialized.path).toBe('/path/');
        });
    
        describe('uri', () => {
            it('populates operation URI placeholders', () => {
                const toSerialize = {
                    Bucket: 'bucket',
                    Key: 'key/to/object'
                };

                const serialized = restMarshaller.serialize(complexGetOperation, toSerialize);
                expect(serialized.path).toBe('/path/bucket/key/to/object');
            });

            it('populates operation URI placeholders with empty strings', () => {
                const toSerialize = {
                    Bucket: 'bucket',
                    Key: ''
                };

                const serialized = restMarshaller.serialize(complexGetOperation, toSerialize);
                expect(serialized.path).toBe('/path/bucket/');
            });

            it('uri escapes params in path', () => {
                const toSerialize = {
                    Bucket: 'bad/path',
                    Key: 'something silly!',
                    Id: 'i/d',
                    QueryList: ['a/c', 'b~d'],
                };

                const serialized = restMarshaller.serialize(complexGetOperation, toSerialize);
                expect(serialized.path).toBe(
                    '/path/bad%2Fpath/something%20silly%21?QueryList=a%2Fc&QueryList=b~d&id-param=i%2Fd'
                );
            });

            
        });

        describe('querystring', () => {
            it('populates operation querystring parameters', () => {
                const toSerialize = {
                    Bucket: '',
                    Key: '',
                    Id: 'test'
                };

                const serialized = restMarshaller.serialize(complexGetOperation, toSerialize);
                expect(serialized.path).toBe('/path//?id-param=test');
            });

            it('populates operation querystring list parameters', () => {
                const toSerialize = {
                    Bucket: 'bucket',
                    Key: 'key',
                    QueryList: ['abc', 'bcd', 'cde']
                };

                const serialized = restMarshaller.serialize(complexGetOperation, toSerialize);
                expect(serialized.path).toBe('/path/bucket/key?QueryList=abc&QueryList=bcd&QueryList=cde');
            });

            it('populates multiple operation querystring parameters', () => {
                const toSerialize = {
                    Bucket: 'bucket',
                    Key: 'key',
                    Id: 'test',
                    QueryList: ['abc', 'bcd', 'cde'],
                };

                const serialized = restMarshaller.serialize(complexGetOperation, toSerialize);
                expect(serialized.path).toBe(
                    '/path/bucket/key?QueryList=abc&QueryList=bcd&QueryList=cde&id-param=test'
                );
            });


            it('supports querystring string to string maps', () => {
                const toSerialize = {
                    Bucket: 'bucket',
                    Key: 'key',
                    QueryStringToStringMap: {
                        'foo': 'bar',
                        'fizz': 'buzz'
                    }
                };

                const serialized = restMarshaller.serialize(complexGetOperation, toSerialize);
                expect(serialized.path).toBe(
                    '/path/bucket/key?fizz=buzz&foo=bar'
                );
            });

            it('supports querystring string to list of string maps', () => {
                const toSerialize = {
                    Bucket: 'bucket',
                    Key: 'key',
                    QueryStringToListOfStringsMap: {
                        'foo': ['a', 'b'],
                        'fizz': ['c', 'd']
                    }
                };

                const serialized = restMarshaller.serialize(complexGetOperation, toSerialize);
                expect(serialized.path).toBe(
                    '/path/bucket/key?fizz=c&fizz=d&foo=a&foo=b'
                );
            });

            it('supports querystring boolean parameters', () => {
                const toSerialize = {
                    Bucket: 'bucket',
                    Key: 'key',
                    Boolean: true
                };

                let serialized = restMarshaller.serialize(complexGetOperation, toSerialize);
                expect(serialized.path).toBe(
                    '/path/bucket/key?bool=true'
                );
                toSerialize.Boolean = false;
                serialized = restMarshaller.serialize(complexGetOperation, toSerialize);
                expect(serialized.path).toBe(
                    '/path/bucket/key?bool=false'
                );
            });

            it(`won't clash with existing items in querystring`, () => {
                const toSerialize = {
                    Id: 'test'
                };

                const serialized = restMarshaller.serialize(containsSubresourceGetOperation, toSerialize);
                expect(serialized.path).toBe('/path/operation?sdk&id-param=test');
            });
        });

        describe('headers', () => {
            it('can be populated', () => {
                const toSerialize = {
                    Bucket: 'bucket',
                    Key: 'key',
                    ACL: 'public-read'
                };

                const serialized = restMarshaller.serialize(complexGetOperation, toSerialize);
                expect(serialized.headers['x-amz-acl']).toBe('public-read');
            });

            it('populates headers from integers', () => {
                const toSerialize = {
                    Bucket: 'bucket',
                    Key: 'key',
                    HeaderInteger: 123
                };

                const serialized = restMarshaller.serialize(complexGetOperation, toSerialize);
                expect(serialized.headers['HeaderInteger']).toBe('123');
            });

            it('populates headers from floats', () => {
                const toSerialize = {
                    Bucket: 'bucket',
                    Key: 'key',
                    HeaderFloat: 123.123
                };

                const serialized = restMarshaller.serialize(complexGetOperation, toSerialize);
                expect(serialized.headers['x-amz-float']).toBe('123.123');
            });

            it('populates headers from booleans', () => {
                const toSerialize = {
                    Bucket: 'bucket',
                    Key: 'key',
                    HeaderBoolean: true
                };

                let serialized = restMarshaller.serialize(complexGetOperation, toSerialize);
                expect(serialized.headers['x-amz-bool']).toBe('true');
                toSerialize.HeaderBoolean = false;
                serialized = restMarshaller.serialize(complexGetOperation, toSerialize);
                expect(serialized.headers['x-amz-bool']).toBe('false');
            });

            it('populates headers from timestamps', () => {
                const toSerialize = {
                    Bucket: 'bucket',
                    Key: 'key',
                    HeaderTimestamp: new Date(0)
                };

                const serialized = restMarshaller.serialize(complexGetOperation, toSerialize);
                expect(serialized.headers['x-amz-timestamp']).toBe('Thu, 01 Jan 1970 00:00:00 GMT');
            });

            it('always populates headers from timestamps using rfc822', () => {
                const toSerialize = {
                    Bucket: 'bucket',
                    Key: 'key',
                    HeaderTimestampOverride: new Date(0)
                };

                const serialized = restMarshaller.serialize(complexGetOperation, toSerialize);
                expect(serialized.headers['x-amz-timestamp-ovr']).toBe('Thu, 01 Jan 1970 00:00:00 GMT');
            });

            it('populates blobs', () => {
                const base64Encoder = jest.fn(() => 'base64');
                const utf8Decoder = jest.fn();
                const restMarshaller = new RestSerializer(
                    endpoint,
                    bodySerializer,
                    base64Encoder,
                    utf8Decoder
                );
                const toSerialize = {
                    Bucket: 'bucket',
                    Key: 'key',
                    HeaderBlob: new Uint8Array(1024).fill(1)
                };

                const serialized = restMarshaller.serialize(complexGetOperation, toSerialize);
                expect(base64Encoder.mock.calls.length).toBe(1);
                expect(utf8Decoder.mock.calls.length).toBe(0);
                expect(serialized.headers['x-amz-blob']).toBe('base64');
            });

            it('populates blobs from string', () => {
                const base64Encoder = jest.fn(() => 'base64');
                const utf8Decoder = jest.fn();
                const restMarshaller = new RestSerializer(
                    endpoint,
                    bodySerializer,
                    base64Encoder,
                    utf8Decoder
                );
                const toSerialize = {
                    Bucket: 'bucket',
                    Key: 'key',
                    HeaderBlob: 'I want to be a blob'
                };

                const serialized = restMarshaller.serialize(complexGetOperation, toSerialize);
                expect(base64Encoder.mock.calls.length).toBe(1);
                expect(utf8Decoder.mock.calls.length).toBe(1);
                expect(serialized.headers['x-amz-blob']).toBe('base64');
            });


            it('uses default member name if locationName not present', () => {
                const toSerialize = {
                    Bucket: 'bucket',
                    Key: 'key',
                    HeaderInteger: 123
                };

                const serialized = restMarshaller.serialize(complexGetOperation, toSerialize);
                expect(Object.keys(serialized.headers).length).toBe(1);
                expect(serialized.headers['HeaderInteger']).toBe('123');
            });

            it('populate maps (without locationName)', () => {
                const toSerialize = {
                    Bucket: 'bucket',
                    Key: 'key',
                    HeaderMap: {
                        'foo': 'bar',
                        'fizz': 'buzz'
                    }
                };

                const serialized = restMarshaller.serialize(complexGetOperation, toSerialize);
                expect(serialized.headers['HeaderMapfoo']).toBe('bar');
                expect(serialized.headers['HeaderMapfizz']).toBe('buzz');
            });

            it('populate maps (with locationName)', () => {
                const toSerialize = {
                    Bucket: 'bucket',
                    Key: 'key',
                    HeaderMapLocation: {
                        'foo': 'bar',
                        'fizz': 'buzz'
                    }
                };

                const serialized = restMarshaller.serialize(complexGetOperation, toSerialize);
                expect(serialized.headers['x-amz-map-foo']).toBe('bar');
                expect(serialized.headers['x-amz-map-fizz']).toBe('buzz');
            });

            it('populates strings modeled as JSON', () => {
                const base64Encoder = jest.fn(() => 'base64');
                const utf8Decoder = jest.fn();
                const restMarshaller = new RestSerializer(
                    endpoint,
                    bodySerializer,
                    base64Encoder,
                    utf8Decoder
                );
                const toSerialize = {
                    Bucket: 'bucket',
                    Key: 'key',
                    HeaderJSON: {
                        foo: 'foo',
                        bar: 'bar'
                    }
                };

                const serialized = restMarshaller.serialize(complexGetOperation, toSerialize);
                expect(base64Encoder.mock.calls.length).toBe(1);
                expect(utf8Decoder.mock.calls.length).toBe(1);
                expect(serialized.headers['x-amz-json']).toBe('base64');
            });
        });
    });
});