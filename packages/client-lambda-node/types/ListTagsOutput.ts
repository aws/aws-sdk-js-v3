import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * ListTagsOutput shape
 */
export interface ListTagsOutput {
    /**
     * <p>The list of tags assigned to the function. For more information, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/tagging.html">Tagging Lambda Functions</a> in the <b>AWS Lambda Developer Guide</b>.</p>
     */
    Tags?: {[key: string]: string};

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
