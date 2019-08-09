import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeNotebookInstanceOutput shape
 */
export interface DescribeNotebookInstanceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the notebook instance.</p>
   */
  NotebookInstanceArn?: string;

  /**
   * <p>The name of the Amazon SageMaker notebook instance. </p>
   */
  NotebookInstanceName?: string;

  /**
   * <p>The status of the notebook instance.</p>
   */
  NotebookInstanceStatus?:
    | "Pending"
    | "InService"
    | "Stopping"
    | "Stopped"
    | "Failed"
    | "Deleting"
    | "Updating"
    | string;

  /**
   * <p>If status is <code>Failed</code>, the reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The URL that you use to connect to the Jupyter notebook that is running in your notebook instance. </p>
   */
  Url?: string;

  /**
   * <p>The type of ML compute instance running on the notebook instance.</p>
   */
  InstanceType?:
    | "ml.t2.medium"
    | "ml.t2.large"
    | "ml.t2.xlarge"
    | "ml.t2.2xlarge"
    | "ml.t3.medium"
    | "ml.t3.large"
    | "ml.t3.xlarge"
    | "ml.t3.2xlarge"
    | "ml.m4.xlarge"
    | "ml.m4.2xlarge"
    | "ml.m4.4xlarge"
    | "ml.m4.10xlarge"
    | "ml.m4.16xlarge"
    | "ml.m5.xlarge"
    | "ml.m5.2xlarge"
    | "ml.m5.4xlarge"
    | "ml.m5.12xlarge"
    | "ml.m5.24xlarge"
    | "ml.c4.xlarge"
    | "ml.c4.2xlarge"
    | "ml.c4.4xlarge"
    | "ml.c4.8xlarge"
    | "ml.c5.xlarge"
    | "ml.c5.2xlarge"
    | "ml.c5.4xlarge"
    | "ml.c5.9xlarge"
    | "ml.c5.18xlarge"
    | "ml.c5d.xlarge"
    | "ml.c5d.2xlarge"
    | "ml.c5d.4xlarge"
    | "ml.c5d.9xlarge"
    | "ml.c5d.18xlarge"
    | "ml.p2.xlarge"
    | "ml.p2.8xlarge"
    | "ml.p2.16xlarge"
    | "ml.p3.2xlarge"
    | "ml.p3.8xlarge"
    | "ml.p3.16xlarge"
    | string;

  /**
   * <p>The ID of the VPC subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>The IDs of the VPC security groups.</p>
   */
  SecurityGroups?: Array<string>;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the instance. </p>
   */
  RoleArn?: string;

  /**
   * <p>The AWS KMS key ID Amazon SageMaker uses to encrypt data when storing it on the ML storage volume attached to the instance. </p>
   */
  KmsKeyId?: string;

  /**
   * <p>The network interface IDs that Amazon SageMaker created at the time of creating the instance. </p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>A timestamp. Use this parameter to retrieve the time when the notebook instance was last modified. </p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>A timestamp. Use this parameter to return the time when the notebook instance was created</p>
   */
  CreationTime?: Date;

  /**
   * <p>Returns the name of a notebook instance lifecycle configuration.</p> <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional) Customize a Notebook Instance</a> </p>
   */
  NotebookInstanceLifecycleConfigName?: string;

  /**
   * <p>Describes whether Amazon SageMaker provides internet access to the notebook instance. If this value is set to <i>Disabled</i>, the notebook instance does not have internet access, and cannot connect to Amazon SageMaker training and endpoint services.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/appendix-additional-considerations.html#appendix-notebook-and-internet-access">Notebook Instances Are Internet-Enabled by Default</a>.</p>
   */
  DirectInternetAccess?: "Enabled" | "Disabled" | string;

  /**
   * <p>The size, in GB, of the ML storage volume attached to the notebook instance.</p>
   */
  VolumeSizeInGB?: number;

  /**
   * <p>A list of the Elastic Inference (EI) instance types associated with this notebook instance. Currently only one EI instance type can be associated with a notebook instance. For more information, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/ei.html">Using Elastic Inference in Amazon SageMaker</a>.</p>
   */
  AcceleratorTypes?: Array<
    "ml.eia1.medium" | "ml.eia1.large" | "ml.eia1.xlarge" | string
  >;

  /**
   * <p>The Git repository associated with the notebook instance as its default code repository. This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in <a href="http://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any other Git repository. When you open a notebook instance, it opens in the directory that contains this repository. For more information, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git Repositories with Amazon SageMaker Notebook Instances</a>.</p>
   */
  DefaultCodeRepository?: string;

  /**
   * <p>An array of up to three Git repositories associated with the notebook instance. These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in <a href="http://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any other Git repository. These repositories are cloned at the same level as the default repository of your notebook instance. For more information, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git Repositories with Amazon SageMaker Notebook Instances</a>.</p>
   */
  AdditionalCodeRepositories?: Array<string>;

  /**
   * <p>Whether root access is enabled or disabled for users of the notebook instance.</p> <note> <p>Lifecycle configurations need root access to be able to set up a notebook instance. Because of this, lifecycle configurations associated with a notebook instance always run with root access even if you disable root access for users.</p> </note>
   */
  RootAccess?: "Enabled" | "Disabled" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
