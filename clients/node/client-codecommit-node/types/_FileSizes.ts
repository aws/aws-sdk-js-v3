/**
 * <p>Information about the size of files in a merge or pull request.</p>
 */
export interface _FileSizes {
  /**
   * <p>The size of a file in the source of a merge or pull request.</p>
   */
  source?: number;

  /**
   * <p>The size of a file in the destination of a merge or pull request.</p>
   */
  destination?: number;

  /**
   * <p>The size of a file in the base of a merge or pull request.</p>
   */
  base?: number;
}

export type _UnmarshalledFileSizes = _FileSizes;
