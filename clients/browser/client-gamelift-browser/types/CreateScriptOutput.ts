import { _UnmarshalledScript } from "./_Script";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateScriptOutput shape
 */
export interface CreateScriptOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The newly created script record with a unique script ID. The new script's storage location reflects an Amazon S3 location: (1) If the script was uploaded from an S3 bucket under your account, the storage location reflects the information that was provided in the <i>CreateScript</i> request; (2) If the script file was uploaded from a local zip file, the storage location reflects an S3 location controls by the Amazon GameLift service.</p>
   */
  Script?: _UnmarshalledScript;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
