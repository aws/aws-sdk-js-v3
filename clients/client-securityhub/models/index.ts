import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AcceptInvitationRequest {
  __type?: "AcceptInvitationRequest";
  /**
   * <p>The ID of the invitation sent from the Security Hub master account.</p>
   */
  InvitationId: string | undefined;

  /**
   * <p>The account ID of the Security Hub master account that sent the invitation.</p>
   */
  MasterId: string | undefined;
}

export namespace AcceptInvitationRequest {
  export const filterSensitiveLog = (obj: AcceptInvitationRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is AcceptInvitationRequest =>
    __isa(o, "AcceptInvitationRequest");
}

export interface AcceptInvitationResponse {
  __type?: "AcceptInvitationResponse";
}

export namespace AcceptInvitationResponse {
  export const filterSensitiveLog = (obj: AcceptInvitationResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is AcceptInvitationResponse =>
    __isa(o, "AcceptInvitationResponse");
}

/**
 * <p>You don't have permission to perform the action specified in the request.</p>
 */
export interface AccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Code?: string;
  Message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccessDeniedException =>
    __isa(o, "AccessDeniedException");
}

/**
 * <p>The details of an AWS account.</p>
 */
export interface AccountDetails {
  __type?: "AccountDetails";
  /**
   * <p>The ID of an AWS account.</p>
   */
  AccountId?: string;

  /**
   * <p>The email of an AWS account.</p>
   */
  Email?: string;
}

export namespace AccountDetails {
  export const filterSensitiveLog = (obj: AccountDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccountDetails =>
    __isa(o, "AccountDetails");
}

/**
 * <p>An <code>ActionTarget</code> object.</p>
 */
export interface ActionTarget {
  __type?: "ActionTarget";
  /**
   * <p>The ARN for the target action.</p>
   */
  ActionTargetArn: string | undefined;

  /**
   * <p>The description of the target action.</p>
   */
  Description: string | undefined;

  /**
   * <p>The name of the action target.</p>
   */
  Name: string | undefined;
}

export namespace ActionTarget {
  export const filterSensitiveLog = (obj: ActionTarget): any => ({
    ...obj
  });
  export const isa = (o: any): o is ActionTarget => __isa(o, "ActionTarget");
}

/**
 * <p>Information about an Availability Zone.</p>
 */
export interface AvailabilityZone {
  __type?: "AvailabilityZone";
  /**
   * <p>The ID of the subnet. You can specify one subnet per Availability Zone.</p>
   */
  SubnetId?: string;

  /**
   * <p>The name of the Availability Zone.</p>
   */
  ZoneName?: string;
}

export namespace AvailabilityZone {
  export const filterSensitiveLog = (obj: AvailabilityZone): any => ({
    ...obj
  });
  export const isa = (o: any): o is AvailabilityZone =>
    __isa(o, "AvailabilityZone");
}

/**
 * <p>A distribution configuration.</p>
 */
export interface AwsCloudFrontDistributionDetails {
  __type?: "AwsCloudFrontDistributionDetails";
  /**
   * <p>The domain name corresponding to the distribution.</p>
   */
  DomainName?: string;

  /**
   * <p>The entity tag is a hash of the object.</p>
   */
  ETag?: string;

  /**
   * <p>The date and time that the distribution was last modified.</p>
   */
  LastModifiedTime?: string;

  /**
   * <p>A complex type that controls whether access logs are written for the distribution.</p>
   */
  Logging?: AwsCloudFrontDistributionLogging;

  /**
   * <p>A complex type that contains information about origins for this distribution.</p>
   */
  Origins?: AwsCloudFrontDistributionOrigins;

  /**
   * <p>Indicates the current status of the distribution.</p>
   */
  Status?: string;

  /**
   * <p>A unique identifier that specifies the AWS WAF web ACL, if any, to associate with this distribution.</p>
   */
  WebAclId?: string;
}

export namespace AwsCloudFrontDistributionDetails {
  export const filterSensitiveLog = (
    obj: AwsCloudFrontDistributionDetails
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AwsCloudFrontDistributionDetails =>
    __isa(o, "AwsCloudFrontDistributionDetails");
}

/**
 * <p>A complex type that controls whether access logs are written for the distribution.</p>
 */
export interface AwsCloudFrontDistributionLogging {
  __type?: "AwsCloudFrontDistributionLogging";
  /**
   * <p>The Amazon S3 bucket to store the access logs in.</p>
   */
  Bucket?: string;

  /**
   * <p>With this field, you can enable or disable the selected distribution.</p>
   */
  Enabled?: boolean;

  /**
   * <p>Specifies whether you want CloudFront to include cookies in access logs.</p>
   */
  IncludeCookies?: boolean;

  /**
   * <p>An optional string that you want CloudFront to prefix to the access log filenames for this distribution.</p>
   */
  Prefix?: string;
}

export namespace AwsCloudFrontDistributionLogging {
  export const filterSensitiveLog = (
    obj: AwsCloudFrontDistributionLogging
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AwsCloudFrontDistributionLogging =>
    __isa(o, "AwsCloudFrontDistributionLogging");
}

/**
 * <p>A complex type that describes the Amazon S3 bucket, HTTP server (for example, a web server), Amazon MediaStore, or other server from which CloudFront gets your files.</p>
 */
export interface AwsCloudFrontDistributionOriginItem {
  __type?: "AwsCloudFrontDistributionOriginItem";
  /**
   * <p>Amazon S3 origins: The DNS name of the Amazon S3 bucket from which you want CloudFront to get objects for this origin.</p>
   */
  DomainName?: string;

  /**
   * <p>A unique identifier for the origin or origin group.</p>
   */
  Id?: string;

  /**
   * <p>An optional element that causes CloudFront to request your content from a directory in your Amazon S3 bucket or your custom origin.</p>
   */
  OriginPath?: string;
}

export namespace AwsCloudFrontDistributionOriginItem {
  export const filterSensitiveLog = (
    obj: AwsCloudFrontDistributionOriginItem
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AwsCloudFrontDistributionOriginItem =>
    __isa(o, "AwsCloudFrontDistributionOriginItem");
}

/**
 * <p>A complex type that contains information about origins and origin groups for this distribution.</p>
 */
export interface AwsCloudFrontDistributionOrigins {
  __type?: "AwsCloudFrontDistributionOrigins";
  /**
   * <p>A complex type that contains origins or origin groups for this distribution.</p>
   */
  Items?: AwsCloudFrontDistributionOriginItem[];
}

export namespace AwsCloudFrontDistributionOrigins {
  export const filterSensitiveLog = (
    obj: AwsCloudFrontDistributionOrigins
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AwsCloudFrontDistributionOrigins =>
    __isa(o, "AwsCloudFrontDistributionOrigins");
}

/**
 * <p>The details of an Amazon EC2 instance.</p>
 */
export interface AwsEc2InstanceDetails {
  __type?: "AwsEc2InstanceDetails";
  /**
   * <p>The IAM profile ARN of the instance.</p>
   */
  IamInstanceProfileArn?: string;

  /**
   * <p>The Amazon Machine Image (AMI) ID of the instance.</p>
   */
  ImageId?: string;

  /**
   * <p>The IPv4 addresses associated with the instance.</p>
   */
  IpV4Addresses?: string[];

  /**
   * <p>The IPv6 addresses associated with the instance.</p>
   */
  IpV6Addresses?: string[];

  /**
   * <p>The key name associated with the instance.</p>
   */
  KeyName?: string;

  /**
   * <p>The date/time the instance was launched.</p>
   */
  LaunchedAt?: string;

  /**
   * <p>The identifier of the subnet that the instance was launched in.</p>
   */
  SubnetId?: string;

  /**
   * <p>The instance type of the instance. </p>
   */
  Type?: string;

  /**
   * <p>The identifier of the VPC that the instance was launched in.</p>
   */
  VpcId?: string;
}

export namespace AwsEc2InstanceDetails {
  export const filterSensitiveLog = (obj: AwsEc2InstanceDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is AwsEc2InstanceDetails =>
    __isa(o, "AwsEc2InstanceDetails");
}

/**
 * <p>Information about a load balancer.</p>
 */
export interface AwsElbv2LoadBalancerDetails {
  __type?: "AwsElbv2LoadBalancerDetails";
  /**
   * <p>The Availability Zones for the load balancer.</p>
   */
  AvailabilityZones?: AvailabilityZone[];

  /**
   * <p>The ID of the Amazon Route 53 hosted zone associated with the load balancer.</p>
   */
  CanonicalHostedZoneId?: string;

  /**
   * <p>The date and time the load balancer was created.</p>
   */
  CreatedTime?: string;

  /**
   * <p>The public DNS name of the load balancer.</p>
   */
  DNSName?: string;

  /**
   * <p>The type of IP addresses used by the subnets for your load balancer. The possible values are ipv4 (for IPv4 addresses) and dualstack (for IPv4 and IPv6 addresses).</p>
   */
  IpAddressType?: string;

  /**
   * <p>The nodes of an Internet-facing load balancer have public IP addresses.</p>
   */
  Scheme?: string;

  /**
   * <p>The IDs of the security groups for the load balancer.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The state of the load balancer.</p>
   */
  State?: LoadBalancerState;

  /**
   * <p>The type of load balancer.</p>
   */
  Type?: string;

  /**
   * <p>The ID of the VPC for the load balancer.</p>
   */
  VpcId?: string;
}

export namespace AwsElbv2LoadBalancerDetails {
  export const filterSensitiveLog = (
    obj: AwsElbv2LoadBalancerDetails
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AwsElbv2LoadBalancerDetails =>
    __isa(o, "AwsElbv2LoadBalancerDetails");
}

/**
 * <p>IAM access key details related to a finding.</p>
 */
export interface AwsIamAccessKeyDetails {
  __type?: "AwsIamAccessKeyDetails";
  /**
   * <p>The creation date/time of the IAM access key related to a finding.</p>
   */
  CreatedAt?: string;

  /**
   * <p>The ID of the principal associated with an access key.</p>
   */
  PrincipalId?: string;

  /**
   * <p>The name of the principal.</p>
   */
  PrincipalName?: string;

  /**
   * <p>The type of principal associated with an access key.</p>
   */
  PrincipalType?: string;

  /**
   * <p>The status of the IAM access key related to a finding.</p>
   */
  Status?: AwsIamAccessKeyStatus | string;

  /**
   * <p>The user associated with the IAM access key related to a finding.</p>
   *          <p>The <code>UserName</code> parameter has been replaced with the <code>PrincipalName</code> parameter because access keys can also be assigned to principals that are not IAM users.</p>
   */
  UserName?: string;
}

export namespace AwsIamAccessKeyDetails {
  export const filterSensitiveLog = (obj: AwsIamAccessKeyDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is AwsIamAccessKeyDetails =>
    __isa(o, "AwsIamAccessKeyDetails");
}

export enum AwsIamAccessKeyStatus {
  ACTIVE = "Active",
  INACTIVE = "Inactive"
}

/**
 * <p>Contains information about an IAM role, including all of the role's policies.</p>
 */
export interface AwsIamRoleDetails {
  __type?: "AwsIamRoleDetails";
  /**
   * <p>The trust policy that grants permission to assume the role.</p>
   */
  AssumeRolePolicyDocument?: string;

  /**
   * <p>The date and time, in ISO 8601 date-time format, when the role was created.</p>
   */
  CreateDate?: string;

  /**
   * <p>The maximum session duration (in seconds) that you want to set for the specified role.</p>
   */
  MaxSessionDuration?: number;

  /**
   * <p>The path to the role.</p>
   */
  Path?: string;

  /**
   * <p>The stable and unique string identifying the role.</p>
   */
  RoleId?: string;

  /**
   * <p>The friendly name that identifies the role.</p>
   */
  RoleName?: string;
}

export namespace AwsIamRoleDetails {
  export const filterSensitiveLog = (obj: AwsIamRoleDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is AwsIamRoleDetails =>
    __isa(o, "AwsIamRoleDetails");
}

/**
 * <p>Contains metadata about a customer master key (CMK).</p>
 */
export interface AwsKmsKeyDetails {
  __type?: "AwsKmsKeyDetails";
  /**
   * <p>The twelve-digit account ID of the AWS account that owns the CMK.</p>
   */
  AWSAccountId?: string;

  /**
   * <p>The date and time when the CMK was created.</p>
   */
  CreationDate?: number;

  /**
   * <p>The globally unique identifier for the CMK.</p>
   */
  KeyId?: string;

  /**
   * <p>The manager of the CMK. CMKs in your AWS account are either customer managed or AWS managed.</p>
   */
  KeyManager?: string;

  /**
   * <p>The state of the CMK.</p>
   */
  KeyState?: string;

  /**
   * <p>The source of the CMK's key material. When this value is AWS_KMS, AWS KMS created the key material. When this value is EXTERNAL, the key material was imported from your existing key management infrastructure or the CMK lacks key material. When this value is AWS_CLOUDHSM, the key material was created in the AWS CloudHSM cluster associated with a custom key store.</p>
   */
  Origin?: string;
}

export namespace AwsKmsKeyDetails {
  export const filterSensitiveLog = (obj: AwsKmsKeyDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is AwsKmsKeyDetails =>
    __isa(o, "AwsKmsKeyDetails");
}

/**
 * <p>The code for the Lambda function. You can specify either an object in Amazon S3, or upload a deployment package directly.</p>
 */
export interface AwsLambdaFunctionCode {
  __type?: "AwsLambdaFunctionCode";
  /**
   * <p>An Amazon S3 bucket in the same AWS Region as your function. The bucket can be in a different AWS account.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The Amazon S3 key of the deployment package.</p>
   */
  S3Key?: string;

