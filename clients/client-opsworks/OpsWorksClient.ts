import {
  AssignInstanceRequest,
  AssignVolumeRequest,
  AssociateElasticIpRequest,
  AttachElasticLoadBalancerRequest,
  CloneStackRequest,
  CloneStackResult,
  CreateAppRequest,
  CreateAppResult,
  CreateDeploymentRequest,
  CreateDeploymentResult,
  CreateInstanceRequest,
  CreateInstanceResult,
  CreateLayerRequest,
  CreateLayerResult,
  CreateStackRequest,
  CreateStackResult,
  CreateUserProfileRequest,
  CreateUserProfileResult,
  DeleteAppRequest,
  DeleteInstanceRequest,
  DeleteLayerRequest,
  DeleteStackRequest,
  DeleteUserProfileRequest,
  DeregisterEcsClusterRequest,
  DeregisterElasticIpRequest,
  DeregisterInstanceRequest,
  DeregisterRdsDbInstanceRequest,
  DeregisterVolumeRequest,
  DescribeAgentVersionsRequest,
  DescribeAgentVersionsResult,
  DescribeAppsRequest,
  DescribeAppsResult,
  DescribeCommandsRequest,
  DescribeCommandsResult,
  DescribeDeploymentsRequest,
  DescribeDeploymentsResult,
  DescribeEcsClustersRequest,
  DescribeEcsClustersResult,
  DescribeElasticIpsRequest,
  DescribeElasticIpsResult,
  DescribeElasticLoadBalancersRequest,
  DescribeElasticLoadBalancersResult,
  DescribeInstancesRequest,
  DescribeInstancesResult,
  DescribeLayersRequest,
  DescribeLayersResult,
  DescribeLoadBasedAutoScalingRequest,
  DescribeLoadBasedAutoScalingResult,
  DescribeMyUserProfileResult,
  DescribeOperatingSystemsResponse,
  DescribePermissionsRequest,
  DescribePermissionsResult,
  DescribeRaidArraysRequest,
  DescribeRaidArraysResult,
  DescribeRdsDbInstancesRequest,
  DescribeRdsDbInstancesResult,
  DescribeServiceErrorsRequest,
  DescribeServiceErrorsResult,
  DescribeStackProvisioningParametersRequest,
  DescribeStackProvisioningParametersResult,
  DescribeStackSummaryRequest,
  DescribeStackSummaryResult,
  DescribeStacksRequest,
  DescribeStacksResult,
  DescribeTimeBasedAutoScalingRequest,
  DescribeTimeBasedAutoScalingResult,
  DescribeUserProfilesRequest,
  DescribeUserProfilesResult,
  DescribeVolumesRequest,
  DescribeVolumesResult,
  DetachElasticLoadBalancerRequest,
  DisassociateElasticIpRequest,
  GetHostnameSuggestionRequest,
  GetHostnameSuggestionResult,
  GrantAccessRequest,
  GrantAccessResult,
  ListTagsRequest,
  ListTagsResult,
  RebootInstanceRequest,
  RegisterEcsClusterRequest,
  RegisterEcsClusterResult,
  RegisterElasticIpRequest,
  RegisterElasticIpResult,
  RegisterInstanceRequest,
  RegisterInstanceResult,
  RegisterRdsDbInstanceRequest,
  RegisterVolumeRequest,
  RegisterVolumeResult,
  SetLoadBasedAutoScalingRequest,
  SetPermissionRequest,
  SetTimeBasedAutoScalingRequest,
  StartInstanceRequest,
  StartStackRequest,
  StopInstanceRequest,
  StopStackRequest,
  TagResourceRequest,
  UnassignInstanceRequest,
  UnassignVolumeRequest,
  UntagResourceRequest,
  UpdateAppRequest,
  UpdateElasticIpRequest,
  UpdateInstanceRequest,
  UpdateLayerRequest,
  UpdateMyUserProfileRequest,
  UpdateRdsDbInstanceRequest,
  UpdateStackRequest,
  UpdateUserProfileRequest,
  UpdateVolumeRequest,
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
  MetadataBearer as __MetadataBearer,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | {}
  | AssignInstanceRequest
  | AssignVolumeRequest
  | AssociateElasticIpRequest
  | AttachElasticLoadBalancerRequest
  | CloneStackRequest
  | CreateAppRequest
  | CreateDeploymentRequest
  | CreateInstanceRequest
  | CreateLayerRequest
  | CreateStackRequest
  | CreateUserProfileRequest
  | DeleteAppRequest
  | DeleteInstanceRequest
  | DeleteLayerRequest
  | DeleteStackRequest
  | DeleteUserProfileRequest
  | DeregisterEcsClusterRequest
  | DeregisterElasticIpRequest
  | DeregisterInstanceRequest
  | DeregisterRdsDbInstanceRequest
  | DeregisterVolumeRequest
  | DescribeAgentVersionsRequest
  | DescribeAppsRequest
  | DescribeCommandsRequest
  | DescribeDeploymentsRequest
  | DescribeEcsClustersRequest
  | DescribeElasticIpsRequest
  | DescribeElasticLoadBalancersRequest
  | DescribeInstancesRequest
  | DescribeLayersRequest
  | DescribeLoadBasedAutoScalingRequest
  | DescribePermissionsRequest
  | DescribeRaidArraysRequest
  | DescribeRdsDbInstancesRequest
  | DescribeServiceErrorsRequest
  | DescribeStackProvisioningParametersRequest
  | DescribeStackSummaryRequest
  | DescribeStacksRequest
  | DescribeTimeBasedAutoScalingRequest
  | DescribeUserProfilesRequest
  | DescribeVolumesRequest
  | DetachElasticLoadBalancerRequest
  | DisassociateElasticIpRequest
  | GetHostnameSuggestionRequest
  | GrantAccessRequest
  | ListTagsRequest
  | RebootInstanceRequest
  | RegisterEcsClusterRequest
  | RegisterElasticIpRequest
  | RegisterInstanceRequest
  | RegisterRdsDbInstanceRequest
  | RegisterVolumeRequest
  | SetLoadBasedAutoScalingRequest
  | SetPermissionRequest
  | SetTimeBasedAutoScalingRequest
  | StartInstanceRequest
  | StartStackRequest
  | StopInstanceRequest
  | StopStackRequest
  | TagResourceRequest
  | UnassignInstanceRequest
  | UnassignVolumeRequest
  | UntagResourceRequest
  | UpdateAppRequest
  | UpdateElasticIpRequest
  | UpdateInstanceRequest
  | UpdateLayerRequest
  | UpdateMyUserProfileRequest
  | UpdateRdsDbInstanceRequest
  | UpdateStackRequest
  | UpdateUserProfileRequest
  | UpdateVolumeRequest;

export type ServiceOutputTypes =
  | __MetadataBearer
  | CloneStackResult
  | CreateAppResult
  | CreateDeploymentResult
  | CreateInstanceResult
  | CreateLayerResult
  | CreateStackResult
  | CreateUserProfileResult
  | DescribeAgentVersionsResult
  | DescribeAppsResult
  | DescribeCommandsResult
  | DescribeDeploymentsResult
  | DescribeEcsClustersResult
  | DescribeElasticIpsResult
  | DescribeElasticLoadBalancersResult
  | DescribeInstancesResult
  | DescribeLayersResult
  | DescribeLoadBasedAutoScalingResult
  | DescribeMyUserProfileResult
  | DescribeOperatingSystemsResponse
  | DescribePermissionsResult
  | DescribeRaidArraysResult
  | DescribeRdsDbInstancesResult
  | DescribeServiceErrorsResult
  | DescribeStackProvisioningParametersResult
  | DescribeStackSummaryResult
  | DescribeStacksResult
  | DescribeTimeBasedAutoScalingResult
  | DescribeUserProfilesResult
  | DescribeVolumesResult
  | GetHostnameSuggestionResult
  | GrantAccessResult
  | ListTagsResult
  | RegisterEcsClusterResult
  | RegisterElasticIpResult
  | RegisterInstanceResult
  | RegisterVolumeResult;

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

export type OpsWorksClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>>
  & ClientDefaults
  & RegionInputConfig
  & EndpointsInputConfig
  & AwsAuthInputConfig
  & RetryInputConfig
  & UserAgentInputConfig
  & HostHeaderInputConfig

export type OpsWorksClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions>
  & Required<ClientDefaults>
  & RegionResolvedConfig
  & EndpointsResolvedConfig
  & AwsAuthResolvedConfig
  & RetryResolvedConfig
  & UserAgentResolvedConfig
  & HostHeaderResolvedConfig

/**
 *
 *          <fullname>AWS OpsWorks</fullname>
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
 *
 */
export class OpsWorksClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  OpsWorksClientResolvedConfig
> {
  readonly config: OpsWorksClientResolvedConfig;

  constructor(configuration: OpsWorksClientConfig) {
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
