import { _UnmarshalledDiscoveredResource } from "./_DiscoveredResource";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListDiscoveredResourcesOutput shape
 */
export interface ListDiscoveredResourcesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If there are more discovered resources than the max result, return the next token to be passed to the next call as a bookmark of where to start from.</p>
   */
  NextToken?: string;

  /**
   * <p>Returned list of discovered resources associated with the given MigrationTask.</p>
   */
  DiscoveredResourceList?: Array<_UnmarshalledDiscoveredResource>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
