import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The Amazon Resource Name (ARN) is not valid. Make sure that you have provided the full ARN for the author of the pull request, and then try again.</p>
 */
export interface InvalidAuthorArnException extends __ServiceException__<_InvalidAuthorArnExceptionDetails> {
    name: 'InvalidAuthorArnException';
}

export interface _InvalidAuthorArnExceptionDetails {

}