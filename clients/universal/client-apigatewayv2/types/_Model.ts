/**
 * <p>Represents a data model for an API. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html">Create Models and Mapping Templates for Request and Response
 *  Mappings</a>.</p>
 */
export interface _Model {
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
  Name: string;

  /**
   * <p>The schema for the model. For application/json models, this should be JSON schema
   *  draft 4 model.</p>
   */
  Schema?: string;
}

export type _UnmarshalledModel = _Model;