  /**
   * <p>For versioned objects, the version of the deployment package object to use.</p>
   */
  S3ObjectVersion?: string;

  /**
   * <p>The base64-encoded contents of the deployment package. AWS SDK and AWS CLI clients handle the encoding for you.</p>
   */
  ZipFile?: string;
}

export namespace AwsLambdaFunctionCode {
  export const filterSensitiveLog = (obj: AwsLambdaFunctionCode): any => ({
    ...obj
  });
  export const isa = (o: any): o is AwsLambdaFunctionCode =>
    __isa(o, "AwsLambdaFunctionCode");
}

/**
 * <p>The dead-letter queue for failed asynchronous invocations.</p>
 */
export interface AwsLambdaFunctionDeadLetterConfig {
  __type?: "AwsLambdaFunctionDeadLetterConfig";
  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic.</p>
   */
  TargetArn?: string;
}

export namespace AwsLambdaFunctionDeadLetterConfig {
  export const filterSensitiveLog = (
    obj: AwsLambdaFunctionDeadLetterConfig
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AwsLambdaFunctionDeadLetterConfig =>
    __isa(o, "AwsLambdaFunctionDeadLetterConfig");
}

/**
 * <p>Details about a function's configuration.</p>
 */
export interface AwsLambdaFunctionDetails {
  __type?: "AwsLambdaFunctionDetails";
  /**
   * <p>An <code>AwsLambdaFunctionCode</code> object.</p>
   */
  Code?: AwsLambdaFunctionCode;

  /**
   * <p>The SHA256 hash of the function's deployment package.</p>
   */
  CodeSha256?: string;

  /**
   * <p>The function's dead letter queue.</p>
   */
  DeadLetterConfig?: AwsLambdaFunctionDeadLetterConfig;

  /**
   * <p>The function's environment variables.</p>
   */
  Environment?: AwsLambdaFunctionEnvironment;

  /**
   * <p>The name of the function.</p>
   */
  FunctionName?: string;

  /**
   * <p>The function that Lambda calls to begin executing your function.</p>
   */
  Handler?: string;

  /**
   * <p>The KMS key that's used to encrypt the function's environment variables. This key is only returned if you've configured a customer managed CMK.</p>
   */
  KmsKeyArn?: string;

  /**
   * <p>The date and time that the function was last updated, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   */
  LastModified?: string;

  /**
   * <p>The function's layers.</p>
   */
  Layers?: AwsLambdaFunctionLayer[];

  /**
   * <p>For Lambda@Edge functions, the ARN of the master function.</p>
   */
  MasterArn?: string;

  /**
   * <p>The memory that's allocated to the function.</p>
   */
  MemorySize?: number;

  /**
   * <p>The latest updated revision of the function or alias.</p>
   */
  RevisionId?: string;

  /**
   * <p>The function's execution role.</p>
   */
  Role?: string;

  /**
   * <p>The runtime environment for the Lambda function.</p>
   */
  Runtime?: string;

  /**
   * <p>The amount of time that Lambda allows a function to run before stopping it.</p>
   */
  Timeout?: number;

  /**
   * <p>The function's AWS X-Ray tracing configuration.</p>
   */
  TracingConfig?: AwsLambdaFunctionTracingConfig;

  /**
   * <p>The version of the Lambda function.</p>
   */
  Version?: string;

  /**
   * <p>The function's networking configuration.</p>
   */
  VpcConfig?: AwsLambdaFunctionVpcConfig;
}

export namespace AwsLambdaFunctionDetails {
  export const filterSensitiveLog = (obj: AwsLambdaFunctionDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is AwsLambdaFunctionDetails =>
    __isa(o, "AwsLambdaFunctionDetails");
}

/**
 * <p>A function's environment variable settings.</p>
 */
export interface AwsLambdaFunctionEnvironment {
  __type?: "AwsLambdaFunctionEnvironment";
  /**
   * <p>An <code>AwsLambdaFunctionEnvironmentError</code> object.</p>
   */
  Error?: AwsLambdaFunctionEnvironmentError;

  /**
   * <p>Environment variable key-value pairs.</p>
   */
  Variables?: { [key: string]: string };
}

export namespace AwsLambdaFunctionEnvironment {
  export const filterSensitiveLog = (
    obj: AwsLambdaFunctionEnvironment
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AwsLambdaFunctionEnvironment =>
    __isa(o, "AwsLambdaFunctionEnvironment");
}

/**
 * <p>Error messages for environment variables that couldn't be applied.</p>
 */
export interface AwsLambdaFunctionEnvironmentError {
  __type?: "AwsLambdaFunctionEnvironmentError";
  /**
   * <p>The error code.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

export namespace AwsLambdaFunctionEnvironmentError {
  export const filterSensitiveLog = (
    obj: AwsLambdaFunctionEnvironmentError
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AwsLambdaFunctionEnvironmentError =>
    __isa(o, "AwsLambdaFunctionEnvironmentError");
}

/**
 * <p>An AWS Lambda layer.</p>
 */
export interface AwsLambdaFunctionLayer {
  __type?: "AwsLambdaFunctionLayer";
  /**
   * <p>The Amazon Resource Name (ARN) of the function layer.</p>
   */
  Arn?: string;

  /**
   * <p>The size of the layer archive in bytes.</p>
   */
  CodeSize?: number;
}

export namespace AwsLambdaFunctionLayer {
  export const filterSensitiveLog = (obj: AwsLambdaFunctionLayer): any => ({
    ...obj
  });
  export const isa = (o: any): o is AwsLambdaFunctionLayer =>
    __isa(o, "AwsLambdaFunctionLayer");
}

/**
 * <p>The function's AWS X-Ray tracing configuration.</p>
 */
export interface AwsLambdaFunctionTracingConfig {
  __type?: "AwsLambdaFunctionTracingConfig";
  /**
   * <p>The tracing mode.</p>
   */
  Mode?: string;
}

export namespace AwsLambdaFunctionTracingConfig {
  export const filterSensitiveLog = (
    obj: AwsLambdaFunctionTracingConfig
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AwsLambdaFunctionTracingConfig =>
    __isa(o, "AwsLambdaFunctionTracingConfig");
}

/**
 * <p>The VPC security groups and subnets that are attached to a Lambda function. For more information, see VPC Settings.</p>
 */
export interface AwsLambdaFunctionVpcConfig {
  __type?: "AwsLambdaFunctionVpcConfig";
  /**
   * <p>A list of VPC security groups IDs.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>A list of VPC subnet IDs.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export namespace AwsLambdaFunctionVpcConfig {
  export const filterSensitiveLog = (obj: AwsLambdaFunctionVpcConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is AwsLambdaFunctionVpcConfig =>
    __isa(o, "AwsLambdaFunctionVpcConfig");
}

/**
 * <p>The details of an Amazon S3 bucket.</p>
 */
export interface AwsS3BucketDetails {
  __type?: "AwsS3BucketDetails";
  /**
   * <p>The canonical user ID of the owner of the S3 bucket.</p>
   */
  OwnerId?: string;

  /**
   * <p>The display name of the owner of the S3 bucket.</p>
   */
  OwnerName?: string;
}

export namespace AwsS3BucketDetails {
  export const filterSensitiveLog = (obj: AwsS3BucketDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is AwsS3BucketDetails =>
    __isa(o, "AwsS3BucketDetails");
}

/**
 * <p>Provides consistent format for the contents of the Security Hub-aggregated findings.
 *             <code>AwsSecurityFinding</code> format enables you to share findings between AWS
 *          security services and third-party solutions, and compliance checks.</p>
 *          <note>
 *             <p>A finding is a potential security issue generated either by AWS services (Amazon
 *             GuardDuty, Amazon Inspector, and Amazon Macie) or by the integrated third-party
 *             solutions and compliance checks.</p>
 *          </note>
 */
export interface AwsSecurityFinding {
  __type?: "AwsSecurityFinding";
  /**
   * <p>The AWS account ID that a finding is generated in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>This data type is exclusive to findings that are generated as the result of a check run
   *          against a specific rule in a supported standard (for example, CIS AWS Foundations).
   *          Contains compliance-related finding details.</p>
   */
  Compliance?: Compliance;

  /**
   * <p>A finding's confidence. Confidence is defined as the likelihood that a finding
   *          accurately identifies the behavior or issue that it was intended to identify. Confidence is
   *          scored on a 0-100 basis using a ratio scale, where 0 means zero percent confidence and 100
   *          means 100 percent confidence.</p>
   */
  Confidence?: number;

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider
   *          created the potential security issue that a finding captured.</p>
   */
  CreatedAt: string | undefined;

  /**
   * <p>The level of importance assigned to the resources associated with the finding. A score
   *          of 0 means that the underlying resources have no criticality, and a score of 100 is
   *          reserved for the most critical resources.</p>
   */
  Criticality?: number;

  /**
   * <p>A finding's description.</p>
   *          <note>
   *             <p>In this release, <code>Description</code> is a required property.</p>
   *          </note>
   */
  Description: string | undefined;

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider first
   *          observed the potential security issue that a finding captured.</p>
   */
  FirstObservedAt?: string;

  /**
   * <p>The identifier for the solution-specific component (a discrete unit of logic) that
   *          generated a finding. In various security-findings providers' solutions, this generator can
   *          be called a rule, a check, a detector, a plug-in, etc. </p>
   */
  GeneratorId: string | undefined;

  /**
   * <p>The security findings provider-specific identifier for a finding.</p>
   */
  Id: string | undefined;

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider most
   *          recently observed the potential security issue that a finding captured.</p>
   */
  LastObservedAt?: string;

  /**
   * <p>A list of malware related to a finding.</p>
   */
  Malware?: Malware[];

  /**
   * <p>The details of network-related information about a finding.</p>
   */
  Network?: Network;

  /**
   * <p>A user-defined note added to a finding.</p>
   */
  Note?: Note;

  /**
   * <p>The details of process-related information about a finding.</p>
   */
  Process?: ProcessDetails;

  /**
   * <p>The ARN generated by Security Hub that uniquely identifies a third-party company
   *          (security-findings provider) after this provider's product (solution that generates
   *          findings) is registered with Security Hub. </p>
   */
  ProductArn: string | undefined;

  /**
   * <p>A data type where security-findings providers can include additional solution-specific
   *          details that aren't part of the defined <code>AwsSecurityFinding</code> format.</p>
   */
  ProductFields?: { [key: string]: string };

  /**
   * <p>The record state of a finding.</p>
   */
  RecordState?: RecordState | string;

  /**
   * <p>A list of related findings.</p>
   */
  RelatedFindings?: RelatedFinding[];

  /**
   * <p>A data type that describes the remediation options for a finding.</p>
   */
  Remediation?: Remediation;

  /**
   * <p>A set of resource data types that describe the resources that the finding refers
   *          to.</p>
   */
  Resources: Resource[] | undefined;

  /**
   * <p>The schema version that a finding is formatted for.</p>
   */
  SchemaVersion: string | undefined;

  /**
   * <p>A finding's severity.</p>
   */
  Severity: Severity | undefined;

  /**
   * <p>A URL that links to a page about the current finding in the security-findings provider's
   *          solution.</p>
   */
  SourceUrl?: string;

  /**
   * <p>Threat intel details related to a finding.</p>
   */
  ThreatIntelIndicators?: ThreatIntelIndicator[];

  /**
   * <p>A finding's title.</p>
   *          <note>
   *             <p>In this release, <code>Title</code> is a required property.</p>
   *          </note>
   */
  Title: string | undefined;

  /**
   * <p>One or more finding types in the format of <code>namespace/category/classifier</code>
   *          that classify a finding.</p>
   *          <p>Valid namespace values are: Software and Configuration Checks | TTPs | Effects | Unusual
   *          Behaviors | Sensitive Data Identifications</p>
   */
  Types: string[] | undefined;

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider last
   *          updated the finding record. </p>
   */
  UpdatedAt: string | undefined;

  /**
   * <p>A list of name/value string pairs associated with the finding. These are custom,
   *          user-defined fields added to a finding. </p>
   */
  UserDefinedFields?: { [key: string]: string };

  /**
   * <p>Indicates the veracity of a finding. </p>
   */
  VerificationState?: VerificationState | string;

  /**
   * <p>The workflow state of a finding. </p>
   */
  WorkflowState?: WorkflowState | string;
}

export namespace AwsSecurityFinding {
  export const filterSensitiveLog = (obj: AwsSecurityFinding): any => ({
    ...obj
  });
  export const isa = (o: any): o is AwsSecurityFinding =>
    __isa(o, "AwsSecurityFinding");
}

/**
 * <p>A collection of attributes that are applied to all active Security Hub-aggregated
 *          findings and that result in a subset of findings that are included in this insight. </p>
 */
export interface AwsSecurityFindingFilters {
  __type?: "AwsSecurityFindingFilters";
  /**
   * <p>The AWS account ID that a finding is generated in.</p>
   */
  AwsAccountId?: StringFilter[];

  /**
   * <p>The name of the findings provider (company) that owns the solution (product) that
   *          generates findings.</p>
   */
  CompanyName?: StringFilter[];

