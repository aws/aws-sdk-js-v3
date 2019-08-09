import { _UnmarshalledDeleteFileSystemWindowsResponse } from "./_DeleteFileSystemWindowsResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The response object for the <code>DeleteFileSystem</code> operation.</p>
 */
export interface DeleteFileSystemOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the file system being deleted.</p>
   */
  FileSystemId?: string;

  /**
   * <p>The file system lifecycle for the deletion request. Should be <code>DELETING</code>.</p>
   */
  Lifecycle?:
    | "AVAILABLE"
    | "CREATING"
    | "FAILED"
    | "DELETING"
    | "MISCONFIGURED"
    | "UPDATING"
    | string;

  /**
   * <p>The response object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation.</p>
   */
  WindowsResponse?: _UnmarshalledDeleteFileSystemWindowsResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
