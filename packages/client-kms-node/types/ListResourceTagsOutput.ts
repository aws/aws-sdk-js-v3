import {_UnmarshalledTag} from './_Tag';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * ListResourceTagsOutput shape
 */
export interface ListResourceTagsOutput {
    /**
     * <p>A list of tags. Each tag consists of a tag key and a tag value.</p>
     */
    Tags?: Array<_UnmarshalledTag>;

    /**
     * <p>When <code>Truncated</code> is true, this element is present and contains the value to use for the <code>Marker</code> parameter in a subsequent request.</p> <p>Do not assume or infer any information from this value.</p>
     */
    NextMarker?: string;

    /**
     * <p>A flag that indicates whether there are more items in the list. When this value is true, the list in this response is truncated. To get more items, pass the value of the <code>NextMarker</code> element in this response to the <code>Marker</code> parameter in a subsequent request.</p>
     */
    Truncated?: boolean;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
