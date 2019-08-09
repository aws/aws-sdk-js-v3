import { _UnmarshalledType } from "./_Type";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTypesOutput shape
 */
export interface ListTypesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <code>Type</code> objects.</p>
   */
  types?: Array<_UnmarshalledType>;

  /**
   * <p>An identifier to be passed in the next request to this operation to return the next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
