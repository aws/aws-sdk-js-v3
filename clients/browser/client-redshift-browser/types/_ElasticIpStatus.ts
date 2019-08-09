/**
 * <p>Describes the status of the elastic IP (EIP) address.</p>
 */
export interface _ElasticIpStatus {
  /**
   * <p>The elastic IP (EIP) address for the cluster.</p>
   */
  ElasticIp?: string;

  /**
   * <p>The status of the elastic IP (EIP) address.</p>
   */
  Status?: string;
}

export type _UnmarshalledElasticIpStatus = _ElasticIpStatus;
