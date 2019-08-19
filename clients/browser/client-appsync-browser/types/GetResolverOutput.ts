import { _UnmarshalledResolver } from "./_Resolver";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetResolverOutput shape
 */
export interface GetResolverOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <code>Resolver</code> object.</p>
   */
  resolver?: _UnmarshalledResolver;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
