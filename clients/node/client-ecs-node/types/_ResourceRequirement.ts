/**
 * <p>The type and amount of a resource to assign to a container. The only supported resource is a GPU. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-gpu.html">Working with GPUs on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i> </p>
 */
export interface _ResourceRequirement {
  /**
   * <p>The number of physical <code>GPUs</code> the Amazon ECS container agent will reserve for the container. The number of GPUs reserved for all containers in a task should not exceed the number of available GPUs on the container instance the task is launched on.</p>
   */
  value: string;

  /**
   * <p>The type of resource to assign to a container. The only supported value is <code>GPU</code>.</p>
   */
  type: "GPU" | string;
}

export type _UnmarshalledResourceRequirement = _ResourceRequirement;
