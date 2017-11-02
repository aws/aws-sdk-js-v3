import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * ListTablesOutput shape
 */
export interface ListTablesOutput {
    /**
     * _TableNameList shape
     */
    TableNames?: Array<string>;
    
    /**
     * _TableName shape
     */
    LastEvaluatedTableName?: string;
    
    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}