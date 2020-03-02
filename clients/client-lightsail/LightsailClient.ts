import {
  AllocateStaticIpCommandInput,
  AllocateStaticIpCommandOutput
} from "./commands/AllocateStaticIpCommand";
import {
  AttachDiskCommandInput,
  AttachDiskCommandOutput
} from "./commands/AttachDiskCommand";
import {
  AttachInstancesToLoadBalancerCommandInput,
  AttachInstancesToLoadBalancerCommandOutput
} from "./commands/AttachInstancesToLoadBalancerCommand";
import {
  AttachLoadBalancerTlsCertificateCommandInput,
  AttachLoadBalancerTlsCertificateCommandOutput
} from "./commands/AttachLoadBalancerTlsCertificateCommand";
import {
  AttachStaticIpCommandInput,
  AttachStaticIpCommandOutput
} from "./commands/AttachStaticIpCommand";
import {
  CloseInstancePublicPortsCommandInput,
  CloseInstancePublicPortsCommandOutput
} from "./commands/CloseInstancePublicPortsCommand";
import {
  CopySnapshotCommandInput,
  CopySnapshotCommandOutput
} from "./commands/CopySnapshotCommand";
import {
  CreateCloudFormationStackCommandInput,
  CreateCloudFormationStackCommandOutput
} from "./commands/CreateCloudFormationStackCommand";
import {
  CreateDiskCommandInput,
  CreateDiskCommandOutput
} from "./commands/CreateDiskCommand";
import {
  CreateDiskFromSnapshotCommandInput,
  CreateDiskFromSnapshotCommandOutput
} from "./commands/CreateDiskFromSnapshotCommand";
import {
  CreateDiskSnapshotCommandInput,
  CreateDiskSnapshotCommandOutput
} from "./commands/CreateDiskSnapshotCommand";
import {
  CreateDomainCommandInput,
  CreateDomainCommandOutput
} from "./commands/CreateDomainCommand";
import {
  CreateDomainEntryCommandInput,
  CreateDomainEntryCommandOutput
} from "./commands/CreateDomainEntryCommand";
import {
  CreateInstanceSnapshotCommandInput,
  CreateInstanceSnapshotCommandOutput
} from "./commands/CreateInstanceSnapshotCommand";
import {
  CreateInstancesCommandInput,
  CreateInstancesCommandOutput
} from "./commands/CreateInstancesCommand";
import {
  CreateInstancesFromSnapshotCommandInput,
  CreateInstancesFromSnapshotCommandOutput
} from "./commands/CreateInstancesFromSnapshotCommand";
import {
  CreateKeyPairCommandInput,
  CreateKeyPairCommandOutput
} from "./commands/CreateKeyPairCommand";
import {
  CreateLoadBalancerCommandInput,
  CreateLoadBalancerCommandOutput
} from "./commands/CreateLoadBalancerCommand";
import {
  CreateLoadBalancerTlsCertificateCommandInput,
  CreateLoadBalancerTlsCertificateCommandOutput
} from "./commands/CreateLoadBalancerTlsCertificateCommand";
import {
  CreateRelationalDatabaseCommandInput,
  CreateRelationalDatabaseCommandOutput
} from "./commands/CreateRelationalDatabaseCommand";
import {
  CreateRelationalDatabaseFromSnapshotCommandInput,
  CreateRelationalDatabaseFromSnapshotCommandOutput
} from "./commands/CreateRelationalDatabaseFromSnapshotCommand";
import {
  CreateRelationalDatabaseSnapshotCommandInput,
  CreateRelationalDatabaseSnapshotCommandOutput
} from "./commands/CreateRelationalDatabaseSnapshotCommand";
import {
  DeleteAutoSnapshotCommandInput,
  DeleteAutoSnapshotCommandOutput
} from "./commands/DeleteAutoSnapshotCommand";
import {
  DeleteDiskCommandInput,
  DeleteDiskCommandOutput
} from "./commands/DeleteDiskCommand";
import {
  DeleteDiskSnapshotCommandInput,
  DeleteDiskSnapshotCommandOutput
} from "./commands/DeleteDiskSnapshotCommand";
import {
  DeleteDomainCommandInput,
  DeleteDomainCommandOutput
} from "./commands/DeleteDomainCommand";
import {
  DeleteDomainEntryCommandInput,
  DeleteDomainEntryCommandOutput
} from "./commands/DeleteDomainEntryCommand";
import {
  DeleteInstanceCommandInput,
  DeleteInstanceCommandOutput
} from "./commands/DeleteInstanceCommand";
import {
  DeleteInstanceSnapshotCommandInput,
  DeleteInstanceSnapshotCommandOutput
} from "./commands/DeleteInstanceSnapshotCommand";
import {
  DeleteKeyPairCommandInput,
  DeleteKeyPairCommandOutput
} from "./commands/DeleteKeyPairCommand";
import {
  DeleteKnownHostKeysCommandInput,
  DeleteKnownHostKeysCommandOutput
} from "./commands/DeleteKnownHostKeysCommand";
import {
  DeleteLoadBalancerCommandInput,
  DeleteLoadBalancerCommandOutput
} from "./commands/DeleteLoadBalancerCommand";
import {
  DeleteLoadBalancerTlsCertificateCommandInput,
  DeleteLoadBalancerTlsCertificateCommandOutput
} from "./commands/DeleteLoadBalancerTlsCertificateCommand";
import {
  DeleteRelationalDatabaseCommandInput,
  DeleteRelationalDatabaseCommandOutput
} from "./commands/DeleteRelationalDatabaseCommand";
import {
  DeleteRelationalDatabaseSnapshotCommandInput,
  DeleteRelationalDatabaseSnapshotCommandOutput
} from "./commands/DeleteRelationalDatabaseSnapshotCommand";
import {
  DetachDiskCommandInput,
  DetachDiskCommandOutput
} from "./commands/DetachDiskCommand";
import {
  DetachInstancesFromLoadBalancerCommandInput,
  DetachInstancesFromLoadBalancerCommandOutput
} from "./commands/DetachInstancesFromLoadBalancerCommand";
import {
  DetachStaticIpCommandInput,
  DetachStaticIpCommandOutput
} from "./commands/DetachStaticIpCommand";
import {
  DisableAddOnCommandInput,
  DisableAddOnCommandOutput
} from "./commands/DisableAddOnCommand";
import {
  DownloadDefaultKeyPairCommandInput,
  DownloadDefaultKeyPairCommandOutput
} from "./commands/DownloadDefaultKeyPairCommand";
import {
  EnableAddOnCommandInput,
  EnableAddOnCommandOutput
} from "./commands/EnableAddOnCommand";
import {
  ExportSnapshotCommandInput,
  ExportSnapshotCommandOutput
} from "./commands/ExportSnapshotCommand";
import {
  GetActiveNamesCommandInput,
  GetActiveNamesCommandOutput
} from "./commands/GetActiveNamesCommand";
import {
  GetAutoSnapshotsCommandInput,
  GetAutoSnapshotsCommandOutput
} from "./commands/GetAutoSnapshotsCommand";
import {
  GetBlueprintsCommandInput,
  GetBlueprintsCommandOutput
} from "./commands/GetBlueprintsCommand";
import {
  GetBundlesCommandInput,
  GetBundlesCommandOutput
} from "./commands/GetBundlesCommand";
import {
  GetCloudFormationStackRecordsCommandInput,
  GetCloudFormationStackRecordsCommandOutput
} from "./commands/GetCloudFormationStackRecordsCommand";
import {
  GetDiskCommandInput,
  GetDiskCommandOutput
} from "./commands/GetDiskCommand";
import {
  GetDiskSnapshotCommandInput,
  GetDiskSnapshotCommandOutput
} from "./commands/GetDiskSnapshotCommand";
import {
  GetDiskSnapshotsCommandInput,
  GetDiskSnapshotsCommandOutput
} from "./commands/GetDiskSnapshotsCommand";
import {
  GetDisksCommandInput,
  GetDisksCommandOutput
} from "./commands/GetDisksCommand";
import {
  GetDomainCommandInput,
  GetDomainCommandOutput
} from "./commands/GetDomainCommand";
import {
  GetDomainsCommandInput,
  GetDomainsCommandOutput
} from "./commands/GetDomainsCommand";
import {
  GetExportSnapshotRecordsCommandInput,
  GetExportSnapshotRecordsCommandOutput
} from "./commands/GetExportSnapshotRecordsCommand";
import {
  GetInstanceAccessDetailsCommandInput,
  GetInstanceAccessDetailsCommandOutput
} from "./commands/GetInstanceAccessDetailsCommand";
import {
  GetInstanceCommandInput,
  GetInstanceCommandOutput
} from "./commands/GetInstanceCommand";
import {
  GetInstanceMetricDataCommandInput,
  GetInstanceMetricDataCommandOutput
} from "./commands/GetInstanceMetricDataCommand";
import {
  GetInstancePortStatesCommandInput,
  GetInstancePortStatesCommandOutput
} from "./commands/GetInstancePortStatesCommand";
import {
  GetInstanceSnapshotCommandInput,
  GetInstanceSnapshotCommandOutput
} from "./commands/GetInstanceSnapshotCommand";
import {
  GetInstanceSnapshotsCommandInput,
  GetInstanceSnapshotsCommandOutput
} from "./commands/GetInstanceSnapshotsCommand";
import {
  GetInstanceStateCommandInput,
  GetInstanceStateCommandOutput
} from "./commands/GetInstanceStateCommand";
import {
  GetInstancesCommandInput,
  GetInstancesCommandOutput
} from "./commands/GetInstancesCommand";
import {
  GetKeyPairCommandInput,
  GetKeyPairCommandOutput
} from "./commands/GetKeyPairCommand";
import {
  GetKeyPairsCommandInput,
  GetKeyPairsCommandOutput
} from "./commands/GetKeyPairsCommand";
import {
  GetLoadBalancerCommandInput,
  GetLoadBalancerCommandOutput
} from "./commands/GetLoadBalancerCommand";
import {
  GetLoadBalancerMetricDataCommandInput,
  GetLoadBalancerMetricDataCommandOutput
} from "./commands/GetLoadBalancerMetricDataCommand";
import {
  GetLoadBalancerTlsCertificatesCommandInput,
  GetLoadBalancerTlsCertificatesCommandOutput
} from "./commands/GetLoadBalancerTlsCertificatesCommand";
import {
  GetLoadBalancersCommandInput,
  GetLoadBalancersCommandOutput
} from "./commands/GetLoadBalancersCommand";
import {
  GetOperationCommandInput,
  GetOperationCommandOutput
} from "./commands/GetOperationCommand";
import {
  GetOperationsCommandInput,
  GetOperationsCommandOutput
} from "./commands/GetOperationsCommand";
import {
  GetOperationsForResourceCommandInput,
  GetOperationsForResourceCommandOutput
} from "./commands/GetOperationsForResourceCommand";
import {
  GetRegionsCommandInput,
  GetRegionsCommandOutput
} from "./commands/GetRegionsCommand";
import {
  GetRelationalDatabaseBlueprintsCommandInput,
  GetRelationalDatabaseBlueprintsCommandOutput
} from "./commands/GetRelationalDatabaseBlueprintsCommand";
import {
  GetRelationalDatabaseBundlesCommandInput,
  GetRelationalDatabaseBundlesCommandOutput
} from "./commands/GetRelationalDatabaseBundlesCommand";
import {
  GetRelationalDatabaseCommandInput,
  GetRelationalDatabaseCommandOutput
} from "./commands/GetRelationalDatabaseCommand";
import {
  GetRelationalDatabaseEventsCommandInput,
  GetRelationalDatabaseEventsCommandOutput
} from "./commands/GetRelationalDatabaseEventsCommand";
import {
  GetRelationalDatabaseLogEventsCommandInput,
  GetRelationalDatabaseLogEventsCommandOutput
} from "./commands/GetRelationalDatabaseLogEventsCommand";
import {
  GetRelationalDatabaseLogStreamsCommandInput,
  GetRelationalDatabaseLogStreamsCommandOutput
} from "./commands/GetRelationalDatabaseLogStreamsCommand";
import {
  GetRelationalDatabaseMasterUserPasswordCommandInput,
  GetRelationalDatabaseMasterUserPasswordCommandOutput
} from "./commands/GetRelationalDatabaseMasterUserPasswordCommand";
import {
  GetRelationalDatabaseMetricDataCommandInput,
  GetRelationalDatabaseMetricDataCommandOutput
} from "./commands/GetRelationalDatabaseMetricDataCommand";
import {
  GetRelationalDatabaseParametersCommandInput,
  GetRelationalDatabaseParametersCommandOutput
} from "./commands/GetRelationalDatabaseParametersCommand";
import {
  GetRelationalDatabaseSnapshotCommandInput,
  GetRelationalDatabaseSnapshotCommandOutput
} from "./commands/GetRelationalDatabaseSnapshotCommand";
import {
  GetRelationalDatabaseSnapshotsCommandInput,
  GetRelationalDatabaseSnapshotsCommandOutput
} from "./commands/GetRelationalDatabaseSnapshotsCommand";
import {
  GetRelationalDatabasesCommandInput,
  GetRelationalDatabasesCommandOutput
} from "./commands/GetRelationalDatabasesCommand";
import {
  GetStaticIpCommandInput,
  GetStaticIpCommandOutput
} from "./commands/GetStaticIpCommand";
import {
  GetStaticIpsCommandInput,
  GetStaticIpsCommandOutput
} from "./commands/GetStaticIpsCommand";
import {
  ImportKeyPairCommandInput,
  ImportKeyPairCommandOutput
} from "./commands/ImportKeyPairCommand";
import {
  IsVpcPeeredCommandInput,
  IsVpcPeeredCommandOutput
} from "./commands/IsVpcPeeredCommand";
import {
  OpenInstancePublicPortsCommandInput,
  OpenInstancePublicPortsCommandOutput
} from "./commands/OpenInstancePublicPortsCommand";
import {
  PeerVpcCommandInput,
  PeerVpcCommandOutput
} from "./commands/PeerVpcCommand";
import {
  PutInstancePublicPortsCommandInput,
  PutInstancePublicPortsCommandOutput
} from "./commands/PutInstancePublicPortsCommand";
import {
  RebootInstanceCommandInput,
  RebootInstanceCommandOutput
} from "./commands/RebootInstanceCommand";
import {
  RebootRelationalDatabaseCommandInput,
  RebootRelationalDatabaseCommandOutput
} from "./commands/RebootRelationalDatabaseCommand";
import {
  ReleaseStaticIpCommandInput,
  ReleaseStaticIpCommandOutput
} from "./commands/ReleaseStaticIpCommand";
import {
  StartInstanceCommandInput,
  StartInstanceCommandOutput
} from "./commands/StartInstanceCommand";
import {
  StartRelationalDatabaseCommandInput,
  StartRelationalDatabaseCommandOutput
} from "./commands/StartRelationalDatabaseCommand";
import {
  StopInstanceCommandInput,
  StopInstanceCommandOutput
} from "./commands/StopInstanceCommand";
import {
  StopRelationalDatabaseCommandInput,
  StopRelationalDatabaseCommandOutput
} from "./commands/StopRelationalDatabaseCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  UnpeerVpcCommandInput,
  UnpeerVpcCommandOutput
} from "./commands/UnpeerVpcCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
import {
  UpdateDomainEntryCommandInput,
  UpdateDomainEntryCommandOutput
} from "./commands/UpdateDomainEntryCommand";
import {
  UpdateLoadBalancerAttributeCommandInput,
  UpdateLoadBalancerAttributeCommandOutput
} from "./commands/UpdateLoadBalancerAttributeCommand";
import {
  UpdateRelationalDatabaseCommandInput,
  UpdateRelationalDatabaseCommandOutput
} from "./commands/UpdateRelationalDatabaseCommand";
import {
  UpdateRelationalDatabaseParametersCommandInput,
  UpdateRelationalDatabaseParametersCommandOutput
} from "./commands/UpdateRelationalDatabaseParametersCommand";
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
  | AllocateStaticIpCommandInput
  | AttachDiskCommandInput
  | AttachInstancesToLoadBalancerCommandInput
  | AttachLoadBalancerTlsCertificateCommandInput
  | AttachStaticIpCommandInput
  | CloseInstancePublicPortsCommandInput
  | CopySnapshotCommandInput
  | CreateCloudFormationStackCommandInput
  | CreateDiskCommandInput
  | CreateDiskFromSnapshotCommandInput
  | CreateDiskSnapshotCommandInput
  | CreateDomainCommandInput
  | CreateDomainEntryCommandInput
  | CreateInstanceSnapshotCommandInput
  | CreateInstancesCommandInput
  | CreateInstancesFromSnapshotCommandInput
  | CreateKeyPairCommandInput
  | CreateLoadBalancerCommandInput
  | CreateLoadBalancerTlsCertificateCommandInput
  | CreateRelationalDatabaseCommandInput
  | CreateRelationalDatabaseFromSnapshotCommandInput
  | CreateRelationalDatabaseSnapshotCommandInput
  | DeleteAutoSnapshotCommandInput
  | DeleteDiskCommandInput
  | DeleteDiskSnapshotCommandInput
  | DeleteDomainCommandInput
  | DeleteDomainEntryCommandInput
  | DeleteInstanceCommandInput
  | DeleteInstanceSnapshotCommandInput
  | DeleteKeyPairCommandInput
  | DeleteKnownHostKeysCommandInput
  | DeleteLoadBalancerCommandInput
  | DeleteLoadBalancerTlsCertificateCommandInput
  | DeleteRelationalDatabaseCommandInput
  | DeleteRelationalDatabaseSnapshotCommandInput
  | DetachDiskCommandInput
  | DetachInstancesFromLoadBalancerCommandInput
  | DetachStaticIpCommandInput
  | DisableAddOnCommandInput
  | DownloadDefaultKeyPairCommandInput
  | EnableAddOnCommandInput
  | ExportSnapshotCommandInput
  | GetActiveNamesCommandInput
  | GetAutoSnapshotsCommandInput
  | GetBlueprintsCommandInput
  | GetBundlesCommandInput
  | GetCloudFormationStackRecordsCommandInput
  | GetDiskCommandInput
  | GetDiskSnapshotCommandInput
  | GetDiskSnapshotsCommandInput
  | GetDisksCommandInput
  | GetDomainCommandInput
  | GetDomainsCommandInput
  | GetExportSnapshotRecordsCommandInput
  | GetInstanceAccessDetailsCommandInput
  | GetInstanceCommandInput
  | GetInstanceMetricDataCommandInput
  | GetInstancePortStatesCommandInput
  | GetInstanceSnapshotCommandInput
  | GetInstanceSnapshotsCommandInput
  | GetInstanceStateCommandInput
  | GetInstancesCommandInput
  | GetKeyPairCommandInput
  | GetKeyPairsCommandInput
  | GetLoadBalancerCommandInput
  | GetLoadBalancerMetricDataCommandInput
  | GetLoadBalancerTlsCertificatesCommandInput
  | GetLoadBalancersCommandInput
  | GetOperationCommandInput
  | GetOperationsCommandInput
  | GetOperationsForResourceCommandInput
  | GetRegionsCommandInput
  | GetRelationalDatabaseBlueprintsCommandInput
  | GetRelationalDatabaseBundlesCommandInput
  | GetRelationalDatabaseCommandInput
  | GetRelationalDatabaseEventsCommandInput
  | GetRelationalDatabaseLogEventsCommandInput
  | GetRelationalDatabaseLogStreamsCommandInput
  | GetRelationalDatabaseMasterUserPasswordCommandInput
  | GetRelationalDatabaseMetricDataCommandInput
  | GetRelationalDatabaseParametersCommandInput
  | GetRelationalDatabaseSnapshotCommandInput
  | GetRelationalDatabaseSnapshotsCommandInput
  | GetRelationalDatabasesCommandInput
  | GetStaticIpCommandInput
  | GetStaticIpsCommandInput
  | ImportKeyPairCommandInput
  | IsVpcPeeredCommandInput
  | OpenInstancePublicPortsCommandInput
  | PeerVpcCommandInput
  | PutInstancePublicPortsCommandInput
  | RebootInstanceCommandInput
  | RebootRelationalDatabaseCommandInput
  | ReleaseStaticIpCommandInput
  | StartInstanceCommandInput
  | StartRelationalDatabaseCommandInput
  | StopInstanceCommandInput
  | StopRelationalDatabaseCommandInput
  | TagResourceCommandInput
  | UnpeerVpcCommandInput
  | UntagResourceCommandInput
  | UpdateDomainEntryCommandInput
  | UpdateLoadBalancerAttributeCommandInput
  | UpdateRelationalDatabaseCommandInput
  | UpdateRelationalDatabaseParametersCommandInput;

