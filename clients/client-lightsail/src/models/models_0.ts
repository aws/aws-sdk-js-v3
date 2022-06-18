// smithy-typescript generated code
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import {
  AccessKey,
  AccessRules,
  AccountLevelBpaSync,
  AddOnRequest,
  AddOnType,
  Alarm,
  AlarmState,
  AutoSnapshotDetails,
  Blueprint,
  Bucket,
  BucketAccessLogConfig,
  BucketBundle,
  BucketMetricName,
  Bundle,
  CacheBehavior,
  CacheBehaviorPerPath,
  CacheSettings,
  CertificateStatus,
  CertificateSummary,
  CloudFormationStackRecord,
  ComparisonOperator,
  ContactMethod,
  ContactMethodVerificationProtocol,
  ContactProtocol,
  Container,
  ContainerImage,
  ContainerService,
  ContainerServiceDeployment,
  ContainerServiceDeploymentRequest,
  ContainerServiceLogEvent,
  ContainerServiceMetricName,
  ContainerServicePower,
  ContainerServicePowerName,
  ContainerServiceRegistryLogin,
  Disk,
  DiskMap,
  DiskSnapshot,
  DistributionBundle,
  DistributionMetricName,
  Domain,
  DomainEntry,
  EndpointRequest,
  ExportSnapshotRecord,
  InputOrigin,
  Instance,
  InstanceAccessDetails,
  InstanceAccessProtocol,
  InstanceEntry,
  InstanceMetricName,
  InstancePortState,
  InstanceSnapshot,
  InstanceState,
  IpAddressType,
  KeyPair,
  LightsailDistribution,
  LoadBalancer,
  LoadBalancerMetricName,
  LoadBalancerTlsCertificate,
  LoadBalancerTlsPolicy,
  LogEvent,
  MetricDatapoint,
  MetricName,
  MetricStatistic,
  MetricUnit,
  Operation,
  PortInfo,
  PrivateRegistryAccessRequest,
  Region,
  RegionName,
  RelationalDatabase,
  RelationalDatabaseBlueprint,
  RelationalDatabaseBundle,
  RelationalDatabaseEvent,
  RelationalDatabaseMetricName,
  RelationalDatabaseParameter,
  RelationalDatabasePasswordVersion,
  RelationalDatabaseSnapshot,
  ResourceBucketAccess,
  ResourceType,
  StaticIp,
  Tag,
  TreatMissingData,
} from "./models_1";

export interface AllocateStaticIpRequest {
  /**
   * <p>The name of the static IP address.</p>
   */
  staticIpName: string | undefined;
}

export namespace AllocateStaticIpRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AllocateStaticIpRequest): any => ({
    ...obj,
  });
}

export interface AllocateStaticIpResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace AllocateStaticIpResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AllocateStaticIpResult): any => ({
    ...obj,
  });
}

export interface AttachCertificateToDistributionRequest {
  /**
   * <p>The name of the distribution that the certificate will be attached to.</p>
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   */
  distributionName: string | undefined;

  /**
   * <p>The name of the certificate to attach to a distribution.</p>
   *          <p>Only certificates with a status of <code>ISSUED</code> can be attached to a
   *       distribution.</p>
   *          <p>Use the <code>GetCertificates</code> action to get a list of certificate names that you
   *       can specify.</p>
   *          <note>
   *             <p>This is the name of the certificate resource type and is used only to reference the
   *         certificate in other API actions. It can be different than the domain name of the
   *         certificate. For example, your certificate name might be
   *           <code>WordPress-Blog-Certificate</code> and the domain name of the certificate might be
   *           <code>example.com</code>.</p>
   *          </note>
   */
  certificateName: string | undefined;
}

export namespace AttachCertificateToDistributionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachCertificateToDistributionRequest): any => ({
    ...obj,
  });
}

export interface AttachCertificateToDistributionResult {
  /**
   * <p>An object that describes the result of the action, such as the status of the request, the
   *       timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace AttachCertificateToDistributionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachCertificateToDistributionResult): any => ({
    ...obj,
  });
}

export interface AttachDiskRequest {
  /**
   * <p>The unique Lightsail disk name (e.g., <code>my-disk</code>).</p>
   */
  diskName: string | undefined;

  /**
   * <p>The name of the Lightsail instance where you want to utilize the storage disk.</p>
   */
  instanceName: string | undefined;

  /**
   * <p>The disk path to expose to the instance (e.g., <code>/dev/xvdf</code>).</p>
   */
  diskPath: string | undefined;
}

export namespace AttachDiskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachDiskRequest): any => ({
    ...obj,
  });
}

export interface AttachDiskResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace AttachDiskResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachDiskResult): any => ({
    ...obj,
  });
}

export interface AttachInstancesToLoadBalancerRequest {
  /**
   * <p>The name of the load balancer.</p>
   */
  loadBalancerName: string | undefined;

  /**
   * <p>An array of strings representing the instance name(s) you want to attach to your load
   *       balancer.</p>
   *          <p>An instance must be <code>running</code> before you can attach it to your load
   *       balancer.</p>
   *          <p>There are no additional limits on the number of instances you can attach to your load
   *       balancer, aside from the limit of Lightsail instances you can create in your account
   *       (20).</p>
   */
  instanceNames: string[] | undefined;
}

export namespace AttachInstancesToLoadBalancerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachInstancesToLoadBalancerRequest): any => ({
    ...obj,
  });
}

export interface AttachInstancesToLoadBalancerResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace AttachInstancesToLoadBalancerResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachInstancesToLoadBalancerResult): any => ({
    ...obj,
  });
}

export interface AttachLoadBalancerTlsCertificateRequest {
  /**
   * <p>The name of the load balancer to which you want to associate the SSL/TLS
   *       certificate.</p>
   */
  loadBalancerName: string | undefined;

  /**
   * <p>The name of your SSL/TLS certificate.</p>
   */
  certificateName: string | undefined;
}

export namespace AttachLoadBalancerTlsCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachLoadBalancerTlsCertificateRequest): any => ({
    ...obj,
  });
}

export interface AttachLoadBalancerTlsCertificateResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   *          <p>These SSL/TLS certificates are only usable by Lightsail load balancers. You can't get
   *       the certificate and use it for another purpose.</p>
   */
  operations?: Operation[];
}

export namespace AttachLoadBalancerTlsCertificateResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachLoadBalancerTlsCertificateResult): any => ({
    ...obj,
  });
}

export interface AttachStaticIpRequest {
  /**
   * <p>The name of the static IP.</p>
   */
  staticIpName: string | undefined;

  /**
   * <p>The instance name to which you want to attach the static IP address.</p>
   */
  instanceName: string | undefined;
}

export namespace AttachStaticIpRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachStaticIpRequest): any => ({
    ...obj,
  });
}

export interface AttachStaticIpResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace AttachStaticIpResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachStaticIpResult): any => ({
    ...obj,
  });
}

export interface CloseInstancePublicPortsRequest {
  /**
   * <p>An object to describe the ports to close for the specified instance.</p>
   */
  portInfo: PortInfo | undefined;

  /**
   * <p>The name of the instance for which to close ports.</p>
   */
  instanceName: string | undefined;
}

export namespace CloseInstancePublicPortsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloseInstancePublicPortsRequest): any => ({
    ...obj,
  });
}

export interface CloseInstancePublicPortsResult {
  /**
   * <p>An object that describes the result of the action, such as the status of the request, the
   *       timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace CloseInstancePublicPortsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloseInstancePublicPortsResult): any => ({
    ...obj,
  });
}

export interface ContainerServicesListResult {
  /**
   * <p>An array of objects that describe one or more container services.</p>
   */
  containerServices?: ContainerService[];
}

export namespace ContainerServicesListResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerServicesListResult): any => ({
    ...obj,
  });
}

export interface CopySnapshotRequest {
  /**
   * <p>The name of the source manual snapshot to copy.</p>
   *          <p>Constraint:</p>
   *          <ul>
   *             <li>
   *                <p>Define this parameter only when copying a manual snapshot as another manual
   *           snapshot.</p>
   *             </li>
   *          </ul>
   */
  sourceSnapshotName?: string;

  /**
   * <p>The name of the source instance or disk from which the source automatic snapshot was
   *       created.</p>
   *          <p>Constraint:</p>
   *          <ul>
   *             <li>
   *                <p>Define this parameter only when copying an automatic snapshot as a manual snapshot.
   *           For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-keeping-automatic-snapshots">Amazon Lightsail Developer Guide</a>.</p>
   *             </li>
   *          </ul>
   */
  sourceResourceName?: string;

  /**
   * <p>The date of the source automatic snapshot to copy. Use the <code>get auto snapshots</code>
   *       operation to identify the dates of the available automatic snapshots.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be specified in <code>YYYY-MM-DD</code> format.</p>
   *             </li>
   *             <li>
   *                <p>This parameter cannot be defined together with the <code>use latest restorable auto
   *             snapshot</code> parameter. The <code>restore date</code> and <code>use latest restorable
   *             auto snapshot</code> parameters are mutually exclusive.</p>
   *             </li>
   *             <li>
   *                <p>Define this parameter only when copying an automatic snapshot as a manual snapshot.
   *           For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-keeping-automatic-snapshots">Amazon Lightsail Developer Guide</a>.</p>
   *             </li>
   *          </ul>
   */
  restoreDate?: string;

  /**
   * <p>A Boolean value to indicate whether to use the latest available automatic snapshot of the
   *       specified source instance or disk.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>This parameter cannot be defined together with the <code>restore date</code>
   *           parameter. The <code>use latest restorable auto snapshot</code> and <code>restore
   *             date</code> parameters are mutually exclusive.</p>
   *             </li>
   *             <li>
   *                <p>Define this parameter only when copying an automatic snapshot as a manual snapshot.
   *           For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-keeping-automatic-snapshots">Amazon Lightsail Developer Guide</a>.</p>
   *             </li>
   *          </ul>
   */
  useLatestRestorableAutoSnapshot?: boolean;

  /**
   * <p>The name of the new manual snapshot to be created as a copy.</p>
   */
  targetSnapshotName: string | undefined;

  /**
   * <p>The Amazon Web Services Region where the source manual or automatic snapshot is
   *       located.</p>
   */
  sourceRegion: RegionName | string | undefined;
}

export namespace CopySnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopySnapshotRequest): any => ({
    ...obj,
  });
}

export interface CopySnapshotResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CopySnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopySnapshotResult): any => ({
    ...obj,
  });
}

export interface CreateBucketRequest {
  /**
   * <p>The name for the bucket.</p>
   *
   *          <p>For more information about bucket names, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/bucket-naming-rules-in-amazon-lightsail">Bucket naming rules in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer
   *         Guide</i>.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>The ID of the bundle to use for the bucket.</p>
   *
   *          <p>A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a
   *       bucket.</p>
   *
   *          <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBucketBundles.html">GetBucketBundles</a> action to get a list of
   *       bundle IDs that you can specify.</p>
   *
   *          <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateBucketBundle.html">UpdateBucketBundle</a> action to change the
   *       bundle after the bucket is created.</p>
   */
  bundleId: string | undefined;

  /**
   * <p>The tag keys and optional values to add to the bucket during creation.</p>
   *
   *          <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_TagResource.html">TagResource</a> action to tag the bucket after it's
   *       created.</p>
   */
  tags?: Tag[];

  /**
   * <p>A Boolean value that indicates whether to enable versioning of objects in the
   *       bucket.</p>
   *
   *          <p>For more information about versioning, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-managing-bucket-object-versioning">Enabling and suspending object versioning in a bucket in Amazon Lightsail</a> in the
   *         <i>Amazon Lightsail Developer Guide</i>.</p>
   */
  enableObjectVersioning?: boolean;
}

export namespace CreateBucketRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBucketRequest): any => ({
    ...obj,
  });
}

export interface CreateBucketResult {
  /**
   * <p>An object that describes the bucket that is created.</p>
   */
  bucket?: Bucket;

  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateBucketResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBucketResult): any => ({
    ...obj,
  });
}

export interface CreateBucketAccessKeyRequest {
  /**
   * <p>The name of the bucket that the new access key will belong to, and grant access to.</p>
   */
  bucketName: string | undefined;
}

export namespace CreateBucketAccessKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBucketAccessKeyRequest): any => ({
    ...obj,
  });
}

export interface CreateBucketAccessKeyResult {
  /**
   * <p>An object that describes the access key that is created.</p>
   */
  accessKey?: AccessKey;

  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateBucketAccessKeyResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBucketAccessKeyResult): any => ({
    ...obj,
    ...(obj.accessKey && { accessKey: AccessKey.filterSensitiveLog(obj.accessKey) }),
  });
}

export interface CreateCertificateRequest {
  /**
   * <p>The name for the certificate.</p>
   */
  certificateName: string | undefined;

  /**
   * <p>The domain name (e.g., <code>example.com</code>) for the certificate.</p>
   */
  domainName: string | undefined;

  /**
   * <p>An array of strings that specify the alternate domains (e.g., <code>example2.com</code>)
   *       and subdomains (e.g., <code>blog.example.com</code>) for the certificate.</p>
   *          <p>You can specify a maximum of nine alternate domains (in addition to the primary domain
   *       name).</p>
   *          <p>Wildcard domain entries (e.g., <code>*.example.com</code>) are not supported.</p>
   */
  subjectAlternativeNames?: string[];

  /**
   * <p>The tag keys and optional values to add to the certificate during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

export namespace CreateCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCertificateRequest): any => ({
    ...obj,
  });
}

export interface CreateCertificateResult {
  /**
   * <p>An object that describes the certificate created.</p>
   */
  certificate?: CertificateSummary;

  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateCertificateResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCertificateResult): any => ({
    ...obj,
  });
}

export interface CreateCloudFormationStackRequest {
  /**
   * <p>An array of parameters that will be used to create the new Amazon EC2 instance. You can only
   *       pass one instance entry at a time in this array. You will get an invalid parameter error if
   *       you pass more than one instance entry in this array.</p>
   */
  instances: InstanceEntry[] | undefined;
}

export namespace CreateCloudFormationStackRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCloudFormationStackRequest): any => ({
    ...obj,
  });
}

export interface CreateCloudFormationStackResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateCloudFormationStackResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCloudFormationStackResult): any => ({
    ...obj,
  });
}

export interface CreateContactMethodRequest {
  /**
   * <p>The protocol of the contact method, such as <code>Email</code> or <code>SMS</code> (text
   *       messaging).</p>
   *          <p>The <code>SMS</code> protocol is supported only in the following Amazon Web Services
   *       Regions.</p>
   *          <ul>
   *             <li>
   *                <p>US East (N. Virginia) (<code>us-east-1</code>)</p>
   *             </li>
   *             <li>
   *                <p>US West (Oregon) (<code>us-west-2</code>)</p>
   *             </li>
   *             <li>
   *                <p>Europe (Ireland) (<code>eu-west-1</code>)</p>
   *             </li>
   *             <li>
   *                <p>Asia Pacific (Tokyo) (<code>ap-northeast-1</code>)</p>
   *             </li>
   *             <li>
   *                <p>Asia Pacific (Singapore) (<code>ap-southeast-1</code>)</p>
   *             </li>
   *             <li>
   *                <p>Asia Pacific (Sydney) (<code>ap-southeast-2</code>)</p>
   *             </li>
   *          </ul>
   *          <p>For a list of countries/regions where SMS text messages can be sent, and the latest
   *         Amazon Web Services Regions where SMS text messaging is supported, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-supported-regions-countries.html">Supported Regions and Countries</a> in the <i>Amazon SNS Developer
   *         Guide</i>.</p>
   *          <p>For more information about notifications in Amazon Lightsail, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
   */
  protocol: ContactProtocol | string | undefined;

  /**
   * <p>The destination of the contact method, such as an email address or a mobile phone
   *       number.</p>
   *          <p>Use the E.164 format when specifying a mobile phone number. E.164 is a standard for the
   *       phone number structure used for international telecommunication. Phone numbers that follow
   *       this format can have a maximum of 15 digits, and they are prefixed with the plus character (+)
   *       and the country code. For example, a U.S. phone number in E.164 format would be specified as
   *       +1XXX5550100. For more information, see <a href="https://en.wikipedia.org/wiki/E.164">E.164</a> on <i>Wikipedia</i>.</p>
   */
  contactEndpoint: string | undefined;
}

export namespace CreateContactMethodRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContactMethodRequest): any => ({
    ...obj,
  });
}

export interface CreateContactMethodResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateContactMethodResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContactMethodResult): any => ({
    ...obj,
  });
}

export interface CreateContainerServiceRequest {
  /**
   * <p>The name for the container service.</p>
   *
   *          <p>The name that you specify for your container service will make up part of its default
   *       domain. The default domain of a container service is typically
   *         <code>https://<ServiceName>.<RandomGUID>.<AWSRegion>.cs.amazonlightsail.com</code>.
   *       If the name of your container service is <code>container-service-1</code>, and it's located in
   *       the US East (Ohio) AWS region (<code>us-east-2</code>), then the domain for your container
   *       service will be like the following example:
   *         <code>https://container-service-1.ur4EXAMPLE2uq.us-east-2.cs.amazonlightsail.com</code>
   *          </p>
   *
   *          <p>The following are the requirements for container service names:</p>
   *
   *          <ul>
   *             <li>
   *                <p>Must be unique within each Amazon Web Services Region in your Lightsail
   *           account.</p>
   *             </li>
   *             <li>
   *                <p>Must contain 1 to 63 characters.</p>
   *             </li>
   *             <li>
   *                <p>Must contain only alphanumeric characters and hyphens.</p>
   *             </li>
   *             <li>
   *                <p>A hyphen (-) can separate words but cannot be at the start or end of the name.</p>
   *             </li>
   *          </ul>
   */
  serviceName: string | undefined;

  /**
   * <p>The power specification for the container service.</p>
   *
   *          <p>The power specifies the amount of memory, vCPUs, and base monthly cost of each node of the
   *       container service. The <code>power</code> and <code>scale</code> of a container service makes
   *       up its configured capacity. To determine the monthly price of your container service, multiply
   *       the base price of the <code>power</code> with the <code>scale</code> (the number of nodes) of
   *       the service.</p>
   *
   *          <p>Use the <code>GetContainerServicePowers</code> action to get a list of power options that
   *       you can specify using this parameter, and their base monthly cost.</p>
   */
  power: ContainerServicePowerName | string | undefined;

  /**
   * <p>The scale specification for the container service.</p>
   *
   *          <p>The scale specifies the allocated compute nodes of the container service. The
   *         <code>power</code> and <code>scale</code> of a container service makes up its configured
   *       capacity. To determine the monthly price of your container service, multiply the base price of
   *       the <code>power</code> with the <code>scale</code> (the number of nodes) of the
   *       service.</p>
   */
  scale: number | undefined;

  /**
   * <p>The tag keys and optional values to add to the container service during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   *          <p>For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
   */
  tags?: Tag[];

  /**
   * <p>The public domain names to use with the container service, such as
   *         <code>example.com</code> and <code>www.example.com</code>.</p>
   *
   *          <p>You can specify up to four public domain names for a container service. The domain names
   *       that you specify are used when you create a deployment with a container configured as the
   *       public endpoint of your container service.</p>
   *
   *          <p>If you don't specify public domain names, then you can use the default domain of the
   *       container service.</p>
   *
   *          <important>
   *             <p>You must create and validate an SSL/TLS certificate before you can use public domain
   *         names with your container service. Use the <code>CreateCertificate</code> action to create a
   *         certificate for the public domain names you want to use with your container service.</p>
   *          </important>
   *
   *          <p>You can specify public domain names using a string to array map as shown in the example
   *       later on this page.</p>
   */
  publicDomainNames?: Record<string, string[]>;

  /**
   * <p>An object that describes a deployment for the container service.</p>
   *
   *          <p>A deployment specifies the containers that will be launched on the container service and
   *       their settings, such as the ports to open, the environment variables to apply, and the launch
   *       command to run. It also specifies the container that will serve as the public endpoint of the
   *       deployment and its settings, such as the HTTP or HTTPS port to use, and the health check
   *       configuration.</p>
   */
  deployment?: ContainerServiceDeploymentRequest;

