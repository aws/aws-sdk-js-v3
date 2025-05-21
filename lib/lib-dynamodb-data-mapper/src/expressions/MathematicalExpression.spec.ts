import { describe, expect, it } from 'vitest';

import { AttributePath } from './AttributePath';
import {
    ExpressionAttributeNameMap,
    ExpressionAttributeValueMap
} from './ExpressionAttributes';
import { ExpressionAttributes } from './ExpressionAttributes';
import { FunctionExpression } from './FunctionExpression';
import { MathematicalExpression } from './MathematicalExpression';



describe('MathematicalExpression', () => {
    const validExpressions: Array<[
        MathematicalExpression,
        string,
        ExpressionAttributeNameMap,
        ExpressionAttributeValueMap
    ]> = [
        [
            new MathematicalExpression(new AttributePath('foo'), '+', 1),
            '#attr0 + :val1',
            { '#attr0': 'foo' },
            { ':val1': { N: '1' } },
        ],
        [
            new MathematicalExpression(
                new FunctionExpression(
                    'if_not_exists',
                    new AttributePath('current_id'),
                    0
                ),
                '+',
                1
            ),
            'if_not_exists(#attr0, :val1) + :val2',
            { '#attr0': 'current_id' },
            {
                ':val1': { N: '0' },
                ':val2': { N: '1' },
            },
        ]
    ];

    describe('::isMathematicalExpression', () => {
        it('should accept valid mathematical expressions', () => {
            for (const [expr, _1, _2, _3] of validExpressions) {
                expect(MathematicalExpression.isMathematicalExpression(expr))
                    .toBe(true);
            }
        });

        it('should reject non-matching values', () => {
            for (const notMathematicalExpression of [
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
            ]) {
                expect(
                    MathematicalExpression
                        .isMathematicalExpression(notMathematicalExpression)
                ).toBe(false);
            }
        });
    });

    describe('#serialize', () => {
        it('should serialize basic mathematical expressions', () => {
            for (const [
            expression,
            serialized,
            expectedNames,
            expectedValues,
            ] of validExpressions) {
            const attributes = new ExpressionAttributes();

            expect(expression.serialize(attributes)).toBe(serialized);
            expect(attributes.names).toEqual(expectedNames);
            expect(attributes.values).toEqual(expectedValues);
            }
        });
    });
});
