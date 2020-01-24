import {
  AllocateStaticIpRequest,
  AllocateStaticIpResult,
  AttachDiskRequest,
  AttachDiskResult,
  AttachInstancesToLoadBalancerRequest,
  AttachInstancesToLoadBalancerResult,
  AttachLoadBalancerTlsCertificateRequest,
  AttachLoadBalancerTlsCertificateResult,
  AttachStaticIpRequest,
  AttachStaticIpResult,
  CloseInstancePublicPortsRequest,
  CloseInstancePublicPortsResult,
  CopySnapshotRequest,
  CopySnapshotResult,
  CreateCloudFormationStackRequest,
  CreateCloudFormationStackResult,
  CreateDiskFromSnapshotRequest,
  CreateDiskFromSnapshotResult,
  CreateDiskRequest,
  CreateDiskResult,
  CreateDiskSnapshotRequest,
  CreateDiskSnapshotResult,
  CreateDomainEntryRequest,
  CreateDomainEntryResult,
  CreateDomainRequest,
  CreateDomainResult,
  CreateInstanceSnapshotRequest,
  CreateInstanceSnapshotResult,
  CreateInstancesFromSnapshotRequest,
  CreateInstancesFromSnapshotResult,
  CreateInstancesRequest,
  CreateInstancesResult,
  CreateKeyPairRequest,
  CreateKeyPairResult,
  CreateLoadBalancerRequest,
  CreateLoadBalancerResult,
  CreateLoadBalancerTlsCertificateRequest,
  CreateLoadBalancerTlsCertificateResult,
  CreateRelationalDatabaseFromSnapshotRequest,
  CreateRelationalDatabaseFromSnapshotResult,
  CreateRelationalDatabaseRequest,
  CreateRelationalDatabaseResult,
  CreateRelationalDatabaseSnapshotRequest,
  CreateRelationalDatabaseSnapshotResult,
  DeleteAutoSnapshotRequest,
  DeleteAutoSnapshotResult,
  DeleteDiskRequest,
  DeleteDiskResult,
  DeleteDiskSnapshotRequest,
  DeleteDiskSnapshotResult,
  DeleteDomainEntryRequest,
  DeleteDomainEntryResult,
  DeleteDomainRequest,
  DeleteDomainResult,
  DeleteInstanceRequest,
  DeleteInstanceResult,
  DeleteInstanceSnapshotRequest,
  DeleteInstanceSnapshotResult,
  DeleteKeyPairRequest,
  DeleteKeyPairResult,
  DeleteKnownHostKeysRequest,
  DeleteKnownHostKeysResult,
  DeleteLoadBalancerRequest,
  DeleteLoadBalancerResult,
  DeleteLoadBalancerTlsCertificateRequest,
  DeleteLoadBalancerTlsCertificateResult,
  DeleteRelationalDatabaseRequest,
  DeleteRelationalDatabaseResult,
  DeleteRelationalDatabaseSnapshotRequest,
  DeleteRelationalDatabaseSnapshotResult,
  DetachDiskRequest,
  DetachDiskResult,
  DetachInstancesFromLoadBalancerRequest,
  DetachInstancesFromLoadBalancerResult,
  DetachStaticIpRequest,
  DetachStaticIpResult,
  DisableAddOnRequest,
  DisableAddOnResult,
  DownloadDefaultKeyPairRequest,
  DownloadDefaultKeyPairResult,
  EnableAddOnRequest,
  EnableAddOnResult,
  ExportSnapshotRequest,
  ExportSnapshotResult,
  GetActiveNamesRequest,
  GetActiveNamesResult,
  GetAutoSnapshotsRequest,
  GetAutoSnapshotsResult,
  GetBlueprintsRequest,
  GetBlueprintsResult,
  GetBundlesRequest,
  GetBundlesResult,
  GetCloudFormationStackRecordsRequest,
  GetCloudFormationStackRecordsResult,
  GetDiskRequest,
  GetDiskResult,
  GetDiskSnapshotRequest,
  GetDiskSnapshotResult,
  GetDiskSnapshotsRequest,
  GetDiskSnapshotsResult,
  GetDisksRequest,
  GetDisksResult,
  GetDomainRequest,
  GetDomainResult,
  GetDomainsRequest,
  GetDomainsResult,
  GetExportSnapshotRecordsRequest,
  GetExportSnapshotRecordsResult,
  GetInstanceAccessDetailsRequest,
  GetInstanceAccessDetailsResult,
  GetInstanceMetricDataRequest,
  GetInstanceMetricDataResult,
  GetInstancePortStatesRequest,
  GetInstancePortStatesResult,
  GetInstanceRequest,
  GetInstanceResult,
  GetInstanceSnapshotRequest,
  GetInstanceSnapshotResult,
  GetInstanceSnapshotsRequest,
  GetInstanceSnapshotsResult,
  GetInstanceStateRequest,
  GetInstanceStateResult,
  GetInstancesRequest,
  GetInstancesResult,
  GetKeyPairRequest,
  GetKeyPairResult,
  GetKeyPairsRequest,
  GetKeyPairsResult,
  GetLoadBalancerMetricDataRequest,
  GetLoadBalancerMetricDataResult,
  GetLoadBalancerRequest,
  GetLoadBalancerResult,
  GetLoadBalancerTlsCertificatesRequest,
  GetLoadBalancerTlsCertificatesResult,
  GetLoadBalancersRequest,
  GetLoadBalancersResult,
  GetOperationRequest,
  GetOperationResult,
  GetOperationsForResourceRequest,
  GetOperationsForResourceResult,
  GetOperationsRequest,
  GetOperationsResult,
  GetRegionsRequest,
  GetRegionsResult,
  GetRelationalDatabaseBlueprintsRequest,
  GetRelationalDatabaseBlueprintsResult,
  GetRelationalDatabaseBundlesRequest,
  GetRelationalDatabaseBundlesResult,
  GetRelationalDatabaseEventsRequest,
  GetRelationalDatabaseEventsResult,
  GetRelationalDatabaseLogEventsRequest,
  GetRelationalDatabaseLogEventsResult,
  GetRelationalDatabaseLogStreamsRequest,
  GetRelationalDatabaseLogStreamsResult,
  GetRelationalDatabaseMasterUserPasswordRequest,
  GetRelationalDatabaseMasterUserPasswordResult,
  GetRelationalDatabaseMetricDataRequest,
  GetRelationalDatabaseMetricDataResult,
  GetRelationalDatabaseParametersRequest,
  GetRelationalDatabaseParametersResult,
  GetRelationalDatabaseRequest,
  GetRelationalDatabaseResult,
  GetRelationalDatabaseSnapshotRequest,
  GetRelationalDatabaseSnapshotResult,
  GetRelationalDatabaseSnapshotsRequest,
  GetRelationalDatabaseSnapshotsResult,
  GetRelationalDatabasesRequest,
  GetRelationalDatabasesResult,
  GetStaticIpRequest,
  GetStaticIpResult,
  GetStaticIpsRequest,
  GetStaticIpsResult,
  ImportKeyPairRequest,
  ImportKeyPairResult,
  IsVpcPeeredRequest,
  IsVpcPeeredResult,
  OpenInstancePublicPortsRequest,
  OpenInstancePublicPortsResult,
  PeerVpcRequest,
  PeerVpcResult,
  PutInstancePublicPortsRequest,
  PutInstancePublicPortsResult,
  RebootInstanceRequest,
  RebootInstanceResult,
  RebootRelationalDatabaseRequest,
  RebootRelationalDatabaseResult,
  ReleaseStaticIpRequest,
  ReleaseStaticIpResult,
  StartInstanceRequest,
  StartInstanceResult,
  StartRelationalDatabaseRequest,
  StartRelationalDatabaseResult,
  StopInstanceRequest,
  StopInstanceResult,
  StopRelationalDatabaseRequest,
  StopRelationalDatabaseResult,
  TagResourceRequest,
  TagResourceResult,
  UnpeerVpcRequest,
  UnpeerVpcResult,
  UntagResourceRequest,
  UntagResourceResult,
  UpdateDomainEntryRequest,
  UpdateDomainEntryResult,
  UpdateLoadBalancerAttributeRequest,
  UpdateLoadBalancerAttributeResult,
  UpdateRelationalDatabaseParametersRequest,
  UpdateRelationalDatabaseParametersResult,
  UpdateRelationalDatabaseRequest,
  UpdateRelationalDatabaseResult
} from "./models/index";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
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
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AllocateStaticIpRequest
  | AttachDiskRequest
  | AttachInstancesToLoadBalancerRequest
  | AttachLoadBalancerTlsCertificateRequest
  | AttachStaticIpRequest
  | CloseInstancePublicPortsRequest
  | CopySnapshotRequest
  | CreateCloudFormationStackRequest
  | CreateDiskFromSnapshotRequest
  | CreateDiskRequest
  | CreateDiskSnapshotRequest
  | CreateDomainEntryRequest
  | CreateDomainRequest
  | CreateInstanceSnapshotRequest
  | CreateInstancesFromSnapshotRequest
  | CreateInstancesRequest
  | CreateKeyPairRequest
  | CreateLoadBalancerRequest
  | CreateLoadBalancerTlsCertificateRequest
  | CreateRelationalDatabaseFromSnapshotRequest
  | CreateRelationalDatabaseRequest
  | CreateRelationalDatabaseSnapshotRequest
  | DeleteAutoSnapshotRequest
  | DeleteDiskRequest
  | DeleteDiskSnapshotRequest
  | DeleteDomainEntryRequest
  | DeleteDomainRequest
  | DeleteInstanceRequest
  | DeleteInstanceSnapshotRequest
  | DeleteKeyPairRequest
  | DeleteKnownHostKeysRequest
  | DeleteLoadBalancerRequest
  | DeleteLoadBalancerTlsCertificateRequest
  | DeleteRelationalDatabaseRequest
  | DeleteRelationalDatabaseSnapshotRequest
  | DetachDiskRequest
  | DetachInstancesFromLoadBalancerRequest
  | DetachStaticIpRequest
  | DisableAddOnRequest
  | DownloadDefaultKeyPairRequest
  | EnableAddOnRequest
  | ExportSnapshotRequest
  | GetActiveNamesRequest
  | GetAutoSnapshotsRequest
  | GetBlueprintsRequest
  | GetBundlesRequest
  | GetCloudFormationStackRecordsRequest
  | GetDiskRequest
  | GetDiskSnapshotRequest
  | GetDiskSnapshotsRequest
  | GetDisksRequest
  | GetDomainRequest
  | GetDomainsRequest
  | GetExportSnapshotRecordsRequest
  | GetInstanceAccessDetailsRequest
  | GetInstanceMetricDataRequest
  | GetInstancePortStatesRequest
  | GetInstanceRequest
  | GetInstanceSnapshotRequest
  | GetInstanceSnapshotsRequest
  | GetInstanceStateRequest
  | GetInstancesRequest
  | GetKeyPairRequest
  | GetKeyPairsRequest
  | GetLoadBalancerMetricDataRequest
  | GetLoadBalancerRequest
  | GetLoadBalancerTlsCertificatesRequest
  | GetLoadBalancersRequest
  | GetOperationRequest
  | GetOperationsForResourceRequest
  | GetOperationsRequest
  | GetRegionsRequest
  | GetRelationalDatabaseBlueprintsRequest
  | GetRelationalDatabaseBundlesRequest
  | GetRelationalDatabaseEventsRequest
  | GetRelationalDatabaseLogEventsRequest
  | GetRelationalDatabaseLogStreamsRequest
  | GetRelationalDatabaseMasterUserPasswordRequest
  | GetRelationalDatabaseMetricDataRequest
  | GetRelationalDatabaseParametersRequest
  | GetRelationalDatabaseRequest
  | GetRelationalDatabaseSnapshotRequest
  | GetRelationalDatabaseSnapshotsRequest
  | GetRelationalDatabasesRequest
  | GetStaticIpRequest
  | GetStaticIpsRequest
  | ImportKeyPairRequest
  | IsVpcPeeredRequest
  | OpenInstancePublicPortsRequest
  | PeerVpcRequest
  | PutInstancePublicPortsRequest
  | RebootInstanceRequest
  | RebootRelationalDatabaseRequest
  | ReleaseStaticIpRequest
  | StartInstanceRequest
  | StartRelationalDatabaseRequest
  | StopInstanceRequest
  | StopRelationalDatabaseRequest
  | TagResourceRequest
  | UnpeerVpcRequest
  | UntagResourceRequest
  | UpdateDomainEntryRequest
  | UpdateLoadBalancerAttributeRequest
  | UpdateRelationalDatabaseParametersRequest
  | UpdateRelationalDatabaseRequest;

