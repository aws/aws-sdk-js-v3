import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>Your request rate is too high. The AWS SDKs for DynamoDB automatically retry requests that receive this exception. Your request is eventually successful, unless your retry queue is too large to finish. Reduce the frequency of requests and use exponential backoff. For more information, go to <a href="http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html#Programming.Errors.RetryAndBackoff">Error Retries and Exponential Backoff</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
 */
export interface ProvisionedThroughputExceededException extends __ServiceException__<_ProvisionedThroughputExceededExceptionDetails> {
    name: 'ProvisionedThroughputExceededException';
}

export interface _ProvisionedThroughputExceededExceptionDetails {
    /**
     * <p>You exceeded your maximum allowed provisioned throughput.</p>
     */
    message?: string;
}