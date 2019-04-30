/**
 * <p>Returns information about a submodule reference in a repository folder.</p>
 */
export interface _SubModule {
  /**
   * <p>The commit ID that contains the reference to the submodule.</p>
   */
  commitId?: string;

  /**
   * <p>The fully qualified path to the folder that contains the reference to the submodule.</p>
   */
  absolutePath?: string;

  /**
   * <p>The relative path of the submodule from the folder where the query originated.</p>
   */
  relativePath?: string;
}

export type _UnmarshalledSubModule = _SubModule;
