// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { OpsWorksCMServiceException as __BaseException } from "./OpsWorksCMServiceException";

/**
 * <p>Stores account attributes.
 *     </p>
 */
export interface AccountAttribute {
  /**
   * <p>
   *       The attribute name. The following are supported attribute names.
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>ServerLimit:</i> The number of current servers/maximum number of servers allowed. By default, you can have a maximum of 10 servers.
   *       </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>ManualBackupLimit:</i> The number of current manual backups/maximum number of backups allowed. By default, you can have a maximum
   *         of 50 manual backups saved.
   *       </p>
   *             </li>
   *          </ul>
   */
  Name?: string;

  /**
   * <p>
   *       The maximum allowed value.
   *     </p>
   */
  Maximum?: number;

  /**
   * <p>
   *       The current usage, such as the current number of servers that are associated with the account.
   *     </p>
   */
  Used?: number;
}

/**
 * <p>A name and value pair that is specific to the engine of the server.
 *     </p>
 */
export interface EngineAttribute {
  /**
   * <p>The name of the engine attribute.
   *     </p>
   */
  Name?: string;

  /**
   * <p>The value of the engine attribute.
   *     </p>
   */
  Value?: string;
}

export interface AssociateNodeRequest {
  /**
   * <p>The name of the server with which to associate the node.
   *     </p>
   */
  ServerName: string | undefined;

  /**
   * <p>The name of the node.
   *     </p>
   */
  NodeName: string | undefined;

  /**
   * <p>Engine attributes used for associating the node.
   *     </p>
   *          <p class="title">
   *             <b>Attributes accepted in a AssociateNode request for Chef</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CHEF_ORGANIZATION</code>: The Chef organization
   *           with which the node is associated. By default only one organization
   *           named <code>default</code> can exist.
   *       </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CHEF_NODE_PUBLIC_KEY</code>: A PEM-formatted public key. This key is required for the <code>chef-client</code> agent to access the Chef API.
   *     </p>
   *             </li>
   *          </ul>
   *          <p class="title">
   *             <b>Attributes accepted in a AssociateNode request for Puppet</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PUPPET_NODE_CSR</code>: A PEM-formatted certificate-signing request (CSR) that is created by the node.
   *     </p>
   *             </li>
   *          </ul>
   */
  EngineAttributes: EngineAttribute[] | undefined;
}

export interface AssociateNodeResponse {
  /**
   * <p>Contains a token which can be passed to the <code>DescribeNodeAssociationStatus</code> API call to get the status of the association request.
   *     </p>
   */
  NodeAssociationStatusToken?: string;
}

/**
 * <p>The resource is in a state that does not allow you to perform a specified action.
 *     </p>
 */
export class InvalidStateException extends __BaseException {
  readonly name: "InvalidStateException" = "InvalidStateException";
  readonly $fault: "client" = "client";
  /**
   * <p>Error or informational message that provides more detail if a resource is
   *       in a state that is not valid for performing a specified action.
   *     </p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidStateException, __BaseException>) {
    super({
      name: "InvalidStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested resource does not exist, or access was denied.
 *     </p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>Error or informational message that can contain more detail about problems locating or accessing a resource.
   *     </p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more of the provided request parameters are not valid.
 *     </p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>Error or informational message that can contain more detail about a validation failure.
   *     </p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
  }
}

export enum BackupType {
  AUTOMATED = "AUTOMATED",
  MANUAL = "MANUAL",
}

export enum BackupStatus {
  DELETING = "DELETING",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  OK = "OK",
}

/**
 * <p>Describes a single backup.
 *     </p>
 */
export interface Backup {
  /**
   * <p>The ARN of the backup.
   *     </p>
   */
  BackupArn?: string;

  /**
   * <p>
   *       The generated ID of the backup. Example: <code>myServerName-yyyyMMddHHmmssSSS</code>
   *          </p>
   */
  BackupId?: string;

  /**
   * <p>
   *       The backup type. Valid values are <code>automated</code> or <code>manual</code>.
   *     </p>
   */
  BackupType?: BackupType | string;

  /**
   * <p>
   *       The time stamp when the backup was created in the database. Example: <code>2016-07-29T13:38:47.520Z</code>
   *          </p>
   */
  CreatedAt?: Date;

  /**
   * <p>
   *       A user-provided description for a manual backup. This field is empty for automated backups.
   *     </p>
   */
  Description?: string;

  /**
   * <p>
   *       The engine type that is obtained from the server when the backup is created.
   *     </p>
   */
  Engine?: string;

  /**
   * <p>
   *       The engine model that is obtained from the server when the backup is created.
   *     </p>
   */
  EngineModel?: string;

  /**
   * <p>
   *       The engine version that is obtained from the server when the backup is created.
   *     </p>
   */
  EngineVersion?: string;

  /**
   * <p>
   *       The EC2 instance profile ARN that is obtained from the server when the backup is created. Because this value is stored,
   *       you are not required to provide the InstanceProfileArn again if you restore a backup.
   *     </p>
   */
  InstanceProfileArn?: string;

  /**
   * <p>
   *       The instance type that is obtained from the server when the backup is created.
   *     </p>
   */
  InstanceType?: string;

  /**
   * <p>
   *       The key pair that is obtained from the server when the backup is created.
   *     </p>
   */
  KeyPair?: string;

  /**
   * <p>
   *       The preferred backup period that is obtained from the server when the backup is created.
   *     </p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>
   *       The preferred maintenance period that is obtained from the server when the backup is created.
   *     </p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * @deprecated
   *
   * <p>
   *       This field is deprecated and is no longer used.
   *     </p>
   */
  S3DataSize?: number;

  /**
   * @deprecated
   *
   * <p>
   *       This field is deprecated and is no longer used.
   *     </p>
   */
  S3DataUrl?: string;

  /**
   * <p>
   *       The Amazon S3 URL of the backup's log file.
   *     </p>
   */
  S3LogUrl?: string;

