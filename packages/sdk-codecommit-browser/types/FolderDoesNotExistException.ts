import {ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The specified folder does not exist. Either the folder name is not correct, or you did not provide the full path to the folder.</p>
 */
export interface FolderDoesNotExistException extends __ServiceException__<_FolderDoesNotExistExceptionDetails> {
    name: 'FolderDoesNotExistException';
}

export interface _FolderDoesNotExistExceptionDetails {

}