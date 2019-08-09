import { _UnmarshalledNamedQuery } from "./_NamedQuery";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetNamedQueryOutput shape
 */
export interface GetNamedQueryOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the query.</p>
   */
  NamedQuery?: _UnmarshalledNamedQuery;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
