import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>The specified file exceeds the file size limit for AWS CodeCommit. For more information about limits in AWS CodeCommit, see <a href="http://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">AWS CodeCommit User Guide</a>.</p>
 */
export interface FileTooLargeException {
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