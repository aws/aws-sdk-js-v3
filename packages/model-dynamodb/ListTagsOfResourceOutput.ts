import {_UnmarshalledTag} from './_Tag';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * ListTagsOfResourceOutput shape
 */
export interface ListTagsOfResourceOutput {
    /**
     * <p>The tags currently associated with the Amazon DynamoDB resource.</p>
     */
    Tags?: Array<_UnmarshalledTag>;
    
    /**
     * <p>If this value is returned, there are additional results to be displayed. To retrieve them, call ListTagsOfResource again, with NextToken set to this value.</p>
     */
    NextToken?: string;
    
    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}