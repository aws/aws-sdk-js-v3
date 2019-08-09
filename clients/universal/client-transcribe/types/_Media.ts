/**
 * <p>Describes the input media file in a transcription request.</p>
 */
export interface _Media {
  /**
   * <p>The S3 location of the input media file. The URI must be in the same region as the API endpoint that you are calling. The general form is:</p> <p> <code> https://s3-&lt;aws-region&gt;.amazonaws.com/&lt;bucket-name&gt;/&lt;keyprefix&gt;/&lt;objectkey&gt; </code> </p> <p>For example:</p> <p> <code>https://s3-us-east-1.amazonaws.com/examplebucket/example.mp4</code> </p> <p> <code>https://s3-us-east-1.amazonaws.com/examplebucket/mediadocs/example.mp4</code> </p> <p>For more information about S3 object names, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#object-keys">Object Keys</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  MediaFileUri?: string;
}

export type _UnmarshalledMedia = _Media;
