/**
 * Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration (nielsenConfiguration), MediaConvert enables PCM to ID3 tagging for all outputs in the job. To enable Nielsen configuration programmatically, include an instance of nielsenConfiguration in your JSON job specification. Even if you don't include any children of nielsenConfiguration, you still enable the setting.
 */
export interface _NielsenConfiguration {
  /**
   * Nielsen has discontinued the use of breakout code functionality. If you must include this property, set the value to zero.
   */
  BreakoutCode?: number;

  /**
   * Use Distributor ID (DistributorID) to specify the distributor ID that is assigned to your organization by Neilsen.
   */
  DistributorId?: string;
}

export type _UnmarshalledNielsenConfiguration = _NielsenConfiguration;
