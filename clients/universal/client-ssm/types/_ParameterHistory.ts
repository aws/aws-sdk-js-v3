import {
  _ParameterInlinePolicy,
  _UnmarshalledParameterInlinePolicy
} from "./_ParameterInlinePolicy";

/**
 * <p>Information about parameter usage.</p>
 */
export interface _ParameterHistory {
  /**
   * <p>The name of the parameter.</p>
   */
  Name?: string;

  /**
   * <p>The type of parameter used.</p>
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
   * <p>Information about the parameter.</p>
   */
  Description?: string;

  /**
   * <p>The parameter value.</p>
   */
  Value?: string;

  /**
   * <p>Parameter names can include the following letters and symbols.</p> <p>a-zA-Z0-9_.-</p>
   */
  AllowedPattern?: string;

  /**
   * <p>The parameter version.</p>
   */
  Version?: number;

  /**
   * <p>Labels assigned to the parameter version.</p>
   */
  Labels?: Array<string> | Iterable<string>;

  /**
   * <p>The parameter tier.</p>
   */
  Tier?: "Standard" | "Advanced" | string;

  /**
   * <p>Information about the policies assigned to a parameter.</p> <p> <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-policies.html">Working with Parameter Policies</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  Policies?: Array<_ParameterInlinePolicy> | Iterable<_ParameterInlinePolicy>;
}

export interface _UnmarshalledParameterHistory extends _ParameterHistory {
  /**
   * <p>Date the parameter was last changed or updated.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>Labels assigned to the parameter version.</p>
   */
  Labels?: Array<string>;

  /**
   * <p>Information about the policies assigned to a parameter.</p> <p> <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-policies.html">Working with Parameter Policies</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  Policies?: Array<_UnmarshalledParameterInlinePolicy>;
}
