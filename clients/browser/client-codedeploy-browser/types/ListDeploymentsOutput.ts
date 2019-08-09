import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a ListDeployments operation.</p>
 */
export interface ListDeploymentsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of deployment IDs.</p>
   */
  deployments?: Array<string>;

  /**
   * <p>If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list deployments call to return the next set of deployments in the list.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
