/**
 * <p>Describes a disk image.</p>
 */
export interface _DiskImageDetail {
  /**
   * <p>The size of the disk image, in GiB.</p>
   */
  Bytes: number;

  /**
   * <p>The disk image format.</p>
   */
  Format: "VMDK" | "RAW" | "VHD" | string;

  /**
   * <p>A presigned URL for the import manifest stored in Amazon S3 and presented here as an Amazon S3 presigned URL. For information about creating a presigned URL for an Amazon S3 object, read the "Query String Request Authentication Alternative" section of the <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">Authenticating REST Requests</a> topic in the <i>Amazon Simple Storage Service Developer Guide</i>.</p> <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
   */
  ImportManifestUrl: string;
}

export type _UnmarshalledDiskImageDetail = _DiskImageDetail;
