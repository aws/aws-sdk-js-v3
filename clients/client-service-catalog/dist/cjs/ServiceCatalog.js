"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceCatalogClient_1 = require("./ServiceCatalogClient");
const AcceptPortfolioShareCommand_1 = require("./commands/AcceptPortfolioShareCommand");
const AssociateBudgetWithResourceCommand_1 = require("./commands/AssociateBudgetWithResourceCommand");
const AssociatePrincipalWithPortfolioCommand_1 = require("./commands/AssociatePrincipalWithPortfolioCommand");
const AssociateProductWithPortfolioCommand_1 = require("./commands/AssociateProductWithPortfolioCommand");
const AssociateServiceActionWithProvisioningArtifactCommand_1 = require("./commands/AssociateServiceActionWithProvisioningArtifactCommand");
const AssociateTagOptionWithResourceCommand_1 = require("./commands/AssociateTagOptionWithResourceCommand");
const BatchAssociateServiceActionWithProvisioningArtifactCommand_1 = require("./commands/BatchAssociateServiceActionWithProvisioningArtifactCommand");
const BatchDisassociateServiceActionFromProvisioningArtifactCommand_1 = require("./commands/BatchDisassociateServiceActionFromProvisioningArtifactCommand");
const CopyProductCommand_1 = require("./commands/CopyProductCommand");
const CreateConstraintCommand_1 = require("./commands/CreateConstraintCommand");
const CreatePortfolioCommand_1 = require("./commands/CreatePortfolioCommand");
const CreatePortfolioShareCommand_1 = require("./commands/CreatePortfolioShareCommand");
const CreateProductCommand_1 = require("./commands/CreateProductCommand");
const CreateProvisionedProductPlanCommand_1 = require("./commands/CreateProvisionedProductPlanCommand");
const CreateProvisioningArtifactCommand_1 = require("./commands/CreateProvisioningArtifactCommand");
const CreateServiceActionCommand_1 = require("./commands/CreateServiceActionCommand");
const CreateTagOptionCommand_1 = require("./commands/CreateTagOptionCommand");
const DeleteConstraintCommand_1 = require("./commands/DeleteConstraintCommand");
const DeletePortfolioCommand_1 = require("./commands/DeletePortfolioCommand");
const DeletePortfolioShareCommand_1 = require("./commands/DeletePortfolioShareCommand");
const DeleteProductCommand_1 = require("./commands/DeleteProductCommand");
const DeleteProvisionedProductPlanCommand_1 = require("./commands/DeleteProvisionedProductPlanCommand");
const DeleteProvisioningArtifactCommand_1 = require("./commands/DeleteProvisioningArtifactCommand");
const DeleteServiceActionCommand_1 = require("./commands/DeleteServiceActionCommand");
const DeleteTagOptionCommand_1 = require("./commands/DeleteTagOptionCommand");
const DescribeConstraintCommand_1 = require("./commands/DescribeConstraintCommand");
const DescribeCopyProductStatusCommand_1 = require("./commands/DescribeCopyProductStatusCommand");
const DescribePortfolioCommand_1 = require("./commands/DescribePortfolioCommand");
const DescribePortfolioShareStatusCommand_1 = require("./commands/DescribePortfolioShareStatusCommand");
const DescribeProductAsAdminCommand_1 = require("./commands/DescribeProductAsAdminCommand");
const DescribeProductCommand_1 = require("./commands/DescribeProductCommand");
const DescribeProductViewCommand_1 = require("./commands/DescribeProductViewCommand");
const DescribeProvisionedProductCommand_1 = require("./commands/DescribeProvisionedProductCommand");
const DescribeProvisionedProductPlanCommand_1 = require("./commands/DescribeProvisionedProductPlanCommand");
const DescribeProvisioningArtifactCommand_1 = require("./commands/DescribeProvisioningArtifactCommand");
const DescribeProvisioningParametersCommand_1 = require("./commands/DescribeProvisioningParametersCommand");
const DescribeRecordCommand_1 = require("./commands/DescribeRecordCommand");
const DescribeServiceActionCommand_1 = require("./commands/DescribeServiceActionCommand");
const DescribeServiceActionExecutionParametersCommand_1 = require("./commands/DescribeServiceActionExecutionParametersCommand");
const DescribeTagOptionCommand_1 = require("./commands/DescribeTagOptionCommand");
const DisableAWSOrganizationsAccessCommand_1 = require("./commands/DisableAWSOrganizationsAccessCommand");
const DisassociateBudgetFromResourceCommand_1 = require("./commands/DisassociateBudgetFromResourceCommand");
const DisassociatePrincipalFromPortfolioCommand_1 = require("./commands/DisassociatePrincipalFromPortfolioCommand");
const DisassociateProductFromPortfolioCommand_1 = require("./commands/DisassociateProductFromPortfolioCommand");
const DisassociateServiceActionFromProvisioningArtifactCommand_1 = require("./commands/DisassociateServiceActionFromProvisioningArtifactCommand");
const DisassociateTagOptionFromResourceCommand_1 = require("./commands/DisassociateTagOptionFromResourceCommand");
const EnableAWSOrganizationsAccessCommand_1 = require("./commands/EnableAWSOrganizationsAccessCommand");
const ExecuteProvisionedProductPlanCommand_1 = require("./commands/ExecuteProvisionedProductPlanCommand");
const ExecuteProvisionedProductServiceActionCommand_1 = require("./commands/ExecuteProvisionedProductServiceActionCommand");
const GetAWSOrganizationsAccessStatusCommand_1 = require("./commands/GetAWSOrganizationsAccessStatusCommand");
const ListAcceptedPortfolioSharesCommand_1 = require("./commands/ListAcceptedPortfolioSharesCommand");
const ListBudgetsForResourceCommand_1 = require("./commands/ListBudgetsForResourceCommand");
const ListConstraintsForPortfolioCommand_1 = require("./commands/ListConstraintsForPortfolioCommand");
const ListLaunchPathsCommand_1 = require("./commands/ListLaunchPathsCommand");
const ListOrganizationPortfolioAccessCommand_1 = require("./commands/ListOrganizationPortfolioAccessCommand");
const ListPortfolioAccessCommand_1 = require("./commands/ListPortfolioAccessCommand");
const ListPortfoliosCommand_1 = require("./commands/ListPortfoliosCommand");
const ListPortfoliosForProductCommand_1 = require("./commands/ListPortfoliosForProductCommand");
const ListPrincipalsForPortfolioCommand_1 = require("./commands/ListPrincipalsForPortfolioCommand");
const ListProvisionedProductPlansCommand_1 = require("./commands/ListProvisionedProductPlansCommand");
const ListProvisioningArtifactsCommand_1 = require("./commands/ListProvisioningArtifactsCommand");
const ListProvisioningArtifactsForServiceActionCommand_1 = require("./commands/ListProvisioningArtifactsForServiceActionCommand");
const ListRecordHistoryCommand_1 = require("./commands/ListRecordHistoryCommand");
const ListResourcesForTagOptionCommand_1 = require("./commands/ListResourcesForTagOptionCommand");
const ListServiceActionsCommand_1 = require("./commands/ListServiceActionsCommand");
const ListServiceActionsForProvisioningArtifactCommand_1 = require("./commands/ListServiceActionsForProvisioningArtifactCommand");
const ListStackInstancesForProvisionedProductCommand_1 = require("./commands/ListStackInstancesForProvisionedProductCommand");
const ListTagOptionsCommand_1 = require("./commands/ListTagOptionsCommand");
const ProvisionProductCommand_1 = require("./commands/ProvisionProductCommand");
const RejectPortfolioShareCommand_1 = require("./commands/RejectPortfolioShareCommand");
const ScanProvisionedProductsCommand_1 = require("./commands/ScanProvisionedProductsCommand");
const SearchProductsAsAdminCommand_1 = require("./commands/SearchProductsAsAdminCommand");
const SearchProductsCommand_1 = require("./commands/SearchProductsCommand");
const SearchProvisionedProductsCommand_1 = require("./commands/SearchProvisionedProductsCommand");
const TerminateProvisionedProductCommand_1 = require("./commands/TerminateProvisionedProductCommand");
const UpdateConstraintCommand_1 = require("./commands/UpdateConstraintCommand");
const UpdatePortfolioCommand_1 = require("./commands/UpdatePortfolioCommand");
const UpdateProductCommand_1 = require("./commands/UpdateProductCommand");
const UpdateProvisionedProductCommand_1 = require("./commands/UpdateProvisionedProductCommand");
const UpdateProvisionedProductPropertiesCommand_1 = require("./commands/UpdateProvisionedProductPropertiesCommand");
const UpdateProvisioningArtifactCommand_1 = require("./commands/UpdateProvisioningArtifactCommand");
const UpdateServiceActionCommand_1 = require("./commands/UpdateServiceActionCommand");
const UpdateTagOptionCommand_1 = require("./commands/UpdateTagOptionCommand");
/**
 * <fullname>AWS Service Catalog</fullname>
 *          <p>
 *             <a href="https://aws.amazon.com/servicecatalog/">AWS Service Catalog</a> enables
 *          organizations to create and manage catalogs of IT services that are approved for use on
 *          AWS. To get the most out of this documentation, you should be familiar with the
 *          terminology discussed in <a href="http://docs.aws.amazon.com/servicecatalog/latest/adminguide/what-is_concepts.html">AWS Service Catalog Concepts</a>.</p>
 */
