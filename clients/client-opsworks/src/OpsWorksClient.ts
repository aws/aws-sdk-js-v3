// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import { AssignInstanceCommandInput, AssignInstanceCommandOutput } from "./commands/AssignInstanceCommand";
import { AssignVolumeCommandInput, AssignVolumeCommandOutput } from "./commands/AssignVolumeCommand";
import { AssociateElasticIpCommandInput, AssociateElasticIpCommandOutput } from "./commands/AssociateElasticIpCommand";
import {
  AttachElasticLoadBalancerCommandInput,
  AttachElasticLoadBalancerCommandOutput,
} from "./commands/AttachElasticLoadBalancerCommand";
import { CloneStackCommandInput, CloneStackCommandOutput } from "./commands/CloneStackCommand";
import { CreateAppCommandInput, CreateAppCommandOutput } from "./commands/CreateAppCommand";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "./commands/CreateDeploymentCommand";
import { CreateInstanceCommandInput, CreateInstanceCommandOutput } from "./commands/CreateInstanceCommand";
import { CreateLayerCommandInput, CreateLayerCommandOutput } from "./commands/CreateLayerCommand";
import { CreateStackCommandInput, CreateStackCommandOutput } from "./commands/CreateStackCommand";
import { CreateUserProfileCommandInput, CreateUserProfileCommandOutput } from "./commands/CreateUserProfileCommand";
import { DeleteAppCommandInput, DeleteAppCommandOutput } from "./commands/DeleteAppCommand";
import { DeleteInstanceCommandInput, DeleteInstanceCommandOutput } from "./commands/DeleteInstanceCommand";
import { DeleteLayerCommandInput, DeleteLayerCommandOutput } from "./commands/DeleteLayerCommand";
import { DeleteStackCommandInput, DeleteStackCommandOutput } from "./commands/DeleteStackCommand";
import { DeleteUserProfileCommandInput, DeleteUserProfileCommandOutput } from "./commands/DeleteUserProfileCommand";
import {
  DeregisterEcsClusterCommandInput,
  DeregisterEcsClusterCommandOutput,
} from "./commands/DeregisterEcsClusterCommand";
import {
  DeregisterElasticIpCommandInput,
  DeregisterElasticIpCommandOutput,
} from "./commands/DeregisterElasticIpCommand";
import { DeregisterInstanceCommandInput, DeregisterInstanceCommandOutput } from "./commands/DeregisterInstanceCommand";
import {
  DeregisterRdsDbInstanceCommandInput,
  DeregisterRdsDbInstanceCommandOutput,
} from "./commands/DeregisterRdsDbInstanceCommand";
import { DeregisterVolumeCommandInput, DeregisterVolumeCommandOutput } from "./commands/DeregisterVolumeCommand";
import {
  DescribeAgentVersionsCommandInput,
  DescribeAgentVersionsCommandOutput,
} from "./commands/DescribeAgentVersionsCommand";
import { DescribeAppsCommandInput, DescribeAppsCommandOutput } from "./commands/DescribeAppsCommand";
import { DescribeCommandsCommandInput, DescribeCommandsCommandOutput } from "./commands/DescribeCommandsCommand";
import {
  DescribeDeploymentsCommandInput,
  DescribeDeploymentsCommandOutput,
} from "./commands/DescribeDeploymentsCommand";
import {
  DescribeEcsClustersCommandInput,
  DescribeEcsClustersCommandOutput,
} from "./commands/DescribeEcsClustersCommand";
import { DescribeElasticIpsCommandInput, DescribeElasticIpsCommandOutput } from "./commands/DescribeElasticIpsCommand";
import {
  DescribeElasticLoadBalancersCommandInput,
  DescribeElasticLoadBalancersCommandOutput,
} from "./commands/DescribeElasticLoadBalancersCommand";
import { DescribeInstancesCommandInput, DescribeInstancesCommandOutput } from "./commands/DescribeInstancesCommand";
import { DescribeLayersCommandInput, DescribeLayersCommandOutput } from "./commands/DescribeLayersCommand";
import {
  DescribeLoadBasedAutoScalingCommandInput,
  DescribeLoadBasedAutoScalingCommandOutput,
} from "./commands/DescribeLoadBasedAutoScalingCommand";
import {
  DescribeMyUserProfileCommandInput,
  DescribeMyUserProfileCommandOutput,
} from "./commands/DescribeMyUserProfileCommand";
import {
  DescribeOperatingSystemsCommandInput,
  DescribeOperatingSystemsCommandOutput,
} from "./commands/DescribeOperatingSystemsCommand";
import {
  DescribePermissionsCommandInput,
  DescribePermissionsCommandOutput,
} from "./commands/DescribePermissionsCommand";
import { DescribeRaidArraysCommandInput, DescribeRaidArraysCommandOutput } from "./commands/DescribeRaidArraysCommand";
import {
  DescribeRdsDbInstancesCommandInput,
  DescribeRdsDbInstancesCommandOutput,
} from "./commands/DescribeRdsDbInstancesCommand";
import {
  DescribeServiceErrorsCommandInput,
  DescribeServiceErrorsCommandOutput,
} from "./commands/DescribeServiceErrorsCommand";
import {
  DescribeStackProvisioningParametersCommandInput,
  DescribeStackProvisioningParametersCommandOutput,
} from "./commands/DescribeStackProvisioningParametersCommand";
import { DescribeStacksCommandInput, DescribeStacksCommandOutput } from "./commands/DescribeStacksCommand";
import {
  DescribeStackSummaryCommandInput,
  DescribeStackSummaryCommandOutput,
} from "./commands/DescribeStackSummaryCommand";
import {
  DescribeTimeBasedAutoScalingCommandInput,
  DescribeTimeBasedAutoScalingCommandOutput,
} from "./commands/DescribeTimeBasedAutoScalingCommand";
import {
  DescribeUserProfilesCommandInput,
  DescribeUserProfilesCommandOutput,
} from "./commands/DescribeUserProfilesCommand";
import { DescribeVolumesCommandInput, DescribeVolumesCommandOutput } from "./commands/DescribeVolumesCommand";
import {
  DetachElasticLoadBalancerCommandInput,
  DetachElasticLoadBalancerCommandOutput,
} from "./commands/DetachElasticLoadBalancerCommand";
import {
  DisassociateElasticIpCommandInput,
  DisassociateElasticIpCommandOutput,
} from "./commands/DisassociateElasticIpCommand";
import {
  GetHostnameSuggestionCommandInput,
  GetHostnameSuggestionCommandOutput,
} from "./commands/GetHostnameSuggestionCommand";
import { GrantAccessCommandInput, GrantAccessCommandOutput } from "./commands/GrantAccessCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import { RebootInstanceCommandInput, RebootInstanceCommandOutput } from "./commands/RebootInstanceCommand";
import { RegisterEcsClusterCommandInput, RegisterEcsClusterCommandOutput } from "./commands/RegisterEcsClusterCommand";
import { RegisterElasticIpCommandInput, RegisterElasticIpCommandOutput } from "./commands/RegisterElasticIpCommand";
import { RegisterInstanceCommandInput, RegisterInstanceCommandOutput } from "./commands/RegisterInstanceCommand";
import {
  RegisterRdsDbInstanceCommandInput,
  RegisterRdsDbInstanceCommandOutput,
} from "./commands/RegisterRdsDbInstanceCommand";
import { RegisterVolumeCommandInput, RegisterVolumeCommandOutput } from "./commands/RegisterVolumeCommand";
import {
  SetLoadBasedAutoScalingCommandInput,
  SetLoadBasedAutoScalingCommandOutput,
} from "./commands/SetLoadBasedAutoScalingCommand";
import { SetPermissionCommandInput, SetPermissionCommandOutput } from "./commands/SetPermissionCommand";
import {
  SetTimeBasedAutoScalingCommandInput,
  SetTimeBasedAutoScalingCommandOutput,
} from "./commands/SetTimeBasedAutoScalingCommand";
import { StartInstanceCommandInput, StartInstanceCommandOutput } from "./commands/StartInstanceCommand";
import { StartStackCommandInput, StartStackCommandOutput } from "./commands/StartStackCommand";
import { StopInstanceCommandInput, StopInstanceCommandOutput } from "./commands/StopInstanceCommand";
import { StopStackCommandInput, StopStackCommandOutput } from "./commands/StopStackCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UnassignInstanceCommandInput, UnassignInstanceCommandOutput } from "./commands/UnassignInstanceCommand";
import { UnassignVolumeCommandInput, UnassignVolumeCommandOutput } from "./commands/UnassignVolumeCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAppCommandInput, UpdateAppCommandOutput } from "./commands/UpdateAppCommand";
import { UpdateElasticIpCommandInput, UpdateElasticIpCommandOutput } from "./commands/UpdateElasticIpCommand";
import { UpdateInstanceCommandInput, UpdateInstanceCommandOutput } from "./commands/UpdateInstanceCommand";
import { UpdateLayerCommandInput, UpdateLayerCommandOutput } from "./commands/UpdateLayerCommand";
import {
  UpdateMyUserProfileCommandInput,
  UpdateMyUserProfileCommandOutput,
} from "./commands/UpdateMyUserProfileCommand";
import {
  UpdateRdsDbInstanceCommandInput,
  UpdateRdsDbInstanceCommandOutput,
} from "./commands/UpdateRdsDbInstanceCommand";
import { UpdateStackCommandInput, UpdateStackCommandOutput } from "./commands/UpdateStackCommand";
import { UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput } from "./commands/UpdateUserProfileCommand";
import { UpdateVolumeCommandInput, UpdateVolumeCommandOutput } from "./commands/UpdateVolumeCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AssignInstanceCommandInput
  | AssignVolumeCommandInput
  | AssociateElasticIpCommandInput
  | AttachElasticLoadBalancerCommandInput
  | CloneStackCommandInput
  | CreateAppCommandInput
  | CreateDeploymentCommandInput
  | CreateInstanceCommandInput
  | CreateLayerCommandInput
  | CreateStackCommandInput
  | CreateUserProfileCommandInput
  | DeleteAppCommandInput
  | DeleteInstanceCommandInput
  | DeleteLayerCommandInput
  | DeleteStackCommandInput
  | DeleteUserProfileCommandInput
  | DeregisterEcsClusterCommandInput
  | DeregisterElasticIpCommandInput
  | DeregisterInstanceCommandInput
  | DeregisterRdsDbInstanceCommandInput
  | DeregisterVolumeCommandInput
  | DescribeAgentVersionsCommandInput
  | DescribeAppsCommandInput
  | DescribeCommandsCommandInput
  | DescribeDeploymentsCommandInput
  | DescribeEcsClustersCommandInput
  | DescribeElasticIpsCommandInput
  | DescribeElasticLoadBalancersCommandInput
  | DescribeInstancesCommandInput
  | DescribeLayersCommandInput
  | DescribeLoadBasedAutoScalingCommandInput
  | DescribeMyUserProfileCommandInput
  | DescribeOperatingSystemsCommandInput
  | DescribePermissionsCommandInput
  | DescribeRaidArraysCommandInput
  | DescribeRdsDbInstancesCommandInput
  | DescribeServiceErrorsCommandInput
  | DescribeStackProvisioningParametersCommandInput
  | DescribeStackSummaryCommandInput
  | DescribeStacksCommandInput
  | DescribeTimeBasedAutoScalingCommandInput
  | DescribeUserProfilesCommandInput
  | DescribeVolumesCommandInput
  | DetachElasticLoadBalancerCommandInput
  | DisassociateElasticIpCommandInput
  | GetHostnameSuggestionCommandInput
  | GrantAccessCommandInput
  | ListTagsCommandInput
  | RebootInstanceCommandInput
  | RegisterEcsClusterCommandInput
  | RegisterElasticIpCommandInput
  | RegisterInstanceCommandInput
  | RegisterRdsDbInstanceCommandInput
  | RegisterVolumeCommandInput
  | SetLoadBasedAutoScalingCommandInput
  | SetPermissionCommandInput
  | SetTimeBasedAutoScalingCommandInput
  | StartInstanceCommandInput
  | StartStackCommandInput
  | StopInstanceCommandInput
  | StopStackCommandInput
  | TagResourceCommandInput
  | UnassignInstanceCommandInput
  | UnassignVolumeCommandInput
  | UntagResourceCommandInput
  | UpdateAppCommandInput
  | UpdateElasticIpCommandInput
  | UpdateInstanceCommandInput
  | UpdateLayerCommandInput
  | UpdateMyUserProfileCommandInput
  | UpdateRdsDbInstanceCommandInput
  | UpdateStackCommandInput
  | UpdateUserProfileCommandInput
  | UpdateVolumeCommandInput;

