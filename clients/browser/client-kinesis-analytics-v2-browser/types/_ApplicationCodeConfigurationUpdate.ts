import {
  _CodeContentUpdate,
  _UnmarshalledCodeContentUpdate
} from "./_CodeContentUpdate";

/**
 * <p>Describes updates to a Java-based Amazon Kinesis Data Analytics application.</p>
 */
export interface _ApplicationCodeConfigurationUpdate {
  /**
   * <p>Describes updates to the code content type.</p>
   */
  CodeContentTypeUpdate?: "PLAINTEXT" | "ZIPFILE" | string;

  /**
   * <p>Describes updates to the code content of an application.</p>
   */
  CodeContentUpdate?: _CodeContentUpdate;
}

export interface _UnmarshalledApplicationCodeConfigurationUpdate
  extends _ApplicationCodeConfigurationUpdate {
  /**
   * <p>Describes updates to the code content of an application.</p>
   */
  CodeContentUpdate?: _UnmarshalledCodeContentUpdate;
}
