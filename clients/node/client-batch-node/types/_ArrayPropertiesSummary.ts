/**
 * <p>An object representing the array properties of a job.</p>
 */
export interface _ArrayPropertiesSummary {
  /**
   * <p>The size of the array job. This parameter is returned for parent array jobs.</p>
   */
  size?: number;

  /**
   * <p>The job index within the array that is associated with this job. This parameter is returned for children of array jobs.</p>
   */
  index?: number;
}

export type _UnmarshalledArrayPropertiesSummary = _ArrayPropertiesSummary;
