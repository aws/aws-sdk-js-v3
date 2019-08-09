import {
  _EbsBlockDeviceConfig,
  _UnmarshalledEbsBlockDeviceConfig
} from "./_EbsBlockDeviceConfig";

/**
 * <p>The Amazon EBS configuration of a cluster instance.</p>
 */
export interface _EbsConfiguration {
  /**
   * <p>An array of Amazon EBS volume specifications attached to a cluster instance.</p>
   */
  EbsBlockDeviceConfigs?:
    | Array<_EbsBlockDeviceConfig>
    | Iterable<_EbsBlockDeviceConfig>;

  /**
   * <p>Indicates whether an Amazon EBS volume is EBS-optimized.</p>
   */
  EbsOptimized?: boolean;
}

export interface _UnmarshalledEbsConfiguration extends _EbsConfiguration {
  /**
   * <p>An array of Amazon EBS volume specifications attached to a cluster instance.</p>
   */
  EbsBlockDeviceConfigs?: Array<_UnmarshalledEbsBlockDeviceConfig>;
}