export type ServiceOutputTypes =
  | AllocateStaticIpCommandOutput
  | AttachDiskCommandOutput
  | AttachInstancesToLoadBalancerCommandOutput
  | AttachLoadBalancerTlsCertificateCommandOutput
  | AttachStaticIpCommandOutput
  | CloseInstancePublicPortsCommandOutput
  | CopySnapshotCommandOutput
  | CreateCloudFormationStackCommandOutput
  | CreateDiskCommandOutput
  | CreateDiskFromSnapshotCommandOutput
  | CreateDiskSnapshotCommandOutput
  | CreateDomainCommandOutput
  | CreateDomainEntryCommandOutput
  | CreateInstanceSnapshotCommandOutput
  | CreateInstancesCommandOutput
  | CreateInstancesFromSnapshotCommandOutput
  | CreateKeyPairCommandOutput
  | CreateLoadBalancerCommandOutput
  | CreateLoadBalancerTlsCertificateCommandOutput
  | CreateRelationalDatabaseCommandOutput
  | CreateRelationalDatabaseFromSnapshotCommandOutput
  | CreateRelationalDatabaseSnapshotCommandOutput
  | DeleteAutoSnapshotCommandOutput
  | DeleteDiskCommandOutput
  | DeleteDiskSnapshotCommandOutput
  | DeleteDomainCommandOutput
  | DeleteDomainEntryCommandOutput
  | DeleteInstanceCommandOutput
  | DeleteInstanceSnapshotCommandOutput
  | DeleteKeyPairCommandOutput
  | DeleteKnownHostKeysCommandOutput
  | DeleteLoadBalancerCommandOutput
  | DeleteLoadBalancerTlsCertificateCommandOutput
  | DeleteRelationalDatabaseCommandOutput
  | DeleteRelationalDatabaseSnapshotCommandOutput
  | DetachDiskCommandOutput
  | DetachInstancesFromLoadBalancerCommandOutput
  | DetachStaticIpCommandOutput
  | DisableAddOnCommandOutput
  | DownloadDefaultKeyPairCommandOutput
  | EnableAddOnCommandOutput
  | ExportSnapshotCommandOutput
  | GetActiveNamesCommandOutput
  | GetAutoSnapshotsCommandOutput
  | GetBlueprintsCommandOutput
  | GetBundlesCommandOutput
  | GetCloudFormationStackRecordsCommandOutput
  | GetDiskCommandOutput
  | GetDiskSnapshotCommandOutput
  | GetDiskSnapshotsCommandOutput
  | GetDisksCommandOutput
  | GetDomainCommandOutput
  | GetDomainsCommandOutput
  | GetExportSnapshotRecordsCommandOutput
  | GetInstanceAccessDetailsCommandOutput
  | GetInstanceCommandOutput
  | GetInstanceMetricDataCommandOutput
  | GetInstancePortStatesCommandOutput
  | GetInstanceSnapshotCommandOutput
  | GetInstanceSnapshotsCommandOutput
  | GetInstanceStateCommandOutput
  | GetInstancesCommandOutput
  | GetKeyPairCommandOutput
  | GetKeyPairsCommandOutput
  | GetLoadBalancerCommandOutput
  | GetLoadBalancerMetricDataCommandOutput
  | GetLoadBalancerTlsCertificatesCommandOutput
  | GetLoadBalancersCommandOutput
  | GetOperationCommandOutput
  | GetOperationsCommandOutput
  | GetOperationsForResourceCommandOutput
  | GetRegionsCommandOutput
  | GetRelationalDatabaseBlueprintsCommandOutput
  | GetRelationalDatabaseBundlesCommandOutput
  | GetRelationalDatabaseCommandOutput
  | GetRelationalDatabaseEventsCommandOutput
  | GetRelationalDatabaseLogEventsCommandOutput
  | GetRelationalDatabaseLogStreamsCommandOutput
  | GetRelationalDatabaseMasterUserPasswordCommandOutput
  | GetRelationalDatabaseMetricDataCommandOutput
  | GetRelationalDatabaseParametersCommandOutput
  | GetRelationalDatabaseSnapshotCommandOutput
  | GetRelationalDatabaseSnapshotsCommandOutput
  | GetRelationalDatabasesCommandOutput
  | GetStaticIpCommandOutput
  | GetStaticIpsCommandOutput
  | ImportKeyPairCommandOutput
  | IsVpcPeeredCommandOutput
  | OpenInstancePublicPortsCommandOutput
  | PeerVpcCommandOutput
  | PutInstancePublicPortsCommandOutput
  | RebootInstanceCommandOutput
  | RebootRelationalDatabaseCommandOutput
  | ReleaseStaticIpCommandOutput
  | StartInstanceCommandOutput
  | StartRelationalDatabaseCommandOutput
  | StopInstanceCommandOutput
  | StopRelationalDatabaseCommandOutput
  | TagResourceCommandOutput
  | UnpeerVpcCommandOutput
  | UntagResourceCommandOutput
  | UpdateDomainEntryCommandOutput
  | UpdateLoadBalancerAttributeCommandOutput
  | UpdateRelationalDatabaseCommandOutput
  | UpdateRelationalDatabaseParametersCommandOutput;

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
