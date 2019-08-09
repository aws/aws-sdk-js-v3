import {
  _EntityRecognizerInputDataConfig,
  _UnmarshalledEntityRecognizerInputDataConfig
} from "./_EntityRecognizerInputDataConfig";
import {
  _EntityRecognizerMetadata,
  _UnmarshalledEntityRecognizerMetadata
} from "./_EntityRecognizerMetadata";
import { _VpcConfig, _UnmarshalledVpcConfig } from "./_VpcConfig";

/**
 * <p>Describes information about an entity recognizer.</p>
 */
export interface _EntityRecognizerProperties {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the entity recognizer.</p>
   */
  EntityRecognizerArn?: string;

  /**
   * <p> The language of the input documents. All documents must be in the same language. Only English ("en") is currently supported.</p>
   */
  LanguageCode?: "en" | "es" | "fr" | "de" | "it" | "pt" | string;

  /**
   * <p>Provides the status of the entity recognizer.</p>
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
   * <p> A description of the status of the recognizer.</p>
   */
  Message?: string;

  /**
   * <p>The time that the recognizer was submitted for processing.</p>
   */
  SubmitTime?: Date | string | number;

  /**
   * <p>The time that the recognizer creation completed.</p>
   */
  EndTime?: Date | string | number;

  /**
   * <p>The time that training of the entity recognizer started.</p>
   */
  TrainingStartTime?: Date | string | number;

  /**
   * <p>The time that training of the entity recognizer was completed.</p>
   */
  TrainingEndTime?: Date | string | number;

  /**
   * <p>The input data properties of an entity recognizer.</p>
   */
  InputDataConfig?: _EntityRecognizerInputDataConfig;

  /**
   * <p> Provides information about an entity recognizer.</p>
   */
  RecognizerMetadata?: _EntityRecognizerMetadata;

  /**
   * <p> The Amazon Resource Name (ARN) of the AWS Identity and Management (IAM) role that grants Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your custom entity recognizer. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
   */
  VpcConfig?: _VpcConfig;
}

export interface _UnmarshalledEntityRecognizerProperties
  extends _EntityRecognizerProperties {
  /**
   * <p>The time that the recognizer was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>The time that the recognizer creation completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>The time that training of the entity recognizer started.</p>
   */
  TrainingStartTime?: Date;

  /**
   * <p>The time that training of the entity recognizer was completed.</p>
   */
  TrainingEndTime?: Date;

  /**
   * <p>The input data properties of an entity recognizer.</p>
   */
  InputDataConfig?: _UnmarshalledEntityRecognizerInputDataConfig;

  /**
   * <p> Provides information about an entity recognizer.</p>
   */
  RecognizerMetadata?: _UnmarshalledEntityRecognizerMetadata;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your custom entity recognizer. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
   */
  VpcConfig?: _UnmarshalledVpcConfig;
}
