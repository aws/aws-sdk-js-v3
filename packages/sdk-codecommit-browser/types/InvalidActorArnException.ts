import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The Amazon Resource Name (ARN) is not valid. Make sure that you have provided the full ARN for the user who initiated the change for the pull request, and then try again.</p>
 */
export interface InvalidActorArnException extends __ServiceException__<_InvalidActorArnExceptionDetails> {
    name: 'InvalidActorArnException';
}

export interface _InvalidActorArnExceptionDetails {

}