/**
 * <p>Defines the high-level patch compliance state for a managed instance, providing information about the number of installed, missing, not applicable, and failed patches along with metadata about the operation when this information was gathered for the instance.</p>
 */
export interface _InstancePatchState {
  /**
   * <p>The ID of the managed instance the high-level patch compliance information was collected for.</p>
   */
  InstanceId: string;

  /**
   * <p>The name of the patch group the managed instance belongs to.</p>
   */
  PatchGroup: string;

  /**
   * <p>The ID of the patch baseline used to patch the instance.</p>
   */
  BaselineId: string;

  /**
   * <p>The ID of the patch baseline snapshot used during the patching operation when this compliance data was collected.</p>
   */
  SnapshotId?: string;

  /**
   * <p>An https URL or an Amazon S3 path-style URL to a list of patches to be installed. This patch installation list, which you maintain in an Amazon S3 bucket in YAML format and specify in the SSM document <code>AWS-RunPatchBaseline</code>, overrides the patches specified by the default patch baseline.</p> <p>For more information about the <code>InstallOverrideList</code> parameter, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-about-aws-runpatchbaseline.html">About the SSM Document AWS-RunPatchBaseline</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  InstallOverrideList?: string;

  /**
   * <p>Placeholder information. This field will always be empty in the current release of the service.</p>
   */
  OwnerInformation?: string;

  /**
   * <p>The number of patches from the patch baseline that are installed on the instance.</p>
   */
  InstalledCount?: number;

  /**
   * <p>The number of patches not specified in the patch baseline that are installed on the instance.</p>
   */
  InstalledOtherCount?: number;

  /**
   * <p>The number of instances with patches installed that are specified in a RejectedPatches list. Patches with a status of <i>InstalledRejected</i> were typically installed before they were added to a RejectedPatches list.</p> <note> <p>If ALLOW_AS_DEPENDENCY is the specified option for RejectedPatchesAction, the value of InstalledRejectedCount will always be 0 (zero).</p> </note>
   */
  InstalledRejectedCount?: number;

  /**
   * <p>The number of patches from the patch baseline that are applicable for the instance but aren't currently installed.</p>
   */
  MissingCount?: number;

  /**
   * <p>The number of patches from the patch baseline that were attempted to be installed during the last patching operation, but failed to install.</p>
   */
  FailedCount?: number;

  /**
   * <p>The number of patches beyond the supported limit of <code>NotApplicableCount</code> that are not reported by name to Systems Manager Inventory.</p>
   */
  UnreportedNotApplicableCount?: number;

  /**
   * <p>The number of patches from the patch baseline that aren't applicable for the instance and therefore aren't installed on the instance. This number may be truncated if the list of patch names is very large. The number of patches beyond this limit are reported in <code>UnreportedNotApplicableCount</code>.</p>
   */
  NotApplicableCount?: number;

  /**
   * <p>The time the most recent patching operation was started on the instance.</p>
   */
  OperationStartTime: Date | string | number;

  /**
   * <p>The time the most recent patching operation completed on the instance.</p>
   */
  OperationEndTime: Date | string | number;

  /**
   * <p>The type of patching operation that was performed: SCAN (assess patch compliance state) or INSTALL (install missing patches).</p>
   */
  Operation: "Scan" | "Install" | string;
}

export interface _UnmarshalledInstancePatchState extends _InstancePatchState {
  /**
   * <p>The time the most recent patching operation was started on the instance.</p>
   */
  OperationStartTime: Date;

  /**
   * <p>The time the most recent patching operation completed on the instance.</p>
   */
  OperationEndTime: Date;
}
