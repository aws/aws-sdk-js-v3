import { _OnPremConfig } from "./_OnPremConfig";
import { _NfsMountOptions } from "./_NfsMountOptions";
import { _TagListEntry } from "./_TagListEntry";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>CreateLocationNfsRequest</p>
 */
export interface CreateLocationNfsInput {
  /**
   * <p>The subdirectory in the NFS file system that is used to read data from the NFS source location or write data to the NFS destination. The NFS path should be a path that's exported by the NFS server, or a subdirectory of that path. The path should be such that it can be mounted by other NFS clients in your network. </p> <p>To see all the paths exported by your NFS server. run "<code>showmount -e nfs-server-name</code>" from an NFS client that has access to your server. You can specify any directory that appears in the results, and any subdirectory of that directory. Ensure that the NFS export is accessible without Kerberos authentication. </p> <p>To transfer all the data in the folder you specified, DataSync needs to have permissions to read all the data. To ensure this, either configure the NFS export with <code>no_root_squash,</code> or ensure that the permissions for all of the files that you want DataSync allow read access for all users. Doing either enables the agent to read the files. For the agent to access directories, you must additionally enable all execute access.</p> <p>For information about NFS export configuration, see 18.7. The /etc/exports Configuration File in the Red Hat Enterprise Linux documentation.</p>
   */
  Subdirectory: string;

  /**
   * <p>The name of the NFS server. This value is the IP address or Domain Name Service (DNS) name of the NFS server. An agent that is installed on-premises uses this host name to mount the NFS server in a network. </p> <note> <p>This name must either be DNS-compliant or must be an IP version 4 (IPv4) address.</p> </note>
   */
  ServerHostname: string;

  /**
   * <p>Contains a list of Amazon Resource Names (ARNs) of agents that are used to connect to an NFS server.</p>
   */
  OnPremConfig: _OnPremConfig;

  /**
   * <p>The NFS mount options that DataSync can use to mount your NFS share.</p>
   */
  MountOptions?: _NfsMountOptions;

  /**
   * <p>The key-value pair that represents the tag that you want to add to the location. The value can be an empty string. We recommend using tags to name your resources.</p>
   */
  Tags?: Array<_TagListEntry> | Iterable<_TagListEntry>;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
