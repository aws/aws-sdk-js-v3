/**
 * <p>Information about a change to a resource attribute.</p>
 */
export interface _ResourceTargetDefinition {
  /**
   * <p>The attribute to be changed.</p>
   */
  Attribute?:
    | "PROPERTIES"
    | "METADATA"
    | "CREATIONPOLICY"
    | "UPDATEPOLICY"
    | "DELETIONPOLICY"
    | "TAGS"
    | string;

  /**
   * <p>If the attribute is <code>Properties</code>, the value is the name of the property. Otherwise, the value is null.</p>
   */
  Name?: string;

  /**
   * <p>If the attribute is <code>Properties</code>, indicates whether a change to this property causes the resource to be re-created.</p>
   */
  RequiresRecreation?: "NEVER" | "CONDITIONALLY" | "ALWAYS" | string;
}

export type _UnmarshalledResourceTargetDefinition = _ResourceTargetDefinition;
