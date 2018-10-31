import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>A client request token is required. A client request token is an unique, client-generated idempotency token that when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request will return information about the initial request that used that token.</p>
 */
export interface ClientRequestTokenRequiredException extends __ServiceException__<_ClientRequestTokenRequiredExceptionDetails> {
    name: 'ClientRequestTokenRequiredException';
}

export interface _ClientRequestTokenRequiredExceptionDetails {

}