/**
 * <p>Describes an Elastic IP address.</p>
 */
export interface _ElasticIp {
  /**
   * <p>The IP address.</p>
   */
  Ip?: string;

  /**
   * <p>The name.</p>
   */
  Name?: string;

  /**
   * <p>The domain.</p>
   */
  Domain?: string;

  /**
   * <p>The AWS region. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.</p>
   */
  Region?: string;

  /**
   * <p>The ID of the instance that the address is attached to.</p>
   */
  InstanceId?: string;
}

export type _UnmarshalledElasticIp = _ElasticIp;