  /**
   * <p>An object to describe the configuration for the container service to access private
   *       container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private
   *       repositories.</p>
   *
   *          <p>For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
   */
  privateRegistryAccess?: PrivateRegistryAccessRequest;
}

export namespace CreateContainerServiceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContainerServiceRequest): any => ({
    ...obj,
  });
}

export interface CreateContainerServiceResult {
  /**
   * <p>An object that describes a container service.</p>
   */
  containerService?: ContainerService;
}

export namespace CreateContainerServiceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContainerServiceResult): any => ({
    ...obj,
  });
}

export interface CreateContainerServiceDeploymentRequest {
  /**
   * <p>The name of the container service for which to create the deployment.</p>
   */
  serviceName: string | undefined;

  /**
   * <p>An object that describes the settings of the containers that will be launched on the
   *       container service.</p>
   */
  containers?: Record<string, Container>;

  /**
   * <p>An object that describes the settings of the public endpoint for the container
   *       service.</p>
   */
  publicEndpoint?: EndpointRequest;
}

export namespace CreateContainerServiceDeploymentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContainerServiceDeploymentRequest): any => ({
    ...obj,
  });
}

export interface CreateContainerServiceDeploymentResult {
  /**
   * <p>An object that describes a container service.</p>
   */
  containerService?: ContainerService;
}

export namespace CreateContainerServiceDeploymentResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContainerServiceDeploymentResult): any => ({
    ...obj,
  });
}

export interface CreateContainerServiceRegistryLoginRequest {}

export namespace CreateContainerServiceRegistryLoginRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContainerServiceRegistryLoginRequest): any => ({
    ...obj,
  });
}

export interface CreateContainerServiceRegistryLoginResult {
  /**
   * <p>An object that describes the log in information for the container service registry of your
   *       Lightsail account.</p>
   */
  registryLogin?: ContainerServiceRegistryLogin;
}

export namespace CreateContainerServiceRegistryLoginResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContainerServiceRegistryLoginResult): any => ({
    ...obj,
  });
}

export interface CreateDiskRequest {
  /**
   * <p>The unique Lightsail disk name (e.g., <code>my-disk</code>).</p>
   */
  diskName: string | undefined;

  /**
   * <p>The Availability Zone where you want to create the disk (e.g., <code>us-east-2a</code>).
   *       Use the same Availability Zone as the Lightsail instance to which you want to attach the
   *       disk.</p>
   *          <p>Use the <code>get regions</code> operation to list the Availability Zones where
   *       Lightsail is currently available.</p>
   */
  availabilityZone: string | undefined;

  /**
   * <p>The size of the disk in GB (e.g., <code>32</code>).</p>
   */
  sizeInGb: number | undefined;

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];

  /**
   * <p>An array of objects that represent the add-ons to enable for the new disk.</p>
   */
  addOns?: AddOnRequest[];
}

export namespace CreateDiskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDiskRequest): any => ({
    ...obj,
  });
}

export interface CreateDiskResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateDiskResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDiskResult): any => ({
    ...obj,
  });
}

export interface CreateDiskFromSnapshotRequest {
  /**
   * <p>The unique Lightsail disk name (e.g., <code>my-disk</code>).</p>
   */
  diskName: string | undefined;

  /**
   * <p>The name of the disk snapshot (e.g., <code>my-snapshot</code>) from which to create the
   *       new storage disk.</p>
   *          <p>Constraint:</p>
   *          <ul>
   *             <li>
   *                <p>This parameter cannot be defined together with the <code>source disk name</code>
   *           parameter. The <code>disk snapshot name</code> and <code>source disk name</code>
   *           parameters are mutually exclusive.</p>
   *             </li>
   *          </ul>
   */
  diskSnapshotName?: string;

  /**
   * <p>The Availability Zone where you want to create the disk (e.g., <code>us-east-2a</code>).
   *       Choose the same Availability Zone as the Lightsail instance where you want to create the
   *       disk.</p>
   *          <p>Use the GetRegions operation to list the Availability Zones where Lightsail is currently
   *       available.</p>
   */
  availabilityZone: string | undefined;

  /**
   * <p>The size of the disk in GB (e.g., <code>32</code>).</p>
   */
  sizeInGb: number | undefined;

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];

  /**
   * <p>An array of objects that represent the add-ons to enable for the new disk.</p>
   */
  addOns?: AddOnRequest[];

  /**
   * <p>The name of the source disk from which the source automatic snapshot was created.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>This parameter cannot be defined together with the <code>disk snapshot name</code>
   *           parameter. The <code>source disk name</code> and <code>disk snapshot name</code>
   *           parameters are mutually exclusive.</p>
   *             </li>
   *             <li>
   *                <p>Define this parameter only when creating a new disk from an automatic snapshot. For
   *           more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.</p>
   *             </li>
   *          </ul>
   */
  sourceDiskName?: string;

  /**
   * <p>The date of the automatic snapshot to use for the new disk. Use the <code>get auto
   *         snapshots</code> operation to identify the dates of the available automatic
   *       snapshots.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be specified in <code>YYYY-MM-DD</code> format.</p>
   *             </li>
   *             <li>
   *                <p>This parameter cannot be defined together with the <code>use latest restorable auto
   *             snapshot</code> parameter. The <code>restore date</code> and <code>use latest restorable
   *             auto snapshot</code> parameters are mutually exclusive.</p>
   *             </li>
   *             <li>
   *                <p>Define this parameter only when creating a new disk from an automatic snapshot. For
   *           more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.</p>
   *             </li>
   *          </ul>
   */
  restoreDate?: string;

  /**
   * <p>A Boolean value to indicate whether to use the latest available automatic snapshot.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>This parameter cannot be defined together with the <code>restore date</code>
   *           parameter. The <code>use latest restorable auto snapshot</code> and <code>restore
   *             date</code> parameters are mutually exclusive.</p>
   *             </li>
   *             <li>
   *                <p>Define this parameter only when creating a new disk from an automatic snapshot. For
   *           more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.</p>
   *             </li>
   *          </ul>
   */
  useLatestRestorableAutoSnapshot?: boolean;
}

export namespace CreateDiskFromSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDiskFromSnapshotRequest): any => ({
    ...obj,
  });
}

export interface CreateDiskFromSnapshotResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateDiskFromSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDiskFromSnapshotResult): any => ({
    ...obj,
  });
}

export interface CreateDiskSnapshotRequest {
  /**
   * <p>The unique name of the source disk (e.g., <code>Disk-Virginia-1</code>).</p>
   *          <note>
   *             <p>This parameter cannot be defined together with the <code>instance name</code> parameter.
   *         The <code>disk name</code> and <code>instance name</code> parameters are mutually
   *         exclusive.</p>
   *          </note>
   */
  diskName?: string;

  /**
   * <p>The name of the destination disk snapshot (e.g., <code>my-disk-snapshot</code>) based on
   *       the source disk.</p>
   */
  diskSnapshotName: string | undefined;

  /**
   * <p>The unique name of the source instance (e.g., <code>Amazon_Linux-512MB-Virginia-1</code>).
   *       When this is defined, a snapshot of the instance's system volume is created.</p>
   *          <note>
   *             <p>This parameter cannot be defined together with the <code>disk name</code> parameter. The
   *           <code>instance name</code> and <code>disk name</code> parameters are mutually
   *         exclusive.</p>
   *          </note>
   */
  instanceName?: string;

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

export namespace CreateDiskSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDiskSnapshotRequest): any => ({
    ...obj,
  });
}

export interface CreateDiskSnapshotResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateDiskSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDiskSnapshotResult): any => ({
    ...obj,
  });
}

export interface CreateDistributionRequest {
  /**
   * <p>The name for the distribution.</p>
   */
  distributionName: string | undefined;

  /**
   * <p>An object that describes the origin resource for the distribution, such as a Lightsail
   *       instance, bucket, or load balancer.</p>
   *          <p>The distribution pulls, caches, and serves content from the origin.</p>
   */
  origin: InputOrigin | undefined;

  /**
   * <p>An object that describes the default cache behavior for the distribution.</p>
   */
  defaultCacheBehavior: CacheBehavior | undefined;

  /**
   * <p>An object that describes the cache behavior settings for the distribution.</p>
   */
  cacheBehaviorSettings?: CacheSettings;

  /**
   * <p>An array of objects that describe the per-path cache behavior for the distribution.</p>
   */
  cacheBehaviors?: CacheBehaviorPerPath[];

  /**
   * <p>The bundle ID to use for the distribution.</p>
   *          <p>A distribution bundle describes the specifications of your distribution, such as the
   *       monthly cost and monthly network transfer quota.</p>
   *          <p>Use the <code>GetDistributionBundles</code> action to get a list of distribution bundle
   *       IDs that you can specify.</p>
   */
  bundleId: string | undefined;

  /**
   * <p>The IP address type for the distribution.</p>
   *
   *          <p>The possible values are <code>ipv4</code> for IPv4 only, and <code>dualstack</code> for
   *       IPv4 and IPv6.</p>
   *
   *          <p>The default value is <code>dualstack</code>.</p>
   */
  ipAddressType?: IpAddressType | string;

  /**
   * <p>The tag keys and optional values to add to the distribution during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

export namespace CreateDistributionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDistributionRequest): any => ({
    ...obj,
  });
}

export interface CreateDistributionResult {
  /**
   * <p>An object that describes the distribution created.</p>
   */
  distribution?: LightsailDistribution;

  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace CreateDistributionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDistributionResult): any => ({
    ...obj,
  });
}

export interface CreateDomainRequest {
  /**
   * <p>The domain name to manage (e.g., <code>example.com</code>).</p>
   *          <note>
   *             <p>You cannot register a new domain name using Lightsail. You must register a domain name
   *         using Amazon Route 53 or another domain name registrar. If you have already registered your
   *         domain, you can enter its name in this parameter to manage the DNS records for that domain
   *         using Lightsail.</p>
   *          </note>
   */
  domainName: string | undefined;

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

export namespace CreateDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDomainRequest): any => ({
    ...obj,
  });
}

export interface CreateDomainResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace CreateDomainResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDomainResult): any => ({
    ...obj,
  });
}

export interface CreateDomainEntryRequest {
  /**
   * <p>The domain name (e.g., <code>example.com</code>) for which you want to create the domain
   *       entry.</p>
   */
  domainName: string | undefined;

  /**
   * <p>An array of key-value pairs containing information about the domain entry request.</p>
   */
  domainEntry: DomainEntry | undefined;
}

export namespace CreateDomainEntryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDomainEntryRequest): any => ({
    ...obj,
  });
}

export interface CreateDomainEntryResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace CreateDomainEntryResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDomainEntryResult): any => ({
    ...obj,
  });
}

export interface CreateInstancesRequest {
  /**
   * <p>The names to use for your new Lightsail instances. Separate multiple values using
   *       quotation marks and commas, for example:
   *       <code>["MyFirstInstance","MySecondInstance"]</code>
   *          </p>
   */
  instanceNames: string[] | undefined;

  /**
   * <p>The Availability Zone in which to create your instance. Use the following format:
   *         <code>us-east-2a</code> (case sensitive). You can get a list of Availability Zones by using
   *       the <a href="http://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRegions.html">get
   *         regions</a> operation. Be sure to add the <code>include Availability Zones</code>
   *       parameter to your request.</p>
   */
  availabilityZone: string | undefined;

  /**
   * @deprecated
   *
   * <p>(Deprecated) The name for your custom image.</p>
   *          <note>
   *             <p>In releases prior to June 12, 2017, this parameter was ignored by the API. It is now
   *         deprecated.</p>
   *          </note>
   */
  customImageName?: string;

  /**
   * <p>The ID for a virtual private server image (e.g., <code>app_wordpress_4_4</code> or
   *         <code>app_lamp_7_0</code>). Use the <code>get blueprints</code> operation to return a list
   *       of available images (or <i>blueprints</i>).</p>
   *          <note>
   *             <p>Use active blueprints when creating new instances. Inactive blueprints are listed to
   *         support customers with existing instances and are not necessarily available to create new
   *         instances. Blueprints are marked inactive when they become outdated due to operating system
   *         updates or new application releases.</p>
   *          </note>
   */
  blueprintId: string | undefined;

  /**
   * <p>The bundle of specification information for your virtual private server (or
   *         <i>instance</i>), including the pricing plan (e.g.,
   *       <code>micro_1_0</code>).</p>
   */
  bundleId: string | undefined;

  /**
   * <p>A launch script you can create that configures a server with additional user data. For
   *       example, you might want to run <code>apt-get -y update</code>.</p>
   *          <note>
   *             <p>Depending on the machine image you choose, the command to get software on your instance
   *         varies. Amazon Linux and CentOS use <code>yum</code>, Debian and Ubuntu use
   *           <code>apt-get</code>, and FreeBSD uses <code>pkg</code>. For a complete list, see the
   *           <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/compare-options-choose-lightsail-instance-image">Amazon Lightsail Developer Guide</a>.</p>
   *          </note>
   */
  userData?: string;

  /**
   * <p>The name of your key pair.</p>
   */
  keyPairName?: string;

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];

  /**
   * <p>An array of objects representing the add-ons to enable for the new instance.</p>
   */
  addOns?: AddOnRequest[];

  /**
   * <p>The IP address type for the instance.</p>
   *
   *          <p>The possible values are <code>ipv4</code> for IPv4 only, and <code>dualstack</code> for
   *       IPv4 and IPv6.</p>
   *
   *          <p>The default value is <code>dualstack</code>.</p>
   */
  ipAddressType?: IpAddressType | string;
}

export namespace CreateInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInstancesRequest): any => ({
    ...obj,
  });
}

export interface CreateInstancesResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateInstancesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInstancesResult): any => ({
    ...obj,
  });
}

export interface CreateInstancesFromSnapshotRequest {
  /**
   * <p>The names for your new instances.</p>
   */
  instanceNames: string[] | undefined;

  /**
   * <p>An object containing information about one or more disk mappings.</p>
   */
  attachedDiskMapping?: Record<string, DiskMap[]>;

  /**
   * <p>The Availability Zone where you want to create your instances. Use the following
   *       formatting: <code>us-east-2a</code> (case sensitive). You can get a list of Availability Zones
   *       by using the <a href="http://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRegions.html">get
   *         regions</a> operation. Be sure to add the <code>include Availability Zones</code>
   *       parameter to your request.</p>
   */
  availabilityZone: string | undefined;

  /**
   * <p>The name of the instance snapshot on which you are basing your new instances. Use the get
   *       instance snapshots operation to return information about your existing snapshots.</p>
   *          <p>Constraint:</p>
   *          <ul>
   *             <li>
   *                <p>This parameter cannot be defined together with the <code>source instance name</code>
   *           parameter. The <code>instance snapshot name</code> and <code>source instance name</code>
   *           parameters are mutually exclusive.</p>
   *             </li>
   *          </ul>
   */
  instanceSnapshotName?: string;

  /**
   * <p>The bundle of specification information for your virtual private server (or
   *         <i>instance</i>), including the pricing plan (e.g.,
   *       <code>micro_1_0</code>).</p>
   */
  bundleId: string | undefined;

  /**
   * <p>You can create a launch script that configures a server with additional user data. For
   *       example, <code>apt-get -y update</code>.</p>
   *          <note>
   *             <p>Depending on the machine image you choose, the command to get software on your instance
   *         varies. Amazon Linux and CentOS use <code>yum</code>, Debian and Ubuntu use
   *           <code>apt-get</code>, and FreeBSD uses <code>pkg</code>. For a complete list, see the
   *           <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/compare-options-choose-lightsail-instance-image">Amazon Lightsail Developer Guide</a>.</p>
   *          </note>
   */
  userData?: string;

  /**
   * <p>The name for your key pair.</p>
   */
  keyPairName?: string;

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];

  /**
   * <p>An array of objects representing the add-ons to enable for the new instance.</p>
   */
  addOns?: AddOnRequest[];

  /**
   * <p>The IP address type for the instance.</p>
   *
   *          <p>The possible values are <code>ipv4</code> for IPv4 only, and <code>dualstack</code> for
   *       IPv4 and IPv6.</p>
   *
   *          <p>The default value is <code>dualstack</code>.</p>
   */
  ipAddressType?: IpAddressType | string;

  /**
   * <p>The name of the source instance from which the source automatic snapshot was
   *       created.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>This parameter cannot be defined together with the <code>instance snapshot name</code>
   *           parameter. The <code>source instance name</code> and <code>instance snapshot name</code>
   *           parameters are mutually exclusive.</p>
   *             </li>
   *             <li>
   *                <p>Define this parameter only when creating a new instance from an automatic snapshot.
   *           For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.</p>
   *             </li>
   *          </ul>
   */
  sourceInstanceName?: string;

  /**
   * <p>The date of the automatic snapshot to use for the new instance. Use the <code>get auto
   *         snapshots</code> operation to identify the dates of the available automatic
   *       snapshots.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be specified in <code>YYYY-MM-DD</code> format.</p>
   *             </li>
   *             <li>
   *                <p>This parameter cannot be defined together with the <code>use latest restorable auto
   *             snapshot</code> parameter. The <code>restore date</code> and <code>use latest restorable
   *             auto snapshot</code> parameters are mutually exclusive.</p>
   *             </li>
   *             <li>
   *                <p>Define this parameter only when creating a new instance from an automatic snapshot.
   *           For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.</p>
   *             </li>
   *          </ul>
   */
  restoreDate?: string;

  /**
   * <p>A Boolean value to indicate whether to use the latest available automatic snapshot.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>This parameter cannot be defined together with the <code>restore date</code>
   *           parameter. The <code>use latest restorable auto snapshot</code> and <code>restore
   *             date</code> parameters are mutually exclusive.</p>
   *             </li>
   *             <li>
   *                <p>Define this parameter only when creating a new instance from an automatic snapshot.
   *           For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.</p>
   *             </li>
   *          </ul>
   */
  useLatestRestorableAutoSnapshot?: boolean;
}

export namespace CreateInstancesFromSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInstancesFromSnapshotRequest): any => ({
    ...obj,
  });
}

export interface CreateInstancesFromSnapshotResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateInstancesFromSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInstancesFromSnapshotResult): any => ({
    ...obj,
  });
}

export interface CreateInstanceSnapshotRequest {
  /**
   * <p>The name for your new snapshot.</p>
   */
  instanceSnapshotName: string | undefined;

  /**
   * <p>The Lightsail instance on which to base your snapshot.</p>
   */
  instanceName: string | undefined;

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

export namespace CreateInstanceSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInstanceSnapshotRequest): any => ({
    ...obj,
  });
}

export interface CreateInstanceSnapshotResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateInstanceSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInstanceSnapshotResult): any => ({
    ...obj,
  });
}

export interface CreateKeyPairRequest {
  /**
   * <p>The name for your new key pair.</p>
   */
  keyPairName: string | undefined;

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

export namespace CreateKeyPairRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateKeyPairRequest): any => ({
    ...obj,
  });
}

export interface CreateKeyPairResult {
  /**
   * <p>An array of key-value pairs containing information about the new key pair you just
   *       created.</p>
   */
  keyPair?: KeyPair;

  /**
   * <p>A base64-encoded public key of the <code>ssh-rsa</code> type.</p>
   */
  publicKeyBase64?: string;

  /**
   * <p>A base64-encoded RSA private key.</p>
   */
  privateKeyBase64?: string;

  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace CreateKeyPairResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateKeyPairResult): any => ({
    ...obj,
  });
}

export interface CreateLoadBalancerRequest {
  /**
   * <p>The name of your load balancer.</p>
   */
  loadBalancerName: string | undefined;

  /**
   * <p>The instance port where you're creating your load balancer.</p>
   */
  instancePort: number | undefined;

  /**
   * <p>The path you provided to perform the load balancer health check. If you didn't specify a
   *       health check path, Lightsail uses the root path of your website (e.g.,
   *       <code>"/"</code>).</p>
   *          <p>You may want to specify a custom health check path other than the root of your application
   *       if your home page loads slowly or has a lot of media or scripting on it.</p>
   */
  healthCheckPath?: string;

