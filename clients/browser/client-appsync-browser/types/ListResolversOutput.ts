import { _UnmarshalledResolver } from "./_Resolver";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListResolversOutput shape
 */
export interface ListResolversOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <code>Resolver</code> objects.</p>
   */
  resolvers?: Array<_UnmarshalledResolver>;

  /**
   * <p>An identifier to be passed in the next request to this operation to return the next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
