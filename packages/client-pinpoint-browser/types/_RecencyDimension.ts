/**
 * Define how a segment based on recency of use.
 */
export interface _RecencyDimension {
  /**
   * The length of time during which users have been active or inactive with your app.
   *
   * Valid values: HR_24, DAY_7, DAY_14, DAY_30
   */
  Duration?: "HR_24" | "DAY_7" | "DAY_14" | "DAY_30" | string;

  /**
   * The recency dimension type:
   *
   * ACTIVE - Users who have used your app within the specified duration are included in the segment.
   *
   * INACTIVE - Users who have not used your app within the specified duration are included in the segment.
   */
  RecencyType?: "ACTIVE" | "INACTIVE" | string;
}

export type _UnmarshalledRecencyDimension = _RecencyDimension;