  /**
   * <p>
   *       The security group IDs that are obtained from the server when the backup is created.
   *     </p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>
   *       The name of the server from which the backup was made.
   *     </p>
   */
  ServerName?: string;

  /**
   * <p>
   *       The service role ARN that is obtained from the server when the backup is created.
   *     </p>
   */
  ServiceRoleArn?: string;

  /**
   * <p>The status of a backup while in progress.
   *     </p>
   */
  Status?: BackupStatus | string;

  /**
   * <p>
   *       An informational message about backup status.
   *     </p>
   */
  StatusDescription?: string;

  /**
   * <p>
   *       The subnet IDs that are obtained from the server when the backup is created.
   *     </p>
   */
  SubnetIds?: string[];

  /**
   * <p>
   *       The version of AWS OpsWorks CM-specific tools that is obtained from the server when the backup is created.
   *     </p>
   */
  ToolsVersion?: string;

  /**
   * <p>
   *       The IAM user ARN of the requester for manual backups. This field is empty for automated backups.
   *     </p>
   */
  UserArn?: string;
}

/**
 * <p>A map that contains tag keys and tag values to attach to an AWS OpsWorks for Chef Automate
 *       or AWS OpsWorks for Puppet Enterprise server. Leading and trailing white spaces are trimmed from both the key and value.
 *       A maximum of 50 user-applied tags is allowed for tag-supported AWS OpsWorks-CM resources.</p>
 */
export interface Tag {
  /**
   * <p>A tag key, such as <code>Stage</code> or <code>Name</code>. A tag key cannot be empty. The key can be a maximum of 127 characters,
   *       and can contain only Unicode letters, numbers, or separators, or the following special characters: <code>+ - = . _ : /</code>
   *          </p>
   */
  Key: string | undefined;

  /**
   * <p>An optional tag value, such as <code>Production</code> or <code>test-owcm-server</code>. The value can be a maximum of 255 characters,
   *       and contain only Unicode letters, numbers, or separators, or the following special characters: <code>+ - = . _ : /</code>
   *          </p>
   */
  Value: string | undefined;
}

export interface CreateBackupRequest {
  /**
   * <p>The name of the server that you want to back up.
   *     </p>
   */
  ServerName: string | undefined;

  /**
   * <p>
   *       A user-defined description of the backup.
   *     </p>
   */
  Description?: string;

  /**
   * <p>A map that contains tag keys and tag values to attach to an AWS OpsWorks-CM server backup.</p>
   *          <ul>
   *             <li>
   *                <p>The key cannot be empty.</p>
   *             </li>
   *             <li>
   *                <p>The key can be a maximum of 127 characters, and can contain only Unicode letters, numbers, or separators, or the following special characters: <code>+ - = . _ : /</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>The value can be a maximum 255 characters, and contain only Unicode letters, numbers, or separators, or the following special characters: <code>+ - = . _ : /</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Leading and trailing white spaces are trimmed from both the key and value.</p>
   *             </li>
   *             <li>
   *                <p>A maximum of 50 user-applied tags is allowed for tag-supported AWS OpsWorks-CM resources.</p>
   *             </li>
   *          </ul>
   */
  Tags?: Tag[];
}

export interface CreateBackupResponse {
  /**
   * <p>Backup created by request.</p>
   */
  Backup?: Backup;
}

/**
 * <p>The limit of servers or backups has been reached.
 *     </p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>Error or informational message that the maximum allowed number of servers or backups has been exceeded.
   *     </p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

export interface CreateServerRequest {
  /**
   * <p>
   *         Associate a public IP address with a server that you are launching. Valid values are <code>true</code> or <code>false</code>. The default value is <code>true</code>.
   *       </p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * <p>An optional public endpoint of a server, such as <code>https://aws.my-company.com</code>. To access the server, create a CNAME DNS record in your preferred DNS service that points the custom
   *       domain to the endpoint that is generated when the server is created (the value of the CreateServer Endpoint attribute). You cannot access the server by using the
   *       generated <code>Endpoint</code> value if the server is using a custom domain. If you specify a custom domain, you must also specify values for <code>CustomCertificate</code>
   *       and <code>CustomPrivateKey</code>.</p>
   */
  CustomDomain?: string;

  /**
   * <p>A PEM-formatted HTTPS certificate. The value can be be a single, self-signed certificate, or a certificate chain. If you specify a
   *       custom certificate, you must also specify values for <code>CustomDomain</code> and <code>CustomPrivateKey</code>. The following are requirements for the <code>CustomCertificate</code> value:</p>
   *          <ul>
   *             <li>
   *                <p>You can provide either a self-signed, custom certificate, or the full certificate chain.</p>
   *             </li>
   *             <li>
   *                <p>The certificate must be a valid X509 certificate, or a certificate chain in PEM format.</p>
   *             </li>
   *             <li>
   *                <p>The certificate must be valid at the time of upload. A certificate can't be used before its validity period begins (the certificate's <code>NotBefore</code> date), or after it expires
   *         (the certificate's <code>NotAfter</code> date).</p>
   *             </li>
   *             <li>
   *                <p>The certificate’s common name or subject alternative names (SANs), if present, must match the value of <code>CustomDomain</code>.</p>
   *             </li>
   *             <li>
   *                <p>The certificate must match the value of <code>CustomPrivateKey</code>.</p>
   *             </li>
   *          </ul>
   */
  CustomCertificate?: string;

  /**
   * <p>A private key in PEM format for connecting to the server by using HTTPS. The private key must not be encrypted; it cannot be protected by a password or passphrase.
   *       If you specify a custom private key, you must also specify values for <code>CustomDomain</code> and <code>CustomCertificate</code>.</p>
   */
  CustomPrivateKey?: string;

  /**
   * <p>
   *         Enable or disable scheduled backups. Valid values are <code>true</code> or <code>false</code>. The default value is <code>true</code>.
   *       </p>
   */
  DisableAutomatedBackup?: boolean;

  /**
   * <p>
   *         The configuration management engine to use. Valid values include <code>ChefAutomate</code> and <code>Puppet</code>.
   *       </p>
   */
  Engine: string | undefined;

