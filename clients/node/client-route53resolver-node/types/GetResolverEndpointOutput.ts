import { _UnmarshalledResolverEndpoint } from "./_ResolverEndpoint";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetResolverEndpointOutput shape
 */
export interface GetResolverEndpointOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the resolver endpoint that you specified in a <code>GetResolverEndpoint</code> request.</p>
   */
  ResolverEndpoint?: _UnmarshalledResolverEndpoint;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
