import {_UnmarshalledTag} from './_Tag';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * ListTagsOfResourceOutput shape
 */
export interface ListTagsOfResourceOutput {
    /**
     * _TagList shape
     */
    Tags?: Array<_UnmarshalledTag>;
    
    /**
     * _NextTokenString shape
     */
    NextToken?: string;
    
    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}