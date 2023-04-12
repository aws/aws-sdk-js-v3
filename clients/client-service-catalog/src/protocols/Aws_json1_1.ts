// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AcceptPortfolioShareCommandInput,
  AcceptPortfolioShareCommandOutput,
} from "../commands/AcceptPortfolioShareCommand";
import {
  AssociateBudgetWithResourceCommandInput,
  AssociateBudgetWithResourceCommandOutput,
} from "../commands/AssociateBudgetWithResourceCommand";
import {
  AssociatePrincipalWithPortfolioCommandInput,
  AssociatePrincipalWithPortfolioCommandOutput,
} from "../commands/AssociatePrincipalWithPortfolioCommand";
import {
  AssociateProductWithPortfolioCommandInput,
  AssociateProductWithPortfolioCommandOutput,
} from "../commands/AssociateProductWithPortfolioCommand";
import {
  AssociateServiceActionWithProvisioningArtifactCommandInput,
  AssociateServiceActionWithProvisioningArtifactCommandOutput,
} from "../commands/AssociateServiceActionWithProvisioningArtifactCommand";
import {
  AssociateTagOptionWithResourceCommandInput,
  AssociateTagOptionWithResourceCommandOutput,
} from "../commands/AssociateTagOptionWithResourceCommand";
import {
  BatchAssociateServiceActionWithProvisioningArtifactCommandInput,
  BatchAssociateServiceActionWithProvisioningArtifactCommandOutput,
} from "../commands/BatchAssociateServiceActionWithProvisioningArtifactCommand";
import {
  BatchDisassociateServiceActionFromProvisioningArtifactCommandInput,
  BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput,
} from "../commands/BatchDisassociateServiceActionFromProvisioningArtifactCommand";
import { CopyProductCommandInput, CopyProductCommandOutput } from "../commands/CopyProductCommand";
import { CreateConstraintCommandInput, CreateConstraintCommandOutput } from "../commands/CreateConstraintCommand";
import { CreatePortfolioCommandInput, CreatePortfolioCommandOutput } from "../commands/CreatePortfolioCommand";
import {
  CreatePortfolioShareCommandInput,
  CreatePortfolioShareCommandOutput,
} from "../commands/CreatePortfolioShareCommand";
import { CreateProductCommandInput, CreateProductCommandOutput } from "../commands/CreateProductCommand";
import {
  CreateProvisionedProductPlanCommandInput,
  CreateProvisionedProductPlanCommandOutput,
} from "../commands/CreateProvisionedProductPlanCommand";
import {
  CreateProvisioningArtifactCommandInput,
  CreateProvisioningArtifactCommandOutput,
} from "../commands/CreateProvisioningArtifactCommand";
import {
  CreateServiceActionCommandInput,
  CreateServiceActionCommandOutput,
} from "../commands/CreateServiceActionCommand";
import { CreateTagOptionCommandInput, CreateTagOptionCommandOutput } from "../commands/CreateTagOptionCommand";
import { DeleteConstraintCommandInput, DeleteConstraintCommandOutput } from "../commands/DeleteConstraintCommand";
import { DeletePortfolioCommandInput, DeletePortfolioCommandOutput } from "../commands/DeletePortfolioCommand";
import {
  DeletePortfolioShareCommandInput,
  DeletePortfolioShareCommandOutput,
} from "../commands/DeletePortfolioShareCommand";
import { DeleteProductCommandInput, DeleteProductCommandOutput } from "../commands/DeleteProductCommand";
import {
  DeleteProvisionedProductPlanCommandInput,
  DeleteProvisionedProductPlanCommandOutput,
} from "../commands/DeleteProvisionedProductPlanCommand";
import {
  DeleteProvisioningArtifactCommandInput,
  DeleteProvisioningArtifactCommandOutput,
} from "../commands/DeleteProvisioningArtifactCommand";
import {
  DeleteServiceActionCommandInput,
  DeleteServiceActionCommandOutput,
} from "../commands/DeleteServiceActionCommand";
import { DeleteTagOptionCommandInput, DeleteTagOptionCommandOutput } from "../commands/DeleteTagOptionCommand";
import { DescribeConstraintCommandInput, DescribeConstraintCommandOutput } from "../commands/DescribeConstraintCommand";
import {
  DescribeCopyProductStatusCommandInput,
  DescribeCopyProductStatusCommandOutput,
} from "../commands/DescribeCopyProductStatusCommand";
import { DescribePortfolioCommandInput, DescribePortfolioCommandOutput } from "../commands/DescribePortfolioCommand";
import {
  DescribePortfolioSharesCommandInput,
  DescribePortfolioSharesCommandOutput,
} from "../commands/DescribePortfolioSharesCommand";
import {
  DescribePortfolioShareStatusCommandInput,
  DescribePortfolioShareStatusCommandOutput,
} from "../commands/DescribePortfolioShareStatusCommand";
import {
  DescribeProductAsAdminCommandInput,
  DescribeProductAsAdminCommandOutput,
} from "../commands/DescribeProductAsAdminCommand";
import { DescribeProductCommandInput, DescribeProductCommandOutput } from "../commands/DescribeProductCommand";
import {
  DescribeProductViewCommandInput,
  DescribeProductViewCommandOutput,
} from "../commands/DescribeProductViewCommand";
import {
  DescribeProvisionedProductCommandInput,
  DescribeProvisionedProductCommandOutput,
} from "../commands/DescribeProvisionedProductCommand";
import {
  DescribeProvisionedProductPlanCommandInput,
  DescribeProvisionedProductPlanCommandOutput,
} from "../commands/DescribeProvisionedProductPlanCommand";
import {
  DescribeProvisioningArtifactCommandInput,
  DescribeProvisioningArtifactCommandOutput,
} from "../commands/DescribeProvisioningArtifactCommand";
import {
  DescribeProvisioningParametersCommandInput,
  DescribeProvisioningParametersCommandOutput,
} from "../commands/DescribeProvisioningParametersCommand";
import { DescribeRecordCommandInput, DescribeRecordCommandOutput } from "../commands/DescribeRecordCommand";
import {
  DescribeServiceActionCommandInput,
  DescribeServiceActionCommandOutput,
} from "../commands/DescribeServiceActionCommand";
import {
  DescribeServiceActionExecutionParametersCommandInput,
  DescribeServiceActionExecutionParametersCommandOutput,
} from "../commands/DescribeServiceActionExecutionParametersCommand";
import { DescribeTagOptionCommandInput, DescribeTagOptionCommandOutput } from "../commands/DescribeTagOptionCommand";
import {
  DisableAWSOrganizationsAccessCommandInput,
  DisableAWSOrganizationsAccessCommandOutput,
} from "../commands/DisableAWSOrganizationsAccessCommand";
import {
  DisassociateBudgetFromResourceCommandInput,
  DisassociateBudgetFromResourceCommandOutput,
} from "../commands/DisassociateBudgetFromResourceCommand";
import {
  DisassociatePrincipalFromPortfolioCommandInput,
  DisassociatePrincipalFromPortfolioCommandOutput,
} from "../commands/DisassociatePrincipalFromPortfolioCommand";
import {
  DisassociateProductFromPortfolioCommandInput,
  DisassociateProductFromPortfolioCommandOutput,
} from "../commands/DisassociateProductFromPortfolioCommand";
import {
  DisassociateServiceActionFromProvisioningArtifactCommandInput,
  DisassociateServiceActionFromProvisioningArtifactCommandOutput,
} from "../commands/DisassociateServiceActionFromProvisioningArtifactCommand";
import {
  DisassociateTagOptionFromResourceCommandInput,
  DisassociateTagOptionFromResourceCommandOutput,
} from "../commands/DisassociateTagOptionFromResourceCommand";
import {
  EnableAWSOrganizationsAccessCommandInput,
  EnableAWSOrganizationsAccessCommandOutput,
} from "../commands/EnableAWSOrganizationsAccessCommand";
import {
  ExecuteProvisionedProductPlanCommandInput,
  ExecuteProvisionedProductPlanCommandOutput,
} from "../commands/ExecuteProvisionedProductPlanCommand";
import {
  ExecuteProvisionedProductServiceActionCommandInput,
  ExecuteProvisionedProductServiceActionCommandOutput,
} from "../commands/ExecuteProvisionedProductServiceActionCommand";
import {
  GetAWSOrganizationsAccessStatusCommandInput,
  GetAWSOrganizationsAccessStatusCommandOutput,
} from "../commands/GetAWSOrganizationsAccessStatusCommand";
import {
  GetProvisionedProductOutputsCommandInput,
  GetProvisionedProductOutputsCommandOutput,
} from "../commands/GetProvisionedProductOutputsCommand";
import {
  ImportAsProvisionedProductCommandInput,
  ImportAsProvisionedProductCommandOutput,
} from "../commands/ImportAsProvisionedProductCommand";
import {
  ListAcceptedPortfolioSharesCommandInput,
  ListAcceptedPortfolioSharesCommandOutput,
} from "../commands/ListAcceptedPortfolioSharesCommand";
import {
  ListBudgetsForResourceCommandInput,
  ListBudgetsForResourceCommandOutput,
} from "../commands/ListBudgetsForResourceCommand";
import {
  ListConstraintsForPortfolioCommandInput,
  ListConstraintsForPortfolioCommandOutput,
} from "../commands/ListConstraintsForPortfolioCommand";
import { ListLaunchPathsCommandInput, ListLaunchPathsCommandOutput } from "../commands/ListLaunchPathsCommand";
import {
  ListOrganizationPortfolioAccessCommandInput,
  ListOrganizationPortfolioAccessCommandOutput,
} from "../commands/ListOrganizationPortfolioAccessCommand";
import {
  ListPortfolioAccessCommandInput,
  ListPortfolioAccessCommandOutput,
} from "../commands/ListPortfolioAccessCommand";
import { ListPortfoliosCommandInput, ListPortfoliosCommandOutput } from "../commands/ListPortfoliosCommand";
import {
  ListPortfoliosForProductCommandInput,
  ListPortfoliosForProductCommandOutput,
} from "../commands/ListPortfoliosForProductCommand";
import {
  ListPrincipalsForPortfolioCommandInput,
  ListPrincipalsForPortfolioCommandOutput,
} from "../commands/ListPrincipalsForPortfolioCommand";
import {
  ListProvisionedProductPlansCommandInput,
  ListProvisionedProductPlansCommandOutput,
} from "../commands/ListProvisionedProductPlansCommand";
import {
  ListProvisioningArtifactsCommandInput,
  ListProvisioningArtifactsCommandOutput,
} from "../commands/ListProvisioningArtifactsCommand";
import {
  ListProvisioningArtifactsForServiceActionCommandInput,
  ListProvisioningArtifactsForServiceActionCommandOutput,
} from "../commands/ListProvisioningArtifactsForServiceActionCommand";
import { ListRecordHistoryCommandInput, ListRecordHistoryCommandOutput } from "../commands/ListRecordHistoryCommand";
import {
  ListResourcesForTagOptionCommandInput,
  ListResourcesForTagOptionCommandOutput,
} from "../commands/ListResourcesForTagOptionCommand";
import { ListServiceActionsCommandInput, ListServiceActionsCommandOutput } from "../commands/ListServiceActionsCommand";
import {
  ListServiceActionsForProvisioningArtifactCommandInput,
  ListServiceActionsForProvisioningArtifactCommandOutput,
} from "../commands/ListServiceActionsForProvisioningArtifactCommand";
import {
  ListStackInstancesForProvisionedProductCommandInput,
  ListStackInstancesForProvisionedProductCommandOutput,
} from "../commands/ListStackInstancesForProvisionedProductCommand";
import { ListTagOptionsCommandInput, ListTagOptionsCommandOutput } from "../commands/ListTagOptionsCommand";
import {
  NotifyProvisionProductEngineWorkflowResultCommandInput,
  NotifyProvisionProductEngineWorkflowResultCommandOutput,
} from "../commands/NotifyProvisionProductEngineWorkflowResultCommand";
import {
  NotifyTerminateProvisionedProductEngineWorkflowResultCommandInput,
  NotifyTerminateProvisionedProductEngineWorkflowResultCommandOutput,
} from "../commands/NotifyTerminateProvisionedProductEngineWorkflowResultCommand";
import {
  NotifyUpdateProvisionedProductEngineWorkflowResultCommandInput,
  NotifyUpdateProvisionedProductEngineWorkflowResultCommandOutput,
} from "../commands/NotifyUpdateProvisionedProductEngineWorkflowResultCommand";
import { ProvisionProductCommandInput, ProvisionProductCommandOutput } from "../commands/ProvisionProductCommand";
import {
  RejectPortfolioShareCommandInput,
  RejectPortfolioShareCommandOutput,
} from "../commands/RejectPortfolioShareCommand";
import {
  ScanProvisionedProductsCommandInput,
  ScanProvisionedProductsCommandOutput,
} from "../commands/ScanProvisionedProductsCommand";
import {
  SearchProductsAsAdminCommandInput,
  SearchProductsAsAdminCommandOutput,
} from "../commands/SearchProductsAsAdminCommand";
import { SearchProductsCommandInput, SearchProductsCommandOutput } from "../commands/SearchProductsCommand";
import {
  SearchProvisionedProductsCommandInput,
  SearchProvisionedProductsCommandOutput,
} from "../commands/SearchProvisionedProductsCommand";
import {
  TerminateProvisionedProductCommandInput,
  TerminateProvisionedProductCommandOutput,
} from "../commands/TerminateProvisionedProductCommand";
import { UpdateConstraintCommandInput, UpdateConstraintCommandOutput } from "../commands/UpdateConstraintCommand";
import { UpdatePortfolioCommandInput, UpdatePortfolioCommandOutput } from "../commands/UpdatePortfolioCommand";
import {
  UpdatePortfolioShareCommandInput,
  UpdatePortfolioShareCommandOutput,
} from "../commands/UpdatePortfolioShareCommand";
import { UpdateProductCommandInput, UpdateProductCommandOutput } from "../commands/UpdateProductCommand";
import {
  UpdateProvisionedProductCommandInput,
  UpdateProvisionedProductCommandOutput,
} from "../commands/UpdateProvisionedProductCommand";
import {
  UpdateProvisionedProductPropertiesCommandInput,
  UpdateProvisionedProductPropertiesCommandOutput,
} from "../commands/UpdateProvisionedProductPropertiesCommand";
import {
  UpdateProvisioningArtifactCommandInput,
  UpdateProvisioningArtifactCommandOutput,
} from "../commands/UpdateProvisioningArtifactCommand";
import {
  UpdateServiceActionCommandInput,
  UpdateServiceActionCommandOutput,
} from "../commands/UpdateServiceActionCommand";
import { UpdateTagOptionCommandInput, UpdateTagOptionCommandOutput } from "../commands/UpdateTagOptionCommand";
import {
  AcceptPortfolioShareInput,
  AcceptPortfolioShareOutput,
  AccessLevelFilter,
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
  BudgetDetail,
  CloudWatchDashboard,
  CodeStarParameters,
  ConstraintDetail,
  ConstraintSummary,
  CopyOption,
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
  DescribePortfolioSharesInput,
  DescribePortfolioSharesOutput,
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
  DuplicateResourceException,
  EnableAWSOrganizationsAccessInput,
  EnableAWSOrganizationsAccessOutput,
  EngineWorkflowResourceIdentifier,
  ExecuteProvisionedProductPlanInput,
  ExecuteProvisionedProductPlanOutput,
  ExecuteProvisionedProductServiceActionInput,
  ExecuteProvisionedProductServiceActionOutput,
  ExecutionParameter,
  FailedServiceActionAssociation,
  GetAWSOrganizationsAccessStatusInput,
  GetAWSOrganizationsAccessStatusOutput,
  GetProvisionedProductOutputsInput,
  GetProvisionedProductOutputsOutput,
  ImportAsProvisionedProductInput,
  ImportAsProvisionedProductOutput,
  InvalidParametersException,
  InvalidStateException,
  LastSync,
  LaunchPath,
  LaunchPathSummary,
  LimitExceededException,
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
  ListRecordHistorySearchFilter,
  ListResourcesForTagOptionInput,
  ListResourcesForTagOptionOutput,
  ListServiceActionsForProvisioningArtifactInput,
  ListServiceActionsForProvisioningArtifactOutput,
  ListServiceActionsInput,
  ListServiceActionsOutput,
  ListStackInstancesForProvisionedProductInput,
  ListStackInstancesForProvisionedProductOutput,
  ListTagOptionsFilters,
  ListTagOptionsInput,
  ListTagOptionsOutput,
  NotifyProvisionProductEngineWorkflowResultInput,
  NotifyProvisionProductEngineWorkflowResultOutput,
  NotifyTerminateProvisionedProductEngineWorkflowResultInput,
  NotifyTerminateProvisionedProductEngineWorkflowResultOutput,
  NotifyUpdateProvisionedProductEngineWorkflowResultInput,
  NotifyUpdateProvisionedProductEngineWorkflowResultOutput,
  OperationNotSupportedException,
  OrganizationNode,
  ParameterConstraints,
  PortfolioDetail,
  PortfolioShareDetail,
  Principal,
  ProductViewAggregationValue,
  ProductViewDetail,
  ProductViewFilterBy,
  ProductViewSummary,
  PropertyKey,
  ProvisionedProductAttribute,
  ProvisionedProductDetail,
  ProvisionedProductPlanDetails,
  ProvisionedProductPlanSummary,
  ProvisionedProductViewFilterBy,
  ProvisioningArtifact,
  ProvisioningArtifactDetail,
  ProvisioningArtifactOutput,
  ProvisioningArtifactParameter,
  ProvisioningArtifactPreferences,
  ProvisioningArtifactProperties,
  ProvisioningArtifactPropertyName,
  ProvisioningArtifactSummary,
  ProvisioningArtifactView,
  ProvisioningParameter,
  ProvisioningPreferences,
  ProvisionProductInput,
  ProvisionProductOutput,
  RecordDetail,
  RecordError,
  RecordOutput,
  RecordTag,
  RejectPortfolioShareInput,
  RejectPortfolioShareOutput,
  ResourceAttribute,
  ResourceChange,
  ResourceChangeDetail,
  ResourceDetail,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceTargetDefinition,
  ScanProvisionedProductsInput,
  ScanProvisionedProductsOutput,
  SearchProductsAsAdminInput,
  SearchProductsAsAdminOutput,
  SearchProductsInput,
  SearchProductsOutput,
  SearchProvisionedProductsInput,
  SearchProvisionedProductsOutput,
  ServiceActionAssociation,
  ServiceActionDefinitionKey,
  ServiceActionDetail,
  ServiceActionSummary,
  ShareDetails,
  ShareError,
  SourceConnection,
  SourceConnectionDetail,
  SourceConnectionParameters,
  StackInstance,
  Tag,
  TagOptionDetail,
  TagOptionNotMigratedException,
  TagOptionSummary,
  TerminateProvisionedProductInput,
  TerminateProvisionedProductOutput,
  UniqueTagResourceIdentifier,
  UpdateConstraintInput,
  UpdateConstraintOutput,
  UpdatePortfolioInput,
  UpdatePortfolioOutput,
  UpdatePortfolioShareInput,
  UpdatePortfolioShareOutput,
  UpdateProductInput,
  UpdateProductOutput,
  UpdateProvisionedProductInput,
  UpdateProvisionedProductOutput,
  UpdateProvisionedProductPropertiesInput,
  UpdateProvisionedProductPropertiesOutput,
  UpdateProvisioningArtifactInput,
  UpdateProvisioningArtifactOutput,
  UpdateProvisioningParameter,
  UpdateProvisioningPreferences,
  UpdateServiceActionInput,
  UpdateServiceActionOutput,
  UpdateTagOptionInput,
  UpdateTagOptionOutput,
  UsageInstruction,
} from "../models/models_0";
import { ServiceCatalogServiceException as __BaseException } from "../models/ServiceCatalogServiceException";

/**
 * serializeAws_json1_1AcceptPortfolioShareCommand
 */
