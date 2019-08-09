import {
  _S3ContentLocation,
  _UnmarshalledS3ContentLocation
} from "./_S3ContentLocation";

/**
 * <p>Specifies either the application code, or the location of the application code, for a Java-based Amazon Kinesis Data Analytics application. </p>
 */
export interface _CodeContent {
  /**
   * <p>The text-format code for a Java-based Kinesis Data Analytics application.</p>
   */
  TextContent?: string;

  /**
   * <p>The zip-format code for a Java-based Kinesis Data Analytics application.</p>
   */
  ZipFileContent?: ArrayBuffer | ArrayBufferView | string;

  /**
   * <p>Information about the Amazon S3 bucket containing the application code.</p>
   */
  S3ContentLocation?: _S3ContentLocation;
}

export interface _UnmarshalledCodeContent extends _CodeContent {
  /**
   * <p>The zip-format code for a Java-based Kinesis Data Analytics application.</p>
   */
  ZipFileContent?: Uint8Array;

  /**
   * <p>Information about the Amazon S3 bucket containing the application code.</p>
   */
  S3ContentLocation?: _UnmarshalledS3ContentLocation;
}
