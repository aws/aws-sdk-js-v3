import {
  _ParameterInlinePolicy,
  _UnmarshalledParameterInlinePolicy
} from "./_ParameterInlinePolicy";

/**
 * <p>Metadata includes information like the ARN of the last user and the date/time the parameter was last used.</p>
 */
export interface _ParameterMetadata {
  /**
   * <p>The parameter name.</p>
   */
  Name?: string;

  /**
   * <p>The type of parameter. Valid parameter types include the following: String, String list, Secure string.</p>
   */
  Type?: "String" | "StringList" | "SecureString" | string;

  /**
   * <p>The ID of the query key used for this parameter.</p>
   */
  KeyId?: string;

  /**
   * <p>Date the parameter was last changed or updated.</p>
   */
  LastModifiedDate?: Date | string | number;

  /**
   * <p>Amazon Resource Name (ARN) of the AWS user who last changed the parameter.</p>
   */
  LastModifiedUser?: string;

  /**
   * <p>Description of the parameter actions.</p>
   */
  Description?: string;

  /**
   * <p>A parameter name can include only the following letters and symbols.</p> <p>a-zA-Z0-9_.-</p>
   */
  AllowedPattern?: string;

  /**
   * <p>The parameter version.</p>
   */
  Version?: number;

  /**
   * <p>The parameter tier.</p>
   */
  Tier?: "Standard" | "Advanced" | string;

  /**
   * <p>A list of policies associated with a parameter.</p>
   */
  Policies?: Array<_ParameterInlinePolicy> | Iterable<_ParameterInlinePolicy>;
}

export interface _UnmarshalledParameterMetadata extends _ParameterMetadata {
  /**
   * <p>Date the parameter was last changed or updated.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>A list of policies associated with a parameter.</p>
   */
  Policies?: Array<_UnmarshalledParameterInlinePolicy>;
}
