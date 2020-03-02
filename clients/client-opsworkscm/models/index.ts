import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Stores account attributes.
 *     </p>
 */
export interface AccountAttribute {
  __type?: "AccountAttribute";
  /**
   * <p>
   *       The maximum allowed value.
   *     </p>
   */
  Maximum?: number;

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
   *       The current usage, such as the current number of servers that are associated with the account.
   *     </p>
   */
  Used?: number;
}

export namespace AccountAttribute {
  export function isa(o: any): o is AccountAttribute {
    return __isa(o, "AccountAttribute");
  }
}

export interface AssociateNodeRequest {
  __type?: "AssociateNodeRequest";
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
  EngineAttributes: Array<EngineAttribute> | undefined;

  /**
   * <p>The name of the node.
   *     </p>
   */
  NodeName: string | undefined;

  /**
   * <p>The name of the server with which to associate the node.
   *     </p>
   */
  ServerName: string | undefined;
}

export namespace AssociateNodeRequest {
  export function isa(o: any): o is AssociateNodeRequest {
    return __isa(o, "AssociateNodeRequest");
  }
}

export interface AssociateNodeResponse {
  __type?: "AssociateNodeResponse";
  /**
   * <p>Contains a token which can be passed to the <code>DescribeNodeAssociationStatus</code> API call to get the status of the association request.
   *     </p>
   */
  NodeAssociationStatusToken?: string;
}

export namespace AssociateNodeResponse {
  export function isa(o: any): o is AssociateNodeResponse {
    return __isa(o, "AssociateNodeResponse");
  }
}

/**
 * <p>Describes a single backup.
 *     </p>
 */
export interface Backup {
  __type?: "Backup";
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
   * <p>
   *       This field is deprecated and is no longer used.
   *     </p>
   */
  S3DataSize?: number;

  /**
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
  SecurityGroupIds?: Array<string>;

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
  SubnetIds?: Array<string>;

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

export namespace Backup {
  export function isa(o: any): o is Backup {
    return __isa(o, "Backup");
  }
}

export enum BackupStatus {
  DELETING = "DELETING",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  OK = "OK"
}

export enum BackupType {
  AUTOMATED = "AUTOMATED",
  MANUAL = "MANUAL"
}

export interface CreateBackupRequest {
  __type?: "CreateBackupRequest";
  /**
   * <p>
   *       A user-defined description of the backup.
   *     </p>
   */
  Description?: string;

  /**
   * <p>The name of the server that you want to back up.
   *     </p>
   */
  ServerName: string | undefined;

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
  Tags?: Array<Tag>;
}

export namespace CreateBackupRequest {
  export function isa(o: any): o is CreateBackupRequest {
    return __isa(o, "CreateBackupRequest");
  }
}

export interface CreateBackupResponse {
  __type?: "CreateBackupResponse";
  /**
   * <p>Backup created by request.</p>
   */
  Backup?: Backup;
}

export namespace CreateBackupResponse {
  export function isa(o: any): o is CreateBackupResponse {
    return __isa(o, "CreateBackupResponse");
  }
}

export interface CreateServerRequest {
  __type?: "CreateServerRequest";
  /**
   * <p>
   *         Associate a public IP address with a server that you are launching. Valid values are <code>true</code> or <code>false</code>. The default value is <code>true</code>.
   *       </p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * <p>
   *       If you specify this field, AWS OpsWorks CM creates the server by using the backup represented by BackupId.
   *     </p>
   */
  BackupId?: string;

  /**
   * <p>
   *         The number of automated backups that you want to keep. Whenever a new backup is created, AWS OpsWorks CM deletes the oldest backups if this number is exceeded.
   *         The default value is <code>1</code>.
   *       </p>
   */
  BackupRetentionCount?: number;

