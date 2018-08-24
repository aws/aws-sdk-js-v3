import {EndpointCache} from './index';
import * as Cache from './utils/LRU';

const mockLRUGet = jest.fn();
const mockLRUPut = jest.fn();
const mockLRURemove = jest.fn();
const size = jest.fn();

jest.spyOn(Cache, 'LRUCache').mockImplementation(((size) => ({
  get: mockLRUGet,
  put: mockLRUPut,
  remove: mockLRURemove,
  size: size,
})));

describe('EndpointCache', () => {
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
    jest.spyOn(Date, 'now').mockClear();
  });

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
})