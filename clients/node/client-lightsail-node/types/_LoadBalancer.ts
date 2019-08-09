import {
  _ResourceLocation,
  _UnmarshalledResourceLocation
} from "./_ResourceLocation";
import { _Tag, _UnmarshalledTag } from "./_Tag";
import {
  _InstanceHealthSummary,
  _UnmarshalledInstanceHealthSummary
} from "./_InstanceHealthSummary";
import {
  _LoadBalancerTlsCertificateSummary,
  _UnmarshalledLoadBalancerTlsCertificateSummary
} from "./_LoadBalancerTlsCertificateSummary";

/**
 * <p>Describes the Lightsail load balancer.</p>
 */
export interface _LoadBalancer {
  /**
   * <p>The name of the load balancer (e.g., <code>my-load-balancer</code>).</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  arn?: string;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about your Lightsail load balancer. This code enables our support team to look up your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The date when your load balancer was created.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The AWS Region where your load balancer was created (e.g., <code>us-east-2a</code>). Lightsail automatically creates your load balancer across Availability Zones.</p>
   */
  location?: _ResourceLocation;

  /**
   * <p>The resource type (e.g., <code>LoadBalancer</code>.</p>
   */
  resourceType?:
    | "Instance"
    | "StaticIp"
    | "KeyPair"
    | "InstanceSnapshot"
    | "Domain"
    | "PeeredVpc"
    | "LoadBalancer"
    | "LoadBalancerTlsCertificate"
    | "Disk"
    | "DiskSnapshot"
    | "RelationalDatabase"
    | "RelationalDatabaseSnapshot"
    | "ExportSnapshotRecord"
    | "CloudFormationStackRecord"
    | string;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail Dev Guide</a>.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The DNS name of your Lightsail load balancer.</p>
   */
  dnsName?: string;

  /**
   * <p>The status of your load balancer. Valid values are below.</p>
   */
  state?:
    | "active"
    | "provisioning"
    | "active_impaired"
    | "failed"
    | "unknown"
    | string;

  /**
   * <p>The protocol you have enabled for your load balancer. Valid values are below.</p> <p>You can't just have <code>HTTP_HTTPS</code>, but you can have just <code>HTTP</code>.</p>
   */
  protocol?: "HTTP_HTTPS" | "HTTP" | string;

  /**
   * <p>An array of public port settings for your load balancer. For HTTP, use port 80. For HTTPS, use port 443.</p>
   */
  publicPorts?: Array<number> | Iterable<number>;

  /**
   * <p>The path you specified to perform your health checks. If no path is specified, the load balancer tries to make a request to the default (root) page.</p>
   */
  healthCheckPath?: string;

  /**
   * <p>The port where the load balancer will direct traffic to your Lightsail instances. For HTTP traffic, it's port 80. For HTTPS traffic, it's port 443.</p>
   */
  instancePort?: number;

  /**
   * <p>An array of InstanceHealthSummary objects describing the health of the load balancer.</p>
   */
  instanceHealthSummary?:
    | Array<_InstanceHealthSummary>
    | Iterable<_InstanceHealthSummary>;

  /**
   * <p>An array of LoadBalancerTlsCertificateSummary objects that provide additional information about the SSL/TLS certificates. For example, if <code>true</code>, the certificate is attached to the load balancer.</p>
   */
  tlsCertificateSummaries?:
    | Array<_LoadBalancerTlsCertificateSummary>
    | Iterable<_LoadBalancerTlsCertificateSummary>;

  /**
   * <p>A string to string map of the configuration options for your load balancer. Valid values are listed below.</p>
   */
  configurationOptions?:
    | {
        [key in
          | "HealthCheckPath"
          | "SessionStickinessEnabled"
          | "SessionStickiness_LB_CookieDurationSeconds"
          | string]: string
      }
    | Iterable<
        [

            | "HealthCheckPath"
            | "SessionStickinessEnabled"
            | "SessionStickiness_LB_CookieDurationSeconds"
            | string,
          string
        ]
      >;
}

export interface _UnmarshalledLoadBalancer extends _LoadBalancer {
  /**
   * <p>The date when your load balancer was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The AWS Region where your load balancer was created (e.g., <code>us-east-2a</code>). Lightsail automatically creates your load balancer across Availability Zones.</p>
   */
  location?: _UnmarshalledResourceLocation;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail Dev Guide</a>.</p>
   */
  tags?: Array<_UnmarshalledTag>;

  /**
   * <p>An array of public port settings for your load balancer. For HTTP, use port 80. For HTTPS, use port 443.</p>
   */
  publicPorts?: Array<number>;

  /**
   * <p>An array of InstanceHealthSummary objects describing the health of the load balancer.</p>
   */
  instanceHealthSummary?: Array<_UnmarshalledInstanceHealthSummary>;

  /**
   * <p>An array of LoadBalancerTlsCertificateSummary objects that provide additional information about the SSL/TLS certificates. For example, if <code>true</code>, the certificate is attached to the load balancer.</p>
   */
  tlsCertificateSummaries?: Array<
    _UnmarshalledLoadBalancerTlsCertificateSummary
  >;

  /**
   * <p>A string to string map of the configuration options for your load balancer. Valid values are listed below.</p>
   */
  configurationOptions?: {
    [key in
      | "HealthCheckPath"
      | "SessionStickinessEnabled"
      | "SessionStickiness_LB_CookieDurationSeconds"
      | string]: string
  };
}