  /**
   * <p>
   *         The engine model of the server. Valid values in this release include <code>Monolithic</code> for Puppet and <code>Single</code> for Chef.
   *       </p>
   */
  EngineModel?: string;

  /**
   * <p>
   *         The major release version of the engine that you want to use. For a Chef server, the valid value for EngineVersion
   *         is currently <code>2</code>. For a Puppet server, valid values are <code>2019</code> or <code>2017</code>.
   *       </p>
   */
  EngineVersion?: string;

  /**
   * <p>Optional engine attributes on a specified server.
   *     </p>
   *          <p class="title">
   *             <b>Attributes accepted in a Chef createServer request:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CHEF_AUTOMATE_PIVOTAL_KEY</code>: A
   *       base64-encoded RSA public key. The corresponding private key is required to
   *       access the Chef API. When no CHEF_AUTOMATE_PIVOTAL_KEY is set, a private key is
   *       generated and returned in the response.
   *       </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CHEF_AUTOMATE_ADMIN_PASSWORD</code>:
   *       The password for the administrative user in the Chef Automate web-based dashboard. The
   *       password length is a minimum of eight characters, and a maximum of 32. The
   *       password can contain letters, numbers, and special characters
   *       (!/@#$%^&+=_). The password must contain at least one lower case letter, one upper
   *       case letter, one number, and one special character. When no CHEF_AUTOMATE_ADMIN_PASSWORD is set, one is
   *       generated and returned in the response.</p>
   *             </li>
   *          </ul>
   *          <p class="title">
   *             <b>Attributes accepted in a Puppet createServer request:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PUPPET_ADMIN_PASSWORD</code>: To work with the Puppet Enterprise console, a password must use ASCII characters.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PUPPET_R10K_REMOTE</code>: The r10k remote is the URL of your control repository
   *         (for example, ssh://git@your.git-repo.com:user/control-repo.git). Specifying an r10k remote opens TCP port 8170.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PUPPET_R10K_PRIVATE_KEY</code>: If you are using a private Git repository, add
   *         PUPPET_R10K_PRIVATE_KEY to specify a PEM-encoded private SSH key.</p>
   *             </li>
   *          </ul>
   */
  EngineAttributes?: EngineAttribute[];

  /**
   * <p>
   *         The number of automated backups that you want to keep. Whenever a new backup is created, AWS OpsWorks CM deletes the oldest backups if this number is exceeded.
   *         The default value is <code>1</code>.
   *       </p>
   */
  BackupRetentionCount?: number;

  /**
   * <p>
   *         The name of the server. The server name must be unique within your AWS account, within each region.
   *         Server names must start with a letter; then letters, numbers, or hyphens (-) are allowed, up to a maximum of 40 characters.
   *       </p>
   */
  ServerName: string | undefined;

  /**
   * <p>
   *         The ARN of the instance profile that your Amazon EC2
   *         instances use. Although the AWS OpsWorks console typically creates
   *         the instance profile for you, if you are using API commands instead, run the service-role-creation.yaml
   *         AWS CloudFormation template, located at https://s3.amazonaws.com/opsworks-cm-us-east-1-prod-default-assets/misc/opsworks-cm-roles.yaml.
   *         This template creates a CloudFormation stack that includes the instance profile you need.
   *
   *       </p>
   */
  InstanceProfileArn: string | undefined;

  /**
   * <p>
   *         The Amazon EC2 instance type to use. For example, <code>m5.large</code>.
   *       </p>
   */
  InstanceType: string | undefined;

  /**
   * <p>
   *         The Amazon EC2 key pair to set for the instance. This parameter is optional; if desired, you may specify this parameter to connect to your instances by using SSH.
   *       </p>
   */
  KeyPair?: string;

  /**
   * <p>
   *       The start time for a one-hour period each week during which AWS OpsWorks CM performs maintenance on the instance.
   *       Valid values must be specified in the following format: <code>DDD:HH:MM</code>. <code>MM</code> must be specified as <code>00</code>. The specified time is in coordinated universal time (UTC).
   *       The default value is a random one-hour period on Tuesday, Wednesday, or Friday. See <code>TimeWindowDefinition</code> for more information.
   *     </p>
   *          <p>
   *             <b>Example:</b>
   *             <code>Mon:08:00</code>,
   *       which represents a start time of every Monday at 08:00 UTC. (8:00 a.m.)
   *     </p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>
   *       The start time for a one-hour period during which AWS OpsWorks CM backs up application-level data on your server
   *       if automated backups are enabled. Valid values must be specified in one of the following formats:
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HH:MM</code> for daily backups</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DDD:HH:MM</code> for weekly backups</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>MM</code> must be specified as <code>00</code>. The specified time is in coordinated universal time (UTC). The default value is a random, daily start time.</p>
   *          <p>
   *             <b>Example:</b>
   *             <code>08:00</code>, which represents a daily start time of 08:00 UTC.</p>
   *          <p>
   *             <b>Example:</b>
   *             <code>Mon:08:00</code>, which represents a start time of every Monday at 08:00 UTC. (8:00 a.m.)</p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>
   *       A list of security group IDs to attach to the Amazon EC2 instance. If you add this parameter, the specified security groups
   *       must be within the VPC that is specified by <code>SubnetIds</code>.
   *     </p>
   *          <p>
   *       If you do not specify this parameter, AWS OpsWorks CM creates one new security group that uses TCP ports 22 and 443, open to
   *       0.0.0.0/0 (everyone).
   *     </p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>
   *       The service role that the AWS OpsWorks CM service backend uses to work with your account. Although the AWS OpsWorks management console typically creates
   *       the service role for you, if you are using the AWS CLI or API commands,
   *       run the service-role-creation.yaml AWS CloudFormation template, located at https://s3.amazonaws.com/opsworks-cm-us-east-1-prod-default-assets/misc/opsworks-cm-roles.yaml.
   *       This template creates a CloudFormation stack that includes the service role and instance profile that you need.
   *     </p>
   */
  ServiceRoleArn: string | undefined;

