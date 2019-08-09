import { _UnmarshalledGraphqlApi } from "./_GraphqlApi";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetGraphqlApiOutput shape
 */
export interface GetGraphqlApiOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <code>GraphqlApi</code> object.</p>
   */
  graphqlApi?: _UnmarshalledGraphqlApi;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
