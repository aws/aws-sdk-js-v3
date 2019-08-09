import {
  _CloudWatchLogsConfiguration,
  _UnmarshalledCloudWatchLogsConfiguration
} from "./_CloudWatchLogsConfiguration";
import {
  _VolumeConfiguration,
  _UnmarshalledVolumeConfiguration
} from "./_VolumeConfiguration";
import { _Recipes, _UnmarshalledRecipes } from "./_Recipes";
import {
  _LifecycleEventConfiguration,
  _UnmarshalledLifecycleEventConfiguration
} from "./_LifecycleEventConfiguration";

/**
 * <p>Describes a layer.</p>
 */
export interface _Layer {
  /**
   * <p>The Amazon Resource Number (ARN) of a layer.</p>
   */
  Arn?: string;

  /**
   * <p>The layer stack ID.</p>
   */
  StackId?: string;

  /**
   * <p>The layer ID.</p>
   */
  LayerId?: string;

  /**
   * <p>The layer type.</p>
   */
  Type?:
    | "aws-flow-ruby"
    | "ecs-cluster"
    | "java-app"
    | "lb"
    | "web"
    | "php-app"
    | "rails-app"
    | "nodejs-app"
    | "memcached"
    | "db-master"
    | "monitoring-master"
    | "custom"
    | string;

  /**
   * <p>The layer name.</p>
   */
  Name?: string;

  /**
   * <p>The layer short name.</p>
   */
  Shortname?: string;

  /**
   * <p>The layer attributes.</p> <p>For the <code>HaproxyStatsPassword</code>, <code>MysqlRootPassword</code>, and <code>GangliaPassword</code> attributes, AWS OpsWorks Stacks returns <code>*****FILTERED*****</code> instead of the actual value</p> <p>For an ECS Cluster layer, AWS OpsWorks Stacks the <code>EcsClusterArn</code> attribute is set to the cluster's ARN.</p>
   */
  Attributes?:
    | {
        [key in
          | "EcsClusterArn"
          | "EnableHaproxyStats"
          | "HaproxyStatsUrl"
          | "HaproxyStatsUser"
          | "HaproxyStatsPassword"
          | "HaproxyHealthCheckUrl"
          | "HaproxyHealthCheckMethod"
          | "MysqlRootPassword"
          | "MysqlRootPasswordUbiquitous"
          | "GangliaUrl"
          | "GangliaUser"
          | "GangliaPassword"
          | "MemcachedMemory"
          | "NodejsVersion"
          | "RubyVersion"
          | "RubygemsVersion"
          | "ManageBundler"
          | "BundlerVersion"
          | "RailsStack"
          | "PassengerVersion"
          | "Jvm"
          | "JvmVersion"
          | "JvmOptions"
          | "JavaAppServer"
          | "JavaAppServerVersion"
          | string]: string
      }
    | Iterable<
        [

            | "EcsClusterArn"
            | "EnableHaproxyStats"
            | "HaproxyStatsUrl"
            | "HaproxyStatsUser"
            | "HaproxyStatsPassword"
            | "HaproxyHealthCheckUrl"
            | "HaproxyHealthCheckMethod"
            | "MysqlRootPassword"
            | "MysqlRootPasswordUbiquitous"
            | "GangliaUrl"
            | "GangliaUser"
            | "GangliaPassword"
            | "MemcachedMemory"
            | "NodejsVersion"
            | "RubyVersion"
            | "RubygemsVersion"
            | "ManageBundler"
            | "BundlerVersion"
            | "RailsStack"
            | "PassengerVersion"
            | "Jvm"
            | "JvmVersion"
            | "JvmOptions"
            | "JavaAppServer"
            | "JavaAppServerVersion"
            | string,
          string
        ]
      >;

  /**
   * <p>The Amazon CloudWatch Logs configuration settings for the layer.</p>
   */
  CloudWatchLogsConfiguration?: _CloudWatchLogsConfiguration;

  /**
   * <p>The ARN of the default IAM profile to be used for the layer's EC2 instances. For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using Identifiers</a>.</p>
   */
  CustomInstanceProfileArn?: string;

  /**
   * <p>A JSON formatted string containing the layer's custom stack configuration and deployment attributes.</p>
   */
  CustomJson?: string;

  /**
   * <p>An array containing the layer's custom security group IDs.</p>
   */
  CustomSecurityGroupIds?: Array<string> | Iterable<string>;

  /**
   * <p>An array containing the layer's security group names.</p>
   */
  DefaultSecurityGroupNames?: Array<string> | Iterable<string>;

  /**
   * <p>An array of <code>Package</code> objects that describe the layer's packages.</p>
   */
  Packages?: Array<string> | Iterable<string>;

  /**
   * <p>A <code>VolumeConfigurations</code> object that describes the layer's Amazon EBS volumes.</p>
   */
  VolumeConfigurations?:
    | Array<_VolumeConfiguration>
    | Iterable<_VolumeConfiguration>;

  /**
   * <p>Whether auto healing is disabled for the layer.</p>
   */
  EnableAutoHealing?: boolean;

  /**
   * <p>Whether to automatically assign an <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP address</a> to the layer's instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html">How to Edit a Layer</a>.</p>
   */
  AutoAssignElasticIps?: boolean;

  /**
   * <p>For stacks that are running in a VPC, whether to automatically assign a public IP address to the layer's instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html">How to Edit a Layer</a>.</p>
   */
  AutoAssignPublicIps?: boolean;

