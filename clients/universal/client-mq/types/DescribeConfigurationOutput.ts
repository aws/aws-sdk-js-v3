import { _UnmarshalledConfigurationRevision } from "./_ConfigurationRevision";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeConfigurationOutput shape
 */
export interface DescribeConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * Required. The ARN of the configuration.
   */
  Arn?: string;

  /**
   * Required. The date and time of the configuration revision.
   */
  Created?: Date;

  /**
   * Required. The description of the configuration.
   */
  Description?: string;

  /**
   * Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ.
   */
  EngineType?: "ACTIVEMQ" | string;

  /**
   * Required. The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
   */
  EngineVersion?: string;

  /**
   * Required. The unique ID that Amazon MQ generates for the configuration.
   */
  Id?: string;

  /**
   * Required. The latest revision of the configuration.
   */
  LatestRevision?: _UnmarshalledConfigurationRevision;

  /**
   * Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.
   */
  Name?: string;

  /**
   * The list of all tags associated with this configuration.
   */
  Tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
