/**
 * <p>Provides output results configuration parameters for custom classifier jobs. </p>
 */
export interface _DocumentClassifierOutputDataConfig {
  /**
   * <p>When you use the <code>OutputDataConfig</code> object while creating a custom classifier, you specify the Amazon S3 location where you want to write the confusion matrix. The URI must be in the same region as the API endpoint that you are calling. The location is used as the prefix for the actual location of this output file.</p> <p>When the custom classifier job is finished, the service creates the output file in a directory specific to the job. The <code>S3Uri</code> field contains the location of the output file, called <code>output.tar.gz</code>. It is a compressed archive that contains the confusion matrix.</p>
   */
  S3Uri?: string;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt the output results from an analysis job. The KmsKeyId can be one of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>KMS Key Alias: <code>"alias/ExampleAlias"</code> </p> </li> <li> <p>ARN of a KMS Key Alias: <code>"arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"</code> </p> </li> </ul>
   */
  KmsKeyId?: string;
}

export type _UnmarshalledDocumentClassifierOutputDataConfig = _DocumentClassifierOutputDataConfig;