  /**
   * <p>Exclusive to findings that are generated as the result of a check run against a specific
   *          rule in a supported standard (for example, CIS AWS Foundations). Contains
   *          compliance-related finding details.</p>
   */
  ComplianceStatus?: StringFilter[];

  /**
   * <p>A finding's confidence. Confidence is defined as the likelihood that a finding
   *          accurately identifies the behavior or issue that it was intended to identify. Confidence is
   *          scored on a 0-100 basis using a ratio scale, where 0 means zero percent confidence and 100
   *          means 100 percent confidence.</p>
   */
  Confidence?: NumberFilter[];

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider
   *          captured the potential security issue that a finding captured.</p>
   */
  CreatedAt?: DateFilter[];

  /**
   * <p>The level of importance assigned to the resources associated with the finding. A score
   *          of 0 means that the underlying resources have no criticality, and a score of 100 is
   *          reserved for the most critical resources.</p>
   */
  Criticality?: NumberFilter[];

  /**
   * <p>A finding's description.</p>
   */
  Description?: StringFilter[];

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider first
   *          observed the potential security issue that a finding captured.</p>
   */
  FirstObservedAt?: DateFilter[];

  /**
   * <p>The identifier for the solution-specific component (a discrete unit of logic) that
   *          generated a finding. In various security-findings providers' solutions, this generator can
   *          be called a rule, a check, a detector, a plug-in, etc.</p>
   */
  GeneratorId?: StringFilter[];

  /**
   * <p>The security findings provider-specific identifier for a finding.</p>
   */
  Id?: StringFilter[];

  /**
   * <p>A keyword for a finding.</p>
   */
  Keyword?: KeywordFilter[];

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider most
   *          recently observed the potential security issue that a finding captured.</p>
   */
  LastObservedAt?: DateFilter[];

  /**
   * <p>The name of the malware that was observed.</p>
   */
  MalwareName?: StringFilter[];

  /**
   * <p>The filesystem path of the malware that was observed.</p>
   */
  MalwarePath?: StringFilter[];

  /**
   * <p>The state of the malware that was observed.</p>
   */
  MalwareState?: StringFilter[];

  /**
   * <p>The type of the malware that was observed.</p>
   */
  MalwareType?: StringFilter[];

  /**
   * <p>The destination domain of network-related information about a finding.</p>
   */
  NetworkDestinationDomain?: StringFilter[];

  /**
   * <p>The destination IPv4 address of network-related information about a finding.</p>
   */
  NetworkDestinationIpV4?: IpFilter[];

  /**
   * <p>The destination IPv6 address of network-related information about a finding.</p>
   */
  NetworkDestinationIpV6?: IpFilter[];

  /**
   * <p>The destination port of network-related information about a finding.</p>
   */
  NetworkDestinationPort?: NumberFilter[];

  /**
   * <p>Indicates the direction of network traffic associated with a finding.</p>
   */
  NetworkDirection?: StringFilter[];

  /**
   * <p>The protocol of network-related information about a finding.</p>
   */
  NetworkProtocol?: StringFilter[];

  /**
   * <p>The source domain of network-related information about a finding.</p>
   */
  NetworkSourceDomain?: StringFilter[];

  /**
   * <p>The source IPv4 address of network-related information about a finding.</p>
   */
  NetworkSourceIpV4?: IpFilter[];

  /**
   * <p>The source IPv6 address of network-related information about a finding.</p>
   */
  NetworkSourceIpV6?: IpFilter[];

  /**
   * <p>The source media access control (MAC) address of network-related information about a
   *          finding.</p>
   */
  NetworkSourceMac?: StringFilter[];

  /**
   * <p>The source port of network-related information about a finding.</p>
   */
  NetworkSourcePort?: NumberFilter[];

  /**
   * <p>The text of a note.</p>
   */
  NoteText?: StringFilter[];

  /**
   * <p>The timestamp of when the note was updated.</p>
   */
  NoteUpdatedAt?: DateFilter[];

  /**
   * <p>The principal that created a note.</p>
   */
  NoteUpdatedBy?: StringFilter[];

  /**
   * <p>The date/time that the process was launched.</p>
   */
  ProcessLaunchedAt?: DateFilter[];

  /**
   * <p>The name of the process.</p>
   */
  ProcessName?: StringFilter[];

  /**
   * <p>The parent process ID.</p>
   */
  ProcessParentPid?: NumberFilter[];

  /**
   * <p>The path to the process executable.</p>
   */
  ProcessPath?: StringFilter[];

  /**
   * <p>The process ID.</p>
   */
  ProcessPid?: NumberFilter[];

  /**
   * <p>The date/time that the process was terminated.</p>
   */
  ProcessTerminatedAt?: DateFilter[];

  /**
   * <p>The ARN generated by Security Hub that uniquely identifies a third-party company
   *          (security findings provider) after this provider's product (solution that generates
   *          findings) is registered with Security Hub.</p>
   */
  ProductArn?: StringFilter[];

  /**
   * <p>A data type where security-findings providers can include additional solution-specific
   *          details that aren't part of the defined <code>AwsSecurityFinding</code> format.</p>
   */
  ProductFields?: MapFilter[];

  /**
   * <p>The name of the solution (product) that generates findings.</p>
   */
  ProductName?: StringFilter[];

  /**
   * <p>The recommendation of what to do about the issue described in a finding.</p>
   */
  RecommendationText?: StringFilter[];

  /**
   * <p>The updated record state for the finding.</p>
   */
  RecordState?: StringFilter[];

  /**
   * <p>The solution-generated identifier for a related finding.</p>
   */
  RelatedFindingsId?: StringFilter[];

  /**
   * <p>The ARN of the solution that generated a related finding.</p>
   */
  RelatedFindingsProductArn?: StringFilter[];

  /**
   * <p>The IAM profile ARN of the instance.</p>
   */
  ResourceAwsEc2InstanceIamInstanceProfileArn?: StringFilter[];

  /**
   * <p>The Amazon Machine Image (AMI) ID of the instance.</p>
   */
  ResourceAwsEc2InstanceImageId?: StringFilter[];

  /**
   * <p>The IPv4 addresses associated with the instance.</p>
   */
  ResourceAwsEc2InstanceIpV4Addresses?: IpFilter[];

  /**
   * <p>The IPv6 addresses associated with the instance.</p>
   */
  ResourceAwsEc2InstanceIpV6Addresses?: IpFilter[];

  /**
   * <p>The key name associated with the instance.</p>
   */
  ResourceAwsEc2InstanceKeyName?: StringFilter[];

  /**
   * <p>The date/time the instance was launched.</p>
   */
  ResourceAwsEc2InstanceLaunchedAt?: DateFilter[];

  /**
   * <p>The identifier of the subnet that the instance was launched in.</p>
   */
  ResourceAwsEc2InstanceSubnetId?: StringFilter[];

  /**
   * <p>The instance type of the instance.</p>
   */
  ResourceAwsEc2InstanceType?: StringFilter[];

  /**
   * <p>The identifier of the VPC that the instance was launched in.</p>
   */
  ResourceAwsEc2InstanceVpcId?: StringFilter[];

  /**
   * <p>The creation date/time of the IAM access key related to a finding.</p>
   */
  ResourceAwsIamAccessKeyCreatedAt?: DateFilter[];

  /**
   * <p>The status of the IAM access key related to a finding.</p>
   */
  ResourceAwsIamAccessKeyStatus?: StringFilter[];

  /**
   * <p>The user associated with the IAM access key related to a finding.</p>
   */
  ResourceAwsIamAccessKeyUserName?: StringFilter[];

  /**
   * <p>The canonical user ID of the owner of the S3 bucket.</p>
   */
  ResourceAwsS3BucketOwnerId?: StringFilter[];

  /**
   * <p>The display name of the owner of the S3 bucket.</p>
   */
  ResourceAwsS3BucketOwnerName?: StringFilter[];

  /**
   * <p>The identifier of the image related to a finding.</p>
   */
  ResourceContainerImageId?: StringFilter[];

  /**
   * <p>The name of the image related to a finding.</p>
   */
  ResourceContainerImageName?: StringFilter[];

  /**
   * <p>The date/time that the container was started.</p>
   */
  ResourceContainerLaunchedAt?: DateFilter[];

  /**
   * <p>The name of the container related to a finding.</p>
   */
  ResourceContainerName?: StringFilter[];

  /**
   * <p>The details of a resource that doesn't have a specific subfield for the resource type
   *          defined.</p>
   */
  ResourceDetailsOther?: MapFilter[];

  /**
   * <p>The canonical identifier for the given resource type.</p>
   */
  ResourceId?: StringFilter[];

  /**
   * <p>The canonical AWS partition name that the Region is assigned to.</p>
   */
  ResourcePartition?: StringFilter[];

  /**
   * <p>The canonical AWS external Region name where this resource is located.</p>
   */
  ResourceRegion?: StringFilter[];

  /**
   * <p>A list of AWS tags associated with a resource at the time the finding was
   *          processed.</p>
   */
  ResourceTags?: MapFilter[];

  /**
   * <p>Specifies the type of the resource that details are provided for.</p>
   */
  ResourceType?: StringFilter[];

  /**
   * <p>The label of a finding's severity.</p>
   */
  SeverityLabel?: StringFilter[];

  /**
   * <p>The normalized severity of a finding.</p>
   */
  SeverityNormalized?: NumberFilter[];

  /**
   * <p>The native severity as defined by the security-findings provider's solution that
   *          generated the finding.</p>
   */
  SeverityProduct?: NumberFilter[];

  /**
   * <p>A URL that links to a page about the current finding in the security-findings provider's
   *          solution.</p>
   */
  SourceUrl?: StringFilter[];

  /**
   * <p>The category of a threat intel indicator.</p>
   */
  ThreatIntelIndicatorCategory?: StringFilter[];

  /**
   * <p>The date/time of the last observation of a threat intel indicator.</p>
   */
  ThreatIntelIndicatorLastObservedAt?: DateFilter[];

  /**
   * <p>The source of the threat intel.</p>
   */
  ThreatIntelIndicatorSource?: StringFilter[];

  /**
   * <p>The URL for more details from the source of the threat intel.</p>
   */
  ThreatIntelIndicatorSourceUrl?: StringFilter[];

  /**
   * <p>The type of a threat intel indicator.</p>
   */
  ThreatIntelIndicatorType?: StringFilter[];

  /**
   * <p>The value of a threat intel indicator.</p>
   */
  ThreatIntelIndicatorValue?: StringFilter[];

  /**
   * <p>A finding's title.</p>
   */
  Title?: StringFilter[];

  /**
   * <p>A finding type in the format of <code>namespace/category/classifier</code> that
   *          classifies a finding.</p>
   */
  Type?: StringFilter[];

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider last
   *          updated the finding record. </p>
   */
  UpdatedAt?: DateFilter[];

  /**
   * <p>A list of name/value string pairs associated with the finding. These are custom,
   *          user-defined fields added to a finding. </p>
   */
  UserDefinedFields?: MapFilter[];

  /**
   * <p>The veracity of a finding.</p>
   */
  VerificationState?: StringFilter[];

  /**
   * <p>The workflow state of a finding.</p>
   */
  WorkflowState?: StringFilter[];
}

export namespace AwsSecurityFindingFilters {
  export const filterSensitiveLog = (obj: AwsSecurityFindingFilters): any => ({
    ...obj
  });
  export const isa = (o: any): o is AwsSecurityFindingFilters =>
    __isa(o, "AwsSecurityFindingFilters");
}

/**
 * <p>A wrapper type for the topic's Amazon Resource Name (ARN).</p>
 */
export interface AwsSnsTopicDetails {
  __type?: "AwsSnsTopicDetails";
  /**
   * <p>The ID of an AWS-managed customer master key (CMK) for Amazon SNS or a custom CMK.</p>
   */
  KmsMasterKeyId?: string;

  /**
   * <p>The subscription's owner.</p>
   */
  Owner?: string;

  /**
   * <p>Subscription is an embedded property that describes the subscription endpoints of an Amazon SNS topic.</p>
   */
  Subscription?: AwsSnsTopicSubscription[];

  /**
   * <p>The name of the topic.</p>
   */
  TopicName?: string;
}

export namespace AwsSnsTopicDetails {
  export const filterSensitiveLog = (obj: AwsSnsTopicDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is AwsSnsTopicDetails =>
    __isa(o, "AwsSnsTopicDetails");
}

/**
 * <p>A wrapper type for the attributes of an Amazon SNS subscription.</p>
 */
export interface AwsSnsTopicSubscription {
  __type?: "AwsSnsTopicSubscription";
  /**
   * <p>The subscription's endpoint (format depends on the protocol).</p>
   */
  Endpoint?: string;

  /**
   * <p>The subscription's protocol.</p>
   */
  Protocol?: string;
}

export namespace AwsSnsTopicSubscription {
  export const filterSensitiveLog = (obj: AwsSnsTopicSubscription): any => ({
    ...obj
  });
  export const isa = (o: any): o is AwsSnsTopicSubscription =>
    __isa(o, "AwsSnsTopicSubscription");
}

/**
 * <p>Data about a queue.</p>
 */
export interface AwsSqsQueueDetails {
  __type?: "AwsSqsQueueDetails";
  /**
   * <p>The Amazon Resource Name (ARN) of the dead-letter queue to which Amazon SQS moves messages after the value of maxReceiveCount is exceeded. </p>
   */
  DeadLetterTargetArn?: string;

  /**
   * <p>The length of time, in seconds, for which Amazon SQS can reuse a data key to encrypt or decrypt messages before calling AWS KMS again.</p>
   */
  KmsDataKeyReusePeriodSeconds?: number;

