import {SchemaType} from '../../schema';

export function isKey(fieldSchema: SchemaType, indexName?: string): boolean {
    if (
        fieldSchema.type === 'Binary' ||
        fieldSchema.type === 'Custom' ||
        fieldSchema.type === 'Date' ||
        fieldSchema.type === 'Number' ||
        fieldSchema.type === 'String'
    ) {
        return indexName !== undefined
            ? Boolean(
                fieldSchema.indexKeyConfigurations &&
                fieldSchema.indexKeyConfigurations[indexName]
            ) : Boolean(fieldSchema.keyType);
    }

    return false;
}
