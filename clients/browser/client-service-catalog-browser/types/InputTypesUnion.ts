import { AcceptPortfolioShareInput } from "./AcceptPortfolioShareInput";
import { AssociateBudgetWithResourceInput } from "./AssociateBudgetWithResourceInput";
import { AssociatePrincipalWithPortfolioInput } from "./AssociatePrincipalWithPortfolioInput";
import { AssociateProductWithPortfolioInput } from "./AssociateProductWithPortfolioInput";
import { AssociateServiceActionWithProvisioningArtifactInput } from "./AssociateServiceActionWithProvisioningArtifactInput";
import { AssociateTagOptionWithResourceInput } from "./AssociateTagOptionWithResourceInput";
import { BatchAssociateServiceActionWithProvisioningArtifactInput } from "./BatchAssociateServiceActionWithProvisioningArtifactInput";
import { BatchDisassociateServiceActionFromProvisioningArtifactInput } from "./BatchDisassociateServiceActionFromProvisioningArtifactInput";
import { CopyProductInput } from "./CopyProductInput";
import { CreateConstraintInput } from "./CreateConstraintInput";
import { CreatePortfolioInput } from "./CreatePortfolioInput";
import { CreatePortfolioShareInput } from "./CreatePortfolioShareInput";
import { CreateProductInput } from "./CreateProductInput";
import { CreateProvisionedProductPlanInput } from "./CreateProvisionedProductPlanInput";
import { CreateProvisioningArtifactInput } from "./CreateProvisioningArtifactInput";
import { CreateServiceActionInput } from "./CreateServiceActionInput";
import { CreateTagOptionInput } from "./CreateTagOptionInput";
import { DeleteConstraintInput } from "./DeleteConstraintInput";
import { DeletePortfolioInput } from "./DeletePortfolioInput";
import { DeletePortfolioShareInput } from "./DeletePortfolioShareInput";
import { DeleteProductInput } from "./DeleteProductInput";
import { DeleteProvisionedProductPlanInput } from "./DeleteProvisionedProductPlanInput";
import { DeleteProvisioningArtifactInput } from "./DeleteProvisioningArtifactInput";
import { DeleteServiceActionInput } from "./DeleteServiceActionInput";
import { DeleteTagOptionInput } from "./DeleteTagOptionInput";
import { DescribeConstraintInput } from "./DescribeConstraintInput";
import { DescribeCopyProductStatusInput } from "./DescribeCopyProductStatusInput";
import { DescribePortfolioInput } from "./DescribePortfolioInput";
import { DescribePortfolioShareStatusInput } from "./DescribePortfolioShareStatusInput";
import { DescribeProductInput } from "./DescribeProductInput";
import { DescribeProductAsAdminInput } from "./DescribeProductAsAdminInput";
import { DescribeProductViewInput } from "./DescribeProductViewInput";
import { DescribeProvisionedProductInput } from "./DescribeProvisionedProductInput";
import { DescribeProvisionedProductPlanInput } from "./DescribeProvisionedProductPlanInput";
import { DescribeProvisioningArtifactInput } from "./DescribeProvisioningArtifactInput";
import { DescribeProvisioningParametersInput } from "./DescribeProvisioningParametersInput";
import { DescribeRecordInput } from "./DescribeRecordInput";
import { DescribeServiceActionInput } from "./DescribeServiceActionInput";
import { DescribeServiceActionExecutionParametersInput } from "./DescribeServiceActionExecutionParametersInput";
import { DescribeTagOptionInput } from "./DescribeTagOptionInput";
import { DisableAWSOrganizationsAccessInput } from "./DisableAWSOrganizationsAccessInput";
import { DisassociateBudgetFromResourceInput } from "./DisassociateBudgetFromResourceInput";
import { DisassociatePrincipalFromPortfolioInput } from "./DisassociatePrincipalFromPortfolioInput";
import { DisassociateProductFromPortfolioInput } from "./DisassociateProductFromPortfolioInput";
import { DisassociateServiceActionFromProvisioningArtifactInput } from "./DisassociateServiceActionFromProvisioningArtifactInput";
import { DisassociateTagOptionFromResourceInput } from "./DisassociateTagOptionFromResourceInput";
import { EnableAWSOrganizationsAccessInput } from "./EnableAWSOrganizationsAccessInput";
import { ExecuteProvisionedProductPlanInput } from "./ExecuteProvisionedProductPlanInput";
import { ExecuteProvisionedProductServiceActionInput } from "./ExecuteProvisionedProductServiceActionInput";
import { GetAWSOrganizationsAccessStatusInput } from "./GetAWSOrganizationsAccessStatusInput";
import { ListAcceptedPortfolioSharesInput } from "./ListAcceptedPortfolioSharesInput";
import { ListBudgetsForResourceInput } from "./ListBudgetsForResourceInput";
import { ListConstraintsForPortfolioInput } from "./ListConstraintsForPortfolioInput";
import { ListLaunchPathsInput } from "./ListLaunchPathsInput";
import { ListOrganizationPortfolioAccessInput } from "./ListOrganizationPortfolioAccessInput";
import { ListPortfolioAccessInput } from "./ListPortfolioAccessInput";
import { ListPortfoliosInput } from "./ListPortfoliosInput";
import { ListPortfoliosForProductInput } from "./ListPortfoliosForProductInput";
import { ListPrincipalsForPortfolioInput } from "./ListPrincipalsForPortfolioInput";
import { ListProvisionedProductPlansInput } from "./ListProvisionedProductPlansInput";
import { ListProvisioningArtifactsInput } from "./ListProvisioningArtifactsInput";
import { ListProvisioningArtifactsForServiceActionInput } from "./ListProvisioningArtifactsForServiceActionInput";
import { ListRecordHistoryInput } from "./ListRecordHistoryInput";
import { ListResourcesForTagOptionInput } from "./ListResourcesForTagOptionInput";
import { ListServiceActionsInput } from "./ListServiceActionsInput";
import { ListServiceActionsForProvisioningArtifactInput } from "./ListServiceActionsForProvisioningArtifactInput";
import { ListStackInstancesForProvisionedProductInput } from "./ListStackInstancesForProvisionedProductInput";
import { ListTagOptionsInput } from "./ListTagOptionsInput";
import { ProvisionProductInput } from "./ProvisionProductInput";
import { RejectPortfolioShareInput } from "./RejectPortfolioShareInput";
import { ScanProvisionedProductsInput } from "./ScanProvisionedProductsInput";
import { SearchProductsInput } from "./SearchProductsInput";
import { SearchProductsAsAdminInput } from "./SearchProductsAsAdminInput";
import { SearchProvisionedProductsInput } from "./SearchProvisionedProductsInput";
import { TerminateProvisionedProductInput } from "./TerminateProvisionedProductInput";
import { UpdateConstraintInput } from "./UpdateConstraintInput";
import { UpdatePortfolioInput } from "./UpdatePortfolioInput";
import { UpdateProductInput } from "./UpdateProductInput";
import { UpdateProvisionedProductInput } from "./UpdateProvisionedProductInput";
import { UpdateProvisionedProductPropertiesInput } from "./UpdateProvisionedProductPropertiesInput";
import { UpdateProvisioningArtifactInput } from "./UpdateProvisioningArtifactInput";
import { UpdateServiceActionInput } from "./UpdateServiceActionInput";
import { UpdateTagOptionInput } from "./UpdateTagOptionInput";
export type InputTypesUnion =
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
  | DescribeProductInput
  | DescribeProductAsAdminInput
  | DescribeProductViewInput
  | DescribeProvisionedProductInput
  | DescribeProvisionedProductPlanInput
  | DescribeProvisioningArtifactInput
  | DescribeProvisioningParametersInput
  | DescribeRecordInput
  | DescribeServiceActionInput
  | DescribeServiceActionExecutionParametersInput
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
  | ListPortfoliosInput
  | ListPortfoliosForProductInput
  | ListPrincipalsForPortfolioInput
  | ListProvisionedProductPlansInput
  | ListProvisioningArtifactsInput
  | ListProvisioningArtifactsForServiceActionInput
  | ListRecordHistoryInput
  | ListResourcesForTagOptionInput
  | ListServiceActionsInput
  | ListServiceActionsForProvisioningArtifactInput
  | ListStackInstancesForProvisionedProductInput
  | ListTagOptionsInput
  | ProvisionProductInput
  | RejectPortfolioShareInput
  | ScanProvisionedProductsInput
  | SearchProductsInput
  | SearchProductsAsAdminInput
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
