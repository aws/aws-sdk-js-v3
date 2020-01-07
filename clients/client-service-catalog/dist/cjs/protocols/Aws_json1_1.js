"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
async function serializeAws_json1_1AcceptPortfolioShareCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.AcceptPortfolioShare";
    let body;
    body = JSON.stringify(serializeAws_json1_1AcceptPortfolioShareInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AcceptPortfolioShareCommand = serializeAws_json1_1AcceptPortfolioShareCommand;
async function serializeAws_json1_1AssociateBudgetWithResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.AssociateBudgetWithResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateBudgetWithResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateBudgetWithResourceCommand = serializeAws_json1_1AssociateBudgetWithResourceCommand;
async function serializeAws_json1_1AssociatePrincipalWithPortfolioCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociatePrincipalWithPortfolioInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociatePrincipalWithPortfolioCommand = serializeAws_json1_1AssociatePrincipalWithPortfolioCommand;
async function serializeAws_json1_1AssociateProductWithPortfolioCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.AssociateProductWithPortfolio";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateProductWithPortfolioInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateProductWithPortfolioCommand = serializeAws_json1_1AssociateProductWithPortfolioCommand;
async function serializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateServiceActionWithProvisioningArtifactInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommand = serializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommand;
async function serializeAws_json1_1AssociateTagOptionWithResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.AssociateTagOptionWithResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateTagOptionWithResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateTagOptionWithResourceCommand = serializeAws_json1_1AssociateTagOptionWithResourceCommand;
async function serializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommand = serializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommand;
async function serializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand = serializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand;
async function serializeAws_json1_1CopyProductCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.CopyProduct";
    let body;
    body = JSON.stringify(serializeAws_json1_1CopyProductInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CopyProductCommand = serializeAws_json1_1CopyProductCommand;
async function serializeAws_json1_1CreateConstraintCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.CreateConstraint";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateConstraintInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateConstraintCommand = serializeAws_json1_1CreateConstraintCommand;
async function serializeAws_json1_1CreatePortfolioCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.CreatePortfolio";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePortfolioInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreatePortfolioCommand = serializeAws_json1_1CreatePortfolioCommand;
async function serializeAws_json1_1CreatePortfolioShareCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.CreatePortfolioShare";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePortfolioShareInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreatePortfolioShareCommand = serializeAws_json1_1CreatePortfolioShareCommand;
async function serializeAws_json1_1CreateProductCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.CreateProduct";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateProductInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateProductCommand = serializeAws_json1_1CreateProductCommand;
async function serializeAws_json1_1CreateProvisionedProductPlanCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.CreateProvisionedProductPlan";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateProvisionedProductPlanInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateProvisionedProductPlanCommand = serializeAws_json1_1CreateProvisionedProductPlanCommand;
async function serializeAws_json1_1CreateProvisioningArtifactCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.CreateProvisioningArtifact";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateProvisioningArtifactInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateProvisioningArtifactCommand = serializeAws_json1_1CreateProvisioningArtifactCommand;
async function serializeAws_json1_1CreateServiceActionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.CreateServiceAction";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateServiceActionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateServiceActionCommand = serializeAws_json1_1CreateServiceActionCommand;
async function serializeAws_json1_1CreateTagOptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.CreateTagOption";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTagOptionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateTagOptionCommand = serializeAws_json1_1CreateTagOptionCommand;
async function serializeAws_json1_1DeleteConstraintCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.DeleteConstraint";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteConstraintInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteConstraintCommand = serializeAws_json1_1DeleteConstraintCommand;
async function serializeAws_json1_1DeletePortfolioCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.DeletePortfolio";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePortfolioInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeletePortfolioCommand = serializeAws_json1_1DeletePortfolioCommand;
async function serializeAws_json1_1DeletePortfolioShareCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.DeletePortfolioShare";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePortfolioShareInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeletePortfolioShareCommand = serializeAws_json1_1DeletePortfolioShareCommand;
async function serializeAws_json1_1DeleteProductCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.DeleteProduct";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteProductInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteProductCommand = serializeAws_json1_1DeleteProductCommand;
async function serializeAws_json1_1DeleteProvisionedProductPlanCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.DeleteProvisionedProductPlan";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteProvisionedProductPlanInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteProvisionedProductPlanCommand = serializeAws_json1_1DeleteProvisionedProductPlanCommand;
async function serializeAws_json1_1DeleteProvisioningArtifactCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.DeleteProvisioningArtifact";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteProvisioningArtifactInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteProvisioningArtifactCommand = serializeAws_json1_1DeleteProvisioningArtifactCommand;
async function serializeAws_json1_1DeleteServiceActionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.DeleteServiceAction";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteServiceActionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteServiceActionCommand = serializeAws_json1_1DeleteServiceActionCommand;
async function serializeAws_json1_1DeleteTagOptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.DeleteTagOption";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTagOptionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteTagOptionCommand = serializeAws_json1_1DeleteTagOptionCommand;
async function serializeAws_json1_1DescribeConstraintCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.DescribeConstraint";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConstraintInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeConstraintCommand = serializeAws_json1_1DescribeConstraintCommand;
async function serializeAws_json1_1DescribeCopyProductStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.DescribeCopyProductStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCopyProductStatusInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeCopyProductStatusCommand = serializeAws_json1_1DescribeCopyProductStatusCommand;
async function serializeAws_json1_1DescribePortfolioCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.DescribePortfolio";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePortfolioInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribePortfolioCommand = serializeAws_json1_1DescribePortfolioCommand;
async function serializeAws_json1_1DescribePortfolioShareStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.DescribePortfolioShareStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePortfolioShareStatusInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribePortfolioShareStatusCommand = serializeAws_json1_1DescribePortfolioShareStatusCommand;
async function serializeAws_json1_1DescribeProductCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.DescribeProduct";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeProductInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeProductCommand = serializeAws_json1_1DescribeProductCommand;
async function serializeAws_json1_1DescribeProductAsAdminCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.DescribeProductAsAdmin";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeProductAsAdminInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeProductAsAdminCommand = serializeAws_json1_1DescribeProductAsAdminCommand;
async function serializeAws_json1_1DescribeProductViewCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.DescribeProductView";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeProductViewInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeProductViewCommand = serializeAws_json1_1DescribeProductViewCommand;
async function serializeAws_json1_1DescribeProvisionedProductCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.DescribeProvisionedProduct";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeProvisionedProductInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeProvisionedProductCommand = serializeAws_json1_1DescribeProvisionedProductCommand;
async function serializeAws_json1_1DescribeProvisionedProductPlanCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.DescribeProvisionedProductPlan";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeProvisionedProductPlanInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeProvisionedProductPlanCommand = serializeAws_json1_1DescribeProvisionedProductPlanCommand;
async function serializeAws_json1_1DescribeProvisioningArtifactCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.DescribeProvisioningArtifact";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeProvisioningArtifactInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeProvisioningArtifactCommand = serializeAws_json1_1DescribeProvisioningArtifactCommand;
async function serializeAws_json1_1DescribeProvisioningParametersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.DescribeProvisioningParameters";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeProvisioningParametersInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeProvisioningParametersCommand = serializeAws_json1_1DescribeProvisioningParametersCommand;
async function serializeAws_json1_1DescribeRecordCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.DescribeRecord";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRecordInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeRecordCommand = serializeAws_json1_1DescribeRecordCommand;
async function serializeAws_json1_1DescribeServiceActionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.DescribeServiceAction";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeServiceActionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeServiceActionCommand = serializeAws_json1_1DescribeServiceActionCommand;
async function serializeAws_json1_1DescribeServiceActionExecutionParametersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeServiceActionExecutionParametersInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeServiceActionExecutionParametersCommand = serializeAws_json1_1DescribeServiceActionExecutionParametersCommand;
async function serializeAws_json1_1DescribeTagOptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.DescribeTagOption";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTagOptionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeTagOptionCommand = serializeAws_json1_1DescribeTagOptionCommand;
async function serializeAws_json1_1DisableAWSOrganizationsAccessCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.DisableAWSOrganizationsAccess";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableAWSOrganizationsAccessInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisableAWSOrganizationsAccessCommand = serializeAws_json1_1DisableAWSOrganizationsAccessCommand;
async function serializeAws_json1_1DisassociateBudgetFromResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.DisassociateBudgetFromResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateBudgetFromResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateBudgetFromResourceCommand = serializeAws_json1_1DisassociateBudgetFromResourceCommand;
async function serializeAws_json1_1DisassociatePrincipalFromPortfolioCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociatePrincipalFromPortfolioInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociatePrincipalFromPortfolioCommand = serializeAws_json1_1DisassociatePrincipalFromPortfolioCommand;
async function serializeAws_json1_1DisassociateProductFromPortfolioCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.DisassociateProductFromPortfolio";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateProductFromPortfolioInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateProductFromPortfolioCommand = serializeAws_json1_1DisassociateProductFromPortfolioCommand;
async function serializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommand = serializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommand;
async function serializeAws_json1_1DisassociateTagOptionFromResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.DisassociateTagOptionFromResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateTagOptionFromResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateTagOptionFromResourceCommand = serializeAws_json1_1DisassociateTagOptionFromResourceCommand;
async function serializeAws_json1_1EnableAWSOrganizationsAccessCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.EnableAWSOrganizationsAccess";
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableAWSOrganizationsAccessInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1EnableAWSOrganizationsAccessCommand = serializeAws_json1_1EnableAWSOrganizationsAccessCommand;
async function serializeAws_json1_1ExecuteProvisionedProductPlanCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.ExecuteProvisionedProductPlan";
    let body;
    body = JSON.stringify(serializeAws_json1_1ExecuteProvisionedProductPlanInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ExecuteProvisionedProductPlanCommand = serializeAws_json1_1ExecuteProvisionedProductPlanCommand;
async function serializeAws_json1_1ExecuteProvisionedProductServiceActionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction";
    let body;
    body = JSON.stringify(serializeAws_json1_1ExecuteProvisionedProductServiceActionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ExecuteProvisionedProductServiceActionCommand = serializeAws_json1_1ExecuteProvisionedProductServiceActionCommand;
async function serializeAws_json1_1GetAWSOrganizationsAccessStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAWSOrganizationsAccessStatusInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetAWSOrganizationsAccessStatusCommand = serializeAws_json1_1GetAWSOrganizationsAccessStatusCommand;
async function serializeAws_json1_1ListAcceptedPortfolioSharesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.ListAcceptedPortfolioShares";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAcceptedPortfolioSharesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAcceptedPortfolioSharesCommand = serializeAws_json1_1ListAcceptedPortfolioSharesCommand;
async function serializeAws_json1_1ListBudgetsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.ListBudgetsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListBudgetsForResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListBudgetsForResourceCommand = serializeAws_json1_1ListBudgetsForResourceCommand;
async function serializeAws_json1_1ListConstraintsForPortfolioCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.ListConstraintsForPortfolio";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListConstraintsForPortfolioInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListConstraintsForPortfolioCommand = serializeAws_json1_1ListConstraintsForPortfolioCommand;
async function serializeAws_json1_1ListLaunchPathsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.ListLaunchPaths";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListLaunchPathsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListLaunchPathsCommand = serializeAws_json1_1ListLaunchPathsCommand;
async function serializeAws_json1_1ListOrganizationPortfolioAccessCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.ListOrganizationPortfolioAccess";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListOrganizationPortfolioAccessInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListOrganizationPortfolioAccessCommand = serializeAws_json1_1ListOrganizationPortfolioAccessCommand;
async function serializeAws_json1_1ListPortfolioAccessCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.ListPortfolioAccess";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPortfolioAccessInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListPortfolioAccessCommand = serializeAws_json1_1ListPortfolioAccessCommand;
async function serializeAws_json1_1ListPortfoliosCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.ListPortfolios";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPortfoliosInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListPortfoliosCommand = serializeAws_json1_1ListPortfoliosCommand;
async function serializeAws_json1_1ListPortfoliosForProductCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.ListPortfoliosForProduct";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPortfoliosForProductInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListPortfoliosForProductCommand = serializeAws_json1_1ListPortfoliosForProductCommand;
async function serializeAws_json1_1ListPrincipalsForPortfolioCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.ListPrincipalsForPortfolio";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPrincipalsForPortfolioInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListPrincipalsForPortfolioCommand = serializeAws_json1_1ListPrincipalsForPortfolioCommand;
async function serializeAws_json1_1ListProvisionedProductPlansCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.ListProvisionedProductPlans";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListProvisionedProductPlansInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListProvisionedProductPlansCommand = serializeAws_json1_1ListProvisionedProductPlansCommand;
async function serializeAws_json1_1ListProvisioningArtifactsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.ListProvisioningArtifacts";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListProvisioningArtifactsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListProvisioningArtifactsCommand = serializeAws_json1_1ListProvisioningArtifactsCommand;
async function serializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListProvisioningArtifactsForServiceActionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand = serializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand;
async function serializeAws_json1_1ListRecordHistoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.ListRecordHistory";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRecordHistoryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListRecordHistoryCommand = serializeAws_json1_1ListRecordHistoryCommand;
async function serializeAws_json1_1ListResourcesForTagOptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.ListResourcesForTagOption";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResourcesForTagOptionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListResourcesForTagOptionCommand = serializeAws_json1_1ListResourcesForTagOptionCommand;
async function serializeAws_json1_1ListServiceActionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.ListServiceActions";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListServiceActionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListServiceActionsCommand = serializeAws_json1_1ListServiceActionsCommand;
async function serializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListServiceActionsForProvisioningArtifactInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand = serializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand;
async function serializeAws_json1_1ListStackInstancesForProvisionedProductCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListStackInstancesForProvisionedProductInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListStackInstancesForProvisionedProductCommand = serializeAws_json1_1ListStackInstancesForProvisionedProductCommand;
async function serializeAws_json1_1ListTagOptionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.ListTagOptions";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagOptionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagOptionsCommand = serializeAws_json1_1ListTagOptionsCommand;
async function serializeAws_json1_1ProvisionProductCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.ProvisionProduct";
    let body;
    body = JSON.stringify(serializeAws_json1_1ProvisionProductInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ProvisionProductCommand = serializeAws_json1_1ProvisionProductCommand;
async function serializeAws_json1_1RejectPortfolioShareCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.RejectPortfolioShare";
    let body;
    body = JSON.stringify(serializeAws_json1_1RejectPortfolioShareInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RejectPortfolioShareCommand = serializeAws_json1_1RejectPortfolioShareCommand;
async function serializeAws_json1_1ScanProvisionedProductsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.ScanProvisionedProducts";
    let body;
    body = JSON.stringify(serializeAws_json1_1ScanProvisionedProductsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ScanProvisionedProductsCommand = serializeAws_json1_1ScanProvisionedProductsCommand;
async function serializeAws_json1_1SearchProductsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.SearchProducts";
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchProductsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SearchProductsCommand = serializeAws_json1_1SearchProductsCommand;
async function serializeAws_json1_1SearchProductsAsAdminCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.SearchProductsAsAdmin";
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchProductsAsAdminInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SearchProductsAsAdminCommand = serializeAws_json1_1SearchProductsAsAdminCommand;
async function serializeAws_json1_1SearchProvisionedProductsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.SearchProvisionedProducts";
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchProvisionedProductsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SearchProvisionedProductsCommand = serializeAws_json1_1SearchProvisionedProductsCommand;
async function serializeAws_json1_1TerminateProvisionedProductCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.TerminateProvisionedProduct";
    let body;
    body = JSON.stringify(serializeAws_json1_1TerminateProvisionedProductInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TerminateProvisionedProductCommand = serializeAws_json1_1TerminateProvisionedProductCommand;
async function serializeAws_json1_1UpdateConstraintCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.UpdateConstraint";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateConstraintInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateConstraintCommand = serializeAws_json1_1UpdateConstraintCommand;
async function serializeAws_json1_1UpdatePortfolioCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.UpdatePortfolio";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdatePortfolioInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdatePortfolioCommand = serializeAws_json1_1UpdatePortfolioCommand;
async function serializeAws_json1_1UpdateProductCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.UpdateProduct";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateProductInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateProductCommand = serializeAws_json1_1UpdateProductCommand;
async function serializeAws_json1_1UpdateProvisionedProductCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.UpdateProvisionedProduct";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateProvisionedProductInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateProvisionedProductCommand = serializeAws_json1_1UpdateProvisionedProductCommand;
async function serializeAws_json1_1UpdateProvisionedProductPropertiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.UpdateProvisionedProductProperties";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateProvisionedProductPropertiesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateProvisionedProductPropertiesCommand = serializeAws_json1_1UpdateProvisionedProductPropertiesCommand;
async function serializeAws_json1_1UpdateProvisioningArtifactCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWS242ServiceCatalogService.UpdateProvisioningArtifact";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateProvisioningArtifactInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateProvisioningArtifactCommand = serializeAws_json1_1UpdateProvisioningArtifactCommand;
async function serializeAws_json1_1UpdateServiceActionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.UpdateServiceAction";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateServiceActionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateServiceActionCommand = serializeAws_json1_1UpdateServiceActionCommand;
async function serializeAws_json1_1UpdateTagOptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWS242ServiceCatalogService.UpdateTagOption";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateTagOptionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateTagOptionCommand = serializeAws_json1_1UpdateTagOptionCommand;
async function deserializeAws_json1_1AcceptPortfolioShareCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AcceptPortfolioShareCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AcceptPortfolioShareOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AcceptPortfolioShareOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AcceptPortfolioShareCommand = deserializeAws_json1_1AcceptPortfolioShareCommand;
async function deserializeAws_json1_1AcceptPortfolioShareCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AssociateBudgetWithResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateBudgetWithResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateBudgetWithResourceOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateBudgetWithResourceOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateBudgetWithResourceCommand = deserializeAws_json1_1AssociateBudgetWithResourceCommand;
async function deserializeAws_json1_1AssociateBudgetWithResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DuplicateResourceException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#DuplicateResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AssociatePrincipalWithPortfolioCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociatePrincipalWithPortfolioCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociatePrincipalWithPortfolioOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociatePrincipalWithPortfolioOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociatePrincipalWithPortfolioCommand = deserializeAws_json1_1AssociatePrincipalWithPortfolioCommand;
async function deserializeAws_json1_1AssociatePrincipalWithPortfolioCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AssociateProductWithPortfolioCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateProductWithPortfolioCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateProductWithPortfolioOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateProductWithPortfolioOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateProductWithPortfolioCommand = deserializeAws_json1_1AssociateProductWithPortfolioCommand;
async function deserializeAws_json1_1AssociateProductWithPortfolioCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateServiceActionWithProvisioningArtifactOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommand = deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommand;
async function deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DuplicateResourceException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#DuplicateResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AssociateTagOptionWithResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateTagOptionWithResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateTagOptionWithResourceOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateTagOptionWithResourceOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateTagOptionWithResourceCommand = deserializeAws_json1_1AssociateTagOptionWithResourceCommand;
async function deserializeAws_json1_1AssociateTagOptionWithResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DuplicateResourceException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#DuplicateResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStateException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagOptionNotMigratedException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#TagOptionNotMigratedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchAssociateServiceActionWithProvisioningArtifactOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommand = deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommand;
async function deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchDisassociateServiceActionFromProvisioningArtifactOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand = deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand;
async function deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CopyProductCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CopyProductCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CopyProductOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CopyProductOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CopyProductCommand = deserializeAws_json1_1CopyProductCommand;
async function deserializeAws_json1_1CopyProductCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateConstraintCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateConstraintCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateConstraintOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateConstraintOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateConstraintCommand = deserializeAws_json1_1CreateConstraintCommand;
async function deserializeAws_json1_1CreateConstraintCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DuplicateResourceException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#DuplicateResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreatePortfolioCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreatePortfolioCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePortfolioOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreatePortfolioOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreatePortfolioCommand = deserializeAws_json1_1CreatePortfolioCommand;
async function deserializeAws_json1_1CreatePortfolioCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagOptionNotMigratedException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#TagOptionNotMigratedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreatePortfolioShareCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreatePortfolioShareCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePortfolioShareOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreatePortfolioShareOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreatePortfolioShareCommand = deserializeAws_json1_1CreatePortfolioShareCommand;
async function deserializeAws_json1_1CreatePortfolioShareCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStateException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#OperationNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateProductCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateProductCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateProductOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateProductOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateProductCommand = deserializeAws_json1_1CreateProductCommand;
async function deserializeAws_json1_1CreateProductCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagOptionNotMigratedException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#TagOptionNotMigratedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateProvisionedProductPlanCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateProvisionedProductPlanCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateProvisionedProductPlanOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateProvisionedProductPlanOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateProvisionedProductPlanCommand = deserializeAws_json1_1CreateProvisionedProductPlanCommand;
async function deserializeAws_json1_1CreateProvisionedProductPlanCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStateException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateProvisioningArtifactCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateProvisioningArtifactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateProvisioningArtifactOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateProvisioningArtifactOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateProvisioningArtifactCommand = deserializeAws_json1_1CreateProvisioningArtifactCommand;
async function deserializeAws_json1_1CreateProvisioningArtifactCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateServiceActionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateServiceActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateServiceActionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateServiceActionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateServiceActionCommand = deserializeAws_json1_1CreateServiceActionCommand;
async function deserializeAws_json1_1CreateServiceActionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateTagOptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateTagOptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTagOptionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateTagOptionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateTagOptionCommand = deserializeAws_json1_1CreateTagOptionCommand;
async function deserializeAws_json1_1CreateTagOptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DuplicateResourceException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#DuplicateResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagOptionNotMigratedException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#TagOptionNotMigratedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteConstraintCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteConstraintCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteConstraintOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteConstraintOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteConstraintCommand = deserializeAws_json1_1DeleteConstraintCommand;
async function deserializeAws_json1_1DeleteConstraintCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeletePortfolioCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeletePortfolioCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeletePortfolioOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeletePortfolioOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeletePortfolioCommand = deserializeAws_json1_1DeletePortfolioCommand;
async function deserializeAws_json1_1DeletePortfolioCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagOptionNotMigratedException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#TagOptionNotMigratedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeletePortfolioShareCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeletePortfolioShareCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeletePortfolioShareOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeletePortfolioShareOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeletePortfolioShareCommand = deserializeAws_json1_1DeletePortfolioShareCommand;
async function deserializeAws_json1_1DeletePortfolioShareCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStateException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#OperationNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteProductCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteProductCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteProductOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteProductOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteProductCommand = deserializeAws_json1_1DeleteProductCommand;
async function deserializeAws_json1_1DeleteProductCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagOptionNotMigratedException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#TagOptionNotMigratedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteProvisionedProductPlanCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteProvisionedProductPlanCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteProvisionedProductPlanOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteProvisionedProductPlanOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteProvisionedProductPlanCommand = deserializeAws_json1_1DeleteProvisionedProductPlanCommand;
async function deserializeAws_json1_1DeleteProvisionedProductPlanCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteProvisioningArtifactCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteProvisioningArtifactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteProvisioningArtifactOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteProvisioningArtifactOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteProvisioningArtifactCommand = deserializeAws_json1_1DeleteProvisioningArtifactCommand;
async function deserializeAws_json1_1DeleteProvisioningArtifactCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteServiceActionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteServiceActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteServiceActionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteServiceActionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteServiceActionCommand = deserializeAws_json1_1DeleteServiceActionCommand;
async function deserializeAws_json1_1DeleteServiceActionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceInUseException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteTagOptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteTagOptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTagOptionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteTagOptionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteTagOptionCommand = deserializeAws_json1_1DeleteTagOptionCommand;
async function deserializeAws_json1_1DeleteTagOptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceInUseException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagOptionNotMigratedException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#TagOptionNotMigratedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeConstraintCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeConstraintCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConstraintOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeConstraintOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeConstraintCommand = deserializeAws_json1_1DescribeConstraintCommand;
async function deserializeAws_json1_1DescribeConstraintCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeCopyProductStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeCopyProductStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCopyProductStatusOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeCopyProductStatusOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeCopyProductStatusCommand = deserializeAws_json1_1DescribeCopyProductStatusCommand;
async function deserializeAws_json1_1DescribeCopyProductStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribePortfolioCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribePortfolioCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePortfolioOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribePortfolioOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribePortfolioCommand = deserializeAws_json1_1DescribePortfolioCommand;
async function deserializeAws_json1_1DescribePortfolioCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribePortfolioShareStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribePortfolioShareStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePortfolioShareStatusOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribePortfolioShareStatusOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribePortfolioShareStatusCommand = deserializeAws_json1_1DescribePortfolioShareStatusCommand;
async function deserializeAws_json1_1DescribePortfolioShareStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#OperationNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeProductCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeProductCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeProductOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeProductOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeProductCommand = deserializeAws_json1_1DescribeProductCommand;
async function deserializeAws_json1_1DescribeProductCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeProductAsAdminCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeProductAsAdminCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeProductAsAdminOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeProductAsAdminOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeProductAsAdminCommand = deserializeAws_json1_1DescribeProductAsAdminCommand;
async function deserializeAws_json1_1DescribeProductAsAdminCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeProductViewCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeProductViewCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeProductViewOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeProductViewOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeProductViewCommand = deserializeAws_json1_1DescribeProductViewCommand;
async function deserializeAws_json1_1DescribeProductViewCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeProvisionedProductCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeProvisionedProductCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeProvisionedProductOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeProvisionedProductOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeProvisionedProductCommand = deserializeAws_json1_1DescribeProvisionedProductCommand;
async function deserializeAws_json1_1DescribeProvisionedProductCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeProvisionedProductPlanCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeProvisionedProductPlanCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeProvisionedProductPlanOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeProvisionedProductPlanOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeProvisionedProductPlanCommand = deserializeAws_json1_1DescribeProvisionedProductPlanCommand;
async function deserializeAws_json1_1DescribeProvisionedProductPlanCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeProvisioningArtifactCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeProvisioningArtifactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeProvisioningArtifactOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeProvisioningArtifactOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeProvisioningArtifactCommand = deserializeAws_json1_1DescribeProvisioningArtifactCommand;
async function deserializeAws_json1_1DescribeProvisioningArtifactCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeProvisioningParametersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeProvisioningParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeProvisioningParametersOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeProvisioningParametersOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeProvisioningParametersCommand = deserializeAws_json1_1DescribeProvisioningParametersCommand;
async function deserializeAws_json1_1DescribeProvisioningParametersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeRecordCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeRecordCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRecordOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeRecordOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeRecordCommand = deserializeAws_json1_1DescribeRecordCommand;
async function deserializeAws_json1_1DescribeRecordCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeServiceActionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeServiceActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeServiceActionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeServiceActionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeServiceActionCommand = deserializeAws_json1_1DescribeServiceActionCommand;
async function deserializeAws_json1_1DescribeServiceActionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeServiceActionExecutionParametersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeServiceActionExecutionParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeServiceActionExecutionParametersOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeServiceActionExecutionParametersOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeServiceActionExecutionParametersCommand = deserializeAws_json1_1DescribeServiceActionExecutionParametersCommand;
async function deserializeAws_json1_1DescribeServiceActionExecutionParametersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeTagOptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeTagOptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTagOptionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTagOptionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeTagOptionCommand = deserializeAws_json1_1DescribeTagOptionCommand;
async function deserializeAws_json1_1DescribeTagOptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagOptionNotMigratedException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#TagOptionNotMigratedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DisableAWSOrganizationsAccessCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisableAWSOrganizationsAccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisableAWSOrganizationsAccessOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisableAWSOrganizationsAccessOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisableAWSOrganizationsAccessCommand = deserializeAws_json1_1DisableAWSOrganizationsAccessCommand;
async function deserializeAws_json1_1DisableAWSOrganizationsAccessCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidStateException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#OperationNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DisassociateBudgetFromResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateBudgetFromResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateBudgetFromResourceOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisassociateBudgetFromResourceOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateBudgetFromResourceCommand = deserializeAws_json1_1DisassociateBudgetFromResourceCommand;
async function deserializeAws_json1_1DisassociateBudgetFromResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DisassociatePrincipalFromPortfolioCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociatePrincipalFromPortfolioCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociatePrincipalFromPortfolioOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisassociatePrincipalFromPortfolioOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociatePrincipalFromPortfolioCommand = deserializeAws_json1_1DisassociatePrincipalFromPortfolioCommand;
async function deserializeAws_json1_1DisassociatePrincipalFromPortfolioCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DisassociateProductFromPortfolioCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateProductFromPortfolioCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateProductFromPortfolioOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisassociateProductFromPortfolioOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateProductFromPortfolioCommand = deserializeAws_json1_1DisassociateProductFromPortfolioCommand;
async function deserializeAws_json1_1DisassociateProductFromPortfolioCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisassociateServiceActionFromProvisioningArtifactOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommand = deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommand;
async function deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DisassociateTagOptionFromResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateTagOptionFromResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateTagOptionFromResourceOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisassociateTagOptionFromResourceOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateTagOptionFromResourceCommand = deserializeAws_json1_1DisassociateTagOptionFromResourceCommand;
async function deserializeAws_json1_1DisassociateTagOptionFromResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagOptionNotMigratedException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#TagOptionNotMigratedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1EnableAWSOrganizationsAccessCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1EnableAWSOrganizationsAccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EnableAWSOrganizationsAccessOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "EnableAWSOrganizationsAccessOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1EnableAWSOrganizationsAccessCommand = deserializeAws_json1_1EnableAWSOrganizationsAccessCommand;
async function deserializeAws_json1_1EnableAWSOrganizationsAccessCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidStateException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#OperationNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ExecuteProvisionedProductPlanCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ExecuteProvisionedProductPlanCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ExecuteProvisionedProductPlanOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ExecuteProvisionedProductPlanOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ExecuteProvisionedProductPlanCommand = deserializeAws_json1_1ExecuteProvisionedProductPlanCommand;
async function deserializeAws_json1_1ExecuteProvisionedProductPlanCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStateException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ExecuteProvisionedProductServiceActionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ExecuteProvisionedProductServiceActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ExecuteProvisionedProductServiceActionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ExecuteProvisionedProductServiceActionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ExecuteProvisionedProductServiceActionCommand = deserializeAws_json1_1ExecuteProvisionedProductServiceActionCommand;
async function deserializeAws_json1_1ExecuteProvisionedProductServiceActionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStateException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetAWSOrganizationsAccessStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetAWSOrganizationsAccessStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAWSOrganizationsAccessStatusOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetAWSOrganizationsAccessStatusOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetAWSOrganizationsAccessStatusCommand = deserializeAws_json1_1GetAWSOrganizationsAccessStatusCommand;
async function deserializeAws_json1_1GetAWSOrganizationsAccessStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotSupportedException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#OperationNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListAcceptedPortfolioSharesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAcceptedPortfolioSharesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAcceptedPortfolioSharesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAcceptedPortfolioSharesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAcceptedPortfolioSharesCommand = deserializeAws_json1_1ListAcceptedPortfolioSharesCommand;
async function deserializeAws_json1_1ListAcceptedPortfolioSharesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#OperationNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListBudgetsForResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListBudgetsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListBudgetsForResourceOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListBudgetsForResourceOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListBudgetsForResourceCommand = deserializeAws_json1_1ListBudgetsForResourceCommand;
async function deserializeAws_json1_1ListBudgetsForResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListConstraintsForPortfolioCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListConstraintsForPortfolioCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListConstraintsForPortfolioOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListConstraintsForPortfolioOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListConstraintsForPortfolioCommand = deserializeAws_json1_1ListConstraintsForPortfolioCommand;
async function deserializeAws_json1_1ListConstraintsForPortfolioCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListLaunchPathsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListLaunchPathsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListLaunchPathsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListLaunchPathsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListLaunchPathsCommand = deserializeAws_json1_1ListLaunchPathsCommand;
async function deserializeAws_json1_1ListLaunchPathsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListOrganizationPortfolioAccessCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListOrganizationPortfolioAccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListOrganizationPortfolioAccessOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListOrganizationPortfolioAccessOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListOrganizationPortfolioAccessCommand = deserializeAws_json1_1ListOrganizationPortfolioAccessCommand;
async function deserializeAws_json1_1ListOrganizationPortfolioAccessCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#OperationNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListPortfolioAccessCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListPortfolioAccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPortfolioAccessOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListPortfolioAccessOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListPortfolioAccessCommand = deserializeAws_json1_1ListPortfolioAccessCommand;
async function deserializeAws_json1_1ListPortfolioAccessCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListPortfoliosCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListPortfoliosCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPortfoliosOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListPortfoliosOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListPortfoliosCommand = deserializeAws_json1_1ListPortfoliosCommand;
async function deserializeAws_json1_1ListPortfoliosCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListPortfoliosForProductCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListPortfoliosForProductCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPortfoliosForProductOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListPortfoliosForProductOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListPortfoliosForProductCommand = deserializeAws_json1_1ListPortfoliosForProductCommand;
async function deserializeAws_json1_1ListPortfoliosForProductCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListPrincipalsForPortfolioCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListPrincipalsForPortfolioCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPrincipalsForPortfolioOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListPrincipalsForPortfolioOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListPrincipalsForPortfolioCommand = deserializeAws_json1_1ListPrincipalsForPortfolioCommand;
async function deserializeAws_json1_1ListPrincipalsForPortfolioCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListProvisionedProductPlansCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListProvisionedProductPlansCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListProvisionedProductPlansOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListProvisionedProductPlansOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListProvisionedProductPlansCommand = deserializeAws_json1_1ListProvisionedProductPlansCommand;
async function deserializeAws_json1_1ListProvisionedProductPlansCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListProvisioningArtifactsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListProvisioningArtifactsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListProvisioningArtifactsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListProvisioningArtifactsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListProvisioningArtifactsCommand = deserializeAws_json1_1ListProvisioningArtifactsCommand;
async function deserializeAws_json1_1ListProvisioningArtifactsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListProvisioningArtifactsForServiceActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListProvisioningArtifactsForServiceActionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListProvisioningArtifactsForServiceActionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand = deserializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand;
async function deserializeAws_json1_1ListProvisioningArtifactsForServiceActionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListRecordHistoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListRecordHistoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRecordHistoryOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListRecordHistoryOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListRecordHistoryCommand = deserializeAws_json1_1ListRecordHistoryCommand;
async function deserializeAws_json1_1ListRecordHistoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListResourcesForTagOptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListResourcesForTagOptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResourcesForTagOptionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListResourcesForTagOptionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListResourcesForTagOptionCommand = deserializeAws_json1_1ListResourcesForTagOptionCommand;
async function deserializeAws_json1_1ListResourcesForTagOptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagOptionNotMigratedException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#TagOptionNotMigratedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListServiceActionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListServiceActionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListServiceActionsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListServiceActionsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListServiceActionsCommand = deserializeAws_json1_1ListServiceActionsCommand;
async function deserializeAws_json1_1ListServiceActionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListServiceActionsForProvisioningArtifactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListServiceActionsForProvisioningArtifactOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListServiceActionsForProvisioningArtifactOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand = deserializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand;
async function deserializeAws_json1_1ListServiceActionsForProvisioningArtifactCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListStackInstancesForProvisionedProductCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListStackInstancesForProvisionedProductCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListStackInstancesForProvisionedProductOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListStackInstancesForProvisionedProductOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListStackInstancesForProvisionedProductCommand = deserializeAws_json1_1ListStackInstancesForProvisionedProductCommand;
async function deserializeAws_json1_1ListStackInstancesForProvisionedProductCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListTagOptionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTagOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagOptionsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagOptionsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTagOptionsCommand = deserializeAws_json1_1ListTagOptionsCommand;
async function deserializeAws_json1_1ListTagOptionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagOptionNotMigratedException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#TagOptionNotMigratedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ProvisionProductCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ProvisionProductCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ProvisionProductOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ProvisionProductOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ProvisionProductCommand = deserializeAws_json1_1ProvisionProductCommand;
async function deserializeAws_json1_1ProvisionProductCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DuplicateResourceException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#DuplicateResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RejectPortfolioShareCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RejectPortfolioShareCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RejectPortfolioShareOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RejectPortfolioShareOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RejectPortfolioShareCommand = deserializeAws_json1_1RejectPortfolioShareCommand;
async function deserializeAws_json1_1RejectPortfolioShareCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ScanProvisionedProductsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ScanProvisionedProductsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ScanProvisionedProductsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ScanProvisionedProductsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ScanProvisionedProductsCommand = deserializeAws_json1_1ScanProvisionedProductsCommand;
async function deserializeAws_json1_1ScanProvisionedProductsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1SearchProductsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SearchProductsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchProductsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SearchProductsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SearchProductsCommand = deserializeAws_json1_1SearchProductsCommand;
async function deserializeAws_json1_1SearchProductsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1SearchProductsAsAdminCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SearchProductsAsAdminCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchProductsAsAdminOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SearchProductsAsAdminOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SearchProductsAsAdminCommand = deserializeAws_json1_1SearchProductsAsAdminCommand;
async function deserializeAws_json1_1SearchProductsAsAdminCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1SearchProvisionedProductsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SearchProvisionedProductsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchProvisionedProductsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SearchProvisionedProductsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SearchProvisionedProductsCommand = deserializeAws_json1_1SearchProvisionedProductsCommand;
async function deserializeAws_json1_1SearchProvisionedProductsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1TerminateProvisionedProductCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1TerminateProvisionedProductCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TerminateProvisionedProductOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TerminateProvisionedProductOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1TerminateProvisionedProductCommand = deserializeAws_json1_1TerminateProvisionedProductCommand;
async function deserializeAws_json1_1TerminateProvisionedProductCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateConstraintCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateConstraintCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateConstraintOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateConstraintOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateConstraintCommand = deserializeAws_json1_1UpdateConstraintCommand;
async function deserializeAws_json1_1UpdateConstraintCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdatePortfolioCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdatePortfolioCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdatePortfolioOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdatePortfolioOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdatePortfolioCommand = deserializeAws_json1_1UpdatePortfolioCommand;
async function deserializeAws_json1_1UpdatePortfolioCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagOptionNotMigratedException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#TagOptionNotMigratedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateProductCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateProductCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateProductOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateProductOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateProductCommand = deserializeAws_json1_1UpdateProductCommand;
async function deserializeAws_json1_1UpdateProductCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagOptionNotMigratedException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#TagOptionNotMigratedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateProvisionedProductCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateProvisionedProductCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateProvisionedProductOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateProvisionedProductOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateProvisionedProductCommand = deserializeAws_json1_1UpdateProvisionedProductCommand;
async function deserializeAws_json1_1UpdateProvisionedProductCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateProvisionedProductPropertiesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateProvisionedProductPropertiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateProvisionedProductPropertiesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateProvisionedProductPropertiesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateProvisionedProductPropertiesCommand = deserializeAws_json1_1UpdateProvisionedProductPropertiesCommand;
async function deserializeAws_json1_1UpdateProvisionedProductPropertiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStateException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateProvisioningArtifactCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateProvisioningArtifactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateProvisioningArtifactOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateProvisioningArtifactOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateProvisioningArtifactCommand = deserializeAws_json1_1UpdateProvisioningArtifactCommand;
async function deserializeAws_json1_1UpdateProvisioningArtifactCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateServiceActionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateServiceActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateServiceActionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateServiceActionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateServiceActionCommand = deserializeAws_json1_1UpdateServiceActionCommand;
async function deserializeAws_json1_1UpdateServiceActionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateTagOptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateTagOptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateTagOptionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateTagOptionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateTagOptionCommand = deserializeAws_json1_1UpdateTagOptionCommand;
async function deserializeAws_json1_1UpdateTagOptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DuplicateResourceException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#DuplicateResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParametersException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#InvalidParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagOptionNotMigratedException":
        case "com.amazonaws.aws242.servicecatalog.v20151210#TagOptionNotMigratedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagOptionNotMigratedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
const deserializeAws_json1_1DuplicateResourceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicateResourceException(body, context);
    const contents = Object.assign({ name: "DuplicateResourceException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidParametersExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParametersException(body, context);
    const contents = Object.assign({ name: "InvalidParametersException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidStateException(body, context);
    const contents = Object.assign({ name: "InvalidStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OperationNotSupportedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OperationNotSupportedException(body, context);
    const contents = Object.assign({ name: "OperationNotSupportedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceInUseException(body, context);
    const contents = Object.assign({ name: "ResourceInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TagOptionNotMigratedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagOptionNotMigratedException(body, context);
    const contents = Object.assign({ name: "TagOptionNotMigratedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AssociateTagOptionWithResourceInput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.TagOptionId !== undefined) {
        bodyParams["TagOptionId"] = input.TagOptionId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateTagOptionInput = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteTagOptionInput = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeTagOptionInput = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociateTagOptionFromResourceInput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.TagOptionId !== undefined) {
        bodyParams["TagOptionId"] = input.TagOptionId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListResourcesForTagOptionInput = (input, context) => {
    const bodyParams = {};
    if (input.PageSize !== undefined) {
        bodyParams["PageSize"] = input.PageSize;
    }
    if (input.PageToken !== undefined) {
        bodyParams["PageToken"] = input.PageToken;
    }
    if (input.ResourceType !== undefined) {
        bodyParams["ResourceType"] = input.ResourceType;
    }
    if (input.TagOptionId !== undefined) {
        bodyParams["TagOptionId"] = input.TagOptionId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagOptionsFilters = (input, context) => {
    const bodyParams = {};
    if (input.Active !== undefined) {
        bodyParams["Active"] = input.Active;
    }
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagOptionsInput = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1ListTagOptionsFilters(input.Filters, context);
    }
    if (input.PageSize !== undefined) {
        bodyParams["PageSize"] = input.PageSize;
    }
    if (input.PageToken !== undefined) {
        bodyParams["PageToken"] = input.PageToken;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateTagOptionInput = (input, context) => {
    const bodyParams = {};
    if (input.Active !== undefined) {
        bodyParams["Active"] = input.Active;
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1AcceptPortfolioShareInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.PortfolioId !== undefined) {
        bodyParams["PortfolioId"] = input.PortfolioId;
    }
    if (input.PortfolioShareType !== undefined) {
        bodyParams["PortfolioShareType"] = input.PortfolioShareType;
    }
    return bodyParams;
};
const serializeAws_json1_1AccessLevelFilter = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1AddTags = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Tag(entry, context));
    }
    return contents;
};
const serializeAws_json1_1AssociateBudgetWithResourceInput = (input, context) => {
    const bodyParams = {};
    if (input.BudgetName !== undefined) {
        bodyParams["BudgetName"] = input.BudgetName;
    }
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    return bodyParams;
};
const serializeAws_json1_1AssociatePrincipalWithPortfolioInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.PortfolioId !== undefined) {
        bodyParams["PortfolioId"] = input.PortfolioId;
    }
    if (input.PrincipalARN !== undefined) {
        bodyParams["PrincipalARN"] = input.PrincipalARN;
    }
    if (input.PrincipalType !== undefined) {
        bodyParams["PrincipalType"] = input.PrincipalType;
    }
    return bodyParams;
};
const serializeAws_json1_1AssociateProductWithPortfolioInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.PortfolioId !== undefined) {
        bodyParams["PortfolioId"] = input.PortfolioId;
    }
    if (input.ProductId !== undefined) {
        bodyParams["ProductId"] = input.ProductId;
    }
    if (input.SourcePortfolioId !== undefined) {
        bodyParams["SourcePortfolioId"] = input.SourcePortfolioId;
    }
    return bodyParams;
};
const serializeAws_json1_1AssociateServiceActionWithProvisioningArtifactInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.ProductId !== undefined) {
        bodyParams["ProductId"] = input.ProductId;
    }
    if (input.ProvisioningArtifactId !== undefined) {
        bodyParams["ProvisioningArtifactId"] = input.ProvisioningArtifactId;
    }
    if (input.ServiceActionId !== undefined) {
        bodyParams["ServiceActionId"] = input.ServiceActionId;
    }
    return bodyParams;
};
const serializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.ServiceActionAssociations !== undefined) {
        bodyParams["ServiceActionAssociations"] = serializeAws_json1_1ServiceActionAssociations(input.ServiceActionAssociations, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.ServiceActionAssociations !== undefined) {
        bodyParams["ServiceActionAssociations"] = serializeAws_json1_1ServiceActionAssociations(input.ServiceActionAssociations, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CopyOptions = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CopyProductInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.CopyOptions !== undefined) {
        bodyParams["CopyOptions"] = serializeAws_json1_1CopyOptions(input.CopyOptions, context);
    }
    if (input.IdempotencyToken === undefined) {
        input.IdempotencyToken = uuid_1.v4();
    }
    if (input.IdempotencyToken !== undefined) {
        bodyParams["IdempotencyToken"] = input.IdempotencyToken;
    }
    if (input.SourceProductArn !== undefined) {
        bodyParams["SourceProductArn"] = input.SourceProductArn;
    }
    if (input.SourceProvisioningArtifactIdentifiers !== undefined) {
        bodyParams["SourceProvisioningArtifactIdentifiers"] = serializeAws_json1_1SourceProvisioningArtifactProperties(input.SourceProvisioningArtifactIdentifiers, context);
    }
    if (input.TargetProductId !== undefined) {
        bodyParams["TargetProductId"] = input.TargetProductId;
    }
    if (input.TargetProductName !== undefined) {
        bodyParams["TargetProductName"] = input.TargetProductName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateConstraintInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.IdempotencyToken === undefined) {
        input.IdempotencyToken = uuid_1.v4();
    }
    if (input.IdempotencyToken !== undefined) {
        bodyParams["IdempotencyToken"] = input.IdempotencyToken;
    }
    if (input.Parameters !== undefined) {
        bodyParams["Parameters"] = input.Parameters;
    }
    if (input.PortfolioId !== undefined) {
        bodyParams["PortfolioId"] = input.PortfolioId;
    }
    if (input.ProductId !== undefined) {
        bodyParams["ProductId"] = input.ProductId;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1CreatePortfolioInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.DisplayName !== undefined) {
        bodyParams["DisplayName"] = input.DisplayName;
    }
    if (input.IdempotencyToken === undefined) {
        input.IdempotencyToken = uuid_1.v4();
    }
    if (input.IdempotencyToken !== undefined) {
        bodyParams["IdempotencyToken"] = input.IdempotencyToken;
    }
    if (input.ProviderName !== undefined) {
        bodyParams["ProviderName"] = input.ProviderName;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1AddTags(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreatePortfolioShareInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.AccountId !== undefined) {
        bodyParams["AccountId"] = input.AccountId;
    }
    if (input.OrganizationNode !== undefined) {
        bodyParams["OrganizationNode"] = serializeAws_json1_1OrganizationNode(input.OrganizationNode, context);
    }
    if (input.PortfolioId !== undefined) {
        bodyParams["PortfolioId"] = input.PortfolioId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateProductInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Distributor !== undefined) {
        bodyParams["Distributor"] = input.Distributor;
    }
    if (input.IdempotencyToken === undefined) {
        input.IdempotencyToken = uuid_1.v4();
    }
    if (input.IdempotencyToken !== undefined) {
        bodyParams["IdempotencyToken"] = input.IdempotencyToken;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Owner !== undefined) {
        bodyParams["Owner"] = input.Owner;
    }
    if (input.ProductType !== undefined) {
        bodyParams["ProductType"] = input.ProductType;
    }
    if (input.ProvisioningArtifactParameters !== undefined) {
        bodyParams["ProvisioningArtifactParameters"] = serializeAws_json1_1ProvisioningArtifactProperties(input.ProvisioningArtifactParameters, context);
    }
    if (input.SupportDescription !== undefined) {
        bodyParams["SupportDescription"] = input.SupportDescription;
    }
    if (input.SupportEmail !== undefined) {
        bodyParams["SupportEmail"] = input.SupportEmail;
    }
    if (input.SupportUrl !== undefined) {
        bodyParams["SupportUrl"] = input.SupportUrl;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1AddTags(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateProvisionedProductPlanInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.IdempotencyToken === undefined) {
        input.IdempotencyToken = uuid_1.v4();
    }
    if (input.IdempotencyToken !== undefined) {
        bodyParams["IdempotencyToken"] = input.IdempotencyToken;
    }
    if (input.NotificationArns !== undefined) {
        bodyParams["NotificationArns"] = serializeAws_json1_1NotificationArns(input.NotificationArns, context);
    }
    if (input.PathId !== undefined) {
        bodyParams["PathId"] = input.PathId;
    }
    if (input.PlanName !== undefined) {
        bodyParams["PlanName"] = input.PlanName;
    }
    if (input.PlanType !== undefined) {
        bodyParams["PlanType"] = input.PlanType;
    }
    if (input.ProductId !== undefined) {
        bodyParams["ProductId"] = input.ProductId;
    }
    if (input.ProvisionedProductName !== undefined) {
        bodyParams["ProvisionedProductName"] = input.ProvisionedProductName;
    }
    if (input.ProvisioningArtifactId !== undefined) {
        bodyParams["ProvisioningArtifactId"] = input.ProvisioningArtifactId;
    }
    if (input.ProvisioningParameters !== undefined) {
        bodyParams["ProvisioningParameters"] = serializeAws_json1_1UpdateProvisioningParameters(input.ProvisioningParameters, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateProvisioningArtifactInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.IdempotencyToken === undefined) {
        input.IdempotencyToken = uuid_1.v4();
    }
    if (input.IdempotencyToken !== undefined) {
        bodyParams["IdempotencyToken"] = input.IdempotencyToken;
    }
    if (input.Parameters !== undefined) {
        bodyParams["Parameters"] = serializeAws_json1_1ProvisioningArtifactProperties(input.Parameters, context);
    }
    if (input.ProductId !== undefined) {
        bodyParams["ProductId"] = input.ProductId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateServiceActionInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.Definition !== undefined) {
        bodyParams["Definition"] = serializeAws_json1_1ServiceActionDefinitionMap(input.Definition, context);
    }
    if (input.DefinitionType !== undefined) {
        bodyParams["DefinitionType"] = input.DefinitionType;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.IdempotencyToken === undefined) {
        input.IdempotencyToken = uuid_1.v4();
    }
    if (input.IdempotencyToken !== undefined) {
        bodyParams["IdempotencyToken"] = input.IdempotencyToken;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteConstraintInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    return bodyParams;
};
const serializeAws_json1_1DeletePortfolioInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    return bodyParams;
};
const serializeAws_json1_1DeletePortfolioShareInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.AccountId !== undefined) {
        bodyParams["AccountId"] = input.AccountId;
    }
    if (input.OrganizationNode !== undefined) {
        bodyParams["OrganizationNode"] = serializeAws_json1_1OrganizationNode(input.OrganizationNode, context);
    }
    if (input.PortfolioId !== undefined) {
        bodyParams["PortfolioId"] = input.PortfolioId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteProductInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteProvisionedProductPlanInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.IgnoreErrors !== undefined) {
        bodyParams["IgnoreErrors"] = input.IgnoreErrors;
    }
    if (input.PlanId !== undefined) {
        bodyParams["PlanId"] = input.PlanId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteProvisioningArtifactInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.ProductId !== undefined) {
        bodyParams["ProductId"] = input.ProductId;
    }
    if (input.ProvisioningArtifactId !== undefined) {
        bodyParams["ProvisioningArtifactId"] = input.ProvisioningArtifactId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteServiceActionInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeConstraintInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeCopyProductStatusInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.CopyProductToken !== undefined) {
        bodyParams["CopyProductToken"] = input.CopyProductToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribePortfolioInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribePortfolioShareStatusInput = (input, context) => {
    const bodyParams = {};
    if (input.PortfolioShareToken !== undefined) {
        bodyParams["PortfolioShareToken"] = input.PortfolioShareToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeProductAsAdminInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeProductInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeProductViewInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeProvisionedProductInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeProvisionedProductPlanInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.PageSize !== undefined) {
        bodyParams["PageSize"] = input.PageSize;
    }
    if (input.PageToken !== undefined) {
        bodyParams["PageToken"] = input.PageToken;
    }
    if (input.PlanId !== undefined) {
        bodyParams["PlanId"] = input.PlanId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeProvisioningArtifactInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.ProductId !== undefined) {
        bodyParams["ProductId"] = input.ProductId;
    }
    if (input.ProvisioningArtifactId !== undefined) {
        bodyParams["ProvisioningArtifactId"] = input.ProvisioningArtifactId;
    }
    if (input.Verbose !== undefined) {
        bodyParams["Verbose"] = input.Verbose;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeProvisioningParametersInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.PathId !== undefined) {
        bodyParams["PathId"] = input.PathId;
    }
    if (input.ProductId !== undefined) {
        bodyParams["ProductId"] = input.ProductId;
    }
    if (input.ProvisioningArtifactId !== undefined) {
        bodyParams["ProvisioningArtifactId"] = input.ProvisioningArtifactId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeRecordInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.PageSize !== undefined) {
        bodyParams["PageSize"] = input.PageSize;
    }
    if (input.PageToken !== undefined) {
        bodyParams["PageToken"] = input.PageToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeServiceActionExecutionParametersInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.ProvisionedProductId !== undefined) {
        bodyParams["ProvisionedProductId"] = input.ProvisionedProductId;
    }
    if (input.ServiceActionId !== undefined) {
        bodyParams["ServiceActionId"] = input.ServiceActionId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeServiceActionInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    return bodyParams;
};
const serializeAws_json1_1DisableAWSOrganizationsAccessInput = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1DisassociateBudgetFromResourceInput = (input, context) => {
    const bodyParams = {};
    if (input.BudgetName !== undefined) {
        bodyParams["BudgetName"] = input.BudgetName;
    }
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociatePrincipalFromPortfolioInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.PortfolioId !== undefined) {
        bodyParams["PortfolioId"] = input.PortfolioId;
    }
    if (input.PrincipalARN !== undefined) {
        bodyParams["PrincipalARN"] = input.PrincipalARN;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociateProductFromPortfolioInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.PortfolioId !== undefined) {
        bodyParams["PortfolioId"] = input.PortfolioId;
    }
    if (input.ProductId !== undefined) {
        bodyParams["ProductId"] = input.ProductId;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.ProductId !== undefined) {
        bodyParams["ProductId"] = input.ProductId;
    }
    if (input.ProvisioningArtifactId !== undefined) {
        bodyParams["ProvisioningArtifactId"] = input.ProvisioningArtifactId;
    }
    if (input.ServiceActionId !== undefined) {
        bodyParams["ServiceActionId"] = input.ServiceActionId;
    }
    return bodyParams;
};
const serializeAws_json1_1EnableAWSOrganizationsAccessInput = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1ExecuteProvisionedProductPlanInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.IdempotencyToken === undefined) {
        input.IdempotencyToken = uuid_1.v4();
    }
    if (input.IdempotencyToken !== undefined) {
        bodyParams["IdempotencyToken"] = input.IdempotencyToken;
    }
    if (input.PlanId !== undefined) {
        bodyParams["PlanId"] = input.PlanId;
    }
    return bodyParams;
};
const serializeAws_json1_1ExecuteProvisionedProductServiceActionInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.ExecuteToken === undefined) {
        input.ExecuteToken = uuid_1.v4();
    }
    if (input.ExecuteToken !== undefined) {
        bodyParams["ExecuteToken"] = input.ExecuteToken;
    }
    if (input.Parameters !== undefined) {
        bodyParams["Parameters"] = serializeAws_json1_1ExecutionParameterMap(input.Parameters, context);
    }
    if (input.ProvisionedProductId !== undefined) {
        bodyParams["ProvisionedProductId"] = input.ProvisionedProductId;
    }
    if (input.ServiceActionId !== undefined) {
        bodyParams["ServiceActionId"] = input.ServiceActionId;
    }
    return bodyParams;
};
const serializeAws_json1_1ExecutionParameterMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_1ExecutionParameterValueList(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_1ExecutionParameterValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1GetAWSOrganizationsAccessStatusInput = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1ListAcceptedPortfolioSharesInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.PageSize !== undefined) {
        bodyParams["PageSize"] = input.PageSize;
    }
    if (input.PageToken !== undefined) {
        bodyParams["PageToken"] = input.PageToken;
    }
    if (input.PortfolioShareType !== undefined) {
        bodyParams["PortfolioShareType"] = input.PortfolioShareType;
    }
    return bodyParams;
};
const serializeAws_json1_1ListBudgetsForResourceInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.PageSize !== undefined) {
        bodyParams["PageSize"] = input.PageSize;
    }
    if (input.PageToken !== undefined) {
        bodyParams["PageToken"] = input.PageToken;
    }
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListConstraintsForPortfolioInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.PageSize !== undefined) {
        bodyParams["PageSize"] = input.PageSize;
    }
    if (input.PageToken !== undefined) {
        bodyParams["PageToken"] = input.PageToken;
    }
    if (input.PortfolioId !== undefined) {
        bodyParams["PortfolioId"] = input.PortfolioId;
    }
    if (input.ProductId !== undefined) {
        bodyParams["ProductId"] = input.ProductId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListLaunchPathsInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.PageSize !== undefined) {
        bodyParams["PageSize"] = input.PageSize;
    }
    if (input.PageToken !== undefined) {
        bodyParams["PageToken"] = input.PageToken;
    }
    if (input.ProductId !== undefined) {
        bodyParams["ProductId"] = input.ProductId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListOrganizationPortfolioAccessInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.OrganizationNodeType !== undefined) {
        bodyParams["OrganizationNodeType"] = input.OrganizationNodeType;
    }
    if (input.PageSize !== undefined) {
        bodyParams["PageSize"] = input.PageSize;
    }
    if (input.PageToken !== undefined) {
        bodyParams["PageToken"] = input.PageToken;
    }
    if (input.PortfolioId !== undefined) {
        bodyParams["PortfolioId"] = input.PortfolioId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListPortfolioAccessInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.PortfolioId !== undefined) {
        bodyParams["PortfolioId"] = input.PortfolioId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListPortfoliosForProductInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.PageSize !== undefined) {
        bodyParams["PageSize"] = input.PageSize;
    }
    if (input.PageToken !== undefined) {
        bodyParams["PageToken"] = input.PageToken;
    }
    if (input.ProductId !== undefined) {
        bodyParams["ProductId"] = input.ProductId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListPortfoliosInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.PageSize !== undefined) {
        bodyParams["PageSize"] = input.PageSize;
    }
    if (input.PageToken !== undefined) {
        bodyParams["PageToken"] = input.PageToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListPrincipalsForPortfolioInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.PageSize !== undefined) {
        bodyParams["PageSize"] = input.PageSize;
    }
    if (input.PageToken !== undefined) {
        bodyParams["PageToken"] = input.PageToken;
    }
    if (input.PortfolioId !== undefined) {
        bodyParams["PortfolioId"] = input.PortfolioId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListProvisionedProductPlansInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.AccessLevelFilter !== undefined) {
        bodyParams["AccessLevelFilter"] = serializeAws_json1_1AccessLevelFilter(input.AccessLevelFilter, context);
    }
    if (input.PageSize !== undefined) {
        bodyParams["PageSize"] = input.PageSize;
    }
    if (input.PageToken !== undefined) {
        bodyParams["PageToken"] = input.PageToken;
    }
    if (input.ProvisionProductId !== undefined) {
        bodyParams["ProvisionProductId"] = input.ProvisionProductId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListProvisioningArtifactsForServiceActionInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.PageSize !== undefined) {
        bodyParams["PageSize"] = input.PageSize;
    }
    if (input.PageToken !== undefined) {
        bodyParams["PageToken"] = input.PageToken;
    }
    if (input.ServiceActionId !== undefined) {
        bodyParams["ServiceActionId"] = input.ServiceActionId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListProvisioningArtifactsInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.ProductId !== undefined) {
        bodyParams["ProductId"] = input.ProductId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListRecordHistoryInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.AccessLevelFilter !== undefined) {
        bodyParams["AccessLevelFilter"] = serializeAws_json1_1AccessLevelFilter(input.AccessLevelFilter, context);
    }
    if (input.PageSize !== undefined) {
        bodyParams["PageSize"] = input.PageSize;
    }
    if (input.PageToken !== undefined) {
        bodyParams["PageToken"] = input.PageToken;
    }
    if (input.SearchFilter !== undefined) {
        bodyParams["SearchFilter"] = serializeAws_json1_1ListRecordHistorySearchFilter(input.SearchFilter, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ListRecordHistorySearchFilter = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1ListServiceActionsForProvisioningArtifactInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.PageSize !== undefined) {
        bodyParams["PageSize"] = input.PageSize;
    }
    if (input.PageToken !== undefined) {
        bodyParams["PageToken"] = input.PageToken;
    }
    if (input.ProductId !== undefined) {
        bodyParams["ProductId"] = input.ProductId;
    }
    if (input.ProvisioningArtifactId !== undefined) {
        bodyParams["ProvisioningArtifactId"] = input.ProvisioningArtifactId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListServiceActionsInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.PageSize !== undefined) {
        bodyParams["PageSize"] = input.PageSize;
    }
    if (input.PageToken !== undefined) {
        bodyParams["PageToken"] = input.PageToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListStackInstancesForProvisionedProductInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.PageSize !== undefined) {
        bodyParams["PageSize"] = input.PageSize;
    }
    if (input.PageToken !== undefined) {
        bodyParams["PageToken"] = input.PageToken;
    }
    if (input.ProvisionedProductId !== undefined) {
        bodyParams["ProvisionedProductId"] = input.ProvisionedProductId;
    }
    return bodyParams;
};
const serializeAws_json1_1NotificationArns = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1OrganizationNode = (input, context) => {
    const bodyParams = {};
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1ProductViewFilterValues = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ProductViewFilters = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_1ProductViewFilterValues(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_1ProvisionProductInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.NotificationArns !== undefined) {
        bodyParams["NotificationArns"] = serializeAws_json1_1NotificationArns(input.NotificationArns, context);
    }
    if (input.PathId !== undefined) {
        bodyParams["PathId"] = input.PathId;
    }
    if (input.ProductId !== undefined) {
        bodyParams["ProductId"] = input.ProductId;
    }
    if (input.ProvisionToken === undefined) {
        input.ProvisionToken = uuid_1.v4();
    }
    if (input.ProvisionToken !== undefined) {
        bodyParams["ProvisionToken"] = input.ProvisionToken;
    }
    if (input.ProvisionedProductName !== undefined) {
        bodyParams["ProvisionedProductName"] = input.ProvisionedProductName;
    }
    if (input.ProvisioningArtifactId !== undefined) {
        bodyParams["ProvisioningArtifactId"] = input.ProvisioningArtifactId;
    }
    if (input.ProvisioningParameters !== undefined) {
        bodyParams["ProvisioningParameters"] = serializeAws_json1_1ProvisioningParameters(input.ProvisioningParameters, context);
    }
    if (input.ProvisioningPreferences !== undefined) {
        bodyParams["ProvisioningPreferences"] = serializeAws_json1_1ProvisioningPreferences(input.ProvisioningPreferences, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ProvisionedProductFilters = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_1ProvisionedProductViewFilterValues(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_1ProvisionedProductProperties = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1ProvisionedProductViewFilterValues = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ProvisioningArtifactInfo = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1ProvisioningArtifactProperties = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.DisableTemplateValidation !== undefined) {
        bodyParams["DisableTemplateValidation"] = input.DisableTemplateValidation;
    }
    if (input.Info !== undefined) {
        bodyParams["Info"] = serializeAws_json1_1ProvisioningArtifactInfo(input.Info, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1ProvisioningParameter = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1ProvisioningParameters = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ProvisioningParameter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ProvisioningPreferences = (input, context) => {
    const bodyParams = {};
    if (input.StackSetAccounts !== undefined) {
        bodyParams["StackSetAccounts"] = serializeAws_json1_1StackSetAccounts(input.StackSetAccounts, context);
    }
    if (input.StackSetFailureToleranceCount !== undefined) {
        bodyParams["StackSetFailureToleranceCount"] =
            input.StackSetFailureToleranceCount;
    }
    if (input.StackSetFailureTolerancePercentage !== undefined) {
        bodyParams["StackSetFailureTolerancePercentage"] =
            input.StackSetFailureTolerancePercentage;
    }
    if (input.StackSetMaxConcurrencyCount !== undefined) {
        bodyParams["StackSetMaxConcurrencyCount"] =
            input.StackSetMaxConcurrencyCount;
    }
    if (input.StackSetMaxConcurrencyPercentage !== undefined) {
        bodyParams["StackSetMaxConcurrencyPercentage"] =
            input.StackSetMaxConcurrencyPercentage;
    }
    if (input.StackSetRegions !== undefined) {
        bodyParams["StackSetRegions"] = serializeAws_json1_1StackSetRegions(input.StackSetRegions, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RejectPortfolioShareInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.PortfolioId !== undefined) {
        bodyParams["PortfolioId"] = input.PortfolioId;
    }
    if (input.PortfolioShareType !== undefined) {
        bodyParams["PortfolioShareType"] = input.PortfolioShareType;
    }
    return bodyParams;
};
const serializeAws_json1_1ScanProvisionedProductsInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.AccessLevelFilter !== undefined) {
        bodyParams["AccessLevelFilter"] = serializeAws_json1_1AccessLevelFilter(input.AccessLevelFilter, context);
    }
    if (input.PageSize !== undefined) {
        bodyParams["PageSize"] = input.PageSize;
    }
    if (input.PageToken !== undefined) {
        bodyParams["PageToken"] = input.PageToken;
    }
    return bodyParams;
};
const serializeAws_json1_1SearchProductsAsAdminInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1ProductViewFilters(input.Filters, context);
    }
    if (input.PageSize !== undefined) {
        bodyParams["PageSize"] = input.PageSize;
    }
    if (input.PageToken !== undefined) {
        bodyParams["PageToken"] = input.PageToken;
    }
    if (input.PortfolioId !== undefined) {
        bodyParams["PortfolioId"] = input.PortfolioId;
    }
    if (input.ProductSource !== undefined) {
        bodyParams["ProductSource"] = input.ProductSource;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1SearchProductsInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1ProductViewFilters(input.Filters, context);
    }
    if (input.PageSize !== undefined) {
        bodyParams["PageSize"] = input.PageSize;
    }
    if (input.PageToken !== undefined) {
        bodyParams["PageToken"] = input.PageToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1SearchProvisionedProductsInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.AccessLevelFilter !== undefined) {
        bodyParams["AccessLevelFilter"] = serializeAws_json1_1AccessLevelFilter(input.AccessLevelFilter, context);
    }
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1ProvisionedProductFilters(input.Filters, context);
    }
    if (input.PageSize !== undefined) {
        bodyParams["PageSize"] = input.PageSize;
    }
    if (input.PageToken !== undefined) {
        bodyParams["PageToken"] = input.PageToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1ServiceActionAssociation = (input, context) => {
    const bodyParams = {};
    if (input.ProductId !== undefined) {
        bodyParams["ProductId"] = input.ProductId;
    }
    if (input.ProvisioningArtifactId !== undefined) {
        bodyParams["ProvisioningArtifactId"] = input.ProvisioningArtifactId;
    }
    if (input.ServiceActionId !== undefined) {
        bodyParams["ServiceActionId"] = input.ServiceActionId;
    }
    return bodyParams;
};
const serializeAws_json1_1ServiceActionAssociations = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ServiceActionAssociation(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ServiceActionDefinitionMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1SourceProvisioningArtifactProperties = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1SourceProvisioningArtifactPropertiesMap(entry, context));
    }
    return contents;
};
const serializeAws_json1_1SourceProvisioningArtifactPropertiesMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1StackSetAccounts = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1StackSetRegions = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Tag = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1TagKeys = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Tags = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Tag(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TerminateProvisionedProductInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.IgnoreErrors !== undefined) {
        bodyParams["IgnoreErrors"] = input.IgnoreErrors;
    }
    if (input.ProvisionedProductId !== undefined) {
        bodyParams["ProvisionedProductId"] = input.ProvisionedProductId;
    }
    if (input.ProvisionedProductName !== undefined) {
        bodyParams["ProvisionedProductName"] = input.ProvisionedProductName;
    }
    if (input.TerminateToken === undefined) {
        input.TerminateToken = uuid_1.v4();
    }
    if (input.TerminateToken !== undefined) {
        bodyParams["TerminateToken"] = input.TerminateToken;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateConstraintInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.Parameters !== undefined) {
        bodyParams["Parameters"] = input.Parameters;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdatePortfolioInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.AddTags !== undefined) {
        bodyParams["AddTags"] = serializeAws_json1_1AddTags(input.AddTags, context);
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.DisplayName !== undefined) {
        bodyParams["DisplayName"] = input.DisplayName;
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.ProviderName !== undefined) {
        bodyParams["ProviderName"] = input.ProviderName;
    }
    if (input.RemoveTags !== undefined) {
        bodyParams["RemoveTags"] = serializeAws_json1_1TagKeys(input.RemoveTags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateProductInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.AddTags !== undefined) {
        bodyParams["AddTags"] = serializeAws_json1_1AddTags(input.AddTags, context);
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Distributor !== undefined) {
        bodyParams["Distributor"] = input.Distributor;
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Owner !== undefined) {
        bodyParams["Owner"] = input.Owner;
    }
    if (input.RemoveTags !== undefined) {
        bodyParams["RemoveTags"] = serializeAws_json1_1TagKeys(input.RemoveTags, context);
    }
    if (input.SupportDescription !== undefined) {
        bodyParams["SupportDescription"] = input.SupportDescription;
    }
    if (input.SupportEmail !== undefined) {
        bodyParams["SupportEmail"] = input.SupportEmail;
    }
    if (input.SupportUrl !== undefined) {
        bodyParams["SupportUrl"] = input.SupportUrl;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateProvisionedProductInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.PathId !== undefined) {
        bodyParams["PathId"] = input.PathId;
    }
    if (input.ProductId !== undefined) {
        bodyParams["ProductId"] = input.ProductId;
    }
    if (input.ProvisionedProductId !== undefined) {
        bodyParams["ProvisionedProductId"] = input.ProvisionedProductId;
    }
    if (input.ProvisionedProductName !== undefined) {
        bodyParams["ProvisionedProductName"] = input.ProvisionedProductName;
    }
    if (input.ProvisioningArtifactId !== undefined) {
        bodyParams["ProvisioningArtifactId"] = input.ProvisioningArtifactId;
    }
    if (input.ProvisioningParameters !== undefined) {
        bodyParams["ProvisioningParameters"] = serializeAws_json1_1UpdateProvisioningParameters(input.ProvisioningParameters, context);
    }
    if (input.ProvisioningPreferences !== undefined) {
        bodyParams["ProvisioningPreferences"] = serializeAws_json1_1UpdateProvisioningPreferences(input.ProvisioningPreferences, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
    }
    if (input.UpdateToken === undefined) {
        input.UpdateToken = uuid_1.v4();
    }
    if (input.UpdateToken !== undefined) {
        bodyParams["UpdateToken"] = input.UpdateToken;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateProvisionedProductPropertiesInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.IdempotencyToken === undefined) {
        input.IdempotencyToken = uuid_1.v4();
    }
    if (input.IdempotencyToken !== undefined) {
        bodyParams["IdempotencyToken"] = input.IdempotencyToken;
    }
    if (input.ProvisionedProductId !== undefined) {
        bodyParams["ProvisionedProductId"] = input.ProvisionedProductId;
    }
    if (input.ProvisionedProductProperties !== undefined) {
        bodyParams["ProvisionedProductProperties"] = serializeAws_json1_1ProvisionedProductProperties(input.ProvisionedProductProperties, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateProvisioningArtifactInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.Active !== undefined) {
        bodyParams["Active"] = input.Active;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Guidance !== undefined) {
        bodyParams["Guidance"] = input.Guidance;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.ProductId !== undefined) {
        bodyParams["ProductId"] = input.ProductId;
    }
    if (input.ProvisioningArtifactId !== undefined) {
        bodyParams["ProvisioningArtifactId"] = input.ProvisioningArtifactId;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateProvisioningParameter = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.UsePreviousValue !== undefined) {
        bodyParams["UsePreviousValue"] = input.UsePreviousValue;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateProvisioningParameters = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1UpdateProvisioningParameter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1UpdateProvisioningPreferences = (input, context) => {
    const bodyParams = {};
    if (input.StackSetAccounts !== undefined) {
        bodyParams["StackSetAccounts"] = serializeAws_json1_1StackSetAccounts(input.StackSetAccounts, context);
    }
    if (input.StackSetFailureToleranceCount !== undefined) {
        bodyParams["StackSetFailureToleranceCount"] =
            input.StackSetFailureToleranceCount;
    }
    if (input.StackSetFailureTolerancePercentage !== undefined) {
        bodyParams["StackSetFailureTolerancePercentage"] =
            input.StackSetFailureTolerancePercentage;
    }
    if (input.StackSetMaxConcurrencyCount !== undefined) {
        bodyParams["StackSetMaxConcurrencyCount"] =
            input.StackSetMaxConcurrencyCount;
    }
    if (input.StackSetMaxConcurrencyPercentage !== undefined) {
        bodyParams["StackSetMaxConcurrencyPercentage"] =
            input.StackSetMaxConcurrencyPercentage;
    }
    if (input.StackSetOperationType !== undefined) {
        bodyParams["StackSetOperationType"] = input.StackSetOperationType;
    }
    if (input.StackSetRegions !== undefined) {
        bodyParams["StackSetRegions"] = serializeAws_json1_1StackSetRegions(input.StackSetRegions, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateServiceActionInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptLanguage !== undefined) {
        bodyParams["AcceptLanguage"] = input.AcceptLanguage;
    }
    if (input.Definition !== undefined) {
        bodyParams["Definition"] = serializeAws_json1_1ServiceActionDefinitionMap(input.Definition, context);
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const deserializeAws_json1_1AssociateTagOptionWithResourceOutput = (output, context) => {
    let contents = {
        __type: "AssociateTagOptionWithResourceOutput"
    };
    return contents;
};
const deserializeAws_json1_1CreateTagOptionOutput = (output, context) => {
    let contents = {
        __type: "CreateTagOptionOutput",
        TagOptionDetail: undefined
    };
    if (output.TagOptionDetail !== undefined && output.TagOptionDetail !== null) {
        contents.TagOptionDetail = deserializeAws_json1_1TagOptionDetail(output.TagOptionDetail, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteTagOptionOutput = (output, context) => {
    let contents = {
        __type: "DeleteTagOptionOutput"
    };
    return contents;
};
const deserializeAws_json1_1DescribeTagOptionOutput = (output, context) => {
    let contents = {
        __type: "DescribeTagOptionOutput",
        TagOptionDetail: undefined
    };
    if (output.TagOptionDetail !== undefined && output.TagOptionDetail !== null) {
        contents.TagOptionDetail = deserializeAws_json1_1TagOptionDetail(output.TagOptionDetail, context);
    }
    return contents;
};
const deserializeAws_json1_1DisassociateTagOptionFromResourceOutput = (output, context) => {
    let contents = {
        __type: "DisassociateTagOptionFromResourceOutput"
    };
    return contents;
};
const deserializeAws_json1_1ListResourcesForTagOptionOutput = (output, context) => {
    let contents = {
        __type: "ListResourcesForTagOptionOutput",
        PageToken: undefined,
        ResourceDetails: undefined
    };
    if (output.PageToken !== undefined && output.PageToken !== null) {
        contents.PageToken = output.PageToken;
    }
    if (output.ResourceDetails !== undefined && output.ResourceDetails !== null) {
        contents.ResourceDetails = deserializeAws_json1_1ResourceDetails(output.ResourceDetails, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTagOptionsOutput = (output, context) => {
    let contents = {
        __type: "ListTagOptionsOutput",
        PageToken: undefined,
        TagOptionDetails: undefined
    };
    if (output.PageToken !== undefined && output.PageToken !== null) {
        contents.PageToken = output.PageToken;
    }
    if (output.TagOptionDetails !== undefined &&
        output.TagOptionDetails !== null) {
        contents.TagOptionDetails = deserializeAws_json1_1TagOptionDetails(output.TagOptionDetails, context);
    }
    return contents;
};
const deserializeAws_json1_1ResourceDetail = (output, context) => {
    let contents = {
        __type: "ResourceDetail",
        ARN: undefined,
        CreatedTime: undefined,
        Description: undefined,
        Id: undefined,
        Name: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
        contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1ResourceDetails = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResourceDetail(entry, context));
};
const deserializeAws_json1_1TagOptionDetail = (output, context) => {
    let contents = {
        __type: "TagOptionDetail",
        Active: undefined,
        Id: undefined,
        Key: undefined,
        Value: undefined
    };
    if (output.Active !== undefined && output.Active !== null) {
        contents.Active = output.Active;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = output.Key;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1TagOptionDetails = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TagOptionDetail(entry, context));
};
const deserializeAws_json1_1TagOptionValues = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1UpdateTagOptionOutput = (output, context) => {
    let contents = {
        __type: "UpdateTagOptionOutput",
        TagOptionDetail: undefined
    };
    if (output.TagOptionDetail !== undefined && output.TagOptionDetail !== null) {
        contents.TagOptionDetail = deserializeAws_json1_1TagOptionDetail(output.TagOptionDetail, context);
    }
    return contents;
};
const deserializeAws_json1_1AcceptPortfolioShareOutput = (output, context) => {
    let contents = {
        __type: "AcceptPortfolioShareOutput"
    };
    return contents;
};
const deserializeAws_json1_1AccountIds = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1AllowedValues = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1AssociateBudgetWithResourceOutput = (output, context) => {
    let contents = {
        __type: "AssociateBudgetWithResourceOutput"
    };
    return contents;
};
const deserializeAws_json1_1AssociatePrincipalWithPortfolioOutput = (output, context) => {
    let contents = {
        __type: "AssociatePrincipalWithPortfolioOutput"
    };
    return contents;
};
const deserializeAws_json1_1AssociateProductWithPortfolioOutput = (output, context) => {
    let contents = {
        __type: "AssociateProductWithPortfolioOutput"
    };
    return contents;
};
const deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactOutput = (output, context) => {
    let contents = {
        __type: "AssociateServiceActionWithProvisioningArtifactOutput"
    };
    return contents;
};
const deserializeAws_json1_1BatchAssociateServiceActionWithProvisioningArtifactOutput = (output, context) => {
    let contents = {
        __type: "BatchAssociateServiceActionWithProvisioningArtifactOutput",
        FailedServiceActionAssociations: undefined
    };
    if (output.FailedServiceActionAssociations !== undefined &&
        output.FailedServiceActionAssociations !== null) {
        contents.FailedServiceActionAssociations = deserializeAws_json1_1FailedServiceActionAssociations(output.FailedServiceActionAssociations, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactOutput = (output, context) => {
    let contents = {
        __type: "BatchDisassociateServiceActionFromProvisioningArtifactOutput",
        FailedServiceActionAssociations: undefined
    };
    if (output.FailedServiceActionAssociations !== undefined &&
        output.FailedServiceActionAssociations !== null) {
        contents.FailedServiceActionAssociations = deserializeAws_json1_1FailedServiceActionAssociations(output.FailedServiceActionAssociations, context);
    }
    return contents;
};
const deserializeAws_json1_1BudgetDetail = (output, context) => {
    let contents = {
        __type: "BudgetDetail",
        BudgetName: undefined
    };
    if (output.BudgetName !== undefined && output.BudgetName !== null) {
        contents.BudgetName = output.BudgetName;
    }
    return contents;
};
const deserializeAws_json1_1Budgets = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BudgetDetail(entry, context));
};
const deserializeAws_json1_1CloudWatchDashboard = (output, context) => {
    let contents = {
        __type: "CloudWatchDashboard",
        Name: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1CloudWatchDashboards = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CloudWatchDashboard(entry, context));
};
const deserializeAws_json1_1ConstraintDetail = (output, context) => {
    let contents = {
        __type: "ConstraintDetail",
        ConstraintId: undefined,
        Description: undefined,
        Owner: undefined,
        Type: undefined
    };
    if (output.ConstraintId !== undefined && output.ConstraintId !== null) {
        contents.ConstraintId = output.ConstraintId;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Owner !== undefined && output.Owner !== null) {
        contents.Owner = output.Owner;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1ConstraintDetails = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ConstraintDetail(entry, context));
};
const deserializeAws_json1_1ConstraintSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ConstraintSummary(entry, context));
};
const deserializeAws_json1_1ConstraintSummary = (output, context) => {
    let contents = {
        __type: "ConstraintSummary",
        Description: undefined,
        Type: undefined
    };
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1CopyProductOutput = (output, context) => {
    let contents = {
        __type: "CopyProductOutput",
        CopyProductToken: undefined
    };
    if (output.CopyProductToken !== undefined &&
        output.CopyProductToken !== null) {
        contents.CopyProductToken = output.CopyProductToken;
    }
    return contents;
};
const deserializeAws_json1_1CreateConstraintOutput = (output, context) => {
    let contents = {
        __type: "CreateConstraintOutput",
        ConstraintDetail: undefined,
        ConstraintParameters: undefined,
        Status: undefined
    };
    if (output.ConstraintDetail !== undefined &&
        output.ConstraintDetail !== null) {
        contents.ConstraintDetail = deserializeAws_json1_1ConstraintDetail(output.ConstraintDetail, context);
    }
    if (output.ConstraintParameters !== undefined &&
        output.ConstraintParameters !== null) {
        contents.ConstraintParameters = output.ConstraintParameters;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1CreatePortfolioOutput = (output, context) => {
    let contents = {
        __type: "CreatePortfolioOutput",
        PortfolioDetail: undefined,
        Tags: undefined
    };
    if (output.PortfolioDetail !== undefined && output.PortfolioDetail !== null) {
        contents.PortfolioDetail = deserializeAws_json1_1PortfolioDetail(output.PortfolioDetail, context);
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1CreatePortfolioShareOutput = (output, context) => {
    let contents = {
        __type: "CreatePortfolioShareOutput",
        PortfolioShareToken: undefined
    };
    if (output.PortfolioShareToken !== undefined &&
        output.PortfolioShareToken !== null) {
        contents.PortfolioShareToken = output.PortfolioShareToken;
    }
    return contents;
};
const deserializeAws_json1_1CreateProductOutput = (output, context) => {
    let contents = {
        __type: "CreateProductOutput",
        ProductViewDetail: undefined,
        ProvisioningArtifactDetail: undefined,
        Tags: undefined
    };
    if (output.ProductViewDetail !== undefined &&
        output.ProductViewDetail !== null) {
        contents.ProductViewDetail = deserializeAws_json1_1ProductViewDetail(output.ProductViewDetail, context);
    }
    if (output.ProvisioningArtifactDetail !== undefined &&
        output.ProvisioningArtifactDetail !== null) {
        contents.ProvisioningArtifactDetail = deserializeAws_json1_1ProvisioningArtifactDetail(output.ProvisioningArtifactDetail, context);
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateProvisionedProductPlanOutput = (output, context) => {
    let contents = {
        __type: "CreateProvisionedProductPlanOutput",
        PlanId: undefined,
        PlanName: undefined,
        ProvisionProductId: undefined,
        ProvisionedProductName: undefined,
        ProvisioningArtifactId: undefined
    };
    if (output.PlanId !== undefined && output.PlanId !== null) {
        contents.PlanId = output.PlanId;
    }
    if (output.PlanName !== undefined && output.PlanName !== null) {
        contents.PlanName = output.PlanName;
    }
    if (output.ProvisionProductId !== undefined &&
        output.ProvisionProductId !== null) {
        contents.ProvisionProductId = output.ProvisionProductId;
    }
    if (output.ProvisionedProductName !== undefined &&
        output.ProvisionedProductName !== null) {
        contents.ProvisionedProductName = output.ProvisionedProductName;
    }
    if (output.ProvisioningArtifactId !== undefined &&
        output.ProvisioningArtifactId !== null) {
        contents.ProvisioningArtifactId = output.ProvisioningArtifactId;
    }
    return contents;
};
const deserializeAws_json1_1CreateProvisioningArtifactOutput = (output, context) => {
    let contents = {
        __type: "CreateProvisioningArtifactOutput",
        Info: undefined,
        ProvisioningArtifactDetail: undefined,
        Status: undefined
    };
    if (output.Info !== undefined && output.Info !== null) {
        contents.Info = deserializeAws_json1_1ProvisioningArtifactInfo(output.Info, context);
    }
    if (output.ProvisioningArtifactDetail !== undefined &&
        output.ProvisioningArtifactDetail !== null) {
        contents.ProvisioningArtifactDetail = deserializeAws_json1_1ProvisioningArtifactDetail(output.ProvisioningArtifactDetail, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1CreateServiceActionOutput = (output, context) => {
    let contents = {
        __type: "CreateServiceActionOutput",
        ServiceActionDetail: undefined
    };
    if (output.ServiceActionDetail !== undefined &&
        output.ServiceActionDetail !== null) {
        contents.ServiceActionDetail = deserializeAws_json1_1ServiceActionDetail(output.ServiceActionDetail, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteConstraintOutput = (output, context) => {
    let contents = {
        __type: "DeleteConstraintOutput"
    };
    return contents;
};
const deserializeAws_json1_1DeletePortfolioOutput = (output, context) => {
    let contents = {
        __type: "DeletePortfolioOutput"
    };
    return contents;
};
const deserializeAws_json1_1DeletePortfolioShareOutput = (output, context) => {
    let contents = {
        __type: "DeletePortfolioShareOutput",
        PortfolioShareToken: undefined
    };
    if (output.PortfolioShareToken !== undefined &&
        output.PortfolioShareToken !== null) {
        contents.PortfolioShareToken = output.PortfolioShareToken;
    }
    return contents;
};
const deserializeAws_json1_1DeleteProductOutput = (output, context) => {
    let contents = {
        __type: "DeleteProductOutput"
    };
    return contents;
};
const deserializeAws_json1_1DeleteProvisionedProductPlanOutput = (output, context) => {
    let contents = {
        __type: "DeleteProvisionedProductPlanOutput"
    };
    return contents;
};
const deserializeAws_json1_1DeleteProvisioningArtifactOutput = (output, context) => {
    let contents = {
        __type: "DeleteProvisioningArtifactOutput"
    };
    return contents;
};
const deserializeAws_json1_1DeleteServiceActionOutput = (output, context) => {
    let contents = {
        __type: "DeleteServiceActionOutput"
    };
    return contents;
};
const deserializeAws_json1_1DescribeConstraintOutput = (output, context) => {
    let contents = {
        __type: "DescribeConstraintOutput",
        ConstraintDetail: undefined,
        ConstraintParameters: undefined,
        Status: undefined
    };
    if (output.ConstraintDetail !== undefined &&
        output.ConstraintDetail !== null) {
        contents.ConstraintDetail = deserializeAws_json1_1ConstraintDetail(output.ConstraintDetail, context);
    }
    if (output.ConstraintParameters !== undefined &&
        output.ConstraintParameters !== null) {
        contents.ConstraintParameters = output.ConstraintParameters;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1DescribeCopyProductStatusOutput = (output, context) => {
    let contents = {
        __type: "DescribeCopyProductStatusOutput",
        CopyProductStatus: undefined,
        StatusDetail: undefined,
        TargetProductId: undefined
    };
    if (output.CopyProductStatus !== undefined &&
        output.CopyProductStatus !== null) {
        contents.CopyProductStatus = output.CopyProductStatus;
    }
    if (output.StatusDetail !== undefined && output.StatusDetail !== null) {
        contents.StatusDetail = output.StatusDetail;
    }
    if (output.TargetProductId !== undefined && output.TargetProductId !== null) {
        contents.TargetProductId = output.TargetProductId;
    }
    return contents;
};
const deserializeAws_json1_1DescribePortfolioOutput = (output, context) => {
    let contents = {
        __type: "DescribePortfolioOutput",
        Budgets: undefined,
        PortfolioDetail: undefined,
        TagOptions: undefined,
        Tags: undefined
    };
    if (output.Budgets !== undefined && output.Budgets !== null) {
        contents.Budgets = deserializeAws_json1_1Budgets(output.Budgets, context);
    }
    if (output.PortfolioDetail !== undefined && output.PortfolioDetail !== null) {
        contents.PortfolioDetail = deserializeAws_json1_1PortfolioDetail(output.PortfolioDetail, context);
    }
    if (output.TagOptions !== undefined && output.TagOptions !== null) {
        contents.TagOptions = deserializeAws_json1_1TagOptionDetails(output.TagOptions, context);
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribePortfolioShareStatusOutput = (output, context) => {
    let contents = {
        __type: "DescribePortfolioShareStatusOutput",
        OrganizationNodeValue: undefined,
        PortfolioId: undefined,
        PortfolioShareToken: undefined,
        ShareDetails: undefined,
        Status: undefined
    };
    if (output.OrganizationNodeValue !== undefined &&
        output.OrganizationNodeValue !== null) {
        contents.OrganizationNodeValue = output.OrganizationNodeValue;
    }
    if (output.PortfolioId !== undefined && output.PortfolioId !== null) {
        contents.PortfolioId = output.PortfolioId;
    }
    if (output.PortfolioShareToken !== undefined &&
        output.PortfolioShareToken !== null) {
        contents.PortfolioShareToken = output.PortfolioShareToken;
    }
    if (output.ShareDetails !== undefined && output.ShareDetails !== null) {
        contents.ShareDetails = deserializeAws_json1_1ShareDetails(output.ShareDetails, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1DescribeProductAsAdminOutput = (output, context) => {
    let contents = {
        __type: "DescribeProductAsAdminOutput",
        Budgets: undefined,
        ProductViewDetail: undefined,
        ProvisioningArtifactSummaries: undefined,
        TagOptions: undefined,
        Tags: undefined
    };
    if (output.Budgets !== undefined && output.Budgets !== null) {
        contents.Budgets = deserializeAws_json1_1Budgets(output.Budgets, context);
    }
    if (output.ProductViewDetail !== undefined &&
        output.ProductViewDetail !== null) {
        contents.ProductViewDetail = deserializeAws_json1_1ProductViewDetail(output.ProductViewDetail, context);
    }
    if (output.ProvisioningArtifactSummaries !== undefined &&
        output.ProvisioningArtifactSummaries !== null) {
        contents.ProvisioningArtifactSummaries = deserializeAws_json1_1ProvisioningArtifactSummaries(output.ProvisioningArtifactSummaries, context);
    }
    if (output.TagOptions !== undefined && output.TagOptions !== null) {
        contents.TagOptions = deserializeAws_json1_1TagOptionDetails(output.TagOptions, context);
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeProductOutput = (output, context) => {
    let contents = {
        __type: "DescribeProductOutput",
        Budgets: undefined,
        ProductViewSummary: undefined,
        ProvisioningArtifacts: undefined
    };
    if (output.Budgets !== undefined && output.Budgets !== null) {
        contents.Budgets = deserializeAws_json1_1Budgets(output.Budgets, context);
    }
    if (output.ProductViewSummary !== undefined &&
        output.ProductViewSummary !== null) {
        contents.ProductViewSummary = deserializeAws_json1_1ProductViewSummary(output.ProductViewSummary, context);
    }
    if (output.ProvisioningArtifacts !== undefined &&
        output.ProvisioningArtifacts !== null) {
        contents.ProvisioningArtifacts = deserializeAws_json1_1ProvisioningArtifacts(output.ProvisioningArtifacts, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeProductViewOutput = (output, context) => {
    let contents = {
        __type: "DescribeProductViewOutput",
        ProductViewSummary: undefined,
        ProvisioningArtifacts: undefined
    };
    if (output.ProductViewSummary !== undefined &&
        output.ProductViewSummary !== null) {
        contents.ProductViewSummary = deserializeAws_json1_1ProductViewSummary(output.ProductViewSummary, context);
    }
    if (output.ProvisioningArtifacts !== undefined &&
        output.ProvisioningArtifacts !== null) {
        contents.ProvisioningArtifacts = deserializeAws_json1_1ProvisioningArtifacts(output.ProvisioningArtifacts, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeProvisionedProductOutput = (output, context) => {
    let contents = {
        __type: "DescribeProvisionedProductOutput",
        CloudWatchDashboards: undefined,
        ProvisionedProductDetail: undefined
    };
    if (output.CloudWatchDashboards !== undefined &&
        output.CloudWatchDashboards !== null) {
        contents.CloudWatchDashboards = deserializeAws_json1_1CloudWatchDashboards(output.CloudWatchDashboards, context);
    }
    if (output.ProvisionedProductDetail !== undefined &&
        output.ProvisionedProductDetail !== null) {
        contents.ProvisionedProductDetail = deserializeAws_json1_1ProvisionedProductDetail(output.ProvisionedProductDetail, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeProvisionedProductPlanOutput = (output, context) => {
    let contents = {
        __type: "DescribeProvisionedProductPlanOutput",
        NextPageToken: undefined,
        ProvisionedProductPlanDetails: undefined,
        ResourceChanges: undefined
    };
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    if (output.ProvisionedProductPlanDetails !== undefined &&
        output.ProvisionedProductPlanDetails !== null) {
        contents.ProvisionedProductPlanDetails = deserializeAws_json1_1ProvisionedProductPlanDetails(output.ProvisionedProductPlanDetails, context);
    }
    if (output.ResourceChanges !== undefined && output.ResourceChanges !== null) {
        contents.ResourceChanges = deserializeAws_json1_1ResourceChanges(output.ResourceChanges, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeProvisioningArtifactOutput = (output, context) => {
    let contents = {
        __type: "DescribeProvisioningArtifactOutput",
        Info: undefined,
        ProvisioningArtifactDetail: undefined,
        Status: undefined
    };
    if (output.Info !== undefined && output.Info !== null) {
        contents.Info = deserializeAws_json1_1ProvisioningArtifactInfo(output.Info, context);
    }
    if (output.ProvisioningArtifactDetail !== undefined &&
        output.ProvisioningArtifactDetail !== null) {
        contents.ProvisioningArtifactDetail = deserializeAws_json1_1ProvisioningArtifactDetail(output.ProvisioningArtifactDetail, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1DescribeProvisioningParametersOutput = (output, context) => {
    let contents = {
        __type: "DescribeProvisioningParametersOutput",
        ConstraintSummaries: undefined,
        ProvisioningArtifactParameters: undefined,
        ProvisioningArtifactPreferences: undefined,
        TagOptions: undefined,
        UsageInstructions: undefined
    };
    if (output.ConstraintSummaries !== undefined &&
        output.ConstraintSummaries !== null) {
        contents.ConstraintSummaries = deserializeAws_json1_1ConstraintSummaries(output.ConstraintSummaries, context);
    }
    if (output.ProvisioningArtifactParameters !== undefined &&
        output.ProvisioningArtifactParameters !== null) {
        contents.ProvisioningArtifactParameters = deserializeAws_json1_1ProvisioningArtifactParameters(output.ProvisioningArtifactParameters, context);
    }
    if (output.ProvisioningArtifactPreferences !== undefined &&
        output.ProvisioningArtifactPreferences !== null) {
        contents.ProvisioningArtifactPreferences = deserializeAws_json1_1ProvisioningArtifactPreferences(output.ProvisioningArtifactPreferences, context);
    }
    if (output.TagOptions !== undefined && output.TagOptions !== null) {
        contents.TagOptions = deserializeAws_json1_1TagOptionSummaries(output.TagOptions, context);
    }
    if (output.UsageInstructions !== undefined &&
        output.UsageInstructions !== null) {
        contents.UsageInstructions = deserializeAws_json1_1UsageInstructions(output.UsageInstructions, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeRecordOutput = (output, context) => {
    let contents = {
        __type: "DescribeRecordOutput",
        NextPageToken: undefined,
        RecordDetail: undefined,
        RecordOutputs: undefined
    };
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    if (output.RecordDetail !== undefined && output.RecordDetail !== null) {
        contents.RecordDetail = deserializeAws_json1_1RecordDetail(output.RecordDetail, context);
    }
    if (output.RecordOutputs !== undefined && output.RecordOutputs !== null) {
        contents.RecordOutputs = deserializeAws_json1_1RecordOutputs(output.RecordOutputs, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeServiceActionExecutionParametersOutput = (output, context) => {
    let contents = {
        __type: "DescribeServiceActionExecutionParametersOutput",
        ServiceActionParameters: undefined
    };
    if (output.ServiceActionParameters !== undefined &&
        output.ServiceActionParameters !== null) {
        contents.ServiceActionParameters = deserializeAws_json1_1ExecutionParameters(output.ServiceActionParameters, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeServiceActionOutput = (output, context) => {
    let contents = {
        __type: "DescribeServiceActionOutput",
        ServiceActionDetail: undefined
    };
    if (output.ServiceActionDetail !== undefined &&
        output.ServiceActionDetail !== null) {
        contents.ServiceActionDetail = deserializeAws_json1_1ServiceActionDetail(output.ServiceActionDetail, context);
    }
    return contents;
};
const deserializeAws_json1_1DisableAWSOrganizationsAccessOutput = (output, context) => {
    let contents = {
        __type: "DisableAWSOrganizationsAccessOutput"
    };
    return contents;
};
const deserializeAws_json1_1DisassociateBudgetFromResourceOutput = (output, context) => {
    let contents = {
        __type: "DisassociateBudgetFromResourceOutput"
    };
    return contents;
};
const deserializeAws_json1_1DisassociatePrincipalFromPortfolioOutput = (output, context) => {
    let contents = {
        __type: "DisassociatePrincipalFromPortfolioOutput"
    };
    return contents;
};
const deserializeAws_json1_1DisassociateProductFromPortfolioOutput = (output, context) => {
    let contents = {
        __type: "DisassociateProductFromPortfolioOutput"
    };
    return contents;
};
const deserializeAws_json1_1DisassociateServiceActionFromProvisioningArtifactOutput = (output, context) => {
    let contents = {
        __type: "DisassociateServiceActionFromProvisioningArtifactOutput"
    };
    return contents;
};
const deserializeAws_json1_1DuplicateResourceException = (output, context) => {
    let contents = {
        __type: "DuplicateResourceException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1EnableAWSOrganizationsAccessOutput = (output, context) => {
    let contents = {
        __type: "EnableAWSOrganizationsAccessOutput"
    };
    return contents;
};
const deserializeAws_json1_1ExecuteProvisionedProductPlanOutput = (output, context) => {
    let contents = {
        __type: "ExecuteProvisionedProductPlanOutput",
        RecordDetail: undefined
    };
    if (output.RecordDetail !== undefined && output.RecordDetail !== null) {
        contents.RecordDetail = deserializeAws_json1_1RecordDetail(output.RecordDetail, context);
    }
    return contents;
};
const deserializeAws_json1_1ExecuteProvisionedProductServiceActionOutput = (output, context) => {
    let contents = {
        __type: "ExecuteProvisionedProductServiceActionOutput",
        RecordDetail: undefined
    };
    if (output.RecordDetail !== undefined && output.RecordDetail !== null) {
        contents.RecordDetail = deserializeAws_json1_1RecordDetail(output.RecordDetail, context);
    }
    return contents;
};
const deserializeAws_json1_1ExecutionParameter = (output, context) => {
    let contents = {
        __type: "ExecutionParameter",
        DefaultValues: undefined,
        Name: undefined,
        Type: undefined
    };
    if (output.DefaultValues !== undefined && output.DefaultValues !== null) {
        contents.DefaultValues = deserializeAws_json1_1ExecutionParameterValueList(output.DefaultValues, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1ExecutionParameterValueList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ExecutionParameters = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ExecutionParameter(entry, context));
};
const deserializeAws_json1_1FailedServiceActionAssociation = (output, context) => {
    let contents = {
        __type: "FailedServiceActionAssociation",
        ErrorCode: undefined,
        ErrorMessage: undefined,
        ProductId: undefined,
        ProvisioningArtifactId: undefined,
        ServiceActionId: undefined
    };
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.ProductId !== undefined && output.ProductId !== null) {
        contents.ProductId = output.ProductId;
    }
    if (output.ProvisioningArtifactId !== undefined &&
        output.ProvisioningArtifactId !== null) {
        contents.ProvisioningArtifactId = output.ProvisioningArtifactId;
    }
    if (output.ServiceActionId !== undefined && output.ServiceActionId !== null) {
        contents.ServiceActionId = output.ServiceActionId;
    }
    return contents;
};
const deserializeAws_json1_1FailedServiceActionAssociations = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FailedServiceActionAssociation(entry, context));
};
const deserializeAws_json1_1GetAWSOrganizationsAccessStatusOutput = (output, context) => {
    let contents = {
        __type: "GetAWSOrganizationsAccessStatusOutput",
        AccessStatus: undefined
    };
    if (output.AccessStatus !== undefined && output.AccessStatus !== null) {
        contents.AccessStatus = output.AccessStatus;
    }
    return contents;
};
const deserializeAws_json1_1InvalidParametersException = (output, context) => {
    let contents = {
        __type: "InvalidParametersException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidStateException = (output, context) => {
    let contents = {
        __type: "InvalidStateException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1LaunchPathSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LaunchPathSummary(entry, context));
};
const deserializeAws_json1_1LaunchPathSummary = (output, context) => {
    let contents = {
        __type: "LaunchPathSummary",
        ConstraintSummaries: undefined,
        Id: undefined,
        Name: undefined,
        Tags: undefined
    };
    if (output.ConstraintSummaries !== undefined &&
        output.ConstraintSummaries !== null) {
        contents.ConstraintSummaries = deserializeAws_json1_1ConstraintSummaries(output.ConstraintSummaries, context);
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    let contents = {
        __type: "LimitExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ListAcceptedPortfolioSharesOutput = (output, context) => {
    let contents = {
        __type: "ListAcceptedPortfolioSharesOutput",
        NextPageToken: undefined,
        PortfolioDetails: undefined
    };
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    if (output.PortfolioDetails !== undefined &&
        output.PortfolioDetails !== null) {
        contents.PortfolioDetails = deserializeAws_json1_1PortfolioDetails(output.PortfolioDetails, context);
    }
    return contents;
};
const deserializeAws_json1_1ListBudgetsForResourceOutput = (output, context) => {
    let contents = {
        __type: "ListBudgetsForResourceOutput",
        Budgets: undefined,
        NextPageToken: undefined
    };
    if (output.Budgets !== undefined && output.Budgets !== null) {
        contents.Budgets = deserializeAws_json1_1Budgets(output.Budgets, context);
    }
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    return contents;
};
const deserializeAws_json1_1ListConstraintsForPortfolioOutput = (output, context) => {
    let contents = {
        __type: "ListConstraintsForPortfolioOutput",
        ConstraintDetails: undefined,
        NextPageToken: undefined
    };
    if (output.ConstraintDetails !== undefined &&
        output.ConstraintDetails !== null) {
        contents.ConstraintDetails = deserializeAws_json1_1ConstraintDetails(output.ConstraintDetails, context);
    }
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    return contents;
};
const deserializeAws_json1_1ListLaunchPathsOutput = (output, context) => {
    let contents = {
        __type: "ListLaunchPathsOutput",
        LaunchPathSummaries: undefined,
        NextPageToken: undefined
    };
    if (output.LaunchPathSummaries !== undefined &&
        output.LaunchPathSummaries !== null) {
        contents.LaunchPathSummaries = deserializeAws_json1_1LaunchPathSummaries(output.LaunchPathSummaries, context);
    }
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    return contents;
};
const deserializeAws_json1_1ListOrganizationPortfolioAccessOutput = (output, context) => {
    let contents = {
        __type: "ListOrganizationPortfolioAccessOutput",
        NextPageToken: undefined,
        OrganizationNodes: undefined
    };
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    if (output.OrganizationNodes !== undefined &&
        output.OrganizationNodes !== null) {
        contents.OrganizationNodes = deserializeAws_json1_1OrganizationNodes(output.OrganizationNodes, context);
    }
    return contents;
};
const deserializeAws_json1_1ListPortfolioAccessOutput = (output, context) => {
    let contents = {
        __type: "ListPortfolioAccessOutput",
        AccountIds: undefined,
        NextPageToken: undefined
    };
    if (output.AccountIds !== undefined && output.AccountIds !== null) {
        contents.AccountIds = deserializeAws_json1_1AccountIds(output.AccountIds, context);
    }
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    return contents;
};
const deserializeAws_json1_1ListPortfoliosForProductOutput = (output, context) => {
    let contents = {
        __type: "ListPortfoliosForProductOutput",
        NextPageToken: undefined,
        PortfolioDetails: undefined
    };
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    if (output.PortfolioDetails !== undefined &&
        output.PortfolioDetails !== null) {
        contents.PortfolioDetails = deserializeAws_json1_1PortfolioDetails(output.PortfolioDetails, context);
    }
    return contents;
};
const deserializeAws_json1_1ListPortfoliosOutput = (output, context) => {
    let contents = {
        __type: "ListPortfoliosOutput",
        NextPageToken: undefined,
        PortfolioDetails: undefined
    };
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    if (output.PortfolioDetails !== undefined &&
        output.PortfolioDetails !== null) {
        contents.PortfolioDetails = deserializeAws_json1_1PortfolioDetails(output.PortfolioDetails, context);
    }
    return contents;
};
const deserializeAws_json1_1ListPrincipalsForPortfolioOutput = (output, context) => {
    let contents = {
        __type: "ListPrincipalsForPortfolioOutput",
        NextPageToken: undefined,
        Principals: undefined
    };
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    if (output.Principals !== undefined && output.Principals !== null) {
        contents.Principals = deserializeAws_json1_1Principals(output.Principals, context);
    }
    return contents;
};
const deserializeAws_json1_1ListProvisionedProductPlansOutput = (output, context) => {
    let contents = {
        __type: "ListProvisionedProductPlansOutput",
        NextPageToken: undefined,
        ProvisionedProductPlans: undefined
    };
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    if (output.ProvisionedProductPlans !== undefined &&
        output.ProvisionedProductPlans !== null) {
        contents.ProvisionedProductPlans = deserializeAws_json1_1ProvisionedProductPlans(output.ProvisionedProductPlans, context);
    }
    return contents;
};
const deserializeAws_json1_1ListProvisioningArtifactsForServiceActionOutput = (output, context) => {
    let contents = {
        __type: "ListProvisioningArtifactsForServiceActionOutput",
        NextPageToken: undefined,
        ProvisioningArtifactViews: undefined
    };
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    if (output.ProvisioningArtifactViews !== undefined &&
        output.ProvisioningArtifactViews !== null) {
        contents.ProvisioningArtifactViews = deserializeAws_json1_1ProvisioningArtifactViews(output.ProvisioningArtifactViews, context);
    }
    return contents;
};
const deserializeAws_json1_1ListProvisioningArtifactsOutput = (output, context) => {
    let contents = {
        __type: "ListProvisioningArtifactsOutput",
        NextPageToken: undefined,
        ProvisioningArtifactDetails: undefined
    };
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    if (output.ProvisioningArtifactDetails !== undefined &&
        output.ProvisioningArtifactDetails !== null) {
        contents.ProvisioningArtifactDetails = deserializeAws_json1_1ProvisioningArtifactDetails(output.ProvisioningArtifactDetails, context);
    }
    return contents;
};
const deserializeAws_json1_1ListRecordHistoryOutput = (output, context) => {
    let contents = {
        __type: "ListRecordHistoryOutput",
        NextPageToken: undefined,
        RecordDetails: undefined
    };
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    if (output.RecordDetails !== undefined && output.RecordDetails !== null) {
        contents.RecordDetails = deserializeAws_json1_1RecordDetails(output.RecordDetails, context);
    }
    return contents;
};
const deserializeAws_json1_1ListServiceActionsForProvisioningArtifactOutput = (output, context) => {
    let contents = {
        __type: "ListServiceActionsForProvisioningArtifactOutput",
        NextPageToken: undefined,
        ServiceActionSummaries: undefined
    };
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    if (output.ServiceActionSummaries !== undefined &&
        output.ServiceActionSummaries !== null) {
        contents.ServiceActionSummaries = deserializeAws_json1_1ServiceActionSummaries(output.ServiceActionSummaries, context);
    }
    return contents;
};
const deserializeAws_json1_1ListServiceActionsOutput = (output, context) => {
    let contents = {
        __type: "ListServiceActionsOutput",
        NextPageToken: undefined,
        ServiceActionSummaries: undefined
    };
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    if (output.ServiceActionSummaries !== undefined &&
        output.ServiceActionSummaries !== null) {
        contents.ServiceActionSummaries = deserializeAws_json1_1ServiceActionSummaries(output.ServiceActionSummaries, context);
    }
    return contents;
};
const deserializeAws_json1_1ListStackInstancesForProvisionedProductOutput = (output, context) => {
    let contents = {
        __type: "ListStackInstancesForProvisionedProductOutput",
        NextPageToken: undefined,
        StackInstances: undefined
    };
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    if (output.StackInstances !== undefined && output.StackInstances !== null) {
        contents.StackInstances = deserializeAws_json1_1StackInstances(output.StackInstances, context);
    }
    return contents;
};
const deserializeAws_json1_1Namespaces = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1NotificationArns = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1OperationNotSupportedException = (output, context) => {
    let contents = {
        __type: "OperationNotSupportedException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1OrganizationNode = (output, context) => {
    let contents = {
        __type: "OrganizationNode",
        Type: undefined,
        Value: undefined
    };
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1OrganizationNodes = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1OrganizationNode(entry, context));
};
const deserializeAws_json1_1ParameterConstraints = (output, context) => {
    let contents = {
        __type: "ParameterConstraints",
        AllowedValues: undefined
    };
    if (output.AllowedValues !== undefined && output.AllowedValues !== null) {
        contents.AllowedValues = deserializeAws_json1_1AllowedValues(output.AllowedValues, context);
    }
    return contents;
};
const deserializeAws_json1_1PortfolioDetail = (output, context) => {
    let contents = {
        __type: "PortfolioDetail",
        ARN: undefined,
        CreatedTime: undefined,
        Description: undefined,
        DisplayName: undefined,
        Id: undefined,
        ProviderName: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
        contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.DisplayName !== undefined && output.DisplayName !== null) {
        contents.DisplayName = output.DisplayName;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.ProviderName !== undefined && output.ProviderName !== null) {
        contents.ProviderName = output.ProviderName;
    }
    return contents;
};
const deserializeAws_json1_1PortfolioDetails = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PortfolioDetail(entry, context));
};
const deserializeAws_json1_1Principal = (output, context) => {
    let contents = {
        __type: "Principal",
        PrincipalARN: undefined,
        PrincipalType: undefined
    };
    if (output.PrincipalARN !== undefined && output.PrincipalARN !== null) {
        contents.PrincipalARN = output.PrincipalARN;
    }
    if (output.PrincipalType !== undefined && output.PrincipalType !== null) {
        contents.PrincipalType = output.PrincipalType;
    }
    return contents;
};
const deserializeAws_json1_1Principals = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Principal(entry, context));
};
const deserializeAws_json1_1ProductViewAggregationValue = (output, context) => {
    let contents = {
        __type: "ProductViewAggregationValue",
        ApproximateCount: undefined,
        Value: undefined
    };
    if (output.ApproximateCount !== undefined &&
        output.ApproximateCount !== null) {
        contents.ApproximateCount = output.ApproximateCount;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1ProductViewAggregationValues = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ProductViewAggregationValue(entry, context));
};
const deserializeAws_json1_1ProductViewAggregations = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_1ProductViewAggregationValues(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_1ProductViewDetail = (output, context) => {
    let contents = {
        __type: "ProductViewDetail",
        CreatedTime: undefined,
        ProductARN: undefined,
        ProductViewSummary: undefined,
        Status: undefined
    };
    if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
        contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
    }
    if (output.ProductARN !== undefined && output.ProductARN !== null) {
        contents.ProductARN = output.ProductARN;
    }
    if (output.ProductViewSummary !== undefined &&
        output.ProductViewSummary !== null) {
        contents.ProductViewSummary = deserializeAws_json1_1ProductViewSummary(output.ProductViewSummary, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1ProductViewDetails = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ProductViewDetail(entry, context));
};
const deserializeAws_json1_1ProductViewSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ProductViewSummary(entry, context));
};
const deserializeAws_json1_1ProductViewSummary = (output, context) => {
    let contents = {
        __type: "ProductViewSummary",
        Distributor: undefined,
        HasDefaultPath: undefined,
        Id: undefined,
        Name: undefined,
        Owner: undefined,
        ProductId: undefined,
        ShortDescription: undefined,
        SupportDescription: undefined,
        SupportEmail: undefined,
        SupportUrl: undefined,
        Type: undefined
    };
    if (output.Distributor !== undefined && output.Distributor !== null) {
        contents.Distributor = output.Distributor;
    }
    if (output.HasDefaultPath !== undefined && output.HasDefaultPath !== null) {
        contents.HasDefaultPath = output.HasDefaultPath;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Owner !== undefined && output.Owner !== null) {
        contents.Owner = output.Owner;
    }
    if (output.ProductId !== undefined && output.ProductId !== null) {
        contents.ProductId = output.ProductId;
    }
    if (output.ShortDescription !== undefined &&
        output.ShortDescription !== null) {
        contents.ShortDescription = output.ShortDescription;
    }
    if (output.SupportDescription !== undefined &&
        output.SupportDescription !== null) {
        contents.SupportDescription = output.SupportDescription;
    }
    if (output.SupportEmail !== undefined && output.SupportEmail !== null) {
        contents.SupportEmail = output.SupportEmail;
    }
    if (output.SupportUrl !== undefined && output.SupportUrl !== null) {
        contents.SupportUrl = output.SupportUrl;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1ProvisionProductOutput = (output, context) => {
    let contents = {
        __type: "ProvisionProductOutput",
        RecordDetail: undefined
    };
    if (output.RecordDetail !== undefined && output.RecordDetail !== null) {
        contents.RecordDetail = deserializeAws_json1_1RecordDetail(output.RecordDetail, context);
    }
    return contents;
};
const deserializeAws_json1_1ProvisionedProductAttribute = (output, context) => {
    let contents = {
        __type: "ProvisionedProductAttribute",
        Arn: undefined,
        CreatedTime: undefined,
        Id: undefined,
        IdempotencyToken: undefined,
        LastRecordId: undefined,
        Name: undefined,
        PhysicalId: undefined,
        ProductId: undefined,
        ProvisioningArtifactId: undefined,
        Status: undefined,
        StatusMessage: undefined,
        Tags: undefined,
        Type: undefined,
        UserArn: undefined,
        UserArnSession: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
        contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.IdempotencyToken !== undefined &&
        output.IdempotencyToken !== null) {
        contents.IdempotencyToken = output.IdempotencyToken;
    }
    if (output.LastRecordId !== undefined && output.LastRecordId !== null) {
        contents.LastRecordId = output.LastRecordId;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.PhysicalId !== undefined && output.PhysicalId !== null) {
        contents.PhysicalId = output.PhysicalId;
    }
    if (output.ProductId !== undefined && output.ProductId !== null) {
        contents.ProductId = output.ProductId;
    }
    if (output.ProvisioningArtifactId !== undefined &&
        output.ProvisioningArtifactId !== null) {
        contents.ProvisioningArtifactId = output.ProvisioningArtifactId;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
        contents.StatusMessage = output.StatusMessage;
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.UserArn !== undefined && output.UserArn !== null) {
        contents.UserArn = output.UserArn;
    }
    if (output.UserArnSession !== undefined && output.UserArnSession !== null) {
        contents.UserArnSession = output.UserArnSession;
    }
    return contents;
};
const deserializeAws_json1_1ProvisionedProductAttributes = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ProvisionedProductAttribute(entry, context));
};
const deserializeAws_json1_1ProvisionedProductDetail = (output, context) => {
    let contents = {
        __type: "ProvisionedProductDetail",
        Arn: undefined,
        CreatedTime: undefined,
        Id: undefined,
        IdempotencyToken: undefined,
        LastRecordId: undefined,
        Name: undefined,
        ProductId: undefined,
        ProvisioningArtifactId: undefined,
        Status: undefined,
        StatusMessage: undefined,
        Type: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
        contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.IdempotencyToken !== undefined &&
        output.IdempotencyToken !== null) {
        contents.IdempotencyToken = output.IdempotencyToken;
    }
    if (output.LastRecordId !== undefined && output.LastRecordId !== null) {
        contents.LastRecordId = output.LastRecordId;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.ProductId !== undefined && output.ProductId !== null) {
        contents.ProductId = output.ProductId;
    }
    if (output.ProvisioningArtifactId !== undefined &&
        output.ProvisioningArtifactId !== null) {
        contents.ProvisioningArtifactId = output.ProvisioningArtifactId;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
        contents.StatusMessage = output.StatusMessage;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1ProvisionedProductDetails = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ProvisionedProductDetail(entry, context));
};
const deserializeAws_json1_1ProvisionedProductPlanDetails = (output, context) => {
    let contents = {
        __type: "ProvisionedProductPlanDetails",
        CreatedTime: undefined,
        NotificationArns: undefined,
        PathId: undefined,
        PlanId: undefined,
        PlanName: undefined,
        PlanType: undefined,
        ProductId: undefined,
        ProvisionProductId: undefined,
        ProvisionProductName: undefined,
        ProvisioningArtifactId: undefined,
        ProvisioningParameters: undefined,
        Status: undefined,
        StatusMessage: undefined,
        Tags: undefined,
        UpdatedTime: undefined
    };
    if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
        contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
    }
    if (output.NotificationArns !== undefined &&
        output.NotificationArns !== null) {
        contents.NotificationArns = deserializeAws_json1_1NotificationArns(output.NotificationArns, context);
    }
    if (output.PathId !== undefined && output.PathId !== null) {
        contents.PathId = output.PathId;
    }
    if (output.PlanId !== undefined && output.PlanId !== null) {
        contents.PlanId = output.PlanId;
    }
    if (output.PlanName !== undefined && output.PlanName !== null) {
        contents.PlanName = output.PlanName;
    }
    if (output.PlanType !== undefined && output.PlanType !== null) {
        contents.PlanType = output.PlanType;
    }
    if (output.ProductId !== undefined && output.ProductId !== null) {
        contents.ProductId = output.ProductId;
    }
    if (output.ProvisionProductId !== undefined &&
        output.ProvisionProductId !== null) {
        contents.ProvisionProductId = output.ProvisionProductId;
    }
    if (output.ProvisionProductName !== undefined &&
        output.ProvisionProductName !== null) {
        contents.ProvisionProductName = output.ProvisionProductName;
    }
    if (output.ProvisioningArtifactId !== undefined &&
        output.ProvisioningArtifactId !== null) {
        contents.ProvisioningArtifactId = output.ProvisioningArtifactId;
    }
    if (output.ProvisioningParameters !== undefined &&
        output.ProvisioningParameters !== null) {
        contents.ProvisioningParameters = deserializeAws_json1_1UpdateProvisioningParameters(output.ProvisioningParameters, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
        contents.StatusMessage = output.StatusMessage;
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
    }
    if (output.UpdatedTime !== undefined && output.UpdatedTime !== null) {
        contents.UpdatedTime = new Date(Math.round(output.UpdatedTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1ProvisionedProductPlanSummary = (output, context) => {
    let contents = {
        __type: "ProvisionedProductPlanSummary",
        PlanId: undefined,
        PlanName: undefined,
        PlanType: undefined,
        ProvisionProductId: undefined,
        ProvisionProductName: undefined,
        ProvisioningArtifactId: undefined
    };
    if (output.PlanId !== undefined && output.PlanId !== null) {
        contents.PlanId = output.PlanId;
    }
    if (output.PlanName !== undefined && output.PlanName !== null) {
        contents.PlanName = output.PlanName;
    }
    if (output.PlanType !== undefined && output.PlanType !== null) {
        contents.PlanType = output.PlanType;
    }
    if (output.ProvisionProductId !== undefined &&
        output.ProvisionProductId !== null) {
        contents.ProvisionProductId = output.ProvisionProductId;
    }
    if (output.ProvisionProductName !== undefined &&
        output.ProvisionProductName !== null) {
        contents.ProvisionProductName = output.ProvisionProductName;
    }
    if (output.ProvisioningArtifactId !== undefined &&
        output.ProvisioningArtifactId !== null) {
        contents.ProvisioningArtifactId = output.ProvisioningArtifactId;
    }
    return contents;
};
const deserializeAws_json1_1ProvisionedProductPlans = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ProvisionedProductPlanSummary(entry, context));
};
const deserializeAws_json1_1ProvisionedProductProperties = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1ProvisioningArtifact = (output, context) => {
    let contents = {
        __type: "ProvisioningArtifact",
        CreatedTime: undefined,
        Description: undefined,
        Guidance: undefined,
        Id: undefined,
        Name: undefined
    };
    if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
        contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Guidance !== undefined && output.Guidance !== null) {
        contents.Guidance = output.Guidance;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1ProvisioningArtifactDetail = (output, context) => {
    let contents = {
        __type: "ProvisioningArtifactDetail",
        Active: undefined,
        CreatedTime: undefined,
        Description: undefined,
        Guidance: undefined,
        Id: undefined,
        Name: undefined,
        Type: undefined
    };
    if (output.Active !== undefined && output.Active !== null) {
        contents.Active = output.Active;
    }
    if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
        contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Guidance !== undefined && output.Guidance !== null) {
        contents.Guidance = output.Guidance;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1ProvisioningArtifactDetails = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ProvisioningArtifactDetail(entry, context));
};
const deserializeAws_json1_1ProvisioningArtifactInfo = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1ProvisioningArtifactParameter = (output, context) => {
    let contents = {
        __type: "ProvisioningArtifactParameter",
        DefaultValue: undefined,
        Description: undefined,
        IsNoEcho: undefined,
        ParameterConstraints: undefined,
        ParameterKey: undefined,
        ParameterType: undefined
    };
    if (output.DefaultValue !== undefined && output.DefaultValue !== null) {
        contents.DefaultValue = output.DefaultValue;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.IsNoEcho !== undefined && output.IsNoEcho !== null) {
        contents.IsNoEcho = output.IsNoEcho;
    }
    if (output.ParameterConstraints !== undefined &&
        output.ParameterConstraints !== null) {
        contents.ParameterConstraints = deserializeAws_json1_1ParameterConstraints(output.ParameterConstraints, context);
    }
    if (output.ParameterKey !== undefined && output.ParameterKey !== null) {
        contents.ParameterKey = output.ParameterKey;
    }
    if (output.ParameterType !== undefined && output.ParameterType !== null) {
        contents.ParameterType = output.ParameterType;
    }
    return contents;
};
const deserializeAws_json1_1ProvisioningArtifactParameters = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ProvisioningArtifactParameter(entry, context));
};
const deserializeAws_json1_1ProvisioningArtifactPreferences = (output, context) => {
    let contents = {
        __type: "ProvisioningArtifactPreferences",
        StackSetAccounts: undefined,
        StackSetRegions: undefined
    };
    if (output.StackSetAccounts !== undefined &&
        output.StackSetAccounts !== null) {
        contents.StackSetAccounts = deserializeAws_json1_1StackSetAccounts(output.StackSetAccounts, context);
    }
    if (output.StackSetRegions !== undefined && output.StackSetRegions !== null) {
        contents.StackSetRegions = deserializeAws_json1_1StackSetRegions(output.StackSetRegions, context);
    }
    return contents;
};
const deserializeAws_json1_1ProvisioningArtifactSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ProvisioningArtifactSummary(entry, context));
};
const deserializeAws_json1_1ProvisioningArtifactSummary = (output, context) => {
    let contents = {
        __type: "ProvisioningArtifactSummary",
        CreatedTime: undefined,
        Description: undefined,
        Id: undefined,
        Name: undefined,
        ProvisioningArtifactMetadata: undefined
    };
    if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
        contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.ProvisioningArtifactMetadata !== undefined &&
        output.ProvisioningArtifactMetadata !== null) {
        contents.ProvisioningArtifactMetadata = deserializeAws_json1_1ProvisioningArtifactInfo(output.ProvisioningArtifactMetadata, context);
    }
    return contents;
};
const deserializeAws_json1_1ProvisioningArtifactView = (output, context) => {
    let contents = {
        __type: "ProvisioningArtifactView",
        ProductViewSummary: undefined,
        ProvisioningArtifact: undefined
    };
    if (output.ProductViewSummary !== undefined &&
        output.ProductViewSummary !== null) {
        contents.ProductViewSummary = deserializeAws_json1_1ProductViewSummary(output.ProductViewSummary, context);
    }
    if (output.ProvisioningArtifact !== undefined &&
        output.ProvisioningArtifact !== null) {
        contents.ProvisioningArtifact = deserializeAws_json1_1ProvisioningArtifact(output.ProvisioningArtifact, context);
    }
    return contents;
};
const deserializeAws_json1_1ProvisioningArtifactViews = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ProvisioningArtifactView(entry, context));
};
const deserializeAws_json1_1ProvisioningArtifacts = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ProvisioningArtifact(entry, context));
};
const deserializeAws_json1_1RecordDetail = (output, context) => {
    let contents = {
        __type: "RecordDetail",
        CreatedTime: undefined,
        PathId: undefined,
        ProductId: undefined,
        ProvisionedProductId: undefined,
        ProvisionedProductName: undefined,
        ProvisionedProductType: undefined,
        ProvisioningArtifactId: undefined,
        RecordErrors: undefined,
        RecordId: undefined,
        RecordTags: undefined,
        RecordType: undefined,
        Status: undefined,
        UpdatedTime: undefined
    };
    if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
        contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
    }
    if (output.PathId !== undefined && output.PathId !== null) {
        contents.PathId = output.PathId;
    }
    if (output.ProductId !== undefined && output.ProductId !== null) {
        contents.ProductId = output.ProductId;
    }
    if (output.ProvisionedProductId !== undefined &&
        output.ProvisionedProductId !== null) {
        contents.ProvisionedProductId = output.ProvisionedProductId;
    }
    if (output.ProvisionedProductName !== undefined &&
        output.ProvisionedProductName !== null) {
        contents.ProvisionedProductName = output.ProvisionedProductName;
    }
    if (output.ProvisionedProductType !== undefined &&
        output.ProvisionedProductType !== null) {
        contents.ProvisionedProductType = output.ProvisionedProductType;
    }
    if (output.ProvisioningArtifactId !== undefined &&
        output.ProvisioningArtifactId !== null) {
        contents.ProvisioningArtifactId = output.ProvisioningArtifactId;
    }
    if (output.RecordErrors !== undefined && output.RecordErrors !== null) {
        contents.RecordErrors = deserializeAws_json1_1RecordErrors(output.RecordErrors, context);
    }
    if (output.RecordId !== undefined && output.RecordId !== null) {
        contents.RecordId = output.RecordId;
    }
    if (output.RecordTags !== undefined && output.RecordTags !== null) {
        contents.RecordTags = deserializeAws_json1_1RecordTags(output.RecordTags, context);
    }
    if (output.RecordType !== undefined && output.RecordType !== null) {
        contents.RecordType = output.RecordType;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.UpdatedTime !== undefined && output.UpdatedTime !== null) {
        contents.UpdatedTime = new Date(Math.round(output.UpdatedTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1RecordDetails = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RecordDetail(entry, context));
};
const deserializeAws_json1_1RecordError = (output, context) => {
    let contents = {
        __type: "RecordError",
        Code: undefined,
        Description: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    return contents;
};
const deserializeAws_json1_1RecordErrors = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RecordError(entry, context));
};
const deserializeAws_json1_1RecordOutput = (output, context) => {
    let contents = {
        __type: "RecordOutput",
        Description: undefined,
        OutputKey: undefined,
        OutputValue: undefined
    };
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.OutputKey !== undefined && output.OutputKey !== null) {
        contents.OutputKey = output.OutputKey;
    }
    if (output.OutputValue !== undefined && output.OutputValue !== null) {
        contents.OutputValue = output.OutputValue;
    }
    return contents;
};
const deserializeAws_json1_1RecordOutputs = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RecordOutput(entry, context));
};
const deserializeAws_json1_1RecordTag = (output, context) => {
    let contents = {
        __type: "RecordTag",
        Key: undefined,
        Value: undefined
    };
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = output.Key;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1RecordTags = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RecordTag(entry, context));
};
const deserializeAws_json1_1RejectPortfolioShareOutput = (output, context) => {
    let contents = {
        __type: "RejectPortfolioShareOutput"
    };
    return contents;
};
const deserializeAws_json1_1ResourceChange = (output, context) => {
    let contents = {
        __type: "ResourceChange",
        Action: undefined,
        Details: undefined,
        LogicalResourceId: undefined,
        PhysicalResourceId: undefined,
        Replacement: undefined,
        ResourceType: undefined,
        Scope: undefined
    };
    if (output.Action !== undefined && output.Action !== null) {
        contents.Action = output.Action;
    }
    if (output.Details !== undefined && output.Details !== null) {
        contents.Details = deserializeAws_json1_1ResourceChangeDetails(output.Details, context);
    }
    if (output.LogicalResourceId !== undefined &&
        output.LogicalResourceId !== null) {
        contents.LogicalResourceId = output.LogicalResourceId;
    }
    if (output.PhysicalResourceId !== undefined &&
        output.PhysicalResourceId !== null) {
        contents.PhysicalResourceId = output.PhysicalResourceId;
    }
    if (output.Replacement !== undefined && output.Replacement !== null) {
        contents.Replacement = output.Replacement;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    if (output.Scope !== undefined && output.Scope !== null) {
        contents.Scope = deserializeAws_json1_1Scope(output.Scope, context);
    }
    return contents;
};
const deserializeAws_json1_1ResourceChangeDetail = (output, context) => {
    let contents = {
        __type: "ResourceChangeDetail",
        CausingEntity: undefined,
        Evaluation: undefined,
        Target: undefined
    };
    if (output.CausingEntity !== undefined && output.CausingEntity !== null) {
        contents.CausingEntity = output.CausingEntity;
    }
    if (output.Evaluation !== undefined && output.Evaluation !== null) {
        contents.Evaluation = output.Evaluation;
    }
    if (output.Target !== undefined && output.Target !== null) {
        contents.Target = deserializeAws_json1_1ResourceTargetDefinition(output.Target, context);
    }
    return contents;
};
const deserializeAws_json1_1ResourceChangeDetails = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResourceChangeDetail(entry, context));
};
const deserializeAws_json1_1ResourceChanges = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResourceChange(entry, context));
};
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
    let contents = {
        __type: "ResourceInUseException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    let contents = {
        __type: "ResourceNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceTargetDefinition = (output, context) => {
    let contents = {
        __type: "ResourceTargetDefinition",
        Attribute: undefined,
        Name: undefined,
        RequiresRecreation: undefined
    };
    if (output.Attribute !== undefined && output.Attribute !== null) {
        contents.Attribute = output.Attribute;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.RequiresRecreation !== undefined &&
        output.RequiresRecreation !== null) {
        contents.RequiresRecreation = output.RequiresRecreation;
    }
    return contents;
};
const deserializeAws_json1_1ScanProvisionedProductsOutput = (output, context) => {
    let contents = {
        __type: "ScanProvisionedProductsOutput",
        NextPageToken: undefined,
        ProvisionedProducts: undefined
    };
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    if (output.ProvisionedProducts !== undefined &&
        output.ProvisionedProducts !== null) {
        contents.ProvisionedProducts = deserializeAws_json1_1ProvisionedProductDetails(output.ProvisionedProducts, context);
    }
    return contents;
};
const deserializeAws_json1_1Scope = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1SearchProductsAsAdminOutput = (output, context) => {
    let contents = {
        __type: "SearchProductsAsAdminOutput",
        NextPageToken: undefined,
        ProductViewDetails: undefined
    };
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    if (output.ProductViewDetails !== undefined &&
        output.ProductViewDetails !== null) {
        contents.ProductViewDetails = deserializeAws_json1_1ProductViewDetails(output.ProductViewDetails, context);
    }
    return contents;
};
const deserializeAws_json1_1SearchProductsOutput = (output, context) => {
    let contents = {
        __type: "SearchProductsOutput",
        NextPageToken: undefined,
        ProductViewAggregations: undefined,
        ProductViewSummaries: undefined
    };
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    if (output.ProductViewAggregations !== undefined &&
        output.ProductViewAggregations !== null) {
        contents.ProductViewAggregations = deserializeAws_json1_1ProductViewAggregations(output.ProductViewAggregations, context);
    }
    if (output.ProductViewSummaries !== undefined &&
        output.ProductViewSummaries !== null) {
        contents.ProductViewSummaries = deserializeAws_json1_1ProductViewSummaries(output.ProductViewSummaries, context);
    }
    return contents;
};
const deserializeAws_json1_1SearchProvisionedProductsOutput = (output, context) => {
    let contents = {
        __type: "SearchProvisionedProductsOutput",
        NextPageToken: undefined,
        ProvisionedProducts: undefined,
        TotalResultsCount: undefined
    };
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    if (output.ProvisionedProducts !== undefined &&
        output.ProvisionedProducts !== null) {
        contents.ProvisionedProducts = deserializeAws_json1_1ProvisionedProductAttributes(output.ProvisionedProducts, context);
    }
    if (output.TotalResultsCount !== undefined &&
        output.TotalResultsCount !== null) {
        contents.TotalResultsCount = output.TotalResultsCount;
    }
    return contents;
};
const deserializeAws_json1_1ServiceActionDefinitionMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1ServiceActionDetail = (output, context) => {
    let contents = {
        __type: "ServiceActionDetail",
        Definition: undefined,
        ServiceActionSummary: undefined
    };
    if (output.Definition !== undefined && output.Definition !== null) {
        contents.Definition = deserializeAws_json1_1ServiceActionDefinitionMap(output.Definition, context);
    }
    if (output.ServiceActionSummary !== undefined &&
        output.ServiceActionSummary !== null) {
        contents.ServiceActionSummary = deserializeAws_json1_1ServiceActionSummary(output.ServiceActionSummary, context);
    }
    return contents;
};
const deserializeAws_json1_1ServiceActionSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ServiceActionSummary(entry, context));
};
const deserializeAws_json1_1ServiceActionSummary = (output, context) => {
    let contents = {
        __type: "ServiceActionSummary",
        DefinitionType: undefined,
        Description: undefined,
        Id: undefined,
        Name: undefined
    };
    if (output.DefinitionType !== undefined && output.DefinitionType !== null) {
        contents.DefinitionType = output.DefinitionType;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1ShareDetails = (output, context) => {
    let contents = {
        __type: "ShareDetails",
        ShareErrors: undefined,
        SuccessfulShares: undefined
    };
    if (output.ShareErrors !== undefined && output.ShareErrors !== null) {
        contents.ShareErrors = deserializeAws_json1_1ShareErrors(output.ShareErrors, context);
    }
    if (output.SuccessfulShares !== undefined &&
        output.SuccessfulShares !== null) {
        contents.SuccessfulShares = deserializeAws_json1_1SuccessfulShares(output.SuccessfulShares, context);
    }
    return contents;
};
const deserializeAws_json1_1ShareError = (output, context) => {
    let contents = {
        __type: "ShareError",
        Accounts: undefined,
        Error: undefined,
        Message: undefined
    };
    if (output.Accounts !== undefined && output.Accounts !== null) {
        contents.Accounts = deserializeAws_json1_1Namespaces(output.Accounts, context);
    }
    if (output.Error !== undefined && output.Error !== null) {
        contents.Error = output.Error;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ShareErrors = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ShareError(entry, context));
};
const deserializeAws_json1_1StackInstance = (output, context) => {
    let contents = {
        __type: "StackInstance",
        Account: undefined,
        Region: undefined,
        StackInstanceStatus: undefined
    };
    if (output.Account !== undefined && output.Account !== null) {
        contents.Account = output.Account;
    }
    if (output.Region !== undefined && output.Region !== null) {
        contents.Region = output.Region;
    }
    if (output.StackInstanceStatus !== undefined &&
        output.StackInstanceStatus !== null) {
        contents.StackInstanceStatus = output.StackInstanceStatus;
    }
    return contents;
};
const deserializeAws_json1_1StackInstances = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1StackInstance(entry, context));
};
const deserializeAws_json1_1StackSetAccounts = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1StackSetRegions = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1SuccessfulShares = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Tag = (output, context) => {
    let contents = {
        __type: "Tag",
        Key: undefined,
        Value: undefined
    };
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = output.Key;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1TagOptionNotMigratedException = (output, context) => {
    let contents = {
        __type: "TagOptionNotMigratedException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1TagOptionSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TagOptionSummary(entry, context));
};
const deserializeAws_json1_1TagOptionSummary = (output, context) => {
    let contents = {
        __type: "TagOptionSummary",
        Key: undefined,
        Values: undefined
    };
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = output.Key;
    }
    if (output.Values !== undefined && output.Values !== null) {
        contents.Values = deserializeAws_json1_1TagOptionValues(output.Values, context);
    }
    return contents;
};
const deserializeAws_json1_1Tags = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1TerminateProvisionedProductOutput = (output, context) => {
    let contents = {
        __type: "TerminateProvisionedProductOutput",
        RecordDetail: undefined
    };
    if (output.RecordDetail !== undefined && output.RecordDetail !== null) {
        contents.RecordDetail = deserializeAws_json1_1RecordDetail(output.RecordDetail, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateConstraintOutput = (output, context) => {
    let contents = {
        __type: "UpdateConstraintOutput",
        ConstraintDetail: undefined,
        ConstraintParameters: undefined,
        Status: undefined
    };
    if (output.ConstraintDetail !== undefined &&
        output.ConstraintDetail !== null) {
        contents.ConstraintDetail = deserializeAws_json1_1ConstraintDetail(output.ConstraintDetail, context);
    }
    if (output.ConstraintParameters !== undefined &&
        output.ConstraintParameters !== null) {
        contents.ConstraintParameters = output.ConstraintParameters;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1UpdatePortfolioOutput = (output, context) => {
    let contents = {
        __type: "UpdatePortfolioOutput",
        PortfolioDetail: undefined,
        Tags: undefined
    };
    if (output.PortfolioDetail !== undefined && output.PortfolioDetail !== null) {
        contents.PortfolioDetail = deserializeAws_json1_1PortfolioDetail(output.PortfolioDetail, context);
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateProductOutput = (output, context) => {
    let contents = {
        __type: "UpdateProductOutput",
        ProductViewDetail: undefined,
        Tags: undefined
    };
    if (output.ProductViewDetail !== undefined &&
        output.ProductViewDetail !== null) {
        contents.ProductViewDetail = deserializeAws_json1_1ProductViewDetail(output.ProductViewDetail, context);
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateProvisionedProductOutput = (output, context) => {
    let contents = {
        __type: "UpdateProvisionedProductOutput",
        RecordDetail: undefined
    };
    if (output.RecordDetail !== undefined && output.RecordDetail !== null) {
        contents.RecordDetail = deserializeAws_json1_1RecordDetail(output.RecordDetail, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateProvisionedProductPropertiesOutput = (output, context) => {
    let contents = {
        __type: "UpdateProvisionedProductPropertiesOutput",
        ProvisionedProductId: undefined,
        ProvisionedProductProperties: undefined,
        RecordId: undefined,
        Status: undefined
    };
    if (output.ProvisionedProductId !== undefined &&
        output.ProvisionedProductId !== null) {
        contents.ProvisionedProductId = output.ProvisionedProductId;
    }
    if (output.ProvisionedProductProperties !== undefined &&
        output.ProvisionedProductProperties !== null) {
        contents.ProvisionedProductProperties = deserializeAws_json1_1ProvisionedProductProperties(output.ProvisionedProductProperties, context);
    }
    if (output.RecordId !== undefined && output.RecordId !== null) {
        contents.RecordId = output.RecordId;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1UpdateProvisioningArtifactOutput = (output, context) => {
    let contents = {
        __type: "UpdateProvisioningArtifactOutput",
        Info: undefined,
        ProvisioningArtifactDetail: undefined,
        Status: undefined
    };
    if (output.Info !== undefined && output.Info !== null) {
        contents.Info = deserializeAws_json1_1ProvisioningArtifactInfo(output.Info, context);
    }
    if (output.ProvisioningArtifactDetail !== undefined &&
        output.ProvisioningArtifactDetail !== null) {
        contents.ProvisioningArtifactDetail = deserializeAws_json1_1ProvisioningArtifactDetail(output.ProvisioningArtifactDetail, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1UpdateProvisioningParameter = (output, context) => {
    let contents = {
        __type: "UpdateProvisioningParameter",
        Key: undefined,
        UsePreviousValue: undefined,
        Value: undefined
    };
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = output.Key;
    }
    if (output.UsePreviousValue !== undefined &&
        output.UsePreviousValue !== null) {
        contents.UsePreviousValue = output.UsePreviousValue;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1UpdateProvisioningParameters = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1UpdateProvisioningParameter(entry, context));
};
const deserializeAws_json1_1UpdateServiceActionOutput = (output, context) => {
    let contents = {
        __type: "UpdateServiceActionOutput",
        ServiceActionDetail: undefined
    };
    if (output.ServiceActionDetail !== undefined &&
        output.ServiceActionDetail !== null) {
        contents.ServiceActionDetail = deserializeAws_json1_1ServiceActionDetail(output.ServiceActionDetail, context);
    }
    return contents;
};
const deserializeAws_json1_1UsageInstruction = (output, context) => {
    let contents = {
        __type: "UsageInstruction",
        Type: undefined,
        Value: undefined
    };
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1UsageInstructions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1UsageInstruction(entry, context));
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    httpHeaders: output.headers,
    requestId: output.headers["x-amzn-requestid"]
});
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody, context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return (context.streamCollector(streamBody) || Promise.resolve(new Uint8Array()));
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) => {
    return collectBody(streamBody, context).then(body => context.utf8Encoder(body));
};
const buildHttpRpcRequest = (context, headers, path, resolvedHostname, body) => {
    const contents = Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", path: path, headers: headers });
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
const parseBody = (streamBody, context) => {
    return collectBodyString(streamBody, context).then(encoded => {
        if (encoded.length) {
            return JSON.parse(encoded);
        }
        return {};
    });
};
//# sourceMappingURL=Aws_json1_1.js.map