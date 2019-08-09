import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a <code>DescribeStackProvisioningParameters</code> request.</p>
 */
export interface DescribeStackProvisioningParametersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The AWS OpsWorks Stacks agent installer's URL.</p>
   */
  AgentInstallerUrl?: string;

  /**
   * <p>An embedded object that contains the provisioning parameters.</p>
   */
  Parameters?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
