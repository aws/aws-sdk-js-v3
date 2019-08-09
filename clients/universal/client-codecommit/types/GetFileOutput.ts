import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetFileOutput shape
 */
export interface GetFileOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The full commit ID of the commit that contains the content returned by GetFile.</p>
   */
  commitId: string;

  /**
   * <p>The blob ID of the object that represents the file content.</p>
   */
  blobId: string;

  /**
   * <p>The fully qualified path to the specified file. This returns the name and extension of the file.</p>
   */
  filePath: string;

  /**
   * <p>The extrapolated file mode permissions of the blob. Valid values include strings such as EXECUTABLE and not numeric values.</p> <note> <p>The file mode permissions returned by this API are not the standard file mode permission values, such as 100644, but rather extrapolated values. See below for a full list of supported return values.</p> </note>
   */
  fileMode: "EXECUTABLE" | "NORMAL" | "SYMLINK" | string;

  /**
   * <p>The size of the contents of the file, in bytes.</p>
   */
  fileSize: number;

  /**
   * <p>The base-64 encoded binary data object that represents the content of the file.</p>
   */
  fileContent: Uint8Array;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