export type ServiceOutputTypes =
  | AssignInstanceCommandOutput
  | AssignVolumeCommandOutput
  | AssociateElasticIpCommandOutput
  | AttachElasticLoadBalancerCommandOutput
  | CloneStackCommandOutput
  | CreateAppCommandOutput
  | CreateDeploymentCommandOutput
  | CreateInstanceCommandOutput
  | CreateLayerCommandOutput
  | CreateStackCommandOutput
  | CreateUserProfileCommandOutput
  | DeleteAppCommandOutput
  | DeleteInstanceCommandOutput
  | DeleteLayerCommandOutput
  | DeleteStackCommandOutput
  | DeleteUserProfileCommandOutput
  | DeregisterEcsClusterCommandOutput
  | DeregisterElasticIpCommandOutput
  | DeregisterInstanceCommandOutput
  | DeregisterRdsDbInstanceCommandOutput
  | DeregisterVolumeCommandOutput
  | DescribeAgentVersionsCommandOutput
  | DescribeAppsCommandOutput
  | DescribeCommandsCommandOutput
  | DescribeDeploymentsCommandOutput
  | DescribeEcsClustersCommandOutput
  | DescribeElasticIpsCommandOutput
  | DescribeElasticLoadBalancersCommandOutput
  | DescribeInstancesCommandOutput
  | DescribeLayersCommandOutput
  | DescribeLoadBasedAutoScalingCommandOutput
  | DescribeMyUserProfileCommandOutput
  | DescribeOperatingSystemsCommandOutput
  | DescribePermissionsCommandOutput
  | DescribeRaidArraysCommandOutput
  | DescribeRdsDbInstancesCommandOutput
  | DescribeServiceErrorsCommandOutput
  | DescribeStackProvisioningParametersCommandOutput
  | DescribeStackSummaryCommandOutput
  | DescribeStacksCommandOutput
  | DescribeTimeBasedAutoScalingCommandOutput
  | DescribeUserProfilesCommandOutput
  | DescribeVolumesCommandOutput
  | DetachElasticLoadBalancerCommandOutput
  | DisassociateElasticIpCommandOutput
  | GetHostnameSuggestionCommandOutput
  | GrantAccessCommandOutput
  | ListTagsCommandOutput
  | RebootInstanceCommandOutput
  | RegisterEcsClusterCommandOutput
  | RegisterElasticIpCommandOutput
  | RegisterInstanceCommandOutput
  | RegisterRdsDbInstanceCommandOutput
  | RegisterVolumeCommandOutput
  | SetLoadBasedAutoScalingCommandOutput
  | SetPermissionCommandOutput
  | SetTimeBasedAutoScalingCommandOutput
  | StartInstanceCommandOutput
  | StartStackCommandOutput
  | StopInstanceCommandOutput
  | StopStackCommandOutput
  | TagResourceCommandOutput
  | UnassignInstanceCommandOutput
  | UnassignVolumeCommandOutput
  | UntagResourceCommandOutput
  | UpdateAppCommandOutput
  | UpdateElasticIpCommandOutput
  | UpdateInstanceCommandOutput
  | UpdateLayerCommandOutput
  | UpdateMyUserProfileCommandOutput
  | UpdateRdsDbInstanceCommandOutput
  | UpdateStackCommandOutput
  | UpdateUserProfileCommandOutput
  | UpdateVolumeCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type OpsWorksClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of OpsWorksClient class constructor that set the region, credentials and other options.
 */