  /**
   * <p>
   *       The IDs of subnets in which to launch the server EC2 instance.
   *     </p>
   *          <p>
   *       Amazon EC2-Classic customers: This field is required. All servers must run within a VPC. The VPC must have "Auto Assign Public IP" enabled.
   *     </p>
   *          <p>
   *       EC2-VPC customers: This field is optional. If you do not specify subnet IDs, your EC2 instances are created in a default subnet that is selected by Amazon EC2. If you specify subnet IDs, the VPC must have "Auto Assign Public IP" enabled.
   *     </p>
   *          <p>For more information about supported Amazon EC2 platforms, see
   *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-platforms.html">Supported Platforms</a>.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>A map that contains tag keys and tag values to attach to an AWS OpsWorks for Chef Automate or AWS OpsWorks for Puppet Enterprise server.</p>
   *          <ul>
   *             <li>
   *                <p>The key cannot be empty.</p>
   *             </li>
   *             <li>
   *                <p>The key can be a maximum of 127 characters, and can contain only Unicode letters, numbers, or separators, or the following special characters: <code>+ - = . _ : / @</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>The value can be a maximum 255 characters, and contain only Unicode letters, numbers, or separators, or the following special characters: <code>+ - = . _ : / @</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Leading and trailing white spaces are trimmed from both the key and value.</p>
   *             </li>
   *             <li>
   *                <p>A maximum of 50 user-applied tags is allowed for any AWS OpsWorks-CM server.</p>
   *             </li>
   *          </ul>
   */
  Tags?: Tag[];

  /**
   * <p>
   *       If you specify this field, AWS OpsWorks CM creates the server by using the backup represented by BackupId.
   *     </p>
   */
  BackupId?: string;
}

export enum MaintenanceStatus {
  FAILED = "FAILED",
  SUCCESS = "SUCCESS",
}

export enum ServerStatus {
  BACKING_UP = "BACKING_UP",
  CONNECTION_LOST = "CONNECTION_LOST",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  HEALTHY = "HEALTHY",
  MODIFYING = "MODIFYING",
  RESTORING = "RESTORING",
  RUNNING = "RUNNING",
  SETUP = "SETUP",
  TERMINATED = "TERMINATED",
  UNDER_MAINTENANCE = "UNDER_MAINTENANCE",
  UNHEALTHY = "UNHEALTHY",
}

/**
 * <p>Describes a configuration management server.
 *     </p>
 */
export interface Server {
  /**
   * <p>Associate a public IP address with a server that you are launching.
   *     </p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * <p>The number of automated backups to keep.
   *     </p>
   */
  BackupRetentionCount?: number;

  /**
   * <p>The name of the server.
   *     </p>
   */
  ServerName?: string;

  /**
   * <p>Time stamp of server creation. Example <code>2016-07-29T13:38:47.520Z</code>
   *          </p>
   */
  CreatedAt?: Date;

  /**
   * <p>The ARN of the CloudFormation stack that was used to create the server.
   *     </p>
   */
  CloudFormationStackArn?: string;

  /**
   * <p>An optional public endpoint of a server, such as <code>https://aws.my-company.com</code>.
   *       You cannot access the server by using the <code>Endpoint</code> value if the server has a <code>CustomDomain</code> specified.</p>
   */
  CustomDomain?: string;

  /**
   * <p>Disables automated backups. The number of stored backups is dependent on the value of PreferredBackupCount.
   *     </p>
   */
  DisableAutomatedBackup?: boolean;

  /**
   * <p>
   *       A DNS name that can be used to access the engine. Example: <code>myserver-asdfghjkl.us-east-1.opsworks.io</code>.
   *       You cannot access the server by using the <code>Endpoint</code> value if the server has a <code>CustomDomain</code> specified.
   *     </p>
   */
  Endpoint?: string;

  /**
   * <p>The engine type of the server. Valid values in this release include <code>ChefAutomate</code> and <code>Puppet</code>.
   *     </p>
   */
  Engine?: string;

  /**
   * <p>The engine model of the server. Valid values in this release include <code>Monolithic</code> for Puppet and <code>Single</code> for Chef.
   *     </p>
   */
  EngineModel?: string;

  /**
   * <p>The response of a createServer() request returns the master
   *     credential to access the server in EngineAttributes. These
   *     credentials are not stored by AWS OpsWorks CM; they are returned only as part of the result of createServer().
   *     </p>
   *          <p class="title">
   *             <b>Attributes returned in a createServer response for Chef</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CHEF_AUTOMATE_PIVOTAL_KEY</code>: A base64-encoded RSA private key that is
   *       generated by AWS OpsWorks for Chef Automate. This private key is required to access
   *       the Chef API.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CHEF_STARTER_KIT</code>: A base64-encoded ZIP file.
   *       The ZIP file contains a Chef starter kit, which includes a README, a
   *       configuration file, and the required RSA private key. Save this file, unzip it,
   *       and then change to the directory where you've unzipped the file contents.
   *       From this directory, you can run Knife commands.</p>
   *             </li>
   *          </ul>
   *          <p class="title">
   *             <b>Attributes returned in a createServer response for Puppet</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PUPPET_STARTER_KIT</code>: A base64-encoded ZIP file.
   *         The ZIP file contains a Puppet starter kit, including a README and a
   *         required private key. Save this file, unzip it,
   *         and then change to the directory where you've unzipped the file contents.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PUPPET_ADMIN_PASSWORD</code>: An administrator password that you can use to sign in to the Puppet Enterprise console after the server is online.</p>
   *             </li>
   *          </ul>
   */
  EngineAttributes?: EngineAttribute[];

  /**
   * <p>The engine version of the server. For a Chef server, the valid value for EngineVersion is
   *       currently <code>2</code>. For a Puppet server, specify either <code>2019</code> or <code>2017</code>.
   *     </p>
   */
  EngineVersion?: string;