export const se_AcceptPortfolioShareCommand = async (
  input: AcceptPortfolioShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AcceptPortfolioShare");
  let body: any;
  body = JSON.stringify(se_AcceptPortfolioShareInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateBudgetWithResourceCommand
 */
export const se_AssociateBudgetWithResourceCommand = async (
  input: AssociateBudgetWithResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateBudgetWithResource");
  let body: any;
  body = JSON.stringify(se_AssociateBudgetWithResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociatePrincipalWithPortfolioCommand
 */
export const se_AssociatePrincipalWithPortfolioCommand = async (
  input: AssociatePrincipalWithPortfolioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociatePrincipalWithPortfolio");
  let body: any;
  body = JSON.stringify(se_AssociatePrincipalWithPortfolioInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateProductWithPortfolioCommand
 */
export const se_AssociateProductWithPortfolioCommand = async (
  input: AssociateProductWithPortfolioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateProductWithPortfolio");
  let body: any;
  body = JSON.stringify(se_AssociateProductWithPortfolioInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommand
 */
export const se_AssociateServiceActionWithProvisioningArtifactCommand = async (
  input: AssociateServiceActionWithProvisioningArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateServiceActionWithProvisioningArtifact");
  let body: any;
  body = JSON.stringify(se_AssociateServiceActionWithProvisioningArtifactInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateTagOptionWithResourceCommand
 */
export const se_AssociateTagOptionWithResourceCommand = async (
  input: AssociateTagOptionWithResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateTagOptionWithResource");
  let body: any;
  body = JSON.stringify(se_AssociateTagOptionWithResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommand
 */
export const se_BatchAssociateServiceActionWithProvisioningArtifactCommand = async (
  input: BatchAssociateServiceActionWithProvisioningArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchAssociateServiceActionWithProvisioningArtifact");
  let body: any;
  body = JSON.stringify(se_BatchAssociateServiceActionWithProvisioningArtifactInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand
 */
export const se_BatchDisassociateServiceActionFromProvisioningArtifactCommand = async (
  input: BatchDisassociateServiceActionFromProvisioningArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchDisassociateServiceActionFromProvisioningArtifact");
  let body: any;
  body = JSON.stringify(se_BatchDisassociateServiceActionFromProvisioningArtifactInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CopyProductCommand
 */
export const se_CopyProductCommand = async (
  input: CopyProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CopyProduct");
  let body: any;
  body = JSON.stringify(se_CopyProductInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateConstraintCommand
 */
export const se_CreateConstraintCommand = async (
  input: CreateConstraintCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateConstraint");
  let body: any;
  body = JSON.stringify(se_CreateConstraintInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePortfolioCommand
 */
export const se_CreatePortfolioCommand = async (
  input: CreatePortfolioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePortfolio");
  let body: any;
  body = JSON.stringify(se_CreatePortfolioInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePortfolioShareCommand
 */
export const se_CreatePortfolioShareCommand = async (
  input: CreatePortfolioShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePortfolioShare");
  let body: any;
  body = JSON.stringify(se_CreatePortfolioShareInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateProductCommand
 */
export const se_CreateProductCommand = async (
  input: CreateProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateProduct");
  let body: any;
  body = JSON.stringify(se_CreateProductInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateProvisionedProductPlanCommand
 */
export const se_CreateProvisionedProductPlanCommand = async (
  input: CreateProvisionedProductPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateProvisionedProductPlan");
  let body: any;
  body = JSON.stringify(se_CreateProvisionedProductPlanInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateProvisioningArtifactCommand
 */
export const se_CreateProvisioningArtifactCommand = async (
  input: CreateProvisioningArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateProvisioningArtifact");
  let body: any;
  body = JSON.stringify(se_CreateProvisioningArtifactInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateServiceActionCommand
 */
export const se_CreateServiceActionCommand = async (
  input: CreateServiceActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateServiceAction");
  let body: any;
  body = JSON.stringify(se_CreateServiceActionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateTagOptionCommand
 */
export const se_CreateTagOptionCommand = async (
  input: CreateTagOptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTagOption");
  let body: any;
  body = JSON.stringify(se_CreateTagOptionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteConstraintCommand
 */
export const se_DeleteConstraintCommand = async (
  input: DeleteConstraintCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteConstraint");
  let body: any;
  body = JSON.stringify(se_DeleteConstraintInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePortfolioCommand
 */
export const se_DeletePortfolioCommand = async (
  input: DeletePortfolioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePortfolio");
  let body: any;
  body = JSON.stringify(se_DeletePortfolioInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePortfolioShareCommand
 */
export const se_DeletePortfolioShareCommand = async (
  input: DeletePortfolioShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePortfolioShare");
  let body: any;
  body = JSON.stringify(se_DeletePortfolioShareInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteProductCommand
 */
export const se_DeleteProductCommand = async (
  input: DeleteProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteProduct");
  let body: any;
  body = JSON.stringify(se_DeleteProductInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteProvisionedProductPlanCommand
 */
export const se_DeleteProvisionedProductPlanCommand = async (
  input: DeleteProvisionedProductPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteProvisionedProductPlan");
  let body: any;
  body = JSON.stringify(se_DeleteProvisionedProductPlanInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteProvisioningArtifactCommand
 */
export const se_DeleteProvisioningArtifactCommand = async (
  input: DeleteProvisioningArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteProvisioningArtifact");
  let body: any;
  body = JSON.stringify(se_DeleteProvisioningArtifactInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteServiceActionCommand
 */
export const se_DeleteServiceActionCommand = async (
  input: DeleteServiceActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteServiceAction");
  let body: any;
  body = JSON.stringify(se_DeleteServiceActionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTagOptionCommand
 */
export const se_DeleteTagOptionCommand = async (
  input: DeleteTagOptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTagOption");
  let body: any;
  body = JSON.stringify(se_DeleteTagOptionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeConstraintCommand
 */
export const se_DescribeConstraintCommand = async (
  input: DescribeConstraintCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeConstraint");
  let body: any;
  body = JSON.stringify(se_DescribeConstraintInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCopyProductStatusCommand
 */
export const se_DescribeCopyProductStatusCommand = async (
  input: DescribeCopyProductStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCopyProductStatus");
  let body: any;
  body = JSON.stringify(se_DescribeCopyProductStatusInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePortfolioCommand
 */
export const se_DescribePortfolioCommand = async (
  input: DescribePortfolioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePortfolio");
  let body: any;
  body = JSON.stringify(se_DescribePortfolioInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePortfolioSharesCommand
 */
export const se_DescribePortfolioSharesCommand = async (
  input: DescribePortfolioSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePortfolioShares");
  let body: any;
  body = JSON.stringify(se_DescribePortfolioSharesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePortfolioShareStatusCommand
 */
export const se_DescribePortfolioShareStatusCommand = async (
  input: DescribePortfolioShareStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePortfolioShareStatus");
  let body: any;
  body = JSON.stringify(se_DescribePortfolioShareStatusInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeProductCommand
 */
export const se_DescribeProductCommand = async (
  input: DescribeProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeProduct");
  let body: any;
  body = JSON.stringify(se_DescribeProductInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeProductAsAdminCommand
 */
export const se_DescribeProductAsAdminCommand = async (
  input: DescribeProductAsAdminCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeProductAsAdmin");
  let body: any;
  body = JSON.stringify(se_DescribeProductAsAdminInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeProductViewCommand
 */
export const se_DescribeProductViewCommand = async (
  input: DescribeProductViewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeProductView");
  let body: any;
  body = JSON.stringify(se_DescribeProductViewInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeProvisionedProductCommand
 */
export const se_DescribeProvisionedProductCommand = async (
  input: DescribeProvisionedProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeProvisionedProduct");
  let body: any;
  body = JSON.stringify(se_DescribeProvisionedProductInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeProvisionedProductPlanCommand
 */
export const se_DescribeProvisionedProductPlanCommand = async (
  input: DescribeProvisionedProductPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeProvisionedProductPlan");
  let body: any;
  body = JSON.stringify(se_DescribeProvisionedProductPlanInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeProvisioningArtifactCommand
 */
export const se_DescribeProvisioningArtifactCommand = async (
  input: DescribeProvisioningArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeProvisioningArtifact");
  let body: any;
  body = JSON.stringify(se_DescribeProvisioningArtifactInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeProvisioningParametersCommand
 */
export const se_DescribeProvisioningParametersCommand = async (
  input: DescribeProvisioningParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeProvisioningParameters");
  let body: any;
  body = JSON.stringify(se_DescribeProvisioningParametersInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeRecordCommand
 */
export const se_DescribeRecordCommand = async (
  input: DescribeRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRecord");
  let body: any;
  body = JSON.stringify(se_DescribeRecordInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeServiceActionCommand
 */
export const se_DescribeServiceActionCommand = async (
  input: DescribeServiceActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeServiceAction");
  let body: any;
  body = JSON.stringify(se_DescribeServiceActionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeServiceActionExecutionParametersCommand
 */
export const se_DescribeServiceActionExecutionParametersCommand = async (
  input: DescribeServiceActionExecutionParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeServiceActionExecutionParameters");
  let body: any;
  body = JSON.stringify(se_DescribeServiceActionExecutionParametersInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTagOptionCommand
 */
export const se_DescribeTagOptionCommand = async (
  input: DescribeTagOptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTagOption");
  let body: any;
  body = JSON.stringify(se_DescribeTagOptionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableAWSOrganizationsAccessCommand
 */
export const se_DisableAWSOrganizationsAccessCommand = async (
  input: DisableAWSOrganizationsAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisableAWSOrganizationsAccess");
  let body: any;
  body = JSON.stringify(se_DisableAWSOrganizationsAccessInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateBudgetFromResourceCommand
 */
export const se_DisassociateBudgetFromResourceCommand = async (
  input: DisassociateBudgetFromResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateBudgetFromResource");
  let body: any;
  body = JSON.stringify(se_DisassociateBudgetFromResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociatePrincipalFromPortfolioCommand
 */
export const se_DisassociatePrincipalFromPortfolioCommand = async (
  input: DisassociatePrincipalFromPortfolioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociatePrincipalFromPortfolio");
  let body: any;
  body = JSON.stringify(se_DisassociatePrincipalFromPortfolioInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateProductFromPortfolioCommand
 */
export const se_DisassociateProductFromPortfolioCommand = async (
  input: DisassociateProductFromPortfolioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateProductFromPortfolio");
  let body: any;
  body = JSON.stringify(se_DisassociateProductFromPortfolioInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommand
 */
export const se_DisassociateServiceActionFromProvisioningArtifactCommand = async (
  input: DisassociateServiceActionFromProvisioningArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateServiceActionFromProvisioningArtifact");
  let body: any;
  body = JSON.stringify(se_DisassociateServiceActionFromProvisioningArtifactInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateTagOptionFromResourceCommand
 */
export const se_DisassociateTagOptionFromResourceCommand = async (
  input: DisassociateTagOptionFromResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateTagOptionFromResource");
  let body: any;
  body = JSON.stringify(se_DisassociateTagOptionFromResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableAWSOrganizationsAccessCommand
 */
export const se_EnableAWSOrganizationsAccessCommand = async (
  input: EnableAWSOrganizationsAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EnableAWSOrganizationsAccess");
  let body: any;
  body = JSON.stringify(se_EnableAWSOrganizationsAccessInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ExecuteProvisionedProductPlanCommand
 */
export const se_ExecuteProvisionedProductPlanCommand = async (
  input: ExecuteProvisionedProductPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ExecuteProvisionedProductPlan");
  let body: any;
  body = JSON.stringify(se_ExecuteProvisionedProductPlanInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ExecuteProvisionedProductServiceActionCommand
 */
export const se_ExecuteProvisionedProductServiceActionCommand = async (
  input: ExecuteProvisionedProductServiceActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ExecuteProvisionedProductServiceAction");
  let body: any;
  body = JSON.stringify(se_ExecuteProvisionedProductServiceActionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAWSOrganizationsAccessStatusCommand
 */
export const se_GetAWSOrganizationsAccessStatusCommand = async (
  input: GetAWSOrganizationsAccessStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAWSOrganizationsAccessStatus");
  let body: any;
  body = JSON.stringify(se_GetAWSOrganizationsAccessStatusInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetProvisionedProductOutputsCommand
 */
export const se_GetProvisionedProductOutputsCommand = async (
  input: GetProvisionedProductOutputsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetProvisionedProductOutputs");
  let body: any;
  body = JSON.stringify(se_GetProvisionedProductOutputsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportAsProvisionedProductCommand
 */
export const se_ImportAsProvisionedProductCommand = async (
  input: ImportAsProvisionedProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ImportAsProvisionedProduct");
  let body: any;
  body = JSON.stringify(se_ImportAsProvisionedProductInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAcceptedPortfolioSharesCommand
 */
export const se_ListAcceptedPortfolioSharesCommand = async (
  input: ListAcceptedPortfolioSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAcceptedPortfolioShares");
  let body: any;
  body = JSON.stringify(se_ListAcceptedPortfolioSharesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListBudgetsForResourceCommand
 */
export const se_ListBudgetsForResourceCommand = async (
  input: ListBudgetsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListBudgetsForResource");
  let body: any;
  body = JSON.stringify(se_ListBudgetsForResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListConstraintsForPortfolioCommand
 */
export const se_ListConstraintsForPortfolioCommand = async (
  input: ListConstraintsForPortfolioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListConstraintsForPortfolio");
  let body: any;
  body = JSON.stringify(se_ListConstraintsForPortfolioInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLaunchPathsCommand
 */
export const se_ListLaunchPathsCommand = async (
  input: ListLaunchPathsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLaunchPaths");
  let body: any;
  body = JSON.stringify(se_ListLaunchPathsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListOrganizationPortfolioAccessCommand
 */
export const se_ListOrganizationPortfolioAccessCommand = async (
  input: ListOrganizationPortfolioAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListOrganizationPortfolioAccess");
  let body: any;
  body = JSON.stringify(se_ListOrganizationPortfolioAccessInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPortfolioAccessCommand
 */
export const se_ListPortfolioAccessCommand = async (
  input: ListPortfolioAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPortfolioAccess");
  let body: any;
  body = JSON.stringify(se_ListPortfolioAccessInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPortfoliosCommand
 */
export const se_ListPortfoliosCommand = async (
  input: ListPortfoliosCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPortfolios");
  let body: any;
  body = JSON.stringify(se_ListPortfoliosInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPortfoliosForProductCommand
 */
export const se_ListPortfoliosForProductCommand = async (
  input: ListPortfoliosForProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPortfoliosForProduct");
  let body: any;
  body = JSON.stringify(se_ListPortfoliosForProductInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPrincipalsForPortfolioCommand
 */
export const se_ListPrincipalsForPortfolioCommand = async (
  input: ListPrincipalsForPortfolioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPrincipalsForPortfolio");
  let body: any;
  body = JSON.stringify(se_ListPrincipalsForPortfolioInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListProvisionedProductPlansCommand
 */
export const se_ListProvisionedProductPlansCommand = async (
  input: ListProvisionedProductPlansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListProvisionedProductPlans");
  let body: any;
  body = JSON.stringify(se_ListProvisionedProductPlansInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListProvisioningArtifactsCommand
 */
export const se_ListProvisioningArtifactsCommand = async (
  input: ListProvisioningArtifactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListProvisioningArtifacts");
  let body: any;
  body = JSON.stringify(se_ListProvisioningArtifactsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand
 */
export const se_ListProvisioningArtifactsForServiceActionCommand = async (
  input: ListProvisioningArtifactsForServiceActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListProvisioningArtifactsForServiceAction");
  let body: any;
  body = JSON.stringify(se_ListProvisioningArtifactsForServiceActionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRecordHistoryCommand
 */
export const se_ListRecordHistoryCommand = async (
  input: ListRecordHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRecordHistory");
  let body: any;
  body = JSON.stringify(se_ListRecordHistoryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResourcesForTagOptionCommand
 */
export const se_ListResourcesForTagOptionCommand = async (
  input: ListResourcesForTagOptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListResourcesForTagOption");
  let body: any;
  body = JSON.stringify(se_ListResourcesForTagOptionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListServiceActionsCommand
 */
export const se_ListServiceActionsCommand = async (
  input: ListServiceActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListServiceActions");
  let body: any;
  body = JSON.stringify(se_ListServiceActionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand
 */
export const se_ListServiceActionsForProvisioningArtifactCommand = async (
  input: ListServiceActionsForProvisioningArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListServiceActionsForProvisioningArtifact");
  let body: any;
  body = JSON.stringify(se_ListServiceActionsForProvisioningArtifactInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListStackInstancesForProvisionedProductCommand
 */
export const se_ListStackInstancesForProvisionedProductCommand = async (
  input: ListStackInstancesForProvisionedProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListStackInstancesForProvisionedProduct");
  let body: any;
  body = JSON.stringify(se_ListStackInstancesForProvisionedProductInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagOptionsCommand
 */
export const se_ListTagOptionsCommand = async (
  input: ListTagOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagOptions");
  let body: any;
  body = JSON.stringify(se_ListTagOptionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1NotifyProvisionProductEngineWorkflowResultCommand
 */
export const se_NotifyProvisionProductEngineWorkflowResultCommand = async (
  input: NotifyProvisionProductEngineWorkflowResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("NotifyProvisionProductEngineWorkflowResult");
  let body: any;
  body = JSON.stringify(se_NotifyProvisionProductEngineWorkflowResultInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1NotifyTerminateProvisionedProductEngineWorkflowResultCommand
 */
export const se_NotifyTerminateProvisionedProductEngineWorkflowResultCommand = async (
  input: NotifyTerminateProvisionedProductEngineWorkflowResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("NotifyTerminateProvisionedProductEngineWorkflowResult");
  let body: any;
  body = JSON.stringify(se_NotifyTerminateProvisionedProductEngineWorkflowResultInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1NotifyUpdateProvisionedProductEngineWorkflowResultCommand
 */
export const se_NotifyUpdateProvisionedProductEngineWorkflowResultCommand = async (
  input: NotifyUpdateProvisionedProductEngineWorkflowResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("NotifyUpdateProvisionedProductEngineWorkflowResult");
  let body: any;
  body = JSON.stringify(se_NotifyUpdateProvisionedProductEngineWorkflowResultInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ProvisionProductCommand
 */
export const se_ProvisionProductCommand = async (
  input: ProvisionProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ProvisionProduct");
  let body: any;
  body = JSON.stringify(se_ProvisionProductInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RejectPortfolioShareCommand
 */
export const se_RejectPortfolioShareCommand = async (
  input: RejectPortfolioShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RejectPortfolioShare");
  let body: any;
  body = JSON.stringify(se_RejectPortfolioShareInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ScanProvisionedProductsCommand
 */
export const se_ScanProvisionedProductsCommand = async (
  input: ScanProvisionedProductsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ScanProvisionedProducts");
  let body: any;
  body = JSON.stringify(se_ScanProvisionedProductsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SearchProductsCommand
 */
export const se_SearchProductsCommand = async (
  input: SearchProductsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SearchProducts");
  let body: any;
  body = JSON.stringify(se_SearchProductsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SearchProductsAsAdminCommand
 */
export const se_SearchProductsAsAdminCommand = async (
  input: SearchProductsAsAdminCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SearchProductsAsAdmin");
  let body: any;
  body = JSON.stringify(se_SearchProductsAsAdminInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SearchProvisionedProductsCommand
 */
export const se_SearchProvisionedProductsCommand = async (
  input: SearchProvisionedProductsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SearchProvisionedProducts");
  let body: any;
  body = JSON.stringify(se_SearchProvisionedProductsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TerminateProvisionedProductCommand
 */
export const se_TerminateProvisionedProductCommand = async (
  input: TerminateProvisionedProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TerminateProvisionedProduct");
  let body: any;
  body = JSON.stringify(se_TerminateProvisionedProductInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateConstraintCommand
 */
export const se_UpdateConstraintCommand = async (
  input: UpdateConstraintCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateConstraint");
  let body: any;
  body = JSON.stringify(se_UpdateConstraintInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePortfolioCommand
 */
export const se_UpdatePortfolioCommand = async (
  input: UpdatePortfolioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePortfolio");
  let body: any;
  body = JSON.stringify(se_UpdatePortfolioInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePortfolioShareCommand
 */
export const se_UpdatePortfolioShareCommand = async (
  input: UpdatePortfolioShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePortfolioShare");
  let body: any;
  body = JSON.stringify(se_UpdatePortfolioShareInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateProductCommand
 */
export const se_UpdateProductCommand = async (
  input: UpdateProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateProduct");
  let body: any;
  body = JSON.stringify(se_UpdateProductInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateProvisionedProductCommand
 */
export const se_UpdateProvisionedProductCommand = async (
  input: UpdateProvisionedProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateProvisionedProduct");
  let body: any;
  body = JSON.stringify(se_UpdateProvisionedProductInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateProvisionedProductPropertiesCommand
 */
export const se_UpdateProvisionedProductPropertiesCommand = async (
  input: UpdateProvisionedProductPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateProvisionedProductProperties");
  let body: any;
  body = JSON.stringify(se_UpdateProvisionedProductPropertiesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateProvisioningArtifactCommand
 */
export const se_UpdateProvisioningArtifactCommand = async (
  input: UpdateProvisioningArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateProvisioningArtifact");
  let body: any;
  body = JSON.stringify(se_UpdateProvisioningArtifactInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateServiceActionCommand
 */
export const se_UpdateServiceActionCommand = async (
  input: UpdateServiceActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateServiceAction");
  let body: any;
  body = JSON.stringify(se_UpdateServiceActionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateTagOptionCommand
 */
export const se_UpdateTagOptionCommand = async (
  input: UpdateTagOptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateTagOption");
  let body: any;
  body = JSON.stringify(se_UpdateTagOptionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AcceptPortfolioShareCommand
 */
export const de_AcceptPortfolioShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptPortfolioShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AcceptPortfolioShareCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AcceptPortfolioShareOutput(data, context);
  const response: AcceptPortfolioShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AcceptPortfolioShareCommandError
 */
const de_AcceptPortfolioShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptPortfolioShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.servicecatalog#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AssociateBudgetWithResourceCommand
 */
export const de_AssociateBudgetWithResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateBudgetWithResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateBudgetWithResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateBudgetWithResourceOutput(data, context);
  const response: AssociateBudgetWithResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateBudgetWithResourceCommandError
 */
const de_AssociateBudgetWithResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateBudgetWithResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateResourceException":
    case "com.amazonaws.servicecatalog#DuplicateResourceException":
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.servicecatalog#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AssociatePrincipalWithPortfolioCommand
 */
export const de_AssociatePrincipalWithPortfolioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePrincipalWithPortfolioCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociatePrincipalWithPortfolioCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociatePrincipalWithPortfolioOutput(data, context);
  const response: AssociatePrincipalWithPortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociatePrincipalWithPortfolioCommandError
 */
const de_AssociatePrincipalWithPortfolioCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePrincipalWithPortfolioCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.servicecatalog#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AssociateProductWithPortfolioCommand
 */
export const de_AssociateProductWithPortfolioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateProductWithPortfolioCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateProductWithPortfolioCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateProductWithPortfolioOutput(data, context);
  const response: AssociateProductWithPortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateProductWithPortfolioCommandError
 */
const de_AssociateProductWithPortfolioCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateProductWithPortfolioCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.servicecatalog#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommand
 */
export const de_AssociateServiceActionWithProvisioningArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateServiceActionWithProvisioningArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateServiceActionWithProvisioningArtifactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateServiceActionWithProvisioningArtifactOutput(data, context);
  const response: AssociateServiceActionWithProvisioningArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommandError
 */
const de_AssociateServiceActionWithProvisioningArtifactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateServiceActionWithProvisioningArtifactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateResourceException":
    case "com.amazonaws.servicecatalog#DuplicateResourceException":
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.servicecatalog#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AssociateTagOptionWithResourceCommand
 */
export const de_AssociateTagOptionWithResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTagOptionWithResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateTagOptionWithResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateTagOptionWithResourceOutput(data, context);
  const response: AssociateTagOptionWithResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateTagOptionWithResourceCommandError
 */
const de_AssociateTagOptionWithResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTagOptionWithResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateResourceException":
    case "com.amazonaws.servicecatalog#DuplicateResourceException":
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.servicecatalog#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.servicecatalog#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TagOptionNotMigratedException":
    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
      throw await de_TagOptionNotMigratedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommand
 */
export const de_BatchAssociateServiceActionWithProvisioningArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateServiceActionWithProvisioningArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchAssociateServiceActionWithProvisioningArtifactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchAssociateServiceActionWithProvisioningArtifactOutput(data, context);
  const response: BatchAssociateServiceActionWithProvisioningArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommandError
 */
const de_BatchAssociateServiceActionWithProvisioningArtifactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateServiceActionWithProvisioningArtifactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand
 */
export const de_BatchDisassociateServiceActionFromProvisioningArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchDisassociateServiceActionFromProvisioningArtifactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchDisassociateServiceActionFromProvisioningArtifactOutput(data, context);
  const response: BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommandError
 */
const de_BatchDisassociateServiceActionFromProvisioningArtifactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CopyProductCommand
 */
export const de_CopyProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyProductCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CopyProductCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CopyProductOutput(data, context);
  const response: CopyProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CopyProductCommandError
 */
const de_CopyProductCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyProductCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateConstraintCommand
 */
export const de_CreateConstraintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConstraintCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateConstraintCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateConstraintOutput(data, context);
  const response: CreateConstraintCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateConstraintCommandError
 */
const de_CreateConstraintCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConstraintCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateResourceException":
    case "com.amazonaws.servicecatalog#DuplicateResourceException":
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.servicecatalog#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreatePortfolioCommand
 */
export const de_CreatePortfolioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePortfolioCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePortfolioCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePortfolioOutput(data, context);
  const response: CreatePortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreatePortfolioCommandError
 */
const de_CreatePortfolioCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePortfolioCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.servicecatalog#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "TagOptionNotMigratedException":
    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
      throw await de_TagOptionNotMigratedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreatePortfolioShareCommand
 */
export const de_CreatePortfolioShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePortfolioShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePortfolioShareCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePortfolioShareOutput(data, context);
  const response: CreatePortfolioShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreatePortfolioShareCommandError
 */
const de_CreatePortfolioShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePortfolioShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.servicecatalog#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.servicecatalog#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.servicecatalog#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateProductCommand
 */
export const de_CreateProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProductCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateProductCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateProductOutput(data, context);
  const response: CreateProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateProductCommandError
 */
const de_CreateProductCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProductCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.servicecatalog#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "TagOptionNotMigratedException":
    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
      throw await de_TagOptionNotMigratedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateProvisionedProductPlanCommand
 */
export const de_CreateProvisionedProductPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProvisionedProductPlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateProvisionedProductPlanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateProvisionedProductPlanOutput(data, context);
  const response: CreateProvisionedProductPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateProvisionedProductPlanCommandError
 */
const de_CreateProvisionedProductPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProvisionedProductPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.servicecatalog#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateProvisioningArtifactCommand
 */
export const de_CreateProvisioningArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProvisioningArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateProvisioningArtifactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateProvisioningArtifactOutput(data, context);
  const response: CreateProvisioningArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateProvisioningArtifactCommandError
 */
const de_CreateProvisioningArtifactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProvisioningArtifactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.servicecatalog#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateServiceActionCommand
 */
export const de_CreateServiceActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateServiceActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateServiceActionOutput(data, context);
  const response: CreateServiceActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateServiceActionCommandError
 */
const de_CreateServiceActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.servicecatalog#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateTagOptionCommand
 */
export const de_CreateTagOptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagOptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateTagOptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTagOptionOutput(data, context);
  const response: CreateTagOptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateTagOptionCommandError
 */
const de_CreateTagOptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagOptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateResourceException":
    case "com.amazonaws.servicecatalog#DuplicateResourceException":
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.servicecatalog#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "TagOptionNotMigratedException":
    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
      throw await de_TagOptionNotMigratedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteConstraintCommand
 */
export const de_DeleteConstraintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConstraintCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteConstraintCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteConstraintOutput(data, context);
  const response: DeleteConstraintCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteConstraintCommandError
 */
const de_DeleteConstraintCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConstraintCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeletePortfolioCommand
 */
export const de_DeletePortfolioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePortfolioCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePortfolioCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeletePortfolioOutput(data, context);
  const response: DeletePortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeletePortfolioCommandError
 */
const de_DeletePortfolioCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePortfolioCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.servicecatalog#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TagOptionNotMigratedException":
    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
      throw await de_TagOptionNotMigratedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeletePortfolioShareCommand
 */
export const de_DeletePortfolioShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePortfolioShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePortfolioShareCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeletePortfolioShareOutput(data, context);
  const response: DeletePortfolioShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeletePortfolioShareCommandError
 */
const de_DeletePortfolioShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePortfolioShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.servicecatalog#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.servicecatalog#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteProductCommand
 */
export const de_DeleteProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProductCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteProductCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteProductOutput(data, context);
  const response: DeleteProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteProductCommandError
 */
const de_DeleteProductCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProductCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.servicecatalog#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TagOptionNotMigratedException":
    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
      throw await de_TagOptionNotMigratedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteProvisionedProductPlanCommand
 */
export const de_DeleteProvisionedProductPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProvisionedProductPlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteProvisionedProductPlanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteProvisionedProductPlanOutput(data, context);
  const response: DeleteProvisionedProductPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteProvisionedProductPlanCommandError
 */
const de_DeleteProvisionedProductPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProvisionedProductPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteProvisioningArtifactCommand
 */
export const de_DeleteProvisioningArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProvisioningArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteProvisioningArtifactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteProvisioningArtifactOutput(data, context);
  const response: DeleteProvisioningArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteProvisioningArtifactCommandError
 */
const de_DeleteProvisioningArtifactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProvisioningArtifactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.servicecatalog#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteServiceActionCommand
 */
export const de_DeleteServiceActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteServiceActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteServiceActionOutput(data, context);
  const response: DeleteServiceActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteServiceActionCommandError
 */
const de_DeleteServiceActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUseException":
    case "com.amazonaws.servicecatalog#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteTagOptionCommand
 */
export const de_DeleteTagOptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagOptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTagOptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteTagOptionOutput(data, context);
  const response: DeleteTagOptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteTagOptionCommandError
 */
const de_DeleteTagOptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagOptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUseException":
    case "com.amazonaws.servicecatalog#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TagOptionNotMigratedException":
    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
      throw await de_TagOptionNotMigratedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeConstraintCommand
 */
export const de_DescribeConstraintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConstraintCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeConstraintCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeConstraintOutput(data, context);
  const response: DescribeConstraintCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeConstraintCommandError
 */
const de_DescribeConstraintCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConstraintCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeCopyProductStatusCommand
 */
export const de_DescribeCopyProductStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCopyProductStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCopyProductStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCopyProductStatusOutput(data, context);
  const response: DescribeCopyProductStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeCopyProductStatusCommandError
 */
const de_DescribeCopyProductStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCopyProductStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribePortfolioCommand
 */
export const de_DescribePortfolioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePortfolioCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePortfolioCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePortfolioOutput(data, context);
  const response: DescribePortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribePortfolioCommandError
 */
const de_DescribePortfolioCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePortfolioCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribePortfolioSharesCommand
 */
export const de_DescribePortfolioSharesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePortfolioSharesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePortfolioSharesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePortfolioSharesOutput(data, context);
  const response: DescribePortfolioSharesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribePortfolioSharesCommandError
 */
const de_DescribePortfolioSharesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePortfolioSharesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribePortfolioShareStatusCommand
 */
export const de_DescribePortfolioShareStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePortfolioShareStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePortfolioShareStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePortfolioShareStatusOutput(data, context);
  const response: DescribePortfolioShareStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribePortfolioShareStatusCommandError
 */
const de_DescribePortfolioShareStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePortfolioShareStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.servicecatalog#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeProductCommand
 */
export const de_DescribeProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProductCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeProductCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeProductOutput(data, context);
  const response: DescribeProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeProductCommandError
 */
const de_DescribeProductCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProductCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeProductAsAdminCommand
 */
export const de_DescribeProductAsAdminCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProductAsAdminCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeProductAsAdminCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeProductAsAdminOutput(data, context);
  const response: DescribeProductAsAdminCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeProductAsAdminCommandError
 */
const de_DescribeProductAsAdminCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProductAsAdminCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeProductViewCommand
 */
export const de_DescribeProductViewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProductViewCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeProductViewCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeProductViewOutput(data, context);
  const response: DescribeProductViewCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeProductViewCommandError
 */
const de_DescribeProductViewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProductViewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeProvisionedProductCommand
 */
export const de_DescribeProvisionedProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProvisionedProductCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeProvisionedProductCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeProvisionedProductOutput(data, context);
  const response: DescribeProvisionedProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeProvisionedProductCommandError
 */
const de_DescribeProvisionedProductCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProvisionedProductCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeProvisionedProductPlanCommand
 */
export const de_DescribeProvisionedProductPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProvisionedProductPlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeProvisionedProductPlanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeProvisionedProductPlanOutput(data, context);
  const response: DescribeProvisionedProductPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeProvisionedProductPlanCommandError
 */
const de_DescribeProvisionedProductPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProvisionedProductPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeProvisioningArtifactCommand
 */
export const de_DescribeProvisioningArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProvisioningArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeProvisioningArtifactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeProvisioningArtifactOutput(data, context);
  const response: DescribeProvisioningArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeProvisioningArtifactCommandError
 */
const de_DescribeProvisioningArtifactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProvisioningArtifactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeProvisioningParametersCommand
 */
export const de_DescribeProvisioningParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProvisioningParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeProvisioningParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeProvisioningParametersOutput(data, context);
  const response: DescribeProvisioningParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeProvisioningParametersCommandError
 */
const de_DescribeProvisioningParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProvisioningParametersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeRecordCommand
 */
export const de_DescribeRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecordCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeRecordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRecordOutput(data, context);
  const response: DescribeRecordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeRecordCommandError
 */
const de_DescribeRecordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeServiceActionCommand
 */
export const de_DescribeServiceActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeServiceActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeServiceActionOutput(data, context);
  const response: DescribeServiceActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeServiceActionCommandError
 */
const de_DescribeServiceActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeServiceActionExecutionParametersCommand
 */
export const de_DescribeServiceActionExecutionParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceActionExecutionParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeServiceActionExecutionParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeServiceActionExecutionParametersOutput(data, context);
  const response: DescribeServiceActionExecutionParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeServiceActionExecutionParametersCommandError
 */
const de_DescribeServiceActionExecutionParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceActionExecutionParametersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeTagOptionCommand
 */
export const de_DescribeTagOptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagOptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTagOptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTagOptionOutput(data, context);
  const response: DescribeTagOptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeTagOptionCommandError
 */
const de_DescribeTagOptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagOptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TagOptionNotMigratedException":
    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
      throw await de_TagOptionNotMigratedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisableAWSOrganizationsAccessCommand
 */
export const de_DisableAWSOrganizationsAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableAWSOrganizationsAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisableAWSOrganizationsAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisableAWSOrganizationsAccessOutput(data, context);
  const response: DisableAWSOrganizationsAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisableAWSOrganizationsAccessCommandError
 */
const de_DisableAWSOrganizationsAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableAWSOrganizationsAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.servicecatalog#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.servicecatalog#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisassociateBudgetFromResourceCommand
 */
export const de_DisassociateBudgetFromResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateBudgetFromResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateBudgetFromResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateBudgetFromResourceOutput(data, context);
  const response: DisassociateBudgetFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateBudgetFromResourceCommandError
 */
const de_DisassociateBudgetFromResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateBudgetFromResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisassociatePrincipalFromPortfolioCommand
 */
export const de_DisassociatePrincipalFromPortfolioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociatePrincipalFromPortfolioCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociatePrincipalFromPortfolioCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociatePrincipalFromPortfolioOutput(data, context);
  const response: DisassociatePrincipalFromPortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociatePrincipalFromPortfolioCommandError
 */
const de_DisassociatePrincipalFromPortfolioCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociatePrincipalFromPortfolioCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisassociateProductFromPortfolioCommand
 */
export const de_DisassociateProductFromPortfolioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateProductFromPortfolioCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateProductFromPortfolioCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateProductFromPortfolioOutput(data, context);
  const response: DisassociateProductFromPortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateProductFromPortfolioCommandError
 */
const de_DisassociateProductFromPortfolioCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateProductFromPortfolioCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.servicecatalog#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommand
 */
export const de_DisassociateServiceActionFromProvisioningArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateServiceActionFromProvisioningArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateServiceActionFromProvisioningArtifactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateServiceActionFromProvisioningArtifactOutput(data, context);
  const response: DisassociateServiceActionFromProvisioningArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommandError
 */
const de_DisassociateServiceActionFromProvisioningArtifactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateServiceActionFromProvisioningArtifactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisassociateTagOptionFromResourceCommand
 */
export const de_DisassociateTagOptionFromResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTagOptionFromResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateTagOptionFromResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateTagOptionFromResourceOutput(data, context);
  const response: DisassociateTagOptionFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateTagOptionFromResourceCommandError
 */
const de_DisassociateTagOptionFromResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTagOptionFromResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TagOptionNotMigratedException":
    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
      throw await de_TagOptionNotMigratedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1EnableAWSOrganizationsAccessCommand
 */
export const de_EnableAWSOrganizationsAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAWSOrganizationsAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnableAWSOrganizationsAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EnableAWSOrganizationsAccessOutput(data, context);
  const response: EnableAWSOrganizationsAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1EnableAWSOrganizationsAccessCommandError
 */
const de_EnableAWSOrganizationsAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAWSOrganizationsAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.servicecatalog#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.servicecatalog#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ExecuteProvisionedProductPlanCommand
 */
export const de_ExecuteProvisionedProductPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteProvisionedProductPlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ExecuteProvisionedProductPlanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ExecuteProvisionedProductPlanOutput(data, context);
  const response: ExecuteProvisionedProductPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ExecuteProvisionedProductPlanCommandError
 */
const de_ExecuteProvisionedProductPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteProvisionedProductPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.servicecatalog#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ExecuteProvisionedProductServiceActionCommand
 */
export const de_ExecuteProvisionedProductServiceActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteProvisionedProductServiceActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ExecuteProvisionedProductServiceActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ExecuteProvisionedProductServiceActionOutput(data, context);
  const response: ExecuteProvisionedProductServiceActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ExecuteProvisionedProductServiceActionCommandError
 */
const de_ExecuteProvisionedProductServiceActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteProvisionedProductServiceActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.servicecatalog#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetAWSOrganizationsAccessStatusCommand
 */
export const de_GetAWSOrganizationsAccessStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAWSOrganizationsAccessStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAWSOrganizationsAccessStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAWSOrganizationsAccessStatusOutput(data, context);
  const response: GetAWSOrganizationsAccessStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetAWSOrganizationsAccessStatusCommandError
 */
const de_GetAWSOrganizationsAccessStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAWSOrganizationsAccessStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotSupportedException":
    case "com.amazonaws.servicecatalog#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetProvisionedProductOutputsCommand
 */
export const de_GetProvisionedProductOutputsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProvisionedProductOutputsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetProvisionedProductOutputsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetProvisionedProductOutputsOutput(data, context);
  const response: GetProvisionedProductOutputsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetProvisionedProductOutputsCommandError
 */
const de_GetProvisionedProductOutputsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProvisionedProductOutputsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ImportAsProvisionedProductCommand
 */
export const de_ImportAsProvisionedProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportAsProvisionedProductCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ImportAsProvisionedProductCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ImportAsProvisionedProductOutput(data, context);
  const response: ImportAsProvisionedProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ImportAsProvisionedProductCommandError
 */
const de_ImportAsProvisionedProductCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportAsProvisionedProductCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateResourceException":
    case "com.amazonaws.servicecatalog#DuplicateResourceException":
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.servicecatalog#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListAcceptedPortfolioSharesCommand
 */
export const de_ListAcceptedPortfolioSharesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAcceptedPortfolioSharesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAcceptedPortfolioSharesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAcceptedPortfolioSharesOutput(data, context);
  const response: ListAcceptedPortfolioSharesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAcceptedPortfolioSharesCommandError
 */
const de_ListAcceptedPortfolioSharesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAcceptedPortfolioSharesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.servicecatalog#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListBudgetsForResourceCommand
 */
export const de_ListBudgetsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBudgetsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListBudgetsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListBudgetsForResourceOutput(data, context);
  const response: ListBudgetsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListBudgetsForResourceCommandError
 */
const de_ListBudgetsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBudgetsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListConstraintsForPortfolioCommand
 */
export const de_ListConstraintsForPortfolioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConstraintsForPortfolioCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListConstraintsForPortfolioCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListConstraintsForPortfolioOutput(data, context);
  const response: ListConstraintsForPortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListConstraintsForPortfolioCommandError
 */
const de_ListConstraintsForPortfolioCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConstraintsForPortfolioCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListLaunchPathsCommand
 */
export const de_ListLaunchPathsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLaunchPathsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListLaunchPathsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListLaunchPathsOutput(data, context);
  const response: ListLaunchPathsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListLaunchPathsCommandError
 */
const de_ListLaunchPathsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLaunchPathsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListOrganizationPortfolioAccessCommand
 */
export const de_ListOrganizationPortfolioAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationPortfolioAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListOrganizationPortfolioAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListOrganizationPortfolioAccessOutput(data, context);
  const response: ListOrganizationPortfolioAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListOrganizationPortfolioAccessCommandError
 */
const de_ListOrganizationPortfolioAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationPortfolioAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.servicecatalog#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListPortfolioAccessCommand
 */
export const de_ListPortfolioAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPortfolioAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPortfolioAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPortfolioAccessOutput(data, context);
  const response: ListPortfolioAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListPortfolioAccessCommandError
 */
const de_ListPortfolioAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPortfolioAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListPortfoliosCommand
 */
export const de_ListPortfoliosCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPortfoliosCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPortfoliosCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPortfoliosOutput(data, context);
  const response: ListPortfoliosCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListPortfoliosCommandError
 */
const de_ListPortfoliosCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPortfoliosCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListPortfoliosForProductCommand
 */
export const de_ListPortfoliosForProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPortfoliosForProductCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPortfoliosForProductCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPortfoliosForProductOutput(data, context);
  const response: ListPortfoliosForProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListPortfoliosForProductCommandError
 */
const de_ListPortfoliosForProductCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPortfoliosForProductCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListPrincipalsForPortfolioCommand
 */
export const de_ListPrincipalsForPortfolioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPrincipalsForPortfolioCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPrincipalsForPortfolioCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPrincipalsForPortfolioOutput(data, context);
  const response: ListPrincipalsForPortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListPrincipalsForPortfolioCommandError
 */
const de_ListPrincipalsForPortfolioCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPrincipalsForPortfolioCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListProvisionedProductPlansCommand
 */
export const de_ListProvisionedProductPlansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisionedProductPlansCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListProvisionedProductPlansCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListProvisionedProductPlansOutput(data, context);
  const response: ListProvisionedProductPlansCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListProvisionedProductPlansCommandError
 */
const de_ListProvisionedProductPlansCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisionedProductPlansCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListProvisioningArtifactsCommand
 */
export const de_ListProvisioningArtifactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisioningArtifactsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListProvisioningArtifactsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListProvisioningArtifactsOutput(data, context);
  const response: ListProvisioningArtifactsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListProvisioningArtifactsCommandError
 */
const de_ListProvisioningArtifactsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisioningArtifactsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand
 */
export const de_ListProvisioningArtifactsForServiceActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisioningArtifactsForServiceActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListProvisioningArtifactsForServiceActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListProvisioningArtifactsForServiceActionOutput(data, context);
  const response: ListProvisioningArtifactsForServiceActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListProvisioningArtifactsForServiceActionCommandError
 */
const de_ListProvisioningArtifactsForServiceActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisioningArtifactsForServiceActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListRecordHistoryCommand
 */
export const de_ListRecordHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecordHistoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRecordHistoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRecordHistoryOutput(data, context);
  const response: ListRecordHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListRecordHistoryCommandError
 */
const de_ListRecordHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecordHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListResourcesForTagOptionCommand
 */
export const de_ListResourcesForTagOptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesForTagOptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListResourcesForTagOptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListResourcesForTagOptionOutput(data, context);
  const response: ListResourcesForTagOptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListResourcesForTagOptionCommandError
 */
const de_ListResourcesForTagOptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesForTagOptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TagOptionNotMigratedException":
    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
      throw await de_TagOptionNotMigratedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListServiceActionsCommand
 */
export const de_ListServiceActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListServiceActionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListServiceActionsOutput(data, context);
  const response: ListServiceActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListServiceActionsCommandError
 */
const de_ListServiceActionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceActionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand
 */
export const de_ListServiceActionsForProvisioningArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceActionsForProvisioningArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListServiceActionsForProvisioningArtifactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListServiceActionsForProvisioningArtifactOutput(data, context);
  const response: ListServiceActionsForProvisioningArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListServiceActionsForProvisioningArtifactCommandError
 */
const de_ListServiceActionsForProvisioningArtifactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceActionsForProvisioningArtifactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListStackInstancesForProvisionedProductCommand
 */
export const de_ListStackInstancesForProvisionedProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackInstancesForProvisionedProductCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListStackInstancesForProvisionedProductCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListStackInstancesForProvisionedProductOutput(data, context);
  const response: ListStackInstancesForProvisionedProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListStackInstancesForProvisionedProductCommandError
 */
const de_ListStackInstancesForProvisionedProductCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackInstancesForProvisionedProductCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTagOptionsCommand
 */
export const de_ListTagOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagOptionsOutput(data, context);
  const response: ListTagOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagOptionsCommandError
 */
const de_ListTagOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "TagOptionNotMigratedException":
    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
      throw await de_TagOptionNotMigratedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1NotifyProvisionProductEngineWorkflowResultCommand
 */
export const de_NotifyProvisionProductEngineWorkflowResultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyProvisionProductEngineWorkflowResultCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_NotifyProvisionProductEngineWorkflowResultCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_NotifyProvisionProductEngineWorkflowResultOutput(data, context);
  const response: NotifyProvisionProductEngineWorkflowResultCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1NotifyProvisionProductEngineWorkflowResultCommandError
 */
const de_NotifyProvisionProductEngineWorkflowResultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyProvisionProductEngineWorkflowResultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1NotifyTerminateProvisionedProductEngineWorkflowResultCommand
 */
export const de_NotifyTerminateProvisionedProductEngineWorkflowResultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyTerminateProvisionedProductEngineWorkflowResultCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_NotifyTerminateProvisionedProductEngineWorkflowResultCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_NotifyTerminateProvisionedProductEngineWorkflowResultOutput(data, context);
  const response: NotifyTerminateProvisionedProductEngineWorkflowResultCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1NotifyTerminateProvisionedProductEngineWorkflowResultCommandError
 */
const de_NotifyTerminateProvisionedProductEngineWorkflowResultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyTerminateProvisionedProductEngineWorkflowResultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1NotifyUpdateProvisionedProductEngineWorkflowResultCommand
 */
export const de_NotifyUpdateProvisionedProductEngineWorkflowResultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyUpdateProvisionedProductEngineWorkflowResultCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_NotifyUpdateProvisionedProductEngineWorkflowResultCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_NotifyUpdateProvisionedProductEngineWorkflowResultOutput(data, context);
  const response: NotifyUpdateProvisionedProductEngineWorkflowResultCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1NotifyUpdateProvisionedProductEngineWorkflowResultCommandError
 */
const de_NotifyUpdateProvisionedProductEngineWorkflowResultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyUpdateProvisionedProductEngineWorkflowResultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ProvisionProductCommand
 */
export const de_ProvisionProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ProvisionProductCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ProvisionProductCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ProvisionProductOutput(data, context);
  const response: ProvisionProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ProvisionProductCommandError
 */
const de_ProvisionProductCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ProvisionProductCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateResourceException":
    case "com.amazonaws.servicecatalog#DuplicateResourceException":
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RejectPortfolioShareCommand
 */
export const de_RejectPortfolioShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectPortfolioShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RejectPortfolioShareCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RejectPortfolioShareOutput(data, context);
  const response: RejectPortfolioShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RejectPortfolioShareCommandError
 */
const de_RejectPortfolioShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectPortfolioShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ScanProvisionedProductsCommand
 */
export const de_ScanProvisionedProductsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ScanProvisionedProductsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ScanProvisionedProductsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ScanProvisionedProductsOutput(data, context);
  const response: ScanProvisionedProductsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ScanProvisionedProductsCommandError
 */
const de_ScanProvisionedProductsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ScanProvisionedProductsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SearchProductsCommand
 */
export const de_SearchProductsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchProductsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SearchProductsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SearchProductsOutput(data, context);
  const response: SearchProductsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SearchProductsCommandError
 */
const de_SearchProductsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchProductsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SearchProductsAsAdminCommand
 */
export const de_SearchProductsAsAdminCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchProductsAsAdminCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SearchProductsAsAdminCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SearchProductsAsAdminOutput(data, context);
  const response: SearchProductsAsAdminCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SearchProductsAsAdminCommandError
 */
const de_SearchProductsAsAdminCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchProductsAsAdminCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SearchProvisionedProductsCommand
 */
export const de_SearchProvisionedProductsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchProvisionedProductsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SearchProvisionedProductsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SearchProvisionedProductsOutput(data, context);
  const response: SearchProvisionedProductsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SearchProvisionedProductsCommandError
 */
const de_SearchProvisionedProductsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchProvisionedProductsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TerminateProvisionedProductCommand
 */
export const de_TerminateProvisionedProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateProvisionedProductCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TerminateProvisionedProductCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TerminateProvisionedProductOutput(data, context);
  const response: TerminateProvisionedProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TerminateProvisionedProductCommandError
 */
const de_TerminateProvisionedProductCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateProvisionedProductCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateConstraintCommand
 */
export const de_UpdateConstraintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConstraintCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateConstraintCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateConstraintOutput(data, context);
  const response: UpdateConstraintCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateConstraintCommandError
 */
const de_UpdateConstraintCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConstraintCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdatePortfolioCommand
 */
export const de_UpdatePortfolioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePortfolioCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdatePortfolioCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdatePortfolioOutput(data, context);
  const response: UpdatePortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdatePortfolioCommandError
 */
const de_UpdatePortfolioCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePortfolioCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.servicecatalog#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TagOptionNotMigratedException":
    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
      throw await de_TagOptionNotMigratedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdatePortfolioShareCommand
 */
export const de_UpdatePortfolioShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePortfolioShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdatePortfolioShareCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdatePortfolioShareOutput(data, context);
  const response: UpdatePortfolioShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdatePortfolioShareCommandError
 */
const de_UpdatePortfolioShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePortfolioShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.servicecatalog#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.servicecatalog#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateProductCommand
 */
export const de_UpdateProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProductCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateProductCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateProductOutput(data, context);
  const response: UpdateProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateProductCommandError
 */
const de_UpdateProductCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProductCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TagOptionNotMigratedException":
    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
      throw await de_TagOptionNotMigratedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateProvisionedProductCommand
 */
export const de_UpdateProvisionedProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProvisionedProductCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateProvisionedProductCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateProvisionedProductOutput(data, context);
  const response: UpdateProvisionedProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateProvisionedProductCommandError
 */
const de_UpdateProvisionedProductCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProvisionedProductCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateProvisionedProductPropertiesCommand
 */
export const de_UpdateProvisionedProductPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProvisionedProductPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateProvisionedProductPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateProvisionedProductPropertiesOutput(data, context);
  const response: UpdateProvisionedProductPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateProvisionedProductPropertiesCommandError
 */
const de_UpdateProvisionedProductPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProvisionedProductPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.servicecatalog#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateProvisioningArtifactCommand
 */
export const de_UpdateProvisioningArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProvisioningArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateProvisioningArtifactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateProvisioningArtifactOutput(data, context);
  const response: UpdateProvisioningArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateProvisioningArtifactCommandError
 */
const de_UpdateProvisioningArtifactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProvisioningArtifactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateServiceActionCommand
 */
export const de_UpdateServiceActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateServiceActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateServiceActionOutput(data, context);
  const response: UpdateServiceActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateServiceActionCommandError
 */
const de_UpdateServiceActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateTagOptionCommand
 */
export const de_UpdateTagOptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTagOptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateTagOptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateTagOptionOutput(data, context);
  const response: UpdateTagOptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateTagOptionCommandError
 */
const de_UpdateTagOptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTagOptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateResourceException":
    case "com.amazonaws.servicecatalog#DuplicateResourceException":
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TagOptionNotMigratedException":
    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
      throw await de_TagOptionNotMigratedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DuplicateResourceExceptionRes
 */
const de_DuplicateResourceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateResourceException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DuplicateResourceException(body, context);
  const exception = new DuplicateResourceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParametersExceptionRes
 */
const de_InvalidParametersExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParametersException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParametersException(body, context);
  const exception = new InvalidParametersException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidStateExceptionRes
 */
const de_InvalidStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidStateException(body, context);
  const exception = new InvalidStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OperationNotSupportedExceptionRes
 */
const de_OperationNotSupportedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OperationNotSupportedException(body, context);
  const exception = new OperationNotSupportedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceInUseException(body, context);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TagOptionNotMigratedExceptionRes
 */
const de_TagOptionNotMigratedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagOptionNotMigratedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TagOptionNotMigratedException(body, context);
  const exception = new TagOptionNotMigratedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AcceptPortfolioShareInput
 */
const se_AcceptPortfolioShareInput = (input: AcceptPortfolioShareInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PortfolioId != null && { PortfolioId: input.PortfolioId }),
    ...(input.PortfolioShareType != null && { PortfolioShareType: input.PortfolioShareType }),
  };
};

/**
 * serializeAws_json1_1AccessLevelFilter
 */
const se_AccessLevelFilter = (input: AccessLevelFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1AddTags
 */
const se_AddTags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1AssociateBudgetWithResourceInput
 */
const se_AssociateBudgetWithResourceInput = (input: AssociateBudgetWithResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_json1_1AssociatePrincipalWithPortfolioInput
 */
const se_AssociatePrincipalWithPortfolioInput = (
  input: AssociatePrincipalWithPortfolioInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PortfolioId != null && { PortfolioId: input.PortfolioId }),
    ...(input.PrincipalARN != null && { PrincipalARN: input.PrincipalARN }),
    ...(input.PrincipalType != null && { PrincipalType: input.PrincipalType }),
  };
};

/**
 * serializeAws_json1_1AssociateProductWithPortfolioInput
 */
const se_AssociateProductWithPortfolioInput = (
  input: AssociateProductWithPortfolioInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PortfolioId != null && { PortfolioId: input.PortfolioId }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
    ...(input.SourcePortfolioId != null && { SourcePortfolioId: input.SourcePortfolioId }),
  };
};

/**
 * serializeAws_json1_1AssociateServiceActionWithProvisioningArtifactInput
 */
const se_AssociateServiceActionWithProvisioningArtifactInput = (
  input: AssociateServiceActionWithProvisioningArtifactInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
    ...(input.ProvisioningArtifactId != null && { ProvisioningArtifactId: input.ProvisioningArtifactId }),
    ...(input.ServiceActionId != null && { ServiceActionId: input.ServiceActionId }),
  };
};

/**
 * serializeAws_json1_1AssociateTagOptionWithResourceInput
 */
const se_AssociateTagOptionWithResourceInput = (
  input: AssociateTagOptionWithResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.TagOptionId != null && { TagOptionId: input.TagOptionId }),
  };
};

/**
 * serializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactInput
 */
const se_BatchAssociateServiceActionWithProvisioningArtifactInput = (
  input: BatchAssociateServiceActionWithProvisioningArtifactInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.ServiceActionAssociations != null && {
      ServiceActionAssociations: se_ServiceActionAssociations(input.ServiceActionAssociations, context),
    }),
  };
};

/**
 * serializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactInput
 */
const se_BatchDisassociateServiceActionFromProvisioningArtifactInput = (
  input: BatchDisassociateServiceActionFromProvisioningArtifactInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.ServiceActionAssociations != null && {
      ServiceActionAssociations: se_ServiceActionAssociations(input.ServiceActionAssociations, context),
    }),
  };
};

/**
 * serializeAws_json1_1CodeStarParameters
 */
const se_CodeStarParameters = (input: CodeStarParameters, context: __SerdeContext): any => {
  return {
    ...(input.ArtifactPath != null && { ArtifactPath: input.ArtifactPath }),
    ...(input.Branch != null && { Branch: input.Branch }),
    ...(input.ConnectionArn != null && { ConnectionArn: input.ConnectionArn }),
    ...(input.Repository != null && { Repository: input.Repository }),
  };
};

/**
 * serializeAws_json1_1CopyOptions
 */
const se_CopyOptions = (input: (CopyOption | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CopyProductInput
 */
const se_CopyProductInput = (input: CopyProductInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.CopyOptions != null && { CopyOptions: se_CopyOptions(input.CopyOptions, context) }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.SourceProductArn != null && { SourceProductArn: input.SourceProductArn }),
    ...(input.SourceProvisioningArtifactIdentifiers != null && {
      SourceProvisioningArtifactIdentifiers: se_SourceProvisioningArtifactProperties(
        input.SourceProvisioningArtifactIdentifiers,
        context
      ),
    }),
    ...(input.TargetProductId != null && { TargetProductId: input.TargetProductId }),
    ...(input.TargetProductName != null && { TargetProductName: input.TargetProductName }),
  };
};

/**
 * serializeAws_json1_1CreateConstraintInput
 */
const se_CreateConstraintInput = (input: CreateConstraintInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Description != null && { Description: input.Description }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.Parameters != null && { Parameters: input.Parameters }),
    ...(input.PortfolioId != null && { PortfolioId: input.PortfolioId }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1CreatePortfolioInput
 */
const se_CreatePortfolioInput = (input: CreatePortfolioInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.ProviderName != null && { ProviderName: input.ProviderName }),
    ...(input.Tags != null && { Tags: se_AddTags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreatePortfolioShareInput
 */
const se_CreatePortfolioShareInput = (input: CreatePortfolioShareInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.OrganizationNode != null && { OrganizationNode: se_OrganizationNode(input.OrganizationNode, context) }),
    ...(input.PortfolioId != null && { PortfolioId: input.PortfolioId }),
    ...(input.SharePrincipals != null && { SharePrincipals: input.SharePrincipals }),
    ...(input.ShareTagOptions != null && { ShareTagOptions: input.ShareTagOptions }),
  };
};

/**
 * serializeAws_json1_1CreateProductInput
 */
const se_CreateProductInput = (input: CreateProductInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Distributor != null && { Distributor: input.Distributor }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Owner != null && { Owner: input.Owner }),
    ...(input.ProductType != null && { ProductType: input.ProductType }),
    ...(input.ProvisioningArtifactParameters != null && {
      ProvisioningArtifactParameters: se_ProvisioningArtifactProperties(input.ProvisioningArtifactParameters, context),
    }),
    ...(input.SourceConnection != null && { SourceConnection: se_SourceConnection(input.SourceConnection, context) }),
    ...(input.SupportDescription != null && { SupportDescription: input.SupportDescription }),
    ...(input.SupportEmail != null && { SupportEmail: input.SupportEmail }),
    ...(input.SupportUrl != null && { SupportUrl: input.SupportUrl }),
    ...(input.Tags != null && { Tags: se_AddTags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateProvisionedProductPlanInput
 */
const se_CreateProvisionedProductPlanInput = (
  input: CreateProvisionedProductPlanInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.NotificationArns != null && { NotificationArns: se_NotificationArns(input.NotificationArns, context) }),
    ...(input.PathId != null && { PathId: input.PathId }),
    ...(input.PlanName != null && { PlanName: input.PlanName }),
    ...(input.PlanType != null && { PlanType: input.PlanType }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
    ...(input.ProvisionedProductName != null && { ProvisionedProductName: input.ProvisionedProductName }),
    ...(input.ProvisioningArtifactId != null && { ProvisioningArtifactId: input.ProvisioningArtifactId }),
    ...(input.ProvisioningParameters != null && {
      ProvisioningParameters: se_UpdateProvisioningParameters(input.ProvisioningParameters, context),
    }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateProvisioningArtifactInput
 */
const se_CreateProvisioningArtifactInput = (input: CreateProvisioningArtifactInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.Parameters != null && { Parameters: se_ProvisioningArtifactProperties(input.Parameters, context) }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
  };
};

/**
 * serializeAws_json1_1CreateServiceActionInput
 */
const se_CreateServiceActionInput = (input: CreateServiceActionInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Definition != null && { Definition: se_ServiceActionDefinitionMap(input.Definition, context) }),
    ...(input.DefinitionType != null && { DefinitionType: input.DefinitionType }),
    ...(input.Description != null && { Description: input.Description }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1CreateTagOptionInput
 */
const se_CreateTagOptionInput = (input: CreateTagOptionInput, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1DeleteConstraintInput
 */
const se_DeleteConstraintInput = (input: DeleteConstraintInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Id != null && { Id: input.Id }),
  };
};

/**
 * serializeAws_json1_1DeletePortfolioInput
 */
const se_DeletePortfolioInput = (input: DeletePortfolioInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Id != null && { Id: input.Id }),
  };
};

/**
 * serializeAws_json1_1DeletePortfolioShareInput
 */
const se_DeletePortfolioShareInput = (input: DeletePortfolioShareInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.OrganizationNode != null && { OrganizationNode: se_OrganizationNode(input.OrganizationNode, context) }),
    ...(input.PortfolioId != null && { PortfolioId: input.PortfolioId }),
  };
};

/**
 * serializeAws_json1_1DeleteProductInput
 */
const se_DeleteProductInput = (input: DeleteProductInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Id != null && { Id: input.Id }),
  };
};

/**
 * serializeAws_json1_1DeleteProvisionedProductPlanInput
 */
const se_DeleteProvisionedProductPlanInput = (
  input: DeleteProvisionedProductPlanInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.IgnoreErrors != null && { IgnoreErrors: input.IgnoreErrors }),
    ...(input.PlanId != null && { PlanId: input.PlanId }),
  };
};

/**
 * serializeAws_json1_1DeleteProvisioningArtifactInput
 */
const se_DeleteProvisioningArtifactInput = (input: DeleteProvisioningArtifactInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
    ...(input.ProvisioningArtifactId != null && { ProvisioningArtifactId: input.ProvisioningArtifactId }),
  };
};

/**
 * serializeAws_json1_1DeleteServiceActionInput
 */
const se_DeleteServiceActionInput = (input: DeleteServiceActionInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Id != null && { Id: input.Id }),
  };
};

/**
 * serializeAws_json1_1DeleteTagOptionInput
 */
const se_DeleteTagOptionInput = (input: DeleteTagOptionInput, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
  };
};

/**
 * serializeAws_json1_1DescribeConstraintInput
 */
const se_DescribeConstraintInput = (input: DescribeConstraintInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Id != null && { Id: input.Id }),
  };
};

/**
 * serializeAws_json1_1DescribeCopyProductStatusInput
 */
const se_DescribeCopyProductStatusInput = (input: DescribeCopyProductStatusInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.CopyProductToken != null && { CopyProductToken: input.CopyProductToken }),
  };
};

/**
 * serializeAws_json1_1DescribePortfolioInput
 */
const se_DescribePortfolioInput = (input: DescribePortfolioInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Id != null && { Id: input.Id }),
  };
};

/**
 * serializeAws_json1_1DescribePortfolioSharesInput
 */
const se_DescribePortfolioSharesInput = (input: DescribePortfolioSharesInput, context: __SerdeContext): any => {
  return {
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.PortfolioId != null && { PortfolioId: input.PortfolioId }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1DescribePortfolioShareStatusInput
 */
const se_DescribePortfolioShareStatusInput = (
  input: DescribePortfolioShareStatusInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.PortfolioShareToken != null && { PortfolioShareToken: input.PortfolioShareToken }),
  };
};

/**
 * serializeAws_json1_1DescribeProductAsAdminInput
 */
const se_DescribeProductAsAdminInput = (input: DescribeProductAsAdminInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SourcePortfolioId != null && { SourcePortfolioId: input.SourcePortfolioId }),
  };
};

/**
 * serializeAws_json1_1DescribeProductInput
 */
const se_DescribeProductInput = (input: DescribeProductInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DescribeProductViewInput
 */
const se_DescribeProductViewInput = (input: DescribeProductViewInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Id != null && { Id: input.Id }),
  };
};

/**
 * serializeAws_json1_1DescribeProvisionedProductInput
 */
const se_DescribeProvisionedProductInput = (input: DescribeProvisionedProductInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DescribeProvisionedProductPlanInput
 */
const se_DescribeProvisionedProductPlanInput = (
  input: DescribeProvisionedProductPlanInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.PlanId != null && { PlanId: input.PlanId }),
  };
};

/**
 * serializeAws_json1_1DescribeProvisioningArtifactInput
 */
const se_DescribeProvisioningArtifactInput = (
  input: DescribeProvisioningArtifactInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
    ...(input.ProductName != null && { ProductName: input.ProductName }),
    ...(input.ProvisioningArtifactId != null && { ProvisioningArtifactId: input.ProvisioningArtifactId }),
    ...(input.ProvisioningArtifactName != null && { ProvisioningArtifactName: input.ProvisioningArtifactName }),
    ...(input.Verbose != null && { Verbose: input.Verbose }),
  };
};

/**
 * serializeAws_json1_1DescribeProvisioningParametersInput
 */
const se_DescribeProvisioningParametersInput = (
  input: DescribeProvisioningParametersInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PathId != null && { PathId: input.PathId }),
    ...(input.PathName != null && { PathName: input.PathName }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
    ...(input.ProductName != null && { ProductName: input.ProductName }),
    ...(input.ProvisioningArtifactId != null && { ProvisioningArtifactId: input.ProvisioningArtifactId }),
    ...(input.ProvisioningArtifactName != null && { ProvisioningArtifactName: input.ProvisioningArtifactName }),
  };
};

/**
 * serializeAws_json1_1DescribeRecordInput
 */
const se_DescribeRecordInput = (input: DescribeRecordInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
  };
};

/**
 * serializeAws_json1_1DescribeServiceActionExecutionParametersInput
 */
const se_DescribeServiceActionExecutionParametersInput = (
  input: DescribeServiceActionExecutionParametersInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.ProvisionedProductId != null && { ProvisionedProductId: input.ProvisionedProductId }),
    ...(input.ServiceActionId != null && { ServiceActionId: input.ServiceActionId }),
  };
};

/**
 * serializeAws_json1_1DescribeServiceActionInput
 */
const se_DescribeServiceActionInput = (input: DescribeServiceActionInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Id != null && { Id: input.Id }),
  };
};

/**
 * serializeAws_json1_1DescribeTagOptionInput
 */
const se_DescribeTagOptionInput = (input: DescribeTagOptionInput, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
  };
};

/**
 * serializeAws_json1_1DisableAWSOrganizationsAccessInput
 */
const se_DisableAWSOrganizationsAccessInput = (
  input: DisableAWSOrganizationsAccessInput,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_json1_1DisassociateBudgetFromResourceInput
 */
const se_DisassociateBudgetFromResourceInput = (
  input: DisassociateBudgetFromResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_json1_1DisassociatePrincipalFromPortfolioInput
 */
const se_DisassociatePrincipalFromPortfolioInput = (
  input: DisassociatePrincipalFromPortfolioInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PortfolioId != null && { PortfolioId: input.PortfolioId }),
    ...(input.PrincipalARN != null && { PrincipalARN: input.PrincipalARN }),
    ...(input.PrincipalType != null && { PrincipalType: input.PrincipalType }),
  };
};

/**
 * serializeAws_json1_1DisassociateProductFromPortfolioInput
 */
const se_DisassociateProductFromPortfolioInput = (
  input: DisassociateProductFromPortfolioInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PortfolioId != null && { PortfolioId: input.PortfolioId }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
  };
};

/**
 * serializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactInput
 */
const se_DisassociateServiceActionFromProvisioningArtifactInput = (
  input: DisassociateServiceActionFromProvisioningArtifactInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
    ...(input.ProvisioningArtifactId != null && { ProvisioningArtifactId: input.ProvisioningArtifactId }),
    ...(input.ServiceActionId != null && { ServiceActionId: input.ServiceActionId }),
  };
};

/**
 * serializeAws_json1_1DisassociateTagOptionFromResourceInput
 */
const se_DisassociateTagOptionFromResourceInput = (
  input: DisassociateTagOptionFromResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.TagOptionId != null && { TagOptionId: input.TagOptionId }),
  };
};

/**
 * serializeAws_json1_1EnableAWSOrganizationsAccessInput
 */
const se_EnableAWSOrganizationsAccessInput = (
  input: EnableAWSOrganizationsAccessInput,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_json1_1EngineWorkflowResourceIdentifier
 */
const se_EngineWorkflowResourceIdentifier = (input: EngineWorkflowResourceIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.UniqueTag != null && { UniqueTag: se_UniqueTagResourceIdentifier(input.UniqueTag, context) }),
  };
};

/**
 * serializeAws_json1_1ExecuteProvisionedProductPlanInput
 */
const se_ExecuteProvisionedProductPlanInput = (
  input: ExecuteProvisionedProductPlanInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.PlanId != null && { PlanId: input.PlanId }),
  };
};

/**
 * serializeAws_json1_1ExecuteProvisionedProductServiceActionInput
 */
const se_ExecuteProvisionedProductServiceActionInput = (
  input: ExecuteProvisionedProductServiceActionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ExecuteToken: input.ExecuteToken ?? generateIdempotencyToken(),
    ...(input.Parameters != null && { Parameters: se_ExecutionParameterMap(input.Parameters, context) }),
    ...(input.ProvisionedProductId != null && { ProvisionedProductId: input.ProvisionedProductId }),
    ...(input.ServiceActionId != null && { ServiceActionId: input.ServiceActionId }),
  };
};

/**
 * serializeAws_json1_1ExecutionParameterMap
 */
const se_ExecutionParameterMap = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ExecutionParameterValueList(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1ExecutionParameterValueList
 */
const se_ExecutionParameterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1GetAWSOrganizationsAccessStatusInput
 */
const se_GetAWSOrganizationsAccessStatusInput = (
  input: GetAWSOrganizationsAccessStatusInput,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_json1_1GetProvisionedProductOutputsInput
 */
const se_GetProvisionedProductOutputsInput = (
  input: GetProvisionedProductOutputsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.OutputKeys != null && { OutputKeys: se_OutputKeys(input.OutputKeys, context) }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.ProvisionedProductId != null && { ProvisionedProductId: input.ProvisionedProductId }),
    ...(input.ProvisionedProductName != null && { ProvisionedProductName: input.ProvisionedProductName }),
  };
};

/**
 * serializeAws_json1_1ImportAsProvisionedProductInput
 */
const se_ImportAsProvisionedProductInput = (input: ImportAsProvisionedProductInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.PhysicalId != null && { PhysicalId: input.PhysicalId }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
    ...(input.ProvisionedProductName != null && { ProvisionedProductName: input.ProvisionedProductName }),
    ...(input.ProvisioningArtifactId != null && { ProvisioningArtifactId: input.ProvisioningArtifactId }),
  };
};

/**
 * serializeAws_json1_1ListAcceptedPortfolioSharesInput
 */
const se_ListAcceptedPortfolioSharesInput = (input: ListAcceptedPortfolioSharesInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.PortfolioShareType != null && { PortfolioShareType: input.PortfolioShareType }),
  };
};

/**
 * serializeAws_json1_1ListBudgetsForResourceInput
 */
const se_ListBudgetsForResourceInput = (input: ListBudgetsForResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_json1_1ListConstraintsForPortfolioInput
 */
const se_ListConstraintsForPortfolioInput = (input: ListConstraintsForPortfolioInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.PortfolioId != null && { PortfolioId: input.PortfolioId }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
  };
};

/**
 * serializeAws_json1_1ListLaunchPathsInput
 */
const se_ListLaunchPathsInput = (input: ListLaunchPathsInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
  };
};

/**
 * serializeAws_json1_1ListOrganizationPortfolioAccessInput
 */
const se_ListOrganizationPortfolioAccessInput = (
  input: ListOrganizationPortfolioAccessInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.OrganizationNodeType != null && { OrganizationNodeType: input.OrganizationNodeType }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.PortfolioId != null && { PortfolioId: input.PortfolioId }),
  };
};

/**
 * serializeAws_json1_1ListPortfolioAccessInput
 */
const se_ListPortfolioAccessInput = (input: ListPortfolioAccessInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.OrganizationParentId != null && { OrganizationParentId: input.OrganizationParentId }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.PortfolioId != null && { PortfolioId: input.PortfolioId }),
  };
};

/**
 * serializeAws_json1_1ListPortfoliosForProductInput
 */
const se_ListPortfoliosForProductInput = (input: ListPortfoliosForProductInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
  };
};

/**
 * serializeAws_json1_1ListPortfoliosInput
 */
const se_ListPortfoliosInput = (input: ListPortfoliosInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
  };
};

/**
 * serializeAws_json1_1ListPrincipalsForPortfolioInput
 */
const se_ListPrincipalsForPortfolioInput = (input: ListPrincipalsForPortfolioInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.PortfolioId != null && { PortfolioId: input.PortfolioId }),
  };
};

/**
 * serializeAws_json1_1ListProvisionedProductPlansInput
 */
const se_ListProvisionedProductPlansInput = (input: ListProvisionedProductPlansInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.AccessLevelFilter != null && {
      AccessLevelFilter: se_AccessLevelFilter(input.AccessLevelFilter, context),
    }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.ProvisionProductId != null && { ProvisionProductId: input.ProvisionProductId }),
  };
};

/**
 * serializeAws_json1_1ListProvisioningArtifactsForServiceActionInput
 */
const se_ListProvisioningArtifactsForServiceActionInput = (
  input: ListProvisioningArtifactsForServiceActionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.ServiceActionId != null && { ServiceActionId: input.ServiceActionId }),
  };
};

/**
 * serializeAws_json1_1ListProvisioningArtifactsInput
 */
const se_ListProvisioningArtifactsInput = (input: ListProvisioningArtifactsInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
  };
};

/**
 * serializeAws_json1_1ListRecordHistoryInput
 */
const se_ListRecordHistoryInput = (input: ListRecordHistoryInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.AccessLevelFilter != null && {
      AccessLevelFilter: se_AccessLevelFilter(input.AccessLevelFilter, context),
    }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.SearchFilter != null && { SearchFilter: se_ListRecordHistorySearchFilter(input.SearchFilter, context) }),
  };
};

/**
 * serializeAws_json1_1ListRecordHistorySearchFilter
 */
const se_ListRecordHistorySearchFilter = (input: ListRecordHistorySearchFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1ListResourcesForTagOptionInput
 */
const se_ListResourcesForTagOptionInput = (input: ListResourcesForTagOptionInput, context: __SerdeContext): any => {
  return {
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.TagOptionId != null && { TagOptionId: input.TagOptionId }),
  };
};

/**
 * serializeAws_json1_1ListServiceActionsForProvisioningArtifactInput
 */
const se_ListServiceActionsForProvisioningArtifactInput = (
  input: ListServiceActionsForProvisioningArtifactInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
    ...(input.ProvisioningArtifactId != null && { ProvisioningArtifactId: input.ProvisioningArtifactId }),
  };
};

/**
 * serializeAws_json1_1ListServiceActionsInput
 */
const se_ListServiceActionsInput = (input: ListServiceActionsInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
  };
};

/**
 * serializeAws_json1_1ListStackInstancesForProvisionedProductInput
 */
const se_ListStackInstancesForProvisionedProductInput = (
  input: ListStackInstancesForProvisionedProductInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.ProvisionedProductId != null && { ProvisionedProductId: input.ProvisionedProductId }),
  };
};

/**
 * serializeAws_json1_1ListTagOptionsFilters
 */
const se_ListTagOptionsFilters = (input: ListTagOptionsFilters, context: __SerdeContext): any => {
  return {
    ...(input.Active != null && { Active: input.Active }),
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1ListTagOptionsInput
 */
const se_ListTagOptionsInput = (input: ListTagOptionsInput, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_ListTagOptionsFilters(input.Filters, context) }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
  };
};

/**
 * serializeAws_json1_1NotificationArns
 */
const se_NotificationArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1NotifyProvisionProductEngineWorkflowResultInput
 */
const se_NotifyProvisionProductEngineWorkflowResultInput = (
  input: NotifyProvisionProductEngineWorkflowResultInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FailureReason != null && { FailureReason: input.FailureReason }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.Outputs != null && { Outputs: se_RecordOutputs(input.Outputs, context) }),
    ...(input.RecordId != null && { RecordId: input.RecordId }),
    ...(input.ResourceIdentifier != null && {
      ResourceIdentifier: se_EngineWorkflowResourceIdentifier(input.ResourceIdentifier, context),
    }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.WorkflowToken != null && { WorkflowToken: input.WorkflowToken }),
  };
};

/**
 * serializeAws_json1_1NotifyTerminateProvisionedProductEngineWorkflowResultInput
 */
const se_NotifyTerminateProvisionedProductEngineWorkflowResultInput = (
  input: NotifyTerminateProvisionedProductEngineWorkflowResultInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FailureReason != null && { FailureReason: input.FailureReason }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.RecordId != null && { RecordId: input.RecordId }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.WorkflowToken != null && { WorkflowToken: input.WorkflowToken }),
  };
};

/**
 * serializeAws_json1_1NotifyUpdateProvisionedProductEngineWorkflowResultInput
 */
const se_NotifyUpdateProvisionedProductEngineWorkflowResultInput = (
  input: NotifyUpdateProvisionedProductEngineWorkflowResultInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FailureReason != null && { FailureReason: input.FailureReason }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.Outputs != null && { Outputs: se_RecordOutputs(input.Outputs, context) }),
    ...(input.RecordId != null && { RecordId: input.RecordId }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.WorkflowToken != null && { WorkflowToken: input.WorkflowToken }),
  };
};

/**
 * serializeAws_json1_1OrganizationNode
 */
const se_OrganizationNode = (input: OrganizationNode, context: __SerdeContext): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1OutputKeys
 */
const se_OutputKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ProductViewFilters
 */
const se_ProductViewFilters = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [ProductViewFilterBy | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ProductViewFilterValues(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1ProductViewFilterValues
 */
const se_ProductViewFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ProvisionedProductFilters
 */
const se_ProvisionedProductFilters = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: Record<string, any>, [key, value]: [ProvisionedProductViewFilterBy | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = se_ProvisionedProductViewFilterValues(value, context);
      return acc;
    },
    {}
  );
};

/**
 * serializeAws_json1_1ProvisionedProductProperties
 */
const se_ProvisionedProductProperties = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [PropertyKey | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1ProvisionedProductViewFilterValues
 */
const se_ProvisionedProductViewFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ProvisioningArtifactInfo
 */
const se_ProvisioningArtifactInfo = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1ProvisioningArtifactProperties
 */
const se_ProvisioningArtifactProperties = (input: ProvisioningArtifactProperties, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisableTemplateValidation != null && { DisableTemplateValidation: input.DisableTemplateValidation }),
    ...(input.Info != null && { Info: se_ProvisioningArtifactInfo(input.Info, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1ProvisioningParameter
 */
const se_ProvisioningParameter = (input: ProvisioningParameter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1ProvisioningParameters
 */
const se_ProvisioningParameters = (input: ProvisioningParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ProvisioningParameter(entry, context);
    });
};

/**
 * serializeAws_json1_1ProvisioningPreferences
 */
const se_ProvisioningPreferences = (input: ProvisioningPreferences, context: __SerdeContext): any => {
  return {
    ...(input.StackSetAccounts != null && { StackSetAccounts: se_StackSetAccounts(input.StackSetAccounts, context) }),
    ...(input.StackSetFailureToleranceCount != null && {
      StackSetFailureToleranceCount: input.StackSetFailureToleranceCount,
    }),
    ...(input.StackSetFailureTolerancePercentage != null && {
      StackSetFailureTolerancePercentage: input.StackSetFailureTolerancePercentage,
    }),
    ...(input.StackSetMaxConcurrencyCount != null && {
      StackSetMaxConcurrencyCount: input.StackSetMaxConcurrencyCount,
    }),
    ...(input.StackSetMaxConcurrencyPercentage != null && {
      StackSetMaxConcurrencyPercentage: input.StackSetMaxConcurrencyPercentage,
    }),
    ...(input.StackSetRegions != null && { StackSetRegions: se_StackSetRegions(input.StackSetRegions, context) }),
  };
};

/**
 * serializeAws_json1_1ProvisionProductInput
 */
const se_ProvisionProductInput = (input: ProvisionProductInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.NotificationArns != null && { NotificationArns: se_NotificationArns(input.NotificationArns, context) }),
    ...(input.PathId != null && { PathId: input.PathId }),
    ...(input.PathName != null && { PathName: input.PathName }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
    ...(input.ProductName != null && { ProductName: input.ProductName }),
    ProvisionToken: input.ProvisionToken ?? generateIdempotencyToken(),
    ...(input.ProvisionedProductName != null && { ProvisionedProductName: input.ProvisionedProductName }),
    ...(input.ProvisioningArtifactId != null && { ProvisioningArtifactId: input.ProvisioningArtifactId }),
    ...(input.ProvisioningArtifactName != null && { ProvisioningArtifactName: input.ProvisioningArtifactName }),
    ...(input.ProvisioningParameters != null && {
      ProvisioningParameters: se_ProvisioningParameters(input.ProvisioningParameters, context),
    }),
    ...(input.ProvisioningPreferences != null && {
      ProvisioningPreferences: se_ProvisioningPreferences(input.ProvisioningPreferences, context),
    }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1RecordOutput
 */
const se_RecordOutput = (input: RecordOutput, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.OutputKey != null && { OutputKey: input.OutputKey }),
    ...(input.OutputValue != null && { OutputValue: input.OutputValue }),
  };
};

/**
 * serializeAws_json1_1RecordOutputs
 */
const se_RecordOutputs = (input: RecordOutput[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RecordOutput(entry, context);
    });
};

/**
 * serializeAws_json1_1RejectPortfolioShareInput
 */
const se_RejectPortfolioShareInput = (input: RejectPortfolioShareInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PortfolioId != null && { PortfolioId: input.PortfolioId }),
    ...(input.PortfolioShareType != null && { PortfolioShareType: input.PortfolioShareType }),
  };
};

/**
 * serializeAws_json1_1ScanProvisionedProductsInput
 */
const se_ScanProvisionedProductsInput = (input: ScanProvisionedProductsInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.AccessLevelFilter != null && {
      AccessLevelFilter: se_AccessLevelFilter(input.AccessLevelFilter, context),
    }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
  };
};

/**
 * serializeAws_json1_1SearchProductsAsAdminInput
 */
const se_SearchProductsAsAdminInput = (input: SearchProductsAsAdminInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Filters != null && { Filters: se_ProductViewFilters(input.Filters, context) }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.PortfolioId != null && { PortfolioId: input.PortfolioId }),
    ...(input.ProductSource != null && { ProductSource: input.ProductSource }),
    ...(input.SortBy != null && { SortBy: input.SortBy }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

/**
 * serializeAws_json1_1SearchProductsInput
 */
const se_SearchProductsInput = (input: SearchProductsInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Filters != null && { Filters: se_ProductViewFilters(input.Filters, context) }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.SortBy != null && { SortBy: input.SortBy }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

/**
 * serializeAws_json1_1SearchProvisionedProductsInput
 */
const se_SearchProvisionedProductsInput = (input: SearchProvisionedProductsInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.AccessLevelFilter != null && {
      AccessLevelFilter: se_AccessLevelFilter(input.AccessLevelFilter, context),
    }),
    ...(input.Filters != null && { Filters: se_ProvisionedProductFilters(input.Filters, context) }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.SortBy != null && { SortBy: input.SortBy }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

/**
 * serializeAws_json1_1ServiceActionAssociation
 */
const se_ServiceActionAssociation = (input: ServiceActionAssociation, context: __SerdeContext): any => {
  return {
    ...(input.ProductId != null && { ProductId: input.ProductId }),
    ...(input.ProvisioningArtifactId != null && { ProvisioningArtifactId: input.ProvisioningArtifactId }),
    ...(input.ServiceActionId != null && { ServiceActionId: input.ServiceActionId }),
  };
};

/**
 * serializeAws_json1_1ServiceActionAssociations
 */
const se_ServiceActionAssociations = (input: ServiceActionAssociation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ServiceActionAssociation(entry, context);
    });
};

/**
 * serializeAws_json1_1ServiceActionDefinitionMap
 */
const se_ServiceActionDefinitionMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: Record<string, any>, [key, value]: [ServiceActionDefinitionKey | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = value;
      return acc;
    },
    {}
  );
};

/**
 * serializeAws_json1_1SourceConnection
 */
const se_SourceConnection = (input: SourceConnection, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionParameters != null && {
      ConnectionParameters: se_SourceConnectionParameters(input.ConnectionParameters, context),
    }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1SourceConnectionParameters
 */
const se_SourceConnectionParameters = (input: SourceConnectionParameters, context: __SerdeContext): any => {
  return {
    ...(input.CodeStar != null && { CodeStar: se_CodeStarParameters(input.CodeStar, context) }),
  };
};

/**
 * serializeAws_json1_1SourceProvisioningArtifactProperties
 */
const se_SourceProvisioningArtifactProperties = (input: Record<string, string>[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SourceProvisioningArtifactPropertiesMap(entry, context);
    });
};

/**
 * serializeAws_json1_1SourceProvisioningArtifactPropertiesMap
 */
const se_SourceProvisioningArtifactPropertiesMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: Record<string, any>, [key, value]: [ProvisioningArtifactPropertyName | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = value;
      return acc;
    },
    {}
  );
};

/**
 * serializeAws_json1_1StackSetAccounts
 */
const se_StackSetAccounts = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1StackSetRegions
 */
const se_StackSetRegions = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagKeys
 */
const se_TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Tags
 */
const se_Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TerminateProvisionedProductInput
 */
const se_TerminateProvisionedProductInput = (input: TerminateProvisionedProductInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.IgnoreErrors != null && { IgnoreErrors: input.IgnoreErrors }),
    ...(input.ProvisionedProductId != null && { ProvisionedProductId: input.ProvisionedProductId }),
    ...(input.ProvisionedProductName != null && { ProvisionedProductName: input.ProvisionedProductName }),
    ...(input.RetainPhysicalResources != null && { RetainPhysicalResources: input.RetainPhysicalResources }),
    TerminateToken: input.TerminateToken ?? generateIdempotencyToken(),
  };
};

/**
 * serializeAws_json1_1UniqueTagResourceIdentifier
 */
const se_UniqueTagResourceIdentifier = (input: UniqueTagResourceIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1UpdateConstraintInput
 */
const se_UpdateConstraintInput = (input: UpdateConstraintInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Parameters != null && { Parameters: input.Parameters }),
  };
};

/**
 * serializeAws_json1_1UpdatePortfolioInput
 */
const se_UpdatePortfolioInput = (input: UpdatePortfolioInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.AddTags != null && { AddTags: se_AddTags(input.AddTags, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.ProviderName != null && { ProviderName: input.ProviderName }),
    ...(input.RemoveTags != null && { RemoveTags: se_TagKeys(input.RemoveTags, context) }),
  };
};

/**
 * serializeAws_json1_1UpdatePortfolioShareInput
 */
const se_UpdatePortfolioShareInput = (input: UpdatePortfolioShareInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.OrganizationNode != null && { OrganizationNode: se_OrganizationNode(input.OrganizationNode, context) }),
    ...(input.PortfolioId != null && { PortfolioId: input.PortfolioId }),
    ...(input.SharePrincipals != null && { SharePrincipals: input.SharePrincipals }),
    ...(input.ShareTagOptions != null && { ShareTagOptions: input.ShareTagOptions }),
  };
};

/**
 * serializeAws_json1_1UpdateProductInput
 */
const se_UpdateProductInput = (input: UpdateProductInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.AddTags != null && { AddTags: se_AddTags(input.AddTags, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Distributor != null && { Distributor: input.Distributor }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Owner != null && { Owner: input.Owner }),
    ...(input.RemoveTags != null && { RemoveTags: se_TagKeys(input.RemoveTags, context) }),
    ...(input.SourceConnection != null && { SourceConnection: se_SourceConnection(input.SourceConnection, context) }),
    ...(input.SupportDescription != null && { SupportDescription: input.SupportDescription }),
    ...(input.SupportEmail != null && { SupportEmail: input.SupportEmail }),
    ...(input.SupportUrl != null && { SupportUrl: input.SupportUrl }),
  };
};

/**
 * serializeAws_json1_1UpdateProvisionedProductInput
 */
const se_UpdateProvisionedProductInput = (input: UpdateProvisionedProductInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PathId != null && { PathId: input.PathId }),
    ...(input.PathName != null && { PathName: input.PathName }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
    ...(input.ProductName != null && { ProductName: input.ProductName }),
    ...(input.ProvisionedProductId != null && { ProvisionedProductId: input.ProvisionedProductId }),
    ...(input.ProvisionedProductName != null && { ProvisionedProductName: input.ProvisionedProductName }),
    ...(input.ProvisioningArtifactId != null && { ProvisioningArtifactId: input.ProvisioningArtifactId }),
    ...(input.ProvisioningArtifactName != null && { ProvisioningArtifactName: input.ProvisioningArtifactName }),
    ...(input.ProvisioningParameters != null && {
      ProvisioningParameters: se_UpdateProvisioningParameters(input.ProvisioningParameters, context),
    }),
    ...(input.ProvisioningPreferences != null && {
      ProvisioningPreferences: se_UpdateProvisioningPreferences(input.ProvisioningPreferences, context),
    }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    UpdateToken: input.UpdateToken ?? generateIdempotencyToken(),
  };
};

/**
 * serializeAws_json1_1UpdateProvisionedProductPropertiesInput
 */
const se_UpdateProvisionedProductPropertiesInput = (
  input: UpdateProvisionedProductPropertiesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.ProvisionedProductId != null && { ProvisionedProductId: input.ProvisionedProductId }),
    ...(input.ProvisionedProductProperties != null && {
      ProvisionedProductProperties: se_ProvisionedProductProperties(input.ProvisionedProductProperties, context),
    }),
  };
};

/**
 * serializeAws_json1_1UpdateProvisioningArtifactInput
 */
const se_UpdateProvisioningArtifactInput = (input: UpdateProvisioningArtifactInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Active != null && { Active: input.Active }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Guidance != null && { Guidance: input.Guidance }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
    ...(input.ProvisioningArtifactId != null && { ProvisioningArtifactId: input.ProvisioningArtifactId }),
  };
};

/**
 * serializeAws_json1_1UpdateProvisioningParameter
 */
const se_UpdateProvisioningParameter = (input: UpdateProvisioningParameter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.UsePreviousValue != null && { UsePreviousValue: input.UsePreviousValue }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1UpdateProvisioningParameters
 */
const se_UpdateProvisioningParameters = (input: UpdateProvisioningParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_UpdateProvisioningParameter(entry, context);
    });
};

/**
 * serializeAws_json1_1UpdateProvisioningPreferences
 */
const se_UpdateProvisioningPreferences = (input: UpdateProvisioningPreferences, context: __SerdeContext): any => {
  return {
    ...(input.StackSetAccounts != null && { StackSetAccounts: se_StackSetAccounts(input.StackSetAccounts, context) }),
    ...(input.StackSetFailureToleranceCount != null && {
      StackSetFailureToleranceCount: input.StackSetFailureToleranceCount,
    }),
    ...(input.StackSetFailureTolerancePercentage != null && {
      StackSetFailureTolerancePercentage: input.StackSetFailureTolerancePercentage,
    }),
    ...(input.StackSetMaxConcurrencyCount != null && {
      StackSetMaxConcurrencyCount: input.StackSetMaxConcurrencyCount,
    }),
    ...(input.StackSetMaxConcurrencyPercentage != null && {
      StackSetMaxConcurrencyPercentage: input.StackSetMaxConcurrencyPercentage,
    }),
    ...(input.StackSetOperationType != null && { StackSetOperationType: input.StackSetOperationType }),
    ...(input.StackSetRegions != null && { StackSetRegions: se_StackSetRegions(input.StackSetRegions, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateServiceActionInput
 */
const se_UpdateServiceActionInput = (input: UpdateServiceActionInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Definition != null && { Definition: se_ServiceActionDefinitionMap(input.Definition, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1UpdateTagOptionInput
 */
const se_UpdateTagOptionInput = (input: UpdateTagOptionInput, context: __SerdeContext): any => {
  return {
    ...(input.Active != null && { Active: input.Active }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * deserializeAws_json1_1AcceptPortfolioShareOutput
 */
const de_AcceptPortfolioShareOutput = (output: any, context: __SerdeContext): AcceptPortfolioShareOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AccountIds
 */
const de_AccountIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AllowedValues
 */
const de_AllowedValues = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AssociateBudgetWithResourceOutput
 */
const de_AssociateBudgetWithResourceOutput = (
  output: any,
  context: __SerdeContext
): AssociateBudgetWithResourceOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AssociatePrincipalWithPortfolioOutput
 */
const de_AssociatePrincipalWithPortfolioOutput = (
  output: any,
  context: __SerdeContext
): AssociatePrincipalWithPortfolioOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AssociateProductWithPortfolioOutput
 */
const de_AssociateProductWithPortfolioOutput = (
  output: any,
  context: __SerdeContext
): AssociateProductWithPortfolioOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactOutput
 */
const de_AssociateServiceActionWithProvisioningArtifactOutput = (
  output: any,
  context: __SerdeContext
): AssociateServiceActionWithProvisioningArtifactOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AssociateTagOptionWithResourceOutput
 */
const de_AssociateTagOptionWithResourceOutput = (
  output: any,
  context: __SerdeContext
): AssociateTagOptionWithResourceOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactOutput
 */
const de_BatchAssociateServiceActionWithProvisioningArtifactOutput = (
  output: any,
  context: __SerdeContext
): BatchAssociateServiceActionWithProvisioningArtifactOutput => {
  return {
    FailedServiceActionAssociations:
      output.FailedServiceActionAssociations != null
        ? de_FailedServiceActionAssociations(output.FailedServiceActionAssociations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactOutput
 */
const de_BatchDisassociateServiceActionFromProvisioningArtifactOutput = (
  output: any,
  context: __SerdeContext
): BatchDisassociateServiceActionFromProvisioningArtifactOutput => {
  return {
    FailedServiceActionAssociations:
      output.FailedServiceActionAssociations != null
        ? de_FailedServiceActionAssociations(output.FailedServiceActionAssociations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BudgetDetail
 */
const de_BudgetDetail = (output: any, context: __SerdeContext): BudgetDetail => {
  return {
    BudgetName: __expectString(output.BudgetName),
  } as any;
};

/**
 * deserializeAws_json1_1Budgets
 */
const de_Budgets = (output: any, context: __SerdeContext): BudgetDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BudgetDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CloudWatchDashboard
 */
const de_CloudWatchDashboard = (output: any, context: __SerdeContext): CloudWatchDashboard => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1CloudWatchDashboards
 */
const de_CloudWatchDashboards = (output: any, context: __SerdeContext): CloudWatchDashboard[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CloudWatchDashboard(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CodeStarParameters
 */
const de_CodeStarParameters = (output: any, context: __SerdeContext): CodeStarParameters => {
  return {
    ArtifactPath: __expectString(output.ArtifactPath),
    Branch: __expectString(output.Branch),
    ConnectionArn: __expectString(output.ConnectionArn),
    Repository: __expectString(output.Repository),
  } as any;
};

/**
 * deserializeAws_json1_1ConstraintDetail
 */
const de_ConstraintDetail = (output: any, context: __SerdeContext): ConstraintDetail => {
  return {
    ConstraintId: __expectString(output.ConstraintId),
    Description: __expectString(output.Description),
    Owner: __expectString(output.Owner),
    PortfolioId: __expectString(output.PortfolioId),
    ProductId: __expectString(output.ProductId),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1ConstraintDetails
 */
const de_ConstraintDetails = (output: any, context: __SerdeContext): ConstraintDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConstraintDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConstraintSummaries
 */
const de_ConstraintSummaries = (output: any, context: __SerdeContext): ConstraintSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConstraintSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConstraintSummary
 */
const de_ConstraintSummary = (output: any, context: __SerdeContext): ConstraintSummary => {
  return {
    Description: __expectString(output.Description),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1CopyProductOutput
 */
const de_CopyProductOutput = (output: any, context: __SerdeContext): CopyProductOutput => {
  return {
    CopyProductToken: __expectString(output.CopyProductToken),
  } as any;
};

/**
 * deserializeAws_json1_1CreateConstraintOutput
 */
const de_CreateConstraintOutput = (output: any, context: __SerdeContext): CreateConstraintOutput => {
  return {
    ConstraintDetail:
      output.ConstraintDetail != null ? de_ConstraintDetail(output.ConstraintDetail, context) : undefined,
    ConstraintParameters: __expectString(output.ConstraintParameters),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1CreatePortfolioOutput
 */
const de_CreatePortfolioOutput = (output: any, context: __SerdeContext): CreatePortfolioOutput => {
  return {
    PortfolioDetail: output.PortfolioDetail != null ? de_PortfolioDetail(output.PortfolioDetail, context) : undefined,
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreatePortfolioShareOutput
 */
const de_CreatePortfolioShareOutput = (output: any, context: __SerdeContext): CreatePortfolioShareOutput => {
  return {
    PortfolioShareToken: __expectString(output.PortfolioShareToken),
  } as any;
};

/**
 * deserializeAws_json1_1CreateProductOutput
 */
const de_CreateProductOutput = (output: any, context: __SerdeContext): CreateProductOutput => {
  return {
    ProductViewDetail:
      output.ProductViewDetail != null ? de_ProductViewDetail(output.ProductViewDetail, context) : undefined,
    ProvisioningArtifactDetail:
      output.ProvisioningArtifactDetail != null
        ? de_ProvisioningArtifactDetail(output.ProvisioningArtifactDetail, context)
        : undefined,
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateProvisionedProductPlanOutput
 */
const de_CreateProvisionedProductPlanOutput = (
  output: any,
  context: __SerdeContext
): CreateProvisionedProductPlanOutput => {
  return {
    PlanId: __expectString(output.PlanId),
    PlanName: __expectString(output.PlanName),
    ProvisionProductId: __expectString(output.ProvisionProductId),
    ProvisionedProductName: __expectString(output.ProvisionedProductName),
    ProvisioningArtifactId: __expectString(output.ProvisioningArtifactId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateProvisioningArtifactOutput
 */
const de_CreateProvisioningArtifactOutput = (
  output: any,
  context: __SerdeContext
): CreateProvisioningArtifactOutput => {
  return {
    Info: output.Info != null ? de_ProvisioningArtifactInfo(output.Info, context) : undefined,
    ProvisioningArtifactDetail:
      output.ProvisioningArtifactDetail != null
        ? de_ProvisioningArtifactDetail(output.ProvisioningArtifactDetail, context)
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1CreateServiceActionOutput
 */
const de_CreateServiceActionOutput = (output: any, context: __SerdeContext): CreateServiceActionOutput => {
  return {
    ServiceActionDetail:
      output.ServiceActionDetail != null ? de_ServiceActionDetail(output.ServiceActionDetail, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateTagOptionOutput
 */
const de_CreateTagOptionOutput = (output: any, context: __SerdeContext): CreateTagOptionOutput => {
  return {
    TagOptionDetail: output.TagOptionDetail != null ? de_TagOptionDetail(output.TagOptionDetail, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteConstraintOutput
 */
const de_DeleteConstraintOutput = (output: any, context: __SerdeContext): DeleteConstraintOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeletePortfolioOutput
 */
const de_DeletePortfolioOutput = (output: any, context: __SerdeContext): DeletePortfolioOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeletePortfolioShareOutput
 */
const de_DeletePortfolioShareOutput = (output: any, context: __SerdeContext): DeletePortfolioShareOutput => {
  return {
    PortfolioShareToken: __expectString(output.PortfolioShareToken),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteProductOutput
 */
const de_DeleteProductOutput = (output: any, context: __SerdeContext): DeleteProductOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteProvisionedProductPlanOutput
 */
const de_DeleteProvisionedProductPlanOutput = (
  output: any,
  context: __SerdeContext
): DeleteProvisionedProductPlanOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteProvisioningArtifactOutput
 */
const de_DeleteProvisioningArtifactOutput = (
  output: any,
  context: __SerdeContext
): DeleteProvisioningArtifactOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteServiceActionOutput
 */
const de_DeleteServiceActionOutput = (output: any, context: __SerdeContext): DeleteServiceActionOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteTagOptionOutput
 */
const de_DeleteTagOptionOutput = (output: any, context: __SerdeContext): DeleteTagOptionOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeConstraintOutput
 */
const de_DescribeConstraintOutput = (output: any, context: __SerdeContext): DescribeConstraintOutput => {
  return {
    ConstraintDetail:
      output.ConstraintDetail != null ? de_ConstraintDetail(output.ConstraintDetail, context) : undefined,
    ConstraintParameters: __expectString(output.ConstraintParameters),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeCopyProductStatusOutput
 */
const de_DescribeCopyProductStatusOutput = (output: any, context: __SerdeContext): DescribeCopyProductStatusOutput => {
  return {
    CopyProductStatus: __expectString(output.CopyProductStatus),
    StatusDetail: __expectString(output.StatusDetail),
    TargetProductId: __expectString(output.TargetProductId),
  } as any;
};

/**
 * deserializeAws_json1_1DescribePortfolioOutput
 */
const de_DescribePortfolioOutput = (output: any, context: __SerdeContext): DescribePortfolioOutput => {
  return {
    Budgets: output.Budgets != null ? de_Budgets(output.Budgets, context) : undefined,
    PortfolioDetail: output.PortfolioDetail != null ? de_PortfolioDetail(output.PortfolioDetail, context) : undefined,
    TagOptions: output.TagOptions != null ? de_TagOptionDetails(output.TagOptions, context) : undefined,
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribePortfolioSharesOutput
 */
const de_DescribePortfolioSharesOutput = (output: any, context: __SerdeContext): DescribePortfolioSharesOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    PortfolioShareDetails:
      output.PortfolioShareDetails != null
        ? de_PortfolioShareDetails(output.PortfolioShareDetails, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribePortfolioShareStatusOutput
 */
const de_DescribePortfolioShareStatusOutput = (
  output: any,
  context: __SerdeContext
): DescribePortfolioShareStatusOutput => {
  return {
    OrganizationNodeValue: __expectString(output.OrganizationNodeValue),
    PortfolioId: __expectString(output.PortfolioId),
    PortfolioShareToken: __expectString(output.PortfolioShareToken),
    ShareDetails: output.ShareDetails != null ? de_ShareDetails(output.ShareDetails, context) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeProductAsAdminOutput
 */
const de_DescribeProductAsAdminOutput = (output: any, context: __SerdeContext): DescribeProductAsAdminOutput => {
  return {
    Budgets: output.Budgets != null ? de_Budgets(output.Budgets, context) : undefined,
    ProductViewDetail:
      output.ProductViewDetail != null ? de_ProductViewDetail(output.ProductViewDetail, context) : undefined,
    ProvisioningArtifactSummaries:
      output.ProvisioningArtifactSummaries != null
        ? de_ProvisioningArtifactSummaries(output.ProvisioningArtifactSummaries, context)
        : undefined,
    TagOptions: output.TagOptions != null ? de_TagOptionDetails(output.TagOptions, context) : undefined,
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeProductOutput
 */
const de_DescribeProductOutput = (output: any, context: __SerdeContext): DescribeProductOutput => {
  return {
    Budgets: output.Budgets != null ? de_Budgets(output.Budgets, context) : undefined,
    LaunchPaths: output.LaunchPaths != null ? de_LaunchPaths(output.LaunchPaths, context) : undefined,
    ProductViewSummary:
      output.ProductViewSummary != null ? de_ProductViewSummary(output.ProductViewSummary, context) : undefined,
    ProvisioningArtifacts:
      output.ProvisioningArtifacts != null
        ? de_ProvisioningArtifacts(output.ProvisioningArtifacts, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeProductViewOutput
 */
const de_DescribeProductViewOutput = (output: any, context: __SerdeContext): DescribeProductViewOutput => {
  return {
    ProductViewSummary:
      output.ProductViewSummary != null ? de_ProductViewSummary(output.ProductViewSummary, context) : undefined,
    ProvisioningArtifacts:
      output.ProvisioningArtifacts != null
        ? de_ProvisioningArtifacts(output.ProvisioningArtifacts, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeProvisionedProductOutput
 */
const de_DescribeProvisionedProductOutput = (
  output: any,
  context: __SerdeContext
): DescribeProvisionedProductOutput => {
  return {
    CloudWatchDashboards:
      output.CloudWatchDashboards != null ? de_CloudWatchDashboards(output.CloudWatchDashboards, context) : undefined,
    ProvisionedProductDetail:
      output.ProvisionedProductDetail != null
        ? de_ProvisionedProductDetail(output.ProvisionedProductDetail, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeProvisionedProductPlanOutput
 */
const de_DescribeProvisionedProductPlanOutput = (
  output: any,
  context: __SerdeContext
): DescribeProvisionedProductPlanOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    ProvisionedProductPlanDetails:
      output.ProvisionedProductPlanDetails != null
        ? de_ProvisionedProductPlanDetails(output.ProvisionedProductPlanDetails, context)
        : undefined,
    ResourceChanges: output.ResourceChanges != null ? de_ResourceChanges(output.ResourceChanges, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeProvisioningArtifactOutput
 */
const de_DescribeProvisioningArtifactOutput = (
  output: any,
  context: __SerdeContext
): DescribeProvisioningArtifactOutput => {
  return {
    Info: output.Info != null ? de_ProvisioningArtifactInfo(output.Info, context) : undefined,
    ProvisioningArtifactDetail:
      output.ProvisioningArtifactDetail != null
        ? de_ProvisioningArtifactDetail(output.ProvisioningArtifactDetail, context)
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeProvisioningParametersOutput
 */
const de_DescribeProvisioningParametersOutput = (
  output: any,
  context: __SerdeContext
): DescribeProvisioningParametersOutput => {
  return {
    ConstraintSummaries:
      output.ConstraintSummaries != null ? de_ConstraintSummaries(output.ConstraintSummaries, context) : undefined,
    ProvisioningArtifactOutputKeys:
      output.ProvisioningArtifactOutputKeys != null
        ? de_ProvisioningArtifactOutputs(output.ProvisioningArtifactOutputKeys, context)
        : undefined,
    ProvisioningArtifactOutputs:
      output.ProvisioningArtifactOutputs != null
        ? de_ProvisioningArtifactOutputs(output.ProvisioningArtifactOutputs, context)
        : undefined,
    ProvisioningArtifactParameters:
      output.ProvisioningArtifactParameters != null
        ? de_ProvisioningArtifactParameters(output.ProvisioningArtifactParameters, context)
        : undefined,
    ProvisioningArtifactPreferences:
      output.ProvisioningArtifactPreferences != null
        ? de_ProvisioningArtifactPreferences(output.ProvisioningArtifactPreferences, context)
        : undefined,
    TagOptions: output.TagOptions != null ? de_TagOptionSummaries(output.TagOptions, context) : undefined,
    UsageInstructions:
      output.UsageInstructions != null ? de_UsageInstructions(output.UsageInstructions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeRecordOutput
 */
const de_DescribeRecordOutput = (output: any, context: __SerdeContext): DescribeRecordOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    RecordDetail: output.RecordDetail != null ? de_RecordDetail(output.RecordDetail, context) : undefined,
    RecordOutputs: output.RecordOutputs != null ? de_RecordOutputs(output.RecordOutputs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeServiceActionExecutionParametersOutput
 */
const de_DescribeServiceActionExecutionParametersOutput = (
  output: any,
  context: __SerdeContext
): DescribeServiceActionExecutionParametersOutput => {
  return {
    ServiceActionParameters:
      output.ServiceActionParameters != null
        ? de_ExecutionParameters(output.ServiceActionParameters, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeServiceActionOutput
 */
const de_DescribeServiceActionOutput = (output: any, context: __SerdeContext): DescribeServiceActionOutput => {
  return {
    ServiceActionDetail:
      output.ServiceActionDetail != null ? de_ServiceActionDetail(output.ServiceActionDetail, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeTagOptionOutput
 */
const de_DescribeTagOptionOutput = (output: any, context: __SerdeContext): DescribeTagOptionOutput => {
  return {
    TagOptionDetail: output.TagOptionDetail != null ? de_TagOptionDetail(output.TagOptionDetail, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DisableAWSOrganizationsAccessOutput
 */
const de_DisableAWSOrganizationsAccessOutput = (
  output: any,
  context: __SerdeContext
): DisableAWSOrganizationsAccessOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DisassociateBudgetFromResourceOutput
 */
const de_DisassociateBudgetFromResourceOutput = (
  output: any,
  context: __SerdeContext
): DisassociateBudgetFromResourceOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DisassociatePrincipalFromPortfolioOutput
 */
const de_DisassociatePrincipalFromPortfolioOutput = (
  output: any,
  context: __SerdeContext
): DisassociatePrincipalFromPortfolioOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DisassociateProductFromPortfolioOutput
 */
const de_DisassociateProductFromPortfolioOutput = (
  output: any,
  context: __SerdeContext
): DisassociateProductFromPortfolioOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactOutput
 */
const de_DisassociateServiceActionFromProvisioningArtifactOutput = (
  output: any,
  context: __SerdeContext
): DisassociateServiceActionFromProvisioningArtifactOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DisassociateTagOptionFromResourceOutput
 */
const de_DisassociateTagOptionFromResourceOutput = (
  output: any,
  context: __SerdeContext
): DisassociateTagOptionFromResourceOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DuplicateResourceException
 */
const de_DuplicateResourceException = (output: any, context: __SerdeContext): DuplicateResourceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1EnableAWSOrganizationsAccessOutput
 */
const de_EnableAWSOrganizationsAccessOutput = (
  output: any,
  context: __SerdeContext
): EnableAWSOrganizationsAccessOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ExecuteProvisionedProductPlanOutput
 */
const de_ExecuteProvisionedProductPlanOutput = (
  output: any,
  context: __SerdeContext
): ExecuteProvisionedProductPlanOutput => {
  return {
    RecordDetail: output.RecordDetail != null ? de_RecordDetail(output.RecordDetail, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ExecuteProvisionedProductServiceActionOutput
 */
const de_ExecuteProvisionedProductServiceActionOutput = (
  output: any,
  context: __SerdeContext
): ExecuteProvisionedProductServiceActionOutput => {
  return {
    RecordDetail: output.RecordDetail != null ? de_RecordDetail(output.RecordDetail, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ExecutionParameter
 */
const de_ExecutionParameter = (output: any, context: __SerdeContext): ExecutionParameter => {
  return {
    DefaultValues:
      output.DefaultValues != null ? de_ExecutionParameterValueList(output.DefaultValues, context) : undefined,
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1ExecutionParameters
 */
const de_ExecutionParameters = (output: any, context: __SerdeContext): ExecutionParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExecutionParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExecutionParameterValueList
 */
const de_ExecutionParameterValueList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FailedServiceActionAssociation
 */
const de_FailedServiceActionAssociation = (output: any, context: __SerdeContext): FailedServiceActionAssociation => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    ProductId: __expectString(output.ProductId),
    ProvisioningArtifactId: __expectString(output.ProvisioningArtifactId),
    ServiceActionId: __expectString(output.ServiceActionId),
  } as any;
};

/**
 * deserializeAws_json1_1FailedServiceActionAssociations
 */
const de_FailedServiceActionAssociations = (output: any, context: __SerdeContext): FailedServiceActionAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FailedServiceActionAssociation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GetAWSOrganizationsAccessStatusOutput
 */
const de_GetAWSOrganizationsAccessStatusOutput = (
  output: any,
  context: __SerdeContext
): GetAWSOrganizationsAccessStatusOutput => {
  return {
    AccessStatus: __expectString(output.AccessStatus),
  } as any;
};

/**
 * deserializeAws_json1_1GetProvisionedProductOutputsOutput
 */
const de_GetProvisionedProductOutputsOutput = (
  output: any,
  context: __SerdeContext
): GetProvisionedProductOutputsOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    Outputs: output.Outputs != null ? de_RecordOutputs(output.Outputs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ImportAsProvisionedProductOutput
 */
const de_ImportAsProvisionedProductOutput = (
  output: any,
  context: __SerdeContext
): ImportAsProvisionedProductOutput => {
  return {
    RecordDetail: output.RecordDetail != null ? de_RecordDetail(output.RecordDetail, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParametersException
 */
const de_InvalidParametersException = (output: any, context: __SerdeContext): InvalidParametersException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidStateException
 */
const de_InvalidStateException = (output: any, context: __SerdeContext): InvalidStateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1LastSync
 */
const de_LastSync = (output: any, context: __SerdeContext): LastSync => {
  return {
    LastSuccessfulSyncProvisioningArtifactId: __expectString(output.LastSuccessfulSyncProvisioningArtifactId),
    LastSuccessfulSyncTime:
      output.LastSuccessfulSyncTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastSuccessfulSyncTime)))
        : undefined,
    LastSyncStatus: __expectString(output.LastSyncStatus),
    LastSyncStatusMessage: __expectString(output.LastSyncStatusMessage),
    LastSyncTime:
      output.LastSyncTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastSyncTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LaunchPath
 */
const de_LaunchPath = (output: any, context: __SerdeContext): LaunchPath => {
  return {
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1LaunchPaths
 */
const de_LaunchPaths = (output: any, context: __SerdeContext): LaunchPath[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LaunchPath(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LaunchPathSummaries
 */
const de_LaunchPathSummaries = (output: any, context: __SerdeContext): LaunchPathSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LaunchPathSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LaunchPathSummary
 */
const de_LaunchPathSummary = (output: any, context: __SerdeContext): LaunchPathSummary => {
  return {
    ConstraintSummaries:
      output.ConstraintSummaries != null ? de_ConstraintSummaries(output.ConstraintSummaries, context) : undefined,
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ListAcceptedPortfolioSharesOutput
 */
const de_ListAcceptedPortfolioSharesOutput = (
  output: any,
  context: __SerdeContext
): ListAcceptedPortfolioSharesOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    PortfolioDetails:
      output.PortfolioDetails != null ? de_PortfolioDetails(output.PortfolioDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListBudgetsForResourceOutput
 */
const de_ListBudgetsForResourceOutput = (output: any, context: __SerdeContext): ListBudgetsForResourceOutput => {
  return {
    Budgets: output.Budgets != null ? de_Budgets(output.Budgets, context) : undefined,
    NextPageToken: __expectString(output.NextPageToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListConstraintsForPortfolioOutput
 */
const de_ListConstraintsForPortfolioOutput = (
  output: any,
  context: __SerdeContext
): ListConstraintsForPortfolioOutput => {
  return {
    ConstraintDetails:
      output.ConstraintDetails != null ? de_ConstraintDetails(output.ConstraintDetails, context) : undefined,
    NextPageToken: __expectString(output.NextPageToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListLaunchPathsOutput
 */
const de_ListLaunchPathsOutput = (output: any, context: __SerdeContext): ListLaunchPathsOutput => {
  return {
    LaunchPathSummaries:
      output.LaunchPathSummaries != null ? de_LaunchPathSummaries(output.LaunchPathSummaries, context) : undefined,
    NextPageToken: __expectString(output.NextPageToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListOrganizationPortfolioAccessOutput
 */
const de_ListOrganizationPortfolioAccessOutput = (
  output: any,
  context: __SerdeContext
): ListOrganizationPortfolioAccessOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    OrganizationNodes:
      output.OrganizationNodes != null ? de_OrganizationNodes(output.OrganizationNodes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListPortfolioAccessOutput
 */
const de_ListPortfolioAccessOutput = (output: any, context: __SerdeContext): ListPortfolioAccessOutput => {
  return {
    AccountIds: output.AccountIds != null ? de_AccountIds(output.AccountIds, context) : undefined,
    NextPageToken: __expectString(output.NextPageToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListPortfoliosForProductOutput
 */
const de_ListPortfoliosForProductOutput = (output: any, context: __SerdeContext): ListPortfoliosForProductOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    PortfolioDetails:
      output.PortfolioDetails != null ? de_PortfolioDetails(output.PortfolioDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListPortfoliosOutput
 */
const de_ListPortfoliosOutput = (output: any, context: __SerdeContext): ListPortfoliosOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    PortfolioDetails:
      output.PortfolioDetails != null ? de_PortfolioDetails(output.PortfolioDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListPrincipalsForPortfolioOutput
 */
const de_ListPrincipalsForPortfolioOutput = (
  output: any,
  context: __SerdeContext
): ListPrincipalsForPortfolioOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    Principals: output.Principals != null ? de_Principals(output.Principals, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListProvisionedProductPlansOutput
 */
const de_ListProvisionedProductPlansOutput = (
  output: any,
  context: __SerdeContext
): ListProvisionedProductPlansOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    ProvisionedProductPlans:
      output.ProvisionedProductPlans != null
        ? de_ProvisionedProductPlans(output.ProvisionedProductPlans, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListProvisioningArtifactsForServiceActionOutput
 */
const de_ListProvisioningArtifactsForServiceActionOutput = (
  output: any,
  context: __SerdeContext
): ListProvisioningArtifactsForServiceActionOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    ProvisioningArtifactViews:
      output.ProvisioningArtifactViews != null
        ? de_ProvisioningArtifactViews(output.ProvisioningArtifactViews, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListProvisioningArtifactsOutput
 */
const de_ListProvisioningArtifactsOutput = (output: any, context: __SerdeContext): ListProvisioningArtifactsOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    ProvisioningArtifactDetails:
      output.ProvisioningArtifactDetails != null
        ? de_ProvisioningArtifactDetails(output.ProvisioningArtifactDetails, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListRecordHistoryOutput
 */
const de_ListRecordHistoryOutput = (output: any, context: __SerdeContext): ListRecordHistoryOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    RecordDetails: output.RecordDetails != null ? de_RecordDetails(output.RecordDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListResourcesForTagOptionOutput
 */
const de_ListResourcesForTagOptionOutput = (output: any, context: __SerdeContext): ListResourcesForTagOptionOutput => {
  return {
    PageToken: __expectString(output.PageToken),
    ResourceDetails: output.ResourceDetails != null ? de_ResourceDetails(output.ResourceDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListServiceActionsForProvisioningArtifactOutput
 */
const de_ListServiceActionsForProvisioningArtifactOutput = (
  output: any,
  context: __SerdeContext
): ListServiceActionsForProvisioningArtifactOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    ServiceActionSummaries:
      output.ServiceActionSummaries != null
        ? de_ServiceActionSummaries(output.ServiceActionSummaries, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListServiceActionsOutput
 */
const de_ListServiceActionsOutput = (output: any, context: __SerdeContext): ListServiceActionsOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    ServiceActionSummaries:
      output.ServiceActionSummaries != null
        ? de_ServiceActionSummaries(output.ServiceActionSummaries, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListStackInstancesForProvisionedProductOutput
 */
const de_ListStackInstancesForProvisionedProductOutput = (
  output: any,
  context: __SerdeContext
): ListStackInstancesForProvisionedProductOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    StackInstances: output.StackInstances != null ? de_StackInstances(output.StackInstances, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagOptionsOutput
 */
const de_ListTagOptionsOutput = (output: any, context: __SerdeContext): ListTagOptionsOutput => {
  return {
    PageToken: __expectString(output.PageToken),
    TagOptionDetails:
      output.TagOptionDetails != null ? de_TagOptionDetails(output.TagOptionDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Namespaces
 */
const de_Namespaces = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NotificationArns
 */
const de_NotificationArns = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NotifyProvisionProductEngineWorkflowResultOutput
 */
const de_NotifyProvisionProductEngineWorkflowResultOutput = (
  output: any,
  context: __SerdeContext
): NotifyProvisionProductEngineWorkflowResultOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1NotifyTerminateProvisionedProductEngineWorkflowResultOutput
 */
const de_NotifyTerminateProvisionedProductEngineWorkflowResultOutput = (
  output: any,
  context: __SerdeContext
): NotifyTerminateProvisionedProductEngineWorkflowResultOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1NotifyUpdateProvisionedProductEngineWorkflowResultOutput
 */
const de_NotifyUpdateProvisionedProductEngineWorkflowResultOutput = (
  output: any,
  context: __SerdeContext
): NotifyUpdateProvisionedProductEngineWorkflowResultOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1OperationNotSupportedException
 */
const de_OperationNotSupportedException = (output: any, context: __SerdeContext): OperationNotSupportedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1OrganizationNode
 */
const de_OrganizationNode = (output: any, context: __SerdeContext): OrganizationNode => {
  return {
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1OrganizationNodes
 */
const de_OrganizationNodes = (output: any, context: __SerdeContext): OrganizationNode[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OrganizationNode(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ParameterConstraints
 */
const de_ParameterConstraints = (output: any, context: __SerdeContext): ParameterConstraints => {
  return {
    AllowedPattern: __expectString(output.AllowedPattern),
    AllowedValues: output.AllowedValues != null ? de_AllowedValues(output.AllowedValues, context) : undefined,
    ConstraintDescription: __expectString(output.ConstraintDescription),
    MaxLength: __expectString(output.MaxLength),
    MaxValue: __expectString(output.MaxValue),
    MinLength: __expectString(output.MinLength),
    MinValue: __expectString(output.MinValue),
  } as any;
};

/**
 * deserializeAws_json1_1PortfolioDetail
 */
const de_PortfolioDetail = (output: any, context: __SerdeContext): PortfolioDetail => {
  return {
    ARN: __expectString(output.ARN),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Description: __expectString(output.Description),
    DisplayName: __expectString(output.DisplayName),
    Id: __expectString(output.Id),
    ProviderName: __expectString(output.ProviderName),
  } as any;
};

/**
 * deserializeAws_json1_1PortfolioDetails
 */
const de_PortfolioDetails = (output: any, context: __SerdeContext): PortfolioDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PortfolioDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PortfolioShareDetail
 */
const de_PortfolioShareDetail = (output: any, context: __SerdeContext): PortfolioShareDetail => {
  return {
    Accepted: __expectBoolean(output.Accepted),
    PrincipalId: __expectString(output.PrincipalId),
    SharePrincipals: __expectBoolean(output.SharePrincipals),
    ShareTagOptions: __expectBoolean(output.ShareTagOptions),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1PortfolioShareDetails
 */
const de_PortfolioShareDetails = (output: any, context: __SerdeContext): PortfolioShareDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PortfolioShareDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Principal
 */
const de_Principal = (output: any, context: __SerdeContext): Principal => {
  return {
    PrincipalARN: __expectString(output.PrincipalARN),
    PrincipalType: __expectString(output.PrincipalType),
  } as any;
};

/**
 * deserializeAws_json1_1Principals
 */
const de_Principals = (output: any, context: __SerdeContext): Principal[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Principal(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProductViewAggregations
 */
const de_ProductViewAggregations = (
  output: any,
  context: __SerdeContext
): Record<string, ProductViewAggregationValue[]> => {
  return Object.entries(output).reduce(
    (acc: Record<string, ProductViewAggregationValue[]>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_ProductViewAggregationValues(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_json1_1ProductViewAggregationValue
 */
const de_ProductViewAggregationValue = (output: any, context: __SerdeContext): ProductViewAggregationValue => {
  return {
    ApproximateCount: __expectInt32(output.ApproximateCount),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1ProductViewAggregationValues
 */
const de_ProductViewAggregationValues = (output: any, context: __SerdeContext): ProductViewAggregationValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProductViewAggregationValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProductViewDetail
 */
const de_ProductViewDetail = (output: any, context: __SerdeContext): ProductViewDetail => {
  return {
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    ProductARN: __expectString(output.ProductARN),
    ProductViewSummary:
      output.ProductViewSummary != null ? de_ProductViewSummary(output.ProductViewSummary, context) : undefined,
    SourceConnection:
      output.SourceConnection != null ? de_SourceConnectionDetail(output.SourceConnection, context) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1ProductViewDetails
 */
const de_ProductViewDetails = (output: any, context: __SerdeContext): ProductViewDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProductViewDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProductViewSummaries
 */
const de_ProductViewSummaries = (output: any, context: __SerdeContext): ProductViewSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProductViewSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProductViewSummary
 */
const de_ProductViewSummary = (output: any, context: __SerdeContext): ProductViewSummary => {
  return {
    Distributor: __expectString(output.Distributor),
    HasDefaultPath: __expectBoolean(output.HasDefaultPath),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Owner: __expectString(output.Owner),
    ProductId: __expectString(output.ProductId),
    ShortDescription: __expectString(output.ShortDescription),
    SupportDescription: __expectString(output.SupportDescription),
    SupportEmail: __expectString(output.SupportEmail),
    SupportUrl: __expectString(output.SupportUrl),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1ProvisionedProductAttribute
 */
const de_ProvisionedProductAttribute = (output: any, context: __SerdeContext): ProvisionedProductAttribute => {
  return {
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Id: __expectString(output.Id),
    IdempotencyToken: __expectString(output.IdempotencyToken),
    LastProvisioningRecordId: __expectString(output.LastProvisioningRecordId),
    LastRecordId: __expectString(output.LastRecordId),
    LastSuccessfulProvisioningRecordId: __expectString(output.LastSuccessfulProvisioningRecordId),
    Name: __expectString(output.Name),
    PhysicalId: __expectString(output.PhysicalId),
    ProductId: __expectString(output.ProductId),
    ProductName: __expectString(output.ProductName),
    ProvisioningArtifactId: __expectString(output.ProvisioningArtifactId),
    ProvisioningArtifactName: __expectString(output.ProvisioningArtifactName),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
    Type: __expectString(output.Type),
    UserArn: __expectString(output.UserArn),
    UserArnSession: __expectString(output.UserArnSession),
  } as any;
};

/**
 * deserializeAws_json1_1ProvisionedProductAttributes
 */
const de_ProvisionedProductAttributes = (output: any, context: __SerdeContext): ProvisionedProductAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProvisionedProductAttribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProvisionedProductDetail
 */
const de_ProvisionedProductDetail = (output: any, context: __SerdeContext): ProvisionedProductDetail => {
  return {
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Id: __expectString(output.Id),
    IdempotencyToken: __expectString(output.IdempotencyToken),
    LastProvisioningRecordId: __expectString(output.LastProvisioningRecordId),
    LastRecordId: __expectString(output.LastRecordId),
    LastSuccessfulProvisioningRecordId: __expectString(output.LastSuccessfulProvisioningRecordId),
    LaunchRoleArn: __expectString(output.LaunchRoleArn),
    Name: __expectString(output.Name),
    ProductId: __expectString(output.ProductId),
    ProvisioningArtifactId: __expectString(output.ProvisioningArtifactId),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1ProvisionedProductDetails
 */
const de_ProvisionedProductDetails = (output: any, context: __SerdeContext): ProvisionedProductDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProvisionedProductDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProvisionedProductPlanDetails
 */
const de_ProvisionedProductPlanDetails = (output: any, context: __SerdeContext): ProvisionedProductPlanDetails => {
  return {
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    NotificationArns:
      output.NotificationArns != null ? de_NotificationArns(output.NotificationArns, context) : undefined,
    PathId: __expectString(output.PathId),
    PlanId: __expectString(output.PlanId),
    PlanName: __expectString(output.PlanName),
    PlanType: __expectString(output.PlanType),
    ProductId: __expectString(output.ProductId),
    ProvisionProductId: __expectString(output.ProvisionProductId),
    ProvisionProductName: __expectString(output.ProvisionProductName),
    ProvisioningArtifactId: __expectString(output.ProvisioningArtifactId),
    ProvisioningParameters:
      output.ProvisioningParameters != null
        ? de_UpdateProvisioningParameters(output.ProvisioningParameters, context)
        : undefined,
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
    UpdatedTime:
      output.UpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ProvisionedProductPlans
 */
const de_ProvisionedProductPlans = (output: any, context: __SerdeContext): ProvisionedProductPlanSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProvisionedProductPlanSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProvisionedProductPlanSummary
 */
const de_ProvisionedProductPlanSummary = (output: any, context: __SerdeContext): ProvisionedProductPlanSummary => {
  return {
    PlanId: __expectString(output.PlanId),
    PlanName: __expectString(output.PlanName),
    PlanType: __expectString(output.PlanType),
    ProvisionProductId: __expectString(output.ProvisionProductId),
    ProvisionProductName: __expectString(output.ProvisionProductName),
    ProvisioningArtifactId: __expectString(output.ProvisioningArtifactId),
  } as any;
};

/**
 * deserializeAws_json1_1ProvisionedProductProperties
 */
const de_ProvisionedProductProperties = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [PropertyKey | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1ProvisioningArtifact
 */
const de_ProvisioningArtifact = (output: any, context: __SerdeContext): ProvisioningArtifact => {
  return {
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Description: __expectString(output.Description),
    Guidance: __expectString(output.Guidance),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1ProvisioningArtifactDetail
 */
const de_ProvisioningArtifactDetail = (output: any, context: __SerdeContext): ProvisioningArtifactDetail => {
  return {
    Active: __expectBoolean(output.Active),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Description: __expectString(output.Description),
    Guidance: __expectString(output.Guidance),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    SourceRevision: __expectString(output.SourceRevision),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1ProvisioningArtifactDetails
 */
const de_ProvisioningArtifactDetails = (output: any, context: __SerdeContext): ProvisioningArtifactDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProvisioningArtifactDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProvisioningArtifactInfo
 */
const de_ProvisioningArtifactInfo = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1ProvisioningArtifactOutput
 */
const de_ProvisioningArtifactOutput = (output: any, context: __SerdeContext): ProvisioningArtifactOutput => {
  return {
    Description: __expectString(output.Description),
    Key: __expectString(output.Key),
  } as any;
};

/**
 * deserializeAws_json1_1ProvisioningArtifactOutputs
 */
const de_ProvisioningArtifactOutputs = (output: any, context: __SerdeContext): ProvisioningArtifactOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProvisioningArtifactOutput(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProvisioningArtifactParameter
 */
const de_ProvisioningArtifactParameter = (output: any, context: __SerdeContext): ProvisioningArtifactParameter => {
  return {
    DefaultValue: __expectString(output.DefaultValue),
    Description: __expectString(output.Description),
    IsNoEcho: __expectBoolean(output.IsNoEcho),
    ParameterConstraints:
      output.ParameterConstraints != null ? de_ParameterConstraints(output.ParameterConstraints, context) : undefined,
    ParameterKey: __expectString(output.ParameterKey),
    ParameterType: __expectString(output.ParameterType),
  } as any;
};

/**
 * deserializeAws_json1_1ProvisioningArtifactParameters
 */
const de_ProvisioningArtifactParameters = (output: any, context: __SerdeContext): ProvisioningArtifactParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProvisioningArtifactParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProvisioningArtifactPreferences
 */
const de_ProvisioningArtifactPreferences = (output: any, context: __SerdeContext): ProvisioningArtifactPreferences => {
  return {
    StackSetAccounts:
      output.StackSetAccounts != null ? de_StackSetAccounts(output.StackSetAccounts, context) : undefined,
    StackSetRegions: output.StackSetRegions != null ? de_StackSetRegions(output.StackSetRegions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ProvisioningArtifacts
 */
const de_ProvisioningArtifacts = (output: any, context: __SerdeContext): ProvisioningArtifact[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProvisioningArtifact(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProvisioningArtifactSummaries
 */
const de_ProvisioningArtifactSummaries = (output: any, context: __SerdeContext): ProvisioningArtifactSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProvisioningArtifactSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProvisioningArtifactSummary
 */
const de_ProvisioningArtifactSummary = (output: any, context: __SerdeContext): ProvisioningArtifactSummary => {
  return {
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    ProvisioningArtifactMetadata:
      output.ProvisioningArtifactMetadata != null
        ? de_ProvisioningArtifactInfo(output.ProvisioningArtifactMetadata, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ProvisioningArtifactView
 */
const de_ProvisioningArtifactView = (output: any, context: __SerdeContext): ProvisioningArtifactView => {
  return {
    ProductViewSummary:
      output.ProductViewSummary != null ? de_ProductViewSummary(output.ProductViewSummary, context) : undefined,
    ProvisioningArtifact:
      output.ProvisioningArtifact != null ? de_ProvisioningArtifact(output.ProvisioningArtifact, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ProvisioningArtifactViews
 */
const de_ProvisioningArtifactViews = (output: any, context: __SerdeContext): ProvisioningArtifactView[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProvisioningArtifactView(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProvisionProductOutput
 */
const de_ProvisionProductOutput = (output: any, context: __SerdeContext): ProvisionProductOutput => {
  return {
    RecordDetail: output.RecordDetail != null ? de_RecordDetail(output.RecordDetail, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RecordDetail
 */
const de_RecordDetail = (output: any, context: __SerdeContext): RecordDetail => {
  return {
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    LaunchRoleArn: __expectString(output.LaunchRoleArn),
    PathId: __expectString(output.PathId),
    ProductId: __expectString(output.ProductId),
    ProvisionedProductId: __expectString(output.ProvisionedProductId),
    ProvisionedProductName: __expectString(output.ProvisionedProductName),
    ProvisionedProductType: __expectString(output.ProvisionedProductType),
    ProvisioningArtifactId: __expectString(output.ProvisioningArtifactId),
    RecordErrors: output.RecordErrors != null ? de_RecordErrors(output.RecordErrors, context) : undefined,
    RecordId: __expectString(output.RecordId),
    RecordTags: output.RecordTags != null ? de_RecordTags(output.RecordTags, context) : undefined,
    RecordType: __expectString(output.RecordType),
    Status: __expectString(output.Status),
    UpdatedTime:
      output.UpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RecordDetails
 */
const de_RecordDetails = (output: any, context: __SerdeContext): RecordDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecordDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RecordError
 */
const de_RecordError = (output: any, context: __SerdeContext): RecordError => {
  return {
    Code: __expectString(output.Code),
    Description: __expectString(output.Description),
  } as any;
};

/**
 * deserializeAws_json1_1RecordErrors
 */
const de_RecordErrors = (output: any, context: __SerdeContext): RecordError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecordError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RecordOutput
 */
const de_RecordOutput = (output: any, context: __SerdeContext): RecordOutput => {
  return {
    Description: __expectString(output.Description),
    OutputKey: __expectString(output.OutputKey),
    OutputValue: __expectString(output.OutputValue),
  } as any;
};

/**
 * deserializeAws_json1_1RecordOutputs
 */
const de_RecordOutputs = (output: any, context: __SerdeContext): RecordOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecordOutput(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RecordTag
 */
const de_RecordTag = (output: any, context: __SerdeContext): RecordTag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1RecordTags
 */
const de_RecordTags = (output: any, context: __SerdeContext): RecordTag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecordTag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RejectPortfolioShareOutput
 */
const de_RejectPortfolioShareOutput = (output: any, context: __SerdeContext): RejectPortfolioShareOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ResourceChange
 */
const de_ResourceChange = (output: any, context: __SerdeContext): ResourceChange => {
  return {
    Action: __expectString(output.Action),
    Details: output.Details != null ? de_ResourceChangeDetails(output.Details, context) : undefined,
    LogicalResourceId: __expectString(output.LogicalResourceId),
    PhysicalResourceId: __expectString(output.PhysicalResourceId),
    Replacement: __expectString(output.Replacement),
    ResourceType: __expectString(output.ResourceType),
    Scope: output.Scope != null ? de_Scope(output.Scope, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResourceChangeDetail
 */
const de_ResourceChangeDetail = (output: any, context: __SerdeContext): ResourceChangeDetail => {
  return {
    CausingEntity: __expectString(output.CausingEntity),
    Evaluation: __expectString(output.Evaluation),
    Target: output.Target != null ? de_ResourceTargetDefinition(output.Target, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResourceChangeDetails
 */
const de_ResourceChangeDetails = (output: any, context: __SerdeContext): ResourceChangeDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceChangeDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceChanges
 */
const de_ResourceChanges = (output: any, context: __SerdeContext): ResourceChange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceChange(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceDetail
 */
const de_ResourceDetail = (output: any, context: __SerdeContext): ResourceDetail => {
  return {
    ARN: __expectString(output.ARN),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceDetails
 */
const de_ResourceDetails = (output: any, context: __SerdeContext): ResourceDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceInUseException
 */
const de_ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceTargetDefinition
 */
const de_ResourceTargetDefinition = (output: any, context: __SerdeContext): ResourceTargetDefinition => {
  return {
    Attribute: __expectString(output.Attribute),
    Name: __expectString(output.Name),
    RequiresRecreation: __expectString(output.RequiresRecreation),
  } as any;
};

/**
 * deserializeAws_json1_1ScanProvisionedProductsOutput
 */
const de_ScanProvisionedProductsOutput = (output: any, context: __SerdeContext): ScanProvisionedProductsOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    ProvisionedProducts:
      output.ProvisionedProducts != null
        ? de_ProvisionedProductDetails(output.ProvisionedProducts, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Scope
 */
const de_Scope = (output: any, context: __SerdeContext): (ResourceAttribute | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SearchProductsAsAdminOutput
 */
const de_SearchProductsAsAdminOutput = (output: any, context: __SerdeContext): SearchProductsAsAdminOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    ProductViewDetails:
      output.ProductViewDetails != null ? de_ProductViewDetails(output.ProductViewDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SearchProductsOutput
 */
const de_SearchProductsOutput = (output: any, context: __SerdeContext): SearchProductsOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    ProductViewAggregations:
      output.ProductViewAggregations != null
        ? de_ProductViewAggregations(output.ProductViewAggregations, context)
        : undefined,
    ProductViewSummaries:
      output.ProductViewSummaries != null ? de_ProductViewSummaries(output.ProductViewSummaries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SearchProvisionedProductsOutput
 */
const de_SearchProvisionedProductsOutput = (output: any, context: __SerdeContext): SearchProvisionedProductsOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    ProvisionedProducts:
      output.ProvisionedProducts != null
        ? de_ProvisionedProductAttributes(output.ProvisionedProducts, context)
        : undefined,
    TotalResultsCount: __expectInt32(output.TotalResultsCount),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceActionDefinitionMap
 */
const de_ServiceActionDefinitionMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce(
    (acc: Record<string, string>, [key, value]: [ServiceActionDefinitionKey | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = __expectString(value) as any;
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_json1_1ServiceActionDetail
 */
const de_ServiceActionDetail = (output: any, context: __SerdeContext): ServiceActionDetail => {
  return {
    Definition: output.Definition != null ? de_ServiceActionDefinitionMap(output.Definition, context) : undefined,
    ServiceActionSummary:
      output.ServiceActionSummary != null ? de_ServiceActionSummary(output.ServiceActionSummary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ServiceActionSummaries
 */
const de_ServiceActionSummaries = (output: any, context: __SerdeContext): ServiceActionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServiceActionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServiceActionSummary
 */
const de_ServiceActionSummary = (output: any, context: __SerdeContext): ServiceActionSummary => {
  return {
    DefinitionType: __expectString(output.DefinitionType),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1ShareDetails
 */
const de_ShareDetails = (output: any, context: __SerdeContext): ShareDetails => {
  return {
    ShareErrors: output.ShareErrors != null ? de_ShareErrors(output.ShareErrors, context) : undefined,
    SuccessfulShares:
      output.SuccessfulShares != null ? de_SuccessfulShares(output.SuccessfulShares, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ShareError
 */
const de_ShareError = (output: any, context: __SerdeContext): ShareError => {
  return {
    Accounts: output.Accounts != null ? de_Namespaces(output.Accounts, context) : undefined,
    Error: __expectString(output.Error),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ShareErrors
 */
const de_ShareErrors = (output: any, context: __SerdeContext): ShareError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ShareError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SourceConnectionDetail
 */
const de_SourceConnectionDetail = (output: any, context: __SerdeContext): SourceConnectionDetail => {
  return {
    ConnectionParameters:
      output.ConnectionParameters != null
        ? de_SourceConnectionParameters(output.ConnectionParameters, context)
        : undefined,
    LastSync: output.LastSync != null ? de_LastSync(output.LastSync, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1SourceConnectionParameters
 */
const de_SourceConnectionParameters = (output: any, context: __SerdeContext): SourceConnectionParameters => {
  return {
    CodeStar: output.CodeStar != null ? de_CodeStarParameters(output.CodeStar, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StackInstance
 */
const de_StackInstance = (output: any, context: __SerdeContext): StackInstance => {
  return {
    Account: __expectString(output.Account),
    Region: __expectString(output.Region),
    StackInstanceStatus: __expectString(output.StackInstanceStatus),
  } as any;
};

/**
 * deserializeAws_json1_1StackInstances
 */
const de_StackInstances = (output: any, context: __SerdeContext): StackInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StackInstance(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StackSetAccounts
 */
const de_StackSetAccounts = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StackSetRegions
 */
const de_StackSetRegions = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SuccessfulShares
 */
const de_SuccessfulShares = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagOptionDetail
 */
const de_TagOptionDetail = (output: any, context: __SerdeContext): TagOptionDetail => {
  return {
    Active: __expectBoolean(output.Active),
    Id: __expectString(output.Id),
    Key: __expectString(output.Key),
    Owner: __expectString(output.Owner),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagOptionDetails
 */
const de_TagOptionDetails = (output: any, context: __SerdeContext): TagOptionDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TagOptionDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TagOptionNotMigratedException
 */
const de_TagOptionNotMigratedException = (output: any, context: __SerdeContext): TagOptionNotMigratedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1TagOptionSummaries
 */
const de_TagOptionSummaries = (output: any, context: __SerdeContext): TagOptionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TagOptionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TagOptionSummary
 */
const de_TagOptionSummary = (output: any, context: __SerdeContext): TagOptionSummary => {
  return {
    Key: __expectString(output.Key),
    Values: output.Values != null ? de_TagOptionValues(output.Values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TagOptionValues
 */
const de_TagOptionValues = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TerminateProvisionedProductOutput
 */
const de_TerminateProvisionedProductOutput = (
  output: any,
  context: __SerdeContext
): TerminateProvisionedProductOutput => {
  return {
    RecordDetail: output.RecordDetail != null ? de_RecordDetail(output.RecordDetail, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateConstraintOutput
 */
const de_UpdateConstraintOutput = (output: any, context: __SerdeContext): UpdateConstraintOutput => {
  return {
    ConstraintDetail:
      output.ConstraintDetail != null ? de_ConstraintDetail(output.ConstraintDetail, context) : undefined,
    ConstraintParameters: __expectString(output.ConstraintParameters),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1UpdatePortfolioOutput
 */
const de_UpdatePortfolioOutput = (output: any, context: __SerdeContext): UpdatePortfolioOutput => {
  return {
    PortfolioDetail: output.PortfolioDetail != null ? de_PortfolioDetail(output.PortfolioDetail, context) : undefined,
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdatePortfolioShareOutput
 */
const de_UpdatePortfolioShareOutput = (output: any, context: __SerdeContext): UpdatePortfolioShareOutput => {
  return {
    PortfolioShareToken: __expectString(output.PortfolioShareToken),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateProductOutput
 */
const de_UpdateProductOutput = (output: any, context: __SerdeContext): UpdateProductOutput => {
  return {
    ProductViewDetail:
      output.ProductViewDetail != null ? de_ProductViewDetail(output.ProductViewDetail, context) : undefined,
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateProvisionedProductOutput
 */
const de_UpdateProvisionedProductOutput = (output: any, context: __SerdeContext): UpdateProvisionedProductOutput => {
  return {
    RecordDetail: output.RecordDetail != null ? de_RecordDetail(output.RecordDetail, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateProvisionedProductPropertiesOutput
 */
const de_UpdateProvisionedProductPropertiesOutput = (
  output: any,
  context: __SerdeContext
): UpdateProvisionedProductPropertiesOutput => {
  return {
    ProvisionedProductId: __expectString(output.ProvisionedProductId),
    ProvisionedProductProperties:
      output.ProvisionedProductProperties != null
        ? de_ProvisionedProductProperties(output.ProvisionedProductProperties, context)
        : undefined,
    RecordId: __expectString(output.RecordId),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateProvisioningArtifactOutput
 */
const de_UpdateProvisioningArtifactOutput = (
  output: any,
  context: __SerdeContext
): UpdateProvisioningArtifactOutput => {
  return {
    Info: output.Info != null ? de_ProvisioningArtifactInfo(output.Info, context) : undefined,
    ProvisioningArtifactDetail:
      output.ProvisioningArtifactDetail != null
        ? de_ProvisioningArtifactDetail(output.ProvisioningArtifactDetail, context)
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateProvisioningParameter
 */
const de_UpdateProvisioningParameter = (output: any, context: __SerdeContext): UpdateProvisioningParameter => {
  return {
    Key: __expectString(output.Key),
    UsePreviousValue: __expectBoolean(output.UsePreviousValue),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateProvisioningParameters
 */
const de_UpdateProvisioningParameters = (output: any, context: __SerdeContext): UpdateProvisioningParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UpdateProvisioningParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UpdateServiceActionOutput
 */
const de_UpdateServiceActionOutput = (output: any, context: __SerdeContext): UpdateServiceActionOutput => {
  return {
    ServiceActionDetail:
      output.ServiceActionDetail != null ? de_ServiceActionDetail(output.ServiceActionDetail, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateTagOptionOutput
 */
const de_UpdateTagOptionOutput = (output: any, context: __SerdeContext): UpdateTagOptionOutput => {
  return {
    TagOptionDetail: output.TagOptionDetail != null ? de_TagOptionDetail(output.TagOptionDetail, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UsageInstruction
 */
const de_UsageInstruction = (output: any, context: __SerdeContext): UsageInstruction => {
  return {
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1UsageInstructions
 */
const de_UsageInstructions = (output: any, context: __SerdeContext): UsageInstruction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UsageInstruction(entry, context);
    });
  return retVal;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AWS242ServiceCatalogService.${operation}`,
  };
}

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
