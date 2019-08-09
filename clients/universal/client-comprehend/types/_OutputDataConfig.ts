/**
 * <p>Provides configuration parameters for the output of topic detection jobs.</p> <p/>
 */
export interface _OutputDataConfig {
  /**
   * <p>When you use the <code>OutputDataConfig</code> object with asynchronous operations, you specify the Amazon S3 location where you want to write the output data. The URI must be in the same region as the API endpoint that you are calling. The location is used as the prefix for the actual location of the output file.</p> <p>When the topic detection job is finished, the service creates an output file in a directory specific to the job. The <code>S3Uri</code> field contains the location of the output file, called <code>output.tar.gz</code>. It is a compressed archive that contains the ouput of the operation.</p>
   */
  S3Uri: string;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt the output results from an analysis job. The KmsKeyId can be one of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>KMS Key Alias: <code>"alias/ExampleAlias"</code> </p> </li> <li> <p>ARN of a KMS Key Alias: <code>"arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"</code> </p> </li> </ul>
   */
  KmsKeyId?: string;
}

export type _UnmarshalledOutputDataConfig = _OutputDataConfig;
