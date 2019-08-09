/**
 * <p>Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>
 */
export interface _VPCOptions {
  /**
   * <p>Specifies the subnets for VPC endpoint.</p>
   */
  SubnetIds?: Array<string> | Iterable<string>;

  /**
   * <p>Specifies the security groups for VPC endpoint.</p>
   */
  SecurityGroupIds?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledVPCOptions extends _VPCOptions {
  /**
   * <p>Specifies the subnets for VPC endpoint.</p>
   */
  SubnetIds?: Array<string>;

  /**
   * <p>Specifies the security groups for VPC endpoint.</p>
   */
  SecurityGroupIds?: Array<string>;
}
