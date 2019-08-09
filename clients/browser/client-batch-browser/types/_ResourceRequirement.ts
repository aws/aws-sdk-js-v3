/**
 * <p>The type and amount of a resource to assign to a container. Currently, the only supported resource type is <code>GPU</code>.</p>
 */
export interface _ResourceRequirement {
  /**
   * <p>The number of physical GPUs to reserve for the container. The number of GPUs reserved for all containers in a job should not exceed the number of available GPUs on the compute resource that the job is launched on.</p>
   */
  value: string;

  /**
   * <p>The type of resource to assign to a container. Currently, the only supported resource type is <code>GPU</code>.</p>
   */
  type: "GPU" | string;
}

export type _UnmarshalledResourceRequirement = _ResourceRequirement;
