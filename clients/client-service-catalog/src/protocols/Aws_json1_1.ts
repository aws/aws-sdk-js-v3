// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
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
  AccessLevelFilter,
  AssociateBudgetWithResourceInput,
  AssociatePrincipalWithPortfolioInput,
  AssociateProductWithPortfolioInput,
  AssociateServiceActionWithProvisioningArtifactInput,
  AssociateTagOptionWithResourceInput,
  BatchAssociateServiceActionWithProvisioningArtifactInput,
  BatchDisassociateServiceActionFromProvisioningArtifactInput,
  CodeStarParameters,
  CopyOption,
  CopyProductInput,
  CreateConstraintInput,
  CreatePortfolioInput,
  CreatePortfolioOutput,
  CreatePortfolioShareInput,
  CreateProductInput,
  CreateProductOutput,
  CreateProvisionedProductPlanInput,
  CreateProvisioningArtifactInput,
  CreateProvisioningArtifactOutput,
  CreateServiceActionInput,
  CreateTagOptionInput,
  DeleteConstraintInput,
  DeletePortfolioInput,
  DeletePortfolioShareInput,
  DeleteProductInput,
  DeleteProvisionedProductPlanInput,
  DeleteProvisioningArtifactInput,
  DeleteServiceActionInput,
  DeleteTagOptionInput,
  DescribeConstraintInput,
  DescribeCopyProductStatusInput,
  DescribePortfolioInput,
  DescribePortfolioOutput,
  DescribePortfolioSharesInput,
  DescribePortfolioShareStatusInput,
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
  DescribeRecordInput,
  DescribeRecordOutput,
  DescribeServiceActionExecutionParametersInput,
  DescribeServiceActionInput,
  DescribeTagOptionInput,
  DisableAWSOrganizationsAccessInput,
  DisassociateBudgetFromResourceInput,
  DisassociatePrincipalFromPortfolioInput,
  DisassociateProductFromPortfolioInput,
  DisassociateServiceActionFromProvisioningArtifactInput,
  DisassociateTagOptionFromResourceInput,
  DuplicateResourceException,
  EnableAWSOrganizationsAccessInput,
  EngineWorkflowResourceIdentifier,
  ExecuteProvisionedProductPlanInput,
  ExecuteProvisionedProductPlanOutput,
  ExecuteProvisionedProductServiceActionInput,
  ExecuteProvisionedProductServiceActionOutput,
  GetAWSOrganizationsAccessStatusInput,
  GetProvisionedProductOutputsInput,
  ImportAsProvisionedProductInput,
  ImportAsProvisionedProductOutput,
  InvalidParametersException,
  InvalidStateException,
  LastSync,
  LimitExceededException,
  ListAcceptedPortfolioSharesInput,
  ListAcceptedPortfolioSharesOutput,
  ListBudgetsForResourceInput,
  ListConstraintsForPortfolioInput,
  ListLaunchPathsInput,
  ListOrganizationPortfolioAccessInput,
  ListPortfolioAccessInput,
  ListPortfoliosForProductInput,
  ListPortfoliosForProductOutput,
  ListPortfoliosInput,
  ListPortfoliosOutput,
  ListPrincipalsForPortfolioInput,
  ListProvisionedProductPlansInput,
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
  ListServiceActionsInput,
  ListStackInstancesForProvisionedProductInput,
  ListTagOptionsFilters,
  ListTagOptionsInput,
  NotifyProvisionProductEngineWorkflowResultInput,
  NotifyTerminateProvisionedProductEngineWorkflowResultInput,
  NotifyUpdateProvisionedProductEngineWorkflowResultInput,
  OperationNotSupportedException,
  OrganizationNode,
  PortfolioDetail,
  ProductViewDetail,
  ProductViewFilterBy,
  PropertyKey,
  ProvisionedProductAttribute,
  ProvisionedProductDetail,
  ProvisionedProductPlanDetails,
  ProvisionedProductViewFilterBy,
  ProvisioningArtifact,
  ProvisioningArtifactDetail,
  ProvisioningArtifactProperties,
  ProvisioningArtifactPropertyName,
  ProvisioningArtifactSummary,
  ProvisioningArtifactView,
  ProvisioningParameter,
  ProvisioningPreferences,
  ProvisionProductInput,
  ProvisionProductOutput,
  RecordDetail,
  RecordOutput,
  RejectPortfolioShareInput,
  ResourceDetail,
  ResourceInUseException,
  ResourceNotFoundException,
  ScanProvisionedProductsInput,
  ScanProvisionedProductsOutput,
  SearchProductsAsAdminInput,
  SearchProductsAsAdminOutput,
  SearchProductsInput,
  SearchProvisionedProductsInput,
  SearchProvisionedProductsOutput,
  ServiceActionAssociation,
  ServiceActionDefinitionKey,
  SourceConnection,
  SourceConnectionDetail,
  SourceConnectionParameters,
  Tag,
  TagOptionNotMigratedException,
  TerminateProvisionedProductInput,
  TerminateProvisionedProductOutput,
  UniqueTagResourceIdentifier,
  UpdateConstraintInput,
  UpdatePortfolioInput,
  UpdatePortfolioOutput,
  UpdatePortfolioShareInput,
  UpdateProductInput,
  UpdateProductOutput,
  UpdateProvisionedProductInput,
  UpdateProvisionedProductOutput,
  UpdateProvisionedProductPropertiesInput,
  UpdateProvisioningArtifactInput,
  UpdateProvisioningArtifactOutput,
  UpdateProvisioningParameter,
  UpdateProvisioningPreferences,
  UpdateServiceActionInput,
  UpdateTagOptionInput,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  contents = _json(data);
  const response: AcceptPortfolioShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AssociateBudgetWithResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AssociatePrincipalWithPortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AssociateProductWithPortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AssociateServiceActionWithProvisioningArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AssociateTagOptionWithResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: BatchAssociateServiceActionWithProvisioningArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CopyProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateConstraintCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreatePortfolioShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateProvisionedProductPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateServiceActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateTagOptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteConstraintCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeletePortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeletePortfolioShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteProvisionedProductPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteProvisioningArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteServiceActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteTagOptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeConstraintCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeCopyProductStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribePortfolioSharesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribePortfolioShareStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeProvisioningParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeServiceActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeServiceActionExecutionParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeTagOptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisableAWSOrganizationsAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisassociateBudgetFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisassociatePrincipalFromPortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisassociateProductFromPortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisassociateServiceActionFromProvisioningArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisassociateTagOptionFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: EnableAWSOrganizationsAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetAWSOrganizationsAccessStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetProvisionedProductOutputsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListBudgetsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListConstraintsForPortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListLaunchPathsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListOrganizationPortfolioAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListPortfolioAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListPrincipalsForPortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListProvisionedProductPlansCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListServiceActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListServiceActionsForProvisioningArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListStackInstancesForProvisionedProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: NotifyProvisionProductEngineWorkflowResultCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: NotifyTerminateProvisionedProductEngineWorkflowResultCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: NotifyUpdateProvisionedProductEngineWorkflowResultCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RejectPortfolioShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: SearchProductsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateConstraintCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdatePortfolioShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateProvisionedProductPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateServiceActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateTagOptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new TagOptionNotMigratedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AcceptPortfolioShareInput omitted.

