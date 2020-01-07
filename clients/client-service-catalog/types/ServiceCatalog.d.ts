import { ServiceCatalogClient } from "./ServiceCatalogClient";
import { AcceptPortfolioShareCommandInput, AcceptPortfolioShareCommandOutput } from "./commands/AcceptPortfolioShareCommand";
import { AssociateBudgetWithResourceCommandInput, AssociateBudgetWithResourceCommandOutput } from "./commands/AssociateBudgetWithResourceCommand";
import { AssociatePrincipalWithPortfolioCommandInput, AssociatePrincipalWithPortfolioCommandOutput } from "./commands/AssociatePrincipalWithPortfolioCommand";
import { AssociateProductWithPortfolioCommandInput, AssociateProductWithPortfolioCommandOutput } from "./commands/AssociateProductWithPortfolioCommand";
import { AssociateServiceActionWithProvisioningArtifactCommandInput, AssociateServiceActionWithProvisioningArtifactCommandOutput } from "./commands/AssociateServiceActionWithProvisioningArtifactCommand";
import { AssociateTagOptionWithResourceCommandInput, AssociateTagOptionWithResourceCommandOutput } from "./commands/AssociateTagOptionWithResourceCommand";
import { BatchAssociateServiceActionWithProvisioningArtifactCommandInput, BatchAssociateServiceActionWithProvisioningArtifactCommandOutput } from "./commands/BatchAssociateServiceActionWithProvisioningArtifactCommand";
import { BatchDisassociateServiceActionFromProvisioningArtifactCommandInput, BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput } from "./commands/BatchDisassociateServiceActionFromProvisioningArtifactCommand";
import { CopyProductCommandInput, CopyProductCommandOutput } from "./commands/CopyProductCommand";
import { CreateConstraintCommandInput, CreateConstraintCommandOutput } from "./commands/CreateConstraintCommand";
import { CreatePortfolioCommandInput, CreatePortfolioCommandOutput } from "./commands/CreatePortfolioCommand";
import { CreatePortfolioShareCommandInput, CreatePortfolioShareCommandOutput } from "./commands/CreatePortfolioShareCommand";
import { CreateProductCommandInput, CreateProductCommandOutput } from "./commands/CreateProductCommand";
import { CreateProvisionedProductPlanCommandInput, CreateProvisionedProductPlanCommandOutput } from "./commands/CreateProvisionedProductPlanCommand";
import { CreateProvisioningArtifactCommandInput, CreateProvisioningArtifactCommandOutput } from "./commands/CreateProvisioningArtifactCommand";
import { CreateServiceActionCommandInput, CreateServiceActionCommandOutput } from "./commands/CreateServiceActionCommand";
import { CreateTagOptionCommandInput, CreateTagOptionCommandOutput } from "./commands/CreateTagOptionCommand";
import { DeleteConstraintCommandInput, DeleteConstraintCommandOutput } from "./commands/DeleteConstraintCommand";
import { DeletePortfolioCommandInput, DeletePortfolioCommandOutput } from "./commands/DeletePortfolioCommand";
import { DeletePortfolioShareCommandInput, DeletePortfolioShareCommandOutput } from "./commands/DeletePortfolioShareCommand";
import { DeleteProductCommandInput, DeleteProductCommandOutput } from "./commands/DeleteProductCommand";
import { DeleteProvisionedProductPlanCommandInput, DeleteProvisionedProductPlanCommandOutput } from "./commands/DeleteProvisionedProductPlanCommand";
import { DeleteProvisioningArtifactCommandInput, DeleteProvisioningArtifactCommandOutput } from "./commands/DeleteProvisioningArtifactCommand";
import { DeleteServiceActionCommandInput, DeleteServiceActionCommandOutput } from "./commands/DeleteServiceActionCommand";
import { DeleteTagOptionCommandInput, DeleteTagOptionCommandOutput } from "./commands/DeleteTagOptionCommand";
import { DescribeConstraintCommandInput, DescribeConstraintCommandOutput } from "./commands/DescribeConstraintCommand";
import { DescribeCopyProductStatusCommandInput, DescribeCopyProductStatusCommandOutput } from "./commands/DescribeCopyProductStatusCommand";
import { DescribePortfolioCommandInput, DescribePortfolioCommandOutput } from "./commands/DescribePortfolioCommand";
import { DescribePortfolioShareStatusCommandInput, DescribePortfolioShareStatusCommandOutput } from "./commands/DescribePortfolioShareStatusCommand";
import { DescribeProductAsAdminCommandInput, DescribeProductAsAdminCommandOutput } from "./commands/DescribeProductAsAdminCommand";
import { DescribeProductCommandInput, DescribeProductCommandOutput } from "./commands/DescribeProductCommand";
import { DescribeProductViewCommandInput, DescribeProductViewCommandOutput } from "./commands/DescribeProductViewCommand";
import { DescribeProvisionedProductCommandInput, DescribeProvisionedProductCommandOutput } from "./commands/DescribeProvisionedProductCommand";
import { DescribeProvisionedProductPlanCommandInput, DescribeProvisionedProductPlanCommandOutput } from "./commands/DescribeProvisionedProductPlanCommand";
import { DescribeProvisioningArtifactCommandInput, DescribeProvisioningArtifactCommandOutput } from "./commands/DescribeProvisioningArtifactCommand";
import { DescribeProvisioningParametersCommandInput, DescribeProvisioningParametersCommandOutput } from "./commands/DescribeProvisioningParametersCommand";
import { DescribeRecordCommandInput, DescribeRecordCommandOutput } from "./commands/DescribeRecordCommand";
import { DescribeServiceActionCommandInput, DescribeServiceActionCommandOutput } from "./commands/DescribeServiceActionCommand";
import { DescribeServiceActionExecutionParametersCommandInput, DescribeServiceActionExecutionParametersCommandOutput } from "./commands/DescribeServiceActionExecutionParametersCommand";
import { DescribeTagOptionCommandInput, DescribeTagOptionCommandOutput } from "./commands/DescribeTagOptionCommand";
import { DisableAWSOrganizationsAccessCommandInput, DisableAWSOrganizationsAccessCommandOutput } from "./commands/DisableAWSOrganizationsAccessCommand";
import { DisassociateBudgetFromResourceCommandInput, DisassociateBudgetFromResourceCommandOutput } from "./commands/DisassociateBudgetFromResourceCommand";
import { DisassociatePrincipalFromPortfolioCommandInput, DisassociatePrincipalFromPortfolioCommandOutput } from "./commands/DisassociatePrincipalFromPortfolioCommand";
import { DisassociateProductFromPortfolioCommandInput, DisassociateProductFromPortfolioCommandOutput } from "./commands/DisassociateProductFromPortfolioCommand";
import { DisassociateServiceActionFromProvisioningArtifactCommandInput, DisassociateServiceActionFromProvisioningArtifactCommandOutput } from "./commands/DisassociateServiceActionFromProvisioningArtifactCommand";
import { DisassociateTagOptionFromResourceCommandInput, DisassociateTagOptionFromResourceCommandOutput } from "./commands/DisassociateTagOptionFromResourceCommand";
import { EnableAWSOrganizationsAccessCommandInput, EnableAWSOrganizationsAccessCommandOutput } from "./commands/EnableAWSOrganizationsAccessCommand";
import { ExecuteProvisionedProductPlanCommandInput, ExecuteProvisionedProductPlanCommandOutput } from "./commands/ExecuteProvisionedProductPlanCommand";
import { ExecuteProvisionedProductServiceActionCommandInput, ExecuteProvisionedProductServiceActionCommandOutput } from "./commands/ExecuteProvisionedProductServiceActionCommand";
import { GetAWSOrganizationsAccessStatusCommandInput, GetAWSOrganizationsAccessStatusCommandOutput } from "./commands/GetAWSOrganizationsAccessStatusCommand";
import { ListAcceptedPortfolioSharesCommandInput, ListAcceptedPortfolioSharesCommandOutput } from "./commands/ListAcceptedPortfolioSharesCommand";
import { ListBudgetsForResourceCommandInput, ListBudgetsForResourceCommandOutput } from "./commands/ListBudgetsForResourceCommand";
import { ListConstraintsForPortfolioCommandInput, ListConstraintsForPortfolioCommandOutput } from "./commands/ListConstraintsForPortfolioCommand";
import { ListLaunchPathsCommandInput, ListLaunchPathsCommandOutput } from "./commands/ListLaunchPathsCommand";
import { ListOrganizationPortfolioAccessCommandInput, ListOrganizationPortfolioAccessCommandOutput } from "./commands/ListOrganizationPortfolioAccessCommand";
import { ListPortfolioAccessCommandInput, ListPortfolioAccessCommandOutput } from "./commands/ListPortfolioAccessCommand";
import { ListPortfoliosCommandInput, ListPortfoliosCommandOutput } from "./commands/ListPortfoliosCommand";
import { ListPortfoliosForProductCommandInput, ListPortfoliosForProductCommandOutput } from "./commands/ListPortfoliosForProductCommand";
import { ListPrincipalsForPortfolioCommandInput, ListPrincipalsForPortfolioCommandOutput } from "./commands/ListPrincipalsForPortfolioCommand";
import { ListProvisionedProductPlansCommandInput, ListProvisionedProductPlansCommandOutput } from "./commands/ListProvisionedProductPlansCommand";
import { ListProvisioningArtifactsCommandInput, ListProvisioningArtifactsCommandOutput } from "./commands/ListProvisioningArtifactsCommand";
import { ListProvisioningArtifactsForServiceActionCommandInput, ListProvisioningArtifactsForServiceActionCommandOutput } from "./commands/ListProvisioningArtifactsForServiceActionCommand";
import { ListRecordHistoryCommandInput, ListRecordHistoryCommandOutput } from "./commands/ListRecordHistoryCommand";
import { ListResourcesForTagOptionCommandInput, ListResourcesForTagOptionCommandOutput } from "./commands/ListResourcesForTagOptionCommand";
import { ListServiceActionsCommandInput, ListServiceActionsCommandOutput } from "./commands/ListServiceActionsCommand";
import { ListServiceActionsForProvisioningArtifactCommandInput, ListServiceActionsForProvisioningArtifactCommandOutput } from "./commands/ListServiceActionsForProvisioningArtifactCommand";
import { ListStackInstancesForProvisionedProductCommandInput, ListStackInstancesForProvisionedProductCommandOutput } from "./commands/ListStackInstancesForProvisionedProductCommand";
import { ListTagOptionsCommandInput, ListTagOptionsCommandOutput } from "./commands/ListTagOptionsCommand";
import { ProvisionProductCommandInput, ProvisionProductCommandOutput } from "./commands/ProvisionProductCommand";
import { RejectPortfolioShareCommandInput, RejectPortfolioShareCommandOutput } from "./commands/RejectPortfolioShareCommand";
import { ScanProvisionedProductsCommandInput, ScanProvisionedProductsCommandOutput } from "./commands/ScanProvisionedProductsCommand";
import { SearchProductsAsAdminCommandInput, SearchProductsAsAdminCommandOutput } from "./commands/SearchProductsAsAdminCommand";
import { SearchProductsCommandInput, SearchProductsCommandOutput } from "./commands/SearchProductsCommand";
import { SearchProvisionedProductsCommandInput, SearchProvisionedProductsCommandOutput } from "./commands/SearchProvisionedProductsCommand";
import { TerminateProvisionedProductCommandInput, TerminateProvisionedProductCommandOutput } from "./commands/TerminateProvisionedProductCommand";
import { UpdateConstraintCommandInput, UpdateConstraintCommandOutput } from "./commands/UpdateConstraintCommand";
import { UpdatePortfolioCommandInput, UpdatePortfolioCommandOutput } from "./commands/UpdatePortfolioCommand";
import { UpdateProductCommandInput, UpdateProductCommandOutput } from "./commands/UpdateProductCommand";
import { UpdateProvisionedProductCommandInput, UpdateProvisionedProductCommandOutput } from "./commands/UpdateProvisionedProductCommand";
import { UpdateProvisionedProductPropertiesCommandInput, UpdateProvisionedProductPropertiesCommandOutput } from "./commands/UpdateProvisionedProductPropertiesCommand";
import { UpdateProvisioningArtifactCommandInput, UpdateProvisioningArtifactCommandOutput } from "./commands/UpdateProvisioningArtifactCommand";
import { UpdateServiceActionCommandInput, UpdateServiceActionCommandOutput } from "./commands/UpdateServiceActionCommand";
import { UpdateTagOptionCommandInput, UpdateTagOptionCommandOutput } from "./commands/UpdateTagOptionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS Service Catalog</fullname>
 *          <p>
 *             <a href="https://aws.amazon.com/servicecatalog/">AWS Service Catalog</a> enables
 *          organizations to create and manage catalogs of IT services that are approved for use on
 *          AWS. To get the most out of this documentation, you should be familiar with the
 *          terminology discussed in <a href="http://docs.aws.amazon.com/servicecatalog/latest/adminguide/what-is_concepts.html">AWS Service Catalog Concepts</a>.</p>
 */