  /**
   * <p>Supported on servers running Chef Automate 2. A PEM-formatted HTTPS certificate. The value can be be a single, self-signed certificate, or a certificate chain. If you specify a
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
   * <p>Supported on servers running Chef Automate 2. An optional public endpoint of a server, such as <code>https://aws.my-company.com</code>. To access the server, create a CNAME DNS record in your preferred DNS service that points the custom
   *       domain to the endpoint that is generated when the server is created (the value of the CreateServer Endpoint attribute). You cannot access the server by using the
   *       generated <code>Endpoint</code> value if the server is using a custom domain. If you specify a custom domain, you must also specify values for <code>CustomCertificate</code>
   *       and <code>CustomPrivateKey</code>.</p>
   */
  CustomDomain?: string;

  /**
   * <p>Supported on servers running Chef Automate 2. A private key in PEM format for connecting to the server by using HTTPS. The private key must not be encrypted; it cannot be protected by a password or passphrase.
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
  Engine?: string;

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
  EngineAttributes?: Array<EngineAttribute>;

  /**
   * <p>
   *         The engine model of the server. Valid values in this release include <code>Monolithic</code> for Puppet and <code>Single</code> for Chef.
   *       </p>
   */
  EngineModel?: string;

  /**
   * <p>
   *         The major release version of the engine that you want to use. For a Chef server, the valid value for EngineVersion is currently <code>12</code>. For a Puppet server, the valid value is <code>2017</code>.
   *       </p>
   */
  EngineVersion?: string;

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
   *          <p>The specified time is in coordinated universal time (UTC). The default value is a random, daily start time.</p>
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
   *       The start time for a one-hour period each week during which AWS OpsWorks CM performs maintenance on the instance.
   *       Valid values must be specified in the following format: <code>DDD:HH:MM</code>. The specified time is in coordinated universal time (UTC).
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
   *       A list of security group IDs to attach to the Amazon EC2 instance. If you add this parameter, the specified security groups
   *       must be within the VPC that is specified by <code>SubnetIds</code>.
   *     </p>
   *          <p>
   *       If you do not specify this parameter, AWS OpsWorks CM creates one new security group that uses TCP ports 22 and 443, open to
   *       0.0.0.0/0 (everyone).
   *     </p>
   */
  SecurityGroupIds?: Array<string>;

  /**
   * <p>
   *         The name of the server. The server name must be unique within your AWS account, within each region.
   *         Server names must start with a letter; then letters, numbers, or hyphens (-) are allowed, up to a maximum of 40 characters.
   *       </p>
   */
  ServerName: string | undefined;

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
  SubnetIds?: Array<string>;

  /**
   * <p>A map that contains tag keys and tag values to attach to an AWS OpsWorks for Chef Automate or AWS OpsWorks for Puppet Enterprise server.</p>
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
   *                <p>A maximum of 50 user-applied tags is allowed for any AWS OpsWorks-CM server.</p>
   *             </li>
   *          </ul>
   */
  Tags?: Array<Tag>;
}

export namespace CreateServerRequest {
  export function isa(o: any): o is CreateServerRequest {
    return __isa(o, "CreateServerRequest");
  }
}

export interface CreateServerResponse {
  __type?: "CreateServerResponse";
  /**
   * <p>The server that is created by the request.
   *     </p>
   */
  Server?: Server;
}

export namespace CreateServerResponse {
  export function isa(o: any): o is CreateServerResponse {
    return __isa(o, "CreateServerResponse");
  }
}

export interface DeleteBackupRequest {
  __type?: "DeleteBackupRequest";
  /**
   * <p>The ID of the backup to delete. Run the DescribeBackups command to get a list of backup IDs.
   *       Backup IDs are in the format <code>ServerName-yyyyMMddHHmmssSSS</code>.
   *     </p>
   */
  BackupId: string | undefined;
}

export namespace DeleteBackupRequest {
  export function isa(o: any): o is DeleteBackupRequest {
    return __isa(o, "DeleteBackupRequest");
  }
}

