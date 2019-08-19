/**
 * <p>Contains an AWS Region name as the result of a successful call to the <code>DescribeSourceRegions</code> action.</p>
 */
export interface _SourceRegion {
  /**
   * <p>The name of the source AWS Region.</p>
   */
  RegionName?: string;

  /**
   * <p>The endpoint for the source AWS Region endpoint.</p>
   */
  Endpoint?: string;

  /**
   * <p>The status of the source AWS Region.</p>
   */
  Status?: string;
}

export type _UnmarshalledSourceRegion = _SourceRegion;
