import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The client request token is not valid. Either the token is not in a valid format, or the token has been used in a previous request and cannot be re-used.</p>
 */
export interface IdempotencyParameterMismatchException extends __ServiceException__<_IdempotencyParameterMismatchExceptionDetails> {
    name: 'IdempotencyParameterMismatchException';
}

export interface _IdempotencyParameterMismatchExceptionDetails {

}