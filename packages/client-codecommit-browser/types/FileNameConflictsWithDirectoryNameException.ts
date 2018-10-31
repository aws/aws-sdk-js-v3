import {ServiceException as __ServiceException__} from '@aws-sdk/types';

/**
 * <p>A file cannot be added to the repository because the specified file name has the same name as a directory in this repository. Either provide another name for the file, or add the file in a directory that does not match the file name.</p>
 */
export interface FileNameConflictsWithDirectoryNameException extends __ServiceException__<_FileNameConflictsWithDirectoryNameExceptionDetails> {
    name: 'FileNameConflictsWithDirectoryNameException';
}

export interface _FileNameConflictsWithDirectoryNameExceptionDetails {

}