import {
  _SnapshotDetail,
  _UnmarshalledSnapshotDetail
} from "./_SnapshotDetail";

/**
 * <p>Describes an import image task.</p>
 */
export interface _ImportImageTask {
  /**
   * <p>The architecture of the virtual machine.</p> <p>Valid values: <code>i386</code> | <code>x86_64</code> | <code>arm64</code> </p>
   */
  Architecture?: string;

  /**
   * <p>A description of the import task.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether the image is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The target hypervisor for the import task.</p> <p>Valid values: <code>xen</code> </p>
   */
  Hypervisor?: string;

  /**
   * <p>The ID of the Amazon Machine Image (AMI) of the imported virtual machine.</p>
   */
  ImageId?: string;

  /**
   * <p>The ID of the import image task.</p>
   */
  ImportTaskId?: string;

  /**
   * <p>The identifier for the AWS Key Management Service (AWS KMS) customer master key (CMK) that was used to create the encrypted image.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The license type of the virtual machine.</p>
   */
  LicenseType?: string;

  /**
   * <p>The description string for the import image task.</p>
   */
  Platform?: string;

  /**
   * <p>The percentage of progress of the import image task.</p>
   */
  Progress?: string;

  /**
   * <p>Information about the snapshots.</p>
   */
  SnapshotDetails?: Array<_SnapshotDetail> | Iterable<_SnapshotDetail>;

  /**
   * <p>A brief status for the import image task.</p>
   */
  Status?: string;

  /**
   * <p>A descriptive status message for the import image task.</p>
   */
  StatusMessage?: string;
}

export interface _UnmarshalledImportImageTask extends _ImportImageTask {
  /**
   * <p>Information about the snapshots.</p>
   */
  SnapshotDetails?: Array<_UnmarshalledSnapshotDetail>;
}
