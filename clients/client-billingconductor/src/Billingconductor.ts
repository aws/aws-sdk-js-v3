// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { BillingconductorClient, BillingconductorClientConfig } from "./BillingconductorClient";
import {
  AssociateAccountsCommand,
  AssociateAccountsCommandInput,
  AssociateAccountsCommandOutput,
} from "./commands/AssociateAccountsCommand";
import {
  AssociatePricingRulesCommand,
  AssociatePricingRulesCommandInput,
  AssociatePricingRulesCommandOutput,
} from "./commands/AssociatePricingRulesCommand";
import {
  BatchAssociateResourcesToCustomLineItemCommand,
  BatchAssociateResourcesToCustomLineItemCommandInput,
  BatchAssociateResourcesToCustomLineItemCommandOutput,
} from "./commands/BatchAssociateResourcesToCustomLineItemCommand";
import {
  BatchDisassociateResourcesFromCustomLineItemCommand,
  BatchDisassociateResourcesFromCustomLineItemCommandInput,
  BatchDisassociateResourcesFromCustomLineItemCommandOutput,
} from "./commands/BatchDisassociateResourcesFromCustomLineItemCommand";
import {
  CreateBillingGroupCommand,
  CreateBillingGroupCommandInput,
  CreateBillingGroupCommandOutput,
} from "./commands/CreateBillingGroupCommand";
import {
  CreateCustomLineItemCommand,
  CreateCustomLineItemCommandInput,
  CreateCustomLineItemCommandOutput,
} from "./commands/CreateCustomLineItemCommand";
import {
  CreatePricingPlanCommand,
  CreatePricingPlanCommandInput,
  CreatePricingPlanCommandOutput,
} from "./commands/CreatePricingPlanCommand";
import {
  CreatePricingRuleCommand,
  CreatePricingRuleCommandInput,
  CreatePricingRuleCommandOutput,
} from "./commands/CreatePricingRuleCommand";
import {
  DeleteBillingGroupCommand,
  DeleteBillingGroupCommandInput,
  DeleteBillingGroupCommandOutput,
} from "./commands/DeleteBillingGroupCommand";
import {
  DeleteCustomLineItemCommand,
  DeleteCustomLineItemCommandInput,
  DeleteCustomLineItemCommandOutput,
} from "./commands/DeleteCustomLineItemCommand";
import {
  DeletePricingPlanCommand,
  DeletePricingPlanCommandInput,
  DeletePricingPlanCommandOutput,
} from "./commands/DeletePricingPlanCommand";
import {
  DeletePricingRuleCommand,
  DeletePricingRuleCommandInput,
  DeletePricingRuleCommandOutput,
} from "./commands/DeletePricingRuleCommand";
import {
  DisassociateAccountsCommand,
  DisassociateAccountsCommandInput,
  DisassociateAccountsCommandOutput,
} from "./commands/DisassociateAccountsCommand";
import {
  DisassociatePricingRulesCommand,
  DisassociatePricingRulesCommandInput,
  DisassociatePricingRulesCommandOutput,
} from "./commands/DisassociatePricingRulesCommand";
import {
  ListAccountAssociationsCommand,
  ListAccountAssociationsCommandInput,
  ListAccountAssociationsCommandOutput,
} from "./commands/ListAccountAssociationsCommand";
import {
  ListBillingGroupCostReportsCommand,
  ListBillingGroupCostReportsCommandInput,
  ListBillingGroupCostReportsCommandOutput,
} from "./commands/ListBillingGroupCostReportsCommand";
import {
  ListBillingGroupsCommand,
  ListBillingGroupsCommandInput,
  ListBillingGroupsCommandOutput,
} from "./commands/ListBillingGroupsCommand";
import {
  ListCustomLineItemsCommand,
  ListCustomLineItemsCommandInput,
  ListCustomLineItemsCommandOutput,
} from "./commands/ListCustomLineItemsCommand";
import {
  ListCustomLineItemVersionsCommand,
  ListCustomLineItemVersionsCommandInput,
  ListCustomLineItemVersionsCommandOutput,
} from "./commands/ListCustomLineItemVersionsCommand";
import {
  ListPricingPlansAssociatedWithPricingRuleCommand,
  ListPricingPlansAssociatedWithPricingRuleCommandInput,
  ListPricingPlansAssociatedWithPricingRuleCommandOutput,
} from "./commands/ListPricingPlansAssociatedWithPricingRuleCommand";
import {
  ListPricingPlansCommand,
  ListPricingPlansCommandInput,
  ListPricingPlansCommandOutput,
} from "./commands/ListPricingPlansCommand";
import {
  ListPricingRulesAssociatedToPricingPlanCommand,
  ListPricingRulesAssociatedToPricingPlanCommandInput,
  ListPricingRulesAssociatedToPricingPlanCommandOutput,
} from "./commands/ListPricingRulesAssociatedToPricingPlanCommand";
import {
  ListPricingRulesCommand,
  ListPricingRulesCommandInput,
  ListPricingRulesCommandOutput,
} from "./commands/ListPricingRulesCommand";
import {
  ListResourcesAssociatedToCustomLineItemCommand,
  ListResourcesAssociatedToCustomLineItemCommandInput,
  ListResourcesAssociatedToCustomLineItemCommandOutput,
} from "./commands/ListResourcesAssociatedToCustomLineItemCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateBillingGroupCommand,
  UpdateBillingGroupCommandInput,
  UpdateBillingGroupCommandOutput,
} from "./commands/UpdateBillingGroupCommand";
import {
  UpdateCustomLineItemCommand,
  UpdateCustomLineItemCommandInput,
  UpdateCustomLineItemCommandOutput,
} from "./commands/UpdateCustomLineItemCommand";
import {
  UpdatePricingPlanCommand,
  UpdatePricingPlanCommandInput,
  UpdatePricingPlanCommandOutput,
} from "./commands/UpdatePricingPlanCommand";
import {
  UpdatePricingRuleCommand,
  UpdatePricingRuleCommandInput,
  UpdatePricingRuleCommandOutput,
} from "./commands/UpdatePricingRuleCommand";