export interface DeleteBackupResponse {
  __type?: "DeleteBackupResponse";
}

export namespace DeleteBackupResponse {
  export function isa(o: any): o is DeleteBackupResponse {
    return __isa(o, "DeleteBackupResponse");
  }
}

export interface DeleteServerRequest {
  __type?: "DeleteServerRequest";
  /**
   * <p>The ID of the server to delete.</p>
   */
  ServerName: string | undefined;
}

export namespace DeleteServerRequest {
  export function isa(o: any): o is DeleteServerRequest {
    return __isa(o, "DeleteServerRequest");
  }
}

export interface DeleteServerResponse {
  __type?: "DeleteServerResponse";
}

export namespace DeleteServerResponse {
  export function isa(o: any): o is DeleteServerResponse {
    return __isa(o, "DeleteServerResponse");
  }
}

export interface DescribeAccountAttributesRequest {
  __type?: "DescribeAccountAttributesRequest";
}

export namespace DescribeAccountAttributesRequest {
  export function isa(o: any): o is DescribeAccountAttributesRequest {
    return __isa(o, "DescribeAccountAttributesRequest");
  }
}

export interface DescribeAccountAttributesResponse {
  __type?: "DescribeAccountAttributesResponse";
  /**
   * <p>
   *       The attributes that are currently set for the account.
   *     </p>
   */
  Attributes?: Array<AccountAttribute>;
}

export namespace DescribeAccountAttributesResponse {
  export function isa(o: any): o is DescribeAccountAttributesResponse {
    return __isa(o, "DescribeAccountAttributesResponse");
  }
}

export interface DescribeBackupsRequest {
  __type?: "DescribeBackupsRequest";
  /**
   * <p>Describes a single backup.
   *     </p>
   */
  BackupId?: string;

  /**
   * <p>This is not currently implemented for <code>DescribeBackups</code> requests.</p>
   */
  MaxResults?: number;

  /**
   * <p>This is not currently implemented for <code>DescribeBackups</code> requests.</p>
   */
  NextToken?: string;

  /**
   * <p>Returns backups for the server with the specified ServerName.
   *     </p>
   */
  ServerName?: string;
}

export namespace DescribeBackupsRequest {
  export function isa(o: any): o is DescribeBackupsRequest {
    return __isa(o, "DescribeBackupsRequest");
  }
}

export interface DescribeBackupsResponse {
  __type?: "DescribeBackupsResponse";
  /**
   * <p>Contains the response to a <code>DescribeBackups</code> request.
   *     </p>
   */
  Backups?: Array<Backup>;

  /**
   * <p>This is not currently implemented for <code>DescribeBackups</code> requests.</p>
   */
  NextToken?: string;
}

export namespace DescribeBackupsResponse {
  export function isa(o: any): o is DescribeBackupsResponse {
    return __isa(o, "DescribeBackupsResponse");
  }
}

export interface DescribeEventsRequest {
  __type?: "DescribeEventsRequest";
  /**
   * <p>To receive a paginated response, use this parameter to specify the maximum number
   *       of results to be returned with a single call. If the number of available results exceeds
   *       this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code>
   *       request parameter to get the next set of results.
   *     </p>
   */
  MaxResults?: number;

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
   * <p>The name of the server for which you want to view events.</p>
   */
  ServerName: string | undefined;
}

export namespace DescribeEventsRequest {
  export function isa(o: any): o is DescribeEventsRequest {
    return __isa(o, "DescribeEventsRequest");
  }
}

export interface DescribeEventsResponse {
  __type?: "DescribeEventsResponse";
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
   * <p>Contains the response to a <code>DescribeEvents</code> request.
   *     </p>
   */
  ServerEvents?: Array<ServerEvent>;
}

export namespace DescribeEventsResponse {
  export function isa(o: any): o is DescribeEventsResponse {
    return __isa(o, "DescribeEventsResponse");
  }
}

