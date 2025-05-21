import { describe, expect,it } from 'vitest';

import {AttributeValue} from "./AttributeValue";

describe('AttributeValue', () => {
    describe('::isAttributeValue', () => {
        it('should accept valid attribute values', () => {
            const value = new AttributeValue({
                S: 'string',
            });

            expect(
                AttributeValue.isAttributeValue(value)
            ).toBe(true);
        });

        it('should reject non-matching values', () => {
            for (const notAttributeValue of [
                false,
                true,
                null,
                void 0,
                'string',
                123,
                [],
                {},
                new Uint8Array(12),
                {foo: 'bar'},
                {name: 'foo', arguments: 'bar'},
                {S: 'string'}
            ]) {
                expect(
                    AttributeValue.isAttributeValue(notAttributeValue)
                ).toBe(false);
            }
        });
    });
});
