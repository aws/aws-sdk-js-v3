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
  defaultInvoicingHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  BatchGetInvoiceProfileCommandInput,
  BatchGetInvoiceProfileCommandOutput,
} from "./commands/BatchGetInvoiceProfileCommand";
import { CreateInvoiceUnitCommandInput, CreateInvoiceUnitCommandOutput } from "./commands/CreateInvoiceUnitCommand";
import {
  CreateProcurementPortalPreferenceCommandInput,
  CreateProcurementPortalPreferenceCommandOutput,
} from "./commands/CreateProcurementPortalPreferenceCommand";
import { DeleteInvoiceUnitCommandInput, DeleteInvoiceUnitCommandOutput } from "./commands/DeleteInvoiceUnitCommand";
import {
  DeleteProcurementPortalPreferenceCommandInput,
  DeleteProcurementPortalPreferenceCommandOutput,
} from "./commands/DeleteProcurementPortalPreferenceCommand";
import { GetInvoicePDFCommandInput, GetInvoicePDFCommandOutput } from "./commands/GetInvoicePDFCommand";
import { GetInvoiceUnitCommandInput, GetInvoiceUnitCommandOutput } from "./commands/GetInvoiceUnitCommand";
import {
  GetProcurementPortalPreferenceCommandInput,
  GetProcurementPortalPreferenceCommandOutput,
} from "./commands/GetProcurementPortalPreferenceCommand";
import {
  ListInvoiceSummariesCommandInput,
  ListInvoiceSummariesCommandOutput,
} from "./commands/ListInvoiceSummariesCommand";
import { ListInvoiceUnitsCommandInput, ListInvoiceUnitsCommandOutput } from "./commands/ListInvoiceUnitsCommand";
import {
  ListProcurementPortalPreferencesCommandInput,
  ListProcurementPortalPreferencesCommandOutput,
} from "./commands/ListProcurementPortalPreferencesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutProcurementPortalPreferenceCommandInput,
  PutProcurementPortalPreferenceCommandOutput,
} from "./commands/PutProcurementPortalPreferenceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateInvoiceUnitCommandInput, UpdateInvoiceUnitCommandOutput } from "./commands/UpdateInvoiceUnitCommand";
import {
  UpdateProcurementPortalPreferenceStatusCommandInput,
  UpdateProcurementPortalPreferenceStatusCommandOutput,
} from "./commands/UpdateProcurementPortalPreferenceStatusCommand";
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
  | BatchGetInvoiceProfileCommandInput
  | CreateInvoiceUnitCommandInput
  | CreateProcurementPortalPreferenceCommandInput
  | DeleteInvoiceUnitCommandInput
  | DeleteProcurementPortalPreferenceCommandInput
  | GetInvoicePDFCommandInput
  | GetInvoiceUnitCommandInput
  | GetProcurementPortalPreferenceCommandInput
  | ListInvoiceSummariesCommandInput
  | ListInvoiceUnitsCommandInput
  | ListProcurementPortalPreferencesCommandInput
  | ListTagsForResourceCommandInput
  | PutProcurementPortalPreferenceCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateInvoiceUnitCommandInput
  | UpdateProcurementPortalPreferenceStatusCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchGetInvoiceProfileCommandOutput
  | CreateInvoiceUnitCommandOutput
  | CreateProcurementPortalPreferenceCommandOutput
  | DeleteInvoiceUnitCommandOutput
  | DeleteProcurementPortalPreferenceCommandOutput
  | GetInvoicePDFCommandOutput
  | GetInvoiceUnitCommandOutput
  | GetProcurementPortalPreferenceCommandOutput
  | ListInvoiceSummariesCommandOutput
  | ListInvoiceUnitsCommandOutput
  | ListProcurementPortalPreferencesCommandOutput
  | ListTagsForResourceCommandOutput
  | PutProcurementPortalPreferenceCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateInvoiceUnitCommandOutput
  | UpdateProcurementPortalPreferenceStatusCommandOutput;

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
export type InvoicingClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of InvoicingClient class constructor that set the region, credentials and other options.
 */
export interface InvoicingClientConfig extends InvoicingClientConfigType {}

/**
 * @public
 */
export type InvoicingClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of InvoicingClient class. This is resolved and normalized from the {@link InvoicingClientConfig | constructor configuration interface}.
 */
export interface InvoicingClientResolvedConfig extends InvoicingClientResolvedConfigType {}

/**
 * <p> <b>Amazon Web Services Invoice Configuration</b> </p> <p>You can use Amazon Web Services Invoice Configuration APIs to programmatically create, update, delete, get, and list invoice units. You can also programmatically fetch the information of the invoice receiver. For example, business legal name, address, and invoicing contacts. </p> <p>You can use Amazon Web Services Invoice Configuration to receive separate Amazon Web Services invoices based your organizational needs. By using Amazon Web Services Invoice Configuration, you can configure invoice units that are groups of Amazon Web Services accounts that represent your business entities, and receive separate invoices for each business entity. You can also assign a unique member or payer account as the invoice receiver for each invoice unit. As you create new accounts within your Organizations using Amazon Web Services Invoice Configuration APIs, you can automate the creation of new invoice units and subsequently automate the addition of new accounts to your invoice units.</p> <p> <b>Amazon Web Services Procurement Portal Preferences</b> </p> <p>You can use Amazon Web Services Procurement Portal Preferences APIs to programmatically create, update, delete, get, and list procurement portal connections and e-invoice delivery settings. You can also programmatically fetch and modify the status of procurement portal configurations. For example, SAP Business Network or Coupa connections, configure e-invoice delivery and purchase order retrieval features.</p> <p>You can use Amazon Web Services Procurement Portal Preferences to connect e-invoice delivery to your procurement portals based on your organizational needs. By using Amazon Web Services Procurement Portal Preferences, you can configure connections to SAP Business Network and Coupa procurement portals that retrieve purchase orders and deliver Amazon Web Services invoices on the same day they are generated. You can also set up testing environments to validate invoice delivery without affecting live transactions, and manage contact information for portal setup and support. </p> <p>Administrative users should understand that billing read-only policies will show all procurement portal connection details. Review your IAM policies to ensure appropriate access controls are in place for procurement portal preferences.</p> <p> <b>Amazon Web Services Invoice Management</b> </p> <p>You can use Amazon Web Services Invoice Management APIs to programmatically list invoice summaries and get invoice documents. You can also programmatically fetch invoice documents with S3 pre-signed URLs.</p> <p>You can use Amazon Web Services Invoice Management to access invoice information based on your organizational needs. By using Amazon Web Services Invoice Management, you can retrieve paginated lists of invoice summaries that include invoice metadata such as invoice IDs, amounts, and currencies without downloading documents. You can also download invoice documents in PDF format using S3 pre-signed URLs with built-in expiration. As you manage invoices across your organization using Amazon Web Services Invoice Management APIs, you can create invoice retrieval processes and integrate invoice data into your financial systems.</p> <p>Service endpoint</p> <p>You can use the following endpoints for Amazon Web Services Invoice Configuration, Amazon Web Services Procurement Portal Preferences, and Amazon Web Services Invoice Management:</p> <ul> <li> <p> <code>https://invoicing.us-east-1.api.aws</code> </p> </li> </ul>
 * @public
 */
export class InvoicingClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  InvoicingClientResolvedConfig
> {
  /**
   * The resolved configuration of InvoicingClient class. This is resolved and normalized from the {@link InvoicingClientConfig | constructor configuration interface}.
   */
  readonly config: InvoicingClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<InvoicingClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultInvoicingHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: InvoicingClientResolvedConfig) =>
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
