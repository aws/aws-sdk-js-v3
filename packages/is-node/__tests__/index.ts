import {isNode} from '../';

describe('isNode', () => {
    it('should return true when running in a Node.JS environment', () => {
        // jest only runs in node, so this will always be true
        expect(isNode()).toBe(true);
    });

    it('should return false when the global process object does not exist', () => {
        const process = global.process;
        try {
            delete global.process;
            expect(isNode()).toBe(false);
        } finally {
            global.process = process;
        }
    });
});