export interface DescribeNodeAssociationStatusRequest {
  __type?: "DescribeNodeAssociationStatusRequest";
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

export namespace DescribeNodeAssociationStatusRequest {
  export function isa(o: any): o is DescribeNodeAssociationStatusRequest {
    return __isa(o, "DescribeNodeAssociationStatusRequest");
  }
}

export interface DescribeNodeAssociationStatusResponse {
  __type?: "DescribeNodeAssociationStatusResponse";
  /**
   * <p>Attributes specific to the node association.
   *       In Puppet, the attibute PUPPET_NODE_CERT contains the signed certificate (the result of the CSR).
   *     </p>
   */
  EngineAttributes?: Array<EngineAttribute>;

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
}

export namespace DescribeNodeAssociationStatusResponse {
  export function isa(o: any): o is DescribeNodeAssociationStatusResponse {
    return __isa(o, "DescribeNodeAssociationStatusResponse");
  }
}

export interface DescribeServersRequest {
  __type?: "DescribeServersRequest";
  /**
   * <p>This is not currently implemented for <code>DescribeServers</code> requests.
   *     </p>
   */
  MaxResults?: number;

  /**
   * <p>This is not currently implemented for <code>DescribeServers</code> requests.
   *     </p>
   */
  NextToken?: string;

  /**
   * <p>Describes the server with the specified ServerName.</p>
   */
  ServerName?: string;
}

export namespace DescribeServersRequest {
  export function isa(o: any): o is DescribeServersRequest {
    return __isa(o, "DescribeServersRequest");
  }
}

export interface DescribeServersResponse {
  __type?: "DescribeServersResponse";
  /**
   * <p>This is not currently implemented for <code>DescribeServers</code> requests.
   *     </p>
   */
  NextToken?: string;

  /**
   * <p>Contains the response to a <code>DescribeServers</code> request.</p>
   *
   *          <p>
   *             <i>For Puppet Server:</i>
   *             <code>DescribeServersResponse$Servers$EngineAttributes</code> contains
   *       PUPPET_API_CA_CERT. This is the PEM-encoded CA certificate that is used by the Puppet API over TCP port number 8140.
   *       The CA certificate is also used to sign node certificates.</p>
   */
  Servers?: Array<Server>;
}

export namespace DescribeServersResponse {
  export function isa(o: any): o is DescribeServersResponse {
    return __isa(o, "DescribeServersResponse");
  }
}

export interface DisassociateNodeRequest {
  __type?: "DisassociateNodeRequest";
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
  EngineAttributes?: Array<EngineAttribute>;

  /**
   * <p>The name of the client node.
   *     </p>
   */
  NodeName: string | undefined;

  /**
   * <p>The name of the server from which to disassociate the node.
   *     </p>
   */
  ServerName: string | undefined;
}

export namespace DisassociateNodeRequest {
  export function isa(o: any): o is DisassociateNodeRequest {
    return __isa(o, "DisassociateNodeRequest");
  }
}

export interface DisassociateNodeResponse {
  __type?: "DisassociateNodeResponse";
  /**
   * <p>Contains a token which can be passed to the
   *       <code>DescribeNodeAssociationStatus</code> API call to get the status of
   *       the disassociation request.
   *     </p>
   */
  NodeAssociationStatusToken?: string;
}

export namespace DisassociateNodeResponse {
  export function isa(o: any): o is DisassociateNodeResponse {
    return __isa(o, "DisassociateNodeResponse");
  }
}

/**
 * <p>A name and value pair that is specific to the engine of the server.
 *     </p>
 */
export interface EngineAttribute {
  __type?: "EngineAttribute";
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

export namespace EngineAttribute {
  export function isa(o: any): o is EngineAttribute {
    return __isa(o, "EngineAttribute");
  }
}

export interface ExportServerEngineAttributeRequest {
  __type?: "ExportServerEngineAttributeRequest";
  /**
   * <p>The name of the export attribute. Currently, the supported export attribute is <code>Userdata</code>.
   *       This exports a user data script that includes parameters and values provided in the <code>InputAttributes</code> list.</p>
   */
  ExportAttributeName: string | undefined;

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
  InputAttributes?: Array<EngineAttribute>;

