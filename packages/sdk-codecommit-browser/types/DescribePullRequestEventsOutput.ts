import {_UnmarshalledPullRequestEvent} from './_PullRequestEvent';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * DescribePullRequestEventsOutput shape
 */
export interface DescribePullRequestEventsOutput {
    /**
     * <p>Information about the pull request events.</p>
     */
    pullRequestEvents: Array<_UnmarshalledPullRequestEvent>;

    /**
     * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
     */
    nextToken?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}