import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The Security Group ID provided in the Lambda function VPC configuration is invalid.</p>
 */
export interface InvalidSecurityGroupIDException extends __ServiceException__<_InvalidSecurityGroupIDExceptionDetails> {
    name: 'InvalidSecurityGroupIDException';
}

export interface _InvalidSecurityGroupIDExceptionDetails {
    /**
     * _String shape
     */
    Type?: string;

    /**
     * _String shape
     */
    Message?: string;
}