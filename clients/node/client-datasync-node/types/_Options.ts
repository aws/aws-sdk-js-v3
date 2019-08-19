/**
 * <p>Represents the options that are available to control the behavior of a <a>StartTaskExecution</a> operation. Behavior includes preserving metadata such as user ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination, data integrity verification, and so on.</p> <p>A task has a set of default options associated with it. If you don't specify an option in <a>StartTaskExecution</a>, the default value is used. You can override the defaults options on each task execution by specifying an overriding <code>Options</code> value to <a>StartTaskExecution</a>.</p>
 */
export interface _Options {
  /**
   * <p>A value that determines whether a data integrity verification should be performed at the end of a task execution after all data and metadata have been transferred. </p> <p>Default value: POINT_IN_TIME_CONSISTENT.</p> <p>POINT_IN_TIME_CONSISTENT: Perform verification (recommended). </p> <p>NONE: Skip verification.</p>
   */
  VerifyMode?: "POINT_IN_TIME_CONSISTENT" | "NONE" | string;

  /**
   * <p>A file metadata value that shows the last time a file was accessed (that is, when the file was read or written to). If you set <code>Atime</code> to BEST_EFFORT, DataSync attempts to preserve the original <code>Atime</code> attribute on all source files (that is, the version before the PREPARING phase). However, <code>Atime</code>'s behavior is not fully standard across platforms, so AWS DataSync can only do this on a best-effort basis. </p> <p>Default value: BEST_EFFORT.</p> <p>BEST_EFFORT: Attempt to preserve the per-file <code>Atime</code> value (recommended).</p> <p>NONE: Ignore <code>Atime</code>.</p> <note> <p>If <code>Atime</code> is set to BEST_EFFORT, <code>Mtime</code> must be set to PRESERVE. </p> <p>If <code>Atime</code> is set to NONE, <code>Mtime</code> must also be NONE. </p> </note>
   */
  Atime?: "NONE" | "BEST_EFFORT" | string;

  /**
   * <p>A value that indicates the last time that a file was modified (that is, a file was written to) before the PREPARING phase. </p> <p>Default value: PRESERVE. </p> <p>PRESERVE: Preserve original <code>Mtime</code> (recommended)</p> <p> NONE: Ignore <code>Mtime</code>. </p> <note> <p>If <code>Mtime</code> is set to PRESERVE, <code>Atime</code> must be set to BEST_EFFORT.</p> <p>If <code>Mtime</code> is set to NONE, <code>Atime</code> must also be set to NONE. </p> </note>
   */
  Mtime?: "NONE" | "PRESERVE" | string;

  /**
   * <p>The user ID (UID) of the file's owner. </p> <p>Default value: INT_VALUE. This preserves the integer value of the ID.</p> <p>INT_VALUE: Preserve the integer value of UID and group ID (GID) (recommended).</p> <p>NONE: Ignore UID and GID. </p>
   */
  Uid?: "NONE" | "INT_VALUE" | "NAME" | "BOTH" | string;

  /**
   * <p>The group ID (GID) of the file's owners. </p> <p>Default value: INT_VALUE. This preserves the integer value of the ID.</p> <p>INT_VALUE: Preserve the integer value of user ID (UID) and GID (recommended).</p> <p>NONE: Ignore UID and GID. </p>
   */
  Gid?: "NONE" | "INT_VALUE" | "NAME" | "BOTH" | string;

  /**
   * <p>A value that specifies whether files in the destination that don't exist in the source file system should be preserved. </p> <p>Default value: PRESERVE.</p> <p>PRESERVE: Ignore such destination files (recommended). </p> <p>REMOVE: Delete destination files that aren’t present in the source.</p>
   */
  PreserveDeletedFiles?: "PRESERVE" | "REMOVE" | string;

  /**
   * <p>A value that determines whether AWS DataSync should preserve the metadata of block and character devices in the source file system, and recreate the files with that device name and metadata on the destination.</p> <note> <p>AWS DataSync can't sync the actual contents of such devices, because they are nonterminal and don't return an end-of-file (EOF) marker.</p> </note> <p>Default value: NONE.</p> <p>NONE: Ignore special devices (recommended). </p> <p>PRESERVE: Preserve character and block device metadata. This option isn't currently supported for Amazon EFS. </p>
   */
  PreserveDevices?: "NONE" | "PRESERVE" | string;

  /**
   * <p>A value that determines which users or groups can access a file for a specific purpose such as reading, writing, or execution of the file. </p> <p>Default value: PRESERVE.</p> <p>PRESERVE: Preserve POSIX-style permissions (recommended).</p> <p>NONE: Ignore permissions. </p> <note> <p>AWS DataSync can preserve extant permissions of a source location.</p> </note>
   */
  PosixPermissions?: "NONE" | "BEST_EFFORT" | "PRESERVE" | string;

  /**
   * <p>A value that limits the bandwidth used by AWS DataSync. For example, if you want AWS DataSync to use a maximum of 1 MB, set this value to <code>1048576</code> (<code>=1024*1024</code>).</p>
   */
  BytesPerSecond?: number;
}

export type _UnmarshalledOptions = _Options;
