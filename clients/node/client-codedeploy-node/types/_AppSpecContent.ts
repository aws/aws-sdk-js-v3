/**
 * <p> A revision for an AWS Lambda or Amazon ECS deployment that is a YAML-formatted or JSON-formatted string. For AWS Lambda and Amazon ECS deployments, the revision is the same as the AppSpec file. This method replaces the deprecated <code>RawString</code> data type. </p>
 */
export interface _AppSpecContent {
  /**
   * <p> The YAML-formatted or JSON-formatted revision string. </p> <p> For an AWS Lambda deployment, the content includes a Lambda function name, the alias for its original version, and the alias for its replacement version. The deployment shifts traffic from the original version of the Lambda function to the replacement version. </p> <p> For an Amazon ECS deployment, the content includes the task name, information about the load balancer that serves traffic to the container, and more. </p> <p> For both types of deployments, the content can specify Lambda functions that run at specified hooks, such as <code>BeforeInstall</code>, during a deployment. </p>
   */
  content?: string;

  /**
   * <p> The SHA256 hash value of the revision content. </p>
   */
  sha256?: string;
}

export type _UnmarshalledAppSpecContent = _AppSpecContent;
