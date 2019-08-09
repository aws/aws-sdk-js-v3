import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a ListDeploymentConfigs operation.</p>
 */
export interface ListDeploymentConfigsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of deployment configurations, including built-in configurations such as CodeDeployDefault.OneAtATime.</p>
   */
  deploymentConfigsList?: Array<string>;

  /**
   * <p>If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list deployment configurations call to return the next set of deployment configurations in the list.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