  /**
   * <p>The name of the SSL/TLS certificate.</p>
   *          <p>If you specify <code>certificateName</code>, then <code>certificateDomainName</code> is
   *       required (and vice-versa).</p>
   */
  certificateName?: string;

  /**
   * <p>The domain name with which your certificate is associated (e.g.,
   *       <code>example.com</code>).</p>
   *          <p>If you specify <code>certificateDomainName</code>, then <code>certificateName</code> is
   *       required (and vice-versa).</p>
   */
  certificateDomainName?: string;

  /**
   * <p>The optional alternative domains and subdomains to use with your SSL/TLS certificate
   *       (e.g., <code>www.example.com</code>, <code>example.com</code>, <code>m.example.com</code>,
   *         <code>blog.example.com</code>).</p>
   */
  certificateAlternativeNames?: string[];

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];

  /**
   * <p>The IP address type for the load balancer.</p>
   *
   *          <p>The possible values are <code>ipv4</code> for IPv4 only, and <code>dualstack</code> for
   *       IPv4 and IPv6.</p>
   *
   *          <p>The default value is <code>dualstack</code>.</p>
   */
  ipAddressType?: IpAddressType | string;

  /**
   * <p>The name of the TLS policy to apply to the load balancer.</p>
   *
   *          <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancerTlsPolicies.html">GetLoadBalancerTlsPolicies</a> action to get a list of TLS policy names that you can
   *       specify.</p>
   *
   *          <p>For more information about load balancer TLS policies, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configure-load-balancer-tls-security-policy">Configuring TLS security policies on your Amazon Lightsail load
   *         balancers</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
   */
  tlsPolicyName?: string;
}

export namespace CreateLoadBalancerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLoadBalancerRequest): any => ({
    ...obj,
  });
}

export interface CreateLoadBalancerResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateLoadBalancerResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLoadBalancerResult): any => ({
    ...obj,
  });
}

export interface CreateLoadBalancerTlsCertificateRequest {
  /**
   * <p>The load balancer name where you want to create the SSL/TLS certificate.</p>
   */
  loadBalancerName: string | undefined;

  /**
   * <p>The SSL/TLS certificate name.</p>
   *          <p>You can have up to 10 certificates in your account at one time. Each Lightsail load
   *       balancer can have up to 2 certificates associated with it at one time. There is also an
   *       overall limit to the number of certificates that can be issue in a 365-day period. For more
   *       information, see <a href="http://docs.aws.amazon.com/acm/latest/userguide/acm-limits.html">Limits</a>.</p>
   */
  certificateName: string | undefined;

  /**
   * <p>The domain name (e.g., <code>example.com</code>) for your SSL/TLS certificate.</p>
   */
  certificateDomainName: string | undefined;

  /**
   * <p>An array of strings listing alternative domains and subdomains for your SSL/TLS
   *       certificate. Lightsail will de-dupe the names for you. You can have a maximum of 9
   *       alternative names (in addition to the 1 primary domain). We do not support wildcards (e.g.,
   *         <code>*.example.com</code>).</p>
   */
  certificateAlternativeNames?: string[];

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

export namespace CreateLoadBalancerTlsCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLoadBalancerTlsCertificateRequest): any => ({
    ...obj,
  });
}

export interface CreateLoadBalancerTlsCertificateResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateLoadBalancerTlsCertificateResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLoadBalancerTlsCertificateResult): any => ({
    ...obj,
  });
}

export interface CreateRelationalDatabaseRequest {
  /**
   * <p>The name to use for your new Lightsail database resource.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 2 to 255 alphanumeric characters, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>The first and last character must be a letter or number.</p>
   *             </li>
   *          </ul>
   */
  relationalDatabaseName: string | undefined;

  /**
   * <p>The Availability Zone in which to create your new database. Use the
   *         <code>us-east-2a</code> case-sensitive format.</p>
   *          <p>You can get a list of Availability Zones by using the <code>get regions</code> operation.
   *       Be sure to add the <code>include relational database Availability Zones</code> parameter to
   *       your request.</p>
   */
  availabilityZone?: string;

  /**
   * <p>The blueprint ID for your new database. A blueprint describes the major engine version of
   *       a database.</p>
   *          <p>You can get a list of database blueprints IDs by using the <code>get relational database
   *         blueprints</code> operation.</p>
   */
  relationalDatabaseBlueprintId: string | undefined;

  /**
   * <p>The bundle ID for your new database. A bundle describes the performance specifications for
   *       your database.</p>
   *          <p>You can get a list of database bundle IDs by using the <code>get relational database
   *         bundles</code> operation.</p>
   */
  relationalDatabaseBundleId: string | undefined;

  /**
   * <p>The meaning of this parameter differs according to the database engine you use.</p>
   *          <p>
   *             <b>MySQL</b>
   *          </p>
   *          <p>The name of the database to create when the Lightsail database resource is created. If
   *       this parameter isn't specified, no database is created in the database resource.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain 1 to 64 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>Must begin with a letter. Subsequent characters can be letters, underscores, or digits
   *           (0- 9).</p>
   *             </li>
   *             <li>
   *                <p>Can't be a word reserved by the specified database engine.</p>
   *                <p>For more information about reserved words in MySQL, see the Keywords and Reserved
   *           Words articles for <a href="https://dev.mysql.com/doc/refman/5.6/en/keywords.html">MySQL 5.6</a>, <a href="https://dev.mysql.com/doc/refman/5.7/en/keywords.html">MySQL 5.7</a>, and <a href="https://dev.mysql.com/doc/refman/8.0/en/keywords.html">MySQL 8.0</a>.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *          <p>The name of the database to create when the Lightsail database resource is created. If
   *       this parameter isn't specified, a database named <code>postgres</code> is created in the
   *       database resource.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain 1 to 63 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>Must begin with a letter. Subsequent characters can be letters, underscores, or digits
   *           (0- 9).</p>
   *             </li>
   *             <li>
   *                <p>Can't be a word reserved by the specified database engine.</p>
   *                <p>For more information about reserved words in PostgreSQL, see the SQL Key Words
   *           articles for <a href="https://www.postgresql.org/docs/9.6/sql-keywords-appendix.html">PostgreSQL 9.6</a>, <a href="https://www.postgresql.org/docs/10/sql-keywords-appendix.html">PostgreSQL
   *             10</a>, <a href="https://www.postgresql.org/docs/11/sql-keywords-appendix.html">PostgreSQL 11</a>, and <a href="https://www.postgresql.org/docs/12/sql-keywords-appendix.html">PostgreSQL
   *             12</a>.</p>
   *             </li>
   *          </ul>
   */
  masterDatabaseName: string | undefined;

  /**
   * <p>The name for the master user.</p>
   *          <p>
   *             <b>MySQL</b>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Required for MySQL.</p>
   *             </li>
   *             <li>
   *                <p>Must be 1 to 16 letters or numbers. Can contain underscores.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't be a reserved word for the chosen database engine.</p>
   *                <p>For more information about reserved words in MySQL 5.6 or 5.7, see the Keywords and
   *           Reserved Words articles for <a href="https://dev.mysql.com/doc/refman/5.6/en/keywords.html">MySQL 5.6</a>, <a href="https://dev.mysql.com/doc/refman/5.7/en/keywords.html">MySQL 5.7</a>, or <a href="https://dev.mysql.com/doc/refman/8.0/en/keywords.html">MySQL 8.0</a>.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Required for PostgreSQL.</p>
   *             </li>
   *             <li>
   *                <p>Must be 1 to 63 letters or numbers. Can contain underscores.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't be a reserved word for the chosen database engine.</p>
   *                <p>For more information about reserved words in MySQL 5.6 or 5.7, see the Keywords and
   *           Reserved Words articles for <a href="https://www.postgresql.org/docs/9.6/sql-keywords-appendix.html">PostgreSQL
   *             9.6</a>, <a href="https://www.postgresql.org/docs/10/sql-keywords-appendix.html">PostgreSQL 10</a>, <a href="https://www.postgresql.org/docs/11/sql-keywords-appendix.html">PostgreSQL
   *             11</a>, and <a href="https://www.postgresql.org/docs/12/sql-keywords-appendix.html">PostgreSQL
   *             12</a>.</p>
   *             </li>
   *          </ul>
   */
  masterUsername: string | undefined;

  /**
   * <p>The password for the master user. The password can include any printable ASCII character
   *       except "/", """, or "@". It cannot contain spaces.</p>
   *          <p>
   *             <b>MySQL</b>
   *          </p>
   *          <p>Constraints: Must contain from 8 to 41 characters.</p>
   *          <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *          <p>Constraints: Must contain from 8 to 128 characters.</p>
   */
  masterUserPassword?: string;

  /**
   * <p>The daily time range during which automated backups are created for your new database if
   *       automated backups are enabled.</p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for each
   *       AWS Region. For more information about the preferred backup window time blocks for each
   *       region, see the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow">Working With Backups</a> guide in the Amazon Relational Database Service (Amazon RDS) documentation.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the <code>hh24:mi-hh24:mi</code> format.</p>
   *                <p>Example: <code>16:00-16:30</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred maintenance window.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   */
  preferredBackupWindow?: string;

  /**
   * <p>The weekly time range during which system maintenance can occur on your new
   *       database.</p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for each
   *       AWS Region, occurring on a random day of the week.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the <code>ddd:hh24:mi-ddd:hh24:mi</code> format.</p>
   *             </li>
   *             <li>
   *                <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Example: <code>Tue:17:00-Tue:17:30</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  preferredMaintenanceWindow?: string;

  /**
   * <p>Specifies the accessibility options for your new database. A value of <code>true</code>
   *       specifies a database that is available to resources outside of your Lightsail account. A
   *       value of <code>false</code> specifies a database that is available only to your Lightsail
   *       resources in the same region as your database.</p>
   */
  publiclyAccessible?: boolean;

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

export namespace CreateRelationalDatabaseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRelationalDatabaseRequest): any => ({
    ...obj,
    ...(obj.masterUserPassword && { masterUserPassword: SENSITIVE_STRING }),
  });
}

export interface CreateRelationalDatabaseResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateRelationalDatabaseResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRelationalDatabaseResult): any => ({
    ...obj,
  });
}

export interface CreateRelationalDatabaseFromSnapshotRequest {
  /**
   * <p>The name to use for your new Lightsail database resource.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 2 to 255 alphanumeric characters, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>The first and last character must be a letter or number.</p>
   *             </li>
   *          </ul>
   */
  relationalDatabaseName: string | undefined;

  /**
   * <p>The Availability Zone in which to create your new database. Use the
   *         <code>us-east-2a</code> case-sensitive format.</p>
   *          <p>You can get a list of Availability Zones by using the <code>get regions</code> operation.
   *       Be sure to add the <code>include relational database Availability Zones</code> parameter to
   *       your request.</p>
   */
  availabilityZone?: string;

  /**
   * <p>Specifies the accessibility options for your new database. A value of <code>true</code>
   *       specifies a database that is available to resources outside of your Lightsail account. A
   *       value of <code>false</code> specifies a database that is available only to your Lightsail
   *       resources in the same region as your database.</p>
   */
  publiclyAccessible?: boolean;

  /**
   * <p>The name of the database snapshot from which to create your new database.</p>
   */
  relationalDatabaseSnapshotName?: string;

  /**
   * <p>The bundle ID for your new database. A bundle describes the performance specifications for
   *       your database.</p>
   *          <p>You can get a list of database bundle IDs by using the <code>get relational database
   *         bundles</code> operation.</p>
   *          <p>When creating a new database from a snapshot, you cannot choose a bundle that is smaller
   *       than the bundle of the source database.</p>
   */
  relationalDatabaseBundleId?: string;

  /**
   * <p>The name of the source database.</p>
   */
  sourceRelationalDatabaseName?: string;

  /**
   * <p>The date and time to restore your database from.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be before the latest restorable time for the database.</p>
   *             </li>
   *             <li>
   *                <p>Cannot be specified if the <code>use latest restorable time</code> parameter is
   *             <code>true</code>.</p>
   *             </li>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Specified in the Unix time format.</p>
   *                <p>For example, if you wish to use a restore time of October 1, 2018, at 8 PM UTC, then
   *           you input <code>1538424000</code> as the restore time.</p>
   *             </li>
   *          </ul>
   */
  restoreTime?: Date;

  /**
   * <p>Specifies whether your database is restored from the latest backup time. A value of
   *         <code>true</code> restores from the latest backup time. </p>
   *          <p>Default: <code>false</code>
   *          </p>
   *          <p>Constraints: Cannot be specified if the <code>restore time</code> parameter is
   *       provided.</p>
   */
  useLatestRestorableTime?: boolean;

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

export namespace CreateRelationalDatabaseFromSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRelationalDatabaseFromSnapshotRequest): any => ({
    ...obj,
  });
}

export interface CreateRelationalDatabaseFromSnapshotResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateRelationalDatabaseFromSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRelationalDatabaseFromSnapshotResult): any => ({
    ...obj,
  });
}

export interface CreateRelationalDatabaseSnapshotRequest {
  /**
   * <p>The name of the database on which to base your new snapshot.</p>
   */
  relationalDatabaseName: string | undefined;

  /**
   * <p>The name for your new database snapshot.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 2 to 255 alphanumeric characters, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>The first and last character must be a letter or number.</p>
   *             </li>
   *          </ul>
   */
  relationalDatabaseSnapshotName: string | undefined;

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p>
   *          <p>Use the <code>TagResource</code> action to tag a resource after it's created.</p>
   */
  tags?: Tag[];
}

export namespace CreateRelationalDatabaseSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRelationalDatabaseSnapshotRequest): any => ({
    ...obj,
  });
}

export interface CreateRelationalDatabaseSnapshotResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace CreateRelationalDatabaseSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRelationalDatabaseSnapshotResult): any => ({
    ...obj,
  });
}

export interface DeleteAlarmRequest {
  /**
   * <p>The name of the alarm to delete.</p>
   */
  alarmName: string | undefined;
}

export namespace DeleteAlarmRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAlarmRequest): any => ({
    ...obj,
  });
}

export interface DeleteAlarmResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteAlarmResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAlarmResult): any => ({
    ...obj,
  });
}

export interface DeleteAutoSnapshotRequest {
  /**
   * <p>The name of the source instance or disk from which to delete the automatic
   *       snapshot.</p>
   */
  resourceName: string | undefined;

  /**
   * <p>The date of the automatic snapshot to delete in <code>YYYY-MM-DD</code> format. Use the
   *         <code>get auto snapshots</code> operation to get the available automatic snapshots for a
   *       resource.</p>
   */
  date: string | undefined;
}

export namespace DeleteAutoSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAutoSnapshotRequest): any => ({
    ...obj,
  });
}

export interface DeleteAutoSnapshotResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteAutoSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAutoSnapshotResult): any => ({
    ...obj,
  });
}

export interface DeleteBucketRequest {
  /**
   * <p>The name of the bucket to delete.</p>
   *
   *          <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBuckets.html">GetBuckets</a> action to get a list of bucket names
   *       that you can specify.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>A Boolean value that indicates whether to force delete the bucket.</p>
   *
   *          <p>You must force delete the bucket if it has one of the following conditions:</p>
   *          <ul>
   *             <li>
   *                <p>The bucket is the origin of a distribution.</p>
   *             </li>
   *             <li>
   *                <p>The bucket has instances that were granted access to it using the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_SetResourceAccessForBucket.html">SetResourceAccessForBucket</a> action.</p>
   *             </li>
   *             <li>
   *                <p>The bucket has objects.</p>
   *             </li>
   *             <li>
   *                <p>The bucket has access keys.</p>
   *             </li>
   *          </ul>
   *
   *          <important>
   *             <p>Force deleting a bucket might impact other resources that rely on the bucket, such as
   *         instances, distributions, or software that use the issued access keys.</p>
   *          </important>
   */
  forceDelete?: boolean;
}

export namespace DeleteBucketRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBucketRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteBucketResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBucketResult): any => ({
    ...obj,
  });
}

export interface DeleteBucketAccessKeyRequest {
  /**
   * <p>The name of the bucket that the access key belongs to.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>The ID of the access key to delete.</p>
   *
   *          <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBucketAccessKeys.html">GetBucketAccessKeys</a> action to get a
   *       list of access key IDs that you can specify.</p>
   */
  accessKeyId: string | undefined;
}

export namespace DeleteBucketAccessKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBucketAccessKeyRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketAccessKeyResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteBucketAccessKeyResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBucketAccessKeyResult): any => ({
    ...obj,
  });
}

export interface DeleteCertificateRequest {
  /**
   * <p>The name of the certificate to delete.</p>
   *          <p>Use the <code>GetCertificates</code> action to get a list of certificate names that you
   *       can specify.</p>
   */
  certificateName: string | undefined;
}

export namespace DeleteCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCertificateRequest): any => ({
    ...obj,
  });
}

export interface DeleteCertificateResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteCertificateResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCertificateResult): any => ({
    ...obj,
  });
}

export interface DeleteContactMethodRequest {
  /**
   * <p>The protocol that will be deleted, such as <code>Email</code> or <code>SMS</code> (text
   *       messaging).</p>
   *          <note>
   *             <p>To delete an <code>Email</code> and an <code>SMS</code> contact method if you added
   *         both, you must run separate <code>DeleteContactMethod</code> actions to delete each
   *         protocol.</p>
   *          </note>
   */
  protocol: ContactProtocol | string | undefined;
}

export namespace DeleteContactMethodRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteContactMethodRequest): any => ({
    ...obj,
  });
}

export interface DeleteContactMethodResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteContactMethodResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteContactMethodResult): any => ({
    ...obj,
  });
}

export interface DeleteContainerImageRequest {
  /**
   * <p>The name of the container service for which to delete a registered container image.</p>
   */
  serviceName: string | undefined;

  /**
   * <p>The name of the container image to delete from the container service.</p>
   *
   *          <p>Use the <code>GetContainerImages</code> action to get the name of the container images
   *       that are registered to a container service.</p>
   *
   *          <note>
   *             <p>Container images sourced from your Lightsail container service, that are registered
   *         and stored on your service, start with a colon (<code>:</code>). For example,
   *           <code>:container-service-1.mystaticwebsite.1</code>. Container images sourced from a
   *         public registry like Docker Hub don't start with a colon. For example,
   *           <code>nginx:latest</code> or <code>nginx</code>.</p>
   *          </note>
   */
  image: string | undefined;
}

export namespace DeleteContainerImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteContainerImageRequest): any => ({
    ...obj,
  });
}

export interface DeleteContainerImageResult {}

export namespace DeleteContainerImageResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteContainerImageResult): any => ({
    ...obj,
  });
}

export interface DeleteContainerServiceRequest {
  /**
   * <p>The name of the container service to delete.</p>
   */
  serviceName: string | undefined;
}

export namespace DeleteContainerServiceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteContainerServiceRequest): any => ({
    ...obj,
  });
}

export interface DeleteContainerServiceResult {}

export namespace DeleteContainerServiceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteContainerServiceResult): any => ({
    ...obj,
  });
}

export interface DeleteDiskRequest {
  /**
   * <p>The unique name of the disk you want to delete (e.g., <code>my-disk</code>).</p>
   */
  diskName: string | undefined;

  /**
   * <p>A Boolean value to indicate whether to delete the enabled add-ons for the disk.</p>
   */
  forceDeleteAddOns?: boolean;
}

export namespace DeleteDiskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDiskRequest): any => ({
    ...obj,
  });
}

export interface DeleteDiskResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteDiskResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDiskResult): any => ({
    ...obj,
  });
}

export interface DeleteDiskSnapshotRequest {
  /**
   * <p>The name of the disk snapshot you want to delete (e.g.,
   *       <code>my-disk-snapshot</code>).</p>
   */
  diskSnapshotName: string | undefined;
}

export namespace DeleteDiskSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDiskSnapshotRequest): any => ({
    ...obj,
  });
}

export interface DeleteDiskSnapshotResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteDiskSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDiskSnapshotResult): any => ({
    ...obj,
  });
}

export interface DeleteDistributionRequest {
  /**
   * <p>The name of the distribution to delete.</p>
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   */
  distributionName?: string;
}

export namespace DeleteDistributionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDistributionRequest): any => ({
    ...obj,
  });
}

