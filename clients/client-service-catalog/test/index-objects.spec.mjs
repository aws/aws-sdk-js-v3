import {
  AcceptPortfolioShareCommand,
  AccessLevelFilterKey,
  AccessStatus,
  AssociateBudgetWithResourceCommand,
  AssociatePrincipalWithPortfolioCommand,
  AssociateProductWithPortfolioCommand,
  AssociateServiceActionWithProvisioningArtifactCommand,
  AssociateTagOptionWithResourceCommand,
  BatchAssociateServiceActionWithProvisioningArtifactCommand,
  BatchDisassociateServiceActionFromProvisioningArtifactCommand,
  ChangeAction,
  CopyOption,
  CopyProductCommand,
  CopyProductStatus,
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
  DescribePortfolioShareStatusCommand,
  DescribePortfolioShareType,
  DescribePortfolioSharesCommand,
  DescribeProductAsAdminCommand,
  DescribeProductCommand,
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
  DuplicateResourceException,
  EnableAWSOrganizationsAccessCommand,
  EngineWorkflowStatus,
  EvaluationType,
  ExecuteProvisionedProductPlanCommand,
  ExecuteProvisionedProductServiceActionCommand,
  GetAWSOrganizationsAccessStatusCommand,
  GetProvisionedProductOutputsCommand,
  ImportAsProvisionedProductCommand,
  InvalidParametersException,
  InvalidStateException,
  LastSyncStatus,
  LimitExceededException,
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
  OperationNotSupportedException,
  OrganizationNodeType,
  PortfolioShareType,
  PrincipalType,
  ProductSource,
  ProductType,
  ProductViewFilterBy,
  ProductViewSortBy,
  PropertyKey,
  ProvisionProductCommand,
  ProvisionedProductPlanStatus,
  ProvisionedProductPlanType,
  ProvisionedProductStatus,
  ProvisionedProductViewFilterBy,
  ProvisioningArtifactGuidance,
  ProvisioningArtifactPropertyName,
  ProvisioningArtifactType,
  RecordStatus,
  RejectPortfolioShareCommand,
  Replacement,
  RequiresRecreation,
  ResourceAttribute,
  ResourceInUseException,
  ResourceNotFoundException,
  ScanProvisionedProductsCommand,
  SearchProductsAsAdminCommand,
  SearchProductsCommand,
  SearchProvisionedProductsCommand,
  ServiceActionAssociationErrorCode,
  ServiceActionDefinitionKey,
  ServiceActionDefinitionType,
  ServiceCatalog,
  ServiceCatalogClient,
  ServiceCatalogServiceException,
  ShareStatus,
  SortOrder,
  SourceType,
  StackInstanceStatus,
  StackSetOperationType,
  Status,
  TagOptionNotMigratedException,
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
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ServiceCatalogClient === "function");
assert(typeof ServiceCatalog === "function");
// commands
assert(typeof AcceptPortfolioShareCommand === "function");
assert(typeof AssociateBudgetWithResourceCommand === "function");
assert(typeof AssociatePrincipalWithPortfolioCommand === "function");
assert(typeof AssociateProductWithPortfolioCommand === "function");
assert(typeof AssociateServiceActionWithProvisioningArtifactCommand === "function");
assert(typeof AssociateTagOptionWithResourceCommand === "function");
assert(typeof BatchAssociateServiceActionWithProvisioningArtifactCommand === "function");
assert(typeof BatchDisassociateServiceActionFromProvisioningArtifactCommand === "function");
assert(typeof CopyProductCommand === "function");
assert(typeof CreateConstraintCommand === "function");
assert(typeof CreatePortfolioCommand === "function");
assert(typeof CreatePortfolioShareCommand === "function");
assert(typeof CreateProductCommand === "function");
assert(typeof CreateProvisionedProductPlanCommand === "function");
assert(typeof CreateProvisioningArtifactCommand === "function");
assert(typeof CreateServiceActionCommand === "function");
assert(typeof CreateTagOptionCommand === "function");
assert(typeof DeleteConstraintCommand === "function");
assert(typeof DeletePortfolioCommand === "function");
assert(typeof DeletePortfolioShareCommand === "function");
assert(typeof DeleteProductCommand === "function");
assert(typeof DeleteProvisionedProductPlanCommand === "function");
assert(typeof DeleteProvisioningArtifactCommand === "function");
assert(typeof DeleteServiceActionCommand === "function");
assert(typeof DeleteTagOptionCommand === "function");
assert(typeof DescribeConstraintCommand === "function");
assert(typeof DescribeCopyProductStatusCommand === "function");
assert(typeof DescribePortfolioCommand === "function");
assert(typeof DescribePortfolioSharesCommand === "function");
assert(typeof DescribePortfolioShareStatusCommand === "function");
assert(typeof DescribeProductCommand === "function");
assert(typeof DescribeProductAsAdminCommand === "function");
assert(typeof DescribeProductViewCommand === "function");
assert(typeof DescribeProvisionedProductCommand === "function");
assert(typeof DescribeProvisionedProductPlanCommand === "function");
assert(typeof DescribeProvisioningArtifactCommand === "function");
assert(typeof DescribeProvisioningParametersCommand === "function");
assert(typeof DescribeRecordCommand === "function");
assert(typeof DescribeServiceActionCommand === "function");
assert(typeof DescribeServiceActionExecutionParametersCommand === "function");
assert(typeof DescribeTagOptionCommand === "function");
assert(typeof DisableAWSOrganizationsAccessCommand === "function");
assert(typeof DisassociateBudgetFromResourceCommand === "function");
assert(typeof DisassociatePrincipalFromPortfolioCommand === "function");
assert(typeof DisassociateProductFromPortfolioCommand === "function");
assert(typeof DisassociateServiceActionFromProvisioningArtifactCommand === "function");
assert(typeof DisassociateTagOptionFromResourceCommand === "function");
assert(typeof EnableAWSOrganizationsAccessCommand === "function");
assert(typeof ExecuteProvisionedProductPlanCommand === "function");
assert(typeof ExecuteProvisionedProductServiceActionCommand === "function");
assert(typeof GetAWSOrganizationsAccessStatusCommand === "function");
assert(typeof GetProvisionedProductOutputsCommand === "function");
assert(typeof ImportAsProvisionedProductCommand === "function");
assert(typeof ListAcceptedPortfolioSharesCommand === "function");
assert(typeof ListBudgetsForResourceCommand === "function");
assert(typeof ListConstraintsForPortfolioCommand === "function");
assert(typeof ListLaunchPathsCommand === "function");
assert(typeof ListOrganizationPortfolioAccessCommand === "function");
assert(typeof ListPortfolioAccessCommand === "function");
assert(typeof ListPortfoliosCommand === "function");
assert(typeof ListPortfoliosForProductCommand === "function");
assert(typeof ListPrincipalsForPortfolioCommand === "function");
assert(typeof ListProvisionedProductPlansCommand === "function");
assert(typeof ListProvisioningArtifactsCommand === "function");
assert(typeof ListProvisioningArtifactsForServiceActionCommand === "function");
assert(typeof ListRecordHistoryCommand === "function");
assert(typeof ListResourcesForTagOptionCommand === "function");
assert(typeof ListServiceActionsCommand === "function");
assert(typeof ListServiceActionsForProvisioningArtifactCommand === "function");
assert(typeof ListStackInstancesForProvisionedProductCommand === "function");
assert(typeof ListTagOptionsCommand === "function");
assert(typeof NotifyProvisionProductEngineWorkflowResultCommand === "function");
assert(typeof NotifyTerminateProvisionedProductEngineWorkflowResultCommand === "function");
assert(typeof NotifyUpdateProvisionedProductEngineWorkflowResultCommand === "function");
assert(typeof ProvisionProductCommand === "function");
assert(typeof RejectPortfolioShareCommand === "function");
assert(typeof ScanProvisionedProductsCommand === "function");
assert(typeof SearchProductsCommand === "function");
assert(typeof SearchProductsAsAdminCommand === "function");
assert(typeof SearchProvisionedProductsCommand === "function");
assert(typeof TerminateProvisionedProductCommand === "function");
assert(typeof UpdateConstraintCommand === "function");
assert(typeof UpdatePortfolioCommand === "function");
assert(typeof UpdatePortfolioShareCommand === "function");
assert(typeof UpdateProductCommand === "function");
assert(typeof UpdateProvisionedProductCommand === "function");
assert(typeof UpdateProvisionedProductPropertiesCommand === "function");
assert(typeof UpdateProvisioningArtifactCommand === "function");
assert(typeof UpdateServiceActionCommand === "function");
assert(typeof UpdateTagOptionCommand === "function");
// enums
assert(typeof AccessLevelFilterKey === "object");
assert(typeof AccessStatus === "object");
assert(typeof ChangeAction === "object");
assert(typeof CopyOption === "object");
assert(typeof CopyProductStatus === "object");
assert(typeof DescribePortfolioShareType === "object");
assert(typeof EngineWorkflowStatus === "object");
assert(typeof EvaluationType === "object");
assert(typeof LastSyncStatus === "object");
assert(typeof OrganizationNodeType === "object");
assert(typeof PortfolioShareType === "object");
assert(typeof PrincipalType === "object");
assert(typeof ProductSource === "object");
assert(typeof ProductType === "object");
assert(typeof ProductViewFilterBy === "object");
assert(typeof ProductViewSortBy === "object");
assert(typeof PropertyKey === "object");
assert(typeof ProvisionedProductPlanStatus === "object");
assert(typeof ProvisionedProductPlanType === "object");
assert(typeof ProvisionedProductStatus === "object");
assert(typeof ProvisionedProductViewFilterBy === "object");
assert(typeof ProvisioningArtifactGuidance === "object");
assert(typeof ProvisioningArtifactPropertyName === "object");
assert(typeof ProvisioningArtifactType === "object");
assert(typeof RecordStatus === "object");
assert(typeof Replacement === "object");
assert(typeof RequiresRecreation === "object");
assert(typeof ResourceAttribute === "object");
assert(typeof ServiceActionAssociationErrorCode === "object");
assert(typeof ServiceActionDefinitionKey === "object");
assert(typeof ServiceActionDefinitionType === "object");
assert(typeof ShareStatus === "object");
assert(typeof SortOrder === "object");
assert(typeof SourceType === "object");
assert(typeof StackInstanceStatus === "object");
assert(typeof StackSetOperationType === "object");
assert(typeof Status === "object");
// errors
assert(DuplicateResourceException.prototype instanceof ServiceCatalogServiceException);
assert(InvalidParametersException.prototype instanceof ServiceCatalogServiceException);
assert(InvalidStateException.prototype instanceof ServiceCatalogServiceException);
assert(LimitExceededException.prototype instanceof ServiceCatalogServiceException);
assert(OperationNotSupportedException.prototype instanceof ServiceCatalogServiceException);
assert(ResourceInUseException.prototype instanceof ServiceCatalogServiceException);
assert(ResourceNotFoundException.prototype instanceof ServiceCatalogServiceException);
assert(TagOptionNotMigratedException.prototype instanceof ServiceCatalogServiceException);
assert(ServiceCatalogServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribePortfolioShares === "function");
assert(typeof paginateGetProvisionedProductOutputs === "function");
assert(typeof paginateListAcceptedPortfolioShares === "function");
assert(typeof paginateListBudgetsForResource === "function");
assert(typeof paginateListConstraintsForPortfolio === "function");
assert(typeof paginateListLaunchPaths === "function");
assert(typeof paginateListOrganizationPortfolioAccess === "function");
assert(typeof paginateListPortfolioAccess === "function");
assert(typeof paginateListPortfolios === "function");
assert(typeof paginateListPortfoliosForProduct === "function");
assert(typeof paginateListPrincipalsForPortfolio === "function");
assert(typeof paginateListProvisioningArtifactsForServiceAction === "function");
assert(typeof paginateListResourcesForTagOption === "function");
assert(typeof paginateListServiceActions === "function");
assert(typeof paginateListServiceActionsForProvisioningArtifact === "function");
assert(typeof paginateListTagOptions === "function");
assert(typeof paginateSearchProducts === "function");
assert(typeof paginateSearchProductsAsAdmin === "function");
assert(typeof paginateSearchProvisionedProducts === "function");
console.log(`ServiceCatalog index test passed.`);
