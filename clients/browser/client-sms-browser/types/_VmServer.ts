import {
  _VmServerAddress,
  _UnmarshalledVmServerAddress
} from "./_VmServerAddress";

/**
 * <p>Represents a VM server.</p>
 */
export interface _VmServer {
  /**
   * <p>Information about the VM server location.</p>
   */
  vmServerAddress?: _VmServerAddress;

  /**
   * <p>The name of the VM.</p>
   */
  vmName?: string;

  /**
   * <p>The name of the VM manager.</p>
   */
  vmManagerName?: string;

  /**
   * <p>The type of VM management product.</p>
   */
  vmManagerType?: "VSPHERE" | "SCVMM" | "HYPERV-MANAGER" | string;

  /**
   * <p>The VM folder path in the vCenter Server virtual machine inventory tree.</p>
   */
  vmPath?: string;
}

export interface _UnmarshalledVmServer extends _VmServer {
  /**
   * <p>Information about the VM server location.</p>
   */
  vmServerAddress?: _UnmarshalledVmServerAddress;
}
