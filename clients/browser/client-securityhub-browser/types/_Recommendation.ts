/**
 * <p>A recommendation on how to remediate the issue identified in a finding.</p>
 */
export interface _Recommendation {
  /**
   * <p>Describes the recommended steps to take to remediate an issue identified in a finding.</p>
   */
  Text?: string;

  /**
   * <p>A URL to a page or site that contains information about how to remediate a finding.</p>
   */
  Url?: string;
}

export type _UnmarshalledRecommendation = _Recommendation;
