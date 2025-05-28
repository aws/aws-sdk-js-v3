import { describe, expect, it } from 'vitest';

import {isSchema} from "./Schema";


describe('isSchema', () => {
    it('should reject scalar values', () => {
        for (const scalar of ['string', 123, true, null, void 0]) {
            expect(isSchema(scalar)).toBe(false);
        }
    });

    it('should accept empty objects', () => {
        expect(isSchema({})).toBe(true);
    });

    it('should accept objects whose members are all schema types', () => {
        expect(isSchema({
            foo: {type: 'Binary'},
            bar: {type: 'Boolean'},
            baz: {type: 'String'},
            quux: {
                type: 'Document',
                members: {
                    fizz: {type: 'Set', memberType: 'String'},
                    buzz: {
                        type: 'Tuple',
                        members: [
                            {
                                type: 'List',
                                memberType: {type: 'Set', memberType: 'Number'},
                            },
                            {
                                type: 'Map',
                                memberType: {type: 'Date'},
                            }
                        ]
                    },
                },
            },
        })).toBe(true);
    });

    it('should reject objects whose members are not all schema types', () => {
        expect(isSchema({
            foo: {type: 'Binary'},
            bar: {type: 'Boolean'},
            baz: {type: 'String'},
            quux: 'string',
        })).toBe(false);
    });
});
