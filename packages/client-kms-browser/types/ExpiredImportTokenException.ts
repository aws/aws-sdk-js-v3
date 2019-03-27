import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The request was rejected because the provided import token is expired. Use <a>GetParametersForImport</a> to get a new import token and public key, use the new public key to encrypt the key material, and then try the request again.</p>
 */
export interface ExpiredImportTokenException extends __ServiceException__<_ExpiredImportTokenExceptionDetails> {
    name: 'ExpiredImportTokenException';
}

export interface _ExpiredImportTokenExceptionDetails {
    /**
     * _ErrorMessageType shape
     */
    message?: string;
}