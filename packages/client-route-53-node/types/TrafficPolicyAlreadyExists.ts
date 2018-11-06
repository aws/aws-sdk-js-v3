import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>A traffic policy that has the same value for <code>Name</code> already exists.</p>
 */
export interface TrafficPolicyAlreadyExists extends __ServiceException__<_TrafficPolicyAlreadyExistsDetails> {
    name: 'TrafficPolicyAlreadyExists';
}

export interface _TrafficPolicyAlreadyExistsDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}