import { _Scope, _UnmarshalledScope } from "./_Scope";
import { _Attribute, _UnmarshalledAttribute } from "./_Attribute";

/**
 * <p>Contains information about what was excluded from an assessment run.</p>
 */
export interface _Exclusion {
  /**
   * <p>The ARN that specifies the exclusion.</p>
   */
  arn: string;

  /**
   * <p>The name of the exclusion.</p>
   */
  title: string;

  /**
   * <p>The description of the exclusion.</p>
   */
  description: string;

  /**
   * <p>The recommendation for the exclusion.</p>
   */
  recommendation: string;

  /**
   * <p>The AWS resources for which the exclusion pertains.</p>
   */
  scopes: Array<_Scope> | Iterable<_Scope>;

  /**
   * <p>The system-defined attributes for the exclusion.</p>
   */
  attributes?: Array<_Attribute> | Iterable<_Attribute>;
}

export interface _UnmarshalledExclusion extends _Exclusion {
  /**
   * <p>The AWS resources for which the exclusion pertains.</p>
   */
  scopes: Array<_UnmarshalledScope>;

  /**
   * <p>The system-defined attributes for the exclusion.</p>
   */
  attributes?: Array<_UnmarshalledAttribute>;
}
