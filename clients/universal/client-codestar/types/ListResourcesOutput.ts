import { _UnmarshalledResource } from "./_Resource";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListResourcesOutput shape
 */
export interface ListResourcesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of resources associated with the project. </p>
   */
  resources?: Array<_UnmarshalledResource>;

  /**
   * <p>The continuation token to use when requesting the next set of results, if there are more results to be returned.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