  /**
   * <p>The ID of an AWS-managed customer master key (CMK) for Amazon SQS or a custom CMK.</p>
   */
  KmsMasterKeyId?: string;

  /**
   * <p>The name of the new queue.</p>
   */
  QueueName?: string;
}

export namespace AwsSqsQueueDetails {
  export const filterSensitiveLog = (obj: AwsSqsQueueDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is AwsSqsQueueDetails =>
    __isa(o, "AwsSqsQueueDetails");
}

export interface BatchDisableStandardsRequest {
  __type?: "BatchDisableStandardsRequest";
  /**
   * <p>The ARNs of the standards subscriptions to disable.</p>
   */
  StandardsSubscriptionArns: string[] | undefined;
}

export namespace BatchDisableStandardsRequest {
  export const filterSensitiveLog = (
    obj: BatchDisableStandardsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchDisableStandardsRequest =>
    __isa(o, "BatchDisableStandardsRequest");
}

export interface BatchDisableStandardsResponse {
  __type?: "BatchDisableStandardsResponse";
  /**
   * <p>The details of the standards subscriptions that were disabled.</p>
   */
  StandardsSubscriptions?: StandardsSubscription[];
}

export namespace BatchDisableStandardsResponse {
  export const filterSensitiveLog = (
    obj: BatchDisableStandardsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchDisableStandardsResponse =>
    __isa(o, "BatchDisableStandardsResponse");
}

export interface BatchEnableStandardsRequest {
  __type?: "BatchEnableStandardsRequest";
  /**
   * <p>The list of standards compliance checks to enable.</p>
   *          <important>
   *             <p>In this release, Security Hub supports only the CIS AWS Foundations standard.</p>
   *             <p>The ARN for the standard is
   *                <code>arn:aws:securityhub:::ruleset/cis-aws-foundations-benchmark/v/1.2.0</code>.</p>
   *          </important>
   */
  StandardsSubscriptionRequests: StandardsSubscriptionRequest[] | undefined;
}

export namespace BatchEnableStandardsRequest {
  export const filterSensitiveLog = (
    obj: BatchEnableStandardsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchEnableStandardsRequest =>
    __isa(o, "BatchEnableStandardsRequest");
}

export interface BatchEnableStandardsResponse {
  __type?: "BatchEnableStandardsResponse";
  /**
   * <p>The details of the standards subscriptions that were enabled.</p>
   */
  StandardsSubscriptions?: StandardsSubscription[];
}

export namespace BatchEnableStandardsResponse {
  export const filterSensitiveLog = (
    obj: BatchEnableStandardsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchEnableStandardsResponse =>
    __isa(o, "BatchEnableStandardsResponse");
}

export interface BatchImportFindingsRequest {
  __type?: "BatchImportFindingsRequest";
  /**
   * <p>A list of findings to import. To successfully import a finding, it must follow the
   *             <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html">AWS Security Finding Format</a>. Maximum of 100 findings per request.</p>
   */
  Findings: AwsSecurityFinding[] | undefined;
}

export namespace BatchImportFindingsRequest {
  export const filterSensitiveLog = (obj: BatchImportFindingsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchImportFindingsRequest =>
    __isa(o, "BatchImportFindingsRequest");
}

export interface BatchImportFindingsResponse {
  __type?: "BatchImportFindingsResponse";
  /**
   * <p>The number of findings that failed to import.</p>
   */
  FailedCount: number | undefined;

  /**
   * <p>The list of the findings that failed to import.</p>
   */
  FailedFindings?: ImportFindingsError[];

  /**
   * <p>The number of findings that were successfully imported.</p>
   */
  SuccessCount: number | undefined;
}

export namespace BatchImportFindingsResponse {
  export const filterSensitiveLog = (
    obj: BatchImportFindingsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchImportFindingsResponse =>
    __isa(o, "BatchImportFindingsResponse");
}

/**
 * <p>Exclusive to findings that are generated as the result of a check run against a specific
 *          rule in a supported standard (for example, CIS AWS Foundations). Contains
 *          compliance-related finding details.</p>
 *          <p>Values include the following:</p>
 *          <ul>
 *             <li>
 *                <p>Allowed values are the following:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>PASSED</code> - Compliance check passed for all evaluated resources.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>WARNING</code> - Some information is missing or this check is not supported given your configuration.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>FAILED</code> - Compliance check failed for at least one evaluated resource.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>NOT_AVAILABLE</code> - Check could not be performed due to a service outage or API error.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 */
export interface Compliance {
  __type?: "Compliance";
  /**
   * <p>The result of a compliance check.</p>
   */
  Status?: ComplianceStatus | string;
}

export namespace Compliance {
  export const filterSensitiveLog = (obj: Compliance): any => ({
    ...obj
  });
  export const isa = (o: any): o is Compliance => __isa(o, "Compliance");
}

export enum ComplianceStatus {
  FAILED = "FAILED",
  NOT_AVAILABLE = "NOT_AVAILABLE",
  PASSED = "PASSED",
  WARNING = "WARNING"
}

/**
 * <p>Container details related to a finding.</p>
 */
export interface ContainerDetails {
  __type?: "ContainerDetails";
  /**
   * <p>The identifier of the image related to a finding.</p>
   */
  ImageId?: string;

  /**
   * <p>The name of the image related to a finding.</p>
   */
  ImageName?: string;

  /**
   * <p>The date and time when the container started.</p>
   */
  LaunchedAt?: string;

  /**
   * <p>The name of the container related to a finding.</p>
   */
  Name?: string;
}

export namespace ContainerDetails {
  export const filterSensitiveLog = (obj: ContainerDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is ContainerDetails =>
    __isa(o, "ContainerDetails");
}

export enum ControlStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export interface CreateActionTargetRequest {
  __type?: "CreateActionTargetRequest";
  /**
   * <p>The description for the custom action target.</p>
   */
  Description: string | undefined;

  /**
   * <p>The ID for the custom action target.</p>
   */
  Id: string | undefined;

  /**
   * <p>The name of the custom action target.</p>
   */
  Name: string | undefined;
}

export namespace CreateActionTargetRequest {
  export const filterSensitiveLog = (obj: CreateActionTargetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateActionTargetRequest =>
    __isa(o, "CreateActionTargetRequest");
}

export interface CreateActionTargetResponse {
  __type?: "CreateActionTargetResponse";
  /**
   * <p>The ARN for the custom action target.</p>
   */
  ActionTargetArn: string | undefined;
}

export namespace CreateActionTargetResponse {
  export const filterSensitiveLog = (obj: CreateActionTargetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateActionTargetResponse =>
    __isa(o, "CreateActionTargetResponse");
}

export interface CreateInsightRequest {
  __type?: "CreateInsightRequest";
  /**
   * <p>One or more attributes used to filter the findings included in the insight. Only
   *          findings that match the criteria defined in the filters are included in the insight.</p>
   */
  Filters: AwsSecurityFindingFilters | undefined;

  /**
   * <p>The attribute used as the aggregator to group related findings for the insight.</p>
   */
  GroupByAttribute: string | undefined;

  /**
   * <p>The name of the custom insight to create.</p>
   */
  Name: string | undefined;
}

export namespace CreateInsightRequest {
  export const filterSensitiveLog = (obj: CreateInsightRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateInsightRequest =>
    __isa(o, "CreateInsightRequest");
}

export interface CreateInsightResponse {
  __type?: "CreateInsightResponse";
  /**
   * <p>The ARN of the insight created.</p>
   */
  InsightArn: string | undefined;
}

export namespace CreateInsightResponse {
  export const filterSensitiveLog = (obj: CreateInsightResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateInsightResponse =>
    __isa(o, "CreateInsightResponse");
}

export interface CreateMembersRequest {
  __type?: "CreateMembersRequest";
  /**
   * <p>A list of account ID and email address pairs of the accounts to associate with the Security Hub
   *          master account.</p>
   */
  AccountDetails?: AccountDetails[];
}

export namespace CreateMembersRequest {
  export const filterSensitiveLog = (obj: CreateMembersRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateMembersRequest =>
    __isa(o, "CreateMembersRequest");
}

export interface CreateMembersResponse {
  __type?: "CreateMembersResponse";
  /**
   * <p>A list of account ID and email address pairs of the AWS accounts that weren't
   *          processed.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace CreateMembersResponse {
  export const filterSensitiveLog = (obj: CreateMembersResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateMembersResponse =>
    __isa(o, "CreateMembersResponse");
}

/**
 * <p>A date filter for querying findings.</p>
 */
export interface DateFilter {
  __type?: "DateFilter";
  /**
   * <p>A date range for the date filter.</p>
   */
  DateRange?: DateRange;

  /**
   * <p>An end date for the date filter.</p>
   */
  End?: string;

  /**
   * <p>A start date for the date filter.</p>
   */
  Start?: string;
}

export namespace DateFilter {
  export const filterSensitiveLog = (obj: DateFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is DateFilter => __isa(o, "DateFilter");
}

/**
 * <p>A date range for the date filter.</p>
 */
export interface DateRange {
  __type?: "DateRange";
  /**
   * <p>A date range unit for the date filter.</p>
   */
  Unit?: DateRangeUnit | string;

  /**
   * <p>A date range value for the date filter.</p>
   */
  Value?: number;
}

export namespace DateRange {
  export const filterSensitiveLog = (obj: DateRange): any => ({
    ...obj
  });
  export const isa = (o: any): o is DateRange => __isa(o, "DateRange");
}

export enum DateRangeUnit {
  DAYS = "DAYS"
}

export interface DeclineInvitationsRequest {
  __type?: "DeclineInvitationsRequest";
  /**
   * <p>A list of account IDs that specify the accounts that invitations to Security Hub are declined
   *          from.</p>
   */
  AccountIds: string[] | undefined;
}

export namespace DeclineInvitationsRequest {
  export const filterSensitiveLog = (obj: DeclineInvitationsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeclineInvitationsRequest =>
    __isa(o, "DeclineInvitationsRequest");
}

export interface DeclineInvitationsResponse {
  __type?: "DeclineInvitationsResponse";
  /**
   * <p>A list of account ID and email address pairs of the AWS accounts that weren't
   *          processed.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace DeclineInvitationsResponse {
  export const filterSensitiveLog = (obj: DeclineInvitationsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeclineInvitationsResponse =>
    __isa(o, "DeclineInvitationsResponse");
}

export interface DeleteActionTargetRequest {
  __type?: "DeleteActionTargetRequest";
  /**
   * <p>The ARN of the custom action target to delete.</p>
   */
  ActionTargetArn: string | undefined;
}

export namespace DeleteActionTargetRequest {
  export const filterSensitiveLog = (obj: DeleteActionTargetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteActionTargetRequest =>
    __isa(o, "DeleteActionTargetRequest");
}

export interface DeleteActionTargetResponse {
  __type?: "DeleteActionTargetResponse";
  /**
   * <p>The ARN of the custom action target that was deleted.</p>
   */
  ActionTargetArn: string | undefined;
}

export namespace DeleteActionTargetResponse {
  export const filterSensitiveLog = (obj: DeleteActionTargetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteActionTargetResponse =>
    __isa(o, "DeleteActionTargetResponse");
}

export interface DeleteInsightRequest {
  __type?: "DeleteInsightRequest";
  /**
   * <p>The ARN of the insight to delete.</p>
   */
  InsightArn: string | undefined;
}

export namespace DeleteInsightRequest {
  export const filterSensitiveLog = (obj: DeleteInsightRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteInsightRequest =>
    __isa(o, "DeleteInsightRequest");
}

export interface DeleteInsightResponse {
  __type?: "DeleteInsightResponse";
  /**
   * <p>The ARN of the insight that was deleted.</p>
   */
  InsightArn: string | undefined;
}

export namespace DeleteInsightResponse {
  export const filterSensitiveLog = (obj: DeleteInsightResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteInsightResponse =>
    __isa(o, "DeleteInsightResponse");
}

export interface DeleteInvitationsRequest {
  __type?: "DeleteInvitationsRequest";
  /**
   * <p>A list of the account IDs that sent the invitations to delete.</p>
   */
  AccountIds: string[] | undefined;
}

export namespace DeleteInvitationsRequest {
  export const filterSensitiveLog = (obj: DeleteInvitationsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteInvitationsRequest =>
    __isa(o, "DeleteInvitationsRequest");
}

export interface DeleteInvitationsResponse {
  __type?: "DeleteInvitationsResponse";
  /**
   * <p>A list of account ID and email address pairs of the AWS accounts that invitations
   *          weren't deleted for.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace DeleteInvitationsResponse {
  export const filterSensitiveLog = (obj: DeleteInvitationsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteInvitationsResponse =>
    __isa(o, "DeleteInvitationsResponse");
}

export interface DeleteMembersRequest {
  __type?: "DeleteMembersRequest";
  /**
   * <p>A list of account IDs of the member accounts to delete.</p>
   */
  AccountIds?: string[];
}

export namespace DeleteMembersRequest {
  export const filterSensitiveLog = (obj: DeleteMembersRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteMembersRequest =>
    __isa(o, "DeleteMembersRequest");
}

export interface DeleteMembersResponse {
  __type?: "DeleteMembersResponse";
  /**
   * <p>A list of account ID and email address pairs of the AWS accounts that weren't
   *          deleted.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace DeleteMembersResponse {
  export const filterSensitiveLog = (obj: DeleteMembersResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteMembersResponse =>
    __isa(o, "DeleteMembersResponse");
}

export interface DescribeActionTargetsRequest {
  __type?: "DescribeActionTargetsRequest";
  /**
   * <p>A list of custom action target ARNs for the custom action targets to retrieve.</p>
   */
  ActionTargetArns?: string[];

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that is required for pagination.</p>
   */
  NextToken?: string;
}

export namespace DescribeActionTargetsRequest {
  export const filterSensitiveLog = (
    obj: DescribeActionTargetsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeActionTargetsRequest =>
    __isa(o, "DescribeActionTargetsRequest");
}

export interface DescribeActionTargetsResponse {
  __type?: "DescribeActionTargetsResponse";
  /**
   * <p>A list of <code>ActionTarget</code> objects. Each object includes the <code>ActionTargetArn</code>,
   *             <code>Description</code>, and <code>Name</code> of a custom action target available in
   *          Security Hub.</p>
   */
  ActionTargets: ActionTarget[] | undefined;

