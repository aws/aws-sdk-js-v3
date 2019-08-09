import { _FileSizes, _UnmarshalledFileSizes } from "./_FileSizes";
import { _FileModes, _UnmarshalledFileModes } from "./_FileModes";
import { _ObjectTypes, _UnmarshalledObjectTypes } from "./_ObjectTypes";
import { _IsBinaryFile, _UnmarshalledIsBinaryFile } from "./_IsBinaryFile";
import {
  _MergeOperations,
  _UnmarshalledMergeOperations
} from "./_MergeOperations";

/**
 * <p>Information about the metadata for a conflict in a merge operation.</p>
 */
export interface _ConflictMetadata {
  /**
   * <p>The path of the file that contains conflicts.</p>
   */
  filePath?: string;

  /**
   * <p>The file sizes of the file in the source, destination, and base of the merge.</p>
   */
  fileSizes?: _FileSizes;

  /**
   * <p>The file modes of the file in the source, destination, and base of the merge.</p>
   */
  fileModes?: _FileModes;

  /**
   * <p>Information about any object type conflicts in a merge operation.</p>
   */
  objectTypes?: _ObjectTypes;

  /**
   * <p>The number of conflicts, including both hunk conflicts and metadata conflicts.</p>
   */
  numberOfConflicts?: number;

  /**
   * <p>A boolean value (true or false) indicating whether the file is binary or textual in the source, destination, and base of the merge.</p>
   */
  isBinaryFile?: _IsBinaryFile;

  /**
   * <p>A boolean value indicating whether there are conflicts in the content of a file.</p>
   */
  contentConflict?: boolean;

  /**
   * <p>A boolean value indicating whether there are conflicts in the file mode of a file.</p>
   */
  fileModeConflict?: boolean;

  /**
   * <p>A boolean value (true or false) indicating whether there are conflicts between the branches in the object type of a file, folder, or submodule.</p>
   */
  objectTypeConflict?: boolean;

  /**
   * <p>Whether an add, modify, or delete operation caused the conflict between the source and destination of the merge.</p>
   */
  mergeOperations?: _MergeOperations;
}

export interface _UnmarshalledConflictMetadata extends _ConflictMetadata {
  /**
   * <p>The file sizes of the file in the source, destination, and base of the merge.</p>
   */
  fileSizes?: _UnmarshalledFileSizes;

  /**
   * <p>The file modes of the file in the source, destination, and base of the merge.</p>
   */
  fileModes?: _UnmarshalledFileModes;

  /**
   * <p>Information about any object type conflicts in a merge operation.</p>
   */
  objectTypes?: _UnmarshalledObjectTypes;

  /**
   * <p>A boolean value (true or false) indicating whether the file is binary or textual in the source, destination, and base of the merge.</p>
   */
  isBinaryFile?: _UnmarshalledIsBinaryFile;

  /**
   * <p>Whether an add, modify, or delete operation caused the conflict between the source and destination of the merge.</p>
   */
  mergeOperations?: _UnmarshalledMergeOperations;
}
