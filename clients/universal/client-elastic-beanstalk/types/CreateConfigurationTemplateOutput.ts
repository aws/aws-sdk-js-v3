import { _UnmarshalledConfigurationOptionSetting } from "./_ConfigurationOptionSetting";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Describes the settings for a configuration set.</p>
 */
export interface CreateConfigurationTemplateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the solution stack this configuration set uses.</p>
   */
  SolutionStackName?: string;

  /**
   * <p>The ARN of the platform.</p>
   */
  PlatformArn?: string;

  /**
   * <p>The name of the application associated with this configuration set.</p>
   */
  ApplicationName?: string;

  /**
   * <p> If not <code>null</code>, the name of the configuration template for this configuration set. </p>
   */
  TemplateName?: string;

  /**
   * <p>Describes this configuration set.</p>
   */
  Description?: string;

  /**
   * <p> If not <code>null</code>, the name of the environment for this configuration set. </p>
   */
  EnvironmentName?: string;

  /**
   * <p> If this configuration set is associated with an environment, the <code>DeploymentStatus</code> parameter indicates the deployment status of this configuration set: </p> <ul> <li> <p> <code>null</code>: This configuration is not associated with a running environment.</p> </li> <li> <p> <code>pending</code>: This is a draft configuration that is not deployed to the associated environment but is in the process of deploying.</p> </li> <li> <p> <code>deployed</code>: This is the configuration that is currently deployed to the associated running environment.</p> </li> <li> <p> <code>failed</code>: This is a draft configuration that failed to successfully deploy.</p> </li> </ul>
   */
  DeploymentStatus?: "deployed" | "pending" | "failed" | string;

  /**
   * <p>The date (in UTC time) when this configuration set was created.</p>
   */
  DateCreated?: Date;

  /**
   * <p>The date (in UTC time) when this configuration set was last modified.</p>
   */
  DateUpdated?: Date;

  /**
   * <p>A list of the configuration options and their values in this configuration set.</p>
   */
  OptionSettings?: Array<_UnmarshalledConfigurationOptionSetting>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
