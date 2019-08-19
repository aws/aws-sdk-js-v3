import { _UnmarshalledServerGroupLaunchConfiguration } from "./_ServerGroupLaunchConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetAppLaunchConfigurationOutput shape
 */
export interface GetAppLaunchConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>ID of the application associated with the launch configuration.</p>
   */
  appId?: string;

  /**
   * <p>Name of the service role in the customer's account that Amazon CloudFormation uses to launch the application.</p>
   */
  roleName?: string;

  /**
   * <p>List of launch configurations for server groups in this application.</p>
   */
  serverGroupLaunchConfigurations?: Array<
    _UnmarshalledServerGroupLaunchConfiguration
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
