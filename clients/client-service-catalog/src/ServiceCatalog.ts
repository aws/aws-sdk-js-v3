// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AcceptPortfolioShareCommand,
  AcceptPortfolioShareCommandInput,
  AcceptPortfolioShareCommandOutput,
} from "./commands/AcceptPortfolioShareCommand";
import {
  AssociateBudgetWithResourceCommand,
  AssociateBudgetWithResourceCommandInput,
  AssociateBudgetWithResourceCommandOutput,
} from "./commands/AssociateBudgetWithResourceCommand";
import {
  AssociatePrincipalWithPortfolioCommand,
  AssociatePrincipalWithPortfolioCommandInput,
  AssociatePrincipalWithPortfolioCommandOutput,
} from "./commands/AssociatePrincipalWithPortfolioCommand";
import {
  AssociateProductWithPortfolioCommand,
  AssociateProductWithPortfolioCommandInput,
  AssociateProductWithPortfolioCommandOutput,
} from "./commands/AssociateProductWithPortfolioCommand";
import {
  AssociateServiceActionWithProvisioningArtifactCommand,
  AssociateServiceActionWithProvisioningArtifactCommandInput,
  AssociateServiceActionWithProvisioningArtifactCommandOutput,
} from "./commands/AssociateServiceActionWithProvisioningArtifactCommand";
import {
  AssociateTagOptionWithResourceCommand,
  AssociateTagOptionWithResourceCommandInput,
  AssociateTagOptionWithResourceCommandOutput,
} from "./commands/AssociateTagOptionWithResourceCommand";
import {
  BatchAssociateServiceActionWithProvisioningArtifactCommand,
  BatchAssociateServiceActionWithProvisioningArtifactCommandInput,
  BatchAssociateServiceActionWithProvisioningArtifactCommandOutput,
} from "./commands/BatchAssociateServiceActionWithProvisioningArtifactCommand";
import {
  BatchDisassociateServiceActionFromProvisioningArtifactCommand,
  BatchDisassociateServiceActionFromProvisioningArtifactCommandInput,
  BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput,
} from "./commands/BatchDisassociateServiceActionFromProvisioningArtifactCommand";
import { CopyProductCommand, CopyProductCommandInput, CopyProductCommandOutput } from "./commands/CopyProductCommand";
import {
  CreateConstraintCommand,
  CreateConstraintCommandInput,
  CreateConstraintCommandOutput,
} from "./commands/CreateConstraintCommand";
import {
  CreatePortfolioCommand,
  CreatePortfolioCommandInput,
  CreatePortfolioCommandOutput,
} from "./commands/CreatePortfolioCommand";
import {
  CreatePortfolioShareCommand,
  CreatePortfolioShareCommandInput,
  CreatePortfolioShareCommandOutput,
} from "./commands/CreatePortfolioShareCommand";
import {
  CreateProductCommand,
  CreateProductCommandInput,
  CreateProductCommandOutput,
} from "./commands/CreateProductCommand";
import {
  CreateProvisionedProductPlanCommand,
  CreateProvisionedProductPlanCommandInput,
  CreateProvisionedProductPlanCommandOutput,
} from "./commands/CreateProvisionedProductPlanCommand";
import {
  CreateProvisioningArtifactCommand,
  CreateProvisioningArtifactCommandInput,
  CreateProvisioningArtifactCommandOutput,
} from "./commands/CreateProvisioningArtifactCommand";
import {
  CreateServiceActionCommand,
  CreateServiceActionCommandInput,
  CreateServiceActionCommandOutput,
} from "./commands/CreateServiceActionCommand";
import {
  CreateTagOptionCommand,
  CreateTagOptionCommandInput,
  CreateTagOptionCommandOutput,
} from "./commands/CreateTagOptionCommand";
import {
  DeleteConstraintCommand,
  DeleteConstraintCommandInput,
  DeleteConstraintCommandOutput,
} from "./commands/DeleteConstraintCommand";
import {
  DeletePortfolioCommand,
  DeletePortfolioCommandInput,
  DeletePortfolioCommandOutput,
} from "./commands/DeletePortfolioCommand";
import {
  DeletePortfolioShareCommand,
  DeletePortfolioShareCommandInput,
  DeletePortfolioShareCommandOutput,
} from "./commands/DeletePortfolioShareCommand";
import {
  DeleteProductCommand,
  DeleteProductCommandInput,
  DeleteProductCommandOutput,
} from "./commands/DeleteProductCommand";
import {
  DeleteProvisionedProductPlanCommand,
  DeleteProvisionedProductPlanCommandInput,
  DeleteProvisionedProductPlanCommandOutput,
} from "./commands/DeleteProvisionedProductPlanCommand";
import {
  DeleteProvisioningArtifactCommand,
  DeleteProvisioningArtifactCommandInput,
  DeleteProvisioningArtifactCommandOutput,
} from "./commands/DeleteProvisioningArtifactCommand";
import {
  DeleteServiceActionCommand,
  DeleteServiceActionCommandInput,
  DeleteServiceActionCommandOutput,
} from "./commands/DeleteServiceActionCommand";
import {
  DeleteTagOptionCommand,
  DeleteTagOptionCommandInput,
  DeleteTagOptionCommandOutput,
} from "./commands/DeleteTagOptionCommand";
import {
  DescribeConstraintCommand,
  DescribeConstraintCommandInput,
  DescribeConstraintCommandOutput,
} from "./commands/DescribeConstraintCommand";
import {
  DescribeCopyProductStatusCommand,
  DescribeCopyProductStatusCommandInput,
  DescribeCopyProductStatusCommandOutput,
} from "./commands/DescribeCopyProductStatusCommand";
import {
  DescribePortfolioCommand,
  DescribePortfolioCommandInput,
  DescribePortfolioCommandOutput,
} from "./commands/DescribePortfolioCommand";
import {
  DescribePortfolioSharesCommand,
  DescribePortfolioSharesCommandInput,
  DescribePortfolioSharesCommandOutput,
} from "./commands/DescribePortfolioSharesCommand";
import {
  DescribePortfolioShareStatusCommand,
  DescribePortfolioShareStatusCommandInput,
  DescribePortfolioShareStatusCommandOutput,
} from "./commands/DescribePortfolioShareStatusCommand";
import {
  DescribeProductAsAdminCommand,
  DescribeProductAsAdminCommandInput,
  DescribeProductAsAdminCommandOutput,
} from "./commands/DescribeProductAsAdminCommand";
import {
  DescribeProductCommand,
  DescribeProductCommandInput,
  DescribeProductCommandOutput,
} from "./commands/DescribeProductCommand";
import {
  DescribeProductViewCommand,
  DescribeProductViewCommandInput,
  DescribeProductViewCommandOutput,
} from "./commands/DescribeProductViewCommand";
import {
  DescribeProvisionedProductCommand,
  DescribeProvisionedProductCommandInput,
  DescribeProvisionedProductCommandOutput,
} from "./commands/DescribeProvisionedProductCommand";
import {
  DescribeProvisionedProductPlanCommand,
  DescribeProvisionedProductPlanCommandInput,
  DescribeProvisionedProductPlanCommandOutput,
} from "./commands/DescribeProvisionedProductPlanCommand";
import {
  DescribeProvisioningArtifactCommand,
  DescribeProvisioningArtifactCommandInput,
  DescribeProvisioningArtifactCommandOutput,
} from "./commands/DescribeProvisioningArtifactCommand";
import {
  DescribeProvisioningParametersCommand,
  DescribeProvisioningParametersCommandInput,
  DescribeProvisioningParametersCommandOutput,
} from "./commands/DescribeProvisioningParametersCommand";
import {
  DescribeRecordCommand,
  DescribeRecordCommandInput,
  DescribeRecordCommandOutput,
} from "./commands/DescribeRecordCommand";
import {
  DescribeServiceActionCommand,
  DescribeServiceActionCommandInput,
  DescribeServiceActionCommandOutput,
} from "./commands/DescribeServiceActionCommand";
import {
  DescribeServiceActionExecutionParametersCommand,
  DescribeServiceActionExecutionParametersCommandInput,
  DescribeServiceActionExecutionParametersCommandOutput,
} from "./commands/DescribeServiceActionExecutionParametersCommand";
import {
  DescribeTagOptionCommand,
  DescribeTagOptionCommandInput,
  DescribeTagOptionCommandOutput,
} from "./commands/DescribeTagOptionCommand";
import {
  DisableAWSOrganizationsAccessCommand,
  DisableAWSOrganizationsAccessCommandInput,
  DisableAWSOrganizationsAccessCommandOutput,
} from "./commands/DisableAWSOrganizationsAccessCommand";
import {
  DisassociateBudgetFromResourceCommand,
  DisassociateBudgetFromResourceCommandInput,
  DisassociateBudgetFromResourceCommandOutput,
} from "./commands/DisassociateBudgetFromResourceCommand";
import {
  DisassociatePrincipalFromPortfolioCommand,
  DisassociatePrincipalFromPortfolioCommandInput,
  DisassociatePrincipalFromPortfolioCommandOutput,
} from "./commands/DisassociatePrincipalFromPortfolioCommand";
import {
  DisassociateProductFromPortfolioCommand,
  DisassociateProductFromPortfolioCommandInput,
  DisassociateProductFromPortfolioCommandOutput,
} from "./commands/DisassociateProductFromPortfolioCommand";
import {
  DisassociateServiceActionFromProvisioningArtifactCommand,
  DisassociateServiceActionFromProvisioningArtifactCommandInput,
  DisassociateServiceActionFromProvisioningArtifactCommandOutput,
} from "./commands/DisassociateServiceActionFromProvisioningArtifactCommand";
import {
  DisassociateTagOptionFromResourceCommand,
  DisassociateTagOptionFromResourceCommandInput,
  DisassociateTagOptionFromResourceCommandOutput,
} from "./commands/DisassociateTagOptionFromResourceCommand";
import {
  EnableAWSOrganizationsAccessCommand,
  EnableAWSOrganizationsAccessCommandInput,
  EnableAWSOrganizationsAccessCommandOutput,
} from "./commands/EnableAWSOrganizationsAccessCommand";
import {
  ExecuteProvisionedProductPlanCommand,
  ExecuteProvisionedProductPlanCommandInput,
  ExecuteProvisionedProductPlanCommandOutput,
} from "./commands/ExecuteProvisionedProductPlanCommand";
import {
  ExecuteProvisionedProductServiceActionCommand,
  ExecuteProvisionedProductServiceActionCommandInput,
  ExecuteProvisionedProductServiceActionCommandOutput,
} from "./commands/ExecuteProvisionedProductServiceActionCommand";
import {
  GetAWSOrganizationsAccessStatusCommand,
  GetAWSOrganizationsAccessStatusCommandInput,
  GetAWSOrganizationsAccessStatusCommandOutput,
} from "./commands/GetAWSOrganizationsAccessStatusCommand";
import {
  GetProvisionedProductOutputsCommand,
  GetProvisionedProductOutputsCommandInput,
  GetProvisionedProductOutputsCommandOutput,
} from "./commands/GetProvisionedProductOutputsCommand";
import {
  ImportAsProvisionedProductCommand,
  ImportAsProvisionedProductCommandInput,
  ImportAsProvisionedProductCommandOutput,
} from "./commands/ImportAsProvisionedProductCommand";
import {
  ListAcceptedPortfolioSharesCommand,
  ListAcceptedPortfolioSharesCommandInput,
  ListAcceptedPortfolioSharesCommandOutput,
} from "./commands/ListAcceptedPortfolioSharesCommand";
import {
  ListBudgetsForResourceCommand,
  ListBudgetsForResourceCommandInput,
  ListBudgetsForResourceCommandOutput,
} from "./commands/ListBudgetsForResourceCommand";
import {
  ListConstraintsForPortfolioCommand,
  ListConstraintsForPortfolioCommandInput,
  ListConstraintsForPortfolioCommandOutput,
} from "./commands/ListConstraintsForPortfolioCommand";
import {
  ListLaunchPathsCommand,
  ListLaunchPathsCommandInput,
  ListLaunchPathsCommandOutput,
} from "./commands/ListLaunchPathsCommand";
import {
  ListOrganizationPortfolioAccessCommand,
  ListOrganizationPortfolioAccessCommandInput,
  ListOrganizationPortfolioAccessCommandOutput,
} from "./commands/ListOrganizationPortfolioAccessCommand";
import {
  ListPortfolioAccessCommand,
  ListPortfolioAccessCommandInput,
  ListPortfolioAccessCommandOutput,
} from "./commands/ListPortfolioAccessCommand";
import {
  ListPortfoliosCommand,
  ListPortfoliosCommandInput,
  ListPortfoliosCommandOutput,
} from "./commands/ListPortfoliosCommand";
import {
  ListPortfoliosForProductCommand,
  ListPortfoliosForProductCommandInput,
  ListPortfoliosForProductCommandOutput,
} from "./commands/ListPortfoliosForProductCommand";
import {
  ListPrincipalsForPortfolioCommand,
  ListPrincipalsForPortfolioCommandInput,
  ListPrincipalsForPortfolioCommandOutput,
} from "./commands/ListPrincipalsForPortfolioCommand";
import {
  ListProvisionedProductPlansCommand,
  ListProvisionedProductPlansCommandInput,
  ListProvisionedProductPlansCommandOutput,
} from "./commands/ListProvisionedProductPlansCommand";
import {
  ListProvisioningArtifactsCommand,
  ListProvisioningArtifactsCommandInput,
  ListProvisioningArtifactsCommandOutput,
} from "./commands/ListProvisioningArtifactsCommand";
import {
  ListProvisioningArtifactsForServiceActionCommand,
  ListProvisioningArtifactsForServiceActionCommandInput,
  ListProvisioningArtifactsForServiceActionCommandOutput,
} from "./commands/ListProvisioningArtifactsForServiceActionCommand";
import {
  ListRecordHistoryCommand,
  ListRecordHistoryCommandInput,
  ListRecordHistoryCommandOutput,
} from "./commands/ListRecordHistoryCommand";
import {
  ListResourcesForTagOptionCommand,
  ListResourcesForTagOptionCommandInput,
  ListResourcesForTagOptionCommandOutput,
} from "./commands/ListResourcesForTagOptionCommand";
import {
  ListServiceActionsCommand,
  ListServiceActionsCommandInput,
  ListServiceActionsCommandOutput,
} from "./commands/ListServiceActionsCommand";
import {
  ListServiceActionsForProvisioningArtifactCommand,
  ListServiceActionsForProvisioningArtifactCommandInput,
  ListServiceActionsForProvisioningArtifactCommandOutput,
} from "./commands/ListServiceActionsForProvisioningArtifactCommand";
import {
  ListStackInstancesForProvisionedProductCommand,
  ListStackInstancesForProvisionedProductCommandInput,
  ListStackInstancesForProvisionedProductCommandOutput,
} from "./commands/ListStackInstancesForProvisionedProductCommand";
import {
  ListTagOptionsCommand,
  ListTagOptionsCommandInput,
  ListTagOptionsCommandOutput,
} from "./commands/ListTagOptionsCommand";
import {
  NotifyProvisionProductEngineWorkflowResultCommand,
  NotifyProvisionProductEngineWorkflowResultCommandInput,
  NotifyProvisionProductEngineWorkflowResultCommandOutput,
} from "./commands/NotifyProvisionProductEngineWorkflowResultCommand";
import {
  NotifyTerminateProvisionedProductEngineWorkflowResultCommand,
  NotifyTerminateProvisionedProductEngineWorkflowResultCommandInput,
  NotifyTerminateProvisionedProductEngineWorkflowResultCommandOutput,
} from "./commands/NotifyTerminateProvisionedProductEngineWorkflowResultCommand";
import {
  NotifyUpdateProvisionedProductEngineWorkflowResultCommand,
  NotifyUpdateProvisionedProductEngineWorkflowResultCommandInput,
  NotifyUpdateProvisionedProductEngineWorkflowResultCommandOutput,
} from "./commands/NotifyUpdateProvisionedProductEngineWorkflowResultCommand";
import {
  ProvisionProductCommand,
  ProvisionProductCommandInput,
  ProvisionProductCommandOutput,
} from "./commands/ProvisionProductCommand";
import {
  RejectPortfolioShareCommand,
  RejectPortfolioShareCommandInput,
  RejectPortfolioShareCommandOutput,
} from "./commands/RejectPortfolioShareCommand";
import {
  ScanProvisionedProductsCommand,
  ScanProvisionedProductsCommandInput,
  ScanProvisionedProductsCommandOutput,
} from "./commands/ScanProvisionedProductsCommand";
import {
  SearchProductsAsAdminCommand,
  SearchProductsAsAdminCommandInput,
  SearchProductsAsAdminCommandOutput,
} from "./commands/SearchProductsAsAdminCommand";
import {
  SearchProductsCommand,
  SearchProductsCommandInput,
  SearchProductsCommandOutput,
} from "./commands/SearchProductsCommand";
import {
  SearchProvisionedProductsCommand,
  SearchProvisionedProductsCommandInput,
  SearchProvisionedProductsCommandOutput,
} from "./commands/SearchProvisionedProductsCommand";
import {
  TerminateProvisionedProductCommand,
  TerminateProvisionedProductCommandInput,
  TerminateProvisionedProductCommandOutput,
} from "./commands/TerminateProvisionedProductCommand";
import {
  UpdateConstraintCommand,
  UpdateConstraintCommandInput,
  UpdateConstraintCommandOutput,
} from "./commands/UpdateConstraintCommand";
import {
  UpdatePortfolioCommand,
  UpdatePortfolioCommandInput,
  UpdatePortfolioCommandOutput,
} from "./commands/UpdatePortfolioCommand";
import {
  UpdatePortfolioShareCommand,
  UpdatePortfolioShareCommandInput,
  UpdatePortfolioShareCommandOutput,
} from "./commands/UpdatePortfolioShareCommand";
import {
  UpdateProductCommand,
  UpdateProductCommandInput,
  UpdateProductCommandOutput,
} from "./commands/UpdateProductCommand";
import {
  UpdateProvisionedProductCommand,
  UpdateProvisionedProductCommandInput,
  UpdateProvisionedProductCommandOutput,
} from "./commands/UpdateProvisionedProductCommand";
import {
  UpdateProvisionedProductPropertiesCommand,
  UpdateProvisionedProductPropertiesCommandInput,
  UpdateProvisionedProductPropertiesCommandOutput,
} from "./commands/UpdateProvisionedProductPropertiesCommand";
import {
  UpdateProvisioningArtifactCommand,
  UpdateProvisioningArtifactCommandInput,
  UpdateProvisioningArtifactCommandOutput,
} from "./commands/UpdateProvisioningArtifactCommand";
import {
  UpdateServiceActionCommand,
  UpdateServiceActionCommandInput,
  UpdateServiceActionCommandOutput,
} from "./commands/UpdateServiceActionCommand";
import {
  UpdateTagOptionCommand,
  UpdateTagOptionCommandInput,
  UpdateTagOptionCommandOutput,
} from "./commands/UpdateTagOptionCommand";
import { ServiceCatalogClient, ServiceCatalogClientConfig } from "./ServiceCatalogClient";

