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

export const serializeAws_json1_1AcceptPortfolioShareCommand = async (
  input: AcceptPortfolioShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.AcceptPortfolioShare",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AcceptPortfolioShareInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateBudgetWithResourceCommand = async (
  input: AssociateBudgetWithResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.AssociateBudgetWithResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateBudgetWithResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociatePrincipalWithPortfolioCommand = async (
  input: AssociatePrincipalWithPortfolioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociatePrincipalWithPortfolioInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateProductWithPortfolioCommand = async (
  input: AssociateProductWithPortfolioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.AssociateProductWithPortfolio",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateProductWithPortfolioInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommand = async (
  input: AssociateServiceActionWithProvisioningArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateServiceActionWithProvisioningArtifactInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateTagOptionWithResourceCommand = async (
  input: AssociateTagOptionWithResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.AssociateTagOptionWithResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateTagOptionWithResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommand = async (
  input: BatchAssociateServiceActionWithProvisioningArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand = async (
  input: BatchDisassociateServiceActionFromProvisioningArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact",
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CopyProductCommand = async (
  input: CopyProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.CopyProduct",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CopyProductInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateConstraintCommand = async (
  input: CreateConstraintCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.CreateConstraint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateConstraintInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePortfolioCommand = async (
  input: CreatePortfolioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.CreatePortfolio",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreatePortfolioInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePortfolioShareCommand = async (
  input: CreatePortfolioShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.CreatePortfolioShare",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreatePortfolioShareInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateProductCommand = async (
  input: CreateProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.CreateProduct",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateProductInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateProvisionedProductPlanCommand = async (
  input: CreateProvisionedProductPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.CreateProvisionedProductPlan",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateProvisionedProductPlanInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateProvisioningArtifactCommand = async (
  input: CreateProvisioningArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.CreateProvisioningArtifact",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateProvisioningArtifactInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateServiceActionCommand = async (
  input: CreateServiceActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.CreateServiceAction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateServiceActionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateTagOptionCommand = async (
  input: CreateTagOptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.CreateTagOption",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateTagOptionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteConstraintCommand = async (
  input: DeleteConstraintCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DeleteConstraint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteConstraintInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePortfolioCommand = async (
  input: DeletePortfolioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DeletePortfolio",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeletePortfolioInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePortfolioShareCommand = async (
  input: DeletePortfolioShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DeletePortfolioShare",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeletePortfolioShareInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteProductCommand = async (
  input: DeleteProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DeleteProduct",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteProductInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteProvisionedProductPlanCommand = async (
  input: DeleteProvisionedProductPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DeleteProvisionedProductPlan",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteProvisionedProductPlanInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteProvisioningArtifactCommand = async (
  input: DeleteProvisioningArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DeleteProvisioningArtifact",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteProvisioningArtifactInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteServiceActionCommand = async (
  input: DeleteServiceActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DeleteServiceAction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteServiceActionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTagOptionCommand = async (
  input: DeleteTagOptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DeleteTagOption",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTagOptionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeConstraintCommand = async (
  input: DescribeConstraintCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DescribeConstraint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeConstraintInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCopyProductStatusCommand = async (
  input: DescribeCopyProductStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DescribeCopyProductStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeCopyProductStatusInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribePortfolioCommand = async (
  input: DescribePortfolioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DescribePortfolio",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribePortfolioInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribePortfolioSharesCommand = async (
  input: DescribePortfolioSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DescribePortfolioShares",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribePortfolioSharesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribePortfolioShareStatusCommand = async (
  input: DescribePortfolioShareStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DescribePortfolioShareStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribePortfolioShareStatusInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeProductCommand = async (
  input: DescribeProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DescribeProduct",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeProductInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeProductAsAdminCommand = async (
  input: DescribeProductAsAdminCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DescribeProductAsAdmin",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeProductAsAdminInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeProductViewCommand = async (
  input: DescribeProductViewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DescribeProductView",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeProductViewInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeProvisionedProductCommand = async (
  input: DescribeProvisionedProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DescribeProvisionedProduct",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeProvisionedProductInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeProvisionedProductPlanCommand = async (
  input: DescribeProvisionedProductPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DescribeProvisionedProductPlan",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeProvisionedProductPlanInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeProvisioningArtifactCommand = async (
  input: DescribeProvisioningArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DescribeProvisioningArtifact",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeProvisioningArtifactInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeProvisioningParametersCommand = async (
  input: DescribeProvisioningParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DescribeProvisioningParameters",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeProvisioningParametersInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeRecordCommand = async (
  input: DescribeRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DescribeRecord",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeRecordInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeServiceActionCommand = async (
  input: DescribeServiceActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DescribeServiceAction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeServiceActionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeServiceActionExecutionParametersCommand = async (
  input: DescribeServiceActionExecutionParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeServiceActionExecutionParametersInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTagOptionCommand = async (
  input: DescribeTagOptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DescribeTagOption",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTagOptionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisableAWSOrganizationsAccessCommand = async (
  input: DisableAWSOrganizationsAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DisableAWSOrganizationsAccess",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisableAWSOrganizationsAccessInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateBudgetFromResourceCommand = async (
  input: DisassociateBudgetFromResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DisassociateBudgetFromResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateBudgetFromResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociatePrincipalFromPortfolioCommand = async (
  input: DisassociatePrincipalFromPortfolioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociatePrincipalFromPortfolioInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateProductFromPortfolioCommand = async (
  input: DisassociateProductFromPortfolioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DisassociateProductFromPortfolio",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateProductFromPortfolioInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommand = async (
  input: DisassociateServiceActionFromProvisioningArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateTagOptionFromResourceCommand = async (
  input: DisassociateTagOptionFromResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.DisassociateTagOptionFromResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateTagOptionFromResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EnableAWSOrganizationsAccessCommand = async (
  input: EnableAWSOrganizationsAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.EnableAWSOrganizationsAccess",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1EnableAWSOrganizationsAccessInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ExecuteProvisionedProductPlanCommand = async (
  input: ExecuteProvisionedProductPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.ExecuteProvisionedProductPlan",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ExecuteProvisionedProductPlanInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ExecuteProvisionedProductServiceActionCommand = async (
  input: ExecuteProvisionedProductServiceActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ExecuteProvisionedProductServiceActionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAWSOrganizationsAccessStatusCommand = async (
  input: GetAWSOrganizationsAccessStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAWSOrganizationsAccessStatusInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetProvisionedProductOutputsCommand = async (
  input: GetProvisionedProductOutputsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.GetProvisionedProductOutputs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetProvisionedProductOutputsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ImportAsProvisionedProductCommand = async (
  input: ImportAsProvisionedProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.ImportAsProvisionedProduct",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ImportAsProvisionedProductInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAcceptedPortfolioSharesCommand = async (
  input: ListAcceptedPortfolioSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.ListAcceptedPortfolioShares",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAcceptedPortfolioSharesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListBudgetsForResourceCommand = async (
  input: ListBudgetsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.ListBudgetsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListBudgetsForResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListConstraintsForPortfolioCommand = async (
  input: ListConstraintsForPortfolioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.ListConstraintsForPortfolio",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListConstraintsForPortfolioInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListLaunchPathsCommand = async (
  input: ListLaunchPathsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.ListLaunchPaths",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListLaunchPathsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListOrganizationPortfolioAccessCommand = async (
  input: ListOrganizationPortfolioAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.ListOrganizationPortfolioAccess",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListOrganizationPortfolioAccessInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPortfolioAccessCommand = async (
  input: ListPortfolioAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.ListPortfolioAccess",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPortfolioAccessInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPortfoliosCommand = async (
  input: ListPortfoliosCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.ListPortfolios",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPortfoliosInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPortfoliosForProductCommand = async (
  input: ListPortfoliosForProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.ListPortfoliosForProduct",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPortfoliosForProductInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPrincipalsForPortfolioCommand = async (
  input: ListPrincipalsForPortfolioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.ListPrincipalsForPortfolio",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPrincipalsForPortfolioInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListProvisionedProductPlansCommand = async (
  input: ListProvisionedProductPlansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.ListProvisionedProductPlans",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListProvisionedProductPlansInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListProvisioningArtifactsCommand = async (
  input: ListProvisioningArtifactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.ListProvisioningArtifacts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListProvisioningArtifactsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand = async (
  input: ListProvisioningArtifactsForServiceActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListProvisioningArtifactsForServiceActionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRecordHistoryCommand = async (
  input: ListRecordHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.ListRecordHistory",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListRecordHistoryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListResourcesForTagOptionCommand = async (
  input: ListResourcesForTagOptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.ListResourcesForTagOption",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListResourcesForTagOptionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListServiceActionsCommand = async (
  input: ListServiceActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.ListServiceActions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListServiceActionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand = async (
  input: ListServiceActionsForProvisioningArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListServiceActionsForProvisioningArtifactInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListStackInstancesForProvisionedProductCommand = async (
  input: ListStackInstancesForProvisionedProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListStackInstancesForProvisionedProductInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagOptionsCommand = async (
  input: ListTagOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.ListTagOptions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagOptionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ProvisionProductCommand = async (
  input: ProvisionProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.ProvisionProduct",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ProvisionProductInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RejectPortfolioShareCommand = async (
  input: RejectPortfolioShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.RejectPortfolioShare",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RejectPortfolioShareInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ScanProvisionedProductsCommand = async (
  input: ScanProvisionedProductsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.ScanProvisionedProducts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ScanProvisionedProductsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SearchProductsCommand = async (
  input: SearchProductsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.SearchProducts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SearchProductsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SearchProductsAsAdminCommand = async (
  input: SearchProductsAsAdminCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.SearchProductsAsAdmin",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SearchProductsAsAdminInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SearchProvisionedProductsCommand = async (
  input: SearchProvisionedProductsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.SearchProvisionedProducts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SearchProvisionedProductsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TerminateProvisionedProductCommand = async (
  input: TerminateProvisionedProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.TerminateProvisionedProduct",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TerminateProvisionedProductInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateConstraintCommand = async (
  input: UpdateConstraintCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.UpdateConstraint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateConstraintInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdatePortfolioCommand = async (
  input: UpdatePortfolioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.UpdatePortfolio",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdatePortfolioInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdatePortfolioShareCommand = async (
  input: UpdatePortfolioShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.UpdatePortfolioShare",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdatePortfolioShareInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateProductCommand = async (
  input: UpdateProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.UpdateProduct",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateProductInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateProvisionedProductCommand = async (
  input: UpdateProvisionedProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.UpdateProvisionedProduct",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateProvisionedProductInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateProvisionedProductPropertiesCommand = async (
  input: UpdateProvisionedProductPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.UpdateProvisionedProductProperties",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateProvisionedProductPropertiesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateProvisioningArtifactCommand = async (
  input: UpdateProvisioningArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.UpdateProvisioningArtifact",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateProvisioningArtifactInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateServiceActionCommand = async (
  input: UpdateServiceActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.UpdateServiceAction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateServiceActionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateTagOptionCommand = async (
  input: UpdateTagOptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWS242ServiceCatalogService.UpdateTagOption",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateTagOptionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AcceptPortfolioShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptPortfolioShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AcceptPortfolioShareCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AcceptPortfolioShareOutput(data, context);
  const response: AcceptPortfolioShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AcceptPortfolioShareCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.servicecatalog#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AssociateBudgetWithResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateBudgetWithResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateBudgetWithResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateBudgetWithResourceOutput(data, context);
  const response: AssociateBudgetWithResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateBudgetWithResourceCommandError = async (
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
      throw await deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.servicecatalog#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AssociatePrincipalWithPortfolioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePrincipalWithPortfolioCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociatePrincipalWithPortfolioCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociatePrincipalWithPortfolioOutput(data, context);
  const response: AssociatePrincipalWithPortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociatePrincipalWithPortfolioCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.servicecatalog#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AssociateProductWithPortfolioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateProductWithPortfolioCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateProductWithPortfolioCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateProductWithPortfolioOutput(data, context);
  const response: AssociateProductWithPortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateProductWithPortfolioCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.servicecatalog#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateServiceActionWithProvisioningArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactOutput(data, context);
  const response: AssociateServiceActionWithProvisioningArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommandError = async (
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
      throw await deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.servicecatalog#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AssociateTagOptionWithResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTagOptionWithResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateTagOptionWithResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateTagOptionWithResourceOutput(data, context);
  const response: AssociateTagOptionWithResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateTagOptionWithResourceCommandError = async (
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
      throw await deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.servicecatalog#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.servicecatalog#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TagOptionNotMigratedException":
    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
      throw await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateServiceActionWithProvisioningArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactOutput(data, context);
  const response: BatchAssociateServiceActionWithProvisioningArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactOutput(data, context);
  const response: BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CopyProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyProductCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CopyProductCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CopyProductOutput(data, context);
  const response: CopyProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CopyProductCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateConstraintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConstraintCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateConstraintCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateConstraintOutput(data, context);
  const response: CreateConstraintCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateConstraintCommandError = async (
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
      throw await deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.servicecatalog#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreatePortfolioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePortfolioCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreatePortfolioCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePortfolioOutput(data, context);
  const response: CreatePortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePortfolioCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.servicecatalog#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "TagOptionNotMigratedException":
    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
      throw await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreatePortfolioShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePortfolioShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreatePortfolioShareCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePortfolioShareOutput(data, context);
  const response: CreatePortfolioShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePortfolioShareCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.servicecatalog#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.servicecatalog#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.servicecatalog#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProductCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateProductCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateProductOutput(data, context);
  const response: CreateProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateProductCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.servicecatalog#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "TagOptionNotMigratedException":
    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
      throw await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateProvisionedProductPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProvisionedProductPlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateProvisionedProductPlanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateProvisionedProductPlanOutput(data, context);
  const response: CreateProvisionedProductPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateProvisionedProductPlanCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.servicecatalog#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateProvisioningArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProvisioningArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateProvisioningArtifactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateProvisioningArtifactOutput(data, context);
  const response: CreateProvisioningArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateProvisioningArtifactCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.servicecatalog#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateServiceActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateServiceActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateServiceActionOutput(data, context);
  const response: CreateServiceActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateServiceActionCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.servicecatalog#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateTagOptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagOptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateTagOptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateTagOptionOutput(data, context);
  const response: CreateTagOptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateTagOptionCommandError = async (
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
      throw await deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.servicecatalog#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "TagOptionNotMigratedException":
    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
      throw await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteConstraintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConstraintCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteConstraintCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteConstraintOutput(data, context);
  const response: DeleteConstraintCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteConstraintCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeletePortfolioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePortfolioCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeletePortfolioCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeletePortfolioOutput(data, context);
  const response: DeletePortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePortfolioCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.servicecatalog#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TagOptionNotMigratedException":
    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
      throw await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeletePortfolioShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePortfolioShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeletePortfolioShareCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeletePortfolioShareOutput(data, context);
  const response: DeletePortfolioShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePortfolioShareCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.servicecatalog#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.servicecatalog#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProductCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteProductCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteProductOutput(data, context);
  const response: DeleteProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteProductCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.servicecatalog#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TagOptionNotMigratedException":
    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
      throw await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteProvisionedProductPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProvisionedProductPlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteProvisionedProductPlanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteProvisionedProductPlanOutput(data, context);
  const response: DeleteProvisionedProductPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteProvisionedProductPlanCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteProvisioningArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProvisioningArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteProvisioningArtifactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteProvisioningArtifactOutput(data, context);
  const response: DeleteProvisioningArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteProvisioningArtifactCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.servicecatalog#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteServiceActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteServiceActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteServiceActionOutput(data, context);
  const response: DeleteServiceActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteServiceActionCommandError = async (
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
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteTagOptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagOptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteTagOptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTagOptionOutput(data, context);
  const response: DeleteTagOptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteTagOptionCommandError = async (
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
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TagOptionNotMigratedException":
    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
      throw await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeConstraintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConstraintCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeConstraintCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeConstraintOutput(data, context);
  const response: DescribeConstraintCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeConstraintCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeCopyProductStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCopyProductStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeCopyProductStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCopyProductStatusOutput(data, context);
  const response: DescribeCopyProductStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeCopyProductStatusCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribePortfolioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePortfolioCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribePortfolioCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePortfolioOutput(data, context);
  const response: DescribePortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribePortfolioCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribePortfolioSharesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePortfolioSharesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribePortfolioSharesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePortfolioSharesOutput(data, context);
  const response: DescribePortfolioSharesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribePortfolioSharesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribePortfolioShareStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePortfolioShareStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribePortfolioShareStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePortfolioShareStatusOutput(data, context);
  const response: DescribePortfolioShareStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribePortfolioShareStatusCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.servicecatalog#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProductCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeProductCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeProductOutput(data, context);
  const response: DescribeProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeProductCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeProductAsAdminCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProductAsAdminCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeProductAsAdminCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeProductAsAdminOutput(data, context);
  const response: DescribeProductAsAdminCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeProductAsAdminCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeProductViewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProductViewCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeProductViewCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeProductViewOutput(data, context);
  const response: DescribeProductViewCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeProductViewCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeProvisionedProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProvisionedProductCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeProvisionedProductCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeProvisionedProductOutput(data, context);
  const response: DescribeProvisionedProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeProvisionedProductCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeProvisionedProductPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProvisionedProductPlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeProvisionedProductPlanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeProvisionedProductPlanOutput(data, context);
  const response: DescribeProvisionedProductPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeProvisionedProductPlanCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeProvisioningArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProvisioningArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeProvisioningArtifactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeProvisioningArtifactOutput(data, context);
  const response: DescribeProvisioningArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeProvisioningArtifactCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeProvisioningParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProvisioningParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeProvisioningParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeProvisioningParametersOutput(data, context);
  const response: DescribeProvisioningParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeProvisioningParametersCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecordCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeRecordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeRecordOutput(data, context);
  const response: DescribeRecordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeRecordCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeServiceActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeServiceActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeServiceActionOutput(data, context);
  const response: DescribeServiceActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeServiceActionCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeServiceActionExecutionParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceActionExecutionParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeServiceActionExecutionParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeServiceActionExecutionParametersOutput(data, context);
  const response: DescribeServiceActionExecutionParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeServiceActionExecutionParametersCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeTagOptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagOptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeTagOptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTagOptionOutput(data, context);
  const response: DescribeTagOptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTagOptionCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TagOptionNotMigratedException":
    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
      throw await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisableAWSOrganizationsAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableAWSOrganizationsAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisableAWSOrganizationsAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisableAWSOrganizationsAccessOutput(data, context);
  const response: DisableAWSOrganizationsAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisableAWSOrganizationsAccessCommandError = async (
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
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.servicecatalog#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisassociateBudgetFromResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateBudgetFromResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateBudgetFromResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateBudgetFromResourceOutput(data, context);
  const response: DisassociateBudgetFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateBudgetFromResourceCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisassociatePrincipalFromPortfolioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociatePrincipalFromPortfolioCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociatePrincipalFromPortfolioCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociatePrincipalFromPortfolioOutput(data, context);
  const response: DisassociatePrincipalFromPortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociatePrincipalFromPortfolioCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisassociateProductFromPortfolioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateProductFromPortfolioCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateProductFromPortfolioCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateProductFromPortfolioOutput(data, context);
  const response: DisassociateProductFromPortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateProductFromPortfolioCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.servicecatalog#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateServiceActionFromProvisioningArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactOutput(data, context);
  const response: DisassociateServiceActionFromProvisioningArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisassociateTagOptionFromResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTagOptionFromResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateTagOptionFromResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateTagOptionFromResourceOutput(data, context);
  const response: DisassociateTagOptionFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateTagOptionFromResourceCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TagOptionNotMigratedException":
    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
      throw await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1EnableAWSOrganizationsAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAWSOrganizationsAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1EnableAWSOrganizationsAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EnableAWSOrganizationsAccessOutput(data, context);
  const response: EnableAWSOrganizationsAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EnableAWSOrganizationsAccessCommandError = async (
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
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.servicecatalog#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ExecuteProvisionedProductPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteProvisionedProductPlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ExecuteProvisionedProductPlanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ExecuteProvisionedProductPlanOutput(data, context);
  const response: ExecuteProvisionedProductPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ExecuteProvisionedProductPlanCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.servicecatalog#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ExecuteProvisionedProductServiceActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteProvisionedProductServiceActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ExecuteProvisionedProductServiceActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ExecuteProvisionedProductServiceActionOutput(data, context);
  const response: ExecuteProvisionedProductServiceActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ExecuteProvisionedProductServiceActionCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.servicecatalog#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetAWSOrganizationsAccessStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAWSOrganizationsAccessStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAWSOrganizationsAccessStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAWSOrganizationsAccessStatusOutput(data, context);
  const response: GetAWSOrganizationsAccessStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAWSOrganizationsAccessStatusCommandError = async (
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
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetProvisionedProductOutputsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProvisionedProductOutputsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetProvisionedProductOutputsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetProvisionedProductOutputsOutput(data, context);
  const response: GetProvisionedProductOutputsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetProvisionedProductOutputsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ImportAsProvisionedProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportAsProvisionedProductCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ImportAsProvisionedProductCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportAsProvisionedProductOutput(data, context);
  const response: ImportAsProvisionedProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ImportAsProvisionedProductCommandError = async (
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
      throw await deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.servicecatalog#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListAcceptedPortfolioSharesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAcceptedPortfolioSharesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAcceptedPortfolioSharesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAcceptedPortfolioSharesOutput(data, context);
  const response: ListAcceptedPortfolioSharesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAcceptedPortfolioSharesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.servicecatalog#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListBudgetsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBudgetsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListBudgetsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListBudgetsForResourceOutput(data, context);
  const response: ListBudgetsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListBudgetsForResourceCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListConstraintsForPortfolioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConstraintsForPortfolioCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListConstraintsForPortfolioCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListConstraintsForPortfolioOutput(data, context);
  const response: ListConstraintsForPortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListConstraintsForPortfolioCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListLaunchPathsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLaunchPathsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListLaunchPathsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListLaunchPathsOutput(data, context);
  const response: ListLaunchPathsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListLaunchPathsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListOrganizationPortfolioAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationPortfolioAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListOrganizationPortfolioAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListOrganizationPortfolioAccessOutput(data, context);
  const response: ListOrganizationPortfolioAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListOrganizationPortfolioAccessCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.servicecatalog#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListPortfolioAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPortfolioAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPortfolioAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPortfolioAccessOutput(data, context);
  const response: ListPortfolioAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPortfolioAccessCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListPortfoliosCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPortfoliosCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPortfoliosCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPortfoliosOutput(data, context);
  const response: ListPortfoliosCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPortfoliosCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListPortfoliosForProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPortfoliosForProductCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPortfoliosForProductCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPortfoliosForProductOutput(data, context);
  const response: ListPortfoliosForProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPortfoliosForProductCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListPrincipalsForPortfolioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPrincipalsForPortfolioCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPrincipalsForPortfolioCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPrincipalsForPortfolioOutput(data, context);
  const response: ListPrincipalsForPortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPrincipalsForPortfolioCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListProvisionedProductPlansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisionedProductPlansCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListProvisionedProductPlansCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListProvisionedProductPlansOutput(data, context);
  const response: ListProvisionedProductPlansCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListProvisionedProductPlansCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListProvisioningArtifactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisioningArtifactsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListProvisioningArtifactsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListProvisioningArtifactsOutput(data, context);
  const response: ListProvisioningArtifactsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListProvisioningArtifactsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisioningArtifactsForServiceActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListProvisioningArtifactsForServiceActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListProvisioningArtifactsForServiceActionOutput(data, context);
  const response: ListProvisioningArtifactsForServiceActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListProvisioningArtifactsForServiceActionCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListRecordHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecordHistoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListRecordHistoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRecordHistoryOutput(data, context);
  const response: ListRecordHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRecordHistoryCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListResourcesForTagOptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesForTagOptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListResourcesForTagOptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListResourcesForTagOptionOutput(data, context);
  const response: ListResourcesForTagOptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListResourcesForTagOptionCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TagOptionNotMigratedException":
    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
      throw await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListServiceActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListServiceActionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListServiceActionsOutput(data, context);
  const response: ListServiceActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListServiceActionsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceActionsForProvisioningArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListServiceActionsForProvisioningArtifactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListServiceActionsForProvisioningArtifactOutput(data, context);
  const response: ListServiceActionsForProvisioningArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListServiceActionsForProvisioningArtifactCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListStackInstancesForProvisionedProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStackInstancesForProvisionedProductCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListStackInstancesForProvisionedProductCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListStackInstancesForProvisionedProductOutput(data, context);
  const response: ListStackInstancesForProvisionedProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListStackInstancesForProvisionedProductCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTagOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagOptionsOutput(data, context);
  const response: ListTagOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagOptionsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "TagOptionNotMigratedException":
    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
      throw await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ProvisionProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ProvisionProductCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ProvisionProductCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ProvisionProductOutput(data, context);
  const response: ProvisionProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ProvisionProductCommandError = async (
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
      throw await deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RejectPortfolioShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectPortfolioShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RejectPortfolioShareCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RejectPortfolioShareOutput(data, context);
  const response: RejectPortfolioShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RejectPortfolioShareCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ScanProvisionedProductsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ScanProvisionedProductsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ScanProvisionedProductsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ScanProvisionedProductsOutput(data, context);
  const response: ScanProvisionedProductsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ScanProvisionedProductsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1SearchProductsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchProductsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchProductsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchProductsOutput(data, context);
  const response: SearchProductsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SearchProductsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1SearchProductsAsAdminCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchProductsAsAdminCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchProductsAsAdminCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchProductsAsAdminOutput(data, context);
  const response: SearchProductsAsAdminCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SearchProductsAsAdminCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1SearchProvisionedProductsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchProvisionedProductsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchProvisionedProductsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchProvisionedProductsOutput(data, context);
  const response: SearchProvisionedProductsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SearchProvisionedProductsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TerminateProvisionedProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateProvisionedProductCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TerminateProvisionedProductCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TerminateProvisionedProductOutput(data, context);
  const response: TerminateProvisionedProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TerminateProvisionedProductCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateConstraintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConstraintCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateConstraintCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateConstraintOutput(data, context);
  const response: UpdateConstraintCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateConstraintCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdatePortfolioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePortfolioCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdatePortfolioCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdatePortfolioOutput(data, context);
  const response: UpdatePortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdatePortfolioCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.servicecatalog#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TagOptionNotMigratedException":
    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
      throw await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdatePortfolioShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePortfolioShareCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdatePortfolioShareCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdatePortfolioShareOutput(data, context);
  const response: UpdatePortfolioShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdatePortfolioShareCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.servicecatalog#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.servicecatalog#OperationNotSupportedException":
      throw await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProductCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateProductCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateProductOutput(data, context);
  const response: UpdateProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateProductCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TagOptionNotMigratedException":
    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
      throw await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateProvisionedProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProvisionedProductCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateProvisionedProductCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateProvisionedProductOutput(data, context);
  const response: UpdateProvisionedProductCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateProvisionedProductCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateProvisionedProductPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProvisionedProductPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateProvisionedProductPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateProvisionedProductPropertiesOutput(data, context);
  const response: UpdateProvisionedProductPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateProvisionedProductPropertiesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.servicecatalog#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateProvisioningArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProvisioningArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateProvisioningArtifactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateProvisioningArtifactOutput(data, context);
  const response: UpdateProvisioningArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateProvisioningArtifactCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateServiceActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateServiceActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateServiceActionOutput(data, context);
  const response: UpdateServiceActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateServiceActionCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateTagOptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTagOptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateTagOptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateTagOptionOutput(data, context);
  const response: UpdateTagOptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateTagOptionCommandError = async (
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
      throw await deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context);
    case "InvalidParametersException":
    case "com.amazonaws.servicecatalog#InvalidParametersException":
      throw await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicecatalog#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TagOptionNotMigratedException":
    case "com.amazonaws.servicecatalog#TagOptionNotMigratedException":
      throw await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1DuplicateResourceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateResourceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DuplicateResourceException(body, context);
  const exception = new DuplicateResourceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidParametersExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParametersException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParametersException(body, context);
  const exception = new InvalidParametersException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidStateException(body, context);
  const exception = new InvalidStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OperationNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationNotSupportedException(body, context);
  const exception = new OperationNotSupportedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(body, context);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TagOptionNotMigratedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagOptionNotMigratedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagOptionNotMigratedException(body, context);
  const exception = new TagOptionNotMigratedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AcceptPortfolioShareInput = (
  input: AcceptPortfolioShareInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PortfolioId != null && { PortfolioId: input.PortfolioId }),
    ...(input.PortfolioShareType != null && { PortfolioShareType: input.PortfolioShareType }),
  };
};

const serializeAws_json1_1AccessLevelFilter = (input: AccessLevelFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1AddTags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1AssociateBudgetWithResourceInput = (
  input: AssociateBudgetWithResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

const serializeAws_json1_1AssociatePrincipalWithPortfolioInput = (
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

const serializeAws_json1_1AssociateProductWithPortfolioInput = (
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

const serializeAws_json1_1AssociateServiceActionWithProvisioningArtifactInput = (
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

const serializeAws_json1_1AssociateTagOptionWithResourceInput = (
  input: AssociateTagOptionWithResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.TagOptionId != null && { TagOptionId: input.TagOptionId }),
  };
};

const serializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactInput = (
  input: BatchAssociateServiceActionWithProvisioningArtifactInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.ServiceActionAssociations != null && {
      ServiceActionAssociations: serializeAws_json1_1ServiceActionAssociations(
        input.ServiceActionAssociations,
        context
      ),
    }),
  };
};

const serializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactInput = (
  input: BatchDisassociateServiceActionFromProvisioningArtifactInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.ServiceActionAssociations != null && {
      ServiceActionAssociations: serializeAws_json1_1ServiceActionAssociations(
        input.ServiceActionAssociations,
        context
      ),
    }),
  };
};

const serializeAws_json1_1CodeStarParameters = (input: CodeStarParameters, context: __SerdeContext): any => {
  return {
    ...(input.ArtifactPath != null && { ArtifactPath: input.ArtifactPath }),
    ...(input.Branch != null && { Branch: input.Branch }),
    ...(input.ConnectionArn != null && { ConnectionArn: input.ConnectionArn }),
    ...(input.Repository != null && { Repository: input.Repository }),
  };
};

const serializeAws_json1_1CopyOptions = (input: (CopyOption | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1CopyProductInput = (input: CopyProductInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.CopyOptions != null && { CopyOptions: serializeAws_json1_1CopyOptions(input.CopyOptions, context) }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.SourceProductArn != null && { SourceProductArn: input.SourceProductArn }),
    ...(input.SourceProvisioningArtifactIdentifiers != null && {
      SourceProvisioningArtifactIdentifiers: serializeAws_json1_1SourceProvisioningArtifactProperties(
        input.SourceProvisioningArtifactIdentifiers,
        context
      ),
    }),
    ...(input.TargetProductId != null && { TargetProductId: input.TargetProductId }),
    ...(input.TargetProductName != null && { TargetProductName: input.TargetProductName }),
  };
};

const serializeAws_json1_1CreateConstraintInput = (input: CreateConstraintInput, context: __SerdeContext): any => {
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

const serializeAws_json1_1CreatePortfolioInput = (input: CreatePortfolioInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.ProviderName != null && { ProviderName: input.ProviderName }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1AddTags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreatePortfolioShareInput = (
  input: CreatePortfolioShareInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.OrganizationNode != null && {
      OrganizationNode: serializeAws_json1_1OrganizationNode(input.OrganizationNode, context),
    }),
    ...(input.PortfolioId != null && { PortfolioId: input.PortfolioId }),
    ...(input.SharePrincipals != null && { SharePrincipals: input.SharePrincipals }),
    ...(input.ShareTagOptions != null && { ShareTagOptions: input.ShareTagOptions }),
  };
};

const serializeAws_json1_1CreateProductInput = (input: CreateProductInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Distributor != null && { Distributor: input.Distributor }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Owner != null && { Owner: input.Owner }),
    ...(input.ProductType != null && { ProductType: input.ProductType }),
    ...(input.ProvisioningArtifactParameters != null && {
      ProvisioningArtifactParameters: serializeAws_json1_1ProvisioningArtifactProperties(
        input.ProvisioningArtifactParameters,
        context
      ),
    }),
    ...(input.SourceConnection != null && {
      SourceConnection: serializeAws_json1_1SourceConnection(input.SourceConnection, context),
    }),
    ...(input.SupportDescription != null && { SupportDescription: input.SupportDescription }),
    ...(input.SupportEmail != null && { SupportEmail: input.SupportEmail }),
    ...(input.SupportUrl != null && { SupportUrl: input.SupportUrl }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1AddTags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateProvisionedProductPlanInput = (
  input: CreateProvisionedProductPlanInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.NotificationArns != null && {
      NotificationArns: serializeAws_json1_1NotificationArns(input.NotificationArns, context),
    }),
    ...(input.PathId != null && { PathId: input.PathId }),
    ...(input.PlanName != null && { PlanName: input.PlanName }),
    ...(input.PlanType != null && { PlanType: input.PlanType }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
    ...(input.ProvisionedProductName != null && { ProvisionedProductName: input.ProvisionedProductName }),
    ...(input.ProvisioningArtifactId != null && { ProvisioningArtifactId: input.ProvisioningArtifactId }),
    ...(input.ProvisioningParameters != null && {
      ProvisioningParameters: serializeAws_json1_1UpdateProvisioningParameters(input.ProvisioningParameters, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateProvisioningArtifactInput = (
  input: CreateProvisioningArtifactInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.Parameters != null && {
      Parameters: serializeAws_json1_1ProvisioningArtifactProperties(input.Parameters, context),
    }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
  };
};

const serializeAws_json1_1CreateServiceActionInput = (
  input: CreateServiceActionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Definition != null && {
      Definition: serializeAws_json1_1ServiceActionDefinitionMap(input.Definition, context),
    }),
    ...(input.DefinitionType != null && { DefinitionType: input.DefinitionType }),
    ...(input.Description != null && { Description: input.Description }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1CreateTagOptionInput = (input: CreateTagOptionInput, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1DeleteConstraintInput = (input: DeleteConstraintInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Id != null && { Id: input.Id }),
  };
};

const serializeAws_json1_1DeletePortfolioInput = (input: DeletePortfolioInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Id != null && { Id: input.Id }),
  };
};

const serializeAws_json1_1DeletePortfolioShareInput = (
  input: DeletePortfolioShareInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.OrganizationNode != null && {
      OrganizationNode: serializeAws_json1_1OrganizationNode(input.OrganizationNode, context),
    }),
    ...(input.PortfolioId != null && { PortfolioId: input.PortfolioId }),
  };
};

const serializeAws_json1_1DeleteProductInput = (input: DeleteProductInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Id != null && { Id: input.Id }),
  };
};

const serializeAws_json1_1DeleteProvisionedProductPlanInput = (
  input: DeleteProvisionedProductPlanInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.IgnoreErrors != null && { IgnoreErrors: input.IgnoreErrors }),
    ...(input.PlanId != null && { PlanId: input.PlanId }),
  };
};

const serializeAws_json1_1DeleteProvisioningArtifactInput = (
  input: DeleteProvisioningArtifactInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
    ...(input.ProvisioningArtifactId != null && { ProvisioningArtifactId: input.ProvisioningArtifactId }),
  };
};

const serializeAws_json1_1DeleteServiceActionInput = (
  input: DeleteServiceActionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Id != null && { Id: input.Id }),
  };
};

const serializeAws_json1_1DeleteTagOptionInput = (input: DeleteTagOptionInput, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
  };
};

const serializeAws_json1_1DescribeConstraintInput = (input: DescribeConstraintInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Id != null && { Id: input.Id }),
  };
};

const serializeAws_json1_1DescribeCopyProductStatusInput = (
  input: DescribeCopyProductStatusInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.CopyProductToken != null && { CopyProductToken: input.CopyProductToken }),
  };
};

const serializeAws_json1_1DescribePortfolioInput = (input: DescribePortfolioInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Id != null && { Id: input.Id }),
  };
};

const serializeAws_json1_1DescribePortfolioSharesInput = (
  input: DescribePortfolioSharesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.PortfolioId != null && { PortfolioId: input.PortfolioId }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1DescribePortfolioShareStatusInput = (
  input: DescribePortfolioShareStatusInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.PortfolioShareToken != null && { PortfolioShareToken: input.PortfolioShareToken }),
  };
};

const serializeAws_json1_1DescribeProductAsAdminInput = (
  input: DescribeProductAsAdminInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SourcePortfolioId != null && { SourcePortfolioId: input.SourcePortfolioId }),
  };
};

const serializeAws_json1_1DescribeProductInput = (input: DescribeProductInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DescribeProductViewInput = (
  input: DescribeProductViewInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Id != null && { Id: input.Id }),
  };
};

const serializeAws_json1_1DescribeProvisionedProductInput = (
  input: DescribeProvisionedProductInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DescribeProvisionedProductPlanInput = (
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

const serializeAws_json1_1DescribeProvisioningArtifactInput = (
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

const serializeAws_json1_1DescribeProvisioningParametersInput = (
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

const serializeAws_json1_1DescribeRecordInput = (input: DescribeRecordInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
  };
};

const serializeAws_json1_1DescribeServiceActionExecutionParametersInput = (
  input: DescribeServiceActionExecutionParametersInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.ProvisionedProductId != null && { ProvisionedProductId: input.ProvisionedProductId }),
    ...(input.ServiceActionId != null && { ServiceActionId: input.ServiceActionId }),
  };
};

const serializeAws_json1_1DescribeServiceActionInput = (
  input: DescribeServiceActionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Id != null && { Id: input.Id }),
  };
};

const serializeAws_json1_1DescribeTagOptionInput = (input: DescribeTagOptionInput, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
  };
};

const serializeAws_json1_1DisableAWSOrganizationsAccessInput = (
  input: DisableAWSOrganizationsAccessInput,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1DisassociateBudgetFromResourceInput = (
  input: DisassociateBudgetFromResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BudgetName != null && { BudgetName: input.BudgetName }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

const serializeAws_json1_1DisassociatePrincipalFromPortfolioInput = (
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

const serializeAws_json1_1DisassociateProductFromPortfolioInput = (
  input: DisassociateProductFromPortfolioInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PortfolioId != null && { PortfolioId: input.PortfolioId }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
  };
};

const serializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactInput = (
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

const serializeAws_json1_1DisassociateTagOptionFromResourceInput = (
  input: DisassociateTagOptionFromResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.TagOptionId != null && { TagOptionId: input.TagOptionId }),
  };
};

const serializeAws_json1_1EnableAWSOrganizationsAccessInput = (
  input: EnableAWSOrganizationsAccessInput,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1ExecuteProvisionedProductPlanInput = (
  input: ExecuteProvisionedProductPlanInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.PlanId != null && { PlanId: input.PlanId }),
  };
};

const serializeAws_json1_1ExecuteProvisionedProductServiceActionInput = (
  input: ExecuteProvisionedProductServiceActionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ExecuteToken: input.ExecuteToken ?? generateIdempotencyToken(),
    ...(input.Parameters != null && {
      Parameters: serializeAws_json1_1ExecutionParameterMap(input.Parameters, context),
    }),
    ...(input.ProvisionedProductId != null && { ProvisionedProductId: input.ProvisionedProductId }),
    ...(input.ServiceActionId != null && { ServiceActionId: input.ServiceActionId }),
  };
};

const serializeAws_json1_1ExecutionParameterMap = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_1ExecutionParameterValueList(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_1ExecutionParameterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1GetAWSOrganizationsAccessStatusInput = (
  input: GetAWSOrganizationsAccessStatusInput,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1GetProvisionedProductOutputsInput = (
  input: GetProvisionedProductOutputsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.OutputKeys != null && { OutputKeys: serializeAws_json1_1OutputKeys(input.OutputKeys, context) }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.ProvisionedProductId != null && { ProvisionedProductId: input.ProvisionedProductId }),
    ...(input.ProvisionedProductName != null && { ProvisionedProductName: input.ProvisionedProductName }),
  };
};

const serializeAws_json1_1ImportAsProvisionedProductInput = (
  input: ImportAsProvisionedProductInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.PhysicalId != null && { PhysicalId: input.PhysicalId }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
    ...(input.ProvisionedProductName != null && { ProvisionedProductName: input.ProvisionedProductName }),
    ...(input.ProvisioningArtifactId != null && { ProvisioningArtifactId: input.ProvisioningArtifactId }),
  };
};

const serializeAws_json1_1ListAcceptedPortfolioSharesInput = (
  input: ListAcceptedPortfolioSharesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.PortfolioShareType != null && { PortfolioShareType: input.PortfolioShareType }),
  };
};

const serializeAws_json1_1ListBudgetsForResourceInput = (
  input: ListBudgetsForResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

const serializeAws_json1_1ListConstraintsForPortfolioInput = (
  input: ListConstraintsForPortfolioInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.PortfolioId != null && { PortfolioId: input.PortfolioId }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
  };
};

const serializeAws_json1_1ListLaunchPathsInput = (input: ListLaunchPathsInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
  };
};

const serializeAws_json1_1ListOrganizationPortfolioAccessInput = (
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

const serializeAws_json1_1ListPortfolioAccessInput = (
  input: ListPortfolioAccessInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.OrganizationParentId != null && { OrganizationParentId: input.OrganizationParentId }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.PortfolioId != null && { PortfolioId: input.PortfolioId }),
  };
};

const serializeAws_json1_1ListPortfoliosForProductInput = (
  input: ListPortfoliosForProductInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
  };
};

const serializeAws_json1_1ListPortfoliosInput = (input: ListPortfoliosInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
  };
};

const serializeAws_json1_1ListPrincipalsForPortfolioInput = (
  input: ListPrincipalsForPortfolioInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.PortfolioId != null && { PortfolioId: input.PortfolioId }),
  };
};

const serializeAws_json1_1ListProvisionedProductPlansInput = (
  input: ListProvisionedProductPlansInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.AccessLevelFilter != null && {
      AccessLevelFilter: serializeAws_json1_1AccessLevelFilter(input.AccessLevelFilter, context),
    }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.ProvisionProductId != null && { ProvisionProductId: input.ProvisionProductId }),
  };
};

const serializeAws_json1_1ListProvisioningArtifactsForServiceActionInput = (
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

const serializeAws_json1_1ListProvisioningArtifactsInput = (
  input: ListProvisioningArtifactsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
  };
};

const serializeAws_json1_1ListRecordHistoryInput = (input: ListRecordHistoryInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.AccessLevelFilter != null && {
      AccessLevelFilter: serializeAws_json1_1AccessLevelFilter(input.AccessLevelFilter, context),
    }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.SearchFilter != null && {
      SearchFilter: serializeAws_json1_1ListRecordHistorySearchFilter(input.SearchFilter, context),
    }),
  };
};

const serializeAws_json1_1ListRecordHistorySearchFilter = (
  input: ListRecordHistorySearchFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1ListResourcesForTagOptionInput = (
  input: ListResourcesForTagOptionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.TagOptionId != null && { TagOptionId: input.TagOptionId }),
  };
};

const serializeAws_json1_1ListServiceActionsForProvisioningArtifactInput = (
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

const serializeAws_json1_1ListServiceActionsInput = (input: ListServiceActionsInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
  };
};

const serializeAws_json1_1ListStackInstancesForProvisionedProductInput = (
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

const serializeAws_json1_1ListTagOptionsFilters = (input: ListTagOptionsFilters, context: __SerdeContext): any => {
  return {
    ...(input.Active != null && { Active: input.Active }),
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1ListTagOptionsInput = (input: ListTagOptionsInput, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1ListTagOptionsFilters(input.Filters, context) }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
  };
};

const serializeAws_json1_1NotificationArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1OrganizationNode = (input: OrganizationNode, context: __SerdeContext): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1OutputKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ProductViewFilters = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [ProductViewFilterBy | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_json1_1ProductViewFilterValues(value, context);
    return acc;
  }, {});
};

const serializeAws_json1_1ProductViewFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ProvisionedProductFilters = (
  input: Record<string, string[]>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: Record<string, any>, [key, value]: [ProvisionedProductViewFilterBy | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = serializeAws_json1_1ProvisionedProductViewFilterValues(value, context);
      return acc;
    },
    {}
  );
};

const serializeAws_json1_1ProvisionedProductProperties = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [PropertyKey | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1ProvisionedProductViewFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ProvisioningArtifactInfo = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1ProvisioningArtifactProperties = (
  input: ProvisioningArtifactProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisableTemplateValidation != null && { DisableTemplateValidation: input.DisableTemplateValidation }),
    ...(input.Info != null && { Info: serializeAws_json1_1ProvisioningArtifactInfo(input.Info, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1ProvisioningParameter = (input: ProvisioningParameter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1ProvisioningParameters = (input: ProvisioningParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ProvisioningParameter(entry, context);
    });
};

const serializeAws_json1_1ProvisioningPreferences = (input: ProvisioningPreferences, context: __SerdeContext): any => {
  return {
    ...(input.StackSetAccounts != null && {
      StackSetAccounts: serializeAws_json1_1StackSetAccounts(input.StackSetAccounts, context),
    }),
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
    ...(input.StackSetRegions != null && {
      StackSetRegions: serializeAws_json1_1StackSetRegions(input.StackSetRegions, context),
    }),
  };
};

const serializeAws_json1_1ProvisionProductInput = (input: ProvisionProductInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.NotificationArns != null && {
      NotificationArns: serializeAws_json1_1NotificationArns(input.NotificationArns, context),
    }),
    ...(input.PathId != null && { PathId: input.PathId }),
    ...(input.PathName != null && { PathName: input.PathName }),
    ...(input.ProductId != null && { ProductId: input.ProductId }),
    ...(input.ProductName != null && { ProductName: input.ProductName }),
    ProvisionToken: input.ProvisionToken ?? generateIdempotencyToken(),
    ...(input.ProvisionedProductName != null && { ProvisionedProductName: input.ProvisionedProductName }),
    ...(input.ProvisioningArtifactId != null && { ProvisioningArtifactId: input.ProvisioningArtifactId }),
    ...(input.ProvisioningArtifactName != null && { ProvisioningArtifactName: input.ProvisioningArtifactName }),
    ...(input.ProvisioningParameters != null && {
      ProvisioningParameters: serializeAws_json1_1ProvisioningParameters(input.ProvisioningParameters, context),
    }),
    ...(input.ProvisioningPreferences != null && {
      ProvisioningPreferences: serializeAws_json1_1ProvisioningPreferences(input.ProvisioningPreferences, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1RejectPortfolioShareInput = (
  input: RejectPortfolioShareInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.PortfolioId != null && { PortfolioId: input.PortfolioId }),
    ...(input.PortfolioShareType != null && { PortfolioShareType: input.PortfolioShareType }),
  };
};

const serializeAws_json1_1ScanProvisionedProductsInput = (
  input: ScanProvisionedProductsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.AccessLevelFilter != null && {
      AccessLevelFilter: serializeAws_json1_1AccessLevelFilter(input.AccessLevelFilter, context),
    }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
  };
};

const serializeAws_json1_1SearchProductsAsAdminInput = (
  input: SearchProductsAsAdminInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Filters != null && { Filters: serializeAws_json1_1ProductViewFilters(input.Filters, context) }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.PortfolioId != null && { PortfolioId: input.PortfolioId }),
    ...(input.ProductSource != null && { ProductSource: input.ProductSource }),
    ...(input.SortBy != null && { SortBy: input.SortBy }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

const serializeAws_json1_1SearchProductsInput = (input: SearchProductsInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Filters != null && { Filters: serializeAws_json1_1ProductViewFilters(input.Filters, context) }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.SortBy != null && { SortBy: input.SortBy }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

const serializeAws_json1_1SearchProvisionedProductsInput = (
  input: SearchProvisionedProductsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.AccessLevelFilter != null && {
      AccessLevelFilter: serializeAws_json1_1AccessLevelFilter(input.AccessLevelFilter, context),
    }),
    ...(input.Filters != null && { Filters: serializeAws_json1_1ProvisionedProductFilters(input.Filters, context) }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.PageToken != null && { PageToken: input.PageToken }),
    ...(input.SortBy != null && { SortBy: input.SortBy }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

const serializeAws_json1_1ServiceActionAssociation = (
  input: ServiceActionAssociation,
  context: __SerdeContext
): any => {
  return {
    ...(input.ProductId != null && { ProductId: input.ProductId }),
    ...(input.ProvisioningArtifactId != null && { ProvisioningArtifactId: input.ProvisioningArtifactId }),
    ...(input.ServiceActionId != null && { ServiceActionId: input.ServiceActionId }),
  };
};

const serializeAws_json1_1ServiceActionAssociations = (
  input: ServiceActionAssociation[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ServiceActionAssociation(entry, context);
    });
};

const serializeAws_json1_1ServiceActionDefinitionMap = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
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

const serializeAws_json1_1SourceConnection = (input: SourceConnection, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionParameters != null && {
      ConnectionParameters: serializeAws_json1_1SourceConnectionParameters(input.ConnectionParameters, context),
    }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1SourceConnectionParameters = (
  input: SourceConnectionParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.CodeStar != null && { CodeStar: serializeAws_json1_1CodeStarParameters(input.CodeStar, context) }),
  };
};

const serializeAws_json1_1SourceProvisioningArtifactProperties = (
  input: Record<string, string>[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1SourceProvisioningArtifactPropertiesMap(entry, context);
    });
};

const serializeAws_json1_1SourceProvisioningArtifactPropertiesMap = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
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

const serializeAws_json1_1StackSetAccounts = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1StackSetRegions = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TerminateProvisionedProductInput = (
  input: TerminateProvisionedProductInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.IgnoreErrors != null && { IgnoreErrors: input.IgnoreErrors }),
    ...(input.ProvisionedProductId != null && { ProvisionedProductId: input.ProvisionedProductId }),
    ...(input.ProvisionedProductName != null && { ProvisionedProductName: input.ProvisionedProductName }),
    ...(input.RetainPhysicalResources != null && { RetainPhysicalResources: input.RetainPhysicalResources }),
    TerminateToken: input.TerminateToken ?? generateIdempotencyToken(),
  };
};

const serializeAws_json1_1UpdateConstraintInput = (input: UpdateConstraintInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Parameters != null && { Parameters: input.Parameters }),
  };
};

const serializeAws_json1_1UpdatePortfolioInput = (input: UpdatePortfolioInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.AddTags != null && { AddTags: serializeAws_json1_1AddTags(input.AddTags, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.ProviderName != null && { ProviderName: input.ProviderName }),
    ...(input.RemoveTags != null && { RemoveTags: serializeAws_json1_1TagKeys(input.RemoveTags, context) }),
  };
};

const serializeAws_json1_1UpdatePortfolioShareInput = (
  input: UpdatePortfolioShareInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.OrganizationNode != null && {
      OrganizationNode: serializeAws_json1_1OrganizationNode(input.OrganizationNode, context),
    }),
    ...(input.PortfolioId != null && { PortfolioId: input.PortfolioId }),
    ...(input.SharePrincipals != null && { SharePrincipals: input.SharePrincipals }),
    ...(input.ShareTagOptions != null && { ShareTagOptions: input.ShareTagOptions }),
  };
};

const serializeAws_json1_1UpdateProductInput = (input: UpdateProductInput, context: __SerdeContext): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.AddTags != null && { AddTags: serializeAws_json1_1AddTags(input.AddTags, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Distributor != null && { Distributor: input.Distributor }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Owner != null && { Owner: input.Owner }),
    ...(input.RemoveTags != null && { RemoveTags: serializeAws_json1_1TagKeys(input.RemoveTags, context) }),
    ...(input.SourceConnection != null && {
      SourceConnection: serializeAws_json1_1SourceConnection(input.SourceConnection, context),
    }),
    ...(input.SupportDescription != null && { SupportDescription: input.SupportDescription }),
    ...(input.SupportEmail != null && { SupportEmail: input.SupportEmail }),
    ...(input.SupportUrl != null && { SupportUrl: input.SupportUrl }),
  };
};

const serializeAws_json1_1UpdateProvisionedProductInput = (
  input: UpdateProvisionedProductInput,
  context: __SerdeContext
): any => {
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
      ProvisioningParameters: serializeAws_json1_1UpdateProvisioningParameters(input.ProvisioningParameters, context),
    }),
    ...(input.ProvisioningPreferences != null && {
      ProvisioningPreferences: serializeAws_json1_1UpdateProvisioningPreferences(
        input.ProvisioningPreferences,
        context
      ),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    UpdateToken: input.UpdateToken ?? generateIdempotencyToken(),
  };
};

const serializeAws_json1_1UpdateProvisionedProductPropertiesInput = (
  input: UpdateProvisionedProductPropertiesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.ProvisionedProductId != null && { ProvisionedProductId: input.ProvisionedProductId }),
    ...(input.ProvisionedProductProperties != null && {
      ProvisionedProductProperties: serializeAws_json1_1ProvisionedProductProperties(
        input.ProvisionedProductProperties,
        context
      ),
    }),
  };
};

