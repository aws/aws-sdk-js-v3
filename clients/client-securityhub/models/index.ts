import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AcceptInvitationRequest {
  __type?: "AcceptInvitationRequest";
  /**
   * <p>The account ID of the Security Hub master account that sent the invitation.</p>
   */
  MasterId: string | undefined;

  /**
   * <p>The ID of the invitation sent from the Security Hub master account.</p>
   */
  InvitationId: string | undefined;
}

export namespace AcceptInvitationRequest {
  export const filterSensitiveLog = (obj: AcceptInvitationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AcceptInvitationRequest => __isa(o, "AcceptInvitationRequest");
}

export interface AcceptInvitationResponse {
  __type?: "AcceptInvitationResponse";
}

export namespace AcceptInvitationResponse {
  export const filterSensitiveLog = (obj: AcceptInvitationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AcceptInvitationResponse => __isa(o, "AcceptInvitationResponse");
}

/**
 * <p>You don't have permission to perform the action specified in the request.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Code?: string;
  Message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AccessDeniedException => __isa(o, "AccessDeniedException");
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
    ...obj,
  });
  export const isa = (o: any): o is AccountDetails => __isa(o, "AccountDetails");
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
    ...obj,
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
    ...obj,
  });
  export const isa = (o: any): o is AvailabilityZone => __isa(o, "AvailabilityZone");
}

/**
 * <p>Provides details about an auto scaling group.</p>
 */
export interface AwsAutoScalingAutoScalingGroupDetails {
  __type?: "AwsAutoScalingAutoScalingGroupDetails";
  /**
   * <p>The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before it checks the
   *          health status of an EC2 instance that has come into service.</p>
   */
  HealthCheckGracePeriod?: number;

  /**
   * <p>The service to use for the health checks.</p>
   */
  HealthCheckType?: string;

  /**
   * <p>The list of load balancers associated with the group.</p>
   */
  LoadBalancerNames?: string[];

  /**
   * <p>The datetime when the auto scaling group was created.</p>
   */
  CreatedTime?: string;

  /**
   * <p>The name of the launch configuration.</p>
   */
  LaunchConfigurationName?: string;
}

export namespace AwsAutoScalingAutoScalingGroupDetails {
  export const filterSensitiveLog = (obj: AwsAutoScalingAutoScalingGroupDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsAutoScalingAutoScalingGroupDetails =>
    __isa(o, "AwsAutoScalingAutoScalingGroupDetails");
}

/**
 * <p>A distribution configuration.</p>
 */
export interface AwsCloudFrontDistributionDetails {
  __type?: "AwsCloudFrontDistributionDetails";
  /**
   * <p>The date and time that the distribution was last modified.</p>
   */
  LastModifiedTime?: string;

  /**
   * <p>A unique identifier that specifies the AWS WAF web ACL, if any, to associate with this distribution.</p>
   */
  WebAclId?: string;

  /**
   * <p>The domain name corresponding to the distribution.</p>
   */
  DomainName?: string;

  /**
   * <p>The entity tag is a hash of the object.</p>
   */
  ETag?: string;

  /**
   * <p>Indicates the current status of the distribution.</p>
   */
  Status?: string;

  /**
   * <p>A complex type that controls whether access logs are written for the distribution.</p>
   */
  Logging?: AwsCloudFrontDistributionLogging;

  /**
   * <p>A complex type that contains information about origins for this distribution.</p>
   */
  Origins?: AwsCloudFrontDistributionOrigins;
}

export namespace AwsCloudFrontDistributionDetails {
  export const filterSensitiveLog = (obj: AwsCloudFrontDistributionDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsCloudFrontDistributionDetails => __isa(o, "AwsCloudFrontDistributionDetails");
}

/**
 * <p>A complex type that controls whether access logs are written for the distribution.</p>
 */
export interface AwsCloudFrontDistributionLogging {
  __type?: "AwsCloudFrontDistributionLogging";
  /**
   * <p>With this field, you can enable or disable the selected distribution.</p>
   */
  Enabled?: boolean;

  /**
   * <p>An optional string that you want CloudFront to use as a prefix to the access log
   *          filenames for this distribution.</p>
   */
  Prefix?: string;

  /**
   * <p>Specifies whether you want CloudFront to include cookies in access logs.</p>
   */
  IncludeCookies?: boolean;

  /**
   * <p>The Amazon S3 bucket to store the access logs in.</p>
   */
  Bucket?: string;
}

export namespace AwsCloudFrontDistributionLogging {
  export const filterSensitiveLog = (obj: AwsCloudFrontDistributionLogging): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsCloudFrontDistributionLogging => __isa(o, "AwsCloudFrontDistributionLogging");
}

/**
 * <p>A complex type that describes the Amazon S3 bucket, HTTP server (for example, a web
 *          server), Amazon Elemental MediaStore, or other server from which CloudFront gets your
 *          files.</p>
 */
export interface AwsCloudFrontDistributionOriginItem {
  __type?: "AwsCloudFrontDistributionOriginItem";
  /**
   * <p>A unique identifier for the origin or origin group.</p>
   */
  Id?: string;

  /**
   * <p>Amazon S3 origins: The DNS name of the Amazon S3 bucket from which you want CloudFront to get objects for this origin.</p>
   */
  DomainName?: string;

