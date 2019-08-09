import { _UnmarshalledResolverEndpoint } from "./_ResolverEndpoint";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateResolverEndpointOutput shape
 */
export interface UpdateResolverEndpointOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The response to an <code>UpdateResolverEndpoint</code> request.</p>
   */
  ResolverEndpoint?: _UnmarshalledResolverEndpoint;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