  /**
   * <p>The instance profile ARN of the server.
   *     </p>
   */
  InstanceProfileArn?: string;

  /**
   * <p>
   *       The instance type for the server, as specified in the CloudFormation stack. This might not be the same instance type that is shown in the EC2 console.
   *     </p>
   */
  InstanceType?: string;

  /**
   * <p>The key pair associated with the server.
   *     </p>
   */
  KeyPair?: string;

  /**
   * <p>The status of the most recent server maintenance run. Shows <code>SUCCESS</code> or <code>FAILED</code>.
   *     </p>
   */
  MaintenanceStatus?: MaintenanceStatus | string;

  /**
   * <p>The preferred maintenance period specified for the server.
   *     </p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The preferred backup period specified for the server.
   *     </p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>
   *       The security group IDs for the server, as specified in the CloudFormation stack.
   *       These might not be the same security groups that are shown in the EC2 console.
   *     </p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The service role ARN used to create the server.
   *     </p>
   */
  ServiceRoleArn?: string;

  /**
   * <p>
   *       The server's status. This field displays the states of actions in progress, such as creating, running, or backing up the server,
   *       as well as the server's health state.
   *     </p>
   */
  Status?: ServerStatus | string;

  /**
   * <p>
   *       Depending on the server status, this field has either a human-readable
   *       message (such as a create or backup error), or an escaped block of JSON (used for health check results).
   *     </p>
   */
  StatusReason?: string;

  /**
   * <p>
   *       The subnet IDs specified in a CreateServer request.
   *     </p>
   */
  SubnetIds?: string[];

  /**
   * <p>The ARN of the server.
   *     </p>
   */
  ServerArn?: string;
}

export interface CreateServerResponse {
  /**
   * <p>The server that is created by the request.
   *     </p>
   */
  Server?: Server;
}

/**
 * <p>The requested resource cannot be created because it already exists.
 *     </p>
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * <p>Error or informational message in response to a CreateServer request that a resource cannot be created because it already exists.
   *     </p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

export interface DeleteBackupRequest {
  /**
   * <p>The ID of the backup to delete. Run the DescribeBackups command to get a list of backup IDs.
   *       Backup IDs are in the format <code>ServerName-yyyyMMddHHmmssSSS</code>.
   *     </p>
   */
  BackupId: string | undefined;
}

export interface DeleteBackupResponse {}

export interface DeleteServerRequest {
  /**
   * <p>The ID of the server to delete.</p>
   */
  ServerName: string | undefined;
}

export interface DeleteServerResponse {}

export interface DescribeAccountAttributesRequest {}

export interface DescribeAccountAttributesResponse {
  /**
   * <p>
   *       The attributes that are currently set for the account.
   *     </p>
   */
  Attributes?: AccountAttribute[];
}

export interface DescribeBackupsRequest {
  /**
   * <p>Describes a single backup.
   *     </p>
   */
  BackupId?: string;

  /**
   * <p>Returns backups for the server with the specified ServerName.
   *     </p>
   */
  ServerName?: string;

  /**
   * <p>This is not currently implemented for <code>DescribeBackups</code> requests.</p>
   */
  NextToken?: string;

  /**
   * <p>This is not currently implemented for <code>DescribeBackups</code> requests.</p>
   */
  MaxResults?: number;
}

export interface DescribeBackupsResponse {
  /**
   * <p>Contains the response to a <code>DescribeBackups</code> request.
   *     </p>
   */
  Backups?: Backup[];

  /**
   * <p>This is not currently implemented for <code>DescribeBackups</code> requests.</p>
   */
  NextToken?: string;
}

/**
 * <p>This occurs when the provided nextToken is not valid.
 *     </p>
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  /**
   * <p>Error or informational message that can contain more detail about a nextToken failure.
   *     </p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
    this.Message = opts.Message;
  }
}

export interface DescribeEventsRequest {
  /**
   * <p>The name of the server for which you want to view events.</p>
   */
  ServerName: string | undefined;

  /**
   * <p>NextToken is a string that is returned in some command responses. It indicates that
   *       not all entries have been returned, and that you must run at least one more request to get remaining
   *       items. To get remaining results, call <code>DescribeEvents</code> again, and assign the token from the previous
   *       results as the value of the <code>nextToken</code> parameter. If there are no more results,
   *       the response object's <code>nextToken</code> parameter value is <code>null</code>.
   *       Setting a <code>nextToken</code> value that was not returned in
   *       your previous results causes an <code>InvalidNextTokenException</code> to occur.
   *     </p>
   */
  NextToken?: string;

  /**
   * <p>To receive a paginated response, use this parameter to specify the maximum number
   *       of results to be returned with a single call. If the number of available results exceeds
   *       this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code>
   *       request parameter to get the next set of results.
   *     </p>
   */
  MaxResults?: number;
}

/**
 * <p>An event that is related to the server, such as the start of maintenance or backup.
 *     </p>
 */
export interface ServerEvent {
  /**
   * <p>The time when the event occurred.
   *     </p>
   */
  CreatedAt?: Date;

  /**
   * <p>The name of the server on or for which the event occurred.
   *     </p>
   */
  ServerName?: string;

  /**
   * <p>A human-readable informational or status message.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon S3 URL of the event's log file.</p>
   */
  LogUrl?: string;
}

export interface DescribeEventsResponse {
  /**
   * <p>Contains the response to a <code>DescribeEvents</code> request.
   *     </p>
   */
  ServerEvents?: ServerEvent[];

  /**
   * <p>NextToken is a string that is returned in some command responses. It indicates that
   *       not all entries have been returned, and that you must run at least one more request to get remaining
   *       items. To get remaining results, call <code>DescribeEvents</code> again, and assign the token from the previous
   *       results as the value of the <code>nextToken</code> parameter. If there are no more results,
   *       the response object's <code>nextToken</code> parameter value is <code>null</code>.
   *       Setting a <code>nextToken</code> value that was not returned in
   *       your previous results causes an <code>InvalidNextTokenException</code> to occur.
   *     </p>
   */
  NextToken?: string;
}

