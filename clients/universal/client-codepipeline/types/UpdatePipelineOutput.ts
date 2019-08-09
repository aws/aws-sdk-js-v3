import { _UnmarshalledPipelineDeclaration } from "./_PipelineDeclaration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of an <code>UpdatePipeline</code> action.</p>
 */
export interface UpdatePipelineOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The structure of the updated pipeline.</p>
   */
  pipeline?: _UnmarshalledPipelineDeclaration;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
