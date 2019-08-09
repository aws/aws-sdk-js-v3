/**
 * <p>The configuration of the resource used to execute the "containerAction".</p>
 */
export interface _ResourceConfiguration {
  /**
   * <p>The type of the compute resource used to execute the "containerAction". Possible values are: ACU_1 (vCPU=4, memory=16GiB) or ACU_2 (vCPU=8, memory=32GiB).</p>
   */
  computeType: "ACU_1" | "ACU_2" | string;

  /**
   * <p>The size (in GB) of the persistent storage available to the resource instance used to execute the "containerAction" (min: 1, max: 50).</p>
   */
  volumeSizeInGB: number;
}

export type _UnmarshalledResourceConfiguration = _ResourceConfiguration;
