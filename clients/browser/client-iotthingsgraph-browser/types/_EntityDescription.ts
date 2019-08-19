import {
  _DefinitionDocument,
  _UnmarshalledDefinitionDocument
} from "./_DefinitionDocument";

/**
 * <p>Describes the properties of an entity.</p>
 */
export interface _EntityDescription {
  /**
   * <p>The entity ID.</p>
   */
  id?: string;

  /**
   * <p>The entity ARN.</p>
   */
  arn?: string;

  /**
   * <p>The entity type.</p>
   */
  type?:
    | "DEVICE"
    | "SERVICE"
    | "DEVICE_MODEL"
    | "CAPABILITY"
    | "STATE"
    | "ACTION"
    | "EVENT"
    | "PROPERTY"
    | "MAPPING"
    | "ENUM"
    | string;

  /**
   * <p>The time at which the entity was created.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The definition document of the entity.</p>
   */
  definition?: _DefinitionDocument;
}

export interface _UnmarshalledEntityDescription extends _EntityDescription {
  /**
   * <p>The time at which the entity was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The definition document of the entity.</p>
   */
  definition?: _UnmarshalledDefinitionDocument;
}
