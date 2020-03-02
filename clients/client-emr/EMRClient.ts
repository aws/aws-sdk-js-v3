import {
  AddInstanceFleetCommandInput,
  AddInstanceFleetCommandOutput
} from "./commands/AddInstanceFleetCommand";
import {
  AddInstanceGroupsCommandInput,
  AddInstanceGroupsCommandOutput
} from "./commands/AddInstanceGroupsCommand";
import {
  AddJobFlowStepsCommandInput,
  AddJobFlowStepsCommandOutput
} from "./commands/AddJobFlowStepsCommand";
import {
  AddTagsCommandInput,
  AddTagsCommandOutput
} from "./commands/AddTagsCommand";
import {
  CancelStepsCommandInput,
  CancelStepsCommandOutput
} from "./commands/CancelStepsCommand";
import {
  CreateSecurityConfigurationCommandInput,
  CreateSecurityConfigurationCommandOutput
} from "./commands/CreateSecurityConfigurationCommand";
import {
  DeleteSecurityConfigurationCommandInput,
  DeleteSecurityConfigurationCommandOutput
} from "./commands/DeleteSecurityConfigurationCommand";
import {
  DescribeClusterCommandInput,
  DescribeClusterCommandOutput
} from "./commands/DescribeClusterCommand";
import {
  DescribeJobFlowsCommandInput,
  DescribeJobFlowsCommandOutput
} from "./commands/DescribeJobFlowsCommand";
import {
  DescribeSecurityConfigurationCommandInput,
  DescribeSecurityConfigurationCommandOutput
} from "./commands/DescribeSecurityConfigurationCommand";
import {
  DescribeStepCommandInput,
  DescribeStepCommandOutput
} from "./commands/DescribeStepCommand";
import {
  GetBlockPublicAccessConfigurationCommandInput,
  GetBlockPublicAccessConfigurationCommandOutput
} from "./commands/GetBlockPublicAccessConfigurationCommand";
import {
  ListBootstrapActionsCommandInput,
  ListBootstrapActionsCommandOutput
} from "./commands/ListBootstrapActionsCommand";
import {
  ListClustersCommandInput,
  ListClustersCommandOutput
} from "./commands/ListClustersCommand";
import {
  ListInstanceFleetsCommandInput,
  ListInstanceFleetsCommandOutput
} from "./commands/ListInstanceFleetsCommand";
import {
  ListInstanceGroupsCommandInput,
  ListInstanceGroupsCommandOutput
} from "./commands/ListInstanceGroupsCommand";
import {
  ListInstancesCommandInput,
  ListInstancesCommandOutput
} from "./commands/ListInstancesCommand";
import {
  ListSecurityConfigurationsCommandInput,
  ListSecurityConfigurationsCommandOutput
} from "./commands/ListSecurityConfigurationsCommand";
import {
  ListStepsCommandInput,
  ListStepsCommandOutput
} from "./commands/ListStepsCommand";
import {
  ModifyClusterCommandInput,
  ModifyClusterCommandOutput
} from "./commands/ModifyClusterCommand";
import {
  ModifyInstanceFleetCommandInput,
  ModifyInstanceFleetCommandOutput
} from "./commands/ModifyInstanceFleetCommand";
import {
  ModifyInstanceGroupsCommandInput,
  ModifyInstanceGroupsCommandOutput
} from "./commands/ModifyInstanceGroupsCommand";
import {
  PutAutoScalingPolicyCommandInput,
  PutAutoScalingPolicyCommandOutput
} from "./commands/PutAutoScalingPolicyCommand";
import {
  PutBlockPublicAccessConfigurationCommandInput,
  PutBlockPublicAccessConfigurationCommandOutput
} from "./commands/PutBlockPublicAccessConfigurationCommand";
import {
  RemoveAutoScalingPolicyCommandInput,
  RemoveAutoScalingPolicyCommandOutput
} from "./commands/RemoveAutoScalingPolicyCommand";
import {
  RemoveTagsCommandInput,
  RemoveTagsCommandOutput
} from "./commands/RemoveTagsCommand";
import {
  RunJobFlowCommandInput,
  RunJobFlowCommandOutput
} from "./commands/RunJobFlowCommand";
import {
  SetTerminationProtectionCommandInput,
  SetTerminationProtectionCommandOutput
} from "./commands/SetTerminationProtectionCommand";
import {
  SetVisibleToAllUsersCommandInput,
  SetVisibleToAllUsersCommandOutput
} from "./commands/SetVisibleToAllUsersCommand";
import {
  TerminateJobFlowsCommandInput,
  TerminateJobFlowsCommandOutput
} from "./commands/TerminateJobFlowsCommand";
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
  | AddInstanceFleetCommandInput
  | AddInstanceGroupsCommandInput
  | AddJobFlowStepsCommandInput
  | AddTagsCommandInput
  | CancelStepsCommandInput
  | CreateSecurityConfigurationCommandInput
  | DeleteSecurityConfigurationCommandInput
  | DescribeClusterCommandInput
  | DescribeJobFlowsCommandInput
  | DescribeSecurityConfigurationCommandInput
  | DescribeStepCommandInput
  | GetBlockPublicAccessConfigurationCommandInput
  | ListBootstrapActionsCommandInput
  | ListClustersCommandInput
  | ListInstanceFleetsCommandInput
  | ListInstanceGroupsCommandInput
  | ListInstancesCommandInput
  | ListSecurityConfigurationsCommandInput
  | ListStepsCommandInput
  | ModifyClusterCommandInput
  | ModifyInstanceFleetCommandInput
  | ModifyInstanceGroupsCommandInput
  | PutAutoScalingPolicyCommandInput
  | PutBlockPublicAccessConfigurationCommandInput
  | RemoveAutoScalingPolicyCommandInput
  | RemoveTagsCommandInput
  | RunJobFlowCommandInput
  | SetTerminationProtectionCommandInput
  | SetVisibleToAllUsersCommandInput
  | TerminateJobFlowsCommandInput;

