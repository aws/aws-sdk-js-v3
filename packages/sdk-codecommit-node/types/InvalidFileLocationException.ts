import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The location of the file is not valid. Make sure that you include the extension of the file as well as the file name.</p>
 */
export interface InvalidFileLocationException extends __ServiceException__<_InvalidFileLocationExceptionDetails> {
    name: 'InvalidFileLocationException';
}

export interface _InvalidFileLocationExceptionDetails {

}