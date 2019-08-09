import { _KeyValuePair, _UnmarshalledKeyValuePair } from "./_KeyValuePair";
import {
  _ResourceRequirement,
  _UnmarshalledResourceRequirement
} from "./_ResourceRequirement";

/**
 * <p>The overrides that should be sent to a container.</p>
 */
export interface _ContainerOverrides {
  /**
   * <p>The number of vCPUs to reserve for the container. This value overrides the value set in the job definition.</p>
   */
  vcpus?: number;

  /**
   * <p>The number of MiB of memory reserved for the job. This value overrides the value set in the job definition.</p>
   */
  memory?: number;

  /**
   * <p>The command to send to the container that overrides the default command from the Docker image or the job definition.</p>
   */
  command?: Array<string> | Iterable<string>;

  /**
   * <p>The instance type to use for a multi-node parallel job. This parameter is not valid for single-node container jobs.</p>
   */
  instanceType?: string;

  /**
   * <p>The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the job definition.</p> <note> <p>Environment variables must not start with <code>AWS_BATCH</code>; this naming convention is reserved for variables that are set by the AWS Batch service.</p> </note>
   */
  environment?: Array<_KeyValuePair> | Iterable<_KeyValuePair>;

  /**
   * <p>The type and amount of a resource to assign to a container. This value overrides the value set in the job definition. Currently, the only supported resource is <code>GPU</code>.</p>
   */
  resourceRequirements?:
    | Array<_ResourceRequirement>
    | Iterable<_ResourceRequirement>;
}

export interface _UnmarshalledContainerOverrides extends _ContainerOverrides {
  /**
   * <p>The command to send to the container that overrides the default command from the Docker image or the job definition.</p>
   */
  command?: Array<string>;

  /**
   * <p>The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the job definition.</p> <note> <p>Environment variables must not start with <code>AWS_BATCH</code>; this naming convention is reserved for variables that are set by the AWS Batch service.</p> </note>
   */
  environment?: Array<_UnmarshalledKeyValuePair>;

  /**
   * <p>The type and amount of a resource to assign to a container. This value overrides the value set in the job definition. Currently, the only supported resource is <code>GPU</code>.</p>
   */
  resourceRequirements?: Array<_UnmarshalledResourceRequirement>;
}