export interface DescribeNodeAssociationStatusRequest {
  /**
   * <p>The token returned in either the AssociateNodeResponse or the DisassociateNodeResponse.
   *     </p>
   */
  NodeAssociationStatusToken: string | undefined;

  /**
   * <p>The name of the server from which to disassociate the node.
   *     </p>
   */
  ServerName: string | undefined;
}

export enum NodeAssociationStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCESS = "SUCCESS",
}

export interface DescribeNodeAssociationStatusResponse {
  /**
   * <p>The status of the association or disassociation request.
   *     </p>
   *          <p class="title">
   *             <b>Possible values:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SUCCESS</code>: The association or disassociation succeeded.
   *       </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The association or disassociation failed.
   *       </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code>: The association or disassociation is still in progress.
   *       </p>
   *             </li>
   *          </ul>
   */
  NodeAssociationStatus?: NodeAssociationStatus | string;

  /**
   * <p>Attributes specific to the node association.
   *       In Puppet, the attibute PUPPET_NODE_CERT contains the signed certificate (the result of the CSR).
   *     </p>
   */
  EngineAttributes?: EngineAttribute[];
}

export interface DescribeServersRequest {
  /**
   * <p>Describes the server with the specified ServerName.</p>
   */
  ServerName?: string;

  /**
   * <p>This is not currently implemented for <code>DescribeServers</code> requests.
   *     </p>
   */
  NextToken?: string;

  /**
   * <p>This is not currently implemented for <code>DescribeServers</code> requests.
   *     </p>
   */
  MaxResults?: number;
}

export interface DescribeServersResponse {
  /**
   * <p>Contains the response to a <code>DescribeServers</code> request.</p>
   *          <p>
   *             <i>For Chef Automate servers:</i>  If <code>DescribeServersResponse$Servers$EngineAttributes</code> includes
   *       CHEF_MAJOR_UPGRADE_AVAILABLE, you can upgrade the Chef Automate server to Chef Automate 2. To be eligible for upgrade, a server running
   *       Chef Automate 1 must have had at least one successful maintenance run after November 1, 2019.</p>
   *          <p>
   *             <i>For Puppet servers:</i>
   *             <code>DescribeServersResponse$Servers$EngineAttributes</code> contains
   *       the following two responses:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PUPPET_API_CA_CERT</code>, the PEM-encoded CA certificate that is used by the Puppet API over TCP port number 8140.
   *         The CA certificate is also used to sign node certificates.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PUPPET_API_CRL</code>, a certificate revocation list. The certificate revocation list is for internal
   *         maintenance purposes only. For more information about the Puppet certificate revocation list, see
   *         <a href="https://puppet.com/docs/puppet/5.5/man/certificate_revocation_list.html">Man Page: puppet certificate_revocation_list</a> in the Puppet documentation.</p>
   *             </li>
   *          </ul>
   */
  Servers?: Server[];

  /**
   * <p>This is not currently implemented for <code>DescribeServers</code> requests.
   *     </p>
   */
  NextToken?: string;
}

export interface DisassociateNodeRequest {
  /**
   * <p>The name of the server from which to disassociate the node.
   *     </p>
   */
  ServerName: string | undefined;

  /**
   * <p>The name of the client node.
   *     </p>
   */
  NodeName: string | undefined;

  /**
   * <p>Engine attributes that are used for disassociating the node. No attributes are required for Puppet.
   *     </p>
   *          <p class="title">
   *             <b>Attributes required in a DisassociateNode request for Chef</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CHEF_ORGANIZATION</code>: The Chef organization
   *           with which the node was associated. By default only one organization
   *           named <code>default</code> can exist.
   *       </p>
   *             </li>
   *          </ul>
   */
  EngineAttributes?: EngineAttribute[];
}

export interface DisassociateNodeResponse {
  /**
   * <p>Contains a token which can be passed to the
   *       <code>DescribeNodeAssociationStatus</code> API call to get the status of
   *       the disassociation request.
   *     </p>
   */
  NodeAssociationStatusToken?: string;
}

export interface ExportServerEngineAttributeRequest {
  /**
   * <p>The name of the export attribute. Currently, the supported export attribute is <code>Userdata</code>.
   *       This exports a user data script that includes parameters and values provided in the <code>InputAttributes</code> list.</p>
   */
  ExportAttributeName: string | undefined;

  /**
   * <p>The name of the server from which you are exporting the attribute.</p>
   */
  ServerName: string | undefined;

  /**
   * <p>The list of engine attributes. The list type is <code>EngineAttribute</code>. An <code>EngineAttribute</code> list item
   *       is a pair that includes an attribute name and its value. For the <code>Userdata</code> ExportAttributeName, the following are
   *       supported engine attribute names.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>RunList</b> In Chef, a list of roles or recipes that are run in the specified order.
   *         In Puppet, this parameter is ignored.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>OrganizationName</b> In Chef, an organization name. AWS OpsWorks for Chef Automate
   *         always creates the organization <code>default</code>. In Puppet, this parameter is ignored.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>NodeEnvironment</b> In Chef, a node environment (for example, development, staging, or one-box).
   *         In Puppet, this parameter is ignored.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>NodeClientVersion</b> In Chef, the version of the Chef engine (three numbers separated
   *         by dots, such as 13.8.5). If this attribute is empty, OpsWorks for Chef Automate uses the most current version. In Puppet,
   *         this parameter is ignored.</p>
   *             </li>
   *          </ul>
   */
  InputAttributes?: EngineAttribute[];
}

export interface ExportServerEngineAttributeResponse {
  /**
   * <p>The requested engine attribute pair with attribute name and value.</p>
   */
  EngineAttribute?: EngineAttribute;

