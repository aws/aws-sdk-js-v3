// smithy-typescript generated code
import type {
  AutoScalingConfigurationStatus,
  CertificateValidationRecordStatus,
  ConfigurationSource,
  ConnectionStatus,
  CustomDomainAssociationStatus,
  EgressType,
  HealthCheckProtocol,
  ImageRepositoryType,
  IpAddressType,
  ObservabilityConfigurationStatus,
  OperationStatus,
  OperationType,
  ProviderType,
  Runtime,
  ServiceStatus,
  SourceCodeVersionType,
  TracingVendor,
  VpcConnectorStatus,
  VpcIngressConnectionStatus,
} from "./enums";

/**
 * @public
 */
export interface AssociateCustomDomainRequest {
  /**
   * The Amazon Resource Name (ARN) of the App Runner service that you want to associate a custom domain name with.
   *
   * @public
   */
  ServiceArn: string | undefined;

  /**
   * A custom domain endpoint to associate. Specify a root domain (for example, `example.com`), a subdomain (for example, `login.example.com` or `admin.login.example.com`), or a wildcard (for example, `*.example.com`).
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * Set to `true` to associate the subdomain `www.DomainName` with the App Runner service in addition to the base domain.
   *
   * Default: `true`
   *
   * @public
   */
  EnableWWWSubdomain?: boolean | undefined;
}

/**
 * Describes a certificate CNAME record to add to your DNS. For more information, see [AssociateCustomDomain](https://docs.aws.amazon.com/apprunner/latest/api/API_AssociateCustomDomain.html).
 *
 * @public
 */
export interface CertificateValidationRecord {
  /**
   * The certificate CNAME record name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The record type, always `CNAME`.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The certificate CNAME record value.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The current state of the certificate CNAME record validation. It should change to `SUCCESS` after App Runner completes validation with your DNS.
   *
   * @public
   */
  Status?: CertificateValidationRecordStatus | undefined;
}

/**
 * Describes a custom domain that's associated with an App Runner service.
 *
 * @public
 */
export interface CustomDomain {
  /**
   * An associated custom domain endpoint. It can be a root domain (for example, `example.com`), a subdomain (for example, `login.example.com` or `admin.login.example.com`), or a wildcard (for example, `*.example.com`).
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * When `true`, the subdomain `www.DomainName` is associated with the App Runner service in addition to the base domain.
   *
   * @public
   */
  EnableWWWSubdomain: boolean | undefined;

  /**
   * A list of certificate CNAME records that's used for this domain name.
   *
   * @public
   */
  CertificateValidationRecords?: CertificateValidationRecord[] | undefined;

  /**
   * The current state of the domain name association.
   *
   * @public
   */
  Status: CustomDomainAssociationStatus | undefined;
}

/**
 * DNS Target record for a custom domain of this Amazon VPC.
 *
 * @public
 */
export interface VpcDNSTarget {
  /**
   * The Amazon Resource Name (ARN) of the VPC Ingress Connection that is associated with your service.
   *
   * @public
   */
  VpcIngressConnectionArn?: string | undefined;

  /**
   * The ID of the Amazon VPC that is associated with the custom domain name of the target DNS.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The domain name of your target DNS that is associated with the Amazon VPC.
   *
   * @public
   */
  DomainName?: string | undefined;
}

/**
 * @public
 */
export interface AssociateCustomDomainResponse {
  /**
   * The App Runner subdomain of the App Runner service. The custom domain name is mapped to this target name.
   *
   * @public
   */
  DNSTarget: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the App Runner service with which a custom domain name is associated.
   *
   * @public
   */
  ServiceArn: string | undefined;

  /**
   * A description of the domain name that's being associated.
   *
   * @public
   */
  CustomDomain: CustomDomain | undefined;

  /**
   * DNS Target records for the custom domains of this Amazon VPC.
   *
   * @public
   */
  VpcDNSTargets: VpcDNSTarget[] | undefined;
}

/**
 * Describes a tag that is applied to an App Runner resource. A tag is a metadata item consisting of a key-value pair.
 *
 * @public
 */
export interface Tag {
  /**
   * The key of the tag.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value of the tag.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreateAutoScalingConfigurationRequest {
  /**
   * A name for the auto scaling configuration. When you use it for the first time in an Amazon Web Services Region, App Runner creates revision number `1` of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration.
   *
   * > **Note:**
   * >
   * > Prior to the release of [Auto scale configuration enhancements](https://docs.aws.amazon.com/apprunner/latest/relnotes/release-2023-09-22-auto-scale-config.html), the name `DefaultConfiguration` was reserved.
   * >
   * > This restriction is no longer in place. You can now manage `DefaultConfiguration` the same way you manage your custom auto scaling configurations. This means you can do the following with the `DefaultConfiguration` that App Runner provides:
   * >
   * > - Create new revisions of the `DefaultConfiguration`.
   * > - Delete the revisions of the `DefaultConfiguration`.
   * > - Delete the auto scaling configuration for which the App Runner `DefaultConfiguration` was created.
   * > - If you delete the auto scaling configuration you can create another custom auto scaling configuration with the same `DefaultConfiguration` name. The original `DefaultConfiguration` resource provided by App Runner remains in your account unless you make changes to it.
   *
   * @public
   */
  AutoScalingConfigurationName: string | undefined;

  /**
   * The maximum number of concurrent requests that you want an instance to process. If the number of concurrent requests exceeds this limit, App Runner scales up your service.
   *
   * Default: `100`
   *
   * @public
   */
  MaxConcurrency?: number | undefined;

  /**
   * The minimum number of instances that App Runner provisions for your service. The service always has at least `MinSize` provisioned instances. Some of them actively serve traffic. The rest of them (provisioned and inactive instances) are a cost-effective compute capacity reserve and are ready to be quickly activated. You pay for memory usage of all the provisioned instances. You pay for CPU usage of only the active subset.
   *
   * App Runner temporarily doubles the number of provisioned instances during deployments, to maintain the same capacity for both old and new code.
   *
   * Default: `1`
   *
   * @public
   */
  MinSize?: number | undefined;

  /**
   * The maximum number of instances that your service scales up to. At most `MaxSize` instances actively serve traffic for your service.
   *
   * Default: `25`
   *
   * @public
   */
  MaxSize?: number | undefined;

  /**
   * A list of metadata items that you can associate with your auto scaling configuration resource. A tag is a key-value pair.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Describes an App Runner automatic scaling configuration resource.
 *
 * A higher `MinSize` increases the spread of your App Runner service over more Availability Zones in the Amazon Web Services Region. The tradeoff is a higher minimal cost.
 *
 * A lower `MaxSize` controls your cost. The tradeoff is lower responsiveness during peak demand.
 *
 * Multiple revisions of a configuration might have the same `AutoScalingConfigurationName` and different `AutoScalingConfigurationRevision` values.
 *
 * @public
 */
export interface AutoScalingConfiguration {
  /**
   * The Amazon Resource Name (ARN) of this auto scaling configuration.
   *
   * @public
   */
  AutoScalingConfigurationArn?: string | undefined;

  /**
   * The customer-provided auto scaling configuration name. It can be used in multiple revisions of a configuration.
   *
   * @public
   */
  AutoScalingConfigurationName?: string | undefined;

  /**
   * The revision of this auto scaling configuration. It's unique among all the active configurations (`"Status": "ACTIVE"`) that share the same `AutoScalingConfigurationName`.
   *
   * @public
   */
  AutoScalingConfigurationRevision?: number | undefined;

  /**
   * It's set to `true` for the configuration with the highest `Revision` among all configurations that share the same `AutoScalingConfigurationName`. It's set to `false` otherwise.
   *
   * @public
   */
  Latest?: boolean | undefined;

  /**
   * The current state of the auto scaling configuration. If the status of a configuration revision is `INACTIVE`, it was deleted and can't be used. Inactive configuration revisions are permanently removed some time after they are deleted.
   *
   * @public
   */
  Status?: AutoScalingConfigurationStatus | undefined;

