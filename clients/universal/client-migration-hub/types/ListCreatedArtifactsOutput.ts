import { _UnmarshalledCreatedArtifact } from "./_CreatedArtifact";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListCreatedArtifactsOutput shape
 */
export interface ListCreatedArtifactsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If there are more created artifacts than the max result, return the next token to be passed to the next call as a bookmark of where to start from.</p>
   */
  NextToken?: string;

  /**
   * <p>List of created artifacts up to the maximum number of results specified in the request.</p>
   */
  CreatedArtifactList?: Array<_UnmarshalledCreatedArtifact>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
