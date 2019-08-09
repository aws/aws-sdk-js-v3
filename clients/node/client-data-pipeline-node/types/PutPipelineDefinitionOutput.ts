import { _UnmarshalledValidationError } from "./_ValidationError";
import { _UnmarshalledValidationWarning } from "./_ValidationWarning";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of PutPipelineDefinition.</p>
 */
export interface PutPipelineDefinitionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The validation errors that are associated with the objects defined in <code>pipelineObjects</code>.</p>
   */
  validationErrors?: Array<_UnmarshalledValidationError>;

  /**
   * <p>The validation warnings that are associated with the objects defined in <code>pipelineObjects</code>.</p>
   */
  validationWarnings?: Array<_UnmarshalledValidationWarning>;

  /**
   * <p>Indicates whether there were validation errors, and the pipeline definition is stored but cannot be activated until you correct the pipeline and call <code>PutPipelineDefinition</code> to commit the corrected pipeline.</p>
   */
  errored: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
