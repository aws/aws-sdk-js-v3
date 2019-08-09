import {
  _LambdaConfigType,
  _UnmarshalledLambdaConfigType
} from "./_LambdaConfigType";

/**
 * <p>A user pool description.</p>
 */
export interface _UserPoolDescriptionType {
  /**
   * <p>The ID in a user pool description.</p>
   */
  Id?: string;

  /**
   * <p>The name in a user pool description.</p>
   */
  Name?: string;

  /**
   * <p>The AWS Lambda configuration information in a user pool description.</p>
   */
  LambdaConfig?: _LambdaConfigType;

  /**
   * <p>The user pool status in a user pool description.</p>
   */
  Status?: "Enabled" | "Disabled" | string;

  /**
   * <p>The date the user pool description was last modified.</p>
   */
  LastModifiedDate?: Date | string | number;

  /**
   * <p>The date the user pool description was created.</p>
   */
  CreationDate?: Date | string | number;
}

export interface _UnmarshalledUserPoolDescriptionType
  extends _UserPoolDescriptionType {
  /**
   * <p>The AWS Lambda configuration information in a user pool description.</p>
   */
  LambdaConfig?: _UnmarshalledLambdaConfigType;

  /**
   * <p>The date the user pool description was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The date the user pool description was created.</p>
   */
  CreationDate?: Date;
}
