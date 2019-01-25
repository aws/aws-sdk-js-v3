import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>You must wait 60 seconds after deleting a queue before you can create another queue with the same name.</p>
 */
export interface QueueDeletedRecently extends __ServiceException__<_QueueDeletedRecentlyDetails> {
    name: 'QueueDeletedRecently';
}

export interface _QueueDeletedRecentlyDetails {

}