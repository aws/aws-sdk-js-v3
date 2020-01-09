import {
  AcceptSharedDirectoryRequest,
  AcceptSharedDirectoryResult,
  AddIpRoutesRequest,
  AddIpRoutesResult,
  AddTagsToResourceRequest,
  AddTagsToResourceResult,
  CancelSchemaExtensionRequest,
  CancelSchemaExtensionResult,
  ConnectDirectoryRequest,
  ConnectDirectoryResult,
  CreateAliasRequest,
  CreateAliasResult,
  CreateComputerRequest,
  CreateComputerResult,
  CreateConditionalForwarderRequest,
  CreateConditionalForwarderResult,
  CreateDirectoryRequest,
  CreateDirectoryResult,
  CreateLogSubscriptionRequest,
  CreateLogSubscriptionResult,
  CreateMicrosoftADRequest,
  CreateMicrosoftADResult,
  CreateSnapshotRequest,
  CreateSnapshotResult,
  CreateTrustRequest,
  CreateTrustResult,
  DeleteConditionalForwarderRequest,
  DeleteConditionalForwarderResult,
  DeleteDirectoryRequest,
  DeleteDirectoryResult,
  DeleteLogSubscriptionRequest,
  DeleteLogSubscriptionResult,
  DeleteSnapshotRequest,
  DeleteSnapshotResult,
  DeleteTrustRequest,
  DeleteTrustResult,
  DeregisterCertificateRequest,
  DeregisterCertificateResult,
  DeregisterEventTopicRequest,
  DeregisterEventTopicResult,
  DescribeCertificateRequest,
  DescribeCertificateResult,
  DescribeConditionalForwardersRequest,
  DescribeConditionalForwardersResult,
  DescribeDirectoriesRequest,
  DescribeDirectoriesResult,
  DescribeDomainControllersRequest,
  DescribeDomainControllersResult,
  DescribeEventTopicsRequest,
  DescribeEventTopicsResult,
  DescribeLDAPSSettingsRequest,
  DescribeLDAPSSettingsResult,
  DescribeSharedDirectoriesRequest,
  DescribeSharedDirectoriesResult,
  DescribeSnapshotsRequest,
  DescribeSnapshotsResult,
  DescribeTrustsRequest,
  DescribeTrustsResult,
  DisableLDAPSRequest,
  DisableLDAPSResult,
  DisableRadiusRequest,
  DisableRadiusResult,
  DisableSsoRequest,
  DisableSsoResult,
  EnableLDAPSRequest,
  EnableLDAPSResult,
  EnableRadiusRequest,
  EnableRadiusResult,
  EnableSsoRequest,
  EnableSsoResult,
  GetDirectoryLimitsRequest,
  GetDirectoryLimitsResult,
  GetSnapshotLimitsRequest,
  GetSnapshotLimitsResult,
  ListCertificatesRequest,
  ListCertificatesResult,
  ListIpRoutesRequest,
  ListIpRoutesResult,
  ListLogSubscriptionsRequest,
  ListLogSubscriptionsResult,
  ListSchemaExtensionsRequest,
  ListSchemaExtensionsResult,
  ListTagsForResourceRequest,
  ListTagsForResourceResult,
  RegisterCertificateRequest,
  RegisterCertificateResult,
  RegisterEventTopicRequest,
  RegisterEventTopicResult,
  RejectSharedDirectoryRequest,
  RejectSharedDirectoryResult,
  RemoveIpRoutesRequest,
  RemoveIpRoutesResult,
  RemoveTagsFromResourceRequest,
  RemoveTagsFromResourceResult,
  ResetUserPasswordRequest,
  ResetUserPasswordResult,
  RestoreFromSnapshotRequest,
  RestoreFromSnapshotResult,
  ShareDirectoryRequest,
  ShareDirectoryResult,
  StartSchemaExtensionRequest,
  StartSchemaExtensionResult,
  UnshareDirectoryRequest,
  UnshareDirectoryResult,
  UpdateConditionalForwarderRequest,
  UpdateConditionalForwarderResult,
  UpdateNumberOfDomainControllersRequest,
  UpdateNumberOfDomainControllersResult,
  UpdateRadiusRequest,
  UpdateRadiusResult,
  UpdateTrustRequest,
  UpdateTrustResult,
  VerifyTrustRequest,
  VerifyTrustResult,
} from "./models/index";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AcceptSharedDirectoryRequest
  | AddIpRoutesRequest
  | AddTagsToResourceRequest
  | CancelSchemaExtensionRequest
  | ConnectDirectoryRequest
  | CreateAliasRequest
  | CreateComputerRequest
  | CreateConditionalForwarderRequest
  | CreateDirectoryRequest
  | CreateLogSubscriptionRequest
  | CreateMicrosoftADRequest
  | CreateSnapshotRequest
  | CreateTrustRequest
  | DeleteConditionalForwarderRequest
  | DeleteDirectoryRequest
  | DeleteLogSubscriptionRequest
  | DeleteSnapshotRequest
  | DeleteTrustRequest
  | DeregisterCertificateRequest
  | DeregisterEventTopicRequest
  | DescribeCertificateRequest
  | DescribeConditionalForwardersRequest
  | DescribeDirectoriesRequest
  | DescribeDomainControllersRequest
  | DescribeEventTopicsRequest
  | DescribeLDAPSSettingsRequest
  | DescribeSharedDirectoriesRequest
  | DescribeSnapshotsRequest
  | DescribeTrustsRequest
  | DisableLDAPSRequest
  | DisableRadiusRequest
  | DisableSsoRequest
  | EnableLDAPSRequest
  | EnableRadiusRequest
  | EnableSsoRequest
  | GetDirectoryLimitsRequest
  | GetSnapshotLimitsRequest
  | ListCertificatesRequest
  | ListIpRoutesRequest
  | ListLogSubscriptionsRequest
  | ListSchemaExtensionsRequest
  | ListTagsForResourceRequest
  | RegisterCertificateRequest
  | RegisterEventTopicRequest
  | RejectSharedDirectoryRequest
  | RemoveIpRoutesRequest
  | RemoveTagsFromResourceRequest
  | ResetUserPasswordRequest
  | RestoreFromSnapshotRequest
  | ShareDirectoryRequest
  | StartSchemaExtensionRequest
  | UnshareDirectoryRequest
  | UpdateConditionalForwarderRequest
  | UpdateNumberOfDomainControllersRequest
  | UpdateRadiusRequest
  | UpdateTrustRequest
  | VerifyTrustRequest;

