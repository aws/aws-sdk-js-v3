import { _S3Object, _UnmarshalledS3Object } from "./_S3Object";

/**
 * <p>The Amazon S3 bucket that contains the document to be processed. It's used by asynchronous operations such as <a>StartDocumentTextDetection</a>.</p> <p>The input document can be an image file in JPG or PNG format. It can also be a file in PDF format.</p>
 */
export interface _DocumentLocation {
  /**
   * <p>The Amazon S3 bucket that contains the input document.</p>
   */
  S3Object?: _S3Object;
}

export interface _UnmarshalledDocumentLocation extends _DocumentLocation {
  /**
   * <p>The Amazon S3 bucket that contains the input document.</p>
   */
  S3Object?: _UnmarshalledS3Object;
}
