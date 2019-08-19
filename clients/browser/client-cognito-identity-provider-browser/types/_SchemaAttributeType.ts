import {
  _NumberAttributeConstraintsType,
  _UnmarshalledNumberAttributeConstraintsType
} from "./_NumberAttributeConstraintsType";
import {
  _StringAttributeConstraintsType,
  _UnmarshalledStringAttributeConstraintsType
} from "./_StringAttributeConstraintsType";

/**
 * <p>Contains information about the schema attribute.</p>
 */
export interface _SchemaAttributeType {
  /**
   * <p>A schema attribute of the name type.</p>
   */
  Name?: string;

  /**
   * <p>The attribute data type.</p>
   */
  AttributeDataType?: "String" | "Number" | "DateTime" | "Boolean" | string;

  /**
   * <p>Specifies whether the attribute type is developer only.</p>
   */
  DeveloperOnlyAttribute?: boolean;

  /**
   * <p>Specifies whether the value of the attribute can be changed.</p> <p>For any user pool attribute that's mapped to an identity provider attribute, you must set this parameter to <code>true</code>. Amazon Cognito updates mapped attributes when users sign in to your application through an identity provider. If an attribute is immutable, Amazon Cognito throws an error when it attempts to update the attribute. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-specifying-attribute-mapping.html">Specifying Identity Provider Attribute Mappings for Your User Pool</a>.</p>
   */
  Mutable?: boolean;

  /**
   * <p>Specifies whether a user pool attribute is required. If the attribute is required and the user does not provide a value, registration or sign-in will fail.</p>
   */
  Required?: boolean;

  /**
   * <p>Specifies the constraints for an attribute of the number type.</p>
   */
  NumberAttributeConstraints?: _NumberAttributeConstraintsType;

  /**
   * <p>Specifies the constraints for an attribute of the string type.</p>
   */
  StringAttributeConstraints?: _StringAttributeConstraintsType;
}

export interface _UnmarshalledSchemaAttributeType extends _SchemaAttributeType {
  /**
   * <p>Specifies the constraints for an attribute of the number type.</p>
   */
  NumberAttributeConstraints?: _UnmarshalledNumberAttributeConstraintsType;

  /**
   * <p>Specifies the constraints for an attribute of the string type.</p>
   */
  StringAttributeConstraints?: _UnmarshalledStringAttributeConstraintsType;
}
