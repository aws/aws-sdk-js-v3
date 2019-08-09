import { _UnmarshalledOwner } from "./_Owner";
import { _UnmarshalledGrant } from "./_Grant";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetObjectAclOutput shape
 */
export interface GetObjectAclOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p/>
   */
  Owner?: _UnmarshalledOwner;

  /**
   * <p>A list of grants.</p>
   */
  Grants?: Array<_UnmarshalledGrant>;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request.</p>
   */
  RequestCharged?: "requester" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
