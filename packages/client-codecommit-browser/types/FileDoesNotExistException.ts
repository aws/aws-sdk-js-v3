import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The specified file does not exist. Verify that you have provided the correct name of the file, including its full path and extension.</p>
 */
export interface FileDoesNotExistException extends __ServiceException__<_FileDoesNotExistExceptionDetails> {
    name: 'FileDoesNotExistException';
}

export interface _FileDoesNotExistExceptionDetails {

}