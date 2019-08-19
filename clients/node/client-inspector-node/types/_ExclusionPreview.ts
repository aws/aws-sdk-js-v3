import { _Scope, _UnmarshalledScope } from "./_Scope";
import { _Attribute, _UnmarshalledAttribute } from "./_Attribute";

/**
 * <p>Contains information about what is excluded from an assessment run given the current state of the assessment template.</p>
 */
export interface _ExclusionPreview {
  /**
   * <p>The name of the exclusion preview.</p>
   */
  title: string;

  /**
   * <p>The description of the exclusion preview.</p>
   */
  description: string;

  /**
   * <p>The recommendation for the exclusion preview.</p>
   */
  recommendation: string;

  /**
   * <p>The AWS resources for which the exclusion preview pertains.</p>
   */
  scopes: Array<_Scope> | Iterable<_Scope>;

  /**
   * <p>The system-defined attributes for the exclusion preview.</p>
   */
  attributes?: Array<_Attribute> | Iterable<_Attribute>;
}

export interface _UnmarshalledExclusionPreview extends _ExclusionPreview {
  /**
   * <p>The AWS resources for which the exclusion preview pertains.</p>
   */
  scopes: Array<_UnmarshalledScope>;

  /**
   * <p>The system-defined attributes for the exclusion preview.</p>
   */
  attributes?: Array<_UnmarshalledAttribute>;
}
