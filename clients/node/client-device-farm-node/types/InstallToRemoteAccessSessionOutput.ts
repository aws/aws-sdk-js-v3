import { _UnmarshalledUpload } from "./_Upload";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the response from the server after AWS Device Farm makes a request to install to a remote access session.</p>
 */
export interface InstallToRemoteAccessSessionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An app to upload or that has been uploaded.</p>
   */
  appUpload?: _UnmarshalledUpload;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
