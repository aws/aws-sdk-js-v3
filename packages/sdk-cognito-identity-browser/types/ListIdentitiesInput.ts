import {BrowserHttpOptions as __HttpOptions__} from '@aws-sdk/types';
import * as __aws_types from '@aws-sdk/types';

/**
 * <p>Input to the ListIdentities action.</p>
 */
export interface ListIdentitiesInput {
    /**
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId: string;

    /**
     * <p>The maximum number of identities to return.</p>
     */
    MaxResults: number;

    /**
     * <p>A pagination token.</p>
     */
    NextToken?: string;

    /**
     * <p>An optional boolean parameter that allows you to hide disabled identities. If omitted, the ListIdentities API will include disabled identities in the response.</p>
     */
    HideDisabled?: boolean;

    /**
     * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
     */
    $maxRetries?: number;

    /**
     * An object that may be queried to determine if the underlying operation has been aborted.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    $abortSignal?: __aws_types.AbortSignal;

    /**
     * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
     */
    $httpOptions?: __HttpOptions__;
}