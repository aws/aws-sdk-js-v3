import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateModelOutput shape
 */
export interface UpdateModelOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The content-type for the model, for example, "application/json".</p>
   */
  ContentType?: string;

  /**
   * <p>The description of the model.</p>
   */
  Description?: string;

  /**
   * <p>The model identifier.</p>
   */
  ModelId?: string;

  /**
   * <p>The name of the model. Must be alphanumeric.</p>
   */
  Name?: string;

  /**
   * <p>The schema for the model. For application/json models, this should be JSON schema
   *  draft 4 model.</p>
   */
  Schema?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