export type ServiceOutputTypes =
  | AllocateStaticIpResult
  | AttachDiskResult
  | AttachInstancesToLoadBalancerResult
  | AttachLoadBalancerTlsCertificateResult
  | AttachStaticIpResult
  | CloseInstancePublicPortsResult
  | CopySnapshotResult
  | CreateCloudFormationStackResult
  | CreateDiskFromSnapshotResult
  | CreateDiskResult
  | CreateDiskSnapshotResult
  | CreateDomainEntryResult
  | CreateDomainResult
  | CreateInstanceSnapshotResult
  | CreateInstancesFromSnapshotResult
  | CreateInstancesResult
  | CreateKeyPairResult
  | CreateLoadBalancerResult
  | CreateLoadBalancerTlsCertificateResult
  | CreateRelationalDatabaseFromSnapshotResult
  | CreateRelationalDatabaseResult
  | CreateRelationalDatabaseSnapshotResult
  | DeleteAutoSnapshotResult
  | DeleteDiskResult
  | DeleteDiskSnapshotResult
  | DeleteDomainEntryResult
  | DeleteDomainResult
  | DeleteInstanceResult
  | DeleteInstanceSnapshotResult
  | DeleteKeyPairResult
  | DeleteKnownHostKeysResult
  | DeleteLoadBalancerResult
  | DeleteLoadBalancerTlsCertificateResult
  | DeleteRelationalDatabaseResult
  | DeleteRelationalDatabaseSnapshotResult
  | DetachDiskResult
  | DetachInstancesFromLoadBalancerResult
  | DetachStaticIpResult
  | DisableAddOnResult
  | DownloadDefaultKeyPairResult
  | EnableAddOnResult
  | ExportSnapshotResult
  | GetActiveNamesResult
  | GetAutoSnapshotsResult
  | GetBlueprintsResult
  | GetBundlesResult
  | GetCloudFormationStackRecordsResult
  | GetDiskResult
  | GetDiskSnapshotResult
  | GetDiskSnapshotsResult
  | GetDisksResult
  | GetDomainResult
  | GetDomainsResult
  | GetExportSnapshotRecordsResult
  | GetInstanceAccessDetailsResult
  | GetInstanceMetricDataResult
  | GetInstancePortStatesResult
  | GetInstanceResult
  | GetInstanceSnapshotResult
  | GetInstanceSnapshotsResult
  | GetInstanceStateResult
  | GetInstancesResult
  | GetKeyPairResult
  | GetKeyPairsResult
  | GetLoadBalancerMetricDataResult
  | GetLoadBalancerResult
  | GetLoadBalancerTlsCertificatesResult
  | GetLoadBalancersResult
  | GetOperationResult
  | GetOperationsForResourceResult
  | GetOperationsResult
  | GetRegionsResult
  | GetRelationalDatabaseBlueprintsResult
  | GetRelationalDatabaseBundlesResult
  | GetRelationalDatabaseEventsResult
  | GetRelationalDatabaseLogEventsResult
  | GetRelationalDatabaseLogStreamsResult
  | GetRelationalDatabaseMasterUserPasswordResult
  | GetRelationalDatabaseMetricDataResult
  | GetRelationalDatabaseParametersResult
  | GetRelationalDatabaseResult
  | GetRelationalDatabaseSnapshotResult
  | GetRelationalDatabaseSnapshotsResult
  | GetRelationalDatabasesResult
  | GetStaticIpResult
  | GetStaticIpsResult
  | ImportKeyPairResult
  | IsVpcPeeredResult
  | OpenInstancePublicPortsResult
  | PeerVpcResult
  | PutInstancePublicPortsResult
  | RebootInstanceResult
  | RebootRelationalDatabaseResult
  | ReleaseStaticIpResult
  | StartInstanceResult
  | StartRelationalDatabaseResult
  | StopInstanceResult
  | StopRelationalDatabaseResult
  | TagResourceResult
  | UnpeerVpcResult
  | UntagResourceResult
  | UpdateDomainEntryResult
  | UpdateLoadBalancerAttributeResult
  | UpdateRelationalDatabaseParametersResult
  | UpdateRelationalDatabaseResult;

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
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

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

export type LightsailClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type LightsailClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>Amazon Lightsail is the easiest way to get started with AWS for developers who just need
 *       virtual private servers. Lightsail includes everything you need to launch your project
 *       quickly - a virtual machine, a managed database, SSD-based storage, data transfer, DNS
 *       management, and a static IP - for a low, predictable price. You manage those Lightsail
 *       servers through the Lightsail console or by using the API or command-line interface
 *       (CLI).</p>
 *          <p>For more information about Lightsail concepts and tasks, see the <a href="https://lightsail.aws.amazon.com/ls/docs/all">Lightsail Dev Guide</a>.</p>
 *          <p>To use the Lightsail API or the CLI, you will need to use AWS Identity and
 *       Access Management (IAM) to generate access keys. For details about how to set this up, see the
 *         <a href="http://lightsail.aws.amazon.com/ls/docs/how-to/article/lightsail-how-to-set-up-access-keys-to-use-sdk-api-cli">Lightsail Dev Guide</a>.</p>
 */
export class LightsailClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  LightsailClientResolvedConfig
> {
  readonly config: LightsailClientResolvedConfig;

  constructor(configuration: LightsailClientConfig) {
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

  destroy(): void {}
}
