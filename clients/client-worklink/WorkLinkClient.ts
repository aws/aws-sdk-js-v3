import {
  AssociateDomainCommandInput,
  AssociateDomainCommandOutput
} from "./commands/AssociateDomainCommand";
import {
  AssociateWebsiteAuthorizationProviderCommandInput,
  AssociateWebsiteAuthorizationProviderCommandOutput
} from "./commands/AssociateWebsiteAuthorizationProviderCommand";
import {
  AssociateWebsiteCertificateAuthorityCommandInput,
  AssociateWebsiteCertificateAuthorityCommandOutput
} from "./commands/AssociateWebsiteCertificateAuthorityCommand";
import {
  CreateFleetCommandInput,
  CreateFleetCommandOutput
} from "./commands/CreateFleetCommand";
import {
  DeleteFleetCommandInput,
  DeleteFleetCommandOutput
} from "./commands/DeleteFleetCommand";
import {
  DescribeAuditStreamConfigurationCommandInput,
  DescribeAuditStreamConfigurationCommandOutput
} from "./commands/DescribeAuditStreamConfigurationCommand";
import {
  DescribeCompanyNetworkConfigurationCommandInput,
  DescribeCompanyNetworkConfigurationCommandOutput
} from "./commands/DescribeCompanyNetworkConfigurationCommand";
import {
  DescribeDeviceCommandInput,
  DescribeDeviceCommandOutput
} from "./commands/DescribeDeviceCommand";
import {
  DescribeDevicePolicyConfigurationCommandInput,
  DescribeDevicePolicyConfigurationCommandOutput
} from "./commands/DescribeDevicePolicyConfigurationCommand";
import {
  DescribeDomainCommandInput,
  DescribeDomainCommandOutput
} from "./commands/DescribeDomainCommand";
import {
  DescribeFleetMetadataCommandInput,
  DescribeFleetMetadataCommandOutput
} from "./commands/DescribeFleetMetadataCommand";
import {
  DescribeIdentityProviderConfigurationCommandInput,
  DescribeIdentityProviderConfigurationCommandOutput
} from "./commands/DescribeIdentityProviderConfigurationCommand";
import {
  DescribeWebsiteCertificateAuthorityCommandInput,
  DescribeWebsiteCertificateAuthorityCommandOutput
} from "./commands/DescribeWebsiteCertificateAuthorityCommand";
import {
  DisassociateDomainCommandInput,
  DisassociateDomainCommandOutput
} from "./commands/DisassociateDomainCommand";
import {
  DisassociateWebsiteAuthorizationProviderCommandInput,
  DisassociateWebsiteAuthorizationProviderCommandOutput
} from "./commands/DisassociateWebsiteAuthorizationProviderCommand";
import {
  DisassociateWebsiteCertificateAuthorityCommandInput,
  DisassociateWebsiteCertificateAuthorityCommandOutput
} from "./commands/DisassociateWebsiteCertificateAuthorityCommand";
import {
  ListDevicesCommandInput,
  ListDevicesCommandOutput
} from "./commands/ListDevicesCommand";
import {
  ListDomainsCommandInput,
  ListDomainsCommandOutput
} from "./commands/ListDomainsCommand";
import {
  ListFleetsCommandInput,
  ListFleetsCommandOutput
} from "./commands/ListFleetsCommand";
import {
  ListWebsiteAuthorizationProvidersCommandInput,
  ListWebsiteAuthorizationProvidersCommandOutput
} from "./commands/ListWebsiteAuthorizationProvidersCommand";
import {
  ListWebsiteCertificateAuthoritiesCommandInput,
  ListWebsiteCertificateAuthoritiesCommandOutput
} from "./commands/ListWebsiteCertificateAuthoritiesCommand";
import {
  RestoreDomainAccessCommandInput,
  RestoreDomainAccessCommandOutput
} from "./commands/RestoreDomainAccessCommand";
import {
  RevokeDomainAccessCommandInput,
  RevokeDomainAccessCommandOutput
} from "./commands/RevokeDomainAccessCommand";
import {
  SignOutUserCommandInput,
  SignOutUserCommandOutput
} from "./commands/SignOutUserCommand";
import {
  UpdateAuditStreamConfigurationCommandInput,
  UpdateAuditStreamConfigurationCommandOutput
} from "./commands/UpdateAuditStreamConfigurationCommand";
import {
  UpdateCompanyNetworkConfigurationCommandInput,
  UpdateCompanyNetworkConfigurationCommandOutput
} from "./commands/UpdateCompanyNetworkConfigurationCommand";
import {
  UpdateDevicePolicyConfigurationCommandInput,
  UpdateDevicePolicyConfigurationCommandOutput
} from "./commands/UpdateDevicePolicyConfigurationCommand";
import {
  UpdateDomainMetadataCommandInput,
  UpdateDomainMetadataCommandOutput
} from "./commands/UpdateDomainMetadataCommand";
import {
  UpdateFleetMetadataCommandInput,
  UpdateFleetMetadataCommandOutput
} from "./commands/UpdateFleetMetadataCommand";
import {
  UpdateIdentityProviderConfigurationCommandInput,
  UpdateIdentityProviderConfigurationCommandOutput
} from "./commands/UpdateIdentityProviderConfigurationCommand";
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
  | AssociateDomainCommandInput
  | AssociateWebsiteAuthorizationProviderCommandInput
  | AssociateWebsiteCertificateAuthorityCommandInput
  | CreateFleetCommandInput
  | DeleteFleetCommandInput
  | DescribeAuditStreamConfigurationCommandInput
  | DescribeCompanyNetworkConfigurationCommandInput
  | DescribeDeviceCommandInput
  | DescribeDevicePolicyConfigurationCommandInput
  | DescribeDomainCommandInput
  | DescribeFleetMetadataCommandInput
  | DescribeIdentityProviderConfigurationCommandInput
  | DescribeWebsiteCertificateAuthorityCommandInput
  | DisassociateDomainCommandInput
  | DisassociateWebsiteAuthorizationProviderCommandInput
  | DisassociateWebsiteCertificateAuthorityCommandInput
  | ListDevicesCommandInput
  | ListDomainsCommandInput
  | ListFleetsCommandInput
  | ListWebsiteAuthorizationProvidersCommandInput
  | ListWebsiteCertificateAuthoritiesCommandInput
  | RestoreDomainAccessCommandInput
  | RevokeDomainAccessCommandInput
  | SignOutUserCommandInput
  | UpdateAuditStreamConfigurationCommandInput
  | UpdateCompanyNetworkConfigurationCommandInput
  | UpdateDevicePolicyConfigurationCommandInput
  | UpdateDomainMetadataCommandInput
  | UpdateFleetMetadataCommandInput
  | UpdateIdentityProviderConfigurationCommandInput;