// se_AccessLevelFilter omitted.

// se_AddTags omitted.

// se_AssociateBudgetWithResourceInput omitted.

// se_AssociatePrincipalWithPortfolioInput omitted.

// se_AssociateProductWithPortfolioInput omitted.

// se_AssociateServiceActionWithProvisioningArtifactInput omitted.

// se_AssociateTagOptionWithResourceInput omitted.

// se_BatchAssociateServiceActionWithProvisioningArtifactInput omitted.

// se_BatchDisassociateServiceActionFromProvisioningArtifactInput omitted.

// se_CodeStarParameters omitted.

// se_CopyOptions omitted.

/**
 * serializeAws_json1_1CopyProductInput
 */
const se_CopyProductInput = (input: CopyProductInput, context: __SerdeContext): any => {
  return take(input, {
    AcceptLanguage: [],
    CopyOptions: _json,
    IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
    SourceProductArn: [],
    SourceProvisioningArtifactIdentifiers: _json,
    TargetProductId: [],
    TargetProductName: [],
  });
};

/**
 * serializeAws_json1_1CreateConstraintInput
 */
const se_CreateConstraintInput = (input: CreateConstraintInput, context: __SerdeContext): any => {
  return take(input, {
    AcceptLanguage: [],
    Description: [],
    IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Parameters: [],
    PortfolioId: [],
    ProductId: [],
    Type: [],
  });
};

/**
 * serializeAws_json1_1CreatePortfolioInput
 */
const se_CreatePortfolioInput = (input: CreatePortfolioInput, context: __SerdeContext): any => {
  return take(input, {
    AcceptLanguage: [],
    Description: [],
    DisplayName: [],
    IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
    ProviderName: [],
    Tags: _json,
  });
};

// se_CreatePortfolioShareInput omitted.

/**
 * serializeAws_json1_1CreateProductInput
 */
const se_CreateProductInput = (input: CreateProductInput, context: __SerdeContext): any => {
  return take(input, {
    AcceptLanguage: [],
    Description: [],
    Distributor: [],
    IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Name: [],
    Owner: [],
    ProductType: [],
    ProvisioningArtifactParameters: _json,
    SourceConnection: _json,
    SupportDescription: [],
    SupportEmail: [],
    SupportUrl: [],
    Tags: _json,
  });
};

/**
 * serializeAws_json1_1CreateProvisionedProductPlanInput
 */
const se_CreateProvisionedProductPlanInput = (
  input: CreateProvisionedProductPlanInput,
  context: __SerdeContext
): any => {
  return take(input, {
    AcceptLanguage: [],
    IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
    NotificationArns: _json,
    PathId: [],
    PlanName: [],
    PlanType: [],
    ProductId: [],
    ProvisionedProductName: [],
    ProvisioningArtifactId: [],
    ProvisioningParameters: _json,
    Tags: _json,
  });
};

/**
 * serializeAws_json1_1CreateProvisioningArtifactInput
 */
const se_CreateProvisioningArtifactInput = (input: CreateProvisioningArtifactInput, context: __SerdeContext): any => {
  return take(input, {
    AcceptLanguage: [],
    IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Parameters: _json,
    ProductId: [],
  });
};

/**
 * serializeAws_json1_1CreateServiceActionInput
 */
const se_CreateServiceActionInput = (input: CreateServiceActionInput, context: __SerdeContext): any => {
  return take(input, {
    AcceptLanguage: [],
    Definition: _json,
    DefinitionType: [],
    Description: [],
    IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Name: [],
  });
};

// se_CreateTagOptionInput omitted.

// se_DeleteConstraintInput omitted.

// se_DeletePortfolioInput omitted.

// se_DeletePortfolioShareInput omitted.

// se_DeleteProductInput omitted.

// se_DeleteProvisionedProductPlanInput omitted.

// se_DeleteProvisioningArtifactInput omitted.

// se_DeleteServiceActionInput omitted.