export type ServiceOutputTypes =
  | AcceptSharedDirectoryResult
  | AddIpRoutesResult
  | AddTagsToResourceResult
  | CancelSchemaExtensionResult
  | ConnectDirectoryResult
  | CreateAliasResult
  | CreateComputerResult
  | CreateConditionalForwarderResult
  | CreateDirectoryResult
  | CreateLogSubscriptionResult
  | CreateMicrosoftADResult
  | CreateSnapshotResult
  | CreateTrustResult
  | DeleteConditionalForwarderResult
  | DeleteDirectoryResult
  | DeleteLogSubscriptionResult
  | DeleteSnapshotResult
  | DeleteTrustResult
  | DeregisterCertificateResult
  | DeregisterEventTopicResult
  | DescribeCertificateResult
  | DescribeConditionalForwardersResult
  | DescribeDirectoriesResult
  | DescribeDomainControllersResult
  | DescribeEventTopicsResult
  | DescribeLDAPSSettingsResult
  | DescribeSharedDirectoriesResult
  | DescribeSnapshotsResult
  | DescribeTrustsResult
  | DisableLDAPSResult
  | DisableRadiusResult
  | DisableSsoResult
  | EnableLDAPSResult
  | EnableRadiusResult
  | EnableSsoResult
  | GetDirectoryLimitsResult
  | GetSnapshotLimitsResult
  | ListCertificatesResult
  | ListIpRoutesResult
  | ListLogSubscriptionsResult
  | ListSchemaExtensionsResult
  | ListTagsForResourceResult
  | RegisterCertificateResult
  | RegisterEventTopicResult
  | RejectSharedDirectoryResult
  | RemoveIpRoutesResult
  | RemoveTagsFromResourceResult
  | ResetUserPasswordResult
  | RestoreFromSnapshotResult
  | ShareDirectoryResult
  | StartSchemaExtensionResult
  | UnshareDirectoryResult
  | UpdateConditionalForwarderResult
  | UpdateNumberOfDomainControllersResult
  | UpdateRadiusResult
  | UpdateTrustResult
  | VerifyTrustResult;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type DirectoryServiceClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>>
  & ClientDefaults
  & RegionInputConfig
  & EndpointsInputConfig
  & AwsAuthInputConfig
  & RetryInputConfig
  & UserAgentInputConfig
  & HostHeaderInputConfig

export type DirectoryServiceClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions>
  & Required<ClientDefaults>
  & RegionResolvedConfig
  & EndpointsResolvedConfig
  & AwsAuthResolvedConfig
  & RetryResolvedConfig
  & UserAgentResolvedConfig
  & HostHeaderResolvedConfig

/**
 *
 *          <fullname>AWS Directory Service</fullname>
 *          <p>AWS Directory Service is a web service that makes it easy for you to setup and run directories in the AWS cloud, or connect your AWS resources with an existing on-premises Microsoft Active Directory. This guide provides detailed information about AWS Directory Service operations, data types, parameters, and errors. For information about AWS Directory Services features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory Service</a> and the <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html">AWS Directory Service Administration Guide</a>.</p>
 *          <note>
 *             <p>AWS provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, iOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to AWS Directory Service and other AWS services. For more information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web
 *          Services</a>.</p>
 *          </note>
 *
 */
export class DirectoryServiceClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DirectoryServiceClientResolvedConfig
> {
  readonly config: DirectoryServiceClientResolvedConfig;

  constructor(configuration: DirectoryServiceClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {
  }
}
