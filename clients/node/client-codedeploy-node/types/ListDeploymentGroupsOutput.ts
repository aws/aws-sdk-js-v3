import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a ListDeploymentGroups operation.</p>
 */
export interface ListDeploymentGroupsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The application name.</p>
   */
  applicationName?: string;

  /**
   * <p>A list of deployment group names.</p>
   */
  deploymentGroups?: Array<string>;

  /**
   * <p>If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list deployment groups call to return the next set of deployment groups in the list.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
