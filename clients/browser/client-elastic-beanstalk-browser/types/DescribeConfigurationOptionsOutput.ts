import { _UnmarshalledConfigurationOptionDescription } from "./_ConfigurationOptionDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Describes the settings for a specified configuration set.</p>
 */
export interface DescribeConfigurationOptionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the solution stack these configuration options belong to.</p>
   */
  SolutionStackName?: string;

  /**
   * <p>The ARN of the platform.</p>
   */
  PlatformArn?: string;

  /**
   * <p> A list of <a>ConfigurationOptionDescription</a>. </p>
   */
  Options?: Array<_UnmarshalledConfigurationOptionDescription>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