// se_DeleteTagOptionInput omitted.

// se_DescribeConstraintInput omitted.

// se_DescribeCopyProductStatusInput omitted.

// se_DescribePortfolioInput omitted.

// se_DescribePortfolioSharesInput omitted.

// se_DescribePortfolioShareStatusInput omitted.

// se_DescribeProductAsAdminInput omitted.

// se_DescribeProductInput omitted.

// se_DescribeProductViewInput omitted.

// se_DescribeProvisionedProductInput omitted.

// se_DescribeProvisionedProductPlanInput omitted.

// se_DescribeProvisioningArtifactInput omitted.

// se_DescribeProvisioningParametersInput omitted.

// se_DescribeRecordInput omitted.

// se_DescribeServiceActionExecutionParametersInput omitted.

// se_DescribeServiceActionInput omitted.

// se_DescribeTagOptionInput omitted.

// se_DisableAWSOrganizationsAccessInput omitted.

// se_DisassociateBudgetFromResourceInput omitted.

// se_DisassociatePrincipalFromPortfolioInput omitted.

// se_DisassociateProductFromPortfolioInput omitted.

// se_DisassociateServiceActionFromProvisioningArtifactInput omitted.

// se_DisassociateTagOptionFromResourceInput omitted.

// se_EnableAWSOrganizationsAccessInput omitted.

// se_EngineWorkflowResourceIdentifier omitted.

/**
 * serializeAws_json1_1ExecuteProvisionedProductPlanInput
 */
const se_ExecuteProvisionedProductPlanInput = (
  input: ExecuteProvisionedProductPlanInput,
  context: __SerdeContext
): any => {
  return take(input, {
    AcceptLanguage: [],
    IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
    PlanId: [],
  });
};

/**
 * serializeAws_json1_1ExecuteProvisionedProductServiceActionInput
 */
const se_ExecuteProvisionedProductServiceActionInput = (
  input: ExecuteProvisionedProductServiceActionInput,
  context: __SerdeContext
): any => {
  return take(input, {
    AcceptLanguage: [],
    ExecuteToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Parameters: _json,
    ProvisionedProductId: [],
    ServiceActionId: [],
  });
};

// se_ExecutionParameterMap omitted.

// se_ExecutionParameterValueList omitted.

// se_GetAWSOrganizationsAccessStatusInput omitted.

// se_GetProvisionedProductOutputsInput omitted.

/**
 * serializeAws_json1_1ImportAsProvisionedProductInput
 */
const se_ImportAsProvisionedProductInput = (input: ImportAsProvisionedProductInput, context: __SerdeContext): any => {
  return take(input, {
    AcceptLanguage: [],
    IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
    PhysicalId: [],
    ProductId: [],
    ProvisionedProductName: [],
    ProvisioningArtifactId: [],
  });
};

// se_ListAcceptedPortfolioSharesInput omitted.

// se_ListBudgetsForResourceInput omitted.

// se_ListConstraintsForPortfolioInput omitted.

// se_ListLaunchPathsInput omitted.

// se_ListOrganizationPortfolioAccessInput omitted.

// se_ListPortfolioAccessInput omitted.

// se_ListPortfoliosForProductInput omitted.

// se_ListPortfoliosInput omitted.

// se_ListPrincipalsForPortfolioInput omitted.

// se_ListProvisionedProductPlansInput omitted.

// se_ListProvisioningArtifactsForServiceActionInput omitted.

// se_ListProvisioningArtifactsInput omitted.

// se_ListRecordHistoryInput omitted.

// se_ListRecordHistorySearchFilter omitted.

// se_ListResourcesForTagOptionInput omitted.

// se_ListServiceActionsForProvisioningArtifactInput omitted.

// se_ListServiceActionsInput omitted.

// se_ListStackInstancesForProvisionedProductInput omitted.

// se_ListTagOptionsFilters omitted.

// se_ListTagOptionsInput omitted.

// se_NotificationArns omitted.

/**
 * serializeAws_json1_1NotifyProvisionProductEngineWorkflowResultInput
 */
const se_NotifyProvisionProductEngineWorkflowResultInput = (
  input: NotifyProvisionProductEngineWorkflowResultInput,
  context: __SerdeContext
): any => {
  return take(input, {
    FailureReason: [],
    IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Outputs: _json,
    RecordId: [],
    ResourceIdentifier: _json,
    Status: [],
    WorkflowToken: [],
  });
};

/**
 * serializeAws_json1_1NotifyTerminateProvisionedProductEngineWorkflowResultInput
 */
const se_NotifyTerminateProvisionedProductEngineWorkflowResultInput = (
  input: NotifyTerminateProvisionedProductEngineWorkflowResultInput,
  context: __SerdeContext
): any => {
  return take(input, {
    FailureReason: [],
    IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
    RecordId: [],
    Status: [],
    WorkflowToken: [],
  });
};

/**
 * serializeAws_json1_1NotifyUpdateProvisionedProductEngineWorkflowResultInput
 */
const se_NotifyUpdateProvisionedProductEngineWorkflowResultInput = (
  input: NotifyUpdateProvisionedProductEngineWorkflowResultInput,
  context: __SerdeContext
): any => {
  return take(input, {
    FailureReason: [],
    IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Outputs: _json,
    RecordId: [],
    Status: [],
    WorkflowToken: [],
  });
};

// se_OrganizationNode omitted.

// se_OutputKeys omitted.

// se_ProductViewFilters omitted.

// se_ProductViewFilterValues omitted.

// se_ProvisionedProductFilters omitted.

// se_ProvisionedProductProperties omitted.

// se_ProvisionedProductViewFilterValues omitted.

// se_ProvisioningArtifactInfo omitted.