  /**
   * <p>AWS OpsWorks Stacks supports five lifecycle events: <b>setup</b>, <b>configuration</b>, <b>deploy</b>, <b>undeploy</b>, and <b>shutdown</b>. For each layer, AWS OpsWorks Stacks runs a set of standard recipes for each event. You can also provide custom recipes for any or all layers and events. AWS OpsWorks Stacks runs custom event recipes after the standard recipes. <code>LayerCustomRecipes</code> specifies the custom recipes for a particular layer to be run in response to each of the five events.</p> <p>To specify a recipe, use the cookbook's directory name in the repository followed by two colons and the recipe name, which is the recipe's file name without the <code>.rb</code> extension. For example: <code>phpapp2::dbsetup</code> specifies the <code>dbsetup.rb</code> recipe in the repository's <code>phpapp2</code> folder.</p>
   */
  DefaultRecipes?: _Recipes;

  /**
   * <p>A <code>LayerCustomRecipes</code> object that specifies the layer's custom recipes.</p>
   */
  CustomRecipes?: _Recipes;

  /**
   * <p>Date when the layer was created.</p>
   */
  CreatedAt?: string;

  /**
   * <p>Whether to install operating system and package updates when the instance boots. The default value is <code>true</code>. If this value is set to <code>false</code>, you must then update your instances manually by using <a>CreateDeployment</a> to run the <code>update_dependencies</code> stack command or manually running <code>yum</code> (Amazon Linux) or <code>apt-get</code> (Ubuntu) on the instances. </p> <note> <p>We strongly recommend using the default value of <code>true</code>, to ensure that your instances have the latest security updates.</p> </note>
   */
  InstallUpdatesOnBoot?: boolean;

  /**
   * <p>Whether the layer uses Amazon EBS-optimized instances.</p>
   */
  UseEbsOptimizedInstances?: boolean;

  /**
   * <p>A <code>LifeCycleEventConfiguration</code> object that specifies the Shutdown event configuration.</p>
   */
  LifecycleEventConfiguration?: _LifecycleEventConfiguration;
}

export interface _UnmarshalledLayer extends _Layer {
  /**
   * <p>The layer attributes.</p> <p>For the <code>HaproxyStatsPassword</code>, <code>MysqlRootPassword</code>, and <code>GangliaPassword</code> attributes, AWS OpsWorks Stacks returns <code>*****FILTERED*****</code> instead of the actual value</p> <p>For an ECS Cluster layer, AWS OpsWorks Stacks the <code>EcsClusterArn</code> attribute is set to the cluster's ARN.</p>
   */
  Attributes?: {
    [key in
      | "EcsClusterArn"
      | "EnableHaproxyStats"
      | "HaproxyStatsUrl"
      | "HaproxyStatsUser"
      | "HaproxyStatsPassword"
      | "HaproxyHealthCheckUrl"
      | "HaproxyHealthCheckMethod"
      | "MysqlRootPassword"
      | "MysqlRootPasswordUbiquitous"
      | "GangliaUrl"
      | "GangliaUser"
      | "GangliaPassword"
      | "MemcachedMemory"
      | "NodejsVersion"
      | "RubyVersion"
      | "RubygemsVersion"
      | "ManageBundler"
      | "BundlerVersion"
      | "RailsStack"
      | "PassengerVersion"
      | "Jvm"
      | "JvmVersion"
      | "JvmOptions"
      | "JavaAppServer"
      | "JavaAppServerVersion"
      | string]: string
  };

  /**
   * <p>The Amazon CloudWatch Logs configuration settings for the layer.</p>
   */
  CloudWatchLogsConfiguration?: _UnmarshalledCloudWatchLogsConfiguration;

  /**
   * <p>An array containing the layer's custom security group IDs.</p>
   */
  CustomSecurityGroupIds?: Array<string>;

  /**
   * <p>An array containing the layer's security group names.</p>
   */
  DefaultSecurityGroupNames?: Array<string>;

  /**
   * <p>An array of <code>Package</code> objects that describe the layer's packages.</p>
   */
  Packages?: Array<string>;

  /**
   * <p>A <code>VolumeConfigurations</code> object that describes the layer's Amazon EBS volumes.</p>
   */
  VolumeConfigurations?: Array<_UnmarshalledVolumeConfiguration>;

  /**
   * <p>AWS OpsWorks Stacks supports five lifecycle events: <b>setup</b>, <b>configuration</b>, <b>deploy</b>, <b>undeploy</b>, and <b>shutdown</b>. For each layer, AWS OpsWorks Stacks runs a set of standard recipes for each event. You can also provide custom recipes for any or all layers and events. AWS OpsWorks Stacks runs custom event recipes after the standard recipes. <code>LayerCustomRecipes</code> specifies the custom recipes for a particular layer to be run in response to each of the five events.</p> <p>To specify a recipe, use the cookbook's directory name in the repository followed by two colons and the recipe name, which is the recipe's file name without the <code>.rb</code> extension. For example: <code>phpapp2::dbsetup</code> specifies the <code>dbsetup.rb</code> recipe in the repository's <code>phpapp2</code> folder.</p>
   */
  DefaultRecipes?: _UnmarshalledRecipes;

  /**
   * <p>A <code>LayerCustomRecipes</code> object that specifies the layer's custom recipes.</p>
   */
  CustomRecipes?: _UnmarshalledRecipes;

  /**
   * <p>A <code>LifeCycleEventConfiguration</code> object that specifies the Shutdown event configuration.</p>
   */
  LifecycleEventConfiguration?: _UnmarshalledLifecycleEventConfiguration;
}
