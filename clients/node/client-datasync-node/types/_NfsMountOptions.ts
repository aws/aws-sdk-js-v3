/**
 * <p>Represents the mount options that are available for DataSync to access an NFS location.</p>
 */
export interface _NfsMountOptions {
  /**
   * <p>The specific NFS version that you want DataSync to use to mount your NFS share. If you don't specify a version, DataSync defaults to <code>AUTOMATIC</code>. That is, DataSync automatically selects a version based on negotiation with the NFS server.</p>
   */
  Version?: "AUTOMATIC" | "NFS3" | "NFS4_0" | "NFS4_1" | string;
}

export type _UnmarshalledNfsMountOptions = _NfsMountOptions;