  /**
   * <p>The server name used in the request.</p>
   */
  ServerName?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of an AWS OpsWorks for Chef Automate or AWS OpsWorks for Puppet Enterprise server for which you want to show applied tags. For example,
   *         <code>arn:aws:opsworks-cm:us-west-2:123456789012:server/test-owcm-server/EXAMPLE-66b0-4196-8274-d1a2bEXAMPLE</code>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>NextToken is a string that is returned in some command responses. It indicates that
   *         not all entries have been returned, and that you must run at least one more request to get remaining
   *         items. To get remaining results, call <code>ListTagsForResource</code> again, and assign the token from the previous
   *         results as the value of the <code>nextToken</code> parameter. If there are no more results,
   *         the response object's <code>nextToken</code> parameter value is <code>null</code>.
   *         Setting a <code>nextToken</code> value that was not returned in
   *         your previous results causes an <code>InvalidNextTokenException</code> to occur.</p>
   */
  NextToken?: string;

  /**
   * <p>To receive a paginated response, use this parameter to specify the maximum number
   *         of results to be returned with a single call. If the number of available results exceeds
   *         this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code>
   *         request parameter to get the next set of results.</p>
   */
  MaxResults?: number;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>Tags that have been applied to the resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A token that you can use as the value of <code>NextToken</code> in subsequent calls to the API to show more results.</p>
   */
  NextToken?: string;
}

export interface RestoreServerRequest {
  /**
   * <p> The ID of the backup that you want to use to restore a server.
   *     </p>
   */
  BackupId: string | undefined;

  /**
   * <p> The name of the server that you want to restore.
   *     </p>
   */
  ServerName: string | undefined;

  /**
   * <p> The type of instance to restore. Valid values must be specified in the following format: <code>^([cm][34]|t2).*</code>
   *       For example, <code>m5.large</code>. Valid values are <code>m5.large</code>, <code>r5.xlarge</code>, and <code>r5.2xlarge</code>. If you do not specify this parameter,
   *       RestoreServer uses the instance type from the specified backup.
   *     </p>
   */
  InstanceType?: string;

  /**
   * <p> The name of the key pair to set on the new EC2 instance. This can be helpful
   *       if the administrator no longer has the SSH key.
   *     </p>
   */
  KeyPair?: string;
}

export interface RestoreServerResponse {
  /**
   * <p>Describes a configuration management server.
   *     </p>
   */
  Server?: Server;
}

export interface StartMaintenanceRequest {
  /**
   * <p>The name of the server on which to run maintenance.
   *     </p>
   */
  ServerName: string | undefined;

  /**
   * <p>Engine attributes that are specific to the server on which you want to run maintenance.</p>
   *          <p class="title">
   *             <b>Attributes accepted in a StartMaintenance request for Chef</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CHEF_MAJOR_UPGRADE</code>: If a Chef Automate server is eligible for upgrade to Chef Automate 2,
   *         add this engine attribute to a <code>StartMaintenance</code> request and set the value to <code>true</code> to upgrade the server to Chef Automate 2. For more information, see
   *         <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opscm-a2upgrade.html">Upgrade an AWS OpsWorks for Chef Automate Server to Chef Automate 2</a>.
   *       </p>
   *             </li>
   *          </ul>
   */
  EngineAttributes?: EngineAttribute[];
}

export interface StartMaintenanceResponse {
  /**
   * <p>Contains the response to a <code>StartMaintenance</code> request.
   *     </p>
   */
  Server?: Server;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of a resource to which you want to apply tags. For example,
   *       <code>arn:aws:opsworks-cm:us-west-2:123456789012:server/test-owcm-server/EXAMPLE-66b0-4196-8274-d1a2bEXAMPLE</code>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>A map that contains tag keys and tag values to attach to AWS OpsWorks-CM servers or backups.</p>
   *          <ul>
   *             <li>
   *                <p>The key cannot be empty.</p>
   *             </li>
   *             <li>
   *                <p>The key can be a maximum of 127 characters, and can contain only Unicode letters, numbers, or separators, or the following special characters: <code>+ - = . _ : /</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>The value can be a maximum 255 characters, and contain only Unicode letters, numbers, or separators, or the following special characters: <code>+ - = . _ : /</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Leading and trailing white spaces are trimmed from both the key and value.</p>
   *             </li>
   *             <li>
   *                <p>A maximum of 50 user-applied tags is allowed for any AWS OpsWorks-CM server or backup.</p>
   *             </li>
   *          </ul>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of a resource from which you want to remove tags. For example,
   *       <code>arn:aws:opsworks-cm:us-west-2:123456789012:server/test-owcm-server/EXAMPLE-66b0-4196-8274-d1a2bEXAMPLE</code>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys of tags that you want to remove.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateServerRequest {
  /**
   * <p>Setting DisableAutomatedBackup to <code>true</code> disables automated or scheduled backups. Automated backups are enabled by default.
   *     </p>
   */
  DisableAutomatedBackup?: boolean;

  /**
   * <p>Sets the number of automated backups that you want to keep.
   *       </p>
   */
  BackupRetentionCount?: number;

  /**
   * <p>The name of the server to update.
   *     </p>
   */
  ServerName: string | undefined;

  /**
   * <p>
   *             <code>DDD:HH:MM</code> (weekly start time) or
   *     <code>HH:MM</code> (daily start time).
   *     </p>
   *          <p>
   *       Time windows always use coordinated universal time (UTC). Valid strings for day of week (<code>DDD</code>) are: <code>Mon</code>, <code>Tue</code>, <code>Wed</code>,
   *       <code>Thr</code>, <code>Fri</code>, <code>Sat</code>, or <code>Sun</code>.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>
   *             <code>DDD:HH:MM</code> (weekly start time) or
   *     <code>HH:MM</code> (daily start time).
   *     </p>
   *          <p>
   *       Time windows always use coordinated universal time (UTC). Valid strings for day of week (<code>DDD</code>) are: <code>Mon</code>, <code>Tue</code>, <code>Wed</code>,
   *       <code>Thr</code>, <code>Fri</code>, <code>Sat</code>, or <code>Sun</code>.</p>
   */
  PreferredBackupWindow?: string;
}

export interface UpdateServerResponse {
  /**
   * <p>Contains the response to a <code>UpdateServer</code> request.
   *     </p>
   */
  Server?: Server;
}

export interface UpdateServerEngineAttributesRequest {
  /**
   * <p>The name of the server to update.
   *     </p>
   */
  ServerName: string | undefined;