  /**
   * The maximum number of concurrent requests that an instance processes. If the number of concurrent requests exceeds this limit, App Runner scales the service up.
   *
   * @public
   */
  MaxConcurrency?: number | undefined;

  /**
   * The minimum number of instances that App Runner provisions for a service. The service always has at least `MinSize` provisioned instances. Some of them actively serve traffic. The rest of them (provisioned and inactive instances) are a cost-effective compute capacity reserve and are ready to be quickly activated. You pay for memory usage of all the provisioned instances. You pay for CPU usage of only the active subset.
   *
   * App Runner temporarily doubles the number of provisioned instances during deployments, to maintain the same capacity for both old and new code.
   *
   * @public
   */
  MinSize?: number | undefined;

  /**
   * The maximum number of instances that a service scales up to. At most `MaxSize` instances actively serve traffic for your service.
   *
   * @public
   */
  MaxSize?: number | undefined;

  /**
   * The time when the auto scaling configuration was created. It's in Unix time stamp format.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time when the auto scaling configuration was deleted. It's in Unix time stamp format.
   *
   * @public
   */
  DeletedAt?: Date | undefined;

  /**
   * Indicates if this auto scaling configuration has an App Runner service associated with it. A value of `true` indicates one or more services are associated. A value of `false` indicates no services are associated.
   *
   * @public
   */
  HasAssociatedService?: boolean | undefined;

