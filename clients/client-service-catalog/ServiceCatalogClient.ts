import {
  AcceptPortfolioShareInput,
  AcceptPortfolioShareOutput,
  AssociateBudgetWithResourceInput,
  AssociateBudgetWithResourceOutput,
  AssociatePrincipalWithPortfolioInput,
  AssociatePrincipalWithPortfolioOutput,
  AssociateProductWithPortfolioInput,
  AssociateProductWithPortfolioOutput,
  AssociateServiceActionWithProvisioningArtifactInput,
  AssociateServiceActionWithProvisioningArtifactOutput,
  AssociateTagOptionWithResourceInput,
  AssociateTagOptionWithResourceOutput,
  BatchAssociateServiceActionWithProvisioningArtifactInput,
  BatchAssociateServiceActionWithProvisioningArtifactOutput,
  BatchDisassociateServiceActionFromProvisioningArtifactInput,
  BatchDisassociateServiceActionFromProvisioningArtifactOutput,
  CopyProductInput,
  CopyProductOutput,
  CreateConstraintInput,
  CreateConstraintOutput,
  CreatePortfolioInput,
  CreatePortfolioOutput,
  CreatePortfolioShareInput,
  CreatePortfolioShareOutput,
  CreateProductInput,
  CreateProductOutput,
  CreateProvisionedProductPlanInput,
  CreateProvisionedProductPlanOutput,
  CreateProvisioningArtifactInput,
  CreateProvisioningArtifactOutput,
  CreateServiceActionInput,
  CreateServiceActionOutput,
  CreateTagOptionInput,
  CreateTagOptionOutput,
  DeleteConstraintInput,
  DeleteConstraintOutput,
  DeletePortfolioInput,
  DeletePortfolioOutput,
  DeletePortfolioShareInput,
  DeletePortfolioShareOutput,
  DeleteProductInput,
  DeleteProductOutput,
  DeleteProvisionedProductPlanInput,
  DeleteProvisionedProductPlanOutput,
  DeleteProvisioningArtifactInput,
  DeleteProvisioningArtifactOutput,
  DeleteServiceActionInput,
  DeleteServiceActionOutput,
  DeleteTagOptionInput,
  DeleteTagOptionOutput,
  DescribeConstraintInput,
  DescribeConstraintOutput,
  DescribeCopyProductStatusInput,
  DescribeCopyProductStatusOutput,
  DescribePortfolioInput,
  DescribePortfolioOutput,
  DescribePortfolioShareStatusInput,
  DescribePortfolioShareStatusOutput,
  DescribeProductAsAdminInput,
  DescribeProductAsAdminOutput,
  DescribeProductInput,
  DescribeProductOutput,
  DescribeProductViewInput,
  DescribeProductViewOutput,
  DescribeProvisionedProductInput,
  DescribeProvisionedProductOutput,
  DescribeProvisionedProductPlanInput,
  DescribeProvisionedProductPlanOutput,
  DescribeProvisioningArtifactInput,
  DescribeProvisioningArtifactOutput,
  DescribeProvisioningParametersInput,
  DescribeProvisioningParametersOutput,
  DescribeRecordInput,
  DescribeRecordOutput,
  DescribeServiceActionExecutionParametersInput,
  DescribeServiceActionExecutionParametersOutput,
  DescribeServiceActionInput,
  DescribeServiceActionOutput,
  DescribeTagOptionInput,
  DescribeTagOptionOutput,
  DisableAWSOrganizationsAccessInput,
  DisableAWSOrganizationsAccessOutput,
  DisassociateBudgetFromResourceInput,
  DisassociateBudgetFromResourceOutput,
  DisassociatePrincipalFromPortfolioInput,
  DisassociatePrincipalFromPortfolioOutput,
  DisassociateProductFromPortfolioInput,
  DisassociateProductFromPortfolioOutput,
  DisassociateServiceActionFromProvisioningArtifactInput,
  DisassociateServiceActionFromProvisioningArtifactOutput,
  DisassociateTagOptionFromResourceInput,
  DisassociateTagOptionFromResourceOutput,
  EnableAWSOrganizationsAccessInput,
  EnableAWSOrganizationsAccessOutput,
  ExecuteProvisionedProductPlanInput,
  ExecuteProvisionedProductPlanOutput,
  ExecuteProvisionedProductServiceActionInput,
  ExecuteProvisionedProductServiceActionOutput,
  GetAWSOrganizationsAccessStatusInput,
  GetAWSOrganizationsAccessStatusOutput,
  ListAcceptedPortfolioSharesInput,
  ListAcceptedPortfolioSharesOutput,
  ListBudgetsForResourceInput,
  ListBudgetsForResourceOutput,
  ListConstraintsForPortfolioInput,
  ListConstraintsForPortfolioOutput,
  ListLaunchPathsInput,
  ListLaunchPathsOutput,
  ListOrganizationPortfolioAccessInput,
  ListOrganizationPortfolioAccessOutput,
  ListPortfolioAccessInput,
  ListPortfolioAccessOutput,
  ListPortfoliosForProductInput,
  ListPortfoliosForProductOutput,
  ListPortfoliosInput,
  ListPortfoliosOutput,
  ListPrincipalsForPortfolioInput,
  ListPrincipalsForPortfolioOutput,
  ListProvisionedProductPlansInput,
  ListProvisionedProductPlansOutput,
  ListProvisioningArtifactsForServiceActionInput,
  ListProvisioningArtifactsForServiceActionOutput,
  ListProvisioningArtifactsInput,
  ListProvisioningArtifactsOutput,
  ListRecordHistoryInput,
  ListRecordHistoryOutput,
  ListResourcesForTagOptionInput,
  ListResourcesForTagOptionOutput,
  ListServiceActionsForProvisioningArtifactInput,
  ListServiceActionsForProvisioningArtifactOutput,
  ListServiceActionsInput,
  ListServiceActionsOutput,
  ListStackInstancesForProvisionedProductInput,
  ListStackInstancesForProvisionedProductOutput,
  ListTagOptionsInput,
  ListTagOptionsOutput,
  ProvisionProductInput,
  ProvisionProductOutput,
  RejectPortfolioShareInput,
  RejectPortfolioShareOutput,
  ScanProvisionedProductsInput,
  ScanProvisionedProductsOutput,
  SearchProductsAsAdminInput,
  SearchProductsAsAdminOutput,
  SearchProductsInput,
  SearchProductsOutput,
  SearchProvisionedProductsInput,
  SearchProvisionedProductsOutput,
  TerminateProvisionedProductInput,
  TerminateProvisionedProductOutput,
  UpdateConstraintInput,
  UpdateConstraintOutput,
  UpdatePortfolioInput,
  UpdatePortfolioOutput,
  UpdateProductInput,
  UpdateProductOutput,
  UpdateProvisionedProductInput,
  UpdateProvisionedProductOutput,
  UpdateProvisionedProductPropertiesInput,
  UpdateProvisionedProductPropertiesOutput,
  UpdateProvisioningArtifactInput,
  UpdateProvisioningArtifactOutput,
  UpdateServiceActionInput,
  UpdateServiceActionOutput,
  UpdateTagOptionInput,
  UpdateTagOptionOutput
} from "./models/index";
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
  | AcceptPortfolioShareInput
  | AssociateBudgetWithResourceInput
  | AssociatePrincipalWithPortfolioInput
  | AssociateProductWithPortfolioInput
  | AssociateServiceActionWithProvisioningArtifactInput
  | AssociateTagOptionWithResourceInput
  | BatchAssociateServiceActionWithProvisioningArtifactInput
  | BatchDisassociateServiceActionFromProvisioningArtifactInput
  | CopyProductInput
  | CreateConstraintInput
  | CreatePortfolioInput
  | CreatePortfolioShareInput
  | CreateProductInput
  | CreateProvisionedProductPlanInput
  | CreateProvisioningArtifactInput
  | CreateServiceActionInput
  | CreateTagOptionInput
  | DeleteConstraintInput
  | DeletePortfolioInput
  | DeletePortfolioShareInput
  | DeleteProductInput
  | DeleteProvisionedProductPlanInput
  | DeleteProvisioningArtifactInput
  | DeleteServiceActionInput
  | DeleteTagOptionInput
  | DescribeConstraintInput
  | DescribeCopyProductStatusInput
  | DescribePortfolioInput
  | DescribePortfolioShareStatusInput
  | DescribeProductAsAdminInput
  | DescribeProductInput
  | DescribeProductViewInput
  | DescribeProvisionedProductInput
  | DescribeProvisionedProductPlanInput
  | DescribeProvisioningArtifactInput
  | DescribeProvisioningParametersInput
  | DescribeRecordInput
  | DescribeServiceActionExecutionParametersInput
  | DescribeServiceActionInput
  | DescribeTagOptionInput
  | DisableAWSOrganizationsAccessInput
  | DisassociateBudgetFromResourceInput
  | DisassociatePrincipalFromPortfolioInput
  | DisassociateProductFromPortfolioInput
  | DisassociateServiceActionFromProvisioningArtifactInput
  | DisassociateTagOptionFromResourceInput
  | EnableAWSOrganizationsAccessInput
  | ExecuteProvisionedProductPlanInput
  | ExecuteProvisionedProductServiceActionInput
  | GetAWSOrganizationsAccessStatusInput
  | ListAcceptedPortfolioSharesInput
  | ListBudgetsForResourceInput
  | ListConstraintsForPortfolioInput
  | ListLaunchPathsInput
  | ListOrganizationPortfolioAccessInput
  | ListPortfolioAccessInput
  | ListPortfoliosForProductInput
  | ListPortfoliosInput
  | ListPrincipalsForPortfolioInput
  | ListProvisionedProductPlansInput
  | ListProvisioningArtifactsForServiceActionInput
  | ListProvisioningArtifactsInput
  | ListRecordHistoryInput
  | ListResourcesForTagOptionInput
  | ListServiceActionsForProvisioningArtifactInput
  | ListServiceActionsInput
  | ListStackInstancesForProvisionedProductInput
  | ListTagOptionsInput
  | ProvisionProductInput
  | RejectPortfolioShareInput
  | ScanProvisionedProductsInput
  | SearchProductsAsAdminInput
  | SearchProductsInput
  | SearchProvisionedProductsInput
  | TerminateProvisionedProductInput
  | UpdateConstraintInput
  | UpdatePortfolioInput
  | UpdateProductInput
  | UpdateProvisionedProductInput
  | UpdateProvisionedProductPropertiesInput
  | UpdateProvisioningArtifactInput
  | UpdateServiceActionInput
  | UpdateTagOptionInput;

