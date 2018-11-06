import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>A delegation set with the same owner and caller reference combination has already been created.</p>
 */
export interface DelegationSetAlreadyCreated extends __ServiceException__<_DelegationSetAlreadyCreatedDetails> {
    name: 'DelegationSetAlreadyCreated';
}

export interface _DelegationSetAlreadyCreatedDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}