const commands = {
  AssociateAccountsCommand,
  AssociatePricingRulesCommand,
  BatchAssociateResourcesToCustomLineItemCommand,
  BatchDisassociateResourcesFromCustomLineItemCommand,
  CreateBillingGroupCommand,
  CreateCustomLineItemCommand,
  CreatePricingPlanCommand,
  CreatePricingRuleCommand,
  DeleteBillingGroupCommand,
  DeleteCustomLineItemCommand,
  DeletePricingPlanCommand,
  DeletePricingRuleCommand,
  DisassociateAccountsCommand,
  DisassociatePricingRulesCommand,
  ListAccountAssociationsCommand,
  ListBillingGroupCostReportsCommand,
  ListBillingGroupsCommand,
  ListCustomLineItemsCommand,
  ListCustomLineItemVersionsCommand,
  ListPricingPlansCommand,
  ListPricingPlansAssociatedWithPricingRuleCommand,
  ListPricingRulesCommand,
  ListPricingRulesAssociatedToPricingPlanCommand,
  ListResourcesAssociatedToCustomLineItemCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateBillingGroupCommand,
  UpdateCustomLineItemCommand,
  UpdatePricingPlanCommand,
  UpdatePricingRuleCommand,
};

export interface Billingconductor {
  /**
   * @see {@link AssociateAccountsCommand}
   */
  associateAccounts(
    args: AssociateAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateAccountsCommandOutput>;
  associateAccounts(
    args: AssociateAccountsCommandInput,
    cb: (err: any, data?: AssociateAccountsCommandOutput) => void
  ): void;
  associateAccounts(
    args: AssociateAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociatePricingRulesCommand}
   */
  associatePricingRules(
    args: AssociatePricingRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociatePricingRulesCommandOutput>;
  associatePricingRules(
    args: AssociatePricingRulesCommandInput,
    cb: (err: any, data?: AssociatePricingRulesCommandOutput) => void
  ): void;
  associatePricingRules(
    args: AssociatePricingRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociatePricingRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchAssociateResourcesToCustomLineItemCommand}
   */
  batchAssociateResourcesToCustomLineItem(
    args: BatchAssociateResourcesToCustomLineItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchAssociateResourcesToCustomLineItemCommandOutput>;
  batchAssociateResourcesToCustomLineItem(
    args: BatchAssociateResourcesToCustomLineItemCommandInput,
    cb: (err: any, data?: BatchAssociateResourcesToCustomLineItemCommandOutput) => void
  ): void;
  batchAssociateResourcesToCustomLineItem(
    args: BatchAssociateResourcesToCustomLineItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchAssociateResourcesToCustomLineItemCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDisassociateResourcesFromCustomLineItemCommand}
   */
  batchDisassociateResourcesFromCustomLineItem(
    args: BatchDisassociateResourcesFromCustomLineItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDisassociateResourcesFromCustomLineItemCommandOutput>;
  batchDisassociateResourcesFromCustomLineItem(
    args: BatchDisassociateResourcesFromCustomLineItemCommandInput,
    cb: (err: any, data?: BatchDisassociateResourcesFromCustomLineItemCommandOutput) => void
  ): void;
  batchDisassociateResourcesFromCustomLineItem(
    args: BatchDisassociateResourcesFromCustomLineItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDisassociateResourcesFromCustomLineItemCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBillingGroupCommand}
   */
  createBillingGroup(
    args: CreateBillingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBillingGroupCommandOutput>;
  createBillingGroup(
    args: CreateBillingGroupCommandInput,
    cb: (err: any, data?: CreateBillingGroupCommandOutput) => void
  ): void;
  createBillingGroup(
    args: CreateBillingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBillingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCustomLineItemCommand}
   */
  createCustomLineItem(
    args: CreateCustomLineItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomLineItemCommandOutput>;
  createCustomLineItem(
    args: CreateCustomLineItemCommandInput,
    cb: (err: any, data?: CreateCustomLineItemCommandOutput) => void
  ): void;
  createCustomLineItem(
    args: CreateCustomLineItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomLineItemCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePricingPlanCommand}
   */
  createPricingPlan(
    args: CreatePricingPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePricingPlanCommandOutput>;
  createPricingPlan(
    args: CreatePricingPlanCommandInput,
    cb: (err: any, data?: CreatePricingPlanCommandOutput) => void
  ): void;
  createPricingPlan(
    args: CreatePricingPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePricingPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePricingRuleCommand}
   */
  createPricingRule(
    args: CreatePricingRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePricingRuleCommandOutput>;
  createPricingRule(
    args: CreatePricingRuleCommandInput,
    cb: (err: any, data?: CreatePricingRuleCommandOutput) => void
  ): void;
  createPricingRule(
    args: CreatePricingRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePricingRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBillingGroupCommand}
   */
  deleteBillingGroup(
    args: DeleteBillingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBillingGroupCommandOutput>;
  deleteBillingGroup(
    args: DeleteBillingGroupCommandInput,
    cb: (err: any, data?: DeleteBillingGroupCommandOutput) => void
  ): void;
  deleteBillingGroup(
    args: DeleteBillingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBillingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCustomLineItemCommand}
   */
  deleteCustomLineItem(
    args: DeleteCustomLineItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomLineItemCommandOutput>;
  deleteCustomLineItem(
    args: DeleteCustomLineItemCommandInput,
    cb: (err: any, data?: DeleteCustomLineItemCommandOutput) => void
  ): void;
  deleteCustomLineItem(
    args: DeleteCustomLineItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomLineItemCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePricingPlanCommand}
   */
  deletePricingPlan(
    args: DeletePricingPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePricingPlanCommandOutput>;
  deletePricingPlan(
    args: DeletePricingPlanCommandInput,
    cb: (err: any, data?: DeletePricingPlanCommandOutput) => void
  ): void;
  deletePricingPlan(
    args: DeletePricingPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePricingPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePricingRuleCommand}
   */
  deletePricingRule(
    args: DeletePricingRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePricingRuleCommandOutput>;
  deletePricingRule(
    args: DeletePricingRuleCommandInput,
    cb: (err: any, data?: DeletePricingRuleCommandOutput) => void
  ): void;
  deletePricingRule(
    args: DeletePricingRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePricingRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateAccountsCommand}
   */
  disassociateAccounts(
    args: DisassociateAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateAccountsCommandOutput>;
  disassociateAccounts(
    args: DisassociateAccountsCommandInput,
    cb: (err: any, data?: DisassociateAccountsCommandOutput) => void
  ): void;
  disassociateAccounts(
    args: DisassociateAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociatePricingRulesCommand}
   */
  disassociatePricingRules(
    args: DisassociatePricingRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociatePricingRulesCommandOutput>;
  disassociatePricingRules(
    args: DisassociatePricingRulesCommandInput,
    cb: (err: any, data?: DisassociatePricingRulesCommandOutput) => void
  ): void;
  disassociatePricingRules(
    args: DisassociatePricingRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociatePricingRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccountAssociationsCommand}
   */
  listAccountAssociations(
    args: ListAccountAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountAssociationsCommandOutput>;
  listAccountAssociations(
    args: ListAccountAssociationsCommandInput,
    cb: (err: any, data?: ListAccountAssociationsCommandOutput) => void
  ): void;
  listAccountAssociations(
    args: ListAccountAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBillingGroupCostReportsCommand}
   */
  listBillingGroupCostReports(
    args: ListBillingGroupCostReportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBillingGroupCostReportsCommandOutput>;
  listBillingGroupCostReports(
    args: ListBillingGroupCostReportsCommandInput,
    cb: (err: any, data?: ListBillingGroupCostReportsCommandOutput) => void
  ): void;
  listBillingGroupCostReports(
    args: ListBillingGroupCostReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBillingGroupCostReportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBillingGroupsCommand}
   */
  listBillingGroups(
    args: ListBillingGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBillingGroupsCommandOutput>;
  listBillingGroups(
    args: ListBillingGroupsCommandInput,
    cb: (err: any, data?: ListBillingGroupsCommandOutput) => void
  ): void;
  listBillingGroups(
    args: ListBillingGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBillingGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomLineItemsCommand}
   */
  listCustomLineItems(
    args: ListCustomLineItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomLineItemsCommandOutput>;
  listCustomLineItems(
    args: ListCustomLineItemsCommandInput,
    cb: (err: any, data?: ListCustomLineItemsCommandOutput) => void
  ): void;
  listCustomLineItems(
    args: ListCustomLineItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomLineItemsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomLineItemVersionsCommand}
   */
  listCustomLineItemVersions(
    args: ListCustomLineItemVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomLineItemVersionsCommandOutput>;
  listCustomLineItemVersions(
    args: ListCustomLineItemVersionsCommandInput,
    cb: (err: any, data?: ListCustomLineItemVersionsCommandOutput) => void
  ): void;
  listCustomLineItemVersions(
    args: ListCustomLineItemVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomLineItemVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPricingPlansCommand}
   */
  listPricingPlans(
    args: ListPricingPlansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPricingPlansCommandOutput>;
  listPricingPlans(
    args: ListPricingPlansCommandInput,
    cb: (err: any, data?: ListPricingPlansCommandOutput) => void
  ): void;
  listPricingPlans(
    args: ListPricingPlansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPricingPlansCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPricingPlansAssociatedWithPricingRuleCommand}
   */
  listPricingPlansAssociatedWithPricingRule(
    args: ListPricingPlansAssociatedWithPricingRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPricingPlansAssociatedWithPricingRuleCommandOutput>;
  listPricingPlansAssociatedWithPricingRule(
    args: ListPricingPlansAssociatedWithPricingRuleCommandInput,
    cb: (err: any, data?: ListPricingPlansAssociatedWithPricingRuleCommandOutput) => void
  ): void;
  listPricingPlansAssociatedWithPricingRule(
    args: ListPricingPlansAssociatedWithPricingRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPricingPlansAssociatedWithPricingRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPricingRulesCommand}
   */
  listPricingRules(
    args: ListPricingRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPricingRulesCommandOutput>;
  listPricingRules(
    args: ListPricingRulesCommandInput,
    cb: (err: any, data?: ListPricingRulesCommandOutput) => void
  ): void;
  listPricingRules(
    args: ListPricingRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPricingRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPricingRulesAssociatedToPricingPlanCommand}
   */
  listPricingRulesAssociatedToPricingPlan(
    args: ListPricingRulesAssociatedToPricingPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPricingRulesAssociatedToPricingPlanCommandOutput>;
  listPricingRulesAssociatedToPricingPlan(
    args: ListPricingRulesAssociatedToPricingPlanCommandInput,
    cb: (err: any, data?: ListPricingRulesAssociatedToPricingPlanCommandOutput) => void
  ): void;
  listPricingRulesAssociatedToPricingPlan(
    args: ListPricingRulesAssociatedToPricingPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPricingRulesAssociatedToPricingPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourcesAssociatedToCustomLineItemCommand}
   */
  listResourcesAssociatedToCustomLineItem(
    args: ListResourcesAssociatedToCustomLineItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourcesAssociatedToCustomLineItemCommandOutput>;
  listResourcesAssociatedToCustomLineItem(
    args: ListResourcesAssociatedToCustomLineItemCommandInput,
    cb: (err: any, data?: ListResourcesAssociatedToCustomLineItemCommandOutput) => void
  ): void;
  listResourcesAssociatedToCustomLineItem(
    args: ListResourcesAssociatedToCustomLineItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourcesAssociatedToCustomLineItemCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBillingGroupCommand}
   */
  updateBillingGroup(
    args: UpdateBillingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBillingGroupCommandOutput>;
  updateBillingGroup(
    args: UpdateBillingGroupCommandInput,
    cb: (err: any, data?: UpdateBillingGroupCommandOutput) => void
  ): void;
  updateBillingGroup(
    args: UpdateBillingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBillingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCustomLineItemCommand}
   */
  updateCustomLineItem(
    args: UpdateCustomLineItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCustomLineItemCommandOutput>;
  updateCustomLineItem(
    args: UpdateCustomLineItemCommandInput,
    cb: (err: any, data?: UpdateCustomLineItemCommandOutput) => void
  ): void;
  updateCustomLineItem(
    args: UpdateCustomLineItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCustomLineItemCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePricingPlanCommand}
   */
  updatePricingPlan(
    args: UpdatePricingPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePricingPlanCommandOutput>;
  updatePricingPlan(
    args: UpdatePricingPlanCommandInput,
    cb: (err: any, data?: UpdatePricingPlanCommandOutput) => void
  ): void;
  updatePricingPlan(
    args: UpdatePricingPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePricingPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePricingRuleCommand}
   */
  updatePricingRule(
    args: UpdatePricingRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePricingRuleCommandOutput>;
  updatePricingRule(
    args: UpdatePricingRuleCommandInput,
    cb: (err: any, data?: UpdatePricingRuleCommandOutput) => void
  ): void;
  updatePricingRule(
    args: UpdatePricingRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePricingRuleCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Web Services Billing Conductor is a fully managed service that you can use
 *       to customize a <a href="https://docs.aws.amazon.com/billingconductor/latest/userguide/understanding-eb.html#eb-other-definitions">pro forma</a> version of your billing data each month, to accurately show or chargeback
 *       your end customers. Amazon Web Services Billing Conductor doesn't change the way
 *       you're billed by Amazon Web Services each month by design. Instead, it provides you with a
 *       mechanism to configure, generate, and display rates to certain customers over a given billing
 *       period. You can also analyze the difference between the rates you apply to your accounting
 *       groupings relative to your actual rates from Amazon Web Services. As a result of your Amazon Web Services Billing Conductor configuration, the payer account can also see the
 *       custom rate applied on the billing details page of the <a href="https://console.aws.amazon.com/billing">Amazon Web Services Billing console</a>, or configure a cost and usage report per
 *       billing group.</p>
 *          <p>This documentation shows how you can configure Amazon Web Services Billing Conductor using its
 *       API. For more information about using the <a href="https://console.aws.amazon.com/billingconductor/">Amazon Web Services
 *         Billing Conductor</a> user interface, see the <a href="https://docs.aws.amazon.com/billingconductor/latest/userguide/what-is-billingconductor.html"> Amazon Web Services Billing Conductor User Guide</a>.</p>
 */
export class Billingconductor extends BillingconductorClient implements Billingconductor {}
createAggregatedClient(commands, Billingconductor);
