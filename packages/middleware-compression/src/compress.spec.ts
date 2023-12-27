import { compress } from './compress';
import * as zlib from 'zlib';
import { promisify } from 'util';

jest.mock('zlib', () => ({
  gzip: jest.fn((buffer, options, callback) => callback(null, 'compressed data')),
}));

jest.mock('util', () => ({
  promisify: jest.fn(),
}));

describe('compress', () => {
  const mockZlibGzip = zlib.gzip as jest.MockedFunction<typeof zlib.gzip>;
  const mockZlibDeflate = zlib.deflate as jest.MockedFunction<typeof zlib.deflate>;
  const mockPromisify = promisify as jest.MockedFunction<typeof promisify>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should compress data with gzip', async () => {
    const data = 'test data';
    const compressedData = Buffer.from('compressed data');
    mockZlibGzip.mockImplementation((buffer, callback) => callback(null, compressedData));
    mockPromisify.mockImplementation(() => Promise.resolve(compressedData));

    const result = await compress(data, 'gzip');

    expect(mockZlibGzip).toHaveBeenCalledWith(Buffer.from(data), expect.any(Function));
    expect(result).toEqual(compressedData);
  });

  it('should throw an error for unsupported compression algorithm', async () => {
    const data = 'test data';

    await expect(compress(data, 'unsupported' as any)).rejects.toThrow('Unsupported compression algorithm');
  });

  it('should throw an error if body cannot be buffered', async () => {
    const data = {};

    await expect(compress(data as any, 'gzip')).rejects.toThrow('Body cannot be buffered');
  });

  it('should throw an error if compression fails', async () => {
    const data = 'test data';
    const error = new Error('Compression failed');
    mockZlibGzip.mockImplementation((buffer, callback) => callback(error));
    mockPromisify.mockImplementation(() => Promise.reject(error));

    await expect(compress(data, 'gzip')).rejects.toThrow('Compression failed');
  });
});