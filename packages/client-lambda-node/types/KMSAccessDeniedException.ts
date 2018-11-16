import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>Lambda was unable to decrypt the environment variables because KMS access was denied. Check the Lambda function's KMS permissions.</p>
 */
export interface KMSAccessDeniedException extends __ServiceException__<_KMSAccessDeniedExceptionDetails> {
    name: 'KMSAccessDeniedException';
}

export interface _KMSAccessDeniedExceptionDetails {
    /**
     * _String shape
     */
    Type?: string;

    /**
     * _String shape
     */
    Message?: string;
}