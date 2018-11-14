import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>Point in time recovery has not yet been enabled for this source table.</p>
 */
export interface PointInTimeRecoveryUnavailableException extends __ServiceException__<_PointInTimeRecoveryUnavailableExceptionDetails> {
    name: 'PointInTimeRecoveryUnavailableException';
}

export interface _PointInTimeRecoveryUnavailableExceptionDetails {
    /**
     * _ErrorMessage shape
     */
    message?: string;
}