export interface DeleteDistributionResult {
  /**
   * <p>An object that describes the result of the action, such as the status of the request, the
   *       timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace DeleteDistributionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDistributionResult): any => ({
    ...obj,
  });
}

export interface DeleteDomainRequest {
  /**
   * <p>The specific domain name to delete.</p>
   */
  domainName: string | undefined;
}

export namespace DeleteDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDomainRequest): any => ({
    ...obj,
  });
}

export interface DeleteDomainResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace DeleteDomainResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDomainResult): any => ({
    ...obj,
  });
}

export interface DeleteDomainEntryRequest {
  /**
   * <p>The name of the domain entry to delete.</p>
   */
  domainName: string | undefined;

  /**
   * <p>An array of key-value pairs containing information about your domain entries.</p>
   */
  domainEntry: DomainEntry | undefined;
}

export namespace DeleteDomainEntryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDomainEntryRequest): any => ({
    ...obj,
  });
}

export interface DeleteDomainEntryResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace DeleteDomainEntryResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDomainEntryResult): any => ({
    ...obj,
  });
}

export interface DeleteInstanceRequest {
  /**
   * <p>The name of the instance to delete.</p>
   */
  instanceName: string | undefined;

  /**
   * <p>A Boolean value to indicate whether to delete the enabled add-ons for the disk.</p>
   */
  forceDeleteAddOns?: boolean;
}

export namespace DeleteInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInstanceRequest): any => ({
    ...obj,
  });
}

export interface DeleteInstanceResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteInstanceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInstanceResult): any => ({
    ...obj,
  });
}

export interface DeleteInstanceSnapshotRequest {
  /**
   * <p>The name of the snapshot to delete.</p>
   */
  instanceSnapshotName: string | undefined;
}

export namespace DeleteInstanceSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInstanceSnapshotRequest): any => ({
    ...obj,
  });
}

export interface DeleteInstanceSnapshotResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteInstanceSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInstanceSnapshotResult): any => ({
    ...obj,
  });
}

export interface DeleteKeyPairRequest {
  /**
   * <p>The name of the key pair to delete.</p>
   */
  keyPairName: string | undefined;

  /**
   * <p>The RSA fingerprint of the Lightsail default key pair to delete.</p>
   *          <note>
   *             <p>The <code>expectedFingerprint</code> parameter is required only when specifying to
   *         delete a Lightsail default key pair.</p>
   *          </note>
   */
  expectedFingerprint?: string;
}

export namespace DeleteKeyPairRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteKeyPairRequest): any => ({
    ...obj,
  });
}

export interface DeleteKeyPairResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace DeleteKeyPairResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteKeyPairResult): any => ({
    ...obj,
  });
}

export interface DeleteKnownHostKeysRequest {
  /**
   * <p>The name of the instance for which you want to reset the host key or certificate.</p>
   */
  instanceName: string | undefined;
}

export namespace DeleteKnownHostKeysRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteKnownHostKeysRequest): any => ({
    ...obj,
  });
}

export interface DeleteKnownHostKeysResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteKnownHostKeysResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteKnownHostKeysResult): any => ({
    ...obj,
  });
}

export interface DeleteLoadBalancerRequest {
  /**
   * <p>The name of the load balancer you want to delete.</p>
   */
  loadBalancerName: string | undefined;
}

export namespace DeleteLoadBalancerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLoadBalancerRequest): any => ({
    ...obj,
  });
}

export interface DeleteLoadBalancerResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteLoadBalancerResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLoadBalancerResult): any => ({
    ...obj,
  });
}

export interface DeleteLoadBalancerTlsCertificateRequest {
  /**
   * <p>The load balancer name.</p>
   */
  loadBalancerName: string | undefined;

  /**
   * <p>The SSL/TLS certificate name.</p>
   */
  certificateName: string | undefined;

  /**
   * <p>When <code>true</code>, forces the deletion of an SSL/TLS certificate.</p>
   *          <p>There can be two certificates associated with a Lightsail load balancer: the primary and
   *       the backup. The <code>force</code> parameter is required when the primary SSL/TLS certificate
   *       is in use by an instance attached to the load balancer.</p>
   */
  force?: boolean;
}

export namespace DeleteLoadBalancerTlsCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLoadBalancerTlsCertificateRequest): any => ({
    ...obj,
  });
}

export interface DeleteLoadBalancerTlsCertificateResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteLoadBalancerTlsCertificateResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLoadBalancerTlsCertificateResult): any => ({
    ...obj,
  });
}

export interface DeleteRelationalDatabaseRequest {
  /**
   * <p>The name of the database that you are deleting.</p>
   */
  relationalDatabaseName: string | undefined;

  /**
   * <p>Determines whether a final database snapshot is created before your database is deleted.
   *       If <code>true</code> is specified, no database snapshot is created. If <code>false</code> is
   *       specified, a database snapshot is created before your database is deleted.</p>
   *          <p>You must specify the <code>final relational database snapshot name</code> parameter if the
   *         <code>skip final snapshot</code> parameter is <code>false</code>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  skipFinalSnapshot?: boolean;

  /**
   * <p>The name of the database snapshot created if <code>skip final snapshot</code> is
   *         <code>false</code>, which is the default value for that parameter.</p>
   *          <note>
   *             <p>Specifying this parameter and also specifying the <code>skip final snapshot</code>
   *         parameter to <code>true</code> results in an error.</p>
   *          </note>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 2 to 255 alphanumeric characters, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>The first and last character must be a letter or number.</p>
   *             </li>
   *          </ul>
   */
  finalRelationalDatabaseSnapshotName?: string;
}

export namespace DeleteRelationalDatabaseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRelationalDatabaseRequest): any => ({
    ...obj,
  });
}

export interface DeleteRelationalDatabaseResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteRelationalDatabaseResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRelationalDatabaseResult): any => ({
    ...obj,
  });
}

export interface DeleteRelationalDatabaseSnapshotRequest {
  /**
   * <p>The name of the database snapshot that you are deleting.</p>
   */
  relationalDatabaseSnapshotName: string | undefined;
}

export namespace DeleteRelationalDatabaseSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRelationalDatabaseSnapshotRequest): any => ({
    ...obj,
  });
}

export interface DeleteRelationalDatabaseSnapshotResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DeleteRelationalDatabaseSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRelationalDatabaseSnapshotResult): any => ({
    ...obj,
  });
}

export interface DetachCertificateFromDistributionRequest {
  /**
   * <p>The name of the distribution from which to detach the certificate.</p>
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   */
  distributionName: string | undefined;
}

export namespace DetachCertificateFromDistributionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetachCertificateFromDistributionRequest): any => ({
    ...obj,
  });
}

export interface DetachCertificateFromDistributionResult {
  /**
   * <p>An object that describes the result of the action, such as the status of the request, the
   *       timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace DetachCertificateFromDistributionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetachCertificateFromDistributionResult): any => ({
    ...obj,
  });
}

export interface DetachDiskRequest {
  /**
   * <p>The unique name of the disk you want to detach from your instance (e.g.,
   *         <code>my-disk</code>).</p>
   */
  diskName: string | undefined;
}

export namespace DetachDiskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetachDiskRequest): any => ({
    ...obj,
  });
}

export interface DetachDiskResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DetachDiskResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetachDiskResult): any => ({
    ...obj,
  });
}

export interface DetachInstancesFromLoadBalancerRequest {
  /**
   * <p>The name of the Lightsail load balancer.</p>
   */
  loadBalancerName: string | undefined;

  /**
   * <p>An array of strings containing the names of the instances you want to detach from the load
   *       balancer.</p>
   */
  instanceNames: string[] | undefined;
}

export namespace DetachInstancesFromLoadBalancerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetachInstancesFromLoadBalancerRequest): any => ({
    ...obj,
  });
}

export interface DetachInstancesFromLoadBalancerResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DetachInstancesFromLoadBalancerResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetachInstancesFromLoadBalancerResult): any => ({
    ...obj,
  });
}

export interface DetachStaticIpRequest {
  /**
   * <p>The name of the static IP to detach from the instance.</p>
   */
  staticIpName: string | undefined;
}

export namespace DetachStaticIpRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetachStaticIpRequest): any => ({
    ...obj,
  });
}

export interface DetachStaticIpResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DetachStaticIpResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetachStaticIpResult): any => ({
    ...obj,
  });
}

export interface DisableAddOnRequest {
  /**
   * <p>The add-on type to disable.</p>
   */
  addOnType: AddOnType | string | undefined;

  /**
   * <p>The name of the source resource for which to disable the add-on.</p>
   */
  resourceName: string | undefined;
}

export namespace DisableAddOnRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableAddOnRequest): any => ({
    ...obj,
  });
}

export interface DisableAddOnResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace DisableAddOnResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableAddOnResult): any => ({
    ...obj,
  });
}

export interface DownloadDefaultKeyPairRequest {}

export namespace DownloadDefaultKeyPairRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DownloadDefaultKeyPairRequest): any => ({
    ...obj,
  });
}

export interface DownloadDefaultKeyPairResult {
  /**
   * <p>A base64-encoded public key of the <code>ssh-rsa</code> type.</p>
   */
  publicKeyBase64?: string;

  /**
   * <p>A base64-encoded RSA private key.</p>
   */
  privateKeyBase64?: string;

  /**
   * <p>The timestamp when the default key pair was created.</p>
   */
  createdAt?: Date;
}

export namespace DownloadDefaultKeyPairResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DownloadDefaultKeyPairResult): any => ({
    ...obj,
  });
}

export interface EnableAddOnRequest {
  /**
   * <p>The name of the source resource for which to enable or modify the add-on.</p>
   */
  resourceName: string | undefined;

  /**
   * <p>An array of strings representing the add-on to enable or modify.</p>
   */
  addOnRequest: AddOnRequest | undefined;
}

export namespace EnableAddOnRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableAddOnRequest): any => ({
    ...obj,
  });
}

export interface EnableAddOnResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace EnableAddOnResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableAddOnResult): any => ({
    ...obj,
  });
}

export interface ExportSnapshotRequest {
  /**
   * <p>The name of the instance or disk snapshot to be exported to Amazon EC2.</p>
   */
  sourceSnapshotName: string | undefined;
}

export namespace ExportSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportSnapshotRequest): any => ({
    ...obj,
  });
}

export interface ExportSnapshotResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace ExportSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportSnapshotResult): any => ({
    ...obj,
  });
}

export interface GetActiveNamesRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetActiveNames</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetActiveNamesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetActiveNamesRequest): any => ({
    ...obj,
  });
}

export interface GetActiveNamesResult {
  /**
   * <p>The list of active names returned by the get active names request.</p>
   */
  activeNames?: string[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetActiveNames</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetActiveNamesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetActiveNamesResult): any => ({
    ...obj,
  });
}

export interface GetAlarmsRequest {
  /**
   * <p>The name of the alarm.</p>
   *          <p>Specify an alarm name to return information about a specific alarm.</p>
   */
  alarmName?: string;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetAlarms</code> request. If your results
   *       are paginated, the response will return a next page token that you can specify as the page
   *       token in a subsequent request.</p>
   */
  pageToken?: string;

  /**
   * <p>The name of the Lightsail resource being monitored by the alarm.</p>
   *          <p>Specify a monitored resource name to return information about all alarms for a specific
   *       resource.</p>
   */
  monitoredResourceName?: string;
}

export namespace GetAlarmsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAlarmsRequest): any => ({
    ...obj,
  });
}

export interface GetAlarmsResult {
  /**
   * <p>An array of objects that describe the alarms.</p>
   */
  alarms?: Alarm[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetAlarms</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetAlarmsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAlarmsResult): any => ({
    ...obj,
  });
}

export interface GetAutoSnapshotsRequest {
  /**
   * <p>The name of the source instance or disk from which to get automatic snapshot
   *       information.</p>
   */
  resourceName: string | undefined;
}

export namespace GetAutoSnapshotsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAutoSnapshotsRequest): any => ({
    ...obj,
  });
}

export interface GetAutoSnapshotsResult {
  /**
   * <p>The name of the source instance or disk for the automatic snapshots.</p>
   */
  resourceName?: string;

  /**
   * <p>The resource type (e.g., <code>Instance</code> or <code>Disk</code>).</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>An array of objects that describe the automatic snapshots that are available for the
   *       specified source instance or disk.</p>
   */
  autoSnapshots?: AutoSnapshotDetails[];
}

export namespace GetAutoSnapshotsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAutoSnapshotsResult): any => ({
    ...obj,
  });
}

export interface GetBlueprintsRequest {
  /**
   * <p>A Boolean value that indicates whether to include inactive (unavailable) blueprints in the
   *       response of your request.</p>
   */
  includeInactive?: boolean;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetBlueprints</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetBlueprintsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBlueprintsRequest): any => ({
    ...obj,
  });
}

export interface GetBlueprintsResult {
  /**
   * <p>An array of key-value pairs that contains information about the available
   *       blueprints.</p>
   */
  blueprints?: Blueprint[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetBlueprints</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetBlueprintsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBlueprintsResult): any => ({
    ...obj,
  });
}

export interface GetBucketAccessKeysRequest {
  /**
   * <p>The name of the bucket for which to return access keys.</p>
   */
  bucketName: string | undefined;
}

export namespace GetBucketAccessKeysRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBucketAccessKeysRequest): any => ({
    ...obj,
  });
}

export interface GetBucketAccessKeysResult {
  /**
   * <p>An object that describes the access keys for the specified bucket.</p>
   */
  accessKeys?: AccessKey[];
}

export namespace GetBucketAccessKeysResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBucketAccessKeysResult): any => ({
    ...obj,
    ...(obj.accessKeys && { accessKeys: obj.accessKeys.map((item) => AccessKey.filterSensitiveLog(item)) }),
  });
}

export interface GetBucketBundlesRequest {
  /**
   * <p>A Boolean value that indicates whether to include inactive (unavailable) bundles in the
   *       response of your request.</p>
   */
  includeInactive?: boolean;
}

export namespace GetBucketBundlesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBucketBundlesRequest): any => ({
    ...obj,
  });
}

export interface GetBucketBundlesResult {
  /**
   * <p>An object that describes bucket bundles.</p>
   */
  bundles?: BucketBundle[];
}

export namespace GetBucketBundlesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBucketBundlesResult): any => ({
    ...obj,
  });
}

export interface GetBucketMetricDataRequest {
  /**
   * <p>The name of the bucket for which to get metric data.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>The metric for which you want to return information.</p>
   *
   *          <p>Valid bucket metric names are listed below, along with the most useful statistics to
   *       include in your request, and the published unit value.</p>
   *
   *          <note>
   *             <p>These bucket metrics are reported once per day.</p>
   *          </note>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>BucketSizeBytes</code>
   *                   </b> - The amount of data in
   *           bytes stored in a bucket. This value is calculated by summing the size of all objects in
   *           the bucket (including object versions), including the size of all parts for all incomplete
   *           multipart uploads to the bucket.</p>
   *                <p>Statistics: The most useful statistic is <code>Maximum</code>.</p>
   *                <p>Unit: The published unit is <code>Bytes</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>NumberOfObjects</code>
   *                   </b> - The total number of
   *           objects stored in a bucket. This value is calculated by counting all objects in the bucket
   *           (including object versions) and the total number of parts for all incomplete multipart
   *           uploads to the bucket.</p>
   *                <p>Statistics: The most useful statistic is <code>Average</code>.</p>
   *                <p>Unit: The published unit is <code>Count</code>.</p>
   *             </li>
   *          </ul>
   */
  metricName: BucketMetricName | string | undefined;

  /**
   * <p>The timestamp indicating the earliest data to be returned.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>The timestamp indicating the latest data to be returned.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>The granularity, in seconds, of the returned data points.</p>
   *          <note>
   *             <p>Bucket storage metrics are reported once per day. Therefore, you should specify a period
   *         of 86400 seconds, which is the number of seconds in a day.</p>
   *          </note>
   */
  period: number | undefined;

  /**
   * <p>The statistic for the metric.</p>
   *
   *          <p>The following statistics are available:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Minimum</code> - The lowest value observed during the specified period. Use this
   *           value to determine low volumes of activity for your application.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Maximum</code> - The highest value observed during the specified period. Use
   *           this value to determine high volumes of activity for your application.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Sum</code> - The sum of all values submitted for the matching metric. You can
   *           use this statistic to determine the total volume of a metric.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Average</code> - The value of <code>Sum</code> / <code>SampleCount</code> during
   *           the specified period. By comparing this statistic with the <code>Minimum</code> and
   *             <code>Maximum</code> values, you can determine the full scope of a metric and how close
   *           the average use is to the <code>Minimum</code> and <code>Maximum</code> values. This
   *           comparison helps you to know when to increase or decrease your resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SampleCount</code> - The count, or number, of data points used for the
   *           statistical calculation.</p>
   *             </li>
   *          </ul>
   */
  statistics: (MetricStatistic | string)[] | undefined;

  /**
   * <p>The unit for the metric data request.</p>
   *          <p>Valid units depend on the metric data being requested. For the valid units with each
   *       available metric, see the <code>metricName</code> parameter.</p>
   */
  unit: MetricUnit | string | undefined;
}

export namespace GetBucketMetricDataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBucketMetricDataRequest): any => ({
    ...obj,
  });
}

export interface GetBucketMetricDataResult {
  /**
   * <p>The name of the metric returned.</p>
   */
  metricName?: BucketMetricName | string;

  /**
   * <p>An array of objects that describe the metric data returned.</p>
   */
  metricData?: MetricDatapoint[];
}

export namespace GetBucketMetricDataResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBucketMetricDataResult): any => ({
    ...obj,
  });
}

export interface GetBucketsRequest {
  /**
   * <p>The name of the bucket for which to return information.</p>
   *
   *          <p>When omitted, the response includes all of your buckets in the Amazon Web Services Region
   *       where the request is made.</p>
   */
  bucketName?: string;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *
   *          <p>To get a page token, perform an initial <code>GetBuckets</code> request. If your results
   *       are paginated, the response will return a next page token that you can specify as the page
   *       token in a subsequent request.</p>
   */
  pageToken?: string;

  /**
   * <p>A Boolean value that indicates whether to include Lightsail instances that were given
   *       access to the bucket using the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_SetResourceAccessForBucket.html">SetResourceAccessForBucket</a>
   *       action.</p>
   */
  includeConnectedResources?: boolean;
}

export namespace GetBucketsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBucketsRequest): any => ({
    ...obj,
  });
}

export interface GetBucketsResult {
  /**
   * <p>An array of objects that describe buckets.</p>
   */
  buckets?: Bucket[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *
   *          <p>To get the next page of results, perform another <code>GetBuckets</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;

  /**
   * <p>An object that describes the synchronization status of the Amazon S3 account-level
   *       block public access feature for your Lightsail buckets.</p>
   *
   *          <p>For more information about this feature and how it affects Lightsail buckets, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-block-public-access-for-buckets">Block public access for buckets in Amazon Lightsail</a>.</p>
   */
  accountLevelBpaSync?: AccountLevelBpaSync;
}

export namespace GetBucketsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBucketsResult): any => ({
    ...obj,
  });
}

export interface GetBundlesRequest {
  /**
   * <p>A Boolean value that indicates whether to include inactive (unavailable) bundles in the
   *       response of your request.</p>
   */
  includeInactive?: boolean;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetBundles</code> request. If your results
   *       are paginated, the response will return a next page token that you can specify as the page
   *       token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetBundlesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBundlesRequest): any => ({
    ...obj,
  });
}

export interface GetBundlesResult {
  /**
   * <p>An array of key-value pairs that contains information about the available bundles.</p>
   */
  bundles?: Bundle[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetBundles</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetBundlesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBundlesResult): any => ({
    ...obj,
  });
}

export interface GetCertificatesRequest {
  /**
   * <p>The status of the certificates for which to return information.</p>
   *          <p>For example, specify <code>ISSUED</code> to return only certificates with an
   *         <code>ISSUED</code> status.</p>
   *          <p>When omitted, the response includes all of your certificates in the Amazon Web Services
   *       Region where the request is made, regardless of their current status.</p>
   */
  certificateStatuses?: (CertificateStatus | string)[];

