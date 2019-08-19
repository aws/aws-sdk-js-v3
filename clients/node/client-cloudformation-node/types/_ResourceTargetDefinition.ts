/**
 * <p>The field that AWS CloudFormation will change, such as the name of a resource's property, and whether the resource will be recreated.</p>
 */
export interface _ResourceTargetDefinition {
  /**
   * <p>Indicates which resource attribute is triggering this update, such as a change in the resource attribute's <code>Metadata</code>, <code>Properties</code>, or <code>Tags</code>.</p>
   */
  Attribute?:
    | "Properties"
    | "Metadata"
    | "CreationPolicy"
    | "UpdatePolicy"
    | "DeletionPolicy"
    | "Tags"
    | string;

  /**
   * <p>If the <code>Attribute</code> value is <code>Properties</code>, the name of the property. For all other attributes, the value is null.</p>
   */
  Name?: string;

  /**
   * <p>If the <code>Attribute</code> value is <code>Properties</code>, indicates whether a change to this property causes the resource to be recreated. The value can be <code>Never</code>, <code>Always</code>, or <code>Conditionally</code>. To determine the conditions for a <code>Conditionally</code> recreation, see the update behavior for that <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">property</a> in the AWS CloudFormation User Guide.</p>
   */
  RequiresRecreation?: "Never" | "Conditionally" | "Always" | string;
}

export type _UnmarshalledResourceTargetDefinition = _ResourceTargetDefinition;