const serializeAws_json1_1UpdateProvisioningArtifactInput = (
  input: UpdateProvisioningArtifactInput,
  context: __SerdeContext
): any => {
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

const serializeAws_json1_1UpdateProvisioningParameter = (
  input: UpdateProvisioningParameter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.UsePreviousValue != null && { UsePreviousValue: input.UsePreviousValue }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1UpdateProvisioningParameters = (
  input: UpdateProvisioningParameter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1UpdateProvisioningParameter(entry, context);
    });
};

const serializeAws_json1_1UpdateProvisioningPreferences = (
  input: UpdateProvisioningPreferences,
  context: __SerdeContext
): any => {
  return {
    ...(input.StackSetAccounts != null && {
      StackSetAccounts: serializeAws_json1_1StackSetAccounts(input.StackSetAccounts, context),
    }),
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
    ...(input.StackSetRegions != null && {
      StackSetRegions: serializeAws_json1_1StackSetRegions(input.StackSetRegions, context),
    }),
  };
};

const serializeAws_json1_1UpdateServiceActionInput = (
  input: UpdateServiceActionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptLanguage != null && { AcceptLanguage: input.AcceptLanguage }),
    ...(input.Definition != null && {
      Definition: serializeAws_json1_1ServiceActionDefinitionMap(input.Definition, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1UpdateTagOptionInput = (input: UpdateTagOptionInput, context: __SerdeContext): any => {
  return {
    ...(input.Active != null && { Active: input.Active }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const deserializeAws_json1_1AcceptPortfolioShareOutput = (
  output: any,
  context: __SerdeContext
): AcceptPortfolioShareOutput => {
  return {} as any;
};

const deserializeAws_json1_1AccountIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1AllowedValues = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1AssociateBudgetWithResourceOutput = (
  output: any,
  context: __SerdeContext
): AssociateBudgetWithResourceOutput => {
  return {} as any;
};

const deserializeAws_json1_1AssociatePrincipalWithPortfolioOutput = (
  output: any,
  context: __SerdeContext
): AssociatePrincipalWithPortfolioOutput => {
  return {} as any;
};

const deserializeAws_json1_1AssociateProductWithPortfolioOutput = (
  output: any,
  context: __SerdeContext
): AssociateProductWithPortfolioOutput => {
  return {} as any;
};

const deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactOutput = (
  output: any,
  context: __SerdeContext
): AssociateServiceActionWithProvisioningArtifactOutput => {
  return {} as any;
};

const deserializeAws_json1_1AssociateTagOptionWithResourceOutput = (
  output: any,
  context: __SerdeContext
): AssociateTagOptionWithResourceOutput => {
  return {} as any;
};

const deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactOutput = (
  output: any,
  context: __SerdeContext
): BatchAssociateServiceActionWithProvisioningArtifactOutput => {
  return {
    FailedServiceActionAssociations:
      output.FailedServiceActionAssociations != null
        ? deserializeAws_json1_1FailedServiceActionAssociations(output.FailedServiceActionAssociations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactOutput = (
  output: any,
  context: __SerdeContext
): BatchDisassociateServiceActionFromProvisioningArtifactOutput => {
  return {
    FailedServiceActionAssociations:
      output.FailedServiceActionAssociations != null
        ? deserializeAws_json1_1FailedServiceActionAssociations(output.FailedServiceActionAssociations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BudgetDetail = (output: any, context: __SerdeContext): BudgetDetail => {
  return {
    BudgetName: __expectString(output.BudgetName),
  } as any;
};

const deserializeAws_json1_1Budgets = (output: any, context: __SerdeContext): BudgetDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BudgetDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CloudWatchDashboard = (output: any, context: __SerdeContext): CloudWatchDashboard => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1CloudWatchDashboards = (output: any, context: __SerdeContext): CloudWatchDashboard[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CloudWatchDashboard(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CodeStarParameters = (output: any, context: __SerdeContext): CodeStarParameters => {
  return {
    ArtifactPath: __expectString(output.ArtifactPath),
    Branch: __expectString(output.Branch),
    ConnectionArn: __expectString(output.ConnectionArn),
    Repository: __expectString(output.Repository),
  } as any;
};

const deserializeAws_json1_1ConstraintDetail = (output: any, context: __SerdeContext): ConstraintDetail => {
  return {
    ConstraintId: __expectString(output.ConstraintId),
    Description: __expectString(output.Description),
    Owner: __expectString(output.Owner),
    PortfolioId: __expectString(output.PortfolioId),
    ProductId: __expectString(output.ProductId),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1ConstraintDetails = (output: any, context: __SerdeContext): ConstraintDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConstraintDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConstraintSummaries = (output: any, context: __SerdeContext): ConstraintSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConstraintSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConstraintSummary = (output: any, context: __SerdeContext): ConstraintSummary => {
  return {
    Description: __expectString(output.Description),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1CopyProductOutput = (output: any, context: __SerdeContext): CopyProductOutput => {
  return {
    CopyProductToken: __expectString(output.CopyProductToken),
  } as any;
};

const deserializeAws_json1_1CreateConstraintOutput = (output: any, context: __SerdeContext): CreateConstraintOutput => {
  return {
    ConstraintDetail:
      output.ConstraintDetail != null
        ? deserializeAws_json1_1ConstraintDetail(output.ConstraintDetail, context)
        : undefined,
    ConstraintParameters: __expectString(output.ConstraintParameters),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1CreatePortfolioOutput = (output: any, context: __SerdeContext): CreatePortfolioOutput => {
  return {
    PortfolioDetail:
      output.PortfolioDetail != null
        ? deserializeAws_json1_1PortfolioDetail(output.PortfolioDetail, context)
        : undefined,
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreatePortfolioShareOutput = (
  output: any,
  context: __SerdeContext
): CreatePortfolioShareOutput => {
  return {
    PortfolioShareToken: __expectString(output.PortfolioShareToken),
  } as any;
};

const deserializeAws_json1_1CreateProductOutput = (output: any, context: __SerdeContext): CreateProductOutput => {
  return {
    ProductViewDetail:
      output.ProductViewDetail != null
        ? deserializeAws_json1_1ProductViewDetail(output.ProductViewDetail, context)
        : undefined,
    ProvisioningArtifactDetail:
      output.ProvisioningArtifactDetail != null
        ? deserializeAws_json1_1ProvisioningArtifactDetail(output.ProvisioningArtifactDetail, context)
        : undefined,
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateProvisionedProductPlanOutput = (
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

const deserializeAws_json1_1CreateProvisioningArtifactOutput = (
  output: any,
  context: __SerdeContext
): CreateProvisioningArtifactOutput => {
  return {
    Info: output.Info != null ? deserializeAws_json1_1ProvisioningArtifactInfo(output.Info, context) : undefined,
    ProvisioningArtifactDetail:
      output.ProvisioningArtifactDetail != null
        ? deserializeAws_json1_1ProvisioningArtifactDetail(output.ProvisioningArtifactDetail, context)
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1CreateServiceActionOutput = (
  output: any,
  context: __SerdeContext
): CreateServiceActionOutput => {
  return {
    ServiceActionDetail:
      output.ServiceActionDetail != null
        ? deserializeAws_json1_1ServiceActionDetail(output.ServiceActionDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateTagOptionOutput = (output: any, context: __SerdeContext): CreateTagOptionOutput => {
  return {
    TagOptionDetail:
      output.TagOptionDetail != null
        ? deserializeAws_json1_1TagOptionDetail(output.TagOptionDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteConstraintOutput = (output: any, context: __SerdeContext): DeleteConstraintOutput => {
  return {} as any;
};

const deserializeAws_json1_1DeletePortfolioOutput = (output: any, context: __SerdeContext): DeletePortfolioOutput => {
  return {} as any;
};

const deserializeAws_json1_1DeletePortfolioShareOutput = (
  output: any,
  context: __SerdeContext
): DeletePortfolioShareOutput => {
  return {
    PortfolioShareToken: __expectString(output.PortfolioShareToken),
  } as any;
};

const deserializeAws_json1_1DeleteProductOutput = (output: any, context: __SerdeContext): DeleteProductOutput => {
  return {} as any;
};

const deserializeAws_json1_1DeleteProvisionedProductPlanOutput = (
  output: any,
  context: __SerdeContext
): DeleteProvisionedProductPlanOutput => {
  return {} as any;
};

const deserializeAws_json1_1DeleteProvisioningArtifactOutput = (
  output: any,
  context: __SerdeContext
): DeleteProvisioningArtifactOutput => {
  return {} as any;
};

const deserializeAws_json1_1DeleteServiceActionOutput = (
  output: any,
  context: __SerdeContext
): DeleteServiceActionOutput => {
  return {} as any;
};

const deserializeAws_json1_1DeleteTagOptionOutput = (output: any, context: __SerdeContext): DeleteTagOptionOutput => {
  return {} as any;
};

const deserializeAws_json1_1DescribeConstraintOutput = (
  output: any,
  context: __SerdeContext
): DescribeConstraintOutput => {
  return {
    ConstraintDetail:
      output.ConstraintDetail != null
        ? deserializeAws_json1_1ConstraintDetail(output.ConstraintDetail, context)
        : undefined,
    ConstraintParameters: __expectString(output.ConstraintParameters),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DescribeCopyProductStatusOutput = (
  output: any,
  context: __SerdeContext
): DescribeCopyProductStatusOutput => {
  return {
    CopyProductStatus: __expectString(output.CopyProductStatus),
    StatusDetail: __expectString(output.StatusDetail),
    TargetProductId: __expectString(output.TargetProductId),
  } as any;
};

const deserializeAws_json1_1DescribePortfolioOutput = (
  output: any,
  context: __SerdeContext
): DescribePortfolioOutput => {
  return {
    Budgets: output.Budgets != null ? deserializeAws_json1_1Budgets(output.Budgets, context) : undefined,
    PortfolioDetail:
      output.PortfolioDetail != null
        ? deserializeAws_json1_1PortfolioDetail(output.PortfolioDetail, context)
        : undefined,
    TagOptions:
      output.TagOptions != null ? deserializeAws_json1_1TagOptionDetails(output.TagOptions, context) : undefined,
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribePortfolioSharesOutput = (
  output: any,
  context: __SerdeContext
): DescribePortfolioSharesOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    PortfolioShareDetails:
      output.PortfolioShareDetails != null
        ? deserializeAws_json1_1PortfolioShareDetails(output.PortfolioShareDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribePortfolioShareStatusOutput = (
  output: any,
  context: __SerdeContext
): DescribePortfolioShareStatusOutput => {
  return {
    OrganizationNodeValue: __expectString(output.OrganizationNodeValue),
    PortfolioId: __expectString(output.PortfolioId),
    PortfolioShareToken: __expectString(output.PortfolioShareToken),
    ShareDetails:
      output.ShareDetails != null ? deserializeAws_json1_1ShareDetails(output.ShareDetails, context) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DescribeProductAsAdminOutput = (
  output: any,
  context: __SerdeContext
): DescribeProductAsAdminOutput => {
  return {
    Budgets: output.Budgets != null ? deserializeAws_json1_1Budgets(output.Budgets, context) : undefined,
    ProductViewDetail:
      output.ProductViewDetail != null
        ? deserializeAws_json1_1ProductViewDetail(output.ProductViewDetail, context)
        : undefined,
    ProvisioningArtifactSummaries:
      output.ProvisioningArtifactSummaries != null
        ? deserializeAws_json1_1ProvisioningArtifactSummaries(output.ProvisioningArtifactSummaries, context)
        : undefined,
    TagOptions:
      output.TagOptions != null ? deserializeAws_json1_1TagOptionDetails(output.TagOptions, context) : undefined,
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeProductOutput = (output: any, context: __SerdeContext): DescribeProductOutput => {
  return {
    Budgets: output.Budgets != null ? deserializeAws_json1_1Budgets(output.Budgets, context) : undefined,
    LaunchPaths:
      output.LaunchPaths != null ? deserializeAws_json1_1LaunchPaths(output.LaunchPaths, context) : undefined,
    ProductViewSummary:
      output.ProductViewSummary != null
        ? deserializeAws_json1_1ProductViewSummary(output.ProductViewSummary, context)
        : undefined,
    ProvisioningArtifacts:
      output.ProvisioningArtifacts != null
        ? deserializeAws_json1_1ProvisioningArtifacts(output.ProvisioningArtifacts, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeProductViewOutput = (
  output: any,
  context: __SerdeContext
): DescribeProductViewOutput => {
  return {
    ProductViewSummary:
      output.ProductViewSummary != null
        ? deserializeAws_json1_1ProductViewSummary(output.ProductViewSummary, context)
        : undefined,
    ProvisioningArtifacts:
      output.ProvisioningArtifacts != null
        ? deserializeAws_json1_1ProvisioningArtifacts(output.ProvisioningArtifacts, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeProvisionedProductOutput = (
  output: any,
  context: __SerdeContext
): DescribeProvisionedProductOutput => {
  return {
    CloudWatchDashboards:
      output.CloudWatchDashboards != null
        ? deserializeAws_json1_1CloudWatchDashboards(output.CloudWatchDashboards, context)
        : undefined,
    ProvisionedProductDetail:
      output.ProvisionedProductDetail != null
        ? deserializeAws_json1_1ProvisionedProductDetail(output.ProvisionedProductDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeProvisionedProductPlanOutput = (
  output: any,
  context: __SerdeContext
): DescribeProvisionedProductPlanOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    ProvisionedProductPlanDetails:
      output.ProvisionedProductPlanDetails != null
        ? deserializeAws_json1_1ProvisionedProductPlanDetails(output.ProvisionedProductPlanDetails, context)
        : undefined,
    ResourceChanges:
      output.ResourceChanges != null
        ? deserializeAws_json1_1ResourceChanges(output.ResourceChanges, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeProvisioningArtifactOutput = (
  output: any,
  context: __SerdeContext
): DescribeProvisioningArtifactOutput => {
  return {
    Info: output.Info != null ? deserializeAws_json1_1ProvisioningArtifactInfo(output.Info, context) : undefined,
    ProvisioningArtifactDetail:
      output.ProvisioningArtifactDetail != null
        ? deserializeAws_json1_1ProvisioningArtifactDetail(output.ProvisioningArtifactDetail, context)
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DescribeProvisioningParametersOutput = (
  output: any,
  context: __SerdeContext
): DescribeProvisioningParametersOutput => {
  return {
    ConstraintSummaries:
      output.ConstraintSummaries != null
        ? deserializeAws_json1_1ConstraintSummaries(output.ConstraintSummaries, context)
        : undefined,
    ProvisioningArtifactOutputKeys:
      output.ProvisioningArtifactOutputKeys != null
        ? deserializeAws_json1_1ProvisioningArtifactOutputs(output.ProvisioningArtifactOutputKeys, context)
        : undefined,
    ProvisioningArtifactOutputs:
      output.ProvisioningArtifactOutputs != null
        ? deserializeAws_json1_1ProvisioningArtifactOutputs(output.ProvisioningArtifactOutputs, context)
        : undefined,
    ProvisioningArtifactParameters:
      output.ProvisioningArtifactParameters != null
        ? deserializeAws_json1_1ProvisioningArtifactParameters(output.ProvisioningArtifactParameters, context)
        : undefined,
    ProvisioningArtifactPreferences:
      output.ProvisioningArtifactPreferences != null
        ? deserializeAws_json1_1ProvisioningArtifactPreferences(output.ProvisioningArtifactPreferences, context)
        : undefined,
    TagOptions:
      output.TagOptions != null ? deserializeAws_json1_1TagOptionSummaries(output.TagOptions, context) : undefined,
    UsageInstructions:
      output.UsageInstructions != null
        ? deserializeAws_json1_1UsageInstructions(output.UsageInstructions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeRecordOutput = (output: any, context: __SerdeContext): DescribeRecordOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    RecordDetail:
      output.RecordDetail != null ? deserializeAws_json1_1RecordDetail(output.RecordDetail, context) : undefined,
    RecordOutputs:
      output.RecordOutputs != null ? deserializeAws_json1_1RecordOutputs(output.RecordOutputs, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeServiceActionExecutionParametersOutput = (
  output: any,
  context: __SerdeContext
): DescribeServiceActionExecutionParametersOutput => {
  return {
    ServiceActionParameters:
      output.ServiceActionParameters != null
        ? deserializeAws_json1_1ExecutionParameters(output.ServiceActionParameters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeServiceActionOutput = (
  output: any,
  context: __SerdeContext
): DescribeServiceActionOutput => {
  return {
    ServiceActionDetail:
      output.ServiceActionDetail != null
        ? deserializeAws_json1_1ServiceActionDetail(output.ServiceActionDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeTagOptionOutput = (
  output: any,
  context: __SerdeContext
): DescribeTagOptionOutput => {
  return {
    TagOptionDetail:
      output.TagOptionDetail != null
        ? deserializeAws_json1_1TagOptionDetail(output.TagOptionDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DisableAWSOrganizationsAccessOutput = (
  output: any,
  context: __SerdeContext
): DisableAWSOrganizationsAccessOutput => {
  return {} as any;
};

const deserializeAws_json1_1DisassociateBudgetFromResourceOutput = (
  output: any,
  context: __SerdeContext
): DisassociateBudgetFromResourceOutput => {
  return {} as any;
};

const deserializeAws_json1_1DisassociatePrincipalFromPortfolioOutput = (
  output: any,
  context: __SerdeContext
): DisassociatePrincipalFromPortfolioOutput => {
  return {} as any;
};

const deserializeAws_json1_1DisassociateProductFromPortfolioOutput = (
  output: any,
  context: __SerdeContext
): DisassociateProductFromPortfolioOutput => {
  return {} as any;
};

const deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactOutput = (
  output: any,
  context: __SerdeContext
): DisassociateServiceActionFromProvisioningArtifactOutput => {
  return {} as any;
};

const deserializeAws_json1_1DisassociateTagOptionFromResourceOutput = (
  output: any,
  context: __SerdeContext
): DisassociateTagOptionFromResourceOutput => {
  return {} as any;
};

const deserializeAws_json1_1DuplicateResourceException = (
  output: any,
  context: __SerdeContext
): DuplicateResourceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1EnableAWSOrganizationsAccessOutput = (
  output: any,
  context: __SerdeContext
): EnableAWSOrganizationsAccessOutput => {
  return {} as any;
};

const deserializeAws_json1_1ExecuteProvisionedProductPlanOutput = (
  output: any,
  context: __SerdeContext
): ExecuteProvisionedProductPlanOutput => {
  return {
    RecordDetail:
      output.RecordDetail != null ? deserializeAws_json1_1RecordDetail(output.RecordDetail, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ExecuteProvisionedProductServiceActionOutput = (
  output: any,
  context: __SerdeContext
): ExecuteProvisionedProductServiceActionOutput => {
  return {
    RecordDetail:
      output.RecordDetail != null ? deserializeAws_json1_1RecordDetail(output.RecordDetail, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ExecutionParameter = (output: any, context: __SerdeContext): ExecutionParameter => {
  return {
    DefaultValues:
      output.DefaultValues != null
        ? deserializeAws_json1_1ExecutionParameterValueList(output.DefaultValues, context)
        : undefined,
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1ExecutionParameters = (output: any, context: __SerdeContext): ExecutionParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ExecutionParameter(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ExecutionParameterValueList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1FailedServiceActionAssociation = (
  output: any,
  context: __SerdeContext
): FailedServiceActionAssociation => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    ProductId: __expectString(output.ProductId),
    ProvisioningArtifactId: __expectString(output.ProvisioningArtifactId),
    ServiceActionId: __expectString(output.ServiceActionId),
  } as any;
};

const deserializeAws_json1_1FailedServiceActionAssociations = (
  output: any,
  context: __SerdeContext
): FailedServiceActionAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FailedServiceActionAssociation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GetAWSOrganizationsAccessStatusOutput = (
  output: any,
  context: __SerdeContext
): GetAWSOrganizationsAccessStatusOutput => {
  return {
    AccessStatus: __expectString(output.AccessStatus),
  } as any;
};

const deserializeAws_json1_1GetProvisionedProductOutputsOutput = (
  output: any,
  context: __SerdeContext
): GetProvisionedProductOutputsOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    Outputs: output.Outputs != null ? deserializeAws_json1_1RecordOutputs(output.Outputs, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ImportAsProvisionedProductOutput = (
  output: any,
  context: __SerdeContext
): ImportAsProvisionedProductOutput => {
  return {
    RecordDetail:
      output.RecordDetail != null ? deserializeAws_json1_1RecordDetail(output.RecordDetail, context) : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidParametersException = (
  output: any,
  context: __SerdeContext
): InvalidParametersException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidStateException = (output: any, context: __SerdeContext): InvalidStateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1LastSync = (output: any, context: __SerdeContext): LastSync => {
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

const deserializeAws_json1_1LaunchPath = (output: any, context: __SerdeContext): LaunchPath => {
  return {
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1LaunchPaths = (output: any, context: __SerdeContext): LaunchPath[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LaunchPath(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LaunchPathSummaries = (output: any, context: __SerdeContext): LaunchPathSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LaunchPathSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LaunchPathSummary = (output: any, context: __SerdeContext): LaunchPathSummary => {
  return {
    ConstraintSummaries:
      output.ConstraintSummaries != null
        ? deserializeAws_json1_1ConstraintSummaries(output.ConstraintSummaries, context)
        : undefined,
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListAcceptedPortfolioSharesOutput = (
  output: any,
  context: __SerdeContext
): ListAcceptedPortfolioSharesOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    PortfolioDetails:
      output.PortfolioDetails != null
        ? deserializeAws_json1_1PortfolioDetails(output.PortfolioDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListBudgetsForResourceOutput = (
  output: any,
  context: __SerdeContext
): ListBudgetsForResourceOutput => {
  return {
    Budgets: output.Budgets != null ? deserializeAws_json1_1Budgets(output.Budgets, context) : undefined,
    NextPageToken: __expectString(output.NextPageToken),
  } as any;
};

const deserializeAws_json1_1ListConstraintsForPortfolioOutput = (
  output: any,
  context: __SerdeContext
): ListConstraintsForPortfolioOutput => {
  return {
    ConstraintDetails:
      output.ConstraintDetails != null
        ? deserializeAws_json1_1ConstraintDetails(output.ConstraintDetails, context)
        : undefined,
    NextPageToken: __expectString(output.NextPageToken),
  } as any;
};

const deserializeAws_json1_1ListLaunchPathsOutput = (output: any, context: __SerdeContext): ListLaunchPathsOutput => {
  return {
    LaunchPathSummaries:
      output.LaunchPathSummaries != null
        ? deserializeAws_json1_1LaunchPathSummaries(output.LaunchPathSummaries, context)
        : undefined,
    NextPageToken: __expectString(output.NextPageToken),
  } as any;
};

const deserializeAws_json1_1ListOrganizationPortfolioAccessOutput = (
  output: any,
  context: __SerdeContext
): ListOrganizationPortfolioAccessOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    OrganizationNodes:
      output.OrganizationNodes != null
        ? deserializeAws_json1_1OrganizationNodes(output.OrganizationNodes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListPortfolioAccessOutput = (
  output: any,
  context: __SerdeContext
): ListPortfolioAccessOutput => {
  return {
    AccountIds: output.AccountIds != null ? deserializeAws_json1_1AccountIds(output.AccountIds, context) : undefined,
    NextPageToken: __expectString(output.NextPageToken),
  } as any;
};

const deserializeAws_json1_1ListPortfoliosForProductOutput = (
  output: any,
  context: __SerdeContext
): ListPortfoliosForProductOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    PortfolioDetails:
      output.PortfolioDetails != null
        ? deserializeAws_json1_1PortfolioDetails(output.PortfolioDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListPortfoliosOutput = (output: any, context: __SerdeContext): ListPortfoliosOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    PortfolioDetails:
      output.PortfolioDetails != null
        ? deserializeAws_json1_1PortfolioDetails(output.PortfolioDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListPrincipalsForPortfolioOutput = (
  output: any,
  context: __SerdeContext
): ListPrincipalsForPortfolioOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    Principals: output.Principals != null ? deserializeAws_json1_1Principals(output.Principals, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListProvisionedProductPlansOutput = (
  output: any,
  context: __SerdeContext
): ListProvisionedProductPlansOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    ProvisionedProductPlans:
      output.ProvisionedProductPlans != null
        ? deserializeAws_json1_1ProvisionedProductPlans(output.ProvisionedProductPlans, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListProvisioningArtifactsForServiceActionOutput = (
  output: any,
  context: __SerdeContext
): ListProvisioningArtifactsForServiceActionOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    ProvisioningArtifactViews:
      output.ProvisioningArtifactViews != null
        ? deserializeAws_json1_1ProvisioningArtifactViews(output.ProvisioningArtifactViews, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListProvisioningArtifactsOutput = (
  output: any,
  context: __SerdeContext
): ListProvisioningArtifactsOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    ProvisioningArtifactDetails:
      output.ProvisioningArtifactDetails != null
        ? deserializeAws_json1_1ProvisioningArtifactDetails(output.ProvisioningArtifactDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListRecordHistoryOutput = (
  output: any,
  context: __SerdeContext
): ListRecordHistoryOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    RecordDetails:
      output.RecordDetails != null ? deserializeAws_json1_1RecordDetails(output.RecordDetails, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListResourcesForTagOptionOutput = (
  output: any,
  context: __SerdeContext
): ListResourcesForTagOptionOutput => {
  return {
    PageToken: __expectString(output.PageToken),
    ResourceDetails:
      output.ResourceDetails != null
        ? deserializeAws_json1_1ResourceDetails(output.ResourceDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListServiceActionsForProvisioningArtifactOutput = (
  output: any,
  context: __SerdeContext
): ListServiceActionsForProvisioningArtifactOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    ServiceActionSummaries:
      output.ServiceActionSummaries != null
        ? deserializeAws_json1_1ServiceActionSummaries(output.ServiceActionSummaries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListServiceActionsOutput = (
  output: any,
  context: __SerdeContext
): ListServiceActionsOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    ServiceActionSummaries:
      output.ServiceActionSummaries != null
        ? deserializeAws_json1_1ServiceActionSummaries(output.ServiceActionSummaries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListStackInstancesForProvisionedProductOutput = (
  output: any,
  context: __SerdeContext
): ListStackInstancesForProvisionedProductOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    StackInstances:
      output.StackInstances != null ? deserializeAws_json1_1StackInstances(output.StackInstances, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagOptionsOutput = (output: any, context: __SerdeContext): ListTagOptionsOutput => {
  return {
    PageToken: __expectString(output.PageToken),
    TagOptionDetails:
      output.TagOptionDetails != null
        ? deserializeAws_json1_1TagOptionDetails(output.TagOptionDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Namespaces = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1NotificationArns = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1OperationNotSupportedException = (
  output: any,
  context: __SerdeContext
): OperationNotSupportedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1OrganizationNode = (output: any, context: __SerdeContext): OrganizationNode => {
  return {
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1OrganizationNodes = (output: any, context: __SerdeContext): OrganizationNode[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OrganizationNode(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ParameterConstraints = (output: any, context: __SerdeContext): ParameterConstraints => {
  return {
    AllowedPattern: __expectString(output.AllowedPattern),
    AllowedValues:
      output.AllowedValues != null ? deserializeAws_json1_1AllowedValues(output.AllowedValues, context) : undefined,
    ConstraintDescription: __expectString(output.ConstraintDescription),
    MaxLength: __expectString(output.MaxLength),
    MaxValue: __expectString(output.MaxValue),
    MinLength: __expectString(output.MinLength),
    MinValue: __expectString(output.MinValue),
  } as any;
};

const deserializeAws_json1_1PortfolioDetail = (output: any, context: __SerdeContext): PortfolioDetail => {
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

const deserializeAws_json1_1PortfolioDetails = (output: any, context: __SerdeContext): PortfolioDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PortfolioDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PortfolioShareDetail = (output: any, context: __SerdeContext): PortfolioShareDetail => {
  return {
    Accepted: __expectBoolean(output.Accepted),
    PrincipalId: __expectString(output.PrincipalId),
    SharePrincipals: __expectBoolean(output.SharePrincipals),
    ShareTagOptions: __expectBoolean(output.ShareTagOptions),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1PortfolioShareDetails = (output: any, context: __SerdeContext): PortfolioShareDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PortfolioShareDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Principal = (output: any, context: __SerdeContext): Principal => {
  return {
    PrincipalARN: __expectString(output.PrincipalARN),
    PrincipalType: __expectString(output.PrincipalType),
  } as any;
};

const deserializeAws_json1_1Principals = (output: any, context: __SerdeContext): Principal[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Principal(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ProductViewAggregations = (
  output: any,
  context: __SerdeContext
): Record<string, ProductViewAggregationValue[]> => {
  return Object.entries(output).reduce(
    (acc: Record<string, ProductViewAggregationValue[]>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = deserializeAws_json1_1ProductViewAggregationValues(value, context);
      return acc;
    },
    {}
  );
};

const deserializeAws_json1_1ProductViewAggregationValue = (
  output: any,
  context: __SerdeContext
): ProductViewAggregationValue => {
  return {
    ApproximateCount: __expectInt32(output.ApproximateCount),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1ProductViewAggregationValues = (
  output: any,
  context: __SerdeContext
): ProductViewAggregationValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ProductViewAggregationValue(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ProductViewDetail = (output: any, context: __SerdeContext): ProductViewDetail => {
  return {
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    ProductARN: __expectString(output.ProductARN),
    ProductViewSummary:
      output.ProductViewSummary != null
        ? deserializeAws_json1_1ProductViewSummary(output.ProductViewSummary, context)
        : undefined,
    SourceConnection:
      output.SourceConnection != null
        ? deserializeAws_json1_1SourceConnectionDetail(output.SourceConnection, context)
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1ProductViewDetails = (output: any, context: __SerdeContext): ProductViewDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ProductViewDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ProductViewSummaries = (output: any, context: __SerdeContext): ProductViewSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ProductViewSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ProductViewSummary = (output: any, context: __SerdeContext): ProductViewSummary => {
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

const deserializeAws_json1_1ProvisionedProductAttribute = (
  output: any,
  context: __SerdeContext
): ProvisionedProductAttribute => {
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
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    Type: __expectString(output.Type),
    UserArn: __expectString(output.UserArn),
    UserArnSession: __expectString(output.UserArnSession),
  } as any;
};

const deserializeAws_json1_1ProvisionedProductAttributes = (
  output: any,
  context: __SerdeContext
): ProvisionedProductAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ProvisionedProductAttribute(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ProvisionedProductDetail = (
  output: any,
  context: __SerdeContext
): ProvisionedProductDetail => {
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

const deserializeAws_json1_1ProvisionedProductDetails = (
  output: any,
  context: __SerdeContext
): ProvisionedProductDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ProvisionedProductDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ProvisionedProductPlanDetails = (
  output: any,
  context: __SerdeContext
): ProvisionedProductPlanDetails => {
  return {
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    NotificationArns:
      output.NotificationArns != null
        ? deserializeAws_json1_1NotificationArns(output.NotificationArns, context)
        : undefined,
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
        ? deserializeAws_json1_1UpdateProvisioningParameters(output.ProvisioningParameters, context)
        : undefined,
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    UpdatedTime:
      output.UpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1ProvisionedProductPlans = (
  output: any,
  context: __SerdeContext
): ProvisionedProductPlanSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ProvisionedProductPlanSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ProvisionedProductPlanSummary = (
  output: any,
  context: __SerdeContext
): ProvisionedProductPlanSummary => {
  return {
    PlanId: __expectString(output.PlanId),
    PlanName: __expectString(output.PlanName),
    PlanType: __expectString(output.PlanType),
    ProvisionProductId: __expectString(output.ProvisionProductId),
    ProvisionProductName: __expectString(output.ProvisionProductName),
    ProvisioningArtifactId: __expectString(output.ProvisioningArtifactId),
  } as any;
};

const deserializeAws_json1_1ProvisionedProductProperties = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [PropertyKey | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1ProvisioningArtifact = (output: any, context: __SerdeContext): ProvisioningArtifact => {
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

const deserializeAws_json1_1ProvisioningArtifactDetail = (
  output: any,
  context: __SerdeContext
): ProvisioningArtifactDetail => {
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

const deserializeAws_json1_1ProvisioningArtifactDetails = (
  output: any,
  context: __SerdeContext
): ProvisioningArtifactDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ProvisioningArtifactDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ProvisioningArtifactInfo = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1ProvisioningArtifactOutput = (
  output: any,
  context: __SerdeContext
): ProvisioningArtifactOutput => {
  return {
    Description: __expectString(output.Description),
    Key: __expectString(output.Key),
  } as any;
};

const deserializeAws_json1_1ProvisioningArtifactOutputs = (
  output: any,
  context: __SerdeContext
): ProvisioningArtifactOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ProvisioningArtifactOutput(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ProvisioningArtifactParameter = (
  output: any,
  context: __SerdeContext
): ProvisioningArtifactParameter => {
  return {
    DefaultValue: __expectString(output.DefaultValue),
    Description: __expectString(output.Description),
    IsNoEcho: __expectBoolean(output.IsNoEcho),
    ParameterConstraints:
      output.ParameterConstraints != null
        ? deserializeAws_json1_1ParameterConstraints(output.ParameterConstraints, context)
        : undefined,
    ParameterKey: __expectString(output.ParameterKey),
    ParameterType: __expectString(output.ParameterType),
  } as any;
};

const deserializeAws_json1_1ProvisioningArtifactParameters = (
  output: any,
  context: __SerdeContext
): ProvisioningArtifactParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ProvisioningArtifactParameter(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ProvisioningArtifactPreferences = (
  output: any,
  context: __SerdeContext
): ProvisioningArtifactPreferences => {
  return {
    StackSetAccounts:
      output.StackSetAccounts != null
        ? deserializeAws_json1_1StackSetAccounts(output.StackSetAccounts, context)
        : undefined,
    StackSetRegions:
      output.StackSetRegions != null
        ? deserializeAws_json1_1StackSetRegions(output.StackSetRegions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ProvisioningArtifacts = (output: any, context: __SerdeContext): ProvisioningArtifact[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ProvisioningArtifact(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ProvisioningArtifactSummaries = (
  output: any,
  context: __SerdeContext
): ProvisioningArtifactSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ProvisioningArtifactSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ProvisioningArtifactSummary = (
  output: any,
  context: __SerdeContext
): ProvisioningArtifactSummary => {
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
        ? deserializeAws_json1_1ProvisioningArtifactInfo(output.ProvisioningArtifactMetadata, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ProvisioningArtifactView = (
  output: any,
  context: __SerdeContext
): ProvisioningArtifactView => {
  return {
    ProductViewSummary:
      output.ProductViewSummary != null
        ? deserializeAws_json1_1ProductViewSummary(output.ProductViewSummary, context)
        : undefined,
    ProvisioningArtifact:
      output.ProvisioningArtifact != null
        ? deserializeAws_json1_1ProvisioningArtifact(output.ProvisioningArtifact, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ProvisioningArtifactViews = (
  output: any,
  context: __SerdeContext
): ProvisioningArtifactView[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ProvisioningArtifactView(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ProvisionProductOutput = (output: any, context: __SerdeContext): ProvisionProductOutput => {
  return {
    RecordDetail:
      output.RecordDetail != null ? deserializeAws_json1_1RecordDetail(output.RecordDetail, context) : undefined,
  } as any;
};

const deserializeAws_json1_1RecordDetail = (output: any, context: __SerdeContext): RecordDetail => {
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
    RecordErrors:
      output.RecordErrors != null ? deserializeAws_json1_1RecordErrors(output.RecordErrors, context) : undefined,
    RecordId: __expectString(output.RecordId),
    RecordTags: output.RecordTags != null ? deserializeAws_json1_1RecordTags(output.RecordTags, context) : undefined,
    RecordType: __expectString(output.RecordType),
    Status: __expectString(output.Status),
    UpdatedTime:
      output.UpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1RecordDetails = (output: any, context: __SerdeContext): RecordDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RecordDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RecordError = (output: any, context: __SerdeContext): RecordError => {
  return {
    Code: __expectString(output.Code),
    Description: __expectString(output.Description),
  } as any;
};

const deserializeAws_json1_1RecordErrors = (output: any, context: __SerdeContext): RecordError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RecordError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RecordOutput = (output: any, context: __SerdeContext): RecordOutput => {
  return {
    Description: __expectString(output.Description),
    OutputKey: __expectString(output.OutputKey),
    OutputValue: __expectString(output.OutputValue),
  } as any;
};

const deserializeAws_json1_1RecordOutputs = (output: any, context: __SerdeContext): RecordOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RecordOutput(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RecordTag = (output: any, context: __SerdeContext): RecordTag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1RecordTags = (output: any, context: __SerdeContext): RecordTag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RecordTag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RejectPortfolioShareOutput = (
  output: any,
  context: __SerdeContext
): RejectPortfolioShareOutput => {
  return {} as any;
};

const deserializeAws_json1_1ResourceChange = (output: any, context: __SerdeContext): ResourceChange => {
  return {
    Action: __expectString(output.Action),
    Details: output.Details != null ? deserializeAws_json1_1ResourceChangeDetails(output.Details, context) : undefined,
    LogicalResourceId: __expectString(output.LogicalResourceId),
    PhysicalResourceId: __expectString(output.PhysicalResourceId),
    Replacement: __expectString(output.Replacement),
    ResourceType: __expectString(output.ResourceType),
    Scope: output.Scope != null ? deserializeAws_json1_1Scope(output.Scope, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceChangeDetail = (output: any, context: __SerdeContext): ResourceChangeDetail => {
  return {
    CausingEntity: __expectString(output.CausingEntity),
    Evaluation: __expectString(output.Evaluation),
    Target: output.Target != null ? deserializeAws_json1_1ResourceTargetDefinition(output.Target, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceChangeDetails = (output: any, context: __SerdeContext): ResourceChangeDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResourceChangeDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ResourceChanges = (output: any, context: __SerdeContext): ResourceChange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResourceChange(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ResourceDetail = (output: any, context: __SerdeContext): ResourceDetail => {
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

const deserializeAws_json1_1ResourceDetails = (output: any, context: __SerdeContext): ResourceDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResourceDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceTargetDefinition = (
  output: any,
  context: __SerdeContext
): ResourceTargetDefinition => {
  return {
    Attribute: __expectString(output.Attribute),
    Name: __expectString(output.Name),
    RequiresRecreation: __expectString(output.RequiresRecreation),
  } as any;
};

const deserializeAws_json1_1ScanProvisionedProductsOutput = (
  output: any,
  context: __SerdeContext
): ScanProvisionedProductsOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    ProvisionedProducts:
      output.ProvisionedProducts != null
        ? deserializeAws_json1_1ProvisionedProductDetails(output.ProvisionedProducts, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Scope = (output: any, context: __SerdeContext): (ResourceAttribute | string)[] => {
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

const deserializeAws_json1_1SearchProductsAsAdminOutput = (
  output: any,
  context: __SerdeContext
): SearchProductsAsAdminOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    ProductViewDetails:
      output.ProductViewDetails != null
        ? deserializeAws_json1_1ProductViewDetails(output.ProductViewDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SearchProductsOutput = (output: any, context: __SerdeContext): SearchProductsOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    ProductViewAggregations:
      output.ProductViewAggregations != null
        ? deserializeAws_json1_1ProductViewAggregations(output.ProductViewAggregations, context)
        : undefined,
    ProductViewSummaries:
      output.ProductViewSummaries != null
        ? deserializeAws_json1_1ProductViewSummaries(output.ProductViewSummaries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SearchProvisionedProductsOutput = (
  output: any,
  context: __SerdeContext
): SearchProvisionedProductsOutput => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    ProvisionedProducts:
      output.ProvisionedProducts != null
        ? deserializeAws_json1_1ProvisionedProductAttributes(output.ProvisionedProducts, context)
        : undefined,
    TotalResultsCount: __expectInt32(output.TotalResultsCount),
  } as any;
};

const deserializeAws_json1_1ServiceActionDefinitionMap = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
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

const deserializeAws_json1_1ServiceActionDetail = (output: any, context: __SerdeContext): ServiceActionDetail => {
  return {
    Definition:
      output.Definition != null
        ? deserializeAws_json1_1ServiceActionDefinitionMap(output.Definition, context)
        : undefined,
    ServiceActionSummary:
      output.ServiceActionSummary != null
        ? deserializeAws_json1_1ServiceActionSummary(output.ServiceActionSummary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ServiceActionSummaries = (output: any, context: __SerdeContext): ServiceActionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ServiceActionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ServiceActionSummary = (output: any, context: __SerdeContext): ServiceActionSummary => {
  return {
    DefinitionType: __expectString(output.DefinitionType),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1ShareDetails = (output: any, context: __SerdeContext): ShareDetails => {
  return {
    ShareErrors:
      output.ShareErrors != null ? deserializeAws_json1_1ShareErrors(output.ShareErrors, context) : undefined,
    SuccessfulShares:
      output.SuccessfulShares != null
        ? deserializeAws_json1_1SuccessfulShares(output.SuccessfulShares, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ShareError = (output: any, context: __SerdeContext): ShareError => {
  return {
    Accounts: output.Accounts != null ? deserializeAws_json1_1Namespaces(output.Accounts, context) : undefined,
    Error: __expectString(output.Error),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ShareErrors = (output: any, context: __SerdeContext): ShareError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ShareError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SourceConnectionDetail = (output: any, context: __SerdeContext): SourceConnectionDetail => {
  return {
    ConnectionParameters:
      output.ConnectionParameters != null
        ? deserializeAws_json1_1SourceConnectionParameters(output.ConnectionParameters, context)
        : undefined,
    LastSync: output.LastSync != null ? deserializeAws_json1_1LastSync(output.LastSync, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1SourceConnectionParameters = (
  output: any,
  context: __SerdeContext
): SourceConnectionParameters => {
  return {
    CodeStar: output.CodeStar != null ? deserializeAws_json1_1CodeStarParameters(output.CodeStar, context) : undefined,
  } as any;
};

const deserializeAws_json1_1StackInstance = (output: any, context: __SerdeContext): StackInstance => {
  return {
    Account: __expectString(output.Account),
    Region: __expectString(output.Region),
    StackInstanceStatus: __expectString(output.StackInstanceStatus),
  } as any;
};

const deserializeAws_json1_1StackInstances = (output: any, context: __SerdeContext): StackInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1StackInstance(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StackSetAccounts = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1StackSetRegions = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1SuccessfulShares = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagOptionDetail = (output: any, context: __SerdeContext): TagOptionDetail => {
  return {
    Active: __expectBoolean(output.Active),
    Id: __expectString(output.Id),
    Key: __expectString(output.Key),
    Owner: __expectString(output.Owner),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagOptionDetails = (output: any, context: __SerdeContext): TagOptionDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TagOptionDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TagOptionNotMigratedException = (
  output: any,
  context: __SerdeContext
): TagOptionNotMigratedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1TagOptionSummaries = (output: any, context: __SerdeContext): TagOptionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TagOptionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TagOptionSummary = (output: any, context: __SerdeContext): TagOptionSummary => {
  return {
    Key: __expectString(output.Key),
    Values: output.Values != null ? deserializeAws_json1_1TagOptionValues(output.Values, context) : undefined,
  } as any;
};

const deserializeAws_json1_1TagOptionValues = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1Tags = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TerminateProvisionedProductOutput = (
  output: any,
  context: __SerdeContext
): TerminateProvisionedProductOutput => {
  return {
    RecordDetail:
      output.RecordDetail != null ? deserializeAws_json1_1RecordDetail(output.RecordDetail, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateConstraintOutput = (output: any, context: __SerdeContext): UpdateConstraintOutput => {
  return {
    ConstraintDetail:
      output.ConstraintDetail != null
        ? deserializeAws_json1_1ConstraintDetail(output.ConstraintDetail, context)
        : undefined,
    ConstraintParameters: __expectString(output.ConstraintParameters),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1UpdatePortfolioOutput = (output: any, context: __SerdeContext): UpdatePortfolioOutput => {
  return {
    PortfolioDetail:
      output.PortfolioDetail != null
        ? deserializeAws_json1_1PortfolioDetail(output.PortfolioDetail, context)
        : undefined,
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdatePortfolioShareOutput = (
  output: any,
  context: __SerdeContext
): UpdatePortfolioShareOutput => {
  return {
    PortfolioShareToken: __expectString(output.PortfolioShareToken),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1UpdateProductOutput = (output: any, context: __SerdeContext): UpdateProductOutput => {
  return {
    ProductViewDetail:
      output.ProductViewDetail != null
        ? deserializeAws_json1_1ProductViewDetail(output.ProductViewDetail, context)
        : undefined,
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateProvisionedProductOutput = (
  output: any,
  context: __SerdeContext
): UpdateProvisionedProductOutput => {
  return {
    RecordDetail:
      output.RecordDetail != null ? deserializeAws_json1_1RecordDetail(output.RecordDetail, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateProvisionedProductPropertiesOutput = (
  output: any,
  context: __SerdeContext
): UpdateProvisionedProductPropertiesOutput => {
  return {
    ProvisionedProductId: __expectString(output.ProvisionedProductId),
    ProvisionedProductProperties:
      output.ProvisionedProductProperties != null
        ? deserializeAws_json1_1ProvisionedProductProperties(output.ProvisionedProductProperties, context)
        : undefined,
    RecordId: __expectString(output.RecordId),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1UpdateProvisioningArtifactOutput = (
  output: any,
  context: __SerdeContext
): UpdateProvisioningArtifactOutput => {
  return {
    Info: output.Info != null ? deserializeAws_json1_1ProvisioningArtifactInfo(output.Info, context) : undefined,
    ProvisioningArtifactDetail:
      output.ProvisioningArtifactDetail != null
        ? deserializeAws_json1_1ProvisioningArtifactDetail(output.ProvisioningArtifactDetail, context)
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1UpdateProvisioningParameter = (
  output: any,
  context: __SerdeContext
): UpdateProvisioningParameter => {
  return {
    Key: __expectString(output.Key),
    UsePreviousValue: __expectBoolean(output.UsePreviousValue),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1UpdateProvisioningParameters = (
  output: any,
  context: __SerdeContext
): UpdateProvisioningParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UpdateProvisioningParameter(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1UpdateServiceActionOutput = (
  output: any,
  context: __SerdeContext
): UpdateServiceActionOutput => {
  return {
    ServiceActionDetail:
      output.ServiceActionDetail != null
        ? deserializeAws_json1_1ServiceActionDetail(output.ServiceActionDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateTagOptionOutput = (output: any, context: __SerdeContext): UpdateTagOptionOutput => {
  return {
    TagOptionDetail:
      output.TagOptionDetail != null
        ? deserializeAws_json1_1TagOptionDetail(output.TagOptionDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UsageInstruction = (output: any, context: __SerdeContext): UsageInstruction => {
  return {
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1UsageInstructions = (output: any, context: __SerdeContext): UsageInstruction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UsageInstruction(entry, context);
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
