/**
 * <p>An object representing the array properties of a job.</p>
 */
export interface _ArrayPropertiesDetail {
  /**
   * <p>A summary of the number of array job children in each available job status. This parameter is returned for parent array jobs.</p>
   */
  statusSummary?: { [key: string]: number } | Iterable<[string, number]>;

  /**
   * <p>The size of the array job. This parameter is returned for parent array jobs.</p>
   */
  size?: number;

  /**
   * <p>The job index within the array that is associated with this job. This parameter is returned for array job children.</p>
   */
  index?: number;
}

export interface _UnmarshalledArrayPropertiesDetail
  extends _ArrayPropertiesDetail {
  /**
   * <p>A summary of the number of array job children in each available job status. This parameter is returned for parent array jobs.</p>
   */
  statusSummary?: { [key: string]: number };
}