  /**
   * <p>Indicates whether to include detailed information about the certificates in the
   *       response.</p>
   *          <p>When omitted, the response includes only the certificate names, Amazon Resource Names
   *       (ARNs), domain names, and tags.</p>
   */
  includeCertificateDetails?: boolean;

  /**
   * <p>The name for the certificate for which to return information.</p>
   *          <p>When omitted, the response includes all of your certificates in the Amazon Web Services
   *       Region where the request is made.</p>
   */
  certificateName?: string;
}

export namespace GetCertificatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCertificatesRequest): any => ({
    ...obj,
  });
}

export interface GetCertificatesResult {
  /**
   * <p>An object that describes certificates.</p>
   */
  certificates?: CertificateSummary[];
}

export namespace GetCertificatesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCertificatesResult): any => ({
    ...obj,
  });
}

export interface GetCloudFormationStackRecordsRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetClouFormationStackRecords</code> request.
   *       If your results are paginated, the response will return a next page token that you can specify
   *       as the page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetCloudFormationStackRecordsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCloudFormationStackRecordsRequest): any => ({
    ...obj,
  });
}

export interface GetCloudFormationStackRecordsResult {
  /**
   * <p>A list of objects describing the CloudFormation stack records.</p>
   */
  cloudFormationStackRecords?: CloudFormationStackRecord[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another
   *         <code>GetCloudFormationStackRecords</code> request and specify the next page token using the
   *         <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetCloudFormationStackRecordsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCloudFormationStackRecordsResult): any => ({
    ...obj,
  });
}

export interface GetContactMethodsRequest {
  /**
   * <p>The protocols used to send notifications, such as <code>Email</code>, or <code>SMS</code>
   *       (text messaging).</p>
   *          <p>Specify a protocol in your request to return information about a specific contact method
   *       protocol.</p>
   */
  protocols?: (ContactProtocol | string)[];
}

export namespace GetContactMethodsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContactMethodsRequest): any => ({
    ...obj,
  });
}

export interface GetContactMethodsResult {
  /**
   * <p>An array of objects that describe the contact methods.</p>
   */
  contactMethods?: ContactMethod[];
}

export namespace GetContactMethodsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContactMethodsResult): any => ({
    ...obj,
  });
}

export interface GetContainerAPIMetadataRequest {}

export namespace GetContainerAPIMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerAPIMetadataRequest): any => ({
    ...obj,
  });
}

export interface GetContainerAPIMetadataResult {
  /**
   * <p>Metadata about Lightsail containers, such as the current version of the Lightsail
   *       Control (lightsailctl) plugin.</p>
   */
  metadata?: Record<string, string>[];
}

export namespace GetContainerAPIMetadataResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerAPIMetadataResult): any => ({
    ...obj,
  });
}

export interface GetContainerImagesRequest {
  /**
   * <p>The name of the container service for which to return registered container images.</p>
   */
  serviceName: string | undefined;
}

export namespace GetContainerImagesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerImagesRequest): any => ({
    ...obj,
  });
}

export interface GetContainerImagesResult {
  /**
   * <p>An array of objects that describe container images that are registered to the container
   *       service.</p>
   */
  containerImages?: ContainerImage[];
}

export namespace GetContainerImagesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerImagesResult): any => ({
    ...obj,
  });
}

export interface GetContainerLogRequest {
  /**
   * <p>The name of the container service for which to get a container log.</p>
   */
  serviceName: string | undefined;

  /**
   * <p>The name of the container that is either running or previously ran on the container
   *       service for which to return a log.</p>
   */
  containerName: string | undefined;

  /**
   * <p>The start of the time interval for which to get log data.</p>
   *
   *          <p>Constraints:</p>
   *
   *          <ul>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Specified in the Unix time format.</p>
   *
   *                <p>For example, if you wish to use a start time of October 1, 2018, at 8 PM UTC, specify
   *             <code>1538424000</code> as the start time.</p>
   *             </li>
   *          </ul>
   *
   *          <p>You can convert a human-friendly time to Unix time format using a converter like <a href="https://www.epochconverter.com/">Epoch converter</a>.</p>
   */
  startTime?: Date;

  /**
   * <p>The end of the time interval for which to get log data.</p>
   *
   *          <p>Constraints:</p>
   *
   *          <ul>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Specified in the Unix time format.</p>
   *
   *                <p>For example, if you wish to use an end time of October 1, 2018, at 9 PM UTC, specify
   *             <code>1538427600</code> as the end time.</p>
   *             </li>
   *          </ul>
   *
   *          <p>You can convert a human-friendly time to Unix time format using a converter like <a href="https://www.epochconverter.com/">Epoch converter</a>.</p>
   */
  endTime?: Date;

  /**
   * <p>The pattern to use to filter the returned log events to a specific term.</p>
   *
   *          <p>The following are a few examples of filter patterns that you can specify:</p>
   *          <ul>
   *             <li>
   *                <p>To return all log events, specify a filter pattern of <code>""</code>.</p>
   *             </li>
   *             <li>
   *                <p>To exclude log events that contain the <code>ERROR</code> term, and return all other
   *           log events, specify a filter pattern of <code>"-ERROR"</code>.</p>
   *             </li>
   *             <li>
   *                <p>To return log events that contain the <code>ERROR</code> term, specify a filter
   *           pattern of <code>"ERROR"</code>.</p>
   *             </li>
   *             <li>
   *                <p>To return log events that contain both the <code>ERROR</code> and
   *             <code>Exception</code> terms, specify a filter pattern of <code>"ERROR
   *           Exception"</code>.</p>
   *             </li>
   *             <li>
   *                <p>To return log events that contain the <code>ERROR</code>
   *                   <i>or</i> the <code>Exception</code> term, specify a filter pattern of
   *             <code>"?ERROR ?Exception"</code>.</p>
   *             </li>
   *          </ul>
   */
  filterPattern?: string;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *
   *          <p>To get a page token, perform an initial <code>GetContainerLog</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetContainerLogRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerLogRequest): any => ({
    ...obj,
  });
}

export interface GetContainerLogResult {
  /**
   * <p>An array of objects that describe the log events of a container.</p>
   */
  logEvents?: ContainerServiceLogEvent[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *
   *          <p>To get the next page of results, perform another <code>GetContainerLog</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetContainerLogResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerLogResult): any => ({
    ...obj,
  });
}

export interface GetContainerServiceDeploymentsRequest {
  /**
   * <p>The name of the container service for which to return deployments.</p>
   */
  serviceName: string | undefined;
}

export namespace GetContainerServiceDeploymentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerServiceDeploymentsRequest): any => ({
    ...obj,
  });
}

export interface GetContainerServiceDeploymentsResult {
  /**
   * <p>An array of objects that describe deployments for a container service.</p>
   */
  deployments?: ContainerServiceDeployment[];
}

export namespace GetContainerServiceDeploymentsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerServiceDeploymentsResult): any => ({
    ...obj,
  });
}

export interface GetContainerServiceMetricDataRequest {
  /**
   * <p>The name of the container service for which to get metric data.</p>
   */
  serviceName: string | undefined;

  /**
   * <p>The metric for which you want to return information.</p>
   *
   *          <p>Valid container service metric names are listed below, along with the most useful
   *       statistics to include in your request, and the published unit value.</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CPUUtilization</code> - The average percentage of compute units that are
   *           currently in use across all nodes of the container service. This metric identifies the
   *           processing power required to run containers on each node of the container service.</p>
   *                <p>Statistics: The most useful statistics are <code>Maximum</code> and
   *             <code>Average</code>.</p>
   *                <p>Unit: The published unit is <code>Percent</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MemoryUtilization</code> - The average percentage of available memory that is
   *           currently in use across all nodes of the container service. This metric identifies the
   *           memory required to run containers on each node of the container service.</p>
   *                <p>Statistics: The most useful statistics are <code>Maximum</code> and
   *             <code>Average</code>.</p>
   *                <p>Unit: The published unit is <code>Percent</code>.</p>
   *             </li>
   *          </ul>
   */
  metricName: ContainerServiceMetricName | string | undefined;

  /**
   * <p>The start time of the time period.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>The end time of the time period.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>The granularity, in seconds, of the returned data points.</p>
   *
   *          <p>All container service metric data is available in 5-minute (300 seconds)
   *       granularity.</p>
   */
  period: number | undefined;

  /**
   * <p>The statistic for the metric.</p>
   *
   *          <p>The following statistics are available:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Minimum</code> - The lowest value observed during the specified period. Use this
   *           value to determine low volumes of activity for your application.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Maximum</code> - The highest value observed during the specified period. Use
   *           this value to determine high volumes of activity for your application.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Sum</code> - All values submitted for the matching metric added together. You
   *           can use this statistic to determine the total volume of a metric.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Average</code> - The value of <code>Sum</code> / <code>SampleCount</code> during
   *           the specified period. By comparing this statistic with the <code>Minimum</code> and
   *             <code>Maximum</code> values, you can determine the full scope of a metric and how close
   *           the average use is to the <code>Minimum</code> and <code>Maximum</code> values. This
   *           comparison helps you to know when to increase or decrease your resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SampleCount</code> - The count, or number, of data points used for the
   *           statistical calculation.</p>
   *             </li>
   *          </ul>
   */
  statistics: (MetricStatistic | string)[] | undefined;
}

export namespace GetContainerServiceMetricDataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerServiceMetricDataRequest): any => ({
    ...obj,
  });
}

export interface GetContainerServiceMetricDataResult {
  /**
   * <p>The name of the metric returned. </p>
   */
  metricName?: ContainerServiceMetricName | string;

  /**
   * <p>An array of objects that describe the metric data returned.</p>
   */
  metricData?: MetricDatapoint[];
}

export namespace GetContainerServiceMetricDataResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerServiceMetricDataResult): any => ({
    ...obj,
  });
}

export interface GetContainerServicePowersRequest {}

export namespace GetContainerServicePowersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerServicePowersRequest): any => ({
    ...obj,
  });
}

export interface GetContainerServicePowersResult {
  /**
   * <p>An array of objects that describe the powers that can be specified for a container
   *       service.</p>
   */
  powers?: ContainerServicePower[];
}

export namespace GetContainerServicePowersResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerServicePowersResult): any => ({
    ...obj,
  });
}

export interface GetContainerServicesRequest {
  /**
   * <p>The name of the container service for which to return information.</p>
   *
   *          <p>When omitted, the response includes all of your container services in the Amazon Web Services Region where the request is made.</p>
   */
  serviceName?: string;
}

export namespace GetContainerServicesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContainerServicesRequest): any => ({
    ...obj,
  });
}

export interface GetDiskRequest {
  /**
   * <p>The name of the disk (e.g., <code>my-disk</code>).</p>
   */
  diskName: string | undefined;
}

export namespace GetDiskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDiskRequest): any => ({
    ...obj,
  });
}

export interface GetDiskResult {
  /**
   * <p>An object containing information about the disk.</p>
   */
  disk?: Disk;
}

export namespace GetDiskResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDiskResult): any => ({
    ...obj,
  });
}

export interface GetDisksRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetDisks</code> request. If your results are
   *       paginated, the response will return a next page token that you can specify as the page token
   *       in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetDisksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDisksRequest): any => ({
    ...obj,
  });
}

export interface GetDisksResult {
  /**
   * <p>An array of objects containing information about all block storage disks.</p>
   */
  disks?: Disk[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetDisks</code> request and specify
   *       the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetDisksResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDisksResult): any => ({
    ...obj,
  });
}

export interface GetDiskSnapshotRequest {
  /**
   * <p>The name of the disk snapshot (e.g., <code>my-disk-snapshot</code>).</p>
   */
  diskSnapshotName: string | undefined;
}

export namespace GetDiskSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDiskSnapshotRequest): any => ({
    ...obj,
  });
}

export interface GetDiskSnapshotResult {
  /**
   * <p>An object containing information about the disk snapshot.</p>
   */
  diskSnapshot?: DiskSnapshot;
}

export namespace GetDiskSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDiskSnapshotResult): any => ({
    ...obj,
  });
}

export interface GetDiskSnapshotsRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetDiskSnapshots</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetDiskSnapshotsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDiskSnapshotsRequest): any => ({
    ...obj,
  });
}

export interface GetDiskSnapshotsResult {
  /**
   * <p>An array of objects containing information about all block storage disk snapshots.</p>
   */
  diskSnapshots?: DiskSnapshot[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetDiskSnapshots</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetDiskSnapshotsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDiskSnapshotsResult): any => ({
    ...obj,
  });
}

export interface GetDistributionBundlesRequest {}

export namespace GetDistributionBundlesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDistributionBundlesRequest): any => ({
    ...obj,
  });
}

export interface GetDistributionBundlesResult {
  /**
   * <p>An object that describes a distribution bundle.</p>
   */
  bundles?: DistributionBundle[];
}

export namespace GetDistributionBundlesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDistributionBundlesResult): any => ({
    ...obj,
  });
}

export interface GetDistributionLatestCacheResetRequest {
  /**
   * <p>The name of the distribution for which to return the timestamp of the last cache
   *       reset.</p>
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   *          <p>When omitted, the response includes the latest cache reset timestamp of all your
   *       distributions.</p>
   */
  distributionName?: string;
}

export namespace GetDistributionLatestCacheResetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDistributionLatestCacheResetRequest): any => ({
    ...obj,
  });
}

export interface GetDistributionLatestCacheResetResult {
  /**
   * <p>The status of the last cache reset.</p>
   */
  status?: string;

  /**
   * <p>The timestamp of the last cache reset (e.g., <code>1479734909.17</code>) in Unix time
   *       format.</p>
   */
  createTime?: Date;
}

export namespace GetDistributionLatestCacheResetResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDistributionLatestCacheResetResult): any => ({
    ...obj,
  });
}

export interface GetDistributionMetricDataRequest {
  /**
   * <p>The name of the distribution for which to get metric data.</p>
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   */
  distributionName: string | undefined;

  /**
   * <p>The metric for which you want to return information.</p>
   *          <p>Valid distribution metric names are listed below, along with the most useful
   *         <code>statistics</code> to include in your request, and the published <code>unit</code>
   *       value.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Requests</code>
   *                   </b> - The total number of viewer
   *           requests received by your Lightsail distribution, for all HTTP methods, and for both
   *           HTTP and HTTPS requests.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>None</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>BytesDownloaded</code>
   *                   </b> - The number of bytes
   *           downloaded by viewers for GET, HEAD, and OPTIONS requests.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>None</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>BytesUploaded </code>
   *                   </b> - The number of bytes
   *           uploaded to your origin by your Lightsail distribution, using POST and PUT
   *           requests.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>None</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>TotalErrorRate</code>
   *                   </b> - The percentage of all
   *           viewer requests for which the response's HTTP status code was 4xx or 5xx.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Percent</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>4xxErrorRate</code>
   *                   </b> - The percentage of all
   *           viewer requests for which the response's HTTP status cod was 4xx. In these cases, the
   *           client or client viewer may have made an error. For example, a status code of 404 (Not
   *           Found) means that the client requested an object that could not be found.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Percent</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>5xxErrorRate</code>
   *                   </b> - The percentage of all
   *           viewer requests for which the response's HTTP status code was 5xx. In these cases, the
   *           origin server did not satisfy the requests. For example, a status code of 503 (Service
   *           Unavailable) means that the origin server is currently unavailable.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Percent</code>.</p>
   *             </li>
   *          </ul>
   */
  metricName: DistributionMetricName | string | undefined;

  /**
   * <p>The start of the time interval for which to get metric data.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Specified in the Unix time format.</p>
   *                <p>For example, if you wish to use a start time of October 1, 2018, at 8 PM UTC, specify
   *             <code>1538424000</code> as the start time.</p>
   *             </li>
   *          </ul>
   *          <p>You can convert a human-friendly time to Unix time format using a converter like <a href="https://www.epochconverter.com/">Epoch converter</a>.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>The end of the time interval for which to get metric data.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Specified in the Unix time format.</p>
   *                <p>For example, if you wish to use an end time of October 1, 2018, at 9 PM UTC, specify
   *             <code>1538427600</code> as the end time.</p>
   *             </li>
   *          </ul>
   *          <p>You can convert a human-friendly time to Unix time format using a converter like <a href="https://www.epochconverter.com/">Epoch converter</a>.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>The granularity, in seconds, for the metric data points that will be returned.</p>
   */
  period: number | undefined;

  /**
   * <p>The unit for the metric data request.</p>
   *          <p>Valid units depend on the metric data being requested. For the valid units with each
   *       available metric, see the <code>metricName</code> parameter.</p>
   */
  unit: MetricUnit | string | undefined;

  /**
   * <p>The statistic for the metric.</p>
   *          <p>The following statistics are available:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Minimum</code> - The lowest value observed during the specified period. Use this
   *           value to determine low volumes of activity for your application.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Maximum</code> - The highest value observed during the specified period. Use
   *           this value to determine high volumes of activity for your application.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Sum</code> - All values submitted for the matching metric added together. You
   *           can use this statistic to determine the total volume of a metric.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Average</code> - The value of Sum / SampleCount during the specified period. By
   *           comparing this statistic with the Minimum and Maximum values, you can determine the full
   *           scope of a metric and how close the average use is to the Minimum and Maximum values. This
   *           comparison helps you to know when to increase or decrease your resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SampleCount</code> - The count, or number, of data points used for the
   *           statistical calculation.</p>
   *             </li>
   *          </ul>
   */
  statistics: (MetricStatistic | string)[] | undefined;
}

export namespace GetDistributionMetricDataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDistributionMetricDataRequest): any => ({
    ...obj,
  });
}

export interface GetDistributionMetricDataResult {
  /**
   * <p>The name of the metric returned.</p>
   */
  metricName?: DistributionMetricName | string;

  /**
   * <p>An array of objects that describe the metric data returned.</p>
   */
  metricData?: MetricDatapoint[];
}

export namespace GetDistributionMetricDataResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDistributionMetricDataResult): any => ({
    ...obj,
  });
}

export interface GetDistributionsRequest {
  /**
   * <p>The name of the distribution for which to return information.</p>
   *
   *          <p>When omitted, the response includes all of your distributions in the Amazon Web Services
   *       Region where the request is made.</p>
   */
  distributionName?: string;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetDistributions</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetDistributionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDistributionsRequest): any => ({
    ...obj,
  });
}

export interface GetDistributionsResult {
  /**
   * <p>An array of objects that describe your distributions.</p>
   */
  distributions?: LightsailDistribution[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetDistributions</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetDistributionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDistributionsResult): any => ({
    ...obj,
  });
}

export interface GetDomainRequest {
  /**
   * <p>The domain name for which your want to return information about.</p>
   */
  domainName: string | undefined;
}

export namespace GetDomainRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDomainRequest): any => ({
    ...obj,
  });
}

export interface GetDomainResult {
  /**
   * <p>An array of key-value pairs containing information about your get domain request.</p>
   */
  domain?: Domain;
}

export namespace GetDomainResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDomainResult): any => ({
    ...obj,
  });
}

export interface GetDomainsRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetDomains</code> request. If your results
   *       are paginated, the response will return a next page token that you can specify as the page
   *       token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetDomainsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDomainsRequest): any => ({
    ...obj,
  });
}

export interface GetDomainsResult {
  /**
   * <p>An array of key-value pairs containing information about each of the domain entries in the
   *       user's account.</p>
   */
  domains?: Domain[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetDomains</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetDomainsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDomainsResult): any => ({
    ...obj,
  });
}

export interface GetExportSnapshotRecordsRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetExportSnapshotRecords</code> request. If
   *       your results are paginated, the response will return a next page token that you can specify as
   *       the page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetExportSnapshotRecordsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetExportSnapshotRecordsRequest): any => ({
    ...obj,
  });
}

export interface GetExportSnapshotRecordsResult {
  /**
   * <p>A list of objects describing the export snapshot records.</p>
   */
  exportSnapshotRecords?: ExportSnapshotRecord[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetExportSnapshotRecords</code>
   *       request and specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetExportSnapshotRecordsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetExportSnapshotRecordsResult): any => ({
    ...obj,
  });
}

export interface GetInstanceRequest {
  /**
   * <p>The name of the instance.</p>
   */
  instanceName: string | undefined;
}

export namespace GetInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInstanceRequest): any => ({
    ...obj,
  });
}

