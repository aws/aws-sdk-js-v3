import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The specified file exceeds the file size limit for AWS CodeCommit. For more information about limits in AWS CodeCommit, see <a href="http://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">AWS CodeCommit User Guide</a>.</p>
 */
export interface FileTooLargeException extends __ServiceException__<_FileTooLargeExceptionDetails> {
    name: 'FileTooLargeException';
}

export interface _FileTooLargeExceptionDetails {

}