export type ServiceOutputTypes =
  | AcceptPortfolioShareOutput
  | AssociateBudgetWithResourceOutput
  | AssociatePrincipalWithPortfolioOutput
  | AssociateProductWithPortfolioOutput
  | AssociateServiceActionWithProvisioningArtifactOutput
  | AssociateTagOptionWithResourceOutput
  | BatchAssociateServiceActionWithProvisioningArtifactOutput
  | BatchDisassociateServiceActionFromProvisioningArtifactOutput
  | CopyProductOutput
  | CreateConstraintOutput
  | CreatePortfolioOutput
  | CreatePortfolioShareOutput
  | CreateProductOutput
  | CreateProvisionedProductPlanOutput
  | CreateProvisioningArtifactOutput
  | CreateServiceActionOutput
  | CreateTagOptionOutput
  | DeleteConstraintOutput
  | DeletePortfolioOutput
  | DeletePortfolioShareOutput
  | DeleteProductOutput
  | DeleteProvisionedProductPlanOutput
  | DeleteProvisioningArtifactOutput
  | DeleteServiceActionOutput
  | DeleteTagOptionOutput
  | DescribeConstraintOutput
  | DescribeCopyProductStatusOutput
  | DescribePortfolioOutput
  | DescribePortfolioShareStatusOutput
  | DescribeProductAsAdminOutput
  | DescribeProductOutput
  | DescribeProductViewOutput
  | DescribeProvisionedProductOutput
  | DescribeProvisionedProductPlanOutput
  | DescribeProvisioningArtifactOutput
  | DescribeProvisioningParametersOutput
  | DescribeRecordOutput
  | DescribeServiceActionExecutionParametersOutput
  | DescribeServiceActionOutput
  | DescribeTagOptionOutput
  | DisableAWSOrganizationsAccessOutput
  | DisassociateBudgetFromResourceOutput
  | DisassociatePrincipalFromPortfolioOutput
  | DisassociateProductFromPortfolioOutput
  | DisassociateServiceActionFromProvisioningArtifactOutput
  | DisassociateTagOptionFromResourceOutput
  | EnableAWSOrganizationsAccessOutput
  | ExecuteProvisionedProductPlanOutput
  | ExecuteProvisionedProductServiceActionOutput
  | GetAWSOrganizationsAccessStatusOutput
  | ListAcceptedPortfolioSharesOutput
  | ListBudgetsForResourceOutput
  | ListConstraintsForPortfolioOutput
  | ListLaunchPathsOutput
  | ListOrganizationPortfolioAccessOutput
  | ListPortfolioAccessOutput
  | ListPortfoliosForProductOutput
  | ListPortfoliosOutput
  | ListPrincipalsForPortfolioOutput
  | ListProvisionedProductPlansOutput
  | ListProvisioningArtifactsForServiceActionOutput
  | ListProvisioningArtifactsOutput
  | ListRecordHistoryOutput
  | ListResourcesForTagOptionOutput
  | ListServiceActionsForProvisioningArtifactOutput
  | ListServiceActionsOutput
  | ListStackInstancesForProvisionedProductOutput
  | ListTagOptionsOutput
  | ProvisionProductOutput
  | RejectPortfolioShareOutput
  | ScanProvisionedProductsOutput
  | SearchProductsAsAdminOutput
  | SearchProductsOutput
  | SearchProvisionedProductsOutput
  | TerminateProvisionedProductOutput
  | UpdateConstraintOutput
  | UpdatePortfolioOutput
  | UpdateProductOutput
  | UpdateProvisionedProductOutput
  | UpdateProvisionedProductPropertiesOutput
  | UpdateProvisioningArtifactOutput
  | UpdateServiceActionOutput
  | UpdateTagOptionOutput;

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

export type ServiceCatalogClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type ServiceCatalogClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * <fullname>AWS Service Catalog</fullname>
 *          <p>
 *             <a href="https://aws.amazon.com/servicecatalog/">AWS Service Catalog</a> enables
 *          organizations to create and manage catalogs of IT services that are approved for use on
 *          AWS. To get the most out of this documentation, you should be familiar with the
 *          terminology discussed in <a href="http://docs.aws.amazon.com/servicecatalog/latest/adminguide/what-is_concepts.html">AWS Service Catalog Concepts</a>.</p>
 */
export class ServiceCatalogClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ServiceCatalogClientResolvedConfig
> {
  readonly config: ServiceCatalogClientResolvedConfig;

  constructor(configuration: ServiceCatalogClientConfig) {
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
