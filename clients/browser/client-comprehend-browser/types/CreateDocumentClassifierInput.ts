import { _Tag } from "./_Tag";
import { _DocumentClassifierInputDataConfig } from "./_DocumentClassifierInputDataConfig";
import { _DocumentClassifierOutputDataConfig } from "./_DocumentClassifierOutputDataConfig";
import { _VpcConfig } from "./_VpcConfig";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDocumentClassifierInput shape
 */
export interface CreateDocumentClassifierInput {
  /**
   * <p>The name of the document classifier.</p>
   */
  DocumentClassifierName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Management (IAM) role that grants Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn: string;

  /**
   * <p>Tags to be associated with the document classifier being created. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department. </p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: _DocumentClassifierInputDataConfig;

  /**
   * <p>Enables the addition of output results configuration parameters for custom classifier jobs.</p>
   */
  OutputDataConfig?: _DocumentClassifierOutputDataConfig;

  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend: German ("de"), English ("en"), Spanish ("es"), French ("fr"), Italian ("it"), or Portuguese ("pt"). All documents must be in the same language.</p>
   */
  LanguageCode: "en" | "es" | "fr" | "de" | "it" | "pt" | string;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for your custom classifier. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
   */
  VpcConfig?: _VpcConfig;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