export interface GetInstanceResult {
  /**
   * <p>An array of key-value pairs containing information about the specified instance.</p>
   */
  instance?: Instance;
}

export namespace GetInstanceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInstanceResult): any => ({
    ...obj,
  });
}

export interface GetInstanceAccessDetailsRequest {
  /**
   * <p>The name of the instance to access.</p>
   */
  instanceName: string | undefined;

  /**
   * <p>The protocol to use to connect to your instance. Defaults to <code>ssh</code>.</p>
   */
  protocol?: InstanceAccessProtocol | string;
}

export namespace GetInstanceAccessDetailsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInstanceAccessDetailsRequest): any => ({
    ...obj,
  });
}

export interface GetInstanceAccessDetailsResult {
  /**
   * <p>An array of key-value pairs containing information about a get instance access
   *       request.</p>
   */
  accessDetails?: InstanceAccessDetails;
}

export namespace GetInstanceAccessDetailsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInstanceAccessDetailsResult): any => ({
    ...obj,
  });
}

export interface GetInstanceMetricDataRequest {
  /**
   * <p>The name of the instance for which you want to get metrics data.</p>
   */
  instanceName: string | undefined;

  /**
   * <p>The metric for which you want to return information.</p>
   *          <p>Valid instance metric names are listed below, along with the most useful
   *         <code>statistics</code> to include in your request, and the published <code>unit</code>
   *       value.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>BurstCapacityPercentage</code>
   *                   </b> - The percentage
   *           of CPU performance available for your instance to burst above its baseline. Your instance
   *           continuously accrues and consumes burst capacity. Burst capacity stops accruing when your
   *           instance's <code>BurstCapacityPercentage</code> reaches 100%. For more information, see
   *             <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-viewing-instance-burst-capacity">Viewing instance burst capacity in Amazon Lightsail</a>.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistics are <code>Maximum</code> and
   *             <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Percent</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>BurstCapacityTime</code>
   *                   </b> - The available amount
   *           of time for your instance to burst at 100% CPU utilization. Your instance continuously
   *           accrues and consumes burst capacity. Burst capacity time stops accruing when your
   *           instance's <code>BurstCapacityPercentage</code> metric reaches 100%.</p>
   *                <p>Burst capacity time is consumed at the full rate only when your instance operates at
   *           100% CPU utilization. For example, if your instance operates at 50% CPU utilization in the
   *           burstable zone for a 5-minute period, then it consumes CPU burst capacity minutes at a 50%
   *           rate in that period. Your instance consumed 2 minutes and 30 seconds of CPU burst capacity
   *           minutes in the 5-minute period. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-viewing-instance-burst-capacity">Viewing instance burst capacity in Amazon Lightsail</a>.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistics are <code>Maximum</code> and
   *             <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Seconds</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>CPUUtilization</code>
   *                   </b> - The percentage of
   *           allocated compute units that are currently in use on the instance. This metric identifies
   *           the processing power to run the applications on the instance. Tools in your operating
   *           system can show a lower percentage than Lightsail when the instance is not allocated a
   *           full processor core.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistics are <code>Maximum</code> and
   *             <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Percent</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>NetworkIn</code>
   *                   </b> - The number of bytes received
   *           on all network interfaces by the instance. This metric identifies the volume of incoming
   *           network traffic to the instance. The number reported is the number of bytes received
   *           during the period. Because this metric is reported in 5-minute intervals, divide the
   *           reported number by 300 to find Bytes/second.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Bytes</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>NetworkOut</code>
   *                   </b> - The number of bytes sent
   *           out on all network interfaces by the instance. This metric identifies the volume of
   *           outgoing network traffic from the instance. The number reported is the number of bytes
   *           sent during the period. Because this metric is reported in 5-minute intervals, divide the
   *           reported number by 300 to find Bytes/second.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Bytes</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>StatusCheckFailed</code>
   *                   </b> - Reports whether the
   *           instance passed or failed both the instance status check and the system status check. This
   *           metric can be either 0 (passed) or 1 (failed). This metric data is available in 1-minute
   *           (60 seconds) granularity.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>StatusCheckFailed_Instance</code>
   *                   </b> - Reports
   *           whether the instance passed or failed the instance status check. This metric can be either
   *           0 (passed) or 1 (failed). This metric data is available in 1-minute (60 seconds)
   *           granularity.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>StatusCheckFailed_System</code>
   *                   </b> - Reports
   *           whether the instance passed or failed the system status check. This metric can be either 0
   *           (passed) or 1 (failed). This metric data is available in 1-minute (60 seconds)
   *           granularity.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *          </ul>
   */
  metricName: InstanceMetricName | string | undefined;

  /**
   * <p>The granularity, in seconds, of the returned data points.</p>
   *          <p>The <code>StatusCheckFailed</code>, <code>StatusCheckFailed_Instance</code>, and
   *         <code>StatusCheckFailed_System</code> instance metric data is available in 1-minute (60
   *       seconds) granularity. All other instance metric data is available in 5-minute (300 seconds)
   *       granularity.</p>
   */
  period: number | undefined;

  /**
   * <p>The start time of the time period.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>The end time of the time period.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>The unit for the metric data request. Valid units depend on the metric data being
   *       requested. For the valid units to specify with each available metric, see the
   *         <code>metricName</code> parameter.</p>
   */
  unit: MetricUnit | string | undefined;

  /**
   * <p>The statistic for the metric.</p>
   *          <p>The following statistics are available:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Minimum</code> - The lowest value observed during the specified period. Use this
   *           value to determine low volumes of activity for your application.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Maximum</code> - The highest value observed during the specified period. Use
   *           this value to determine high volumes of activity for your application.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Sum</code> - All values submitted for the matching metric added together. You
   *           can use this statistic to determine the total volume of a metric.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Average</code> - The value of Sum / SampleCount during the specified period. By
   *           comparing this statistic with the Minimum and Maximum values, you can determine the full
   *           scope of a metric and how close the average use is to the Minimum and Maximum values. This
   *           comparison helps you to know when to increase or decrease your resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SampleCount</code> - The count, or number, of data points used for the
   *           statistical calculation.</p>
   *             </li>
   *          </ul>
   */
  statistics: (MetricStatistic | string)[] | undefined;
}

export namespace GetInstanceMetricDataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInstanceMetricDataRequest): any => ({
    ...obj,
  });
}

export interface GetInstanceMetricDataResult {
  /**
   * <p>The name of the metric returned.</p>
   */
  metricName?: InstanceMetricName | string;

  /**
   * <p>An array of objects that describe the metric data returned.</p>
   */
  metricData?: MetricDatapoint[];
}

export namespace GetInstanceMetricDataResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInstanceMetricDataResult): any => ({
    ...obj,
  });
}

export interface GetInstancePortStatesRequest {
  /**
   * <p>The name of the instance for which to return firewall port states.</p>
   */
  instanceName: string | undefined;
}

export namespace GetInstancePortStatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInstancePortStatesRequest): any => ({
    ...obj,
  });
}

export interface GetInstancePortStatesResult {
  /**
   * <p>An array of objects that describe the firewall port states for the specified
   *       instance.</p>
   */
  portStates?: InstancePortState[];
}

export namespace GetInstancePortStatesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInstancePortStatesResult): any => ({
    ...obj,
  });
}

export interface GetInstancesRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetInstances</code> request. If your results
   *       are paginated, the response will return a next page token that you can specify as the page
   *       token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInstancesRequest): any => ({
    ...obj,
  });
}

export interface GetInstancesResult {
  /**
   * <p>An array of key-value pairs containing information about your instances.</p>
   */
  instances?: Instance[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetInstances</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetInstancesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInstancesResult): any => ({
    ...obj,
  });
}

export interface GetInstanceSnapshotRequest {
  /**
   * <p>The name of the snapshot for which you are requesting information.</p>
   */
  instanceSnapshotName: string | undefined;
}

export namespace GetInstanceSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInstanceSnapshotRequest): any => ({
    ...obj,
  });
}

export interface GetInstanceSnapshotResult {
  /**
   * <p>An array of key-value pairs containing information about the results of your get instance
   *       snapshot request.</p>
   */
  instanceSnapshot?: InstanceSnapshot;
}

export namespace GetInstanceSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInstanceSnapshotResult): any => ({
    ...obj,
  });
}

export interface GetInstanceSnapshotsRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetInstanceSnapshots</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetInstanceSnapshotsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInstanceSnapshotsRequest): any => ({
    ...obj,
  });
}

export interface GetInstanceSnapshotsResult {
  /**
   * <p>An array of key-value pairs containing information about the results of your get instance
   *       snapshots request.</p>
   */
  instanceSnapshots?: InstanceSnapshot[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetInstanceSnapshots</code> request
   *       and specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetInstanceSnapshotsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInstanceSnapshotsResult): any => ({
    ...obj,
  });
}

export interface GetInstanceStateRequest {
  /**
   * <p>The name of the instance to get state information about.</p>
   */
  instanceName: string | undefined;
}

export namespace GetInstanceStateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInstanceStateRequest): any => ({
    ...obj,
  });
}

export interface GetInstanceStateResult {
  /**
   * <p>The state of the instance.</p>
   */
  state?: InstanceState;
}

export namespace GetInstanceStateResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInstanceStateResult): any => ({
    ...obj,
  });
}

export interface GetKeyPairRequest {
  /**
   * <p>The name of the key pair for which you are requesting information.</p>
   */
  keyPairName: string | undefined;
}

export namespace GetKeyPairRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetKeyPairRequest): any => ({
    ...obj,
  });
}

export interface GetKeyPairResult {
  /**
   * <p>An array of key-value pairs containing information about the key pair.</p>
   */
  keyPair?: KeyPair;
}

export namespace GetKeyPairResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetKeyPairResult): any => ({
    ...obj,
  });
}

export interface GetKeyPairsRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetKeyPairs</code> request. If your results
   *       are paginated, the response will return a next page token that you can specify as the page
   *       token in a subsequent request.</p>
   */
  pageToken?: string;

  /**
   * <p>A Boolean value that indicates whether to include the default key pair in the response of
   *       your request.</p>
   */
  includeDefaultKeyPair?: boolean;
}

export namespace GetKeyPairsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetKeyPairsRequest): any => ({
    ...obj,
  });
}

export interface GetKeyPairsResult {
  /**
   * <p>An array of key-value pairs containing information about the key pairs.</p>
   */
  keyPairs?: KeyPair[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetKeyPairs</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetKeyPairsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetKeyPairsResult): any => ({
    ...obj,
  });
}

export interface GetLoadBalancerRequest {
  /**
   * <p>The name of the load balancer.</p>
   */
  loadBalancerName: string | undefined;
}

export namespace GetLoadBalancerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLoadBalancerRequest): any => ({
    ...obj,
  });
}

export interface GetLoadBalancerResult {
  /**
   * <p>An object containing information about your load balancer.</p>
   */
  loadBalancer?: LoadBalancer;
}

export namespace GetLoadBalancerResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLoadBalancerResult): any => ({
    ...obj,
  });
}

export interface GetLoadBalancerMetricDataRequest {
  /**
   * <p>The name of the load balancer.</p>
   */
  loadBalancerName: string | undefined;

  /**
   * <p>The metric for which you want to return information.</p>
   *          <p>Valid load balancer metric names are listed below, along with the most useful
   *         <code>statistics</code> to include in your request, and the published <code>unit</code>
   *       value.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>ClientTLSNegotiationErrorCount</code>
   *                   </b> - The
   *           number of TLS connections initiated by the client that did not establish a session with
   *           the load balancer due to a TLS error generated by the load balancer. Possible causes
   *           include a mismatch of ciphers or protocols.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>HealthyHostCount</code>
   *                   </b> - The number of target
   *           instances that are considered healthy.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic are <code>Average</code>,
   *             <code>Minimum</code>, and <code>Maximum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>HTTPCode_Instance_2XX_Count</code>
   *                   </b> - The number
   *           of HTTP 2XX response codes generated by the target instances. This does not include any
   *           response codes generated by the load balancer.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
   *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
   *             <code>1</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>HTTPCode_Instance_3XX_Count</code>
   *                   </b> - The number
   *           of HTTP 3XX response codes generated by the target instances. This does not include any
   *           response codes generated by the load balancer.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
   *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
   *             <code>1</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>HTTPCode_Instance_4XX_Count</code>
   *                   </b> - The number
   *           of HTTP 4XX response codes generated by the target instances. This does not include any
   *           response codes generated by the load balancer.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
   *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
   *             <code>1</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>HTTPCode_Instance_5XX_Count</code>
   *                   </b> - The number
   *           of HTTP 5XX response codes generated by the target instances. This does not include any
   *           response codes generated by the load balancer.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
   *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
   *             <code>1</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>HTTPCode_LB_4XX_Count</code>
   *                   </b> - The number of
   *           HTTP 4XX client error codes that originated from the load balancer. Client errors are
   *           generated when requests are malformed or incomplete. These requests were not received by
   *           the target instance. This count does not include response codes generated by the target
   *           instances.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
   *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
   *             <code>1</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>HTTPCode_LB_5XX_Count</code>
   *                   </b> - The number of
   *           HTTP 5XX server error codes that originated from the load balancer. This does not include
   *           any response codes generated by the target instance. This metric is reported if there are
   *           no healthy instances attached to the load balancer, or if the request rate exceeds the
   *           capacity of the instances (spillover) or the load balancer.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
   *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
   *             <code>1</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>InstanceResponseTime</code>
   *                   </b> - The time elapsed,
   *           in seconds, after the request leaves the load balancer until a response from the target
   *           instance is received.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Seconds</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>RejectedConnectionCount</code>
   *                   </b> - The number of
   *           connections that were rejected because the load balancer had reached its maximum number of
   *           connections.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>RequestCount</code>
   *                   </b> - The number of requests
   *           processed over IPv4. This count includes only the requests with a response generated by a
   *           target instance of the load balancer.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that
   *             <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return
   *             <code>1</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>UnhealthyHostCount</code>
   *                   </b> - The number of
   *           target instances that are considered unhealthy.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic are <code>Average</code>,
   *             <code>Minimum</code>, and <code>Maximum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *          </ul>
   */
  metricName: LoadBalancerMetricName | string | undefined;

  /**
   * <p>The granularity, in seconds, of the returned data points.</p>
   */
  period: number | undefined;

  /**
   * <p>The start time of the period.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>The end time of the period.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>The unit for the metric data request. Valid units depend on the metric data being
   *       requested. For the valid units with each available metric, see the <code>metricName</code>
   *       parameter.</p>
   */
  unit: MetricUnit | string | undefined;

  /**
   * <p>The statistic for the metric.</p>
   *          <p>The following statistics are available:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Minimum</code> - The lowest value observed during the specified period. Use this
   *           value to determine low volumes of activity for your application.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Maximum</code> - The highest value observed during the specified period. Use
   *           this value to determine high volumes of activity for your application.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Sum</code> - All values submitted for the matching metric added together. You
   *           can use this statistic to determine the total volume of a metric.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Average</code> - The value of Sum / SampleCount during the specified period. By
   *           comparing this statistic with the Minimum and Maximum values, you can determine the full
   *           scope of a metric and how close the average use is to the Minimum and Maximum values. This
   *           comparison helps you to know when to increase or decrease your resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SampleCount</code> - The count, or number, of data points used for the
   *           statistical calculation.</p>
   *             </li>
   *          </ul>
   */
  statistics: (MetricStatistic | string)[] | undefined;
}

export namespace GetLoadBalancerMetricDataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLoadBalancerMetricDataRequest): any => ({
    ...obj,
  });
}

export interface GetLoadBalancerMetricDataResult {
  /**
   * <p>The name of the metric returned.</p>
   */
  metricName?: LoadBalancerMetricName | string;

  /**
   * <p>An array of objects that describe the metric data returned.</p>
   */
  metricData?: MetricDatapoint[];
}

export namespace GetLoadBalancerMetricDataResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLoadBalancerMetricDataResult): any => ({
    ...obj,
  });
}

export interface GetLoadBalancersRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetLoadBalancers</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetLoadBalancersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLoadBalancersRequest): any => ({
    ...obj,
  });
}

export interface GetLoadBalancersResult {
  /**
   * <p>An array of LoadBalancer objects describing your load balancers.</p>
   */
  loadBalancers?: LoadBalancer[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetLoadBalancers</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetLoadBalancersResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLoadBalancersResult): any => ({
    ...obj,
  });
}

export interface GetLoadBalancerTlsCertificatesRequest {
  /**
   * <p>The name of the load balancer you associated with your SSL/TLS certificate.</p>
   */
  loadBalancerName: string | undefined;
}

export namespace GetLoadBalancerTlsCertificatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLoadBalancerTlsCertificatesRequest): any => ({
    ...obj,
  });
}

export interface GetLoadBalancerTlsCertificatesResult {
  /**
   * <p>An array of LoadBalancerTlsCertificate objects describing your SSL/TLS
   *       certificates.</p>
   */
  tlsCertificates?: LoadBalancerTlsCertificate[];
}

export namespace GetLoadBalancerTlsCertificatesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLoadBalancerTlsCertificatesResult): any => ({
    ...obj,
  });
}

export interface GetLoadBalancerTlsPoliciesRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *
   *          <p>To get a page token, perform an initial <code>GetLoadBalancerTlsPolicies</code> request.
   *       If your results are paginated, the response will return a next page token that you can specify
   *       as the page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetLoadBalancerTlsPoliciesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLoadBalancerTlsPoliciesRequest): any => ({
    ...obj,
  });
}

export interface GetLoadBalancerTlsPoliciesResult {
  /**
   * <p>An array of objects that describe the TLS security policies that are available.</p>
   */
  tlsPolicies?: LoadBalancerTlsPolicy[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *
   *          <p>To get the next page of results, perform another <code>GetLoadBalancerTlsPolicies</code>
   *       request and specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetLoadBalancerTlsPoliciesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLoadBalancerTlsPoliciesResult): any => ({
    ...obj,
  });
}

export interface GetOperationRequest {
  /**
   * <p>A GUID used to identify the operation.</p>
   */
  operationId: string | undefined;
}

export namespace GetOperationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOperationRequest): any => ({
    ...obj,
  });
}

export interface GetOperationResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace GetOperationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOperationResult): any => ({
    ...obj,
  });
}

export interface GetOperationsRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetOperations</code> request. If your
   *       results are paginated, the response will return a next page token that you can specify as the
   *       page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetOperationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOperationsRequest): any => ({
    ...obj,
  });
}

export interface GetOperationsResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetOperations</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetOperationsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOperationsResult): any => ({
    ...obj,
  });
}

export interface GetOperationsForResourceRequest {
  /**
   * <p>The name of the resource for which you are requesting information.</p>
   */
  resourceName: string | undefined;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetOperationsForResource</code> request. If
   *       your results are paginated, the response will return a next page token that you can specify as
   *       the page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetOperationsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOperationsForResourceRequest): any => ({
    ...obj,
  });
}

export interface GetOperationsForResourceResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];

  /**
   * @deprecated
   *
   * <p>(Deprecated) Returns the number of pages of results that remain.</p>
   *          <note>
   *             <p>In releases prior to June 12, 2017, this parameter returned <code>null</code> by the
   *         API. It is now deprecated, and the API returns the <code>next page token</code> parameter
   *         instead.</p>
   *          </note>
   */
  nextPageCount?: string;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetOperationsForResource</code>
   *       request and specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetOperationsForResourceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOperationsForResourceResult): any => ({
    ...obj,
  });
}

export interface GetRegionsRequest {
  /**
   * <p>A Boolean value indicating whether to also include Availability Zones in your get regions
   *       request. Availability Zones are indicated with a letter: e.g., <code>us-east-2a</code>.</p>
   */
  includeAvailabilityZones?: boolean;

  /**
   * <p>A Boolean value indicating whether to also include Availability Zones for databases in
   *       your get regions request. Availability Zones are indicated with a letter (e.g.,
   *         <code>us-east-2a</code>).</p>
   */
  includeRelationalDatabaseAvailabilityZones?: boolean;
}

export namespace GetRegionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRegionsRequest): any => ({
    ...obj,
  });
}

export interface GetRegionsResult {
  /**
   * <p>An array of key-value pairs containing information about your get regions request.</p>
   */
  regions?: Region[];
}

