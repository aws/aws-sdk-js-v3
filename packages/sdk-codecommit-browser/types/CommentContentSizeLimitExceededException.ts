import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>The comment is too large. Comments are limited to 1,000 characters.</p>
 */
export interface CommentContentSizeLimitExceededException {
    /**
     * <p>A trace of which functions were called leading to this error being raised.</p>
     */
    stack?: string;

    /**
     * <p>The species of error returned by the service.</p>
     */
    name?: string;

    /**
     * <p>Human-readable description of the error.</p>
     */
    message?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}