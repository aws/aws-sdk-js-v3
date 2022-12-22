// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { BillingconductorClient } from "./BillingconductorClient";
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

/**
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
export class Billingconductor extends BillingconductorClient {
  /**
   * <p>Connects an array of account IDs in a consolidated billing family to a predefined
   *       billing group. The account IDs must be a part of the consolidated billing family during the
   *       current month, and not already associated with another billing group. The maximum number of
   *       accounts that can be associated in one call is 30. </p>
   */
  public associateAccounts(
    args: AssociateAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateAccountsCommandOutput>;
  public associateAccounts(
    args: AssociateAccountsCommandInput,
    cb: (err: any, data?: AssociateAccountsCommandOutput) => void
  ): void;
  public associateAccounts(
    args: AssociateAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateAccountsCommandOutput) => void
  ): void;
  public associateAccounts(
    args: AssociateAccountsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateAccountsCommandOutput) => void),
    cb?: (err: any, data?: AssociateAccountsCommandOutput) => void
  ): Promise<AssociateAccountsCommandOutput> | void {
    const command = new AssociateAccountsCommand(args);
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
   * <p>Connects an array of <code>PricingRuleArns</code> to a defined <code>PricingPlan</code>.
   *       The maximum number <code>PricingRuleArn</code> that can be associated in one call is 30. </p>
   */
  public associatePricingRules(
    args: AssociatePricingRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociatePricingRulesCommandOutput>;
  public associatePricingRules(
    args: AssociatePricingRulesCommandInput,
    cb: (err: any, data?: AssociatePricingRulesCommandOutput) => void
  ): void;
  public associatePricingRules(
    args: AssociatePricingRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociatePricingRulesCommandOutput) => void
  ): void;
  public associatePricingRules(
    args: AssociatePricingRulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociatePricingRulesCommandOutput) => void),
    cb?: (err: any, data?: AssociatePricingRulesCommandOutput) => void
  ): Promise<AssociatePricingRulesCommandOutput> | void {
    const command = new AssociatePricingRulesCommand(args);
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
   * <p>
   *       Associates a batch of resources to a percentage custom line item.
   *     </p>
   */
  public batchAssociateResourcesToCustomLineItem(
    args: BatchAssociateResourcesToCustomLineItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchAssociateResourcesToCustomLineItemCommandOutput>;
  public batchAssociateResourcesToCustomLineItem(
    args: BatchAssociateResourcesToCustomLineItemCommandInput,
    cb: (err: any, data?: BatchAssociateResourcesToCustomLineItemCommandOutput) => void
  ): void;
  public batchAssociateResourcesToCustomLineItem(
    args: BatchAssociateResourcesToCustomLineItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchAssociateResourcesToCustomLineItemCommandOutput) => void
  ): void;
  public batchAssociateResourcesToCustomLineItem(
    args: BatchAssociateResourcesToCustomLineItemCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchAssociateResourcesToCustomLineItemCommandOutput) => void),
    cb?: (err: any, data?: BatchAssociateResourcesToCustomLineItemCommandOutput) => void
  ): Promise<BatchAssociateResourcesToCustomLineItemCommandOutput> | void {
    const command = new BatchAssociateResourcesToCustomLineItemCommand(args);
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
   * <p>
   *       Disassociates a batch of resources from a percentage custom line item.
   *     </p>
   */
  public batchDisassociateResourcesFromCustomLineItem(
    args: BatchDisassociateResourcesFromCustomLineItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDisassociateResourcesFromCustomLineItemCommandOutput>;
  public batchDisassociateResourcesFromCustomLineItem(
    args: BatchDisassociateResourcesFromCustomLineItemCommandInput,
    cb: (err: any, data?: BatchDisassociateResourcesFromCustomLineItemCommandOutput) => void
  ): void;
  public batchDisassociateResourcesFromCustomLineItem(
    args: BatchDisassociateResourcesFromCustomLineItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDisassociateResourcesFromCustomLineItemCommandOutput) => void
  ): void;
  public batchDisassociateResourcesFromCustomLineItem(
    args: BatchDisassociateResourcesFromCustomLineItemCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchDisassociateResourcesFromCustomLineItemCommandOutput) => void),
    cb?: (err: any, data?: BatchDisassociateResourcesFromCustomLineItemCommandOutput) => void
  ): Promise<BatchDisassociateResourcesFromCustomLineItemCommandOutput> | void {
    const command = new BatchDisassociateResourcesFromCustomLineItemCommand(args);
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
   * <p>
   *       Creates a billing group that resembles a consolidated billing family that Amazon Web Services charges, based off of the predefined pricing plan computation.
   *     </p>
   */
  public createBillingGroup(
    args: CreateBillingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBillingGroupCommandOutput>;
  public createBillingGroup(
    args: CreateBillingGroupCommandInput,
    cb: (err: any, data?: CreateBillingGroupCommandOutput) => void
  ): void;
  public createBillingGroup(
    args: CreateBillingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBillingGroupCommandOutput) => void
  ): void;
  public createBillingGroup(
    args: CreateBillingGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBillingGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateBillingGroupCommandOutput) => void
  ): Promise<CreateBillingGroupCommandOutput> | void {
    const command = new CreateBillingGroupCommand(args);
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
   * <p>
   *       Creates a custom line item that can be used to create a one-time fixed charge that can be applied to a single billing group for the current or previous billing period. The one-time fixed charge is either a fee or discount.
   *     </p>
   */
  public createCustomLineItem(
    args: CreateCustomLineItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomLineItemCommandOutput>;
  public createCustomLineItem(
    args: CreateCustomLineItemCommandInput,
    cb: (err: any, data?: CreateCustomLineItemCommandOutput) => void
  ): void;
  public createCustomLineItem(
    args: CreateCustomLineItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomLineItemCommandOutput) => void
  ): void;
  public createCustomLineItem(
    args: CreateCustomLineItemCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCustomLineItemCommandOutput) => void),
    cb?: (err: any, data?: CreateCustomLineItemCommandOutput) => void
  ): Promise<CreateCustomLineItemCommandOutput> | void {
    const command = new CreateCustomLineItemCommand(args);
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
   * <p>Creates a pricing plan that is used for computing Amazon Web Services charges for billing groups.
   *     </p>
   */
  public createPricingPlan(
    args: CreatePricingPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePricingPlanCommandOutput>;
  public createPricingPlan(
    args: CreatePricingPlanCommandInput,
    cb: (err: any, data?: CreatePricingPlanCommandOutput) => void
  ): void;
  public createPricingPlan(
    args: CreatePricingPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePricingPlanCommandOutput) => void
  ): void;
  public createPricingPlan(
    args: CreatePricingPlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePricingPlanCommandOutput) => void),
    cb?: (err: any, data?: CreatePricingPlanCommandOutput) => void
  ): Promise<CreatePricingPlanCommandOutput> | void {
    const command = new CreatePricingPlanCommand(args);
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
   * <p>
   *       Creates a pricing rule can be associated to a pricing plan, or a set of pricing plans.
   *     </p>
   */
  public createPricingRule(
    args: CreatePricingRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePricingRuleCommandOutput>;
  public createPricingRule(
    args: CreatePricingRuleCommandInput,
    cb: (err: any, data?: CreatePricingRuleCommandOutput) => void
  ): void;
  public createPricingRule(
    args: CreatePricingRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePricingRuleCommandOutput) => void
  ): void;
  public createPricingRule(
    args: CreatePricingRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePricingRuleCommandOutput) => void),
    cb?: (err: any, data?: CreatePricingRuleCommandOutput) => void
  ): Promise<CreatePricingRuleCommandOutput> | void {
    const command = new CreatePricingRuleCommand(args);
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
   * <p>
   *       Deletes a billing group.
   *     </p>
   */
  public deleteBillingGroup(
    args: DeleteBillingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBillingGroupCommandOutput>;
  public deleteBillingGroup(
    args: DeleteBillingGroupCommandInput,
    cb: (err: any, data?: DeleteBillingGroupCommandOutput) => void
  ): void;
  public deleteBillingGroup(
    args: DeleteBillingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBillingGroupCommandOutput) => void
  ): void;
  public deleteBillingGroup(
    args: DeleteBillingGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBillingGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteBillingGroupCommandOutput) => void
  ): Promise<DeleteBillingGroupCommandOutput> | void {
    const command = new DeleteBillingGroupCommand(args);
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
   * <p>
   *       Deletes the custom line item identified by the given ARN in the current, or previous billing period.
   *     </p>
   */
  public deleteCustomLineItem(
    args: DeleteCustomLineItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomLineItemCommandOutput>;
  public deleteCustomLineItem(
    args: DeleteCustomLineItemCommandInput,
    cb: (err: any, data?: DeleteCustomLineItemCommandOutput) => void
  ): void;
  public deleteCustomLineItem(
    args: DeleteCustomLineItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomLineItemCommandOutput) => void
  ): void;
  public deleteCustomLineItem(
    args: DeleteCustomLineItemCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCustomLineItemCommandOutput) => void),
    cb?: (err: any, data?: DeleteCustomLineItemCommandOutput) => void
  ): Promise<DeleteCustomLineItemCommandOutput> | void {
    const command = new DeleteCustomLineItemCommand(args);
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
   * <p>Deletes a pricing plan. The pricing plan must not be associated with any billing groups to
   *       delete successfully.</p>
   */
  public deletePricingPlan(
    args: DeletePricingPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePricingPlanCommandOutput>;
  public deletePricingPlan(
    args: DeletePricingPlanCommandInput,
    cb: (err: any, data?: DeletePricingPlanCommandOutput) => void
  ): void;
  public deletePricingPlan(
    args: DeletePricingPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePricingPlanCommandOutput) => void
  ): void;
  public deletePricingPlan(
    args: DeletePricingPlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePricingPlanCommandOutput) => void),
    cb?: (err: any, data?: DeletePricingPlanCommandOutput) => void
  ): Promise<DeletePricingPlanCommandOutput> | void {
    const command = new DeletePricingPlanCommand(args);
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
   * <p> Deletes the pricing rule that's identified by the input Amazon Resource Name (ARN). </p>
   */
  public deletePricingRule(
    args: DeletePricingRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePricingRuleCommandOutput>;
  public deletePricingRule(
    args: DeletePricingRuleCommandInput,
    cb: (err: any, data?: DeletePricingRuleCommandOutput) => void
  ): void;
  public deletePricingRule(
    args: DeletePricingRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePricingRuleCommandOutput) => void
  ): void;
  public deletePricingRule(
    args: DeletePricingRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePricingRuleCommandOutput) => void),
    cb?: (err: any, data?: DeletePricingRuleCommandOutput) => void
  ): Promise<DeletePricingRuleCommandOutput> | void {
    const command = new DeletePricingRuleCommand(args);
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
   * <p>Removes the specified list of account IDs from the given billing group. </p>
   */
  public disassociateAccounts(
    args: DisassociateAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateAccountsCommandOutput>;
  public disassociateAccounts(
    args: DisassociateAccountsCommandInput,
    cb: (err: any, data?: DisassociateAccountsCommandOutput) => void
  ): void;
  public disassociateAccounts(
    args: DisassociateAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateAccountsCommandOutput) => void
  ): void;
  public disassociateAccounts(
    args: DisassociateAccountsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateAccountsCommandOutput) => void),
    cb?: (err: any, data?: DisassociateAccountsCommandOutput) => void
  ): Promise<DisassociateAccountsCommandOutput> | void {
    const command = new DisassociateAccountsCommand(args);
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
   * <p>
   *       Disassociates a list of pricing rules from a pricing plan.
   *     </p>
   */
  public disassociatePricingRules(
    args: DisassociatePricingRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociatePricingRulesCommandOutput>;
  public disassociatePricingRules(
    args: DisassociatePricingRulesCommandInput,
    cb: (err: any, data?: DisassociatePricingRulesCommandOutput) => void
  ): void;
  public disassociatePricingRules(
    args: DisassociatePricingRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociatePricingRulesCommandOutput) => void
  ): void;
  public disassociatePricingRules(
    args: DisassociatePricingRulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociatePricingRulesCommandOutput) => void),
    cb?: (err: any, data?: DisassociatePricingRulesCommandOutput) => void
  ): Promise<DisassociatePricingRulesCommandOutput> | void {
    const command = new DisassociatePricingRulesCommand(args);
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
   * <p> This is a paginated call to list linked accounts that are linked to the payer account for
   *       the specified time period. If no information is provided, the current billing period is used.
   *       The response will optionally include the billing group that's associated with the linked
   *       account.</p>
   */
  public listAccountAssociations(
    args: ListAccountAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountAssociationsCommandOutput>;
  public listAccountAssociations(
    args: ListAccountAssociationsCommandInput,
    cb: (err: any, data?: ListAccountAssociationsCommandOutput) => void
  ): void;
  public listAccountAssociations(
    args: ListAccountAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountAssociationsCommandOutput) => void
  ): void;
  public listAccountAssociations(
    args: ListAccountAssociationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAccountAssociationsCommandOutput) => void),
    cb?: (err: any, data?: ListAccountAssociationsCommandOutput) => void
  ): Promise<ListAccountAssociationsCommandOutput> | void {
    const command = new ListAccountAssociationsCommand(args);
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
   * <p>A paginated call to retrieve a summary report of actual Amazon Web Services charges and the calculated
   *       Amazon Web Services charges based on the associated pricing plan of a billing group.</p>
   */
  public listBillingGroupCostReports(
    args: ListBillingGroupCostReportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBillingGroupCostReportsCommandOutput>;
  public listBillingGroupCostReports(
    args: ListBillingGroupCostReportsCommandInput,
    cb: (err: any, data?: ListBillingGroupCostReportsCommandOutput) => void
  ): void;
  public listBillingGroupCostReports(
    args: ListBillingGroupCostReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBillingGroupCostReportsCommandOutput) => void
  ): void;
  public listBillingGroupCostReports(
    args: ListBillingGroupCostReportsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBillingGroupCostReportsCommandOutput) => void),
    cb?: (err: any, data?: ListBillingGroupCostReportsCommandOutput) => void
  ): Promise<ListBillingGroupCostReportsCommandOutput> | void {
    const command = new ListBillingGroupCostReportsCommand(args);
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
   * <p>A paginated call to retrieve a list of billing groups for the given billing period. If you don't provide a billing group, the current billing period is used.</p>
   */
  public listBillingGroups(
    args: ListBillingGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBillingGroupsCommandOutput>;
  public listBillingGroups(
    args: ListBillingGroupsCommandInput,
    cb: (err: any, data?: ListBillingGroupsCommandOutput) => void
  ): void;
  public listBillingGroups(
    args: ListBillingGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBillingGroupsCommandOutput) => void
  ): void;
  public listBillingGroups(
    args: ListBillingGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBillingGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListBillingGroupsCommandOutput) => void
  ): Promise<ListBillingGroupsCommandOutput> | void {
    const command = new ListBillingGroupsCommand(args);
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
   * <p>
   *       A paginated call to get a list of all custom line items (FFLIs) for the given billing period. If you don't provide a billing period, the current billing period is used.
   *     </p>
   */
  public listCustomLineItems(
    args: ListCustomLineItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomLineItemsCommandOutput>;
  public listCustomLineItems(
    args: ListCustomLineItemsCommandInput,
    cb: (err: any, data?: ListCustomLineItemsCommandOutput) => void
  ): void;
  public listCustomLineItems(
    args: ListCustomLineItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomLineItemsCommandOutput) => void
  ): void;
  public listCustomLineItems(
    args: ListCustomLineItemsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCustomLineItemsCommandOutput) => void),
    cb?: (err: any, data?: ListCustomLineItemsCommandOutput) => void
  ): Promise<ListCustomLineItemsCommandOutput> | void {
    const command = new ListCustomLineItemsCommand(args);
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
   * <p>A paginated call to get a list of all custom line item versions.</p>
   */
  public listCustomLineItemVersions(
    args: ListCustomLineItemVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomLineItemVersionsCommandOutput>;
  public listCustomLineItemVersions(
    args: ListCustomLineItemVersionsCommandInput,
    cb: (err: any, data?: ListCustomLineItemVersionsCommandOutput) => void
  ): void;
  public listCustomLineItemVersions(
    args: ListCustomLineItemVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomLineItemVersionsCommandOutput) => void
  ): void;
  public listCustomLineItemVersions(
    args: ListCustomLineItemVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCustomLineItemVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListCustomLineItemVersionsCommandOutput) => void
  ): Promise<ListCustomLineItemVersionsCommandOutput> | void {
    const command = new ListCustomLineItemVersionsCommand(args);
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
   * <p>A paginated call to get pricing plans for the given billing period. If you don't provide a billing period, the current billing period is used.
   *     </p>
   */
  public listPricingPlans(
    args: ListPricingPlansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPricingPlansCommandOutput>;
  public listPricingPlans(
    args: ListPricingPlansCommandInput,
    cb: (err: any, data?: ListPricingPlansCommandOutput) => void
  ): void;
  public listPricingPlans(
    args: ListPricingPlansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPricingPlansCommandOutput) => void
  ): void;
  public listPricingPlans(
    args: ListPricingPlansCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPricingPlansCommandOutput) => void),
    cb?: (err: any, data?: ListPricingPlansCommandOutput) => void
  ): Promise<ListPricingPlansCommandOutput> | void {
    const command = new ListPricingPlansCommand(args);
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
   * <p>
   *       A list of the pricing plans that are associated with a pricing rule.
   *     </p>
   */
  public listPricingPlansAssociatedWithPricingRule(
    args: ListPricingPlansAssociatedWithPricingRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPricingPlansAssociatedWithPricingRuleCommandOutput>;
  public listPricingPlansAssociatedWithPricingRule(
    args: ListPricingPlansAssociatedWithPricingRuleCommandInput,
    cb: (err: any, data?: ListPricingPlansAssociatedWithPricingRuleCommandOutput) => void
  ): void;
  public listPricingPlansAssociatedWithPricingRule(
    args: ListPricingPlansAssociatedWithPricingRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPricingPlansAssociatedWithPricingRuleCommandOutput) => void
  ): void;
  public listPricingPlansAssociatedWithPricingRule(
    args: ListPricingPlansAssociatedWithPricingRuleCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListPricingPlansAssociatedWithPricingRuleCommandOutput) => void),
    cb?: (err: any, data?: ListPricingPlansAssociatedWithPricingRuleCommandOutput) => void
  ): Promise<ListPricingPlansAssociatedWithPricingRuleCommandOutput> | void {
    const command = new ListPricingPlansAssociatedWithPricingRuleCommand(args);
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
   * <p>
   *       Describes a pricing rule that can be associated to a pricing plan, or set of pricing plans.
   *     </p>
   */
  public listPricingRules(
    args: ListPricingRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPricingRulesCommandOutput>;
  public listPricingRules(
    args: ListPricingRulesCommandInput,
    cb: (err: any, data?: ListPricingRulesCommandOutput) => void
  ): void;
  public listPricingRules(
    args: ListPricingRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPricingRulesCommandOutput) => void
  ): void;
  public listPricingRules(
    args: ListPricingRulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPricingRulesCommandOutput) => void),
    cb?: (err: any, data?: ListPricingRulesCommandOutput) => void
  ): Promise<ListPricingRulesCommandOutput> | void {
    const command = new ListPricingRulesCommand(args);
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
   * <p>
   *       Lists the pricing rules that are associated with a pricing plan.
   *     </p>
   */
  public listPricingRulesAssociatedToPricingPlan(
    args: ListPricingRulesAssociatedToPricingPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPricingRulesAssociatedToPricingPlanCommandOutput>;
  public listPricingRulesAssociatedToPricingPlan(
    args: ListPricingRulesAssociatedToPricingPlanCommandInput,
    cb: (err: any, data?: ListPricingRulesAssociatedToPricingPlanCommandOutput) => void
  ): void;
  public listPricingRulesAssociatedToPricingPlan(
    args: ListPricingRulesAssociatedToPricingPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPricingRulesAssociatedToPricingPlanCommandOutput) => void
  ): void;
  public listPricingRulesAssociatedToPricingPlan(
    args: ListPricingRulesAssociatedToPricingPlanCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListPricingRulesAssociatedToPricingPlanCommandOutput) => void),
    cb?: (err: any, data?: ListPricingRulesAssociatedToPricingPlanCommandOutput) => void
  ): Promise<ListPricingRulesAssociatedToPricingPlanCommandOutput> | void {
    const command = new ListPricingRulesAssociatedToPricingPlanCommand(args);
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
   * <p>
   *       List the resources that are associated to a custom line item.
   *     </p>
   */
  public listResourcesAssociatedToCustomLineItem(
    args: ListResourcesAssociatedToCustomLineItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourcesAssociatedToCustomLineItemCommandOutput>;
  public listResourcesAssociatedToCustomLineItem(
    args: ListResourcesAssociatedToCustomLineItemCommandInput,
    cb: (err: any, data?: ListResourcesAssociatedToCustomLineItemCommandOutput) => void
  ): void;
  public listResourcesAssociatedToCustomLineItem(
    args: ListResourcesAssociatedToCustomLineItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourcesAssociatedToCustomLineItemCommandOutput) => void
  ): void;
  public listResourcesAssociatedToCustomLineItem(
    args: ListResourcesAssociatedToCustomLineItemCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListResourcesAssociatedToCustomLineItemCommandOutput) => void),
    cb?: (err: any, data?: ListResourcesAssociatedToCustomLineItemCommandOutput) => void
  ): Promise<ListResourcesAssociatedToCustomLineItemCommandOutput> | void {
    const command = new ListResourcesAssociatedToCustomLineItemCommand(args);
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
   * <p>
   *       A list the tags for a resource.
   *     </p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
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
   * <p> Associates the specified tags to a resource with the specified <code>resourceArn</code>.
   *       If existing tags on a resource are not specified in the request parameters, they are not
   *       changed. </p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
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
   * <p>
   *       Deletes specified tags from a resource.
   *     </p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
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
   * <p>This updates an existing billing group.
   *     </p>
   */
  public updateBillingGroup(
    args: UpdateBillingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBillingGroupCommandOutput>;
  public updateBillingGroup(
    args: UpdateBillingGroupCommandInput,
    cb: (err: any, data?: UpdateBillingGroupCommandOutput) => void
  ): void;
  public updateBillingGroup(
    args: UpdateBillingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBillingGroupCommandOutput) => void
  ): void;
  public updateBillingGroup(
    args: UpdateBillingGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBillingGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateBillingGroupCommandOutput) => void
  ): Promise<UpdateBillingGroupCommandOutput> | void {
    const command = new UpdateBillingGroupCommand(args);
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
   * <p>
   *       Update an existing custom line item in the current or previous billing period.
   *     </p>
   */
  public updateCustomLineItem(
    args: UpdateCustomLineItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCustomLineItemCommandOutput>;
  public updateCustomLineItem(
    args: UpdateCustomLineItemCommandInput,
    cb: (err: any, data?: UpdateCustomLineItemCommandOutput) => void
  ): void;
  public updateCustomLineItem(
    args: UpdateCustomLineItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCustomLineItemCommandOutput) => void
  ): void;
  public updateCustomLineItem(
    args: UpdateCustomLineItemCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCustomLineItemCommandOutput) => void),
    cb?: (err: any, data?: UpdateCustomLineItemCommandOutput) => void
  ): Promise<UpdateCustomLineItemCommandOutput> | void {
    const command = new UpdateCustomLineItemCommand(args);
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
   * <p>This updates an existing pricing plan.
   *     </p>
   */
  public updatePricingPlan(
    args: UpdatePricingPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePricingPlanCommandOutput>;
  public updatePricingPlan(
    args: UpdatePricingPlanCommandInput,
    cb: (err: any, data?: UpdatePricingPlanCommandOutput) => void
  ): void;
  public updatePricingPlan(
    args: UpdatePricingPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePricingPlanCommandOutput) => void
  ): void;
  public updatePricingPlan(
    args: UpdatePricingPlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePricingPlanCommandOutput) => void),
    cb?: (err: any, data?: UpdatePricingPlanCommandOutput) => void
  ): Promise<UpdatePricingPlanCommandOutput> | void {
    const command = new UpdatePricingPlanCommand(args);
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
   * <p>
   *       Updates an existing pricing rule.
   *     </p>
   */
  public updatePricingRule(
    args: UpdatePricingRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePricingRuleCommandOutput>;
  public updatePricingRule(
    args: UpdatePricingRuleCommandInput,
    cb: (err: any, data?: UpdatePricingRuleCommandOutput) => void
  ): void;
  public updatePricingRule(
    args: UpdatePricingRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePricingRuleCommandOutput) => void
  ): void;
  public updatePricingRule(
    args: UpdatePricingRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePricingRuleCommandOutput) => void),
    cb?: (err: any, data?: UpdatePricingRuleCommandOutput) => void
  ): Promise<UpdatePricingRuleCommandOutput> | void {
    const command = new UpdatePricingRuleCommand(args);
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