const commands = {
  AcceptPortfolioShareCommand,
  AssociateBudgetWithResourceCommand,
  AssociatePrincipalWithPortfolioCommand,
  AssociateProductWithPortfolioCommand,
  AssociateServiceActionWithProvisioningArtifactCommand,
  AssociateTagOptionWithResourceCommand,
  BatchAssociateServiceActionWithProvisioningArtifactCommand,
  BatchDisassociateServiceActionFromProvisioningArtifactCommand,
  CopyProductCommand,
  CreateConstraintCommand,
  CreatePortfolioCommand,
  CreatePortfolioShareCommand,
  CreateProductCommand,
  CreateProvisionedProductPlanCommand,
  CreateProvisioningArtifactCommand,
  CreateServiceActionCommand,
  CreateTagOptionCommand,
  DeleteConstraintCommand,
  DeletePortfolioCommand,
  DeletePortfolioShareCommand,
  DeleteProductCommand,
  DeleteProvisionedProductPlanCommand,
  DeleteProvisioningArtifactCommand,
  DeleteServiceActionCommand,
  DeleteTagOptionCommand,
  DescribeConstraintCommand,
  DescribeCopyProductStatusCommand,
  DescribePortfolioCommand,
  DescribePortfolioSharesCommand,
  DescribePortfolioShareStatusCommand,
  DescribeProductCommand,
  DescribeProductAsAdminCommand,
  DescribeProductViewCommand,
  DescribeProvisionedProductCommand,
  DescribeProvisionedProductPlanCommand,
  DescribeProvisioningArtifactCommand,
  DescribeProvisioningParametersCommand,
  DescribeRecordCommand,
  DescribeServiceActionCommand,
  DescribeServiceActionExecutionParametersCommand,
  DescribeTagOptionCommand,
  DisableAWSOrganizationsAccessCommand,
  DisassociateBudgetFromResourceCommand,
  DisassociatePrincipalFromPortfolioCommand,
  DisassociateProductFromPortfolioCommand,
  DisassociateServiceActionFromProvisioningArtifactCommand,
  DisassociateTagOptionFromResourceCommand,
  EnableAWSOrganizationsAccessCommand,
  ExecuteProvisionedProductPlanCommand,
  ExecuteProvisionedProductServiceActionCommand,
  GetAWSOrganizationsAccessStatusCommand,
  GetProvisionedProductOutputsCommand,
  ImportAsProvisionedProductCommand,
  ListAcceptedPortfolioSharesCommand,
  ListBudgetsForResourceCommand,
  ListConstraintsForPortfolioCommand,
  ListLaunchPathsCommand,
  ListOrganizationPortfolioAccessCommand,
  ListPortfolioAccessCommand,
  ListPortfoliosCommand,
  ListPortfoliosForProductCommand,
  ListPrincipalsForPortfolioCommand,
  ListProvisionedProductPlansCommand,
  ListProvisioningArtifactsCommand,
  ListProvisioningArtifactsForServiceActionCommand,
  ListRecordHistoryCommand,
  ListResourcesForTagOptionCommand,
  ListServiceActionsCommand,
  ListServiceActionsForProvisioningArtifactCommand,
  ListStackInstancesForProvisionedProductCommand,
  ListTagOptionsCommand,
  NotifyProvisionProductEngineWorkflowResultCommand,
  NotifyTerminateProvisionedProductEngineWorkflowResultCommand,
  NotifyUpdateProvisionedProductEngineWorkflowResultCommand,
  ProvisionProductCommand,
  RejectPortfolioShareCommand,
  ScanProvisionedProductsCommand,
  SearchProductsCommand,
  SearchProductsAsAdminCommand,
  SearchProvisionedProductsCommand,
  TerminateProvisionedProductCommand,
  UpdateConstraintCommand,
  UpdatePortfolioCommand,
  UpdatePortfolioShareCommand,
  UpdateProductCommand,
  UpdateProvisionedProductCommand,
  UpdateProvisionedProductPropertiesCommand,
  UpdateProvisioningArtifactCommand,
  UpdateServiceActionCommand,
  UpdateTagOptionCommand,
};

