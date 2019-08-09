import {
  _ContainerOverride,
  _UnmarshalledContainerOverride
} from "./_ContainerOverride";

/**
 * <p>The overrides associated with a task.</p>
 */
export interface _TaskOverride {
  /**
   * <p>One or more container overrides sent to a task.</p>
   */
  containerOverrides?: Array<_ContainerOverride> | Iterable<_ContainerOverride>;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that containers in this task can assume. All containers in this task are granted the permissions that are specified in this role.</p>
   */
  taskRoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the task execution role that the Amazon ECS container agent and the Docker daemon can assume.</p>
   */
  executionRoleArn?: string;
}

export interface _UnmarshalledTaskOverride extends _TaskOverride {
  /**
   * <p>One or more container overrides sent to a task.</p>
   */
  containerOverrides?: Array<_UnmarshalledContainerOverride>;
}
