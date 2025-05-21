import { describe, expect,it } from 'vitest';

import {AttributePath, PathElement} from "./AttributePath";

describe('AttributePath', () => {
    it('should convert a string path to a list of elements', () => {
        expect(
            new AttributePath('foo.bar.baz[3][4][2].fizz[0].buzz[1]').elements
        ).toEqual([
            {type: 'AttributeName', name: 'foo'},
            {type: 'AttributeName', name: 'bar'},
            {type: 'AttributeName', name: 'baz'},
            {type: 'ListIndex', index: 3},
            {type: 'ListIndex', index: 4},
            {type: 'ListIndex', index: 2},
            {type: 'AttributeName', name: 'fizz'},
            {type: 'ListIndex', index: 0},
            {type: 'AttributeName', name: 'buzz'},
            {type: 'ListIndex', index: 1},
        ]);
    });

    it('should clone an iterable of elements passed to the constructor', () => {
        const elements: Array<PathElement> = [
            {type: 'AttributeName', name: 'foo'},
            {type: 'AttributeName', name: 'bar'},
            {type: 'AttributeName', name: 'baz'},
            {type: 'ListIndex', index: 3},
            {type: 'ListIndex', index: 4},
            {type: 'ListIndex', index: 2},
            {type: 'AttributeName', name: 'fizz'},
            {type: 'ListIndex', index: 0},
            {type: 'AttributeName', name: 'buzz'},
            {type: 'ListIndex', index: 1},
        ];
        const path = new AttributePath(elements);

        expect(path.elements).toEqual(elements);
        expect(path.elements).not.toBe(elements);

        elements.shift();
        expect(path.elements).not.toEqual(elements);
        expect(path.elements.slice(1)).toEqual(elements);
    });

    it('should allow attribute names with embedded control characters', () => {
        expect(new AttributePath('_bracket_\\[_period_\\._backslash_\\\\_unescaped_backslash_\\_.foo').elements).toEqual([
            {type: 'AttributeName', name: '_bracket_[_period_._backslash_\\_unescaped_backslash_\\_'},
            {type: 'AttributeName', name: 'foo'},
        ]);
    });

    describe('path correctness checking', () => {
        it(
            'should throw an error when a path begins with a control character',
            () => {
                expect(() => new AttributePath('[1]'))
                    .toThrowError(/Invalid control character/);
            }
        );

        it(
            'should throw an error when a list index access contains invalid characters',
            () => {
                expect(() => new AttributePath('foo[a]'))
                    .toThrowError(/Invalid array index character/);
            }
        );

        it(
            'should throw an error when a list index access contains no characters',
            () => {
                expect(() => new AttributePath('foo[]'))
                    .toThrowError(/Invalid array index/);
            }
        );

        it(
            'should throw an error when an identifier immediately follows a list index access',
            () => {
                expect(() => new AttributePath('foo[1]a'))
                    .toThrowError(/Bare identifier encountered/);
            }
        );
    });

    describe('::isAttributePath', () => {
        it('should return true for AttributePath objects', () => {
        expect(
            AttributePath.isAttributePath(new AttributePath('foo'))
        ).toBe(true);
        });

        it('should return false for scalar values', () => {
        for (const scalar of ['string', 123.234, true, null, void 0]) {
            expect(AttributePath.isAttributePath(scalar)).toBe(false);
        }
        });

        it('should return true for AttributePaths created with a different constructor prototype', () => {
        const { isAttributePath } = AttributePath;
        const path = new AttributePath('foo.bar');

        function OtherCtor() {}
            Object.setPrototypeOf(path, OtherCtor.prototype);

            expect(path).not.toBeInstanceOf(AttributePath);
            expect(isAttributePath(path)).toBe(true);
        });
    });
});