  /**
   * <p>The token that is required for pagination.</p>
   */
  NextToken?: string;
}

export namespace DescribeActionTargetsResponse {
  export const filterSensitiveLog = (
    obj: DescribeActionTargetsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeActionTargetsResponse =>
    __isa(o, "DescribeActionTargetsResponse");
}

export interface DescribeHubRequest {
  __type?: "DescribeHubRequest";
  /**
   * <p>The ARN of the Hub resource to retrieve.</p>
   */
  HubArn?: string;
}

export namespace DescribeHubRequest {
  export const filterSensitiveLog = (obj: DescribeHubRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeHubRequest =>
    __isa(o, "DescribeHubRequest");
}

export interface DescribeHubResponse {
  __type?: "DescribeHubResponse";
  /**
   * <p>The ARN of the Hub resource retrieved.</p>
   */
  HubArn?: string;

  /**
   * <p>The date and time when Security Hub was enabled in the account.</p>
   */
  SubscribedAt?: string;
}

export namespace DescribeHubResponse {
  export const filterSensitiveLog = (obj: DescribeHubResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeHubResponse =>
    __isa(o, "DescribeHubResponse");
}

export interface DescribeProductsRequest {
  __type?: "DescribeProductsRequest";
  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that is required for pagination.</p>
   */
  NextToken?: string;
}

export namespace DescribeProductsRequest {
  export const filterSensitiveLog = (obj: DescribeProductsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeProductsRequest =>
    __isa(o, "DescribeProductsRequest");
}

export interface DescribeProductsResponse {
  __type?: "DescribeProductsResponse";
  /**
   * <p>The token that is required for pagination.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of products, including details for each product.</p>
   */
  Products: Product[] | undefined;
}

export namespace DescribeProductsResponse {
  export const filterSensitiveLog = (obj: DescribeProductsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeProductsResponse =>
    __isa(o, "DescribeProductsResponse");
}

export interface DescribeStandardsControlsRequest {
  __type?: "DescribeStandardsControlsRequest";
  /**
   * <p>The maximum number of compliance standard controls to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>For requests to get the next page of results, the pagination token that was returned
   *          with the previous set of results. The initial request does not include a pagination
   *          token.</p>
   */
  NextToken?: string;

  /**
   * <p>The ARN of a resource that represents your subscription to a supported standard.</p>
   */
  StandardsSubscriptionArn: string | undefined;
}

export namespace DescribeStandardsControlsRequest {
  export const filterSensitiveLog = (
    obj: DescribeStandardsControlsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeStandardsControlsRequest =>
    __isa(o, "DescribeStandardsControlsRequest");
}

export interface DescribeStandardsControlsResponse {
  __type?: "DescribeStandardsControlsResponse";
  /**
   * <p>A list of compliance standards controls.</p>
   */
  Controls?: StandardsControl[];

  /**
   * <p>If there are more compliance standards control remaining in the results, then this is
   *          the pagination token to use to request the next page of compliance standard
   *          controls.</p>
   */
  NextToken?: string;
}

export namespace DescribeStandardsControlsResponse {
  export const filterSensitiveLog = (
    obj: DescribeStandardsControlsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeStandardsControlsResponse =>
    __isa(o, "DescribeStandardsControlsResponse");
}

export interface DisableImportFindingsForProductRequest {
  __type?: "DisableImportFindingsForProductRequest";
  /**
   * <p>The ARN of the integrated product to disable the integration for.</p>
   */
  ProductSubscriptionArn: string | undefined;
}

export namespace DisableImportFindingsForProductRequest {
  export const filterSensitiveLog = (
    obj: DisableImportFindingsForProductRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisableImportFindingsForProductRequest =>
    __isa(o, "DisableImportFindingsForProductRequest");
}

export interface DisableImportFindingsForProductResponse {
  __type?: "DisableImportFindingsForProductResponse";
}

export namespace DisableImportFindingsForProductResponse {
  export const filterSensitiveLog = (
    obj: DisableImportFindingsForProductResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisableImportFindingsForProductResponse =>
    __isa(o, "DisableImportFindingsForProductResponse");
}

export interface DisableSecurityHubRequest {
  __type?: "DisableSecurityHubRequest";
}

export namespace DisableSecurityHubRequest {
  export const filterSensitiveLog = (obj: DisableSecurityHubRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisableSecurityHubRequest =>
    __isa(o, "DisableSecurityHubRequest");
}

export interface DisableSecurityHubResponse {
  __type?: "DisableSecurityHubResponse";
}

export namespace DisableSecurityHubResponse {
  export const filterSensitiveLog = (obj: DisableSecurityHubResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisableSecurityHubResponse =>
    __isa(o, "DisableSecurityHubResponse");
}

export interface DisassociateFromMasterAccountRequest {
  __type?: "DisassociateFromMasterAccountRequest";
}

export namespace DisassociateFromMasterAccountRequest {
  export const filterSensitiveLog = (
    obj: DisassociateFromMasterAccountRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisassociateFromMasterAccountRequest =>
    __isa(o, "DisassociateFromMasterAccountRequest");
}

export interface DisassociateFromMasterAccountResponse {
  __type?: "DisassociateFromMasterAccountResponse";
}

export namespace DisassociateFromMasterAccountResponse {
  export const filterSensitiveLog = (
    obj: DisassociateFromMasterAccountResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisassociateFromMasterAccountResponse =>
    __isa(o, "DisassociateFromMasterAccountResponse");
}

export interface DisassociateMembersRequest {
  __type?: "DisassociateMembersRequest";
  /**
   * <p>The account IDs of the member accounts to disassociate from the master account.</p>
   */
  AccountIds?: string[];
}

export namespace DisassociateMembersRequest {
  export const filterSensitiveLog = (obj: DisassociateMembersRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisassociateMembersRequest =>
    __isa(o, "DisassociateMembersRequest");
}

export interface DisassociateMembersResponse {
  __type?: "DisassociateMembersResponse";
}

export namespace DisassociateMembersResponse {
  export const filterSensitiveLog = (
    obj: DisassociateMembersResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisassociateMembersResponse =>
    __isa(o, "DisassociateMembersResponse");
}

export interface EnableImportFindingsForProductRequest {
  __type?: "EnableImportFindingsForProductRequest";
  /**
   * <p>The ARN of the product to enable the integration for.</p>
   */
  ProductArn: string | undefined;
}

export namespace EnableImportFindingsForProductRequest {
  export const filterSensitiveLog = (
    obj: EnableImportFindingsForProductRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnableImportFindingsForProductRequest =>
    __isa(o, "EnableImportFindingsForProductRequest");
}

export interface EnableImportFindingsForProductResponse {
  __type?: "EnableImportFindingsForProductResponse";
  /**
   * <p>The ARN of your subscription to the product to enable integrations for.</p>
   */
  ProductSubscriptionArn?: string;
}

export namespace EnableImportFindingsForProductResponse {
  export const filterSensitiveLog = (
    obj: EnableImportFindingsForProductResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnableImportFindingsForProductResponse =>
    __isa(o, "EnableImportFindingsForProductResponse");
}

export interface EnableSecurityHubRequest {
  __type?: "EnableSecurityHubRequest";
  /**
   * <p>The tags to add to the Hub resource when you enable Security Hub.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace EnableSecurityHubRequest {
  export const filterSensitiveLog = (obj: EnableSecurityHubRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnableSecurityHubRequest =>
    __isa(o, "EnableSecurityHubRequest");
}

export interface EnableSecurityHubResponse {
  __type?: "EnableSecurityHubResponse";
}

export namespace EnableSecurityHubResponse {
  export const filterSensitiveLog = (obj: EnableSecurityHubResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnableSecurityHubResponse =>
    __isa(o, "EnableSecurityHubResponse");
}

export interface GetEnabledStandardsRequest {
  __type?: "GetEnabledStandardsRequest";
  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>Paginates results. On your first call to the <code>GetEnabledStandards</code> operation,
   *          set the value of this parameter to <code>NULL</code>. For subsequent calls to the
   *          operation, fill <code>nextToken</code> in the request with the value of
   *             <code>nextToken</code> from the previous response to continue listing data.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of the standards subscription ARNs for the standards to retrieve.</p>
   */
  StandardsSubscriptionArns?: string[];
}

export namespace GetEnabledStandardsRequest {
  export const filterSensitiveLog = (obj: GetEnabledStandardsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetEnabledStandardsRequest =>
    __isa(o, "GetEnabledStandardsRequest");
}

export interface GetEnabledStandardsResponse {
  __type?: "GetEnabledStandardsResponse";
  /**
   * <p>The token that is required for pagination.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>StandardsSubscriptions</code> objects that include information about the enabled standards.</p>
   */
  StandardsSubscriptions?: StandardsSubscription[];
}

export namespace GetEnabledStandardsResponse {
  export const filterSensitiveLog = (
    obj: GetEnabledStandardsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetEnabledStandardsResponse =>
    __isa(o, "GetEnabledStandardsResponse");
}

export interface GetFindingsRequest {
  __type?: "GetFindingsRequest";
  /**
   * <p>The findings attributes used to define a condition to filter the findings returned.</p>
   */
  Filters?: AwsSecurityFindingFilters;

  /**
   * <p>The maximum number of findings to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>Paginates results. On your first call to the <code>GetFindings</code> operation, set the
   *          value of this parameter to <code>NULL</code>. For subsequent calls to the operation, fill
   *             <code>nextToken</code> in the request with the value of <code>nextToken</code> from the
   *          previous response to continue listing data.</p>
   */
  NextToken?: string;

  /**
   * <p>Findings attributes used to sort the list of findings returned.</p>
   */
  SortCriteria?: SortCriterion[];
}

export namespace GetFindingsRequest {
  export const filterSensitiveLog = (obj: GetFindingsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetFindingsRequest =>
    __isa(o, "GetFindingsRequest");
}

export interface GetFindingsResponse {
  __type?: "GetFindingsResponse";
  /**
   * <p>The findings that matched the filters specified in the request.</p>
   */
  Findings: AwsSecurityFinding[] | undefined;

  /**
   * <p>The token that is required for pagination.</p>
   */
  NextToken?: string;
}

export namespace GetFindingsResponse {
  export const filterSensitiveLog = (obj: GetFindingsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetFindingsResponse =>
    __isa(o, "GetFindingsResponse");
}

export interface GetInsightResultsRequest {
  __type?: "GetInsightResultsRequest";
  /**
   * <p>The ARN of the insight whose results you want to see.</p>
   */
  InsightArn: string | undefined;
}

export namespace GetInsightResultsRequest {
  export const filterSensitiveLog = (obj: GetInsightResultsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetInsightResultsRequest =>
    __isa(o, "GetInsightResultsRequest");
}

export interface GetInsightResultsResponse {
  __type?: "GetInsightResultsResponse";
  /**
   * <p>The insight results returned by the operation.</p>
   */
  InsightResults: InsightResults | undefined;
}

export namespace GetInsightResultsResponse {
  export const filterSensitiveLog = (obj: GetInsightResultsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetInsightResultsResponse =>
    __isa(o, "GetInsightResultsResponse");
}

export interface GetInsightsRequest {
  __type?: "GetInsightsRequest";
  /**
   * <p>The ARNs of the insights that you want to describe.</p>
   */
  InsightArns?: string[];

  /**
   * <p>The maximum number of items that you want in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>Paginates results. On your first call to the <code>GetInsights</code> operation, set the
   *          value of this parameter to <code>NULL</code>. For subsequent calls to the operation, fill
   *             <code>nextToken</code> in the request with the value of <code>nextToken</code> from the
   *          previous response to continue listing data.</p>
   */
  NextToken?: string;
}

export namespace GetInsightsRequest {
  export const filterSensitiveLog = (obj: GetInsightsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetInsightsRequest =>
    __isa(o, "GetInsightsRequest");
}

export interface GetInsightsResponse {
  __type?: "GetInsightsResponse";
  /**
   * <p>The insights returned by the operation.</p>
   */
  Insights: Insight[] | undefined;

