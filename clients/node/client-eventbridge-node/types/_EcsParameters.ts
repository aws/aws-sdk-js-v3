import {
  _NetworkConfiguration,
  _UnmarshalledNetworkConfiguration
} from "./_NetworkConfiguration";

/**
 * <p>The custom parameters to be used when the target is an Amazon ECS task.</p>
 */
export interface _EcsParameters {
  /**
   * <p>The ARN of the task definition to use if the event target is an Amazon ECS task. </p>
   */
  TaskDefinitionArn: string;

  /**
   * <p>The number of tasks to create based on <code>TaskDefinition</code>. The default is 1.</p>
   */
  TaskCount?: number;

  /**
   * <p>Specifies the launch type on which your task is running. The launch type that you specify here must match one of the launch type (compatibilities) of the target task. The <code>FARGATE</code> value is supported only in the Regions where AWS Fargate with Amazon ECS is supported. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS-Fargate.html">AWS Fargate on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  LaunchType?: "EC2" | "FARGATE" | string;

  /**
   * <p>Use this structure if the ECS task uses the <code>awsvpc</code> network mode. This structure specifies the VPC subnets and security groups associated with the task and whether a public IP address is to be used. This structure is required if <code>LaunchType</code> is <code>FARGATE</code> because the <code>awsvpc</code> mode is required for Fargate tasks.</p> <p>If you specify <code>NetworkConfiguration</code> when the target ECS task doesn't use the <code>awsvpc</code> network mode, the task fails.</p>
   */
  NetworkConfiguration?: _NetworkConfiguration;

  /**
   * <p>Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as <code>1.1.0</code>.</p> <p>This structure is used only if <code>LaunchType</code> is <code>FARGATE</code>. For more information about valid platform versions, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">AWS Fargate Platform Versions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  PlatformVersion?: string;

  /**
   * <p>Specifies an ECS task group for the task. The maximum length is 255 characters.</p>
   */
  Group?: string;
}

export interface _UnmarshalledEcsParameters extends _EcsParameters {
  /**
   * <p>Use this structure if the ECS task uses the <code>awsvpc</code> network mode. This structure specifies the VPC subnets and security groups associated with the task and whether a public IP address is to be used. This structure is required if <code>LaunchType</code> is <code>FARGATE</code> because the <code>awsvpc</code> mode is required for Fargate tasks.</p> <p>If you specify <code>NetworkConfiguration</code> when the target ECS task doesn't use the <code>awsvpc</code> network mode, the task fails.</p>
   */
  NetworkConfiguration?: _UnmarshalledNetworkConfiguration;
}
