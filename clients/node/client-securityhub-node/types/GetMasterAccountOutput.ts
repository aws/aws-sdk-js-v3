import { _UnmarshalledInvitation } from "./_Invitation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetMasterAccountOutput shape
 */
export interface GetMasterAccountOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of details about the Security Hub master account for the current member account. </p>
   */
  Master?: _UnmarshalledInvitation;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
