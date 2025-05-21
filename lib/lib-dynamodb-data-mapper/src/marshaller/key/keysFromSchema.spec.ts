import { describe, expect,it } from 'vitest';

import { Schema } from '../../schema/';
import { keysFromSchema } from './keysFromSchema';


describe('keysFromSchema', () => {
    const schema: Schema = {
        partitionKey: {
            type: 'Number',
            keyType: 'HASH',
        },
        createdAt: {
            type: 'Date',
            keyType: 'RANGE',
            indexKeyConfigurations: {
                chronological: 'HASH',
                globalIndex: 'RANGE'
            },
            attributeName: 'timestamp'
        },
        createdBy: {
            type: 'String',
            indexKeyConfigurations: {
                globalIndex: 'HASH',
                localIndex: 'RANGE'
            },
            attributeName: 'creator',
        },
        binaryKey: {
            type: 'Binary',
            indexKeyConfigurations: {
                binaryIndex: 'HASH'
            }
        },
        customKey: {
            type: 'Custom',
            attributeType: 'S',
            marshall: str => str,
            unmarshall: av => av.S,
            indexKeyConfigurations: {
                binaryIndex: 'RANGE',
            },
        },
        listProp: { type: 'Collection' },
    };

    it('should identify the table keys', () => {
        expect(keysFromSchema(schema).tableKeys).toEqual({
            partitionKey: 'HASH',
            timestamp: 'RANGE',
        });
    });

    it('should identify any index keys', () => {
        expect(keysFromSchema(schema).indexKeys).toEqual({
            binaryIndex: {
                binaryKey: 'HASH',
                customKey: 'RANGE'
            },
            chronological: {
                timestamp: 'HASH',
            },
            globalIndex: {
                creator: 'HASH',
                timestamp: 'RANGE',
            },
            localIndex: {
                creator: 'RANGE',
            },
        });
    });

    it('should record the attribute type of any value used as a key', () => {
        expect(keysFromSchema(schema).attributes).toEqual({
            partitionKey: 'N',
            timestamp: 'N',
            creator: 'S',
            binaryKey: 'B',
            customKey: 'S',
        });
    });

    it(
        'should throw if a custom property does not define an attribute type',
        () => {
            const schema: Schema = {
                customKey: {
                    type: 'Custom',
                    keyType: 'HASH',
                    marshall: str => str,
                    unmarshall: av => av.S,
                },
            };
            expect(() => keysFromSchema(schema)).toThrow();
        }
    );
});
