import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The file cannot be added because it is empty. Empty files cannot be added to the repository with this API.</p>
 */
export interface FileContentRequiredException extends __ServiceException__<_FileContentRequiredExceptionDetails> {
    name: 'FileContentRequiredException';
}

export interface _FileContentRequiredExceptionDetails {

}