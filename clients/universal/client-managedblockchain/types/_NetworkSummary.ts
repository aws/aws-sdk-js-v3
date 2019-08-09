/**
 * <p>A summary of network configuration properties.</p>
 */
export interface _NetworkSummary {
  /**
   * <p>The unique identifier of the network.</p>
   */
  Id?: string;

  /**
   * <p>The name of the network.</p>
   */
  Name?: string;

  /**
   * <p>An optional description of the network.</p>
   */
  Description?: string;

  /**
   * <p>The blockchain framework that the network uses.</p>
   */
  Framework?: "HYPERLEDGER_FABRIC" | string;

  /**
   * <p>The version of the blockchain framework that the network uses.</p>
   */
  FrameworkVersion?: string;

  /**
   * <p>The current status of the network.</p>
   */
  Status?:
    | "CREATING"
    | "AVAILABLE"
    | "CREATE_FAILED"
    | "DELETING"
    | "DELETED"
    | string;

  /**
   * <p>The date and time that the network was created.</p>
   */
  CreationDate?: Date | string | number;
}

export interface _UnmarshalledNetworkSummary extends _NetworkSummary {
  /**
   * <p>The date and time that the network was created.</p>
   */
  CreationDate?: Date;
}
