import {
  _BrokerEBSVolumeInfo,
  _UnmarshalledBrokerEBSVolumeInfo
} from "./_BrokerEBSVolumeInfo";
import {
  _ConfigurationInfo,
  _UnmarshalledConfigurationInfo
} from "./_ConfigurationInfo";

/**
 *
 *             <p>Information about cluster attributes that can be updated via update APIs.</p>
 *
 */
export interface _MutableClusterInfo {
  /**
   *
   *             <p>Specifies the size of the EBS volume and the ID of the associated broker.</p>
   *
   */
  BrokerEBSVolumeInfo?:
    | Array<_BrokerEBSVolumeInfo>
    | Iterable<_BrokerEBSVolumeInfo>;

  /**
   *
   *             <p>Information about the changes in the configuration of the brokers.</p>
   *
   */
  ConfigurationInfo?: _ConfigurationInfo;

  /**
   *
   *             <p>The number of broker nodes in the cluster.</p>
   *
   */
  NumberOfBrokerNodes?: number;
}

export interface _UnmarshalledMutableClusterInfo extends _MutableClusterInfo {
  /**
   *
   *             <p>Specifies the size of the EBS volume and the ID of the associated broker.</p>
   *
   */
  BrokerEBSVolumeInfo?: Array<_UnmarshalledBrokerEBSVolumeInfo>;

  /**
   *
   *             <p>Information about the changes in the configuration of the brokers.</p>
   *
   */
  ConfigurationInfo?: _UnmarshalledConfigurationInfo;
}