  /**
   * <p>An optional element that causes CloudFront to request your content from a directory in your Amazon S3 bucket or your custom origin.</p>
   */
  OriginPath?: string;
}

export namespace AwsCloudFrontDistributionOriginItem {
  export const filterSensitiveLog = (obj: AwsCloudFrontDistributionOriginItem): any => ({
    ...obj,
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
  export const filterSensitiveLog = (obj: AwsCloudFrontDistributionOrigins): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsCloudFrontDistributionOrigins => __isa(o, "AwsCloudFrontDistributionOrigins");
}

/**
 * <p>Information about an AWS CodeBuild project.</p>
 */
export interface AwsCodeBuildProjectDetails {
  __type?: "AwsCodeBuildProjectDetails";
  /**
   * <p>Information about the build environment for this build project.</p>
   */
  Environment?: AwsCodeBuildProjectEnvironment;

  /**
   * <p>The name of the build project.</p>
   */
  Name?: string;

  /**
   * <p>Information about the build input source code for this build project.</p>
   */
  Source?: AwsCodeBuildProjectSource;

  /**
   * <p>The ARN of the IAM role that enables AWS CodeBuild to interact with dependent AWS
   *          services on behalf of the AWS account.</p>
   */
  ServiceRole?: string;

  /**
   * <p>The AWS Key Management Service (AWS KMS) customer master key (CMK) used to encrypt the
   *          build output artifacts.</p>
   *          <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the
   *          CMK alias (using the format alias/alias-name). </p>
   */
  EncryptionKey?: string;

  /**
   * <p>Information about the VPC configuration that AWS CodeBuild accesses.</p>
   */
  VpcConfig?: AwsCodeBuildProjectVpcConfig;
}

export namespace AwsCodeBuildProjectDetails {
  export const filterSensitiveLog = (obj: AwsCodeBuildProjectDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsCodeBuildProjectDetails => __isa(o, "AwsCodeBuildProjectDetails");
}

/**
 * <p>Information about the build environment for this build project.</p>
 */
export interface AwsCodeBuildProjectEnvironment {
  __type?: "AwsCodeBuildProjectEnvironment";
  /**
   * <p>The certificate to use with this build project.</p>
   */
  Certificate?: string;

  /**
   * <p>The credentials for access to a private registry.</p>
   */
  RegistryCredential?: AwsCodeBuildProjectEnvironmentRegistryCredential;

  /**
   * <p>The type of credentials AWS CodeBuild uses to pull images in your build.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CODEBUILD</code> specifies that AWS CodeBuild uses its own credentials. This
   *                requires that you modify your ECR repository policy to trust the AWS CodeBuild
   *                service principal.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SERVICE_ROLE</code> specifies that AWS CodeBuild uses your build project's
   *                service role.</p>
   *             </li>
   *          </ul>
   *          <p>When you use a cross-account or private registry image, you must use
   *             <code>SERVICE_ROLE</code> credentials. When you use an AWS CodeBuild curated image, you
   *          must use <code>CODEBUILD</code> credentials.</p>
   */
  ImagePullCredentialsType?: string;

  /**
   * <p>The type of build environment to use for related builds.</p>
   *          <p>The environment type <code>ARM_CONTAINER</code> is available only in Regions US East (N.
   *          Virginia), US East (Ohio), US West (Oregon), Europe (Ireland), Asia Pacific (Mumbai), Asia
   *          Pacific (Tokyo), Asia Pacific (Sydney), and Europe (Frankfurt).</p>
   *          <p>The environment type <code>LINUX_CONTAINER</code> with compute type
   *          build.general1.2xlarge is available only in Regions US East (N. Virginia), US East (N.
   *          Virginia), US West (Oregon), Canada (Central), Europe (Ireland), Europe (London), Europe
   *          (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Seoul), Asia Pacific (Singapore), Asia
   *          Pacific (Sydney), China (Beijing), and China (Ningxia).</p>
   *          <p>The environment type <code>LINUX_GPU_CONTAINER</code> is available only in Regions US
   *          East (N. Virginia), US East (N. Virginia), US West (Oregon), Canada (Central), Europe
   *          (Ireland), Europe (London), Europe (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Seoul),
   *          Asia Pacific (Singapore), Asia Pacific (Sydney), China (Beijing), and China
   *          (Ningxia).</p>
   *          <p>Valid values: <code>WINDOWS_CONTAINER</code> | <code>LINUX_CONTAINER</code> |
   *             <code>LINUX_GPU_CONTAINER</code> | <code>ARM_CONTAINER</code>
   *          </p>
   */
  Type?: string;
}

export namespace AwsCodeBuildProjectEnvironment {
  export const filterSensitiveLog = (obj: AwsCodeBuildProjectEnvironment): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsCodeBuildProjectEnvironment => __isa(o, "AwsCodeBuildProjectEnvironment");
}

/**
 * <p>The credentials for access to a private registry.</p>
 */
export interface AwsCodeBuildProjectEnvironmentRegistryCredential {
  __type?: "AwsCodeBuildProjectEnvironmentRegistryCredential";
  /**
   * <p>The service that created the credentials to access a private Docker registry.</p>
   *          <p>The valid value,<code> SECRETS_MANAGER</code>, is for AWS Secrets Manager.</p>
   */
  CredentialProvider?: string;

  /**
   * <p>The Amazon Resource Name (ARN) or name of credentials created using AWS Secrets
   *          Manager.</p>
   *          <note>
   *             <p>The credential can use the name of the credentials only if they exist in your current
   *             AWS Region. </p>
   *          </note>
   */
  Credential?: string;
}

export namespace AwsCodeBuildProjectEnvironmentRegistryCredential {
  export const filterSensitiveLog = (obj: AwsCodeBuildProjectEnvironmentRegistryCredential): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsCodeBuildProjectEnvironmentRegistryCredential =>
    __isa(o, "AwsCodeBuildProjectEnvironmentRegistryCredential");
}

/**
 * <p>Information about the build input source code for this build project.</p>
 */
export interface AwsCodeBuildProjectSource {
  __type?: "AwsCodeBuildProjectSource";
  /**
   * <p>Information about the location of the source code to be built.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>For source code settings that are specified in the source action of a pipeline in
   *                AWS CodePipeline, location should not be specified. If it is specified, AWS
   *                CodePipeline ignores it. This is because AWS CodePipeline uses the settings in a
   *                pipeline's source action instead of this value.</p>
   *             </li>
   *             <li>
   *                <p>For source code in an AWS CodeCommit repository, the HTTPS clone URL to the
   *                repository that contains the source code and the build spec file (for example,
   *                   <code>https://git-codecommit.region-ID.amazonaws.com/v1/repos/repo-name</code>
   *                ).</p>
   *             </li>
   *             <li>
   *                <p>For source code in an S3 input bucket, one of the following.</p>
   *                <ul>
   *                   <li>
   *                      <p>The path to the ZIP file that contains the source code (for example,
   *                         <code>bucket-name/path/to/object-name.zip</code>).</p>
   *                   </li>
   *                   <li>
   *                      <p> The path to the folder that contains the source code (for example,
   *                         <code>bucket-name/path/to/source-code/folder/</code>).</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For source code in a GitHub repository, the HTTPS clone URL to the repository that
   *                contains the source and the build spec file.</p>
   *             </li>
   *             <li>
   *                <p>For source code in a Bitbucket repository, the HTTPS clone URL to the repository
   *                that contains the source and the build spec file. </p>
   *             </li>
   *          </ul>
   */
  Location?: string;

  /**
   * <p>Information about the Git clone depth for the build project.</p>
   */
  GitCloneDepth?: number;

  /**
   * <p>The type of repository that contains the source code to be built. Valid values
   *          are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BITBUCKET</code> - The source code is in a Bitbucket repository.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CODECOMMIT</code> - The source code is in an AWS CodeCommit
   *                repository.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CODEPIPELINE</code> - The source code settings are specified in the source
   *                action of a pipeline in AWS CodePipeline.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GITHUB</code> - The source code is in a GitHub repository.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GITHUB_ENTERPRISE</code> - The source code is in a GitHub Enterprise
   *                repository.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NO_SOURCE</code> - The project does not have input source code.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3</code> - The source code is in an S3 input bucket. </p>
   *             </li>
   *          </ul>
   */
  Type?: string;

  /**
   * <p>Whether to ignore SSL warnings while connecting to the project source code.</p>
   */
  InsecureSsl?: boolean;
}

export namespace AwsCodeBuildProjectSource {
  export const filterSensitiveLog = (obj: AwsCodeBuildProjectSource): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsCodeBuildProjectSource => __isa(o, "AwsCodeBuildProjectSource");
}

/**
 * <p>Information about the VPC configuration that AWS CodeBuild accesses.</p>
 */
export interface AwsCodeBuildProjectVpcConfig {
  __type?: "AwsCodeBuildProjectVpcConfig";
  /**
   * <p>A list of one or more subnet IDs in your Amazon VPC.</p>
   */
  Subnets?: string[];

  /**
   * <p>A list of one or more security group IDs in your Amazon VPC.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export namespace AwsCodeBuildProjectVpcConfig {
  export const filterSensitiveLog = (obj: AwsCodeBuildProjectVpcConfig): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsCodeBuildProjectVpcConfig => __isa(o, "AwsCodeBuildProjectVpcConfig");
}

/**
 * <p>The details of an Amazon EC2 instance.</p>
 */
export interface AwsEc2InstanceDetails {
  __type?: "AwsEc2InstanceDetails";
  /**
   * <p>The date/time the instance was launched.</p>
   */
  LaunchedAt?: string;

  /**
   * <p>The instance type of the instance. </p>
   */
  Type?: string;

  /**
   * <p>The IPv6 addresses associated with the instance.</p>
   */
  IpV6Addresses?: string[];

  /**
   * <p>The Amazon Machine Image (AMI) ID of the instance.</p>
   */
  ImageId?: string;

  /**
   * <p>The identifier of the VPC that the instance was launched in.</p>
   */
  VpcId?: string;

  /**
   * <p>The IPv4 addresses associated with the instance.</p>
   */
  IpV4Addresses?: string[];

  /**
   * <p>The key name associated with the instance.</p>
   */
  KeyName?: string;

  /**
   * <p>The IAM profile ARN of the instance.</p>
   */
  IamInstanceProfileArn?: string;

  /**
   * <p>The identifier of the subnet that the instance was launched in.</p>
   */
  SubnetId?: string;
}

export namespace AwsEc2InstanceDetails {
  export const filterSensitiveLog = (obj: AwsEc2InstanceDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsEc2InstanceDetails => __isa(o, "AwsEc2InstanceDetails");
}

/**
 * <p>Information about the network interface attachment.</p>
 */
export interface AwsEc2NetworkInterfaceAttachment {
  __type?: "AwsEc2NetworkInterfaceAttachment";
  /**
   * <p>The attachment state.</p>
   *          <p>Valid values: <code>attaching</code> | <code>attached</code> | <code>detaching</code> |
   *             <code>detached</code>
   *          </p>
   */
  Status?: string;

  /**
   * <p>The AWS account ID of the owner of the instance.</p>
   */
  InstanceOwnerId?: string;

  /**
   * <p>The timestamp indicating when the attachment initiated.</p>
   */
  AttachTime?: string;

  /**
   * <p>The identifier of the network interface attachment</p>
   */
  AttachmentId?: string;

  /**
   * <p>Indicates whether the network interface is deleted when the instance is
   *          terminated.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The device index of the network interface attachment on the instance.</p>
   */
  DeviceIndex?: number;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;
}

export namespace AwsEc2NetworkInterfaceAttachment {
  export const filterSensitiveLog = (obj: AwsEc2NetworkInterfaceAttachment): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsEc2NetworkInterfaceAttachment => __isa(o, "AwsEc2NetworkInterfaceAttachment");
}

/**
 * <p>Details about the network interface</p>
 */
export interface AwsEc2NetworkInterfaceDetails {
  __type?: "AwsEc2NetworkInterfaceDetails";
  /**
   * <p>The network interface attachment.</p>
   */
  Attachment?: AwsEc2NetworkInterfaceAttachment;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>Indicates whether traffic to or from the instance is validated.</p>
   */
  SourceDestCheck?: boolean;

  /**
   * <p>Security groups for the network interface.</p>
   */
  SecurityGroups?: AwsEc2NetworkInterfaceSecurityGroup[];
}

export namespace AwsEc2NetworkInterfaceDetails {
  export const filterSensitiveLog = (obj: AwsEc2NetworkInterfaceDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsEc2NetworkInterfaceDetails => __isa(o, "AwsEc2NetworkInterfaceDetails");
}

/**
 * <p>A security group associated with the network interface.</p>
 */
export interface AwsEc2NetworkInterfaceSecurityGroup {
  __type?: "AwsEc2NetworkInterfaceSecurityGroup";
  /**
   * <p>The name of the security group.</p>
   */
  GroupName?: string;

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;
}

export namespace AwsEc2NetworkInterfaceSecurityGroup {
  export const filterSensitiveLog = (obj: AwsEc2NetworkInterfaceSecurityGroup): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsEc2NetworkInterfaceSecurityGroup =>
    __isa(o, "AwsEc2NetworkInterfaceSecurityGroup");
}

/**
 * <p>Details about an EC2 security group.</p>
 */
export interface AwsEc2SecurityGroupDetails {
  __type?: "AwsEc2SecurityGroupDetails";
  /**
   * <p>The inbound rules associated with the security group.</p>
   */
  IpPermissions?: AwsEc2SecurityGroupIpPermission[];

  /**
   * <p>The AWS account ID of the owner of the security group.</p>
   */
  OwnerId?: string;

  /**
   * <p>The name of the security group.</p>
   */
  GroupName?: string;

  /**
   * <p>[VPC only] The ID of the VPC for the security group.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * <p>[VPC only] The outbound rules associated with the security group.</p>
   */
  IpPermissionsEgress?: AwsEc2SecurityGroupIpPermission[];
}

export namespace AwsEc2SecurityGroupDetails {
  export const filterSensitiveLog = (obj: AwsEc2SecurityGroupDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsEc2SecurityGroupDetails => __isa(o, "AwsEc2SecurityGroupDetails");
}

/**
 * <p>An IP permission for an EC2 security group.</p>
 */
export interface AwsEc2SecurityGroupIpPermission {
  __type?: "AwsEc2SecurityGroupIpPermission";
  /**
   * <p>[VPC only] The prefix list IDs for an AWS service. With outbound rules, this is the AWS
   *          service to access through a VPC endpoint from instances associated with the security
   *          group.</p>
   */
  PrefixListIds?: AwsEc2SecurityGroupPrefixListId[];

  /**
   * <p>The IPv6 ranges.</p>
   */
  Ipv6Ranges?: AwsEc2SecurityGroupIpv6Range[];

  /**
   * <p>The security group and AWS account ID pairs.</p>
   */
  UserIdGroupPairs?: AwsEc2SecurityGroupUserIdGroupPair[];

  /**
   * <p>The IPv4 ranges.</p>
   */
  IpRanges?: AwsEc2SecurityGroupIpRange[];

  /**
   * <p>The start of the port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type
   *          number.</p>
   *          <p>A value of -1 indicates all ICMP/ICMPv6 types. If you specify all ICMP/ICMPv6 types, you
   *          must specify all codes. </p>
   */
  FromPort?: number;

  /**
   * <p>The IP protocol name (<code>tcp</code>, <code>udp</code>, <code>icmp</code>,
   *             <code>icmpv6</code>) or number.</p>
   *          <p>[VPC only] Use <code>-1</code> to specify all protocols.</p>
   *          <p>When authorizing security group rules, specifying -1 or a protocol number other than
   *             <code>tcp</code>, <code>udp</code>, <code>icmp</code>, or <code>icmpv6</code> allows
   *          traffic on all ports, regardless of any port range you specify.</p>
   *          <p>For <code>tcp</code>, <code>udp</code>, and <code>icmp</code>, you must specify a port
   *          range.</p>
   *          <p>For <code>icmpv6</code>, the port range is optional. If you omit the port range, traffic
   *          for all types and codes is allowed. </p>
   */
  IpProtocol?: string;

  /**
   * <p>The end of the port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code.</p>
   *          <p>A value of -1 indicates all ICMP/ICMPv6 codes. If you specify all ICMP/ICMPv6 types, you
   *          must specify all codes.</p>
   */
  ToPort?: number;
}

export namespace AwsEc2SecurityGroupIpPermission {
  export const filterSensitiveLog = (obj: AwsEc2SecurityGroupIpPermission): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsEc2SecurityGroupIpPermission => __isa(o, "AwsEc2SecurityGroupIpPermission");
}

/**
 * <p>A range of IPv4 addresses.</p>
 */
export interface AwsEc2SecurityGroupIpRange {
  __type?: "AwsEc2SecurityGroupIpRange";
  /**
   * <p>The IPv4 CIDR range. You can specify either a CIDR range or a source security group, but
   *          not both. To specify a single IPv4 address, use the /32 prefix length.</p>
   */
  CidrIp?: string;
}

export namespace AwsEc2SecurityGroupIpRange {
  export const filterSensitiveLog = (obj: AwsEc2SecurityGroupIpRange): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsEc2SecurityGroupIpRange => __isa(o, "AwsEc2SecurityGroupIpRange");
}

/**
 * <p>A range of IPv6 addresses.</p>
 */
export interface AwsEc2SecurityGroupIpv6Range {
  __type?: "AwsEc2SecurityGroupIpv6Range";
  /**
   * <p>The IPv6 CIDR range. You can specify either a CIDR range or a source security group, but
   *          not both. To specify a single IPv6 address, use the /128 prefix length.</p>
   */
  CidrIpv6?: string;
}

export namespace AwsEc2SecurityGroupIpv6Range {
  export const filterSensitiveLog = (obj: AwsEc2SecurityGroupIpv6Range): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsEc2SecurityGroupIpv6Range => __isa(o, "AwsEc2SecurityGroupIpv6Range");
}

/**
 * <p>A prefix list ID.</p>
 */
export interface AwsEc2SecurityGroupPrefixListId {
  __type?: "AwsEc2SecurityGroupPrefixListId";
  /**
   * <p>The ID of the prefix.</p>
   */
  PrefixListId?: string;
}

export namespace AwsEc2SecurityGroupPrefixListId {
  export const filterSensitiveLog = (obj: AwsEc2SecurityGroupPrefixListId): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsEc2SecurityGroupPrefixListId => __isa(o, "AwsEc2SecurityGroupPrefixListId");
}

/**
 * <p>A relationship between a security group and a user.</p>
 */
export interface AwsEc2SecurityGroupUserIdGroupPair {
  __type?: "AwsEc2SecurityGroupUserIdGroupPair";
  /**
   * <p>The status of a VPC peering connection, if applicable.</p>
   */
  PeeringStatus?: string;

  /**
   * <p>The ID of the VPC for the referenced security group, if applicable.</p>
   */
  VpcId?: string;

  /**
   * <p>The ID of the security group.</p>
   */
  GroupId?: string;

  /**
   * <p>The ID of the VPC peering connection, if applicable.</p>
   */
  VpcPeeringConnectionId?: string;

  /**
   * <p>The ID of an AWS account.</p>
   *          <p>For a referenced security group in another VPC, the account ID of the referenced
   *          security group is returned in the response. If the referenced security group is deleted,
   *          this value is not returned.</p>
   *          <p>[EC2-Classic] Required when adding or removing rules that reference a security group in
   *          another AWS. </p>
   */
  UserId?: string;

  /**
   * <p>The name of the security group.</p>
   */
  GroupName?: string;
}

export namespace AwsEc2SecurityGroupUserIdGroupPair {
  export const filterSensitiveLog = (obj: AwsEc2SecurityGroupUserIdGroupPair): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsEc2SecurityGroupUserIdGroupPair =>
    __isa(o, "AwsEc2SecurityGroupUserIdGroupPair");
}

/**
 * <p>An attachment to an AWS EC2 volume.</p>
 */
export interface AwsEc2VolumeAttachment {
  __type?: "AwsEc2VolumeAttachment";
  /**
   * <p>The identifier of the EC2 instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The attachment state of the volume.</p>
   */
  Status?: string;

  /**
   * <p>The datetime when the attachment initiated.</p>
   */
  AttachTime?: string;

  /**
   * <p>Whether the EBS volume is deleted when the EC2 instance is terminated.</p>
   */
  DeleteOnTermination?: boolean;
}

export namespace AwsEc2VolumeAttachment {
  export const filterSensitiveLog = (obj: AwsEc2VolumeAttachment): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsEc2VolumeAttachment => __isa(o, "AwsEc2VolumeAttachment");
}

/**
 * <p>Details about an EC2 volume.</p>
 */
export interface AwsEc2VolumeDetails {
  __type?: "AwsEc2VolumeDetails";
  /**
   * <p>The volume attachments.</p>
   */
  Attachments?: AwsEc2VolumeAttachment[];

  /**
   * <p>The snapshot from which the volume was created.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The ARN of the AWS Key Management Service (AWS KMS) customer master key (CMK) that was
   *          used to protect the volume encryption key for the volume.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The volume state.</p>
   */
  Status?: string;

  /**
   * <p>Whether the volume is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The datetime when the volume was created.</p>
   */
  CreateTime?: string;

  /**
   * <p>The size of the volume, in GiBs.</p>
   */
  Size?: number;
}

export namespace AwsEc2VolumeDetails {
  export const filterSensitiveLog = (obj: AwsEc2VolumeDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsEc2VolumeDetails => __isa(o, "AwsEc2VolumeDetails");
}

/**
 * <p>Details about an EC2 VPC.</p>
 */
export interface AwsEc2VpcDetails {
  __type?: "AwsEc2VpcDetails";
  /**
   * <p>The identifier of the set of Dynamic Host Configuration Protocol (DHCP) options that are
   *          associated with the VPC. If the default options are associated with the VPC, then this is
   *          default.</p>
   */
  DhcpOptionsId?: string;

  /**
   * <p>Information about the IPv4 CIDR blocks associated with the VPC.</p>
   */
  CidrBlockAssociationSet?: CidrBlockAssociation[];

  /**
   * <p>The current state of the VPC.</p>
   */
  State?: string;

  /**
   * <p>Information about the IPv6 CIDR blocks associated with the VPC.</p>
   */
  Ipv6CidrBlockAssociationSet?: Ipv6CidrBlockAssociation[];
}

export namespace AwsEc2VpcDetails {
  export const filterSensitiveLog = (obj: AwsEc2VpcDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsEc2VpcDetails => __isa(o, "AwsEc2VpcDetails");
}

/**
 * <p>Information about an Elasticsearch domain.</p>
 */
export interface AwsElasticsearchDomainDetails {
  __type?: "AwsElasticsearchDomainDetails";
  /**
   * <p>Domain-specific endpoint used to submit index, search, and data upload requests to an
   *          Amazon ES domain.</p>
   *          <p>The endpoint is a service URL. </p>
   */
  Endpoint?: string;

  /**
   * <p>Name of an Amazon ES domain.</p>
   *          <p>Domain names are unique across all domains owned by the same account within an AWS
   *          Region.</p>
   *          <p>Domain names must start with a lowercase letter and must be between 3 and 28
   *          characters.</p>
   *          <p>Valid characters are a-z (lowercase only), 0-9, and – (hyphen). </p>
   */
  DomainName?: string;

  /**
   * <p>Details about the configuration for node-to-node encryption.</p>
   */
  NodeToNodeEncryptionOptions?: AwsElasticsearchDomainNodeToNodeEncryptionOptions;

  /**
   * <p>Unique identifier for an Amazon ES domain.</p>
   */
  DomainId?: string;

  /**
   * <p>Details about the configuration for encryption at rest.</p>
   */
  EncryptionAtRestOptions?: AwsElasticsearchDomainEncryptionAtRestOptions;

  /**
   * <p>IAM policy document specifying the access policies for the new Amazon ES domain.</p>
   */
  AccessPolicies?: string;

  /**
   * <p>Elasticsearch version.</p>
   */
  ElasticsearchVersion?: string;

  /**
   * <p>Additional options for the domain endpoint.</p>
   */
  DomainEndpointOptions?: AwsElasticsearchDomainDomainEndpointOptions;

  /**
   * <p>The key-value pair that exists if the Amazon ES domain uses VPC endpoints.</p>
   */
  Endpoints?: { [key: string]: string };

  /**
   * <p>Information that Amazon ES derives based on <code>VPCOptions</code> for the
   *          domain.</p>
   */
  VPCOptions?: AwsElasticsearchDomainVPCOptions;
}

export namespace AwsElasticsearchDomainDetails {
  export const filterSensitiveLog = (obj: AwsElasticsearchDomainDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsElasticsearchDomainDetails => __isa(o, "AwsElasticsearchDomainDetails");
}

/**
 * <p>Additional options for the domain endpoint, such as whether to require HTTPS for all
 *          traffic.</p>
 */
export interface AwsElasticsearchDomainDomainEndpointOptions {
  __type?: "AwsElasticsearchDomainDomainEndpointOptions";
  /**
   * <p>Whether to require that all traffic to the domain arrive over HTTPS.</p>
   */
  EnforceHTTPS?: boolean;

  /**
   * <p>The TLS security policy to apply to the HTTPS endpoint of the Elasticsearch
   *          domain.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Policy-Min-TLS-1-0-2019-07</code>, which supports TLSv1.0 and higher</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Policy-Min-TLS-1-2-2019-07</code>, which only supports TLSv1.2</p>
   *             </li>
   *          </ul>
   */
  TLSSecurityPolicy?: string;
}

export namespace AwsElasticsearchDomainDomainEndpointOptions {
  export const filterSensitiveLog = (obj: AwsElasticsearchDomainDomainEndpointOptions): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsElasticsearchDomainDomainEndpointOptions =>
    __isa(o, "AwsElasticsearchDomainDomainEndpointOptions");
}

/**
 * <p>Details about the configuration for encryption at rest.</p>
 */
export interface AwsElasticsearchDomainEncryptionAtRestOptions {
  __type?: "AwsElasticsearchDomainEncryptionAtRestOptions";
  /**
   * <p>The KMS key ID. Takes the form 1a2a3a4-1a2a-3a4a-5a6a-1a2a3a4a5a6a.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Whether encryption at rest is enabled.</p>
   */
  Enabled?: boolean;
}

export namespace AwsElasticsearchDomainEncryptionAtRestOptions {
  export const filterSensitiveLog = (obj: AwsElasticsearchDomainEncryptionAtRestOptions): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsElasticsearchDomainEncryptionAtRestOptions =>
    __isa(o, "AwsElasticsearchDomainEncryptionAtRestOptions");
}

/**
 * <p>Details about the configuration for node-to-node encryption.</p>
 */
export interface AwsElasticsearchDomainNodeToNodeEncryptionOptions {
  __type?: "AwsElasticsearchDomainNodeToNodeEncryptionOptions";
  /**
   * <p>Whether node-to-node encryption is enabled.</p>
   */
  Enabled?: boolean;
}

export namespace AwsElasticsearchDomainNodeToNodeEncryptionOptions {
  export const filterSensitiveLog = (obj: AwsElasticsearchDomainNodeToNodeEncryptionOptions): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsElasticsearchDomainNodeToNodeEncryptionOptions =>
    __isa(o, "AwsElasticsearchDomainNodeToNodeEncryptionOptions");
}

/**
 * <p>Information that Amazon ES derives based on <code>VPCOptions</code> for the
 *          domain.</p>
 */
export interface AwsElasticsearchDomainVPCOptions {
  __type?: "AwsElasticsearchDomainVPCOptions";
  /**
   * <p>The list of Availability Zones associated with the VPC subnets.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>A list of subnet IDs associated with the VPC endpoints for the domain.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>ID for the VPC.</p>
   */
  VPCId?: string;

  /**
   * <p>The list of security group IDs associated with the VPC endpoints for the domain.</p>
   */
  SecurityGroupIds?: string[];
}

export namespace AwsElasticsearchDomainVPCOptions {
  export const filterSensitiveLog = (obj: AwsElasticsearchDomainVPCOptions): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsElasticsearchDomainVPCOptions => __isa(o, "AwsElasticsearchDomainVPCOptions");
}

/**
 * <p>Information about a load balancer.</p>
 */
export interface AwsElbv2LoadBalancerDetails {
  __type?: "AwsElbv2LoadBalancerDetails";
  /**
   * <p>The state of the load balancer.</p>
   */
  State?: LoadBalancerState;

  /**
   * <p>The ID of the Amazon Route 53 hosted zone associated with the load balancer.</p>
   */
  CanonicalHostedZoneId?: string;

  /**
   * <p>The ID of the VPC for the load balancer.</p>
   */
  VpcId?: string;

  /**
   * <p>The Availability Zones for the load balancer.</p>
   */
  AvailabilityZones?: AvailabilityZone[];

  /**
   * <p>The nodes of an Internet-facing load balancer have public IP addresses.</p>
   */
  Scheme?: string;

  /**
   * <p>The IDs of the security groups for the load balancer.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The date and time the load balancer was created.</p>
   */
  CreatedTime?: string;

  /**
   * <p>The type of load balancer.</p>
   */
  Type?: string;

  /**
   * <p>The public DNS name of the load balancer.</p>
   */
  DNSName?: string;

  /**
   * <p>The type of IP addresses used by the subnets for your load balancer. The possible values
   *          are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and IPv6
   *          addresses).</p>
   */
  IpAddressType?: string;
}

export namespace AwsElbv2LoadBalancerDetails {
  export const filterSensitiveLog = (obj: AwsElbv2LoadBalancerDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsElbv2LoadBalancerDetails => __isa(o, "AwsElbv2LoadBalancerDetails");
}

/**
 * <p>IAM access key details related to a finding.</p>
 */
export interface AwsIamAccessKeyDetails {
  __type?: "AwsIamAccessKeyDetails";
  /**
   * <p>The name of the principal.</p>
   */
  PrincipalName?: string;

  /**
   * <p>The type of principal associated with an access key.</p>
   */
  PrincipalType?: string;

  /**
   * <p>The user associated with the IAM access key related to a finding.</p>
   *          <p>The <code>UserName</code> parameter has been replaced with the <code>PrincipalName</code> parameter because access keys can also be assigned to principals that are not IAM users.</p>
   */
  UserName?: string;

  /**
   * <p>The creation date/time of the IAM access key related to a finding.</p>
   */
  CreatedAt?: string;

  /**
   * <p>The status of the IAM access key related to a finding.</p>
   */
  Status?: AwsIamAccessKeyStatus | string;

  /**
   * <p>The ID of the principal associated with an access key.</p>
   */
  PrincipalId?: string;
}

export namespace AwsIamAccessKeyDetails {
  export const filterSensitiveLog = (obj: AwsIamAccessKeyDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsIamAccessKeyDetails => __isa(o, "AwsIamAccessKeyDetails");
}

export enum AwsIamAccessKeyStatus {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
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
   * <p>The path to the role.</p>
   */
  Path?: string;

  /**
   * <p>The maximum session duration (in seconds) that you want to set for the specified role.</p>
   */
  MaxSessionDuration?: number;

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
    ...obj,
  });
  export const isa = (o: any): o is AwsIamRoleDetails => __isa(o, "AwsIamRoleDetails");
}

/**
 * <p>Contains metadata about a customer master key (CMK).</p>
 */
export interface AwsKmsKeyDetails {
  __type?: "AwsKmsKeyDetails";
  /**
   * <p>The date and time when the CMK was created.</p>
   */
  CreationDate?: number;

  /**
   * <p>The source of the CMK's key material.</p>
   *          <p>When this value is <code>AWS_KMS</code>, AWS KMS created the key material.</p>
   *          <p>When this value is <code>EXTERNAL</code>, the key material was imported from your
   *          existing key management infrastructure or the CMK lacks key material.</p>
   *          <p>When this value is <code>AWS_CLOUDHSM</code>, the key material was created in the AWS
   *          CloudHSM cluster associated with a custom key store.</p>
   */
  Origin?: string;

  /**
   * <p>The twelve-digit account ID of the AWS account that owns the CMK.</p>
   */
  AWSAccountId?: string;

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
}

export namespace AwsKmsKeyDetails {
  export const filterSensitiveLog = (obj: AwsKmsKeyDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsKmsKeyDetails => __isa(o, "AwsKmsKeyDetails");
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
   * <p>The base64-encoded contents of the deployment package. AWS SDK and AWS CLI clients handle the encoding for you.</p>
   */
  ZipFile?: string;

  /**
   * <p>For versioned objects, the version of the deployment package object to use.</p>
   */
  S3ObjectVersion?: string;
}

export namespace AwsLambdaFunctionCode {
  export const filterSensitiveLog = (obj: AwsLambdaFunctionCode): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsLambdaFunctionCode => __isa(o, "AwsLambdaFunctionCode");
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
  export const filterSensitiveLog = (obj: AwsLambdaFunctionDeadLetterConfig): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsLambdaFunctionDeadLetterConfig => __isa(o, "AwsLambdaFunctionDeadLetterConfig");
}

/**
 * <p>Details about a function's configuration.</p>
 */
export interface AwsLambdaFunctionDetails {
  __type?: "AwsLambdaFunctionDetails";
  /**
   * <p>The KMS key that's used to encrypt the function's environment variables. This key is only returned if you've configured a customer managed CMK.</p>
   */
  KmsKeyArn?: string;

  /**
   * <p>For Lambda@Edge functions, the ARN of the master function.</p>
   */
  MasterArn?: string;

  /**
   * <p>The name of the function.</p>
   */
  FunctionName?: string;

  /**
   * <p>The amount of time that Lambda allows a function to run before stopping it.</p>
   */
  Timeout?: number;

  /**
   * <p>The function's networking configuration.</p>
   */
  VpcConfig?: AwsLambdaFunctionVpcConfig;

  /**
   * <p>The runtime environment for the Lambda function.</p>
   */
  Runtime?: string;

  /**
   * <p>The function's environment variables.</p>
   */
  Environment?: AwsLambdaFunctionEnvironment;

  /**
   * <p>The function's execution role.</p>
   */
  Role?: string;

  /**
   * <p>The function's layers.</p>
   */
  Layers?: AwsLambdaFunctionLayer[];

  /**
   * <p>The function's AWS X-Ray tracing configuration.</p>
   */
  TracingConfig?: AwsLambdaFunctionTracingConfig;

  /**
   * <p>The memory that's allocated to the function.</p>
   */
  MemorySize?: number;

  /**
   * <p>The version of the Lambda function.</p>
   */
  Version?: string;

  /**
   * <p>The function's dead letter queue.</p>
   */
  DeadLetterConfig?: AwsLambdaFunctionDeadLetterConfig;

  /**
   * <p>An <code>AwsLambdaFunctionCode</code> object.</p>
   */
  Code?: AwsLambdaFunctionCode;

  /**
   * <p>The SHA256 hash of the function's deployment package.</p>
   */
  CodeSha256?: string;

  /**
   * <p>The function that Lambda calls to begin executing your function.</p>
   */
  Handler?: string;

  /**
   * <p>The latest updated revision of the function or alias.</p>
   */
  RevisionId?: string;

  /**
   * <p>The date and time that the function was last updated, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   */
  LastModified?: string;
}

export namespace AwsLambdaFunctionDetails {
  export const filterSensitiveLog = (obj: AwsLambdaFunctionDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsLambdaFunctionDetails => __isa(o, "AwsLambdaFunctionDetails");
}

/**
 * <p>A function's environment variable settings.</p>
 */
export interface AwsLambdaFunctionEnvironment {
  __type?: "AwsLambdaFunctionEnvironment";
  /**
   * <p>Environment variable key-value pairs.</p>
   */
  Variables?: { [key: string]: string };

  /**
   * <p>An <code>AwsLambdaFunctionEnvironmentError</code> object.</p>
   */
  Error?: AwsLambdaFunctionEnvironmentError;
}

export namespace AwsLambdaFunctionEnvironment {
  export const filterSensitiveLog = (obj: AwsLambdaFunctionEnvironment): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsLambdaFunctionEnvironment => __isa(o, "AwsLambdaFunctionEnvironment");
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
  export const filterSensitiveLog = (obj: AwsLambdaFunctionEnvironmentError): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsLambdaFunctionEnvironmentError => __isa(o, "AwsLambdaFunctionEnvironmentError");
}

/**
 * <p>An AWS Lambda layer.</p>
 */
export interface AwsLambdaFunctionLayer {
  __type?: "AwsLambdaFunctionLayer";
  /**
   * <p>The size of the layer archive in bytes.</p>
   */
  CodeSize?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the function layer.</p>
   */
  Arn?: string;
}

export namespace AwsLambdaFunctionLayer {
  export const filterSensitiveLog = (obj: AwsLambdaFunctionLayer): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsLambdaFunctionLayer => __isa(o, "AwsLambdaFunctionLayer");
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
  export const filterSensitiveLog = (obj: AwsLambdaFunctionTracingConfig): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsLambdaFunctionTracingConfig => __isa(o, "AwsLambdaFunctionTracingConfig");
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
    ...obj,
  });
  export const isa = (o: any): o is AwsLambdaFunctionVpcConfig => __isa(o, "AwsLambdaFunctionVpcConfig");
}

/**
 * <p>Details about a Lambda layer version.</p>
 */
export interface AwsLambdaLayerVersionDetails {
  __type?: "AwsLambdaLayerVersionDetails";
  /**
   * <p>The version number.</p>
   */
  Version?: number;

  /**
   * <p>The date that the version was created, in ISO 8601 format. For example,
   *          2018-11-27T15:10:45.123+0000. </p>
   */
  CreatedDate?: string;

  /**
   * <p>The layer's compatible runtimes. Maximum number of five items.</p>
   *          <p>Valid values: <code>nodejs10.x</code> | <code>nodejs12.x</code> | <code>java8</code> |
   *             <code>java11</code> | <code>python2.7</code> | <code>python3.6</code> |
   *             <code>python3.7</code> | <code>python3.8</code> | <code>dotnetcore1.0</code> |
   *             <code>dotnetcore2.1</code> | <code>go1.x</code> | <code>ruby2.5</code> |
   *             <code>provided</code>
   *          </p>
   */
  CompatibleRuntimes?: string[];
}

export namespace AwsLambdaLayerVersionDetails {
  export const filterSensitiveLog = (obj: AwsLambdaLayerVersionDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsLambdaLayerVersionDetails => __isa(o, "AwsLambdaLayerVersionDetails");
}

/**
 * <p>An AWS Identity and Access Management (IAM) role associated with the DB instance.</p>
 */
export interface AwsRdsDbInstanceAssociatedRole {
  __type?: "AwsRdsDbInstanceAssociatedRole";
  /**
   * <p>The name of the feature associated with the IAM)role.</p>
   */
  FeatureName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that is associated with the DB
   *          instance.</p>
   */
  RoleArn?: string;

  /**
   * <p>Describes the state of the association between the IAM role and the DB instance. The
   *             <code>Status</code> property returns one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The IAM role ARN is associated with the DB instance and can
   *                be used to access other AWS services on your behalf.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - The IAM role ARN is being associated with the DB
   *                instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID</code> - The IAM role ARN is associated with the DB instance. But
   *                the DB instance is unable to assume the IAM role in order to access other AWS
   *                services on your behalf. </p>
   *             </li>
   *          </ul>
   */
  Status?: string;
}

export namespace AwsRdsDbInstanceAssociatedRole {
  export const filterSensitiveLog = (obj: AwsRdsDbInstanceAssociatedRole): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsRdsDbInstanceAssociatedRole => __isa(o, "AwsRdsDbInstanceAssociatedRole");
}

/**
 * <p>Contains the details of an Amazon RDS DB instance.</p>
 */
export interface AwsRdsDbInstanceDetails {
  __type?: "AwsRdsDbInstanceDetails";
  /**
   * <p>Specifies the connection endpoint.</p>
   */
  Endpoint?: AwsRdsDbInstanceEndpoint;

  /**
   * <p>The AWS Region-unique, immutable identifier for the DB instance. This identifier is
   *          found in AWS CloudTrail log entries whenever the AWS KMS key for the DB instance is
   *          accessed. </p>
   */
  DbiResourceId?: string;

  /**
   * <p>The meaning of this parameter differs according to the database engine you use.</p>
   *          <p>
   *             <b>MySQL, MariaDB, SQL Server, PostgreSQL</b>
   *          </p>
   *          <p>Contains the name of the initial database of this instance that was provided at create
   *          time, if one was specified when the DB instance was created. This same name is returned for
   *          the life of the DB instance.</p>
   *          <p>
   *             <b>Oracle</b>
   *          </p>
   *          <p>Contains the Oracle System ID (SID) of the created DB instance. Not shown when the
   *          returned parameters do not apply to an Oracle DB instance. </p>
   */
  DBName?: string;

  /**
   * <p>The identifier of the CA certificate for this DB instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * <p>Specifies the port that the DB instance listens on. If the DB instance is part of a DB
   *          cluster, this can be a different port than the DB cluster port.</p>
   */
  DbInstancePort?: number;

  /**
   * <p>If <code>StorageEncrypted</code> is true, the AWS KMS key identifier for the encrypted
   *          DB instance.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A list of VPC security groups that the DB instance belongs to.</p>
   */
  VpcSecurityGroups?: AwsRdsDbInstanceVpcSecurityGroup[];

  /**
   * <p>Indicates whether the DB instance has deletion protection enabled.</p>
   *          <p>When deletion protection is enabled, the database cannot be deleted.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>True if mapping of AWS Identity and Access Management (IAM) accounts to database
   *          accounts is enabled, and otherwise false.</p>
   *          <p>IAM database authentication can be enabled for the following database engines.</p>
   *          <ul>
   *             <li>
   *                <p>For MySQL 5.6, minor version 5.6.34 or higher</p>
   *             </li>
   *             <li>
   *                <p>For MySQL 5.7, minor version 5.7.16 or higher</p>
   *             </li>
   *             <li>
   *                <p>Aurora 5.6 or higher</p>
   *             </li>
   *          </ul>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>Specifies whether the DB instance is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>If the DB instance is a member of a DB cluster, contains the name of the DB cluster that
   *          the DB instance is a member of.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>Contains the name of the compute and memory capacity class of the DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>Provides the name of the database engine to use for this DB instance.</p>
   */
  Engine?: string;

  /**
   * <p>The ARN from the key store with which the instance is associated for TDE
   *          encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>Provides the date and time the DB instance was created.</p>
   */
  InstanceCreateTime?: string;

  /**
   * <p>Contains a user-supplied database identifier. This identifier is the unique key that
   *          identifies a DB instance.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>The AWS Identity and Access Management (IAM) roles associated with the DB
   *          instance.</p>
   */
  AssociatedRoles?: AwsRdsDbInstanceAssociatedRole[];

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Specifies the accessibility options for the DB instance.</p>
   *          <p>A value of true specifies an Internet-facing instance with a publicly resolvable DNS
   *          name, which resolves to a public IP address.</p>
   *          <p>A value of false specifies an internal instance with a DNS name that resolves to a
   *          private IP address. </p>
   */
  PubliclyAccessible?: boolean;
}

export namespace AwsRdsDbInstanceDetails {
  export const filterSensitiveLog = (obj: AwsRdsDbInstanceDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsRdsDbInstanceDetails => __isa(o, "AwsRdsDbInstanceDetails");
}

/**
 * <p>Specifies the connection endpoint.</p>
 */
export interface AwsRdsDbInstanceEndpoint {
  __type?: "AwsRdsDbInstanceEndpoint";
  /**
   * <p>Specifies the DNS address of the DB instance.</p>
   */
  Address?: string;

  /**
   * <p>Specifies the port that the database engine is listening on.</p>
   */
  Port?: number;

  /**
   * <p>Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.</p>
   */
  HostedZoneId?: string;
}

export namespace AwsRdsDbInstanceEndpoint {
  export const filterSensitiveLog = (obj: AwsRdsDbInstanceEndpoint): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsRdsDbInstanceEndpoint => __isa(o, "AwsRdsDbInstanceEndpoint");
}

/**
 * <p>A VPC security groups that the DB instance belongs to.</p>
 */
export interface AwsRdsDbInstanceVpcSecurityGroup {
  __type?: "AwsRdsDbInstanceVpcSecurityGroup";
  /**
   * <p>The name of the VPC security group.</p>
   */
  VpcSecurityGroupId?: string;

  /**
   * <p>The status of the VPC security group.</p>
   */
  Status?: string;
}

export namespace AwsRdsDbInstanceVpcSecurityGroup {
  export const filterSensitiveLog = (obj: AwsRdsDbInstanceVpcSecurityGroup): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsRdsDbInstanceVpcSecurityGroup => __isa(o, "AwsRdsDbInstanceVpcSecurityGroup");
}

/**
 * <p>The details of an Amazon S3 bucket.</p>
 */
export interface AwsS3BucketDetails {
  __type?: "AwsS3BucketDetails";
  /**
   * <p>The encryption rules that are applied to the S3 bucket.</p>
   */
  ServerSideEncryptionConfiguration?: AwsS3BucketServerSideEncryptionConfiguration;

  /**
   * <p>The canonical user ID of the owner of the S3 bucket.</p>
   */
  OwnerId?: string;

  /**
   * <p>The display name of the owner of the S3 bucket.</p>
   */
  OwnerName?: string;

  /**
   * <p>The date and time when the S3 bucket was created.</p>
   */
  CreatedAt?: string;
}

export namespace AwsS3BucketDetails {
  export const filterSensitiveLog = (obj: AwsS3BucketDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsS3BucketDetails => __isa(o, "AwsS3BucketDetails");
}

/**
 * <p>Specifies the default server-side encryption to apply to new objects in the
 *          bucket.</p>
 */
export interface AwsS3BucketServerSideEncryptionByDefault {
  __type?: "AwsS3BucketServerSideEncryptionByDefault";
  /**
   * <p>Server-side encryption algorithm to use for the default encryption.</p>
   */
  SSEAlgorithm?: string;

  /**
   * <p>AWS KMS customer master key (CMK) ID to use for the default encryption.</p>
   */
  KMSMasterKeyID?: string;
}

export namespace AwsS3BucketServerSideEncryptionByDefault {
  export const filterSensitiveLog = (obj: AwsS3BucketServerSideEncryptionByDefault): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsS3BucketServerSideEncryptionByDefault =>
    __isa(o, "AwsS3BucketServerSideEncryptionByDefault");
}

/**
 * <p>The encryption configuration for the S3 bucket.</p>
 */
export interface AwsS3BucketServerSideEncryptionConfiguration {
  __type?: "AwsS3BucketServerSideEncryptionConfiguration";
  /**
   * <p>The encryption rules that are applied to the S3 bucket.</p>
   */
  Rules?: AwsS3BucketServerSideEncryptionRule[];
}

export namespace AwsS3BucketServerSideEncryptionConfiguration {
  export const filterSensitiveLog = (obj: AwsS3BucketServerSideEncryptionConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsS3BucketServerSideEncryptionConfiguration =>
    __isa(o, "AwsS3BucketServerSideEncryptionConfiguration");
}

/**
 * <p>An encryption rule to apply to the S3 bucket.</p>
 */
export interface AwsS3BucketServerSideEncryptionRule {
  __type?: "AwsS3BucketServerSideEncryptionRule";
  /**
   * <p>Specifies the default server-side encryption to apply to new objects in the bucket. If a
   *             <code>PUT</code> object request doesn't specify any server-side encryption, this default
   *          encryption is applied.</p>
   */
  ApplyServerSideEncryptionByDefault?: AwsS3BucketServerSideEncryptionByDefault;
}

export namespace AwsS3BucketServerSideEncryptionRule {
  export const filterSensitiveLog = (obj: AwsS3BucketServerSideEncryptionRule): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsS3BucketServerSideEncryptionRule =>
    __isa(o, "AwsS3BucketServerSideEncryptionRule");
}

/**
 * <p>Details about an Amazon S3 object.</p>
 */
export interface AwsS3ObjectDetails {
  __type?: "AwsS3ObjectDetails";
  /**
   * <p>If the object is stored using server-side encryption, the value of the server-side
   *          encryption algorithm used when storing this object in Amazon S3.</p>
   */
  ServerSideEncryption?: string;

  /**
   * <p>The identifier of the AWS Key Management Service (AWS KMS) symmetric customer managed
   *          customer master key (CMK) that was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>The version of the object.</p>
   */
  VersionId?: string;

  /**
   * <p>The date and time when the object was last modified.</p>
   */
  LastModified?: string;

  /**
   * <p>The opaque identifier assigned by a web server to a specific version of a resource found
   *          at a URL.</p>
   */
  ETag?: string;

  /**
   * <p>A standard MIME type describing the format of the object data.</p>
   */
  ContentType?: string;
}

export namespace AwsS3ObjectDetails {
  export const filterSensitiveLog = (obj: AwsS3ObjectDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsS3ObjectDetails => __isa(o, "AwsS3ObjectDetails");
}

/**
 * <p>Provides consistent format for the contents of the Security Hub-aggregated findings.
 *             <code>AwsSecurityFinding</code> format enables you to share findings between AWS
 *          security services and third-party solutions, and security standards checks.</p>
 *          <note>
 *             <p>A finding is a potential security issue generated either by AWS services (Amazon
 *             GuardDuty, Amazon Inspector, and Amazon Macie) or by the integrated third-party
 *             solutions and standards checks.</p>
 *          </note>
 */
export interface AwsSecurityFinding {
  __type?: "AwsSecurityFinding";
  /**
   * <p>One or more finding types in the format of <code>namespace/category/classifier</code>
   *          that classify a finding.</p>
   *          <p>Valid namespace values are: Software and Configuration Checks | TTPs | Effects | Unusual
   *          Behaviors | Sensitive Data Identifications</p>
   */
  Types: string[] | undefined;

  /**
   * <p>The ARN generated by Security Hub that uniquely identifies a product that generates findings.
   *          This can be the ARN for a third-party product that is integrated with Security Hub, or the ARN for
   *          a custom integration.</p>
   */
  ProductArn: string | undefined;

  /**
   * <p>A URL that links to a page about the current finding in the security-findings provider's
   *          solution.</p>
   */
  SourceUrl?: string;

  /**
   * <p>Threat intelligence details related to a finding.</p>
   */
  ThreatIntelIndicators?: ThreatIntelIndicator[];

  /**
   * <p>A finding's description.</p>
   *          <note>
   *             <p>In this release, <code>Description</code> is a required property.</p>
   *          </note>
   */
  Description: string | undefined;

  /**
   * <p>Provides a list of vulnerabilities associated with the findings.</p>
   */
  Vulnerabilities?: Vulnerability[];

  /**
   * <p>The level of importance assigned to the resources associated with the finding.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources.</p>
   */
  Criticality?: number;

  /**
   * <p>Indicates the veracity of a finding. </p>
   */
  VerificationState?: VerificationState | string;

  /**
   * <p>A set of resource data types that describe the resources that the finding refers
   *          to.</p>
   */
  Resources: Resource[] | undefined;

  /**
   * <p>The details of network-related information about a finding.</p>
   */
  Network?: Network;

  /**
   * <p>A list of malware related to a finding.</p>
   */
  Malware?: Malware[];

  /**
   * <p>Provides information about a network path that is relevant to a finding. Each entry
   *          under <code>NetworkPath</code> represents a component of that path.</p>
   */
  NetworkPath?: NetworkPathComponent[];

  /**
   * <p>Provides information about the status of the investigation into a finding.</p>
   */
  Workflow?: Workflow;

  /**
   * <p>The details of process-related information about a finding.</p>
   */
  Process?: ProcessDetails;

  /**
   * <p>A list of related findings.</p>
   */
  RelatedFindings?: RelatedFinding[];

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider first
   *          observed the potential security issue that a finding captured.</p>
   */
  FirstObservedAt?: string;

  /**
   * <p>A finding's severity.</p>
   */
  Severity: Severity | undefined;

  /**
   * <p>The schema version that a finding is formatted for.</p>
   */
  SchemaVersion: string | undefined;

  /**
   * <p>The record state of a finding.</p>
   */
  RecordState?: RecordState | string;

  /**
   * <p>A data type where security-findings providers can include additional solution-specific
   *          details that aren't part of the defined <code>AwsSecurityFinding</code> format.</p>
   */
  ProductFields?: { [key: string]: string };

  /**
   * <p>A data type that describes the remediation options for a finding.</p>
   */
  Remediation?: Remediation;

  /**
   * <p>A finding's title.</p>
   *          <note>
   *             <p>In this release, <code>Title</code> is a required property.</p>
   *          </note>
   */
  Title: string | undefined;

  /**
   * <p>A finding's confidence. Confidence is defined as the likelihood that a finding
   *          accurately identifies the behavior or issue that it was intended to identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   */
  Confidence?: number;

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider most
   *          recently observed the potential security issue that a finding captured.</p>
   */
  LastObservedAt?: string;

  /**
   * <p>The AWS account ID that a finding is generated in.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The security findings provider-specific identifier for a finding.</p>
   */
  Id: string | undefined;

  /**
   * <p>A list of name/value string pairs associated with the finding. These are custom,
   *          user-defined fields added to a finding. </p>
   */
  UserDefinedFields?: { [key: string]: string };

  /**
   * <p>The workflow state of a finding. </p>
   */
  WorkflowState?: WorkflowState | string;

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider last
   *          updated the finding record. </p>
   */
  UpdatedAt: string | undefined;

  /**
   * <p>This data type is exclusive to findings that are generated as the result of a check run
   *          against a specific rule in a supported security standard, such as CIS AWS Foundations.
   *          Contains security standard-related finding details.</p>
   */
  Compliance?: Compliance;

  /**
   * <p>A user-defined note added to a finding.</p>
   */
  Note?: Note;

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider
   *          created the potential security issue that a finding captured.</p>
   */
  CreatedAt: string | undefined;

  /**
   * <p>The identifier for the solution-specific component (a discrete unit of logic) that
   *          generated a finding. In various security-findings providers' solutions, this generator can
   *          be called a rule, a check, a detector, a plugin, etc. </p>
   */
  GeneratorId: string | undefined;
}

export namespace AwsSecurityFinding {
  export const filterSensitiveLog = (obj: AwsSecurityFinding): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsSecurityFinding => __isa(o, "AwsSecurityFinding");
}

/**
 * <p>A collection of attributes that are applied to all active Security Hub-aggregated findings and
 *          that result in a subset of findings that are included in this insight.</p>
 */
export interface AwsSecurityFindingFilters {
  __type?: "AwsSecurityFindingFilters";
  /**
   * <p>The path to the process executable.</p>
   */
  ProcessPath?: StringFilter[];

  /**
   * <p>The protocol of network-related information about a finding.</p>
   */
  NetworkProtocol?: StringFilter[];

  /**
   * <p>The IPv4 addresses associated with the instance.</p>
   */
  ResourceAwsEc2InstanceIpV4Addresses?: IpFilter[];

  /**
   * <p>The canonical AWS partition name that the Region is assigned to.</p>
   */
  ResourcePartition?: StringFilter[];

  /**
   * <p>The creation date/time of the IAM access key related to a finding.</p>
   */
  ResourceAwsIamAccessKeyCreatedAt?: DateFilter[];

  /**
   * <p>The solution-generated identifier for a related finding.</p>
   */
  RelatedFindingsId?: StringFilter[];

  /**
   * <p>Specifies the type of the resource that details are provided for.</p>
   */
  ResourceType?: StringFilter[];

  /**
   * <p>The source IPv4 address of network-related information about a finding.</p>
   */
  NetworkSourceIpV4?: IpFilter[];

  /**
   * <p>The source IPv6 address of network-related information about a finding.</p>
   */
  NetworkSourceIpV6?: IpFilter[];

  /**
   * <p>The principal that created a note.</p>
   */
  NoteUpdatedBy?: StringFilter[];

  /**
   * <p>Indicates the direction of network traffic associated with a finding.</p>
   */
  NetworkDirection?: StringFilter[];

  /**
   * <p>The identifier of the VPC that the instance was launched in.</p>
   */
  ResourceAwsEc2InstanceVpcId?: StringFilter[];

  /**
   * <p>The source port of network-related information about a finding.</p>
   */
  NetworkSourcePort?: NumberFilter[];

  /**
   * <p>The type of a threat intelligence indicator.</p>
   */
  ThreatIntelIndicatorType?: StringFilter[];

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider first
   *          observed the potential security issue that a finding captured.</p>
   */
  FirstObservedAt?: DateFilter[];

  /**
   * <p>The value of a threat intelligence indicator.</p>
   */
  ThreatIntelIndicatorValue?: StringFilter[];

  /**
   * <p>The normalized severity of a finding.</p>
   */
  SeverityNormalized?: NumberFilter[];

  /**
   * <p>The date/time that the container was started.</p>
   */
  ResourceContainerLaunchedAt?: DateFilter[];

  /**
   * <p>The display name of the owner of the S3 bucket.</p>
   */
  ResourceAwsS3BucketOwnerName?: StringFilter[];

  /**
   * <p>The date/time that the process was launched.</p>
   */
  ProcessLaunchedAt?: DateFilter[];

  /**
   * <p>The security findings provider-specific identifier for a finding.</p>
   */
  Id?: StringFilter[];

  /**
   * <p>The user associated with the IAM access key related to a finding.</p>
   */
  ResourceAwsIamAccessKeyUserName?: StringFilter[];

  /**
   * <p>The level of importance assigned to the resources associated with the finding.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources.</p>
   */
  Criticality?: NumberFilter[];

  /**
   * <p>The destination port of network-related information about a finding.</p>
   */
  NetworkDestinationPort?: NumberFilter[];

  /**
   * <p>A list of AWS tags associated with a resource at the time the finding was
   *          processed.</p>
   */
  ResourceTags?: MapFilter[];

  /**
   * <p>The IAM profile ARN of the instance.</p>
   */
  ResourceAwsEc2InstanceIamInstanceProfileArn?: StringFilter[];

  /**
   * <p>The destination IPv6 address of network-related information about a finding.</p>
   */
  NetworkDestinationIpV6?: IpFilter[];

  /**
   * <p>The timestamp of when the note was updated.</p>
   */
  NoteUpdatedAt?: DateFilter[];

  /**
   * <p>The identifier of the image related to a finding.</p>
   */
  ResourceContainerImageId?: StringFilter[];

  /**
   * <p>The destination IPv4 address of network-related information about a finding.</p>
   */
  NetworkDestinationIpV4?: IpFilter[];

  /**
   * <p>The type of the malware that was observed.</p>
   */
  MalwareType?: StringFilter[];

  /**
   * <p>The parent process ID.</p>
   */
  ProcessParentPid?: NumberFilter[];

  /**
   * <p>The source of the threat intelligence.</p>
   */
  ThreatIntelIndicatorSource?: StringFilter[];

  /**
   * <p>The date and time the instance was launched.</p>
   */
  ResourceAwsEc2InstanceLaunchedAt?: DateFilter[];

  /**
   * <p>The recommendation of what to do about the issue described in a finding.</p>
   */
  RecommendationText?: StringFilter[];

  /**
   * <p>The details of a resource that doesn't have a specific subfield for the resource type
   *          defined.</p>
   */
  ResourceDetailsOther?: MapFilter[];

  /**
   * <p>Exclusive to findings that are generated as the result of a check run against a specific
   *          rule in a supported standard, such as CIS AWS Foundations. Contains security
   *          standard-related finding details.</p>
   */
  ComplianceStatus?: StringFilter[];

  /**
   * <p>The date/time that the process was terminated.</p>
   */
  ProcessTerminatedAt?: DateFilter[];

  /**
   * <p>The instance type of the instance.</p>
   */
  ResourceAwsEc2InstanceType?: StringFilter[];

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider
   *          captured the potential security issue that a finding captured.</p>
   */
  CreatedAt?: DateFilter[];

  /**
   * <p>The process ID.</p>
   */
  ProcessPid?: NumberFilter[];

  /**
   * <p>The state of the malware that was observed.</p>
   */
  MalwareState?: StringFilter[];

  /**
   * <p>The filesystem path of the malware that was observed.</p>
   */
  MalwarePath?: StringFilter[];

  /**
   * <p>The name of the image related to a finding.</p>
   */
  ResourceContainerImageName?: StringFilter[];

  /**
   * <p>The status of the investigation into a finding. Allowed values are the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code> - The initial state of a finding, before it is reviewed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOTIFIED</code> - Indicates that the resource owner has been notified about
   *                the security issue. Used when the initial reviewer is not the resource owner, and
   *                needs intervention from the resource owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUPPRESSED</code> - The finding will not be reviewed again and will not be
   *                acted upon.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESOLVED</code> - The finding was reviewed and remediated and is now
   *                considered resolved. </p>
   *             </li>
   *          </ul>
   */
  WorkflowStatus?: StringFilter[];

  /**
   * <p>The AWS account ID that a finding is generated in.</p>
   */
  AwsAccountId?: StringFilter[];

  /**
   * <p>The label of a finding's severity.</p>
   */
  SeverityLabel?: StringFilter[];

  /**
   * <p>The ARN of the solution that generated a related finding.</p>
   */
  RelatedFindingsProductArn?: StringFilter[];

  /**
   * <p>A finding's title.</p>
   */
  Title?: StringFilter[];

  /**
   * <p>The category of a threat intelligence indicator.</p>
   */
  ThreatIntelIndicatorCategory?: StringFilter[];

  /**
   * <p>The canonical identifier for the given resource type.</p>
   */
  ResourceId?: StringFilter[];

  /**
   * <p>The identifier of the subnet that the instance was launched in.</p>
   */
  ResourceAwsEc2InstanceSubnetId?: StringFilter[];

  /**
   * <p>A data type where security-findings providers can include additional solution-specific
   *          details that aren't part of the defined <code>AwsSecurityFinding</code> format.</p>
   */
  ProductFields?: MapFilter[];

  /**
   * <p>The updated record state for the finding.</p>
   */
  RecordState?: StringFilter[];

  /**
   * <p>The Amazon Machine Image (AMI) ID of the instance.</p>
   */
  ResourceAwsEc2InstanceImageId?: StringFilter[];

  /**
   * <p>The name of the findings provider (company) that owns the solution (product) that
   *          generates findings.</p>
   */
  CompanyName?: StringFilter[];

  /**
   * <p>The native severity as defined by the security-findings provider's solution that
   *          generated the finding.</p>
   */
  SeverityProduct?: NumberFilter[];

  /**
   * <p>The status of the IAM access key related to a finding.</p>
   */
  ResourceAwsIamAccessKeyStatus?: StringFilter[];

  /**
   * <p>The ARN generated by Security Hub that uniquely identifies a third-party company
   *          (security findings provider) after this provider's product (solution that generates
   *          findings) is registered with Security Hub.</p>
   */
  ProductArn?: StringFilter[];

  /**
   * <p>The canonical AWS external Region name where this resource is located.</p>
   */
  ResourceRegion?: StringFilter[];

  /**
   * <p>The date/time of the last observation of a threat intelligence indicator.</p>
   */
  ThreatIntelIndicatorLastObservedAt?: DateFilter[];

  /**
   * <p>A list of name/value string pairs associated with the finding. These are custom,
   *          user-defined fields added to a finding. </p>
   */
  UserDefinedFields?: MapFilter[];

  /**
   * <p>A finding's description.</p>
   */
  Description?: StringFilter[];

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
   * <p>The URL for more details from the source of the threat intelligence.</p>
   */
  ThreatIntelIndicatorSourceUrl?: StringFilter[];

  /**
   * <p>A finding type in the format of <code>namespace/category/classifier</code> that
   *          classifies a finding.</p>
   */
  Type?: StringFilter[];

  /**
   * <p>The key name associated with the instance.</p>
   */
  ResourceAwsEc2InstanceKeyName?: StringFilter[];

  /**
   * <p>The name of the container related to a finding.</p>
   */
  ResourceContainerName?: StringFilter[];

  /**
   * <p>The IPv6 addresses associated with the instance.</p>
   */
  ResourceAwsEc2InstanceIpV6Addresses?: IpFilter[];

  /**
   * <p>A URL that links to a page about the current finding in the security-findings provider's
   *          solution.</p>
   */
  SourceUrl?: StringFilter[];

  /**
   * <p>The source domain of network-related information about a finding.</p>
   */
  NetworkSourceDomain?: StringFilter[];

  /**
   * <p>The veracity of a finding.</p>
   */
  VerificationState?: StringFilter[];

  /**
   * <p>An ISO8601-formatted timestamp that indicates when the security-findings provider last
   *          updated the finding record. </p>
   */
  UpdatedAt?: DateFilter[];

  /**
   * <p>The destination domain of network-related information about a finding.</p>
   */
  NetworkDestinationDomain?: StringFilter[];

  /**
   * <p>The workflow state of a finding.</p>
   *          <p>Note that this field is deprecated. To search for a finding based on its workflow
   *          status, use <code>WorkflowStatus</code>.</p>
   */
  WorkflowState?: StringFilter[];

  /**
   * <p>A finding's confidence. Confidence is defined as the likelihood that a finding
   *          accurately identifies the behavior or issue that it was intended to identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   */
  Confidence?: NumberFilter[];

  /**
   * <p>The name of the process.</p>
   */
  ProcessName?: StringFilter[];

  /**
   * <p>The source media access control (MAC) address of network-related information about a
   *          finding.</p>
   */
  NetworkSourceMac?: StringFilter[];

  /**
   * <p>The name of the solution (product) that generates findings.</p>
   */
  ProductName?: StringFilter[];

  /**
   * <p>The identifier for the solution-specific component (a discrete unit of logic) that
   *          generated a finding. In various security-findings providers' solutions, this generator can
   *          be called a rule, a check, a detector, a plugin, etc.</p>
   */
  GeneratorId?: StringFilter[];

  /**
   * <p>The canonical user ID of the owner of the S3 bucket.</p>
   */
  ResourceAwsS3BucketOwnerId?: StringFilter[];

  /**
   * <p>The text of a note.</p>
   */
  NoteText?: StringFilter[];

  /**
   * <p>A keyword for a finding.</p>
   */
  Keyword?: KeywordFilter[];
}

export namespace AwsSecurityFindingFilters {
  export const filterSensitiveLog = (obj: AwsSecurityFindingFilters): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsSecurityFindingFilters => __isa(o, "AwsSecurityFindingFilters");
}

/**
 * <p>Identifies a finding to update using <code>BatchUpdateFindings</code>.</p>
 */
export interface AwsSecurityFindingIdentifier {
  __type?: "AwsSecurityFindingIdentifier";
  /**
   * <p>The identifier of the finding that was specified by the finding provider.</p>
   */
  Id: string | undefined;

  /**
   * <p>The ARN generated by Security Hub that uniquely identifies a product that generates findings.
   *          This can be the ARN for a third-party product that is integrated with Security Hub, or the ARN for
   *          a custom integration.</p>
   */
  ProductArn: string | undefined;
}

export namespace AwsSecurityFindingIdentifier {
  export const filterSensitiveLog = (obj: AwsSecurityFindingIdentifier): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsSecurityFindingIdentifier => __isa(o, "AwsSecurityFindingIdentifier");
}

/**
 * <p>A wrapper type for the topic's Amazon Resource Name (ARN).</p>
 */
export interface AwsSnsTopicDetails {
  __type?: "AwsSnsTopicDetails";
  /**
   * <p>The ID of an AWS managed customer master key (CMK) for Amazon SNS or a custom
   *          CMK.</p>
   */
  KmsMasterKeyId?: string;

  /**
   * <p>Subscription is an embedded property that describes the subscription endpoints of an Amazon SNS topic.</p>
   */
  Subscription?: AwsSnsTopicSubscription[];

  /**
   * <p>The name of the topic.</p>
   */
  TopicName?: string;

  /**
   * <p>The subscription's owner.</p>
   */
  Owner?: string;
}

export namespace AwsSnsTopicDetails {
  export const filterSensitiveLog = (obj: AwsSnsTopicDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsSnsTopicDetails => __isa(o, "AwsSnsTopicDetails");
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
    ...obj,
  });
  export const isa = (o: any): o is AwsSnsTopicSubscription => __isa(o, "AwsSnsTopicSubscription");
}

/**
 * <p>Data about a queue.</p>
 */
export interface AwsSqsQueueDetails {
  __type?: "AwsSqsQueueDetails";
  /**
   * <p>The name of the new queue.</p>
   */
  QueueName?: string;

  /**
   * <p>The ID of an AWS managed customer master key (CMK) for Amazon SQS or a custom
   *          CMK.</p>
   */
  KmsMasterKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dead-letter queue to which Amazon SQS moves
   *          messages after the value of <code>maxReceiveCount</code> is exceeded. </p>
   */
  DeadLetterTargetArn?: string;

  /**
   * <p>The length of time, in seconds, for which Amazon SQS can reuse a data key to encrypt or decrypt messages before calling AWS KMS again.</p>
   */
  KmsDataKeyReusePeriodSeconds?: number;
}

export namespace AwsSqsQueueDetails {
  export const filterSensitiveLog = (obj: AwsSqsQueueDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsSqsQueueDetails => __isa(o, "AwsSqsQueueDetails");
}

/**
 * <p>Details about a WAF WebACL.</p>
 */
export interface AwsWafWebAclDetails {
  __type?: "AwsWafWebAclDetails";
  /**
   * <p>A unique identifier for a WebACL.</p>
   */
  WebAclId?: string;

  /**
   * <p>A friendly name or description of the WebACL. You can't change the name of a WebACL
   *          after you create it.</p>
   */
  Name?: string;

  /**
   * <p>An array that contains the action for each rule in a WebACL, the priority of the rule,
   *          and the ID of the rule.</p>
   */
  Rules?: AwsWafWebAclRule[];

  /**
   * <p>The action to perform if none of the rules contained in the WebACL match.</p>
   */
  DefaultAction?: string;
}

export namespace AwsWafWebAclDetails {
  export const filterSensitiveLog = (obj: AwsWafWebAclDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsWafWebAclDetails => __isa(o, "AwsWafWebAclDetails");
}

/**
 * <p>Details for a rule in a WAF WebACL.</p>
 */
export interface AwsWafWebAclRule {
  __type?: "AwsWafWebAclRule";
  /**
   * <p>Use the <code>OverrideAction</code> to test your RuleGroup.</p>
   *          <p>Any rule in a RuleGroup can potentially block a request. If you set the
   *             <code>OverrideAction</code> to <code>None</code>, the RuleGroup blocks a request if any
   *          individual rule in the RuleGroup matches the request and is configured to block that
   *          request.</p>
   *          <p>However, if you first want to test the RuleGroup, set the <code>OverrideAction</code> to
   *             <code>Count</code>. The RuleGroup then overrides any block action specified by
   *          individual rules contained within the group. Instead of blocking matching requests, those
   *          requests are counted.</p>
   *          <p>
   *             <code>ActivatedRule</code>|<code>OverrideAction</code> applies only when updating or
   *          adding a RuleGroup to a WebACL. In this case you do not use
   *             <code>ActivatedRule</code>|<code>Action</code>. For all other update requests,
   *             <code>ActivatedRule</code>|<code>Action</code> is used instead of
   *             <code>ActivatedRule</code>|<code>OverrideAction</code>. </p>
   */
  OverrideAction?: WafOverrideAction;

  /**
   * <p>Specifies the action that CloudFront or AWS WAF takes when a web request matches the
   *          conditions in the rule. </p>
   */
  Action?: WafAction;

  /**
   * <p>Specifies the order in which the rules in a WebACL are evaluated. Rules with a lower
   *          value for <code>Priority</code> are evaluated before rules with a higher value. The value
   *          must be a unique integer. If you add multiple rules to a WebACL, the values do not need to
   *          be consecutive.</p>
   */
  Priority?: number;

  /**
   * <p>The identifier for a rule.</p>
   */
  RuleId?: string;

  /**
   * <p>The rule type.</p>
   *          <p>Valid values: <code>REGULAR</code> | <code>RATE_BASED</code> | <code>GROUP</code>
   *          </p>
   *          <p>The default is <code>REGULAR</code>.</p>
   */
  Type?: string;

  /**
   * <p>Rules to exclude from a rule group.</p>
   */
  ExcludedRules?: WafExcludedRule[];
}

export namespace AwsWafWebAclRule {
  export const filterSensitiveLog = (obj: AwsWafWebAclRule): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AwsWafWebAclRule => __isa(o, "AwsWafWebAclRule");
}

export interface BatchDisableStandardsRequest {
  __type?: "BatchDisableStandardsRequest";
  /**
   * <p>The ARNs of the standards subscriptions to disable.</p>
   */
  StandardsSubscriptionArns: string[] | undefined;
}

export namespace BatchDisableStandardsRequest {
  export const filterSensitiveLog = (obj: BatchDisableStandardsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchDisableStandardsRequest => __isa(o, "BatchDisableStandardsRequest");
}

export interface BatchDisableStandardsResponse {
  __type?: "BatchDisableStandardsResponse";
  /**
   * <p>The details of the standards subscriptions that were disabled.</p>
   */
  StandardsSubscriptions?: StandardsSubscription[];
}

export namespace BatchDisableStandardsResponse {
  export const filterSensitiveLog = (obj: BatchDisableStandardsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchDisableStandardsResponse => __isa(o, "BatchDisableStandardsResponse");
}

export interface BatchEnableStandardsRequest {
  __type?: "BatchEnableStandardsRequest";
  /**
   * <p>The list of standards checks to enable.</p>
   */
  StandardsSubscriptionRequests: StandardsSubscriptionRequest[] | undefined;
}

export namespace BatchEnableStandardsRequest {
  export const filterSensitiveLog = (obj: BatchEnableStandardsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchEnableStandardsRequest => __isa(o, "BatchEnableStandardsRequest");
}

export interface BatchEnableStandardsResponse {
  __type?: "BatchEnableStandardsResponse";
  /**
   * <p>The details of the standards subscriptions that were enabled.</p>
   */
  StandardsSubscriptions?: StandardsSubscription[];
}

export namespace BatchEnableStandardsResponse {
  export const filterSensitiveLog = (obj: BatchEnableStandardsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchEnableStandardsResponse => __isa(o, "BatchEnableStandardsResponse");
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
    ...obj,
  });
  export const isa = (o: any): o is BatchImportFindingsRequest => __isa(o, "BatchImportFindingsRequest");
}

export interface BatchImportFindingsResponse {
  __type?: "BatchImportFindingsResponse";
  /**
   * <p>The number of findings that failed to import.</p>
   */
  FailedCount: number | undefined;

  /**
   * <p>The list of findings that failed to import.</p>
   */
  FailedFindings?: ImportFindingsError[];

  /**
   * <p>The number of findings that were successfully imported.</p>
   */
  SuccessCount: number | undefined;
}

export namespace BatchImportFindingsResponse {
  export const filterSensitiveLog = (obj: BatchImportFindingsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchImportFindingsResponse => __isa(o, "BatchImportFindingsResponse");
}

export interface BatchUpdateFindingsRequest {
  __type?: "BatchUpdateFindingsRequest";
  /**
   * <p>Indicates the veracity of a finding.</p>
   *          <p>The available values for <code>VerificationState</code> are  as follows.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code> – The default disposition of a security finding</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TRUE_POSITIVE</code> – The security finding is confirmed</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FALSE_POSITIVE</code> – The security finding was determined to be a false
   *                alarm</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BENIGN_POSITIVE</code> – A special case of <code>TRUE_POSITIVE</code> where
   *                the finding doesn't pose any threat, is expected, or both</p>
   *             </li>
   *          </ul>
   */
  VerificationState?: VerificationState | string;

  /**
   * <p>A list of findings that are related to the updated findings.</p>
   */
  RelatedFindings?: RelatedFinding[];

  /**
   * <p>The list of findings to update. <code>BatchUpdateFindings</code> can be used to update
   *          up to 100 findings at a time.</p>
   *          <p>For each finding, the list provides the finding identifier and the ARN of the finding
   *          provider.</p>
   */
  FindingIdentifiers: AwsSecurityFindingIdentifier[] | undefined;

  /**
   * <p>The updated value for the finding confidence. Confidence is defined as the likelihood
   *          that a finding accurately identifies the behavior or issue that it was intended to
   *          identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   */
  Confidence?: number;

  /**
   * <p>One or more finding types in the format of namespace/category/classifier that classify a
   *          finding.</p>
   *          <p>Valid namespace values are as follows.</p>
   *          <ul>
   *             <li>
   *                <p>Software and Configuration Checks</p>
   *             </li>
   *             <li>
   *                <p>TTPs</p>
   *             </li>
   *             <li>
   *                <p>Effects</p>
   *             </li>
   *             <li>
   *                <p>Unusual Behaviors</p>
   *             </li>
   *             <li>
   *                <p>Sensitive Data Identifications </p>
   *             </li>
   *          </ul>
   */
  Types?: string[];

  /**
   * <p>The updated note.</p>
   */
  Note?: NoteUpdate;

  /**
   * <p>The updated value for the level of importance assigned to the resources associated with
   *          the findings.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources. </p>
   */
  Criticality?: number;

  /**
   * <p>A list of name/value string pairs associated with the finding. These are custom,
   *          user-defined fields added to a finding.</p>
   */
  UserDefinedFields?: { [key: string]: string };

  /**
   * <p>Used to update the workflow status of a finding.</p>
   *          <p>The workflow status indicates the progress of the investigation into the finding. </p>
   */
  Workflow?: WorkflowUpdate;

  /**
   * <p>Used to update the finding severity.</p>
   */
  Severity?: SeverityUpdate;
}

export namespace BatchUpdateFindingsRequest {
  export const filterSensitiveLog = (obj: BatchUpdateFindingsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchUpdateFindingsRequest => __isa(o, "BatchUpdateFindingsRequest");
}

export interface BatchUpdateFindingsResponse {
  __type?: "BatchUpdateFindingsResponse";
  /**
   * <p>The list of findings that were updated successfully.</p>
   */
  ProcessedFindings: AwsSecurityFindingIdentifier[] | undefined;

  /**
   * <p>The list of findings that were not updated.</p>
   */
  UnprocessedFindings: BatchUpdateFindingsUnprocessedFinding[] | undefined;
}

export namespace BatchUpdateFindingsResponse {
  export const filterSensitiveLog = (obj: BatchUpdateFindingsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchUpdateFindingsResponse => __isa(o, "BatchUpdateFindingsResponse");
}

/**
 * <p>A finding from a <code>BatchUpdateFindings</code> request that Security Hub was unable to
 *          update.</p>
 */
export interface BatchUpdateFindingsUnprocessedFinding {
  __type?: "BatchUpdateFindingsUnprocessedFinding";
  /**
   * <p>The identifier of the finding that was not updated.</p>
   */
  FindingIdentifier: AwsSecurityFindingIdentifier | undefined;

  /**
   * <p>The message associated with the error.</p>
   */
  ErrorMessage: string | undefined;

  /**
   * <p>The code associated with the error.</p>
   */
  ErrorCode: string | undefined;
}

export namespace BatchUpdateFindingsUnprocessedFinding {
  export const filterSensitiveLog = (obj: BatchUpdateFindingsUnprocessedFinding): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchUpdateFindingsUnprocessedFinding =>
    __isa(o, "BatchUpdateFindingsUnprocessedFinding");
}

/**
 * <p>An IPv4 CIDR block association.</p>
 */
export interface CidrBlockAssociation {
  __type?: "CidrBlockAssociation";
  /**
   * <p>The association ID for the IPv4 CIDR block.</p>
   */
  AssociationId?: string;

  /**
   * <p>The IPv4 CIDR block.</p>
   */
  CidrBlock?: string;

  /**
   * <p>Information about the state of the IPv4 CIDR block.</p>
   */
  CidrBlockState?: string;
}

export namespace CidrBlockAssociation {
  export const filterSensitiveLog = (obj: CidrBlockAssociation): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CidrBlockAssociation => __isa(o, "CidrBlockAssociation");
}

/**
 * <p>Contains finding details that are specific to control-based findings. Only returned for
 *          findings generated from controls.</p>
 */
export interface Compliance {
  __type?: "Compliance";
  /**
   * <p>The result of a standards check.</p>
   *          <p>The valid values for <code>Status</code> are as follows.</p>
   *          <ul>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>PASSED</code> - Standards check passed for all evaluated
   *                      resources.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>WARNING</code> - Some information is missing or this check is not
   *                      supported for your configuration.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>FAILED</code> - Standards check failed for at least one evaluated
   *                      resource.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>NOT_AVAILABLE</code> - Check could not be performed due to a service
   *                      outage, API error, or because the result of the AWS Config evaluation was
   *                         <code>NOT_APPLICABLE</code>. If the AWS Config evaluation result was
   *                         <code>NOT_APPLICABLE</code>, then after 3 days, Security Hub automatically archives
   *                      the finding.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  Status?: ComplianceStatus | string;

  /**
   * <p>For a control, the industry or regulatory framework requirements that are related to the
   *          control. The check for that control is aligned with these requirements.</p>
   */
  RelatedRequirements?: string[];

  /**
   * <p>For findings generated from controls, a list of reasons behind the value of
   *             <code>Status</code>. For the list of status reason codes and their meanings, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-results.html#securityhub-standards-results-asff">Standards-related information in the ASFF</a> in the
   *             <i>AWS Security Hub User Guide</i>. </p>
   */
  StatusReasons?: StatusReason[];
}

export namespace Compliance {
  export const filterSensitiveLog = (obj: Compliance): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Compliance => __isa(o, "Compliance");
}

export enum ComplianceStatus {
  FAILED = "FAILED",
  NOT_AVAILABLE = "NOT_AVAILABLE",
  PASSED = "PASSED",
  WARNING = "WARNING",
}

/**
 * <p>Container details related to a finding.</p>
 */
export interface ContainerDetails {
  __type?: "ContainerDetails";
  /**
   * <p>The name of the container related to a finding.</p>
   */
  Name?: string;

  /**
   * <p>The identifier of the image related to a finding.</p>
   */
  ImageId?: string;

  /**
   * <p>The date and time when the container started.</p>
   */
  LaunchedAt?: string;

  /**
   * <p>The name of the image related to a finding.</p>
   */
  ImageName?: string;
}

export namespace ContainerDetails {
  export const filterSensitiveLog = (obj: ContainerDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ContainerDetails => __isa(o, "ContainerDetails");
}

export enum ControlStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export interface CreateActionTargetRequest {
  __type?: "CreateActionTargetRequest";
  /**
   * <p>The ID for the custom action target.</p>
   */
  Id: string | undefined;

  /**
   * <p>The description for the custom action target.</p>
   */
  Description: string | undefined;

  /**
   * <p>The name of the custom action target.</p>
   */
  Name: string | undefined;
}

export namespace CreateActionTargetRequest {
  export const filterSensitiveLog = (obj: CreateActionTargetRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateActionTargetRequest => __isa(o, "CreateActionTargetRequest");
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
    ...obj,
  });
  export const isa = (o: any): o is CreateActionTargetResponse => __isa(o, "CreateActionTargetResponse");
}

export interface CreateInsightRequest {
  __type?: "CreateInsightRequest";
  /**
   * <p>The name of the custom insight to create.</p>
   */
  Name: string | undefined;

  /**
   * <p>The attribute used to group the findings for the insight. The grouping attribute
   *          identifies the type of item that the insight applies to. For example, if an insight is
   *          grouped by resource identifier, then the insight produces a list of resource
   *          identifiers.</p>
   */
  GroupByAttribute: string | undefined;

  /**
   * <p>One or more attributes used to filter the findings included in the insight. The insight
   *          only includes findings that match the criteria defined in the filters.</p>
   */
  Filters: AwsSecurityFindingFilters | undefined;
}

export namespace CreateInsightRequest {
  export const filterSensitiveLog = (obj: CreateInsightRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateInsightRequest => __isa(o, "CreateInsightRequest");
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
    ...obj,
  });
  export const isa = (o: any): o is CreateInsightResponse => __isa(o, "CreateInsightResponse");
}

export interface CreateMembersRequest {
  __type?: "CreateMembersRequest";
  /**
   * <p>The list of accounts to associate with the Security Hub master account. For each account, the
   *          list includes the account ID and the email address.</p>
   */
  AccountDetails?: AccountDetails[];
}

export namespace CreateMembersRequest {
  export const filterSensitiveLog = (obj: CreateMembersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateMembersRequest => __isa(o, "CreateMembersRequest");
}

export interface CreateMembersResponse {
  __type?: "CreateMembersResponse";
  /**
   * <p>The list of AWS accounts that were not processed. For each account, the list includes
   *          the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace CreateMembersResponse {
  export const filterSensitiveLog = (obj: CreateMembersResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateMembersResponse => __isa(o, "CreateMembersResponse");
}

/**
 * <p>CVSS scores from the advisory related to the vulnerability.</p>
 */
export interface Cvss {
  __type?: "Cvss";
  /**
   * <p>The version of CVSS for the CVSS score.</p>
   */
  Version?: string;

  /**
   * <p>The base CVSS score.</p>
   */
  BaseScore?: number;

  /**
   * <p>The base scoring vector for the CVSS score.</p>
   */
  BaseVector?: string;
}

export namespace Cvss {
  export const filterSensitiveLog = (obj: Cvss): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Cvss => __isa(o, "Cvss");
}

/**
 * <p>A date filter for querying findings.</p>
 */
export interface DateFilter {
  __type?: "DateFilter";
  /**
   * <p>A start date for the date filter.</p>
   */
  Start?: string;

  /**
   * <p>An end date for the date filter.</p>
   */
  End?: string;

  /**
   * <p>A date range for the date filter.</p>
   */
  DateRange?: DateRange;
}

export namespace DateFilter {
  export const filterSensitiveLog = (obj: DateFilter): any => ({
    ...obj,
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
    ...obj,
  });
  export const isa = (o: any): o is DateRange => __isa(o, "DateRange");
}

export enum DateRangeUnit {
  DAYS = "DAYS",
}

export interface DeclineInvitationsRequest {
  __type?: "DeclineInvitationsRequest";
  /**
   * <p>The list of account IDs for the accounts from which to decline the invitations to
   *          Security Hub.</p>
   */
  AccountIds: string[] | undefined;
}

export namespace DeclineInvitationsRequest {
  export const filterSensitiveLog = (obj: DeclineInvitationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeclineInvitationsRequest => __isa(o, "DeclineInvitationsRequest");
}

export interface DeclineInvitationsResponse {
  __type?: "DeclineInvitationsResponse";
  /**
   * <p>The list of AWS accounts that were not processed. For each account, the list includes
   *          the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace DeclineInvitationsResponse {
  export const filterSensitiveLog = (obj: DeclineInvitationsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeclineInvitationsResponse => __isa(o, "DeclineInvitationsResponse");
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
    ...obj,
  });
  export const isa = (o: any): o is DeleteActionTargetRequest => __isa(o, "DeleteActionTargetRequest");
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
    ...obj,
  });
  export const isa = (o: any): o is DeleteActionTargetResponse => __isa(o, "DeleteActionTargetResponse");
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
    ...obj,
  });
  export const isa = (o: any): o is DeleteInsightRequest => __isa(o, "DeleteInsightRequest");
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
    ...obj,
  });
  export const isa = (o: any): o is DeleteInsightResponse => __isa(o, "DeleteInsightResponse");
}

export interface DeleteInvitationsRequest {
  __type?: "DeleteInvitationsRequest";
  /**
   * <p>The list of the account IDs that sent the invitations to delete.</p>
   */
  AccountIds: string[] | undefined;
}

export namespace DeleteInvitationsRequest {
  export const filterSensitiveLog = (obj: DeleteInvitationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteInvitationsRequest => __isa(o, "DeleteInvitationsRequest");
}

export interface DeleteInvitationsResponse {
  __type?: "DeleteInvitationsResponse";
  /**
   * <p>The list of AWS accounts for which the invitations were not deleted. For each account,
   *          the list includes the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace DeleteInvitationsResponse {
  export const filterSensitiveLog = (obj: DeleteInvitationsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteInvitationsResponse => __isa(o, "DeleteInvitationsResponse");
}

export interface DeleteMembersRequest {
  __type?: "DeleteMembersRequest";
  /**
   * <p>The list of account IDs for the member accounts to delete.</p>
   */
  AccountIds?: string[];
}

export namespace DeleteMembersRequest {
  export const filterSensitiveLog = (obj: DeleteMembersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteMembersRequest => __isa(o, "DeleteMembersRequest");
}

export interface DeleteMembersResponse {
  __type?: "DeleteMembersResponse";
  /**
   * <p>The list of AWS accounts that were not deleted. For each account, the list includes the
   *          account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace DeleteMembersResponse {
  export const filterSensitiveLog = (obj: DeleteMembersResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteMembersResponse => __isa(o, "DeleteMembersResponse");
}

export interface DescribeActionTargetsRequest {
  __type?: "DescribeActionTargetsRequest";
  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeActionTargets</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of custom action target ARNs for the custom action targets to retrieve.</p>
   */
  ActionTargetArns?: string[];
}

export namespace DescribeActionTargetsRequest {
  export const filterSensitiveLog = (obj: DescribeActionTargetsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeActionTargetsRequest => __isa(o, "DescribeActionTargetsRequest");
}

export interface DescribeActionTargetsResponse {
  __type?: "DescribeActionTargetsResponse";
  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>ActionTarget</code> objects. Each object includes the <code>ActionTargetArn</code>,
   *             <code>Description</code>, and <code>Name</code> of a custom action target available in
   *          Security Hub.</p>
   */
  ActionTargets: ActionTarget[] | undefined;
}

export namespace DescribeActionTargetsResponse {
  export const filterSensitiveLog = (obj: DescribeActionTargetsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeActionTargetsResponse => __isa(o, "DescribeActionTargetsResponse");
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
    ...obj,
  });
  export const isa = (o: any): o is DescribeHubRequest => __isa(o, "DescribeHubRequest");
}

export interface DescribeHubResponse {
  __type?: "DescribeHubResponse";
  /**
   * <p>Whether to automatically enable new controls when they are added to standards that are
   *          enabled.</p>
   *          <p>If set to <code>true</code>, then new controls for enabled standards are enabled
   *          automatically. If set to <code>false</code>, then new controls are not enabled.</p>
   */
  AutoEnableControls?: boolean;

  /**
   * <p>The ARN of the Hub resource that was retrieved.</p>
   */
  HubArn?: string;

  /**
   * <p>The date and time when Security Hub was enabled in the account.</p>
   */
  SubscribedAt?: string;
}

export namespace DescribeHubResponse {
  export const filterSensitiveLog = (obj: DescribeHubResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeHubResponse => __isa(o, "DescribeHubResponse");
}

export interface DescribeProductsRequest {
  __type?: "DescribeProductsRequest";
  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeProducts</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;
}

export namespace DescribeProductsRequest {
  export const filterSensitiveLog = (obj: DescribeProductsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeProductsRequest => __isa(o, "DescribeProductsRequest");
}

export interface DescribeProductsResponse {
  __type?: "DescribeProductsResponse";
  /**
   * <p>A list of products, including details for each product.</p>
   */
  Products: Product[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeProductsResponse {
  export const filterSensitiveLog = (obj: DescribeProductsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeProductsResponse => __isa(o, "DescribeProductsResponse");
}

export interface DescribeStandardsControlsRequest {
  __type?: "DescribeStandardsControlsRequest";
  /**
   * <p>The maximum number of security standard controls to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The ARN of a resource that represents your subscription to a supported standard.</p>
   */
  StandardsSubscriptionArn: string | undefined;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeStandardsControls</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;
}

export namespace DescribeStandardsControlsRequest {
  export const filterSensitiveLog = (obj: DescribeStandardsControlsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeStandardsControlsRequest => __isa(o, "DescribeStandardsControlsRequest");
}

export interface DescribeStandardsControlsResponse {
  __type?: "DescribeStandardsControlsResponse";
  /**
   * <p>A list of security standards controls.</p>
   */
  Controls?: StandardsControl[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeStandardsControlsResponse {
  export const filterSensitiveLog = (obj: DescribeStandardsControlsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeStandardsControlsResponse => __isa(o, "DescribeStandardsControlsResponse");
}

export interface DescribeStandardsRequest {
  __type?: "DescribeStandardsRequest";
  /**
   * <p>The maximum number of standards to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeStandards</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;
}

export namespace DescribeStandardsRequest {
  export const filterSensitiveLog = (obj: DescribeStandardsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeStandardsRequest => __isa(o, "DescribeStandardsRequest");
}

export interface DescribeStandardsResponse {
  __type?: "DescribeStandardsResponse";
  /**
   * <p>A list of available standards.</p>
   */
  Standards?: Standard[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeStandardsResponse {
  export const filterSensitiveLog = (obj: DescribeStandardsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeStandardsResponse => __isa(o, "DescribeStandardsResponse");
}

export interface DisableImportFindingsForProductRequest {
  __type?: "DisableImportFindingsForProductRequest";
  /**
   * <p>The ARN of the integrated product to disable the integration for.</p>
   */
  ProductSubscriptionArn: string | undefined;
}

export namespace DisableImportFindingsForProductRequest {
  export const filterSensitiveLog = (obj: DisableImportFindingsForProductRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisableImportFindingsForProductRequest =>
    __isa(o, "DisableImportFindingsForProductRequest");
}

export interface DisableImportFindingsForProductResponse {
  __type?: "DisableImportFindingsForProductResponse";
}

export namespace DisableImportFindingsForProductResponse {
  export const filterSensitiveLog = (obj: DisableImportFindingsForProductResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisableImportFindingsForProductResponse =>
    __isa(o, "DisableImportFindingsForProductResponse");
}

export interface DisableSecurityHubRequest {
  __type?: "DisableSecurityHubRequest";
}

export namespace DisableSecurityHubRequest {
  export const filterSensitiveLog = (obj: DisableSecurityHubRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisableSecurityHubRequest => __isa(o, "DisableSecurityHubRequest");
}

export interface DisableSecurityHubResponse {
  __type?: "DisableSecurityHubResponse";
}

export namespace DisableSecurityHubResponse {
  export const filterSensitiveLog = (obj: DisableSecurityHubResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisableSecurityHubResponse => __isa(o, "DisableSecurityHubResponse");
}

export interface DisassociateFromMasterAccountRequest {
  __type?: "DisassociateFromMasterAccountRequest";
}

export namespace DisassociateFromMasterAccountRequest {
  export const filterSensitiveLog = (obj: DisassociateFromMasterAccountRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociateFromMasterAccountRequest =>
    __isa(o, "DisassociateFromMasterAccountRequest");
}

export interface DisassociateFromMasterAccountResponse {
  __type?: "DisassociateFromMasterAccountResponse";
}

export namespace DisassociateFromMasterAccountResponse {
  export const filterSensitiveLog = (obj: DisassociateFromMasterAccountResponse): any => ({
    ...obj,
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
    ...obj,
  });
  export const isa = (o: any): o is DisassociateMembersRequest => __isa(o, "DisassociateMembersRequest");
}

export interface DisassociateMembersResponse {
  __type?: "DisassociateMembersResponse";
}

export namespace DisassociateMembersResponse {
  export const filterSensitiveLog = (obj: DisassociateMembersResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociateMembersResponse => __isa(o, "DisassociateMembersResponse");
}

export interface EnableImportFindingsForProductRequest {
  __type?: "EnableImportFindingsForProductRequest";
  /**
   * <p>The ARN of the product to enable the integration for.</p>
   */
  ProductArn: string | undefined;
}

export namespace EnableImportFindingsForProductRequest {
  export const filterSensitiveLog = (obj: EnableImportFindingsForProductRequest): any => ({
    ...obj,
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
  export const filterSensitiveLog = (obj: EnableImportFindingsForProductResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EnableImportFindingsForProductResponse =>
    __isa(o, "EnableImportFindingsForProductResponse");
}

export interface EnableSecurityHubRequest {
  __type?: "EnableSecurityHubRequest";
  /**
   * <p>The tags to add to the hub resource when you enable Security Hub.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>Whether to enable the security standards that Security Hub has designated as automatically
   *          enabled. If you do not provide a value for <code>EnableDefaultStandards</code>, it is set
   *          to <code>true</code>. To not enable the automatically enabled standards, set
   *             <code>EnableDefaultStandards</code> to <code>false</code>.</p>
   */
  EnableDefaultStandards?: boolean;
}

export namespace EnableSecurityHubRequest {
  export const filterSensitiveLog = (obj: EnableSecurityHubRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EnableSecurityHubRequest => __isa(o, "EnableSecurityHubRequest");
}

export interface EnableSecurityHubResponse {
  __type?: "EnableSecurityHubResponse";
}

export namespace EnableSecurityHubResponse {
  export const filterSensitiveLog = (obj: EnableSecurityHubResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EnableSecurityHubResponse => __isa(o, "EnableSecurityHubResponse");
}

export interface GetEnabledStandardsRequest {
  __type?: "GetEnabledStandardsRequest";
  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>GetEnabledStandards</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>The list of the standards subscription ARNs for the standards to retrieve.</p>
   */
  StandardsSubscriptionArns?: string[];
}

export namespace GetEnabledStandardsRequest {
  export const filterSensitiveLog = (obj: GetEnabledStandardsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEnabledStandardsRequest => __isa(o, "GetEnabledStandardsRequest");
}

export interface GetEnabledStandardsResponse {
  __type?: "GetEnabledStandardsResponse";
  /**
   * <p>The list of <code>StandardsSubscriptions</code> objects that include information about
   *          the enabled standards.</p>
   */
  StandardsSubscriptions?: StandardsSubscription[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace GetEnabledStandardsResponse {
  export const filterSensitiveLog = (obj: GetEnabledStandardsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEnabledStandardsResponse => __isa(o, "GetEnabledStandardsResponse");
}

export interface GetFindingsRequest {
  __type?: "GetFindingsRequest";
  /**
   * <p>The finding attributes used to define a condition to filter the returned
   *          findings.</p>
   *          <p>Note that in the available filter fields, <code>WorkflowState</code> is deprecated. To
   *          search for a finding based on its workflow status, use <code>WorkflowStatus</code>.</p>
   */
  Filters?: AwsSecurityFindingFilters;

  /**
   * <p>The finding attributes used to sort the list of returned findings.</p>
   */
  SortCriteria?: SortCriterion[];

  /**
   * <p>The maximum number of findings to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>GetFindings</code> operation, set the value of this parameter to
   *          <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;
}

export namespace GetFindingsRequest {
  export const filterSensitiveLog = (obj: GetFindingsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetFindingsRequest => __isa(o, "GetFindingsRequest");
}

export interface GetFindingsResponse {
  __type?: "GetFindingsResponse";
  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The findings that matched the filters specified in the request.</p>
   */
  Findings: AwsSecurityFinding[] | undefined;
}

export namespace GetFindingsResponse {
  export const filterSensitiveLog = (obj: GetFindingsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetFindingsResponse => __isa(o, "GetFindingsResponse");
}

export interface GetInsightResultsRequest {
  __type?: "GetInsightResultsRequest";
  /**
   * <p>The ARN of the insight for which to return results.</p>
   */
  InsightArn: string | undefined;
}

export namespace GetInsightResultsRequest {
  export const filterSensitiveLog = (obj: GetInsightResultsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetInsightResultsRequest => __isa(o, "GetInsightResultsRequest");
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
    ...obj,
  });
  export const isa = (o: any): o is GetInsightResultsResponse => __isa(o, "GetInsightResultsResponse");
}

export interface GetInsightsRequest {
  __type?: "GetInsightsRequest";
  /**
   * <p>The ARNs of the insights to describe. If you do not provide any insight ARNs, then
   *             <code>GetInsights</code> returns all of your custom insights. It does not return any
   *          managed insights.</p>
   */
  InsightArns?: string[];

  /**
   * <p>The maximum number of items to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>GetInsights</code> operation, set the value of this parameter to
   *          <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;
}

export namespace GetInsightsRequest {
  export const filterSensitiveLog = (obj: GetInsightsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetInsightsRequest => __isa(o, "GetInsightsRequest");
}

export interface GetInsightsResponse {
  __type?: "GetInsightsResponse";
  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The insights returned by the operation.</p>
   */
  Insights: Insight[] | undefined;
}

export namespace GetInsightsResponse {
  export const filterSensitiveLog = (obj: GetInsightsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetInsightsResponse => __isa(o, "GetInsightsResponse");
}

export interface GetInvitationsCountRequest {
  __type?: "GetInvitationsCountRequest";
}

export namespace GetInvitationsCountRequest {
  export const filterSensitiveLog = (obj: GetInvitationsCountRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetInvitationsCountRequest => __isa(o, "GetInvitationsCountRequest");
}

export interface GetInvitationsCountResponse {
  __type?: "GetInvitationsCountResponse";
  /**
   * <p>The number of all membership invitations sent to this Security Hub member account, not
   *          including the currently accepted invitation.</p>
   */
  InvitationsCount?: number;
}

export namespace GetInvitationsCountResponse {
  export const filterSensitiveLog = (obj: GetInvitationsCountResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetInvitationsCountResponse => __isa(o, "GetInvitationsCountResponse");
}

export interface GetMasterAccountRequest {
  __type?: "GetMasterAccountRequest";
}

export namespace GetMasterAccountRequest {
  export const filterSensitiveLog = (obj: GetMasterAccountRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetMasterAccountRequest => __isa(o, "GetMasterAccountRequest");
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
    ...obj,
  });
  export const isa = (o: any): o is GetMasterAccountResponse => __isa(o, "GetMasterAccountResponse");
}

export interface GetMembersRequest {
  __type?: "GetMembersRequest";
  /**
   * <p>The list of account IDs for the Security Hub member accounts to return the details for. </p>
   */
  AccountIds: string[] | undefined;
}

export namespace GetMembersRequest {
  export const filterSensitiveLog = (obj: GetMembersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetMembersRequest => __isa(o, "GetMembersRequest");
}

export interface GetMembersResponse {
  __type?: "GetMembersResponse";
  /**
   * <p>The list of details about the Security Hub member accounts.</p>
   */
  Members?: Member[];

  /**
   * <p>The list of AWS accounts that could not be processed. For each account, the list
   *          includes the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace GetMembersResponse {
  export const filterSensitiveLog = (obj: GetMembersResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetMembersResponse => __isa(o, "GetMembersResponse");
}

/**
 * <p>The list of the findings that cannot be imported. For each finding, the list provides
 *          the error.</p>
 */
export interface ImportFindingsError {
  __type?: "ImportFindingsError";
  /**
   * <p>The message of the error returned by the <code>BatchImportFindings</code>
   *          operation.</p>
   */
  ErrorMessage: string | undefined;

  /**
   * <p>The code of the error returned by the <code>BatchImportFindings</code> operation.</p>
   */
  ErrorCode: string | undefined;

  /**
   * <p>The identifier of the finding that could not be updated.</p>
   */
  Id: string | undefined;
}

export namespace ImportFindingsError {
  export const filterSensitiveLog = (obj: ImportFindingsError): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ImportFindingsError => __isa(o, "ImportFindingsError");
}

/**
 * <p>Contains information about a Security Hub insight.</p>
 */
export interface Insight {
  __type?: "Insight";
  /**
   * <p>The name of a Security Hub insight.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ARN of a Security Hub insight.</p>
   */
  InsightArn: string | undefined;

  /**
   * <p>One or more attributes used to filter the findings included in the insight. The insight
   *          only includes findings that match the criteria defined in the filters.</p>
   */
  Filters: AwsSecurityFindingFilters | undefined;

  /**
   * <p>The grouping attribute for the insight's findings. Indicates how to group the matching
   *          findings, and identifies the type of item that the insight applies to. For example, if an
   *          insight is grouped by resource identifier, then the insight produces a list of resource
   *          identifiers.</p>
   */
  GroupByAttribute: string | undefined;
}

export namespace Insight {
  export const filterSensitiveLog = (obj: Insight): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Insight => __isa(o, "Insight");
}

/**
 * <p>The insight results returned by the <code>GetInsightResults</code> operation.</p>
 */
export interface InsightResults {
  __type?: "InsightResults";
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

  /**
   * <p>The attribute that the findings are grouped by for the insight whose results are
   *          returned by the <code>GetInsightResults</code> operation.</p>
   */
  GroupByAttribute: string | undefined;
}

export namespace InsightResults {
  export const filterSensitiveLog = (obj: InsightResults): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InsightResults => __isa(o, "InsightResults");
}

/**
 * <p>The insight result values returned by the <code>GetInsightResults</code>
 *          operation.</p>
 */
export interface InsightResultValue {
  __type?: "InsightResultValue";
  /**
   * <p>The value of the attribute that the findings are grouped by for the insight whose
   *          results are returned by the <code>GetInsightResults</code> operation.</p>
   */
  GroupByAttributeValue: string | undefined;

  /**
   * <p>The number of findings returned for each <code>GroupByAttributeValue</code>.</p>
   */
  Count: number | undefined;
}

export namespace InsightResultValue {
  export const filterSensitiveLog = (obj: InsightResultValue): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InsightResultValue => __isa(o, "InsightResultValue");
}

export enum IntegrationType {
  RECEIVE_FINDINGS_FROM_SECURITY_HUB = "RECEIVE_FINDINGS_FROM_SECURITY_HUB",
  SEND_FINDINGS_TO_SECURITY_HUB = "SEND_FINDINGS_TO_SECURITY_HUB",
}

/**
 * <p>Internal server error.</p>
 */
export interface InternalException extends __SmithyException, $MetadataBearer {
  name: "InternalException";
  $fault: "server";
  Message?: string;
  Code?: string;
}

export namespace InternalException {
  export const filterSensitiveLog = (obj: InternalException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalException => __isa(o, "InternalException");
}

/**
 * <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
 */
export interface InvalidAccessException extends __SmithyException, $MetadataBearer {
  name: "InvalidAccessException";
  $fault: "client";
  Code?: string;
  Message?: string;
}

export namespace InvalidAccessException {
  export const filterSensitiveLog = (obj: InvalidAccessException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidAccessException => __isa(o, "InvalidAccessException");
}

/**
 * <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 */
export interface InvalidInputException extends __SmithyException, $MetadataBearer {
  name: "InvalidInputException";
  $fault: "client";
  Message?: string;
  Code?: string;
}

export namespace InvalidInputException {
  export const filterSensitiveLog = (obj: InvalidInputException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidInputException => __isa(o, "InvalidInputException");
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
   * <p>The current status of the association between the member and master accounts.</p>
   */
  MemberStatus?: string;

  /**
   * <p>The ID of the invitation sent to the member account.</p>
   */
  InvitationId?: string;

  /**
   * <p>The timestamp of when the invitation was sent.</p>
   */
  InvitedAt?: Date;
}

export namespace Invitation {
  export const filterSensitiveLog = (obj: Invitation): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Invitation => __isa(o, "Invitation");
}

export interface InviteMembersRequest {
  __type?: "InviteMembersRequest";
  /**
   * <p>The list of account IDs of the AWS accounts to invite to Security Hub as members. </p>
   */
  AccountIds?: string[];
}

export namespace InviteMembersRequest {
  export const filterSensitiveLog = (obj: InviteMembersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InviteMembersRequest => __isa(o, "InviteMembersRequest");
}

export interface InviteMembersResponse {
  __type?: "InviteMembersResponse";
  /**
   * <p>The list of AWS accounts that could not be processed. For each account, the list
   *          includes the account ID and the email address.</p>
   */
  UnprocessedAccounts?: Result[];
}

export namespace InviteMembersResponse {
  export const filterSensitiveLog = (obj: InviteMembersResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InviteMembersResponse => __isa(o, "InviteMembersResponse");
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
    ...obj,
  });
  export const isa = (o: any): o is IpFilter => __isa(o, "IpFilter");
}

/**
 * <p>An IPV6 CIDR block association.</p>
 */
export interface Ipv6CidrBlockAssociation {
  __type?: "Ipv6CidrBlockAssociation";
  /**
   * <p>The association ID for the IPv6 CIDR block.</p>
   */
  AssociationId?: string;

  /**
   * <p>Information about the state of the CIDR block.</p>
   */
  CidrBlockState?: string;

  /**
   * <p>The IPv6 CIDR block.</p>
   */
  Ipv6CidrBlock?: string;
}

export namespace Ipv6CidrBlockAssociation {
  export const filterSensitiveLog = (obj: Ipv6CidrBlockAssociation): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Ipv6CidrBlockAssociation => __isa(o, "Ipv6CidrBlockAssociation");
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
    ...obj,
  });
  export const isa = (o: any): o is KeywordFilter => __isa(o, "KeywordFilter");
}

/**
 * <p>The request was rejected because it attempted to create resources beyond the current AWS
 *          account limits. The error code describes the limit exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Code?: string;
  Message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LimitExceededException => __isa(o, "LimitExceededException");
}

export interface ListEnabledProductsForImportRequest {
  __type?: "ListEnabledProductsForImportRequest";
  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListEnabledProductsForImport</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return in the response.</p>
   */
  MaxResults?: number;
}

export namespace ListEnabledProductsForImportRequest {
  export const filterSensitiveLog = (obj: ListEnabledProductsForImportRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListEnabledProductsForImportRequest =>
    __isa(o, "ListEnabledProductsForImportRequest");
}

export interface ListEnabledProductsForImportResponse {
  __type?: "ListEnabledProductsForImportResponse";
  /**
   * <p>The list of ARNs for the resources that represent your subscriptions to products. </p>
   */
  ProductSubscriptions?: string[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListEnabledProductsForImportResponse {
  export const filterSensitiveLog = (obj: ListEnabledProductsForImportResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListEnabledProductsForImportResponse =>
    __isa(o, "ListEnabledProductsForImportResponse");
}

export interface ListInvitationsRequest {
  __type?: "ListInvitationsRequest";
  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListInvitations</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return in the response. </p>
   */
  MaxResults?: number;
}

export namespace ListInvitationsRequest {
  export const filterSensitiveLog = (obj: ListInvitationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListInvitationsRequest => __isa(o, "ListInvitationsRequest");
}

export interface ListInvitationsResponse {
  __type?: "ListInvitationsResponse";
  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The details of the invitations returned by the operation.</p>
   */
  Invitations?: Invitation[];
}

export namespace ListInvitationsResponse {
  export const filterSensitiveLog = (obj: ListInvitationsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListInvitationsResponse => __isa(o, "ListInvitationsResponse");
}

export interface ListMembersRequest {
  __type?: "ListMembersRequest";
  /**
   * <p>Specifies which member accounts to include in the response based on their relationship
   *          status with the master account. The default value is <code>TRUE</code>.</p>
   *          <p>If <code>OnlyAssociated</code> is set to <code>TRUE</code>, the response includes member
   *          accounts whose relationship status with the master is set to <code>ENABLED</code> or
   *             <code>DISABLED</code>.</p>
   *          <p>If <code>OnlyAssociated</code> is set to <code>FALSE</code>, the response includes all
   *          existing member accounts. </p>
   */
  OnlyAssociated?: boolean;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>ListMembers</code> operation, set the value of this parameter to
   *          <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return in the response. </p>
   */
  MaxResults?: number;
}

export namespace ListMembersRequest {
  export const filterSensitiveLog = (obj: ListMembersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListMembersRequest => __isa(o, "ListMembersRequest");
}

export interface ListMembersResponse {
  __type?: "ListMembersResponse";
  /**
   * <p>Member details returned by the operation.</p>
   */
  Members?: Member[];

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListMembersResponse {
  export const filterSensitiveLog = (obj: ListMembersResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListMembersResponse => __isa(o, "ListMembersResponse");
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
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceRequest => __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The tags associated with a resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceResponse => __isa(o, "ListTagsForResourceResponse");
}

/**
 * <p>Information about the state of the load balancer.</p>
 */
export interface LoadBalancerState {
  __type?: "LoadBalancerState";
  /**
   * <p>The state code. The initial state of the load balancer is provisioning.</p>
   *          <p>After the load balancer is fully set up and ready to route traffic, its state is
   *          active.</p>
   *          <p>If the load balancer could not be set up, its state is failed. </p>
   */
  Code?: string;

  /**
   * <p>A description of the state.</p>
   */
  Reason?: string;
}

export namespace LoadBalancerState {
  export const filterSensitiveLog = (obj: LoadBalancerState): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LoadBalancerState => __isa(o, "LoadBalancerState");
}

/**
 * <p>A list of malware related to a finding.</p>
 */
export interface Malware {
  __type?: "Malware";
  /**
   * <p>The file system path of the malware that was observed.</p>
   */
  Path?: string;

  /**
   * <p>The type of the malware that was observed.</p>
   */
  Type?: MalwareType | string;

  /**
   * <p>The name of the malware that was observed.</p>
   */
  Name: string | undefined;

  /**
   * <p>The state of the malware that was observed.</p>
   */
  State?: MalwareState | string;
}

export namespace Malware {
  export const filterSensitiveLog = (obj: Malware): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Malware => __isa(o, "Malware");
}

export enum MalwareState {
  OBSERVED = "OBSERVED",
  REMOVAL_FAILED = "REMOVAL_FAILED",
  REMOVED = "REMOVED",
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
  WORM = "WORM",
}

/**
 * <p>The map filter for querying findings.</p>
 */
export interface MapFilter {
  __type?: "MapFilter";
  /**
   * <p>The value for the key in the map filter.</p>
   */
  Value?: string;

  /**
   * <p>The condition to apply to a key value when querying for findings with a map
   *          filter.</p>
   */
  Comparison?: MapFilterComparison | string;

  /**
   * <p>The key of the map filter.</p>
   */
  Key?: string;
}

export namespace MapFilter {
  export const filterSensitiveLog = (obj: MapFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MapFilter => __isa(o, "MapFilter");
}

export enum MapFilterComparison {
  EQUALS = "EQUALS",
}

/**
 * <p>The details about a member account.</p>
 */
export interface Member {
  __type?: "Member";
  /**
   * <p>The AWS account ID of the Security Hub master account associated with this member account.</p>
   */
  MasterId?: string;

  /**
   * <p>A timestamp for the date and time when the invitation was sent to the member
   *          account.</p>
   */
  InvitedAt?: Date;

  /**
   * <p>The status of the relationship between the member account and its master account.
   *       </p>
   */
  MemberStatus?: string;

  /**
   * <p>The timestamp for the date and time when the member account was updated.</p>
   */
  UpdatedAt?: Date;

  /**
   * <p>The email address of the member account.</p>
   */
  Email?: string;

  /**
   * <p>The AWS account ID of the member account.</p>
   */
  AccountId?: string;
}

export namespace Member {
  export const filterSensitiveLog = (obj: Member): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Member => __isa(o, "Member");
}

/**
 * <p>The details of network-related information about a finding.</p>
 */
export interface Network {
  __type?: "Network";
  /**
   * <p>The source port of network-related information about a finding.</p>
   */
  SourcePort?: number;

  /**
   * <p>The destination IPv6 address of network-related information about a finding.</p>
   */
  DestinationIpV6?: string;

  /**
   * <p>The source IPv6 address of network-related information about a finding.</p>
   */
  SourceIpV6?: string;

  /**
   * <p>The destination IPv4 address of network-related information about a finding.</p>
   */
  DestinationIpV4?: string;

  /**
   * <p>The destination port of network-related information about a finding.</p>
   */
  DestinationPort?: number;

  /**
   * <p>The range of open ports that is present on the network.</p>
   */
  OpenPortRange?: PortRange;

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
   * <p>The source media access control (MAC) address of network-related information about a
   *          finding.</p>
   */
  SourceMac?: string;

  /**
   * <p>The destination domain of network-related information about a finding.</p>
   */
  DestinationDomain?: string;
}

export namespace Network {
  export const filterSensitiveLog = (obj: Network): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Network => __isa(o, "Network");
}

export enum NetworkDirection {
  IN = "IN",
  OUT = "OUT",
}

/**
 * <p>Details about a network path component that occurs before or after the current
 *          component.</p>
 */
export interface NetworkHeader {
  __type?: "NetworkHeader";
  /**
   * <p>The protocol used for the component.</p>
   */
  Protocol?: string;

  /**
   * <p>Information about the destination of the component.</p>
   */
  Destination?: NetworkPathComponentDetails;

  /**
   * <p>Information about the origin of the component.</p>
   */
  Source?: NetworkPathComponentDetails;
}

export namespace NetworkHeader {
  export const filterSensitiveLog = (obj: NetworkHeader): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NetworkHeader => __isa(o, "NetworkHeader");
}

/**
 * <p>Information about a network path component.</p>
 */
export interface NetworkPathComponent {
  __type?: "NetworkPathComponent";
  /**
   * <p>The type of component.</p>
   */
  ComponentType?: string;

  /**
   * <p>The identifier of a component in the network path.</p>
   */
  ComponentId?: string;

  /**
   * <p>Information about the component that comes after the current component in the network
   *          path.</p>
   */
  Egress?: NetworkHeader;

  /**
   * <p>Information about the component that comes before the current node in the network
   *          path.</p>
   */
  Ingress?: NetworkHeader;
}

export namespace NetworkPathComponent {
  export const filterSensitiveLog = (obj: NetworkPathComponent): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NetworkPathComponent => __isa(o, "NetworkPathComponent");
}

/**
 * <p>Information about the destination of the next component in the network path.</p>
 */
export interface NetworkPathComponentDetails {
  __type?: "NetworkPathComponentDetails";
  /**
   * <p>A list of port ranges for the destination.</p>
   */
  PortRanges?: PortRange[];

  /**
   * <p>The IP addresses of the destination.</p>
   */
  Address?: string[];
}

export namespace NetworkPathComponentDetails {
  export const filterSensitiveLog = (obj: NetworkPathComponentDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NetworkPathComponentDetails => __isa(o, "NetworkPathComponentDetails");
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
    ...obj,
  });
  export const isa = (o: any): o is Note => __isa(o, "Note");
}

/**
 * <p>The updated note.</p>
 */
export interface NoteUpdate {
  __type?: "NoteUpdate";
  /**
   * <p>The principal that updated the note.</p>
   */
  UpdatedBy: string | undefined;

  /**
   * <p>The updated note text.</p>
   */
  Text: string | undefined;
}

export namespace NoteUpdate {
  export const filterSensitiveLog = (obj: NoteUpdate): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NoteUpdate => __isa(o, "NoteUpdate");
}

/**
 * <p>A number filter for querying findings.</p>
 */
export interface NumberFilter {
  __type?: "NumberFilter";
  /**
   * <p>The greater-than-equal condition to be applied to a single field when querying for
   *          findings. </p>
   */
  Gte?: number;

  /**
   * <p>The equal-to condition to be applied to a single field when querying for
   *          findings.</p>
   */
  Eq?: number;

  /**
   * <p>The less-than-equal condition to be applied to a single field when querying for
   *          findings. </p>
   */
  Lte?: number;
}

export namespace NumberFilter {
  export const filterSensitiveLog = (obj: NumberFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NumberFilter => __isa(o, "NumberFilter");
}

export enum Partition {
  AWS = "aws",
  AWS_CN = "aws-cn",
  AWS_US_GOV = "aws-us-gov",
}

/**
 * <p>A range of ports.</p>
 */
export interface PortRange {
  __type?: "PortRange";
  /**
   * <p>The last port in the port range.</p>
   */
  End?: number;

  /**
   * <p>The first port in the port range.</p>
   */
  Begin?: number;
}

export namespace PortRange {
  export const filterSensitiveLog = (obj: PortRange): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PortRange => __isa(o, "PortRange");
}

/**
 * <p>The details of process-related information about a finding.</p>
 */
export interface ProcessDetails {
  __type?: "ProcessDetails";
  /**
   * <p>The process ID.</p>
   */
  Pid?: number;

  /**
   * <p>The date/time that the process was launched.</p>
   */
  LaunchedAt?: string;

  /**
   * <p>The parent process ID.</p>
   */
  ParentPid?: number;

  /**
   * <p>The date and time when the process was terminated.</p>
   */
  TerminatedAt?: string;

  /**
   * <p>The path to the process executable.</p>
   */
  Path?: string;

  /**
   * <p>The name of the process.</p>
   */
  Name?: string;
}

export namespace ProcessDetails {
  export const filterSensitiveLog = (obj: ProcessDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ProcessDetails => __isa(o, "ProcessDetails");
}

/**
 * <p>Contains details about a product.</p>
 */
export interface Product {
  __type?: "Product";
  /**
   * <p>The name of the product.</p>
   */
  ProductName?: string;

  /**
   * <p>A description of the product.</p>
   */
  Description?: string;

  /**
   * <p>The resource policy associated with the product.</p>
   */
  ProductSubscriptionResourcePolicy?: string;

  /**
   * <p>The URL for the page that contains more information about the product.</p>
   */
  MarketplaceUrl?: string;

  /**
   * <p>The name of the company that provides the product.</p>
   */
  CompanyName?: string;

  /**
   * <p>The types of integration that the product supports. Available values are the
   *          following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SEND_FINDINGS_TO_SECURITY_HUB</code> - Indicates that the integration sends
   *                findings to Security Hub.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RECEIVE_FINDINGS_FROM_SECURITY_HUB</code> - Indicates that the integration
   *                receives findings from Security Hub.</p>
   *             </li>
   *          </ul>
   */
  IntegrationTypes?: (IntegrationType | string)[];

  /**
   * <p>The ARN assigned to the product.</p>
   */
  ProductArn: string | undefined;

  /**
   * <p>The URL used to activate the product.</p>
   */
  ActivationUrl?: string;

  /**
   * <p>The categories assigned to the product.</p>
   */
  Categories?: string[];
}

export namespace Product {
  export const filterSensitiveLog = (obj: Product): any => ({
    ...obj,
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
    ...obj,
  });
  export const isa = (o: any): o is Recommendation => __isa(o, "Recommendation");
}

export enum RecordState {
  ACTIVE = "ACTIVE",
  ARCHIVED = "ARCHIVED",
}

/**
 * <p>Details about a related finding.</p>
 */
export interface RelatedFinding {
  __type?: "RelatedFinding";
  /**
   * <p>The ARN of the product that generated a related finding.</p>
   */
  ProductArn: string | undefined;

  /**
   * <p>The product-generated identifier for a related finding.</p>
   */
  Id: string | undefined;
}

export namespace RelatedFinding {
  export const filterSensitiveLog = (obj: RelatedFinding): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RelatedFinding => __isa(o, "RelatedFinding");
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
    ...obj,
  });
  export const isa = (o: any): o is Remediation => __isa(o, "Remediation");
}

/**
 * <p>A resource related to a finding.</p>
 */
export interface Resource {
  __type?: "Resource";
  /**
   * <p>The canonical AWS external Region name where this resource is located.</p>
   */
  Region?: string;

  /**
   * <p>The type of the resource that details are provided for. If possible, set
   *             <code>Type</code> to one of the supported resource types. For example, if the resource
   *          is an EC2 instance, then set <code>Type</code> to <code>AwsEc2Instance</code>.</p>
   *          <p>If the resource does not match any of the provided types, then set <code>Type</code> to
   *             <code>Other</code>. </p>
   */
  Type: string | undefined;

  /**
   * <p>A list of AWS tags associated with a resource at the time the finding was
   *          processed.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>Additional details about the resource related to a finding.</p>
   */
  Details?: ResourceDetails;

  /**
   * <p>The canonical AWS partition name that the Region is assigned to.</p>
   */
  Partition?: Partition | string;

  /**
   * <p>The canonical identifier for the given resource type.</p>
   */
  Id: string | undefined;
}

export namespace Resource {
  export const filterSensitiveLog = (obj: Resource): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Resource => __isa(o, "Resource");
}

/**
 * <p>The resource specified in the request conflicts with an existing resource.</p>
 */
export interface ResourceConflictException extends __SmithyException, $MetadataBearer {
  name: "ResourceConflictException";
  $fault: "client";
  Code?: string;
  Message?: string;
}

export namespace ResourceConflictException {
  export const filterSensitiveLog = (obj: ResourceConflictException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceConflictException => __isa(o, "ResourceConflictException");
}

/**
 * <p>Additional details about a resource related to a finding.</p>
 *          <p>To provide the details, use the object that corresponds to the resource type. For
 *          example, if the resource type is <code>AwsEc2Instance</code>, then you use the
 *             <code>AwsEc2Instance</code> object to provide the details.</p>
 *          <p>If the type-specific object does not contain all of the fields you want to populate,
 *          then you use the <code>Other</code> object to populate those additional fields.</p>
 *          <p>You also use the <code>Other</code> object to populate the details when the selected
 *          type does not have a corresponding object.</p>
 */
export interface ResourceDetails {
  __type?: "ResourceDetails";
  /**
   * <p>Details about an Amazon S3 object related to a finding.</p>
   */
  AwsS3Object?: AwsS3ObjectDetails;

  /**
   * <p>Details about an SNS topic.</p>
   */
  AwsSnsTopic?: AwsSnsTopicDetails;

  /**
   * <p>Details for an AWS CodeBuild project.</p>
   */
  AwsCodeBuildProject?: AwsCodeBuildProjectDetails;

  /**
   * <p>Details about a container resource related to a finding.</p>
   */
  Container?: ContainerDetails;

  /**
   * <p>Details about an Amazon EC2 instance related to a finding.</p>
   */
  AwsEc2Instance?: AwsEc2InstanceDetails;

  /**
   * <p>Details for an EC2 VPC.</p>
   */
  AwsEc2Vpc?: AwsEc2VpcDetails;

  /**
   * <p>Details about a KMS key.</p>
   */
  AwsKmsKey?: AwsKmsKeyDetails;

  /**
   * <p>Details for an autoscaling group.</p>
   */
  AwsAutoScalingAutoScalingGroup?: AwsAutoScalingAutoScalingGroupDetails;

  /**
   * <p>Details about a CloudFront distribution.</p>
   */
  AwsCloudFrontDistribution?: AwsCloudFrontDistributionDetails;

  /**
   * <p>Details about a Lambda function.</p>
   */
  AwsLambdaFunction?: AwsLambdaFunctionDetails;

  /**
   * <p>Details about an Amazon S3 bucket related to a finding.</p>
   */
  AwsS3Bucket?: AwsS3BucketDetails;

  /**
   * <p>Details for an Amazon EC2 network interface.</p>
   */
  AwsEc2NetworkInterface?: AwsEc2NetworkInterfaceDetails;

  /**
   * <p>Details about an SQS queue.</p>
   */
  AwsSqsQueue?: AwsSqsQueueDetails;

  /**
   * <p>Details for an EC2 security group.</p>
   */
  AwsEc2SecurityGroup?: AwsEc2SecurityGroupDetails;

  /**
   * <p>Details about an IAM role.</p>
   */
  AwsIamRole?: AwsIamRoleDetails;

  /**
   * <p>Details for an Elasticsearch domain.</p>
   */
  AwsElasticsearchDomain?: AwsElasticsearchDomainDetails;

  /**
   * <p>Details for an Amazon RDS database instance.</p>
   */
  AwsRdsDbInstance?: AwsRdsDbInstanceDetails;

  /**
   * <p>Details for an EC2 volume.</p>
   */
  AwsEc2Volume?: AwsEc2VolumeDetails;

  /**
   * <p>Details about a load balancer.</p>
   */
  AwsElbv2LoadBalancer?: AwsElbv2LoadBalancerDetails;

  /**
   * <p>Details for a Lambda layer version.</p>
   */
  AwsLambdaLayerVersion?: AwsLambdaLayerVersionDetails;

  /**
   * <p>Details about an IAM access key related to a finding.</p>
   */
  AwsIamAccessKey?: AwsIamAccessKeyDetails;

  /**
   * <p>Details for a WAF WebACL.</p>
   */
  AwsWafWebAcl?: AwsWafWebAclDetails;

  /**
   * <p>Details about a resource that are not available in a type-specific details object. Use
   *          the <code>Other</code> object in the following cases.</p>
   *          <ul>
   *             <li>
   *                <p>The type-specific object does not contain all of the fields that you want to
   *                populate. In this case, first use the type-specific object to populate those fields.
   *                Use the <code>Other</code> object to populate the fields that are missing from the
   *                type-specific object.</p>
   *             </li>
   *             <li>
   *                <p>The resource type does not have a corresponding object. This includes resources
   *                for which the type is <code>Other</code>. </p>
   *             </li>
   *          </ul>
   */
  Other?: { [key: string]: string };
}

export namespace ResourceDetails {
  export const filterSensitiveLog = (obj: ResourceDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceDetails => __isa(o, "ResourceDetails");
}

/**
 * <p>The request was rejected because we can't find the specified resource.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Code?: string;
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceNotFoundException => __isa(o, "ResourceNotFoundException");
}

/**
 * <p>Details about the account that was not processed.</p>
 */
export interface Result {
  __type?: "Result";
  /**
   * <p>The reason that the account was not processed.</p>
   */
  ProcessingResult?: string;

  /**
   * <p>An AWS account ID of the account that was not processed.</p>
   */
  AccountId?: string;
}

export namespace Result {
  export const filterSensitiveLog = (obj: Result): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Result => __isa(o, "Result");
}

/**
 * <p>The severity of the finding.</p>
 *          <p>The finding provider can provide the initial severity, but cannot update it after that.
 *          The severity can only be updated by a master account. It cannot be updated by a member
 *          account.</p>
 *          <p>The finding must have either <code>Label</code> or <code>Normalized</code> populated. If
 *          only one of these attributes is populated, then Security Hub automatically populates the other
 *          one. If neither attribute is populated, then the finding is invalid. <code>Label</code> is
 *          the preferred attribute.</p>
 */
export interface Severity {
  __type?: "Severity";
  /**
   * <p>The native severity from the finding product that generated the finding.</p>
   */
  Original?: string;

  /**
   * <p>Deprecated. The normalized severity of a finding. This attribute is being deprecated.
   *          Instead of providing <code>Normalized</code>, provide <code>Label</code>.</p>
   *          <p>If you provide <code>Label</code> and do not provide <code>Normalized</code>, then
   *             <code>Normalized</code> is set automatically as follows.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INFORMATIONAL</code> - 0</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOW</code> - 1</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code> - 40</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HIGH</code> - 70</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CRITICAL</code> - 90</p>
   *             </li>
   *          </ul>
   */
  Normalized?: number;

  /**
   * <p>Deprecated. This attribute is being deprecated. Instead of providing
   *             <code>Product</code>, provide <code>Original</code>.</p>
   *          <p>The native severity as defined by the AWS service or integrated partner product that
   *          generated the finding.</p>
   */
  Product?: number;

  /**
   * <p>The severity value of the finding. The allowed values are the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INFORMATIONAL</code> - No issue was found.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOW</code> - The issue does not require action on its own.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code> - The issue must be addressed but not urgently.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HIGH</code> - The issue must be addressed as a priority.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CRITICAL</code> - The issue must be remediated immediately to avoid it
   *                escalating.</p>
   *             </li>
   *          </ul>
   *          <p>If you provide <code>Normalized</code> and do not provide <code>Label</code>, then
   *             <code>Label</code> is set automatically as follows. </p>
   *          <ul>
   *             <li>
   *                <p>0 - <code>INFORMATIONAL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>1–39 - <code>LOW</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>40–69 - <code>MEDIUM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>70–89 - <code>HIGH</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>90–100 - <code>CRITICAL</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Label?: SeverityLabel | string;
}

export namespace Severity {
  export const filterSensitiveLog = (obj: Severity): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Severity => __isa(o, "Severity");
}

export enum SeverityLabel {
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
  INFORMATIONAL = "INFORMATIONAL",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}

export enum SeverityRating {
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}

/**
 * <p>Updates to the severity information for a finding.</p>
 */
export interface SeverityUpdate {
  __type?: "SeverityUpdate";
  /**
   * <p>The normalized severity for the finding. This attribute is to be deprecated in favor of
   *             <code>Label</code>.</p>
   *          <p>If you provide <code>Normalized</code> and do not provide <code>Label</code>,
   *             <code>Label</code> is set automatically as follows.</p>
   *          <ul>
   *             <li>
   *                <p>0 - <code>INFORMATIONAL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>1–39 - <code>LOW</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>40–69 - <code>MEDIUM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>70–89 - <code>HIGH</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>90–100 - <code>CRITICAL</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Normalized?: number;

  /**
   * <p>The severity value of the finding. The allowed values are the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INFORMATIONAL</code> - No issue was found.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOW</code> - The issue does not require action on its own.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code> - The issue must be addressed but not urgently.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HIGH</code> - The issue must be addressed as a priority.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CRITICAL</code> - The issue must be remediated immediately to avoid it
   *                escalating.</p>
   *             </li>
   *          </ul>
   */
  Label?: SeverityLabel | string;

  /**
   * <p>The native severity as defined by the AWS service or integrated partner product that
   *          generated the finding.</p>
   */
  Product?: number;
}

export namespace SeverityUpdate {
  export const filterSensitiveLog = (obj: SeverityUpdate): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SeverityUpdate => __isa(o, "SeverityUpdate");
}

/**
 * <p>Information about a software package.</p>
 */
export interface SoftwarePackage {
  __type?: "SoftwarePackage";
  /**
   * <p>The name of the software package.</p>
   */
  Name?: string;

  /**
   * <p>The version of the software package.</p>
   */
  Version?: string;

  /**
   * <p>The release of the software package.</p>
   */
  Release?: string;

  /**
   * <p>The epoch of the software package.</p>
   */
  Epoch?: string;

  /**
   * <p>The architecture used for the software package.</p>
   */
  Architecture?: string;
}

export namespace SoftwarePackage {
  export const filterSensitiveLog = (obj: SoftwarePackage): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SoftwarePackage => __isa(o, "SoftwarePackage");
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
    ...obj,
  });
  export const isa = (o: any): o is SortCriterion => __isa(o, "SortCriterion");
}

export enum SortOrder {
  ASCENDING = "asc",
  DESCENDING = "desc",
}

/**
 * <p>Provides information about a specific standard.</p>
 */
export interface Standard {
  __type?: "Standard";
  /**
   * <p>The ARN of a standard.</p>
   */
  StandardsArn?: string;

  /**
   * <p>Whether the standard is enabled by default. When Security Hub is enabled from the console, if a
   *          standard is enabled by default, the check box for that standard is selected by
   *          default.</p>
   *          <p>When Security Hub is enabled using the <code>EnableSecurityHub</code> API operation, the
   *          standard is enabled by default unless <code>EnableDefaultStandards</code> is set to
   *             <code>false</code>.</p>
   */
  EnabledByDefault?: boolean;

  /**
   * <p>A description of the standard.</p>
   */
  Description?: string;

  /**
   * <p>The name of the standard.</p>
   */
  Name?: string;
}

export namespace Standard {
  export const filterSensitiveLog = (obj: Standard): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Standard => __isa(o, "Standard");
}

/**
 * <p>Details for an individual security standard control.</p>
 */
export interface StandardsControl {
  __type?: "StandardsControl";
  /**
   * <p>A link to remediation information for the control in the Security Hub user
   *          documentation.</p>
   */
  RemediationUrl?: string;

  /**
   * <p>The current status of the security standard control. Indicates whether the control is
   *          enabled or disabled. Security Hub does not check against disabled controls.</p>
   */
  ControlStatus?: ControlStatus | string;

  /**
   * <p>The list of requirements that are related to this control.</p>
   */
  RelatedRequirements?: string[];

  /**
   * <p>The identifier of the security standard control.</p>
   */
  ControlId?: string;

  /**
   * <p>The longer description of the security standard control. Provides information about what
   *          the control is checking for.</p>
   */
  Description?: string;

  /**
   * <p>The title of the security standard control.</p>
   */
  Title?: string;

  /**
   * <p>The reason provided for the most recent change in status for the control.</p>
   */
  DisabledReason?: string;

  /**
   * <p>The severity of findings generated from this security standard control.</p>
   *          <p>The finding severity is based on an assessment of how easy it would be to compromise AWS
   *          resources if the issue is detected.</p>
   */
  SeverityRating?: SeverityRating | string;

  /**
   * <p>The date and time that the status of the security standard control was most recently
   *          updated.</p>
   */
  ControlStatusUpdatedAt?: Date;

  /**
   * <p>The ARN of the security standard control.</p>
   */
  StandardsControlArn?: string;
}

export namespace StandardsControl {
  export const filterSensitiveLog = (obj: StandardsControl): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StandardsControl => __isa(o, "StandardsControl");
}

export enum StandardsStatus {
  DELETING = "DELETING",
  FAILED = "FAILED",
  INCOMPLETE = "INCOMPLETE",
  PENDING = "PENDING",
  READY = "READY",
}

/**
 * <p>A resource that represents your subscription to a supported standard.</p>
 */
export interface StandardsSubscription {
  __type?: "StandardsSubscription";
  /**
   * <p>The status of the standards subscription.</p>
   */
  StandardsStatus: StandardsStatus | string | undefined;

  /**
   * <p>The ARN of a standard.</p>
   */
  StandardsArn: string | undefined;

  /**
   * <p>The ARN of a resource that represents your subscription to a supported standard.</p>
   */
  StandardsSubscriptionArn: string | undefined;

  /**
   * <p>A key-value pair of input for the standard.</p>
   */
  StandardsInput: { [key: string]: string } | undefined;
}

export namespace StandardsSubscription {
  export const filterSensitiveLog = (obj: StandardsSubscription): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StandardsSubscription => __isa(o, "StandardsSubscription");
}

/**
 * <p>The standard that you want to enable.</p>
 */
export interface StandardsSubscriptionRequest {
  __type?: "StandardsSubscriptionRequest";
  /**
   * <p>A key-value pair of input for the standard.</p>
   */
  StandardsInput?: { [key: string]: string };

  /**
   * <p>The ARN of the standard that you want to enable. To view the list of available standards
   *          and their ARNs, use the <code>
   *                <a>DescribeStandards</a>
   *             </code> operation.</p>
   */
  StandardsArn: string | undefined;
}

export namespace StandardsSubscriptionRequest {
  export const filterSensitiveLog = (obj: StandardsSubscriptionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StandardsSubscriptionRequest => __isa(o, "StandardsSubscriptionRequest");
}

/**
 * <p>Provides additional context for the value of <code>Compliance.Status</code>.</p>
 */
export interface StatusReason {
  __type?: "StatusReason";
  /**
   * <p>A code that represents a reason for the control status. For the list of status reason
   *          codes and their meanings, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-results.html#securityhub-standards-results-asff">Standards-related information in the ASFF</a> in the
   *             <i>AWS Security Hub User Guide</i>. </p>
   */
  ReasonCode: string | undefined;

  /**
   * <p>The corresponding description for the status reason code.</p>
   */
  Description?: string;
}

export namespace StatusReason {
  export const filterSensitiveLog = (obj: StatusReason): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StatusReason => __isa(o, "StatusReason");
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
    ...obj,
  });
  export const isa = (o: any): o is StringFilter => __isa(o, "StringFilter");
}

export enum StringFilterComparison {
  EQUALS = "EQUALS",
  PREFIX = "PREFIX",
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
    ...obj,
  });
  export const isa = (o: any): o is TagResourceRequest => __isa(o, "TagResourceRequest");
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceResponse => __isa(o, "TagResourceResponse");
}

/**
 * <p>Details about the threat intelligence related to a finding.</p>
 */
export interface ThreatIntelIndicator {
  __type?: "ThreatIntelIndicator";
  /**
   * <p>The value of a threat intelligence indicator.</p>
   */
  Value?: string;

  /**
   * <p>The URL to the page or site where you can get more information about the threat
   *          intelligence indicator.</p>
   */
  SourceUrl?: string;

  /**
   * <p>The type of threat intelligence indicator.</p>
   */
  Type?: ThreatIntelIndicatorType | string;

  /**
   * <p>The category of a threat intelligence indicator.</p>
   */
  Category?: ThreatIntelIndicatorCategory | string;

  /**
   * <p>The source of the threat intelligence indicator.</p>
   */
  Source?: string;

  /**
   * <p>The date and time when the most recent instance of a threat intelligence indicator was
   *          observed.</p>
   */
  LastObservedAt?: string;
}

export namespace ThreatIntelIndicator {
  export const filterSensitiveLog = (obj: ThreatIntelIndicator): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ThreatIntelIndicator => __isa(o, "ThreatIntelIndicator");
}

export enum ThreatIntelIndicatorCategory {
  BACKDOOR = "BACKDOOR",
  CARD_STEALER = "CARD_STEALER",
  COMMAND_AND_CONTROL = "COMMAND_AND_CONTROL",
  DROP_SITE = "DROP_SITE",
  EXPLOIT_SITE = "EXPLOIT_SITE",
  KEYLOGGER = "KEYLOGGER",
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
  URL = "URL",
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The tag keys associated with the tags to remove from the resource.</p>
   */
  TagKeys: string[] | undefined;

  /**
   * <p>The ARN of the resource to remove the tags from.</p>
   */
  ResourceArn: string | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceRequest => __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceResponse => __isa(o, "UntagResourceResponse");
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
    ...obj,
  });
  export const isa = (o: any): o is UpdateActionTargetRequest => __isa(o, "UpdateActionTargetRequest");
}

export interface UpdateActionTargetResponse {
  __type?: "UpdateActionTargetResponse";
}

export namespace UpdateActionTargetResponse {
  export const filterSensitiveLog = (obj: UpdateActionTargetResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateActionTargetResponse => __isa(o, "UpdateActionTargetResponse");
}

export interface UpdateFindingsRequest {
  __type?: "UpdateFindingsRequest";
  /**
   * <p>The updated record state for the finding.</p>
   */
  RecordState?: RecordState | string;

  /**
   * <p>The updated note for the finding.</p>
   */
  Note?: NoteUpdate;

  /**
   * <p>A collection of attributes that specify which findings you want to update.</p>
   */
  Filters: AwsSecurityFindingFilters | undefined;
}

export namespace UpdateFindingsRequest {
  export const filterSensitiveLog = (obj: UpdateFindingsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateFindingsRequest => __isa(o, "UpdateFindingsRequest");
}

export interface UpdateFindingsResponse {
  __type?: "UpdateFindingsResponse";
}

export namespace UpdateFindingsResponse {
  export const filterSensitiveLog = (obj: UpdateFindingsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateFindingsResponse => __isa(o, "UpdateFindingsResponse");
}

export interface UpdateInsightRequest {
  __type?: "UpdateInsightRequest";
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

  /**
   * <p>The updated filters that define this insight.</p>
   */
  Filters?: AwsSecurityFindingFilters;
}

export namespace UpdateInsightRequest {
  export const filterSensitiveLog = (obj: UpdateInsightRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateInsightRequest => __isa(o, "UpdateInsightRequest");
}

export interface UpdateInsightResponse {
  __type?: "UpdateInsightResponse";
}

export namespace UpdateInsightResponse {
  export const filterSensitiveLog = (obj: UpdateInsightResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateInsightResponse => __isa(o, "UpdateInsightResponse");
}

export interface UpdateSecurityHubConfigurationRequest {
  __type?: "UpdateSecurityHubConfigurationRequest";
  /**
   * <p>Whether to automatically enable new controls when they are added to standards that are
   *          enabled.</p>
   *          <p>By default, this is set to <code>true</code>, and new controls are enabled
   *          automatically. To not automatically enable new controls, set this to <code>false</code>.
   *       </p>
   */
  AutoEnableControls?: boolean;
}

export namespace UpdateSecurityHubConfigurationRequest {
  export const filterSensitiveLog = (obj: UpdateSecurityHubConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateSecurityHubConfigurationRequest =>
    __isa(o, "UpdateSecurityHubConfigurationRequest");
}

export interface UpdateSecurityHubConfigurationResponse {
  __type?: "UpdateSecurityHubConfigurationResponse";
}

export namespace UpdateSecurityHubConfigurationResponse {
  export const filterSensitiveLog = (obj: UpdateSecurityHubConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateSecurityHubConfigurationResponse =>
    __isa(o, "UpdateSecurityHubConfigurationResponse");
}

export interface UpdateStandardsControlRequest {
  __type?: "UpdateStandardsControlRequest";
  /**
   * <p>The updated status of the security standard control.</p>
   */
  ControlStatus?: ControlStatus | string;

  /**
   * <p>A description of the reason why you are disabling a security standard control. If you
   *          are disabling a control, then this is required.</p>
   */
  DisabledReason?: string;

  /**
   * <p>The ARN of the security standard control to enable or disable.</p>
   */
  StandardsControlArn: string | undefined;
}

export namespace UpdateStandardsControlRequest {
  export const filterSensitiveLog = (obj: UpdateStandardsControlRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateStandardsControlRequest => __isa(o, "UpdateStandardsControlRequest");
}

export interface UpdateStandardsControlResponse {
  __type?: "UpdateStandardsControlResponse";
}

export namespace UpdateStandardsControlResponse {
  export const filterSensitiveLog = (obj: UpdateStandardsControlResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateStandardsControlResponse => __isa(o, "UpdateStandardsControlResponse");
}

export enum VerificationState {
  BENIGN_POSITIVE = "BENIGN_POSITIVE",
  FALSE_POSITIVE = "FALSE_POSITIVE",
  TRUE_POSITIVE = "TRUE_POSITIVE",
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>A vulnerability associated with a finding.</p>
 */
export interface Vulnerability {
  __type?: "Vulnerability";
  /**
   * <p>List of vulnerabilities that are related to this vulnerability.</p>
   */
  RelatedVulnerabilities?: string[];

  /**
   * <p>CVSS scores from the advisory related to the vulnerability.</p>
   */
  Cvss?: Cvss[];

  /**
   * <p>Information about the vendor that generates the vulnerability report.</p>
   */
  Vendor?: VulnerabilityVendor;

  /**
   * <p>List of software packages that have the vulnerability.</p>
   */
  VulnerablePackages?: SoftwarePackage[];

  /**
   * <p>The identifier of the vulnerability.</p>
   */
  Id: string | undefined;

  /**
   * <p>A list of URLs that provide additional information about the vulnerability.</p>
   */
  ReferenceUrls?: string[];
}

export namespace Vulnerability {
  export const filterSensitiveLog = (obj: Vulnerability): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Vulnerability => __isa(o, "Vulnerability");
}

/**
 * <p>A vendor that generates a vulnerability report.</p>
 */
export interface VulnerabilityVendor {
  __type?: "VulnerabilityVendor";
  /**
   * <p>The datetime when the vulnerability advisory was created.</p>
   */
  VendorCreatedAt?: string;

  /**
   * <p>The datetime when the vulnerability advisory was last updated.</p>
   */
  VendorUpdatedAt?: string;

  /**
   * <p>The severity that the vendor assigned to the vulnerability.</p>
   */
  VendorSeverity?: string;

  /**
   * <p>The URL of the vulnerability advisory.</p>
   */
  Url?: string;

  /**
   * <p>The name of the vendor.</p>
   */
  Name: string | undefined;
}

export namespace VulnerabilityVendor {
  export const filterSensitiveLog = (obj: VulnerabilityVendor): any => ({
    ...obj,
  });
  export const isa = (o: any): o is VulnerabilityVendor => __isa(o, "VulnerabilityVendor");
}

/**
 * <p>Details about the action that CloudFront or AWS WAF takes when a web request matches the
 *          conditions in the rule. </p>
 */
export interface WafAction {
  __type?: "WafAction";
  /**
   * <p>Specifies how you want AWS WAF to respond to requests that match the settings in a
   *          rule.</p>
   *          <p>Valid settings include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALLOW</code> - AWS WAF allows requests</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> - AWS WAF blocks requests</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COUNT</code> - AWS WAF increments a counter of the requests that match all
   *                of the conditions in the rule. AWS WAF then continues to inspect the web request
   *                based on the remaining rules in the web ACL. You can't specify <code>COUNT</code> for
   *                the default action for a WebACL.</p>
   *             </li>
   *          </ul>
   */
  Type?: string;
}

export namespace WafAction {
  export const filterSensitiveLog = (obj: WafAction): any => ({
    ...obj,
  });
  export const isa = (o: any): o is WafAction => __isa(o, "WafAction");
}

/**
 * <p>Details about a rule to exclude from a rule group.</p>
 */
export interface WafExcludedRule {
  __type?: "WafExcludedRule";
  /**
   * <p>The unique identifier for the rule to exclude from the rule group.</p>
   */
  RuleId?: string;
}

export namespace WafExcludedRule {
  export const filterSensitiveLog = (obj: WafExcludedRule): any => ({
    ...obj,
  });
  export const isa = (o: any): o is WafExcludedRule => __isa(o, "WafExcludedRule");
}

/**
 * <p>Details about an override action for a rule.</p>
 */
export interface WafOverrideAction {
  __type?: "WafOverrideAction";
  /**
   * <p>
   *             <code>COUNT</code> overrides the action specified by the individual rule within a
   *             <code>RuleGroup</code> .</p>
   *          <p>If set to <code>NONE</code>, the rule's action takes place.</p>
   */
  Type?: string;
}

export namespace WafOverrideAction {
  export const filterSensitiveLog = (obj: WafOverrideAction): any => ({
    ...obj,
  });
  export const isa = (o: any): o is WafOverrideAction => __isa(o, "WafOverrideAction");
}

/**
 * <p>Provides information about the status of the investigation into a finding.</p>
 */
export interface Workflow {
  __type?: "Workflow";
  /**
   * <p>The status of the investigation into the finding. The allowed values are the
   *          following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code> - The initial state of a finding, before it is reviewed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOTIFIED</code> - Indicates that you notified the resource owner about the
   *                security issue. Used when the initial reviewer is not the resource owner, and needs
   *                intervention from the resource owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUPPRESSED</code> - The finding will not be reviewed again and will not be
   *                acted upon.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESOLVED</code> - The finding was reviewed and remediated and is now
   *                considered resolved. </p>
   *             </li>
   *          </ul>
   */
  Status?: WorkflowStatus | string;
}

export namespace Workflow {
  export const filterSensitiveLog = (obj: Workflow): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Workflow => __isa(o, "Workflow");
}

export enum WorkflowState {
  ASSIGNED = "ASSIGNED",
  DEFERRED = "DEFERRED",
  IN_PROGRESS = "IN_PROGRESS",
  NEW = "NEW",
  RESOLVED = "RESOLVED",
}

export enum WorkflowStatus {
  NEW = "NEW",
  NOTIFIED = "NOTIFIED",
  RESOLVED = "RESOLVED",
  SUPPRESSED = "SUPPRESSED",
}

/**
 * <p>Used to update information about the investigation into the finding.</p>
 */
export interface WorkflowUpdate {
  __type?: "WorkflowUpdate";
  /**
   * <p>The status of the investigation into the finding. The allowed values are the
   *          following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code> - The initial state of a finding, before it is reviewed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOTIFIED</code> - Indicates that you notified the resource owner about the
   *                security issue. Used when the initial reviewer is not the resource owner, and needs
   *                intervention from the resource owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESOLVED</code> - The finding was reviewed and remediated and is now
   *                considered resolved.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUPPRESSED</code> - The finding will not be reviewed again and will not be
   *                acted upon.</p>
   *             </li>
   *          </ul>
   */
  Status?: WorkflowStatus | string;
}

export namespace WorkflowUpdate {
  export const filterSensitiveLog = (obj: WorkflowUpdate): any => ({
    ...obj,
  });
  export const isa = (o: any): o is WorkflowUpdate => __isa(o, "WorkflowUpdate");
}
