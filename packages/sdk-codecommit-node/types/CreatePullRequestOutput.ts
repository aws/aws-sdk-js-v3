import {_UnmarshalledPullRequest} from './_PullRequest';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * CreatePullRequestOutput shape
 */
export interface CreatePullRequestOutput {
    /**
     * <p>Information about the newly created pull request.</p>
     */
    pullRequest: _UnmarshalledPullRequest;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}