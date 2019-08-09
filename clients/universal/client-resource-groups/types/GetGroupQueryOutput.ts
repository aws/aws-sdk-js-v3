import { _UnmarshalledGroupQuery } from "./_GroupQuery";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetGroupQueryOutput shape
 */
export interface GetGroupQueryOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The resource query associated with the specified group.</p>
   */
  GroupQuery?: _UnmarshalledGroupQuery;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
