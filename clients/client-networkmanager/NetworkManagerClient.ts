import {
  AssociateCustomerGatewayCommandInput,
  AssociateCustomerGatewayCommandOutput
} from "./commands/AssociateCustomerGatewayCommand";
import {
  AssociateLinkCommandInput,
  AssociateLinkCommandOutput
} from "./commands/AssociateLinkCommand";
import {
  CreateDeviceCommandInput,
  CreateDeviceCommandOutput
} from "./commands/CreateDeviceCommand";
import {
  CreateGlobalNetworkCommandInput,
  CreateGlobalNetworkCommandOutput
} from "./commands/CreateGlobalNetworkCommand";
import {
  CreateLinkCommandInput,
  CreateLinkCommandOutput
} from "./commands/CreateLinkCommand";
import {
  CreateSiteCommandInput,
  CreateSiteCommandOutput
} from "./commands/CreateSiteCommand";
import {
  DeleteDeviceCommandInput,
  DeleteDeviceCommandOutput
} from "./commands/DeleteDeviceCommand";
import {
  DeleteGlobalNetworkCommandInput,
  DeleteGlobalNetworkCommandOutput
} from "./commands/DeleteGlobalNetworkCommand";
import {
  DeleteLinkCommandInput,
  DeleteLinkCommandOutput
} from "./commands/DeleteLinkCommand";
import {
  DeleteSiteCommandInput,
  DeleteSiteCommandOutput
} from "./commands/DeleteSiteCommand";
import {
  DeregisterTransitGatewayCommandInput,
  DeregisterTransitGatewayCommandOutput
} from "./commands/DeregisterTransitGatewayCommand";
import {
  DescribeGlobalNetworksCommandInput,
  DescribeGlobalNetworksCommandOutput
} from "./commands/DescribeGlobalNetworksCommand";
import {
  DisassociateCustomerGatewayCommandInput,
  DisassociateCustomerGatewayCommandOutput
} from "./commands/DisassociateCustomerGatewayCommand";
import {
  DisassociateLinkCommandInput,
  DisassociateLinkCommandOutput
} from "./commands/DisassociateLinkCommand";
import {
  GetCustomerGatewayAssociationsCommandInput,
  GetCustomerGatewayAssociationsCommandOutput
} from "./commands/GetCustomerGatewayAssociationsCommand";
import {
  GetDevicesCommandInput,
  GetDevicesCommandOutput
} from "./commands/GetDevicesCommand";
import {
  GetLinkAssociationsCommandInput,
  GetLinkAssociationsCommandOutput
} from "./commands/GetLinkAssociationsCommand";
import {
  GetLinksCommandInput,
  GetLinksCommandOutput
} from "./commands/GetLinksCommand";
import {
  GetSitesCommandInput,
  GetSitesCommandOutput
} from "./commands/GetSitesCommand";
import {
  GetTransitGatewayRegistrationsCommandInput,
  GetTransitGatewayRegistrationsCommandOutput
} from "./commands/GetTransitGatewayRegistrationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  RegisterTransitGatewayCommandInput,
  RegisterTransitGatewayCommandOutput
} from "./commands/RegisterTransitGatewayCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
import {
  UpdateDeviceCommandInput,
  UpdateDeviceCommandOutput
} from "./commands/UpdateDeviceCommand";
import {
  UpdateGlobalNetworkCommandInput,
  UpdateGlobalNetworkCommandOutput
} from "./commands/UpdateGlobalNetworkCommand";
import {
  UpdateLinkCommandInput,
  UpdateLinkCommandOutput
} from "./commands/UpdateLinkCommand";
import {
  UpdateSiteCommandInput,
  UpdateSiteCommandOutput
} from "./commands/UpdateSiteCommand";
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
  | AssociateCustomerGatewayCommandInput
  | AssociateLinkCommandInput
  | CreateDeviceCommandInput
  | CreateGlobalNetworkCommandInput
  | CreateLinkCommandInput
  | CreateSiteCommandInput
  | DeleteDeviceCommandInput
  | DeleteGlobalNetworkCommandInput
  | DeleteLinkCommandInput
  | DeleteSiteCommandInput
  | DeregisterTransitGatewayCommandInput
  | DescribeGlobalNetworksCommandInput
  | DisassociateCustomerGatewayCommandInput
  | DisassociateLinkCommandInput
  | GetCustomerGatewayAssociationsCommandInput
  | GetDevicesCommandInput
  | GetLinkAssociationsCommandInput
  | GetLinksCommandInput
  | GetSitesCommandInput
  | GetTransitGatewayRegistrationsCommandInput
  | ListTagsForResourceCommandInput
  | RegisterTransitGatewayCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateDeviceCommandInput
  | UpdateGlobalNetworkCommandInput
  | UpdateLinkCommandInput
  | UpdateSiteCommandInput;

export type ServiceOutputTypes =
  | AssociateCustomerGatewayCommandOutput
  | AssociateLinkCommandOutput
  | CreateDeviceCommandOutput
  | CreateGlobalNetworkCommandOutput
  | CreateLinkCommandOutput
  | CreateSiteCommandOutput
  | DeleteDeviceCommandOutput
  | DeleteGlobalNetworkCommandOutput
  | DeleteLinkCommandOutput
  | DeleteSiteCommandOutput
  | DeregisterTransitGatewayCommandOutput
  | DescribeGlobalNetworksCommandOutput
  | DisassociateCustomerGatewayCommandOutput
  | DisassociateLinkCommandOutput
  | GetCustomerGatewayAssociationsCommandOutput
  | GetDevicesCommandOutput
  | GetLinkAssociationsCommandOutput
  | GetLinksCommandOutput
  | GetSitesCommandOutput
  | GetTransitGatewayRegistrationsCommandOutput
  | ListTagsForResourceCommandOutput
  | RegisterTransitGatewayCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateDeviceCommandOutput
  | UpdateGlobalNetworkCommandOutput
  | UpdateLinkCommandOutput
  | UpdateSiteCommandOutput;

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

export type NetworkManagerClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type NetworkManagerClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * <p>Transit Gateway Network Manager (Network Manager) enables you to create a global network, in which you can monitor your
 *             AWS and on-premises networks that are built around transit gateways.</p>
 */
export class NetworkManagerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  NetworkManagerClientResolvedConfig
> {
  readonly config: NetworkManagerClientResolvedConfig;

  constructor(configuration: NetworkManagerClientConfig) {
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