class ServiceCatalog extends ServiceCatalogClient_1.ServiceCatalogClient {
    acceptPortfolioShare(args, optionsOrCb, cb) {
        const command = new AcceptPortfolioShareCommand_1.AcceptPortfolioShareCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateBudgetWithResource(args, optionsOrCb, cb) {
        const command = new AssociateBudgetWithResourceCommand_1.AssociateBudgetWithResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associatePrincipalWithPortfolio(args, optionsOrCb, cb) {
        const command = new AssociatePrincipalWithPortfolioCommand_1.AssociatePrincipalWithPortfolioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateProductWithPortfolio(args, optionsOrCb, cb) {
        const command = new AssociateProductWithPortfolioCommand_1.AssociateProductWithPortfolioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateServiceActionWithProvisioningArtifact(args, optionsOrCb, cb) {
        const command = new AssociateServiceActionWithProvisioningArtifactCommand_1.AssociateServiceActionWithProvisioningArtifactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateTagOptionWithResource(args, optionsOrCb, cb) {
        const command = new AssociateTagOptionWithResourceCommand_1.AssociateTagOptionWithResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    batchAssociateServiceActionWithProvisioningArtifact(args, optionsOrCb, cb) {
        const command = new BatchAssociateServiceActionWithProvisioningArtifactCommand_1.BatchAssociateServiceActionWithProvisioningArtifactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    batchDisassociateServiceActionFromProvisioningArtifact(args, optionsOrCb, cb) {
        const command = new BatchDisassociateServiceActionFromProvisioningArtifactCommand_1.BatchDisassociateServiceActionFromProvisioningArtifactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    copyProduct(args, optionsOrCb, cb) {
        const command = new CopyProductCommand_1.CopyProductCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createConstraint(args, optionsOrCb, cb) {
        const command = new CreateConstraintCommand_1.CreateConstraintCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createPortfolio(args, optionsOrCb, cb) {
        const command = new CreatePortfolioCommand_1.CreatePortfolioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createPortfolioShare(args, optionsOrCb, cb) {
        const command = new CreatePortfolioShareCommand_1.CreatePortfolioShareCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createProduct(args, optionsOrCb, cb) {
        const command = new CreateProductCommand_1.CreateProductCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createProvisionedProductPlan(args, optionsOrCb, cb) {
        const command = new CreateProvisionedProductPlanCommand_1.CreateProvisionedProductPlanCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createProvisioningArtifact(args, optionsOrCb, cb) {
        const command = new CreateProvisioningArtifactCommand_1.CreateProvisioningArtifactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createServiceAction(args, optionsOrCb, cb) {
        const command = new CreateServiceActionCommand_1.CreateServiceActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createTagOption(args, optionsOrCb, cb) {
        const command = new CreateTagOptionCommand_1.CreateTagOptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteConstraint(args, optionsOrCb, cb) {
        const command = new DeleteConstraintCommand_1.DeleteConstraintCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deletePortfolio(args, optionsOrCb, cb) {
        const command = new DeletePortfolioCommand_1.DeletePortfolioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deletePortfolioShare(args, optionsOrCb, cb) {
        const command = new DeletePortfolioShareCommand_1.DeletePortfolioShareCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteProduct(args, optionsOrCb, cb) {
        const command = new DeleteProductCommand_1.DeleteProductCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteProvisionedProductPlan(args, optionsOrCb, cb) {
        const command = new DeleteProvisionedProductPlanCommand_1.DeleteProvisionedProductPlanCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteProvisioningArtifact(args, optionsOrCb, cb) {
        const command = new DeleteProvisioningArtifactCommand_1.DeleteProvisioningArtifactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteServiceAction(args, optionsOrCb, cb) {
        const command = new DeleteServiceActionCommand_1.DeleteServiceActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteTagOption(args, optionsOrCb, cb) {
        const command = new DeleteTagOptionCommand_1.DeleteTagOptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeConstraint(args, optionsOrCb, cb) {
        const command = new DescribeConstraintCommand_1.DescribeConstraintCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeCopyProductStatus(args, optionsOrCb, cb) {
        const command = new DescribeCopyProductStatusCommand_1.DescribeCopyProductStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describePortfolio(args, optionsOrCb, cb) {
        const command = new DescribePortfolioCommand_1.DescribePortfolioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describePortfolioShareStatus(args, optionsOrCb, cb) {
        const command = new DescribePortfolioShareStatusCommand_1.DescribePortfolioShareStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeProduct(args, optionsOrCb, cb) {
        const command = new DescribeProductCommand_1.DescribeProductCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeProductAsAdmin(args, optionsOrCb, cb) {
        const command = new DescribeProductAsAdminCommand_1.DescribeProductAsAdminCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeProductView(args, optionsOrCb, cb) {
        const command = new DescribeProductViewCommand_1.DescribeProductViewCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeProvisionedProduct(args, optionsOrCb, cb) {
        const command = new DescribeProvisionedProductCommand_1.DescribeProvisionedProductCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeProvisionedProductPlan(args, optionsOrCb, cb) {
        const command = new DescribeProvisionedProductPlanCommand_1.DescribeProvisionedProductPlanCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeProvisioningArtifact(args, optionsOrCb, cb) {
        const command = new DescribeProvisioningArtifactCommand_1.DescribeProvisioningArtifactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeProvisioningParameters(args, optionsOrCb, cb) {
        const command = new DescribeProvisioningParametersCommand_1.DescribeProvisioningParametersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeRecord(args, optionsOrCb, cb) {
        const command = new DescribeRecordCommand_1.DescribeRecordCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeServiceAction(args, optionsOrCb, cb) {
        const command = new DescribeServiceActionCommand_1.DescribeServiceActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeServiceActionExecutionParameters(args, optionsOrCb, cb) {
        const command = new DescribeServiceActionExecutionParametersCommand_1.DescribeServiceActionExecutionParametersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTagOption(args, optionsOrCb, cb) {
        const command = new DescribeTagOptionCommand_1.DescribeTagOptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disableAWSOrganizationsAccess(args, optionsOrCb, cb) {
        const command = new DisableAWSOrganizationsAccessCommand_1.DisableAWSOrganizationsAccessCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateBudgetFromResource(args, optionsOrCb, cb) {
        const command = new DisassociateBudgetFromResourceCommand_1.DisassociateBudgetFromResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociatePrincipalFromPortfolio(args, optionsOrCb, cb) {
        const command = new DisassociatePrincipalFromPortfolioCommand_1.DisassociatePrincipalFromPortfolioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateProductFromPortfolio(args, optionsOrCb, cb) {
        const command = new DisassociateProductFromPortfolioCommand_1.DisassociateProductFromPortfolioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateServiceActionFromProvisioningArtifact(args, optionsOrCb, cb) {
        const command = new DisassociateServiceActionFromProvisioningArtifactCommand_1.DisassociateServiceActionFromProvisioningArtifactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateTagOptionFromResource(args, optionsOrCb, cb) {
        const command = new DisassociateTagOptionFromResourceCommand_1.DisassociateTagOptionFromResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    enableAWSOrganizationsAccess(args, optionsOrCb, cb) {
        const command = new EnableAWSOrganizationsAccessCommand_1.EnableAWSOrganizationsAccessCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    executeProvisionedProductPlan(args, optionsOrCb, cb) {
        const command = new ExecuteProvisionedProductPlanCommand_1.ExecuteProvisionedProductPlanCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    executeProvisionedProductServiceAction(args, optionsOrCb, cb) {
        const command = new ExecuteProvisionedProductServiceActionCommand_1.ExecuteProvisionedProductServiceActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getAWSOrganizationsAccessStatus(args, optionsOrCb, cb) {
        const command = new GetAWSOrganizationsAccessStatusCommand_1.GetAWSOrganizationsAccessStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listAcceptedPortfolioShares(args, optionsOrCb, cb) {
        const command = new ListAcceptedPortfolioSharesCommand_1.ListAcceptedPortfolioSharesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listBudgetsForResource(args, optionsOrCb, cb) {
        const command = new ListBudgetsForResourceCommand_1.ListBudgetsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listConstraintsForPortfolio(args, optionsOrCb, cb) {
        const command = new ListConstraintsForPortfolioCommand_1.ListConstraintsForPortfolioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listLaunchPaths(args, optionsOrCb, cb) {
        const command = new ListLaunchPathsCommand_1.ListLaunchPathsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listOrganizationPortfolioAccess(args, optionsOrCb, cb) {
        const command = new ListOrganizationPortfolioAccessCommand_1.ListOrganizationPortfolioAccessCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listPortfolioAccess(args, optionsOrCb, cb) {
        const command = new ListPortfolioAccessCommand_1.ListPortfolioAccessCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listPortfolios(args, optionsOrCb, cb) {
        const command = new ListPortfoliosCommand_1.ListPortfoliosCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listPortfoliosForProduct(args, optionsOrCb, cb) {
        const command = new ListPortfoliosForProductCommand_1.ListPortfoliosForProductCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listPrincipalsForPortfolio(args, optionsOrCb, cb) {
        const command = new ListPrincipalsForPortfolioCommand_1.ListPrincipalsForPortfolioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listProvisionedProductPlans(args, optionsOrCb, cb) {
        const command = new ListProvisionedProductPlansCommand_1.ListProvisionedProductPlansCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listProvisioningArtifacts(args, optionsOrCb, cb) {
        const command = new ListProvisioningArtifactsCommand_1.ListProvisioningArtifactsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listProvisioningArtifactsForServiceAction(args, optionsOrCb, cb) {
        const command = new ListProvisioningArtifactsForServiceActionCommand_1.ListProvisioningArtifactsForServiceActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listRecordHistory(args, optionsOrCb, cb) {
        const command = new ListRecordHistoryCommand_1.ListRecordHistoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listResourcesForTagOption(args, optionsOrCb, cb) {
        const command = new ListResourcesForTagOptionCommand_1.ListResourcesForTagOptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listServiceActions(args, optionsOrCb, cb) {
        const command = new ListServiceActionsCommand_1.ListServiceActionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listServiceActionsForProvisioningArtifact(args, optionsOrCb, cb) {
        const command = new ListServiceActionsForProvisioningArtifactCommand_1.ListServiceActionsForProvisioningArtifactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listStackInstancesForProvisionedProduct(args, optionsOrCb, cb) {
        const command = new ListStackInstancesForProvisionedProductCommand_1.ListStackInstancesForProvisionedProductCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTagOptions(args, optionsOrCb, cb) {
        const command = new ListTagOptionsCommand_1.ListTagOptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    provisionProduct(args, optionsOrCb, cb) {
        const command = new ProvisionProductCommand_1.ProvisionProductCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    rejectPortfolioShare(args, optionsOrCb, cb) {
        const command = new RejectPortfolioShareCommand_1.RejectPortfolioShareCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    scanProvisionedProducts(args, optionsOrCb, cb) {
        const command = new ScanProvisionedProductsCommand_1.ScanProvisionedProductsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    searchProducts(args, optionsOrCb, cb) {
        const command = new SearchProductsCommand_1.SearchProductsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    searchProductsAsAdmin(args, optionsOrCb, cb) {
        const command = new SearchProductsAsAdminCommand_1.SearchProductsAsAdminCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    searchProvisionedProducts(args, optionsOrCb, cb) {
        const command = new SearchProvisionedProductsCommand_1.SearchProvisionedProductsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    terminateProvisionedProduct(args, optionsOrCb, cb) {
        const command = new TerminateProvisionedProductCommand_1.TerminateProvisionedProductCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateConstraint(args, optionsOrCb, cb) {
        const command = new UpdateConstraintCommand_1.UpdateConstraintCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updatePortfolio(args, optionsOrCb, cb) {
        const command = new UpdatePortfolioCommand_1.UpdatePortfolioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateProduct(args, optionsOrCb, cb) {
        const command = new UpdateProductCommand_1.UpdateProductCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateProvisionedProduct(args, optionsOrCb, cb) {
        const command = new UpdateProvisionedProductCommand_1.UpdateProvisionedProductCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateProvisionedProductProperties(args, optionsOrCb, cb) {
        const command = new UpdateProvisionedProductPropertiesCommand_1.UpdateProvisionedProductPropertiesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateProvisioningArtifact(args, optionsOrCb, cb) {
        const command = new UpdateProvisioningArtifactCommand_1.UpdateProvisioningArtifactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateServiceAction(args, optionsOrCb, cb) {
        const command = new UpdateServiceActionCommand_1.UpdateServiceActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateTagOption(args, optionsOrCb, cb) {
        const command = new UpdateTagOptionCommand_1.UpdateTagOptionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.ServiceCatalog = ServiceCatalog;
//# sourceMappingURL=ServiceCatalog.js.map