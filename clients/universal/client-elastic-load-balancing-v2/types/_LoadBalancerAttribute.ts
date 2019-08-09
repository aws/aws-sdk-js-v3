/**
 * <p>Information about a load balancer attribute.</p>
 */
export interface _LoadBalancerAttribute {
  /**
   * <p>The name of the attribute.</p> <p>The following attributes are supported by both Application Load Balancers and Network Load Balancers:</p> <ul> <li> <p> <code>access_logs.s3.enabled</code> - Indicates whether access logs are enabled. The value is <code>true</code> or <code>false</code>. The default is <code>false</code>.</p> </li> <li> <p> <code>access_logs.s3.bucket</code> - The name of the S3 bucket for the access logs. This attribute is required if access logs are enabled. The bucket must exist in the same region as the load balancer and have a bucket policy that grants Elastic Load Balancing permissions to write to the bucket.</p> </li> <li> <p> <code>access_logs.s3.prefix</code> - The prefix for the location in the S3 bucket for the access logs.</p> </li> <li> <p> <code>deletion_protection.enabled</code> - Indicates whether deletion protection is enabled. The value is <code>true</code> or <code>false</code>. The default is <code>false</code>.</p> </li> </ul> <p>The following attributes are supported by only Application Load Balancers:</p> <ul> <li> <p> <code>idle_timeout.timeout_seconds</code> - The idle timeout value, in seconds. The valid range is 1-4000 seconds. The default is 60 seconds.</p> </li> <li> <p> <code>routing.http2.enabled</code> - Indicates whether HTTP/2 is enabled. The value is <code>true</code> or <code>false</code>. The default is <code>true</code>.</p> </li> </ul> <p>The following attributes are supported by only Network Load Balancers:</p> <ul> <li> <p> <code>load_balancing.cross_zone.enabled</code> - Indicates whether cross-zone load balancing is enabled. The value is <code>true</code> or <code>false</code>. The default is <code>false</code>.</p> </li> </ul>
   */
  Key?: string;

  /**
   * <p>The value of the attribute.</p>
   */
  Value?: string;
}

export type _UnmarshalledLoadBalancerAttribute = _LoadBalancerAttribute;
