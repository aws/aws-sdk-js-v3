import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Returns information about an HSM configuration, which is an object that describes to Amazon Redshift clusters the information they require to connect to an HSM where they can store database encryption keys.</p>
 */
export interface _HsmConfiguration {
  /**
   * <p>The name of the Amazon Redshift HSM configuration.</p>
   */
  HsmConfigurationIdentifier?: string;

  /**
   * <p>A text description of the HSM configuration.</p>
   */
  Description?: string;

  /**
   * <p>The IP address that the Amazon Redshift cluster must use to access the HSM.</p>
   */
  HsmIpAddress?: string;

  /**
   * <p>The name of the partition in the HSM where the Amazon Redshift clusters will store their database encryption keys.</p>
   */
  HsmPartitionName?: string;

  /**
   * <p>The list of tags for the HSM configuration.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledHsmConfiguration extends _HsmConfiguration {
  /**
   * <p>The list of tags for the HSM configuration.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
