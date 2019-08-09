/**
 * <p>Describes a file share.</p>
 */
export interface _FileShareInfo {
  /**
   * <p>The type of the file share.</p>
   */
  FileShareType?: "NFS" | "SMB" | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the file share. </p>
   */
  FileShareARN?: string;

  /**
   * <p>The ID of the file share. </p>
   */
  FileShareId?: string;

  /**
   * <p>The status of the file share. Possible values are <code>CREATING</code>, <code>UPDATING</code>, <code>AVAILABLE</code> and <code>DELETING</code>. </p>
   */
  FileShareStatus?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.</p>
   */
  GatewayARN?: string;
}

export type _UnmarshalledFileShareInfo = _FileShareInfo;
