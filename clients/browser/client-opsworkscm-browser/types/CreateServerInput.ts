import { _EngineAttribute } from "./_EngineAttribute";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateServerInput shape
 */
export interface CreateServerInput {
  /**
   * <p> Associate a public IP address with a server that you are launching. Valid values are <code>true</code> or <code>false</code>. The default value is <code>true</code>. </p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * <p> Enable or disable scheduled backups. Valid values are <code>true</code> or <code>false</code>. The default value is <code>true</code>. </p>
   */
  DisableAutomatedBackup?: boolean;

  /**
   * <p> The configuration management engine to use. Valid values include <code>ChefAutomate</code> and <code>Puppet</code>. </p>
   */
  Engine?: string;

  /**
   * <p> The engine model of the server. Valid values in this release include <code>Monolithic</code> for Puppet and <code>Single</code> for Chef. </p>
   */
  EngineModel?: string;

  /**
   * <p> The major release version of the engine that you want to use. For a Chef server, the valid value for EngineVersion is currently <code>12</code>. For a Puppet server, the valid value is <code>2017</code>. </p>
   */
  EngineVersion?: string;

  /**
   * <p>Optional engine attributes on a specified server. </p> <p class="title"> <b>Attributes accepted in a Chef createServer request:</b> </p> <ul> <li> <p> <code>CHEF_AUTOMATE_PIVOTAL_KEY</code>: A base64-encoded RSA public key. The corresponding private key is required to access the Chef API. When no CHEF_AUTOMATE_PIVOTAL_KEY is set, a private key is generated and returned in the response. </p> </li> <li> <p> <code>CHEF_AUTOMATE_ADMIN_PASSWORD</code>: The password for the administrative user in the Chef Automate web-based dashboard. The password length is a minimum of eight characters, and a maximum of 32. The password can contain letters, numbers, and special characters (!/@#$%^&amp;+=_). The password must contain at least one lower case letter, one upper case letter, one number, and one special character. When no CHEF_AUTOMATE_ADMIN_PASSWORD is set, one is generated and returned in the response.</p> </li> </ul> <p class="title"> <b>Attributes accepted in a Puppet createServer request:</b> </p> <ul> <li> <p> <code>PUPPET_ADMIN_PASSWORD</code>: To work with the Puppet Enterprise console, a password must use ASCII characters.</p> </li> <li> <p> <code>PUPPET_R10K_REMOTE</code>: The r10k remote is the URL of your control repository (for example, ssh://git@your.git-repo.com:user/control-repo.git). Specifying an r10k remote opens TCP port 8170.</p> </li> <li> <p> <code>PUPPET_R10K_PRIVATE_KEY</code>: If you are using a private Git repository, add PUPPET_R10K_PRIVATE_KEY to specify a PEM-encoded private SSH key.</p> </li> </ul>
   */
  EngineAttributes?: Array<_EngineAttribute> | Iterable<_EngineAttribute>;

  /**
   * <p> The number of automated backups that you want to keep. Whenever a new backup is created, AWS OpsWorks CM deletes the oldest backups if this number is exceeded. The default value is <code>1</code>. </p>
   */
  BackupRetentionCount?: number;

  /**
   * <p> The name of the server. The server name must be unique within your AWS account, within each region. Server names must start with a letter; then letters, numbers, or hyphens (-) are allowed, up to a maximum of 40 characters. </p>
   */
  ServerName: string;

  /**
   * <p> The ARN of the instance profile that your Amazon EC2 instances use. Although the AWS OpsWorks console typically creates the instance profile for you, if you are using API commands instead, run the service-role-creation.yaml AWS CloudFormation template, located at https://s3.amazonaws.com/opsworks-cm-us-east-1-prod-default-assets/misc/opsworks-cm-roles.yaml. This template creates a CloudFormation stack that includes the instance profile you need. </p>
   */
  InstanceProfileArn: string;

  /**
   * <p> The Amazon EC2 instance type to use. For example, <code>m5.large</code>. </p>
   */
  InstanceType: string;

  /**
   * <p> The Amazon EC2 key pair to set for the instance. This parameter is optional; if desired, you may specify this parameter to connect to your instances by using SSH. </p>
   */
  KeyPair?: string;

  /**
   * <p> The start time for a one-hour period each week during which AWS OpsWorks CM performs maintenance on the instance. Valid values must be specified in the following format: <code>DDD:HH:MM</code>. The specified time is in coordinated universal time (UTC). The default value is a random one-hour period on Tuesday, Wednesday, or Friday. See <code>TimeWindowDefinition</code> for more information. </p> <p> <b>Example:</b> <code>Mon:08:00</code>, which represents a start time of every Monday at 08:00 UTC. (8:00 a.m.) </p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p> The start time for a one-hour period during which AWS OpsWorks CM backs up application-level data on your server if automated backups are enabled. Valid values must be specified in one of the following formats: </p> <ul> <li> <p> <code>HH:MM</code> for daily backups</p> </li> <li> <p> <code>DDD:HH:MM</code> for weekly backups</p> </li> </ul> <p>The specified time is in coordinated universal time (UTC). The default value is a random, daily start time.</p> <p> <b>Example:</b> <code>08:00</code>, which represents a daily start time of 08:00 UTC.</p> <p> <b>Example:</b> <code>Mon:08:00</code>, which represents a start time of every Monday at 08:00 UTC. (8:00 a.m.)</p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p> A list of security group IDs to attach to the Amazon EC2 instance. If you add this parameter, the specified security groups must be within the VPC that is specified by <code>SubnetIds</code>. </p> <p> If you do not specify this parameter, AWS OpsWorks CM creates one new security group that uses TCP ports 22 and 443, open to 0.0.0.0/0 (everyone). </p>
   */
  SecurityGroupIds?: Array<string> | Iterable<string>;

  /**
   * <p> The service role that the AWS OpsWorks CM service backend uses to work with your account. Although the AWS OpsWorks management console typically creates the service role for you, if you are using the AWS CLI or API commands, run the service-role-creation.yaml AWS CloudFormation template, located at https://s3.amazonaws.com/opsworks-cm-us-east-1-prod-default-assets/misc/opsworks-cm-roles.yaml. This template creates a CloudFormation stack that includes the service role and instance profile that you need. </p>
   */
  ServiceRoleArn: string;

  /**
   * <p> The IDs of subnets in which to launch the server EC2 instance. </p> <p> Amazon EC2-Classic customers: This field is required. All servers must run within a VPC. The VPC must have "Auto Assign Public IP" enabled. </p> <p> EC2-VPC customers: This field is optional. If you do not specify subnet IDs, your EC2 instances are created in a default subnet that is selected by Amazon EC2. If you specify subnet IDs, the VPC must have "Auto Assign Public IP" enabled. </p> <p>For more information about supported Amazon EC2 platforms, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-platforms.html">Supported Platforms</a>.</p>
   */
  SubnetIds?: Array<string> | Iterable<string>;

  /**
   * <p> If you specify this field, AWS OpsWorks CM creates the server by using the backup represented by BackupId. </p>
   */
  BackupId?: string;

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
