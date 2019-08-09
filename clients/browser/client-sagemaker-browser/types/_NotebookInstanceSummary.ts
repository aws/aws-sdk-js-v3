/**
 * <p>Provides summary information for an Amazon SageMaker notebook instance.</p>
 */
export interface _NotebookInstanceSummary {
  /**
   * <p>The name of the notebook instance that you want a summary for.</p>
   */
  NotebookInstanceName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the notebook instance.</p>
   */
  NotebookInstanceArn: string;

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
   * <p>The URL that you use to connect to the Jupyter instance running in your notebook instance. </p>
   */
  Url?: string;

  /**
   * <p>The type of ML compute instance that the notebook instance is running on.</p>
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
   * <p>A timestamp that shows when the notebook instance was created.</p>
   */
  CreationTime?: Date | string | number;

  /**
   * <p>A timestamp that shows when the notebook instance was last modified.</p>
   */
  LastModifiedTime?: Date | string | number;

  /**
   * <p>The name of a notebook instance lifecycle configuration associated with this notebook instance.</p> <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional) Customize a Notebook Instance</a>.</p>
   */
  NotebookInstanceLifecycleConfigName?: string;

  /**
   * <p>The Git repository associated with the notebook instance as its default code repository. This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in <a href="http://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any other Git repository. When you open a notebook instance, it opens in the directory that contains this repository. For more information, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git Repositories with Amazon SageMaker Notebook Instances</a>.</p>
   */
  DefaultCodeRepository?: string;

  /**
   * <p>An array of up to three Git repositories associated with the notebook instance. These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in <a href="http://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any other Git repository. These repositories are cloned at the same level as the default repository of your notebook instance. For more information, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git Repositories with Amazon SageMaker Notebook Instances</a>.</p>
   */
  AdditionalCodeRepositories?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledNotebookInstanceSummary
  extends _NotebookInstanceSummary {
  /**
   * <p>A timestamp that shows when the notebook instance was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp that shows when the notebook instance was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>An array of up to three Git repositories associated with the notebook instance. These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in <a href="http://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any other Git repository. These repositories are cloned at the same level as the default repository of your notebook instance. For more information, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git Repositories with Amazon SageMaker Notebook Instances</a>.</p>
   */
  AdditionalCodeRepositories?: Array<string>;
}
