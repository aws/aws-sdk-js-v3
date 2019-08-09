/**
 * <p>This data type is used in the <a>Finding</a> data type.</p>
 */
export interface _InspectorServiceAttributes {
  /**
   * <p>The schema version of this data type.</p>
   */
  schemaVersion: number;

  /**
   * <p>The ARN of the assessment run during which the finding is generated.</p>
   */
  assessmentRunArn?: string;

  /**
   * <p>The ARN of the rules package that is used to generate the finding.</p>
   */
  rulesPackageArn?: string;
}

export type _UnmarshalledInspectorServiceAttributes = _InspectorServiceAttributes;
