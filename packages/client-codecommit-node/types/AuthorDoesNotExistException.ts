import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The specified Amazon Resource Name (ARN) does not exist in the AWS account.</p>
 */
export interface AuthorDoesNotExistException extends __ServiceException__<_AuthorDoesNotExistExceptionDetails> {
    name: 'AuthorDoesNotExistException';
}

export interface _AuthorDoesNotExistExceptionDetails {

}