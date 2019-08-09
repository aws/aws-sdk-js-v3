/**
 * <p>The container path, mount options, and size of the tmpfs mount.</p>
 */
export interface _Tmpfs {
  /**
   * <p>The absolute file path where the tmpfs volume is to be mounted.</p>
   */
  containerPath: string;

  /**
   * <p>The size (in MiB) of the tmpfs volume.</p>
   */
  size: number;

  /**
   * <p>The list of tmpfs volume mount options.</p> <p>Valid values: <code>"defaults" | "ro" | "rw" | "suid" | "nosuid" | "dev" | "nodev" | "exec" | "noexec" | "sync" | "async" | "dirsync" | "remount" | "mand" | "nomand" | "atime" | "noatime" | "diratime" | "nodiratime" | "bind" | "rbind" | "unbindable" | "runbindable" | "private" | "rprivate" | "shared" | "rshared" | "slave" | "rslave" | "relatime" | "norelatime" | "strictatime" | "nostrictatime" | "mode" | "uid" | "gid" | "nr_inodes" | "nr_blocks" | "mpol"</code> </p>
   */
  mountOptions?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledTmpfs extends _Tmpfs {
  /**
   * <p>The list of tmpfs volume mount options.</p> <p>Valid values: <code>"defaults" | "ro" | "rw" | "suid" | "nosuid" | "dev" | "nodev" | "exec" | "noexec" | "sync" | "async" | "dirsync" | "remount" | "mand" | "nomand" | "atime" | "noatime" | "diratime" | "nodiratime" | "bind" | "rbind" | "unbindable" | "runbindable" | "private" | "rprivate" | "shared" | "rshared" | "slave" | "rslave" | "relatime" | "norelatime" | "strictatime" | "nostrictatime" | "mode" | "uid" | "gid" | "nr_inodes" | "nr_blocks" | "mpol"</code> </p>
   */
  mountOptions?: Array<string>;
}
