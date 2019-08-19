import { _UnmarshalledInputProcessingConfigurationDescription } from "./_InputProcessingConfigurationDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AddApplicationInputProcessingConfigurationOutput shape
 */
export interface AddApplicationInputProcessingConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationARN?: string;

  /**
   * <p>Provides the current application version.</p>
   */
  ApplicationVersionId?: number;

  /**
   * <p>The input ID that is associated with the application input. This is the ID that Amazon Kinesis Data Analytics assigns to each input configuration that you add to your application.</p>
   */
  InputId?: string;

  /**
   * <p>The description of the preprocessor that executes on records in this input before the application's code is run.</p>
   */
  InputProcessingConfigurationDescription?: _UnmarshalledInputProcessingConfigurationDescription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
