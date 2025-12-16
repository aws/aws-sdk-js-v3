import {
  AcceptPortfolioShare$,
  AcceptPortfolioShareCommand,
  AcceptPortfolioShareInput$,
  AcceptPortfolioShareOutput$,
  AccessLevelFilter$,
  AccessLevelFilterKey,
  AccessStatus,
  AssociateBudgetWithResource$,
  AssociateBudgetWithResourceCommand,
  AssociateBudgetWithResourceInput$,
  AssociateBudgetWithResourceOutput$,
  AssociatePrincipalWithPortfolio$,
  AssociatePrincipalWithPortfolioCommand,
  AssociatePrincipalWithPortfolioInput$,
  AssociatePrincipalWithPortfolioOutput$,
  AssociateProductWithPortfolio$,
  AssociateProductWithPortfolioCommand,
  AssociateProductWithPortfolioInput$,
  AssociateProductWithPortfolioOutput$,
  AssociateServiceActionWithProvisioningArtifact$,
  AssociateServiceActionWithProvisioningArtifactCommand,
  AssociateServiceActionWithProvisioningArtifactInput$,
  AssociateServiceActionWithProvisioningArtifactOutput$,
  AssociateTagOptionWithResource$,
  AssociateTagOptionWithResourceCommand,
  AssociateTagOptionWithResourceInput$,
  AssociateTagOptionWithResourceOutput$,
  BatchAssociateServiceActionWithProvisioningArtifact$,
  BatchAssociateServiceActionWithProvisioningArtifactCommand,
  BatchAssociateServiceActionWithProvisioningArtifactInput$,
  BatchAssociateServiceActionWithProvisioningArtifactOutput$,
  BatchDisassociateServiceActionFromProvisioningArtifact$,
  BatchDisassociateServiceActionFromProvisioningArtifactCommand,
  BatchDisassociateServiceActionFromProvisioningArtifactInput$,
  BatchDisassociateServiceActionFromProvisioningArtifactOutput$,
  BudgetDetail$,
  ChangeAction,
  CloudWatchDashboard$,
  CodeStarParameters$,
  ConstraintDetail$,
  ConstraintSummary$,
  CopyOption,
  CopyProduct$,
  CopyProductCommand,
  CopyProductInput$,
  CopyProductOutput$,
  CopyProductStatus,
  CreateConstraint$,
  CreateConstraintCommand,
  CreateConstraintInput$,
  CreateConstraintOutput$,
  CreatePortfolio$,
  CreatePortfolioCommand,
  CreatePortfolioInput$,
  CreatePortfolioOutput$,
  CreatePortfolioShare$,
  CreatePortfolioShareCommand,
  CreatePortfolioShareInput$,
  CreatePortfolioShareOutput$,
  CreateProduct$,
  CreateProductCommand,
  CreateProductInput$,
  CreateProductOutput$,
  CreateProvisionedProductPlan$,
  CreateProvisionedProductPlanCommand,
  CreateProvisionedProductPlanInput$,
  CreateProvisionedProductPlanOutput$,
  CreateProvisioningArtifact$,
  CreateProvisioningArtifactCommand,
  CreateProvisioningArtifactInput$,
  CreateProvisioningArtifactOutput$,
  CreateServiceAction$,
  CreateServiceActionCommand,
  CreateServiceActionInput$,
  CreateServiceActionOutput$,
  CreateTagOption$,
  CreateTagOptionCommand,
  CreateTagOptionInput$,
  CreateTagOptionOutput$,
  DeleteConstraint$,
  DeleteConstraintCommand,
  DeleteConstraintInput$,
  DeleteConstraintOutput$,
  DeletePortfolio$,
  DeletePortfolioCommand,
  DeletePortfolioInput$,
  DeletePortfolioOutput$,
  DeletePortfolioShare$,
  DeletePortfolioShareCommand,
  DeletePortfolioShareInput$,
  DeletePortfolioShareOutput$,
  DeleteProduct$,
  DeleteProductCommand,
  DeleteProductInput$,
  DeleteProductOutput$,
  DeleteProvisionedProductPlan$,
  DeleteProvisionedProductPlanCommand,
  DeleteProvisionedProductPlanInput$,
  DeleteProvisionedProductPlanOutput$,
  DeleteProvisioningArtifact$,
  DeleteProvisioningArtifactCommand,
  DeleteProvisioningArtifactInput$,
  DeleteProvisioningArtifactOutput$,
  DeleteServiceAction$,
  DeleteServiceActionCommand,
  DeleteServiceActionInput$,
  DeleteServiceActionOutput$,
  DeleteTagOption$,
  DeleteTagOptionCommand,
  DeleteTagOptionInput$,
  DeleteTagOptionOutput$,
  DescribeConstraint$,
  DescribeConstraintCommand,
  DescribeConstraintInput$,
  DescribeConstraintOutput$,
  DescribeCopyProductStatus$,
  DescribeCopyProductStatusCommand,
  DescribeCopyProductStatusInput$,
  DescribeCopyProductStatusOutput$,
  DescribePortfolio$,
  DescribePortfolioCommand,
  DescribePortfolioInput$,
  DescribePortfolioOutput$,
  DescribePortfolioShareStatus$,
  DescribePortfolioShareStatusCommand,
  DescribePortfolioShareStatusInput$,
  DescribePortfolioShareStatusOutput$,
  DescribePortfolioShareType,
  DescribePortfolioShares$,
  DescribePortfolioSharesCommand,
  DescribePortfolioSharesInput$,
  DescribePortfolioSharesOutput$,
  DescribeProduct$,
  DescribeProductAsAdmin$,
  DescribeProductAsAdminCommand,
  DescribeProductAsAdminInput$,
  DescribeProductAsAdminOutput$,
  DescribeProductCommand,
  DescribeProductInput$,
  DescribeProductOutput$,
  DescribeProductView$,
  DescribeProductViewCommand,
  DescribeProductViewInput$,
  DescribeProductViewOutput$,
  DescribeProvisionedProduct$,
  DescribeProvisionedProductCommand,
  DescribeProvisionedProductInput$,
  DescribeProvisionedProductOutput$,
  DescribeProvisionedProductPlan$,
  DescribeProvisionedProductPlanCommand,
  DescribeProvisionedProductPlanInput$,
  DescribeProvisionedProductPlanOutput$,
  DescribeProvisioningArtifact$,
  DescribeProvisioningArtifactCommand,
  DescribeProvisioningArtifactInput$,
  DescribeProvisioningArtifactOutput$,
  DescribeProvisioningParameters$,
  DescribeProvisioningParametersCommand,
  DescribeProvisioningParametersInput$,
  DescribeProvisioningParametersOutput$,
  DescribeRecord$,
  DescribeRecordCommand,
  DescribeRecordInput$,
  DescribeRecordOutput$,
  DescribeServiceAction$,
  DescribeServiceActionCommand,
  DescribeServiceActionExecutionParameters$,
  DescribeServiceActionExecutionParametersCommand,
  DescribeServiceActionExecutionParametersInput$,
  DescribeServiceActionExecutionParametersOutput$,
  DescribeServiceActionInput$,
  DescribeServiceActionOutput$,
  DescribeTagOption$,
  DescribeTagOptionCommand,
  DescribeTagOptionInput$,
  DescribeTagOptionOutput$,
  DisableAWSOrganizationsAccess$,
  DisableAWSOrganizationsAccessCommand,
  DisableAWSOrganizationsAccessInput$,
  DisableAWSOrganizationsAccessOutput$,
  DisassociateBudgetFromResource$,
  DisassociateBudgetFromResourceCommand,
  DisassociateBudgetFromResourceInput$,
  DisassociateBudgetFromResourceOutput$,
  DisassociatePrincipalFromPortfolio$,
  DisassociatePrincipalFromPortfolioCommand,
  DisassociatePrincipalFromPortfolioInput$,
  DisassociatePrincipalFromPortfolioOutput$,
  DisassociateProductFromPortfolio$,
  DisassociateProductFromPortfolioCommand,
  DisassociateProductFromPortfolioInput$,
  DisassociateProductFromPortfolioOutput$,
  DisassociateServiceActionFromProvisioningArtifact$,
  DisassociateServiceActionFromProvisioningArtifactCommand,
  DisassociateServiceActionFromProvisioningArtifactInput$,
  DisassociateServiceActionFromProvisioningArtifactOutput$,
  DisassociateTagOptionFromResource$,
  DisassociateTagOptionFromResourceCommand,
  DisassociateTagOptionFromResourceInput$,
  DisassociateTagOptionFromResourceOutput$,
  DuplicateResourceException,
  DuplicateResourceException$,
  EnableAWSOrganizationsAccess$,
  EnableAWSOrganizationsAccessCommand,
  EnableAWSOrganizationsAccessInput$,
  EnableAWSOrganizationsAccessOutput$,
  EngineWorkflowResourceIdentifier$,
  EngineWorkflowStatus,
  EvaluationType,
  ExecuteProvisionedProductPlan$,
  ExecuteProvisionedProductPlanCommand,
  ExecuteProvisionedProductPlanInput$,
  ExecuteProvisionedProductPlanOutput$,
  ExecuteProvisionedProductServiceAction$,
  ExecuteProvisionedProductServiceActionCommand,
  ExecuteProvisionedProductServiceActionInput$,
  ExecuteProvisionedProductServiceActionOutput$,
  ExecutionParameter$,
  FailedServiceActionAssociation$,
  GetAWSOrganizationsAccessStatus$,
  GetAWSOrganizationsAccessStatusCommand,
  GetAWSOrganizationsAccessStatusInput$,
  GetAWSOrganizationsAccessStatusOutput$,
  GetProvisionedProductOutputs$,
  GetProvisionedProductOutputsCommand,
  GetProvisionedProductOutputsInput$,
  GetProvisionedProductOutputsOutput$,
  ImportAsProvisionedProduct$,
  ImportAsProvisionedProductCommand,
  ImportAsProvisionedProductInput$,
  ImportAsProvisionedProductOutput$,
  InvalidParametersException,
  InvalidParametersException$,
  InvalidStateException,
  InvalidStateException$,
  LastSync$,
  LastSyncStatus,
  LaunchPath$,
  LaunchPathSummary$,
  LimitExceededException,
  LimitExceededException$,
  ListAcceptedPortfolioShares$,
  ListAcceptedPortfolioSharesCommand,
  ListAcceptedPortfolioSharesInput$,
  ListAcceptedPortfolioSharesOutput$,
  ListBudgetsForResource$,
  ListBudgetsForResourceCommand,
  ListBudgetsForResourceInput$,
  ListBudgetsForResourceOutput$,
  ListConstraintsForPortfolio$,
  ListConstraintsForPortfolioCommand,
  ListConstraintsForPortfolioInput$,
  ListConstraintsForPortfolioOutput$,
  ListLaunchPaths$,
  ListLaunchPathsCommand,
  ListLaunchPathsInput$,
  ListLaunchPathsOutput$,
  ListOrganizationPortfolioAccess$,
  ListOrganizationPortfolioAccessCommand,
  ListOrganizationPortfolioAccessInput$,
  ListOrganizationPortfolioAccessOutput$,
  ListPortfolioAccess$,
  ListPortfolioAccessCommand,
  ListPortfolioAccessInput$,
  ListPortfolioAccessOutput$,
  ListPortfolios$,
  ListPortfoliosCommand,
  ListPortfoliosForProduct$,
  ListPortfoliosForProductCommand,
  ListPortfoliosForProductInput$,
  ListPortfoliosForProductOutput$,
  ListPortfoliosInput$,
  ListPortfoliosOutput$,
  ListPrincipalsForPortfolio$,
  ListPrincipalsForPortfolioCommand,
  ListPrincipalsForPortfolioInput$,
  ListPrincipalsForPortfolioOutput$,
  ListProvisionedProductPlans$,
  ListProvisionedProductPlansCommand,
  ListProvisionedProductPlansInput$,
  ListProvisionedProductPlansOutput$,
  ListProvisioningArtifacts$,
  ListProvisioningArtifactsCommand,
  ListProvisioningArtifactsForServiceAction$,
  ListProvisioningArtifactsForServiceActionCommand,
  ListProvisioningArtifactsForServiceActionInput$,
  ListProvisioningArtifactsForServiceActionOutput$,
  ListProvisioningArtifactsInput$,
  ListProvisioningArtifactsOutput$,
  ListRecordHistory$,
  ListRecordHistoryCommand,
  ListRecordHistoryInput$,
  ListRecordHistoryOutput$,
  ListRecordHistorySearchFilter$,
  ListResourcesForTagOption$,
  ListResourcesForTagOptionCommand,
  ListResourcesForTagOptionInput$,
  ListResourcesForTagOptionOutput$,
  ListServiceActions$,
  ListServiceActionsCommand,
  ListServiceActionsForProvisioningArtifact$,
  ListServiceActionsForProvisioningArtifactCommand,
  ListServiceActionsForProvisioningArtifactInput$,
  ListServiceActionsForProvisioningArtifactOutput$,
  ListServiceActionsInput$,
  ListServiceActionsOutput$,
  ListStackInstancesForProvisionedProduct$,
  ListStackInstancesForProvisionedProductCommand,
  ListStackInstancesForProvisionedProductInput$,
  ListStackInstancesForProvisionedProductOutput$,
  ListTagOptions$,
  ListTagOptionsCommand,
  ListTagOptionsFilters$,
  ListTagOptionsInput$,
  ListTagOptionsOutput$,
  NotifyProvisionProductEngineWorkflowResult$,
  NotifyProvisionProductEngineWorkflowResultCommand,
  NotifyProvisionProductEngineWorkflowResultInput$,
  NotifyProvisionProductEngineWorkflowResultOutput$,
  NotifyTerminateProvisionedProductEngineWorkflowResult$,
  NotifyTerminateProvisionedProductEngineWorkflowResultCommand,
  NotifyTerminateProvisionedProductEngineWorkflowResultInput$,
  NotifyTerminateProvisionedProductEngineWorkflowResultOutput$,
  NotifyUpdateProvisionedProductEngineWorkflowResult$,
  NotifyUpdateProvisionedProductEngineWorkflowResultCommand,
  NotifyUpdateProvisionedProductEngineWorkflowResultInput$,
  NotifyUpdateProvisionedProductEngineWorkflowResultOutput$,
  OperationNotSupportedException,
  OperationNotSupportedException$,
  OrganizationNode$,
  OrganizationNodeType,
  ParameterConstraints$,
  PortfolioDetail$,
  PortfolioShareDetail$,
  PortfolioShareType,
  Principal$,
  PrincipalType,
  ProductSource,
  ProductType,
  ProductViewAggregationValue$,
  ProductViewDetail$,
  ProductViewFilterBy,
  ProductViewSortBy,
  ProductViewSummary$,
  PropertyKey,
  ProvisionProduct$,
  ProvisionProductCommand,
  ProvisionProductInput$,
  ProvisionProductOutput$,
  ProvisionedProductAttribute$,
  ProvisionedProductDetail$,
  ProvisionedProductPlanDetails$,
  ProvisionedProductPlanStatus,
  ProvisionedProductPlanSummary$,
  ProvisionedProductPlanType,
  ProvisionedProductStatus,
  ProvisionedProductViewFilterBy,
  ProvisioningArtifact$,
  ProvisioningArtifactDetail$,
  ProvisioningArtifactGuidance,
  ProvisioningArtifactOutput$,
  ProvisioningArtifactParameter$,
  ProvisioningArtifactPreferences$,
  ProvisioningArtifactProperties$,
  ProvisioningArtifactPropertyName,
  ProvisioningArtifactSummary$,
  ProvisioningArtifactType,
  ProvisioningArtifactView$,
  ProvisioningParameter$,
  ProvisioningPreferences$,
  RecordDetail$,
  RecordError$,
  RecordOutput$,
  RecordStatus,
  RecordTag$,
  RejectPortfolioShare$,
  RejectPortfolioShareCommand,
  RejectPortfolioShareInput$,
  RejectPortfolioShareOutput$,
  Replacement,
  RequiresRecreation,
  ResourceAttribute,
  ResourceChange$,
  ResourceChangeDetail$,
  ResourceDetail$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceTargetDefinition$,
  ScanProvisionedProducts$,
  ScanProvisionedProductsCommand,
  ScanProvisionedProductsInput$,
  ScanProvisionedProductsOutput$,
  SearchProducts$,
  SearchProductsAsAdmin$,
  SearchProductsAsAdminCommand,
  SearchProductsAsAdminInput$,
  SearchProductsAsAdminOutput$,
  SearchProductsCommand,
  SearchProductsInput$,
  SearchProductsOutput$,
  SearchProvisionedProducts$,
  SearchProvisionedProductsCommand,
  SearchProvisionedProductsInput$,
  SearchProvisionedProductsOutput$,
  ServiceActionAssociation$,
  ServiceActionAssociationErrorCode,
  ServiceActionDefinitionKey,
  ServiceActionDefinitionType,
  ServiceActionDetail$,
  ServiceActionSummary$,
  ServiceCatalog,
  ServiceCatalogClient,
  ServiceCatalogServiceException,
  ShareDetails$,
  ShareError$,
  ShareStatus,
  SortOrder,
  SourceConnection$,
  SourceConnectionDetail$,
  SourceConnectionParameters$,
  SourceType,
  StackInstance$,
  StackInstanceStatus,
  StackSetOperationType,
  Status,
  Tag$,
  TagOptionDetail$,
  TagOptionNotMigratedException,
  TagOptionNotMigratedException$,
  TagOptionSummary$,
  TerminateProvisionedProduct$,
  TerminateProvisionedProductCommand,
  TerminateProvisionedProductInput$,
  TerminateProvisionedProductOutput$,
  UniqueTagResourceIdentifier$,
  UpdateConstraint$,
  UpdateConstraintCommand,
  UpdateConstraintInput$,
  UpdateConstraintOutput$,
  UpdatePortfolio$,
  UpdatePortfolioCommand,
  UpdatePortfolioInput$,
  UpdatePortfolioOutput$,
  UpdatePortfolioShare$,
  UpdatePortfolioShareCommand,
  UpdatePortfolioShareInput$,
  UpdatePortfolioShareOutput$,
  UpdateProduct$,
  UpdateProductCommand,
  UpdateProductInput$,
  UpdateProductOutput$,
  UpdateProvisionedProduct$,
  UpdateProvisionedProductCommand,
  UpdateProvisionedProductInput$,
  UpdateProvisionedProductOutput$,
  UpdateProvisionedProductProperties$,
  UpdateProvisionedProductPropertiesCommand,
  UpdateProvisionedProductPropertiesInput$,
  UpdateProvisionedProductPropertiesOutput$,
  UpdateProvisioningArtifact$,
  UpdateProvisioningArtifactCommand,
  UpdateProvisioningArtifactInput$,
  UpdateProvisioningArtifactOutput$,
  UpdateProvisioningParameter$,
  UpdateProvisioningPreferences$,
  UpdateServiceAction$,
  UpdateServiceActionCommand,
  UpdateServiceActionInput$,
  UpdateServiceActionOutput$,
  UpdateTagOption$,
  UpdateTagOptionCommand,
  UpdateTagOptionInput$,
  UpdateTagOptionOutput$,
  UsageInstruction$,
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
assert(typeof AcceptPortfolioShare$ === "object");
assert(typeof AssociateBudgetWithResourceCommand === "function");
assert(typeof AssociateBudgetWithResource$ === "object");
assert(typeof AssociatePrincipalWithPortfolioCommand === "function");
assert(typeof AssociatePrincipalWithPortfolio$ === "object");
assert(typeof AssociateProductWithPortfolioCommand === "function");
assert(typeof AssociateProductWithPortfolio$ === "object");
assert(typeof AssociateServiceActionWithProvisioningArtifactCommand === "function");
assert(typeof AssociateServiceActionWithProvisioningArtifact$ === "object");
assert(typeof AssociateTagOptionWithResourceCommand === "function");
assert(typeof AssociateTagOptionWithResource$ === "object");
assert(typeof BatchAssociateServiceActionWithProvisioningArtifactCommand === "function");
assert(typeof BatchAssociateServiceActionWithProvisioningArtifact$ === "object");
assert(typeof BatchDisassociateServiceActionFromProvisioningArtifactCommand === "function");
assert(typeof BatchDisassociateServiceActionFromProvisioningArtifact$ === "object");
assert(typeof CopyProductCommand === "function");
assert(typeof CopyProduct$ === "object");
assert(typeof CreateConstraintCommand === "function");
assert(typeof CreateConstraint$ === "object");
assert(typeof CreatePortfolioCommand === "function");
assert(typeof CreatePortfolio$ === "object");
assert(typeof CreatePortfolioShareCommand === "function");
assert(typeof CreatePortfolioShare$ === "object");
assert(typeof CreateProductCommand === "function");
assert(typeof CreateProduct$ === "object");
assert(typeof CreateProvisionedProductPlanCommand === "function");
assert(typeof CreateProvisionedProductPlan$ === "object");
assert(typeof CreateProvisioningArtifactCommand === "function");
assert(typeof CreateProvisioningArtifact$ === "object");
assert(typeof CreateServiceActionCommand === "function");
assert(typeof CreateServiceAction$ === "object");
assert(typeof CreateTagOptionCommand === "function");
assert(typeof CreateTagOption$ === "object");
assert(typeof DeleteConstraintCommand === "function");
assert(typeof DeleteConstraint$ === "object");
assert(typeof DeletePortfolioCommand === "function");
assert(typeof DeletePortfolio$ === "object");
assert(typeof DeletePortfolioShareCommand === "function");
assert(typeof DeletePortfolioShare$ === "object");
assert(typeof DeleteProductCommand === "function");
assert(typeof DeleteProduct$ === "object");
assert(typeof DeleteProvisionedProductPlanCommand === "function");
assert(typeof DeleteProvisionedProductPlan$ === "object");
assert(typeof DeleteProvisioningArtifactCommand === "function");
assert(typeof DeleteProvisioningArtifact$ === "object");
assert(typeof DeleteServiceActionCommand === "function");
assert(typeof DeleteServiceAction$ === "object");
assert(typeof DeleteTagOptionCommand === "function");
assert(typeof DeleteTagOption$ === "object");
assert(typeof DescribeConstraintCommand === "function");
assert(typeof DescribeConstraint$ === "object");
assert(typeof DescribeCopyProductStatusCommand === "function");
assert(typeof DescribeCopyProductStatus$ === "object");
assert(typeof DescribePortfolioCommand === "function");
assert(typeof DescribePortfolio$ === "object");
assert(typeof DescribePortfolioSharesCommand === "function");
assert(typeof DescribePortfolioShares$ === "object");
assert(typeof DescribePortfolioShareStatusCommand === "function");
assert(typeof DescribePortfolioShareStatus$ === "object");
assert(typeof DescribeProductCommand === "function");
assert(typeof DescribeProduct$ === "object");
assert(typeof DescribeProductAsAdminCommand === "function");
assert(typeof DescribeProductAsAdmin$ === "object");
assert(typeof DescribeProductViewCommand === "function");
assert(typeof DescribeProductView$ === "object");
assert(typeof DescribeProvisionedProductCommand === "function");
assert(typeof DescribeProvisionedProduct$ === "object");
assert(typeof DescribeProvisionedProductPlanCommand === "function");
assert(typeof DescribeProvisionedProductPlan$ === "object");
assert(typeof DescribeProvisioningArtifactCommand === "function");
assert(typeof DescribeProvisioningArtifact$ === "object");
assert(typeof DescribeProvisioningParametersCommand === "function");
assert(typeof DescribeProvisioningParameters$ === "object");
assert(typeof DescribeRecordCommand === "function");
assert(typeof DescribeRecord$ === "object");
assert(typeof DescribeServiceActionCommand === "function");
assert(typeof DescribeServiceAction$ === "object");
assert(typeof DescribeServiceActionExecutionParametersCommand === "function");
assert(typeof DescribeServiceActionExecutionParameters$ === "object");
assert(typeof DescribeTagOptionCommand === "function");
assert(typeof DescribeTagOption$ === "object");
assert(typeof DisableAWSOrganizationsAccessCommand === "function");
assert(typeof DisableAWSOrganizationsAccess$ === "object");
assert(typeof DisassociateBudgetFromResourceCommand === "function");
assert(typeof DisassociateBudgetFromResource$ === "object");
assert(typeof DisassociatePrincipalFromPortfolioCommand === "function");
assert(typeof DisassociatePrincipalFromPortfolio$ === "object");
assert(typeof DisassociateProductFromPortfolioCommand === "function");
assert(typeof DisassociateProductFromPortfolio$ === "object");
assert(typeof DisassociateServiceActionFromProvisioningArtifactCommand === "function");
assert(typeof DisassociateServiceActionFromProvisioningArtifact$ === "object");
assert(typeof DisassociateTagOptionFromResourceCommand === "function");
assert(typeof DisassociateTagOptionFromResource$ === "object");
assert(typeof EnableAWSOrganizationsAccessCommand === "function");
assert(typeof EnableAWSOrganizationsAccess$ === "object");
assert(typeof ExecuteProvisionedProductPlanCommand === "function");
assert(typeof ExecuteProvisionedProductPlan$ === "object");
assert(typeof ExecuteProvisionedProductServiceActionCommand === "function");
assert(typeof ExecuteProvisionedProductServiceAction$ === "object");
assert(typeof GetAWSOrganizationsAccessStatusCommand === "function");
assert(typeof GetAWSOrganizationsAccessStatus$ === "object");
assert(typeof GetProvisionedProductOutputsCommand === "function");
assert(typeof GetProvisionedProductOutputs$ === "object");
assert(typeof ImportAsProvisionedProductCommand === "function");
assert(typeof ImportAsProvisionedProduct$ === "object");
assert(typeof ListAcceptedPortfolioSharesCommand === "function");
assert(typeof ListAcceptedPortfolioShares$ === "object");
assert(typeof ListBudgetsForResourceCommand === "function");
assert(typeof ListBudgetsForResource$ === "object");
assert(typeof ListConstraintsForPortfolioCommand === "function");
assert(typeof ListConstraintsForPortfolio$ === "object");
assert(typeof ListLaunchPathsCommand === "function");
assert(typeof ListLaunchPaths$ === "object");
assert(typeof ListOrganizationPortfolioAccessCommand === "function");
assert(typeof ListOrganizationPortfolioAccess$ === "object");
assert(typeof ListPortfolioAccessCommand === "function");
assert(typeof ListPortfolioAccess$ === "object");
assert(typeof ListPortfoliosCommand === "function");
assert(typeof ListPortfolios$ === "object");
assert(typeof ListPortfoliosForProductCommand === "function");
assert(typeof ListPortfoliosForProduct$ === "object");
assert(typeof ListPrincipalsForPortfolioCommand === "function");
assert(typeof ListPrincipalsForPortfolio$ === "object");
assert(typeof ListProvisionedProductPlansCommand === "function");
assert(typeof ListProvisionedProductPlans$ === "object");
assert(typeof ListProvisioningArtifactsCommand === "function");
assert(typeof ListProvisioningArtifacts$ === "object");
assert(typeof ListProvisioningArtifactsForServiceActionCommand === "function");
assert(typeof ListProvisioningArtifactsForServiceAction$ === "object");
assert(typeof ListRecordHistoryCommand === "function");
assert(typeof ListRecordHistory$ === "object");
assert(typeof ListResourcesForTagOptionCommand === "function");
assert(typeof ListResourcesForTagOption$ === "object");
assert(typeof ListServiceActionsCommand === "function");
assert(typeof ListServiceActions$ === "object");
assert(typeof ListServiceActionsForProvisioningArtifactCommand === "function");
assert(typeof ListServiceActionsForProvisioningArtifact$ === "object");
assert(typeof ListStackInstancesForProvisionedProductCommand === "function");
assert(typeof ListStackInstancesForProvisionedProduct$ === "object");
assert(typeof ListTagOptionsCommand === "function");
assert(typeof ListTagOptions$ === "object");
assert(typeof NotifyProvisionProductEngineWorkflowResultCommand === "function");
assert(typeof NotifyProvisionProductEngineWorkflowResult$ === "object");
assert(typeof NotifyTerminateProvisionedProductEngineWorkflowResultCommand === "function");
assert(typeof NotifyTerminateProvisionedProductEngineWorkflowResult$ === "object");
assert(typeof NotifyUpdateProvisionedProductEngineWorkflowResultCommand === "function");
assert(typeof NotifyUpdateProvisionedProductEngineWorkflowResult$ === "object");
assert(typeof ProvisionProductCommand === "function");
assert(typeof ProvisionProduct$ === "object");
assert(typeof RejectPortfolioShareCommand === "function");
assert(typeof RejectPortfolioShare$ === "object");
assert(typeof ScanProvisionedProductsCommand === "function");
assert(typeof ScanProvisionedProducts$ === "object");
assert(typeof SearchProductsCommand === "function");
assert(typeof SearchProducts$ === "object");
assert(typeof SearchProductsAsAdminCommand === "function");
assert(typeof SearchProductsAsAdmin$ === "object");
assert(typeof SearchProvisionedProductsCommand === "function");
assert(typeof SearchProvisionedProducts$ === "object");
assert(typeof TerminateProvisionedProductCommand === "function");
assert(typeof TerminateProvisionedProduct$ === "object");
assert(typeof UpdateConstraintCommand === "function");
assert(typeof UpdateConstraint$ === "object");
assert(typeof UpdatePortfolioCommand === "function");
assert(typeof UpdatePortfolio$ === "object");
assert(typeof UpdatePortfolioShareCommand === "function");
assert(typeof UpdatePortfolioShare$ === "object");
assert(typeof UpdateProductCommand === "function");
assert(typeof UpdateProduct$ === "object");
assert(typeof UpdateProvisionedProductCommand === "function");
assert(typeof UpdateProvisionedProduct$ === "object");
assert(typeof UpdateProvisionedProductPropertiesCommand === "function");
assert(typeof UpdateProvisionedProductProperties$ === "object");
assert(typeof UpdateProvisioningArtifactCommand === "function");
assert(typeof UpdateProvisioningArtifact$ === "object");
assert(typeof UpdateServiceActionCommand === "function");
assert(typeof UpdateServiceAction$ === "object");
assert(typeof UpdateTagOptionCommand === "function");
assert(typeof UpdateTagOption$ === "object");
// structural schemas
assert(typeof AcceptPortfolioShareInput$ === "object");
assert(typeof AcceptPortfolioShareOutput$ === "object");
assert(typeof AccessLevelFilter$ === "object");
assert(typeof AssociateBudgetWithResourceInput$ === "object");
assert(typeof AssociateBudgetWithResourceOutput$ === "object");
assert(typeof AssociatePrincipalWithPortfolioInput$ === "object");
assert(typeof AssociatePrincipalWithPortfolioOutput$ === "object");
assert(typeof AssociateProductWithPortfolioInput$ === "object");
assert(typeof AssociateProductWithPortfolioOutput$ === "object");
assert(typeof AssociateServiceActionWithProvisioningArtifactInput$ === "object");
assert(typeof AssociateServiceActionWithProvisioningArtifactOutput$ === "object");
assert(typeof AssociateTagOptionWithResourceInput$ === "object");
assert(typeof AssociateTagOptionWithResourceOutput$ === "object");
assert(typeof BatchAssociateServiceActionWithProvisioningArtifactInput$ === "object");
assert(typeof BatchAssociateServiceActionWithProvisioningArtifactOutput$ === "object");
assert(typeof BatchDisassociateServiceActionFromProvisioningArtifactInput$ === "object");
assert(typeof BatchDisassociateServiceActionFromProvisioningArtifactOutput$ === "object");
assert(typeof BudgetDetail$ === "object");
assert(typeof CloudWatchDashboard$ === "object");
assert(typeof CodeStarParameters$ === "object");
assert(typeof ConstraintDetail$ === "object");
assert(typeof ConstraintSummary$ === "object");
assert(typeof CopyProductInput$ === "object");
assert(typeof CopyProductOutput$ === "object");
assert(typeof CreateConstraintInput$ === "object");
assert(typeof CreateConstraintOutput$ === "object");
assert(typeof CreatePortfolioInput$ === "object");
assert(typeof CreatePortfolioOutput$ === "object");
assert(typeof CreatePortfolioShareInput$ === "object");
assert(typeof CreatePortfolioShareOutput$ === "object");
assert(typeof CreateProductInput$ === "object");
assert(typeof CreateProductOutput$ === "object");
assert(typeof CreateProvisionedProductPlanInput$ === "object");
assert(typeof CreateProvisionedProductPlanOutput$ === "object");
assert(typeof CreateProvisioningArtifactInput$ === "object");
assert(typeof CreateProvisioningArtifactOutput$ === "object");
assert(typeof CreateServiceActionInput$ === "object");
assert(typeof CreateServiceActionOutput$ === "object");
assert(typeof CreateTagOptionInput$ === "object");
assert(typeof CreateTagOptionOutput$ === "object");
assert(typeof DeleteConstraintInput$ === "object");
assert(typeof DeleteConstraintOutput$ === "object");
assert(typeof DeletePortfolioInput$ === "object");
assert(typeof DeletePortfolioOutput$ === "object");
assert(typeof DeletePortfolioShareInput$ === "object");
assert(typeof DeletePortfolioShareOutput$ === "object");
assert(typeof DeleteProductInput$ === "object");
assert(typeof DeleteProductOutput$ === "object");
assert(typeof DeleteProvisionedProductPlanInput$ === "object");
assert(typeof DeleteProvisionedProductPlanOutput$ === "object");
assert(typeof DeleteProvisioningArtifactInput$ === "object");
assert(typeof DeleteProvisioningArtifactOutput$ === "object");
assert(typeof DeleteServiceActionInput$ === "object");
assert(typeof DeleteServiceActionOutput$ === "object");
assert(typeof DeleteTagOptionInput$ === "object");
assert(typeof DeleteTagOptionOutput$ === "object");
assert(typeof DescribeConstraintInput$ === "object");
assert(typeof DescribeConstraintOutput$ === "object");
assert(typeof DescribeCopyProductStatusInput$ === "object");
assert(typeof DescribeCopyProductStatusOutput$ === "object");
assert(typeof DescribePortfolioInput$ === "object");
assert(typeof DescribePortfolioOutput$ === "object");
assert(typeof DescribePortfolioSharesInput$ === "object");
assert(typeof DescribePortfolioSharesOutput$ === "object");
assert(typeof DescribePortfolioShareStatusInput$ === "object");
assert(typeof DescribePortfolioShareStatusOutput$ === "object");
assert(typeof DescribeProductAsAdminInput$ === "object");
assert(typeof DescribeProductAsAdminOutput$ === "object");
assert(typeof DescribeProductInput$ === "object");
assert(typeof DescribeProductOutput$ === "object");
assert(typeof DescribeProductViewInput$ === "object");
assert(typeof DescribeProductViewOutput$ === "object");
assert(typeof DescribeProvisionedProductInput$ === "object");
assert(typeof DescribeProvisionedProductOutput$ === "object");
assert(typeof DescribeProvisionedProductPlanInput$ === "object");
assert(typeof DescribeProvisionedProductPlanOutput$ === "object");
assert(typeof DescribeProvisioningArtifactInput$ === "object");
assert(typeof DescribeProvisioningArtifactOutput$ === "object");
assert(typeof DescribeProvisioningParametersInput$ === "object");
assert(typeof DescribeProvisioningParametersOutput$ === "object");
assert(typeof DescribeRecordInput$ === "object");
assert(typeof DescribeRecordOutput$ === "object");
assert(typeof DescribeServiceActionExecutionParametersInput$ === "object");
assert(typeof DescribeServiceActionExecutionParametersOutput$ === "object");
assert(typeof DescribeServiceActionInput$ === "object");
assert(typeof DescribeServiceActionOutput$ === "object");
assert(typeof DescribeTagOptionInput$ === "object");
assert(typeof DescribeTagOptionOutput$ === "object");
assert(typeof DisableAWSOrganizationsAccessInput$ === "object");
assert(typeof DisableAWSOrganizationsAccessOutput$ === "object");
assert(typeof DisassociateBudgetFromResourceInput$ === "object");
assert(typeof DisassociateBudgetFromResourceOutput$ === "object");
assert(typeof DisassociatePrincipalFromPortfolioInput$ === "object");
assert(typeof DisassociatePrincipalFromPortfolioOutput$ === "object");
assert(typeof DisassociateProductFromPortfolioInput$ === "object");
assert(typeof DisassociateProductFromPortfolioOutput$ === "object");
assert(typeof DisassociateServiceActionFromProvisioningArtifactInput$ === "object");
assert(typeof DisassociateServiceActionFromProvisioningArtifactOutput$ === "object");
assert(typeof DisassociateTagOptionFromResourceInput$ === "object");
assert(typeof DisassociateTagOptionFromResourceOutput$ === "object");
assert(typeof EnableAWSOrganizationsAccessInput$ === "object");
assert(typeof EnableAWSOrganizationsAccessOutput$ === "object");
assert(typeof EngineWorkflowResourceIdentifier$ === "object");
assert(typeof ExecuteProvisionedProductPlanInput$ === "object");
assert(typeof ExecuteProvisionedProductPlanOutput$ === "object");
assert(typeof ExecuteProvisionedProductServiceActionInput$ === "object");
assert(typeof ExecuteProvisionedProductServiceActionOutput$ === "object");
assert(typeof ExecutionParameter$ === "object");
assert(typeof FailedServiceActionAssociation$ === "object");
assert(typeof GetAWSOrganizationsAccessStatusInput$ === "object");
assert(typeof GetAWSOrganizationsAccessStatusOutput$ === "object");
assert(typeof GetProvisionedProductOutputsInput$ === "object");
assert(typeof GetProvisionedProductOutputsOutput$ === "object");
assert(typeof ImportAsProvisionedProductInput$ === "object");
assert(typeof ImportAsProvisionedProductOutput$ === "object");
assert(typeof LastSync$ === "object");
assert(typeof LaunchPath$ === "object");
assert(typeof LaunchPathSummary$ === "object");
assert(typeof ListAcceptedPortfolioSharesInput$ === "object");
assert(typeof ListAcceptedPortfolioSharesOutput$ === "object");
assert(typeof ListBudgetsForResourceInput$ === "object");
assert(typeof ListBudgetsForResourceOutput$ === "object");
assert(typeof ListConstraintsForPortfolioInput$ === "object");
assert(typeof ListConstraintsForPortfolioOutput$ === "object");
assert(typeof ListLaunchPathsInput$ === "object");
assert(typeof ListLaunchPathsOutput$ === "object");
assert(typeof ListOrganizationPortfolioAccessInput$ === "object");
assert(typeof ListOrganizationPortfolioAccessOutput$ === "object");
assert(typeof ListPortfolioAccessInput$ === "object");
assert(typeof ListPortfolioAccessOutput$ === "object");
assert(typeof ListPortfoliosForProductInput$ === "object");
assert(typeof ListPortfoliosForProductOutput$ === "object");
assert(typeof ListPortfoliosInput$ === "object");
assert(typeof ListPortfoliosOutput$ === "object");
assert(typeof ListPrincipalsForPortfolioInput$ === "object");
assert(typeof ListPrincipalsForPortfolioOutput$ === "object");
assert(typeof ListProvisionedProductPlansInput$ === "object");
assert(typeof ListProvisionedProductPlansOutput$ === "object");
assert(typeof ListProvisioningArtifactsForServiceActionInput$ === "object");
assert(typeof ListProvisioningArtifactsForServiceActionOutput$ === "object");
assert(typeof ListProvisioningArtifactsInput$ === "object");
assert(typeof ListProvisioningArtifactsOutput$ === "object");
assert(typeof ListRecordHistoryInput$ === "object");
assert(typeof ListRecordHistoryOutput$ === "object");
assert(typeof ListRecordHistorySearchFilter$ === "object");
assert(typeof ListResourcesForTagOptionInput$ === "object");
assert(typeof ListResourcesForTagOptionOutput$ === "object");
assert(typeof ListServiceActionsForProvisioningArtifactInput$ === "object");
assert(typeof ListServiceActionsForProvisioningArtifactOutput$ === "object");
assert(typeof ListServiceActionsInput$ === "object");
assert(typeof ListServiceActionsOutput$ === "object");
assert(typeof ListStackInstancesForProvisionedProductInput$ === "object");
assert(typeof ListStackInstancesForProvisionedProductOutput$ === "object");
assert(typeof ListTagOptionsFilters$ === "object");
assert(typeof ListTagOptionsInput$ === "object");
assert(typeof ListTagOptionsOutput$ === "object");
assert(typeof NotifyProvisionProductEngineWorkflowResultInput$ === "object");
assert(typeof NotifyProvisionProductEngineWorkflowResultOutput$ === "object");
assert(typeof NotifyTerminateProvisionedProductEngineWorkflowResultInput$ === "object");
assert(typeof NotifyTerminateProvisionedProductEngineWorkflowResultOutput$ === "object");
assert(typeof NotifyUpdateProvisionedProductEngineWorkflowResultInput$ === "object");
assert(typeof NotifyUpdateProvisionedProductEngineWorkflowResultOutput$ === "object");
assert(typeof OrganizationNode$ === "object");
assert(typeof ParameterConstraints$ === "object");
assert(typeof PortfolioDetail$ === "object");
assert(typeof PortfolioShareDetail$ === "object");
assert(typeof Principal$ === "object");
assert(typeof ProductViewAggregationValue$ === "object");
assert(typeof ProductViewDetail$ === "object");
assert(typeof ProductViewSummary$ === "object");
assert(typeof ProvisionedProductAttribute$ === "object");
assert(typeof ProvisionedProductDetail$ === "object");
assert(typeof ProvisionedProductPlanDetails$ === "object");
assert(typeof ProvisionedProductPlanSummary$ === "object");
assert(typeof ProvisioningArtifact$ === "object");
assert(typeof ProvisioningArtifactDetail$ === "object");
assert(typeof ProvisioningArtifactOutput$ === "object");
assert(typeof ProvisioningArtifactParameter$ === "object");
assert(typeof ProvisioningArtifactPreferences$ === "object");
assert(typeof ProvisioningArtifactProperties$ === "object");
assert(typeof ProvisioningArtifactSummary$ === "object");
assert(typeof ProvisioningArtifactView$ === "object");
assert(typeof ProvisioningParameter$ === "object");
assert(typeof ProvisioningPreferences$ === "object");
assert(typeof ProvisionProductInput$ === "object");
assert(typeof ProvisionProductOutput$ === "object");
assert(typeof RecordDetail$ === "object");
assert(typeof RecordError$ === "object");
assert(typeof RecordOutput$ === "object");
assert(typeof RecordTag$ === "object");
assert(typeof RejectPortfolioShareInput$ === "object");
assert(typeof RejectPortfolioShareOutput$ === "object");
assert(typeof ResourceChange$ === "object");
assert(typeof ResourceChangeDetail$ === "object");
assert(typeof ResourceDetail$ === "object");
assert(typeof ResourceTargetDefinition$ === "object");
assert(typeof ScanProvisionedProductsInput$ === "object");
assert(typeof ScanProvisionedProductsOutput$ === "object");
assert(typeof SearchProductsAsAdminInput$ === "object");
assert(typeof SearchProductsAsAdminOutput$ === "object");
assert(typeof SearchProductsInput$ === "object");
assert(typeof SearchProductsOutput$ === "object");
assert(typeof SearchProvisionedProductsInput$ === "object");
assert(typeof SearchProvisionedProductsOutput$ === "object");
assert(typeof ServiceActionAssociation$ === "object");
assert(typeof ServiceActionDetail$ === "object");
assert(typeof ServiceActionSummary$ === "object");
assert(typeof ShareDetails$ === "object");
assert(typeof ShareError$ === "object");
assert(typeof SourceConnection$ === "object");
assert(typeof SourceConnectionDetail$ === "object");
assert(typeof SourceConnectionParameters$ === "object");
assert(typeof StackInstance$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagOptionDetail$ === "object");
assert(typeof TagOptionSummary$ === "object");
assert(typeof TerminateProvisionedProductInput$ === "object");
assert(typeof TerminateProvisionedProductOutput$ === "object");
assert(typeof UniqueTagResourceIdentifier$ === "object");
assert(typeof UpdateConstraintInput$ === "object");
assert(typeof UpdateConstraintOutput$ === "object");
assert(typeof UpdatePortfolioInput$ === "object");
assert(typeof UpdatePortfolioOutput$ === "object");
assert(typeof UpdatePortfolioShareInput$ === "object");
assert(typeof UpdatePortfolioShareOutput$ === "object");
assert(typeof UpdateProductInput$ === "object");
assert(typeof UpdateProductOutput$ === "object");
assert(typeof UpdateProvisionedProductInput$ === "object");
assert(typeof UpdateProvisionedProductOutput$ === "object");
assert(typeof UpdateProvisionedProductPropertiesInput$ === "object");
assert(typeof UpdateProvisionedProductPropertiesOutput$ === "object");
assert(typeof UpdateProvisioningArtifactInput$ === "object");
assert(typeof UpdateProvisioningArtifactOutput$ === "object");
assert(typeof UpdateProvisioningParameter$ === "object");
assert(typeof UpdateProvisioningPreferences$ === "object");
assert(typeof UpdateServiceActionInput$ === "object");
assert(typeof UpdateServiceActionOutput$ === "object");
assert(typeof UpdateTagOptionInput$ === "object");
assert(typeof UpdateTagOptionOutput$ === "object");
assert(typeof UsageInstruction$ === "object");
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
assert(typeof DuplicateResourceException$ === "object");
assert(InvalidParametersException.prototype instanceof ServiceCatalogServiceException);
assert(typeof InvalidParametersException$ === "object");
assert(InvalidStateException.prototype instanceof ServiceCatalogServiceException);
assert(typeof InvalidStateException$ === "object");
assert(LimitExceededException.prototype instanceof ServiceCatalogServiceException);
assert(typeof LimitExceededException$ === "object");
assert(OperationNotSupportedException.prototype instanceof ServiceCatalogServiceException);
assert(typeof OperationNotSupportedException$ === "object");
assert(ResourceInUseException.prototype instanceof ServiceCatalogServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ServiceCatalogServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(TagOptionNotMigratedException.prototype instanceof ServiceCatalogServiceException);
assert(typeof TagOptionNotMigratedException$ === "object");
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
