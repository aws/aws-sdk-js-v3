import {
  _ZoneAwarenessConfig,
  _UnmarshalledZoneAwarenessConfig
} from "./_ZoneAwarenessConfig";

/**
 * <p>Specifies the configuration for the domain cluster, such as the type and number of instances.</p>
 */
export interface _ElasticsearchClusterConfig {
  /**
   * <p>The instance type for an Elasticsearch cluster.</p>
   */
  InstanceType?:
    | "m3.medium.elasticsearch"
    | "m3.large.elasticsearch"
    | "m3.xlarge.elasticsearch"
    | "m3.2xlarge.elasticsearch"
    | "m4.large.elasticsearch"
    | "m4.xlarge.elasticsearch"
    | "m4.2xlarge.elasticsearch"
    | "m4.4xlarge.elasticsearch"
    | "m4.10xlarge.elasticsearch"
    | "m5.large.elasticsearch"
    | "m5.xlarge.elasticsearch"
    | "m5.2xlarge.elasticsearch"
    | "m5.4xlarge.elasticsearch"
    | "m5.12xlarge.elasticsearch"
    | "r5.large.elasticsearch"
    | "r5.xlarge.elasticsearch"
    | "r5.2xlarge.elasticsearch"
    | "r5.4xlarge.elasticsearch"
    | "r5.12xlarge.elasticsearch"
    | "c5.large.elasticsearch"
    | "c5.xlarge.elasticsearch"
    | "c5.2xlarge.elasticsearch"
    | "c5.4xlarge.elasticsearch"
    | "c5.9xlarge.elasticsearch"
    | "c5.18xlarge.elasticsearch"
    | "t2.micro.elasticsearch"
    | "t2.small.elasticsearch"
    | "t2.medium.elasticsearch"
    | "r3.large.elasticsearch"
    | "r3.xlarge.elasticsearch"
    | "r3.2xlarge.elasticsearch"
    | "r3.4xlarge.elasticsearch"
    | "r3.8xlarge.elasticsearch"
    | "i2.xlarge.elasticsearch"
    | "i2.2xlarge.elasticsearch"
    | "d2.xlarge.elasticsearch"
    | "d2.2xlarge.elasticsearch"
    | "d2.4xlarge.elasticsearch"
    | "d2.8xlarge.elasticsearch"
    | "c4.large.elasticsearch"
    | "c4.xlarge.elasticsearch"
    | "c4.2xlarge.elasticsearch"
    | "c4.4xlarge.elasticsearch"
    | "c4.8xlarge.elasticsearch"
    | "r4.large.elasticsearch"
    | "r4.xlarge.elasticsearch"
    | "r4.2xlarge.elasticsearch"
    | "r4.4xlarge.elasticsearch"
    | "r4.8xlarge.elasticsearch"
    | "r4.16xlarge.elasticsearch"
    | "i3.large.elasticsearch"
    | "i3.xlarge.elasticsearch"
    | "i3.2xlarge.elasticsearch"
    | "i3.4xlarge.elasticsearch"
    | "i3.8xlarge.elasticsearch"
    | "i3.16xlarge.elasticsearch"
    | string;

  /**
   * <p>The number of instances in the specified domain cluster.</p>
   */
  InstanceCount?: number;

  /**
   * <p>A boolean value to indicate whether a dedicated master node is enabled. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-dedicatedmasternodes" target="_blank">About Dedicated Master Nodes</a> for more information.</p>
   */
  DedicatedMasterEnabled?: boolean;

  /**
   * <p>A boolean value to indicate whether zone awareness is enabled. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-zoneawareness" target="_blank">About Zone Awareness</a> for more information.</p>
   */
  ZoneAwarenessEnabled?: boolean;

  /**
   * <p>Specifies the zone awareness configuration for a domain when zone awareness is enabled.</p>
   */
  ZoneAwarenessConfig?: _ZoneAwarenessConfig;

  /**
   * <p>The instance type for a dedicated master node.</p>
   */
  DedicatedMasterType?:
    | "m3.medium.elasticsearch"
    | "m3.large.elasticsearch"
    | "m3.xlarge.elasticsearch"
    | "m3.2xlarge.elasticsearch"
    | "m4.large.elasticsearch"
    | "m4.xlarge.elasticsearch"
    | "m4.2xlarge.elasticsearch"
    | "m4.4xlarge.elasticsearch"
    | "m4.10xlarge.elasticsearch"
    | "m5.large.elasticsearch"
    | "m5.xlarge.elasticsearch"
    | "m5.2xlarge.elasticsearch"
    | "m5.4xlarge.elasticsearch"
    | "m5.12xlarge.elasticsearch"
    | "r5.large.elasticsearch"
    | "r5.xlarge.elasticsearch"
    | "r5.2xlarge.elasticsearch"
    | "r5.4xlarge.elasticsearch"
    | "r5.12xlarge.elasticsearch"
    | "c5.large.elasticsearch"
    | "c5.xlarge.elasticsearch"
    | "c5.2xlarge.elasticsearch"
    | "c5.4xlarge.elasticsearch"
    | "c5.9xlarge.elasticsearch"
    | "c5.18xlarge.elasticsearch"
    | "t2.micro.elasticsearch"
    | "t2.small.elasticsearch"
    | "t2.medium.elasticsearch"
    | "r3.large.elasticsearch"
    | "r3.xlarge.elasticsearch"
    | "r3.2xlarge.elasticsearch"
    | "r3.4xlarge.elasticsearch"
    | "r3.8xlarge.elasticsearch"
    | "i2.xlarge.elasticsearch"
    | "i2.2xlarge.elasticsearch"
    | "d2.xlarge.elasticsearch"
    | "d2.2xlarge.elasticsearch"
    | "d2.4xlarge.elasticsearch"
    | "d2.8xlarge.elasticsearch"
    | "c4.large.elasticsearch"
    | "c4.xlarge.elasticsearch"
    | "c4.2xlarge.elasticsearch"
    | "c4.4xlarge.elasticsearch"
    | "c4.8xlarge.elasticsearch"
    | "r4.large.elasticsearch"
    | "r4.xlarge.elasticsearch"
    | "r4.2xlarge.elasticsearch"
    | "r4.4xlarge.elasticsearch"
    | "r4.8xlarge.elasticsearch"
    | "r4.16xlarge.elasticsearch"
    | "i3.large.elasticsearch"
    | "i3.xlarge.elasticsearch"
    | "i3.2xlarge.elasticsearch"
    | "i3.4xlarge.elasticsearch"
    | "i3.8xlarge.elasticsearch"
    | "i3.16xlarge.elasticsearch"
    | string;

  /**
   * <p>Total number of dedicated master nodes, active and on standby, for the cluster.</p>
   */
  DedicatedMasterCount?: number;
}

export interface _UnmarshalledElasticsearchClusterConfig
  extends _ElasticsearchClusterConfig {
  /**
   * <p>Specifies the zone awareness configuration for a domain when zone awareness is enabled.</p>
   */
  ZoneAwarenessConfig?: _UnmarshalledZoneAwarenessConfig;
}
