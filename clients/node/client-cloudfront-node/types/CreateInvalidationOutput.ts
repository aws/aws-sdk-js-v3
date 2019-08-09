import { _UnmarshalledInvalidation } from "./_Invalidation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface CreateInvalidationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The fully qualified URI of the distribution and invalidation batch request, including the <code>Invalidation ID</code>.</p>
   */
  Location?: string;

  /**
   * <p>The invalidation's information.</p>
   */
  Invalidation?: _UnmarshalledInvalidation;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
