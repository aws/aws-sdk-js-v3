/**
 *
 *             <p>Specifies the EBS volume upgrade information. The broker identifier must be set to the keyword ALL. This means the changes apply to all the brokers in the cluster.</p>
 *
 */
export interface _BrokerEBSVolumeInfo {
  /**
   *
   *             <p>The ID of the broker to update.</p>
   *
   */
  KafkaBrokerNodeId: string;

  /**
   *
   *             <p>Size of the EBS volume to update.</p>
   *
   */
  VolumeSizeGB: number;
}

export type _UnmarshalledBrokerEBSVolumeInfo = _BrokerEBSVolumeInfo;
