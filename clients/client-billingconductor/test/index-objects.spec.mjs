import {
  AccessDeniedException,
  AccessDeniedException$,
  AccountAssociationsListElement$,
  AccountGrouping$,
  AssociateAccounts$,
  AssociateAccountsCommand,
  AssociateAccountsInput$,
  AssociateAccountsOutput$,
  AssociatePricingRules$,
  AssociatePricingRulesCommand,
  AssociatePricingRulesInput$,
  AssociatePricingRulesOutput$,
  AssociateResourceError$,
  AssociateResourceErrorReason,
  AssociateResourceResponseElement$,
  Attribute$,
  BatchAssociateResourcesToCustomLineItem$,
  BatchAssociateResourcesToCustomLineItemCommand,
  BatchAssociateResourcesToCustomLineItemInput$,
  BatchAssociateResourcesToCustomLineItemOutput$,
  BatchDisassociateResourcesFromCustomLineItem$,
  BatchDisassociateResourcesFromCustomLineItemCommand,
  BatchDisassociateResourcesFromCustomLineItemInput$,
  BatchDisassociateResourcesFromCustomLineItemOutput$,
  BillingGroupCostReportElement$,
  BillingGroupCostReportResultElement$,
  BillingGroupListElement$,
  BillingGroupStatus,
  BillingGroupType,
  BillingPeriodRange$,
  Billingconductor,
  BillingconductorClient,
  BillingconductorServiceException,
  ComputationPreference$,
  ComputationRuleEnum,
  ConflictException,
  ConflictException$,
  ConflictExceptionReason,
  CreateBillingGroup$,
  CreateBillingGroupCommand,
  CreateBillingGroupInput$,
  CreateBillingGroupOutput$,
  CreateCustomLineItem$,
  CreateCustomLineItemCommand,
  CreateCustomLineItemInput$,
  CreateCustomLineItemOutput$,
  CreateFreeTierConfig$,
  CreatePricingPlan$,
  CreatePricingPlanCommand,
  CreatePricingPlanInput$,
  CreatePricingPlanOutput$,
  CreatePricingRule$,
  CreatePricingRuleCommand,
  CreatePricingRuleInput$,
  CreatePricingRuleOutput$,
  CreateTieringInput$,
  CurrencyCode,
  CustomLineItemBillingPeriodRange$,
  CustomLineItemChargeDetails$,
  CustomLineItemFlatChargeDetails$,
  CustomLineItemListElement$,
  CustomLineItemPercentageChargeDetails$,
  CustomLineItemRelationship,
  CustomLineItemType,
  CustomLineItemVersionListElement$,
  DeleteBillingGroup$,
  DeleteBillingGroupCommand,
  DeleteBillingGroupInput$,
  DeleteBillingGroupOutput$,
  DeleteCustomLineItem$,
  DeleteCustomLineItemCommand,
  DeleteCustomLineItemInput$,
  DeleteCustomLineItemOutput$,
  DeletePricingPlan$,
  DeletePricingPlanCommand,
  DeletePricingPlanInput$,
  DeletePricingPlanOutput$,
  DeletePricingRule$,
  DeletePricingRuleCommand,
  DeletePricingRuleInput$,
  DeletePricingRuleOutput$,
  DisassociateAccounts$,
  DisassociateAccountsCommand,
  DisassociateAccountsInput$,
  DisassociateAccountsOutput$,
  DisassociatePricingRules$,
  DisassociatePricingRulesCommand,
  DisassociatePricingRulesInput$,
  DisassociatePricingRulesOutput$,
  DisassociateResourceResponseElement$,
  FreeTierConfig$,
  GetBillingGroupCostReport$,
  GetBillingGroupCostReportCommand,
  GetBillingGroupCostReportInput$,
  GetBillingGroupCostReportOutput$,
  GroupByAttributeName,
  InternalServerException,
  InternalServerException$,
  LineItemFilter$,
  LineItemFilterAttributeName,
  LineItemFilterValue,
  ListAccountAssociations$,
  ListAccountAssociationsCommand,
  ListAccountAssociationsFilter$,
  ListAccountAssociationsInput$,
  ListAccountAssociationsOutput$,
  ListBillingGroupAccountGrouping$,
  ListBillingGroupCostReports$,
  ListBillingGroupCostReportsCommand,
  ListBillingGroupCostReportsFilter$,
  ListBillingGroupCostReportsInput$,
  ListBillingGroupCostReportsOutput$,
  ListBillingGroups$,
  ListBillingGroupsCommand,
  ListBillingGroupsFilter$,
  ListBillingGroupsInput$,
  ListBillingGroupsOutput$,
  ListCustomLineItemChargeDetails$,
  ListCustomLineItemFlatChargeDetails$,
  ListCustomLineItemPercentageChargeDetails$,
  ListCustomLineItemVersions$,
  ListCustomLineItemVersionsBillingPeriodRangeFilter$,
  ListCustomLineItemVersionsCommand,
  ListCustomLineItemVersionsFilter$,
  ListCustomLineItemVersionsInput$,
  ListCustomLineItemVersionsOutput$,
  ListCustomLineItems$,
  ListCustomLineItemsCommand,
  ListCustomLineItemsFilter$,
  ListCustomLineItemsInput$,
  ListCustomLineItemsOutput$,
  ListPricingPlans$,
  ListPricingPlansAssociatedWithPricingRule$,
  ListPricingPlansAssociatedWithPricingRuleCommand,
  ListPricingPlansAssociatedWithPricingRuleInput$,
  ListPricingPlansAssociatedWithPricingRuleOutput$,
  ListPricingPlansCommand,
  ListPricingPlansFilter$,
  ListPricingPlansInput$,
  ListPricingPlansOutput$,
  ListPricingRules$,
  ListPricingRulesAssociatedToPricingPlan$,
  ListPricingRulesAssociatedToPricingPlanCommand,
  ListPricingRulesAssociatedToPricingPlanInput$,
  ListPricingRulesAssociatedToPricingPlanOutput$,
  ListPricingRulesCommand,
  ListPricingRulesFilter$,
  ListPricingRulesInput$,
  ListPricingRulesOutput$,
  ListResourcesAssociatedToCustomLineItem$,
  ListResourcesAssociatedToCustomLineItemCommand,
  ListResourcesAssociatedToCustomLineItemFilter$,
  ListResourcesAssociatedToCustomLineItemInput$,
  ListResourcesAssociatedToCustomLineItemOutput$,
  ListResourcesAssociatedToCustomLineItemResponseElement$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MatchOption,
  PresentationObject$,
  PricingPlanListElement$,
  PricingRuleListElement$,
  PricingRuleScope,
  PricingRuleType,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SearchOption,
  ServiceLimitExceededException,
  ServiceLimitExceededException$,
  StringSearch$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  Tiering$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateBillingGroup$,
  UpdateBillingGroupAccountGrouping$,
  UpdateBillingGroupCommand,
  UpdateBillingGroupInput$,
  UpdateBillingGroupOutput$,
  UpdateCustomLineItem$,
  UpdateCustomLineItemChargeDetails$,
  UpdateCustomLineItemCommand,
  UpdateCustomLineItemFlatChargeDetails$,
  UpdateCustomLineItemInput$,
  UpdateCustomLineItemOutput$,
  UpdateCustomLineItemPercentageChargeDetails$,
  UpdateFreeTierConfig$,
  UpdatePricingPlan$,
  UpdatePricingPlanCommand,
  UpdatePricingPlanInput$,
  UpdatePricingPlanOutput$,
  UpdatePricingRule$,
  UpdatePricingRuleCommand,
  UpdatePricingRuleInput$,
  UpdatePricingRuleOutput$,
  UpdateTieringInput$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
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
assert(typeof AssociateAccounts$ === "object");
assert(typeof AssociatePricingRulesCommand === "function");
assert(typeof AssociatePricingRules$ === "object");
assert(typeof BatchAssociateResourcesToCustomLineItemCommand === "function");
assert(typeof BatchAssociateResourcesToCustomLineItem$ === "object");
assert(typeof BatchDisassociateResourcesFromCustomLineItemCommand === "function");
assert(typeof BatchDisassociateResourcesFromCustomLineItem$ === "object");
assert(typeof CreateBillingGroupCommand === "function");
assert(typeof CreateBillingGroup$ === "object");
assert(typeof CreateCustomLineItemCommand === "function");
assert(typeof CreateCustomLineItem$ === "object");
assert(typeof CreatePricingPlanCommand === "function");
assert(typeof CreatePricingPlan$ === "object");
assert(typeof CreatePricingRuleCommand === "function");
assert(typeof CreatePricingRule$ === "object");
assert(typeof DeleteBillingGroupCommand === "function");
assert(typeof DeleteBillingGroup$ === "object");
assert(typeof DeleteCustomLineItemCommand === "function");
assert(typeof DeleteCustomLineItem$ === "object");
assert(typeof DeletePricingPlanCommand === "function");
assert(typeof DeletePricingPlan$ === "object");
assert(typeof DeletePricingRuleCommand === "function");
assert(typeof DeletePricingRule$ === "object");
assert(typeof DisassociateAccountsCommand === "function");
assert(typeof DisassociateAccounts$ === "object");
assert(typeof DisassociatePricingRulesCommand === "function");
assert(typeof DisassociatePricingRules$ === "object");
assert(typeof GetBillingGroupCostReportCommand === "function");
assert(typeof GetBillingGroupCostReport$ === "object");
assert(typeof ListAccountAssociationsCommand === "function");
assert(typeof ListAccountAssociations$ === "object");
assert(typeof ListBillingGroupCostReportsCommand === "function");
assert(typeof ListBillingGroupCostReports$ === "object");
assert(typeof ListBillingGroupsCommand === "function");
assert(typeof ListBillingGroups$ === "object");
assert(typeof ListCustomLineItemsCommand === "function");
assert(typeof ListCustomLineItems$ === "object");
assert(typeof ListCustomLineItemVersionsCommand === "function");
assert(typeof ListCustomLineItemVersions$ === "object");
assert(typeof ListPricingPlansCommand === "function");
assert(typeof ListPricingPlans$ === "object");
assert(typeof ListPricingPlansAssociatedWithPricingRuleCommand === "function");
assert(typeof ListPricingPlansAssociatedWithPricingRule$ === "object");
assert(typeof ListPricingRulesCommand === "function");
assert(typeof ListPricingRules$ === "object");
assert(typeof ListPricingRulesAssociatedToPricingPlanCommand === "function");
assert(typeof ListPricingRulesAssociatedToPricingPlan$ === "object");
assert(typeof ListResourcesAssociatedToCustomLineItemCommand === "function");
assert(typeof ListResourcesAssociatedToCustomLineItem$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateBillingGroupCommand === "function");
assert(typeof UpdateBillingGroup$ === "object");
assert(typeof UpdateCustomLineItemCommand === "function");
assert(typeof UpdateCustomLineItem$ === "object");
assert(typeof UpdatePricingPlanCommand === "function");
assert(typeof UpdatePricingPlan$ === "object");
assert(typeof UpdatePricingRuleCommand === "function");
assert(typeof UpdatePricingRule$ === "object");
// structural schemas
assert(typeof AccountAssociationsListElement$ === "object");
assert(typeof AccountGrouping$ === "object");
assert(typeof AssociateAccountsInput$ === "object");
assert(typeof AssociateAccountsOutput$ === "object");
assert(typeof AssociatePricingRulesInput$ === "object");
assert(typeof AssociatePricingRulesOutput$ === "object");
assert(typeof AssociateResourceError$ === "object");
assert(typeof AssociateResourceResponseElement$ === "object");
assert(typeof Attribute$ === "object");
assert(typeof BatchAssociateResourcesToCustomLineItemInput$ === "object");
assert(typeof BatchAssociateResourcesToCustomLineItemOutput$ === "object");
assert(typeof BatchDisassociateResourcesFromCustomLineItemInput$ === "object");
assert(typeof BatchDisassociateResourcesFromCustomLineItemOutput$ === "object");
assert(typeof BillingGroupCostReportElement$ === "object");
assert(typeof BillingGroupCostReportResultElement$ === "object");
assert(typeof BillingGroupListElement$ === "object");
assert(typeof BillingPeriodRange$ === "object");
assert(typeof ComputationPreference$ === "object");
assert(typeof CreateBillingGroupInput$ === "object");
assert(typeof CreateBillingGroupOutput$ === "object");
assert(typeof CreateCustomLineItemInput$ === "object");
assert(typeof CreateCustomLineItemOutput$ === "object");
assert(typeof CreateFreeTierConfig$ === "object");
assert(typeof CreatePricingPlanInput$ === "object");
assert(typeof CreatePricingPlanOutput$ === "object");
assert(typeof CreatePricingRuleInput$ === "object");
assert(typeof CreatePricingRuleOutput$ === "object");
assert(typeof CreateTieringInput$ === "object");
assert(typeof CustomLineItemBillingPeriodRange$ === "object");
assert(typeof CustomLineItemChargeDetails$ === "object");
assert(typeof CustomLineItemFlatChargeDetails$ === "object");
assert(typeof CustomLineItemListElement$ === "object");
assert(typeof CustomLineItemPercentageChargeDetails$ === "object");
assert(typeof CustomLineItemVersionListElement$ === "object");
assert(typeof DeleteBillingGroupInput$ === "object");
assert(typeof DeleteBillingGroupOutput$ === "object");
assert(typeof DeleteCustomLineItemInput$ === "object");
assert(typeof DeleteCustomLineItemOutput$ === "object");
assert(typeof DeletePricingPlanInput$ === "object");
assert(typeof DeletePricingPlanOutput$ === "object");
assert(typeof DeletePricingRuleInput$ === "object");
assert(typeof DeletePricingRuleOutput$ === "object");
assert(typeof DisassociateAccountsInput$ === "object");
assert(typeof DisassociateAccountsOutput$ === "object");
assert(typeof DisassociatePricingRulesInput$ === "object");
assert(typeof DisassociatePricingRulesOutput$ === "object");
assert(typeof DisassociateResourceResponseElement$ === "object");
assert(typeof FreeTierConfig$ === "object");
assert(typeof GetBillingGroupCostReportInput$ === "object");
assert(typeof GetBillingGroupCostReportOutput$ === "object");
assert(typeof LineItemFilter$ === "object");
assert(typeof ListAccountAssociationsFilter$ === "object");
assert(typeof ListAccountAssociationsInput$ === "object");
assert(typeof ListAccountAssociationsOutput$ === "object");
assert(typeof ListBillingGroupAccountGrouping$ === "object");
assert(typeof ListBillingGroupCostReportsFilter$ === "object");
assert(typeof ListBillingGroupCostReportsInput$ === "object");
assert(typeof ListBillingGroupCostReportsOutput$ === "object");
assert(typeof ListBillingGroupsFilter$ === "object");
assert(typeof ListBillingGroupsInput$ === "object");
assert(typeof ListBillingGroupsOutput$ === "object");
assert(typeof ListCustomLineItemChargeDetails$ === "object");
assert(typeof ListCustomLineItemFlatChargeDetails$ === "object");
assert(typeof ListCustomLineItemPercentageChargeDetails$ === "object");
assert(typeof ListCustomLineItemsFilter$ === "object");
assert(typeof ListCustomLineItemsInput$ === "object");
assert(typeof ListCustomLineItemsOutput$ === "object");
assert(typeof ListCustomLineItemVersionsBillingPeriodRangeFilter$ === "object");
assert(typeof ListCustomLineItemVersionsFilter$ === "object");
assert(typeof ListCustomLineItemVersionsInput$ === "object");
assert(typeof ListCustomLineItemVersionsOutput$ === "object");
assert(typeof ListPricingPlansAssociatedWithPricingRuleInput$ === "object");
assert(typeof ListPricingPlansAssociatedWithPricingRuleOutput$ === "object");
assert(typeof ListPricingPlansFilter$ === "object");
assert(typeof ListPricingPlansInput$ === "object");
assert(typeof ListPricingPlansOutput$ === "object");
assert(typeof ListPricingRulesAssociatedToPricingPlanInput$ === "object");
assert(typeof ListPricingRulesAssociatedToPricingPlanOutput$ === "object");
assert(typeof ListPricingRulesFilter$ === "object");
assert(typeof ListPricingRulesInput$ === "object");
assert(typeof ListPricingRulesOutput$ === "object");
assert(typeof ListResourcesAssociatedToCustomLineItemFilter$ === "object");
assert(typeof ListResourcesAssociatedToCustomLineItemInput$ === "object");
assert(typeof ListResourcesAssociatedToCustomLineItemOutput$ === "object");
assert(typeof ListResourcesAssociatedToCustomLineItemResponseElement$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof PresentationObject$ === "object");
assert(typeof PricingPlanListElement$ === "object");
assert(typeof PricingRuleListElement$ === "object");
assert(typeof StringSearch$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof Tiering$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateBillingGroupAccountGrouping$ === "object");
assert(typeof UpdateBillingGroupInput$ === "object");
assert(typeof UpdateBillingGroupOutput$ === "object");
assert(typeof UpdateCustomLineItemChargeDetails$ === "object");
assert(typeof UpdateCustomLineItemFlatChargeDetails$ === "object");
assert(typeof UpdateCustomLineItemInput$ === "object");
assert(typeof UpdateCustomLineItemOutput$ === "object");
assert(typeof UpdateCustomLineItemPercentageChargeDetails$ === "object");
assert(typeof UpdateFreeTierConfig$ === "object");
assert(typeof UpdatePricingPlanInput$ === "object");
assert(typeof UpdatePricingPlanOutput$ === "object");
assert(typeof UpdatePricingRuleInput$ === "object");
assert(typeof UpdatePricingRuleOutput$ === "object");
assert(typeof UpdateTieringInput$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof AssociateResourceErrorReason === "object");
assert(typeof BillingGroupStatus === "object");
assert(typeof BillingGroupType === "object");
assert(typeof ComputationRuleEnum === "object");
assert(typeof ConflictExceptionReason === "object");
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
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof BillingconductorServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof BillingconductorServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof BillingconductorServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof BillingconductorServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceLimitExceededException.prototype instanceof BillingconductorServiceException);
assert(typeof ServiceLimitExceededException$ === "object");
assert(ThrottlingException.prototype instanceof BillingconductorServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof BillingconductorServiceException);
assert(typeof ValidationException$ === "object");
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
