import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>AWS Lambda was not able to create an Elastic Network Interface (ENI) in the VPC, specified as part of Lambda function configuration, because the limit for network interfaces has been reached.</p>
 */
export interface ENILimitReachedException extends __ServiceException__<_ENILimitReachedExceptionDetails> {
    name: 'ENILimitReachedException';
}

export interface _ENILimitReachedExceptionDetails {
    /**
     * _String shape
     */
    Type?: string;

    /**
     * _String shape
     */
    Message?: string;
}