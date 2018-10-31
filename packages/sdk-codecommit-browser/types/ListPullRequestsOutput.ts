import * as __aws_types from '@aws-sdk/types';

/**
 * ListPullRequestsOutput shape
 */
export interface ListPullRequestsOutput {
    /**
     * <p>The system-generated IDs of the pull requests.</p>
     */
    pullRequestIds: Array<string>;

    /**
     * <p>An enumeration token that when provided in a request, returns the next batch of the results.</p>
     */
    nextToken?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
