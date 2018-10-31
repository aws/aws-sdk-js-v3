import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>The specified file mode permission is not valid. For a list of valid file mode permissions, see <a>PutFile</a>. </p>
 */
export interface InvalidFileModeException extends __ServiceException__<_InvalidFileModeExceptionDetails> {
    name: 'InvalidFileModeException';
}

export interface _InvalidFileModeExceptionDetails {

}