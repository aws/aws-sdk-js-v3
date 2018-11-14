import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
 */
export interface InvalidParameterValueException extends __ServiceException__<_InvalidParameterValueExceptionDetails> {
    name: 'InvalidParameterValueException';
}

export interface _InvalidParameterValueExceptionDetails {
    /**
     * <p>The exception type.</p>
     */
    Type?: string;

    /**
     * <p>The exception message.</p>
     */
    message?: string;
}