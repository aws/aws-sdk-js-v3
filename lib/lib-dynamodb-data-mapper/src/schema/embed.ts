import { DynamoDbSchema } from './schemaMetadata';
import type { DocumentType, ZeroArgumentsConstructor } from './schemaType';

/**
 * Options for configuring an embedded document field in a schema.
 */
export interface DocumentTypeOptions<T extends object> {
  /**
   * Optional override for the DynamoDB attribute name.
   */
  attributeName?: string;

  /**
   * A factory that returns a default value if the field is undefined.
   */
  defaultProvider?: () => T;
}

/**
 * Declares a field in your schema as an embedded document (nested object)
 * that has its own schema defined via `DynamoDbSchema`.
 *
 * @param constructor - The class constructor of the embedded document.
 * @param options - Optional configuration for attribute name or default value.
 * @returns A `DocumentType` schema node used in manual schema definitions.
 */
export function embed<T extends object>(
    documentConstructor: ZeroArgumentsConstructor<T>,
    {attributeName, defaultProvider}: DocumentTypeOptions<T> = {}
): DocumentType {
    return {
        type: 'Document',
        members: (documentConstructor.prototype as any)[DynamoDbSchema] || {},
        attributeName,
        defaultProvider,
        valueConstructor: documentConstructor
    };
}