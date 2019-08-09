/**
 * <p>Specifies a <code>grok</code> classifier for <code>CreateClassifier</code> to create.</p>
 */
export interface _CreateGrokClassifierRequest {
  /**
   * <p>An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, Amazon CloudWatch Logs, and so on.</p>
   */
  Classification: string;

  /**
   * <p>The name of the new classifier.</p>
   */
  Name: string;

  /**
   * <p>The grok pattern used by this classifier.</p>
   */
  GrokPattern: string;

  /**
   * <p>Optional custom grok patterns used by this classifier.</p>
   */
  CustomPatterns?: string;
}

export type _UnmarshalledCreateGrokClassifierRequest = _CreateGrokClassifierRequest;
