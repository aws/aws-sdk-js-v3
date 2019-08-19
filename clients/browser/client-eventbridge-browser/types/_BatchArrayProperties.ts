/**
 * <p>The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an AWS Batch job.</p>
 */
export interface _BatchArrayProperties {
  /**
   * <p>The size of the array, if this is an array batch job. Valid values are integers between 2 and 10,000.</p>
   */
  Size?: number;
}

export type _UnmarshalledBatchArrayProperties = _BatchArrayProperties;
