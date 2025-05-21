import {
    BinaryType,
    CustomType,
    DateType,
    NumberType,
    Schema,
    StringType,
} from '../../schema';
import {
    AttributeTypeMap,
    KeySchema,
    KeyTypeMap,
    ScalarAttributeType,
} from './KeySchema';

export function keysFromSchema(schema: Schema): KeySchema {
    const attributes: AttributeTypeMap = {};
    const tableKeys: KeyTypeMap = {};
    const indexKeys: {[key: string]: KeyTypeMap} = {};

    for (const propertyName of Object.keys(schema)) {
        const fieldSchema = schema[propertyName];
        if (
            fieldSchema.type === 'Binary' ||
            fieldSchema.type === 'Custom' ||
            fieldSchema.type === 'Date' ||
            fieldSchema.type === 'Number' ||
            fieldSchema.type === 'String'
        ) {
            const {
                attributeName = propertyName
            } = fieldSchema;

            if (fieldSchema.keyType) {
                attributes[attributeName] = attributeType(fieldSchema);
                tableKeys[attributeName] = fieldSchema.keyType;
            }

            if (
                fieldSchema.indexKeyConfigurations &&
                Object.keys(fieldSchema.indexKeyConfigurations).length > 0
            ) {
                attributes[attributeName] = attributeType(fieldSchema);

                for (const indexName of Object.keys(
                    fieldSchema.indexKeyConfigurations
                )) {
                    if (!(indexName in indexKeys)) {
                        indexKeys[indexName] = {};
                    }
                    indexKeys[indexName][attributeName]
                        = fieldSchema.indexKeyConfigurations[indexName];
                }
            }
        }
    }

    return {attributes, tableKeys, indexKeys};
}

function attributeType(
    fieldSchema: BinaryType|CustomType<any>|DateType|NumberType|StringType
): ScalarAttributeType {
    switch (fieldSchema.type) {
        case 'Binary':
            return 'B';
        case 'Custom':
            if (!fieldSchema.attributeType) {
                throw new Error(
                    'Invalid schema: no attribute type defined for custom field'
                );
            }
            return fieldSchema.attributeType;
        case 'Date':
        case 'Number':
            return 'N';
        case 'String':
            return 'S';
    }
}
