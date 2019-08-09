import { _UnmarshalledValidationError } from "./_ValidationError";
import { _UnmarshalledValidationWarning } from "./_ValidationWarning";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of ValidatePipelineDefinition.</p>
 */
export interface ValidatePipelineDefinitionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Any validation errors that were found.</p>
   */
  validationErrors?: Array<_UnmarshalledValidationError>;

  /**
   * <p>Any validation warnings that were found.</p>
   */
  validationWarnings?: Array<_UnmarshalledValidationWarning>;

  /**
   * <p>Indicates whether there were validation errors.</p>
   */
  errored: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
