/**
 * <p>Returns information about a folder in a repository.</p>
 */
export interface _Folder {
  /**
   * <p>The full SHA-1 pointer of the tree information for the commit that contains the folder.</p>
   */
  treeId?: string;

  /**
   * <p>The fully-qualified path of the folder in the repository.</p>
   */
  absolutePath?: string;

  /**
   * <p>The relative path of the specified folder from the folder where the query originated.</p>
   */
  relativePath?: string;
}

export type _UnmarshalledFolder = _Folder;
