import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a ListDeploymentInstances operation.</p>
 */
export interface ListDeploymentInstancesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of instance IDs.</p>
   */
  instancesList?: Array<string>;

  /**
   * <p>If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list deployment instances call to return the next set of deployment instances in the list.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