  /**
   * <p>The name of the server from which you are exporting the attribute.</p>
   */
  ServerName: string | undefined;
}

export namespace ExportServerEngineAttributeRequest {
  export function isa(o: any): o is ExportServerEngineAttributeRequest {
    return __isa(o, "ExportServerEngineAttributeRequest");
  }
}

export interface ExportServerEngineAttributeResponse {
  __type?: "ExportServerEngineAttributeResponse";
  /**
   * <p>The requested engine attribute pair with attribute name and value.</p>
   */
  EngineAttribute?: EngineAttribute;

  /**
   * <p>The server name used in the request.</p>
   */
  ServerName?: string;
}

export namespace ExportServerEngineAttributeResponse {
  export function isa(o: any): o is ExportServerEngineAttributeResponse {
    return __isa(o, "ExportServerEngineAttributeResponse");
  }
}

/**
 * <p>This occurs when the provided nextToken is not valid.
 *     </p>
 */
export interface InvalidNextTokenException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  /**
   * <p>Error or informational message that can contain more detail about a nextToken failure.
   *     </p>
   */
  Message?: string;
}

export namespace InvalidNextTokenException {
  export function isa(o: any): o is InvalidNextTokenException {
    return __isa(o, "InvalidNextTokenException");
  }
}

/**
 * <p>The resource is in a state that does not allow you to perform a specified action.
 *     </p>
 */
export interface InvalidStateException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidStateException";
  $fault: "client";
  /**
   * <p>Error or informational message that provides more detail if a resource is
   *       in a state that is not valid for performing a specified action.
   *     </p>
   */
  Message?: string;
}

export namespace InvalidStateException {
  export function isa(o: any): o is InvalidStateException {
    return __isa(o, "InvalidStateException");
  }
}

/**
 * <p>The limit of servers or backups has been reached.
 *     </p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * <p>Error or informational message that the maximum allowed number of servers or backups has been exceeded.
   *     </p>
   */
  Message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return __isa(o, "LimitExceededException");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>To receive a paginated response, use this parameter to specify the maximum number
   *         of results to be returned with a single call. If the number of available results exceeds
   *         this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code>
   *         request parameter to get the next set of results.</p>
   */
  MaxResults?: number;

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
   * <p>The Amazon Resource Number (ARN) of an AWS OpsWorks for Chef Automate or AWS OpsWorks for Puppet Enterprise server for which you want to show applied tags. For example,
   *         <code>arn:aws:opsworks-cm:us-west-2:123456789012:server/test-owcm-server/EXAMPLE-66b0-4196-8274-d1a2bEXAMPLE</code>.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return __isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>A token that you can use as the value of <code>NextToken</code> in subsequent calls to the API to show more results.</p>
   */
  NextToken?: string;

  /**
   * <p>Tags that have been applied to the resource.</p>
   */
  Tags?: Array<Tag>;
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return __isa(o, "ListTagsForResourceResponse");
  }
}

export enum MaintenanceStatus {
  FAILED = "FAILED",
  SUCCESS = "SUCCESS"
}

export enum NodeAssociationStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCESS = "SUCCESS"
}

/**
 * <p>The requested resource cannot be created because it already exists.
 *     </p>
 */
export interface ResourceAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  /**
   * <p>Error or informational message in response to a CreateServer request that a resource cannot be created because it already exists.
   *     </p>
   */
  Message?: string;
}

export namespace ResourceAlreadyExistsException {
  export function isa(o: any): o is ResourceAlreadyExistsException {
    return __isa(o, "ResourceAlreadyExistsException");
  }
}

