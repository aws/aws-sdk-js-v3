import { _UnmarshalledConfigurationRevision } from "./_ConfigurationRevision";
import { _UnmarshalledSanitizationWarning } from "./_SanitizationWarning";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateConfigurationOutput shape
 */
export interface UpdateConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * Required. The Amazon Resource Name (ARN) of the configuration.
   */
  Arn?: string;

  /**
   * Required. The date and time of the configuration.
   */
  Created?: Date;

  /**
   * Required. The unique ID that Amazon MQ generates for the configuration.
   */
  Id?: string;

  /**
   * The latest revision of the configuration.
   */
  LatestRevision?: _UnmarshalledConfigurationRevision;

  /**
   * Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.
   */
  Name?: string;

  /**
   * The list of the first 20 warnings about the configuration XML elements or attributes that were sanitized.
   */
  Warnings?: Array<_UnmarshalledSanitizationWarning>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
