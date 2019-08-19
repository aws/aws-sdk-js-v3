/**
 * <p>Information about whether a file is binary or textual in a merge or pull request operation.</p>
 */
export interface _IsBinaryFile {
  /**
   * <p>The binary or non-binary status of file in the source of a merge or pull request.</p>
   */
  source?: boolean;

  /**
   * <p>The binary or non-binary status of a file in the destination of a merge or pull request.</p>
   */
  destination?: boolean;

  /**
   * <p>The binary or non-binary status of a file in the base of a merge or pull request.</p>
   */
  base?: boolean;
}

export type _UnmarshalledIsBinaryFile = _IsBinaryFile;