/**
 * <p>The requested resource does not exist, or access was denied.
 *     </p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>Error or informational message that can contain more detail about problems locating or accessing a resource.
   *     </p>
   */
  Message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

export interface RestoreServerRequest {
  __type?: "RestoreServerRequest";
  /**
   * <p> The ID of the backup that you want to use to restore a server.
   *     </p>
   */
  BackupId: string | undefined;

  /**
   * <p> The type of the instance to create. Valid values must be specified in the following format: <code>^([cm][34]|t2).*</code>
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

  /**
   * <p> The name of the server that you want to restore.
   *     </p>
   */
  ServerName: string | undefined;
}

export namespace RestoreServerRequest {
  export function isa(o: any): o is RestoreServerRequest {
    return __isa(o, "RestoreServerRequest");
  }
}

export interface RestoreServerResponse {
  __type?: "RestoreServerResponse";
}

export namespace RestoreServerResponse {
  export function isa(o: any): o is RestoreServerResponse {
    return __isa(o, "RestoreServerResponse");
  }
}

/**
 * <p>Describes a configuration management server.
 *     </p>
 */
export interface Server {
  __type?: "Server";
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
   * <p>The ARN of the CloudFormation stack that was used to create the server.
   *     </p>
   */
  CloudFormationStackArn?: string;

  /**
   * <p>Time stamp of server creation. Example <code>2016-07-29T13:38:47.520Z</code>
   *          </p>
   */
  CreatedAt?: Date;

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
  EngineAttributes?: Array<EngineAttribute>;

  /**
   * <p>The engine model of the server. Valid values in this release include <code>Monolithic</code> for Puppet and <code>Single</code> for Chef.
   *     </p>
   */
  EngineModel?: string;

  /**
   * <p>The engine version of the server. For a Chef server, the valid value for EngineVersion is currently <code>12</code>. For a Puppet server, the valid value is <code>2017</code>.
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
   * <p>The preferred backup period specified for the server.
   *     </p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The preferred maintenance period specified for the server.
   *     </p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>
   *       The security group IDs for the server, as specified in the CloudFormation stack.
   *       These might not be the same security groups that are shown in the EC2 console.
   *     </p>
   */
  SecurityGroupIds?: Array<string>;

  /**
   * <p>The ARN of the server.
   *     </p>
   */
  ServerArn?: string;

  /**
   * <p>The name of the server.
   *     </p>
   */
  ServerName?: string;

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
  SubnetIds?: Array<string>;
}

export namespace Server {
  export function isa(o: any): o is Server {
    return __isa(o, "Server");
  }
}

/**
 * <p>An event that is related to the server, such as the start of maintenance or backup.
 *     </p>
 */
export interface ServerEvent {
  __type?: "ServerEvent";
  /**
   * <p>The time when the event occurred.
   *     </p>
   */
  CreatedAt?: Date;

  /**
   * <p>The Amazon S3 URL of the event's log file.</p>
   */
  LogUrl?: string;

  /**
   * <p>A human-readable informational or status message.</p>
   */
  Message?: string;

  /**
   * <p>The name of the server on or for which the event occurred.
   *     </p>
   */
  ServerName?: string;
}

export namespace ServerEvent {
  export function isa(o: any): o is ServerEvent {
    return __isa(o, "ServerEvent");
  }
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
  UNHEALTHY = "UNHEALTHY"
}

export interface StartMaintenanceRequest {
  __type?: "StartMaintenanceRequest";
  /**
   * <p>Engine attributes that are specific to the server on which you want to run maintenance.</p>
   */
  EngineAttributes?: Array<EngineAttribute>;

  /**
   * <p>The name of the server on which to run maintenance.
   *     </p>
   */
  ServerName: string | undefined;
}

export namespace StartMaintenanceRequest {
  export function isa(o: any): o is StartMaintenanceRequest {
    return __isa(o, "StartMaintenanceRequest");
  }
}

