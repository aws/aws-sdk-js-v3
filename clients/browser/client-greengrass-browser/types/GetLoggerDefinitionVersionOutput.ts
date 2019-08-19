import { _UnmarshalledLoggerDefinitionVersion } from "./_LoggerDefinitionVersion";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetLoggerDefinitionVersionOutput shape
 */
export interface GetLoggerDefinitionVersionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * The ARN of the logger definition version.
   */
  Arn?: string;

  /**
   * The time, in milliseconds since the epoch, when the logger definition version was created.
   */
  CreationTimestamp?: string;

  /**
   * Information about the logger definition version.
   */
  Definition?: _UnmarshalledLoggerDefinitionVersion;

  /**
   * The ID of the logger definition version.
   */
  Id?: string;

  /**
   * The version of the logger definition version.
   */
  Version?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
