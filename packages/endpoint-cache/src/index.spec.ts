import {EndpointCache, endpointCache} from './index';
import * as Cache from './utils/LRU';

const mockLRUGet = jest.fn();
const mockLRUPut = jest.fn();
const mockLRURemove = jest.fn();
const empty = jest.fn();

const mockCacheObj = {
    get: mockLRUGet,
    put: mockLRUPut,
    remove: mockLRURemove,
    empty: empty,
    length: 0
}

const spy = jest.spyOn(Cache, 'LRUCache').mockImplementation(((size) => mockCacheObj));

describe('EndpointCache', () => {
    afterEach(() => {
        spy.mockClear();
        mockLRUGet.mockClear();
        mockLRUPut.mockClear();
        mockLRURemove.mockClear();
    });

    test('return cache size', () => {
        const endpointCache = new EndpointCache();
        const originLen = mockCacheObj.length;
        mockCacheObj.length = 123;
        expect(endpointCache.size).toBe(123);
        mockCacheObj.length = originLen;
    })

    test('put endpoints with right keys', () => {
        jest.spyOn(Date, 'now').mockImplementationOnce(() => 1000000000);
        const endpointCache = new EndpointCache();
        endpointCache.put(
            {operation: 'putObject', accessKeyId: 'akid', serviceId: 's3'},
            [{Address: 'mydomain.dynamodb.us-east-1.amazonaws.com', CachePeriodInMinutes: 5}]
        );
          expect(mockLRUPut).toBeCalledWith(
            'akid putObject s3',
            [{"Address": "mydomain.dynamodb.us-east-1.amazonaws.com", "Expire": 1000000300}]
        );
        endpointCache.put(
            {operation: 'putObject', accessKeyId: 'akid', serviceId: 's3', Identifier: undefined},
            [{Address: 'mydomain.dynamodb.us-east-1.amazonaws.com', CachePeriodInMinutes: 5}]
        );
          expect(mockLRUPut).toBeCalledWith(
            'akid putObject s3',
            [{"Address": "mydomain.dynamodb.us-east-1.amazonaws.com", "Expire": 1000000300}]
        );
        jest.spyOn(Date, 'now').mockClear();
    });

    test('correctly get endpoint records if not expired', () => {
        const mockRecords = [
            {Address: 'mydomain.dynamodb.us-east-1.amazonaws.com', Expire: '1000000001'},
            {Address: 'mydomain.dynamodb.us-west-1.amazonaws.com', Expire: '1000000002'},
            {Address: 'mydomain.dynamodb.us-west-2.amazonaws.com', Expire: '1000000003'},
        ];
        jest.spyOn(Date, 'now').mockImplementation(() => 1000000000);
        mockLRUGet.mockImplementationOnce((key) => {
            if (key !== 'akid putObject s3') {
                throw new Error('Invalid call to mock function');
            }
            return mockRecords;
        })
        const endpointCache = new EndpointCache();
        const records = endpointCache.get({
            operation: 'putObject',
            accessKeyId: 'akid',
            serviceId: 's3'
        });
        expect(records).toEqual(mockRecords);
        jest.spyOn(Date, 'now').mockClear();
    })

    test('invalidate endpoint records if one of the endpoint expires', () => {
        jest.spyOn(Date, 'now').mockImplementation(() => 1000000000);
        mockLRUGet.mockImplementationOnce((key) => {
            if (key !== 'akid putObject s3') {
                throw new Error('Invalid call to mock function');
            }
            return [
                {Address: 'mydomain.dynamodb.us-east-1.amazonaws.com', Expire: '999999999'},
                {Address: 'mydomain.dynamodb.us-west-1.amazonaws.com', Expire: '1000000001'},
                {Address: 'mydomain.dynamodb.us-west-2.amazonaws.com', Expire: '1000000001'},
            ]
        })
        const endpointCache = new EndpointCache();
        expect(endpointCache.get({
            operation: 'putObject',
            accessKeyId: 'akid',
            serviceId: 's3'
        })).toBeUndefined;
        expect(mockLRURemove).toHaveBeenCalledTimes(1);
        jest.spyOn(Date, 'now').mockClear();
    });

    test('remove all the contents', () => {
        const endpointCache = new EndpointCache(5);
        endpointCache.empty();
        expect(empty).toBeCalled();
        expect(empty.mock.calls.length).toBe(1);
    });

    test('remove single record', () => {
        const endpointCache = new EndpointCache();
        endpointCache.remove({
            operation: 'putObject',
            accessKeyId: 'akid',
            serviceId: 's3'
        });
        expect(mockLRURemove).toBeCalled();
        expect(mockLRURemove.mock.calls.length).toBe(1);
    })
})