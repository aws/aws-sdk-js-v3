import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The specified file exceeds the file size limit for AWS CodeCommit. For more information about limits in AWS CodeCommit, see <a href="http://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">AWS CodeCommit User Guide</a>.</p>
 */
export interface FileTooLargeException extends __ServiceException__ {
    name: 'FileTooLargeException';
    details: FileTooLargeExceptionDetails_;
}

export interface FileTooLargeExceptionDetails_ {

}