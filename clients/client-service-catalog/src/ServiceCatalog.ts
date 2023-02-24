// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { ServiceCatalogClient } from "./ServiceCatalogClient";

/**
 * <fullname>Service Catalog</fullname>
 *          <p>
 *             <a href="http://aws.amazon.com/servicecatalog">Service Catalog</a> enables
 *          organizations to create and manage catalogs of IT services that are approved for Amazon Web Services. To
 *          get the most out of this documentation, you should be familiar with the terminology
 *          discussed in <a href="http://docs.aws.amazon.com/servicecatalog/latest/adminguide/what-is_concepts.html">Service Catalog
 *          Concepts</a>.</p>
 */
export class ServiceCatalog extends ServiceCatalogClient {
  /**
   * <p>Accepts an offer to share the specified portfolio.</p>
   */
  public acceptPortfolioShare(
    args: AcceptPortfolioShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptPortfolioShareCommandOutput>;
  public acceptPortfolioShare(
    args: AcceptPortfolioShareCommandInput,
    cb: (err: any, data?: AcceptPortfolioShareCommandOutput) => void
  ): void;
  public acceptPortfolioShare(
    args: AcceptPortfolioShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptPortfolioShareCommandOutput) => void
  ): void;
  public acceptPortfolioShare(
    args: AcceptPortfolioShareCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AcceptPortfolioShareCommandOutput) => void),
    cb?: (err: any, data?: AcceptPortfolioShareCommandOutput) => void
  ): Promise<AcceptPortfolioShareCommandOutput> | void {
    const command = new AcceptPortfolioShareCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates the specified budget with the specified resource.</p>
   */
  public associateBudgetWithResource(
    args: AssociateBudgetWithResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateBudgetWithResourceCommandOutput>;
  public associateBudgetWithResource(
    args: AssociateBudgetWithResourceCommandInput,
    cb: (err: any, data?: AssociateBudgetWithResourceCommandOutput) => void
  ): void;
  public associateBudgetWithResource(
    args: AssociateBudgetWithResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateBudgetWithResourceCommandOutput) => void
  ): void;
  public associateBudgetWithResource(
    args: AssociateBudgetWithResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateBudgetWithResourceCommandOutput) => void),
    cb?: (err: any, data?: AssociateBudgetWithResourceCommandOutput) => void
  ): Promise<AssociateBudgetWithResourceCommandOutput> | void {
    const command = new AssociateBudgetWithResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates the specified principal ARN with the specified portfolio.</p>
   *          <p>If you share the portfolio with principal name sharing enabled, the <code>PrincipalARN</code> association is
   *          included in the share. </p>
   *          <p>The <code>PortfolioID</code>, <code>PrincipalARN</code>, and <code>PrincipalType</code> parameters are
   *       required. </p>
   *          <p>You can associate a maximum of 10 Principals with a portfolio using <code>PrincipalType</code> as <code>IAM_PATTERN</code>
   *          </p>
   *
   *          <note>
   *             <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is
   *          then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin,
   *          but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal
   *          name association for the portfolio. Although this user may not know which principal names are associated through
   *          Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then
   *          Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration,
   *          the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p>
   *          </note>
   */
  public associatePrincipalWithPortfolio(
    args: AssociatePrincipalWithPortfolioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociatePrincipalWithPortfolioCommandOutput>;
  public associatePrincipalWithPortfolio(
    args: AssociatePrincipalWithPortfolioCommandInput,
    cb: (err: any, data?: AssociatePrincipalWithPortfolioCommandOutput) => void
  ): void;
  public associatePrincipalWithPortfolio(
    args: AssociatePrincipalWithPortfolioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociatePrincipalWithPortfolioCommandOutput) => void
  ): void;
  public associatePrincipalWithPortfolio(
    args: AssociatePrincipalWithPortfolioCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociatePrincipalWithPortfolioCommandOutput) => void),
    cb?: (err: any, data?: AssociatePrincipalWithPortfolioCommandOutput) => void
  ): Promise<AssociatePrincipalWithPortfolioCommandOutput> | void {
    const command = new AssociatePrincipalWithPortfolioCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates the specified product with the specified portfolio.</p>
   *          <p>A delegated admin is authorized to invoke this command.</p>
   */
  public associateProductWithPortfolio(
    args: AssociateProductWithPortfolioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateProductWithPortfolioCommandOutput>;
  public associateProductWithPortfolio(
    args: AssociateProductWithPortfolioCommandInput,
    cb: (err: any, data?: AssociateProductWithPortfolioCommandOutput) => void
  ): void;
  public associateProductWithPortfolio(
    args: AssociateProductWithPortfolioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateProductWithPortfolioCommandOutput) => void
  ): void;
  public associateProductWithPortfolio(
    args: AssociateProductWithPortfolioCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateProductWithPortfolioCommandOutput) => void),
    cb?: (err: any, data?: AssociateProductWithPortfolioCommandOutput) => void
  ): Promise<AssociateProductWithPortfolioCommandOutput> | void {
    const command = new AssociateProductWithPortfolioCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a self-service action with a provisioning artifact.</p>
   */
  public associateServiceActionWithProvisioningArtifact(
    args: AssociateServiceActionWithProvisioningArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateServiceActionWithProvisioningArtifactCommandOutput>;
  public associateServiceActionWithProvisioningArtifact(
    args: AssociateServiceActionWithProvisioningArtifactCommandInput,
    cb: (err: any, data?: AssociateServiceActionWithProvisioningArtifactCommandOutput) => void
  ): void;
  public associateServiceActionWithProvisioningArtifact(
    args: AssociateServiceActionWithProvisioningArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateServiceActionWithProvisioningArtifactCommandOutput) => void
  ): void;
  public associateServiceActionWithProvisioningArtifact(
    args: AssociateServiceActionWithProvisioningArtifactCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AssociateServiceActionWithProvisioningArtifactCommandOutput) => void),
    cb?: (err: any, data?: AssociateServiceActionWithProvisioningArtifactCommandOutput) => void
  ): Promise<AssociateServiceActionWithProvisioningArtifactCommandOutput> | void {
    const command = new AssociateServiceActionWithProvisioningArtifactCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associate the specified TagOption with the specified portfolio or product.</p>
   */
  public associateTagOptionWithResource(
    args: AssociateTagOptionWithResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateTagOptionWithResourceCommandOutput>;
  public associateTagOptionWithResource(
    args: AssociateTagOptionWithResourceCommandInput,
    cb: (err: any, data?: AssociateTagOptionWithResourceCommandOutput) => void
  ): void;
  public associateTagOptionWithResource(
    args: AssociateTagOptionWithResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateTagOptionWithResourceCommandOutput) => void
  ): void;
  public associateTagOptionWithResource(
    args: AssociateTagOptionWithResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateTagOptionWithResourceCommandOutput) => void),
    cb?: (err: any, data?: AssociateTagOptionWithResourceCommandOutput) => void
  ): Promise<AssociateTagOptionWithResourceCommandOutput> | void {
    const command = new AssociateTagOptionWithResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates multiple self-service actions with provisioning artifacts.</p>
   */
  public batchAssociateServiceActionWithProvisioningArtifact(
    args: BatchAssociateServiceActionWithProvisioningArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchAssociateServiceActionWithProvisioningArtifactCommandOutput>;
  public batchAssociateServiceActionWithProvisioningArtifact(
    args: BatchAssociateServiceActionWithProvisioningArtifactCommandInput,
    cb: (err: any, data?: BatchAssociateServiceActionWithProvisioningArtifactCommandOutput) => void
  ): void;
  public batchAssociateServiceActionWithProvisioningArtifact(
    args: BatchAssociateServiceActionWithProvisioningArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchAssociateServiceActionWithProvisioningArtifactCommandOutput) => void
  ): void;
  public batchAssociateServiceActionWithProvisioningArtifact(
    args: BatchAssociateServiceActionWithProvisioningArtifactCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchAssociateServiceActionWithProvisioningArtifactCommandOutput) => void),
    cb?: (err: any, data?: BatchAssociateServiceActionWithProvisioningArtifactCommandOutput) => void
  ): Promise<BatchAssociateServiceActionWithProvisioningArtifactCommandOutput> | void {
    const command = new BatchAssociateServiceActionWithProvisioningArtifactCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates a batch of self-service actions from the specified provisioning artifact.</p>
   */
  public batchDisassociateServiceActionFromProvisioningArtifact(
    args: BatchDisassociateServiceActionFromProvisioningArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput>;
  public batchDisassociateServiceActionFromProvisioningArtifact(
    args: BatchDisassociateServiceActionFromProvisioningArtifactCommandInput,
    cb: (err: any, data?: BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput) => void
  ): void;
  public batchDisassociateServiceActionFromProvisioningArtifact(
    args: BatchDisassociateServiceActionFromProvisioningArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput) => void
  ): void;
  public batchDisassociateServiceActionFromProvisioningArtifact(
    args: BatchDisassociateServiceActionFromProvisioningArtifactCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput) => void),
    cb?: (err: any, data?: BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput) => void
  ): Promise<BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput> | void {
    const command = new BatchDisassociateServiceActionFromProvisioningArtifactCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Copies the specified source product to the specified target product or a new
   *          product.</p>
   *          <p>You can copy a product to the same account or another account. You can copy a product
   *          to the same Region or another Region. If you copy a product to another account, you must
   *          first share the product in a portfolio using <a>CreatePortfolioShare</a>.</p>
   *          <p>This operation is performed asynchronously. To track the progress of the
   *          operation, use <a>DescribeCopyProductStatus</a>.</p>
   */
  public copyProduct(args: CopyProductCommandInput, options?: __HttpHandlerOptions): Promise<CopyProductCommandOutput>;
  public copyProduct(args: CopyProductCommandInput, cb: (err: any, data?: CopyProductCommandOutput) => void): void;
  public copyProduct(
    args: CopyProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyProductCommandOutput) => void
  ): void;
  public copyProduct(
    args: CopyProductCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CopyProductCommandOutput) => void),
    cb?: (err: any, data?: CopyProductCommandOutput) => void
  ): Promise<CopyProductCommandOutput> | void {
    const command = new CopyProductCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a constraint.</p>
   *          <p>A delegated admin is authorized to invoke this command.</p>
   */
  public createConstraint(
    args: CreateConstraintCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConstraintCommandOutput>;
  public createConstraint(
    args: CreateConstraintCommandInput,
    cb: (err: any, data?: CreateConstraintCommandOutput) => void
  ): void;
  public createConstraint(
    args: CreateConstraintCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConstraintCommandOutput) => void
  ): void;
  public createConstraint(
    args: CreateConstraintCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateConstraintCommandOutput) => void),
    cb?: (err: any, data?: CreateConstraintCommandOutput) => void
  ): Promise<CreateConstraintCommandOutput> | void {
    const command = new CreateConstraintCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a portfolio.</p>
   *          <p>A delegated admin is authorized to invoke this command.</p>
   */
  public createPortfolio(
    args: CreatePortfolioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePortfolioCommandOutput>;
  public createPortfolio(
    args: CreatePortfolioCommandInput,
    cb: (err: any, data?: CreatePortfolioCommandOutput) => void
  ): void;
  public createPortfolio(
    args: CreatePortfolioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePortfolioCommandOutput) => void
  ): void;
  public createPortfolio(
    args: CreatePortfolioCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePortfolioCommandOutput) => void),
    cb?: (err: any, data?: CreatePortfolioCommandOutput) => void
  ): Promise<CreatePortfolioCommandOutput> | void {
    const command = new CreatePortfolioCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Shares the specified portfolio with the specified account or organization node.
   *          Shares to an organization node can only be created by the management account of an
   *          organization or by a delegated administrator. You can share portfolios to an organization,
   *          an organizational unit, or a specific account.</p>
   *          <p>Note that if a delegated admin is de-registered, they can no longer create portfolio shares.</p>
   *         <p>
   *             <code>AWSOrganizationsAccess</code> must be enabled in order to create a portfolio share to an organization node.</p>
   *          <p>You can't share a shared resource, including portfolios that contain a shared product.</p>
   *          <p>If the portfolio share with the specified account or organization node already exists, this action will have no effect
   *          and will not return an error. To update an existing share, you must use the <code> UpdatePortfolioShare</code> API instead. </p>
   *
   *          <note>
   *             <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is
   *          then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin,
   *          but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal
   *          name association for the portfolio. Although this user may not know which principal names are associated through
   *          Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then
   *          Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration,
   *          the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p>
   *          </note>
   */
  public createPortfolioShare(
    args: CreatePortfolioShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePortfolioShareCommandOutput>;
  public createPortfolioShare(
    args: CreatePortfolioShareCommandInput,
    cb: (err: any, data?: CreatePortfolioShareCommandOutput) => void
  ): void;
  public createPortfolioShare(
    args: CreatePortfolioShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePortfolioShareCommandOutput) => void
  ): void;
  public createPortfolioShare(
    args: CreatePortfolioShareCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePortfolioShareCommandOutput) => void),
    cb?: (err: any, data?: CreatePortfolioShareCommandOutput) => void
  ): Promise<CreatePortfolioShareCommandOutput> | void {
    const command = new CreatePortfolioShareCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a product.</p>
   *          <p>A delegated admin is authorized to invoke this command.</p>
   *
   *          <p>The user or role that performs this operation must have the
   *             <code>cloudformation:GetTemplate</code> IAM policy permission. This policy permission is
   *          required when using the <code>ImportFromPhysicalId</code> template source in the
   *          information data section.</p>
   */
  public createProduct(
    args: CreateProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProductCommandOutput>;
  public createProduct(
    args: CreateProductCommandInput,
    cb: (err: any, data?: CreateProductCommandOutput) => void
  ): void;
  public createProduct(
    args: CreateProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProductCommandOutput) => void
  ): void;
  public createProduct(
    args: CreateProductCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateProductCommandOutput) => void),
    cb?: (err: any, data?: CreateProductCommandOutput) => void
  ): Promise<CreateProductCommandOutput> | void {
    const command = new CreateProductCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a plan.</p>
   *          <p>A plan includes the list of resources to be
   *          created (when provisioning a new product) or modified (when updating a provisioned product)
   *          when the plan is executed.</p>
   *          <p>You can create one plan for each provisioned product. To create a plan for an existing
   *          provisioned product, the product status must be AVAILABLE or TAINTED.</p>
   *          <p>To view the resource changes in the change set, use <a>DescribeProvisionedProductPlan</a>.
   *          To create or modify the provisioned product, use <a>ExecuteProvisionedProductPlan</a>.</p>
   */
  public createProvisionedProductPlan(
    args: CreateProvisionedProductPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProvisionedProductPlanCommandOutput>;
  public createProvisionedProductPlan(
    args: CreateProvisionedProductPlanCommandInput,
    cb: (err: any, data?: CreateProvisionedProductPlanCommandOutput) => void
  ): void;
  public createProvisionedProductPlan(
    args: CreateProvisionedProductPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProvisionedProductPlanCommandOutput) => void
  ): void;
  public createProvisionedProductPlan(
    args: CreateProvisionedProductPlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateProvisionedProductPlanCommandOutput) => void),
    cb?: (err: any, data?: CreateProvisionedProductPlanCommandOutput) => void
  ): Promise<CreateProvisionedProductPlanCommandOutput> | void {
    const command = new CreateProvisionedProductPlanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a provisioning artifact (also known as a version) for the specified product.</p>
   *          <p>You cannot create a provisioning artifact for a product that was shared with you.</p>
   *
   *          <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code>
   *          IAM policy permission. This policy permission is required when using the
   *          <code>ImportFromPhysicalId</code> template source in the information data section.</p>
   */
  public createProvisioningArtifact(
    args: CreateProvisioningArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProvisioningArtifactCommandOutput>;
  public createProvisioningArtifact(
    args: CreateProvisioningArtifactCommandInput,
    cb: (err: any, data?: CreateProvisioningArtifactCommandOutput) => void
  ): void;
  public createProvisioningArtifact(
    args: CreateProvisioningArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProvisioningArtifactCommandOutput) => void
  ): void;
  public createProvisioningArtifact(
    args: CreateProvisioningArtifactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateProvisioningArtifactCommandOutput) => void),
    cb?: (err: any, data?: CreateProvisioningArtifactCommandOutput) => void
  ): Promise<CreateProvisioningArtifactCommandOutput> | void {
    const command = new CreateProvisioningArtifactCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a self-service action.</p>
   */
  public createServiceAction(
    args: CreateServiceActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceActionCommandOutput>;
  public createServiceAction(
    args: CreateServiceActionCommandInput,
    cb: (err: any, data?: CreateServiceActionCommandOutput) => void
  ): void;
  public createServiceAction(
    args: CreateServiceActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceActionCommandOutput) => void
  ): void;
  public createServiceAction(
    args: CreateServiceActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateServiceActionCommandOutput) => void),
    cb?: (err: any, data?: CreateServiceActionCommandOutput) => void
  ): Promise<CreateServiceActionCommandOutput> | void {
    const command = new CreateServiceActionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a TagOption.</p>
   */
  public createTagOption(
    args: CreateTagOptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTagOptionCommandOutput>;
  public createTagOption(
    args: CreateTagOptionCommandInput,
    cb: (err: any, data?: CreateTagOptionCommandOutput) => void
  ): void;
  public createTagOption(
    args: CreateTagOptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTagOptionCommandOutput) => void
  ): void;
  public createTagOption(
    args: CreateTagOptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTagOptionCommandOutput) => void),
    cb?: (err: any, data?: CreateTagOptionCommandOutput) => void
  ): Promise<CreateTagOptionCommandOutput> | void {
    const command = new CreateTagOptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified constraint.</p>
   *          <p>A delegated admin is authorized to invoke this command.</p>
   */
  public deleteConstraint(
    args: DeleteConstraintCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConstraintCommandOutput>;
  public deleteConstraint(
    args: DeleteConstraintCommandInput,
    cb: (err: any, data?: DeleteConstraintCommandOutput) => void
  ): void;
  public deleteConstraint(
    args: DeleteConstraintCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConstraintCommandOutput) => void
  ): void;
  public deleteConstraint(
    args: DeleteConstraintCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConstraintCommandOutput) => void),
    cb?: (err: any, data?: DeleteConstraintCommandOutput) => void
  ): Promise<DeleteConstraintCommandOutput> | void {
    const command = new DeleteConstraintCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified portfolio.</p>
   *          <p>You cannot delete a portfolio if it was shared with you or if it has associated
   *          products, users, constraints, or shared accounts.</p>
   *          <p>A delegated admin is authorized to invoke this command.</p>
   */
  public deletePortfolio(
    args: DeletePortfolioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePortfolioCommandOutput>;
  public deletePortfolio(
    args: DeletePortfolioCommandInput,
    cb: (err: any, data?: DeletePortfolioCommandOutput) => void
  ): void;
  public deletePortfolio(
    args: DeletePortfolioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePortfolioCommandOutput) => void
  ): void;
  public deletePortfolio(
    args: DeletePortfolioCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePortfolioCommandOutput) => void),
    cb?: (err: any, data?: DeletePortfolioCommandOutput) => void
  ): Promise<DeletePortfolioCommandOutput> | void {
    const command = new DeletePortfolioCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops sharing the specified portfolio with the specified account or organization
   *          node. Shares to an organization node can only be deleted by the management account of an
   *          organization or by a delegated administrator.</p>
   *          <p>Note that if a delegated admin is de-registered, portfolio shares created from that account are removed.</p>
   */
  public deletePortfolioShare(
    args: DeletePortfolioShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePortfolioShareCommandOutput>;
  public deletePortfolioShare(
    args: DeletePortfolioShareCommandInput,
    cb: (err: any, data?: DeletePortfolioShareCommandOutput) => void
  ): void;
  public deletePortfolioShare(
    args: DeletePortfolioShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePortfolioShareCommandOutput) => void
  ): void;
  public deletePortfolioShare(
    args: DeletePortfolioShareCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePortfolioShareCommandOutput) => void),
    cb?: (err: any, data?: DeletePortfolioShareCommandOutput) => void
  ): Promise<DeletePortfolioShareCommandOutput> | void {
    const command = new DeletePortfolioShareCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified product.</p>
   *          <p>You cannot delete a product if it was shared with you or is associated with a portfolio.</p>
   *          <p>A delegated admin is authorized to invoke this command.</p>
   */
  public deleteProduct(
    args: DeleteProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProductCommandOutput>;
  public deleteProduct(
    args: DeleteProductCommandInput,
    cb: (err: any, data?: DeleteProductCommandOutput) => void
  ): void;
  public deleteProduct(
    args: DeleteProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProductCommandOutput) => void
  ): void;
  public deleteProduct(
    args: DeleteProductCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteProductCommandOutput) => void),
    cb?: (err: any, data?: DeleteProductCommandOutput) => void
  ): Promise<DeleteProductCommandOutput> | void {
    const command = new DeleteProductCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified plan.</p>
   */
  public deleteProvisionedProductPlan(
    args: DeleteProvisionedProductPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProvisionedProductPlanCommandOutput>;
  public deleteProvisionedProductPlan(
    args: DeleteProvisionedProductPlanCommandInput,
    cb: (err: any, data?: DeleteProvisionedProductPlanCommandOutput) => void
  ): void;
  public deleteProvisionedProductPlan(
    args: DeleteProvisionedProductPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProvisionedProductPlanCommandOutput) => void
  ): void;
  public deleteProvisionedProductPlan(
    args: DeleteProvisionedProductPlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteProvisionedProductPlanCommandOutput) => void),
    cb?: (err: any, data?: DeleteProvisionedProductPlanCommandOutput) => void
  ): Promise<DeleteProvisionedProductPlanCommandOutput> | void {
    const command = new DeleteProvisionedProductPlanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified provisioning artifact (also known as a version) for the specified product.</p>
   *          <p>You cannot delete a provisioning artifact associated with a product that was shared with you.
   *          You cannot delete the last provisioning artifact for a product, because a product must have at
   *          least one provisioning artifact.</p>
   */
  public deleteProvisioningArtifact(
    args: DeleteProvisioningArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProvisioningArtifactCommandOutput>;
  public deleteProvisioningArtifact(
    args: DeleteProvisioningArtifactCommandInput,
    cb: (err: any, data?: DeleteProvisioningArtifactCommandOutput) => void
  ): void;
  public deleteProvisioningArtifact(
    args: DeleteProvisioningArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProvisioningArtifactCommandOutput) => void
  ): void;
  public deleteProvisioningArtifact(
    args: DeleteProvisioningArtifactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteProvisioningArtifactCommandOutput) => void),
    cb?: (err: any, data?: DeleteProvisioningArtifactCommandOutput) => void
  ): Promise<DeleteProvisioningArtifactCommandOutput> | void {
    const command = new DeleteProvisioningArtifactCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a self-service action.</p>
   */
  public deleteServiceAction(
    args: DeleteServiceActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceActionCommandOutput>;
  public deleteServiceAction(
    args: DeleteServiceActionCommandInput,
    cb: (err: any, data?: DeleteServiceActionCommandOutput) => void
  ): void;
  public deleteServiceAction(
    args: DeleteServiceActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceActionCommandOutput) => void
  ): void;
  public deleteServiceAction(
    args: DeleteServiceActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteServiceActionCommandOutput) => void),
    cb?: (err: any, data?: DeleteServiceActionCommandOutput) => void
  ): Promise<DeleteServiceActionCommandOutput> | void {
    const command = new DeleteServiceActionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified TagOption.</p>
   *          <p>You cannot delete a TagOption if it is associated with a product or portfolio.</p>
   */
  public deleteTagOption(
    args: DeleteTagOptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTagOptionCommandOutput>;
  public deleteTagOption(
    args: DeleteTagOptionCommandInput,
    cb: (err: any, data?: DeleteTagOptionCommandOutput) => void
  ): void;
  public deleteTagOption(
    args: DeleteTagOptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTagOptionCommandOutput) => void
  ): void;
  public deleteTagOption(
    args: DeleteTagOptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTagOptionCommandOutput) => void),
    cb?: (err: any, data?: DeleteTagOptionCommandOutput) => void
  ): Promise<DeleteTagOptionCommandOutput> | void {
    const command = new DeleteTagOptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the specified constraint.</p>
   */
  public describeConstraint(
    args: DescribeConstraintCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConstraintCommandOutput>;
  public describeConstraint(
    args: DescribeConstraintCommandInput,
    cb: (err: any, data?: DescribeConstraintCommandOutput) => void
  ): void;
  public describeConstraint(
    args: DescribeConstraintCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConstraintCommandOutput) => void
  ): void;
  public describeConstraint(
    args: DescribeConstraintCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeConstraintCommandOutput) => void),
    cb?: (err: any, data?: DescribeConstraintCommandOutput) => void
  ): Promise<DescribeConstraintCommandOutput> | void {
    const command = new DescribeConstraintCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the status of the specified copy product operation.</p>
   */
  public describeCopyProductStatus(
    args: DescribeCopyProductStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCopyProductStatusCommandOutput>;
  public describeCopyProductStatus(
    args: DescribeCopyProductStatusCommandInput,
    cb: (err: any, data?: DescribeCopyProductStatusCommandOutput) => void
  ): void;
  public describeCopyProductStatus(
    args: DescribeCopyProductStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCopyProductStatusCommandOutput) => void
  ): void;
  public describeCopyProductStatus(
    args: DescribeCopyProductStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCopyProductStatusCommandOutput) => void),
    cb?: (err: any, data?: DescribeCopyProductStatusCommandOutput) => void
  ): Promise<DescribeCopyProductStatusCommandOutput> | void {
    const command = new DescribeCopyProductStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the specified portfolio.</p>
   *          <p>A delegated admin is authorized to invoke this command.</p>
   */
  public describePortfolio(
    args: DescribePortfolioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePortfolioCommandOutput>;
  public describePortfolio(
    args: DescribePortfolioCommandInput,
    cb: (err: any, data?: DescribePortfolioCommandOutput) => void
  ): void;
  public describePortfolio(
    args: DescribePortfolioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePortfolioCommandOutput) => void
  ): void;
  public describePortfolio(
    args: DescribePortfolioCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePortfolioCommandOutput) => void),
    cb?: (err: any, data?: DescribePortfolioCommandOutput) => void
  ): Promise<DescribePortfolioCommandOutput> | void {
    const command = new DescribePortfolioCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a summary of each of the portfolio shares that were created for the specified portfolio.</p>
   *          <p>You can use this API to determine which accounts or organizational nodes this
   *          portfolio have been shared, whether the recipient entity has imported the share, and
   *          whether TagOptions are included with the share.</p>
   *          <p>The <code>PortfolioId</code> and <code>Type</code> parameters are both required.</p>
   */
  public describePortfolioShares(
    args: DescribePortfolioSharesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePortfolioSharesCommandOutput>;
  public describePortfolioShares(
    args: DescribePortfolioSharesCommandInput,
    cb: (err: any, data?: DescribePortfolioSharesCommandOutput) => void
  ): void;
  public describePortfolioShares(
    args: DescribePortfolioSharesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePortfolioSharesCommandOutput) => void
  ): void;
  public describePortfolioShares(
    args: DescribePortfolioSharesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePortfolioSharesCommandOutput) => void),
    cb?: (err: any, data?: DescribePortfolioSharesCommandOutput) => void
  ): Promise<DescribePortfolioSharesCommandOutput> | void {
    const command = new DescribePortfolioSharesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the status of the specified portfolio share operation. This API can only be called
   *          by the management account in the organization or by a delegated admin.</p>
   */
  public describePortfolioShareStatus(
    args: DescribePortfolioShareStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePortfolioShareStatusCommandOutput>;
  public describePortfolioShareStatus(
    args: DescribePortfolioShareStatusCommandInput,
    cb: (err: any, data?: DescribePortfolioShareStatusCommandOutput) => void
  ): void;
  public describePortfolioShareStatus(
    args: DescribePortfolioShareStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePortfolioShareStatusCommandOutput) => void
  ): void;
  public describePortfolioShareStatus(
    args: DescribePortfolioShareStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePortfolioShareStatusCommandOutput) => void),
    cb?: (err: any, data?: DescribePortfolioShareStatusCommandOutput) => void
  ): Promise<DescribePortfolioShareStatusCommandOutput> | void {
    const command = new DescribePortfolioShareStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the specified product.</p>
   */
  public describeProduct(
    args: DescribeProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProductCommandOutput>;
  public describeProduct(
    args: DescribeProductCommandInput,
    cb: (err: any, data?: DescribeProductCommandOutput) => void
  ): void;
  public describeProduct(
    args: DescribeProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProductCommandOutput) => void
  ): void;
  public describeProduct(
    args: DescribeProductCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeProductCommandOutput) => void),
    cb?: (err: any, data?: DescribeProductCommandOutput) => void
  ): Promise<DescribeProductCommandOutput> | void {
    const command = new DescribeProductCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the specified product. This operation is run with administrator access.</p>
   */
  public describeProductAsAdmin(
    args: DescribeProductAsAdminCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProductAsAdminCommandOutput>;
  public describeProductAsAdmin(
    args: DescribeProductAsAdminCommandInput,
    cb: (err: any, data?: DescribeProductAsAdminCommandOutput) => void
  ): void;
  public describeProductAsAdmin(
    args: DescribeProductAsAdminCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProductAsAdminCommandOutput) => void
  ): void;
  public describeProductAsAdmin(
    args: DescribeProductAsAdminCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeProductAsAdminCommandOutput) => void),
    cb?: (err: any, data?: DescribeProductAsAdminCommandOutput) => void
  ): Promise<DescribeProductAsAdminCommandOutput> | void {
    const command = new DescribeProductAsAdminCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the specified product.</p>
   */
  public describeProductView(
    args: DescribeProductViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProductViewCommandOutput>;
  public describeProductView(
    args: DescribeProductViewCommandInput,
    cb: (err: any, data?: DescribeProductViewCommandOutput) => void
  ): void;
  public describeProductView(
    args: DescribeProductViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProductViewCommandOutput) => void
  ): void;
  public describeProductView(
    args: DescribeProductViewCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeProductViewCommandOutput) => void),
    cb?: (err: any, data?: DescribeProductViewCommandOutput) => void
  ): Promise<DescribeProductViewCommandOutput> | void {
    const command = new DescribeProductViewCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the specified provisioned product.</p>
   */
  public describeProvisionedProduct(
    args: DescribeProvisionedProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProvisionedProductCommandOutput>;
  public describeProvisionedProduct(
    args: DescribeProvisionedProductCommandInput,
    cb: (err: any, data?: DescribeProvisionedProductCommandOutput) => void
  ): void;
  public describeProvisionedProduct(
    args: DescribeProvisionedProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProvisionedProductCommandOutput) => void
  ): void;
  public describeProvisionedProduct(
    args: DescribeProvisionedProductCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeProvisionedProductCommandOutput) => void),
    cb?: (err: any, data?: DescribeProvisionedProductCommandOutput) => void
  ): Promise<DescribeProvisionedProductCommandOutput> | void {
    const command = new DescribeProvisionedProductCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the resource changes for the specified plan.</p>
   */
  public describeProvisionedProductPlan(
    args: DescribeProvisionedProductPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProvisionedProductPlanCommandOutput>;
  public describeProvisionedProductPlan(
    args: DescribeProvisionedProductPlanCommandInput,
    cb: (err: any, data?: DescribeProvisionedProductPlanCommandOutput) => void
  ): void;
  public describeProvisionedProductPlan(
    args: DescribeProvisionedProductPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProvisionedProductPlanCommandOutput) => void
  ): void;
  public describeProvisionedProductPlan(
    args: DescribeProvisionedProductPlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeProvisionedProductPlanCommandOutput) => void),
    cb?: (err: any, data?: DescribeProvisionedProductPlanCommandOutput) => void
  ): Promise<DescribeProvisionedProductPlanCommandOutput> | void {
    const command = new DescribeProvisionedProductPlanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the specified provisioning artifact (also known as a version) for the specified product.</p>
   */
  public describeProvisioningArtifact(
    args: DescribeProvisioningArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProvisioningArtifactCommandOutput>;
  public describeProvisioningArtifact(
    args: DescribeProvisioningArtifactCommandInput,
    cb: (err: any, data?: DescribeProvisioningArtifactCommandOutput) => void
  ): void;
  public describeProvisioningArtifact(
    args: DescribeProvisioningArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProvisioningArtifactCommandOutput) => void
  ): void;
  public describeProvisioningArtifact(
    args: DescribeProvisioningArtifactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeProvisioningArtifactCommandOutput) => void),
    cb?: (err: any, data?: DescribeProvisioningArtifactCommandOutput) => void
  ): Promise<DescribeProvisioningArtifactCommandOutput> | void {
    const command = new DescribeProvisioningArtifactCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

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
  public describeProvisioningParameters(
    args: DescribeProvisioningParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProvisioningParametersCommandOutput>;
  public describeProvisioningParameters(
    args: DescribeProvisioningParametersCommandInput,
    cb: (err: any, data?: DescribeProvisioningParametersCommandOutput) => void
  ): void;
  public describeProvisioningParameters(
    args: DescribeProvisioningParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProvisioningParametersCommandOutput) => void
  ): void;
  public describeProvisioningParameters(
    args: DescribeProvisioningParametersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeProvisioningParametersCommandOutput) => void),
    cb?: (err: any, data?: DescribeProvisioningParametersCommandOutput) => void
  ): Promise<DescribeProvisioningParametersCommandOutput> | void {
    const command = new DescribeProvisioningParametersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

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
  public describeRecord(
    args: DescribeRecordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRecordCommandOutput>;
  public describeRecord(
    args: DescribeRecordCommandInput,
    cb: (err: any, data?: DescribeRecordCommandOutput) => void
  ): void;
  public describeRecord(
    args: DescribeRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRecordCommandOutput) => void
  ): void;
  public describeRecord(
    args: DescribeRecordCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRecordCommandOutput) => void),
    cb?: (err: any, data?: DescribeRecordCommandOutput) => void
  ): Promise<DescribeRecordCommandOutput> | void {
    const command = new DescribeRecordCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a self-service action.</p>
   */
  public describeServiceAction(
    args: DescribeServiceActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServiceActionCommandOutput>;
  public describeServiceAction(
    args: DescribeServiceActionCommandInput,
    cb: (err: any, data?: DescribeServiceActionCommandOutput) => void
  ): void;
  public describeServiceAction(
    args: DescribeServiceActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServiceActionCommandOutput) => void
  ): void;
  public describeServiceAction(
    args: DescribeServiceActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeServiceActionCommandOutput) => void),
    cb?: (err: any, data?: DescribeServiceActionCommandOutput) => void
  ): Promise<DescribeServiceActionCommandOutput> | void {
    const command = new DescribeServiceActionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Finds the default parameters for a specific self-service action on a specific provisioned product and returns a map of the results to the user.</p>
   */
  public describeServiceActionExecutionParameters(
    args: DescribeServiceActionExecutionParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServiceActionExecutionParametersCommandOutput>;
  public describeServiceActionExecutionParameters(
    args: DescribeServiceActionExecutionParametersCommandInput,
    cb: (err: any, data?: DescribeServiceActionExecutionParametersCommandOutput) => void
  ): void;
  public describeServiceActionExecutionParameters(
    args: DescribeServiceActionExecutionParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServiceActionExecutionParametersCommandOutput) => void
  ): void;
  public describeServiceActionExecutionParameters(
    args: DescribeServiceActionExecutionParametersCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeServiceActionExecutionParametersCommandOutput) => void),
    cb?: (err: any, data?: DescribeServiceActionExecutionParametersCommandOutput) => void
  ): Promise<DescribeServiceActionExecutionParametersCommandOutput> | void {
    const command = new DescribeServiceActionExecutionParametersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the specified TagOption.</p>
   */
  public describeTagOption(
    args: DescribeTagOptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTagOptionCommandOutput>;
  public describeTagOption(
    args: DescribeTagOptionCommandInput,
    cb: (err: any, data?: DescribeTagOptionCommandOutput) => void
  ): void;
  public describeTagOption(
    args: DescribeTagOptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTagOptionCommandOutput) => void
  ): void;
  public describeTagOption(
    args: DescribeTagOptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTagOptionCommandOutput) => void),
    cb?: (err: any, data?: DescribeTagOptionCommandOutput) => void
  ): Promise<DescribeTagOptionCommandOutput> | void {
    const command = new DescribeTagOptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disable portfolio sharing through the Organizations service. This command will not
   *          delete your current shares, but prevents you from creating new shares throughout your
   *          organization. Current shares are not kept in sync with your organization structure if the structure
   *          changes after calling this API. Only the management account in the organization can call this API.</p>
   *          <p>You cannot call this API if there are active delegated administrators in the organization.</p>
   *          <p>Note that a delegated administrator is not authorized to invoke <code>DisableAWSOrganizationsAccess</code>.</p>
   *          <important>
   *             <p>If you share an Service Catalog portfolio in an organization within
   *          Organizations, and then disable Organizations access for Service Catalog,
   *          the portfolio access permissions will not sync with the latest changes to the organization
   *          structure. Specifically, accounts that you removed from the organization after
   *          disabling Service Catalog access will retain access to the previously shared portfolio.</p>
   *          </important>
   */
  public disableAWSOrganizationsAccess(
    args: DisableAWSOrganizationsAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableAWSOrganizationsAccessCommandOutput>;
  public disableAWSOrganizationsAccess(
    args: DisableAWSOrganizationsAccessCommandInput,
    cb: (err: any, data?: DisableAWSOrganizationsAccessCommandOutput) => void
  ): void;
  public disableAWSOrganizationsAccess(
    args: DisableAWSOrganizationsAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableAWSOrganizationsAccessCommandOutput) => void
  ): void;
  public disableAWSOrganizationsAccess(
    args: DisableAWSOrganizationsAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableAWSOrganizationsAccessCommandOutput) => void),
    cb?: (err: any, data?: DisableAWSOrganizationsAccessCommandOutput) => void
  ): Promise<DisableAWSOrganizationsAccessCommandOutput> | void {
    const command = new DisableAWSOrganizationsAccessCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates the specified budget from the specified resource.</p>
   */
  public disassociateBudgetFromResource(
    args: DisassociateBudgetFromResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateBudgetFromResourceCommandOutput>;
  public disassociateBudgetFromResource(
    args: DisassociateBudgetFromResourceCommandInput,
    cb: (err: any, data?: DisassociateBudgetFromResourceCommandOutput) => void
  ): void;
  public disassociateBudgetFromResource(
    args: DisassociateBudgetFromResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateBudgetFromResourceCommandOutput) => void
  ): void;
  public disassociateBudgetFromResource(
    args: DisassociateBudgetFromResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateBudgetFromResourceCommandOutput) => void),
    cb?: (err: any, data?: DisassociateBudgetFromResourceCommandOutput) => void
  ): Promise<DisassociateBudgetFromResourceCommandOutput> | void {
    const command = new DisassociateBudgetFromResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates a previously associated principal ARN from a specified
   *          portfolio.</p>
   *          <p>The <code>PrincipalType</code> and <code>PrincipalARN</code> must match the
   *          <code>AssociatePrincipalWithPortfolio</code> call request details. For example,
   *          to disassociate an association created with a <code>PrincipalARN</code> of <code>PrincipalType</code>
   *          IAM you must use the <code>PrincipalType</code> IAM when calling <code>DisassociatePrincipalFromPortfolio</code>. </p>
   *          <p>For portfolios that have been shared with principal name sharing enabled: after disassociating a principal,
   *    share recipient accounts will no longer be able to provision products in this portfolio using a role matching the name
   *    of the associated principal. </p>
   */
  public disassociatePrincipalFromPortfolio(
    args: DisassociatePrincipalFromPortfolioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociatePrincipalFromPortfolioCommandOutput>;
  public disassociatePrincipalFromPortfolio(
    args: DisassociatePrincipalFromPortfolioCommandInput,
    cb: (err: any, data?: DisassociatePrincipalFromPortfolioCommandOutput) => void
  ): void;
  public disassociatePrincipalFromPortfolio(
    args: DisassociatePrincipalFromPortfolioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociatePrincipalFromPortfolioCommandOutput) => void
  ): void;
  public disassociatePrincipalFromPortfolio(
    args: DisassociatePrincipalFromPortfolioCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociatePrincipalFromPortfolioCommandOutput) => void),
    cb?: (err: any, data?: DisassociatePrincipalFromPortfolioCommandOutput) => void
  ): Promise<DisassociatePrincipalFromPortfolioCommandOutput> | void {
    const command = new DisassociatePrincipalFromPortfolioCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates the specified product from the specified portfolio. </p>
   *          <p>A delegated admin is authorized to invoke this command.</p>
   */
  public disassociateProductFromPortfolio(
    args: DisassociateProductFromPortfolioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateProductFromPortfolioCommandOutput>;
  public disassociateProductFromPortfolio(
    args: DisassociateProductFromPortfolioCommandInput,
    cb: (err: any, data?: DisassociateProductFromPortfolioCommandOutput) => void
  ): void;
  public disassociateProductFromPortfolio(
    args: DisassociateProductFromPortfolioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateProductFromPortfolioCommandOutput) => void
  ): void;
  public disassociateProductFromPortfolio(
    args: DisassociateProductFromPortfolioCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateProductFromPortfolioCommandOutput) => void),
    cb?: (err: any, data?: DisassociateProductFromPortfolioCommandOutput) => void
  ): Promise<DisassociateProductFromPortfolioCommandOutput> | void {
    const command = new DisassociateProductFromPortfolioCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates the specified self-service action association from the specified provisioning artifact.</p>
   */
  public disassociateServiceActionFromProvisioningArtifact(
    args: DisassociateServiceActionFromProvisioningArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateServiceActionFromProvisioningArtifactCommandOutput>;
  public disassociateServiceActionFromProvisioningArtifact(
    args: DisassociateServiceActionFromProvisioningArtifactCommandInput,
    cb: (err: any, data?: DisassociateServiceActionFromProvisioningArtifactCommandOutput) => void
  ): void;
  public disassociateServiceActionFromProvisioningArtifact(
    args: DisassociateServiceActionFromProvisioningArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateServiceActionFromProvisioningArtifactCommandOutput) => void
  ): void;
  public disassociateServiceActionFromProvisioningArtifact(
    args: DisassociateServiceActionFromProvisioningArtifactCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociateServiceActionFromProvisioningArtifactCommandOutput) => void),
    cb?: (err: any, data?: DisassociateServiceActionFromProvisioningArtifactCommandOutput) => void
  ): Promise<DisassociateServiceActionFromProvisioningArtifactCommandOutput> | void {
    const command = new DisassociateServiceActionFromProvisioningArtifactCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates the specified TagOption from the specified resource.</p>
   */
  public disassociateTagOptionFromResource(
    args: DisassociateTagOptionFromResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateTagOptionFromResourceCommandOutput>;
  public disassociateTagOptionFromResource(
    args: DisassociateTagOptionFromResourceCommandInput,
    cb: (err: any, data?: DisassociateTagOptionFromResourceCommandOutput) => void
  ): void;
  public disassociateTagOptionFromResource(
    args: DisassociateTagOptionFromResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateTagOptionFromResourceCommandOutput) => void
  ): void;
  public disassociateTagOptionFromResource(
    args: DisassociateTagOptionFromResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateTagOptionFromResourceCommandOutput) => void),
    cb?: (err: any, data?: DisassociateTagOptionFromResourceCommandOutput) => void
  ): Promise<DisassociateTagOptionFromResourceCommandOutput> | void {
    const command = new DisassociateTagOptionFromResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enable portfolio sharing feature through Organizations. This API will allow Service Catalog to receive updates on your organization in order to sync your shares with the
   *          current structure. This API can only be called by the management account in the organization.</p>
   *          <p>When you call this API, Service Catalog calls <code>organizations:EnableAWSServiceAccess</code> on your behalf so that your shares stay in sync with any changes in your Organizations structure.</p>
   *          <p>Note that a delegated administrator is not authorized to invoke <code>EnableAWSOrganizationsAccess</code>.</p>
   *          <important>
   *             <p>If you have previously disabled Organizations access for Service Catalog, and then
   *          enable access again, the portfolio access permissions might not sync with the latest changes to
   *          the organization structure. Specifically, accounts that you removed from the organization after
   *          disabling Service Catalog access, and before you enabled access again, can retain access to the
   *          previously shared portfolio. As a result, an account that has been removed from the organization
   *          might still be able to create or manage Amazon Web Services resources when it is no longer
   *          authorized to do so. Amazon Web Services is working to resolve this issue.</p>
   *          </important>
   */
  public enableAWSOrganizationsAccess(
    args: EnableAWSOrganizationsAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableAWSOrganizationsAccessCommandOutput>;
  public enableAWSOrganizationsAccess(
    args: EnableAWSOrganizationsAccessCommandInput,
    cb: (err: any, data?: EnableAWSOrganizationsAccessCommandOutput) => void
  ): void;
  public enableAWSOrganizationsAccess(
    args: EnableAWSOrganizationsAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableAWSOrganizationsAccessCommandOutput) => void
  ): void;
  public enableAWSOrganizationsAccess(
    args: EnableAWSOrganizationsAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableAWSOrganizationsAccessCommandOutput) => void),
    cb?: (err: any, data?: EnableAWSOrganizationsAccessCommandOutput) => void
  ): Promise<EnableAWSOrganizationsAccessCommandOutput> | void {
    const command = new EnableAWSOrganizationsAccessCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provisions or modifies a product based on the resource changes for the specified plan.</p>
   */
  public executeProvisionedProductPlan(
    args: ExecuteProvisionedProductPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExecuteProvisionedProductPlanCommandOutput>;
  public executeProvisionedProductPlan(
    args: ExecuteProvisionedProductPlanCommandInput,
    cb: (err: any, data?: ExecuteProvisionedProductPlanCommandOutput) => void
  ): void;
  public executeProvisionedProductPlan(
    args: ExecuteProvisionedProductPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecuteProvisionedProductPlanCommandOutput) => void
  ): void;
  public executeProvisionedProductPlan(
    args: ExecuteProvisionedProductPlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExecuteProvisionedProductPlanCommandOutput) => void),
    cb?: (err: any, data?: ExecuteProvisionedProductPlanCommandOutput) => void
  ): Promise<ExecuteProvisionedProductPlanCommandOutput> | void {
    const command = new ExecuteProvisionedProductPlanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Executes a self-service action against a provisioned product.</p>
   */
  public executeProvisionedProductServiceAction(
    args: ExecuteProvisionedProductServiceActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExecuteProvisionedProductServiceActionCommandOutput>;
  public executeProvisionedProductServiceAction(
    args: ExecuteProvisionedProductServiceActionCommandInput,
    cb: (err: any, data?: ExecuteProvisionedProductServiceActionCommandOutput) => void
  ): void;
  public executeProvisionedProductServiceAction(
    args: ExecuteProvisionedProductServiceActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecuteProvisionedProductServiceActionCommandOutput) => void
  ): void;
  public executeProvisionedProductServiceAction(
    args: ExecuteProvisionedProductServiceActionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ExecuteProvisionedProductServiceActionCommandOutput) => void),
    cb?: (err: any, data?: ExecuteProvisionedProductServiceActionCommandOutput) => void
  ): Promise<ExecuteProvisionedProductServiceActionCommandOutput> | void {
    const command = new ExecuteProvisionedProductServiceActionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get the Access Status for Organizations portfolio share feature. This API can only be
   *          called by the management account in the organization or by a delegated admin.</p>
   */
  public getAWSOrganizationsAccessStatus(
    args: GetAWSOrganizationsAccessStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAWSOrganizationsAccessStatusCommandOutput>;
  public getAWSOrganizationsAccessStatus(
    args: GetAWSOrganizationsAccessStatusCommandInput,
    cb: (err: any, data?: GetAWSOrganizationsAccessStatusCommandOutput) => void
  ): void;
  public getAWSOrganizationsAccessStatus(
    args: GetAWSOrganizationsAccessStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAWSOrganizationsAccessStatusCommandOutput) => void
  ): void;
  public getAWSOrganizationsAccessStatus(
    args: GetAWSOrganizationsAccessStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAWSOrganizationsAccessStatusCommandOutput) => void),
    cb?: (err: any, data?: GetAWSOrganizationsAccessStatusCommandOutput) => void
  ): Promise<GetAWSOrganizationsAccessStatusCommandOutput> | void {
    const command = new GetAWSOrganizationsAccessStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>This API takes either a <code>ProvisonedProductId</code> or a <code>ProvisionedProductName</code>, along with a list of one or more output keys, and responds with the key/value pairs of those outputs.</p>
   */
  public getProvisionedProductOutputs(
    args: GetProvisionedProductOutputsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProvisionedProductOutputsCommandOutput>;
  public getProvisionedProductOutputs(
    args: GetProvisionedProductOutputsCommandInput,
    cb: (err: any, data?: GetProvisionedProductOutputsCommandOutput) => void
  ): void;
  public getProvisionedProductOutputs(
    args: GetProvisionedProductOutputsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProvisionedProductOutputsCommandOutput) => void
  ): void;
  public getProvisionedProductOutputs(
    args: GetProvisionedProductOutputsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetProvisionedProductOutputsCommandOutput) => void),
    cb?: (err: any, data?: GetProvisionedProductOutputsCommandOutput) => void
  ): Promise<GetProvisionedProductOutputsCommandOutput> | void {
    const command = new GetProvisionedProductOutputsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Requests the import of a resource as an Service Catalog provisioned product that is
   *          associated to an Service Catalog product and provisioning artifact. Once imported, all
   *          supported Service Catalog governance actions are supported on the provisioned
   *          product.</p>
   *          <p>Resource import only supports CloudFormation stack ARNs. CloudFormation StackSets and
   *          non-root nested stacks are not supported.</p>
   *          <p>The CloudFormation stack must have one of the following statuses to be imported:
   *          <code>CREATE_COMPLETE</code>, <code>UPDATE_COMPLETE</code>, <code>UPDATE_ROLLBACK_COMPLETE</code>, <code>IMPORT_COMPLETE</code>,
   *          <code>IMPORT_ROLLBACK_COMPLETE</code>.</p>
   *          <p>Import of the resource requires that the CloudFormation stack template matches the
   *          associated Service Catalog product provisioning artifact. </p>
   *
   *          <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code>
   *          and <code>cloudformation:DescribeStacks</code> IAM policy permissions. </p>
   */
  public importAsProvisionedProduct(
    args: ImportAsProvisionedProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportAsProvisionedProductCommandOutput>;
  public importAsProvisionedProduct(
    args: ImportAsProvisionedProductCommandInput,
    cb: (err: any, data?: ImportAsProvisionedProductCommandOutput) => void
  ): void;
  public importAsProvisionedProduct(
    args: ImportAsProvisionedProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportAsProvisionedProductCommandOutput) => void
  ): void;
  public importAsProvisionedProduct(
    args: ImportAsProvisionedProductCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportAsProvisionedProductCommandOutput) => void),
    cb?: (err: any, data?: ImportAsProvisionedProductCommandOutput) => void
  ): Promise<ImportAsProvisionedProductCommandOutput> | void {
    const command = new ImportAsProvisionedProductCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all imported portfolios for which account-to-account shares were accepted by
   *          this account. By specifying the <code>PortfolioShareType</code>, you can list portfolios for which
   *          organizational shares were accepted by this account.</p>
   */
  public listAcceptedPortfolioShares(
    args: ListAcceptedPortfolioSharesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAcceptedPortfolioSharesCommandOutput>;
  public listAcceptedPortfolioShares(
    args: ListAcceptedPortfolioSharesCommandInput,
    cb: (err: any, data?: ListAcceptedPortfolioSharesCommandOutput) => void
  ): void;
  public listAcceptedPortfolioShares(
    args: ListAcceptedPortfolioSharesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAcceptedPortfolioSharesCommandOutput) => void
  ): void;
  public listAcceptedPortfolioShares(
    args: ListAcceptedPortfolioSharesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAcceptedPortfolioSharesCommandOutput) => void),
    cb?: (err: any, data?: ListAcceptedPortfolioSharesCommandOutput) => void
  ): Promise<ListAcceptedPortfolioSharesCommandOutput> | void {
    const command = new ListAcceptedPortfolioSharesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all the budgets associated to the specified resource.</p>
   */
  public listBudgetsForResource(
    args: ListBudgetsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBudgetsForResourceCommandOutput>;
  public listBudgetsForResource(
    args: ListBudgetsForResourceCommandInput,
    cb: (err: any, data?: ListBudgetsForResourceCommandOutput) => void
  ): void;
  public listBudgetsForResource(
    args: ListBudgetsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBudgetsForResourceCommandOutput) => void
  ): void;
  public listBudgetsForResource(
    args: ListBudgetsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBudgetsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListBudgetsForResourceCommandOutput) => void
  ): Promise<ListBudgetsForResourceCommandOutput> | void {
    const command = new ListBudgetsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the constraints for the specified portfolio and product.</p>
   */
  public listConstraintsForPortfolio(
    args: ListConstraintsForPortfolioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConstraintsForPortfolioCommandOutput>;
  public listConstraintsForPortfolio(
    args: ListConstraintsForPortfolioCommandInput,
    cb: (err: any, data?: ListConstraintsForPortfolioCommandOutput) => void
  ): void;
  public listConstraintsForPortfolio(
    args: ListConstraintsForPortfolioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConstraintsForPortfolioCommandOutput) => void
  ): void;
  public listConstraintsForPortfolio(
    args: ListConstraintsForPortfolioCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListConstraintsForPortfolioCommandOutput) => void),
    cb?: (err: any, data?: ListConstraintsForPortfolioCommandOutput) => void
  ): Promise<ListConstraintsForPortfolioCommandOutput> | void {
    const command = new ListConstraintsForPortfolioCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the paths to the specified product. A path is how the user
   *          has access to a specified product, and is necessary when provisioning a product. A path
   *          also determines the constraints put on the product.</p>
   */
  public listLaunchPaths(
    args: ListLaunchPathsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLaunchPathsCommandOutput>;
  public listLaunchPaths(
    args: ListLaunchPathsCommandInput,
    cb: (err: any, data?: ListLaunchPathsCommandOutput) => void
  ): void;
  public listLaunchPaths(
    args: ListLaunchPathsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLaunchPathsCommandOutput) => void
  ): void;
  public listLaunchPaths(
    args: ListLaunchPathsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLaunchPathsCommandOutput) => void),
    cb?: (err: any, data?: ListLaunchPathsCommandOutput) => void
  ): Promise<ListLaunchPathsCommandOutput> | void {
    const command = new ListLaunchPathsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the organization nodes that have access to the specified portfolio. This API can
   *          only be called by the management account in the organization or by a delegated
   *          admin.</p>
   *          <p>If a delegated admin is de-registered, they can no longer perform this operation.</p>
   */
  public listOrganizationPortfolioAccess(
    args: ListOrganizationPortfolioAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOrganizationPortfolioAccessCommandOutput>;
  public listOrganizationPortfolioAccess(
    args: ListOrganizationPortfolioAccessCommandInput,
    cb: (err: any, data?: ListOrganizationPortfolioAccessCommandOutput) => void
  ): void;
  public listOrganizationPortfolioAccess(
    args: ListOrganizationPortfolioAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOrganizationPortfolioAccessCommandOutput) => void
  ): void;
  public listOrganizationPortfolioAccess(
    args: ListOrganizationPortfolioAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListOrganizationPortfolioAccessCommandOutput) => void),
    cb?: (err: any, data?: ListOrganizationPortfolioAccessCommandOutput) => void
  ): Promise<ListOrganizationPortfolioAccessCommandOutput> | void {
    const command = new ListOrganizationPortfolioAccessCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the account IDs that have access to the specified portfolio.</p>
   *          <p>A delegated admin can list the accounts that have access to the shared portfolio. Note that if a delegated admin is de-registered, they can no longer perform this operation.</p>
   */
  public listPortfolioAccess(
    args: ListPortfolioAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPortfolioAccessCommandOutput>;
  public listPortfolioAccess(
    args: ListPortfolioAccessCommandInput,
    cb: (err: any, data?: ListPortfolioAccessCommandOutput) => void
  ): void;
  public listPortfolioAccess(
    args: ListPortfolioAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPortfolioAccessCommandOutput) => void
  ): void;
  public listPortfolioAccess(
    args: ListPortfolioAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPortfolioAccessCommandOutput) => void),
    cb?: (err: any, data?: ListPortfolioAccessCommandOutput) => void
  ): Promise<ListPortfolioAccessCommandOutput> | void {
    const command = new ListPortfolioAccessCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all portfolios in the catalog.</p>
   */
  public listPortfolios(
    args: ListPortfoliosCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPortfoliosCommandOutput>;
  public listPortfolios(
    args: ListPortfoliosCommandInput,
    cb: (err: any, data?: ListPortfoliosCommandOutput) => void
  ): void;
  public listPortfolios(
    args: ListPortfoliosCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPortfoliosCommandOutput) => void
  ): void;
  public listPortfolios(
    args: ListPortfoliosCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPortfoliosCommandOutput) => void),
    cb?: (err: any, data?: ListPortfoliosCommandOutput) => void
  ): Promise<ListPortfoliosCommandOutput> | void {
    const command = new ListPortfoliosCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all portfolios that the specified product is associated with.</p>
   */
  public listPortfoliosForProduct(
    args: ListPortfoliosForProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPortfoliosForProductCommandOutput>;
  public listPortfoliosForProduct(
    args: ListPortfoliosForProductCommandInput,
    cb: (err: any, data?: ListPortfoliosForProductCommandOutput) => void
  ): void;
  public listPortfoliosForProduct(
    args: ListPortfoliosForProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPortfoliosForProductCommandOutput) => void
  ): void;
  public listPortfoliosForProduct(
    args: ListPortfoliosForProductCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPortfoliosForProductCommandOutput) => void),
    cb?: (err: any, data?: ListPortfoliosForProductCommandOutput) => void
  ): Promise<ListPortfoliosForProductCommandOutput> | void {
    const command = new ListPortfoliosForProductCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all <code>PrincipalARN</code>s and corresponding <code>PrincipalType</code>s associated with the specified portfolio.</p>
   */
  public listPrincipalsForPortfolio(
    args: ListPrincipalsForPortfolioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPrincipalsForPortfolioCommandOutput>;
  public listPrincipalsForPortfolio(
    args: ListPrincipalsForPortfolioCommandInput,
    cb: (err: any, data?: ListPrincipalsForPortfolioCommandOutput) => void
  ): void;
  public listPrincipalsForPortfolio(
    args: ListPrincipalsForPortfolioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPrincipalsForPortfolioCommandOutput) => void
  ): void;
  public listPrincipalsForPortfolio(
    args: ListPrincipalsForPortfolioCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPrincipalsForPortfolioCommandOutput) => void),
    cb?: (err: any, data?: ListPrincipalsForPortfolioCommandOutput) => void
  ): Promise<ListPrincipalsForPortfolioCommandOutput> | void {
    const command = new ListPrincipalsForPortfolioCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the plans for the specified provisioned product or all plans to which the user has access.</p>
   */
  public listProvisionedProductPlans(
    args: ListProvisionedProductPlansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProvisionedProductPlansCommandOutput>;
  public listProvisionedProductPlans(
    args: ListProvisionedProductPlansCommandInput,
    cb: (err: any, data?: ListProvisionedProductPlansCommandOutput) => void
  ): void;
  public listProvisionedProductPlans(
    args: ListProvisionedProductPlansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProvisionedProductPlansCommandOutput) => void
  ): void;
  public listProvisionedProductPlans(
    args: ListProvisionedProductPlansCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProvisionedProductPlansCommandOutput) => void),
    cb?: (err: any, data?: ListProvisionedProductPlansCommandOutput) => void
  ): Promise<ListProvisionedProductPlansCommandOutput> | void {
    const command = new ListProvisionedProductPlansCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all provisioning artifacts (also known as versions) for the specified product.</p>
   */
  public listProvisioningArtifacts(
    args: ListProvisioningArtifactsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProvisioningArtifactsCommandOutput>;
  public listProvisioningArtifacts(
    args: ListProvisioningArtifactsCommandInput,
    cb: (err: any, data?: ListProvisioningArtifactsCommandOutput) => void
  ): void;
  public listProvisioningArtifacts(
    args: ListProvisioningArtifactsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProvisioningArtifactsCommandOutput) => void
  ): void;
  public listProvisioningArtifacts(
    args: ListProvisioningArtifactsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProvisioningArtifactsCommandOutput) => void),
    cb?: (err: any, data?: ListProvisioningArtifactsCommandOutput) => void
  ): Promise<ListProvisioningArtifactsCommandOutput> | void {
    const command = new ListProvisioningArtifactsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all provisioning artifacts (also known as versions) for the specified self-service action.</p>
   */
  public listProvisioningArtifactsForServiceAction(
    args: ListProvisioningArtifactsForServiceActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProvisioningArtifactsForServiceActionCommandOutput>;
  public listProvisioningArtifactsForServiceAction(
    args: ListProvisioningArtifactsForServiceActionCommandInput,
    cb: (err: any, data?: ListProvisioningArtifactsForServiceActionCommandOutput) => void
  ): void;
  public listProvisioningArtifactsForServiceAction(
    args: ListProvisioningArtifactsForServiceActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProvisioningArtifactsForServiceActionCommandOutput) => void
  ): void;
  public listProvisioningArtifactsForServiceAction(
    args: ListProvisioningArtifactsForServiceActionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListProvisioningArtifactsForServiceActionCommandOutput) => void),
    cb?: (err: any, data?: ListProvisioningArtifactsForServiceActionCommandOutput) => void
  ): Promise<ListProvisioningArtifactsForServiceActionCommandOutput> | void {
    const command = new ListProvisioningArtifactsForServiceActionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the specified requests or all performed requests.</p>
   */
  public listRecordHistory(
    args: ListRecordHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecordHistoryCommandOutput>;
  public listRecordHistory(
    args: ListRecordHistoryCommandInput,
    cb: (err: any, data?: ListRecordHistoryCommandOutput) => void
  ): void;
  public listRecordHistory(
    args: ListRecordHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecordHistoryCommandOutput) => void
  ): void;
  public listRecordHistory(
    args: ListRecordHistoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRecordHistoryCommandOutput) => void),
    cb?: (err: any, data?: ListRecordHistoryCommandOutput) => void
  ): Promise<ListRecordHistoryCommandOutput> | void {
    const command = new ListRecordHistoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the resources associated with the specified TagOption.</p>
   */
  public listResourcesForTagOption(
    args: ListResourcesForTagOptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourcesForTagOptionCommandOutput>;
  public listResourcesForTagOption(
    args: ListResourcesForTagOptionCommandInput,
    cb: (err: any, data?: ListResourcesForTagOptionCommandOutput) => void
  ): void;
  public listResourcesForTagOption(
    args: ListResourcesForTagOptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourcesForTagOptionCommandOutput) => void
  ): void;
  public listResourcesForTagOption(
    args: ListResourcesForTagOptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResourcesForTagOptionCommandOutput) => void),
    cb?: (err: any, data?: ListResourcesForTagOptionCommandOutput) => void
  ): Promise<ListResourcesForTagOptionCommandOutput> | void {
    const command = new ListResourcesForTagOptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all self-service actions.</p>
   */
  public listServiceActions(
    args: ListServiceActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceActionsCommandOutput>;
  public listServiceActions(
    args: ListServiceActionsCommandInput,
    cb: (err: any, data?: ListServiceActionsCommandOutput) => void
  ): void;
  public listServiceActions(
    args: ListServiceActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceActionsCommandOutput) => void
  ): void;
  public listServiceActions(
    args: ListServiceActionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListServiceActionsCommandOutput) => void),
    cb?: (err: any, data?: ListServiceActionsCommandOutput) => void
  ): Promise<ListServiceActionsCommandOutput> | void {
    const command = new ListServiceActionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a paginated list of self-service actions associated with the specified Product ID and Provisioning Artifact ID.</p>
   */
  public listServiceActionsForProvisioningArtifact(
    args: ListServiceActionsForProvisioningArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceActionsForProvisioningArtifactCommandOutput>;
  public listServiceActionsForProvisioningArtifact(
    args: ListServiceActionsForProvisioningArtifactCommandInput,
    cb: (err: any, data?: ListServiceActionsForProvisioningArtifactCommandOutput) => void
  ): void;
  public listServiceActionsForProvisioningArtifact(
    args: ListServiceActionsForProvisioningArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceActionsForProvisioningArtifactCommandOutput) => void
  ): void;
  public listServiceActionsForProvisioningArtifact(
    args: ListServiceActionsForProvisioningArtifactCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListServiceActionsForProvisioningArtifactCommandOutput) => void),
    cb?: (err: any, data?: ListServiceActionsForProvisioningArtifactCommandOutput) => void
  ): Promise<ListServiceActionsForProvisioningArtifactCommandOutput> | void {
    const command = new ListServiceActionsForProvisioningArtifactCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns summary information about stack instances that are associated with the specified <code>CFN_STACKSET</code> type provisioned product. You can filter for stack instances that are associated with a specific Amazon Web Services account name or Region. </p>
   */
  public listStackInstancesForProvisionedProduct(
    args: ListStackInstancesForProvisionedProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStackInstancesForProvisionedProductCommandOutput>;
  public listStackInstancesForProvisionedProduct(
    args: ListStackInstancesForProvisionedProductCommandInput,
    cb: (err: any, data?: ListStackInstancesForProvisionedProductCommandOutput) => void
  ): void;
  public listStackInstancesForProvisionedProduct(
    args: ListStackInstancesForProvisionedProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStackInstancesForProvisionedProductCommandOutput) => void
  ): void;
  public listStackInstancesForProvisionedProduct(
    args: ListStackInstancesForProvisionedProductCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListStackInstancesForProvisionedProductCommandOutput) => void),
    cb?: (err: any, data?: ListStackInstancesForProvisionedProductCommandOutput) => void
  ): Promise<ListStackInstancesForProvisionedProductCommandOutput> | void {
    const command = new ListStackInstancesForProvisionedProductCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the specified TagOptions or all TagOptions.</p>
   */
  public listTagOptions(
    args: ListTagOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagOptionsCommandOutput>;
  public listTagOptions(
    args: ListTagOptionsCommandInput,
    cb: (err: any, data?: ListTagOptionsCommandOutput) => void
  ): void;
  public listTagOptions(
    args: ListTagOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagOptionsCommandOutput) => void
  ): void;
  public listTagOptions(
    args: ListTagOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagOptionsCommandOutput) => void),
    cb?: (err: any, data?: ListTagOptionsCommandOutput) => void
  ): Promise<ListTagOptionsCommandOutput> | void {
    const command = new ListTagOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

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
  public provisionProduct(
    args: ProvisionProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ProvisionProductCommandOutput>;
  public provisionProduct(
    args: ProvisionProductCommandInput,
    cb: (err: any, data?: ProvisionProductCommandOutput) => void
  ): void;
  public provisionProduct(
    args: ProvisionProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ProvisionProductCommandOutput) => void
  ): void;
  public provisionProduct(
    args: ProvisionProductCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ProvisionProductCommandOutput) => void),
    cb?: (err: any, data?: ProvisionProductCommandOutput) => void
  ): Promise<ProvisionProductCommandOutput> | void {
    const command = new ProvisionProductCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Rejects an offer to share the specified portfolio.</p>
   */
  public rejectPortfolioShare(
    args: RejectPortfolioShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectPortfolioShareCommandOutput>;
  public rejectPortfolioShare(
    args: RejectPortfolioShareCommandInput,
    cb: (err: any, data?: RejectPortfolioShareCommandOutput) => void
  ): void;
  public rejectPortfolioShare(
    args: RejectPortfolioShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectPortfolioShareCommandOutput) => void
  ): void;
  public rejectPortfolioShare(
    args: RejectPortfolioShareCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RejectPortfolioShareCommandOutput) => void),
    cb?: (err: any, data?: RejectPortfolioShareCommandOutput) => void
  ): Promise<RejectPortfolioShareCommandOutput> | void {
    const command = new RejectPortfolioShareCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the provisioned products that are available (not terminated).</p>
   *          <p>To use additional filtering, see <a>SearchProvisionedProducts</a>.</p>
   */
  public scanProvisionedProducts(
    args: ScanProvisionedProductsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ScanProvisionedProductsCommandOutput>;
  public scanProvisionedProducts(
    args: ScanProvisionedProductsCommandInput,
    cb: (err: any, data?: ScanProvisionedProductsCommandOutput) => void
  ): void;
  public scanProvisionedProducts(
    args: ScanProvisionedProductsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ScanProvisionedProductsCommandOutput) => void
  ): void;
  public scanProvisionedProducts(
    args: ScanProvisionedProductsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ScanProvisionedProductsCommandOutput) => void),
    cb?: (err: any, data?: ScanProvisionedProductsCommandOutput) => void
  ): Promise<ScanProvisionedProductsCommandOutput> | void {
    const command = new ScanProvisionedProductsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the products to which the caller has access.</p>
   */
  public searchProducts(
    args: SearchProductsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchProductsCommandOutput>;
  public searchProducts(
    args: SearchProductsCommandInput,
    cb: (err: any, data?: SearchProductsCommandOutput) => void
  ): void;
  public searchProducts(
    args: SearchProductsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchProductsCommandOutput) => void
  ): void;
  public searchProducts(
    args: SearchProductsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchProductsCommandOutput) => void),
    cb?: (err: any, data?: SearchProductsCommandOutput) => void
  ): Promise<SearchProductsCommandOutput> | void {
    const command = new SearchProductsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the products for the specified portfolio or all products.</p>
   */
  public searchProductsAsAdmin(
    args: SearchProductsAsAdminCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchProductsAsAdminCommandOutput>;
  public searchProductsAsAdmin(
    args: SearchProductsAsAdminCommandInput,
    cb: (err: any, data?: SearchProductsAsAdminCommandOutput) => void
  ): void;
  public searchProductsAsAdmin(
    args: SearchProductsAsAdminCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchProductsAsAdminCommandOutput) => void
  ): void;
  public searchProductsAsAdmin(
    args: SearchProductsAsAdminCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchProductsAsAdminCommandOutput) => void),
    cb?: (err: any, data?: SearchProductsAsAdminCommandOutput) => void
  ): Promise<SearchProductsAsAdminCommandOutput> | void {
    const command = new SearchProductsAsAdminCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the provisioned products that meet the specified criteria.</p>
   *
   *          <note>
   *             <p>To ensure a complete list of provisioned products and remove duplicate products, use
   *                <code>sort-by createdTime</code>. </p>
   *             <p>Here is a CLI example: <code> </code>
   *             </p>
   *             <p>
   *                <code>aws servicecatalog search-provisioned-products --sort-by createdTime </code>
   *             </p>
   *          </note>
   */
  public searchProvisionedProducts(
    args: SearchProvisionedProductsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchProvisionedProductsCommandOutput>;
  public searchProvisionedProducts(
    args: SearchProvisionedProductsCommandInput,
    cb: (err: any, data?: SearchProvisionedProductsCommandOutput) => void
  ): void;
  public searchProvisionedProducts(
    args: SearchProvisionedProductsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchProvisionedProductsCommandOutput) => void
  ): void;
  public searchProvisionedProducts(
    args: SearchProvisionedProductsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchProvisionedProductsCommandOutput) => void),
    cb?: (err: any, data?: SearchProvisionedProductsCommandOutput) => void
  ): Promise<SearchProvisionedProductsCommandOutput> | void {
    const command = new SearchProvisionedProductsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Terminates the specified provisioned product.</p>
   *          <p>This operation does not delete any records associated with the provisioned product.</p>
   *          <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
   */
  public terminateProvisionedProduct(
    args: TerminateProvisionedProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateProvisionedProductCommandOutput>;
  public terminateProvisionedProduct(
    args: TerminateProvisionedProductCommandInput,
    cb: (err: any, data?: TerminateProvisionedProductCommandOutput) => void
  ): void;
  public terminateProvisionedProduct(
    args: TerminateProvisionedProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateProvisionedProductCommandOutput) => void
  ): void;
  public terminateProvisionedProduct(
    args: TerminateProvisionedProductCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TerminateProvisionedProductCommandOutput) => void),
    cb?: (err: any, data?: TerminateProvisionedProductCommandOutput) => void
  ): Promise<TerminateProvisionedProductCommandOutput> | void {
    const command = new TerminateProvisionedProductCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the specified constraint.</p>
   */
  public updateConstraint(
    args: UpdateConstraintCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConstraintCommandOutput>;
  public updateConstraint(
    args: UpdateConstraintCommandInput,
    cb: (err: any, data?: UpdateConstraintCommandOutput) => void
  ): void;
  public updateConstraint(
    args: UpdateConstraintCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConstraintCommandOutput) => void
  ): void;
  public updateConstraint(
    args: UpdateConstraintCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateConstraintCommandOutput) => void),
    cb?: (err: any, data?: UpdateConstraintCommandOutput) => void
  ): Promise<UpdateConstraintCommandOutput> | void {
    const command = new UpdateConstraintCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the specified portfolio.</p>
   *          <p>You cannot update a product that was shared with you.</p>
   */
  public updatePortfolio(
    args: UpdatePortfolioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePortfolioCommandOutput>;
  public updatePortfolio(
    args: UpdatePortfolioCommandInput,
    cb: (err: any, data?: UpdatePortfolioCommandOutput) => void
  ): void;
  public updatePortfolio(
    args: UpdatePortfolioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePortfolioCommandOutput) => void
  ): void;
  public updatePortfolio(
    args: UpdatePortfolioCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePortfolioCommandOutput) => void),
    cb?: (err: any, data?: UpdatePortfolioCommandOutput) => void
  ): Promise<UpdatePortfolioCommandOutput> | void {
    const command = new UpdatePortfolioCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the specified portfolio share. You can use this API to enable or disable <code>TagOptions</code> sharing
   *          or Principal sharing for an existing portfolio share. </p>
   *
   *          <p>The portfolio share cannot be updated if the <code>CreatePortfolioShare</code> operation is <code>IN_PROGRESS</code>, as the share is not available to recipient entities. In this case, you must wait for the portfolio share to be COMPLETED.</p>
   *
   *          <p>You must provide the <code>accountId</code> or organization node in the input, but not both.</p>
   *
   *          <p>If the portfolio is shared to both an external account and an organization node, and both shares need to be updated, you must invoke <code>UpdatePortfolioShare</code> separately for each share type. </p>
   *
   *          <p>This API cannot be used for removing the portfolio share. You must use <code>DeletePortfolioShare</code> API for that action. </p>
   *
   *          <note>
   *             <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is
   *          then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin,
   *          but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal
   *          name association for the portfolio. Although this user may not know which principal names are associated through
   *          Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then
   *          Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration,
   *          the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p>
   *          </note>
   */
  public updatePortfolioShare(
    args: UpdatePortfolioShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePortfolioShareCommandOutput>;
  public updatePortfolioShare(
    args: UpdatePortfolioShareCommandInput,
    cb: (err: any, data?: UpdatePortfolioShareCommandOutput) => void
  ): void;
  public updatePortfolioShare(
    args: UpdatePortfolioShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePortfolioShareCommandOutput) => void
  ): void;
  public updatePortfolioShare(
    args: UpdatePortfolioShareCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePortfolioShareCommandOutput) => void),
    cb?: (err: any, data?: UpdatePortfolioShareCommandOutput) => void
  ): Promise<UpdatePortfolioShareCommandOutput> | void {
    const command = new UpdatePortfolioShareCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the specified product.</p>
   */
  public updateProduct(
    args: UpdateProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProductCommandOutput>;
  public updateProduct(
    args: UpdateProductCommandInput,
    cb: (err: any, data?: UpdateProductCommandOutput) => void
  ): void;
  public updateProduct(
    args: UpdateProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProductCommandOutput) => void
  ): void;
  public updateProduct(
    args: UpdateProductCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateProductCommandOutput) => void),
    cb?: (err: any, data?: UpdateProductCommandOutput) => void
  ): Promise<UpdateProductCommandOutput> | void {
    const command = new UpdateProductCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Requests updates to the configuration of the specified provisioned product.</p>
   *          <p>If there are tags associated with the object, they cannot be updated or added.
   *          Depending on the specific updates requested, this operation can update with no
   *          interruption, with some interruption, or replace the provisioned product entirely.</p>
   *          <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
   */
  public updateProvisionedProduct(
    args: UpdateProvisionedProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProvisionedProductCommandOutput>;
  public updateProvisionedProduct(
    args: UpdateProvisionedProductCommandInput,
    cb: (err: any, data?: UpdateProvisionedProductCommandOutput) => void
  ): void;
  public updateProvisionedProduct(
    args: UpdateProvisionedProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProvisionedProductCommandOutput) => void
  ): void;
  public updateProvisionedProduct(
    args: UpdateProvisionedProductCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateProvisionedProductCommandOutput) => void),
    cb?: (err: any, data?: UpdateProvisionedProductCommandOutput) => void
  ): Promise<UpdateProvisionedProductCommandOutput> | void {
    const command = new UpdateProvisionedProductCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Requests updates to the properties of the specified provisioned product.</p>
   */
  public updateProvisionedProductProperties(
    args: UpdateProvisionedProductPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProvisionedProductPropertiesCommandOutput>;
  public updateProvisionedProductProperties(
    args: UpdateProvisionedProductPropertiesCommandInput,
    cb: (err: any, data?: UpdateProvisionedProductPropertiesCommandOutput) => void
  ): void;
  public updateProvisionedProductProperties(
    args: UpdateProvisionedProductPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProvisionedProductPropertiesCommandOutput) => void
  ): void;
  public updateProvisionedProductProperties(
    args: UpdateProvisionedProductPropertiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateProvisionedProductPropertiesCommandOutput) => void),
    cb?: (err: any, data?: UpdateProvisionedProductPropertiesCommandOutput) => void
  ): Promise<UpdateProvisionedProductPropertiesCommandOutput> | void {
    const command = new UpdateProvisionedProductPropertiesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the specified provisioning artifact (also known as a version) for the specified product.</p>
   *          <p>You cannot update a provisioning artifact for a product that was shared with you.</p>
   */
  public updateProvisioningArtifact(
    args: UpdateProvisioningArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProvisioningArtifactCommandOutput>;
  public updateProvisioningArtifact(
    args: UpdateProvisioningArtifactCommandInput,
    cb: (err: any, data?: UpdateProvisioningArtifactCommandOutput) => void
  ): void;
  public updateProvisioningArtifact(
    args: UpdateProvisioningArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProvisioningArtifactCommandOutput) => void
  ): void;
  public updateProvisioningArtifact(
    args: UpdateProvisioningArtifactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateProvisioningArtifactCommandOutput) => void),
    cb?: (err: any, data?: UpdateProvisioningArtifactCommandOutput) => void
  ): Promise<UpdateProvisioningArtifactCommandOutput> | void {
    const command = new UpdateProvisioningArtifactCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a self-service action.</p>
   */
  public updateServiceAction(
    args: UpdateServiceActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceActionCommandOutput>;
  public updateServiceAction(
    args: UpdateServiceActionCommandInput,
    cb: (err: any, data?: UpdateServiceActionCommandOutput) => void
  ): void;
  public updateServiceAction(
    args: UpdateServiceActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceActionCommandOutput) => void
  ): void;
  public updateServiceAction(
    args: UpdateServiceActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateServiceActionCommandOutput) => void),
    cb?: (err: any, data?: UpdateServiceActionCommandOutput) => void
  ): Promise<UpdateServiceActionCommandOutput> | void {
    const command = new UpdateServiceActionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the specified TagOption.</p>
   */
  public updateTagOption(
    args: UpdateTagOptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTagOptionCommandOutput>;
  public updateTagOption(
    args: UpdateTagOptionCommandInput,
    cb: (err: any, data?: UpdateTagOptionCommandOutput) => void
  ): void;
  public updateTagOption(
    args: UpdateTagOptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTagOptionCommandOutput) => void
  ): void;
  public updateTagOption(
    args: UpdateTagOptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTagOptionCommandOutput) => void),
    cb?: (err: any, data?: UpdateTagOptionCommandOutput) => void
  ): Promise<UpdateTagOptionCommandOutput> | void {
    const command = new UpdateTagOptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
