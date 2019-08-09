/**
 * <p>This data type is used as a request parameter in the <a>AddAttributesToFindings</a> and <a>CreateAssessmentTemplate</a> actions.</p>
 */
export interface _Attribute {
  /**
   * <p>The attribute key.</p>
   */
  key: string;

  /**
   * <p>The value assigned to the attribute key.</p>
   */
  value?: string;
}

export type _UnmarshalledAttribute = _Attribute;
