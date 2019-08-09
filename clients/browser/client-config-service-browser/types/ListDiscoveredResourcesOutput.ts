import { _UnmarshalledResourceIdentifier } from "./_ResourceIdentifier";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface ListDiscoveredResourcesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The details that identify a resource that is discovered by AWS Config, including the resource type, ID, and (if available) the custom resource name.</p>
   */
  resourceIdentifiers?: Array<_UnmarshalledResourceIdentifier>;

  /**
   * <p>The string that you use in a subsequent request to get the next page of results in a paginated response.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
