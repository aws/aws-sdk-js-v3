import {
  _S3ApplicationCodeLocationDescription,
  _UnmarshalledS3ApplicationCodeLocationDescription
} from "./_S3ApplicationCodeLocationDescription";

/**
 * <p>Describes details about the application code for a Java-based Kinesis Data Analytics application.</p>
 */
export interface _CodeContentDescription {
  /**
   * <p>The text-format code</p>
   */
  TextContent?: string;

  /**
   * <p>The checksum that can be used to validate zip-format code.</p>
   */
  CodeMD5?: string;

  /**
   * <p>The size in bytes of the application code. Can be used to validate zip-format code.</p>
   */
  CodeSize?: number;

  /**
   * <p>The S3 bucket Amazon Resource Name (ARN), file key, and object version of the application code stored in Amazon S3.</p>
   */
  S3ApplicationCodeLocationDescription?: _S3ApplicationCodeLocationDescription;
}

export interface _UnmarshalledCodeContentDescription
  extends _CodeContentDescription {
  /**
   * <p>The S3 bucket Amazon Resource Name (ARN), file key, and object version of the application code stored in Amazon S3.</p>
   */
  S3ApplicationCodeLocationDescription?: _UnmarshalledS3ApplicationCodeLocationDescription;
}
