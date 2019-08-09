import { _UnmarshalledSnapshotDetail } from "./_SnapshotDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ImportImageOutput shape
 */
export interface ImportImageOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The architecture of the virtual machine.</p>
   */
  Architecture?: string;

  /**
   * <p>A description of the import task.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether the AMI is encypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The target hypervisor of the import task.</p>
   */
  Hypervisor?: string;

  /**
   * <p>The ID of the Amazon Machine Image (AMI) created by the import task.</p>
   */
  ImageId?: string;

  /**
   * <p>The task ID of the import image task.</p>
   */
  ImportTaskId?: string;

  /**
   * <p>The identifier for the AWS Key Management Service (AWS KMS) customer master key (CMK) that was used to create the encrypted AMI.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The license type of the virtual machine.</p>
   */
  LicenseType?: string;

  /**
   * <p>The operating system of the virtual machine.</p>
   */
  Platform?: string;

  /**
   * <p>The progress of the task.</p>
   */
  Progress?: string;

  /**
   * <p>Information about the snapshots.</p>
   */
  SnapshotDetails?: Array<_UnmarshalledSnapshotDetail>;

  /**
   * <p>A brief status of the task.</p>
   */
  Status?: string;

  /**
   * <p>A detailed status message of the import task.</p>
   */
  StatusMessage?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
