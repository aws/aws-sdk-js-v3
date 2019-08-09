/**
 * <p>Describes an instance export task.</p>
 */
export interface _ExportToS3TaskSpecification {
  /**
   * <p>The container format used to combine disk images with metadata (such as OVF). If absent, only the disk image is exported.</p>
   */
  ContainerFormat?: "ova" | string;

  /**
   * <p>The format for the exported image.</p>
   */
  DiskImageFormat?: "VMDK" | "RAW" | "VHD" | string;

  /**
   * <p>The S3 bucket for the destination image. The destination bucket must exist and grant WRITE and READ_ACP permissions to the AWS account <code>vm-import-export@amazon.com</code>.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The image is written to a single object in the S3 bucket at the S3 key s3prefix + exportTaskId + '.' + diskImageFormat.</p>
   */
  S3Prefix?: string;
}

export type _UnmarshalledExportToS3TaskSpecification = _ExportToS3TaskSpecification;
