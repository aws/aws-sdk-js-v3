/**
 * <p>Settings for an AWS CodeBuild build.</p>
 */
export interface _BuildConfiguration {
  /**
   * <p>The name of the artifact of the CodeBuild build. If provided, Elastic Beanstalk stores the build artifact in the S3 location <i>S3-bucket</i>/resources/<i>application-name</i>/codebuild/codebuild-<i>version-label</i>-<i>artifact-name</i>.zip. If not provided, Elastic Beanstalk stores the build artifact in the S3 location <i>S3-bucket</i>/resources/<i>application-name</i>/codebuild/codebuild-<i>version-label</i>.zip. </p>
   */
  ArtifactName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that enables AWS CodeBuild to interact with dependent AWS services on behalf of the AWS account.</p>
   */
  CodeBuildServiceRole: string;

  /**
   * <p>Information about the compute resources the build project will use.</p> <ul> <li> <p> <code>BUILD_GENERAL1_SMALL: Use up to 3 GB memory and 2 vCPUs for builds</code> </p> </li> <li> <p> <code>BUILD_GENERAL1_MEDIUM: Use up to 7 GB memory and 4 vCPUs for builds</code> </p> </li> <li> <p> <code>BUILD_GENERAL1_LARGE: Use up to 15 GB memory and 8 vCPUs for builds</code> </p> </li> </ul>
   */
  ComputeType?:
    | "BUILD_GENERAL1_SMALL"
    | "BUILD_GENERAL1_MEDIUM"
    | "BUILD_GENERAL1_LARGE"
    | string;

  /**
   * <p>The ID of the Docker image to use for this build project.</p>
   */
  Image: string;

  /**
   * <p>How long in minutes, from 5 to 480 (8 hours), for AWS CodeBuild to wait until timing out any related build that does not get marked as completed. The default is 60 minutes.</p>
   */
  TimeoutInMinutes?: number;
}

export type _UnmarshalledBuildConfiguration = _BuildConfiguration;
