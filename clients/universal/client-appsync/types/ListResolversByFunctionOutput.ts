import { _UnmarshalledResolver } from "./_Resolver";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListResolversByFunctionOutput shape
 */
export interface ListResolversByFunctionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of resolvers.</p>
   */
  resolvers?: Array<_UnmarshalledResolver>;

  /**
   * <p>An identifier that can be used to return the next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
