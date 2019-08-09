/**
 * <p>Represents a connector.</p>
 */
export interface _Connector {
  /**
   * <p>The identifier of the connector.</p>
   */
  connectorId?: string;

  /**
   * <p>The connector version.</p>
   */
  version?: string;

  /**
   * <p>The status of the connector.</p>
   */
  status?: "HEALTHY" | "UNHEALTHY" | string;

  /**
   * <p>The capabilities of the connector.</p>
   */
  capabilityList?:
    | Array<
        "VSPHERE" | "SCVMM" | "HYPERV-MANAGER" | "SNAPSHOT_BATCHING" | string
      >
    | Iterable<
        "VSPHERE" | "SCVMM" | "HYPERV-MANAGER" | "SNAPSHOT_BATCHING" | string
      >;

  /**
   * <p>The name of the VM manager.</p>
   */
  vmManagerName?: string;

  /**
   * <p>The VM management product.</p>
   */
  vmManagerType?: "VSPHERE" | "SCVMM" | "HYPERV-MANAGER" | string;

  /**
   * <p>The identifier of the VM manager.</p>
   */
  vmManagerId?: string;

  /**
   * <p>The IP address of the connector.</p>
   */
  ipAddress?: string;

  /**
   * <p>The MAC address of the connector.</p>
   */
  macAddress?: string;

  /**
   * <p>The time the connector was associated.</p>
   */
  associatedOn?: Date | string | number;
}

export interface _UnmarshalledConnector extends _Connector {
  /**
   * <p>The capabilities of the connector.</p>
   */
  capabilityList?: Array<
    "VSPHERE" | "SCVMM" | "HYPERV-MANAGER" | "SNAPSHOT_BATCHING" | string
  >;

  /**
   * <p>The time the connector was associated.</p>
   */
  associatedOn?: Date;
}
