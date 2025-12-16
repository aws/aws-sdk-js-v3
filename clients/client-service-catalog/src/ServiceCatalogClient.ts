// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import {
  type BodyLengthCalculator as __BodyLengthCalculator,
  type CheckOptionalClientConfig as __CheckOptionalClientConfig,
  type ChecksumConstructor as __ChecksumConstructor,
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
  type Logger as __Logger,
  type Provider as __Provider,
  type StreamCollector as __StreamCollector,
  type UrlParser as __UrlParser,
  AwsCredentialIdentityProvider,
  EndpointV2 as __EndpointV2,
  Provider,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultServiceCatalogHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AcceptPortfolioShareCommandInput,
  AcceptPortfolioShareCommandOutput,
} from "./commands/AcceptPortfolioShareCommand";
import {
  AssociateBudgetWithResourceCommandInput,
  AssociateBudgetWithResourceCommandOutput,
} from "./commands/AssociateBudgetWithResourceCommand";
import {
  AssociatePrincipalWithPortfolioCommandInput,
  AssociatePrincipalWithPortfolioCommandOutput,
} from "./commands/AssociatePrincipalWithPortfolioCommand";
import {
  AssociateProductWithPortfolioCommandInput,
  AssociateProductWithPortfolioCommandOutput,
} from "./commands/AssociateProductWithPortfolioCommand";
import {
  AssociateServiceActionWithProvisioningArtifactCommandInput,
  AssociateServiceActionWithProvisioningArtifactCommandOutput,
} from "./commands/AssociateServiceActionWithProvisioningArtifactCommand";
import {
  AssociateTagOptionWithResourceCommandInput,
  AssociateTagOptionWithResourceCommandOutput,
} from "./commands/AssociateTagOptionWithResourceCommand";
import {
  BatchAssociateServiceActionWithProvisioningArtifactCommandInput,
  BatchAssociateServiceActionWithProvisioningArtifactCommandOutput,
} from "./commands/BatchAssociateServiceActionWithProvisioningArtifactCommand";
import {
  BatchDisassociateServiceActionFromProvisioningArtifactCommandInput,
  BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput,
} from "./commands/BatchDisassociateServiceActionFromProvisioningArtifactCommand";
import { CopyProductCommandInput, CopyProductCommandOutput } from "./commands/CopyProductCommand";
import { CreateConstraintCommandInput, CreateConstraintCommandOutput } from "./commands/CreateConstraintCommand";
import { CreatePortfolioCommandInput, CreatePortfolioCommandOutput } from "./commands/CreatePortfolioCommand";
import {
  CreatePortfolioShareCommandInput,
  CreatePortfolioShareCommandOutput,
} from "./commands/CreatePortfolioShareCommand";
import { CreateProductCommandInput, CreateProductCommandOutput } from "./commands/CreateProductCommand";
import {
  CreateProvisionedProductPlanCommandInput,
  CreateProvisionedProductPlanCommandOutput,
} from "./commands/CreateProvisionedProductPlanCommand";
import {
  CreateProvisioningArtifactCommandInput,
  CreateProvisioningArtifactCommandOutput,
} from "./commands/CreateProvisioningArtifactCommand";
import {
  CreateServiceActionCommandInput,
  CreateServiceActionCommandOutput,
} from "./commands/CreateServiceActionCommand";
import { CreateTagOptionCommandInput, CreateTagOptionCommandOutput } from "./commands/CreateTagOptionCommand";
import { DeleteConstraintCommandInput, DeleteConstraintCommandOutput } from "./commands/DeleteConstraintCommand";
import { DeletePortfolioCommandInput, DeletePortfolioCommandOutput } from "./commands/DeletePortfolioCommand";
import {
  DeletePortfolioShareCommandInput,
  DeletePortfolioShareCommandOutput,
} from "./commands/DeletePortfolioShareCommand";
import { DeleteProductCommandInput, DeleteProductCommandOutput } from "./commands/DeleteProductCommand";
import {
  DeleteProvisionedProductPlanCommandInput,
  DeleteProvisionedProductPlanCommandOutput,
} from "./commands/DeleteProvisionedProductPlanCommand";
import {
  DeleteProvisioningArtifactCommandInput,
  DeleteProvisioningArtifactCommandOutput,
} from "./commands/DeleteProvisioningArtifactCommand";
import {
  DeleteServiceActionCommandInput,
  DeleteServiceActionCommandOutput,
} from "./commands/DeleteServiceActionCommand";
import { DeleteTagOptionCommandInput, DeleteTagOptionCommandOutput } from "./commands/DeleteTagOptionCommand";
import { DescribeConstraintCommandInput, DescribeConstraintCommandOutput } from "./commands/DescribeConstraintCommand";
import {
  DescribeCopyProductStatusCommandInput,
  DescribeCopyProductStatusCommandOutput,
} from "./commands/DescribeCopyProductStatusCommand";
import { DescribePortfolioCommandInput, DescribePortfolioCommandOutput } from "./commands/DescribePortfolioCommand";
import {
  DescribePortfolioSharesCommandInput,
  DescribePortfolioSharesCommandOutput,
} from "./commands/DescribePortfolioSharesCommand";
import {
  DescribePortfolioShareStatusCommandInput,
  DescribePortfolioShareStatusCommandOutput,
} from "./commands/DescribePortfolioShareStatusCommand";
import {
  DescribeProductAsAdminCommandInput,
  DescribeProductAsAdminCommandOutput,
} from "./commands/DescribeProductAsAdminCommand";
import { DescribeProductCommandInput, DescribeProductCommandOutput } from "./commands/DescribeProductCommand";
import {
  DescribeProductViewCommandInput,
  DescribeProductViewCommandOutput,
} from "./commands/DescribeProductViewCommand";
import {
  DescribeProvisionedProductCommandInput,
  DescribeProvisionedProductCommandOutput,
} from "./commands/DescribeProvisionedProductCommand";
import {
  DescribeProvisionedProductPlanCommandInput,
  DescribeProvisionedProductPlanCommandOutput,
} from "./commands/DescribeProvisionedProductPlanCommand";
import {
  DescribeProvisioningArtifactCommandInput,
  DescribeProvisioningArtifactCommandOutput,
} from "./commands/DescribeProvisioningArtifactCommand";
import {
  DescribeProvisioningParametersCommandInput,
  DescribeProvisioningParametersCommandOutput,
} from "./commands/DescribeProvisioningParametersCommand";
import { DescribeRecordCommandInput, DescribeRecordCommandOutput } from "./commands/DescribeRecordCommand";
import {
  DescribeServiceActionCommandInput,
  DescribeServiceActionCommandOutput,
} from "./commands/DescribeServiceActionCommand";
import {
  DescribeServiceActionExecutionParametersCommandInput,
  DescribeServiceActionExecutionParametersCommandOutput,
} from "./commands/DescribeServiceActionExecutionParametersCommand";
import { DescribeTagOptionCommandInput, DescribeTagOptionCommandOutput } from "./commands/DescribeTagOptionCommand";
import {
  DisableAWSOrganizationsAccessCommandInput,
  DisableAWSOrganizationsAccessCommandOutput,
} from "./commands/DisableAWSOrganizationsAccessCommand";
import {
  DisassociateBudgetFromResourceCommandInput,
  DisassociateBudgetFromResourceCommandOutput,
} from "./commands/DisassociateBudgetFromResourceCommand";
import {
  DisassociatePrincipalFromPortfolioCommandInput,
  DisassociatePrincipalFromPortfolioCommandOutput,
} from "./commands/DisassociatePrincipalFromPortfolioCommand";
import {
  DisassociateProductFromPortfolioCommandInput,
  DisassociateProductFromPortfolioCommandOutput,
} from "./commands/DisassociateProductFromPortfolioCommand";
import {
  DisassociateServiceActionFromProvisioningArtifactCommandInput,
  DisassociateServiceActionFromProvisioningArtifactCommandOutput,
} from "./commands/DisassociateServiceActionFromProvisioningArtifactCommand";
import {
  DisassociateTagOptionFromResourceCommandInput,
  DisassociateTagOptionFromResourceCommandOutput,
} from "./commands/DisassociateTagOptionFromResourceCommand";
import {
  EnableAWSOrganizationsAccessCommandInput,
  EnableAWSOrganizationsAccessCommandOutput,
} from "./commands/EnableAWSOrganizationsAccessCommand";
import {
  ExecuteProvisionedProductPlanCommandInput,
  ExecuteProvisionedProductPlanCommandOutput,
} from "./commands/ExecuteProvisionedProductPlanCommand";
import {
  ExecuteProvisionedProductServiceActionCommandInput,
  ExecuteProvisionedProductServiceActionCommandOutput,
} from "./commands/ExecuteProvisionedProductServiceActionCommand";
import {
  GetAWSOrganizationsAccessStatusCommandInput,
  GetAWSOrganizationsAccessStatusCommandOutput,
} from "./commands/GetAWSOrganizationsAccessStatusCommand";
import {
  GetProvisionedProductOutputsCommandInput,
  GetProvisionedProductOutputsCommandOutput,
} from "./commands/GetProvisionedProductOutputsCommand";
import {
  ImportAsProvisionedProductCommandInput,
  ImportAsProvisionedProductCommandOutput,
} from "./commands/ImportAsProvisionedProductCommand";
import {
  ListAcceptedPortfolioSharesCommandInput,
  ListAcceptedPortfolioSharesCommandOutput,
} from "./commands/ListAcceptedPortfolioSharesCommand";
import {
  ListBudgetsForResourceCommandInput,
  ListBudgetsForResourceCommandOutput,
} from "./commands/ListBudgetsForResourceCommand";
import {
  ListConstraintsForPortfolioCommandInput,
  ListConstraintsForPortfolioCommandOutput,
} from "./commands/ListConstraintsForPortfolioCommand";
import { ListLaunchPathsCommandInput, ListLaunchPathsCommandOutput } from "./commands/ListLaunchPathsCommand";
import {
  ListOrganizationPortfolioAccessCommandInput,
  ListOrganizationPortfolioAccessCommandOutput,
} from "./commands/ListOrganizationPortfolioAccessCommand";
import {
  ListPortfolioAccessCommandInput,
  ListPortfolioAccessCommandOutput,
} from "./commands/ListPortfolioAccessCommand";
import { ListPortfoliosCommandInput, ListPortfoliosCommandOutput } from "./commands/ListPortfoliosCommand";
import {
  ListPortfoliosForProductCommandInput,
  ListPortfoliosForProductCommandOutput,
} from "./commands/ListPortfoliosForProductCommand";
import {
  ListPrincipalsForPortfolioCommandInput,
  ListPrincipalsForPortfolioCommandOutput,
} from "./commands/ListPrincipalsForPortfolioCommand";
import {
  ListProvisionedProductPlansCommandInput,
  ListProvisionedProductPlansCommandOutput,
} from "./commands/ListProvisionedProductPlansCommand";
import {
  ListProvisioningArtifactsCommandInput,
  ListProvisioningArtifactsCommandOutput,
} from "./commands/ListProvisioningArtifactsCommand";
import {
  ListProvisioningArtifactsForServiceActionCommandInput,
  ListProvisioningArtifactsForServiceActionCommandOutput,
} from "./commands/ListProvisioningArtifactsForServiceActionCommand";
import { ListRecordHistoryCommandInput, ListRecordHistoryCommandOutput } from "./commands/ListRecordHistoryCommand";
import {
  ListResourcesForTagOptionCommandInput,
  ListResourcesForTagOptionCommandOutput,
} from "./commands/ListResourcesForTagOptionCommand";
import { ListServiceActionsCommandInput, ListServiceActionsCommandOutput } from "./commands/ListServiceActionsCommand";
import {
  ListServiceActionsForProvisioningArtifactCommandInput,
  ListServiceActionsForProvisioningArtifactCommandOutput,
} from "./commands/ListServiceActionsForProvisioningArtifactCommand";
import {
  ListStackInstancesForProvisionedProductCommandInput,
  ListStackInstancesForProvisionedProductCommandOutput,
} from "./commands/ListStackInstancesForProvisionedProductCommand";
import { ListTagOptionsCommandInput, ListTagOptionsCommandOutput } from "./commands/ListTagOptionsCommand";
import {
  NotifyProvisionProductEngineWorkflowResultCommandInput,
  NotifyProvisionProductEngineWorkflowResultCommandOutput,
} from "./commands/NotifyProvisionProductEngineWorkflowResultCommand";
import {
  NotifyTerminateProvisionedProductEngineWorkflowResultCommandInput,
  NotifyTerminateProvisionedProductEngineWorkflowResultCommandOutput,
} from "./commands/NotifyTerminateProvisionedProductEngineWorkflowResultCommand";
import {
  NotifyUpdateProvisionedProductEngineWorkflowResultCommandInput,
  NotifyUpdateProvisionedProductEngineWorkflowResultCommandOutput,
} from "./commands/NotifyUpdateProvisionedProductEngineWorkflowResultCommand";
import { ProvisionProductCommandInput, ProvisionProductCommandOutput } from "./commands/ProvisionProductCommand";
import {
  RejectPortfolioShareCommandInput,
  RejectPortfolioShareCommandOutput,
} from "./commands/RejectPortfolioShareCommand";
import {
  ScanProvisionedProductsCommandInput,
  ScanProvisionedProductsCommandOutput,
} from "./commands/ScanProvisionedProductsCommand";
import {
  SearchProductsAsAdminCommandInput,
  SearchProductsAsAdminCommandOutput,
} from "./commands/SearchProductsAsAdminCommand";
import { SearchProductsCommandInput, SearchProductsCommandOutput } from "./commands/SearchProductsCommand";
import {
  SearchProvisionedProductsCommandInput,
  SearchProvisionedProductsCommandOutput,
} from "./commands/SearchProvisionedProductsCommand";
import {
  TerminateProvisionedProductCommandInput,
  TerminateProvisionedProductCommandOutput,
} from "./commands/TerminateProvisionedProductCommand";
import { UpdateConstraintCommandInput, UpdateConstraintCommandOutput } from "./commands/UpdateConstraintCommand";
import { UpdatePortfolioCommandInput, UpdatePortfolioCommandOutput } from "./commands/UpdatePortfolioCommand";
import {
  UpdatePortfolioShareCommandInput,
  UpdatePortfolioShareCommandOutput,
} from "./commands/UpdatePortfolioShareCommand";
import { UpdateProductCommandInput, UpdateProductCommandOutput } from "./commands/UpdateProductCommand";
import {
  UpdateProvisionedProductCommandInput,
  UpdateProvisionedProductCommandOutput,
} from "./commands/UpdateProvisionedProductCommand";
import {
  UpdateProvisionedProductPropertiesCommandInput,
  UpdateProvisionedProductPropertiesCommandOutput,
} from "./commands/UpdateProvisionedProductPropertiesCommand";
import {
  UpdateProvisioningArtifactCommandInput,
  UpdateProvisioningArtifactCommandOutput,
} from "./commands/UpdateProvisioningArtifactCommand";
import {
  UpdateServiceActionCommandInput,
  UpdateServiceActionCommandOutput,
} from "./commands/UpdateServiceActionCommand";
import { UpdateTagOptionCommandInput, UpdateTagOptionCommandOutput } from "./commands/UpdateTagOptionCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AcceptPortfolioShareCommandInput
  | AssociateBudgetWithResourceCommandInput
  | AssociatePrincipalWithPortfolioCommandInput
  | AssociateProductWithPortfolioCommandInput
  | AssociateServiceActionWithProvisioningArtifactCommandInput
  | AssociateTagOptionWithResourceCommandInput
  | BatchAssociateServiceActionWithProvisioningArtifactCommandInput
  | BatchDisassociateServiceActionFromProvisioningArtifactCommandInput
  | CopyProductCommandInput
  | CreateConstraintCommandInput
  | CreatePortfolioCommandInput
  | CreatePortfolioShareCommandInput
  | CreateProductCommandInput
  | CreateProvisionedProductPlanCommandInput
  | CreateProvisioningArtifactCommandInput
  | CreateServiceActionCommandInput
  | CreateTagOptionCommandInput
  | DeleteConstraintCommandInput
  | DeletePortfolioCommandInput
  | DeletePortfolioShareCommandInput
  | DeleteProductCommandInput
  | DeleteProvisionedProductPlanCommandInput
  | DeleteProvisioningArtifactCommandInput
  | DeleteServiceActionCommandInput
  | DeleteTagOptionCommandInput
  | DescribeConstraintCommandInput
  | DescribeCopyProductStatusCommandInput
  | DescribePortfolioCommandInput
  | DescribePortfolioShareStatusCommandInput
  | DescribePortfolioSharesCommandInput
  | DescribeProductAsAdminCommandInput
  | DescribeProductCommandInput
  | DescribeProductViewCommandInput
  | DescribeProvisionedProductCommandInput
  | DescribeProvisionedProductPlanCommandInput
  | DescribeProvisioningArtifactCommandInput
  | DescribeProvisioningParametersCommandInput
  | DescribeRecordCommandInput
  | DescribeServiceActionCommandInput
  | DescribeServiceActionExecutionParametersCommandInput
  | DescribeTagOptionCommandInput
  | DisableAWSOrganizationsAccessCommandInput
  | DisassociateBudgetFromResourceCommandInput
  | DisassociatePrincipalFromPortfolioCommandInput
  | DisassociateProductFromPortfolioCommandInput
  | DisassociateServiceActionFromProvisioningArtifactCommandInput
  | DisassociateTagOptionFromResourceCommandInput
  | EnableAWSOrganizationsAccessCommandInput
  | ExecuteProvisionedProductPlanCommandInput
  | ExecuteProvisionedProductServiceActionCommandInput
  | GetAWSOrganizationsAccessStatusCommandInput
  | GetProvisionedProductOutputsCommandInput
  | ImportAsProvisionedProductCommandInput
  | ListAcceptedPortfolioSharesCommandInput
  | ListBudgetsForResourceCommandInput
  | ListConstraintsForPortfolioCommandInput
  | ListLaunchPathsCommandInput
  | ListOrganizationPortfolioAccessCommandInput
  | ListPortfolioAccessCommandInput
  | ListPortfoliosCommandInput
  | ListPortfoliosForProductCommandInput
  | ListPrincipalsForPortfolioCommandInput
  | ListProvisionedProductPlansCommandInput
  | ListProvisioningArtifactsCommandInput
  | ListProvisioningArtifactsForServiceActionCommandInput
  | ListRecordHistoryCommandInput
  | ListResourcesForTagOptionCommandInput
  | ListServiceActionsCommandInput
  | ListServiceActionsForProvisioningArtifactCommandInput
  | ListStackInstancesForProvisionedProductCommandInput
  | ListTagOptionsCommandInput
  | NotifyProvisionProductEngineWorkflowResultCommandInput
  | NotifyTerminateProvisionedProductEngineWorkflowResultCommandInput
  | NotifyUpdateProvisionedProductEngineWorkflowResultCommandInput
  | ProvisionProductCommandInput
  | RejectPortfolioShareCommandInput
  | ScanProvisionedProductsCommandInput
  | SearchProductsAsAdminCommandInput
  | SearchProductsCommandInput
  | SearchProvisionedProductsCommandInput
  | TerminateProvisionedProductCommandInput
  | UpdateConstraintCommandInput
  | UpdatePortfolioCommandInput
  | UpdatePortfolioShareCommandInput
  | UpdateProductCommandInput
  | UpdateProvisionedProductCommandInput
  | UpdateProvisionedProductPropertiesCommandInput
  | UpdateProvisioningArtifactCommandInput
  | UpdateServiceActionCommandInput
  | UpdateTagOptionCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptPortfolioShareCommandOutput
  | AssociateBudgetWithResourceCommandOutput
  | AssociatePrincipalWithPortfolioCommandOutput
  | AssociateProductWithPortfolioCommandOutput
  | AssociateServiceActionWithProvisioningArtifactCommandOutput
  | AssociateTagOptionWithResourceCommandOutput
  | BatchAssociateServiceActionWithProvisioningArtifactCommandOutput
  | BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput
  | CopyProductCommandOutput
  | CreateConstraintCommandOutput
  | CreatePortfolioCommandOutput
  | CreatePortfolioShareCommandOutput
  | CreateProductCommandOutput
  | CreateProvisionedProductPlanCommandOutput
  | CreateProvisioningArtifactCommandOutput
  | CreateServiceActionCommandOutput
  | CreateTagOptionCommandOutput
  | DeleteConstraintCommandOutput
  | DeletePortfolioCommandOutput
  | DeletePortfolioShareCommandOutput
  | DeleteProductCommandOutput
  | DeleteProvisionedProductPlanCommandOutput
  | DeleteProvisioningArtifactCommandOutput
  | DeleteServiceActionCommandOutput
  | DeleteTagOptionCommandOutput
  | DescribeConstraintCommandOutput
  | DescribeCopyProductStatusCommandOutput
  | DescribePortfolioCommandOutput
  | DescribePortfolioShareStatusCommandOutput
  | DescribePortfolioSharesCommandOutput
  | DescribeProductAsAdminCommandOutput
  | DescribeProductCommandOutput
  | DescribeProductViewCommandOutput
  | DescribeProvisionedProductCommandOutput
  | DescribeProvisionedProductPlanCommandOutput
  | DescribeProvisioningArtifactCommandOutput
  | DescribeProvisioningParametersCommandOutput
  | DescribeRecordCommandOutput
  | DescribeServiceActionCommandOutput
  | DescribeServiceActionExecutionParametersCommandOutput
  | DescribeTagOptionCommandOutput
  | DisableAWSOrganizationsAccessCommandOutput
  | DisassociateBudgetFromResourceCommandOutput
  | DisassociatePrincipalFromPortfolioCommandOutput
  | DisassociateProductFromPortfolioCommandOutput
  | DisassociateServiceActionFromProvisioningArtifactCommandOutput
  | DisassociateTagOptionFromResourceCommandOutput
  | EnableAWSOrganizationsAccessCommandOutput
  | ExecuteProvisionedProductPlanCommandOutput
  | ExecuteProvisionedProductServiceActionCommandOutput
  | GetAWSOrganizationsAccessStatusCommandOutput
  | GetProvisionedProductOutputsCommandOutput
  | ImportAsProvisionedProductCommandOutput
  | ListAcceptedPortfolioSharesCommandOutput
  | ListBudgetsForResourceCommandOutput
  | ListConstraintsForPortfolioCommandOutput
  | ListLaunchPathsCommandOutput
  | ListOrganizationPortfolioAccessCommandOutput
  | ListPortfolioAccessCommandOutput
  | ListPortfoliosCommandOutput
  | ListPortfoliosForProductCommandOutput
  | ListPrincipalsForPortfolioCommandOutput
  | ListProvisionedProductPlansCommandOutput
  | ListProvisioningArtifactsCommandOutput
  | ListProvisioningArtifactsForServiceActionCommandOutput
  | ListRecordHistoryCommandOutput
  | ListResourcesForTagOptionCommandOutput
  | ListServiceActionsCommandOutput
  | ListServiceActionsForProvisioningArtifactCommandOutput
  | ListStackInstancesForProvisionedProductCommandOutput
  | ListTagOptionsCommandOutput
  | NotifyProvisionProductEngineWorkflowResultCommandOutput
  | NotifyTerminateProvisionedProductEngineWorkflowResultCommandOutput
  | NotifyUpdateProvisionedProductEngineWorkflowResultCommandOutput
  | ProvisionProductCommandOutput
  | RejectPortfolioShareCommandOutput
  | ScanProvisionedProductsCommandOutput
  | SearchProductsAsAdminCommandOutput
  | SearchProductsCommandOutput
  | SearchProvisionedProductsCommandOutput
  | TerminateProvisionedProductCommandOutput
  | UpdateConstraintCommandOutput
  | UpdatePortfolioCommandOutput
  | UpdatePortfolioShareCommandOutput
  | UpdateProductCommandOutput
  | UpdateProvisionedProductCommandOutput
  | UpdateProvisionedProductPropertiesCommandOutput
  | UpdateProvisioningArtifactCommandOutput
  | UpdateServiceActionCommandOutput
  | UpdateTagOptionCommandOutput;

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
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type ServiceCatalogClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of ServiceCatalogClient class constructor that set the region, credentials and other options.
 */
