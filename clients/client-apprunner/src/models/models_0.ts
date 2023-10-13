// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { AppRunnerServiceException as __BaseException } from "./AppRunnerServiceException";

/**
 * @public
 */
export interface AssociateCustomDomainRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the App Runner service that you want to associate a custom domain name with.</p>
   */
  ServiceArn: string | undefined;

  /**
   * @public
   * <p>A custom domain endpoint to associate. Specify a root domain (for example, <code>example.com</code>), a subdomain (for example,
   *         <code>login.example.com</code> or <code>admin.login.example.com</code>), or a wildcard (for example, <code>*.example.com</code>).</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>Set to <code>true</code> to associate the subdomain <code>www.<i>DomainName</i>
   *             </code> with the App Runner service in addition to the base
   *       domain.</p>
   *          <p>Default: <code>true</code>
   *          </p>
   */
  EnableWWWSubdomain?: boolean;
}

/**
 * @public
 * @enum
 */
export const CertificateValidationRecordStatus = {
  FAILED: "FAILED",
  PENDING_VALIDATION: "PENDING_VALIDATION",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type CertificateValidationRecordStatus =
  (typeof CertificateValidationRecordStatus)[keyof typeof CertificateValidationRecordStatus];

/**
 * @public
 * <p>Describes a certificate CNAME record to add to your DNS. For more information, see <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_AssociateCustomDomain.html">AssociateCustomDomain</a>.</p>
 */
export interface CertificateValidationRecord {
  /**
   * @public
   * <p>The certificate CNAME record name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The record type, always <code>CNAME</code>.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The certificate CNAME record value.</p>
   */
  Value?: string;

  /**
   * @public
   * <p>The current state of the certificate CNAME record validation. It should change to <code>SUCCESS</code> after App Runner completes validation with your
   *       DNS.</p>
   */
  Status?: CertificateValidationRecordStatus;
}

/**
 * @public
 * @enum
 */
export const CustomDomainAssociationStatus = {
  ACTIVE: "ACTIVE",
  BINDING_CERTIFICATE: "BINDING_CERTIFICATE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  PENDING_CERTIFICATE_DNS_VALIDATION: "PENDING_CERTIFICATE_DNS_VALIDATION",
} as const;

/**
 * @public
 */
export type CustomDomainAssociationStatus =
  (typeof CustomDomainAssociationStatus)[keyof typeof CustomDomainAssociationStatus];

/**
 * @public
 * <p>Describes a custom domain that's associated with an App Runner service.</p>
 */
export interface CustomDomain {
  /**
   * @public
   * <p>An associated custom domain endpoint. It can be a root domain (for example, <code>example.com</code>), a subdomain (for example,
   *         <code>login.example.com</code> or <code>admin.login.example.com</code>), or a wildcard (for example, <code>*.example.com</code>).</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>When <code>true</code>, the subdomain <code>www.<i>DomainName</i>
   *             </code> is associated with the App Runner service in addition to the base
   *       domain.</p>
   */
  EnableWWWSubdomain: boolean | undefined;

  /**
   * @public
   * <p>A list of certificate CNAME records that's used for this domain name.</p>
   */
  CertificateValidationRecords?: CertificateValidationRecord[];

  /**
   * @public
   * <p>The current state of the domain name association.</p>
   */
  Status: CustomDomainAssociationStatus | undefined;
}

/**
 * @public
 * <p>DNS Target record for a custom domain of this Amazon VPC.</p>
 */
export interface VpcDNSTarget {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the VPC Ingress Connection that is associated with your service.</p>
   */
  VpcIngressConnectionArn?: string;

  /**
   * @public
   * <p>The ID of the Amazon VPC that is associated with the custom domain name of the target DNS.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The domain name of your target DNS that is associated with the Amazon VPC.</p>
   */
  DomainName?: string;
}

/**
 * @public
 */
export interface AssociateCustomDomainResponse {
  /**
   * @public
   * <p>The App Runner subdomain of the App Runner service. The custom domain name is mapped to this target name.</p>
   */
  DNSTarget: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the App Runner service with which a custom domain name is associated.</p>
   */
  ServiceArn: string | undefined;

  /**
   * @public
   * <p>A description of the domain name that's being associated.</p>
   */
  CustomDomain: CustomDomain | undefined;

  /**
   * @public
   * <p>DNS Target records for the custom domains of this Amazon VPC.
   *     </p>
   */
  VpcDNSTargets: VpcDNSTarget[] | undefined;
}

/**
 * @public
 * <p>An unexpected service exception occurred.</p>
 */
export class InternalServiceErrorException extends __BaseException {
  readonly name: "InternalServiceErrorException" = "InternalServiceErrorException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceErrorException, __BaseException>) {
    super({
      name: "InternalServiceErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceErrorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>One or more input parameters aren't valid. Refer to the API action's document page, correct the input parameters, and try the action again.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>You can't perform this action when the resource is in its current state.</p>
 */
export class InvalidStateException extends __BaseException {
  readonly name: "InvalidStateException" = "InvalidStateException";
  readonly $fault: "client" = "client";
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
 * @public
 * <p>Describes a tag that is applied to an App Runner resource. A tag is a metadata item consisting of a key-value pair.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key of the tag.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The value of the tag.</p>
   */
  Value?: string;
}

/**
 * @public
 */
export interface CreateAutoScalingConfigurationRequest {
  /**
   * @public
   * <p>A name for the auto scaling configuration. When you use it for the first time in an Amazon Web Services Region, App Runner creates revision number
   *         <code>1</code> of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration.</p>
   *          <note>
   *             <p>Prior to the release of <a href="https://docs.aws.amazon.com/apprunner/latest/relnotes/release-2023-09-22-auto-scale-config.html">Auto scale
   *         configuration enhancements</a>, the name <code>DefaultConfiguration</code> was reserved. </p>
   *             <p>This restriction is no longer in place. You can now manage <code>DefaultConfiguration</code> the same way you manage your custom auto scaling
   *         configurations. This means you can do the following with the <code>DefaultConfiguration</code> that App Runner provides:</p>
   *             <ul>
   *                <li>
   *                   <p>Create new revisions of the <code>DefaultConfiguration</code>.</p>
   *                </li>
   *                <li>
   *                   <p>Delete the revisions of the <code>DefaultConfiguration</code>.</p>
   *                </li>
   *                <li>
   *                   <p>Delete the auto scaling configuration for which the App Runner <code>DefaultConfiguration</code> was created.</p>
   *                </li>
   *                <li>
   *                   <p>If you delete the auto scaling configuration you can create another custom auto scaling configuration with the same
   *               <code>DefaultConfiguration</code> name. The original <code>DefaultConfiguration</code> resource provided by App Runner remains in your account unless
   *             you make changes to it.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  AutoScalingConfigurationName: string | undefined;

  /**
   * @public
   * <p>The maximum number of concurrent requests that you want an instance to process. If the number of concurrent requests exceeds this limit, App Runner scales
   *       up your service.</p>
   *          <p>Default: <code>100</code>
   *          </p>
   */
  MaxConcurrency?: number;

  /**
   * @public
   * <p>The minimum number of instances that App Runner provisions for your service. The service always has at least <code>MinSize</code> provisioned instances.
   *       Some of them actively serve traffic. The rest of them (provisioned and inactive instances) are a cost-effective compute capacity reserve and are ready to
   *       be quickly activated. You pay for memory usage of all the provisioned instances. You pay for CPU usage of only the active subset.</p>
   *          <p>App Runner temporarily doubles the number of provisioned instances during deployments, to maintain the same capacity for both old and new code.</p>
   *          <p>Default: <code>1</code>
   *          </p>
   */
  MinSize?: number;

  /**
   * @public
   * <p>The maximum number of instances that your service scales up to. At most <code>MaxSize</code> instances actively serve traffic for your service.</p>
   *          <p>Default: <code>25</code>
   *          </p>
   */
  MaxSize?: number;

  /**
   * @public
   * <p>A list of metadata items that you can associate with your auto scaling configuration resource. A tag is a key-value pair.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const AutoScalingConfigurationStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type AutoScalingConfigurationStatus =
  (typeof AutoScalingConfigurationStatus)[keyof typeof AutoScalingConfigurationStatus];

/**
 * @public
 * <p>Describes an App Runner automatic scaling configuration resource.</p>
 *          <p>A higher <code>MinSize</code> increases the spread of your App Runner service over more Availability Zones in the Amazon Web Services Region. The tradeoff is a higher
 *       minimal cost.</p>
 *          <p>A lower <code>MaxSize</code> controls your cost. The tradeoff is lower responsiveness during peak demand.</p>
 *          <p>Multiple revisions of a configuration might have the same <code>AutoScalingConfigurationName</code> and different
 *         <code>AutoScalingConfigurationRevision</code> values.</p>
 */
export interface AutoScalingConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of this auto scaling configuration.</p>
   */
  AutoScalingConfigurationArn?: string;

  /**
   * @public
   * <p>The customer-provided auto scaling configuration name. It can be used in multiple revisions of a configuration.</p>
   */
  AutoScalingConfigurationName?: string;

  /**
   * @public
   * <p>The revision of this auto scaling configuration. It's unique among all the active configurations (<code>"Status": "ACTIVE"</code>) that share the same
   *         <code>AutoScalingConfigurationName</code>.</p>
   */
  AutoScalingConfigurationRevision?: number;

  /**
   * @public
   * <p>It's set to <code>true</code> for the configuration with the highest <code>Revision</code> among all configurations that share the same
   *         <code>AutoScalingConfigurationName</code>. It's set to <code>false</code> otherwise.</p>
   */
  Latest?: boolean;

  /**
   * @public
   * <p>The current state of the auto scaling configuration. If the status of a configuration revision is <code>INACTIVE</code>, it was deleted and can't be
   *       used. Inactive configuration revisions are permanently removed some time after they are deleted.</p>
   */
  Status?: AutoScalingConfigurationStatus;

  /**
   * @public
   * <p>The maximum number of concurrent requests that an instance processes. If the number of concurrent requests exceeds this limit, App Runner scales the service
   *       up.</p>
   */
  MaxConcurrency?: number;

  /**
   * @public
   * <p>The minimum number of instances that App Runner provisions for a service. The service always has at least <code>MinSize</code> provisioned instances. Some
   *       of them actively serve traffic. The rest of them (provisioned and inactive instances) are a cost-effective compute capacity reserve and are ready to be
   *       quickly activated. You pay for memory usage of all the provisioned instances. You pay for CPU usage of only the active subset.</p>
   *          <p>App Runner temporarily doubles the number of provisioned instances during deployments, to maintain the same capacity for both old and new code.</p>
   */
  MinSize?: number;

  /**
   * @public
   * <p>The maximum number of instances that a service scales up to. At most <code>MaxSize</code> instances actively serve traffic for your service.</p>
   */
  MaxSize?: number;

  /**
   * @public
   * <p>The time when the auto scaling configuration was created. It's in Unix time stamp format.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The time when the auto scaling configuration was deleted. It's in Unix time stamp format.</p>
   */
  DeletedAt?: Date;

  /**
   * @public
   * <p>Indicates if this auto scaling configuration has an App Runner service associated with it. A value of <code>true</code> indicates one or more services are
   *       associated. A value of <code>false</code> indicates no services are associated.</p>
   */
  HasAssociatedService?: boolean;

  /**
   * @public
   * <p>Indicates if this auto scaling configuration should be used as the default for a new App Runner service that does not have an
   *       auto scaling configuration ARN specified during creation. Each account can have only one
   *       default <code>AutoScalingConfiguration</code> per region. The default <code>AutoScalingConfiguration</code> can be any revision under
   *       the same <code>AutoScalingConfigurationName</code>.</p>
   */
  IsDefault?: boolean;
}

/**
 * @public
 */
export interface CreateAutoScalingConfigurationResponse {
  /**
   * @public
   * <p>A description of the App Runner auto scaling configuration that's created by this request.</p>
   */
  AutoScalingConfiguration: AutoScalingConfiguration | undefined;
}

/**
 * @public
 * <p>App Runner can't create this resource. You've reached your account quota for this resource type.</p>
 *          <p>For App Runner per-resource quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/apprunner.html">App Runner endpoints and quotas</a> in the
 *         <i>Amazon Web Services General Reference</i>.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const ProviderType = {
  BITBUCKET: "BITBUCKET",
  GITHUB: "GITHUB",
} as const;

/**
 * @public
 */
export type ProviderType = (typeof ProviderType)[keyof typeof ProviderType];

/**
 * @public
 */
export interface CreateConnectionRequest {
  /**
   * @public
   * <p>A name for the new connection. It must be unique across all App Runner connections for the Amazon Web Services account in the Amazon Web Services Region.</p>
   */
  ConnectionName: string | undefined;

  /**
   * @public
   * <p>The source repository provider.</p>
   */
  ProviderType: ProviderType | undefined;

  /**
   * @public
   * <p>A list of metadata items that you can associate with your connection resource. A tag is a key-value pair.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const ConnectionStatus = {
  AVAILABLE: "AVAILABLE",
  DELETED: "DELETED",
  ERROR: "ERROR",
  PENDING_HANDSHAKE: "PENDING_HANDSHAKE",
} as const;

/**
 * @public
 */
export type ConnectionStatus = (typeof ConnectionStatus)[keyof typeof ConnectionStatus];

/**
 * @public
 * <p>Describes an App Runner connection resource.</p>
 */
export interface Connection {
  /**
   * @public
   * <p>The customer-provided connection name.</p>
   */
  ConnectionName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of this connection.</p>
   */
  ConnectionArn?: string;

  /**
   * @public
   * <p>The source repository provider.</p>
   */
  ProviderType?: ProviderType;

  /**
   * @public
   * <p>The current state of the App Runner connection. When the state is <code>AVAILABLE</code>, you can use the connection to create an App Runner service.</p>
   */
  Status?: ConnectionStatus;

  /**
   * @public
   * <p>The App Runner connection creation time, expressed as a Unix time stamp.</p>
   */
  CreatedAt?: Date;
}

/**
 * @public
 */
export interface CreateConnectionResponse {
  /**
   * @public
   * <p>A description of the App Runner connection that's created by this request.</p>
   */
  Connection: Connection | undefined;
}

/**
 * @public
 * @enum
 */
export const TracingVendor = {
  AWSXRAY: "AWSXRAY",
} as const;

/**
 * @public
 */
export type TracingVendor = (typeof TracingVendor)[keyof typeof TracingVendor];

/**
 * @public
 * <p>Describes the configuration of the tracing feature within an App Runner observability configuration.</p>
 */
export interface TraceConfiguration {
  /**
   * @public
   * <p>The implementation provider chosen for tracing App Runner services.</p>
   */
  Vendor: TracingVendor | undefined;
}

/**
 * @public
 */
export interface CreateObservabilityConfigurationRequest {
  /**
   * @public
   * <p>A name for the observability configuration. When you use it for the first time in an Amazon Web Services Region, App Runner creates revision number
   *         <code>1</code> of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration.</p>
   *          <note>
   *             <p>The name <code>DefaultConfiguration</code> is reserved. You can't use it to create a new observability configuration, and you can't create a
   *         revision of it.</p>
   *             <p>When you want to use your own observability configuration for your App Runner service, <i>create a configuration with a different name</i>,
   *         and then provide it when you create or update your service.</p>
   *          </note>
   */
  ObservabilityConfigurationName: string | undefined;

  /**
   * @public
   * <p>The configuration of the tracing feature within this observability configuration. If you don't specify it, App Runner doesn't enable tracing.</p>
   */
  TraceConfiguration?: TraceConfiguration;

  /**
   * @public
   * <p>A list of metadata items that you can associate with your observability configuration resource. A tag is a key-value pair.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const ObservabilityConfigurationStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type ObservabilityConfigurationStatus =
  (typeof ObservabilityConfigurationStatus)[keyof typeof ObservabilityConfigurationStatus];

/**
 * @public
 * <p>Describes an App Runner observability configuration resource. Multiple revisions of a configuration have the same
 *         <code>ObservabilityConfigurationName</code> and different <code>ObservabilityConfigurationRevision</code> values.</p>
 *          <p>The resource is designed to configure multiple features (currently one feature, tracing). This type contains optional members that describe the
 *       configuration of these features (currently one member, <code>TraceConfiguration</code>). If a feature member isn't specified, the feature isn't
 *       enabled.</p>
 */
export interface ObservabilityConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of this observability configuration.</p>
   */
  ObservabilityConfigurationArn?: string;

  /**
   * @public
   * <p>The customer-provided observability configuration name. It can be used in multiple revisions of a configuration.</p>
   */
  ObservabilityConfigurationName?: string;

  /**
   * @public
   * <p>The configuration of the tracing feature within this observability configuration. If not specified, tracing isn't enabled.</p>
   */
  TraceConfiguration?: TraceConfiguration;

  /**
   * @public
   * <p>The revision of this observability configuration. It's unique among all the active configurations (<code>"Status": "ACTIVE"</code>) that share the
   *       same <code>ObservabilityConfigurationName</code>.</p>
   */
  ObservabilityConfigurationRevision?: number;

  /**
   * @public
   * <p>It's set to <code>true</code> for the configuration with the highest <code>Revision</code> among all configurations that share the same
   *         <code>ObservabilityConfigurationName</code>. It's set to <code>false</code> otherwise.</p>
   */
  Latest?: boolean;

  /**
   * @public
   * <p>The current state of the observability configuration. If the status of a configuration revision is <code>INACTIVE</code>, it was deleted and can't be
   *       used. Inactive configuration revisions are permanently removed some time after they are deleted.</p>
   */
  Status?: ObservabilityConfigurationStatus;

  /**
   * @public
   * <p>The time when the observability configuration was created. It's in Unix time stamp format.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The time when the observability configuration was deleted. It's in Unix time stamp format.</p>
   */
  DeletedAt?: Date;
}

/**
 * @public
 */
export interface CreateObservabilityConfigurationResponse {
  /**
   * @public
   * <p>A description of the App Runner observability configuration that's created by this request.</p>
   */
  ObservabilityConfiguration: ObservabilityConfiguration | undefined;
}

/**
 * @public
 * <p>Describes a custom encryption key that App Runner uses to encrypt copies of the source repository and service logs.</p>
 */
export interface EncryptionConfiguration {
  /**
   * @public
   * <p>The ARN of the KMS key that's used for encryption.</p>
   */
  KmsKey: string | undefined;
}

/**
 * @public
 * @enum
 */
export const HealthCheckProtocol = {
  HTTP: "HTTP",
  TCP: "TCP",
} as const;

/**
 * @public
 */
export type HealthCheckProtocol = (typeof HealthCheckProtocol)[keyof typeof HealthCheckProtocol];

/**
 * @public
 * <p>Describes the settings for the health check that App Runner performs to monitor the health of a service.</p>
 */
export interface HealthCheckConfiguration {
  /**
   * @public
   * <p>The IP protocol that App Runner uses to perform health checks for your service.</p>
   *          <p>If you set <code>Protocol</code> to <code>HTTP</code>, App Runner sends health check requests to the HTTP path specified by <code>Path</code>.</p>
   *          <p>Default: <code>TCP</code>
   *          </p>
   */
  Protocol?: HealthCheckProtocol;

  /**
   * @public
   * <p>The URL that health check requests are sent to.</p>
   *          <p>
   *             <code>Path</code> is only applicable when you set <code>Protocol</code> to <code>HTTP</code>.</p>
   *          <p>Default: <code>"/"</code>
   *          </p>
   */
  Path?: string;

  /**
   * @public
   * <p>The time interval, in seconds, between health checks.</p>
   *          <p>Default: <code>5</code>
   *          </p>
   */
  Interval?: number;

  /**
   * @public
   * <p>The time, in seconds, to wait for a health check response before deciding it failed.</p>
   *          <p>Default: <code>2</code>
   *          </p>
   */
  Timeout?: number;

  /**
   * @public
   * <p>The number of consecutive checks that must succeed before App Runner decides that the service is healthy.</p>
   *          <p>Default: <code>1</code>
   *          </p>
   */
  HealthyThreshold?: number;

  /**
   * @public
   * <p>The number of consecutive checks that must fail before App Runner decides that the service is unhealthy.</p>
   *          <p>Default: <code>5</code>
   *          </p>
   */
  UnhealthyThreshold?: number;
}

/**
 * @public
 * <p>Describes the runtime configuration of an App Runner service instance (scaling unit).</p>
 */
export interface InstanceConfiguration {
  /**
   * @public
   * <p>The number of CPU units reserved for each instance of your App Runner service.</p>
   *          <p>Default: <code>1 vCPU</code>
   *          </p>
   */
  Cpu?: string;

  /**
   * @public
   * <p>The amount of memory, in MB or GB, reserved for each instance of your App Runner service.</p>
   *          <p>Default: <code>2 GB</code>
   *          </p>
   */
  Memory?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role that provides permissions to your App Runner service. These are permissions that your code needs when it calls
   *       any Amazon Web Services APIs.</p>
   */
  InstanceRoleArn?: string;
}

/**
 * @public
 * @enum
 */
export const EgressType = {
  DEFAULT: "DEFAULT",
  VPC: "VPC",
} as const;

/**
 * @public
 */
export type EgressType = (typeof EgressType)[keyof typeof EgressType];

/**
 * @public
 * <p>Describes configuration settings related to outbound network traffic of an App Runner service.</p>
 */
export interface EgressConfiguration {
  /**
   * @public
   * <p>The type of egress configuration.</p>
   *          <p>Set to <code>DEFAULT</code> for access to resources hosted on public networks.</p>
   *          <p>Set to <code>VPC</code> to associate your service to a custom VPC specified by <code>VpcConnectorArn</code>.</p>
   */
  EgressType?: EgressType;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the App Runner VPC connector that you want to associate with your App Runner service. Only valid when <code>EgressType =
   *         VPC</code>.</p>
   */
  VpcConnectorArn?: string;
}

/**
 * @public
 * <p>Network configuration settings for inbound network traffic.</p>
 */
export interface IngressConfiguration {
  /**
   * @public
   * <p>Specifies whether your App Runner service is publicly accessible. To make the service publicly accessible set it to <code>True</code>. To make the service
   *       privately accessible, from only within an Amazon VPC set it to <code>False</code>. </p>
   */
  IsPubliclyAccessible?: boolean;
}

/**
 * @public
 * <p>Describes configuration settings related to network traffic of an App Runner service. Consists of embedded objects for each configurable network
 *       feature.</p>
 */
export interface NetworkConfiguration {
  /**
   * @public
   * <p>Network configuration settings for outbound message traffic.</p>
   */
  EgressConfiguration?: EgressConfiguration;

  /**
   * @public
   * <p>Network configuration settings for inbound message traffic.</p>
   */
  IngressConfiguration?: IngressConfiguration;
}

/**
 * @public
 * <p>Describes the observability configuration of an App Runner service. These are additional observability features, like tracing, that you choose to
 *       enable. They're configured in a separate resource that you associate with your service.</p>
 */
export interface ServiceObservabilityConfiguration {
  /**
   * @public
   * <p>When <code>true</code>, an observability configuration resource is associated with the service, and an <code>ObservabilityConfigurationArn</code> is
   *       specified.</p>
   */
  ObservabilityEnabled: boolean | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the observability configuration that is associated with the service. Specified only when
   *         <code>ObservabilityEnabled</code> is <code>true</code>.</p>
   *          <p>Specify an ARN with a name and a revision number to associate that revision. For example:
   *         <code>arn:aws:apprunner:us-east-1:123456789012:observabilityconfiguration/xray-tracing/3</code>
   *          </p>
   *          <p>Specify just the name to associate the latest revision. For example:
   *         <code>arn:aws:apprunner:us-east-1:123456789012:observabilityconfiguration/xray-tracing</code>
   *          </p>
   */
  ObservabilityConfigurationArn?: string;
}

/**
 * @public
 * <p>Describes resources needed to authenticate access to some source repositories. The specific resource depends on the repository provider.</p>
 */
export interface AuthenticationConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the App Runner connection that enables the App Runner service to connect to a source repository. It's required for GitHub code
   *       repositories.</p>
   */
  ConnectionArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role that grants the App Runner service access to a source repository. It's required for ECR image repositories
   *       (but not for ECR Public repositories).</p>
   */
  AccessRoleArn?: string;
}

/**
 * @public
 * @enum
 */
export const Runtime = {
  CORRETTO_11: "CORRETTO_11",
  CORRETTO_8: "CORRETTO_8",
  DOTNET_6: "DOTNET_6",
  GO_1: "GO_1",
  NODEJS_12: "NODEJS_12",
  NODEJS_14: "NODEJS_14",
  NODEJS_16: "NODEJS_16",
  PHP_81: "PHP_81",
  PYTHON_3: "PYTHON_3",
  RUBY_31: "RUBY_31",
} as const;

/**
 * @public
 */
export type Runtime = (typeof Runtime)[keyof typeof Runtime];

/**
 * @public
 * <p>Describes the basic configuration needed for building and running an App Runner service. This type doesn't support the full set of possible
 *       configuration options. Fur full configuration capabilities, use a <code>apprunner.yaml</code> file in the source code repository.</p>
 */
export interface CodeConfigurationValues {
  /**
   * @public
   * <p>A runtime environment type for building and running an App Runner service.
   *        It represents a
   *       programming language runtime.</p>
   */
  Runtime: Runtime | undefined;

  /**
   * @public
   * <p>The command App Runner runs to build your
   *       application.</p>
   */
  BuildCommand?: string;

  /**
   * @public
   * <p>The command App Runner runs to start your
   *       application.</p>
   */
  StartCommand?: string;

  /**
   * @public
   * <p>The port that your application listens to in the container.</p>
   *          <p>Default: <code>8080</code>
   *          </p>
   */
  Port?: string;

  /**
   * @public
   * <p>The environment variables that are available to your running App Runner service. An array of key-value pairs.</p>
   */
  RuntimeEnvironmentVariables?: Record<string, string>;

  /**
   * @public
   * <p>An array of key-value pairs representing the secrets and parameters that get referenced to your service as an environment variable. The supported
   *       values are either the full Amazon Resource Name (ARN) of the Secrets Manager secret or the full ARN of the parameter in the Amazon Web Services Systems Manager
   *       Parameter Store.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p> If the Amazon Web Services Systems Manager Parameter Store parameter exists in the same Amazon Web Services Region as the service that you're launching, you can use
   *             either the full ARN or name of the secret. If the parameter exists in a different Region, then the full ARN must be specified. </p>
   *                </li>
   *                <li>
   *                   <p> Currently, cross account referencing of Amazon Web Services Systems Manager Parameter Store parameter is not supported. </p>
   *                </li>
   *             </ul>
   *          </note>
   */
  RuntimeEnvironmentSecrets?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const ConfigurationSource = {
  API: "API",
  REPOSITORY: "REPOSITORY",
} as const;

/**
 * @public
 */
export type ConfigurationSource = (typeof ConfigurationSource)[keyof typeof ConfigurationSource];

/**
 * @public
 * <p>Describes the configuration that App Runner uses to build and run an App Runner service from a source code repository.</p>
 */
export interface CodeConfiguration {
  /**
   * @public
   * <p>The source of the App Runner configuration. Values are interpreted as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REPOSITORY</code> – App Runner reads configuration values from the <code>apprunner.yaml</code> file in the source code repository and
   *           ignores <code>CodeConfigurationValues</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>API</code> – App Runner uses configuration values provided in <code>CodeConfigurationValues</code> and ignores the
   *             <code>apprunner.yaml</code> file in the source code repository.</p>
   *             </li>
   *          </ul>
   */
  ConfigurationSource: ConfigurationSource | undefined;

  /**
   * @public
   * <p>The basic configuration for building and running the App Runner service. Use it to quickly launch an App Runner service without providing a
   *         <code>apprunner.yaml</code> file in the source code repository (or ignoring the file if it exists).</p>
   */
  CodeConfigurationValues?: CodeConfigurationValues;
}

/**
 * @public
 * @enum
 */
export const SourceCodeVersionType = {
  BRANCH: "BRANCH",
} as const;

/**
 * @public
 */
export type SourceCodeVersionType = (typeof SourceCodeVersionType)[keyof typeof SourceCodeVersionType];

/**
 * @public
 * <p>Identifies a version of code that App Runner refers to within a source code repository.</p>
 */
export interface SourceCodeVersion {
  /**
   * @public
   * <p>The type of version identifier.</p>
   *          <p>For a git-based repository, branches represent versions.</p>
   */
  Type: SourceCodeVersionType | undefined;

  /**
   * @public
   * <p>A source code version.</p>
   *          <p>For a git-based repository, a branch name maps to a specific version. App Runner uses the most recent commit to the branch.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>Describes a source code repository.</p>
 */
export interface CodeRepository {
  /**
   * @public
   * <p>The location of the repository that contains the source code.</p>
   */
  RepositoryUrl: string | undefined;

  /**
   * @public
   * <p>The version that should be used within the source code repository.</p>
   */
  SourceCodeVersion: SourceCodeVersion | undefined;

  /**
   * @public
   * <p>Configuration for building and running the service from a source code repository.</p>
   *          <note>
   *             <p>
   *                <code>CodeConfiguration</code> is required only for <code>CreateService</code> request.</p>
   *          </note>
   */
  CodeConfiguration?: CodeConfiguration;

  /**
   * @public
   * <p>The path of the directory that stores source code and configuration files. The build and start commands also execute from here. The path is absolute
   *       from root and, if not specified, defaults to the repository root.</p>
   */
  SourceDirectory?: string;
}

/**
 * @public
 * <p>Describes the configuration that App Runner uses to run an App Runner service using an image pulled from a source image repository.</p>
 */
export interface ImageConfiguration {
  /**
   * @public
   * <p>Environment variables that are available to your running App Runner service. An array of key-value pairs.</p>
   */
  RuntimeEnvironmentVariables?: Record<string, string>;

  /**
   * @public
   * <p>An optional command that App Runner runs to start the application in the source image. If specified, this command overrides the Docker image’s default start
   *       command.</p>
   */
  StartCommand?: string;

  /**
   * @public
   * <p>The port that your application listens to in the container.</p>
   *          <p>Default: <code>8080</code>
   *          </p>
   */
  Port?: string;

  /**
   * @public
   * <p>An array of key-value pairs representing the secrets and parameters that get referenced to your service as an environment variable. The supported
   *       values are either the full Amazon Resource Name (ARN) of the Secrets Manager secret or the full ARN of the parameter in the Amazon Web Services Systems Manager
   *       Parameter Store.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p> If the Amazon Web Services Systems Manager Parameter Store parameter exists in the same Amazon Web Services Region as the service that you're launching, you can use
   *             either the full ARN or name of the secret. If the parameter exists in a different Region, then the full ARN must be specified. </p>
   *                </li>
   *                <li>
   *                   <p> Currently, cross account referencing of Amazon Web Services Systems Manager Parameter Store parameter is not supported. </p>
   *                </li>
   *             </ul>
   *          </note>
   */
  RuntimeEnvironmentSecrets?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const ImageRepositoryType = {
  ECR: "ECR",
  ECR_PUBLIC: "ECR_PUBLIC",
} as const;

/**
 * @public
 */
export type ImageRepositoryType = (typeof ImageRepositoryType)[keyof typeof ImageRepositoryType];

/**
 * @public
 * <p>Describes a source image repository.</p>
 */
export interface ImageRepository {
  /**
   * @public
   * <p>The identifier of an image.</p>
   *          <p>For an image in Amazon Elastic Container Registry (Amazon ECR), this is an image name. For the image name format, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html">Pulling an image</a> in the <i>Amazon ECR User Guide</i>.</p>
   */
  ImageIdentifier: string | undefined;

  /**
   * @public
   * <p>Configuration for running the identified image.</p>
   */
  ImageConfiguration?: ImageConfiguration;

  /**
   * @public
   * <p>The type of the image repository. This reflects the repository provider and whether the repository is private or public.</p>
   */
  ImageRepositoryType: ImageRepositoryType | undefined;
}

/**
 * @public
 * <p>Describes the source deployed to an App Runner service. It can be a code or an image repository.</p>
 */
export interface SourceConfiguration {
  /**
   * @public
   * <p>The description of a source code
   *       repository.</p>
   *          <p>You must provide either this member or <code>ImageRepository</code> (but not both).</p>
   */
  CodeRepository?: CodeRepository;

  /**
   * @public
   * <p>The description of a source image
   *       repository.</p>
   *          <p>You must provide either this member or <code>CodeRepository</code> (but not both).</p>
   */
  ImageRepository?: ImageRepository;

  /**
   * @public
   * <p>If <code>true</code>, continuous integration from the source repository is enabled for the App Runner service. Each repository change (including any source
   *       code commit or new image version) starts a deployment.</p>
   *          <p>Default: App Runner sets to <code>false</code> for a source image that uses an ECR Public repository or an ECR repository that's in an Amazon Web Services account other than the one that the service is in. App Runner sets to <code>true</code> in all other cases (which currently include a source code
   *       repository or a source image using a same-account ECR repository).</p>
   */
  AutoDeploymentsEnabled?: boolean;

  /**
   * @public
   * <p>Describes the resources that are needed to authenticate access to some source repositories.</p>
   */
  AuthenticationConfiguration?: AuthenticationConfiguration;
}

/**
 * @public
 */
export interface CreateServiceRequest {
  /**
   * @public
   * <p>A name for the App Runner service. It must be unique across all the running App Runner services in your Amazon Web Services account in the Amazon Web Services Region.</p>
   */
  ServiceName: string | undefined;

  /**
   * @public
   * <p>The source to deploy to the App Runner service. It can be a code or an image repository.</p>
   */
  SourceConfiguration: SourceConfiguration | undefined;

  /**
   * @public
   * <p>The runtime configuration of instances (scaling units) of your service.</p>
   */
  InstanceConfiguration?: InstanceConfiguration;

  /**
   * @public
   * <p>An optional list of metadata items that you can associate with the App Runner service resource. A tag is a key-value pair.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>An optional custom encryption key that App Runner uses to encrypt the copy of your source repository that it maintains and your service logs. By default,
   *       App Runner uses an Amazon Web Services managed key.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

  /**
   * @public
   * <p>The settings for the health check that App Runner performs to monitor the health of the App Runner service.</p>
   */
  HealthCheckConfiguration?: HealthCheckConfiguration;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an App Runner automatic scaling configuration resource that you want to associate with your service. If not provided, App Runner
   *       associates the latest revision of a default auto scaling configuration.</p>
   *          <p>Specify an ARN with a name and a revision number to associate that revision. For example:
   *           <code>arn:aws:apprunner:us-east-1:123456789012:autoscalingconfiguration/high-availability/3</code>
   *          </p>
   *          <p>Specify just the name to associate the latest revision. For example:
   *         <code>arn:aws:apprunner:us-east-1:123456789012:autoscalingconfiguration/high-availability</code>
   *          </p>
   */
  AutoScalingConfigurationArn?: string;

  /**
   * @public
   * <p>Configuration settings related to network traffic of the web application that the App Runner service runs.</p>
   */
  NetworkConfiguration?: NetworkConfiguration;

  /**
   * @public
   * <p>The observability configuration of your service.</p>
   */
  ObservabilityConfiguration?: ServiceObservabilityConfiguration;
}

/**
 * @public
 * <p>Provides summary information about an App Runner automatic scaling configuration resource.</p>
 *          <p>This type contains limited information about an auto scaling configuration. It includes only identification information, without configuration
 *       details. It's returned by the <a>ListAutoScalingConfigurations</a> action. Complete configuration information is returned by the <a>CreateAutoScalingConfiguration</a>, <a>DescribeAutoScalingConfiguration</a>, and <a>DeleteAutoScalingConfiguration</a>
 *       actions using the <a>AutoScalingConfiguration</a> type.</p>
 */
export interface AutoScalingConfigurationSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of this auto scaling configuration.</p>
   */
  AutoScalingConfigurationArn?: string;

  /**
   * @public
   * <p>The customer-provided auto scaling configuration name. It can be used in multiple revisions of a configuration.</p>
   */
  AutoScalingConfigurationName?: string;

  /**
   * @public
   * <p>The revision of this auto scaling configuration. It's unique among all the active configurations (<code>"Status": "ACTIVE"</code>) with the same
   *         <code>AutoScalingConfigurationName</code>.</p>
   */
  AutoScalingConfigurationRevision?: number;

  /**
   * @public
   * <p>The current state of the auto scaling configuration. If the status of a configuration revision is <code>INACTIVE</code>, it was deleted and can't be
   *       used. Inactive configuration revisions are permanently removed some time after they are deleted.</p>
   */
  Status?: AutoScalingConfigurationStatus;

  /**
   * @public
   * <p>The time when the auto scaling configuration was created. It's in Unix time stamp format.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>Indicates if this auto scaling configuration has an App Runner service associated with it. A value of <code>true</code> indicates one or more services are
   *       associated. A value of <code>false</code> indicates no services are associated.</p>
   */
  HasAssociatedService?: boolean;

  /**
   * @public
   * <p>Indicates if this auto scaling configuration should be used as the default for a new App Runner service that does not have an
   *       auto scaling configuration ARN specified during creation. Each account can have only one
   *       default <code>AutoScalingConfiguration</code> per region. The default <code>AutoScalingConfiguration</code> can be any revision under
   *       the same <code>AutoScalingConfigurationName</code>.</p>
   */
  IsDefault?: boolean;
}

/**
 * @public
 * @enum
 */
export const ServiceStatus = {
  CREATE_FAILED: "CREATE_FAILED",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  OPERATION_IN_PROGRESS: "OPERATION_IN_PROGRESS",
  PAUSED: "PAUSED",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type ServiceStatus = (typeof ServiceStatus)[keyof typeof ServiceStatus];

/**
 * @public
 * <p>Describes an App Runner service. It can describe a service in any state, including deleted services.</p>
 *          <p>This type contains the full information about a service, including configuration details. It's returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html">CreateService</a>, <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html">DescribeService</a>, and <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html">DeleteService</a> actions. A subset of this
 *       information is returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListServices.html">ListServices</a> action using the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ServiceSummary.html">ServiceSummary</a> type.</p>
 */
export interface Service {
  /**
   * @public
   * <p>The customer-provided service name.</p>
   */
  ServiceName: string | undefined;

  /**
   * @public
   * <p>An ID that App Runner generated for this service. It's unique within the Amazon Web Services Region.</p>
   */
  ServiceId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of this service.</p>
   */
  ServiceArn: string | undefined;

  /**
   * @public
   * <p>A subdomain URL that App Runner generated for this service. You can use this URL to access your service web application.</p>
   */
  ServiceUrl?: string;

  /**
   * @public
   * <p>The time when the App Runner service was created. It's in the Unix time stamp format.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * @public
   * <p>The time when the App Runner service was last updated at. It's in the Unix time stamp format.</p>
   */
  UpdatedAt: Date | undefined;

  /**
   * @public
   * <p>The time when the App Runner service was deleted. It's in the Unix time stamp format.</p>
   */
  DeletedAt?: Date;

  /**
   * @public
   * <p>The current state of the App Runner service. These particular values mean the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code> – The service failed to create. The failed service isn't usable, and still counts towards your service quota. To
   *           troubleshoot this failure, read the failure events and logs, change any parameters that need to be fixed, and rebuild your service using
   *             <code>UpdateService</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_FAILED</code> – The service failed to delete and can't be successfully recovered. Retry the service deletion call to ensure
   *           that all related resources are removed.</p>
   *             </li>
   *          </ul>
   */
  Status: ServiceStatus | undefined;

  /**
   * @public
   * <p>The source deployed to the App Runner service. It can be a code or an image repository.</p>
   */
  SourceConfiguration: SourceConfiguration | undefined;

  /**
   * @public
   * <p>The runtime configuration of instances (scaling units) of this service.</p>
   */
  InstanceConfiguration: InstanceConfiguration | undefined;

  /**
   * @public
   * <p>The encryption key that App Runner uses to encrypt the service logs and the copy of the source repository that App Runner maintains for the service. It can be
   *       either a customer-provided encryption key or an Amazon Web Services managed key.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

  /**
   * @public
   * <p>The settings for the health check that App Runner performs to monitor the health of this service.</p>
   */
  HealthCheckConfiguration?: HealthCheckConfiguration;

  /**
   * @public
   * <p>Summary information for the App Runner automatic scaling configuration resource that's associated with this service.</p>
   */
  AutoScalingConfigurationSummary: AutoScalingConfigurationSummary | undefined;

  /**
   * @public
   * <p>Configuration settings related to network traffic of the web application that this service runs.</p>
   */
  NetworkConfiguration: NetworkConfiguration | undefined;

  /**
   * @public
   * <p>The observability configuration of this service.</p>
   */
  ObservabilityConfiguration?: ServiceObservabilityConfiguration;
}

/**
 * @public
 */
export interface CreateServiceResponse {
  /**
   * @public
   * <p>A description of the App Runner service that's created by this request.</p>
   */
  Service: Service | undefined;

  /**
   * @public
   * <p>The unique ID of the asynchronous operation that this request started. You can use it combined with the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListOperations.html">ListOperations</a> call to track the operation's progress.</p>
   */
  OperationId: string | undefined;
}

/**
 * @public
 */
export interface CreateVpcConnectorRequest {
  /**
   * @public
   * <p>A name for the VPC connector.</p>
   */
  VpcConnectorName: string | undefined;

  /**
   * @public
   * <p>A list of IDs of subnets that App Runner should use when it associates your service with a custom Amazon VPC. Specify IDs of subnets of a single
   *         Amazon VPC. App Runner determines the Amazon VPC from the subnets you specify.</p>
   *          <note>
   *             <p>
   *         App Runner currently only provides support for IPv4.
   *       </p>
   *          </note>
   */
  Subnets: string[] | undefined;

  /**
   * @public
   * <p>A list of IDs of security groups that App Runner should use for access to Amazon Web Services resources under the specified subnets. If not specified, App Runner uses the
   *       default security group of the Amazon VPC. The default security group allows all outbound traffic.</p>
   */
  SecurityGroups?: string[];

  /**
   * @public
   * <p>A list of metadata items that you can associate with your VPC connector resource. A tag is a key-value pair.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const VpcConnectorStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type VpcConnectorStatus = (typeof VpcConnectorStatus)[keyof typeof VpcConnectorStatus];

/**
 * @public
 * <p>Describes an App Runner VPC connector resource. A VPC connector describes the Amazon Virtual Private Cloud (Amazon VPC) that an App Runner service is
 *       associated with, and the subnets and security group that are used.</p>
 *          <p>Multiple revisions of a connector might have the same <code>Name</code> and different <code>Revision</code> values.</p>
 *          <note>
 *             <p>At this time, App Runner supports only one revision per name.</p>
 *          </note>
 */
export interface VpcConnector {
  /**
   * @public
   * <p>The customer-provided VPC connector name.</p>
   */
  VpcConnectorName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of this VPC connector.</p>
   */
  VpcConnectorArn?: string;

  /**
   * @public
   * <p>The revision of this VPC connector. It's unique among all the active connectors (<code>"Status": "ACTIVE"</code>) that share the same
   *       <code>Name</code>.</p>
   *          <note>
   *             <p>At this time, App Runner supports only one revision per name.</p>
   *          </note>
   */
  VpcConnectorRevision?: number;

  /**
   * @public
   * <p>A list of IDs of subnets that App Runner uses for your service. All IDs are of subnets of a single Amazon VPC.</p>
   */
  Subnets?: string[];

  /**
   * @public
   * <p>A list of IDs of security groups that App Runner uses for access to Amazon Web Services resources under the specified subnets. If not specified, App Runner uses the default
   *       security group of the Amazon VPC. The default security group allows all outbound traffic.</p>
   */
  SecurityGroups?: string[];

  /**
   * @public
   * <p>The current state of the VPC connector. If the status of a connector revision is <code>INACTIVE</code>, it was deleted and can't be
   *       used. Inactive connector revisions are permanently removed some time after they are deleted.</p>
   */
  Status?: VpcConnectorStatus;

  /**
   * @public
   * <p>The time when the VPC connector was created. It's in Unix time stamp format.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The time when the VPC connector was deleted. It's in Unix time stamp format.</p>
   */
  DeletedAt?: Date;
}

/**
 * @public
 */
export interface CreateVpcConnectorResponse {
  /**
   * @public
   * <p>A description of the App Runner VPC connector that's created by this request.</p>
   */
  VpcConnector: VpcConnector | undefined;
}

/**
 * @public
 * <p>The configuration of your VPC and the associated VPC endpoint. The VPC endpoint is an Amazon Web Services PrivateLink resource that allows access to your App Runner
 *       services from within an Amazon VPC.</p>
 */
export interface IngressVpcConfiguration {
  /**
   * @public
   * <p>The ID of the VPC that is used for the VPC endpoint.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The ID of the VPC endpoint that your App Runner service connects to.
   *     </p>
   */
  VpcEndpointId?: string;
}

/**
 * @public
 */
export interface CreateVpcIngressConnectionRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for this App Runner service that is used to create the VPC Ingress Connection resource.</p>
   */
  ServiceArn: string | undefined;

  /**
   * @public
   * <p>A name for the VPC Ingress Connection resource. It must be unique across all the active VPC Ingress Connections in your Amazon Web Services account in the Amazon Web Services Region.
   *     </p>
   */
  VpcIngressConnectionName: string | undefined;

  /**
   * @public
   * <p>Specifications for the customer’s Amazon VPC and the related Amazon Web Services PrivateLink VPC endpoint that are used to create the VPC Ingress Connection
   *       resource.</p>
   */
  IngressVpcConfiguration: IngressVpcConfiguration | undefined;

  /**
   * @public
   * <p>An optional list of metadata items that you can associate with the VPC Ingress Connection resource. A tag is a key-value pair.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const VpcIngressConnectionStatus = {
  AVAILABLE: "AVAILABLE",
  DELETED: "DELETED",
  FAILED_CREATION: "FAILED_CREATION",
  FAILED_DELETION: "FAILED_DELETION",
  FAILED_UPDATE: "FAILED_UPDATE",
  PENDING_CREATION: "PENDING_CREATION",
  PENDING_DELETION: "PENDING_DELETION",
  PENDING_UPDATE: "PENDING_UPDATE",
} as const;

/**
 * @public
 */
export type VpcIngressConnectionStatus = (typeof VpcIngressConnectionStatus)[keyof typeof VpcIngressConnectionStatus];

/**
 * @public
 * <p>The App Runner resource that specifies an App Runner endpoint for incoming traffic. It establishes a connection between a VPC interface endpoint and a App Runner
 *       service, to make your App Runner service accessible from only within an Amazon VPC.</p>
 */
export interface VpcIngressConnection {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the VPC Ingress Connection.
   *     </p>
   */
  VpcIngressConnectionArn?: string;

  /**
   * @public
   * <p>The customer-provided VPC Ingress Connection name.</p>
   */
  VpcIngressConnectionName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service associated with the VPC Ingress Connection.
   *     </p>
   */
  ServiceArn?: string;

  /**
   * @public
   * <p>The current status of the VPC Ingress Connection.
   *       The VPC Ingress Connection displays one of the following statuses: <code>AVAILABLE</code>, <code>PENDING_CREATION</code>, <code>PENDING_UPDATE</code>, <code>PENDING_DELETION</code>,<code>FAILED_CREATION</code>, <code>FAILED_UPDATE</code>, <code>FAILED_DELETION</code>, and <code>DELETED</code>..
   *     </p>
   */
  Status?: VpcIngressConnectionStatus;

  /**
   * @public
   * <p>The Account Id you use to create the VPC Ingress Connection resource.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The domain name associated with the VPC Ingress Connection resource.</p>
   */
  DomainName?: string;

  /**
   * @public
   * <p>Specifications for the customer’s VPC and related PrivateLink VPC endpoint that are used to associate with the VPC Ingress Connection resource.</p>
   */
  IngressVpcConfiguration?: IngressVpcConfiguration;

  /**
   * @public
   * <p>The time when the VPC Ingress Connection was created. It's in the Unix time stamp format.</p>
   *          <ul>
   *             <li>
   *                <p>
   *             Type: Timestamp
   *           </p>
   *             </li>
   *             <li>
   *                <p>
   *             Required: Yes
   *           </p>
   *             </li>
   *          </ul>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The time when the App Runner service was deleted. It's in the Unix time stamp format.</p>
   *          <ul>
   *             <li>
   *                <p>
   *           Type: Timestamp
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           Required: No
   *         </p>
   *             </li>
   *          </ul>
   */
  DeletedAt?: Date;
}

/**
 * @public
 */
export interface CreateVpcIngressConnectionResponse {
  /**
   * @public
   * <p>A description of the App Runner VPC Ingress Connection resource that's created by this request. </p>
   */
  VpcIngressConnection: VpcIngressConnection | undefined;
}

/**
 * @public
 */
export interface DeleteAutoScalingConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the App Runner auto scaling configuration that you want to delete.</p>
   *          <p>The ARN can be a full auto scaling configuration ARN, or a partial ARN ending with either <code>.../<i>name</i>
   *             </code> or
   *           <code>.../<i>name</i>/<i>revision</i>
   *             </code>. If a revision isn't specified, the latest active revision is deleted.</p>
   */
  AutoScalingConfigurationArn: string | undefined;

  /**
   * @public
   * <p>Set to <code>true</code> to delete all of the revisions associated with the <code>AutoScalingConfigurationArn</code> parameter value.</p>
   *          <p>When <code>DeleteAllRevisions</code> is set to <code>true</code>, the only valid value for the Amazon Resource Name (ARN) is a partial ARN ending
   *       with: <code>.../name</code>.</p>
   */
  DeleteAllRevisions?: boolean;
}

/**
 * @public
 */
export interface DeleteAutoScalingConfigurationResponse {
  /**
   * @public
   * <p>A description of the App Runner auto scaling configuration that this request just deleted.</p>
   */
  AutoScalingConfiguration: AutoScalingConfiguration | undefined;
}

/**
 * @public
 * <p>A resource doesn't exist for the specified Amazon Resource Name (ARN) in your Amazon Web Services account.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
 * @public
 */
export interface DeleteConnectionRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the App Runner connection that you want to delete.</p>
   */
  ConnectionArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionResponse {
  /**
   * @public
   * <p>A description of the App Runner connection that this request just deleted.</p>
   */
  Connection?: Connection;
}

/**
 * @public
 */
export interface DeleteObservabilityConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the App Runner observability configuration that you want to delete.</p>
   *          <p>The ARN can be a full observability configuration ARN, or a partial ARN ending with either <code>.../<i>name</i>
   *             </code> or
   *           <code>.../<i>name</i>/<i>revision</i>
   *             </code>. If a revision isn't specified, the latest active revision is deleted.</p>
   */
  ObservabilityConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteObservabilityConfigurationResponse {
  /**
   * @public
   * <p>A description of the App Runner observability configuration that this request just deleted.</p>
   */
  ObservabilityConfiguration: ObservabilityConfiguration | undefined;
}

/**
 * @public
 */
export interface DeleteServiceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the App Runner service that you want to delete.</p>
   */
  ServiceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceResponse {
  /**
   * @public
   * <p>A description of the App Runner service that this request just deleted.</p>
   */
  Service: Service | undefined;

  /**
   * @public
   * <p>The unique ID of the asynchronous operation that this request started. You can use it combined with the <a>ListOperations</a> call to track
   *       the operation's progress.</p>
   */
  OperationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcConnectorRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the App Runner VPC connector that you want to delete.</p>
   *          <p>The ARN must be a full VPC connector ARN.</p>
   */
  VpcConnectorArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcConnectorResponse {
  /**
   * @public
   * <p>A description of the App Runner VPC connector that this request just deleted.</p>
   */
  VpcConnector: VpcConnector | undefined;
}

/**
 * @public
 */
export interface DeleteVpcIngressConnectionRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the App Runner VPC Ingress Connection that you want to delete.</p>
   */
  VpcIngressConnectionArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcIngressConnectionResponse {
  /**
   * @public
   * <p>A description of the App Runner VPC Ingress Connection that this request just deleted.</p>
   */
  VpcIngressConnection: VpcIngressConnection | undefined;
}

/**
 * @public
 */
export interface DescribeAutoScalingConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the App Runner auto scaling configuration that you want a description for.</p>
   *          <p>The ARN can be a full auto scaling configuration ARN, or a partial ARN ending with either <code>.../<i>name</i>
   *             </code> or
   *           <code>.../<i>name</i>/<i>revision</i>
   *             </code>. If a revision isn't specified, the latest active revision is
   *       described.</p>
   */
  AutoScalingConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAutoScalingConfigurationResponse {
  /**
   * @public
   * <p>A full description of the App Runner auto scaling configuration that you specified in this request.</p>
   */
  AutoScalingConfiguration: AutoScalingConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeCustomDomainsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the App Runner service that you want associated custom domain names to be described for.</p>
   */
  ServiceArn: string | undefined;

  /**
   * @public
   * <p>A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be
   *       identical to the ones that are specified in the initial request.</p>
   *          <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results that each response (result page) can include. It's used for a paginated request.</p>
   *          <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeCustomDomainsResponse {
  /**
   * @public
   * <p>The App Runner subdomain of the App Runner service. The associated custom domain names are mapped to this target name.</p>
   */
  DNSTarget: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the App Runner service whose associated custom domain names you want to describe.</p>
   */
  ServiceArn: string | undefined;

  /**
   * @public
   * <p>A list of descriptions of custom domain names that are associated with the service. In a paginated request, the request returns up to
   *         <code>MaxResults</code> records per call.</p>
   */
  CustomDomains: CustomDomain[] | undefined;

  /**
   * @public
   * <p>DNS Target records for the custom domains of this Amazon VPC.
   *       </p>
   */
  VpcDNSTargets: VpcDNSTarget[] | undefined;

  /**
   * @public
   * <p>The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeObservabilityConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the App Runner observability configuration that you want a description for.</p>
   *          <p>The ARN can be a full observability configuration ARN, or a partial ARN ending with either <code>.../<i>name</i>
   *             </code> or
   *           <code>.../<i>name</i>/<i>revision</i>
   *             </code>. If a revision isn't specified, the latest active revision is
   *       described.</p>
   */
  ObservabilityConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeObservabilityConfigurationResponse {
  /**
   * @public
   * <p>A full description of the App Runner observability configuration that you specified in this request.</p>
   */
  ObservabilityConfiguration: ObservabilityConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeServiceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the App Runner service that you want a description for.</p>
   */
  ServiceArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeServiceResponse {
  /**
   * @public
   * <p>A full description of the App Runner service that you specified in this request.</p>
   */
  Service: Service | undefined;
}

/**
 * @public
 */
export interface DescribeVpcConnectorRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the App Runner VPC connector that you want a description for.</p>
   *          <p>The ARN must be a full VPC connector ARN.</p>
   */
  VpcConnectorArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcConnectorResponse {
  /**
   * @public
   * <p>A description of the App Runner VPC connector that you specified in this request.</p>
   */
  VpcConnector: VpcConnector | undefined;
}

/**
 * @public
 */
export interface DescribeVpcIngressConnectionRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the App Runner VPC Ingress Connection that you want a description for.</p>
   */
  VpcIngressConnectionArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcIngressConnectionResponse {
  /**
   * @public
   * <p>A description of the App Runner VPC Ingress Connection that you specified in this request.</p>
   */
  VpcIngressConnection: VpcIngressConnection | undefined;
}

/**
 * @public
 */
export interface DisassociateCustomDomainRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the App Runner service that you want to disassociate a custom domain name from.</p>
   */
  ServiceArn: string | undefined;

  /**
   * @public
   * <p>The domain name that you want to disassociate from the App Runner service.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface DisassociateCustomDomainResponse {
  /**
   * @public
   * <p>The App Runner subdomain of the App Runner service. The disassociated custom domain name was mapped to this target name.</p>
   */
  DNSTarget: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the App Runner service that a custom domain name is disassociated from.</p>
   */
  ServiceArn: string | undefined;

  /**
   * @public
   * <p>A description of the domain name that's being disassociated.</p>
   */
  CustomDomain: CustomDomain | undefined;

  /**
   * @public
   * <p>DNS Target records for the custom domains of this Amazon VPC.
   *       </p>
   */
  VpcDNSTargets: VpcDNSTarget[] | undefined;
}

/**
 * @public
 */
export interface ListAutoScalingConfigurationsRequest {
  /**
   * @public
   * <p>The name of the App Runner auto scaling configuration that you want to list. If specified, App Runner lists revisions that share this name. If not specified, App Runner
   *       returns revisions of all active configurations.</p>
   */
  AutoScalingConfigurationName?: string;

  /**
   * @public
   * <p>Set to <code>true</code> to list only the latest revision for each requested configuration name.</p>
   *          <p>Set to <code>false</code> to list all revisions for each requested configuration name.</p>
   *          <p>Default: <code>true</code>
   *          </p>
   */
  LatestOnly?: boolean;

  /**
   * @public
   * <p>The maximum number of results to include in each response (result page). It's used for a paginated request.</p>
   *          <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be
   *       identical to the ones that are specified in the initial request.</p>
   *          <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAutoScalingConfigurationsResponse {
  /**
   * @public
   * <p>A list of summary information records for auto scaling configurations. In a paginated request, the request returns up to <code>MaxResults</code>
   *       records for each call.</p>
   */
  AutoScalingConfigurationSummaryList: AutoScalingConfigurationSummary[] | undefined;

  /**
   * @public
   * <p>The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListConnectionsRequest {
  /**
   * @public
   * <p>If specified, only this connection is returned. If not specified, the result isn't filtered by name.</p>
   */
  ConnectionName?: string;

  /**
   * @public
   * <p>The maximum number of results to include in each response (result page). Used for a paginated request.</p>
   *          <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token from a previous result page. Used for a paginated request. The request retrieves the next result page. All other parameter values must be
   *       identical to the ones specified in the initial request.</p>
   *          <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Provides summary information about an App Runner connection resource.</p>
 */
export interface ConnectionSummary {
  /**
   * @public
   * <p>The customer-provided connection name.</p>
   */
  ConnectionName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of this connection.</p>
   */
  ConnectionArn?: string;

  /**
   * @public
   * <p>The source repository provider.</p>
   */
  ProviderType?: ProviderType;

  /**
   * @public
   * <p>The current state of the App Runner connection. When the state is <code>AVAILABLE</code>, you can use the connection to create an App Runner service.</p>
   */
  Status?: ConnectionStatus;

  /**
   * @public
   * <p>The App Runner connection creation time, expressed as a Unix time stamp.</p>
   */
  CreatedAt?: Date;
}

/**
 * @public
 */
export interface ListConnectionsResponse {
  /**
   * @public
   * <p>A list of summary information records for connections. In a paginated request, the request returns up to <code>MaxResults</code> records for each
   *       call.</p>
   */
  ConnectionSummaryList: ConnectionSummary[] | undefined;

  /**
   * @public
   * <p>The token that you can pass in a subsequent request to get the next result page. Returned in a paginated request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListObservabilityConfigurationsRequest {
  /**
   * @public
   * <p>The name of the App Runner observability configuration that you want to list. If specified, App Runner lists revisions that share this name. If not specified,
   *       App Runner returns revisions of all active configurations.</p>
   */
  ObservabilityConfigurationName?: string;

  /**
   * @public
   * <p>Set to <code>true</code> to list only the latest revision for each requested configuration name.</p>
   *          <p>Set to <code>false</code> to list all revisions for each requested configuration name.</p>
   *          <p>Default: <code>true</code>
   *          </p>
   */
  LatestOnly?: boolean;

  /**
   * @public
   * <p>The maximum number of results to include in each response (result page). It's used for a paginated request.</p>
   *          <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be
   *       identical to the ones that are specified in the initial request.</p>
   *          <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Provides summary information about an App Runner observability configuration resource.</p>
 *          <p>This type contains limited information about an observability configuration. It includes only identification information, without configuration
 *       details. It's returned by the <a>ListObservabilityConfigurations</a> action. Complete configuration information is returned by the <a>CreateObservabilityConfiguration</a>, <a>DescribeObservabilityConfiguration</a>, and <a>DeleteObservabilityConfiguration</a>
 *       actions using the <a>ObservabilityConfiguration</a> type.</p>
 */
export interface ObservabilityConfigurationSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of this observability configuration.</p>
   */
  ObservabilityConfigurationArn?: string;

  /**
   * @public
   * <p>The customer-provided observability configuration name. It can be used in multiple revisions of a configuration.</p>
   */
  ObservabilityConfigurationName?: string;

  /**
   * @public
   * <p>The revision of this observability configuration. It's unique among all the active configurations (<code>"Status": "ACTIVE"</code>) that share the
   *       same <code>ObservabilityConfigurationName</code>.</p>
   */
  ObservabilityConfigurationRevision?: number;
}

/**
 * @public
 */
export interface ListObservabilityConfigurationsResponse {
  /**
   * @public
   * <p>A list of summary information records for observability configurations. In a paginated request, the request returns up to <code>MaxResults</code>
   *       records for each call.</p>
   */
  ObservabilityConfigurationSummaryList: ObservabilityConfigurationSummary[] | undefined;

  /**
   * @public
   * <p>The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListOperationsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the App Runner service that you want a list of operations for.</p>
   */
  ServiceArn: string | undefined;

  /**
   * @public
   * <p>A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be
   *       identical to the ones specified in the initial request.</p>
   *          <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to include in each response (result page). It's used for a paginated request.</p>
   *          <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * @enum
 */
export const OperationStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  ROLLBACK_FAILED: "ROLLBACK_FAILED",
  ROLLBACK_IN_PROGRESS: "ROLLBACK_IN_PROGRESS",
  ROLLBACK_SUCCEEDED: "ROLLBACK_SUCCEEDED",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type OperationStatus = (typeof OperationStatus)[keyof typeof OperationStatus];

/**
 * @public
 * @enum
 */
export const OperationType = {
  CREATE_SERVICE: "CREATE_SERVICE",
  DELETE_SERVICE: "DELETE_SERVICE",
  PAUSE_SERVICE: "PAUSE_SERVICE",
  RESUME_SERVICE: "RESUME_SERVICE",
  START_DEPLOYMENT: "START_DEPLOYMENT",
  UPDATE_SERVICE: "UPDATE_SERVICE",
} as const;

/**
 * @public
 */
export type OperationType = (typeof OperationType)[keyof typeof OperationType];

/**
 * @public
 * <p>Provides summary information for an operation that occurred on an App Runner service.</p>
 */
export interface OperationSummary {
  /**
   * @public
   * <p>A unique ID of this operation. It's unique in the scope of the App Runner service.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The type of operation. It indicates a specific action that occured.</p>
   */
  Type?: OperationType;

  /**
   * @public
   * <p>The current state of the operation.</p>
   */
  Status?: OperationStatus;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that the operation acted on (for example, an App Runner service).</p>
   */
  TargetArn?: string;

  /**
   * @public
   * <p>The time when the operation started. It's in the Unix time stamp format.</p>
   */
  StartedAt?: Date;

  /**
   * @public
   * <p>The time when the operation ended. It's in the Unix time stamp format.</p>
   */
  EndedAt?: Date;

  /**
   * @public
   * <p>The time when the operation was last updated. It's in the Unix time stamp format.</p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 */
export interface ListOperationsResponse {
  /**
   * @public
   * <p>A list of operation summary information records. In a paginated request, the request returns up to <code>MaxResults</code> records for each
   *       call.</p>
   */
  OperationSummaryList?: OperationSummary[];

  /**
   * @public
   * <p>The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListServicesRequest {
  /**
   * @public
   * <p>A token from a previous result page. Used for a paginated request. The request retrieves the next result page. All other parameter values must be
   *       identical to the ones specified in the initial request.</p>
   *          <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to include in each response (result page). It's used for a paginated request.</p>
   *          <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Provides summary information for an App Runner service.</p>
 *          <p>This type contains limited information about a service. It doesn't include configuration details. It's returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListServices.html">ListServices</a> action. Complete service information is returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html">CreateService</a>, <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html">DescribeService</a>, and <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html">DeleteService</a> actions using the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_Service.html">Service</a> type.</p>
 */
export interface ServiceSummary {
  /**
   * @public
   * <p>The customer-provided service name.</p>
   */
  ServiceName?: string;

  /**
   * @public
   * <p>An ID that App Runner generated for this service. It's unique within the Amazon Web Services Region.</p>
   */
  ServiceId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of this service.</p>
   */
  ServiceArn?: string;

  /**
   * @public
   * <p>A subdomain URL that App Runner generated for this service. You can use this URL to access your service web application.</p>
   */
  ServiceUrl?: string;

  /**
   * @public
   * <p>The time when the App Runner service was created. It's in the Unix time stamp format.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The time when the App Runner service was last updated. It's in theUnix time stamp format.</p>
   */
  UpdatedAt?: Date;

  /**
   * @public
   * <p>The current state of the App Runner service. These particular values mean the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code> – The service failed to create. The failed service isn't usable, and still counts towards your service quota. To
   *           troubleshoot this failure, read the failure events and logs, change any parameters that need to be fixed, and rebuild your service using
   *             <code>UpdateService</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_FAILED</code> – The service failed to delete and can't be successfully recovered. Retry the service deletion call to ensure
   *           that all related resources are removed.</p>
   *             </li>
   *          </ul>
   */
  Status?: ServiceStatus;
}

/**
 * @public
 */
export interface ListServicesResponse {
  /**
   * @public
   * <p>A list of service summary information records. In a paginated request, the request returns up to <code>MaxResults</code> records for each call.</p>
   */
  ServiceSummaryList: ServiceSummary[] | undefined;

  /**
   * @public
   * <p>The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListServicesForAutoScalingConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the App Runner auto scaling configuration that you want to list the services for.</p>
   *          <p>The ARN can be a full auto scaling configuration ARN, or a partial ARN ending with either <code>.../<i>name</i>
   *             </code> or
   *       <code>.../<i>name</i>/<i>revision</i>
   *             </code>. If a revision isn't specified, the latest active revision is used.</p>
   */
  AutoScalingConfigurationArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to include in each response (result page). It's used for a paginated request.</p>
   *          <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be
   *       identical to the ones specified in the initial request.</p>
   *          <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListServicesForAutoScalingConfigurationResponse {
  /**
   * @public
   * <p>A list of service ARN records. In a paginated request, the request returns up to <code>MaxResults</code> records for each call.</p>
   */
  ServiceArnList: string[] | undefined;

  /**
   * @public
   * <p>The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that a tag list is requested for.</p>
   *          <p>It must be the ARN of an App Runner resource.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>A list of the tag key-value pairs that are associated with the resource.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface ListVpcConnectorsRequest {
  /**
   * @public
   * <p>The maximum number of results to include in each response (result page). It's used for a paginated request.</p>
   *          <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be
   *       identical to the ones that are specified in the initial request.</p>
   *          <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListVpcConnectorsResponse {
  /**
   * @public
   * <p>A list of information records for VPC connectors. In a paginated request, the request returns up to <code>MaxResults</code> records for each
   *       call.</p>
   */
  VpcConnectors: VpcConnector[] | undefined;

  /**
   * @public
   * <p>The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Returns a list of VPC Ingress Connections based on the filter provided. It can return either <code>ServiceArn</code> or <code>VpcEndpointId</code>, or both.</p>
 */
export interface ListVpcIngressConnectionsFilter {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a service to filter by.
   *     </p>
   */
  ServiceArn?: string;

  /**
   * @public
   * <p>The ID of a VPC Endpoint to filter by.
   *     </p>
   */
  VpcEndpointId?: string;
}

/**
 * @public
 */
export interface ListVpcIngressConnectionsRequest {
  /**
   * @public
   * <p>The VPC Ingress Connections to be listed based on either the Service Arn or Vpc Endpoint Id, or both.</p>
   */
  Filter?: ListVpcIngressConnectionsFilter;

  /**
   * @public
   * <p>The maximum number of results to include in each response (result page). It's used for a paginated request.</p>
   *          <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be
   *       identical to the ones that are specified in the initial request.</p>
   *          <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Provides summary information about an VPC Ingress Connection, which includes its VPC Ingress Connection ARN and its associated Service ARN.</p>
 */
export interface VpcIngressConnectionSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the VPC Ingress Connection.
   *     </p>
   */
  VpcIngressConnectionArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service associated with the VPC Ingress Connection.
   *     </p>
   */
  ServiceArn?: string;
}

/**
 * @public
 */
export interface ListVpcIngressConnectionsResponse {
  /**
   * @public
   * <p>A list of summary information records for VPC Ingress Connections. In a paginated request, the request returns up to <code>MaxResults</code> records for each call.</p>
   */
  VpcIngressConnectionSummaryList: VpcIngressConnectionSummary[] | undefined;

  /**
   * @public
   * <p>The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface PauseServiceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the App Runner service that you want to pause.</p>
   */
  ServiceArn: string | undefined;
}

/**
 * @public
 */
export interface PauseServiceResponse {
  /**
   * @public
   * <p>A description of the App Runner service that this request just paused.</p>
   */
  Service: Service | undefined;

  /**
   * @public
   * <p>The unique ID of the asynchronous operation that this request started. You can use it combined with the <a>ListOperations</a> call to track
   *       the operation's progress.</p>
   */
  OperationId?: string;
}

/**
 * @public
 */
export interface ResumeServiceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the App Runner service that you want to resume.</p>
   */
  ServiceArn: string | undefined;
}

/**
 * @public
 */
export interface ResumeServiceResponse {
  /**
   * @public
   * <p>A description of the App Runner service that this request just resumed.</p>
   */
  Service: Service | undefined;

  /**
   * @public
   * <p>The unique ID of the asynchronous operation that this request started. You can use it combined with the <a>ListOperations</a> call to track
   *       the operation's progress.</p>
   */
  OperationId?: string;
}

/**
 * @public
 */
export interface StartDeploymentRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the App Runner service that you want to manually deploy to.</p>
   */
  ServiceArn: string | undefined;
}

/**
 * @public
 */
export interface StartDeploymentResponse {
  /**
   * @public
   * <p>The unique ID of the asynchronous operation that this request started. You can use it combined with the <a>ListOperations</a> call to track
   *       the operation's progress.</p>
   */
  OperationId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that you want to update tags for.</p>
   *          <p>It must be the ARN of an App Runner resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>A list of tag key-value pairs to add or update. If a key is new to the resource, the tag is added with the provided value. If a key is already
   *       associated with the resource, the value of the tag is updated.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that you want to remove tags from.</p>
   *          <p>It must be the ARN of an App Runner resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>A list of tag keys that you want to remove.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateDefaultAutoScalingConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the App Runner auto scaling configuration that you want to set as the default.</p>
   *          <p>The ARN can be a full auto scaling configuration ARN, or a partial ARN ending with either <code>.../<i>name</i>
   *             </code> or
   *           <code>.../<i>name</i>/<i>revision</i>
   *             </code>. If a revision isn't specified, the latest active revision is set as the
   *       default.</p>
   */
  AutoScalingConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateDefaultAutoScalingConfigurationResponse {
  /**
   * @public
   * <p>A description of the App Runner auto scaling configuration that was set as default.</p>
   */
  AutoScalingConfiguration: AutoScalingConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateServiceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the App Runner service that you want to update.</p>
   */
  ServiceArn: string | undefined;

  /**
   * @public
   * <p>The source configuration to apply to the App Runner service.</p>
   *          <p>You can change the configuration of the code or image repository that the service uses. However, you can't switch from code to image or the other way
   *       around. This means that you must provide the same structure member of <code>SourceConfiguration</code> that you originally included when you created the
   *       service. Specifically, you can include either <code>CodeRepository</code> or <code>ImageRepository</code>. To update the source configuration, set the
   *       values to members of the structure that you include.</p>
   */
  SourceConfiguration?: SourceConfiguration;

  /**
   * @public
   * <p>The runtime configuration to apply to instances (scaling units) of your service.</p>
   */
  InstanceConfiguration?: InstanceConfiguration;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an App Runner automatic scaling configuration resource that you want to associate with the App Runner service.</p>
   */
  AutoScalingConfigurationArn?: string;

  /**
   * @public
   * <p>The settings for the health check that App Runner performs to monitor the health of the App Runner service.</p>
   */
  HealthCheckConfiguration?: HealthCheckConfiguration;

  /**
   * @public
   * <p>Configuration settings related to network traffic of the web application that the App Runner service runs.</p>
   */
  NetworkConfiguration?: NetworkConfiguration;

  /**
   * @public
   * <p>The observability configuration of your service.</p>
   */
  ObservabilityConfiguration?: ServiceObservabilityConfiguration;
}

/**
 * @public
 */
export interface UpdateServiceResponse {
  /**
   * @public
   * <p>A description of the App Runner service updated by this request. All configuration values in the returned <code>Service</code> structure reflect
   *       configuration changes that are being applied by this request.</p>
   */
  Service: Service | undefined;

  /**
   * @public
   * <p>The unique ID of the asynchronous operation that this request started. You can use it combined with the <a>ListOperations</a> call to track
   *       the operation's progress.</p>
   */
  OperationId: string | undefined;
}

/**
 * @public
 */
export interface UpdateVpcIngressConnectionRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (Arn) for the App Runner VPC Ingress Connection resource that you want to update.</p>
   */
  VpcIngressConnectionArn: string | undefined;

  /**
   * @public
   * <p>Specifications for the customer’s Amazon VPC and the related Amazon Web Services PrivateLink VPC endpoint that are used to update the VPC Ingress Connection
   *       resource.</p>
   */
  IngressVpcConfiguration: IngressVpcConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateVpcIngressConnectionResponse {
  /**
   * @public
   * <p>A description of the App Runner VPC Ingress Connection resource that's updated by this request.</p>
   */
  VpcIngressConnection: VpcIngressConnection | undefined;
}

/**
 * @internal
 */
export const CodeConfigurationValuesFilterSensitiveLog = (obj: CodeConfigurationValues): any => ({
  ...obj,
  ...(obj.BuildCommand && { BuildCommand: SENSITIVE_STRING }),
  ...(obj.StartCommand && { StartCommand: SENSITIVE_STRING }),
  ...(obj.RuntimeEnvironmentVariables && { RuntimeEnvironmentVariables: SENSITIVE_STRING }),
  ...(obj.RuntimeEnvironmentSecrets && { RuntimeEnvironmentSecrets: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CodeConfigurationFilterSensitiveLog = (obj: CodeConfiguration): any => ({
  ...obj,
  ...(obj.CodeConfigurationValues && {
    CodeConfigurationValues: CodeConfigurationValuesFilterSensitiveLog(obj.CodeConfigurationValues),
  }),
});

/**
 * @internal
 */
export const CodeRepositoryFilterSensitiveLog = (obj: CodeRepository): any => ({
  ...obj,
  ...(obj.CodeConfiguration && { CodeConfiguration: CodeConfigurationFilterSensitiveLog(obj.CodeConfiguration) }),
});

/**
 * @internal
 */
export const ImageConfigurationFilterSensitiveLog = (obj: ImageConfiguration): any => ({
  ...obj,
  ...(obj.RuntimeEnvironmentVariables && { RuntimeEnvironmentVariables: SENSITIVE_STRING }),
  ...(obj.StartCommand && { StartCommand: SENSITIVE_STRING }),
  ...(obj.RuntimeEnvironmentSecrets && { RuntimeEnvironmentSecrets: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ImageRepositoryFilterSensitiveLog = (obj: ImageRepository): any => ({
  ...obj,
  ...(obj.ImageConfiguration && { ImageConfiguration: ImageConfigurationFilterSensitiveLog(obj.ImageConfiguration) }),
});

/**
 * @internal
 */
export const SourceConfigurationFilterSensitiveLog = (obj: SourceConfiguration): any => ({
  ...obj,
  ...(obj.CodeRepository && { CodeRepository: CodeRepositoryFilterSensitiveLog(obj.CodeRepository) }),
  ...(obj.ImageRepository && { ImageRepository: ImageRepositoryFilterSensitiveLog(obj.ImageRepository) }),
});

/**
 * @internal
 */
export const CreateServiceRequestFilterSensitiveLog = (obj: CreateServiceRequest): any => ({
  ...obj,
  ...(obj.SourceConfiguration && {
    SourceConfiguration: SourceConfigurationFilterSensitiveLog(obj.SourceConfiguration),
  }),
});

/**
 * @internal
 */
export const ServiceFilterSensitiveLog = (obj: Service): any => ({
  ...obj,
  ...(obj.SourceConfiguration && {
    SourceConfiguration: SourceConfigurationFilterSensitiveLog(obj.SourceConfiguration),
  }),
});

/**
 * @internal
 */
export const CreateServiceResponseFilterSensitiveLog = (obj: CreateServiceResponse): any => ({
  ...obj,
  ...(obj.Service && { Service: ServiceFilterSensitiveLog(obj.Service) }),
});

/**
 * @internal
 */
export const DeleteServiceResponseFilterSensitiveLog = (obj: DeleteServiceResponse): any => ({
  ...obj,
  ...(obj.Service && { Service: ServiceFilterSensitiveLog(obj.Service) }),
});

/**
 * @internal
 */
export const DescribeServiceResponseFilterSensitiveLog = (obj: DescribeServiceResponse): any => ({
  ...obj,
  ...(obj.Service && { Service: ServiceFilterSensitiveLog(obj.Service) }),
});

/**
 * @internal
 */
export const PauseServiceResponseFilterSensitiveLog = (obj: PauseServiceResponse): any => ({
  ...obj,
  ...(obj.Service && { Service: ServiceFilterSensitiveLog(obj.Service) }),
});

/**
 * @internal
 */
export const ResumeServiceResponseFilterSensitiveLog = (obj: ResumeServiceResponse): any => ({
  ...obj,
  ...(obj.Service && { Service: ServiceFilterSensitiveLog(obj.Service) }),
});

/**
 * @internal
 */
export const UpdateServiceRequestFilterSensitiveLog = (obj: UpdateServiceRequest): any => ({
  ...obj,
  ...(obj.SourceConfiguration && {
    SourceConfiguration: SourceConfigurationFilterSensitiveLog(obj.SourceConfiguration),
  }),
});

/**
 * @internal
 */
export const UpdateServiceResponseFilterSensitiveLog = (obj: UpdateServiceResponse): any => ({
  ...obj,
  ...(obj.Service && { Service: ServiceFilterSensitiveLog(obj.Service) }),
});