export namespace GetRegionsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRegionsResult): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseRequest {
  /**
   * <p>The name of the database that you are looking up.</p>
   */
  relationalDatabaseName: string | undefined;
}

export namespace GetRelationalDatabaseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRelationalDatabaseRequest): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseResult {
  /**
   * <p>An object describing the specified database.</p>
   */
  relationalDatabase?: RelationalDatabase;
}

export namespace GetRelationalDatabaseResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRelationalDatabaseResult): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseBlueprintsRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetRelationalDatabaseBlueprints</code>
   *       request. If your results are paginated, the response will return a next page token that you
   *       can specify as the page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetRelationalDatabaseBlueprintsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRelationalDatabaseBlueprintsRequest): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseBlueprintsResult {
  /**
   * <p>An object describing the result of your get relational database blueprints request.</p>
   */
  blueprints?: RelationalDatabaseBlueprint[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another
   *         <code>GetRelationalDatabaseBlueprints</code> request and specify the next page token using
   *       the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetRelationalDatabaseBlueprintsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRelationalDatabaseBlueprintsResult): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseBundlesRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetRelationalDatabaseBundles</code> request.
   *       If your results are paginated, the response will return a next page token that you can specify
   *       as the page token in a subsequent request.</p>
   */
  pageToken?: string;

  /**
   * <p>A Boolean value that indicates whether to include inactive (unavailable) bundles in the
   *       response of your request.</p>
   */
  includeInactive?: boolean;
}

export namespace GetRelationalDatabaseBundlesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRelationalDatabaseBundlesRequest): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseBundlesResult {
  /**
   * <p>An object describing the result of your get relational database bundles request.</p>
   */
  bundles?: RelationalDatabaseBundle[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetRelationalDatabaseBundles</code>
   *       request and specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetRelationalDatabaseBundlesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRelationalDatabaseBundlesResult): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseEventsRequest {
  /**
   * <p>The name of the database from which to get events.</p>
   */
  relationalDatabaseName: string | undefined;

  /**
   * <p>The number of minutes in the past from which to retrieve events. For example, to get all
   *       events from the past 2 hours, enter 120.</p>
   *          <p>Default: <code>60</code>
   *          </p>
   *          <p>The minimum is 1 and the maximum is 14 days (20160 minutes).</p>
   */
  durationInMinutes?: number;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetRelationalDatabaseEvents</code> request.
   *       If your results are paginated, the response will return a next page token that you can specify
   *       as the page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetRelationalDatabaseEventsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRelationalDatabaseEventsRequest): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseEventsResult {
  /**
   * <p>An object describing the result of your get relational database events request.</p>
   */
  relationalDatabaseEvents?: RelationalDatabaseEvent[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetRelationalDatabaseEvents</code>
   *       request and specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetRelationalDatabaseEventsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRelationalDatabaseEventsResult): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseLogEventsRequest {
  /**
   * <p>The name of your database for which to get log events.</p>
   */
  relationalDatabaseName: string | undefined;

  /**
   * <p>The name of the log stream.</p>
   *          <p>Use the <code>get relational database log streams</code> operation to get a list of
   *       available log streams.</p>
   */
  logStreamName: string | undefined;

  /**
   * <p>The start of the time interval from which to get log events.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Specified in the Unix time format.</p>
   *                <p>For example, if you wish to use a start time of October 1, 2018, at 8 PM UTC, then you
   *           input <code>1538424000</code> as the start time.</p>
   *             </li>
   *          </ul>
   */
  startTime?: Date;

  /**
   * <p>The end of the time interval from which to get log events.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Specified in the Unix time format.</p>
   *                <p>For example, if you wish to use an end time of October 1, 2018, at 8 PM UTC, then you
   *           input <code>1538424000</code> as the end time.</p>
   *
   *             </li>
   *          </ul>
   */
  endTime?: Date;

  /**
   * <p>Parameter to specify if the log should start from head or tail. If <code>true</code> is
   *       specified, the log event starts from the head of the log. If <code>false</code> is specified,
   *       the log event starts from the tail of the log.</p>
   *          <note>
   *             <p>For PostgreSQL, the default value of <code>false</code> is the only option
   *         available.</p>
   *          </note>
   */
  startFromHead?: boolean;

  /**
   * <p>The token to advance to the next or previous page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetRelationalDatabaseLogEvents</code>
   *       request. If your results are paginated, the response will return a next forward token and/or
   *       next backward token that you can specify as the page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetRelationalDatabaseLogEventsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRelationalDatabaseLogEventsRequest): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseLogEventsResult {
  /**
   * <p>An object describing the result of your get relational database log events request.</p>
   */
  resourceLogEvents?: LogEvent[];

  /**
   * <p>A token used for advancing to the previous page of results from your get relational
   *       database log events request.</p>
   */
  nextBackwardToken?: string;

  /**
   * <p>A token used for advancing to the next page of results from your get relational database
   *       log events request.</p>
   */
  nextForwardToken?: string;
}

export namespace GetRelationalDatabaseLogEventsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRelationalDatabaseLogEventsResult): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseLogStreamsRequest {
  /**
   * <p>The name of your database for which to get log streams.</p>
   */
  relationalDatabaseName: string | undefined;
}

export namespace GetRelationalDatabaseLogStreamsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRelationalDatabaseLogStreamsRequest): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseLogStreamsResult {
  /**
   * <p>An object describing the result of your get relational database log streams
   *       request.</p>
   */
  logStreams?: string[];
}

export namespace GetRelationalDatabaseLogStreamsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRelationalDatabaseLogStreamsResult): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseMasterUserPasswordRequest {
  /**
   * <p>The name of your database for which to get the master user password.</p>
   */
  relationalDatabaseName: string | undefined;

  /**
   * <p>The password version to return.</p>
   *          <p>Specifying <code>CURRENT</code> or <code>PREVIOUS</code> returns the current or previous
   *       passwords respectively. Specifying <code>PENDING</code> returns the newest version of the
   *       password that will rotate to <code>CURRENT</code>. After the <code>PENDING</code> password
   *       rotates to <code>CURRENT</code>, the <code>PENDING</code> password is no longer
   *       available.</p>
   *          <p>Default: <code>CURRENT</code>
   *          </p>
   */
  passwordVersion?: RelationalDatabasePasswordVersion | string;
}

export namespace GetRelationalDatabaseMasterUserPasswordRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRelationalDatabaseMasterUserPasswordRequest): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseMasterUserPasswordResult {
  /**
   * <p>The master user password for the <code>password version</code> specified.</p>
   */
  masterUserPassword?: string;

  /**
   * <p>The timestamp when the specified version of the master user password was created.</p>
   */
  createdAt?: Date;
}

export namespace GetRelationalDatabaseMasterUserPasswordResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRelationalDatabaseMasterUserPasswordResult): any => ({
    ...obj,
    ...(obj.masterUserPassword && { masterUserPassword: SENSITIVE_STRING }),
  });
}

export interface GetRelationalDatabaseMetricDataRequest {
  /**
   * <p>The name of your database from which to get metric data.</p>
   */
  relationalDatabaseName: string | undefined;

  /**
   * <p>The metric for which you want to return information.</p>
   *          <p>Valid relational database metric names are listed below, along with the most useful
   *         <code>statistics</code> to include in your request, and the published <code>unit</code>
   *       value. All relational database metric data is available in 1-minute (60 seconds)
   *       granularity.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>CPUUtilization</code>
   *                   </b> - The percentage of CPU
   *           utilization currently in use on the database.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistics are <code>Maximum</code> and
   *             <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Percent</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>DatabaseConnections</code>
   *                   </b> - The number of
   *           database connections in use.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistics are <code>Maximum</code> and
   *             <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>DiskQueueDepth</code>
   *                   </b> - The number of
   *           outstanding IOs (read/write requests) that are waiting to access the disk.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Count</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>FreeStorageSpace</code>
   *                   </b> - The amount of
   *           available storage space.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Bytes</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>NetworkReceiveThroughput</code>
   *                   </b> - The incoming
   *           (Receive) network traffic on the database, including both customer database traffic and
   *           AWS traffic used for monitoring and replication.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Bytes/Second</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>NetworkTransmitThroughput</code>
   *                   </b> - The outgoing
   *           (Transmit) network traffic on the database, including both customer database traffic and
   *           AWS traffic used for monitoring and replication.</p>
   *                <p>
   *                   <code>Statistics</code>: The most useful statistic is <code>Average</code>.</p>
   *                <p>
   *                   <code>Unit</code>: The published unit is <code>Bytes/Second</code>.</p>
   *             </li>
   *          </ul>
   */
  metricName: RelationalDatabaseMetricName | string | undefined;

  /**
   * <p>The granularity, in seconds, of the returned data points.</p>
   *          <p>All relational database metric data is available in 1-minute (60 seconds)
   *       granularity.</p>
   */
  period: number | undefined;

  /**
   * <p>The start of the time interval from which to get metric data.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Specified in the Unix time format.</p>
   *                <p>For example, if you wish to use a start time of October 1, 2018, at 8 PM UTC, then you
   *           input <code>1538424000</code> as the start time.</p>
   *
   *             </li>
   *          </ul>
   */
  startTime: Date | undefined;

  /**
   * <p>The end of the time interval from which to get metric data.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Specified in Coordinated Universal Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Specified in the Unix time format.</p>
   *                <p>For example, if you wish to use an end time of October 1, 2018, at 8 PM UTC, then you
   *           input <code>1538424000</code> as the end time.</p>
   *
   *             </li>
   *          </ul>
   */
  endTime: Date | undefined;

  /**
   * <p>The unit for the metric data request. Valid units depend on the metric data being
   *       requested. For the valid units with each available metric, see the <code>metricName</code>
   *       parameter.</p>
   */
  unit: MetricUnit | string | undefined;

  /**
   * <p>The statistic for the metric.</p>
   *          <p>The following statistics are available:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Minimum</code> - The lowest value observed during the specified period. Use this
   *           value to determine low volumes of activity for your application.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Maximum</code> - The highest value observed during the specified period. Use
   *           this value to determine high volumes of activity for your application.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Sum</code> - All values submitted for the matching metric added together. You
   *           can use this statistic to determine the total volume of a metric.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Average</code> - The value of Sum / SampleCount during the specified period. By
   *           comparing this statistic with the Minimum and Maximum values, you can determine the full
   *           scope of a metric and how close the average use is to the Minimum and Maximum values. This
   *           comparison helps you to know when to increase or decrease your resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SampleCount</code> - The count, or number, of data points used for the
   *           statistical calculation.</p>
   *             </li>
   *          </ul>
   */
  statistics: (MetricStatistic | string)[] | undefined;
}

export namespace GetRelationalDatabaseMetricDataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRelationalDatabaseMetricDataRequest): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseMetricDataResult {
  /**
   * <p>The name of the metric returned.</p>
   */
  metricName?: RelationalDatabaseMetricName | string;

  /**
   * <p>An array of objects that describe the metric data returned.</p>
   */
  metricData?: MetricDatapoint[];
}

export namespace GetRelationalDatabaseMetricDataResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRelationalDatabaseMetricDataResult): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseParametersRequest {
  /**
   * <p>The name of your database for which to get parameters.</p>
   */
  relationalDatabaseName: string | undefined;

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetRelationalDatabaseParameters</code>
   *       request. If your results are paginated, the response will return a next page token that you
   *       can specify as the page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetRelationalDatabaseParametersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRelationalDatabaseParametersRequest): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseParametersResult {
  /**
   * <p>An object describing the result of your get relational database parameters request.</p>
   */
  parameters?: RelationalDatabaseParameter[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another
   *         <code>GetRelationalDatabaseParameters</code> request and specify the next page token using
   *       the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetRelationalDatabaseParametersResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRelationalDatabaseParametersResult): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabasesRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetRelationalDatabases</code> request. If
   *       your results are paginated, the response will return a next page token that you can specify as
   *       the page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetRelationalDatabasesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRelationalDatabasesRequest): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabasesResult {
  /**
   * <p>An object describing the result of your get relational databases request.</p>
   */
  relationalDatabases?: RelationalDatabase[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetRelationalDatabases</code>
   *       request and specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetRelationalDatabasesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRelationalDatabasesResult): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseSnapshotRequest {
  /**
   * <p>The name of the database snapshot for which to get information.</p>
   */
  relationalDatabaseSnapshotName: string | undefined;
}

export namespace GetRelationalDatabaseSnapshotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRelationalDatabaseSnapshotRequest): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseSnapshotResult {
  /**
   * <p>An object describing the specified database snapshot.</p>
   */
  relationalDatabaseSnapshot?: RelationalDatabaseSnapshot;
}

export namespace GetRelationalDatabaseSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRelationalDatabaseSnapshotResult): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseSnapshotsRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetRelationalDatabaseSnapshots</code>
   *       request. If your results are paginated, the response will return a next page token that you
   *       can specify as the page token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetRelationalDatabaseSnapshotsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRelationalDatabaseSnapshotsRequest): any => ({
    ...obj,
  });
}

export interface GetRelationalDatabaseSnapshotsResult {
  /**
   * <p>An object describing the result of your get relational database snapshots request.</p>
   */
  relationalDatabaseSnapshots?: RelationalDatabaseSnapshot[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another
   *         <code>GetRelationalDatabaseSnapshots</code> request and specify the next page token using
   *       the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetRelationalDatabaseSnapshotsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRelationalDatabaseSnapshotsResult): any => ({
    ...obj,
  });
}

export interface GetStaticIpRequest {
  /**
   * <p>The name of the static IP in Lightsail.</p>
   */
  staticIpName: string | undefined;
}

export namespace GetStaticIpRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStaticIpRequest): any => ({
    ...obj,
  });
}

export interface GetStaticIpResult {
  /**
   * <p>An array of key-value pairs containing information about the requested static IP.</p>
   */
  staticIp?: StaticIp;
}

export namespace GetStaticIpResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStaticIpResult): any => ({
    ...obj,
  });
}

export interface GetStaticIpsRequest {
  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>To get a page token, perform an initial <code>GetStaticIps</code> request. If your results
   *       are paginated, the response will return a next page token that you can specify as the page
   *       token in a subsequent request.</p>
   */
  pageToken?: string;
}

export namespace GetStaticIpsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStaticIpsRequest): any => ({
    ...obj,
  });
}

export interface GetStaticIpsResult {
  /**
   * <p>An array of key-value pairs containing information about your get static IPs
   *       request.</p>
   */
  staticIps?: StaticIp[];

  /**
   * <p>The token to advance to the next page of results from your request.</p>
   *          <p>A next page token is not returned if there are no more results to display.</p>
   *          <p>To get the next page of results, perform another <code>GetStaticIps</code> request and
   *       specify the next page token using the <code>pageToken</code> parameter.</p>
   */
  nextPageToken?: string;
}

export namespace GetStaticIpsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStaticIpsResult): any => ({
    ...obj,
  });
}

export interface ImportKeyPairRequest {
  /**
   * <p>The name of the key pair for which you want to import the public key.</p>
   */
  keyPairName: string | undefined;

  /**
   * <p>A base64-encoded public key of the <code>ssh-rsa</code> type.</p>
   */
  publicKeyBase64: string | undefined;
}

export namespace ImportKeyPairRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportKeyPairRequest): any => ({
    ...obj,
  });
}

export interface ImportKeyPairResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace ImportKeyPairResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportKeyPairResult): any => ({
    ...obj,
  });
}

export interface IsVpcPeeredRequest {}

export namespace IsVpcPeeredRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IsVpcPeeredRequest): any => ({
    ...obj,
  });
}

export interface IsVpcPeeredResult {
  /**
   * <p>Returns <code>true</code> if the Lightsail VPC is peered; otherwise,
   *       <code>false</code>.</p>
   */
  isPeered?: boolean;
}

export namespace IsVpcPeeredResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IsVpcPeeredResult): any => ({
    ...obj,
  });
}

export interface OpenInstancePublicPortsRequest {
  /**
   * <p>An object to describe the ports to open for the specified instance.</p>
   */
  portInfo: PortInfo | undefined;

  /**
   * <p>The name of the instance for which to open ports.</p>
   */
  instanceName: string | undefined;
}

export namespace OpenInstancePublicPortsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpenInstancePublicPortsRequest): any => ({
    ...obj,
  });
}

export interface OpenInstancePublicPortsResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace OpenInstancePublicPortsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpenInstancePublicPortsResult): any => ({
    ...obj,
  });
}

export interface PeerVpcRequest {}

export namespace PeerVpcRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PeerVpcRequest): any => ({
    ...obj,
  });
}

export interface PeerVpcResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace PeerVpcResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PeerVpcResult): any => ({
    ...obj,
  });
}

export interface PutAlarmRequest {
  /**
   * <p>The name for the alarm. Specify the name of an existing alarm to update, and overwrite the
   *       previous configuration of the alarm.</p>
   */
  alarmName: string | undefined;

  /**
   * <p>The name of the metric to associate with the alarm.</p>
   *          <p>You can configure up to two alarms per metric.</p>
   *          <p>The following metrics are available for each resource type:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Instances</b>: <code>BurstCapacityPercentage</code>,
   *             <code>BurstCapacityTime</code>, <code>CPUUtilization</code>, <code>NetworkIn</code>,
   *             <code>NetworkOut</code>, <code>StatusCheckFailed</code>,
   *             <code>StatusCheckFailed_Instance</code>, and
   *           <code>StatusCheckFailed_System</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Load balancers</b>:
   *             <code>ClientTLSNegotiationErrorCount</code>, <code>HealthyHostCount</code>,
   *             <code>UnhealthyHostCount</code>, <code>HTTPCode_LB_4XX_Count</code>,
   *             <code>HTTPCode_LB_5XX_Count</code>, <code>HTTPCode_Instance_2XX_Count</code>,
   *             <code>HTTPCode_Instance_3XX_Count</code>, <code>HTTPCode_Instance_4XX_Count</code>,
   *             <code>HTTPCode_Instance_5XX_Count</code>, <code>InstanceResponseTime</code>,
   *             <code>RejectedConnectionCount</code>, and <code>RequestCount</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Relational databases</b>: <code>CPUUtilization</code>,
   *             <code>DatabaseConnections</code>, <code>DiskQueueDepth</code>,
   *             <code>FreeStorageSpace</code>, <code>NetworkReceiveThroughput</code>, and
   *             <code>NetworkTransmitThroughput</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about these metrics, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-resource-health-metrics#available-metrics">Metrics available in Lightsail</a>.</p>
   */
  metricName: MetricName | string | undefined;

  /**
   * <p>The name of the Lightsail resource that will be monitored.</p>
   *          <p>Instances, load balancers, and relational databases are the only Lightsail resources
   *       that can currently be monitored by alarms.</p>
   */
  monitoredResourceName: string | undefined;

  /**
   * <p>The arithmetic operation to use when comparing the specified statistic to the threshold.
   *       The specified statistic value is used as the first operand.</p>
   */
  comparisonOperator: ComparisonOperator | string | undefined;

  /**
   * <p>The value against which the specified statistic is compared.</p>
   */
  threshold: number | undefined;

  /**
   * <p>The number of most recent periods over which data is compared to the specified threshold.
   *       If you are setting an "M out of N" alarm, this value (<code>evaluationPeriods</code>) is the
   *       N.</p>
   *          <p>If you are setting an alarm that requires that a number of consecutive data points be
   *       breaching to trigger the alarm, this value specifies the rolling period of time in which data
   *       points are evaluated.</p>
   *          <p>Each evaluation period is five minutes long. For example, specify an evaluation period of
   *       24 to evaluate a metric over a rolling period of two hours.</p>
   *          <p>You can specify a minimum valuation period of 1 (5 minutes), and a maximum evaluation
   *       period of 288 (24 hours).</p>
   */
  evaluationPeriods: number | undefined;

  /**
   * <p>The number of data points that must be not within the specified threshold to trigger the
   *       alarm. If you are setting an "M out of N" alarm, this value (<code>datapointsToAlarm</code>)
   *       is the M.</p>
   */
  datapointsToAlarm?: number;

