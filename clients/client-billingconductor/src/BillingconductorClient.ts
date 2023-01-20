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

import { AssociateAccountsCommandInput, AssociateAccountsCommandOutput } from "./commands/AssociateAccountsCommand";
import {
  AssociatePricingRulesCommandInput,
  AssociatePricingRulesCommandOutput,
} from "./commands/AssociatePricingRulesCommand";
import {
  BatchAssociateResourcesToCustomLineItemCommandInput,
  BatchAssociateResourcesToCustomLineItemCommandOutput,
} from "./commands/BatchAssociateResourcesToCustomLineItemCommand";
import {
  BatchDisassociateResourcesFromCustomLineItemCommandInput,
  BatchDisassociateResourcesFromCustomLineItemCommandOutput,
} from "./commands/BatchDisassociateResourcesFromCustomLineItemCommand";
import { CreateBillingGroupCommandInput, CreateBillingGroupCommandOutput } from "./commands/CreateBillingGroupCommand";
import {
  CreateCustomLineItemCommandInput,
  CreateCustomLineItemCommandOutput,
} from "./commands/CreateCustomLineItemCommand";
import { CreatePricingPlanCommandInput, CreatePricingPlanCommandOutput } from "./commands/CreatePricingPlanCommand";
import { CreatePricingRuleCommandInput, CreatePricingRuleCommandOutput } from "./commands/CreatePricingRuleCommand";
import { DeleteBillingGroupCommandInput, DeleteBillingGroupCommandOutput } from "./commands/DeleteBillingGroupCommand";
import {
  DeleteCustomLineItemCommandInput,
  DeleteCustomLineItemCommandOutput,
} from "./commands/DeleteCustomLineItemCommand";
import { DeletePricingPlanCommandInput, DeletePricingPlanCommandOutput } from "./commands/DeletePricingPlanCommand";
import { DeletePricingRuleCommandInput, DeletePricingRuleCommandOutput } from "./commands/DeletePricingRuleCommand";
import {
  DisassociateAccountsCommandInput,
  DisassociateAccountsCommandOutput,
} from "./commands/DisassociateAccountsCommand";
import {
  DisassociatePricingRulesCommandInput,
  DisassociatePricingRulesCommandOutput,
} from "./commands/DisassociatePricingRulesCommand";
import {
  ListAccountAssociationsCommandInput,
  ListAccountAssociationsCommandOutput,
} from "./commands/ListAccountAssociationsCommand";
import {
  ListBillingGroupCostReportsCommandInput,
  ListBillingGroupCostReportsCommandOutput,
} from "./commands/ListBillingGroupCostReportsCommand";
import { ListBillingGroupsCommandInput, ListBillingGroupsCommandOutput } from "./commands/ListBillingGroupsCommand";
import {
  ListCustomLineItemsCommandInput,
  ListCustomLineItemsCommandOutput,
} from "./commands/ListCustomLineItemsCommand";
import {
  ListCustomLineItemVersionsCommandInput,
  ListCustomLineItemVersionsCommandOutput,
} from "./commands/ListCustomLineItemVersionsCommand";
import {
  ListPricingPlansAssociatedWithPricingRuleCommandInput,
  ListPricingPlansAssociatedWithPricingRuleCommandOutput,
} from "./commands/ListPricingPlansAssociatedWithPricingRuleCommand";
import { ListPricingPlansCommandInput, ListPricingPlansCommandOutput } from "./commands/ListPricingPlansCommand";
import {
  ListPricingRulesAssociatedToPricingPlanCommandInput,
  ListPricingRulesAssociatedToPricingPlanCommandOutput,
} from "./commands/ListPricingRulesAssociatedToPricingPlanCommand";
import { ListPricingRulesCommandInput, ListPricingRulesCommandOutput } from "./commands/ListPricingRulesCommand";
import {
  ListResourcesAssociatedToCustomLineItemCommandInput,
  ListResourcesAssociatedToCustomLineItemCommandOutput,
} from "./commands/ListResourcesAssociatedToCustomLineItemCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateBillingGroupCommandInput, UpdateBillingGroupCommandOutput } from "./commands/UpdateBillingGroupCommand";
import {
  UpdateCustomLineItemCommandInput,
  UpdateCustomLineItemCommandOutput,
} from "./commands/UpdateCustomLineItemCommand";
import { UpdatePricingPlanCommandInput, UpdatePricingPlanCommandOutput } from "./commands/UpdatePricingPlanCommand";
import { UpdatePricingRuleCommandInput, UpdatePricingRuleCommandOutput } from "./commands/UpdatePricingRuleCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AssociateAccountsCommandInput
  | AssociatePricingRulesCommandInput
  | BatchAssociateResourcesToCustomLineItemCommandInput
  | BatchDisassociateResourcesFromCustomLineItemCommandInput
  | CreateBillingGroupCommandInput
  | CreateCustomLineItemCommandInput
  | CreatePricingPlanCommandInput
  | CreatePricingRuleCommandInput
  | DeleteBillingGroupCommandInput
  | DeleteCustomLineItemCommandInput
  | DeletePricingPlanCommandInput
  | DeletePricingRuleCommandInput
  | DisassociateAccountsCommandInput
  | DisassociatePricingRulesCommandInput
  | ListAccountAssociationsCommandInput
  | ListBillingGroupCostReportsCommandInput
  | ListBillingGroupsCommandInput
  | ListCustomLineItemVersionsCommandInput
  | ListCustomLineItemsCommandInput
  | ListPricingPlansAssociatedWithPricingRuleCommandInput
  | ListPricingPlansCommandInput
  | ListPricingRulesAssociatedToPricingPlanCommandInput
  | ListPricingRulesCommandInput
  | ListResourcesAssociatedToCustomLineItemCommandInput
  | ListTagsForResourceCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateBillingGroupCommandInput
  | UpdateCustomLineItemCommandInput
  | UpdatePricingPlanCommandInput
  | UpdatePricingRuleCommandInput;