export interface StartMaintenanceResponse {
  __type?: "StartMaintenanceResponse";
  /**
   * <p>Contains the response to a <code>StartMaintenance</code> request.
   *     </p>
   */
  Server?: Server;
}

export namespace StartMaintenanceResponse {
  export function isa(o: any): o is StartMaintenanceResponse {
    return __isa(o, "StartMaintenanceResponse");
  }
}

/**
 * <p>A map that contains tag keys and tag values to attach to an AWS OpsWorks for Chef Automate
 *       or AWS OpsWorks for Puppet Enterprise server. Leading and trailing white spaces are trimmed from both the key and value.
 *       A maximum of 50 user-applied tags is allowed for tag-supported AWS OpsWorks-CM resources.</p>
 */
export interface Tag {
  __type?: "Tag";
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

export namespace Tag {
  export function isa(o: any): o is Tag {
    return __isa(o, "Tag");
  }
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
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
  Tags: Array<Tag> | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return __isa(o, "TagResourceRequest");
  }
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return __isa(o, "TagResourceResponse");
  }
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The Amazon Resource Number (ARN) of a resource from which you want to remove tags. For example,
   *       <code>arn:aws:opsworks-cm:us-west-2:123456789012:server/test-owcm-server/EXAMPLE-66b0-4196-8274-d1a2bEXAMPLE</code>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys of tags that you want to remove.</p>
   */
  TagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return __isa(o, "UntagResourceRequest");
  }
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export function isa(o: any): o is UntagResourceResponse {
    return __isa(o, "UntagResourceResponse");
  }
}

export interface UpdateServerEngineAttributesRequest {
  __type?: "UpdateServerEngineAttributesRequest";
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

  /**
   * <p>The name of the server to update.
   *     </p>
   */
  ServerName: string | undefined;
}

export namespace UpdateServerEngineAttributesRequest {
  export function isa(o: any): o is UpdateServerEngineAttributesRequest {
    return __isa(o, "UpdateServerEngineAttributesRequest");
  }
}

export interface UpdateServerEngineAttributesResponse {
  __type?: "UpdateServerEngineAttributesResponse";
  /**
   * <p>Contains the response to an <code>UpdateServerEngineAttributes</code> request.
   *     </p>
   */
  Server?: Server;
}

export namespace UpdateServerEngineAttributesResponse {
  export function isa(o: any): o is UpdateServerEngineAttributesResponse {
    return __isa(o, "UpdateServerEngineAttributesResponse");
  }
}

export interface UpdateServerRequest {
  __type?: "UpdateServerRequest";
  /**
   * <p>Sets the number of automated backups that you want to keep.
   *       </p>
   */
  BackupRetentionCount?: number;

  /**
   * <p>Setting DisableAutomatedBackup to <code>true</code> disables automated or scheduled backups. Automated backups are enabled by default.
   *     </p>
   */
  DisableAutomatedBackup?: boolean;

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
   * <p>The name of the server to update.
   *     </p>
   */
  ServerName: string | undefined;
}

export namespace UpdateServerRequest {
  export function isa(o: any): o is UpdateServerRequest {
    return __isa(o, "UpdateServerRequest");
  }
}

export interface UpdateServerResponse {
  __type?: "UpdateServerResponse";
  /**
   * <p>Contains the response to a <code>UpdateServer</code> request.
   *     </p>
   */
  Server?: Server;
}

export namespace UpdateServerResponse {
  export function isa(o: any): o is UpdateServerResponse {
    return __isa(o, "UpdateServerResponse");
  }
}

/**
 * <p>One or more of the provided request parameters are not valid.
 *     </p>
 */
export interface ValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  /**
   * <p>Error or informational message that can contain more detail about a validation failure.
   *     </p>
   */
  Message?: string;
}

export namespace ValidationException {
  export function isa(o: any): o is ValidationException {
    return __isa(o, "ValidationException");
  }
}