  /**
   * <p>Sets how this alarm will handle missing data points.</p>
   *          <p>An alarm can treat missing data in the following ways:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>breaching</code> - Assume the missing data is not within the threshold. Missing
   *           data counts towards the number of times the metric is not within the threshold.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>notBreaching</code> - Assume the missing data is within the threshold. Missing
   *           data does not count towards the number of times the metric is not within the
   *           threshold.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ignore</code> - Ignore the missing data. Maintains the current alarm
   *           state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>missing</code> - Missing data is treated as missing.</p>
   *             </li>
   *          </ul>
   *          <p>If <code>treatMissingData</code> is not specified, the default behavior of
   *         <code>missing</code> is used.</p>
   */
  treatMissingData?: TreatMissingData | string;

  /**
   * <p>The contact protocols to use for the alarm, such as <code>Email</code>, <code>SMS</code>
   *       (text messaging), or both.</p>
   *          <p>A notification is sent via the specified contact protocol if notifications are enabled for
   *       the alarm, and when the alarm is triggered.</p>
   *          <p>A notification is not sent if a contact protocol is not specified, if the specified
   *       contact protocol is not configured in the Amazon Web Services Region, or if notifications are
   *       not enabled for the alarm using the <code>notificationEnabled</code> paramater.</p>
   *          <p>Use the <code>CreateContactMethod</code> action to configure a contact protocol in an
   *         Amazon Web Services Region.</p>
   */
  contactProtocols?: (ContactProtocol | string)[];

  /**
   * <p>The alarm states that trigger a notification.</p>
   *          <p>An alarm has the following possible states:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALARM</code> - The metric is outside of the defined threshold.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSUFFICIENT_DATA</code> - The alarm has just started, the metric is not
   *           available, or not enough data is available for the metric to determine the alarm
   *           state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OK</code> - The metric is within the defined threshold.</p>
   *             </li>
   *          </ul>
   *          <p>When you specify a notification trigger, the <code>ALARM</code> state must be specified.
   *       The <code>INSUFFICIENT_DATA</code> and <code>OK</code> states can be specified in addition to
   *       the <code>ALARM</code> state.</p>
   *          <ul>
   *             <li>
   *                <p>If you specify <code>OK</code> as an alarm trigger, a notification is sent when the
   *           alarm switches from an <code>ALARM</code> or <code>INSUFFICIENT_DATA</code> alarm state to
   *           an <code>OK</code> state. This can be thought of as an <i>all clear</i>
   *           alarm notification.</p>
   *             </li>
   *             <li>
   *                <p>If you specify <code>INSUFFICIENT_DATA</code> as the alarm trigger, a notification is
   *           sent when the alarm switches from an <code>OK</code> or <code>ALARM</code> alarm state to
   *           an <code>INSUFFICIENT_DATA</code> state.</p>
   *             </li>
   *          </ul>
   *          <p>The notification trigger defaults to <code>ALARM</code> if you don't specify this
   *       parameter.</p>
   */
  notificationTriggers?: (AlarmState | string)[];

  /**
   * <p>Indicates whether the alarm is enabled.</p>
   *          <p>Notifications are enabled by default if you don't specify this parameter.</p>
   */
  notificationEnabled?: boolean;
}

export namespace PutAlarmRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutAlarmRequest): any => ({
    ...obj,
  });
}

export interface PutAlarmResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace PutAlarmResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutAlarmResult): any => ({
    ...obj,
  });
}

export interface PutInstancePublicPortsRequest {
  /**
   * <p>An array of objects to describe the ports to open for the specified instance.</p>
   */
  portInfos: PortInfo[] | undefined;

  /**
   * <p>The name of the instance for which to open ports.</p>
   */
  instanceName: string | undefined;
}

export namespace PutInstancePublicPortsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutInstancePublicPortsRequest): any => ({
    ...obj,
  });
}

export interface PutInstancePublicPortsResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace PutInstancePublicPortsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutInstancePublicPortsResult): any => ({
    ...obj,
  });
}

export interface RebootInstanceRequest {
  /**
   * <p>The name of the instance to reboot.</p>
   */
  instanceName: string | undefined;
}

export namespace RebootInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RebootInstanceRequest): any => ({
    ...obj,
  });
}

export interface RebootInstanceResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace RebootInstanceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RebootInstanceResult): any => ({
    ...obj,
  });
}

export interface RebootRelationalDatabaseRequest {
  /**
   * <p>The name of your database to reboot.</p>
   */
  relationalDatabaseName: string | undefined;
}

export namespace RebootRelationalDatabaseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RebootRelationalDatabaseRequest): any => ({
    ...obj,
  });
}

export interface RebootRelationalDatabaseResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace RebootRelationalDatabaseResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RebootRelationalDatabaseResult): any => ({
    ...obj,
  });
}

export interface RegisterContainerImageRequest {
  /**
   * <p>The name of the container service for which to register a container image.</p>
   */
  serviceName: string | undefined;

  /**
   * <p>The label for the container image when it's registered to the container service.</p>
   *
   *          <p>Use a descriptive label that you can use to track the different versions of your
   *       registered container images.</p>
   *
   *          <p>Use the <code>GetContainerImages</code> action to return the container images registered
   *       to a Lightsail container service. The label is the <code><imagelabel></code> portion
   *       of the following image name example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>:container-service-1.<imagelabel>.1</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *          <p>If the name of your container service is <code>mycontainerservice</code>, and the label
   *       that you specify is <code>mystaticwebsite</code>, then the name of the registered container
   *       image will be <code>:mycontainerservice.mystaticwebsite.1</code>.</p>
   *
   *          <p>The number at the end of these image name examples represents the version of the
   *       registered container image. If you push and register another container image to the same
   *       Lightsail container service, with the same label, then the version number for the new
   *       registered container image will be <code>2</code>. If you push and register another container
   *       image, the version number will be <code>3</code>, and so on.</p>
   */
  label: string | undefined;

  /**
   * <p>The digest of the container image to be registered.</p>
   */
  digest: string | undefined;
}

export namespace RegisterContainerImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterContainerImageRequest): any => ({
    ...obj,
  });
}

export interface RegisterContainerImageResult {
  /**
   * <p>An object that describes a container image that is registered to a Lightsail container
   *       service</p>
   */
  containerImage?: ContainerImage;
}

export namespace RegisterContainerImageResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterContainerImageResult): any => ({
    ...obj,
  });
}

export interface ReleaseStaticIpRequest {
  /**
   * <p>The name of the static IP to delete.</p>
   */
  staticIpName: string | undefined;
}

export namespace ReleaseStaticIpRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReleaseStaticIpRequest): any => ({
    ...obj,
  });
}

export interface ReleaseStaticIpResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace ReleaseStaticIpResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReleaseStaticIpResult): any => ({
    ...obj,
  });
}

export interface ResetDistributionCacheRequest {
  /**
   * <p>The name of the distribution for which to reset cache.</p>
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   */
  distributionName?: string;
}

export namespace ResetDistributionCacheRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetDistributionCacheRequest): any => ({
    ...obj,
  });
}

export interface ResetDistributionCacheResult {
  /**
   * <p>The status of the reset cache request.</p>
   */
  status?: string;

  /**
   * <p>The timestamp of the reset cache request (e.g., <code>1479734909.17</code>) in Unix time
   *       format.</p>
   */
  createTime?: Date;

  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace ResetDistributionCacheResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetDistributionCacheResult): any => ({
    ...obj,
  });
}

export interface SendContactMethodVerificationRequest {
  /**
   * <p>The protocol to verify, such as <code>Email</code> or <code>SMS</code> (text
   *       messaging).</p>
   */
  protocol: ContactMethodVerificationProtocol | string | undefined;
}

export namespace SendContactMethodVerificationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendContactMethodVerificationRequest): any => ({
    ...obj,
  });
}

export interface SendContactMethodVerificationResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace SendContactMethodVerificationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendContactMethodVerificationResult): any => ({
    ...obj,
  });
}

export interface SetIpAddressTypeRequest {
  /**
   * <p>The resource type.</p>
   *          <p>The possible values are <code>Distribution</code>, <code>Instance</code>, and
   *         <code>LoadBalancer</code>.</p>
   *          <note>
   *             <p>Distribution-related APIs are available only in the N. Virginia (<code>us-east-1</code>)
   *           Amazon Web Services Region. Set your Amazon Web Services Region configuration to
   *           <code>us-east-1</code> to create, view, or edit distributions.</p>
   *          </note>
   */
  resourceType: ResourceType | string | undefined;

  /**
   * <p>The name of the resource for which to set the IP address type.</p>
   */
  resourceName: string | undefined;

  /**
   * <p>The IP address type to set for the specified resource.</p>
   *
   *          <p>The possible values are <code>ipv4</code> for IPv4 only, and <code>dualstack</code> for
   *       IPv4 and IPv6.</p>
   */
  ipAddressType: IpAddressType | string | undefined;
}

export namespace SetIpAddressTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetIpAddressTypeRequest): any => ({
    ...obj,
  });
}

export interface SetIpAddressTypeResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace SetIpAddressTypeResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetIpAddressTypeResult): any => ({
    ...obj,
  });
}

export interface SetResourceAccessForBucketRequest {
  /**
   * <p>The name of the Lightsail instance for which to set bucket access. The instance must be
   *       in a running or stopped state.</p>
   */
  resourceName: string | undefined;

  /**
   * <p>The name of the bucket for which to set access to another Lightsail resource.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>The access setting.</p>
   *
   *          <p>The following access settings are available:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>allow</code> - Allows access to the bucket and its objects.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deny</code> - Denies access to the bucket and its objects. Use this setting to
   *           remove access for a resource previously set to <code>allow</code>.</p>
   *             </li>
   *          </ul>
   */
  access: ResourceBucketAccess | string | undefined;
}

export namespace SetResourceAccessForBucketRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetResourceAccessForBucketRequest): any => ({
    ...obj,
  });
}

export interface SetResourceAccessForBucketResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace SetResourceAccessForBucketResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetResourceAccessForBucketResult): any => ({
    ...obj,
  });
}

export interface StartInstanceRequest {
  /**
   * <p>The name of the instance (a virtual private server) to start.</p>
   */
  instanceName: string | undefined;
}

export namespace StartInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartInstanceRequest): any => ({
    ...obj,
  });
}

export interface StartInstanceResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace StartInstanceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartInstanceResult): any => ({
    ...obj,
  });
}

export interface StartRelationalDatabaseRequest {
  /**
   * <p>The name of your database to start.</p>
   */
  relationalDatabaseName: string | undefined;
}

export namespace StartRelationalDatabaseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartRelationalDatabaseRequest): any => ({
    ...obj,
  });
}

export interface StartRelationalDatabaseResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace StartRelationalDatabaseResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartRelationalDatabaseResult): any => ({
    ...obj,
  });
}

export interface StopInstanceRequest {
  /**
   * <p>The name of the instance (a virtual private server) to stop.</p>
   */
  instanceName: string | undefined;

  /**
   * <p>When set to <code>True</code>, forces a Lightsail instance that is stuck in a
   *         <code>stopping</code> state to stop.</p>
   *          <important>
   *             <p>Only use the <code>force</code> parameter if your instance is stuck in the
   *           <code>stopping</code> state. In any other state, your instance should stop normally
   *         without adding this parameter to your API request.</p>
   *          </important>
   */
  force?: boolean;
}

export namespace StopInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopInstanceRequest): any => ({
    ...obj,
  });
}

export interface StopInstanceResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace StopInstanceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopInstanceResult): any => ({
    ...obj,
  });
}

export interface StopRelationalDatabaseRequest {
  /**
   * <p>The name of your database to stop.</p>
   */
  relationalDatabaseName: string | undefined;

  /**
   * <p>The name of your new database snapshot to be created before stopping your database.</p>
   */
  relationalDatabaseSnapshotName?: string;
}

export namespace StopRelationalDatabaseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopRelationalDatabaseRequest): any => ({
    ...obj,
  });
}

export interface StopRelationalDatabaseResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace StopRelationalDatabaseResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopRelationalDatabaseResult): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The name of the resource to which you are adding tags.</p>
   */
  resourceName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which you want to add a tag.</p>
   */
  resourceArn?: string;

  /**
   * <p>The tag key and optional value.</p>
   */
  tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace TagResourceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResult): any => ({
    ...obj,
  });
}

export interface TestAlarmRequest {
  /**
   * <p>The name of the alarm to test.</p>
   */
  alarmName: string | undefined;

  /**
   * <p>The alarm state to test.</p>
   *          <p>An alarm has the following possible states that can be tested:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALARM</code> - The metric is outside of the defined threshold.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSUFFICIENT_DATA</code> - The alarm has just started, the metric is not
   *           available, or not enough data is available for the metric to determine the alarm
   *           state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OK</code> - The metric is within the defined threshold.</p>
   *             </li>
   *          </ul>
   */
  state: AlarmState | string | undefined;
}

export namespace TestAlarmRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestAlarmRequest): any => ({
    ...obj,
  });
}

export interface TestAlarmResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace TestAlarmResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestAlarmResult): any => ({
    ...obj,
  });
}

export interface UnpeerVpcRequest {}

export namespace UnpeerVpcRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnpeerVpcRequest): any => ({
    ...obj,
  });
}

export interface UnpeerVpcResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace UnpeerVpcResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnpeerVpcResult): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The name of the resource from which you are removing a tag.</p>
   */
  resourceName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource from which you want to remove a tag.</p>
   */
  resourceArn?: string;

  /**
   * <p>The tag keys to delete from the specified resource.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace UntagResourceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResult): any => ({
    ...obj,
  });
}

export interface UpdateBucketRequest {
  /**
   * <p>The name of the bucket to update.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>An object that sets the public accessibility of objects in the specified bucket.</p>
   */
  accessRules?: AccessRules;

  /**
   * <p>Specifies whether to enable or suspend versioning of objects in the bucket.</p>
   *
   *          <p>The following options can be specified:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Enabled</code> - Enables versioning of objects in the specified bucket.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Suspended</code> - Suspends versioning of objects in the specified bucket.
   *           Existing object versions are retained.</p>
   *             </li>
   *          </ul>
   */
  versioning?: string;

  /**
   * <p>An array of strings to specify the Amazon Web Services account IDs that can access the
   *       bucket.</p>
   *
   *          <p>You can give a maximum of 10 Amazon Web Services accounts access to a bucket.</p>
   */
  readonlyAccessAccounts?: string[];

  /**
   * <p>An object that describes the access log configuration for the bucket.</p>
   */
  accessLogConfig?: BucketAccessLogConfig;
}

export namespace UpdateBucketRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBucketRequest): any => ({
    ...obj,
  });
}

export interface UpdateBucketResult {
  /**
   * <p>An object that describes the bucket that is updated.</p>
   */
  bucket?: Bucket;

  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace UpdateBucketResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBucketResult): any => ({
    ...obj,
  });
}

export interface UpdateBucketBundleRequest {
  /**
   * <p>The name of the bucket for which to update the bundle.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>The ID of the new bundle to apply to the bucket.</p>
   *
   *          <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBucketBundles.html">GetBucketBundles</a> action to get a list of
   *       bundle IDs that you can specify.</p>
   */
  bundleId: string | undefined;
}

export namespace UpdateBucketBundleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBucketBundleRequest): any => ({
    ...obj,
  });
}

export interface UpdateBucketBundleResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operations?: Operation[];
}

export namespace UpdateBucketBundleResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBucketBundleResult): any => ({
    ...obj,
  });
}

export interface UpdateContainerServiceRequest {
  /**
   * <p>The name of the container service to update.</p>
   */
  serviceName: string | undefined;

  /**
   * <p>The power for the container service.</p>
   *
   *          <p>The power specifies the amount of memory, vCPUs, and base monthly cost of each node of the
   *       container service. The <code>power</code> and <code>scale</code> of a container service makes
   *       up its configured capacity. To determine the monthly price of your container service, multiply
   *       the base price of the <code>power</code> with the <code>scale</code> (the number of nodes) of
   *       the service.</p>
   *
   *          <p>Use the <code>GetContainerServicePowers</code> action to view the specifications of each
   *       power option.</p>
   */
  power?: ContainerServicePowerName | string;

  /**
   * <p>The scale for the container service.</p>
   *
   *          <p>The scale specifies the allocated compute nodes of the container service. The
   *         <code>power</code> and <code>scale</code> of a container service makes up its configured
   *       capacity. To determine the monthly price of your container service, multiply the base price of
   *       the <code>power</code> with the <code>scale</code> (the number of nodes) of the
   *       service.</p>
   */
  scale?: number;

  /**
   * <p>A Boolean value to indicate whether the container service is disabled.</p>
   */
  isDisabled?: boolean;

  /**
   * <p>The public domain names to use with the container service, such as
   *         <code>example.com</code> and <code>www.example.com</code>.</p>
   *
   *          <p>You can specify up to four public domain names for a container service. The domain names
   *       that you specify are used when you create a deployment with a container configured as the
   *       public endpoint of your container service.</p>
   *
   *          <p>If you don't specify public domain names, then you can use the default domain of the
   *       container service.</p>
   *
   *          <important>
   *             <p>You must create and validate an SSL/TLS certificate before you can use public domain
   *         names with your container service. Use the <code>CreateCertificate</code> action to create a
   *         certificate for the public domain names you want to use with your container service.</p>
   *          </important>
   *
   *          <p>You can specify public domain names using a string to array map as shown in the example
   *       later on this page.</p>
   */
  publicDomainNames?: Record<string, string[]>;

  /**
   * <p>An object to describe the configuration for the container service to access private
   *       container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private
   *       repositories.</p>
   *
   *          <p>For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
   */
  privateRegistryAccess?: PrivateRegistryAccessRequest;
}

export namespace UpdateContainerServiceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContainerServiceRequest): any => ({
    ...obj,
  });
}

export interface UpdateContainerServiceResult {
  /**
   * <p>An object that describes a container service.</p>
   */
  containerService?: ContainerService;
}

export namespace UpdateContainerServiceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContainerServiceResult): any => ({
    ...obj,
  });
}

export interface UpdateDistributionRequest {
  /**
   * <p>The name of the distribution to update.</p>
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   */
  distributionName: string | undefined;

  /**
   * <p>An object that describes the origin resource for the distribution, such as a Lightsail
   *       instance, bucket, or load balancer.</p>
   *          <p>The distribution pulls, caches, and serves content from the origin.</p>
   */
  origin?: InputOrigin;

  /**
   * <p>An object that describes the default cache behavior for the distribution.</p>
   */
  defaultCacheBehavior?: CacheBehavior;

  /**
   * <p>An object that describes the cache behavior settings for the distribution.</p>
   *          <note>
   *             <p>The <code>cacheBehaviorSettings</code> specified in your
   *           <code>UpdateDistributionRequest</code> will replace your distribution's existing
   *         settings.</p>
   *          </note>
   */
  cacheBehaviorSettings?: CacheSettings;

  /**
   * <p>An array of objects that describe the per-path cache behavior for the distribution.</p>
   */
  cacheBehaviors?: CacheBehaviorPerPath[];

  /**
   * <p>Indicates whether to enable the distribution.</p>
   */
  isEnabled?: boolean;
}

export namespace UpdateDistributionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDistributionRequest): any => ({
    ...obj,
  });
}

export interface UpdateDistributionResult {
  /**
   * <p>An array of objects that describe the result of the action, such as the status of the
   *       request, the timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace UpdateDistributionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDistributionResult): any => ({
    ...obj,
  });
}

export interface UpdateDistributionBundleRequest {
  /**
   * <p>The name of the distribution for which to update the bundle.</p>
   *          <p>Use the <code>GetDistributions</code> action to get a list of distribution names that you
   *       can specify.</p>
   */
  distributionName?: string;

  /**
   * <p>The bundle ID of the new bundle to apply to your distribution.</p>
   *          <p>Use the <code>GetDistributionBundles</code> action to get a list of distribution bundle
   *       IDs that you can specify.</p>
   */
  bundleId?: string;
}

export namespace UpdateDistributionBundleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDistributionBundleRequest): any => ({
    ...obj,
  });
}

export interface UpdateDistributionBundleResult {
  /**
   * <p>An object that describes the result of the action, such as the status of the request, the
   *       timestamp of the request, and the resources affected by the request.</p>
   */
  operation?: Operation;
}

export namespace UpdateDistributionBundleResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDistributionBundleResult): any => ({
    ...obj,
  });
}
