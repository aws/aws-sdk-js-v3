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
 * <p>Provides information about a topic detection job.</p>
 */
export interface _TopicsDetectionJobProperties {
  /**
   * <p>The identifier assigned to the topic detection job.</p>
   */
  JobId?: string;

  /**
   * <p>The name of the topic detection job.</p>
   */
  JobName?: string;

  /**
   * <p>The current status of the topic detection job. If the status is <code>Failed</code>, the reason for the failure is shown in the <code>Message</code> field.</p>
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
   * <p>A description for the status of a job.</p>
   */
  Message?: string;

  /**
   * <p>The time that the topic detection job was submitted for processing.</p>
   */
  SubmitTime?: Date | string | number;

  /**
   * <p>The time that the topic detection job was completed.</p>
   */
  EndTime?: Date | string | number;

  /**
   * <p>The input data configuration supplied when you created the topic detection job.</p>
   */
  InputDataConfig?: _InputDataConfig;

  /**
   * <p>The output data configuration supplied when you created the topic detection job.</p>
   */
  OutputDataConfig?: _OutputDataConfig;

  /**
   * <p>The number of topics to detect supplied when you created the topic detection job. The default is 10. </p>
   */
  NumberOfTopics?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Management (IAM) role that grants Amazon Comprehend read access to your job data. </p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:</p> <ul> <li> <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> <li> <p>Amazon Resource Name (ARN) of a KMS Key: <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code> </p> </li> </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your topic detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
   */
  VpcConfig?: _VpcConfig;
}

export interface _UnmarshalledTopicsDetectionJobProperties
  extends _TopicsDetectionJobProperties {
  /**
   * <p>The time that the topic detection job was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>The time that the topic detection job was completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>The input data configuration supplied when you created the topic detection job.</p>
   */
  InputDataConfig?: _UnmarshalledInputDataConfig;

  /**
   * <p>The output data configuration supplied when you created the topic detection job.</p>
   */
  OutputDataConfig?: _UnmarshalledOutputDataConfig;

  /**
   * <p>Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your topic detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
   */
  VpcConfig?: _UnmarshalledVpcConfig;
}
