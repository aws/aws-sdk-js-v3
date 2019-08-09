/**
 * <p>Represents a VM server location.</p>
 */
export interface _VmServerAddress {
  /**
   * <p>The identifier of the VM manager.</p>
   */
  vmManagerId?: string;

  /**
   * <p>The identifier of the VM.</p>
   */
  vmId?: string;
}

export type _UnmarshalledVmServerAddress = _VmServerAddress;
