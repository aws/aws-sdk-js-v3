import {
    blobCollector,
    readBlob
} from './index';

describe('blob-collector package', () => {
    it('exports blobCollector function', () => {
        expect(typeof blobCollector).toBe('function');
    });

    it('exports readBlob function', () => {
        expect(typeof readBlob).toBe('function');
    });
});