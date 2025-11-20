// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  ClientProtocol,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  HttpRequest,
  HttpResponse,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultNetworkManagerHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { AcceptAttachmentCommandInput, AcceptAttachmentCommandOutput } from "./commands/AcceptAttachmentCommand";
import {
  AssociateConnectPeerCommandInput,
  AssociateConnectPeerCommandOutput,
} from "./commands/AssociateConnectPeerCommand";
import {
  AssociateCustomerGatewayCommandInput,
  AssociateCustomerGatewayCommandOutput,
} from "./commands/AssociateCustomerGatewayCommand";
import { AssociateLinkCommandInput, AssociateLinkCommandOutput } from "./commands/AssociateLinkCommand";
import {
  AssociateTransitGatewayConnectPeerCommandInput,
  AssociateTransitGatewayConnectPeerCommandOutput,
} from "./commands/AssociateTransitGatewayConnectPeerCommand";
import {
  CreateConnectAttachmentCommandInput,
  CreateConnectAttachmentCommandOutput,
} from "./commands/CreateConnectAttachmentCommand";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "./commands/CreateConnectionCommand";
import { CreateConnectPeerCommandInput, CreateConnectPeerCommandOutput } from "./commands/CreateConnectPeerCommand";
import { CreateCoreNetworkCommandInput, CreateCoreNetworkCommandOutput } from "./commands/CreateCoreNetworkCommand";
import {
  CreateCoreNetworkPrefixListAssociationCommandInput,
  CreateCoreNetworkPrefixListAssociationCommandOutput,
} from "./commands/CreateCoreNetworkPrefixListAssociationCommand";
import { CreateDeviceCommandInput, CreateDeviceCommandOutput } from "./commands/CreateDeviceCommand";
import {
  CreateDirectConnectGatewayAttachmentCommandInput,
  CreateDirectConnectGatewayAttachmentCommandOutput,
} from "./commands/CreateDirectConnectGatewayAttachmentCommand";
import {
  CreateGlobalNetworkCommandInput,
  CreateGlobalNetworkCommandOutput,
} from "./commands/CreateGlobalNetworkCommand";
import { CreateLinkCommandInput, CreateLinkCommandOutput } from "./commands/CreateLinkCommand";
import { CreateSiteCommandInput, CreateSiteCommandOutput } from "./commands/CreateSiteCommand";
import {
  CreateSiteToSiteVpnAttachmentCommandInput,
  CreateSiteToSiteVpnAttachmentCommandOutput,
} from "./commands/CreateSiteToSiteVpnAttachmentCommand";
import {
  CreateTransitGatewayPeeringCommandInput,
  CreateTransitGatewayPeeringCommandOutput,
} from "./commands/CreateTransitGatewayPeeringCommand";
import {
  CreateTransitGatewayRouteTableAttachmentCommandInput,
  CreateTransitGatewayRouteTableAttachmentCommandOutput,
} from "./commands/CreateTransitGatewayRouteTableAttachmentCommand";
import {
  CreateVpcAttachmentCommandInput,
  CreateVpcAttachmentCommandOutput,
} from "./commands/CreateVpcAttachmentCommand";
import { DeleteAttachmentCommandInput, DeleteAttachmentCommandOutput } from "./commands/DeleteAttachmentCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "./commands/DeleteConnectionCommand";
import { DeleteConnectPeerCommandInput, DeleteConnectPeerCommandOutput } from "./commands/DeleteConnectPeerCommand";
import { DeleteCoreNetworkCommandInput, DeleteCoreNetworkCommandOutput } from "./commands/DeleteCoreNetworkCommand";
import {
  DeleteCoreNetworkPolicyVersionCommandInput,
  DeleteCoreNetworkPolicyVersionCommandOutput,
} from "./commands/DeleteCoreNetworkPolicyVersionCommand";
import {
  DeleteCoreNetworkPrefixListAssociationCommandInput,
  DeleteCoreNetworkPrefixListAssociationCommandOutput,
} from "./commands/DeleteCoreNetworkPrefixListAssociationCommand";
import { DeleteDeviceCommandInput, DeleteDeviceCommandOutput } from "./commands/DeleteDeviceCommand";
import {
  DeleteGlobalNetworkCommandInput,
  DeleteGlobalNetworkCommandOutput,
} from "./commands/DeleteGlobalNetworkCommand";
import { DeleteLinkCommandInput, DeleteLinkCommandOutput } from "./commands/DeleteLinkCommand";
import { DeletePeeringCommandInput, DeletePeeringCommandOutput } from "./commands/DeletePeeringCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import { DeleteSiteCommandInput, DeleteSiteCommandOutput } from "./commands/DeleteSiteCommand";
import {
  DeregisterTransitGatewayCommandInput,
  DeregisterTransitGatewayCommandOutput,
} from "./commands/DeregisterTransitGatewayCommand";
import {
  DescribeGlobalNetworksCommandInput,
  DescribeGlobalNetworksCommandOutput,
} from "./commands/DescribeGlobalNetworksCommand";
import {
  DisassociateConnectPeerCommandInput,
  DisassociateConnectPeerCommandOutput,
} from "./commands/DisassociateConnectPeerCommand";
import {
  DisassociateCustomerGatewayCommandInput,
  DisassociateCustomerGatewayCommandOutput,
} from "./commands/DisassociateCustomerGatewayCommand";
import { DisassociateLinkCommandInput, DisassociateLinkCommandOutput } from "./commands/DisassociateLinkCommand";
import {
  DisassociateTransitGatewayConnectPeerCommandInput,
  DisassociateTransitGatewayConnectPeerCommandOutput,
} from "./commands/DisassociateTransitGatewayConnectPeerCommand";
import {
  ExecuteCoreNetworkChangeSetCommandInput,
  ExecuteCoreNetworkChangeSetCommandOutput,
} from "./commands/ExecuteCoreNetworkChangeSetCommand";
import {
  GetConnectAttachmentCommandInput,
  GetConnectAttachmentCommandOutput,
} from "./commands/GetConnectAttachmentCommand";
import { GetConnectionsCommandInput, GetConnectionsCommandOutput } from "./commands/GetConnectionsCommand";
import {
  GetConnectPeerAssociationsCommandInput,
  GetConnectPeerAssociationsCommandOutput,
} from "./commands/GetConnectPeerAssociationsCommand";
import { GetConnectPeerCommandInput, GetConnectPeerCommandOutput } from "./commands/GetConnectPeerCommand";
import {
  GetCoreNetworkChangeEventsCommandInput,
  GetCoreNetworkChangeEventsCommandOutput,
} from "./commands/GetCoreNetworkChangeEventsCommand";
import {
  GetCoreNetworkChangeSetCommandInput,
  GetCoreNetworkChangeSetCommandOutput,
} from "./commands/GetCoreNetworkChangeSetCommand";
import { GetCoreNetworkCommandInput, GetCoreNetworkCommandOutput } from "./commands/GetCoreNetworkCommand";
import {
  GetCoreNetworkPolicyCommandInput,
  GetCoreNetworkPolicyCommandOutput,
} from "./commands/GetCoreNetworkPolicyCommand";
import {
  GetCustomerGatewayAssociationsCommandInput,
  GetCustomerGatewayAssociationsCommandOutput,
} from "./commands/GetCustomerGatewayAssociationsCommand";
import { GetDevicesCommandInput, GetDevicesCommandOutput } from "./commands/GetDevicesCommand";
import {
  GetDirectConnectGatewayAttachmentCommandInput,
  GetDirectConnectGatewayAttachmentCommandOutput,
} from "./commands/GetDirectConnectGatewayAttachmentCommand";
import {
  GetLinkAssociationsCommandInput,
  GetLinkAssociationsCommandOutput,
} from "./commands/GetLinkAssociationsCommand";
import { GetLinksCommandInput, GetLinksCommandOutput } from "./commands/GetLinksCommand";
import {
  GetNetworkResourceCountsCommandInput,
  GetNetworkResourceCountsCommandOutput,
} from "./commands/GetNetworkResourceCountsCommand";
import {
  GetNetworkResourceRelationshipsCommandInput,
  GetNetworkResourceRelationshipsCommandOutput,
} from "./commands/GetNetworkResourceRelationshipsCommand";
import {
  GetNetworkResourcesCommandInput,
  GetNetworkResourcesCommandOutput,
} from "./commands/GetNetworkResourcesCommand";
import { GetNetworkRoutesCommandInput, GetNetworkRoutesCommandOutput } from "./commands/GetNetworkRoutesCommand";
import {
  GetNetworkTelemetryCommandInput,
  GetNetworkTelemetryCommandOutput,
} from "./commands/GetNetworkTelemetryCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "./commands/GetResourcePolicyCommand";
import { GetRouteAnalysisCommandInput, GetRouteAnalysisCommandOutput } from "./commands/GetRouteAnalysisCommand";
import { GetSitesCommandInput, GetSitesCommandOutput } from "./commands/GetSitesCommand";
import {
  GetSiteToSiteVpnAttachmentCommandInput,
  GetSiteToSiteVpnAttachmentCommandOutput,
} from "./commands/GetSiteToSiteVpnAttachmentCommand";
import {
  GetTransitGatewayConnectPeerAssociationsCommandInput,
  GetTransitGatewayConnectPeerAssociationsCommandOutput,
} from "./commands/GetTransitGatewayConnectPeerAssociationsCommand";
import {
  GetTransitGatewayPeeringCommandInput,
  GetTransitGatewayPeeringCommandOutput,
} from "./commands/GetTransitGatewayPeeringCommand";
import {
  GetTransitGatewayRegistrationsCommandInput,
  GetTransitGatewayRegistrationsCommandOutput,
} from "./commands/GetTransitGatewayRegistrationsCommand";
import {
  GetTransitGatewayRouteTableAttachmentCommandInput,
  GetTransitGatewayRouteTableAttachmentCommandOutput,
} from "./commands/GetTransitGatewayRouteTableAttachmentCommand";
import { GetVpcAttachmentCommandInput, GetVpcAttachmentCommandOutput } from "./commands/GetVpcAttachmentCommand";
import {
  ListAttachmentRoutingPolicyAssociationsCommandInput,
  ListAttachmentRoutingPolicyAssociationsCommandOutput,
} from "./commands/ListAttachmentRoutingPolicyAssociationsCommand";
import { ListAttachmentsCommandInput, ListAttachmentsCommandOutput } from "./commands/ListAttachmentsCommand";
import { ListConnectPeersCommandInput, ListConnectPeersCommandOutput } from "./commands/ListConnectPeersCommand";
import {
  ListCoreNetworkPolicyVersionsCommandInput,
  ListCoreNetworkPolicyVersionsCommandOutput,
} from "./commands/ListCoreNetworkPolicyVersionsCommand";
import {
  ListCoreNetworkPrefixListAssociationsCommandInput,
  ListCoreNetworkPrefixListAssociationsCommandOutput,
} from "./commands/ListCoreNetworkPrefixListAssociationsCommand";
import {
  ListCoreNetworkRoutingInformationCommandInput,
  ListCoreNetworkRoutingInformationCommandOutput,
} from "./commands/ListCoreNetworkRoutingInformationCommand";
import { ListCoreNetworksCommandInput, ListCoreNetworksCommandOutput } from "./commands/ListCoreNetworksCommand";
import {
  ListOrganizationServiceAccessStatusCommandInput,
  ListOrganizationServiceAccessStatusCommandOutput,
} from "./commands/ListOrganizationServiceAccessStatusCommand";
import { ListPeeringsCommandInput, ListPeeringsCommandOutput } from "./commands/ListPeeringsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutAttachmentRoutingPolicyLabelCommandInput,
  PutAttachmentRoutingPolicyLabelCommandOutput,
} from "./commands/PutAttachmentRoutingPolicyLabelCommand";
import {
  PutCoreNetworkPolicyCommandInput,
  PutCoreNetworkPolicyCommandOutput,
} from "./commands/PutCoreNetworkPolicyCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "./commands/PutResourcePolicyCommand";
import {
  RegisterTransitGatewayCommandInput,
  RegisterTransitGatewayCommandOutput,
} from "./commands/RegisterTransitGatewayCommand";
import { RejectAttachmentCommandInput, RejectAttachmentCommandOutput } from "./commands/RejectAttachmentCommand";
import {
  RemoveAttachmentRoutingPolicyLabelCommandInput,
  RemoveAttachmentRoutingPolicyLabelCommandOutput,
} from "./commands/RemoveAttachmentRoutingPolicyLabelCommand";
import {
  RestoreCoreNetworkPolicyVersionCommandInput,
  RestoreCoreNetworkPolicyVersionCommandOutput,
} from "./commands/RestoreCoreNetworkPolicyVersionCommand";
import {
  StartOrganizationServiceAccessUpdateCommandInput,
  StartOrganizationServiceAccessUpdateCommandOutput,
} from "./commands/StartOrganizationServiceAccessUpdateCommand";
import { StartRouteAnalysisCommandInput, StartRouteAnalysisCommandOutput } from "./commands/StartRouteAnalysisCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateConnectionCommandInput, UpdateConnectionCommandOutput } from "./commands/UpdateConnectionCommand";
import { UpdateCoreNetworkCommandInput, UpdateCoreNetworkCommandOutput } from "./commands/UpdateCoreNetworkCommand";
import { UpdateDeviceCommandInput, UpdateDeviceCommandOutput } from "./commands/UpdateDeviceCommand";
import {
  UpdateDirectConnectGatewayAttachmentCommandInput,
  UpdateDirectConnectGatewayAttachmentCommandOutput,
} from "./commands/UpdateDirectConnectGatewayAttachmentCommand";
import {
  UpdateGlobalNetworkCommandInput,
  UpdateGlobalNetworkCommandOutput,
} from "./commands/UpdateGlobalNetworkCommand";
import { UpdateLinkCommandInput, UpdateLinkCommandOutput } from "./commands/UpdateLinkCommand";
import {
  UpdateNetworkResourceMetadataCommandInput,
  UpdateNetworkResourceMetadataCommandOutput,
} from "./commands/UpdateNetworkResourceMetadataCommand";
import { UpdateSiteCommandInput, UpdateSiteCommandOutput } from "./commands/UpdateSiteCommand";
import {
  UpdateVpcAttachmentCommandInput,
  UpdateVpcAttachmentCommandOutput,
} from "./commands/UpdateVpcAttachmentCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AcceptAttachmentCommandInput
  | AssociateConnectPeerCommandInput
  | AssociateCustomerGatewayCommandInput
  | AssociateLinkCommandInput
  | AssociateTransitGatewayConnectPeerCommandInput
  | CreateConnectAttachmentCommandInput
  | CreateConnectPeerCommandInput
  | CreateConnectionCommandInput
  | CreateCoreNetworkCommandInput
  | CreateCoreNetworkPrefixListAssociationCommandInput
  | CreateDeviceCommandInput
  | CreateDirectConnectGatewayAttachmentCommandInput
  | CreateGlobalNetworkCommandInput
  | CreateLinkCommandInput
  | CreateSiteCommandInput
  | CreateSiteToSiteVpnAttachmentCommandInput
  | CreateTransitGatewayPeeringCommandInput
  | CreateTransitGatewayRouteTableAttachmentCommandInput
  | CreateVpcAttachmentCommandInput
  | DeleteAttachmentCommandInput
  | DeleteConnectPeerCommandInput
  | DeleteConnectionCommandInput
  | DeleteCoreNetworkCommandInput
  | DeleteCoreNetworkPolicyVersionCommandInput
  | DeleteCoreNetworkPrefixListAssociationCommandInput
  | DeleteDeviceCommandInput
  | DeleteGlobalNetworkCommandInput
  | DeleteLinkCommandInput
  | DeletePeeringCommandInput
  | DeleteResourcePolicyCommandInput
  | DeleteSiteCommandInput
  | DeregisterTransitGatewayCommandInput
  | DescribeGlobalNetworksCommandInput
  | DisassociateConnectPeerCommandInput
  | DisassociateCustomerGatewayCommandInput
  | DisassociateLinkCommandInput
  | DisassociateTransitGatewayConnectPeerCommandInput
  | ExecuteCoreNetworkChangeSetCommandInput
  | GetConnectAttachmentCommandInput
  | GetConnectPeerAssociationsCommandInput
  | GetConnectPeerCommandInput
  | GetConnectionsCommandInput
  | GetCoreNetworkChangeEventsCommandInput
  | GetCoreNetworkChangeSetCommandInput
  | GetCoreNetworkCommandInput
  | GetCoreNetworkPolicyCommandInput
  | GetCustomerGatewayAssociationsCommandInput
  | GetDevicesCommandInput
  | GetDirectConnectGatewayAttachmentCommandInput
  | GetLinkAssociationsCommandInput
  | GetLinksCommandInput
  | GetNetworkResourceCountsCommandInput
  | GetNetworkResourceRelationshipsCommandInput
  | GetNetworkResourcesCommandInput
  | GetNetworkRoutesCommandInput
  | GetNetworkTelemetryCommandInput
  | GetResourcePolicyCommandInput
  | GetRouteAnalysisCommandInput
  | GetSiteToSiteVpnAttachmentCommandInput
  | GetSitesCommandInput
  | GetTransitGatewayConnectPeerAssociationsCommandInput
  | GetTransitGatewayPeeringCommandInput
  | GetTransitGatewayRegistrationsCommandInput
  | GetTransitGatewayRouteTableAttachmentCommandInput
  | GetVpcAttachmentCommandInput
  | ListAttachmentRoutingPolicyAssociationsCommandInput
  | ListAttachmentsCommandInput
  | ListConnectPeersCommandInput
  | ListCoreNetworkPolicyVersionsCommandInput
  | ListCoreNetworkPrefixListAssociationsCommandInput
  | ListCoreNetworkRoutingInformationCommandInput
  | ListCoreNetworksCommandInput
  | ListOrganizationServiceAccessStatusCommandInput
  | ListPeeringsCommandInput
  | ListTagsForResourceCommandInput
  | PutAttachmentRoutingPolicyLabelCommandInput
  | PutCoreNetworkPolicyCommandInput
  | PutResourcePolicyCommandInput
  | RegisterTransitGatewayCommandInput
  | RejectAttachmentCommandInput
  | RemoveAttachmentRoutingPolicyLabelCommandInput
  | RestoreCoreNetworkPolicyVersionCommandInput
  | StartOrganizationServiceAccessUpdateCommandInput
  | StartRouteAnalysisCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateConnectionCommandInput
  | UpdateCoreNetworkCommandInput
  | UpdateDeviceCommandInput
  | UpdateDirectConnectGatewayAttachmentCommandInput
  | UpdateGlobalNetworkCommandInput
  | UpdateLinkCommandInput
  | UpdateNetworkResourceMetadataCommandInput
  | UpdateSiteCommandInput
  | UpdateVpcAttachmentCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptAttachmentCommandOutput
  | AssociateConnectPeerCommandOutput
  | AssociateCustomerGatewayCommandOutput
  | AssociateLinkCommandOutput
  | AssociateTransitGatewayConnectPeerCommandOutput
  | CreateConnectAttachmentCommandOutput
  | CreateConnectPeerCommandOutput
  | CreateConnectionCommandOutput
  | CreateCoreNetworkCommandOutput
  | CreateCoreNetworkPrefixListAssociationCommandOutput
  | CreateDeviceCommandOutput
  | CreateDirectConnectGatewayAttachmentCommandOutput
  | CreateGlobalNetworkCommandOutput
  | CreateLinkCommandOutput
  | CreateSiteCommandOutput
  | CreateSiteToSiteVpnAttachmentCommandOutput
  | CreateTransitGatewayPeeringCommandOutput
  | CreateTransitGatewayRouteTableAttachmentCommandOutput
  | CreateVpcAttachmentCommandOutput
  | DeleteAttachmentCommandOutput
  | DeleteConnectPeerCommandOutput
  | DeleteConnectionCommandOutput
  | DeleteCoreNetworkCommandOutput
  | DeleteCoreNetworkPolicyVersionCommandOutput
  | DeleteCoreNetworkPrefixListAssociationCommandOutput
  | DeleteDeviceCommandOutput
  | DeleteGlobalNetworkCommandOutput
  | DeleteLinkCommandOutput
  | DeletePeeringCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeleteSiteCommandOutput
  | DeregisterTransitGatewayCommandOutput
  | DescribeGlobalNetworksCommandOutput
  | DisassociateConnectPeerCommandOutput
  | DisassociateCustomerGatewayCommandOutput
  | DisassociateLinkCommandOutput
  | DisassociateTransitGatewayConnectPeerCommandOutput
  | ExecuteCoreNetworkChangeSetCommandOutput
  | GetConnectAttachmentCommandOutput
  | GetConnectPeerAssociationsCommandOutput
  | GetConnectPeerCommandOutput
  | GetConnectionsCommandOutput
  | GetCoreNetworkChangeEventsCommandOutput
  | GetCoreNetworkChangeSetCommandOutput
  | GetCoreNetworkCommandOutput
  | GetCoreNetworkPolicyCommandOutput
  | GetCustomerGatewayAssociationsCommandOutput
  | GetDevicesCommandOutput
  | GetDirectConnectGatewayAttachmentCommandOutput
  | GetLinkAssociationsCommandOutput
  | GetLinksCommandOutput
  | GetNetworkResourceCountsCommandOutput
  | GetNetworkResourceRelationshipsCommandOutput
  | GetNetworkResourcesCommandOutput
  | GetNetworkRoutesCommandOutput
  | GetNetworkTelemetryCommandOutput
  | GetResourcePolicyCommandOutput
  | GetRouteAnalysisCommandOutput
  | GetSiteToSiteVpnAttachmentCommandOutput
  | GetSitesCommandOutput
  | GetTransitGatewayConnectPeerAssociationsCommandOutput
  | GetTransitGatewayPeeringCommandOutput
  | GetTransitGatewayRegistrationsCommandOutput
  | GetTransitGatewayRouteTableAttachmentCommandOutput
  | GetVpcAttachmentCommandOutput
  | ListAttachmentRoutingPolicyAssociationsCommandOutput
  | ListAttachmentsCommandOutput
  | ListConnectPeersCommandOutput
  | ListCoreNetworkPolicyVersionsCommandOutput
  | ListCoreNetworkPrefixListAssociationsCommandOutput
  | ListCoreNetworkRoutingInformationCommandOutput
  | ListCoreNetworksCommandOutput
  | ListOrganizationServiceAccessStatusCommandOutput
  | ListPeeringsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutAttachmentRoutingPolicyLabelCommandOutput
  | PutCoreNetworkPolicyCommandOutput
  | PutResourcePolicyCommandOutput
  | RegisterTransitGatewayCommandOutput
  | RejectAttachmentCommandOutput
  | RemoveAttachmentRoutingPolicyLabelCommandOutput
  | RestoreCoreNetworkPolicyVersionCommandOutput
  | StartOrganizationServiceAccessUpdateCommandOutput
  | StartRouteAnalysisCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateConnectionCommandOutput
  | UpdateCoreNetworkCommandOutput
  | UpdateDeviceCommandOutput
  | UpdateDirectConnectGatewayAttachmentCommandOutput
  | UpdateGlobalNetworkCommandOutput
  | UpdateLinkCommandOutput
  | UpdateNetworkResourceMetadataCommandOutput
  | UpdateSiteCommandOutput
  | UpdateVpcAttachmentCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
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
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The protocol controlling the message type (e.g. HTTP) and format (e.g. JSON)
   * may be overridden. A default will always be set by the client.
   * Available options depend on the service's supported protocols and will not be validated by
   * the client.
   * @alpha
   *
   */
  protocol?: ClientProtocol<HttpRequest, HttpResponse>;

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type NetworkManagerClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of NetworkManagerClient class constructor that set the region, credentials and other options.
 */
export interface NetworkManagerClientConfig extends NetworkManagerClientConfigType {}

/**
 * @public
 */
export type NetworkManagerClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of NetworkManagerClient class. This is resolved and normalized from the {@link NetworkManagerClientConfig | constructor configuration interface}.
 */
export interface NetworkManagerClientResolvedConfig extends NetworkManagerClientResolvedConfigType {}

/**
 * <p>Amazon Web Services enables you to centrally manage your Amazon Web Services Cloud WAN core network and your Transit Gateway network across Amazon Web Services accounts, Regions, and on-premises locations.</p>
 * @public
 */
export class NetworkManagerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  NetworkManagerClientResolvedConfig
> {
  /**
   * The resolved configuration of NetworkManagerClient class. This is resolved and normalized from the {@link NetworkManagerClientConfig | constructor configuration interface}.
   */
  readonly config: NetworkManagerClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<NetworkManagerClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultNetworkManagerHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: NetworkManagerClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
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
