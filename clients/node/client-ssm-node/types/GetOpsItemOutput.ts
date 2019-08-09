import { _UnmarshalledOpsItem } from "./_OpsItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetOpsItemOutput shape
 */
export interface GetOpsItemOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The OpsItem.</p>
   */
  OpsItem?: _UnmarshalledOpsItem;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
