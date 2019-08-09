/**
 * <p>Specifies a grok classifier to update when passed to <code>UpdateClassifier</code>.</p>
 */
export interface _UpdateGrokClassifierRequest {
  /**
   * <p>The name of the <code>GrokClassifier</code>.</p>
   */
  Name: string;

  /**
   * <p>An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, Amazon CloudWatch Logs, and so on.</p>
   */
  Classification?: string;

  /**
   * <p>The grok pattern used by this classifier.</p>
   */
  GrokPattern?: string;

  /**
   * <p>Optional custom grok patterns used by this classifier.</p>
   */
  CustomPatterns?: string;
}

export type _UnmarshalledUpdateGrokClassifierRequest = _UpdateGrokClassifierRequest;
