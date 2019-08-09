/**
 * <p>Information about a source file that is part of changes made in a commit.</p>
 */
export interface _SourceFileSpecifier {
  /**
   * <p>The full path to the file, including the name of the file.</p>
   */
  filePath: string;

  /**
   * <p>Whether to remove the source file from the parent commit.</p>
   */
  isMove?: boolean;
}

export type _UnmarshalledSourceFileSpecifier = _SourceFileSpecifier;
