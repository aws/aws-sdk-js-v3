import {
  _CodeContentDescription,
  _UnmarshalledCodeContentDescription
} from "./_CodeContentDescription";

/**
 * <p>Describes code configuration for a Java-based Kinesis Data Analytics application.</p>
 */
export interface _ApplicationCodeConfigurationDescription {
  /**
   * <p>Specifies whether the code content is in text or zip format.</p>
   */
  CodeContentType: "PLAINTEXT" | "ZIPFILE" | string;

  /**
   * <p>Describes details about the location and format of the application code.</p>
   */
  CodeContentDescription?: _CodeContentDescription;
}

export interface _UnmarshalledApplicationCodeConfigurationDescription
  extends _ApplicationCodeConfigurationDescription {
  /**
   * <p>Describes details about the location and format of the application code.</p>
   */
  CodeContentDescription?: _UnmarshalledCodeContentDescription;
}