export type ServiceOutputTypes =
  | AssociateAccountsCommandOutput
  | AssociatePricingRulesCommandOutput
  | BatchAssociateResourcesToCustomLineItemCommandOutput
  | BatchDisassociateResourcesFromCustomLineItemCommandOutput
  | CreateBillingGroupCommandOutput
  | CreateCustomLineItemCommandOutput
  | CreatePricingPlanCommandOutput
  | CreatePricingRuleCommandOutput
  | DeleteBillingGroupCommandOutput
  | DeleteCustomLineItemCommandOutput
  | DeletePricingPlanCommandOutput
  | DeletePricingRuleCommandOutput
  | DisassociateAccountsCommandOutput
  | DisassociatePricingRulesCommandOutput
  | ListAccountAssociationsCommandOutput
  | ListBillingGroupCostReportsCommandOutput
  | ListBillingGroupsCommandOutput
  | ListCustomLineItemVersionsCommandOutput
  | ListCustomLineItemsCommandOutput
  | ListPricingPlansAssociatedWithPricingRuleCommandOutput
  | ListPricingPlansCommandOutput
  | ListPricingRulesAssociatedToPricingPlanCommandOutput
  | ListPricingRulesCommandOutput
  | ListResourcesAssociatedToCustomLineItemCommandOutput
  | ListTagsForResourceCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateBillingGroupCommandOutput
  | UpdateCustomLineItemCommandOutput
  | UpdatePricingPlanCommandOutput
  | UpdatePricingRuleCommandOutput;

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

type BillingconductorClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of BillingconductorClient class constructor that set the region, credentials and other options.
 */
export interface BillingconductorClientConfig extends BillingconductorClientConfigType {}

type BillingconductorClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of BillingconductorClient class. This is resolved and normalized from the {@link BillingconductorClientConfig | constructor configuration interface}.
 */
export interface BillingconductorClientResolvedConfig extends BillingconductorClientResolvedConfigType {}

/**
 * <p>Amazon Web Services Billing Conductor is a fully managed service that you can use
 *       to customize a <a href="https://docs.aws.amazon.com/billingconductor/latest/userguide/understanding-eb.html#eb-other-definitions">pro forma</a> version of your billing data each month, to accurately show or chargeback
 *       your end customers. Amazon Web Services Billing Conductor doesn't change the way
 *       you're billed by Amazon Web Services each month by design. Instead, it provides you with a
 *       mechanism to configure, generate, and display rates to certain customers over a given billing
 *       period. You can also analyze the difference between the rates you apply to your accounting
 *       groupings relative to your actual rates from Amazon Web Services. As a result of your Amazon Web Services Billing Conductor configuration, the payer account can also see the
 *       custom rate applied on the billing details page of the <a href="https://console.aws.amazon.com/billing">Amazon Web Services Billing console</a>, or configure a cost and usage report per
 *       billing group.</p>
 *          <p>This documentation shows how you can configure Amazon Web Services Billing Conductor using its
 *       API. For more information about using the <a href="https://console.aws.amazon.com/billingconductor/">Amazon Web Services
 *         Billing Conductor</a> user interface, see the <a href="https://docs.aws.amazon.com/billingconductor/latest/userguide/what-is-billingconductor.html"> Amazon Web Services Billing Conductor User Guide</a>.</p>
 */
export class BillingconductorClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  BillingconductorClientResolvedConfig
> {
  /**
   * The resolved configuration of BillingconductorClient class. This is resolved and normalized from the {@link BillingconductorClientConfig | constructor configuration interface}.
   */
  readonly config: BillingconductorClientResolvedConfig;

  constructor(configuration: BillingconductorClientConfig) {
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
