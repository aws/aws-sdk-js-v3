import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>AWS Lambda could not unzip the deployment package.</p>
 */
export interface InvalidZipFileException extends __ServiceException__<_InvalidZipFileExceptionDetails> {
    name: 'InvalidZipFileException';
}

export interface _InvalidZipFileExceptionDetails {
    /**
     * _String shape
     */
    Type?: string;

    /**
     * _String shape
     */
    Message?: string;
}