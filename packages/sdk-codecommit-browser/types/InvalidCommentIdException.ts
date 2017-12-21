import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The comment ID is not in a valid format. Make sure that you have provided the full comment ID.</p>
 */
export interface InvalidCommentIdException extends __ServiceException__<_InvalidCommentIdExceptionDetails> {
    name: 'InvalidCommentIdException';
}

export interface _InvalidCommentIdExceptionDetails {

}