import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The specified action violates a limit. For example, <code>ReceiveMessage</code> returns this error if the maximum number of inflight messages is reached and <code>AddPermission</code> returns this error if the maximum number of permissions for the queue is reached.</p>
 */
export interface OverLimit extends __ServiceException__<_OverLimitDetails> {
    name: 'OverLimit';
}

export interface _OverLimitDetails {

}