export interface ServiceCatalog {
  /**
   * @see {@link AcceptPortfolioShareCommand}
   */
  acceptPortfolioShare(
    args: AcceptPortfolioShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptPortfolioShareCommandOutput>;
  acceptPortfolioShare(
    args: AcceptPortfolioShareCommandInput,
    cb: (err: any, data?: AcceptPortfolioShareCommandOutput) => void
  ): void;
  acceptPortfolioShare(
    args: AcceptPortfolioShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptPortfolioShareCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateBudgetWithResourceCommand}
   */
  associateBudgetWithResource(
    args: AssociateBudgetWithResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateBudgetWithResourceCommandOutput>;
  associateBudgetWithResource(
    args: AssociateBudgetWithResourceCommandInput,
    cb: (err: any, data?: AssociateBudgetWithResourceCommandOutput) => void
  ): void;
  associateBudgetWithResource(
    args: AssociateBudgetWithResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateBudgetWithResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociatePrincipalWithPortfolioCommand}
   */
  associatePrincipalWithPortfolio(
    args: AssociatePrincipalWithPortfolioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociatePrincipalWithPortfolioCommandOutput>;
  associatePrincipalWithPortfolio(
    args: AssociatePrincipalWithPortfolioCommandInput,
    cb: (err: any, data?: AssociatePrincipalWithPortfolioCommandOutput) => void
  ): void;
  associatePrincipalWithPortfolio(
    args: AssociatePrincipalWithPortfolioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociatePrincipalWithPortfolioCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateProductWithPortfolioCommand}
   */
  associateProductWithPortfolio(
    args: AssociateProductWithPortfolioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateProductWithPortfolioCommandOutput>;
  associateProductWithPortfolio(
    args: AssociateProductWithPortfolioCommandInput,
    cb: (err: any, data?: AssociateProductWithPortfolioCommandOutput) => void
  ): void;
  associateProductWithPortfolio(
    args: AssociateProductWithPortfolioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateProductWithPortfolioCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateServiceActionWithProvisioningArtifactCommand}
   */
  associateServiceActionWithProvisioningArtifact(
    args: AssociateServiceActionWithProvisioningArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateServiceActionWithProvisioningArtifactCommandOutput>;
  associateServiceActionWithProvisioningArtifact(
    args: AssociateServiceActionWithProvisioningArtifactCommandInput,
    cb: (err: any, data?: AssociateServiceActionWithProvisioningArtifactCommandOutput) => void
  ): void;
  associateServiceActionWithProvisioningArtifact(
    args: AssociateServiceActionWithProvisioningArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateServiceActionWithProvisioningArtifactCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateTagOptionWithResourceCommand}
   */
  associateTagOptionWithResource(
    args: AssociateTagOptionWithResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateTagOptionWithResourceCommandOutput>;
  associateTagOptionWithResource(
    args: AssociateTagOptionWithResourceCommandInput,
    cb: (err: any, data?: AssociateTagOptionWithResourceCommandOutput) => void
  ): void;
  associateTagOptionWithResource(
    args: AssociateTagOptionWithResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateTagOptionWithResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchAssociateServiceActionWithProvisioningArtifactCommand}
   */
  batchAssociateServiceActionWithProvisioningArtifact(
    args: BatchAssociateServiceActionWithProvisioningArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchAssociateServiceActionWithProvisioningArtifactCommandOutput>;
  batchAssociateServiceActionWithProvisioningArtifact(
    args: BatchAssociateServiceActionWithProvisioningArtifactCommandInput,
    cb: (err: any, data?: BatchAssociateServiceActionWithProvisioningArtifactCommandOutput) => void
  ): void;
  batchAssociateServiceActionWithProvisioningArtifact(
    args: BatchAssociateServiceActionWithProvisioningArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchAssociateServiceActionWithProvisioningArtifactCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDisassociateServiceActionFromProvisioningArtifactCommand}
   */
  batchDisassociateServiceActionFromProvisioningArtifact(
    args: BatchDisassociateServiceActionFromProvisioningArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput>;
  batchDisassociateServiceActionFromProvisioningArtifact(
    args: BatchDisassociateServiceActionFromProvisioningArtifactCommandInput,
    cb: (err: any, data?: BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput) => void
  ): void;
  batchDisassociateServiceActionFromProvisioningArtifact(
    args: BatchDisassociateServiceActionFromProvisioningArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyProductCommand}
   */
  copyProduct(args: CopyProductCommandInput, options?: __HttpHandlerOptions): Promise<CopyProductCommandOutput>;
  copyProduct(args: CopyProductCommandInput, cb: (err: any, data?: CopyProductCommandOutput) => void): void;
  copyProduct(
    args: CopyProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyProductCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConstraintCommand}
   */
  createConstraint(
    args: CreateConstraintCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConstraintCommandOutput>;
  createConstraint(
    args: CreateConstraintCommandInput,
    cb: (err: any, data?: CreateConstraintCommandOutput) => void
  ): void;
  createConstraint(
    args: CreateConstraintCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConstraintCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePortfolioCommand}
   */
  createPortfolio(
    args: CreatePortfolioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePortfolioCommandOutput>;
  createPortfolio(args: CreatePortfolioCommandInput, cb: (err: any, data?: CreatePortfolioCommandOutput) => void): void;
  createPortfolio(
    args: CreatePortfolioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePortfolioCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePortfolioShareCommand}
   */
  createPortfolioShare(
    args: CreatePortfolioShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePortfolioShareCommandOutput>;
  createPortfolioShare(
    args: CreatePortfolioShareCommandInput,
    cb: (err: any, data?: CreatePortfolioShareCommandOutput) => void
  ): void;
  createPortfolioShare(
    args: CreatePortfolioShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePortfolioShareCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProductCommand}
   */
  createProduct(args: CreateProductCommandInput, options?: __HttpHandlerOptions): Promise<CreateProductCommandOutput>;
  createProduct(args: CreateProductCommandInput, cb: (err: any, data?: CreateProductCommandOutput) => void): void;
  createProduct(
    args: CreateProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProductCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProvisionedProductPlanCommand}
   */
  createProvisionedProductPlan(
    args: CreateProvisionedProductPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProvisionedProductPlanCommandOutput>;
  createProvisionedProductPlan(
    args: CreateProvisionedProductPlanCommandInput,
    cb: (err: any, data?: CreateProvisionedProductPlanCommandOutput) => void
  ): void;
  createProvisionedProductPlan(
    args: CreateProvisionedProductPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProvisionedProductPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProvisioningArtifactCommand}
   */
  createProvisioningArtifact(
    args: CreateProvisioningArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProvisioningArtifactCommandOutput>;
  createProvisioningArtifact(
    args: CreateProvisioningArtifactCommandInput,
    cb: (err: any, data?: CreateProvisioningArtifactCommandOutput) => void
  ): void;
  createProvisioningArtifact(
    args: CreateProvisioningArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProvisioningArtifactCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateServiceActionCommand}
   */
  createServiceAction(
    args: CreateServiceActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceActionCommandOutput>;
  createServiceAction(
    args: CreateServiceActionCommandInput,
    cb: (err: any, data?: CreateServiceActionCommandOutput) => void
  ): void;
  createServiceAction(
    args: CreateServiceActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceActionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTagOptionCommand}
   */
  createTagOption(
    args: CreateTagOptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTagOptionCommandOutput>;
  createTagOption(args: CreateTagOptionCommandInput, cb: (err: any, data?: CreateTagOptionCommandOutput) => void): void;
  createTagOption(
    args: CreateTagOptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTagOptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConstraintCommand}
   */
  deleteConstraint(
    args: DeleteConstraintCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConstraintCommandOutput>;
  deleteConstraint(
    args: DeleteConstraintCommandInput,
    cb: (err: any, data?: DeleteConstraintCommandOutput) => void
  ): void;
  deleteConstraint(
    args: DeleteConstraintCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConstraintCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePortfolioCommand}
   */
  deletePortfolio(
    args: DeletePortfolioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePortfolioCommandOutput>;
  deletePortfolio(args: DeletePortfolioCommandInput, cb: (err: any, data?: DeletePortfolioCommandOutput) => void): void;
  deletePortfolio(
    args: DeletePortfolioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePortfolioCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePortfolioShareCommand}
   */
  deletePortfolioShare(
    args: DeletePortfolioShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePortfolioShareCommandOutput>;
  deletePortfolioShare(
    args: DeletePortfolioShareCommandInput,
    cb: (err: any, data?: DeletePortfolioShareCommandOutput) => void
  ): void;
  deletePortfolioShare(
    args: DeletePortfolioShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePortfolioShareCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProductCommand}
   */
  deleteProduct(args: DeleteProductCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProductCommandOutput>;
  deleteProduct(args: DeleteProductCommandInput, cb: (err: any, data?: DeleteProductCommandOutput) => void): void;
  deleteProduct(
    args: DeleteProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProductCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProvisionedProductPlanCommand}
   */
  deleteProvisionedProductPlan(
    args: DeleteProvisionedProductPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProvisionedProductPlanCommandOutput>;
  deleteProvisionedProductPlan(
    args: DeleteProvisionedProductPlanCommandInput,
    cb: (err: any, data?: DeleteProvisionedProductPlanCommandOutput) => void
  ): void;
  deleteProvisionedProductPlan(
    args: DeleteProvisionedProductPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProvisionedProductPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProvisioningArtifactCommand}
   */
  deleteProvisioningArtifact(
    args: DeleteProvisioningArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProvisioningArtifactCommandOutput>;
  deleteProvisioningArtifact(
    args: DeleteProvisioningArtifactCommandInput,
    cb: (err: any, data?: DeleteProvisioningArtifactCommandOutput) => void
  ): void;
  deleteProvisioningArtifact(
    args: DeleteProvisioningArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProvisioningArtifactCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteServiceActionCommand}
   */
  deleteServiceAction(
    args: DeleteServiceActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceActionCommandOutput>;
  deleteServiceAction(
    args: DeleteServiceActionCommandInput,
    cb: (err: any, data?: DeleteServiceActionCommandOutput) => void
  ): void;
  deleteServiceAction(
    args: DeleteServiceActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceActionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTagOptionCommand}
   */
  deleteTagOption(
    args: DeleteTagOptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTagOptionCommandOutput>;
  deleteTagOption(args: DeleteTagOptionCommandInput, cb: (err: any, data?: DeleteTagOptionCommandOutput) => void): void;
  deleteTagOption(
    args: DeleteTagOptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTagOptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConstraintCommand}
   */
  describeConstraint(
    args: DescribeConstraintCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConstraintCommandOutput>;
  describeConstraint(
    args: DescribeConstraintCommandInput,
    cb: (err: any, data?: DescribeConstraintCommandOutput) => void
  ): void;
  describeConstraint(
    args: DescribeConstraintCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConstraintCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCopyProductStatusCommand}
   */
  describeCopyProductStatus(
    args: DescribeCopyProductStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCopyProductStatusCommandOutput>;
  describeCopyProductStatus(
    args: DescribeCopyProductStatusCommandInput,
    cb: (err: any, data?: DescribeCopyProductStatusCommandOutput) => void
  ): void;
  describeCopyProductStatus(
    args: DescribeCopyProductStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCopyProductStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePortfolioCommand}
   */
  describePortfolio(
    args: DescribePortfolioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePortfolioCommandOutput>;
  describePortfolio(
    args: DescribePortfolioCommandInput,
    cb: (err: any, data?: DescribePortfolioCommandOutput) => void
  ): void;
  describePortfolio(
    args: DescribePortfolioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePortfolioCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePortfolioSharesCommand}
   */
  describePortfolioShares(
    args: DescribePortfolioSharesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePortfolioSharesCommandOutput>;
  describePortfolioShares(
    args: DescribePortfolioSharesCommandInput,
    cb: (err: any, data?: DescribePortfolioSharesCommandOutput) => void
  ): void;
  describePortfolioShares(
    args: DescribePortfolioSharesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePortfolioSharesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePortfolioShareStatusCommand}
   */
  describePortfolioShareStatus(
    args: DescribePortfolioShareStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePortfolioShareStatusCommandOutput>;
  describePortfolioShareStatus(
    args: DescribePortfolioShareStatusCommandInput,
    cb: (err: any, data?: DescribePortfolioShareStatusCommandOutput) => void
  ): void;
  describePortfolioShareStatus(
    args: DescribePortfolioShareStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePortfolioShareStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProductCommand}
   */
  describeProduct(
    args: DescribeProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProductCommandOutput>;
  describeProduct(args: DescribeProductCommandInput, cb: (err: any, data?: DescribeProductCommandOutput) => void): void;
  describeProduct(
    args: DescribeProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProductCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProductAsAdminCommand}
   */
  describeProductAsAdmin(
    args: DescribeProductAsAdminCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProductAsAdminCommandOutput>;
  describeProductAsAdmin(
    args: DescribeProductAsAdminCommandInput,
    cb: (err: any, data?: DescribeProductAsAdminCommandOutput) => void
  ): void;
  describeProductAsAdmin(
    args: DescribeProductAsAdminCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProductAsAdminCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProductViewCommand}
   */
  describeProductView(
    args: DescribeProductViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProductViewCommandOutput>;
  describeProductView(
    args: DescribeProductViewCommandInput,
    cb: (err: any, data?: DescribeProductViewCommandOutput) => void
  ): void;
  describeProductView(
    args: DescribeProductViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProductViewCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProvisionedProductCommand}
   */
  describeProvisionedProduct(
    args: DescribeProvisionedProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProvisionedProductCommandOutput>;
  describeProvisionedProduct(
    args: DescribeProvisionedProductCommandInput,
    cb: (err: any, data?: DescribeProvisionedProductCommandOutput) => void
  ): void;
  describeProvisionedProduct(
    args: DescribeProvisionedProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProvisionedProductCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProvisionedProductPlanCommand}
   */
  describeProvisionedProductPlan(
    args: DescribeProvisionedProductPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProvisionedProductPlanCommandOutput>;
  describeProvisionedProductPlan(
    args: DescribeProvisionedProductPlanCommandInput,
    cb: (err: any, data?: DescribeProvisionedProductPlanCommandOutput) => void
  ): void;
  describeProvisionedProductPlan(
    args: DescribeProvisionedProductPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProvisionedProductPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProvisioningArtifactCommand}
   */
  describeProvisioningArtifact(
    args: DescribeProvisioningArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProvisioningArtifactCommandOutput>;
  describeProvisioningArtifact(
    args: DescribeProvisioningArtifactCommandInput,
    cb: (err: any, data?: DescribeProvisioningArtifactCommandOutput) => void
  ): void;
  describeProvisioningArtifact(
    args: DescribeProvisioningArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProvisioningArtifactCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProvisioningParametersCommand}
   */
  describeProvisioningParameters(
    args: DescribeProvisioningParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProvisioningParametersCommandOutput>;
  describeProvisioningParameters(
    args: DescribeProvisioningParametersCommandInput,
    cb: (err: any, data?: DescribeProvisioningParametersCommandOutput) => void
  ): void;
  describeProvisioningParameters(
    args: DescribeProvisioningParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProvisioningParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRecordCommand}
   */
  describeRecord(
    args: DescribeRecordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRecordCommandOutput>;
  describeRecord(args: DescribeRecordCommandInput, cb: (err: any, data?: DescribeRecordCommandOutput) => void): void;
  describeRecord(
    args: DescribeRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeServiceActionCommand}
   */
  describeServiceAction(
    args: DescribeServiceActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServiceActionCommandOutput>;
  describeServiceAction(
    args: DescribeServiceActionCommandInput,
    cb: (err: any, data?: DescribeServiceActionCommandOutput) => void
  ): void;
  describeServiceAction(
    args: DescribeServiceActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServiceActionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeServiceActionExecutionParametersCommand}
   */
  describeServiceActionExecutionParameters(
    args: DescribeServiceActionExecutionParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServiceActionExecutionParametersCommandOutput>;
  describeServiceActionExecutionParameters(
    args: DescribeServiceActionExecutionParametersCommandInput,
    cb: (err: any, data?: DescribeServiceActionExecutionParametersCommandOutput) => void
  ): void;
  describeServiceActionExecutionParameters(
    args: DescribeServiceActionExecutionParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServiceActionExecutionParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTagOptionCommand}
   */
  describeTagOption(
    args: DescribeTagOptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTagOptionCommandOutput>;
  describeTagOption(
    args: DescribeTagOptionCommandInput,
    cb: (err: any, data?: DescribeTagOptionCommandOutput) => void
  ): void;
  describeTagOption(
    args: DescribeTagOptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTagOptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableAWSOrganizationsAccessCommand}
   */
  disableAWSOrganizationsAccess(
    args: DisableAWSOrganizationsAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableAWSOrganizationsAccessCommandOutput>;
  disableAWSOrganizationsAccess(
    args: DisableAWSOrganizationsAccessCommandInput,
    cb: (err: any, data?: DisableAWSOrganizationsAccessCommandOutput) => void
  ): void;
  disableAWSOrganizationsAccess(
    args: DisableAWSOrganizationsAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableAWSOrganizationsAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateBudgetFromResourceCommand}
   */
  disassociateBudgetFromResource(
    args: DisassociateBudgetFromResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateBudgetFromResourceCommandOutput>;
  disassociateBudgetFromResource(
    args: DisassociateBudgetFromResourceCommandInput,
    cb: (err: any, data?: DisassociateBudgetFromResourceCommandOutput) => void
  ): void;
  disassociateBudgetFromResource(
    args: DisassociateBudgetFromResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateBudgetFromResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociatePrincipalFromPortfolioCommand}
   */
  disassociatePrincipalFromPortfolio(
    args: DisassociatePrincipalFromPortfolioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociatePrincipalFromPortfolioCommandOutput>;
  disassociatePrincipalFromPortfolio(
    args: DisassociatePrincipalFromPortfolioCommandInput,
    cb: (err: any, data?: DisassociatePrincipalFromPortfolioCommandOutput) => void
  ): void;
  disassociatePrincipalFromPortfolio(
    args: DisassociatePrincipalFromPortfolioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociatePrincipalFromPortfolioCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateProductFromPortfolioCommand}
   */
  disassociateProductFromPortfolio(
    args: DisassociateProductFromPortfolioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateProductFromPortfolioCommandOutput>;
  disassociateProductFromPortfolio(
    args: DisassociateProductFromPortfolioCommandInput,
    cb: (err: any, data?: DisassociateProductFromPortfolioCommandOutput) => void
  ): void;
  disassociateProductFromPortfolio(
    args: DisassociateProductFromPortfolioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateProductFromPortfolioCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateServiceActionFromProvisioningArtifactCommand}
   */
  disassociateServiceActionFromProvisioningArtifact(
    args: DisassociateServiceActionFromProvisioningArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateServiceActionFromProvisioningArtifactCommandOutput>;
  disassociateServiceActionFromProvisioningArtifact(
    args: DisassociateServiceActionFromProvisioningArtifactCommandInput,
    cb: (err: any, data?: DisassociateServiceActionFromProvisioningArtifactCommandOutput) => void
  ): void;
  disassociateServiceActionFromProvisioningArtifact(
    args: DisassociateServiceActionFromProvisioningArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateServiceActionFromProvisioningArtifactCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateTagOptionFromResourceCommand}
   */
  disassociateTagOptionFromResource(
    args: DisassociateTagOptionFromResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateTagOptionFromResourceCommandOutput>;
  disassociateTagOptionFromResource(
    args: DisassociateTagOptionFromResourceCommandInput,
    cb: (err: any, data?: DisassociateTagOptionFromResourceCommandOutput) => void
  ): void;
  disassociateTagOptionFromResource(
    args: DisassociateTagOptionFromResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateTagOptionFromResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableAWSOrganizationsAccessCommand}
   */
  enableAWSOrganizationsAccess(
    args: EnableAWSOrganizationsAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableAWSOrganizationsAccessCommandOutput>;
  enableAWSOrganizationsAccess(
    args: EnableAWSOrganizationsAccessCommandInput,
    cb: (err: any, data?: EnableAWSOrganizationsAccessCommandOutput) => void
  ): void;
  enableAWSOrganizationsAccess(
    args: EnableAWSOrganizationsAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableAWSOrganizationsAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link ExecuteProvisionedProductPlanCommand}
   */
  executeProvisionedProductPlan(
    args: ExecuteProvisionedProductPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExecuteProvisionedProductPlanCommandOutput>;
  executeProvisionedProductPlan(
    args: ExecuteProvisionedProductPlanCommandInput,
    cb: (err: any, data?: ExecuteProvisionedProductPlanCommandOutput) => void
  ): void;
  executeProvisionedProductPlan(
    args: ExecuteProvisionedProductPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecuteProvisionedProductPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link ExecuteProvisionedProductServiceActionCommand}
   */
  executeProvisionedProductServiceAction(
    args: ExecuteProvisionedProductServiceActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExecuteProvisionedProductServiceActionCommandOutput>;
  executeProvisionedProductServiceAction(
    args: ExecuteProvisionedProductServiceActionCommandInput,
    cb: (err: any, data?: ExecuteProvisionedProductServiceActionCommandOutput) => void
  ): void;
  executeProvisionedProductServiceAction(
    args: ExecuteProvisionedProductServiceActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecuteProvisionedProductServiceActionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAWSOrganizationsAccessStatusCommand}
   */
  getAWSOrganizationsAccessStatus(
    args: GetAWSOrganizationsAccessStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAWSOrganizationsAccessStatusCommandOutput>;
  getAWSOrganizationsAccessStatus(
    args: GetAWSOrganizationsAccessStatusCommandInput,
    cb: (err: any, data?: GetAWSOrganizationsAccessStatusCommandOutput) => void
  ): void;
  getAWSOrganizationsAccessStatus(
    args: GetAWSOrganizationsAccessStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAWSOrganizationsAccessStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProvisionedProductOutputsCommand}
   */
  getProvisionedProductOutputs(
    args: GetProvisionedProductOutputsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProvisionedProductOutputsCommandOutput>;
  getProvisionedProductOutputs(
    args: GetProvisionedProductOutputsCommandInput,
    cb: (err: any, data?: GetProvisionedProductOutputsCommandOutput) => void
  ): void;
  getProvisionedProductOutputs(
    args: GetProvisionedProductOutputsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProvisionedProductOutputsCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportAsProvisionedProductCommand}
   */
  importAsProvisionedProduct(
    args: ImportAsProvisionedProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportAsProvisionedProductCommandOutput>;
  importAsProvisionedProduct(
    args: ImportAsProvisionedProductCommandInput,
    cb: (err: any, data?: ImportAsProvisionedProductCommandOutput) => void
  ): void;
  importAsProvisionedProduct(
    args: ImportAsProvisionedProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportAsProvisionedProductCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAcceptedPortfolioSharesCommand}
   */
  listAcceptedPortfolioShares(
    args: ListAcceptedPortfolioSharesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAcceptedPortfolioSharesCommandOutput>;
  listAcceptedPortfolioShares(
    args: ListAcceptedPortfolioSharesCommandInput,
    cb: (err: any, data?: ListAcceptedPortfolioSharesCommandOutput) => void
  ): void;
  listAcceptedPortfolioShares(
    args: ListAcceptedPortfolioSharesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAcceptedPortfolioSharesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBudgetsForResourceCommand}
   */
  listBudgetsForResource(
    args: ListBudgetsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBudgetsForResourceCommandOutput>;
  listBudgetsForResource(
    args: ListBudgetsForResourceCommandInput,
    cb: (err: any, data?: ListBudgetsForResourceCommandOutput) => void
  ): void;
  listBudgetsForResource(
    args: ListBudgetsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBudgetsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConstraintsForPortfolioCommand}
   */
  listConstraintsForPortfolio(
    args: ListConstraintsForPortfolioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConstraintsForPortfolioCommandOutput>;
  listConstraintsForPortfolio(
    args: ListConstraintsForPortfolioCommandInput,
    cb: (err: any, data?: ListConstraintsForPortfolioCommandOutput) => void
  ): void;
  listConstraintsForPortfolio(
    args: ListConstraintsForPortfolioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConstraintsForPortfolioCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLaunchPathsCommand}
   */
  listLaunchPaths(
    args: ListLaunchPathsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLaunchPathsCommandOutput>;
  listLaunchPaths(args: ListLaunchPathsCommandInput, cb: (err: any, data?: ListLaunchPathsCommandOutput) => void): void;
  listLaunchPaths(
    args: ListLaunchPathsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLaunchPathsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOrganizationPortfolioAccessCommand}
   */
  listOrganizationPortfolioAccess(
    args: ListOrganizationPortfolioAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOrganizationPortfolioAccessCommandOutput>;
  listOrganizationPortfolioAccess(
    args: ListOrganizationPortfolioAccessCommandInput,
    cb: (err: any, data?: ListOrganizationPortfolioAccessCommandOutput) => void
  ): void;
  listOrganizationPortfolioAccess(
    args: ListOrganizationPortfolioAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOrganizationPortfolioAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPortfolioAccessCommand}
   */
  listPortfolioAccess(
    args: ListPortfolioAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPortfolioAccessCommandOutput>;
  listPortfolioAccess(
    args: ListPortfolioAccessCommandInput,
    cb: (err: any, data?: ListPortfolioAccessCommandOutput) => void
  ): void;
  listPortfolioAccess(
    args: ListPortfolioAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPortfolioAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPortfoliosCommand}
   */
  listPortfolios(
    args: ListPortfoliosCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPortfoliosCommandOutput>;
  listPortfolios(args: ListPortfoliosCommandInput, cb: (err: any, data?: ListPortfoliosCommandOutput) => void): void;
  listPortfolios(
    args: ListPortfoliosCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPortfoliosCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPortfoliosForProductCommand}
   */
  listPortfoliosForProduct(
    args: ListPortfoliosForProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPortfoliosForProductCommandOutput>;
  listPortfoliosForProduct(
    args: ListPortfoliosForProductCommandInput,
    cb: (err: any, data?: ListPortfoliosForProductCommandOutput) => void
  ): void;
  listPortfoliosForProduct(
    args: ListPortfoliosForProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPortfoliosForProductCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPrincipalsForPortfolioCommand}
   */
  listPrincipalsForPortfolio(
    args: ListPrincipalsForPortfolioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPrincipalsForPortfolioCommandOutput>;
  listPrincipalsForPortfolio(
    args: ListPrincipalsForPortfolioCommandInput,
    cb: (err: any, data?: ListPrincipalsForPortfolioCommandOutput) => void
  ): void;
  listPrincipalsForPortfolio(
    args: ListPrincipalsForPortfolioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPrincipalsForPortfolioCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProvisionedProductPlansCommand}
   */
  listProvisionedProductPlans(
    args: ListProvisionedProductPlansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProvisionedProductPlansCommandOutput>;
  listProvisionedProductPlans(
    args: ListProvisionedProductPlansCommandInput,
    cb: (err: any, data?: ListProvisionedProductPlansCommandOutput) => void
  ): void;
  listProvisionedProductPlans(
    args: ListProvisionedProductPlansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProvisionedProductPlansCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProvisioningArtifactsCommand}
   */
  listProvisioningArtifacts(
    args: ListProvisioningArtifactsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProvisioningArtifactsCommandOutput>;
  listProvisioningArtifacts(
    args: ListProvisioningArtifactsCommandInput,
    cb: (err: any, data?: ListProvisioningArtifactsCommandOutput) => void
  ): void;
  listProvisioningArtifacts(
    args: ListProvisioningArtifactsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProvisioningArtifactsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProvisioningArtifactsForServiceActionCommand}
   */
  listProvisioningArtifactsForServiceAction(
    args: ListProvisioningArtifactsForServiceActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProvisioningArtifactsForServiceActionCommandOutput>;
  listProvisioningArtifactsForServiceAction(
    args: ListProvisioningArtifactsForServiceActionCommandInput,
    cb: (err: any, data?: ListProvisioningArtifactsForServiceActionCommandOutput) => void
  ): void;
  listProvisioningArtifactsForServiceAction(
    args: ListProvisioningArtifactsForServiceActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProvisioningArtifactsForServiceActionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecordHistoryCommand}
   */
  listRecordHistory(
    args: ListRecordHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecordHistoryCommandOutput>;
  listRecordHistory(
    args: ListRecordHistoryCommandInput,
    cb: (err: any, data?: ListRecordHistoryCommandOutput) => void
  ): void;
  listRecordHistory(
    args: ListRecordHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecordHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourcesForTagOptionCommand}
   */
  listResourcesForTagOption(
    args: ListResourcesForTagOptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourcesForTagOptionCommandOutput>;
  listResourcesForTagOption(
    args: ListResourcesForTagOptionCommandInput,
    cb: (err: any, data?: ListResourcesForTagOptionCommandOutput) => void
  ): void;
  listResourcesForTagOption(
    args: ListResourcesForTagOptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourcesForTagOptionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServiceActionsCommand}
   */
  listServiceActions(
    args: ListServiceActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceActionsCommandOutput>;
  listServiceActions(
    args: ListServiceActionsCommandInput,
    cb: (err: any, data?: ListServiceActionsCommandOutput) => void
  ): void;
  listServiceActions(
    args: ListServiceActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServiceActionsForProvisioningArtifactCommand}
   */
  listServiceActionsForProvisioningArtifact(
    args: ListServiceActionsForProvisioningArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceActionsForProvisioningArtifactCommandOutput>;
  listServiceActionsForProvisioningArtifact(
    args: ListServiceActionsForProvisioningArtifactCommandInput,
    cb: (err: any, data?: ListServiceActionsForProvisioningArtifactCommandOutput) => void
  ): void;
  listServiceActionsForProvisioningArtifact(
    args: ListServiceActionsForProvisioningArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceActionsForProvisioningArtifactCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStackInstancesForProvisionedProductCommand}
   */
  listStackInstancesForProvisionedProduct(
    args: ListStackInstancesForProvisionedProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStackInstancesForProvisionedProductCommandOutput>;
  listStackInstancesForProvisionedProduct(
    args: ListStackInstancesForProvisionedProductCommandInput,
    cb: (err: any, data?: ListStackInstancesForProvisionedProductCommandOutput) => void
  ): void;
  listStackInstancesForProvisionedProduct(
    args: ListStackInstancesForProvisionedProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStackInstancesForProvisionedProductCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagOptionsCommand}
   */
  listTagOptions(
    args: ListTagOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagOptionsCommandOutput>;
  listTagOptions(args: ListTagOptionsCommandInput, cb: (err: any, data?: ListTagOptionsCommandOutput) => void): void;
  listTagOptions(
    args: ListTagOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link NotifyProvisionProductEngineWorkflowResultCommand}
   */
  notifyProvisionProductEngineWorkflowResult(
    args: NotifyProvisionProductEngineWorkflowResultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NotifyProvisionProductEngineWorkflowResultCommandOutput>;
  notifyProvisionProductEngineWorkflowResult(
    args: NotifyProvisionProductEngineWorkflowResultCommandInput,
    cb: (err: any, data?: NotifyProvisionProductEngineWorkflowResultCommandOutput) => void
  ): void;
  notifyProvisionProductEngineWorkflowResult(
    args: NotifyProvisionProductEngineWorkflowResultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NotifyProvisionProductEngineWorkflowResultCommandOutput) => void
  ): void;

  /**
   * @see {@link NotifyTerminateProvisionedProductEngineWorkflowResultCommand}
   */
  notifyTerminateProvisionedProductEngineWorkflowResult(
    args: NotifyTerminateProvisionedProductEngineWorkflowResultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NotifyTerminateProvisionedProductEngineWorkflowResultCommandOutput>;
  notifyTerminateProvisionedProductEngineWorkflowResult(
    args: NotifyTerminateProvisionedProductEngineWorkflowResultCommandInput,
    cb: (err: any, data?: NotifyTerminateProvisionedProductEngineWorkflowResultCommandOutput) => void
  ): void;
  notifyTerminateProvisionedProductEngineWorkflowResult(
    args: NotifyTerminateProvisionedProductEngineWorkflowResultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NotifyTerminateProvisionedProductEngineWorkflowResultCommandOutput) => void
  ): void;

  /**
   * @see {@link NotifyUpdateProvisionedProductEngineWorkflowResultCommand}
   */
  notifyUpdateProvisionedProductEngineWorkflowResult(
    args: NotifyUpdateProvisionedProductEngineWorkflowResultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NotifyUpdateProvisionedProductEngineWorkflowResultCommandOutput>;
  notifyUpdateProvisionedProductEngineWorkflowResult(
    args: NotifyUpdateProvisionedProductEngineWorkflowResultCommandInput,
    cb: (err: any, data?: NotifyUpdateProvisionedProductEngineWorkflowResultCommandOutput) => void
  ): void;
  notifyUpdateProvisionedProductEngineWorkflowResult(
    args: NotifyUpdateProvisionedProductEngineWorkflowResultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NotifyUpdateProvisionedProductEngineWorkflowResultCommandOutput) => void
  ): void;

  /**
   * @see {@link ProvisionProductCommand}
   */
  provisionProduct(
    args: ProvisionProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ProvisionProductCommandOutput>;
  provisionProduct(
    args: ProvisionProductCommandInput,
    cb: (err: any, data?: ProvisionProductCommandOutput) => void
  ): void;
  provisionProduct(
    args: ProvisionProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ProvisionProductCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectPortfolioShareCommand}
   */
  rejectPortfolioShare(
    args: RejectPortfolioShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectPortfolioShareCommandOutput>;
  rejectPortfolioShare(
    args: RejectPortfolioShareCommandInput,
    cb: (err: any, data?: RejectPortfolioShareCommandOutput) => void
  ): void;
  rejectPortfolioShare(
    args: RejectPortfolioShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectPortfolioShareCommandOutput) => void
  ): void;

  /**
   * @see {@link ScanProvisionedProductsCommand}
   */
  scanProvisionedProducts(
    args: ScanProvisionedProductsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ScanProvisionedProductsCommandOutput>;
  scanProvisionedProducts(
    args: ScanProvisionedProductsCommandInput,
    cb: (err: any, data?: ScanProvisionedProductsCommandOutput) => void
  ): void;
  scanProvisionedProducts(
    args: ScanProvisionedProductsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ScanProvisionedProductsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchProductsCommand}
   */
  searchProducts(
    args: SearchProductsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchProductsCommandOutput>;
  searchProducts(args: SearchProductsCommandInput, cb: (err: any, data?: SearchProductsCommandOutput) => void): void;
  searchProducts(
    args: SearchProductsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchProductsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchProductsAsAdminCommand}
   */
  searchProductsAsAdmin(
    args: SearchProductsAsAdminCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchProductsAsAdminCommandOutput>;
  searchProductsAsAdmin(
    args: SearchProductsAsAdminCommandInput,
    cb: (err: any, data?: SearchProductsAsAdminCommandOutput) => void
  ): void;
  searchProductsAsAdmin(
    args: SearchProductsAsAdminCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchProductsAsAdminCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchProvisionedProductsCommand}
   */
  searchProvisionedProducts(
    args: SearchProvisionedProductsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchProvisionedProductsCommandOutput>;
  searchProvisionedProducts(
    args: SearchProvisionedProductsCommandInput,
    cb: (err: any, data?: SearchProvisionedProductsCommandOutput) => void
  ): void;
  searchProvisionedProducts(
    args: SearchProvisionedProductsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchProvisionedProductsCommandOutput) => void
  ): void;

  /**
   * @see {@link TerminateProvisionedProductCommand}
   */
  terminateProvisionedProduct(
    args: TerminateProvisionedProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateProvisionedProductCommandOutput>;
  terminateProvisionedProduct(
    args: TerminateProvisionedProductCommandInput,
    cb: (err: any, data?: TerminateProvisionedProductCommandOutput) => void
  ): void;
  terminateProvisionedProduct(
    args: TerminateProvisionedProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateProvisionedProductCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConstraintCommand}
   */
  updateConstraint(
    args: UpdateConstraintCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConstraintCommandOutput>;
  updateConstraint(
    args: UpdateConstraintCommandInput,
    cb: (err: any, data?: UpdateConstraintCommandOutput) => void
  ): void;
  updateConstraint(
    args: UpdateConstraintCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConstraintCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePortfolioCommand}
   */
  updatePortfolio(
    args: UpdatePortfolioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePortfolioCommandOutput>;
  updatePortfolio(args: UpdatePortfolioCommandInput, cb: (err: any, data?: UpdatePortfolioCommandOutput) => void): void;
  updatePortfolio(
    args: UpdatePortfolioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePortfolioCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePortfolioShareCommand}
   */
  updatePortfolioShare(
    args: UpdatePortfolioShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePortfolioShareCommandOutput>;
  updatePortfolioShare(
    args: UpdatePortfolioShareCommandInput,
    cb: (err: any, data?: UpdatePortfolioShareCommandOutput) => void
  ): void;
  updatePortfolioShare(
    args: UpdatePortfolioShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePortfolioShareCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProductCommand}
   */
  updateProduct(args: UpdateProductCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProductCommandOutput>;
  updateProduct(args: UpdateProductCommandInput, cb: (err: any, data?: UpdateProductCommandOutput) => void): void;
  updateProduct(
    args: UpdateProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProductCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProvisionedProductCommand}
   */
  updateProvisionedProduct(
    args: UpdateProvisionedProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProvisionedProductCommandOutput>;
  updateProvisionedProduct(
    args: UpdateProvisionedProductCommandInput,
    cb: (err: any, data?: UpdateProvisionedProductCommandOutput) => void
  ): void;
  updateProvisionedProduct(
    args: UpdateProvisionedProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProvisionedProductCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProvisionedProductPropertiesCommand}
   */
  updateProvisionedProductProperties(
    args: UpdateProvisionedProductPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProvisionedProductPropertiesCommandOutput>;
  updateProvisionedProductProperties(
    args: UpdateProvisionedProductPropertiesCommandInput,
    cb: (err: any, data?: UpdateProvisionedProductPropertiesCommandOutput) => void
  ): void;
  updateProvisionedProductProperties(
    args: UpdateProvisionedProductPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProvisionedProductPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProvisioningArtifactCommand}
   */
  updateProvisioningArtifact(
    args: UpdateProvisioningArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProvisioningArtifactCommandOutput>;
  updateProvisioningArtifact(
    args: UpdateProvisioningArtifactCommandInput,
    cb: (err: any, data?: UpdateProvisioningArtifactCommandOutput) => void
  ): void;
  updateProvisioningArtifact(
    args: UpdateProvisioningArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProvisioningArtifactCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServiceActionCommand}
   */
  updateServiceAction(
    args: UpdateServiceActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceActionCommandOutput>;
  updateServiceAction(
    args: UpdateServiceActionCommandInput,
    cb: (err: any, data?: UpdateServiceActionCommandOutput) => void
  ): void;
  updateServiceAction(
    args: UpdateServiceActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceActionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTagOptionCommand}
   */
  updateTagOption(
    args: UpdateTagOptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTagOptionCommandOutput>;
  updateTagOption(args: UpdateTagOptionCommandInput, cb: (err: any, data?: UpdateTagOptionCommandOutput) => void): void;
  updateTagOption(
    args: UpdateTagOptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTagOptionCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Service Catalog</fullname>
 *          <p>
 *             <a href="http://aws.amazon.com/servicecatalog">Service Catalog</a> enables
 *          organizations to create and manage catalogs of IT services that are approved for Amazon Web Services. To
 *          get the most out of this documentation, you should be familiar with the terminology
 *          discussed in <a href="http://docs.aws.amazon.com/servicecatalog/latest/adminguide/what-is_concepts.html">Service Catalog
 *          Concepts</a>.</p>
 */
export class ServiceCatalog extends ServiceCatalogClient implements ServiceCatalog {}
createAggregatedClient(commands, ServiceCatalog);
