import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribePatchGroupStateOutput shape
 */
export interface DescribePatchGroupStateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The number of instances in the patch group.</p>
   */
  Instances?: number;

  /**
   * <p>The number of instances with installed patches.</p>
   */
  InstancesWithInstalledPatches?: number;

  /**
   * <p>The number of instances with patches installed that aren't defined in the patch baseline.</p>
   */
  InstancesWithInstalledOtherPatches?: number;

  /**
   * <p>The number of instances with patches installed that are specified in a RejectedPatches list. Patches with a status of <i>INSTALLED_REJECTED</i> were typically installed before they were added to a RejectedPatches list.</p> <note> <p>If ALLOW_AS_DEPENDENCY is the specified option for RejectedPatchesAction, the value of InstancesWithInstalledRejectedPatches will always be 0 (zero).</p> </note>
   */
  InstancesWithInstalledRejectedPatches?: number;

  /**
   * <p>The number of instances with missing patches from the patch baseline.</p>
   */
  InstancesWithMissingPatches?: number;

  /**
   * <p>The number of instances with patches from the patch baseline that failed to install.</p>
   */
  InstancesWithFailedPatches?: number;

  /**
   * <p>The number of instances with patches that aren't applicable.</p>
   */
  InstancesWithNotApplicablePatches?: number;

  /**
   * <p>The number of instances with <code>NotApplicable</code> patches beyond the supported limit, which are not reported by name to Systems Manager Inventory.</p>
   */
  InstancesWithUnreportedNotApplicablePatches?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