  /**
   * <p>The token that is required for pagination.</p>
   */
  NextToken?: string;
}

export namespace GetInsightsResponse {
  export const filterSensitiveLog = (obj: GetInsightsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetInsightsResponse =>
    __isa(o, "GetInsightsResponse");
}

export interface GetInvitationsCountRequest {
  __type?: "GetInvitationsCountRequest";
}

export namespace GetInvitationsCountRequest {
  export const filterSensitiveLog = (obj: GetInvitationsCountRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetInvitationsCountRequest =>
    __isa(o, "GetInvitationsCountRequest");
}

export interface GetInvitationsCountResponse {
  __type?: "GetInvitationsCountResponse";
  /**
   * <p>The number of all membership invitations sent to this Security Hub member account, not
   *          including the currently accepted invitation. </p>
   */
  InvitationsCount?: number;
}

export namespace GetInvitationsCountResponse {
  export const filterSensitiveLog = (
    obj: GetInvitationsCountResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetInvitationsCountResponse =>
    __isa(o, "GetInvitationsCountResponse");
}

export interface GetMasterAccountRequest {
  __type?: "GetMasterAccountRequest";
}

export namespace GetMasterAccountRequest {
  export const filterSensitiveLog = (obj: GetMasterAccountRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMasterAccountRequest =>
    __isa(o, "GetMasterAccountRequest");
}

export interface GetMasterAccountResponse {
  __type?: "GetMasterAccountResponse";
  /**
   * <p>A list of details about the Security Hub master account for the current member account.
   *       </p>
   */
  Master?: Invitation;
}

export namespace GetMasterAccountResponse {
  export const filterSensitiveLog = (obj: GetMasterAccountResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMasterAccountResponse =>
    __isa(o, "GetMasterAccountResponse");
}

export interface GetMembersRequest {
  __type?: "GetMembersRequest";
  /**
   * <p>A list of account IDs for the Security Hub member accounts that you want to return the
   *          details for. </p>
   */
  AccountIds: string[] | undefined;
}

export namespace GetMembersRequest {
  export const filterSensitiveLog = (obj: GetMembersRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMembersRequest =>
    __isa(o, "GetMembersRequest");
}

export interface GetMembersResponse {
  __type?: "GetMembersResponse";
  /**
   * <p>A list of details about the Security Hub member accounts.</p>
   */
  Members?: Member[];

  /**
   * <p>A list of account ID and email address pairs of the AWS accounts that couldn't be
   *          processed.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace GetMembersResponse {
  export const filterSensitiveLog = (obj: GetMembersResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMembersResponse =>
    __isa(o, "GetMembersResponse");
}

/**
 * <p>Includes details of the list of the findings that can't be imported.</p>
 */
export interface ImportFindingsError {
  __type?: "ImportFindingsError";
  /**
   * <p>The code of the error made during the <code>BatchImportFindings</code> operation.</p>
   */
  ErrorCode: string | undefined;

  /**
   * <p>The message of the error made during the <code>BatchImportFindings</code> operation.</p>
   */
  ErrorMessage: string | undefined;

  /**
   * <p>The ID of the error made during the <code>BatchImportFindings</code> operation.</p>
   */
  Id: string | undefined;
}

export namespace ImportFindingsError {
  export const filterSensitiveLog = (obj: ImportFindingsError): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImportFindingsError =>
    __isa(o, "ImportFindingsError");
}

/**
 * <p>Contains information about a Security Hub insight.</p>
 */
export interface Insight {
  __type?: "Insight";
  /**
   * <p>One or more attributes used to filter the findings included in the insight. Only
   *          findings that match the criteria defined in the filters are included in the insight.</p>
   */
  Filters: AwsSecurityFindingFilters | undefined;

  /**
   * <p>The attribute that the insight's findings are grouped by. This attribute is used as a
   *          findings aggregator for the purposes of viewing and managing multiple related findings
   *          under a single operand.</p>
   */
  GroupByAttribute: string | undefined;

  /**
   * <p>The ARN of a Security Hub insight.</p>
   */
  InsightArn: string | undefined;

  /**
   * <p>The name of a Security Hub insight.</p>
   */
  Name: string | undefined;
}

export namespace Insight {
  export const filterSensitiveLog = (obj: Insight): any => ({
    ...obj
  });
  export const isa = (o: any): o is Insight => __isa(o, "Insight");
}

/**
 * <p>The insight results returned by the <code>GetInsightResults</code> operation.</p>
 */
export interface InsightResults {
  __type?: "InsightResults";
  /**
   * <p>The attribute that the findings are grouped by for the insight whose results are
   *          returned by the <code>GetInsightResults</code> operation.</p>
   */
  GroupByAttribute: string | undefined;

  /**
   * <p>The ARN of the insight whose results are returned by the <code>GetInsightResults</code>
   *          operation.</p>
   */
  InsightArn: string | undefined;

  /**
   * <p>The list of insight result values returned by the <code>GetInsightResults</code>
   *          operation.</p>
   */
  ResultValues: InsightResultValue[] | undefined;
}

export namespace InsightResults {
  export const filterSensitiveLog = (obj: InsightResults): any => ({
    ...obj
  });
  export const isa = (o: any): o is InsightResults =>
    __isa(o, "InsightResults");
}

/**
 * <p>The insight result values returned by the <code>GetInsightResults</code>
 *          operation.</p>
 */
export interface InsightResultValue {
  __type?: "InsightResultValue";
  /**
   * <p>The number of findings returned for each <code>GroupByAttributeValue</code>.</p>
   */
  Count: number | undefined;

  /**
   * <p>The value of the attribute that the findings are grouped by for the insight whose
   *          results are returned by the <code>GetInsightResults</code> operation.</p>
   */
  GroupByAttributeValue: string | undefined;
}

export namespace InsightResultValue {
  export const filterSensitiveLog = (obj: InsightResultValue): any => ({
    ...obj
  });
  export const isa = (o: any): o is InsightResultValue =>
    __isa(o, "InsightResultValue");
}

/**
 * <p>Internal server error.</p>
 */
export interface InternalException extends __SmithyException, $MetadataBearer {
  name: "InternalException";
  $fault: "server";
  Code?: string;
  Message?: string;
}

export namespace InternalException {
  export const filterSensitiveLog = (obj: InternalException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalException =>
    __isa(o, "InternalException");
}

/**
 * <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
 */
export interface InvalidAccessException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidAccessException";
  $fault: "client";
  Code?: string;
  Message?: string;
}

export namespace InvalidAccessException {
  export const filterSensitiveLog = (obj: InvalidAccessException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidAccessException =>
    __isa(o, "InvalidAccessException");
}

/**
 * <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 */
export interface InvalidInputException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidInputException";
  $fault: "client";
  Code?: string;
  Message?: string;
}

export namespace InvalidInputException {
  export const filterSensitiveLog = (obj: InvalidInputException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidInputException =>
    __isa(o, "InvalidInputException");
}

/**
 * <p>Details about an invitation.</p>
 */
export interface Invitation {
  __type?: "Invitation";
  /**
   * <p>The account ID of the Security Hub master account that the invitation was sent from.</p>
   */
  AccountId?: string;

  /**
   * <p>The ID of the invitation sent to the member account.</p>
   */
  InvitationId?: string;

  /**
   * <p>The timestamp of when the invitation was sent.</p>
   */
  InvitedAt?: Date;

  /**
   * <p>The current status of the association between member and master accounts.</p>
   */
  MemberStatus?: string;
}

export namespace Invitation {
  export const filterSensitiveLog = (obj: Invitation): any => ({
    ...obj
  });
  export const isa = (o: any): o is Invitation => __isa(o, "Invitation");
}

export interface InviteMembersRequest {
  __type?: "InviteMembersRequest";
  /**
   * <p>A list of IDs of the AWS accounts that you want to invite to Security Hub as members.
   *       </p>
   */
  AccountIds?: string[];
}

export namespace InviteMembersRequest {
  export const filterSensitiveLog = (obj: InviteMembersRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is InviteMembersRequest =>
    __isa(o, "InviteMembersRequest");
}

export interface InviteMembersResponse {
  __type?: "InviteMembersResponse";
  /**
   * <p>A list of account ID and email address pairs of the AWS accounts that couldn't be
   *          processed. </p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace InviteMembersResponse {
  export const filterSensitiveLog = (obj: InviteMembersResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is InviteMembersResponse =>
    __isa(o, "InviteMembersResponse");
}

/**
 * <p>The IP filter for querying findings.</p>
 */
export interface IpFilter {
  __type?: "IpFilter";
  /**
   * <p>A finding's CIDR value.</p>
   */
  Cidr?: string;
}

export namespace IpFilter {
  export const filterSensitiveLog = (obj: IpFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is IpFilter => __isa(o, "IpFilter");
}

/**
 * <p>A keyword filter for querying findings.</p>
 */
export interface KeywordFilter {
  __type?: "KeywordFilter";
  /**
   * <p>A value for the keyword.</p>
   */
  Value?: string;
}

export namespace KeywordFilter {
  export const filterSensitiveLog = (obj: KeywordFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is KeywordFilter => __isa(o, "KeywordFilter");
}

/**
 * <p>The request was rejected because it attempted to create resources beyond the current AWS
 *          account limits. The error code describes the limit exceeded.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Code?: string;
  Message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj
  });
  export const isa = (o: any): o is LimitExceededException =>
    __isa(o, "LimitExceededException");
}

export interface ListEnabledProductsForImportRequest {
  __type?: "ListEnabledProductsForImportRequest";
  /**
   * <p>The maximum number of items that you want in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>Paginates results. On your first call to the <code>ListEnabledProductsForImport</code>
   *          operation, set the value of this parameter to <code>NULL</code>. For subsequent calls to
   *          the operation, fill <code>nextToken</code> in the request with the value of
   *             <code>NextToken</code> from the previous response to continue listing data.</p>
   */
  NextToken?: string;
}

export namespace ListEnabledProductsForImportRequest {
  export const filterSensitiveLog = (
    obj: ListEnabledProductsForImportRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListEnabledProductsForImportRequest =>
    __isa(o, "ListEnabledProductsForImportRequest");
}

export interface ListEnabledProductsForImportResponse {
  __type?: "ListEnabledProductsForImportResponse";
  /**
   * <p>The token that is required for pagination.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of ARNs for the resources that represent your subscriptions to products. </p>
   */
  ProductSubscriptions?: string[];
}

export namespace ListEnabledProductsForImportResponse {
  export const filterSensitiveLog = (
    obj: ListEnabledProductsForImportResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListEnabledProductsForImportResponse =>
    __isa(o, "ListEnabledProductsForImportResponse");
}

export interface ListInvitationsRequest {
  __type?: "ListInvitationsRequest";
  /**
   * <p>The maximum number of items that you want in the response. </p>
   */
  MaxResults?: number;

  /**
   * <p>Paginates results. On your first call to the <code>ListInvitations</code> operation, set
   *          the value of this parameter to <code>NULL</code>. For subsequent calls to the operation,
   *          fill <code>nextToken</code> in the request with the value of <code>NextToken</code> from
   *          the previous response to continue listing data. </p>
   */
  NextToken?: string;
}

export namespace ListInvitationsRequest {
  export const filterSensitiveLog = (obj: ListInvitationsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListInvitationsRequest =>
    __isa(o, "ListInvitationsRequest");
}

export interface ListInvitationsResponse {
  __type?: "ListInvitationsResponse";
  /**
   * <p>The details of the invitations returned by the operation.</p>
   */
  Invitations?: Invitation[];

  /**
   * <p>The token that is required for pagination.</p>
   */
  NextToken?: string;
}

export namespace ListInvitationsResponse {
  export const filterSensitiveLog = (obj: ListInvitationsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListInvitationsResponse =>
    __isa(o, "ListInvitationsResponse");
}

export interface ListMembersRequest {
  __type?: "ListMembersRequest";
  /**
   * <p>The maximum number of items that you want in the response. </p>
   */
  MaxResults?: number;

  /**
   * <p>Paginates results. Set the value of this parameter to <code>NULL</code> on your first
   *          call to the <code>ListMembers</code> operation. For subsequent calls to the operation, fill
   *             <code>nextToken</code> in the request with the value of <code>nextToken</code> from the
   *          previous response to continue listing data. </p>
   */
  NextToken?: string;

  /**
   * <p>Specifies which member accounts the response includes based on their relationship status
   *          with the master account. The default value is <code>TRUE</code>. If
   *             <code>onlyAssociated</code> is set to <code>TRUE</code>, the response includes member
   *          accounts whose relationship status with the master is set to <code>ENABLED</code> or
   *             <code>DISABLED</code>. If <code>onlyAssociated</code> is set to <code>FALSE</code>, the
   *          response includes all existing member accounts. </p>
   */
  OnlyAssociated?: boolean;
}

export namespace ListMembersRequest {
  export const filterSensitiveLog = (obj: ListMembersRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListMembersRequest =>
    __isa(o, "ListMembersRequest");
}

export interface ListMembersResponse {
  __type?: "ListMembersResponse";
  /**
   * <p>Member details returned by the operation.</p>
   */
  Members?: Member[];

