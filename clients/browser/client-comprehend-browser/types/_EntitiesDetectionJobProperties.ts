import {
  _InputDataConfig,
  _UnmarshalledInputDataConfig
} from "./_InputDataConfig";
import {
  _OutputDataConfig,
  _UnmarshalledOutputDataConfig
} from "./_OutputDataConfig";
import { _VpcConfig, _UnmarshalledVpcConfig } from "./_VpcConfig";

/**
 * <p>Provides information about an entities detection job.</p>
 */
export interface _EntitiesDetectionJobProperties {
  /**
   * <p>The identifier assigned to the entities detection job.</p>
   */
  JobId?: string;

  /**
   * <p>The name that you assigned the entities detection job.</p>
   */
  JobName?: string;

  /**
   * <p>The current status of the entities detection job. If the status is <code>FAILED</code>, the <code>Message</code> field shows the reason for the failure.</p>
   */
  JobStatus?:
    | "SUBMITTED"
    | "IN_PROGRESS"
    | "COMPLETED"
    | "FAILED"
    | "STOP_REQUESTED"
    | "STOPPED"
    | string;

  /**
   * <p>A description of the status of a job.</p>
   */
  Message?: string;

  /**
   * <p>The time that the entities detection job was submitted for processing.</p>
   */
  SubmitTime?: Date | string | number;

  /**
   * <p>The time that the entities detection job completed</p>
   */
  EndTime?: Date | string | number;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the entity recognizer.</p>
   */
  EntityRecognizerArn?: string;

  /**
   * <p>The input data configuration that you supplied when you created the entities detection job.</p>
   */
  InputDataConfig?: _InputDataConfig;

  /**
   * <p>The output data configuration that you supplied when you created the entities detection job. </p>
   */
  OutputDataConfig?: _OutputDataConfig;

  /**
   * <p>The language code of the input documents.</p>
   */
  LanguageCode?: "en" | "es" | "fr" | "de" | "it" | "pt" | string;

  /**
   * <p>The Amazon Resource Name (ARN) that gives Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your entity detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
   */
  VpcConfig?: _VpcConfig;
}

export interface _UnmarshalledEntitiesDetectionJobProperties
  extends _EntitiesDetectionJobProperties {
  /**
   * <p>The time that the entities detection job was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>The time that the entities detection job completed</p>
   */
  EndTime?: Date;

  /**
   * <p>The input data configuration that you supplied when you created the entities detection job.</p>
   */
  InputDataConfig?: _UnmarshalledInputDataConfig;

  /**
   * <p>The output data configuration that you supplied when you created the entities detection job. </p>
   */
  OutputDataConfig?: _UnmarshalledOutputDataConfig;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your entity detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
   */
  VpcConfig?: _UnmarshalledVpcConfig;
}
