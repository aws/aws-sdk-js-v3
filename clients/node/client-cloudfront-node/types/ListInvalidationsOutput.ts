import { _UnmarshalledInvalidationList } from "./_InvalidationList";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The returned result of the corresponding request. </p>
 */
export interface ListInvalidationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about invalidation batches. </p>
   */
  InvalidationList?: _UnmarshalledInvalidationList;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