  /**
   * <p>The token that is required for pagination.</p>
   */
  NextToken?: string;
}

export namespace ListMembersResponse {
  export const filterSensitiveLog = (obj: ListMembersResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListMembersResponse =>
    __isa(o, "ListMembersResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The ARN of the resource to retrieve tags for.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceRequest =>
    __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The tags associated with a resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (
    obj: ListTagsForResourceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceResponse =>
    __isa(o, "ListTagsForResourceResponse");
}

/**
 * <p>Information about the state of the load balancer.</p>
 */
export interface LoadBalancerState {
  __type?: "LoadBalancerState";
  /**
   * <p>The state code. The initial state of the load balancer is provisioning. After the load balancer is fully set up and ready to route traffic, its state is active. If the load balancer could not be set up, its state is failed. </p>
   */
  Code?: string;

  /**
   * <p>A description of the state.</p>
   */
  Reason?: string;
}

export namespace LoadBalancerState {
  export const filterSensitiveLog = (obj: LoadBalancerState): any => ({
    ...obj
  });
  export const isa = (o: any): o is LoadBalancerState =>
    __isa(o, "LoadBalancerState");
}

/**
 * <p>A list of malware related to a finding.</p>
 */
export interface Malware {
  __type?: "Malware";
  /**
   * <p>The name of the malware that was observed.</p>
   */
  Name: string | undefined;

  /**
   * <p>The file system path of the malware that was observed.</p>
   */
  Path?: string;

  /**
   * <p>The state of the malware that was observed.</p>
   */
  State?: MalwareState | string;

  /**
   * <p>The type of the malware that was observed.</p>
   */
  Type?: MalwareType | string;
}

export namespace Malware {
  export const filterSensitiveLog = (obj: Malware): any => ({
    ...obj
  });
  export const isa = (o: any): o is Malware => __isa(o, "Malware");
}

export enum MalwareState {
  OBSERVED = "OBSERVED",
  REMOVAL_FAILED = "REMOVAL_FAILED",
  REMOVED = "REMOVED"
}

export enum MalwareType {
  ADWARE = "ADWARE",
  BLENDED_THREAT = "BLENDED_THREAT",
  BOTNET_AGENT = "BOTNET_AGENT",
  COIN_MINER = "COIN_MINER",
  EXPLOIT_KIT = "EXPLOIT_KIT",
  KEYLOGGER = "KEYLOGGER",
  MACRO = "MACRO",
  POTENTIALLY_UNWANTED = "POTENTIALLY_UNWANTED",
  RANSOMWARE = "RANSOMWARE",
  REMOTE_ACCESS = "REMOTE_ACCESS",
  ROOTKIT = "ROOTKIT",
  SPYWARE = "SPYWARE",
  TROJAN = "TROJAN",
  VIRUS = "VIRUS",
  WORM = "WORM"
}

/**
 * <p>The map filter for querying findings.</p>
 */
export interface MapFilter {
  __type?: "MapFilter";
  /**
   * <p>The condition to apply to a key value when querying for findings with a map
   *          filter.</p>
   */
  Comparison?: MapFilterComparison | string;

  /**
   * <p>The key of the map filter.</p>
   */
  Key?: string;

  /**
   * <p>The value for the key in the map filter.</p>
   */
  Value?: string;
}

export namespace MapFilter {
  export const filterSensitiveLog = (obj: MapFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is MapFilter => __isa(o, "MapFilter");
}

export enum MapFilterComparison {
  EQUALS = "EQUALS"
}

/**
 * <p>The details about a member account.</p>
 */
export interface Member {
  __type?: "Member";
  /**
   * <p>The AWS account ID of the member account.</p>
   */
  AccountId?: string;

  /**
   * <p>The email address of the member account.</p>
   */
  Email?: string;

  /**
   * <p>A timestamp for the date and time when the invitation was sent to the member
   *          account.</p>
   */
  InvitedAt?: Date;

  /**
   * <p>The AWS account ID of the Security Hub master account associated with this member account.</p>
   */
  MasterId?: string;

  /**
   * <p>The status of the relationship between the member account and its master account.
   *       </p>
   */
  MemberStatus?: string;

  /**
   * <p>The timestamp for the date and time when the member account was updated.</p>
   */
  UpdatedAt?: Date;
}

export namespace Member {
  export const filterSensitiveLog = (obj: Member): any => ({
    ...obj
  });
  export const isa = (o: any): o is Member => __isa(o, "Member");
}

/**
 * <p>The details of network-related information about a finding.</p>
 */
export interface Network {
  __type?: "Network";
  /**
   * <p>The destination domain of network-related information about a finding.</p>
   */
  DestinationDomain?: string;

  /**
   * <p>The destination IPv4 address of network-related information about a finding.</p>
   */
  DestinationIpV4?: string;

  /**
   * <p>The destination IPv6 address of network-related information about a finding.</p>
   */
  DestinationIpV6?: string;

  /**
   * <p>The destination port of network-related information about a finding.</p>
   */
  DestinationPort?: number;

  /**
   * <p>The direction of network traffic associated with a finding.</p>
   */
  Direction?: NetworkDirection | string;

  /**
   * <p>The protocol of network-related information about a finding.</p>
   */
  Protocol?: string;

  /**
   * <p>The source domain of network-related information about a finding.</p>
   */
  SourceDomain?: string;

  /**
   * <p>The source IPv4 address of network-related information about a finding.</p>
   */
  SourceIpV4?: string;

  /**
   * <p>The source IPv6 address of network-related information about a finding.</p>
   */
  SourceIpV6?: string;

  /**
   * <p>The source media access control (MAC) address of network-related information about a
   *          finding.</p>
   */
  SourceMac?: string;

  /**
   * <p>The source port of network-related information about a finding.</p>
   */
  SourcePort?: number;
}

export namespace Network {
  export const filterSensitiveLog = (obj: Network): any => ({
    ...obj
  });
  export const isa = (o: any): o is Network => __isa(o, "Network");
}

export enum NetworkDirection {
  IN = "IN",
  OUT = "OUT"
}

/**
 * <p>A user-defined note added to a finding.</p>
 */
export interface Note {
  __type?: "Note";
  /**
   * <p>The text of a note.</p>
   */
  Text: string | undefined;

  /**
   * <p>The timestamp of when the note was updated.</p>
   */
  UpdatedAt: string | undefined;

  /**
   * <p>The principal that created a note.</p>
   */
  UpdatedBy: string | undefined;
}

export namespace Note {
  export const filterSensitiveLog = (obj: Note): any => ({
    ...obj
  });
  export const isa = (o: any): o is Note => __isa(o, "Note");
}

/**
 * <p>The updated note.</p>
 */
export interface NoteUpdate {
  __type?: "NoteUpdate";
  /**
   * <p>The updated note text.</p>
   */
  Text: string | undefined;

  /**
   * <p>The principal that updated the note.</p>
   */
  UpdatedBy: string | undefined;
}

export namespace NoteUpdate {
  export const filterSensitiveLog = (obj: NoteUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is NoteUpdate => __isa(o, "NoteUpdate");
}

/**
 * <p>A number filter for querying findings.</p>
 */
export interface NumberFilter {
  __type?: "NumberFilter";
  /**
   * <p>The equal-to condition to be applied to a single field when querying for
   *          findings.</p>
   */
  Eq?: number;

  /**
   * <p>The greater-than-equal condition to be applied to a single field when querying for
   *          findings. </p>
   */
  Gte?: number;

  /**
   * <p>The less-than-equal condition to be applied to a single field when querying for
   *          findings. </p>
   */
  Lte?: number;
}

export namespace NumberFilter {
  export const filterSensitiveLog = (obj: NumberFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is NumberFilter => __isa(o, "NumberFilter");
}

export enum Partition {
  AWS = "aws",
  AWS_CN = "aws-cn",
  AWS_US_GOV = "aws-us-gov"
}

/**
 * <p>The details of process-related information about a finding.</p>
 */
export interface ProcessDetails {
  __type?: "ProcessDetails";
  /**
   * <p>The date/time that the process was launched.</p>
   */
  LaunchedAt?: string;

  /**
   * <p>The name of the process.</p>
   */
  Name?: string;

  /**
   * <p>The parent process ID.</p>
   */
  ParentPid?: number;

  /**
   * <p>The path to the process executable.</p>
   */
  Path?: string;

  /**
   * <p>The process ID.</p>
   */
  Pid?: number;

  /**
   * <p>The date and time when the process was terminated.</p>
   */
  TerminatedAt?: string;
}

export namespace ProcessDetails {
  export const filterSensitiveLog = (obj: ProcessDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProcessDetails =>
    __isa(o, "ProcessDetails");
}

/**
 * <p>Contains details about a product.</p>
 */
export interface Product {
  __type?: "Product";
  /**
   * <p>The URL used to activate the product.</p>
   */
  ActivationUrl?: string;

  /**
   * <p>The categories assigned to the product.</p>
   */
  Categories?: string[];

  /**
   * <p>The name of the company that provides the product.</p>
   */
  CompanyName?: string;

  /**
   * <p>A description of the product.</p>
   */
  Description?: string;

  /**
   * <p>The URL for the page that contains more information about the product.</p>
   */
  MarketplaceUrl?: string;

  /**
   * <p>The ARN assigned to the product.</p>
   */
  ProductArn: string | undefined;

  /**
   * <p>The name of the product.</p>
   */
  ProductName?: string;

  /**
   * <p>The resource policy associated with the product.</p>
   */
  ProductSubscriptionResourcePolicy?: string;
}

export namespace Product {
  export const filterSensitiveLog = (obj: Product): any => ({
    ...obj
  });
  export const isa = (o: any): o is Product => __isa(o, "Product");
}

/**
 * <p>A recommendation on how to remediate the issue identified in a finding.</p>
 */
export interface Recommendation {
  __type?: "Recommendation";
  /**
   * <p>Describes the recommended steps to take to remediate an issue identified in a finding.</p>
   */
  Text?: string;

  /**
   * <p>A URL to a page or site that contains information about how to remediate a finding.</p>
   */
  Url?: string;
}

export namespace Recommendation {
  export const filterSensitiveLog = (obj: Recommendation): any => ({
    ...obj
  });
  export const isa = (o: any): o is Recommendation =>
    __isa(o, "Recommendation");
}

export enum RecordState {
  ACTIVE = "ACTIVE",
  ARCHIVED = "ARCHIVED"
}

/**
 * <p>Details about a related finding.</p>
 */
export interface RelatedFinding {
  __type?: "RelatedFinding";
  /**
   * <p>The product-generated identifier for a related finding.</p>
   */
  Id: string | undefined;

  /**
   * <p>The ARN of the product that generated a related finding.</p>
   */
  ProductArn: string | undefined;
}

export namespace RelatedFinding {
  export const filterSensitiveLog = (obj: RelatedFinding): any => ({
    ...obj
  });
  export const isa = (o: any): o is RelatedFinding =>
    __isa(o, "RelatedFinding");
}

/**
 * <p>Details about the remediation steps for a finding.</p>
 */
export interface Remediation {
  __type?: "Remediation";
  /**
   * <p>A recommendation on the steps to take to remediate the issue identified by a finding.</p>
   */
  Recommendation?: Recommendation;
}

export namespace Remediation {
  export const filterSensitiveLog = (obj: Remediation): any => ({
    ...obj
  });
  export const isa = (o: any): o is Remediation => __isa(o, "Remediation");
}

/**
 * <p>A resource related to a finding.</p>
 */
export interface Resource {
  __type?: "Resource";
  /**
   * <p>Additional details about the resource related to a finding.</p>
   */
  Details?: ResourceDetails;

  /**
   * <p>The canonical identifier for the given resource type.</p>
   */
  Id: string | undefined;

  /**
   * <p>The canonical AWS partition name that the Region is assigned to.</p>
   */
  Partition?: Partition | string;

  /**
   * <p>The canonical AWS external Region name where this resource is located.</p>
   */
  Region?: string;

  /**
   * <p>A list of AWS tags associated with a resource at the time the finding was
   *          processed.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The type of the resource that details are provided for.</p>
   */
  Type: string | undefined;
}

export namespace Resource {
  export const filterSensitiveLog = (obj: Resource): any => ({
    ...obj
  });
  export const isa = (o: any): o is Resource => __isa(o, "Resource");
}

/**
 * <p>The resource specified in the request conflicts with an existing resource.</p>
 */
export interface ResourceConflictException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceConflictException";
  $fault: "client";
  Code?: string;
  Message?: string;
}

export namespace ResourceConflictException {
  export const filterSensitiveLog = (obj: ResourceConflictException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceConflictException =>
    __isa(o, "ResourceConflictException");
}

/**
 * <p>Additional details about a resource related to a finding.</p>
 */
export interface ResourceDetails {
  __type?: "ResourceDetails";
  /**
   * <p>Details about a CloudFront distribution.</p>
   */
  AwsCloudFrontDistribution?: AwsCloudFrontDistributionDetails;

  /**
   * <p>Details about an Amazon EC2 instance related to a finding.</p>
   */
  AwsEc2Instance?: AwsEc2InstanceDetails;

  /**
   * <p>Details about a load balancer.</p>
   */
  AwsElbv2LoadBalancer?: AwsElbv2LoadBalancerDetails;

  /**
   * <p>Details about an IAM access key related to a finding.</p>
   */
  AwsIamAccessKey?: AwsIamAccessKeyDetails;

  /**
   * <p>Details about an IAM role.</p>
   */
  AwsIamRole?: AwsIamRoleDetails;

  /**
   * <p>Details about a KMS key.</p>
   */
  AwsKmsKey?: AwsKmsKeyDetails;

  /**
   * <p>Details about a Lambda function.</p>
   */
  AwsLambdaFunction?: AwsLambdaFunctionDetails;

  /**
   * <p>Details about an Amazon S3 Bucket related to a finding.</p>
   */
  AwsS3Bucket?: AwsS3BucketDetails;

  /**
   * <p>Details about an SNS topic.</p>
   */
  AwsSnsTopic?: AwsSnsTopicDetails;

  /**
   * <p>Details about an SQS queue.</p>
   */
  AwsSqsQueue?: AwsSqsQueueDetails;

  /**
   * <p>Details about a container resource related to a finding.</p>
   */
  Container?: ContainerDetails;

  /**
   * <p>Details about a resource that doesn't have a specific type
   *          defined.</p>
   */
  Other?: { [key: string]: string };
}

export namespace ResourceDetails {
  export const filterSensitiveLog = (obj: ResourceDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceDetails =>
    __isa(o, "ResourceDetails");
}

/**
 * <p>The request was rejected because we can't find the specified resource.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Code?: string;
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceNotFoundException =>
    __isa(o, "ResourceNotFoundException");
}

/**
 * <p>Details about the account that wasn't processed.</p>
 */
export interface Result {
  __type?: "Result";
  /**
   * <p>An AWS account ID of the account that wasn't be processed.</p>
   */
  AccountId?: string;

  /**
   * <p>The reason that the account wasn't be processed.</p>
   */
  ProcessingResult?: string;
}

export namespace Result {
  export const filterSensitiveLog = (obj: Result): any => ({
    ...obj
  });
  export const isa = (o: any): o is Result => __isa(o, "Result");
}

/**
 * <p>The severity of the finding.</p>
 */
export interface Severity {
  __type?: "Severity";
  /**
   * <p>The normalized severity of a finding.</p>
   */
  Normalized: number | undefined;

  /**
   * <p>The native severity as defined by the AWS service or integrated partner product that
   *          generated the finding.</p>
   */
  Product?: number;
}

export namespace Severity {
  export const filterSensitiveLog = (obj: Severity): any => ({
    ...obj
  });
  export const isa = (o: any): o is Severity => __isa(o, "Severity");
}

export enum SeverityRating {
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM"
}

/**
 * <p>A collection of finding attributes used to sort findings.</p>
 */
export interface SortCriterion {
  __type?: "SortCriterion";
  /**
   * <p>The finding attribute used to sort findings.</p>
   */
  Field?: string;

  /**
   * <p>The order used to sort findings.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace SortCriterion {
  export const filterSensitiveLog = (obj: SortCriterion): any => ({
    ...obj
  });
  export const isa = (o: any): o is SortCriterion => __isa(o, "SortCriterion");
}

export enum SortOrder {
  ASCENDING = "asc",
  DESCENDING = "desc"
}

/**
 * <p>Details for an individual compliance standard control.</p>
 */
export interface StandardsControl {
  __type?: "StandardsControl";
  /**
   * <p>The identifier of the compliance standard control.</p>
   */
  ControlId?: string;

  /**
   * <p>The current status of the compliance standard control. Indicates whether the control is
   *          enabled or disabled. Security Hub does not check against disabled controls.</p>
   */
  ControlStatus?: ControlStatus | string;

  /**
   * <p>The date and time that the status of the compliance standard control was most recently
   *          updated.</p>
   */
  ControlStatusUpdatedAt?: Date;

  /**
   * <p>The longer description of the compliance standard control. Provides information about
   *          what the control is checking for.</p>
   */
  Description?: string;

  /**
   * <p>The reason provided for the most recent change in status for the control.</p>
   */
  DisabledReason?: string;

  /**
   * <p>A link to remediation information for the control in the Security Hub user documentation</p>
   */
  RemediationUrl?: string;

  /**
   * <p>The severity of findings generated from this compliance standard control.</p>
   *          <p>The finding severity is based on an assessment of how easy it would be to compromise AWS
   *          resources if the compliance issue is detected.</p>
   */
  SeverityRating?: SeverityRating | string;

  /**
   * <p>The ARN of the compliance standard control.</p>
   */
  StandardsControlArn?: string;

  /**
   * <p>The title of the compliance standard control.</p>
   */
  Title?: string;
}

export namespace StandardsControl {
  export const filterSensitiveLog = (obj: StandardsControl): any => ({
    ...obj
  });
  export const isa = (o: any): o is StandardsControl =>
    __isa(o, "StandardsControl");
}

export enum StandardsStatus {
  DELETING = "DELETING",
  FAILED = "FAILED",
  INCOMPLETE = "INCOMPLETE",
  PENDING = "PENDING",
  READY = "READY"
}

/**
 * <p>A resource that represents your subscription to a supported standard.</p>
 */
export interface StandardsSubscription {
  __type?: "StandardsSubscription";
  /**
   * <p>The ARN of a standard.</p>
   *          <p>In this release, Security Hub supports only the CIS AWS Foundations standard, which uses the following ARN:
   *          <code>arn:aws:securityhub:::ruleset/cis-aws-foundations-benchmark/v/1.2.0.</code>
   *          </p>
   */
  StandardsArn: string | undefined;

  /**
   * <p>A key-value pair of input for the standard.</p>
   */
  StandardsInput: { [key: string]: string } | undefined;

  /**
   * <p>The status of the standards subscription.</p>
   */
  StandardsStatus: StandardsStatus | string | undefined;

  /**
   * <p>The ARN of a resource that represents your subscription to a supported standard.</p>
   */
  StandardsSubscriptionArn: string | undefined;
}

export namespace StandardsSubscription {
  export const filterSensitiveLog = (obj: StandardsSubscription): any => ({
    ...obj
  });
  export const isa = (o: any): o is StandardsSubscription =>
    __isa(o, "StandardsSubscription");
}

/**
 * <p>The standard that you want to enable.</p>
 */
export interface StandardsSubscriptionRequest {
  __type?: "StandardsSubscriptionRequest";
  /**
   * <p>The ARN of the standard that you want to enable.</p>
   *          <important>
   *             <p>In this release, Security Hub only supports the CIS AWS Foundations standard. </p>
   *             <p>Its ARN is
   *                <code>arn:aws:securityhub:::ruleset/cis-aws-foundations-benchmark/v/1.2.0</code>.</p>
   *          </important>
   */
  StandardsArn: string | undefined;

  /**
   * <p>A key-value pair of input for the standard.</p>
   */
  StandardsInput?: { [key: string]: string };
}

export namespace StandardsSubscriptionRequest {
  export const filterSensitiveLog = (
    obj: StandardsSubscriptionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StandardsSubscriptionRequest =>
    __isa(o, "StandardsSubscriptionRequest");
}

/**
 * <p>A string filter for querying findings.</p>
 */
export interface StringFilter {
  __type?: "StringFilter";
  /**
   * <p>The condition to be applied to a string value when querying for findings. </p>
   */
  Comparison?: StringFilterComparison | string;

  /**
   * <p>The string filter value.</p>
   */
  Value?: string;
}

export namespace StringFilter {
  export const filterSensitiveLog = (obj: StringFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is StringFilter => __isa(o, "StringFilter");
}

export enum StringFilterComparison {
  EQUALS = "EQUALS",
  PREFIX = "PREFIX"
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The ARN of the resource to apply the tags to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource.</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagResourceRequest =>
    __isa(o, "TagResourceRequest");
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagResourceResponse =>
    __isa(o, "TagResourceResponse");
}

/**
 * <p>Details about the threat intel related to a finding.</p>
 */
export interface ThreatIntelIndicator {
  __type?: "ThreatIntelIndicator";
  /**
   * <p>The category of a threat intel indicator.</p>
   */
  Category?: ThreatIntelIndicatorCategory | string;

  /**
   * <p>The date and time when the most recent instance of a threat intel indicator was
   *          observed.</p>
   */
  LastObservedAt?: string;

  /**
   * <p>The source of the threat intel indicator.</p>
   */
  Source?: string;

  /**
   * <p>The URL to the page or site where you can get more information about the threat intel
   *          indicator.</p>
   */
  SourceUrl?: string;

  /**
   * <p>The type of a threat intel indicator.</p>
   */
  Type?: ThreatIntelIndicatorType | string;

  /**
   * <p>The value of a threat intel indicator.</p>
   */
  Value?: string;
}

export namespace ThreatIntelIndicator {
  export const filterSensitiveLog = (obj: ThreatIntelIndicator): any => ({
    ...obj
  });
  export const isa = (o: any): o is ThreatIntelIndicator =>
    __isa(o, "ThreatIntelIndicator");
}

export enum ThreatIntelIndicatorCategory {
  BACKDOOR = "BACKDOOR",
  CARD_STEALER = "CARD_STEALER",
  COMMAND_AND_CONTROL = "COMMAND_AND_CONTROL",
  DROP_SITE = "DROP_SITE",
  EXPLOIT_SITE = "EXPLOIT_SITE",
  KEYLOGGER = "KEYLOGGER"
}

export enum ThreatIntelIndicatorType {
  DOMAIN = "DOMAIN",
  EMAIL_ADDRESS = "EMAIL_ADDRESS",
  HASH_MD5 = "HASH_MD5",
  HASH_SHA1 = "HASH_SHA1",
  HASH_SHA256 = "HASH_SHA256",
  HASH_SHA512 = "HASH_SHA512",
  IPV4_ADDRESS = "IPV4_ADDRESS",
  IPV6_ADDRESS = "IPV6_ADDRESS",
  MUTEX = "MUTEX",
  PROCESS = "PROCESS",
  URL = "URL"
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The ARN of the resource to remove the tags from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys associated with the tags to remove from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceRequest =>
    __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceResponse =>
    __isa(o, "UntagResourceResponse");
}

export interface UpdateActionTargetRequest {
  __type?: "UpdateActionTargetRequest";
  /**
   * <p>The ARN of the custom action target to update.</p>
   */
  ActionTargetArn: string | undefined;

  /**
   * <p>The updated description for the custom action target.</p>
   */
  Description?: string;

  /**
   * <p>The updated name of the custom action target.</p>
   */
  Name?: string;
}

export namespace UpdateActionTargetRequest {
  export const filterSensitiveLog = (obj: UpdateActionTargetRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateActionTargetRequest =>
    __isa(o, "UpdateActionTargetRequest");
}

export interface UpdateActionTargetResponse {
  __type?: "UpdateActionTargetResponse";
}

export namespace UpdateActionTargetResponse {
  export const filterSensitiveLog = (obj: UpdateActionTargetResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateActionTargetResponse =>
    __isa(o, "UpdateActionTargetResponse");
}

export interface UpdateFindingsRequest {
  __type?: "UpdateFindingsRequest";
  /**
   * <p>A collection of attributes that specify which findings you want to update.</p>
   */
  Filters: AwsSecurityFindingFilters | undefined;

  /**
   * <p>The updated note for the finding.</p>
   */
  Note?: NoteUpdate;

  /**
   * <p>The updated record state for the finding.</p>
   */
  RecordState?: RecordState | string;
}

export namespace UpdateFindingsRequest {
  export const filterSensitiveLog = (obj: UpdateFindingsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateFindingsRequest =>
    __isa(o, "UpdateFindingsRequest");
}

export interface UpdateFindingsResponse {
  __type?: "UpdateFindingsResponse";
}

export namespace UpdateFindingsResponse {
  export const filterSensitiveLog = (obj: UpdateFindingsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateFindingsResponse =>
    __isa(o, "UpdateFindingsResponse");
}

export interface UpdateInsightRequest {
  __type?: "UpdateInsightRequest";
  /**
   * <p>The updated filters that define this insight.</p>
   */
  Filters?: AwsSecurityFindingFilters;

  /**
   * <p>The updated <code>GroupBy</code> attribute that defines this insight.</p>
   */
  GroupByAttribute?: string;

  /**
   * <p>The ARN of the insight that you want to update.</p>
   */
  InsightArn: string | undefined;

  /**
   * <p>The updated name for the insight.</p>
   */
  Name?: string;
}

export namespace UpdateInsightRequest {
  export const filterSensitiveLog = (obj: UpdateInsightRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateInsightRequest =>
    __isa(o, "UpdateInsightRequest");
}

export interface UpdateInsightResponse {
  __type?: "UpdateInsightResponse";
}

export namespace UpdateInsightResponse {
  export const filterSensitiveLog = (obj: UpdateInsightResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateInsightResponse =>
    __isa(o, "UpdateInsightResponse");
}

export interface UpdateStandardsControlRequest {
  __type?: "UpdateStandardsControlRequest";
  /**
   * <p>The updated status of the compliance standard control.</p>
   */
  ControlStatus?: ControlStatus | string;

  /**
   * <p>A description of the reason why you are disabling a compliance standard control.</p>
   */
  DisabledReason?: string;

  /**
   * <p>The ARN of the compliance standard control to enable or disable.</p>
   */
  StandardsControlArn: string | undefined;
}

export namespace UpdateStandardsControlRequest {
  export const filterSensitiveLog = (
    obj: UpdateStandardsControlRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateStandardsControlRequest =>
    __isa(o, "UpdateStandardsControlRequest");
}

export interface UpdateStandardsControlResponse {
  __type?: "UpdateStandardsControlResponse";
}

export namespace UpdateStandardsControlResponse {
  export const filterSensitiveLog = (
    obj: UpdateStandardsControlResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateStandardsControlResponse =>
    __isa(o, "UpdateStandardsControlResponse");
}

export enum VerificationState {
  BENIGN_POSITIVE = "BENIGN_POSITIVE",
  FALSE_POSITIVE = "FALSE_POSITIVE",
  TRUE_POSITIVE = "TRUE_POSITIVE",
  UNKNOWN = "UNKNOWN"
}

export enum WorkflowState {
  ASSIGNED = "ASSIGNED",
  DEFERRED = "DEFERRED",
  IN_PROGRESS = "IN_PROGRESS",
  NEW = "NEW",
  RESOLVED = "RESOLVED"
}
