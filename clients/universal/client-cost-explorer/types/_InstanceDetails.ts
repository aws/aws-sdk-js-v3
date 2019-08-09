import {
  _EC2InstanceDetails,
  _UnmarshalledEC2InstanceDetails
} from "./_EC2InstanceDetails";
import {
  _RDSInstanceDetails,
  _UnmarshalledRDSInstanceDetails
} from "./_RDSInstanceDetails";
import {
  _RedshiftInstanceDetails,
  _UnmarshalledRedshiftInstanceDetails
} from "./_RedshiftInstanceDetails";
import {
  _ElastiCacheInstanceDetails,
  _UnmarshalledElastiCacheInstanceDetails
} from "./_ElastiCacheInstanceDetails";
import {
  _ESInstanceDetails,
  _UnmarshalledESInstanceDetails
} from "./_ESInstanceDetails";

/**
 * <p>Details about the instances that AWS recommends that you purchase.</p>
 */
export interface _InstanceDetails {
  /**
   * <p>The Amazon EC2 instances that AWS recommends that you purchase.</p>
   */
  EC2InstanceDetails?: _EC2InstanceDetails;

  /**
   * <p>The Amazon RDS instances that AWS recommends that you purchase.</p>
   */
  RDSInstanceDetails?: _RDSInstanceDetails;

  /**
   * <p>The Amazon Redshift instances that AWS recommends that you purchase.</p>
   */
  RedshiftInstanceDetails?: _RedshiftInstanceDetails;

  /**
   * <p>The ElastiCache instances that AWS recommends that you purchase.</p>
   */
  ElastiCacheInstanceDetails?: _ElastiCacheInstanceDetails;

  /**
   * <p>The Amazon ES instances that AWS recommends that you purchase.</p>
   */
  ESInstanceDetails?: _ESInstanceDetails;
}

export interface _UnmarshalledInstanceDetails extends _InstanceDetails {
  /**
   * <p>The Amazon EC2 instances that AWS recommends that you purchase.</p>
   */
  EC2InstanceDetails?: _UnmarshalledEC2InstanceDetails;

  /**
   * <p>The Amazon RDS instances that AWS recommends that you purchase.</p>
   */
  RDSInstanceDetails?: _UnmarshalledRDSInstanceDetails;

  /**
   * <p>The Amazon Redshift instances that AWS recommends that you purchase.</p>
   */
  RedshiftInstanceDetails?: _UnmarshalledRedshiftInstanceDetails;

  /**
   * <p>The ElastiCache instances that AWS recommends that you purchase.</p>
   */
  ElastiCacheInstanceDetails?: _UnmarshalledElastiCacheInstanceDetails;

  /**
   * <p>The Amazon ES instances that AWS recommends that you purchase.</p>
   */
  ESInstanceDetails?: _UnmarshalledESInstanceDetails;
}
