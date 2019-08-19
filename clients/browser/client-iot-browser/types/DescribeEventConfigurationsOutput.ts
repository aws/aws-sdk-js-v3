import { _UnmarshalledConfiguration } from "./_Configuration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeEventConfigurationsOutput shape
 */
export interface DescribeEventConfigurationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The event configurations.</p>
   */
  eventConfigurations?: {
    [key in
      | "THING"
      | "THING_GROUP"
      | "THING_TYPE"
      | "THING_GROUP_MEMBERSHIP"
      | "THING_GROUP_HIERARCHY"
      | "THING_TYPE_ASSOCIATION"
      | "JOB"
      | "JOB_EXECUTION"
      | "POLICY"
      | "CERTIFICATE"
      | "CA_CERTIFICATE"
      | string]: _UnmarshalledConfiguration
  };

  /**
   * <p>The creation date of the event configuration.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date the event configurations were last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
