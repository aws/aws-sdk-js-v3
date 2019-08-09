/**
 * <p>Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>
 */
export interface _VPCDerivedInfo {
  /**
   * <p>The VPC Id for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.</p>
   */
  VPCId?: string;

  /**
   * <p>Specifies the subnets for VPC endpoint.</p>
   */
  SubnetIds?: Array<string> | Iterable<string>;

  /**
   * <p>The availability zones for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.</p>
   */
  AvailabilityZones?: Array<string> | Iterable<string>;

  /**
   * <p>Specifies the security groups for VPC endpoint.</p>
   */
  SecurityGroupIds?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledVPCDerivedInfo extends _VPCDerivedInfo {
  /**
   * <p>Specifies the subnets for VPC endpoint.</p>
   */
  SubnetIds?: Array<string>;

  /**
   * <p>The availability zones for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.</p>
   */
  AvailabilityZones?: Array<string>;

  /**
   * <p>Specifies the security groups for VPC endpoint.</p>
   */
  SecurityGroupIds?: Array<string>;
}