export type ServiceOutputTypes =
  | AssociateDomainCommandOutput
  | AssociateWebsiteAuthorizationProviderCommandOutput
  | AssociateWebsiteCertificateAuthorityCommandOutput
  | CreateFleetCommandOutput
  | DeleteFleetCommandOutput
  | DescribeAuditStreamConfigurationCommandOutput
  | DescribeCompanyNetworkConfigurationCommandOutput
  | DescribeDeviceCommandOutput
  | DescribeDevicePolicyConfigurationCommandOutput
  | DescribeDomainCommandOutput
  | DescribeFleetMetadataCommandOutput
  | DescribeIdentityProviderConfigurationCommandOutput
  | DescribeWebsiteCertificateAuthorityCommandOutput
  | DisassociateDomainCommandOutput
  | DisassociateWebsiteAuthorizationProviderCommandOutput
  | DisassociateWebsiteCertificateAuthorityCommandOutput
  | ListDevicesCommandOutput
  | ListDomainsCommandOutput
  | ListFleetsCommandOutput
  | ListWebsiteAuthorizationProvidersCommandOutput
  | ListWebsiteCertificateAuthoritiesCommandOutput
  | RestoreDomainAccessCommandOutput
  | RevokeDomainAccessCommandOutput
  | SignOutUserCommandOutput
  | UpdateAuditStreamConfigurationCommandOutput
  | UpdateCompanyNetworkConfigurationCommandOutput
  | UpdateDevicePolicyConfigurationCommandOutput
  | UpdateDomainMetadataCommandOutput
  | UpdateFleetMetadataCommandOutput
  | UpdateIdentityProviderConfigurationCommandOutput;

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

export type WorkLinkClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type WorkLinkClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * <p>Amazon WorkLink is a cloud-based service that provides secure access
 *             to internal websites and web apps from iOS phones. In a single step, your users, such as
 *             employees, can access internal websites as efficiently as they access any other public website.
 *             They enter a URL in their web browser, or choose a link to an internal website in an email. Amazon WorkLink
 *             authenticates the user's access and securely renders authorized internal web content in a secure
 *             rendering service in the AWS cloud. Amazon WorkLink doesn't download or store any internal web content on
 *             mobile devices.</p>
 */
export class WorkLinkClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkLinkClientResolvedConfig
> {
  readonly config: WorkLinkClientResolvedConfig;

  constructor(configuration: WorkLinkClientConfig) {
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
