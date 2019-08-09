import { _CloudWatchLogsConfiguration } from "./_CloudWatchLogsConfiguration";
import { _VolumeConfiguration } from "./_VolumeConfiguration";
import { _Recipes } from "./_Recipes";
import { _LifecycleEventConfiguration } from "./_LifecycleEventConfiguration";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateLayerInput shape
 */
export interface CreateLayerInput {
  /**
   * <p>The layer stack ID.</p>
   */
  StackId: string;

  /**
   * <p>The layer type. A stack cannot have more than one built-in layer of the same type. It can have any number of custom layers. Built-in layers are not available in Chef 12 stacks.</p>
   */
  Type:
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
   * <p>The layer name, which is used by the console.</p>
   */
  Name: string;

  /**
   * <p>For custom layers only, use this parameter to specify the layer's short name, which is used internally by AWS OpsWorks Stacks and by Chef recipes. The short name is also used as the name for the directory where your app files are installed. It can have a maximum of 200 characters, which are limited to the alphanumeric characters, '-', '_', and '.'.</p> <p>The built-in layers' short names are defined by AWS OpsWorks Stacks. For more information, see the <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/layers.html">Layer Reference</a>.</p>
   */
  Shortname: string;

  /**
   * <p>One or more user-defined key-value pairs to be added to the stack attributes.</p> <p>To create a cluster layer, set the <code>EcsClusterArn</code> attribute to the cluster's ARN.</p>
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
   * <p>Specifies CloudWatch Logs configuration options for the layer. For more information, see <a>CloudWatchLogsLogStream</a>.</p>
   */
  CloudWatchLogsConfiguration?: _CloudWatchLogsConfiguration;

  /**
   * <p>The ARN of an IAM profile to be used for the layer's EC2 instances. For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using Identifiers</a>.</p>
   */
  CustomInstanceProfileArn?: string;

  /**
   * <p>A JSON-formatted string containing custom stack configuration and deployment attributes to be installed on the layer's instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-json-override.html"> Using Custom JSON</a>. This feature is supported as of version 1.7.42 of the AWS CLI. </p>
   */
  CustomJson?: string;

  /**
   * <p>An array containing the layer custom security group IDs.</p>
   */
  CustomSecurityGroupIds?: Array<string> | Iterable<string>;

  /**
   * <p>An array of <code>Package</code> objects that describes the layer packages.</p>
   */
  Packages?: Array<string> | Iterable<string>;

  /**
   * <p>A <code>VolumeConfigurations</code> object that describes the layer's Amazon EBS volumes.</p>
   */
  VolumeConfigurations?:
    | Array<_VolumeConfiguration>
    | Iterable<_VolumeConfiguration>;

  /**
   * <p>Whether to disable auto healing for the layer.</p>
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
   * <p>A <code>LayerCustomRecipes</code> object that specifies the layer custom recipes.</p>
   */
  CustomRecipes?: _Recipes;

  /**
   * <p>Whether to install operating system and package updates when the instance boots. The default value is <code>true</code>. To control when updates are installed, set this value to <code>false</code>. You must then update your instances manually by using <a>CreateDeployment</a> to run the <code>update_dependencies</code> stack command or by manually running <code>yum</code> (Amazon Linux) or <code>apt-get</code> (Ubuntu) on the instances. </p> <note> <p>To ensure that your instances have the latest security updates, we strongly recommend using the default value of <code>true</code>.</p> </note>
   */
  InstallUpdatesOnBoot?: boolean;

  /**
   * <p>Whether to use Amazon EBS-optimized instances.</p>
   */
  UseEbsOptimizedInstances?: boolean;

  /**
   * <p>A <code>LifeCycleEventConfiguration</code> object that you can use to configure the Shutdown event to specify an execution timeout and enable or disable Elastic Load Balancer connection draining.</p>
   */
  LifecycleEventConfiguration?: _LifecycleEventConfiguration;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
