import { createFake } from './';

describe('createFake', () => {
    const mathDotRandom = Math.random;

    beforeEach(() => {
        Math.random = jest.fn(() => 0);
    });

    afterEach(() => {
        Math.random = mathDotRandom;
    });

    it('should throw an error if an unrecognized type is provided', () => {
        expect(() => createFake({type: 'byte'} as any)).toThrow();
    });

    describe('blobs', () => {
        it('should generate a Uint8Array', () => {
            expect(
                createFake({type: 'blob', min: 4, max: 4})
            ).toEqual(Uint8Array.from([0, 0, 0, 0]));

            expect((Math.random as any).mock.calls.length).toBeGreaterThan(0);
        });
    });

    describe('booleans', () => {
        it('should generate a boolean', () => {
            expect(createFake({type: 'boolean'})).toBe(false);

            expect((Math.random as any).mock.calls.length).toBeGreaterThan(0);
        });
    });

    describe('floats', () => {
        it('should generate a float', () => {
            expect(createFake({type: 'float', min: 3.5, max: 3.5})).toBe(3.5);

            expect((Math.random as any).mock.calls.length).toBeGreaterThan(0);
        });
    });

    describe('integers', () => {
        it('should generate an integer', () => {
            expect(createFake({type: 'float', min: 3, max: 3})).toBe(3);

            expect((Math.random as any).mock.calls.length).toBeGreaterThan(0);
        });
    });

    describe('lists', () => {
        it('should generate a strongly-typed list', () => {
            expect(createFake({
                type: 'list',
                member: {shape: {type: 'float', min: 3, max: 3}},
                min: 4,
                max: 4,
            })).toEqual([3, 3, 3, 3]);

            expect((Math.random as any).mock.calls.length).toBeGreaterThan(0);
        });
    });

    describe('maps', () => {
        it('should generate a strongly-typed map', () => {
            expect(createFake({
                type: 'map',
                key: {shape: {type: 'integer', min: 3, max: 3}},
                value: {shape: {type: 'integer', min: 2, max: 2}},
                min: 1,
                max: 1,
            })).toEqual(new Map([[3, 2]]));

            expect((Math.random as any).mock.calls.length).toBeGreaterThan(0);
        });
    });

    describe('strings', () => {
        it('should generate a string', () => {
            expect(createFake({type: 'string', pattern: 'foo\\d{1}bar'}))
                .toBe('foo0bar');

            expect((Math.random as any).mock.calls.length).toBeGreaterThan(0);
        });
    });

    describe('structures', () => {
        it('should generate a strongly-typed structure', () => {
            expect(createFake({
                type: 'structure',
                required: ['foo'],
                members: {
                    foo: {shape: {type: 'integer', min: 3, max: 3}},
                    bar: {shape: {type: 'integer', min: 2, max: 2}},
                },
            })).toEqual({foo: 3, bar: 2});

            expect((Math.random as any).mock.calls.length).toBeGreaterThan(0);
        });
    });

    describe('timestamps', () => {
        it('should generate a Date', () => {
            expect(createFake({type: 'timestamp'})).toEqual(new Date(0));

            expect((Math.random as any).mock.calls.length).toBeGreaterThan(0);
        });
    });
});
