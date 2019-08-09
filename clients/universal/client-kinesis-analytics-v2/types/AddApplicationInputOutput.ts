import { _UnmarshalledInputDescription } from "./_InputDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AddApplicationInputOutput shape
 */
export interface AddApplicationInputOutput
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
   * <p>Describes the application input configuration. </p>
   */
  InputDescriptions?: Array<_UnmarshalledInputDescription>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
