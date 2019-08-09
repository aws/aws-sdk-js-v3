import { _UnmarshalledGraphqlApi } from "./_GraphqlApi";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListGraphqlApisOutput shape
 */
export interface ListGraphqlApisOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <code>GraphqlApi</code> objects.</p>
   */
  graphqlApis?: Array<_UnmarshalledGraphqlApi>;

  /**
   * <p>An identifier to be passed in the next request to this operation to return the next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
