import { describe, expect,it } from 'vitest';

import {AttributePath} from "./AttributePath";
import {ExpressionAttributes} from "./ExpressionAttributes";
import { serializeProjectionExpression } from './ProjectionExpression';


describe('ProjectionExpression', () => {
    it('should allow the addition of scalar values', () => {
        const attributes = new ExpressionAttributes();

        expect(serializeProjectionExpression(
            ['foo', 'bar', 'baz', 'quux'],
            attributes
        )).toBe('#attr0, #attr1, #attr2, #attr3');
        expect(attributes.names).toEqual({
            '#attr0': 'foo',
            '#attr1': 'bar',
            '#attr2': 'baz',
            '#attr3': 'quux',
        });
    });

    it('should allow the addition of list index dereferences', () => {
        const attributes = new ExpressionAttributes();

        expect(serializeProjectionExpression(
            [new AttributePath('foo[2]')],
            attributes
        )).toBe('#attr0[2]');
        expect(attributes.names).toEqual({
            '#attr0': 'foo',
        });
    });

    it('should allow the addition of nested attributes', () => {
        const attributes = new ExpressionAttributes();

        expect(serializeProjectionExpression(
            [new AttributePath('foo.bar')],
            attributes
        )).toBe('#attr0.#attr1');
        expect(attributes.names).toEqual({
            '#attr0': 'foo',
            '#attr1': 'bar',
        });
    });

    it(
        'should allow the nesting of complex attributes to an arbitrary depth',
        () => {
            const attributes = new ExpressionAttributes();
            expect(serializeProjectionExpression(
                [new AttributePath('snap.foo[2].bar[3].baz[4].quux')],
                attributes
            )).toBe('#attr0.#attr1[2].#attr2[3].#attr3[4].#attr4');
            expect(attributes.names).toEqual({
                '#attr0': 'snap',
                '#attr1': 'foo',
                '#attr2': 'bar',
                '#attr3': 'baz',
                '#attr4': 'quux',
            });
        }
    );
});
