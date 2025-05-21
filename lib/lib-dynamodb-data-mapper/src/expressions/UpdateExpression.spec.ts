import { describe, expect,it } from 'vitest';

import {AttributePath} from "./AttributePath";
import {AttributeValue} from "./AttributeValue";
import {ExpressionAttributes} from "./ExpressionAttributes";
import {FunctionExpression} from "./FunctionExpression";
import {MathematicalExpression} from "./MathematicalExpression";
import {UpdateExpression} from "./UpdateExpression";


describe('UpdateExpression', () => {
    it('should serialize ADD clauses', () => {
        const attributes = new ExpressionAttributes();
        const expr = new UpdateExpression();
        expr.add('foo', new Set(['bar', 'baz']));
        expr.add('fizz', 1);

        expect(expr.serialize(attributes))
            .toBe('ADD #attr0 :val1, #attr2 :val3');
        expect(attributes.names).toEqual({
            '#attr0': 'foo',
            '#attr2': 'fizz',
        });
        expect(attributes.values).toEqual({
            ':val1': {SS: ['bar', 'baz']},
            ':val3': {N: '1'},
        });
    });

    it('should serialize DELETE clauses', () => {
        const attributes = new ExpressionAttributes();
        const expr = new UpdateExpression();
        expr.delete('foo', new Set(['bar', 'baz']));
        expr.delete('fizz', 1);

        expect(expr.serialize(attributes))
            .toBe('DELETE #attr0 :val1, #attr2 :val3');
        expect(attributes.names).toEqual({
            '#attr0': 'foo',
            '#attr2': 'fizz',
        });
        expect(attributes.values).toEqual({
            ':val1': {SS: ['bar', 'baz']},
            ':val3': {N: '1'},
        });
    });

    it('should serialize REMOVE clauses', () => {
        const attributes = new ExpressionAttributes();
        const expr = new UpdateExpression();
        expr.remove('foo');
        expr.remove('fizz');

        expect(expr.serialize(attributes)).toBe('REMOVE #attr0, #attr1');
        expect(attributes.names).toEqual({
            '#attr0': 'foo',
            '#attr1': 'fizz',
        });
        expect(attributes.values).toEqual({});
    });

    it('should serialize SET clauses', () => {
        const attributes = new ExpressionAttributes();
        const expr = new UpdateExpression();
        expr.set('foo', new Set(['bar', 'baz']));
        expr.set('fizz', 1);

        expect(expr.serialize(attributes))
            .toBe('SET #attr0 = :val1, #attr2 = :val3');
        expect(attributes.names).toEqual({
            '#attr0': 'foo',
            '#attr2': 'fizz',
        });
        expect(attributes.values).toEqual({
            ':val1': {SS: ['bar', 'baz']},
            ':val3': {N: '1'},
        });
    });

    it('should serialize SET clauses with function expressions', () => {
        const attributes = new ExpressionAttributes();
        const expr = new UpdateExpression();
        expr.set('foo', new FunctionExpression(
            'list_append',
            new AttributePath('foo'),
            'bar'
        ));

        expect(expr.serialize(attributes))
            .toBe('SET #attr0 = list_append(#attr0, :val1)');
        expect(attributes.names).toEqual({
            '#attr0': 'foo',
        });
        expect(attributes.values).toEqual({
            ':val1': {S: 'bar'},
        });
    });

    it('should serialize SET clauses with mathematical expressions', () => {
        const attributes = new ExpressionAttributes();
        const expr = new UpdateExpression();
        expr.set('foo', new MathematicalExpression(
            new AttributePath('foo'),
            '+',
            1
        ));

        expect(expr.serialize(attributes)).toBe('SET #attr0 = #attr0 + :val1');
        expect(attributes.names).toEqual({
            '#attr0': 'foo',
        });
        expect(attributes.values).toEqual({
            ':val1': {N: '1'},
        });
    });

    it('should serialize SET clauses with marshalled AttributeValues', () => {
        const attributes = new ExpressionAttributes();
        const expr = new UpdateExpression();
        expr.set('foo', new AttributeValue({SS: ['bar', 'baz']}));
        expr.set('fizz', new AttributeValue({N: '1'}));

        expect(expr.serialize(attributes))
            .toBe('SET #attr0 = :val1, #attr2 = :val3');
        expect(attributes.names).toEqual({
            '#attr0': 'foo',
            '#attr2': 'fizz',
        });
        expect(attributes.values).toEqual({
            ':val1': {SS: ['bar', 'baz']},
            ':val3': {N: '1'},
        });
    });

    it('should serialize expressions with multiple clauses', () => {
        const attributes = new ExpressionAttributes();
        const expr = new UpdateExpression();
        expr.add('foo', new Set(['baz']));
        expr.delete('foo', new Set(['quux']));
        expr.remove('fizz');
        expr.set('buzz', new Set(['pop']));

        expect(expr.serialize(attributes)).toBe(
            'ADD #attr0 :val1 DELETE #attr0 :val2 SET #attr3 = :val4 REMOVE #attr5'
        );
        expect(attributes.names).toEqual({
            '#attr0': 'foo',
            '#attr3': 'buzz',
            '#attr5': 'fizz',
        });
        expect(attributes.values).toEqual({
            ':val1': {SS: ['baz']},
            ':val2': {SS: ['quux']},
            ':val4': {SS: ['pop']},
        });
    });

    it('should support injecting an instance of ExpressionAttributes', () => {
        const attributes = new ExpressionAttributes();
        const expr = new UpdateExpression({attributes});
        expr.remove('foo');
        expr.serialize(attributes);
    
        expect(attributes.names).toEqual({'#attr0': 'foo'});
    });
});
