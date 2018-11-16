import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>AWS Lambda received an unexpected EC2 client exception while setting up for the Lambda function.</p>
 */
export interface EC2UnexpectedException extends __ServiceException__<_EC2UnexpectedExceptionDetails> {
    name: 'EC2UnexpectedException';
}

export interface _EC2UnexpectedExceptionDetails {
    /**
     * _String shape
     */
    Type?: string;

    /**
     * _String shape
     */
    Message?: string;

    /**
     * _String shape
     */
    EC2ErrorCode?: string;
}