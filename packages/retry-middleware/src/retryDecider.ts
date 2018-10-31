import { RETRYABLE_STATUS_CODES } from './constants';
import {
    isClockSkewError,
    isStillProcessingError,
    isThrottlingError,
} from '@aws-sdk/service-error-classification';
import {
    MetadataBearer,
    SdkError,
    RetryDecider
} from '@aws-sdk/types';

export function defaultRetryDecider(
    retryClockSkewErrors = false
): RetryDecider {
    return (error: SdkError) => {
        if (!error) {
            return false;
        }

        if (error.connectionError) {
            return true;
        }

        if (
            hasMetadata(error) &&
            error.$metadata.httpStatusCode &&
            RETRYABLE_STATUS_CODES.has(error.$metadata.httpStatusCode)
        ) {
            return true;
        }

        return isStillProcessingError(error)
            || isThrottlingError(error)
            || (retryClockSkewErrors && isClockSkewError(error));
    }
}

function hasMetadata(error: any): error is MetadataBearer {
    return error && error.$metadata;
}
