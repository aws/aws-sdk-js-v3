import {
  _DocumentClassifierInputDataConfig,
  _UnmarshalledDocumentClassifierInputDataConfig
} from "./_DocumentClassifierInputDataConfig";
import {
  _DocumentClassifierOutputDataConfig,
  _UnmarshalledDocumentClassifierOutputDataConfig
} from "./_DocumentClassifierOutputDataConfig";
import {
  _ClassifierMetadata,
  _UnmarshalledClassifierMetadata
} from "./_ClassifierMetadata";
import { _VpcConfig, _UnmarshalledVpcConfig } from "./_VpcConfig";

/**
 * <p>Provides information about a document classifier.</p>
 */
export interface _DocumentClassifierProperties {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the document classifier.</p>
   */
  DocumentClassifierArn?: string;

  /**
   * <p>The language code for the language of the documents that the classifier was trained on.</p>
   */
  LanguageCode?: "en" | "es" | "fr" | "de" | "it" | "pt" | string;

  /**
   * <p>The status of the document classifier. If the status is <code>TRAINED</code> the classifier is ready to use. If the status is <code>FAILED</code> you can see additional information about why the classifier wasn't trained in the <code>Message</code> field.</p>
   */
  Status?:
    | "SUBMITTED"
    | "TRAINING"
    | "DELETING"
    | "STOP_REQUESTED"
    | "STOPPED"
    | "IN_ERROR"
    | "TRAINED"
    | string;

  /**
   * <p>Additional information about the status of the classifier.</p>
   */
  Message?: string;

  /**
   * <p>The time that the document classifier was submitted for training.</p>
   */
  SubmitTime?: Date | string | number;

  /**
   * <p>The time that training the document classifier completed.</p>
   */
  EndTime?: Date | string | number;

  /**
   * <p>Indicates the time when the training starts on documentation classifiers. You are billed for the time interval between this time and the value of TrainingEndTime. </p>
   */
  TrainingStartTime?: Date | string | number;

  /**
   * <p>The time that training of the document classifier was completed. Indicates the time when the training completes on documentation classifiers. You are billed for the time interval between this time and the value of TrainingStartTime.</p>
   */
  TrainingEndTime?: Date | string | number;

  /**
   * <p>The input data configuration that you supplied when you created the document classifier for training.</p>
   */
  InputDataConfig?: _DocumentClassifierInputDataConfig;

  /**
   * <p> Provides output results configuration parameters for custom classifier jobs.</p>
   */
  OutputDataConfig?: _DocumentClassifierOutputDataConfig;

  /**
   * <p>Information about the document classifier, including the number of documents used for training the classifier, the number of documents used for test the classifier, and an accuracy rating.</p>
   */
  ClassifierMetadata?: _ClassifierMetadata;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Management (IAM) role that grants Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your custom classifier. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
   */
  VpcConfig?: _VpcConfig;
}

export interface _UnmarshalledDocumentClassifierProperties
  extends _DocumentClassifierProperties {
  /**
   * <p>The time that the document classifier was submitted for training.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>The time that training the document classifier completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>Indicates the time when the training starts on documentation classifiers. You are billed for the time interval between this time and the value of TrainingEndTime. </p>
   */
  TrainingStartTime?: Date;

  /**
   * <p>The time that training of the document classifier was completed. Indicates the time when the training completes on documentation classifiers. You are billed for the time interval between this time and the value of TrainingStartTime.</p>
   */
  TrainingEndTime?: Date;

  /**
   * <p>The input data configuration that you supplied when you created the document classifier for training.</p>
   */
  InputDataConfig?: _UnmarshalledDocumentClassifierInputDataConfig;

  /**
   * <p> Provides output results configuration parameters for custom classifier jobs.</p>
   */
  OutputDataConfig?: _UnmarshalledDocumentClassifierOutputDataConfig;

  /**
   * <p>Information about the document classifier, including the number of documents used for training the classifier, the number of documents used for test the classifier, and an accuracy rating.</p>
   */
  ClassifierMetadata?: _UnmarshalledClassifierMetadata;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your custom classifier. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
   */
  VpcConfig?: _UnmarshalledVpcConfig;
}
