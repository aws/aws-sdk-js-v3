import {_UnmarshalledFolder} from './_Folder';
import {_UnmarshalledFile} from './_File';
import {_UnmarshalledSymbolicLink} from './_SymbolicLink';
import {_UnmarshalledSubModule} from './_SubModule';
import * as __aws_types from '@aws-sdk/types';

/**
 * GetFolderOutput shape
 */
export interface GetFolderOutput {
    /**
     * <p>The full commit ID used as a reference for which version of the folder content is returned.</p>
     */
    commitId: string;

    /**
     * <p>The fully-qualified path of the folder whose contents are returned.</p>
     */
    folderPath: string;

    /**
     * <p>The full SHA-1 pointer of the tree information for the commit that contains the folder.</p>
     */
    treeId?: string;

    /**
     * <p>The list of folders that exist beneath the specified folder, if any.</p>
     */
    subFolders?: Array<_UnmarshalledFolder>;

    /**
     * <p>The list of files that exist in the specified folder, if any.</p>
     */
    files?: Array<_UnmarshalledFile>;

    /**
     * <p>The list of symbolic links to other files and folders that exist in the specified folder, if any.</p>
     */
    symbolicLinks?: Array<_UnmarshalledSymbolicLink>;

    /**
     * <p>The list of submodules that exist in the specified folder, if any.</p>
     */
    subModules?: Array<_UnmarshalledSubModule>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
