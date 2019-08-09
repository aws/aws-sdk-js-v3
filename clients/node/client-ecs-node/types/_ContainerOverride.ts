import { _KeyValuePair, _UnmarshalledKeyValuePair } from "./_KeyValuePair";
import {
  _ResourceRequirement,
  _UnmarshalledResourceRequirement
} from "./_ResourceRequirement";

/**
 * <p>The overrides that should be sent to a container. An empty container override can be passed in. An example of an empty container override would be <code>{"containerOverrides": [ ] }</code>. If a non-empty container override is specified, the <code>name</code> parameter must be included.</p>
 */
export interface _ContainerOverride {
  /**
   * <p>The name of the container that receives the override. This parameter is required if any override is specified.</p>
   */
  name?: string;

  /**
   * <p>The command to send to the container that overrides the default command from the Docker image or the task definition. You must also specify a container name.</p>
   */
  command?: Array<string> | Iterable<string>;

  /**
   * <p>The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition. You must also specify a container name.</p>
   */
  environment?: Array<_KeyValuePair> | Iterable<_KeyValuePair>;

  /**
   * <p>The number of <code>cpu</code> units reserved for the container, instead of the default value from the task definition. You must also specify a container name.</p>
   */
  cpu?: number;

  /**
   * <p>The hard limit (in MiB) of memory to present to the container, instead of the default value from the task definition. If your container attempts to exceed the memory specified here, the container is killed. You must also specify a container name.</p>
   */
  memory?: number;

  /**
   * <p>The soft limit (in MiB) of memory to reserve for the container, instead of the default value from the task definition. You must also specify a container name.</p>
   */
  memoryReservation?: number;

  /**
   * <p>The type and amount of a resource to assign to a container, instead of the default value from the task definition. The only supported resource is a GPU.</p>
   */
  resourceRequirements?:
    | Array<_ResourceRequirement>
    | Iterable<_ResourceRequirement>;
}

export interface _UnmarshalledContainerOverride extends _ContainerOverride {
  /**
   * <p>The command to send to the container that overrides the default command from the Docker image or the task definition. You must also specify a container name.</p>
   */
  command?: Array<string>;

  /**
   * <p>The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition. You must also specify a container name.</p>
   */
  environment?: Array<_UnmarshalledKeyValuePair>;

  /**
   * <p>The type and amount of a resource to assign to a container, instead of the default value from the task definition. The only supported resource is a GPU.</p>
   */
  resourceRequirements?: Array<_UnmarshalledResourceRequirement>;
}
