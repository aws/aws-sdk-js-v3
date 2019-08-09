import { _Tag } from "./_Tag";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface CreateReplicationInstanceInput {
  /**
   * <p>The replication instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>myrepinstance</code> </p>
   */
  ReplicationInstanceIdentifier: string;

  /**
   * <p>The amount of storage (in gigabytes) to be initially allocated for the replication instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>The compute and memory capacity of the replication instance as specified by the replication instance class.</p> <p> Valid Values: <code>dms.t2.micro | dms.t2.small | dms.t2.medium | dms.t2.large | dms.c4.large | dms.c4.xlarge | dms.c4.2xlarge | dms.c4.4xlarge </code> </p>
   */
  ReplicationInstanceClass: string;

  /**
   * <p> Specifies the VPC security group to be used with the replication instance. The VPC security group must work with the VPC containing the replication instance. </p>
   */
  VpcSecurityGroupIds?: Array<string> | Iterable<string>;

  /**
   * <p>The AWS Availability Zone where the replication instance will be created. The default value is a random, system-chosen Availability Zone in the endpoint's AWS Region, for example: <code>us-east-1d</code> </p>
   */
  AvailabilityZone?: string;

  /**
   * <p>A subnet group to associate with the replication instance.</p>
   */
  ReplicationSubnetGroupIdentifier?: string;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>Default: A 30-minute window selected at random from an 8-hour block of time per AWS Region, occurring on a random day of the week.</p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p> <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p> Specifies whether the replication instance is a Multi-AZ deployment. You cannot set the <code>AvailabilityZone</code> parameter if the Multi-AZ parameter is set to <code>true</code>. </p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The engine version number of the replication instance.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Indicates whether minor engine upgrades will be applied automatically to the replication instance during the maintenance window. This parameter defaults to <code>true</code>.</p> <p>Default: <code>true</code> </p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>One or more tags to be assigned to the replication instance.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>An AWS KMS key identifier that is used to encrypt the data on the replication instance.</p> <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then AWS DMS uses your default encryption key.</p> <p>AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p> Specifies the accessibility options for the replication instance. A value of <code>true</code> represents an instance with a public IP address. A value of <code>false</code> represents an instance with a private IP address. The default value is <code>true</code>. </p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>A list of DNS name servers supported for the replication instance.</p>
   */
  DnsNameServers?: string;

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