// se_ProvisioningArtifactProperties omitted.

// se_ProvisioningParameter omitted.

// se_ProvisioningParameters omitted.

// se_ProvisioningPreferences omitted.

/**
 * serializeAws_json1_1ProvisionProductInput
 */
const se_ProvisionProductInput = (input: ProvisionProductInput, context: __SerdeContext): any => {
  return take(input, {
    AcceptLanguage: [],
    NotificationArns: _json,
    PathId: [],
    PathName: [],
    ProductId: [],
    ProductName: [],
    ProvisionToken: [true, (_) => _ ?? generateIdempotencyToken()],
    ProvisionedProductName: [],
    ProvisioningArtifactId: [],
    ProvisioningArtifactName: [],
    ProvisioningParameters: _json,
    ProvisioningPreferences: _json,
    Tags: _json,
  });
};

// se_RecordOutput omitted.

// se_RecordOutputs omitted.

// se_RejectPortfolioShareInput omitted.

// se_ScanProvisionedProductsInput omitted.

// se_SearchProductsAsAdminInput omitted.

// se_SearchProductsInput omitted.

// se_SearchProvisionedProductsInput omitted.

// se_ServiceActionAssociation omitted.

// se_ServiceActionAssociations omitted.

// se_ServiceActionDefinitionMap omitted.

// se_SourceConnection omitted.

// se_SourceConnectionParameters omitted.

// se_SourceProvisioningArtifactProperties omitted.

// se_SourceProvisioningArtifactPropertiesMap omitted.

// se_StackSetAccounts omitted.

// se_StackSetRegions omitted.

// se_Tag omitted.

// se_TagKeys omitted.

// se_Tags omitted.

/**
 * serializeAws_json1_1TerminateProvisionedProductInput
 */
const se_TerminateProvisionedProductInput = (input: TerminateProvisionedProductInput, context: __SerdeContext): any => {
  return take(input, {
    AcceptLanguage: [],
    IgnoreErrors: [],
    ProvisionedProductId: [],
    ProvisionedProductName: [],
    RetainPhysicalResources: [],
    TerminateToken: [true, (_) => _ ?? generateIdempotencyToken()],
  });
};

// se_UniqueTagResourceIdentifier omitted.

// se_UpdateConstraintInput omitted.

// se_UpdatePortfolioInput omitted.

// se_UpdatePortfolioShareInput omitted.

// se_UpdateProductInput omitted.

/**
 * serializeAws_json1_1UpdateProvisionedProductInput
 */
const se_UpdateProvisionedProductInput = (input: UpdateProvisionedProductInput, context: __SerdeContext): any => {
  return take(input, {
    AcceptLanguage: [],
    PathId: [],
    PathName: [],
    ProductId: [],
    ProductName: [],
    ProvisionedProductId: [],
    ProvisionedProductName: [],
    ProvisioningArtifactId: [],
    ProvisioningArtifactName: [],
    ProvisioningParameters: _json,
    ProvisioningPreferences: _json,
    Tags: _json,
    UpdateToken: [true, (_) => _ ?? generateIdempotencyToken()],
  });
};

/**
 * serializeAws_json1_1UpdateProvisionedProductPropertiesInput
 */
const se_UpdateProvisionedProductPropertiesInput = (
  input: UpdateProvisionedProductPropertiesInput,
  context: __SerdeContext
): any => {
  return take(input, {
    AcceptLanguage: [],
    IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
    ProvisionedProductId: [],
    ProvisionedProductProperties: _json,
  });
};

// se_UpdateProvisioningArtifactInput omitted.

// se_UpdateProvisioningParameter omitted.

// se_UpdateProvisioningParameters omitted.

// se_UpdateProvisioningPreferences omitted.

// se_UpdateServiceActionInput omitted.

// se_UpdateTagOptionInput omitted.

// de_AcceptPortfolioShareOutput omitted.

// de_AccountIds omitted.

// de_AllowedValues omitted.

// de_AssociateBudgetWithResourceOutput omitted.

// de_AssociatePrincipalWithPortfolioOutput omitted.

// de_AssociateProductWithPortfolioOutput omitted.

// de_AssociateServiceActionWithProvisioningArtifactOutput omitted.

// de_AssociateTagOptionWithResourceOutput omitted.

// de_BatchAssociateServiceActionWithProvisioningArtifactOutput omitted.

// de_BatchDisassociateServiceActionFromProvisioningArtifactOutput omitted.

// de_BudgetDetail omitted.

// de_Budgets omitted.

// de_CloudWatchDashboard omitted.

// de_CloudWatchDashboards omitted.

// de_CodeStarParameters omitted.

// de_ConstraintDetail omitted.

// de_ConstraintDetails omitted.

// de_ConstraintSummaries omitted.

// de_ConstraintSummary omitted.

// de_CopyProductOutput omitted.

// de_CreateConstraintOutput omitted.

/**
 * deserializeAws_json1_1CreatePortfolioOutput
 */
const de_CreatePortfolioOutput = (output: any, context: __SerdeContext): CreatePortfolioOutput => {
  return take(output, {
    PortfolioDetail: (_: any) => de_PortfolioDetail(_, context),
    Tags: _json,
  }) as any;
};

// de_CreatePortfolioShareOutput omitted.

/**
 * deserializeAws_json1_1CreateProductOutput
 */
const de_CreateProductOutput = (output: any, context: __SerdeContext): CreateProductOutput => {
  return take(output, {
    ProductViewDetail: (_: any) => de_ProductViewDetail(_, context),
    ProvisioningArtifactDetail: (_: any) => de_ProvisioningArtifactDetail(_, context),
    Tags: _json,
  }) as any;
};

