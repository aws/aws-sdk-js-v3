/**
 * <p>A warning about an issue that occurred during asynchronous text analysis (<a>StartDocumentAnalysis</a>) or asynchronous document-text detection (<a>StartDocumentTextDetection</a>). </p>
 */
export interface _Warning {
  /**
   * <p>The error code for the warning.</p>
   */
  ErrorCode?: string;

  /**
   * <p>A list of the pages that the warning applies to.</p>
   */
  Pages?: Array<number> | Iterable<number>;
}

export interface _UnmarshalledWarning extends _Warning {
  /**
   * <p>A list of the pages that the warning applies to.</p>
   */
  Pages?: Array<number>;
}
