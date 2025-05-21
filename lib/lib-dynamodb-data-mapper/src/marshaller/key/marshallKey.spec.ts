import { describe, expect,it } from 'vitest';

import {Schema} from '../../schema';
import {marshallKey} from './marshallKey';


describe('marshallKey', () => {
    const schema: Schema = {
        fizz: {
            type: 'String',
            keyType: 'HASH',
            attributeName: 'foo',
        },
        buzz: {
            type: 'Date',
            keyType: 'RANGE',
            indexKeyConfigurations: {bar: 'HASH'},
            attributeName: 'bar',
        },
        pop: {
            type: 'Number',
            indexKeyConfigurations: {foo: 'HASH'}
        },
        notAKey: {
            type: 'Tuple',
            members: [
                {type: 'Boolean'},
                {type: 'String'},
            ]
        },
    };

    const input = {
        fizz: 'baz',
        buzz: new Date(1000),
        pop: 10,
        notAKey: [true, 'quux']
    };

    it('should only marshall key fields', () => {
        expect(marshallKey(schema, input))
            .toEqual({
                foo: {S: 'baz'},
                bar: {N: '1'}
            });
    });

    it(
        'should marshall key fields for the correct index if an index name is supplied',
        () => {
            expect(marshallKey(schema, input, 'foo')).toEqual({pop: {N: '10'}});
            expect(marshallKey(schema, input, 'bar')).toEqual({bar: {N: '1'}});
        }
    );
});
