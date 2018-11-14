import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>Need additional permissions to configure VPC settings.</p>
 */
export interface EC2AccessDeniedException extends __ServiceException__<_EC2AccessDeniedExceptionDetails> {
    name: 'EC2AccessDeniedException';
}

export interface _EC2AccessDeniedExceptionDetails {
    /**
     * _String shape
     */
    Type?: string;

    /**
     * _String shape
     */
    Message?: string;
}