  /**
   * <p>The name of the engine attribute to update.
   *     </p>
   */
  AttributeName: string | undefined;

  /**
   * <p>The value to set for the attribute.
   *     </p>
   */
  AttributeValue?: string;
}

export interface UpdateServerEngineAttributesResponse {
  /**
   * <p>Contains the response to an <code>UpdateServerEngineAttributes</code> request.
   *     </p>
   */
  Server?: Server;
}

/**
 * @internal
 */
export const AccountAttributeFilterSensitiveLog = (obj: AccountAttribute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EngineAttributeFilterSensitiveLog = (obj: EngineAttribute): any => ({
  ...obj,
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AssociateNodeRequestFilterSensitiveLog = (obj: AssociateNodeRequest): any => ({
  ...obj,
  ...(obj.EngineAttributes && {
    EngineAttributes: obj.EngineAttributes.map((item) => EngineAttributeFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const AssociateNodeResponseFilterSensitiveLog = (obj: AssociateNodeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BackupFilterSensitiveLog = (obj: Backup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBackupRequestFilterSensitiveLog = (obj: CreateBackupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBackupResponseFilterSensitiveLog = (obj: CreateBackupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateServerRequestFilterSensitiveLog = (obj: CreateServerRequest): any => ({
  ...obj,
  ...(obj.CustomPrivateKey && { CustomPrivateKey: SENSITIVE_STRING }),
  ...(obj.EngineAttributes && {
    EngineAttributes: obj.EngineAttributes.map((item) => EngineAttributeFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ServerFilterSensitiveLog = (obj: Server): any => ({
  ...obj,
  ...(obj.EngineAttributes && {
    EngineAttributes: obj.EngineAttributes.map((item) => EngineAttributeFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateServerResponseFilterSensitiveLog = (obj: CreateServerResponse): any => ({
  ...obj,
  ...(obj.Server && { Server: ServerFilterSensitiveLog(obj.Server) }),
});

/**
 * @internal
 */
export const DeleteBackupRequestFilterSensitiveLog = (obj: DeleteBackupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBackupResponseFilterSensitiveLog = (obj: DeleteBackupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteServerRequestFilterSensitiveLog = (obj: DeleteServerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteServerResponseFilterSensitiveLog = (obj: DeleteServerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccountAttributesRequestFilterSensitiveLog = (obj: DescribeAccountAttributesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccountAttributesResponseFilterSensitiveLog = (obj: DescribeAccountAttributesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBackupsRequestFilterSensitiveLog = (obj: DescribeBackupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBackupsResponseFilterSensitiveLog = (obj: DescribeBackupsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEventsRequestFilterSensitiveLog = (obj: DescribeEventsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServerEventFilterSensitiveLog = (obj: ServerEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEventsResponseFilterSensitiveLog = (obj: DescribeEventsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNodeAssociationStatusRequestFilterSensitiveLog = (
  obj: DescribeNodeAssociationStatusRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNodeAssociationStatusResponseFilterSensitiveLog = (
  obj: DescribeNodeAssociationStatusResponse
): any => ({
  ...obj,
  ...(obj.EngineAttributes && {
    EngineAttributes: obj.EngineAttributes.map((item) => EngineAttributeFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const DescribeServersRequestFilterSensitiveLog = (obj: DescribeServersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeServersResponseFilterSensitiveLog = (obj: DescribeServersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateNodeRequestFilterSensitiveLog = (obj: DisassociateNodeRequest): any => ({
  ...obj,
  ...(obj.EngineAttributes && {
    EngineAttributes: obj.EngineAttributes.map((item) => EngineAttributeFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const DisassociateNodeResponseFilterSensitiveLog = (obj: DisassociateNodeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportServerEngineAttributeRequestFilterSensitiveLog = (obj: ExportServerEngineAttributeRequest): any => ({
  ...obj,
  ...(obj.InputAttributes && {
    InputAttributes: obj.InputAttributes.map((item) => EngineAttributeFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ExportServerEngineAttributeResponseFilterSensitiveLog = (
  obj: ExportServerEngineAttributeResponse
): any => ({
  ...obj,
  ...(obj.EngineAttribute && { EngineAttribute: EngineAttributeFilterSensitiveLog(obj.EngineAttribute) }),
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreServerRequestFilterSensitiveLog = (obj: RestoreServerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreServerResponseFilterSensitiveLog = (obj: RestoreServerResponse): any => ({
  ...obj,
  ...(obj.Server && { Server: ServerFilterSensitiveLog(obj.Server) }),
});

/**
 * @internal
 */
export const StartMaintenanceRequestFilterSensitiveLog = (obj: StartMaintenanceRequest): any => ({
  ...obj,
  ...(obj.EngineAttributes && {
    EngineAttributes: obj.EngineAttributes.map((item) => EngineAttributeFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const StartMaintenanceResponseFilterSensitiveLog = (obj: StartMaintenanceResponse): any => ({
  ...obj,
  ...(obj.Server && { Server: ServerFilterSensitiveLog(obj.Server) }),
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateServerRequestFilterSensitiveLog = (obj: UpdateServerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateServerResponseFilterSensitiveLog = (obj: UpdateServerResponse): any => ({
  ...obj,
  ...(obj.Server && { Server: ServerFilterSensitiveLog(obj.Server) }),
});

/**
 * @internal
 */
export const UpdateServerEngineAttributesRequestFilterSensitiveLog = (
  obj: UpdateServerEngineAttributesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateServerEngineAttributesResponseFilterSensitiveLog = (
  obj: UpdateServerEngineAttributesResponse
): any => ({
  ...obj,
  ...(obj.Server && { Server: ServerFilterSensitiveLog(obj.Server) }),
});
