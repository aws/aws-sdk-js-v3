import { KeyType } from './schemaType';

export interface AttributeTypeMap {
    [attributeName: string]: ScalarAttributeType;
}

export interface KeySchema {
    attributes: AttributeTypeMap;
    tableKeys: KeyTypeMap;
    indexKeys: PerIndexKeys;
}

export interface KeyTypeMap {
    [attributeName: string]: KeyType;
}

export interface PerIndexKeys {
    [indexName: string]: KeyTypeMap;
}

export type ScalarAttributeType = 'S'|'N'|'B';
