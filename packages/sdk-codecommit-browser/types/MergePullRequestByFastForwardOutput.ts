import {_UnmarshalledPullRequest} from './_PullRequest';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * MergePullRequestByFastForwardOutput shape
 */
export interface MergePullRequestByFastForwardOutput {
    /**
     * <p>Information about the specified pull request, including information about the merge.</p>
     */
    pullRequest?: _UnmarshalledPullRequest;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}