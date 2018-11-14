import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The RevisionId provided does not match the latest RevisionId for the Lambda function or alias. Call the <code>GetFunction</code> or the <code>GetAlias</code> API to retrieve the latest RevisionId for your resource.</p>
 */
export interface PreconditionFailedException extends __ServiceException__<_PreconditionFailedExceptionDetails> {
    name: 'PreconditionFailedException';
}

export interface _PreconditionFailedExceptionDetails {
    /**
     * <p>The exception type.</p>
     */
    Type?: string;

    /**
     * <p>The exception message.</p>
     */
    message?: string;
}