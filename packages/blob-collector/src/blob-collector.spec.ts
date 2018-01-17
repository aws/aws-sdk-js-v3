import {toUtf8} from '@aws/util-utf8-browser';
import {blobCollector} from './blob-collector';


describe('blobCollector', () => {
    it('returns a Uint8Array from a blob', async () => {
        const blob = new Blob([
            'Foo is the loneliest placeholder that I ever knew.',
            'bar, is just as lonely a placeholder',
            'but the loneliest placeholder is still the placeholder foo.'
        ]);

        const collectedData = await blobCollector(blob);
        expect(collectedData instanceof Uint8Array).toBe(true);
        expect(toUtf8(collectedData)).toBe([
            'Foo is the loneliest placeholder that I ever knew.',
            'bar, is just as lonely a placeholder',
            'but the loneliest placeholder is still the placeholder foo.'
        ].join(''));
    });

    it('returns a Uint8Array containing all data from a blob', async () => {
        const longMessage: number[] = [];
        for (let i = 0; i < 1024 * 1024 * 5; i += 4) {
            longMessage.push(102, 111, 111, 32); // 'foo '
        }
        const blob = new Blob([Uint8Array.from(longMessage)]);

        const collectedData = await blobCollector(blob);
        expect(collectedData.byteLength).toEqual(1024 * 1024 * 5);
        expect(collectedData).toEqual(Uint8Array.from(longMessage));
    });

    it('returns a Uint8Array when stream is empty', async () => {
        const blob = new Blob();
        
        const collectedData = await blobCollector(blob);
        expect(collectedData).toEqual(new Uint8Array(0));
    });
});