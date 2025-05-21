import {describe, expect, it} from "vitest";

import {AttributePath} from "./AttributePath";
import { AttributeValue } from "./AttributeValue";
import {ExpressionAttributes} from "./ExpressionAttributes";
import {FunctionExpression} from "./FunctionExpression";

describe('FunctionExpression', () => {
    const basicFunctionExpression = new FunctionExpression(
        'foo',
        new AttributePath('bar'),
        'baz'
    );

    describe('::isFunctionExpression', () => {
        it('should accept valid function expressions', () => {
            expect(
                FunctionExpression.isFunctionExpression(basicFunctionExpression)
            ).toBe(true);
        });

        it('should reject non-matching values', () => {
            for (const notFunctionExpression of [
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
            ]) {
                expect(
                    FunctionExpression.isFunctionExpression(notFunctionExpression)
                ).toBe(false);
            }
        });
    });

    function unwrapValues(input: Record<string, any>): Record<string, any> {
        const out: Record<string, any> = {};
        for (const [key, val] of Object.entries(input)) {
            out[key] = AttributeValue.isAttributeValue(val)
            ? val.marshalled
            : val;
        }
        return out;
    }

    describe('#serialize', () => {
        it('should serialize basic function expressions', () => {
            const attributes = new ExpressionAttributes();
            expect(basicFunctionExpression.serialize(attributes)).toBe('foo(#attr0, :val1)');

            expect(attributes.names).toEqual({
            '#attr0': 'bar',
            });

            expect(unwrapValues(attributes.values)).toEqual({
            ':val1': { S: 'baz' },
            });
        });

        it('should support nested function expressions', () => {
            const nestedFunction = new FunctionExpression(
            'foo',
            new AttributePath('bar'),
            'baz',
            new FunctionExpression('fizz', new FunctionExpression('buzz', new AttributePath('bar')))
            );

            const attributes = new ExpressionAttributes();
            expect(nestedFunction.serialize(attributes)).toBe('foo(#attr0, :val1, fizz(buzz(#attr0)))');

            expect(attributes.names).toEqual({
            '#attr0': 'bar',
            });

            expect(unwrapValues(attributes.values)).toEqual({
            ':val1': { S: 'baz' },
            });
        });
    });
});
