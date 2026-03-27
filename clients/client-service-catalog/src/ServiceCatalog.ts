// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type AcceptPortfolioShareCommandInput,
  type AcceptPortfolioShareCommandOutput,
  AcceptPortfolioShareCommand,
} from "./commands/AcceptPortfolioShareCommand";
import {
  type AssociateBudgetWithResourceCommandInput,
  type AssociateBudgetWithResourceCommandOutput,
  AssociateBudgetWithResourceCommand,
} from "./commands/AssociateBudgetWithResourceCommand";
import {
  type AssociatePrincipalWithPortfolioCommandInput,
  type AssociatePrincipalWithPortfolioCommandOutput,
  AssociatePrincipalWithPortfolioCommand,
} from "./commands/AssociatePrincipalWithPortfolioCommand";
import {
  type AssociateProductWithPortfolioCommandInput,
  type AssociateProductWithPortfolioCommandOutput,
  AssociateProductWithPortfolioCommand,
} from "./commands/AssociateProductWithPortfolioCommand";
import {
  type AssociateServiceActionWithProvisioningArtifactCommandInput,
  type AssociateServiceActionWithProvisioningArtifactCommandOutput,
  AssociateServiceActionWithProvisioningArtifactCommand,
} from "./commands/AssociateServiceActionWithProvisioningArtifactCommand";
import {
  type AssociateTagOptionWithResourceCommandInput,
  type AssociateTagOptionWithResourceCommandOutput,
  AssociateTagOptionWithResourceCommand,
} from "./commands/AssociateTagOptionWithResourceCommand";
import {
  type BatchAssociateServiceActionWithProvisioningArtifactCommandInput,
  type BatchAssociateServiceActionWithProvisioningArtifactCommandOutput,
  BatchAssociateServiceActionWithProvisioningArtifactCommand,
} from "./commands/BatchAssociateServiceActionWithProvisioningArtifactCommand";
import {
  type BatchDisassociateServiceActionFromProvisioningArtifactCommandInput,
  type BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput,
  BatchDisassociateServiceActionFromProvisioningArtifactCommand,
} from "./commands/BatchDisassociateServiceActionFromProvisioningArtifactCommand";
import {
  type CopyProductCommandInput,
  type CopyProductCommandOutput,
  CopyProductCommand,
} from "./commands/CopyProductCommand";
import {
  type CreateConstraintCommandInput,
  type CreateConstraintCommandOutput,
  CreateConstraintCommand,
} from "./commands/CreateConstraintCommand";
import {
  type CreatePortfolioCommandInput,
  type CreatePortfolioCommandOutput,
  CreatePortfolioCommand,
} from "./commands/CreatePortfolioCommand";
import {
  type CreatePortfolioShareCommandInput,
  type CreatePortfolioShareCommandOutput,
  CreatePortfolioShareCommand,
} from "./commands/CreatePortfolioShareCommand";
import {
  type CreateProductCommandInput,
  type CreateProductCommandOutput,
  CreateProductCommand,
} from "./commands/CreateProductCommand";
import {
  type CreateProvisionedProductPlanCommandInput,
  type CreateProvisionedProductPlanCommandOutput,
  CreateProvisionedProductPlanCommand,
} from "./commands/CreateProvisionedProductPlanCommand";
import {
  type CreateProvisioningArtifactCommandInput,
  type CreateProvisioningArtifactCommandOutput,
  CreateProvisioningArtifactCommand,
} from "./commands/CreateProvisioningArtifactCommand";
import {
  type CreateServiceActionCommandInput,
  type CreateServiceActionCommandOutput,
  CreateServiceActionCommand,
} from "./commands/CreateServiceActionCommand";
import {
  type CreateTagOptionCommandInput,
  type CreateTagOptionCommandOutput,
  CreateTagOptionCommand,
} from "./commands/CreateTagOptionCommand";
import {
  type DeleteConstraintCommandInput,
  type DeleteConstraintCommandOutput,
  DeleteConstraintCommand,
} from "./commands/DeleteConstraintCommand";
import {
  type DeletePortfolioCommandInput,
  type DeletePortfolioCommandOutput,
  DeletePortfolioCommand,
} from "./commands/DeletePortfolioCommand";
import {
  type DeletePortfolioShareCommandInput,
  type DeletePortfolioShareCommandOutput,
  DeletePortfolioShareCommand,
} from "./commands/DeletePortfolioShareCommand";
import {
  type DeleteProductCommandInput,
  type DeleteProductCommandOutput,
  DeleteProductCommand,
} from "./commands/DeleteProductCommand";
import {
  type DeleteProvisionedProductPlanCommandInput,
  type DeleteProvisionedProductPlanCommandOutput,
  DeleteProvisionedProductPlanCommand,
} from "./commands/DeleteProvisionedProductPlanCommand";
import {
  type DeleteProvisioningArtifactCommandInput,
  type DeleteProvisioningArtifactCommandOutput,
  DeleteProvisioningArtifactCommand,
} from "./commands/DeleteProvisioningArtifactCommand";
import {
  type DeleteServiceActionCommandInput,
  type DeleteServiceActionCommandOutput,
  DeleteServiceActionCommand,
} from "./commands/DeleteServiceActionCommand";
import {
  type DeleteTagOptionCommandInput,
  type DeleteTagOptionCommandOutput,
  DeleteTagOptionCommand,
} from "./commands/DeleteTagOptionCommand";
import {
  type DescribeConstraintCommandInput,
  type DescribeConstraintCommandOutput,
  DescribeConstraintCommand,
} from "./commands/DescribeConstraintCommand";
import {
  type DescribeCopyProductStatusCommandInput,
  type DescribeCopyProductStatusCommandOutput,
  DescribeCopyProductStatusCommand,
} from "./commands/DescribeCopyProductStatusCommand";
import {
  type DescribePortfolioCommandInput,
  type DescribePortfolioCommandOutput,
  DescribePortfolioCommand,
} from "./commands/DescribePortfolioCommand";
import {
  type DescribePortfolioSharesCommandInput,
  type DescribePortfolioSharesCommandOutput,
  DescribePortfolioSharesCommand,
} from "./commands/DescribePortfolioSharesCommand";
import {
  type DescribePortfolioShareStatusCommandInput,
  type DescribePortfolioShareStatusCommandOutput,
  DescribePortfolioShareStatusCommand,
} from "./commands/DescribePortfolioShareStatusCommand";
import {
  type DescribeProductAsAdminCommandInput,
  type DescribeProductAsAdminCommandOutput,
  DescribeProductAsAdminCommand,
} from "./commands/DescribeProductAsAdminCommand";
import {
  type DescribeProductCommandInput,
  type DescribeProductCommandOutput,
  DescribeProductCommand,
} from "./commands/DescribeProductCommand";
import {
  type DescribeProductViewCommandInput,
  type DescribeProductViewCommandOutput,
  DescribeProductViewCommand,
} from "./commands/DescribeProductViewCommand";
import {
  type DescribeProvisionedProductCommandInput,
  type DescribeProvisionedProductCommandOutput,
  DescribeProvisionedProductCommand,
} from "./commands/DescribeProvisionedProductCommand";
import {
  type DescribeProvisionedProductPlanCommandInput,
  type DescribeProvisionedProductPlanCommandOutput,
  DescribeProvisionedProductPlanCommand,
} from "./commands/DescribeProvisionedProductPlanCommand";
import {
  type DescribeProvisioningArtifactCommandInput,
  type DescribeProvisioningArtifactCommandOutput,
  DescribeProvisioningArtifactCommand,
} from "./commands/DescribeProvisioningArtifactCommand";
import {
  type DescribeProvisioningParametersCommandInput,
  type DescribeProvisioningParametersCommandOutput,
  DescribeProvisioningParametersCommand,
} from "./commands/DescribeProvisioningParametersCommand";
import {
  type DescribeRecordCommandInput,
  type DescribeRecordCommandOutput,
  DescribeRecordCommand,
} from "./commands/DescribeRecordCommand";
import {
  type DescribeServiceActionCommandInput,
  type DescribeServiceActionCommandOutput,
  DescribeServiceActionCommand,
} from "./commands/DescribeServiceActionCommand";
import {
  type DescribeServiceActionExecutionParametersCommandInput,
  type DescribeServiceActionExecutionParametersCommandOutput,
  DescribeServiceActionExecutionParametersCommand,
} from "./commands/DescribeServiceActionExecutionParametersCommand";
import {
  type DescribeTagOptionCommandInput,
  type DescribeTagOptionCommandOutput,
  DescribeTagOptionCommand,
} from "./commands/DescribeTagOptionCommand";
import {
  type DisableAWSOrganizationsAccessCommandInput,
  type DisableAWSOrganizationsAccessCommandOutput,
  DisableAWSOrganizationsAccessCommand,
} from "./commands/DisableAWSOrganizationsAccessCommand";
import {
  type DisassociateBudgetFromResourceCommandInput,
  type DisassociateBudgetFromResourceCommandOutput,
  DisassociateBudgetFromResourceCommand,
} from "./commands/DisassociateBudgetFromResourceCommand";
import {
  type DisassociatePrincipalFromPortfolioCommandInput,
  type DisassociatePrincipalFromPortfolioCommandOutput,
  DisassociatePrincipalFromPortfolioCommand,
} from "./commands/DisassociatePrincipalFromPortfolioCommand";
import {
  type DisassociateProductFromPortfolioCommandInput,
  type DisassociateProductFromPortfolioCommandOutput,
  DisassociateProductFromPortfolioCommand,
} from "./commands/DisassociateProductFromPortfolioCommand";
import {
  type DisassociateServiceActionFromProvisioningArtifactCommandInput,
  type DisassociateServiceActionFromProvisioningArtifactCommandOutput,
  DisassociateServiceActionFromProvisioningArtifactCommand,
} from "./commands/DisassociateServiceActionFromProvisioningArtifactCommand";
import {
  type DisassociateTagOptionFromResourceCommandInput,
  type DisassociateTagOptionFromResourceCommandOutput,
  DisassociateTagOptionFromResourceCommand,
} from "./commands/DisassociateTagOptionFromResourceCommand";
import {
  type EnableAWSOrganizationsAccessCommandInput,
  type EnableAWSOrganizationsAccessCommandOutput,
  EnableAWSOrganizationsAccessCommand,
} from "./commands/EnableAWSOrganizationsAccessCommand";
import {
  type ExecuteProvisionedProductPlanCommandInput,
  type ExecuteProvisionedProductPlanCommandOutput,
  ExecuteProvisionedProductPlanCommand,
} from "./commands/ExecuteProvisionedProductPlanCommand";
import {
  type ExecuteProvisionedProductServiceActionCommandInput,
  type ExecuteProvisionedProductServiceActionCommandOutput,
  ExecuteProvisionedProductServiceActionCommand,
} from "./commands/ExecuteProvisionedProductServiceActionCommand";
import {
  type GetAWSOrganizationsAccessStatusCommandInput,
  type GetAWSOrganizationsAccessStatusCommandOutput,
  GetAWSOrganizationsAccessStatusCommand,
} from "./commands/GetAWSOrganizationsAccessStatusCommand";
import {
  type GetProvisionedProductOutputsCommandInput,
  type GetProvisionedProductOutputsCommandOutput,
  GetProvisionedProductOutputsCommand,
} from "./commands/GetProvisionedProductOutputsCommand";
import {
  type ImportAsProvisionedProductCommandInput,
  type ImportAsProvisionedProductCommandOutput,
  ImportAsProvisionedProductCommand,
} from "./commands/ImportAsProvisionedProductCommand";
import {
  type ListAcceptedPortfolioSharesCommandInput,
  type ListAcceptedPortfolioSharesCommandOutput,
  ListAcceptedPortfolioSharesCommand,
} from "./commands/ListAcceptedPortfolioSharesCommand";
import {
  type ListBudgetsForResourceCommandInput,
  type ListBudgetsForResourceCommandOutput,
  ListBudgetsForResourceCommand,
} from "./commands/ListBudgetsForResourceCommand";
import {
  type ListConstraintsForPortfolioCommandInput,
  type ListConstraintsForPortfolioCommandOutput,
  ListConstraintsForPortfolioCommand,
} from "./commands/ListConstraintsForPortfolioCommand";
import {
  type ListLaunchPathsCommandInput,
  type ListLaunchPathsCommandOutput,
  ListLaunchPathsCommand,
} from "./commands/ListLaunchPathsCommand";
import {
  type ListOrganizationPortfolioAccessCommandInput,
  type ListOrganizationPortfolioAccessCommandOutput,
  ListOrganizationPortfolioAccessCommand,
} from "./commands/ListOrganizationPortfolioAccessCommand";
import {
  type ListPortfolioAccessCommandInput,
  type ListPortfolioAccessCommandOutput,
  ListPortfolioAccessCommand,
} from "./commands/ListPortfolioAccessCommand";
import {
  type ListPortfoliosCommandInput,
  type ListPortfoliosCommandOutput,
  ListPortfoliosCommand,
} from "./commands/ListPortfoliosCommand";
import {
  type ListPortfoliosForProductCommandInput,
  type ListPortfoliosForProductCommandOutput,
  ListPortfoliosForProductCommand,
} from "./commands/ListPortfoliosForProductCommand";
import {
  type ListPrincipalsForPortfolioCommandInput,
  type ListPrincipalsForPortfolioCommandOutput,
  ListPrincipalsForPortfolioCommand,
} from "./commands/ListPrincipalsForPortfolioCommand";
import {
  type ListProvisionedProductPlansCommandInput,
  type ListProvisionedProductPlansCommandOutput,
  ListProvisionedProductPlansCommand,
} from "./commands/ListProvisionedProductPlansCommand";
import {
  type ListProvisioningArtifactsCommandInput,
  type ListProvisioningArtifactsCommandOutput,
  ListProvisioningArtifactsCommand,
} from "./commands/ListProvisioningArtifactsCommand";
import {
  type ListProvisioningArtifactsForServiceActionCommandInput,
  type ListProvisioningArtifactsForServiceActionCommandOutput,
  ListProvisioningArtifactsForServiceActionCommand,
} from "./commands/ListProvisioningArtifactsForServiceActionCommand";
import {
  type ListRecordHistoryCommandInput,
  type ListRecordHistoryCommandOutput,
  ListRecordHistoryCommand,
} from "./commands/ListRecordHistoryCommand";
import {
  type ListResourcesForTagOptionCommandInput,
  type ListResourcesForTagOptionCommandOutput,
  ListResourcesForTagOptionCommand,
} from "./commands/ListResourcesForTagOptionCommand";
import {
  type ListServiceActionsCommandInput,
  type ListServiceActionsCommandOutput,
  ListServiceActionsCommand,
} from "./commands/ListServiceActionsCommand";
import {
  type ListServiceActionsForProvisioningArtifactCommandInput,
  type ListServiceActionsForProvisioningArtifactCommandOutput,
  ListServiceActionsForProvisioningArtifactCommand,
} from "./commands/ListServiceActionsForProvisioningArtifactCommand";
import {
  type ListStackInstancesForProvisionedProductCommandInput,
  type ListStackInstancesForProvisionedProductCommandOutput,
  ListStackInstancesForProvisionedProductCommand,
} from "./commands/ListStackInstancesForProvisionedProductCommand";
import {
  type ListTagOptionsCommandInput,
  type ListTagOptionsCommandOutput,
  ListTagOptionsCommand,
} from "./commands/ListTagOptionsCommand";
import {
  type NotifyProvisionProductEngineWorkflowResultCommandInput,
  type NotifyProvisionProductEngineWorkflowResultCommandOutput,
  NotifyProvisionProductEngineWorkflowResultCommand,
} from "./commands/NotifyProvisionProductEngineWorkflowResultCommand";
import {
  type NotifyTerminateProvisionedProductEngineWorkflowResultCommandInput,
  type NotifyTerminateProvisionedProductEngineWorkflowResultCommandOutput,
  NotifyTerminateProvisionedProductEngineWorkflowResultCommand,
} from "./commands/NotifyTerminateProvisionedProductEngineWorkflowResultCommand";
import {
  type NotifyUpdateProvisionedProductEngineWorkflowResultCommandInput,
  type NotifyUpdateProvisionedProductEngineWorkflowResultCommandOutput,
  NotifyUpdateProvisionedProductEngineWorkflowResultCommand,
} from "./commands/NotifyUpdateProvisionedProductEngineWorkflowResultCommand";
import {
  type ProvisionProductCommandInput,
  type ProvisionProductCommandOutput,
  ProvisionProductCommand,
} from "./commands/ProvisionProductCommand";
import {
  type RejectPortfolioShareCommandInput,
  type RejectPortfolioShareCommandOutput,
  RejectPortfolioShareCommand,
} from "./commands/RejectPortfolioShareCommand";
import {
  type ScanProvisionedProductsCommandInput,
  type ScanProvisionedProductsCommandOutput,
  ScanProvisionedProductsCommand,
} from "./commands/ScanProvisionedProductsCommand";
import {
  type SearchProductsAsAdminCommandInput,
  type SearchProductsAsAdminCommandOutput,
  SearchProductsAsAdminCommand,
} from "./commands/SearchProductsAsAdminCommand";
import {
  type SearchProductsCommandInput,
  type SearchProductsCommandOutput,
  SearchProductsCommand,
} from "./commands/SearchProductsCommand";
import {
  type SearchProvisionedProductsCommandInput,
  type SearchProvisionedProductsCommandOutput,
  SearchProvisionedProductsCommand,
} from "./commands/SearchProvisionedProductsCommand";
import {
  type TerminateProvisionedProductCommandInput,
  type TerminateProvisionedProductCommandOutput,
  TerminateProvisionedProductCommand,
} from "./commands/TerminateProvisionedProductCommand";
import {
  type UpdateConstraintCommandInput,
  type UpdateConstraintCommandOutput,
  UpdateConstraintCommand,
} from "./commands/UpdateConstraintCommand";
import {
  type UpdatePortfolioCommandInput,
  type UpdatePortfolioCommandOutput,
  UpdatePortfolioCommand,
} from "./commands/UpdatePortfolioCommand";
import {
  type UpdatePortfolioShareCommandInput,
  type UpdatePortfolioShareCommandOutput,
  UpdatePortfolioShareCommand,
} from "./commands/UpdatePortfolioShareCommand";
import {
  type UpdateProductCommandInput,
  type UpdateProductCommandOutput,
  UpdateProductCommand,
} from "./commands/UpdateProductCommand";
import {
  type UpdateProvisionedProductCommandInput,
  type UpdateProvisionedProductCommandOutput,
  UpdateProvisionedProductCommand,
} from "./commands/UpdateProvisionedProductCommand";
import {
  type UpdateProvisionedProductPropertiesCommandInput,
  type UpdateProvisionedProductPropertiesCommandOutput,
  UpdateProvisionedProductPropertiesCommand,
} from "./commands/UpdateProvisionedProductPropertiesCommand";
import {
  type UpdateProvisioningArtifactCommandInput,
  type UpdateProvisioningArtifactCommandOutput,
  UpdateProvisioningArtifactCommand,
} from "./commands/UpdateProvisioningArtifactCommand";
import {
  type UpdateServiceActionCommandInput,
  type UpdateServiceActionCommandOutput,
  UpdateServiceActionCommand,
} from "./commands/UpdateServiceActionCommand";
import {
  type UpdateTagOptionCommandInput,
  type UpdateTagOptionCommandOutput,
  UpdateTagOptionCommand,
} from "./commands/UpdateTagOptionCommand";
import { paginateDescribePortfolioShares } from "./pagination/DescribePortfolioSharesPaginator";
import { paginateGetProvisionedProductOutputs } from "./pagination/GetProvisionedProductOutputsPaginator";
import { paginateListAcceptedPortfolioShares } from "./pagination/ListAcceptedPortfolioSharesPaginator";
import { paginateListBudgetsForResource } from "./pagination/ListBudgetsForResourcePaginator";
import { paginateListConstraintsForPortfolio } from "./pagination/ListConstraintsForPortfolioPaginator";
import { paginateListLaunchPaths } from "./pagination/ListLaunchPathsPaginator";
import { paginateListOrganizationPortfolioAccess } from "./pagination/ListOrganizationPortfolioAccessPaginator";
import { paginateListPortfolioAccess } from "./pagination/ListPortfolioAccessPaginator";
import { paginateListPortfoliosForProduct } from "./pagination/ListPortfoliosForProductPaginator";
import { paginateListPortfolios } from "./pagination/ListPortfoliosPaginator";
import { paginateListPrincipalsForPortfolio } from "./pagination/ListPrincipalsForPortfolioPaginator";
import {
  paginateListProvisioningArtifactsForServiceAction,
} from "./pagination/ListProvisioningArtifactsForServiceActionPaginator";
import { paginateListResourcesForTagOption } from "./pagination/ListResourcesForTagOptionPaginator";
import {
  paginateListServiceActionsForProvisioningArtifact,
} from "./pagination/ListServiceActionsForProvisioningArtifactPaginator";
import { paginateListServiceActions } from "./pagination/ListServiceActionsPaginator";
import { paginateListTagOptions } from "./pagination/ListTagOptionsPaginator";
import { paginateSearchProductsAsAdmin } from "./pagination/SearchProductsAsAdminPaginator";
import { paginateSearchProducts } from "./pagination/SearchProductsPaginator";
import { paginateSearchProvisionedProducts } from "./pagination/SearchProvisionedProductsPaginator";
import { ServiceCatalogClient } from "./ServiceCatalogClient";

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
const paginators = {
  paginateDescribePortfolioShares,
  paginateGetProvisionedProductOutputs,
  paginateListAcceptedPortfolioShares,
  paginateListBudgetsForResource,
  paginateListConstraintsForPortfolio,
  paginateListLaunchPaths,
  paginateListOrganizationPortfolioAccess,
  paginateListPortfolioAccess,
  paginateListPortfolios,
  paginateListPortfoliosForProduct,
  paginateListPrincipalsForPortfolio,
  paginateListProvisioningArtifactsForServiceAction,
  paginateListResourcesForTagOption,
  paginateListServiceActions,
  paginateListServiceActionsForProvisioningArtifact,
  paginateListTagOptions,
  paginateSearchProducts,
  paginateSearchProductsAsAdmin,
  paginateSearchProvisionedProducts,
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
  copyProduct(
    args: CopyProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyProductCommandOutput>;
  copyProduct(
    args: CopyProductCommandInput,
    cb: (err: any, data?: CopyProductCommandOutput) => void
  ): void;
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
  createPortfolio(
    args: CreatePortfolioCommandInput,
    cb: (err: any, data?: CreatePortfolioCommandOutput) => void
  ): void;
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
  createProduct(
    args: CreateProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProductCommandOutput>;
  createProduct(
    args: CreateProductCommandInput,
    cb: (err: any, data?: CreateProductCommandOutput) => void
  ): void;
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
  createTagOption(
    args: CreateTagOptionCommandInput,
    cb: (err: any, data?: CreateTagOptionCommandOutput) => void
  ): void;
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
  deletePortfolio(
    args: DeletePortfolioCommandInput,
    cb: (err: any, data?: DeletePortfolioCommandOutput) => void
  ): void;
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
  deleteProduct(
    args: DeleteProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProductCommandOutput>;
  deleteProduct(
    args: DeleteProductCommandInput,
    cb: (err: any, data?: DeleteProductCommandOutput) => void
  ): void;
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
  deleteTagOption(
    args: DeleteTagOptionCommandInput,
    cb: (err: any, data?: DeleteTagOptionCommandOutput) => void
  ): void;
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
  describeProduct(): Promise<DescribeProductCommandOutput>;
  describeProduct(
    args: DescribeProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProductCommandOutput>;
  describeProduct(
    args: DescribeProductCommandInput,
    cb: (err: any, data?: DescribeProductCommandOutput) => void
  ): void;
  describeProduct(
    args: DescribeProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProductCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProductAsAdminCommand}
   */
  describeProductAsAdmin(): Promise<DescribeProductAsAdminCommandOutput>;
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
  describeProvisionedProduct(): Promise<DescribeProvisionedProductCommandOutput>;
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
  describeProvisioningArtifact(): Promise<DescribeProvisioningArtifactCommandOutput>;
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
  describeProvisioningParameters(): Promise<DescribeProvisioningParametersCommandOutput>;
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
  describeRecord(
    args: DescribeRecordCommandInput,
    cb: (err: any, data?: DescribeRecordCommandOutput) => void
  ): void;
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
  disableAWSOrganizationsAccess(): Promise<DisableAWSOrganizationsAccessCommandOutput>;
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
  enableAWSOrganizationsAccess(): Promise<EnableAWSOrganizationsAccessCommandOutput>;
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
  getAWSOrganizationsAccessStatus(): Promise<GetAWSOrganizationsAccessStatusCommandOutput>;
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
  getProvisionedProductOutputs(): Promise<GetProvisionedProductOutputsCommandOutput>;
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
  listAcceptedPortfolioShares(): Promise<ListAcceptedPortfolioSharesCommandOutput>;
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
  listLaunchPaths(
    args: ListLaunchPathsCommandInput,
    cb: (err: any, data?: ListLaunchPathsCommandOutput) => void
  ): void;
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
  listPortfolios(): Promise<ListPortfoliosCommandOutput>;
  listPortfolios(
    args: ListPortfoliosCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPortfoliosCommandOutput>;
  listPortfolios(
    args: ListPortfoliosCommandInput,
    cb: (err: any, data?: ListPortfoliosCommandOutput) => void
  ): void;
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
  listProvisionedProductPlans(): Promise<ListProvisionedProductPlansCommandOutput>;
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
  listRecordHistory(): Promise<ListRecordHistoryCommandOutput>;
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
  listServiceActions(): Promise<ListServiceActionsCommandOutput>;
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
  listTagOptions(): Promise<ListTagOptionsCommandOutput>;
  listTagOptions(
    args: ListTagOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagOptionsCommandOutput>;
  listTagOptions(
    args: ListTagOptionsCommandInput,
    cb: (err: any, data?: ListTagOptionsCommandOutput) => void
  ): void;
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
  scanProvisionedProducts(): Promise<ScanProvisionedProductsCommandOutput>;
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
  searchProducts(): Promise<SearchProductsCommandOutput>;
  searchProducts(
    args: SearchProductsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchProductsCommandOutput>;
  searchProducts(
    args: SearchProductsCommandInput,
    cb: (err: any, data?: SearchProductsCommandOutput) => void
  ): void;
  searchProducts(
    args: SearchProductsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchProductsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchProductsAsAdminCommand}
   */
  searchProductsAsAdmin(): Promise<SearchProductsAsAdminCommandOutput>;
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
  searchProvisionedProducts(): Promise<SearchProvisionedProductsCommandOutput>;
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
  updatePortfolio(
    args: UpdatePortfolioCommandInput,
    cb: (err: any, data?: UpdatePortfolioCommandOutput) => void
  ): void;
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
  updateProduct(
    args: UpdateProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProductCommandOutput>;
  updateProduct(
    args: UpdateProductCommandInput,
    cb: (err: any, data?: UpdateProductCommandOutput) => void
  ): void;
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
  updateTagOption(
    args: UpdateTagOptionCommandInput,
    cb: (err: any, data?: UpdateTagOptionCommandOutput) => void
  ): void;
  updateTagOption(
    args: UpdateTagOptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTagOptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePortfolioSharesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribePortfolioSharesCommandOutput}.
   */
  paginateDescribePortfolioShares(
    args: DescribePortfolioSharesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribePortfolioSharesCommandOutput>;

  /**
   * @see {@link GetProvisionedProductOutputsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetProvisionedProductOutputsCommandOutput}.
   */
  paginateGetProvisionedProductOutputs(
    args?: GetProvisionedProductOutputsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetProvisionedProductOutputsCommandOutput>;

  /**
   * @see {@link ListAcceptedPortfolioSharesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAcceptedPortfolioSharesCommandOutput}.
   */
  paginateListAcceptedPortfolioShares(
    args?: ListAcceptedPortfolioSharesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAcceptedPortfolioSharesCommandOutput>;

  /**
   * @see {@link ListBudgetsForResourceCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBudgetsForResourceCommandOutput}.
   */
  paginateListBudgetsForResource(
    args: ListBudgetsForResourceCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBudgetsForResourceCommandOutput>;

  /**
   * @see {@link ListConstraintsForPortfolioCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListConstraintsForPortfolioCommandOutput}.
   */
  paginateListConstraintsForPortfolio(
    args: ListConstraintsForPortfolioCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListConstraintsForPortfolioCommandOutput>;

  /**
   * @see {@link ListLaunchPathsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLaunchPathsCommandOutput}.
   */
  paginateListLaunchPaths(
    args: ListLaunchPathsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLaunchPathsCommandOutput>;

  /**
   * @see {@link ListOrganizationPortfolioAccessCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOrganizationPortfolioAccessCommandOutput}.
   */
  paginateListOrganizationPortfolioAccess(
    args: ListOrganizationPortfolioAccessCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOrganizationPortfolioAccessCommandOutput>;

  /**
   * @see {@link ListPortfolioAccessCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPortfolioAccessCommandOutput}.
   */
  paginateListPortfolioAccess(
    args: ListPortfolioAccessCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPortfolioAccessCommandOutput>;

  /**
   * @see {@link ListPortfoliosCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPortfoliosCommandOutput}.
   */
  paginateListPortfolios(
    args?: ListPortfoliosCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPortfoliosCommandOutput>;

  /**
   * @see {@link ListPortfoliosForProductCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPortfoliosForProductCommandOutput}.
   */
  paginateListPortfoliosForProduct(
    args: ListPortfoliosForProductCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPortfoliosForProductCommandOutput>;

  /**
   * @see {@link ListPrincipalsForPortfolioCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPrincipalsForPortfolioCommandOutput}.
   */
  paginateListPrincipalsForPortfolio(
    args: ListPrincipalsForPortfolioCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPrincipalsForPortfolioCommandOutput>;

  /**
   * @see {@link ListProvisioningArtifactsForServiceActionCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProvisioningArtifactsForServiceActionCommandOutput}.
   */
  paginateListProvisioningArtifactsForServiceAction(
    args: ListProvisioningArtifactsForServiceActionCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProvisioningArtifactsForServiceActionCommandOutput>;

  /**
   * @see {@link ListResourcesForTagOptionCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResourcesForTagOptionCommandOutput}.
   */
  paginateListResourcesForTagOption(
    args: ListResourcesForTagOptionCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResourcesForTagOptionCommandOutput>;

  /**
   * @see {@link ListServiceActionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListServiceActionsCommandOutput}.
   */
  paginateListServiceActions(
    args?: ListServiceActionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListServiceActionsCommandOutput>;

  /**
   * @see {@link ListServiceActionsForProvisioningArtifactCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListServiceActionsForProvisioningArtifactCommandOutput}.
   */
  paginateListServiceActionsForProvisioningArtifact(
    args: ListServiceActionsForProvisioningArtifactCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListServiceActionsForProvisioningArtifactCommandOutput>;

  /**
   * @see {@link ListTagOptionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTagOptionsCommandOutput}.
   */
  paginateListTagOptions(
    args?: ListTagOptionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTagOptionsCommandOutput>;

  /**
   * @see {@link SearchProductsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchProductsCommandOutput}.
   */
  paginateSearchProducts(
    args?: SearchProductsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchProductsCommandOutput>;

  /**
   * @see {@link SearchProductsAsAdminCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchProductsAsAdminCommandOutput}.
   */
  paginateSearchProductsAsAdmin(
    args?: SearchProductsAsAdminCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchProductsAsAdminCommandOutput>;

  /**
   * @see {@link SearchProvisionedProductsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchProvisionedProductsCommandOutput}.
   */
  paginateSearchProvisionedProducts(
    args?: SearchProvisionedProductsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchProvisionedProductsCommandOutput>;
}

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
export class ServiceCatalog extends ServiceCatalogClient implements ServiceCatalog {}
createAggregatedClient(commands, ServiceCatalog, { paginators });
