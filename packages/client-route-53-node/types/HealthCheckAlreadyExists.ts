import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p> The health check you're attempting to create already exists. Amazon Route 53 returns this error when you submit a request that has the following values:</p> <ul> <li> <p>The same value for <code>CallerReference</code> as an existing health check, and one or more values that differ from the existing health check that has the same caller reference.</p> </li> <li> <p>The same value for <code>CallerReference</code> as a health check that you created and later deleted, regardless of the other settings in the request.</p> </li> </ul>
 */
export interface HealthCheckAlreadyExists extends __ServiceException__<_HealthCheckAlreadyExistsDetails> {
    name: 'HealthCheckAlreadyExists';
}

export interface _HealthCheckAlreadyExistsDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}