// de_CreateProvisionedProductPlanOutput omitted.

/**
 * deserializeAws_json1_1CreateProvisioningArtifactOutput
 */
const de_CreateProvisioningArtifactOutput = (
  output: any,
  context: __SerdeContext
): CreateProvisioningArtifactOutput => {
  return take(output, {
    Info: _json,
    ProvisioningArtifactDetail: (_: any) => de_ProvisioningArtifactDetail(_, context),
    Status: __expectString,
  }) as any;
};

// de_CreateServiceActionOutput omitted.

// de_CreateTagOptionOutput omitted.

// de_DeleteConstraintOutput omitted.

// de_DeletePortfolioOutput omitted.

// de_DeletePortfolioShareOutput omitted.

// de_DeleteProductOutput omitted.

// de_DeleteProvisionedProductPlanOutput omitted.

// de_DeleteProvisioningArtifactOutput omitted.

// de_DeleteServiceActionOutput omitted.

// de_DeleteTagOptionOutput omitted.

// de_DescribeConstraintOutput omitted.

// de_DescribeCopyProductStatusOutput omitted.

/**
 * deserializeAws_json1_1DescribePortfolioOutput
 */
const de_DescribePortfolioOutput = (output: any, context: __SerdeContext): DescribePortfolioOutput => {
  return take(output, {
    Budgets: _json,
    PortfolioDetail: (_: any) => de_PortfolioDetail(_, context),
    TagOptions: _json,
    Tags: _json,
  }) as any;
};

// de_DescribePortfolioSharesOutput omitted.

// de_DescribePortfolioShareStatusOutput omitted.

/**
 * deserializeAws_json1_1DescribeProductAsAdminOutput
 */
