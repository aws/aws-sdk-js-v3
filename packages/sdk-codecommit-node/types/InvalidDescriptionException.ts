import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The pull request description is not valid. Descriptions are limited to 1,000 characters in length.</p>
 */
export interface InvalidDescriptionException extends __ServiceException__<_InvalidDescriptionExceptionDetails> {
    name: 'InvalidDescriptionException';
}

export interface _InvalidDescriptionExceptionDetails {

}