export interface OpsWorksClientConfig extends OpsWorksClientConfigType {}

type OpsWorksClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of OpsWorksClient class. This is resolved and normalized from the {@link OpsWorksClientConfig | constructor configuration interface}.
 */
export interface OpsWorksClientResolvedConfig extends OpsWorksClientResolvedConfigType {}

/**
 * <fullname>AWS OpsWorks</fullname>
 *          <p>Welcome to the <i>AWS OpsWorks Stacks API Reference</i>. This guide provides descriptions, syntax, and
 *       usage examples for AWS OpsWorks Stacks actions and data types, including common parameters and error
 *       codes. </p>
 *          <p>AWS OpsWorks Stacks is an application management service that provides an integrated experience for
 *       overseeing the complete application lifecycle. For information about this product, go to the
 *         <a href="http://aws.amazon.com/opsworks/">AWS OpsWorks</a> details page. </p>
 *
 *          <p>
 *             <b>SDKs and CLI</b>
 *          </p>
 *          <p>The most common way to use the AWS OpsWorks Stacks API is by using the AWS Command Line Interface (CLI) or by using one of the AWS SDKs to implement applications in your preferred language. For more information, see:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html">AWS CLI</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/opsworks/AWSOpsWorksClient.html">AWS SDK for Java</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sdkfornet/latest/apidocs/html/N_Amazon_OpsWorks.htm">AWS SDK for
 *           .NET</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/aws-sdk-php-2/latest/class-Aws.OpsWorks.OpsWorksClient.html">AWS
 *           SDK for PHP 2</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="http://docs.aws.amazon.com/sdkforruby/api/">AWS SDK for Ruby</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="http://aws.amazon.com/documentation/sdkforjavascript/">AWS SDK for Node.js</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="http://docs.pythonboto.org/en/latest/ref/opsworks.html">AWS SDK for
 *           Python(Boto)</a>
 *                </p>
 *             </li>
 *          </ul>
 *
 *          <p>
 *             <b>Endpoints</b>
 *          </p>
 *          <p>AWS OpsWorks Stacks supports the following endpoints, all HTTPS. You must connect to one of the following endpoints. Stacks
 *           can only be accessed or managed within the endpoint in which they are created.</p>
 *          <ul>
 *             <li>
 *                <p>opsworks.us-east-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.us-east-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.us-west-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.us-west-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ca-central-1.amazonaws.com (API only; not available in the AWS console)</p>
 *             </li>
 *             <li>
 *                <p>opsworks.eu-west-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.eu-west-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.eu-west-3.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.eu-central-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ap-northeast-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ap-northeast-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ap-south-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ap-southeast-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.ap-southeast-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks.sa-east-1.amazonaws.com</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Chef Versions</b>
 *          </p>
 *          <p>When you call <a>CreateStack</a>, <a>CloneStack</a>, or <a>UpdateStack</a> we recommend you
 *       use the <code>ConfigurationManager</code> parameter to specify the Chef version.
 *       The recommended and default value for Linux stacks is currently 12. Windows stacks use Chef 12.2. For more information,
 *       see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-chef11.html">Chef Versions</a>.</p>
 *          <note>
 *             <p>You can specify Chef 12, 11.10, or 11.4 for your Linux stack. We recommend migrating your existing Linux stacks to Chef 12 as soon as possible.</p>
 *          </note>
 */
export class OpsWorksClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  OpsWorksClientResolvedConfig
> {
  /**
   * The resolved configuration of OpsWorksClient class. This is resolved and normalized from the {@link OpsWorksClientConfig | constructor configuration interface}.
   */
  readonly config: OpsWorksClientResolvedConfig;

  constructor(configuration: OpsWorksClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