export declare class ServiceCatalog extends ServiceCatalogClient {
    /**
     * <p>Accepts an offer to share the specified portfolio.</p>
     */
    acceptPortfolioShare(args: AcceptPortfolioShareCommandInput, options?: __HttpHandlerOptions): Promise<AcceptPortfolioShareCommandOutput>;
    acceptPortfolioShare(args: AcceptPortfolioShareCommandInput, cb: (err: any, data?: AcceptPortfolioShareCommandOutput) => void): void;
    acceptPortfolioShare(args: AcceptPortfolioShareCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AcceptPortfolioShareCommandOutput) => void): void;
    /**
     * <p>Associates the specified budget with the specified resource.</p>
     */
    associateBudgetWithResource(args: AssociateBudgetWithResourceCommandInput, options?: __HttpHandlerOptions): Promise<AssociateBudgetWithResourceCommandOutput>;
    associateBudgetWithResource(args: AssociateBudgetWithResourceCommandInput, cb: (err: any, data?: AssociateBudgetWithResourceCommandOutput) => void): void;
    associateBudgetWithResource(args: AssociateBudgetWithResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateBudgetWithResourceCommandOutput) => void): void;
    /**
     * <p>Associates the specified principal ARN with the specified portfolio.</p>
     */
    associatePrincipalWithPortfolio(args: AssociatePrincipalWithPortfolioCommandInput, options?: __HttpHandlerOptions): Promise<AssociatePrincipalWithPortfolioCommandOutput>;
    associatePrincipalWithPortfolio(args: AssociatePrincipalWithPortfolioCommandInput, cb: (err: any, data?: AssociatePrincipalWithPortfolioCommandOutput) => void): void;
    associatePrincipalWithPortfolio(args: AssociatePrincipalWithPortfolioCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociatePrincipalWithPortfolioCommandOutput) => void): void;
    /**
     * <p>Associates the specified product with the specified portfolio.</p>
     */
    associateProductWithPortfolio(args: AssociateProductWithPortfolioCommandInput, options?: __HttpHandlerOptions): Promise<AssociateProductWithPortfolioCommandOutput>;
    associateProductWithPortfolio(args: AssociateProductWithPortfolioCommandInput, cb: (err: any, data?: AssociateProductWithPortfolioCommandOutput) => void): void;
    associateProductWithPortfolio(args: AssociateProductWithPortfolioCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateProductWithPortfolioCommandOutput) => void): void;
    /**
     * <p>Associates a self-service action with a provisioning artifact.</p>
     */
    associateServiceActionWithProvisioningArtifact(args: AssociateServiceActionWithProvisioningArtifactCommandInput, options?: __HttpHandlerOptions): Promise<AssociateServiceActionWithProvisioningArtifactCommandOutput>;
    associateServiceActionWithProvisioningArtifact(args: AssociateServiceActionWithProvisioningArtifactCommandInput, cb: (err: any, data?: AssociateServiceActionWithProvisioningArtifactCommandOutput) => void): void;
    associateServiceActionWithProvisioningArtifact(args: AssociateServiceActionWithProvisioningArtifactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateServiceActionWithProvisioningArtifactCommandOutput) => void): void;
    /**
     * <p>Associate the specified TagOption with the specified portfolio or product.</p>
     */
    associateTagOptionWithResource(args: AssociateTagOptionWithResourceCommandInput, options?: __HttpHandlerOptions): Promise<AssociateTagOptionWithResourceCommandOutput>;
    associateTagOptionWithResource(args: AssociateTagOptionWithResourceCommandInput, cb: (err: any, data?: AssociateTagOptionWithResourceCommandOutput) => void): void;
    associateTagOptionWithResource(args: AssociateTagOptionWithResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateTagOptionWithResourceCommandOutput) => void): void;
    /**
     * <p>Associates multiple self-service actions with provisioning artifacts.</p>
     */
    batchAssociateServiceActionWithProvisioningArtifact(args: BatchAssociateServiceActionWithProvisioningArtifactCommandInput, options?: __HttpHandlerOptions): Promise<BatchAssociateServiceActionWithProvisioningArtifactCommandOutput>;
    batchAssociateServiceActionWithProvisioningArtifact(args: BatchAssociateServiceActionWithProvisioningArtifactCommandInput, cb: (err: any, data?: BatchAssociateServiceActionWithProvisioningArtifactCommandOutput) => void): void;
    batchAssociateServiceActionWithProvisioningArtifact(args: BatchAssociateServiceActionWithProvisioningArtifactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchAssociateServiceActionWithProvisioningArtifactCommandOutput) => void): void;
    /**
     * <p>Disassociates a batch of self-service actions from the specified provisioning artifact.</p>
     */
    batchDisassociateServiceActionFromProvisioningArtifact(args: BatchDisassociateServiceActionFromProvisioningArtifactCommandInput, options?: __HttpHandlerOptions): Promise<BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput>;
    batchDisassociateServiceActionFromProvisioningArtifact(args: BatchDisassociateServiceActionFromProvisioningArtifactCommandInput, cb: (err: any, data?: BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput) => void): void;
    batchDisassociateServiceActionFromProvisioningArtifact(args: BatchDisassociateServiceActionFromProvisioningArtifactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput) => void): void;
    /**
     * <p>Copies the specified source product to the specified target product or a new product.</p>
     *          <p>You can copy a product to the same account or another account.
     *          You can copy a product to the same region or another region.</p>
     *          <p>This operation is performed asynchronously. To track the progress of the
     *          operation, use <a>DescribeCopyProductStatus</a>.</p>
     */
    copyProduct(args: CopyProductCommandInput, options?: __HttpHandlerOptions): Promise<CopyProductCommandOutput>;
    copyProduct(args: CopyProductCommandInput, cb: (err: any, data?: CopyProductCommandOutput) => void): void;
    copyProduct(args: CopyProductCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CopyProductCommandOutput) => void): void;
    /**
     * <p>Creates a constraint.</p>
     */
    createConstraint(args: CreateConstraintCommandInput, options?: __HttpHandlerOptions): Promise<CreateConstraintCommandOutput>;
    createConstraint(args: CreateConstraintCommandInput, cb: (err: any, data?: CreateConstraintCommandOutput) => void): void;
    createConstraint(args: CreateConstraintCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateConstraintCommandOutput) => void): void;
    /**
     * <p>Creates a portfolio.</p>
     */
    createPortfolio(args: CreatePortfolioCommandInput, options?: __HttpHandlerOptions): Promise<CreatePortfolioCommandOutput>;
    createPortfolio(args: CreatePortfolioCommandInput, cb: (err: any, data?: CreatePortfolioCommandOutput) => void): void;
    createPortfolio(args: CreatePortfolioCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePortfolioCommandOutput) => void): void;
    /**
     * <p>Shares the specified portfolio with the specified account or organization node. Shares to an organization node can only be created by the master account of an Organization. AWSOrganizationsAccess must be enabled in order to create a portfolio share to an organization node.</p>
     */
    createPortfolioShare(args: CreatePortfolioShareCommandInput, options?: __HttpHandlerOptions): Promise<CreatePortfolioShareCommandOutput>;
    createPortfolioShare(args: CreatePortfolioShareCommandInput, cb: (err: any, data?: CreatePortfolioShareCommandOutput) => void): void;
    createPortfolioShare(args: CreatePortfolioShareCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePortfolioShareCommandOutput) => void): void;
    /**
     * <p>Creates a product.</p>
     */
    createProduct(args: CreateProductCommandInput, options?: __HttpHandlerOptions): Promise<CreateProductCommandOutput>;
    createProduct(args: CreateProductCommandInput, cb: (err: any, data?: CreateProductCommandOutput) => void): void;
    createProduct(args: CreateProductCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateProductCommandOutput) => void): void;
    /**
     * <p>Creates a plan. A plan includes the list of resources to be
     *          created (when provisioning a new product) or modified (when updating a provisioned product)
     *          when the plan is executed.</p>
     *          <p>You can create one plan per provisioned product. To create a plan for an existing
     *          provisioned product, the product status must be AVAILBLE or TAINTED.</p>
     *          <p>To view the resource changes in the change set, use <a>DescribeProvisionedProductPlan</a>.
     *          To create or modify the provisioned product, use <a>ExecuteProvisionedProductPlan</a>.</p>
     */
    createProvisionedProductPlan(args: CreateProvisionedProductPlanCommandInput, options?: __HttpHandlerOptions): Promise<CreateProvisionedProductPlanCommandOutput>;
    createProvisionedProductPlan(args: CreateProvisionedProductPlanCommandInput, cb: (err: any, data?: CreateProvisionedProductPlanCommandOutput) => void): void;
    createProvisionedProductPlan(args: CreateProvisionedProductPlanCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateProvisionedProductPlanCommandOutput) => void): void;
    /**
     * <p>Creates a provisioning artifact (also known as a version) for the specified product.</p>
     *          <p>You cannot create a provisioning artifact for a product that was shared with you.</p>
     */
    createProvisioningArtifact(args: CreateProvisioningArtifactCommandInput, options?: __HttpHandlerOptions): Promise<CreateProvisioningArtifactCommandOutput>;
    createProvisioningArtifact(args: CreateProvisioningArtifactCommandInput, cb: (err: any, data?: CreateProvisioningArtifactCommandOutput) => void): void;
    createProvisioningArtifact(args: CreateProvisioningArtifactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateProvisioningArtifactCommandOutput) => void): void;
    /**
     * <p>Creates a self-service action.</p>
     */
    createServiceAction(args: CreateServiceActionCommandInput, options?: __HttpHandlerOptions): Promise<CreateServiceActionCommandOutput>;
    createServiceAction(args: CreateServiceActionCommandInput, cb: (err: any, data?: CreateServiceActionCommandOutput) => void): void;
    createServiceAction(args: CreateServiceActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateServiceActionCommandOutput) => void): void;
    /**
     * <p>Creates a TagOption.</p>
     */
    createTagOption(args: CreateTagOptionCommandInput, options?: __HttpHandlerOptions): Promise<CreateTagOptionCommandOutput>;
    createTagOption(args: CreateTagOptionCommandInput, cb: (err: any, data?: CreateTagOptionCommandOutput) => void): void;
    createTagOption(args: CreateTagOptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTagOptionCommandOutput) => void): void;
    /**
     * <p>Deletes the specified constraint.</p>
     */
    deleteConstraint(args: DeleteConstraintCommandInput, options?: __HttpHandlerOptions): Promise<DeleteConstraintCommandOutput>;
    deleteConstraint(args: DeleteConstraintCommandInput, cb: (err: any, data?: DeleteConstraintCommandOutput) => void): void;
    deleteConstraint(args: DeleteConstraintCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteConstraintCommandOutput) => void): void;
    /**
     * <p>Deletes the specified portfolio.</p>
     *          <p>You cannot delete a portfolio if it was shared with you or if it has associated
     *          products, users, constraints, or shared accounts.</p>
     */
    deletePortfolio(args: DeletePortfolioCommandInput, options?: __HttpHandlerOptions): Promise<DeletePortfolioCommandOutput>;
    deletePortfolio(args: DeletePortfolioCommandInput, cb: (err: any, data?: DeletePortfolioCommandOutput) => void): void;
    deletePortfolio(args: DeletePortfolioCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePortfolioCommandOutput) => void): void;
    /**
     * <p>Stops sharing the specified portfolio with the specified account or organization node. Shares to an organization node can only be deleted by the master account of an Organization.</p>
     */
    deletePortfolioShare(args: DeletePortfolioShareCommandInput, options?: __HttpHandlerOptions): Promise<DeletePortfolioShareCommandOutput>;
    deletePortfolioShare(args: DeletePortfolioShareCommandInput, cb: (err: any, data?: DeletePortfolioShareCommandOutput) => void): void;
    deletePortfolioShare(args: DeletePortfolioShareCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePortfolioShareCommandOutput) => void): void;
    /**
     * <p>Deletes the specified product.</p>
     *          <p>You cannot delete a product if it was shared with you or is associated with a portfolio.</p>
     */
    deleteProduct(args: DeleteProductCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProductCommandOutput>;
    deleteProduct(args: DeleteProductCommandInput, cb: (err: any, data?: DeleteProductCommandOutput) => void): void;
    deleteProduct(args: DeleteProductCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteProductCommandOutput) => void): void;
    /**
     * <p>Deletes the specified plan.</p>
     */
    deleteProvisionedProductPlan(args: DeleteProvisionedProductPlanCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProvisionedProductPlanCommandOutput>;
    deleteProvisionedProductPlan(args: DeleteProvisionedProductPlanCommandInput, cb: (err: any, data?: DeleteProvisionedProductPlanCommandOutput) => void): void;
    deleteProvisionedProductPlan(args: DeleteProvisionedProductPlanCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteProvisionedProductPlanCommandOutput) => void): void;
    /**
     * <p>Deletes the specified provisioning artifact (also known as a version) for the specified product.</p>
     *          <p>You cannot delete a provisioning artifact associated with a product that was shared with you.
     *          You cannot delete the last provisioning artifact for a product, because a product must have at
     *          least one provisioning artifact.</p>
     */
    deleteProvisioningArtifact(args: DeleteProvisioningArtifactCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProvisioningArtifactCommandOutput>;
    deleteProvisioningArtifact(args: DeleteProvisioningArtifactCommandInput, cb: (err: any, data?: DeleteProvisioningArtifactCommandOutput) => void): void;
    deleteProvisioningArtifact(args: DeleteProvisioningArtifactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteProvisioningArtifactCommandOutput) => void): void;
    /**
     * <p>Deletes a self-service action.</p>
     */
    deleteServiceAction(args: DeleteServiceActionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteServiceActionCommandOutput>;
    deleteServiceAction(args: DeleteServiceActionCommandInput, cb: (err: any, data?: DeleteServiceActionCommandOutput) => void): void;
    deleteServiceAction(args: DeleteServiceActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteServiceActionCommandOutput) => void): void;
    /**
     * <p>Deletes the specified TagOption.</p>
     *          <p>You cannot delete a TagOption if it is associated with a product or portfolio.</p>
     */
    deleteTagOption(args: DeleteTagOptionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTagOptionCommandOutput>;
    deleteTagOption(args: DeleteTagOptionCommandInput, cb: (err: any, data?: DeleteTagOptionCommandOutput) => void): void;
    deleteTagOption(args: DeleteTagOptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTagOptionCommandOutput) => void): void;
    /**
     * <p>Gets information about the specified constraint.</p>
     */
    describeConstraint(args: DescribeConstraintCommandInput, options?: __HttpHandlerOptions): Promise<DescribeConstraintCommandOutput>;
    describeConstraint(args: DescribeConstraintCommandInput, cb: (err: any, data?: DescribeConstraintCommandOutput) => void): void;
    describeConstraint(args: DescribeConstraintCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeConstraintCommandOutput) => void): void;
    /**
     * <p>Gets the status of the specified copy product operation.</p>
     */
    describeCopyProductStatus(args: DescribeCopyProductStatusCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCopyProductStatusCommandOutput>;
    describeCopyProductStatus(args: DescribeCopyProductStatusCommandInput, cb: (err: any, data?: DescribeCopyProductStatusCommandOutput) => void): void;
    describeCopyProductStatus(args: DescribeCopyProductStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCopyProductStatusCommandOutput) => void): void;
    /**
     * <p>Gets information about the specified portfolio.</p>
     */
    describePortfolio(args: DescribePortfolioCommandInput, options?: __HttpHandlerOptions): Promise<DescribePortfolioCommandOutput>;
    describePortfolio(args: DescribePortfolioCommandInput, cb: (err: any, data?: DescribePortfolioCommandOutput) => void): void;
    describePortfolio(args: DescribePortfolioCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePortfolioCommandOutput) => void): void;
    /**
     * <p>Gets the status of the specified portfolio share operation. This API can only be called by the master account in the organization.</p>
     */
    describePortfolioShareStatus(args: DescribePortfolioShareStatusCommandInput, options?: __HttpHandlerOptions): Promise<DescribePortfolioShareStatusCommandOutput>;
    describePortfolioShareStatus(args: DescribePortfolioShareStatusCommandInput, cb: (err: any, data?: DescribePortfolioShareStatusCommandOutput) => void): void;
    describePortfolioShareStatus(args: DescribePortfolioShareStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePortfolioShareStatusCommandOutput) => void): void;
    /**
     * <p>Gets information about the specified product.</p>
     */
    describeProduct(args: DescribeProductCommandInput, options?: __HttpHandlerOptions): Promise<DescribeProductCommandOutput>;
    describeProduct(args: DescribeProductCommandInput, cb: (err: any, data?: DescribeProductCommandOutput) => void): void;
    describeProduct(args: DescribeProductCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeProductCommandOutput) => void): void;
    /**
     * <p>Gets information about the specified product. This operation is run with administrator access.</p>
     */
    describeProductAsAdmin(args: DescribeProductAsAdminCommandInput, options?: __HttpHandlerOptions): Promise<DescribeProductAsAdminCommandOutput>;
    describeProductAsAdmin(args: DescribeProductAsAdminCommandInput, cb: (err: any, data?: DescribeProductAsAdminCommandOutput) => void): void;
    describeProductAsAdmin(args: DescribeProductAsAdminCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeProductAsAdminCommandOutput) => void): void;
    /**
     * <p>Gets information about the specified product.</p>
     */
    describeProductView(args: DescribeProductViewCommandInput, options?: __HttpHandlerOptions): Promise<DescribeProductViewCommandOutput>;
    describeProductView(args: DescribeProductViewCommandInput, cb: (err: any, data?: DescribeProductViewCommandOutput) => void): void;
    describeProductView(args: DescribeProductViewCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeProductViewCommandOutput) => void): void;
    /**
     * <p>Gets information about the specified provisioned product.</p>
     */
    describeProvisionedProduct(args: DescribeProvisionedProductCommandInput, options?: __HttpHandlerOptions): Promise<DescribeProvisionedProductCommandOutput>;
    describeProvisionedProduct(args: DescribeProvisionedProductCommandInput, cb: (err: any, data?: DescribeProvisionedProductCommandOutput) => void): void;
    describeProvisionedProduct(args: DescribeProvisionedProductCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeProvisionedProductCommandOutput) => void): void;
    /**
     * <p>Gets information about the resource changes for the specified plan.</p>
     */
    describeProvisionedProductPlan(args: DescribeProvisionedProductPlanCommandInput, options?: __HttpHandlerOptions): Promise<DescribeProvisionedProductPlanCommandOutput>;
    describeProvisionedProductPlan(args: DescribeProvisionedProductPlanCommandInput, cb: (err: any, data?: DescribeProvisionedProductPlanCommandOutput) => void): void;
    describeProvisionedProductPlan(args: DescribeProvisionedProductPlanCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeProvisionedProductPlanCommandOutput) => void): void;
    /**
     * <p>Gets information about the specified provisioning artifact (also known as a version) for the specified product.</p>
     */
    describeProvisioningArtifact(args: DescribeProvisioningArtifactCommandInput, options?: __HttpHandlerOptions): Promise<DescribeProvisioningArtifactCommandOutput>;
    describeProvisioningArtifact(args: DescribeProvisioningArtifactCommandInput, cb: (err: any, data?: DescribeProvisioningArtifactCommandOutput) => void): void;
    describeProvisioningArtifact(args: DescribeProvisioningArtifactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeProvisioningArtifactCommandOutput) => void): void;
    /**
     * <p>Gets information about the configuration required to provision the specified product using
     *          the specified provisioning artifact.</p>
     *          <p>If the output contains a TagOption key with an empty list of values, there is a
     *          TagOption conflict for that key. The end user cannot take action to fix the conflict, and
     *          launch is not blocked. In subsequent calls to <a>ProvisionProduct</a>,
     *          do not include conflicted TagOption keys as tags, or this causes the error
     *          "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>".
     *          Tag the provisioned product with the value <code>sc-tagoption-conflict-portfolioId-productId</code>.</p>
     */
    describeProvisioningParameters(args: DescribeProvisioningParametersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeProvisioningParametersCommandOutput>;
    describeProvisioningParameters(args: DescribeProvisioningParametersCommandInput, cb: (err: any, data?: DescribeProvisioningParametersCommandOutput) => void): void;
    describeProvisioningParameters(args: DescribeProvisioningParametersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeProvisioningParametersCommandOutput) => void): void;
    /**
     * <p>Gets information about the specified request operation.</p>
     *          <p>Use this operation after calling a request operation (for example, <a>ProvisionProduct</a>,
     *          <a>TerminateProvisionedProduct</a>, or <a>UpdateProvisionedProduct</a>).
     *       </p>
     *          <note>
     *             <p>If a provisioned product was transferred to a new owner using <a>UpdateProvisionedProductProperties</a>, the new owner
     *       will be able to describe all past records for that product. The previous owner will no longer be able to describe the records, but will be able to
     *       use <a>ListRecordHistory</a> to see the product's history from when he was the owner.</p>
     *          </note>
     */
    describeRecord(args: DescribeRecordCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRecordCommandOutput>;
    describeRecord(args: DescribeRecordCommandInput, cb: (err: any, data?: DescribeRecordCommandOutput) => void): void;
    describeRecord(args: DescribeRecordCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRecordCommandOutput) => void): void;
    /**
     * <p>Describes a self-service action.</p>
     */
    describeServiceAction(args: DescribeServiceActionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeServiceActionCommandOutput>;
    describeServiceAction(args: DescribeServiceActionCommandInput, cb: (err: any, data?: DescribeServiceActionCommandOutput) => void): void;
    describeServiceAction(args: DescribeServiceActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeServiceActionCommandOutput) => void): void;
    describeServiceActionExecutionParameters(args: DescribeServiceActionExecutionParametersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeServiceActionExecutionParametersCommandOutput>;
    describeServiceActionExecutionParameters(args: DescribeServiceActionExecutionParametersCommandInput, cb: (err: any, data?: DescribeServiceActionExecutionParametersCommandOutput) => void): void;
    describeServiceActionExecutionParameters(args: DescribeServiceActionExecutionParametersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeServiceActionExecutionParametersCommandOutput) => void): void;
    /**
     * <p>Gets information about the specified TagOption.</p>
     */
    describeTagOption(args: DescribeTagOptionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTagOptionCommandOutput>;
    describeTagOption(args: DescribeTagOptionCommandInput, cb: (err: any, data?: DescribeTagOptionCommandOutput) => void): void;
    describeTagOption(args: DescribeTagOptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTagOptionCommandOutput) => void): void;
    /**
     * <p>Disable portfolio sharing through AWS Organizations feature. This feature will not delete your current shares but it will prevent you from creating new shares throughout your organization. Current shares will not be in sync with your organization structure if it changes after calling this API. This API can only be called by the master account in the organization.</p>
     */
    disableAWSOrganizationsAccess(args: DisableAWSOrganizationsAccessCommandInput, options?: __HttpHandlerOptions): Promise<DisableAWSOrganizationsAccessCommandOutput>;
    disableAWSOrganizationsAccess(args: DisableAWSOrganizationsAccessCommandInput, cb: (err: any, data?: DisableAWSOrganizationsAccessCommandOutput) => void): void;
    disableAWSOrganizationsAccess(args: DisableAWSOrganizationsAccessCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisableAWSOrganizationsAccessCommandOutput) => void): void;
    /**
     * <p>Disassociates the specified budget from the specified resource.</p>
     */
    disassociateBudgetFromResource(args: DisassociateBudgetFromResourceCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateBudgetFromResourceCommandOutput>;
    disassociateBudgetFromResource(args: DisassociateBudgetFromResourceCommandInput, cb: (err: any, data?: DisassociateBudgetFromResourceCommandOutput) => void): void;
    disassociateBudgetFromResource(args: DisassociateBudgetFromResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateBudgetFromResourceCommandOutput) => void): void;
    /**
     * <p>Disassociates a previously associated principal ARN from a specified
     *          portfolio.</p>
     */
    disassociatePrincipalFromPortfolio(args: DisassociatePrincipalFromPortfolioCommandInput, options?: __HttpHandlerOptions): Promise<DisassociatePrincipalFromPortfolioCommandOutput>;
    disassociatePrincipalFromPortfolio(args: DisassociatePrincipalFromPortfolioCommandInput, cb: (err: any, data?: DisassociatePrincipalFromPortfolioCommandOutput) => void): void;
    disassociatePrincipalFromPortfolio(args: DisassociatePrincipalFromPortfolioCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociatePrincipalFromPortfolioCommandOutput) => void): void;
    /**
     * <p>Disassociates the specified product from the specified portfolio. </p>
     */
    disassociateProductFromPortfolio(args: DisassociateProductFromPortfolioCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateProductFromPortfolioCommandOutput>;
    disassociateProductFromPortfolio(args: DisassociateProductFromPortfolioCommandInput, cb: (err: any, data?: DisassociateProductFromPortfolioCommandOutput) => void): void;
    disassociateProductFromPortfolio(args: DisassociateProductFromPortfolioCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateProductFromPortfolioCommandOutput) => void): void;
    /**
     * <p>Disassociates the specified self-service action association from the specified provisioning artifact.</p>
     */
    disassociateServiceActionFromProvisioningArtifact(args: DisassociateServiceActionFromProvisioningArtifactCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateServiceActionFromProvisioningArtifactCommandOutput>;
    disassociateServiceActionFromProvisioningArtifact(args: DisassociateServiceActionFromProvisioningArtifactCommandInput, cb: (err: any, data?: DisassociateServiceActionFromProvisioningArtifactCommandOutput) => void): void;
    disassociateServiceActionFromProvisioningArtifact(args: DisassociateServiceActionFromProvisioningArtifactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateServiceActionFromProvisioningArtifactCommandOutput) => void): void;
    /**
     * <p>Disassociates the specified TagOption from the specified resource.</p>
     */
    disassociateTagOptionFromResource(args: DisassociateTagOptionFromResourceCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateTagOptionFromResourceCommandOutput>;
    disassociateTagOptionFromResource(args: DisassociateTagOptionFromResourceCommandInput, cb: (err: any, data?: DisassociateTagOptionFromResourceCommandOutput) => void): void;
    disassociateTagOptionFromResource(args: DisassociateTagOptionFromResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateTagOptionFromResourceCommandOutput) => void): void;
    /**
     * <p>Enable portfolio sharing feature through AWS Organizations. This API will allow Service Catalog to receive updates on your organization in order to sync your shares with the current structure. This API can only be called by the master account in the organization.</p>
     *          <p>By calling this API Service Catalog will make a call to organizations:EnableAWSServiceAccess on your behalf so that your shares can be in sync with any changes in your AWS Organizations structure.</p>
     */
    enableAWSOrganizationsAccess(args: EnableAWSOrganizationsAccessCommandInput, options?: __HttpHandlerOptions): Promise<EnableAWSOrganizationsAccessCommandOutput>;
    enableAWSOrganizationsAccess(args: EnableAWSOrganizationsAccessCommandInput, cb: (err: any, data?: EnableAWSOrganizationsAccessCommandOutput) => void): void;
    enableAWSOrganizationsAccess(args: EnableAWSOrganizationsAccessCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnableAWSOrganizationsAccessCommandOutput) => void): void;
    /**
     * <p>Provisions or modifies a product based on the resource changes for the specified plan.</p>
     */
    executeProvisionedProductPlan(args: ExecuteProvisionedProductPlanCommandInput, options?: __HttpHandlerOptions): Promise<ExecuteProvisionedProductPlanCommandOutput>;
    executeProvisionedProductPlan(args: ExecuteProvisionedProductPlanCommandInput, cb: (err: any, data?: ExecuteProvisionedProductPlanCommandOutput) => void): void;
    executeProvisionedProductPlan(args: ExecuteProvisionedProductPlanCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ExecuteProvisionedProductPlanCommandOutput) => void): void;
    /**
     * <p>Executes a self-service action against a provisioned product.</p>
     */
    executeProvisionedProductServiceAction(args: ExecuteProvisionedProductServiceActionCommandInput, options?: __HttpHandlerOptions): Promise<ExecuteProvisionedProductServiceActionCommandOutput>;
    executeProvisionedProductServiceAction(args: ExecuteProvisionedProductServiceActionCommandInput, cb: (err: any, data?: ExecuteProvisionedProductServiceActionCommandOutput) => void): void;
    executeProvisionedProductServiceAction(args: ExecuteProvisionedProductServiceActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ExecuteProvisionedProductServiceActionCommandOutput) => void): void;
    /**
     * <p>Get the Access Status for AWS Organization portfolio share feature. This API can only be called by the master account in the organization.</p>
     */
    getAWSOrganizationsAccessStatus(args: GetAWSOrganizationsAccessStatusCommandInput, options?: __HttpHandlerOptions): Promise<GetAWSOrganizationsAccessStatusCommandOutput>;
    getAWSOrganizationsAccessStatus(args: GetAWSOrganizationsAccessStatusCommandInput, cb: (err: any, data?: GetAWSOrganizationsAccessStatusCommandOutput) => void): void;
    getAWSOrganizationsAccessStatus(args: GetAWSOrganizationsAccessStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAWSOrganizationsAccessStatusCommandOutput) => void): void;
    /**
     * <p>Lists all portfolios for which sharing was accepted by this account.</p>
     */
    listAcceptedPortfolioShares(args: ListAcceptedPortfolioSharesCommandInput, options?: __HttpHandlerOptions): Promise<ListAcceptedPortfolioSharesCommandOutput>;
    listAcceptedPortfolioShares(args: ListAcceptedPortfolioSharesCommandInput, cb: (err: any, data?: ListAcceptedPortfolioSharesCommandOutput) => void): void;
    listAcceptedPortfolioShares(args: ListAcceptedPortfolioSharesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAcceptedPortfolioSharesCommandOutput) => void): void;
    /**
     * <p>Lists all the budgets associated to the specified resource.</p>
     */
    listBudgetsForResource(args: ListBudgetsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListBudgetsForResourceCommandOutput>;
    listBudgetsForResource(args: ListBudgetsForResourceCommandInput, cb: (err: any, data?: ListBudgetsForResourceCommandOutput) => void): void;
    listBudgetsForResource(args: ListBudgetsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListBudgetsForResourceCommandOutput) => void): void;
    /**
     * <p>Lists the constraints for the specified portfolio and product.</p>
     */
    listConstraintsForPortfolio(args: ListConstraintsForPortfolioCommandInput, options?: __HttpHandlerOptions): Promise<ListConstraintsForPortfolioCommandOutput>;
    listConstraintsForPortfolio(args: ListConstraintsForPortfolioCommandInput, cb: (err: any, data?: ListConstraintsForPortfolioCommandOutput) => void): void;
    listConstraintsForPortfolio(args: ListConstraintsForPortfolioCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListConstraintsForPortfolioCommandOutput) => void): void;
    /**
     * <p>Lists the paths to the specified product. A path is how the user
     *          has access to a specified product, and is necessary when provisioning a product. A path
     *          also determines the constraints put on the product.</p>
     */
    listLaunchPaths(args: ListLaunchPathsCommandInput, options?: __HttpHandlerOptions): Promise<ListLaunchPathsCommandOutput>;
    listLaunchPaths(args: ListLaunchPathsCommandInput, cb: (err: any, data?: ListLaunchPathsCommandOutput) => void): void;
    listLaunchPaths(args: ListLaunchPathsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLaunchPathsCommandOutput) => void): void;
    /**
     * <p>Lists the organization nodes that have access to the specified portfolio. This API can only be called by the master account in the organization.</p>
     */
    listOrganizationPortfolioAccess(args: ListOrganizationPortfolioAccessCommandInput, options?: __HttpHandlerOptions): Promise<ListOrganizationPortfolioAccessCommandOutput>;
    listOrganizationPortfolioAccess(args: ListOrganizationPortfolioAccessCommandInput, cb: (err: any, data?: ListOrganizationPortfolioAccessCommandOutput) => void): void;
    listOrganizationPortfolioAccess(args: ListOrganizationPortfolioAccessCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListOrganizationPortfolioAccessCommandOutput) => void): void;
    /**
     * <p>Lists the account IDs that have access to the specified portfolio.</p>
     */
    listPortfolioAccess(args: ListPortfolioAccessCommandInput, options?: __HttpHandlerOptions): Promise<ListPortfolioAccessCommandOutput>;
    listPortfolioAccess(args: ListPortfolioAccessCommandInput, cb: (err: any, data?: ListPortfolioAccessCommandOutput) => void): void;
    listPortfolioAccess(args: ListPortfolioAccessCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPortfolioAccessCommandOutput) => void): void;
    /**
     * <p>Lists all portfolios in the catalog.</p>
     */
    listPortfolios(args: ListPortfoliosCommandInput, options?: __HttpHandlerOptions): Promise<ListPortfoliosCommandOutput>;
    listPortfolios(args: ListPortfoliosCommandInput, cb: (err: any, data?: ListPortfoliosCommandOutput) => void): void;
    listPortfolios(args: ListPortfoliosCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPortfoliosCommandOutput) => void): void;
    /**
     * <p>Lists all portfolios that the specified product is associated with.</p>
     */
    listPortfoliosForProduct(args: ListPortfoliosForProductCommandInput, options?: __HttpHandlerOptions): Promise<ListPortfoliosForProductCommandOutput>;
    listPortfoliosForProduct(args: ListPortfoliosForProductCommandInput, cb: (err: any, data?: ListPortfoliosForProductCommandOutput) => void): void;
    listPortfoliosForProduct(args: ListPortfoliosForProductCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPortfoliosForProductCommandOutput) => void): void;
    /**
     * <p>Lists all principal ARNs associated with the specified portfolio.</p>
     */
    listPrincipalsForPortfolio(args: ListPrincipalsForPortfolioCommandInput, options?: __HttpHandlerOptions): Promise<ListPrincipalsForPortfolioCommandOutput>;
    listPrincipalsForPortfolio(args: ListPrincipalsForPortfolioCommandInput, cb: (err: any, data?: ListPrincipalsForPortfolioCommandOutput) => void): void;
    listPrincipalsForPortfolio(args: ListPrincipalsForPortfolioCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPrincipalsForPortfolioCommandOutput) => void): void;
    /**
     * <p>Lists the plans for the specified provisioned product or all plans to which the user has access.</p>
     */
    listProvisionedProductPlans(args: ListProvisionedProductPlansCommandInput, options?: __HttpHandlerOptions): Promise<ListProvisionedProductPlansCommandOutput>;
    listProvisionedProductPlans(args: ListProvisionedProductPlansCommandInput, cb: (err: any, data?: ListProvisionedProductPlansCommandOutput) => void): void;
    listProvisionedProductPlans(args: ListProvisionedProductPlansCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProvisionedProductPlansCommandOutput) => void): void;
    /**
     * <p>Lists all provisioning artifacts (also known as versions) for the specified product.</p>
     */
    listProvisioningArtifacts(args: ListProvisioningArtifactsCommandInput, options?: __HttpHandlerOptions): Promise<ListProvisioningArtifactsCommandOutput>;
    listProvisioningArtifacts(args: ListProvisioningArtifactsCommandInput, cb: (err: any, data?: ListProvisioningArtifactsCommandOutput) => void): void;
    listProvisioningArtifacts(args: ListProvisioningArtifactsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProvisioningArtifactsCommandOutput) => void): void;
    /**
     * <p>Lists all provisioning artifacts (also known as versions) for the specified self-service action.</p>
     */
    listProvisioningArtifactsForServiceAction(args: ListProvisioningArtifactsForServiceActionCommandInput, options?: __HttpHandlerOptions): Promise<ListProvisioningArtifactsForServiceActionCommandOutput>;
    listProvisioningArtifactsForServiceAction(args: ListProvisioningArtifactsForServiceActionCommandInput, cb: (err: any, data?: ListProvisioningArtifactsForServiceActionCommandOutput) => void): void;
    listProvisioningArtifactsForServiceAction(args: ListProvisioningArtifactsForServiceActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProvisioningArtifactsForServiceActionCommandOutput) => void): void;
    /**
     * <p>Lists the specified requests or all performed requests.</p>
     */
    listRecordHistory(args: ListRecordHistoryCommandInput, options?: __HttpHandlerOptions): Promise<ListRecordHistoryCommandOutput>;
    listRecordHistory(args: ListRecordHistoryCommandInput, cb: (err: any, data?: ListRecordHistoryCommandOutput) => void): void;
    listRecordHistory(args: ListRecordHistoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRecordHistoryCommandOutput) => void): void;
    /**
     * <p>Lists the resources associated with the specified TagOption.</p>
     */
    listResourcesForTagOption(args: ListResourcesForTagOptionCommandInput, options?: __HttpHandlerOptions): Promise<ListResourcesForTagOptionCommandOutput>;
    listResourcesForTagOption(args: ListResourcesForTagOptionCommandInput, cb: (err: any, data?: ListResourcesForTagOptionCommandOutput) => void): void;
    listResourcesForTagOption(args: ListResourcesForTagOptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResourcesForTagOptionCommandOutput) => void): void;
    /**
     * <p>Lists all self-service actions.</p>
     */
    listServiceActions(args: ListServiceActionsCommandInput, options?: __HttpHandlerOptions): Promise<ListServiceActionsCommandOutput>;
    listServiceActions(args: ListServiceActionsCommandInput, cb: (err: any, data?: ListServiceActionsCommandOutput) => void): void;
    listServiceActions(args: ListServiceActionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListServiceActionsCommandOutput) => void): void;
    /**
     * <p>Returns a paginated list of self-service actions associated with the specified Product ID and Provisioning Artifact ID.</p>
     */
    listServiceActionsForProvisioningArtifact(args: ListServiceActionsForProvisioningArtifactCommandInput, options?: __HttpHandlerOptions): Promise<ListServiceActionsForProvisioningArtifactCommandOutput>;
    listServiceActionsForProvisioningArtifact(args: ListServiceActionsForProvisioningArtifactCommandInput, cb: (err: any, data?: ListServiceActionsForProvisioningArtifactCommandOutput) => void): void;
    listServiceActionsForProvisioningArtifact(args: ListServiceActionsForProvisioningArtifactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListServiceActionsForProvisioningArtifactCommandOutput) => void): void;
    /**
     * <p>Returns summary information about stack instances that are associated with the specified <code>CFN_STACKSET</code> type provisioned product. You can filter for stack instances that are associated with a specific AWS account name or region. </p>
     */
    listStackInstancesForProvisionedProduct(args: ListStackInstancesForProvisionedProductCommandInput, options?: __HttpHandlerOptions): Promise<ListStackInstancesForProvisionedProductCommandOutput>;
    listStackInstancesForProvisionedProduct(args: ListStackInstancesForProvisionedProductCommandInput, cb: (err: any, data?: ListStackInstancesForProvisionedProductCommandOutput) => void): void;
    listStackInstancesForProvisionedProduct(args: ListStackInstancesForProvisionedProductCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListStackInstancesForProvisionedProductCommandOutput) => void): void;
    /**
     * <p>Lists the specified TagOptions or all TagOptions.</p>
     */
    listTagOptions(args: ListTagOptionsCommandInput, options?: __HttpHandlerOptions): Promise<ListTagOptionsCommandOutput>;
    listTagOptions(args: ListTagOptionsCommandInput, cb: (err: any, data?: ListTagOptionsCommandOutput) => void): void;
    listTagOptions(args: ListTagOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagOptionsCommandOutput) => void): void;
    /**
     * <p>Provisions the specified product.</p>
     *          <p>A provisioned product is a resourced instance of a product.
     *          For example, provisioning a product based on a CloudFormation template launches a
     *          CloudFormation stack and its underlying resources.
     *          You can check the status of this request using <a>DescribeRecord</a>.</p>
     *          <p>If the request contains a tag key with an empty list of values, there is a
     *          tag conflict for that key. Do not include conflicted keys as tags, or this causes
     *          the error "Parameter validation failed: Missing required parameter in
     *          Tags[<i>N</i>]:<i>Value</i>".</p>
     */
    provisionProduct(args: ProvisionProductCommandInput, options?: __HttpHandlerOptions): Promise<ProvisionProductCommandOutput>;
    provisionProduct(args: ProvisionProductCommandInput, cb: (err: any, data?: ProvisionProductCommandOutput) => void): void;
    provisionProduct(args: ProvisionProductCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ProvisionProductCommandOutput) => void): void;
    /**
     * <p>Rejects an offer to share the specified portfolio.</p>
     */
    rejectPortfolioShare(args: RejectPortfolioShareCommandInput, options?: __HttpHandlerOptions): Promise<RejectPortfolioShareCommandOutput>;
    rejectPortfolioShare(args: RejectPortfolioShareCommandInput, cb: (err: any, data?: RejectPortfolioShareCommandOutput) => void): void;
    rejectPortfolioShare(args: RejectPortfolioShareCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RejectPortfolioShareCommandOutput) => void): void;
    /**
     * <p>Lists the provisioned products that are available (not terminated).</p>
     *          <p>To use additional filtering, see <a>SearchProvisionedProducts</a>.</p>
     */
    scanProvisionedProducts(args: ScanProvisionedProductsCommandInput, options?: __HttpHandlerOptions): Promise<ScanProvisionedProductsCommandOutput>;
    scanProvisionedProducts(args: ScanProvisionedProductsCommandInput, cb: (err: any, data?: ScanProvisionedProductsCommandOutput) => void): void;
    scanProvisionedProducts(args: ScanProvisionedProductsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ScanProvisionedProductsCommandOutput) => void): void;
    /**
     * <p>Gets information about the products to which the caller has access.</p>
     */
    searchProducts(args: SearchProductsCommandInput, options?: __HttpHandlerOptions): Promise<SearchProductsCommandOutput>;
    searchProducts(args: SearchProductsCommandInput, cb: (err: any, data?: SearchProductsCommandOutput) => void): void;
    searchProducts(args: SearchProductsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchProductsCommandOutput) => void): void;
    /**
     * <p>Gets information about the products for the specified portfolio or all products.</p>
     */
    searchProductsAsAdmin(args: SearchProductsAsAdminCommandInput, options?: __HttpHandlerOptions): Promise<SearchProductsAsAdminCommandOutput>;
    searchProductsAsAdmin(args: SearchProductsAsAdminCommandInput, cb: (err: any, data?: SearchProductsAsAdminCommandOutput) => void): void;
    searchProductsAsAdmin(args: SearchProductsAsAdminCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchProductsAsAdminCommandOutput) => void): void;
    /**
     * <p>Gets information about the provisioned products that meet the specified criteria.</p>
     */
    searchProvisionedProducts(args: SearchProvisionedProductsCommandInput, options?: __HttpHandlerOptions): Promise<SearchProvisionedProductsCommandOutput>;
    searchProvisionedProducts(args: SearchProvisionedProductsCommandInput, cb: (err: any, data?: SearchProvisionedProductsCommandOutput) => void): void;
    searchProvisionedProducts(args: SearchProvisionedProductsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchProvisionedProductsCommandOutput) => void): void;
    /**
     * <p>Terminates the specified provisioned product.</p>
     *          <p>This operation does not delete any records associated with the provisioned product.</p>
     *          <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
     */
    terminateProvisionedProduct(args: TerminateProvisionedProductCommandInput, options?: __HttpHandlerOptions): Promise<TerminateProvisionedProductCommandOutput>;
    terminateProvisionedProduct(args: TerminateProvisionedProductCommandInput, cb: (err: any, data?: TerminateProvisionedProductCommandOutput) => void): void;
    terminateProvisionedProduct(args: TerminateProvisionedProductCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TerminateProvisionedProductCommandOutput) => void): void;
    /**
     * <p>Updates the specified constraint.</p>
     */
    updateConstraint(args: UpdateConstraintCommandInput, options?: __HttpHandlerOptions): Promise<UpdateConstraintCommandOutput>;
    updateConstraint(args: UpdateConstraintCommandInput, cb: (err: any, data?: UpdateConstraintCommandOutput) => void): void;
    updateConstraint(args: UpdateConstraintCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateConstraintCommandOutput) => void): void;
    /**
     * <p>Updates the specified portfolio.</p>
     *          <p>You cannot update a product that was shared with you.</p>
     */
    updatePortfolio(args: UpdatePortfolioCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePortfolioCommandOutput>;
    updatePortfolio(args: UpdatePortfolioCommandInput, cb: (err: any, data?: UpdatePortfolioCommandOutput) => void): void;
    updatePortfolio(args: UpdatePortfolioCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdatePortfolioCommandOutput) => void): void;
    /**
     * <p>Updates the specified product.</p>
     */
    updateProduct(args: UpdateProductCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProductCommandOutput>;
    updateProduct(args: UpdateProductCommandInput, cb: (err: any, data?: UpdateProductCommandOutput) => void): void;
    updateProduct(args: UpdateProductCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateProductCommandOutput) => void): void;
    /**
     * <p>Requests updates to the configuration of the specified provisioned product.</p>
     *          <p>If there are tags associated with the object, they cannot be updated or added.
     *          Depending on the specific updates requested, this operation can update with no
     *          interruption, with some interruption, or replace the provisioned product entirely.</p>
     *          <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
     */
    updateProvisionedProduct(args: UpdateProvisionedProductCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProvisionedProductCommandOutput>;
    updateProvisionedProduct(args: UpdateProvisionedProductCommandInput, cb: (err: any, data?: UpdateProvisionedProductCommandOutput) => void): void;
    updateProvisionedProduct(args: UpdateProvisionedProductCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateProvisionedProductCommandOutput) => void): void;
    /**
     * <p>Requests updates to the properties of the specified provisioned product.</p>
     */
    updateProvisionedProductProperties(args: UpdateProvisionedProductPropertiesCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProvisionedProductPropertiesCommandOutput>;
    updateProvisionedProductProperties(args: UpdateProvisionedProductPropertiesCommandInput, cb: (err: any, data?: UpdateProvisionedProductPropertiesCommandOutput) => void): void;
    updateProvisionedProductProperties(args: UpdateProvisionedProductPropertiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateProvisionedProductPropertiesCommandOutput) => void): void;
    /**
     * <p>Updates the specified provisioning artifact (also known as a version) for the specified product.</p>
     *          <p>You cannot update a provisioning artifact for a product that was shared with you.</p>
     */
    updateProvisioningArtifact(args: UpdateProvisioningArtifactCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProvisioningArtifactCommandOutput>;
    updateProvisioningArtifact(args: UpdateProvisioningArtifactCommandInput, cb: (err: any, data?: UpdateProvisioningArtifactCommandOutput) => void): void;
    updateProvisioningArtifact(args: UpdateProvisioningArtifactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateProvisioningArtifactCommandOutput) => void): void;
    /**
     * <p>Updates a self-service action.</p>
     */
    updateServiceAction(args: UpdateServiceActionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateServiceActionCommandOutput>;
    updateServiceAction(args: UpdateServiceActionCommandInput, cb: (err: any, data?: UpdateServiceActionCommandOutput) => void): void;
    updateServiceAction(args: UpdateServiceActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateServiceActionCommandOutput) => void): void;
    /**
     * <p>Updates the specified TagOption.</p>
     */
    updateTagOption(args: UpdateTagOptionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTagOptionCommandOutput>;
    updateTagOption(args: UpdateTagOptionCommandInput, cb: (err: any, data?: UpdateTagOptionCommandOutput) => void): void;
    updateTagOption(args: UpdateTagOptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateTagOptionCommandOutput) => void): void;
}
