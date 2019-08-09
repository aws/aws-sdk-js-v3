import { _CloudWatchLogsConfiguration } from "./_CloudWatchLogsConfiguration";
import { _VolumeConfiguration } from "./_VolumeConfiguration";
import { _Recipes } from "./_Recipes";
import { _LifecycleEventConfiguration } from "./_LifecycleEventConfiguration";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateLayerInput shape
 */
export interface UpdateLayerInput {
  /**
   * <p>The layer ID.</p>
   */
  LayerId: string;

  /**
   * <p>The layer name, which is used by the console.</p>
   */
  Name?: string;

  /**
   * <p>For custom layers only, use this parameter to specify the layer's short name, which is used internally by AWS OpsWorks Stacks and by Chef. The short name is also used as the name for the directory where your app files are installed. It can have a maximum of 200 characters and must be in the following format: /\A[a-z0-9\-\_\.]+\Z/.</p> <p>The built-in layers' short names are defined by AWS OpsWorks Stacks. For more information, see the <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/layers.html">Layer Reference</a> </p>
   */
  Shortname?: string;

  /**
   * <p>One or more user-defined key/value pairs to be added to the stack attributes.</p>
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
   * <p>The ARN of an IAM profile to be used for all of the layer's EC2 instances. For more information about IAM ARNs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">Using Identifiers</a>.</p>
   */
  CustomInstanceProfileArn?: string;

  /**
   * <p>A JSON-formatted string containing custom stack configuration and deployment attributes to be installed on the layer's instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-json-override.html"> Using Custom JSON</a>. </p>
   */
  CustomJson?: string;

  /**
   * <p>An array containing the layer's custom security group IDs.</p>
   */
  CustomSecurityGroupIds?: Array<string> | Iterable<string>;

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
   * <p>A <code>LayerCustomRecipes</code> object that specifies the layer's custom recipes.</p>
   */
  CustomRecipes?: _Recipes;

  /**
   * <p>Whether to install operating system and package updates when the instance boots. The default value is <code>true</code>. To control when updates are installed, set this value to <code>false</code>. You must then update your instances manually by using <a>CreateDeployment</a> to run the <code>update_dependencies</code> stack command or manually running <code>yum</code> (Amazon Linux) or <code>apt-get</code> (Ubuntu) on the instances. </p> <note> <p>We strongly recommend using the default value of <code>true</code>, to ensure that your instances have the latest security updates.</p> </note>
   */
  InstallUpdatesOnBoot?: boolean;

  /**
   * <p>Whether to use Amazon EBS-optimized instances.</p>
   */
  UseEbsOptimizedInstances?: boolean;

  /**
   * <p/>
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