export interface ServiceCatalogClientConfig extends ServiceCatalogClientConfigType {}

/**
 * @public
 */
export type ServiceCatalogClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of ServiceCatalogClient class. This is resolved and normalized from the {@link ServiceCatalogClientConfig | constructor configuration interface}.
 */
export interface ServiceCatalogClientResolvedConfig extends ServiceCatalogClientResolvedConfigType {}

/**
 * <fullname>Service Catalog</fullname>
 *          <p>
 *             <a href="http://aws.amazon.com/servicecatalog">Service Catalog</a> enables
 *          organizations to create and manage catalogs of IT services that are approved for Amazon Web Services. To
 *          get the most out of this documentation, you should be familiar with the terminology
 *          discussed in <a href="http://docs.aws.amazon.com/servicecatalog/latest/adminguide/what-is_concepts.html">Service Catalog
 *          Concepts</a>.</p>
 * @public
 */
export class ServiceCatalogClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ServiceCatalogClientResolvedConfig
> {
  /**
   * The resolved configuration of ServiceCatalogClient class. This is resolved and normalized from the {@link ServiceCatalogClientConfig | constructor configuration interface}.
   */
  readonly config: ServiceCatalogClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<ServiceCatalogClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultServiceCatalogHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ServiceCatalogClientResolvedConfig) =>
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
