/**
 * <p>Describes an instance to export.</p>
 */
export interface _InstanceExportDetails {
  /**
   * <p>The ID of the resource being exported.</p>
   */
  InstanceId?: string;

  /**
   * <p>The target virtualization environment.</p>
   */
  TargetEnvironment?: "citrix" | "vmware" | "microsoft" | string;
}

export type _UnmarshalledInstanceExportDetails = _InstanceExportDetails;
