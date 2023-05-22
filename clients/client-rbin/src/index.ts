// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>This is the <i>Recycle Bin API Reference</i>. This documentation provides
 *       descriptions and syntax for each of the actions and data types in Recycle Bin.</p>
 *
 *          <p>Recycle Bin is a resource recovery feature that enables you to restore accidentally
 *       deleted snapshots and EBS-backed AMIs. When using Recycle Bin, if your resources are
 *       deleted, they are retained in the Recycle Bin for a time period that you specify.</p>
 *
 *          <p>You can restore a resource from the Recycle Bin at any time before its retention period
 *       expires. After you restore a resource from the Recycle Bin, the resource is removed from the
 *       Recycle Bin, and you can then use it in the same way you use any other resource of that type
 *       in your account. If the retention period expires and the resource is not restored, the resource
 *       is permanently deleted from the Recycle Bin and is no longer available for recovery. For more
 *       information about Recycle Bin, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-recycle-bin.html">
 *         Recycle Bin</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *
 * @packageDocumentation
 */
export * from "./RbinClient";
export * from "./Rbin";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { RbinServiceException } from "./models/RbinServiceException";
