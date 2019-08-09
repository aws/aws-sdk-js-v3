import { _CodeContent, _UnmarshalledCodeContent } from "./_CodeContent";

/**
 * <p>Describes code configuration for a Java-based Kinesis Data Analytics application.</p>
 */
export interface _ApplicationCodeConfiguration {
  /**
   * <p>The location and type of the application code.</p>
   */
  CodeContent?: _CodeContent;

  /**
   * <p>Specifies whether the code content is in text or zip format.</p>
   */
  CodeContentType: "PLAINTEXT" | "ZIPFILE" | string;
}

export interface _UnmarshalledApplicationCodeConfiguration
  extends _ApplicationCodeConfiguration {
  /**
   * <p>The location and type of the application code.</p>
   */
  CodeContent?: _UnmarshalledCodeContent;
}
