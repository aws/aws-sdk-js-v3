import { _UnmarshalledCredentials } from "./_Credentials";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetFederationTokenOutput shape
 */
export interface GetFederationTokenOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The credentials to use for federation.</p>
   */
  Credentials?: _UnmarshalledCredentials;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
