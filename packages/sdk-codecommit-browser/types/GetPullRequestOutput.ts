import {_UnmarshalledPullRequest} from './_PullRequest';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * GetPullRequestOutput shape
 */
export interface GetPullRequestOutput {
    /**
     * <p>Information about the specified pull request.</p>
     */
    pullRequest: _UnmarshalledPullRequest;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}