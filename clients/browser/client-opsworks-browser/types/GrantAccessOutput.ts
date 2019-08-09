import { _UnmarshalledTemporaryCredential } from "./_TemporaryCredential";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a <code>GrantAccess</code> request.</p>
 */
export interface GrantAccessOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A <code>TemporaryCredential</code> object that contains the data needed to log in to the instance by RDP clients, such as the Microsoft Remote Desktop Connection.</p>
   */
  TemporaryCredential?: _UnmarshalledTemporaryCredential;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
