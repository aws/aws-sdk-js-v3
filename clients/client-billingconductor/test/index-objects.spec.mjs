import {
  AssociateAccountsCommand,
  AssociatePricingRulesCommand,
  AssociateResourceErrorReason,
  BatchAssociateResourcesToCustomLineItemCommand,
  BatchDisassociateResourcesFromCustomLineItemCommand,
  BillingGroupStatus,
  BillingGroupType,
  Billingconductor,
  BillingconductorClient,
  BillingconductorServiceException,
  ComputationRuleEnum,
  CreateBillingGroupCommand,
  CreateCustomLineItemCommand,
  CreatePricingPlanCommand,
  CreatePricingRuleCommand,
  CurrencyCode,
  CustomLineItemRelationship,
  CustomLineItemType,
  DeleteBillingGroupCommand,
  DeleteCustomLineItemCommand,
  DeletePricingPlanCommand,
  DeletePricingRuleCommand,
  DisassociateAccountsCommand,
  DisassociatePricingRulesCommand,
  GetBillingGroupCostReportCommand,
  GroupByAttributeName,
  LineItemFilterAttributeName,
  LineItemFilterValue,
  ListAccountAssociationsCommand,
  ListBillingGroupCostReportsCommand,
  ListBillingGroupsCommand,
  ListCustomLineItemVersionsCommand,
  ListCustomLineItemsCommand,
  ListPricingPlansAssociatedWithPricingRuleCommand,
  ListPricingPlansCommand,
  ListPricingRulesAssociatedToPricingPlanCommand,
  ListPricingRulesCommand,
  ListResourcesAssociatedToCustomLineItemCommand,
  ListTagsForResourceCommand,
  MatchOption,
  PricingRuleScope,
  PricingRuleType,
  SearchOption,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateBillingGroupCommand,
  UpdateCustomLineItemCommand,
  UpdatePricingPlanCommand,
  UpdatePricingRuleCommand,
  paginateGetBillingGroupCostReport,
  paginateListAccountAssociations,
  paginateListBillingGroupCostReports,
  paginateListBillingGroups,
  paginateListCustomLineItemVersions,
  paginateListCustomLineItems,
  paginateListPricingPlans,
  paginateListPricingPlansAssociatedWithPricingRule,
  paginateListPricingRules,
  paginateListPricingRulesAssociatedToPricingPlan,
  paginateListResourcesAssociatedToCustomLineItem,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BillingconductorClient === "function");
assert(typeof Billingconductor === "function");
// commands
assert(typeof AssociateAccountsCommand === "function");
assert(typeof AssociatePricingRulesCommand === "function");
assert(typeof BatchAssociateResourcesToCustomLineItemCommand === "function");
assert(typeof BatchDisassociateResourcesFromCustomLineItemCommand === "function");
assert(typeof CreateBillingGroupCommand === "function");
assert(typeof CreateCustomLineItemCommand === "function");
assert(typeof CreatePricingPlanCommand === "function");
assert(typeof CreatePricingRuleCommand === "function");
assert(typeof DeleteBillingGroupCommand === "function");
assert(typeof DeleteCustomLineItemCommand === "function");
assert(typeof DeletePricingPlanCommand === "function");
assert(typeof DeletePricingRuleCommand === "function");
assert(typeof DisassociateAccountsCommand === "function");
assert(typeof DisassociatePricingRulesCommand === "function");
assert(typeof GetBillingGroupCostReportCommand === "function");
assert(typeof ListAccountAssociationsCommand === "function");
assert(typeof ListBillingGroupCostReportsCommand === "function");
assert(typeof ListBillingGroupsCommand === "function");
assert(typeof ListCustomLineItemsCommand === "function");
assert(typeof ListCustomLineItemVersionsCommand === "function");
assert(typeof ListPricingPlansCommand === "function");
assert(typeof ListPricingPlansAssociatedWithPricingRuleCommand === "function");
assert(typeof ListPricingRulesCommand === "function");
assert(typeof ListPricingRulesAssociatedToPricingPlanCommand === "function");
assert(typeof ListResourcesAssociatedToCustomLineItemCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateBillingGroupCommand === "function");
assert(typeof UpdateCustomLineItemCommand === "function");
assert(typeof UpdatePricingPlanCommand === "function");
assert(typeof UpdatePricingRuleCommand === "function");
// enums
assert(typeof AssociateResourceErrorReason === "object");
assert(typeof BillingGroupStatus === "object");
assert(typeof BillingGroupType === "object");
assert(typeof ComputationRuleEnum === "object");
assert(typeof CurrencyCode === "object");
assert(typeof CustomLineItemRelationship === "object");
assert(typeof CustomLineItemType === "object");
assert(typeof GroupByAttributeName === "object");
assert(typeof LineItemFilterAttributeName === "object");
assert(typeof LineItemFilterValue === "object");
assert(typeof MatchOption === "object");
assert(typeof PricingRuleScope === "object");
assert(typeof PricingRuleType === "object");
assert(typeof SearchOption === "object");
// errors
assert(BillingconductorServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetBillingGroupCostReport === "function");
assert(typeof paginateListAccountAssociations === "function");
assert(typeof paginateListBillingGroupCostReports === "function");
assert(typeof paginateListBillingGroups === "function");
assert(typeof paginateListCustomLineItemVersions === "function");
assert(typeof paginateListCustomLineItems === "function");
assert(typeof paginateListPricingPlans === "function");
assert(typeof paginateListPricingPlansAssociatedWithPricingRule === "function");
assert(typeof paginateListPricingRules === "function");
assert(typeof paginateListPricingRulesAssociatedToPricingPlan === "function");
assert(typeof paginateListResourcesAssociatedToCustomLineItem === "function");
console.log(`Billingconductor index test passed.`);