export type ServiceOutputTypes =
  | AddInstanceFleetCommandOutput
  | AddInstanceGroupsCommandOutput
  | AddJobFlowStepsCommandOutput
  | AddTagsCommandOutput
  | CancelStepsCommandOutput
  | CreateSecurityConfigurationCommandOutput
  | DeleteSecurityConfigurationCommandOutput
  | DescribeClusterCommandOutput
  | DescribeJobFlowsCommandOutput
  | DescribeSecurityConfigurationCommandOutput
  | DescribeStepCommandOutput
  | GetBlockPublicAccessConfigurationCommandOutput
  | ListBootstrapActionsCommandOutput
  | ListClustersCommandOutput
  | ListInstanceFleetsCommandOutput
  | ListInstanceGroupsCommandOutput
  | ListInstancesCommandOutput
  | ListSecurityConfigurationsCommandOutput
  | ListStepsCommandOutput
  | ModifyClusterCommandOutput
  | ModifyInstanceFleetCommandOutput
  | ModifyInstanceGroupsCommandOutput
  | PutAutoScalingPolicyCommandOutput
  | PutBlockPublicAccessConfigurationCommandOutput
  | RemoveAutoScalingPolicyCommandOutput
  | RemoveTagsCommandOutput
  | RunJobFlowCommandOutput
  | SetTerminationProtectionCommandOutput
  | SetVisibleToAllUsersCommandOutput
  | TerminateJobFlowsCommandOutput;

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

export type EMRClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type EMRClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * <p>Amazon EMR is a web service that makes it easy to process large amounts of data efficiently. Amazon EMR uses Hadoop processing combined with several AWS products to do tasks such as web indexing, data mining, log file analysis, machine learning, scientific simulation, and data warehousing.</p>
 */
export class EMRClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  EMRClientResolvedConfig
> {
  readonly config: EMRClientResolvedConfig;

  constructor(configuration: EMRClientConfig) {
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
