import {BrowserHttpOptions as __HttpOptions__} from '@aws-sdk/types';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * GetSegmentsInput shape
 */
export interface GetSegmentsInput {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: string;

    /**
     * The number of entries you want on each page in the response.
     */
    PageSize?: string;

    /**
     * The NextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    Token?: string;

    /**
     * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
     */
    $maxRetries?: number;

    /**
     * An object that may be queried to determine if the underlying operation has been aborted.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    $abortSignal?: __aws_sdk_types.AbortSignal;

    /**
     * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
     */
    $httpOptions?: __HttpOptions__;
}