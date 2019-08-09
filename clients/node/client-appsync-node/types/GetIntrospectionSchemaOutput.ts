import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetIntrospectionSchemaOutput shape
 */
export interface GetIntrospectionSchemaOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The schema, in GraphQL Schema Definition Language (SDL) format.</p> <p>For more information, see the <a href="http://graphql.org/learn/schema/">GraphQL SDL documentation</a>.</p>
   */
  schema?: Uint8Array;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