  /**
   * Indicates if this auto scaling configuration should be used as the default for a new App Runner service that does not have an auto scaling configuration ARN specified during creation. Each account can have only one default `AutoScalingConfiguration` per region. The default `AutoScalingConfiguration` can be any revision under the same `AutoScalingConfigurationName`.
   *
   * @public
   */
  IsDefault?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateAutoScalingConfigurationResponse {
  /**
   * A description of the App Runner auto scaling configuration that's created by this request.
   *
   * @public
   */
  AutoScalingConfiguration: AutoScalingConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateConnectionRequest {
  /**
   * A name for the new connection. It must be unique across all App Runner connections for the Amazon Web Services account in the Amazon Web Services Region.
   *
   * @public
   */
  ConnectionName: string | undefined;

  /**
   * The source repository provider.
   *
   * @public
   */
  ProviderType: ProviderType | undefined;

  /**
   * A list of metadata items that you can associate with your connection resource. A tag is a key-value pair.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Describes an App Runner connection resource.
 *
 * @public
 */
export interface Connection {
  /**
   * The customer-provided connection name.
   *
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of this connection.
   *
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * The source repository provider.
   *
   * @public
   */
  ProviderType?: ProviderType | undefined;

  /**
   * The current state of the App Runner connection. When the state is `AVAILABLE`, you can use the connection to create an App Runner service.
   *
   * @public
   */
  Status?: ConnectionStatus | undefined;

  /**
   * The App Runner connection creation time, expressed as a Unix time stamp.
   *
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateConnectionResponse {
  /**
   * A description of the App Runner connection that's created by this request.
   *
   * @public
   */
  Connection: Connection | undefined;
}

/**
 * Describes the configuration of the tracing feature within an App Runner observability configuration.
 *
 * @public
 */
export interface TraceConfiguration {
  /**
   * The implementation provider chosen for tracing App Runner services.
   *
   * @public
   */
  Vendor: TracingVendor | undefined;
}

/**
 * @public
 */
export interface CreateObservabilityConfigurationRequest {
  /**
   * A name for the observability configuration. When you use it for the first time in an Amazon Web Services Region, App Runner creates revision number `1` of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration.
   *
   * > **Note:**
   * >
   * > The name `DefaultConfiguration` is reserved. You can't use it to create a new observability configuration, and you can't create a revision of it.
   * >
   * > When you want to use your own observability configuration for your App Runner service, *create a configuration with a different name*, and then provide it when you create or update your service.
   *
   * @public
   */
  ObservabilityConfigurationName: string | undefined;

  /**
   * The configuration of the tracing feature within this observability configuration. If you don't specify it, App Runner doesn't enable tracing.
   *
   * @public
   */
  TraceConfiguration?: TraceConfiguration | undefined;

  /**
   * A list of metadata items that you can associate with your observability configuration resource. A tag is a key-value pair.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Describes an App Runner observability configuration resource. Multiple revisions of a configuration have the same `ObservabilityConfigurationName` and different `ObservabilityConfigurationRevision` values.
 *
 * The resource is designed to configure multiple features (currently one feature, tracing). This type contains optional members that describe the configuration of these features (currently one member, `TraceConfiguration`). If a feature member isn't specified, the feature isn't enabled.
 *
 * @public
 */
export interface ObservabilityConfiguration {
  /**
   * The Amazon Resource Name (ARN) of this observability configuration.
   *
   * @public
   */
  ObservabilityConfigurationArn?: string | undefined;

  /**
   * The customer-provided observability configuration name. It can be used in multiple revisions of a configuration.
   *
   * @public
   */
  ObservabilityConfigurationName?: string | undefined;

  /**
   * The configuration of the tracing feature within this observability configuration. If not specified, tracing isn't enabled.
   *
   * @public
   */
  TraceConfiguration?: TraceConfiguration | undefined;

  /**
   * The revision of this observability configuration. It's unique among all the active configurations (`"Status": "ACTIVE"`) that share the same `ObservabilityConfigurationName`.
   *
   * @public
   */
  ObservabilityConfigurationRevision?: number | undefined;

  /**
   * It's set to `true` for the configuration with the highest `Revision` among all configurations that share the same `ObservabilityConfigurationName`. It's set to `false` otherwise.
   *
   * @public
   */
  Latest?: boolean | undefined;

  /**
   * The current state of the observability configuration. If the status of a configuration revision is `INACTIVE`, it was deleted and can't be used. Inactive configuration revisions are permanently removed some time after they are deleted.
   *
   * @public
   */
  Status?: ObservabilityConfigurationStatus | undefined;

  /**
   * The time when the observability configuration was created. It's in Unix time stamp format.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time when the observability configuration was deleted. It's in Unix time stamp format.
   *
   * @public
   */
  DeletedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateObservabilityConfigurationResponse {
  /**
   * A description of the App Runner observability configuration that's created by this request.
   *
   * @public
   */
  ObservabilityConfiguration: ObservabilityConfiguration | undefined;
}

/**
 * Describes a custom encryption key that App Runner uses to encrypt copies of the source repository and service logs.
 *
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * The ARN of the KMS key that's used for encryption.
   *
   * @public
   */
  KmsKey: string | undefined;
}

/**
 * Describes the settings for the health check that App Runner performs to monitor the health of a service.
 *
 * @public
 */
export interface HealthCheckConfiguration {
  /**
   * The IP protocol that App Runner uses to perform health checks for your service.
   *
   * If you set `Protocol` to `HTTP`, App Runner sends health check requests to the HTTP path specified by `Path`.
   *
   * Default: `TCP`
   *
   * @public
   */
  Protocol?: HealthCheckProtocol | undefined;

  /**
   * The URL that health check requests are sent to.
   *
   * `Path` is only applicable when you set `Protocol` to `HTTP`.
   *
   * Default: `"/"`
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The time interval, in seconds, between health checks.
   *
   * Default: `5`
   *
   * @public
   */
  Interval?: number | undefined;

  /**
   * The time, in seconds, to wait for a health check response before deciding it failed.
   *
   * Default: `2`
   *
   * @public
   */
  Timeout?: number | undefined;

  /**
   * The number of consecutive checks that must succeed before App Runner decides that the service is healthy.
   *
   * Default: `1`
   *
   * @public
   */
  HealthyThreshold?: number | undefined;

  /**
   * The number of consecutive checks that must fail before App Runner decides that the service is unhealthy.
   *
   * Default: `5`
   *
   * @public
   */
  UnhealthyThreshold?: number | undefined;
}

/**
 * Describes the runtime configuration of an App Runner service instance (scaling unit).
 *
 * @public
 */
export interface InstanceConfiguration {
  /**
   * The number of CPU units reserved for each instance of your App Runner service.
   *
   * Default: `1 vCPU`
   *
   * @public
   */
  Cpu?: string | undefined;

  /**
   * The amount of memory, in MB or GB, reserved for each instance of your App Runner service.
   *
   * Default: `2 GB`
   *
   * @public
   */
  Memory?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that provides permissions to your App Runner service. These are permissions that your code needs when it calls any Amazon Web Services APIs.
   *
   * @public
   */
  InstanceRoleArn?: string | undefined;
}

/**
 * Describes configuration settings related to outbound network traffic of an App Runner service.
 *
 * @public
 */
export interface EgressConfiguration {
  /**
   * The type of egress configuration.
   *
   * Set to `DEFAULT` for access to resources hosted on public networks.
   *
   * Set to `VPC` to associate your service to a custom VPC specified by `VpcConnectorArn`.
   *
   * @public
   */
  EgressType?: EgressType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the App Runner VPC connector that you want to associate with your App Runner service. Only valid when `EgressType = VPC`.
   *
   * @public
   */
  VpcConnectorArn?: string | undefined;
}

/**
 * Network configuration settings for inbound network traffic.
 *
 * @public
 */
export interface IngressConfiguration {
  /**
   * Specifies whether your App Runner service is publicly accessible. To make the service publicly accessible set it to `True`. To make the service privately accessible, from only within an Amazon VPC set it to `False`.
   *
   * @public
   */
  IsPubliclyAccessible?: boolean | undefined;
}

/**
 * Describes configuration settings related to network traffic of an App Runner service. Consists of embedded objects for each configurable network feature.
 *
 * @public
 */
export interface NetworkConfiguration {
  /**
   * Network configuration settings for outbound message traffic.
   *
   * @public
   */
  EgressConfiguration?: EgressConfiguration | undefined;

  /**
   * Network configuration settings for inbound message traffic.
   *
   * @public
   */
  IngressConfiguration?: IngressConfiguration | undefined;

  /**
   * App Runner provides you with the option to choose between *IPv4* and *dual stack* (IPv4 and IPv6). This is an optional parameter. If you do not specify an `IpAddressType`, it defaults to select IPv4.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;
}

/**
 * Describes the observability configuration of an App Runner service. These are additional observability features, like tracing, that you choose to enable. They're configured in a separate resource that you associate with your service.
 *
 * @public
 */
export interface ServiceObservabilityConfiguration {
  /**
   * When `true`, an observability configuration resource is associated with the service, and an `ObservabilityConfigurationArn` is specified.
   *
   * @public
   */
  ObservabilityEnabled: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the observability configuration that is associated with the service. Specified only when `ObservabilityEnabled` is `true`.
   *
   * Specify an ARN with a name and a revision number to associate that revision. For example: `arn:aws:apprunner:us-east-1:123456789012:observabilityconfiguration/xray-tracing/3`
   *
   * Specify just the name to associate the latest revision. For example: `arn:aws:apprunner:us-east-1:123456789012:observabilityconfiguration/xray-tracing`
   *
   * @public
   */
  ObservabilityConfigurationArn?: string | undefined;
}

/**
 * Describes resources needed to authenticate access to some source repositories. The specific resource depends on the repository provider.
 *
 * @public
 */
export interface AuthenticationConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the App Runner connection that enables the App Runner service to connect to a source repository. It's required for GitHub code repositories.
   *
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants the App Runner service access to a source repository. It's required for ECR image repositories (but not for ECR Public repositories).
   *
   * @public
   */
  AccessRoleArn?: string | undefined;
}

/**
 * Describes the basic configuration needed for building and running an App Runner service. This type doesn't support the full set of possible configuration options. Fur full configuration capabilities, use a `apprunner.yaml` file in the source code repository.
 *
 * @public
 */
export interface CodeConfigurationValues {
  /**
   * A runtime environment type for building and running an App Runner service. It represents a programming language runtime.
   *
   * @public
   */
  Runtime: Runtime | undefined;

  /**
   * The command App Runner runs to build your application.
   *
   * @public
   */
  BuildCommand?: string | undefined;

  /**
   * The command App Runner runs to start your application.
   *
   * @public
   */
  StartCommand?: string | undefined;

  /**
   * The port that your application listens to in the container.
   *
   * Default: `8080`
   *
   * @public
   */
  Port?: string | undefined;

  /**
   * The environment variables that are available to your running App Runner service. An array of key-value pairs.
   *
   * @public
   */
  RuntimeEnvironmentVariables?: Record<string, string> | undefined;

  /**
   * An array of key-value pairs representing the secrets and parameters that get referenced to your service as an environment variable. The supported values are either the full Amazon Resource Name (ARN) of the Secrets Manager secret or the full ARN of the parameter in the Amazon Web Services Systems Manager Parameter Store.
   *
   * > **Note:**
   * >
   * > - If the Amazon Web Services Systems Manager Parameter Store parameter exists in the same Amazon Web Services Region as the service that you're launching, you can use either the full ARN or name of the secret. If the parameter exists in a different Region, then the full ARN must be specified.
   * > - Currently, cross account referencing of Amazon Web Services Systems Manager Parameter Store parameter is not supported.
   *
   * @public
   */
  RuntimeEnvironmentSecrets?: Record<string, string> | undefined;
}

/**
 * Describes the configuration that App Runner uses to build and run an App Runner service from a source code repository.
 *
 * @public
 */
export interface CodeConfiguration {
  /**
   * The source of the App Runner configuration. Values are interpreted as follows:
   *
   * - `REPOSITORY` – App Runner reads configuration values from the `apprunner.yaml` file in the source code repository and ignores `CodeConfigurationValues`.
   * - `API` – App Runner uses configuration values provided in `CodeConfigurationValues` and ignores the `apprunner.yaml` file in the source code repository.
   *
   * @public
   */
  ConfigurationSource: ConfigurationSource | undefined;

  /**
   * The basic configuration for building and running the App Runner service. Use it to quickly launch an App Runner service without providing a `apprunner.yaml` file in the source code repository (or ignoring the file if it exists).
   *
   * @public
   */
  CodeConfigurationValues?: CodeConfigurationValues | undefined;
}

/**
 * Identifies a version of code that App Runner refers to within a source code repository.
 *
 * @public
 */
export interface SourceCodeVersion {
  /**
   * The type of version identifier.
   *
   * For a git-based repository, branches represent versions.
   *
   * @public
   */
  Type: SourceCodeVersionType | undefined;

  /**
   * A source code version.
   *
   * For a git-based repository, a branch name maps to a specific version. App Runner uses the most recent commit to the branch.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Describes a source code repository.
 *
 * @public
 */
export interface CodeRepository {
  /**
   * The location of the repository that contains the source code.
   *
   * @public
   */
  RepositoryUrl: string | undefined;

  /**
   * The version that should be used within the source code repository.
   *
   * @public
   */
  SourceCodeVersion: SourceCodeVersion | undefined;

  /**
   * Configuration for building and running the service from a source code repository.
   *
   * > **Note:** `CodeConfiguration` is required only for `CreateService` request.
   *
   * @public
   */
  CodeConfiguration?: CodeConfiguration | undefined;

  /**
   * The path of the directory that stores source code and configuration files. The build and start commands also execute from here. The path is absolute from root and, if not specified, defaults to the repository root.
   *
   * @public
   */
  SourceDirectory?: string | undefined;
}

/**
 * Describes the configuration that App Runner uses to run an App Runner service using an image pulled from a source image repository.
 *
 * @public
 */
export interface ImageConfiguration {
  /**
   * Environment variables that are available to your running App Runner service. An array of key-value pairs.
   *
   * @public
   */
  RuntimeEnvironmentVariables?: Record<string, string> | undefined;

  /**
   * An optional command that App Runner runs to start the application in the source image. If specified, this command overrides the Docker image’s default start command.
   *
   * @public
   */
  StartCommand?: string | undefined;

  /**
   * The port that your application listens to in the container.
   *
   * Default: `8080`
   *
   * @public
   */
  Port?: string | undefined;

  /**
   * An array of key-value pairs representing the secrets and parameters that get referenced to your service as an environment variable. The supported values are either the full Amazon Resource Name (ARN) of the Secrets Manager secret or the full ARN of the parameter in the Amazon Web Services Systems Manager Parameter Store.
   *
   * > **Note:**
   * >
   * > - If the Amazon Web Services Systems Manager Parameter Store parameter exists in the same Amazon Web Services Region as the service that you're launching, you can use either the full ARN or name of the secret. If the parameter exists in a different Region, then the full ARN must be specified.
   * > - Currently, cross account referencing of Amazon Web Services Systems Manager Parameter Store parameter is not supported.
   *
   * @public
   */
  RuntimeEnvironmentSecrets?: Record<string, string> | undefined;
}

/**
 * Describes a source image repository.
 *
 * @public
 */
export interface ImageRepository {
  /**
   * The identifier of an image.
   *
   * For an image in Amazon Elastic Container Registry (Amazon ECR), this is an image name. For the image name format, see [Pulling an image](https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html) in the *Amazon ECR User Guide*.
   *
   * @public
   */
  ImageIdentifier: string | undefined;

  /**
   * Configuration for running the identified image.
   *
   * @public
   */
  ImageConfiguration?: ImageConfiguration | undefined;

  /**
   * The type of the image repository. This reflects the repository provider and whether the repository is private or public.
   *
   * @public
   */
  ImageRepositoryType: ImageRepositoryType | undefined;
}

/**
 * Describes the source deployed to an App Runner service. It can be a code or an image repository.
 *
 * @public
 */
export interface SourceConfiguration {
  /**
   * The description of a source code repository.
   *
   * You must provide either this member or `ImageRepository` (but not both).
   *
   * @public
   */
  CodeRepository?: CodeRepository | undefined;

  /**
   * The description of a source image repository.
   *
   * You must provide either this member or `CodeRepository` (but not both).
   *
   * @public
   */
  ImageRepository?: ImageRepository | undefined;

  /**
   * If `true`, continuous integration from the source repository is enabled for the App Runner service. Each repository change (including any source code commit or new image version) starts a deployment.
   *
   * Default: App Runner sets to `false` for a source image that uses an ECR Public repository or an ECR repository that's in an Amazon Web Services account other than the one that the service is in. App Runner sets to `true` in all other cases (which currently include a source code repository or a source image using a same-account ECR repository).
   *
   * @public
   */
  AutoDeploymentsEnabled?: boolean | undefined;

  /**
   * Describes the resources that are needed to authenticate access to some source repositories.
   *
   * @public
   */
  AuthenticationConfiguration?: AuthenticationConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateServiceRequest {
  /**
   * A name for the App Runner service. It must be unique across all the running App Runner services in your Amazon Web Services account in the Amazon Web Services Region.
   *
   * @public
   */
  ServiceName: string | undefined;

  /**
   * The source to deploy to the App Runner service. It can be a code or an image repository.
   *
   * @public
   */
  SourceConfiguration: SourceConfiguration | undefined;

  /**
   * The runtime configuration of instances (scaling units) of your service.
   *
   * @public
   */
  InstanceConfiguration?: InstanceConfiguration | undefined;

  /**
   * An optional list of metadata items that you can associate with the App Runner service resource. A tag is a key-value pair.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * An optional custom encryption key that App Runner uses to encrypt the copy of your source repository that it maintains and your service logs. By default, App Runner uses an Amazon Web Services managed key.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * The settings for the health check that App Runner performs to monitor the health of the App Runner service.
   *
   * @public
   */
  HealthCheckConfiguration?: HealthCheckConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of an App Runner automatic scaling configuration resource that you want to associate with your service. If not provided, App Runner associates the latest revision of a default auto scaling configuration.
   *
   * Specify an ARN with a name and a revision number to associate that revision. For example: `arn:aws:apprunner:us-east-1:123456789012:autoscalingconfiguration/high-availability/3`
   *
   * Specify just the name to associate the latest revision. For example: `arn:aws:apprunner:us-east-1:123456789012:autoscalingconfiguration/high-availability`
   *
   * @public
   */
  AutoScalingConfigurationArn?: string | undefined;

  /**
   * Configuration settings related to network traffic of the web application that the App Runner service runs.
   *
   * @public
   */
  NetworkConfiguration?: NetworkConfiguration | undefined;

  /**
   * The observability configuration of your service.
   *
   * @public
   */
  ObservabilityConfiguration?: ServiceObservabilityConfiguration | undefined;
}

/**
 * Provides summary information about an App Runner automatic scaling configuration resource.
 *
 * This type contains limited information about an auto scaling configuration. It includes only identification information, without configuration details. It's returned by the ListAutoScalingConfigurations action. Complete configuration information is returned by the CreateAutoScalingConfiguration, DescribeAutoScalingConfiguration, and DeleteAutoScalingConfiguration actions using the AutoScalingConfiguration type.
 *
 * @public
 */
export interface AutoScalingConfigurationSummary {
  /**
   * The Amazon Resource Name (ARN) of this auto scaling configuration.
   *
   * @public
   */
  AutoScalingConfigurationArn?: string | undefined;

  /**
   * The customer-provided auto scaling configuration name. It can be used in multiple revisions of a configuration.
   *
   * @public
   */
  AutoScalingConfigurationName?: string | undefined;

  /**
   * The revision of this auto scaling configuration. It's unique among all the active configurations (`"Status": "ACTIVE"`) with the same `AutoScalingConfigurationName`.
   *
   * @public
   */
  AutoScalingConfigurationRevision?: number | undefined;

  /**
   * The current state of the auto scaling configuration. If the status of a configuration revision is `INACTIVE`, it was deleted and can't be used. Inactive configuration revisions are permanently removed some time after they are deleted.
   *
   * @public
   */
  Status?: AutoScalingConfigurationStatus | undefined;

  /**
   * The time when the auto scaling configuration was created. It's in Unix time stamp format.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * Indicates if this auto scaling configuration has an App Runner service associated with it. A value of `true` indicates one or more services are associated. A value of `false` indicates no services are associated.
   *
   * @public
   */
  HasAssociatedService?: boolean | undefined;

  /**
   * Indicates if this auto scaling configuration should be used as the default for a new App Runner service that does not have an auto scaling configuration ARN specified during creation. Each account can have only one default `AutoScalingConfiguration` per region. The default `AutoScalingConfiguration` can be any revision under the same `AutoScalingConfigurationName`.
   *
   * @public
   */
  IsDefault?: boolean | undefined;
}

/**
 * Describes an App Runner service. It can describe a service in any state, including deleted services.
 *
 * This type contains the full information about a service, including configuration details. It's returned by the [CreateService](https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html), [DescribeService](https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html), and [DeleteService](https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html) actions. A subset of this information is returned by the [ListServices](https://docs.aws.amazon.com/apprunner/latest/api/API_ListServices.html) action using the [ServiceSummary](https://docs.aws.amazon.com/apprunner/latest/api/API_ServiceSummary.html) type.
 *
 * @public
 */
export interface Service {
  /**
   * The customer-provided service name.
   *
   * @public
   */
  ServiceName: string | undefined;

  /**
   * An ID that App Runner generated for this service. It's unique within the Amazon Web Services Region.
   *
   * @public
   */
  ServiceId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of this service.
   *
   * @public
   */
  ServiceArn: string | undefined;

  /**
   * A subdomain URL that App Runner generated for this service. You can use this URL to access your service web application.
   *
   * @public
   */
  ServiceUrl?: string | undefined;

  /**
   * The time when the App Runner service was created. It's in the Unix time stamp format.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The time when the App Runner service was last updated at. It's in the Unix time stamp format.
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * The time when the App Runner service was deleted. It's in the Unix time stamp format.
   *
   * @public
   */
  DeletedAt?: Date | undefined;

  /**
   * The current state of the App Runner service. These particular values mean the following.
   *
   * - `CREATE_FAILED` – The service failed to create. The failed service isn't usable, and still counts towards your service quota. To troubleshoot this failure, read the failure events and logs, change any parameters that need to be fixed, and rebuild your service using `UpdateService`.
   * - `DELETE_FAILED` – The service failed to delete and can't be successfully recovered. Retry the service deletion call to ensure that all related resources are removed.
   *
   * @public
   */
  Status: ServiceStatus | undefined;

  /**
   * The source deployed to the App Runner service. It can be a code or an image repository.
   *
   * @public
   */
  SourceConfiguration: SourceConfiguration | undefined;

  /**
   * The runtime configuration of instances (scaling units) of this service.
   *
   * @public
   */
  InstanceConfiguration: InstanceConfiguration | undefined;

  /**
   * The encryption key that App Runner uses to encrypt the service logs and the copy of the source repository that App Runner maintains for the service. It can be either a customer-provided encryption key or an Amazon Web Services managed key.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * The settings for the health check that App Runner performs to monitor the health of this service.
   *
   * @public
   */
  HealthCheckConfiguration?: HealthCheckConfiguration | undefined;

  /**
   * Summary information for the App Runner automatic scaling configuration resource that's associated with this service.
   *
   * @public
   */
  AutoScalingConfigurationSummary: AutoScalingConfigurationSummary | undefined;

  /**
   * Configuration settings related to network traffic of the web application that this service runs.
   *
   * @public
   */
  NetworkConfiguration: NetworkConfiguration | undefined;

  /**
   * The observability configuration of this service.
   *
   * @public
   */
  ObservabilityConfiguration?: ServiceObservabilityConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateServiceResponse {
  /**
   * A description of the App Runner service that's created by this request.
   *
   * @public
   */
  Service: Service | undefined;

  /**
   * The unique ID of the asynchronous operation that this request started. You can use it combined with the [ListOperations](https://docs.aws.amazon.com/apprunner/latest/api/API_ListOperations.html) call to track the operation's progress.
   *
   * @public
   */
  OperationId: string | undefined;
}

/**
 * @public
 */
export interface CreateVpcConnectorRequest {
  /**
   * A name for the VPC connector.
   *
   * @public
   */
  VpcConnectorName: string | undefined;

  /**
   * A list of IDs of subnets that App Runner should use when it associates your service with a custom Amazon VPC. Specify IDs of subnets of a single Amazon VPC. App Runner determines the Amazon VPC from the subnets you specify.
   *
   * > **Note:** App Runner only supports subnets of IP address type *IPv4* and *dual stack* (IPv4 and IPv6).
   *
   * @public
   */
  Subnets: string[] | undefined;

  /**
   * A list of IDs of security groups that App Runner should use for access to Amazon Web Services resources under the specified subnets. If not specified, App Runner uses the default security group of the Amazon VPC. The default security group allows all outbound traffic.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * A list of metadata items that you can associate with your VPC connector resource. A tag is a key-value pair.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Describes an App Runner VPC connector resource. A VPC connector describes the Amazon Virtual Private Cloud (Amazon VPC) that an App Runner service is associated with, and the subnets and security group that are used.
 *
 * Multiple revisions of a connector might have the same `Name` and different `Revision` values.
 *
 * > **Note:** At this time, App Runner supports only one revision per name.
 *
 * @public
 */
export interface VpcConnector {
  /**
   * The customer-provided VPC connector name.
   *
   * @public
   */
  VpcConnectorName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of this VPC connector.
   *
   * @public
   */
  VpcConnectorArn?: string | undefined;

  /**
   * The revision of this VPC connector. It's unique among all the active connectors (`"Status": "ACTIVE"`) that share the same `Name`.
   *
   * > **Note:** At this time, App Runner supports only one revision per name.
   *
   * @public
   */
  VpcConnectorRevision?: number | undefined;

  /**
   * A list of IDs of subnets that App Runner uses for your service. All IDs are of subnets of a single Amazon VPC.
   *
   * @public
   */
  Subnets?: string[] | undefined;

  /**
   * A list of IDs of security groups that App Runner uses for access to Amazon Web Services resources under the specified subnets. If not specified, App Runner uses the default security group of the Amazon VPC. The default security group allows all outbound traffic.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * The current state of the VPC connector. If the status of a connector revision is `INACTIVE`, it was deleted and can't be used. Inactive connector revisions are permanently removed some time after they are deleted.
   *
   * @public
   */
  Status?: VpcConnectorStatus | undefined;

  /**
   * The time when the VPC connector was created. It's in Unix time stamp format.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time when the VPC connector was deleted. It's in Unix time stamp format.
   *
   * @public
   */
  DeletedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateVpcConnectorResponse {
  /**
   * A description of the App Runner VPC connector that's created by this request.
   *
   * @public
   */
  VpcConnector: VpcConnector | undefined;
}

/**
 * The configuration of your VPC and the associated VPC endpoint. The VPC endpoint is an Amazon Web Services PrivateLink resource that allows access to your App Runner services from within an Amazon VPC.
 *
 * @public
 */
export interface IngressVpcConfiguration {
  /**
   * The ID of the VPC that is used for the VPC endpoint.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The ID of the VPC endpoint that your App Runner service connects to.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;
}

/**
 * @public
 */
export interface CreateVpcIngressConnectionRequest {
  /**
   * The Amazon Resource Name (ARN) for this App Runner service that is used to create the VPC Ingress Connection resource.
   *
   * @public
   */
  ServiceArn: string | undefined;

  /**
   * A name for the VPC Ingress Connection resource. It must be unique across all the active VPC Ingress Connections in your Amazon Web Services account in the Amazon Web Services Region.
   *
   * @public
   */
  VpcIngressConnectionName: string | undefined;

  /**
   * Specifications for the customer’s Amazon VPC and the related Amazon Web Services PrivateLink VPC endpoint that are used to create the VPC Ingress Connection resource.
   *
   * @public
   */
  IngressVpcConfiguration: IngressVpcConfiguration | undefined;

  /**
   * An optional list of metadata items that you can associate with the VPC Ingress Connection resource. A tag is a key-value pair.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * The App Runner resource that specifies an App Runner endpoint for incoming traffic. It establishes a connection between a VPC interface endpoint and a App Runner service, to make your App Runner service accessible from only within an Amazon VPC.
 *
 * @public
 */
export interface VpcIngressConnection {
  /**
   * The Amazon Resource Name (ARN) of the VPC Ingress Connection.
   *
   * @public
   */
  VpcIngressConnectionArn?: string | undefined;

  /**
   * The customer-provided VPC Ingress Connection name.
   *
   * @public
   */
  VpcIngressConnectionName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service associated with the VPC Ingress Connection.
   *
   * @public
   */
  ServiceArn?: string | undefined;

  /**
   * The current status of the VPC Ingress Connection. The VPC Ingress Connection displays one of the following statuses: `AVAILABLE`, `PENDING_CREATION`, `PENDING_UPDATE`, `PENDING_DELETION`,`FAILED_CREATION`, `FAILED_UPDATE`, `FAILED_DELETION`, and `DELETED`..
   *
   * @public
   */
  Status?: VpcIngressConnectionStatus | undefined;

  /**
   * The Account Id you use to create the VPC Ingress Connection resource.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The domain name associated with the VPC Ingress Connection resource.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * Specifications for the customer’s VPC and related PrivateLink VPC endpoint that are used to associate with the VPC Ingress Connection resource.
   *
   * @public
   */
  IngressVpcConfiguration?: IngressVpcConfiguration | undefined;

  /**
   * The time when the VPC Ingress Connection was created. It's in the Unix time stamp format.
   *
   * - Type: Timestamp
   * - Required: Yes
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time when the App Runner service was deleted. It's in the Unix time stamp format.
   *
   * - Type: Timestamp
   * - Required: No
   *
   * @public
   */
  DeletedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateVpcIngressConnectionResponse {
  /**
   * A description of the App Runner VPC Ingress Connection resource that's created by this request.
   *
   * @public
   */
  VpcIngressConnection: VpcIngressConnection | undefined;
}

/**
 * @public
 */
export interface DeleteAutoScalingConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the App Runner auto scaling configuration that you want to delete.
   *
   * The ARN can be a full auto scaling configuration ARN, or a partial ARN ending with either `.../name` or `.../name/revision`. If a revision isn't specified, the latest active revision is deleted.
   *
   * @public
   */
  AutoScalingConfigurationArn: string | undefined;

  /**
   * Set to `true` to delete all of the revisions associated with the `AutoScalingConfigurationArn` parameter value.
   *
   * When `DeleteAllRevisions` is set to `true`, the only valid value for the Amazon Resource Name (ARN) is a partial ARN ending with: `.../name`.
   *
   * @public
   */
  DeleteAllRevisions?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteAutoScalingConfigurationResponse {
  /**
   * A description of the App Runner auto scaling configuration that this request just deleted.
   *
   * @public
   */
  AutoScalingConfiguration: AutoScalingConfiguration | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionRequest {
  /**
   * The Amazon Resource Name (ARN) of the App Runner connection that you want to delete.
   *
   * @public
   */
  ConnectionArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionResponse {
  /**
   * A description of the App Runner connection that this request just deleted.
   *
   * @public
   */
  Connection?: Connection | undefined;
}

/**
 * @public
 */
export interface DeleteObservabilityConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the App Runner observability configuration that you want to delete.
   *
   * The ARN can be a full observability configuration ARN, or a partial ARN ending with either `.../name` or `.../name/revision`. If a revision isn't specified, the latest active revision is deleted.
   *
   * @public
   */
  ObservabilityConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteObservabilityConfigurationResponse {
  /**
   * A description of the App Runner observability configuration that this request just deleted.
   *
   * @public
   */
  ObservabilityConfiguration: ObservabilityConfiguration | undefined;
}

/**
 * @public
 */
export interface DeleteServiceRequest {
  /**
   * The Amazon Resource Name (ARN) of the App Runner service that you want to delete.
   *
   * @public
   */
  ServiceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceResponse {
  /**
   * A description of the App Runner service that this request just deleted.
   *
   * @public
   */
  Service: Service | undefined;

  /**
   * The unique ID of the asynchronous operation that this request started. You can use it combined with the ListOperations call to track the operation's progress.
   *
   * @public
   */
  OperationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcConnectorRequest {
  /**
   * The Amazon Resource Name (ARN) of the App Runner VPC connector that you want to delete.
   *
   * The ARN must be a full VPC connector ARN.
   *
   * @public
   */
  VpcConnectorArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcConnectorResponse {
  /**
   * A description of the App Runner VPC connector that this request just deleted.
   *
   * @public
   */
  VpcConnector: VpcConnector | undefined;
}

/**
 * @public
 */
export interface DeleteVpcIngressConnectionRequest {
  /**
   * The Amazon Resource Name (ARN) of the App Runner VPC Ingress Connection that you want to delete.
   *
   * @public
   */
  VpcIngressConnectionArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcIngressConnectionResponse {
  /**
   * A description of the App Runner VPC Ingress Connection that this request just deleted.
   *
   * @public
   */
  VpcIngressConnection: VpcIngressConnection | undefined;
}

/**
 * @public
 */
export interface DescribeAutoScalingConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the App Runner auto scaling configuration that you want a description for.
   *
   * The ARN can be a full auto scaling configuration ARN, or a partial ARN ending with either `.../name` or `.../name/revision`. If a revision isn't specified, the latest active revision is described.
   *
   * @public
   */
  AutoScalingConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAutoScalingConfigurationResponse {
  /**
   * A full description of the App Runner auto scaling configuration that you specified in this request.
   *
   * @public
   */
  AutoScalingConfiguration: AutoScalingConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeCustomDomainsRequest {
  /**
   * The Amazon Resource Name (ARN) of the App Runner service that you want associated custom domain names to be described for.
   *
   * @public
   */
  ServiceArn: string | undefined;

  /**
   * A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be identical to the ones that are specified in the initial request.
   *
   * If you don't specify `NextToken`, the request retrieves the first result page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results that each response (result page) can include. It's used for a paginated request.
   *
   * If you don't specify `MaxResults`, the request retrieves all available results in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeCustomDomainsResponse {
  /**
   * The App Runner subdomain of the App Runner service. The associated custom domain names are mapped to this target name.
   *
   * @public
   */
  DNSTarget: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the App Runner service whose associated custom domain names you want to describe.
   *
   * @public
   */
  ServiceArn: string | undefined;

  /**
   * A list of descriptions of custom domain names that are associated with the service. In a paginated request, the request returns up to `MaxResults` records per call.
   *
   * @public
   */
  CustomDomains: CustomDomain[] | undefined;

  /**
   * DNS Target records for the custom domains of this Amazon VPC.
   *
   * @public
   */
  VpcDNSTargets: VpcDNSTarget[] | undefined;

  /**
   * The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeObservabilityConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the App Runner observability configuration that you want a description for.
   *
   * The ARN can be a full observability configuration ARN, or a partial ARN ending with either `.../name` or `.../name/revision`. If a revision isn't specified, the latest active revision is described.
   *
   * @public
   */
  ObservabilityConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeObservabilityConfigurationResponse {
  /**
   * A full description of the App Runner observability configuration that you specified in this request.
   *
   * @public
   */
  ObservabilityConfiguration: ObservabilityConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeServiceRequest {
  /**
   * The Amazon Resource Name (ARN) of the App Runner service that you want a description for.
   *
   * @public
   */
  ServiceArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeServiceResponse {
  /**
   * A full description of the App Runner service that you specified in this request.
   *
   * @public
   */
  Service: Service | undefined;
}

/**
 * @public
 */
export interface DescribeVpcConnectorRequest {
  /**
   * The Amazon Resource Name (ARN) of the App Runner VPC connector that you want a description for.
   *
   * The ARN must be a full VPC connector ARN.
   *
   * @public
   */
  VpcConnectorArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcConnectorResponse {
  /**
   * A description of the App Runner VPC connector that you specified in this request.
   *
   * @public
   */
  VpcConnector: VpcConnector | undefined;
}

/**
 * @public
 */
export interface DescribeVpcIngressConnectionRequest {
  /**
   * The Amazon Resource Name (ARN) of the App Runner VPC Ingress Connection that you want a description for.
   *
   * @public
   */
  VpcIngressConnectionArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcIngressConnectionResponse {
  /**
   * A description of the App Runner VPC Ingress Connection that you specified in this request.
   *
   * @public
   */
  VpcIngressConnection: VpcIngressConnection | undefined;
}

/**
 * @public
 */
export interface DisassociateCustomDomainRequest {
  /**
   * The Amazon Resource Name (ARN) of the App Runner service that you want to disassociate a custom domain name from.
   *
   * @public
   */
  ServiceArn: string | undefined;

  /**
   * The domain name that you want to disassociate from the App Runner service.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface DisassociateCustomDomainResponse {
  /**
   * The App Runner subdomain of the App Runner service. The disassociated custom domain name was mapped to this target name.
   *
   * @public
   */
  DNSTarget: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the App Runner service that a custom domain name is disassociated from.
   *
   * @public
   */
  ServiceArn: string | undefined;

  /**
   * A description of the domain name that's being disassociated.
   *
   * @public
   */
  CustomDomain: CustomDomain | undefined;

  /**
   * DNS Target records for the custom domains of this Amazon VPC.
   *
   * @public
   */
  VpcDNSTargets: VpcDNSTarget[] | undefined;
}

/**
 * @public
 */
export interface ListAutoScalingConfigurationsRequest {
  /**
   * The name of the App Runner auto scaling configuration that you want to list. If specified, App Runner lists revisions that share this name. If not specified, App Runner returns revisions of all active configurations.
   *
   * @public
   */
  AutoScalingConfigurationName?: string | undefined;

  /**
   * Set to `true` to list only the latest revision for each requested configuration name.
   *
   * Set to `false` to list all revisions for each requested configuration name.
   *
   * Default: `true`
   *
   * @public
   */
  LatestOnly?: boolean | undefined;

  /**
   * The maximum number of results to include in each response (result page). It's used for a paginated request.
   *
   * If you don't specify `MaxResults`, the request retrieves all available results in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be identical to the ones that are specified in the initial request.
   *
   * If you don't specify `NextToken`, the request retrieves the first result page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutoScalingConfigurationsResponse {
  /**
   * A list of summary information records for auto scaling configurations. In a paginated request, the request returns up to `MaxResults` records for each call.
   *
   * @public
   */
  AutoScalingConfigurationSummaryList: AutoScalingConfigurationSummary[] | undefined;

  /**
   * The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectionsRequest {
  /**
   * If specified, only this connection is returned. If not specified, the result isn't filtered by name.
   *
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * The maximum number of results to include in each response (result page). Used for a paginated request.
   *
   * If you don't specify `MaxResults`, the request retrieves all available results in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token from a previous result page. Used for a paginated request. The request retrieves the next result page. All other parameter values must be identical to the ones specified in the initial request.
   *
   * If you don't specify `NextToken`, the request retrieves the first result page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Provides summary information about an App Runner connection resource.
 *
 * @public
 */
export interface ConnectionSummary {
  /**
   * The customer-provided connection name.
   *
   * @public
   */
  ConnectionName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of this connection.
   *
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * The source repository provider.
   *
   * @public
   */
  ProviderType?: ProviderType | undefined;

  /**
   * The current state of the App Runner connection. When the state is `AVAILABLE`, you can use the connection to create an App Runner service.
   *
   * @public
   */
  Status?: ConnectionStatus | undefined;

  /**
   * The App Runner connection creation time, expressed as a Unix time stamp.
   *
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListConnectionsResponse {
  /**
   * A list of summary information records for connections. In a paginated request, the request returns up to `MaxResults` records for each call.
   *
   * @public
   */
  ConnectionSummaryList: ConnectionSummary[] | undefined;

  /**
   * The token that you can pass in a subsequent request to get the next result page. Returned in a paginated request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListObservabilityConfigurationsRequest {
  /**
   * The name of the App Runner observability configuration that you want to list. If specified, App Runner lists revisions that share this name. If not specified, App Runner returns revisions of all active configurations.
   *
   * @public
   */
  ObservabilityConfigurationName?: string | undefined;

  /**
   * Set to `true` to list only the latest revision for each requested configuration name.
   *
   * Set to `false` to list all revisions for each requested configuration name.
   *
   * Default: `true`
   *
   * @public
   */
  LatestOnly?: boolean | undefined;

  /**
   * The maximum number of results to include in each response (result page). It's used for a paginated request.
   *
   * If you don't specify `MaxResults`, the request retrieves all available results in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be identical to the ones that are specified in the initial request.
   *
   * If you don't specify `NextToken`, the request retrieves the first result page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Provides summary information about an App Runner observability configuration resource.
 *
 * This type contains limited information about an observability configuration. It includes only identification information, without configuration details. It's returned by the ListObservabilityConfigurations action. Complete configuration information is returned by the CreateObservabilityConfiguration, DescribeObservabilityConfiguration, and DeleteObservabilityConfiguration actions using the ObservabilityConfiguration type.
 *
 * @public
 */
export interface ObservabilityConfigurationSummary {
  /**
   * The Amazon Resource Name (ARN) of this observability configuration.
   *
   * @public
   */
  ObservabilityConfigurationArn?: string | undefined;

  /**
   * The customer-provided observability configuration name. It can be used in multiple revisions of a configuration.
   *
   * @public
   */
  ObservabilityConfigurationName?: string | undefined;

  /**
   * The revision of this observability configuration. It's unique among all the active configurations (`"Status": "ACTIVE"`) that share the same `ObservabilityConfigurationName`.
   *
   * @public
   */
  ObservabilityConfigurationRevision?: number | undefined;
}

/**
 * @public
 */
export interface ListObservabilityConfigurationsResponse {
  /**
   * A list of summary information records for observability configurations. In a paginated request, the request returns up to `MaxResults` records for each call.
   *
   * @public
   */
  ObservabilityConfigurationSummaryList: ObservabilityConfigurationSummary[] | undefined;

  /**
   * The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOperationsRequest {
  /**
   * The Amazon Resource Name (ARN) of the App Runner service that you want a list of operations for.
   *
   * @public
   */
  ServiceArn: string | undefined;

  /**
   * A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be identical to the ones specified in the initial request.
   *
   * If you don't specify `NextToken`, the request retrieves the first result page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to include in each response (result page). It's used for a paginated request.
   *
   * If you don't specify `MaxResults`, the request retrieves all available results in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Provides summary information for an operation that occurred on an App Runner service.
 *
 * @public
 */
export interface OperationSummary {
  /**
   * A unique ID of this operation. It's unique in the scope of the App Runner service.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The type of operation. It indicates a specific action that occured.
   *
   * @public
   */
  Type?: OperationType | undefined;

  /**
   * The current state of the operation.
   *
   * @public
   */
  Status?: OperationStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource that the operation acted on (for example, an App Runner service).
   *
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * The time when the operation started. It's in the Unix time stamp format.
   *
   * @public
   */
  StartedAt?: Date | undefined;

  /**
   * The time when the operation ended. It's in the Unix time stamp format.
   *
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * The time when the operation was last updated. It's in the Unix time stamp format.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListOperationsResponse {
  /**
   * A list of operation summary information records. In a paginated request, the request returns up to `MaxResults` records for each call.
   *
   * @public
   */
  OperationSummaryList?: OperationSummary[] | undefined;

  /**
   * The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServicesRequest {
  /**
   * A token from a previous result page. Used for a paginated request. The request retrieves the next result page. All other parameter values must be identical to the ones specified in the initial request.
   *
   * If you don't specify `NextToken`, the request retrieves the first result page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to include in each response (result page). It's used for a paginated request.
   *
   * If you don't specify `MaxResults`, the request retrieves all available results in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Provides summary information for an App Runner service.
 *
 * This type contains limited information about a service. It doesn't include configuration details. It's returned by the [ListServices](https://docs.aws.amazon.com/apprunner/latest/api/API_ListServices.html) action. Complete service information is returned by the [CreateService](https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html), [DescribeService](https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html), and [DeleteService](https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html) actions using the [Service](https://docs.aws.amazon.com/apprunner/latest/api/API_Service.html) type.
 *
 * @public
 */
export interface ServiceSummary {
  /**
   * The customer-provided service name.
   *
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * An ID that App Runner generated for this service. It's unique within the Amazon Web Services Region.
   *
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of this service.
   *
   * @public
   */
  ServiceArn?: string | undefined;

  /**
   * A subdomain URL that App Runner generated for this service. You can use this URL to access your service web application.
   *
   * @public
   */
  ServiceUrl?: string | undefined;

  /**
   * The time when the App Runner service was created. It's in the Unix time stamp format.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time when the App Runner service was last updated. It's in theUnix time stamp format.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The current state of the App Runner service. These particular values mean the following.
   *
   * - `CREATE_FAILED` – The service failed to create. The failed service isn't usable, and still counts towards your service quota. To troubleshoot this failure, read the failure events and logs, change any parameters that need to be fixed, and rebuild your service using `UpdateService`.
   * - `DELETE_FAILED` – The service failed to delete and can't be successfully recovered. Retry the service deletion call to ensure that all related resources are removed.
   *
   * @public
   */
  Status?: ServiceStatus | undefined;
}

/**
 * @public
 */
export interface ListServicesResponse {
  /**
   * A list of service summary information records. In a paginated request, the request returns up to `MaxResults` records for each call.
   *
   * @public
   */
  ServiceSummaryList: ServiceSummary[] | undefined;

  /**
   * The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServicesForAutoScalingConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the App Runner auto scaling configuration that you want to list the services for.
   *
   * The ARN can be a full auto scaling configuration ARN, or a partial ARN ending with either `.../name` or `.../name/revision`. If a revision isn't specified, the latest active revision is used.
   *
   * @public
   */
  AutoScalingConfigurationArn: string | undefined;

  /**
   * The maximum number of results to include in each response (result page). It's used for a paginated request.
   *
   * If you don't specify `MaxResults`, the request retrieves all available results in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be identical to the ones specified in the initial request.
   *
   * If you don't specify `NextToken`, the request retrieves the first result page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServicesForAutoScalingConfigurationResponse {
  /**
   * A list of service ARN records. In a paginated request, the request returns up to `MaxResults` records for each call.
   *
   * @public
   */
  ServiceArnList: string[] | undefined;

  /**
   * The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that a tag list is requested for.
   *
   * It must be the ARN of an App Runner resource.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A list of the tag key-value pairs that are associated with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListVpcConnectorsRequest {
  /**
   * The maximum number of results to include in each response (result page). It's used for a paginated request.
   *
   * If you don't specify `MaxResults`, the request retrieves all available results in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be identical to the ones that are specified in the initial request.
   *
   * If you don't specify `NextToken`, the request retrieves the first result page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListVpcConnectorsResponse {
  /**
   * A list of information records for VPC connectors. In a paginated request, the request returns up to `MaxResults` records for each call.
   *
   * @public
   */
  VpcConnectors: VpcConnector[] | undefined;

  /**
   * The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Returns a list of VPC Ingress Connections based on the filter provided. It can return either `ServiceArn` or `VpcEndpointId`, or both.
 *
 * @public
 */
export interface ListVpcIngressConnectionsFilter {
  /**
   * The Amazon Resource Name (ARN) of a service to filter by.
   *
   * @public
   */
  ServiceArn?: string | undefined;

  /**
   * The ID of a VPC Endpoint to filter by.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;
}

/**
 * @public
 */
export interface ListVpcIngressConnectionsRequest {
  /**
   * The VPC Ingress Connections to be listed based on either the Service Arn or Vpc Endpoint Id, or both.
   *
   * @public
   */
  Filter?: ListVpcIngressConnectionsFilter | undefined;

  /**
   * The maximum number of results to include in each response (result page). It's used for a paginated request.
   *
   * If you don't specify `MaxResults`, the request retrieves all available results in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be identical to the ones that are specified in the initial request.
   *
   * If you don't specify `NextToken`, the request retrieves the first result page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Provides summary information about an VPC Ingress Connection, which includes its VPC Ingress Connection ARN and its associated Service ARN.
 *
 * @public
 */
export interface VpcIngressConnectionSummary {
  /**
   * The Amazon Resource Name (ARN) of the VPC Ingress Connection.
   *
   * @public
   */
  VpcIngressConnectionArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service associated with the VPC Ingress Connection.
   *
   * @public
   */
  ServiceArn?: string | undefined;
}

/**
 * @public
 */
export interface ListVpcIngressConnectionsResponse {
  /**
   * A list of summary information records for VPC Ingress Connections. In a paginated request, the request returns up to `MaxResults` records for each call.
   *
   * @public
   */
  VpcIngressConnectionSummaryList: VpcIngressConnectionSummary[] | undefined;

  /**
   * The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PauseServiceRequest {
  /**
   * The Amazon Resource Name (ARN) of the App Runner service that you want to pause.
   *
   * @public
   */
  ServiceArn: string | undefined;
}

/**
 * @public
 */
export interface PauseServiceResponse {
  /**
   * A description of the App Runner service that this request just paused.
   *
   * @public
   */
  Service: Service | undefined;

  /**
   * The unique ID of the asynchronous operation that this request started. You can use it combined with the ListOperations call to track the operation's progress.
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface ResumeServiceRequest {
  /**
   * The Amazon Resource Name (ARN) of the App Runner service that you want to resume.
   *
   * @public
   */
  ServiceArn: string | undefined;
}

/**
 * @public
 */
export interface ResumeServiceResponse {
  /**
   * A description of the App Runner service that this request just resumed.
   *
   * @public
   */
  Service: Service | undefined;

  /**
   * The unique ID of the asynchronous operation that this request started. You can use it combined with the ListOperations call to track the operation's progress.
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface StartDeploymentRequest {
  /**
   * The Amazon Resource Name (ARN) of the App Runner service that you want to manually deploy to.
   *
   * @public
   */
  ServiceArn: string | undefined;
}

/**
 * @public
 */
export interface StartDeploymentResponse {
  /**
   * The unique ID of the asynchronous operation that this request started. You can use it combined with the ListOperations call to track the operation's progress.
   *
   * @public
   */
  OperationId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to update tags for.
   *
   * It must be the ARN of an App Runner resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A list of tag key-value pairs to add or update. If a key is new to the resource, the tag is added with the provided value. If a key is already associated with the resource, the value of the tag is updated.
   *
   * @public
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
   * The Amazon Resource Name (ARN) of the resource that you want to remove tags from.
   *
   * It must be the ARN of an App Runner resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A list of tag keys that you want to remove.
   *
   * @public
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
   * The Amazon Resource Name (ARN) of the App Runner auto scaling configuration that you want to set as the default.
   *
   * The ARN can be a full auto scaling configuration ARN, or a partial ARN ending with either `.../name` or `.../name/revision`. If a revision isn't specified, the latest active revision is set as the default.
   *
   * @public
   */
  AutoScalingConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateDefaultAutoScalingConfigurationResponse {
  /**
   * A description of the App Runner auto scaling configuration that was set as default.
   *
   * @public
   */
  AutoScalingConfiguration: AutoScalingConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateServiceRequest {
  /**
   * The Amazon Resource Name (ARN) of the App Runner service that you want to update.
   *
   * @public
   */
  ServiceArn: string | undefined;

  /**
   * The source configuration to apply to the App Runner service.
   *
   * You can change the configuration of the code or image repository that the service uses. However, you can't switch from code to image or the other way around. This means that you must provide the same structure member of `SourceConfiguration` that you originally included when you created the service. Specifically, you can include either `CodeRepository` or `ImageRepository`. To update the source configuration, set the values to members of the structure that you include.
   *
   * @public
   */
  SourceConfiguration?: SourceConfiguration | undefined;

  /**
   * The runtime configuration to apply to instances (scaling units) of your service.
   *
   * @public
   */
  InstanceConfiguration?: InstanceConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of an App Runner automatic scaling configuration resource that you want to associate with the App Runner service.
   *
   * @public
   */
  AutoScalingConfigurationArn?: string | undefined;

  /**
   * The settings for the health check that App Runner performs to monitor the health of the App Runner service.
   *
   * @public
   */
  HealthCheckConfiguration?: HealthCheckConfiguration | undefined;

  /**
   * Configuration settings related to network traffic of the web application that the App Runner service runs.
   *
   * @public
   */
  NetworkConfiguration?: NetworkConfiguration | undefined;

  /**
   * The observability configuration of your service.
   *
   * @public
   */
  ObservabilityConfiguration?: ServiceObservabilityConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateServiceResponse {
  /**
   * A description of the App Runner service updated by this request. All configuration values in the returned `Service` structure reflect configuration changes that are being applied by this request.
   *
   * @public
   */
  Service: Service | undefined;

  /**
   * The unique ID of the asynchronous operation that this request started. You can use it combined with the ListOperations call to track the operation's progress.
   *
   * @public
   */
  OperationId: string | undefined;
}

/**
 * @public
 */
export interface UpdateVpcIngressConnectionRequest {
  /**
   * The Amazon Resource Name (Arn) for the App Runner VPC Ingress Connection resource that you want to update.
   *
   * @public
   */
  VpcIngressConnectionArn: string | undefined;

  /**
   * Specifications for the customer’s Amazon VPC and the related Amazon Web Services PrivateLink VPC endpoint that are used to update the VPC Ingress Connection resource.
   *
   * @public
   */
  IngressVpcConfiguration: IngressVpcConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateVpcIngressConnectionResponse {
  /**
   * A description of the App Runner VPC Ingress Connection resource that's updated by this request.
   *
   * @public
   */
  VpcIngressConnection: VpcIngressConnection | undefined;
}