const de_DescribeProductAsAdminOutput = (output: any, context: __SerdeContext): DescribeProductAsAdminOutput => {
  return take(output, {
    Budgets: _json,
    ProductViewDetail: (_: any) => de_ProductViewDetail(_, context),
    ProvisioningArtifactSummaries: (_: any) => de_ProvisioningArtifactSummaries(_, context),
    TagOptions: _json,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeProductOutput
 */
const de_DescribeProductOutput = (output: any, context: __SerdeContext): DescribeProductOutput => {
  return take(output, {
    Budgets: _json,
    LaunchPaths: _json,
    ProductViewSummary: _json,
    ProvisioningArtifacts: (_: any) => de_ProvisioningArtifacts(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeProductViewOutput
 */
const de_DescribeProductViewOutput = (output: any, context: __SerdeContext): DescribeProductViewOutput => {
  return take(output, {
    ProductViewSummary: _json,
    ProvisioningArtifacts: (_: any) => de_ProvisioningArtifacts(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeProvisionedProductOutput
 */
const de_DescribeProvisionedProductOutput = (
  output: any,
  context: __SerdeContext
): DescribeProvisionedProductOutput => {
  return take(output, {
    CloudWatchDashboards: _json,
    ProvisionedProductDetail: (_: any) => de_ProvisionedProductDetail(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeProvisionedProductPlanOutput
 */
const de_DescribeProvisionedProductPlanOutput = (
  output: any,
  context: __SerdeContext
): DescribeProvisionedProductPlanOutput => {
  return take(output, {
    NextPageToken: __expectString,
    ProvisionedProductPlanDetails: (_: any) => de_ProvisionedProductPlanDetails(_, context),
    ResourceChanges: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeProvisioningArtifactOutput
 */
const de_DescribeProvisioningArtifactOutput = (
  output: any,
  context: __SerdeContext
): DescribeProvisioningArtifactOutput => {
  return take(output, {
    Info: _json,
    ProvisioningArtifactDetail: (_: any) => de_ProvisioningArtifactDetail(_, context),
    ProvisioningArtifactParameters: _json,
    Status: __expectString,
  }) as any;
};

// de_DescribeProvisioningParametersOutput omitted.

/**
 * deserializeAws_json1_1DescribeRecordOutput
 */
const de_DescribeRecordOutput = (output: any, context: __SerdeContext): DescribeRecordOutput => {
  return take(output, {
    NextPageToken: __expectString,
    RecordDetail: (_: any) => de_RecordDetail(_, context),
    RecordOutputs: _json,
  }) as any;
};

// de_DescribeServiceActionExecutionParametersOutput omitted.

// de_DescribeServiceActionOutput omitted.

// de_DescribeTagOptionOutput omitted.

// de_DisableAWSOrganizationsAccessOutput omitted.

// de_DisassociateBudgetFromResourceOutput omitted.

// de_DisassociatePrincipalFromPortfolioOutput omitted.

// de_DisassociateProductFromPortfolioOutput omitted.

// de_DisassociateServiceActionFromProvisioningArtifactOutput omitted.

// de_DisassociateTagOptionFromResourceOutput omitted.

// de_DuplicateResourceException omitted.

// de_EnableAWSOrganizationsAccessOutput omitted.

/**
 * deserializeAws_json1_1ExecuteProvisionedProductPlanOutput
 */
const de_ExecuteProvisionedProductPlanOutput = (
  output: any,
  context: __SerdeContext
): ExecuteProvisionedProductPlanOutput => {
  return take(output, {
    RecordDetail: (_: any) => de_RecordDetail(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ExecuteProvisionedProductServiceActionOutput
 */
const de_ExecuteProvisionedProductServiceActionOutput = (
  output: any,
  context: __SerdeContext
): ExecuteProvisionedProductServiceActionOutput => {
  return take(output, {
    RecordDetail: (_: any) => de_RecordDetail(_, context),
  }) as any;
};

// de_ExecutionParameter omitted.

// de_ExecutionParameters omitted.

// de_ExecutionParameterValueList omitted.

// de_FailedServiceActionAssociation omitted.

// de_FailedServiceActionAssociations omitted.

// de_GetAWSOrganizationsAccessStatusOutput omitted.

// de_GetProvisionedProductOutputsOutput omitted.

/**
 * deserializeAws_json1_1ImportAsProvisionedProductOutput
 */
const de_ImportAsProvisionedProductOutput = (
  output: any,
  context: __SerdeContext
): ImportAsProvisionedProductOutput => {
  return take(output, {
    RecordDetail: (_: any) => de_RecordDetail(_, context),
  }) as any;
};

// de_InvalidParametersException omitted.

// de_InvalidStateException omitted.

/**
 * deserializeAws_json1_1LastSync
 */
const de_LastSync = (output: any, context: __SerdeContext): LastSync => {
  return take(output, {
    LastSuccessfulSyncProvisioningArtifactId: __expectString,
    LastSuccessfulSyncTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastSyncStatus: __expectString,
    LastSyncStatusMessage: __expectString,
    LastSyncTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_LaunchPath omitted.

// de_LaunchPaths omitted.

// de_LaunchPathSummaries omitted.

// de_LaunchPathSummary omitted.

// de_LimitExceededException omitted.

/**
 * deserializeAws_json1_1ListAcceptedPortfolioSharesOutput
 */
const de_ListAcceptedPortfolioSharesOutput = (
  output: any,
  context: __SerdeContext
): ListAcceptedPortfolioSharesOutput => {
  return take(output, {
    NextPageToken: __expectString,
    PortfolioDetails: (_: any) => de_PortfolioDetails(_, context),
  }) as any;
};

// de_ListBudgetsForResourceOutput omitted.

// de_ListConstraintsForPortfolioOutput omitted.

// de_ListLaunchPathsOutput omitted.

// de_ListOrganizationPortfolioAccessOutput omitted.

// de_ListPortfolioAccessOutput omitted.

/**
 * deserializeAws_json1_1ListPortfoliosForProductOutput
 */
const de_ListPortfoliosForProductOutput = (output: any, context: __SerdeContext): ListPortfoliosForProductOutput => {
  return take(output, {
    NextPageToken: __expectString,
    PortfolioDetails: (_: any) => de_PortfolioDetails(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListPortfoliosOutput
 */
const de_ListPortfoliosOutput = (output: any, context: __SerdeContext): ListPortfoliosOutput => {
  return take(output, {
    NextPageToken: __expectString,
    PortfolioDetails: (_: any) => de_PortfolioDetails(_, context),
  }) as any;
};

// de_ListPrincipalsForPortfolioOutput omitted.

// de_ListProvisionedProductPlansOutput omitted.

/**
 * deserializeAws_json1_1ListProvisioningArtifactsForServiceActionOutput
 */
const de_ListProvisioningArtifactsForServiceActionOutput = (
  output: any,
  context: __SerdeContext
): ListProvisioningArtifactsForServiceActionOutput => {
  return take(output, {
    NextPageToken: __expectString,
    ProvisioningArtifactViews: (_: any) => de_ProvisioningArtifactViews(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListProvisioningArtifactsOutput
 */
const de_ListProvisioningArtifactsOutput = (output: any, context: __SerdeContext): ListProvisioningArtifactsOutput => {
  return take(output, {
    NextPageToken: __expectString,
    ProvisioningArtifactDetails: (_: any) => de_ProvisioningArtifactDetails(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListRecordHistoryOutput
 */
const de_ListRecordHistoryOutput = (output: any, context: __SerdeContext): ListRecordHistoryOutput => {
  return take(output, {
    NextPageToken: __expectString,
    RecordDetails: (_: any) => de_RecordDetails(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListResourcesForTagOptionOutput
 */
const de_ListResourcesForTagOptionOutput = (output: any, context: __SerdeContext): ListResourcesForTagOptionOutput => {
  return take(output, {
    PageToken: __expectString,
    ResourceDetails: (_: any) => de_ResourceDetails(_, context),
  }) as any;
};

// de_ListServiceActionsForProvisioningArtifactOutput omitted.

// de_ListServiceActionsOutput omitted.

// de_ListStackInstancesForProvisionedProductOutput omitted.

// de_ListTagOptionsOutput omitted.

// de_Namespaces omitted.

// de_NotificationArns omitted.

// de_NotifyProvisionProductEngineWorkflowResultOutput omitted.

// de_NotifyTerminateProvisionedProductEngineWorkflowResultOutput omitted.

// de_NotifyUpdateProvisionedProductEngineWorkflowResultOutput omitted.

// de_OperationNotSupportedException omitted.

// de_OrganizationNode omitted.

// de_OrganizationNodes omitted.

// de_ParameterConstraints omitted.

/**
 * deserializeAws_json1_1PortfolioDetail
 */
const de_PortfolioDetail = (output: any, context: __SerdeContext): PortfolioDetail => {
  return take(output, {
    ARN: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DisplayName: __expectString,
    Id: __expectString,
    ProviderName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1PortfolioDetails
 */
const de_PortfolioDetails = (output: any, context: __SerdeContext): PortfolioDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PortfolioDetail(entry, context);
    });
  return retVal;
};

// de_PortfolioShareDetail omitted.

// de_PortfolioShareDetails omitted.

// de_Principal omitted.

// de_Principals omitted.

// de_ProductViewAggregations omitted.

// de_ProductViewAggregationValue omitted.

// de_ProductViewAggregationValues omitted.

/**
 * deserializeAws_json1_1ProductViewDetail
 */
const de_ProductViewDetail = (output: any, context: __SerdeContext): ProductViewDetail => {
  return take(output, {
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ProductARN: __expectString,
    ProductViewSummary: _json,
    SourceConnection: (_: any) => de_SourceConnectionDetail(_, context),
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ProductViewDetails
 */
const de_ProductViewDetails = (output: any, context: __SerdeContext): ProductViewDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProductViewDetail(entry, context);
    });
  return retVal;
};

// de_ProductViewSummaries omitted.

// de_ProductViewSummary omitted.

/**
 * deserializeAws_json1_1ProvisionedProductAttribute
 */
const de_ProvisionedProductAttribute = (output: any, context: __SerdeContext): ProvisionedProductAttribute => {
  return take(output, {
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Id: __expectString,
    IdempotencyToken: __expectString,
    LastProvisioningRecordId: __expectString,
    LastRecordId: __expectString,
    LastSuccessfulProvisioningRecordId: __expectString,
    Name: __expectString,
    PhysicalId: __expectString,
    ProductId: __expectString,
    ProductName: __expectString,
    ProvisioningArtifactId: __expectString,
    ProvisioningArtifactName: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
    Tags: _json,
    Type: __expectString,
    UserArn: __expectString,
    UserArnSession: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ProvisionedProductAttributes
 */
const de_ProvisionedProductAttributes = (output: any, context: __SerdeContext): ProvisionedProductAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProvisionedProductAttribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProvisionedProductDetail
 */
const de_ProvisionedProductDetail = (output: any, context: __SerdeContext): ProvisionedProductDetail => {
  return take(output, {
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Id: __expectString,
    IdempotencyToken: __expectString,
    LastProvisioningRecordId: __expectString,
    LastRecordId: __expectString,
    LastSuccessfulProvisioningRecordId: __expectString,
    LaunchRoleArn: __expectString,
    Name: __expectString,
    ProductId: __expectString,
    ProvisioningArtifactId: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ProvisionedProductDetails
 */
const de_ProvisionedProductDetails = (output: any, context: __SerdeContext): ProvisionedProductDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProvisionedProductDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProvisionedProductPlanDetails
 */
const de_ProvisionedProductPlanDetails = (output: any, context: __SerdeContext): ProvisionedProductPlanDetails => {
  return take(output, {
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NotificationArns: _json,
    PathId: __expectString,
    PlanId: __expectString,
    PlanName: __expectString,
    PlanType: __expectString,
    ProductId: __expectString,
    ProvisionProductId: __expectString,
    ProvisionProductName: __expectString,
    ProvisioningArtifactId: __expectString,
    ProvisioningParameters: _json,
    Status: __expectString,
    StatusMessage: __expectString,
    Tags: _json,
    UpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ProvisionedProductPlans omitted.

// de_ProvisionedProductPlanSummary omitted.

// de_ProvisionedProductProperties omitted.

/**
 * deserializeAws_json1_1ProvisioningArtifact
 */
const de_ProvisioningArtifact = (output: any, context: __SerdeContext): ProvisioningArtifact => {
  return take(output, {
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    Guidance: __expectString,
    Id: __expectString,
    Name: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ProvisioningArtifactDetail
 */
const de_ProvisioningArtifactDetail = (output: any, context: __SerdeContext): ProvisioningArtifactDetail => {
  return take(output, {
    Active: __expectBoolean,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    Guidance: __expectString,
    Id: __expectString,
    Name: __expectString,
    SourceRevision: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ProvisioningArtifactDetails
 */
const de_ProvisioningArtifactDetails = (output: any, context: __SerdeContext): ProvisioningArtifactDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProvisioningArtifactDetail(entry, context);
    });
  return retVal;
};

// de_ProvisioningArtifactInfo omitted.

// de_ProvisioningArtifactOutput omitted.

// de_ProvisioningArtifactOutputs omitted.

// de_ProvisioningArtifactParameter omitted.

// de_ProvisioningArtifactParameters omitted.

// de_ProvisioningArtifactPreferences omitted.

/**
 * deserializeAws_json1_1ProvisioningArtifacts
 */
const de_ProvisioningArtifacts = (output: any, context: __SerdeContext): ProvisioningArtifact[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_ProvisioningArtifactSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProvisioningArtifactSummary
 */
const de_ProvisioningArtifactSummary = (output: any, context: __SerdeContext): ProvisioningArtifactSummary => {
  return take(output, {
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    Id: __expectString,
    Name: __expectString,
    ProvisioningArtifactMetadata: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1ProvisioningArtifactView
 */
const de_ProvisioningArtifactView = (output: any, context: __SerdeContext): ProvisioningArtifactView => {
  return take(output, {
    ProductViewSummary: _json,
    ProvisioningArtifact: (_: any) => de_ProvisioningArtifact(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ProvisioningArtifactViews
 */
const de_ProvisioningArtifactViews = (output: any, context: __SerdeContext): ProvisioningArtifactView[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProvisioningArtifactView(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProvisionProductOutput
 */
const de_ProvisionProductOutput = (output: any, context: __SerdeContext): ProvisionProductOutput => {
  return take(output, {
    RecordDetail: (_: any) => de_RecordDetail(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1RecordDetail
 */
const de_RecordDetail = (output: any, context: __SerdeContext): RecordDetail => {
  return take(output, {
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LaunchRoleArn: __expectString,
    PathId: __expectString,
    ProductId: __expectString,
    ProvisionedProductId: __expectString,
    ProvisionedProductName: __expectString,
    ProvisionedProductType: __expectString,
    ProvisioningArtifactId: __expectString,
    RecordErrors: _json,
    RecordId: __expectString,
    RecordTags: _json,
    RecordType: __expectString,
    Status: __expectString,
    UpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1RecordDetails
 */
const de_RecordDetails = (output: any, context: __SerdeContext): RecordDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RecordDetail(entry, context);
    });
  return retVal;
};

// de_RecordError omitted.

// de_RecordErrors omitted.

// de_RecordOutput omitted.

// de_RecordOutputs omitted.

// de_RecordTag omitted.

// de_RecordTags omitted.

// de_RejectPortfolioShareOutput omitted.

// de_ResourceChange omitted.

// de_ResourceChangeDetail omitted.

// de_ResourceChangeDetails omitted.

// de_ResourceChanges omitted.

/**
 * deserializeAws_json1_1ResourceDetail
 */
const de_ResourceDetail = (output: any, context: __SerdeContext): ResourceDetail => {
  return take(output, {
    ARN: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    Id: __expectString,
    Name: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ResourceDetails
 */
const de_ResourceDetails = (output: any, context: __SerdeContext): ResourceDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResourceDetail(entry, context);
    });
  return retVal;
};

// de_ResourceInUseException omitted.

// de_ResourceNotFoundException omitted.

// de_ResourceTargetDefinition omitted.

/**
 * deserializeAws_json1_1ScanProvisionedProductsOutput
 */
const de_ScanProvisionedProductsOutput = (output: any, context: __SerdeContext): ScanProvisionedProductsOutput => {
  return take(output, {
    NextPageToken: __expectString,
    ProvisionedProducts: (_: any) => de_ProvisionedProductDetails(_, context),
  }) as any;
};

// de_Scope omitted.

/**
 * deserializeAws_json1_1SearchProductsAsAdminOutput
 */
const de_SearchProductsAsAdminOutput = (output: any, context: __SerdeContext): SearchProductsAsAdminOutput => {
  return take(output, {
    NextPageToken: __expectString,
    ProductViewDetails: (_: any) => de_ProductViewDetails(_, context),
  }) as any;
};

// de_SearchProductsOutput omitted.

/**
 * deserializeAws_json1_1SearchProvisionedProductsOutput
 */
const de_SearchProvisionedProductsOutput = (output: any, context: __SerdeContext): SearchProvisionedProductsOutput => {
  return take(output, {
    NextPageToken: __expectString,
    ProvisionedProducts: (_: any) => de_ProvisionedProductAttributes(_, context),
    TotalResultsCount: __expectInt32,
  }) as any;
};

// de_ServiceActionDefinitionMap omitted.

// de_ServiceActionDetail omitted.

// de_ServiceActionSummaries omitted.

// de_ServiceActionSummary omitted.

// de_ShareDetails omitted.

// de_ShareError omitted.

// de_ShareErrors omitted.

/**
 * deserializeAws_json1_1SourceConnectionDetail
 */
const de_SourceConnectionDetail = (output: any, context: __SerdeContext): SourceConnectionDetail => {
  return take(output, {
    ConnectionParameters: _json,
    LastSync: (_: any) => de_LastSync(_, context),
    Type: __expectString,
  }) as any;
};

// de_SourceConnectionParameters omitted.

// de_StackInstance omitted.

// de_StackInstances omitted.

// de_StackSetAccounts omitted.

// de_StackSetRegions omitted.

// de_SuccessfulShares omitted.

// de_Tag omitted.

// de_TagOptionDetail omitted.

// de_TagOptionDetails omitted.

// de_TagOptionNotMigratedException omitted.

// de_TagOptionSummaries omitted.

// de_TagOptionSummary omitted.

// de_TagOptionValues omitted.

// de_Tags omitted.

/**
 * deserializeAws_json1_1TerminateProvisionedProductOutput
 */
const de_TerminateProvisionedProductOutput = (
  output: any,
  context: __SerdeContext
): TerminateProvisionedProductOutput => {
  return take(output, {
    RecordDetail: (_: any) => de_RecordDetail(_, context),
  }) as any;
};

// de_UpdateConstraintOutput omitted.

/**
 * deserializeAws_json1_1UpdatePortfolioOutput
 */
const de_UpdatePortfolioOutput = (output: any, context: __SerdeContext): UpdatePortfolioOutput => {
  return take(output, {
    PortfolioDetail: (_: any) => de_PortfolioDetail(_, context),
    Tags: _json,
  }) as any;
};

// de_UpdatePortfolioShareOutput omitted.

/**
 * deserializeAws_json1_1UpdateProductOutput
 */
const de_UpdateProductOutput = (output: any, context: __SerdeContext): UpdateProductOutput => {
  return take(output, {
    ProductViewDetail: (_: any) => de_ProductViewDetail(_, context),
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateProvisionedProductOutput
 */
const de_UpdateProvisionedProductOutput = (output: any, context: __SerdeContext): UpdateProvisionedProductOutput => {
  return take(output, {
    RecordDetail: (_: any) => de_RecordDetail(_, context),
  }) as any;
};

// de_UpdateProvisionedProductPropertiesOutput omitted.

/**
 * deserializeAws_json1_1UpdateProvisioningArtifactOutput
 */
const de_UpdateProvisioningArtifactOutput = (
  output: any,
  context: __SerdeContext
): UpdateProvisioningArtifactOutput => {
  return take(output, {
    Info: _json,
    ProvisioningArtifactDetail: (_: any) => de_ProvisioningArtifactDetail(_, context),
    Status: __expectString,
  }) as any;
};

// de_UpdateProvisioningParameter omitted.

// de_UpdateProvisioningParameters omitted.

// de_UpdateServiceActionOutput omitted.

// de_UpdateTagOptionOutput omitted.

// de_UsageInstruction omitted.

// de_UsageInstructions omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
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
