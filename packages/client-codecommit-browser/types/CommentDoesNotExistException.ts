import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>No comment exists with the provided ID. Verify that you have provided the correct ID, and then try again.</p>
 */
export interface CommentDoesNotExistException extends __ServiceException__<_CommentDoesNotExistExceptionDetails> {
    name: 'CommentDoesNotExistException';
}

export interface _CommentDoesNotExistExceptionDetails {

}