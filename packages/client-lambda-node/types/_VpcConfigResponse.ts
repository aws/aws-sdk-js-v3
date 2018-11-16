/**
 * <p>The VPC security groups and subnets attached to a Lambda function.</p>
 */
export interface _VpcConfigResponse {
    /**
     * <p>A list of VPC subnet IDs.</p>
     */
    SubnetIds?: Array<string>|Iterable<string>;

    /**
     * <p>A list of VPC security groups IDs.</p>
     */
    SecurityGroupIds?: Array<string>|Iterable<string>;

    /**
     * <p>The ID of the VPC.</p>
     */
    VpcId?: string;
}

export interface _UnmarshalledVpcConfigResponse extends _VpcConfigResponse {
    /**
     * <p>A list of VPC subnet IDs.</p>
     */
    SubnetIds?: Array<string>;

    /**
     * <p>A list of VPC security groups IDs.</p>
     */
    SecurityGroupIds?: Array<string>;
}