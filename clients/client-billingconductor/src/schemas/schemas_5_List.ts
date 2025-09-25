// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _AA,
  _AAL,
  _AALE,
  _Ac,
  _AE,
  _AG,
  _AI,
  _AIc,
  _AL,
  _AN,
  _APPC,
  _AR,
  _Ar,
  _AS,
  _As,
  _At,
  _Att,
  _AWSC,
  _BE,
  _BG,
  _BGA,
  _BGAi,
  _BGCR,
  _BGCRE,
  _BGCRL,
  _BGCRR,
  _BGCRRE,
  _BGCRRL,
  _BGL,
  _BGLE,
  _BP,
  _BPR,
  _C,
  _CC,
  _CD,
  _CLI,
  _CLIL,
  _CLILE,
  _CLINL,
  _CLIV,
  _CLIVL,
  _CLIVLE,
  _CP,
  _CT,
  _D,
  _EBP,
  _EEBP,
  _Fi,
  _FT,
  _FTC,
  _GB,
  _GBGCR,
  _GBGCRI,
  _GBGCRO,
  _h,
  _ISBP,
  _K,
  _LA,
  _LAA,
  _LAAF,
  _LAAI,
  _LAAO,
  _LBG,
  _LBGAG,
  _LBGCR,
  _LBGCRF,
  _LBGCRI,
  _LBGCRO,
  _LBGF,
  _LBGI,
  _LBGO,
  _LCLI,
  _LCLIF,
  _LCLII,
  _LCLIO,
  _LCLIV,
  _LCLIVBPRF,
  _LCLIVF,
  _LCLIVI,
  _LCLIVO,
  _LMT,
  _LPP,
  _LPPAWPR,
  _LPPAWPRI,
  _LPPAWPRO,
  _LPPF,
  _LPPI,
  _LPPO,
  _LPR,
  _LPRATPP,
  _LPRATPPI,
  _LPRATPPO,
  _LPRF,
  _LPRI,
  _LPRO,
  _LRATCLI,
  _LRATCLIF,
  _LRATCLII,
  _LRATCLIO,
  _LRATCLIRE,
  _LRATCLIRL,
  _Ma,
  _MP,
  _MPo,
  _MR,
  _N,
  _Na,
  _NT,
  _O,
  _PAI,
  _PC,
  _PCr,
  _PP,
  _PPA,
  _PPAr,
  _PPL,
  _PPLE,
  _PPr,
  _PR,
  _PRA,
  _PRAr,
  _PRL,
  _PRLE,
  _Re,
  _S,
  _SBP,
  _Sc,
  _Se,
  _SR,
  _ST,
  _St,
  _Sta,
  _Ti,
  _Ty,
  _UT,
  _V,
  n0,
} from "./schemas_0";
import { CustomLineItemDescription, CustomLineItemName } from "./schemas_2_CustomLine";
import { BillingGroupDescription, BillingGroupName, ComputationPreference } from "./schemas_4_List";
import { PricingRuleDescription, PricingRuleName } from "./schemas_6_Pricing";
import { ListCustomLineItemChargeDetails } from "./schemas_8_List";
import { PricingPlanDescription, PricingPlanName } from "./schemas_9_Pricing";

/* eslint no-var: 0 */

export var AccountEmail = sim(n0, _AE, 0, 8);
export var AccountName = sim(n0, _AN, 0, 8);
export var AccountAssociationsListElement = struct(
  n0,
  _AALE,
  0,
  [_AI, _BGA, _AN, _AE],
  [0, 0, [() => AccountName, 0], [() => AccountEmail, 0]]
);
export var Attribute = struct(n0, _At, 0, [_K, _V], [0, 0]);
export var BillingGroupCostReportElement = struct(n0, _BGCRE, 0, [_A, _AWSC, _PC, _Ma, _MP, _C], [0, 0, 0, 0, 0, 0]);
export var BillingGroupCostReportResultElement = struct(
  n0,
  _BGCRRE,
  0,
  [_A, _AWSC, _PC, _Ma, _MP, _C, _Att],
  [0, 0, 0, 0, 0, 0, () => AttributesList]
);
export var BillingGroupListElement = struct(
  n0,
  _BGLE,
  0,
  [_N, _A, _D, _PAI, _CP, _S, _CT, _LMT, _St, _SR, _AG],
  [
    [() => BillingGroupName, 0],
    0,
    [() => BillingGroupDescription, 0],
    0,
    () => ComputationPreference,
    1,
    1,
    1,
    0,
    0,
    () => ListBillingGroupAccountGrouping,
  ]
);
export var BillingPeriodRange = struct(n0, _BPR, 0, [_ISBP, _EEBP], [0, 0]);
export var CustomLineItemListElement = struct(
  n0,
  _CLILE,
  0,
  [_A, _N, _CD, _CC, _D, _PCr, _BGA, _CT, _LMT, _AS, _AI],
  [
    0,
    [() => CustomLineItemName, 0],
    () => ListCustomLineItemChargeDetails,
    0,
    [() => CustomLineItemDescription, 0],
    0,
    0,
    1,
    1,
    1,
    0,
  ]
);
export var CustomLineItemVersionListElement = struct(
  n0,
  _CLIVLE,
  0,
  [_N, _CD, _CC, _D, _PCr, _BGA, _CT, _LMT, _AS, _SBP, _EBP, _A, _ST, _AI],
  [
    [() => CustomLineItemName, 0],
    () => ListCustomLineItemChargeDetails,
    0,
    [() => CustomLineItemDescription, 0],
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    0,
  ]
);
export var FreeTierConfig = struct(n0, _FTC, 0, [_Ac], [2]);
export var GetBillingGroupCostReportInput = struct(
  n0,
  _GBGCRI,
  0,
  [_A, _BPR, _GB, _MR, _NT],
  [0, () => BillingPeriodRange, 64 | 0, 1, 0]
);
export var GetBillingGroupCostReportOutput = struct(
  n0,
  _GBGCRO,
  0,
  [_BGCRR, _NT],
  [() => BillingGroupCostReportResultsList, 0]
);
export var ListAccountAssociationsFilter = struct(n0, _LAAF, 0, [_As, _AI, _AIc], [0, 0, 64 | 0]);
export var ListAccountAssociationsInput = struct(
  n0,
  _LAAI,
  0,
  [_BP, _Fi, _NT],
  [0, () => ListAccountAssociationsFilter, 0]
);
export var ListAccountAssociationsOutput = struct(n0, _LAAO, 0, [_LA, _NT], [[() => AccountAssociationsList, 0], 0]);
export var ListBillingGroupAccountGrouping = struct(n0, _LBGAG, 0, [_AA], [2]);
export var ListBillingGroupCostReportsFilter = struct(n0, _LBGCRF, 0, [_BGAi], [64 | 0]);
export var ListBillingGroupCostReportsInput = struct(
  n0,
  _LBGCRI,
  0,
  [_BP, _MR, _NT, _Fi],
  [0, 1, 0, () => ListBillingGroupCostReportsFilter]
);
export var ListBillingGroupCostReportsOutput = struct(
  n0,
  _LBGCRO,
  0,
  [_BGCR, _NT],
  [() => BillingGroupCostReportList, 0]
);
export var ListBillingGroupsFilter = struct(n0, _LBGF, 0, [_Ar, _PP, _Sta, _AA], [64 | 0, 0, 64 | 0, 2]);
export var ListBillingGroupsInput = struct(
  n0,
  _LBGI,
  0,
  [_BP, _MR, _NT, _Fi],
  [0, 1, 0, () => ListBillingGroupsFilter]
);
export var ListBillingGroupsOutput = struct(n0, _LBGO, 0, [_BG, _NT], [[() => BillingGroupList, 0], 0]);
export var ListCustomLineItemsFilter = struct(
  n0,
  _LCLIF,
  0,
  [_Na, _BG, _Ar, _AIc],
  [[() => CustomLineItemNameList, 0], 64 | 0, 64 | 0, 64 | 0]
);
export var ListCustomLineItemsInput = struct(
  n0,
  _LCLII,
  0,
  [_BP, _MR, _NT, _Fi],
  [0, 1, 0, [() => ListCustomLineItemsFilter, 0]]
);
export var ListCustomLineItemsOutput = struct(n0, _LCLIO, 0, [_CLI, _NT], [[() => CustomLineItemList, 0], 0]);
export var ListCustomLineItemVersionsBillingPeriodRangeFilter = struct(n0, _LCLIVBPRF, 0, [_SBP, _EBP], [0, 0]);
export var ListCustomLineItemVersionsFilter = struct(
  n0,
  _LCLIVF,
  0,
  [_BPR],
  [() => ListCustomLineItemVersionsBillingPeriodRangeFilter]
);
export var ListCustomLineItemVersionsInput = struct(
  n0,
  _LCLIVI,
  0,
  [_A, _MR, _NT, _Fi],
  [0, 1, 0, () => ListCustomLineItemVersionsFilter]
);
export var ListCustomLineItemVersionsOutput = struct(
  n0,
  _LCLIVO,
  0,
  [_CLIV, _NT],
  [[() => CustomLineItemVersionList, 0], 0]
);
export var ListPricingPlansAssociatedWithPricingRuleInput = struct(
  n0,
  _LPPAWPRI,
  0,
  [_BP, _PRAr, _MR, _NT],
  [0, 0, 1, 0]
);
export var ListPricingPlansAssociatedWithPricingRuleOutput = struct(
  n0,
  _LPPAWPRO,
  0,
  [_BP, _PRAr, _PPAr, _NT],
  [0, 0, 64 | 0, 0]
);
export var ListPricingPlansFilter = struct(n0, _LPPF, 0, [_Ar], [64 | 0]);
export var ListPricingPlansInput = struct(n0, _LPPI, 0, [_BP, _Fi, _MR, _NT], [0, () => ListPricingPlansFilter, 1, 0]);
export var ListPricingPlansOutput = struct(n0, _LPPO, 0, [_BP, _PPr, _NT], [0, [() => PricingPlanList, 0], 0]);
export var ListPricingRulesAssociatedToPricingPlanInput = struct(n0, _LPRATPPI, 0, [_BP, _PPA, _MR, _NT], [0, 0, 1, 0]);
export var ListPricingRulesAssociatedToPricingPlanOutput = struct(
  n0,
  _LPRATPPO,
  0,
  [_BP, _PPA, _PRA, _NT],
  [0, 0, 64 | 0, 0]
);
export var ListPricingRulesFilter = struct(n0, _LPRF, 0, [_Ar], [64 | 0]);
export var ListPricingRulesInput = struct(n0, _LPRI, 0, [_BP, _Fi, _MR, _NT], [0, () => ListPricingRulesFilter, 1, 0]);
export var ListPricingRulesOutput = struct(n0, _LPRO, 0, [_BP, _PR, _NT], [0, [() => PricingRuleList, 0], 0]);
export var ListResourcesAssociatedToCustomLineItemFilter = struct(n0, _LRATCLIF, 0, [_Re], [0]);
export var ListResourcesAssociatedToCustomLineItemInput = struct(
  n0,
  _LRATCLII,
  0,
  [_BP, _A, _MR, _NT, _Fi],
  [0, 0, 1, 0, () => ListResourcesAssociatedToCustomLineItemFilter]
);
export var ListResourcesAssociatedToCustomLineItemOutput = struct(
  n0,
  _LRATCLIO,
  0,
  [_A, _AR, _NT],
  [0, () => ListResourcesAssociatedToCustomLineItemResponseList, 0]
);
export var ListResourcesAssociatedToCustomLineItemResponseElement = struct(
  n0,
  _LRATCLIRE,
  0,
  [_A, _Re, _EBP],
  [0, 0, 0]
);
export var PricingPlanListElement = struct(
  n0,
  _PPLE,
  0,
  [_N, _A, _D, _S, _CT, _LMT],
  [[() => PricingPlanName, 0], 0, [() => PricingPlanDescription, 0], 1, 1, 1]
);
export var PricingRuleListElement = struct(
  n0,
  _PRLE,
  0,
  [_N, _A, _D, _Sc, _Ty, _MPo, _Se, _APPC, _CT, _LMT, _BE, _Ti, _UT, _O],
  [[() => PricingRuleName, 0], 0, [() => PricingRuleDescription, 0], 0, 0, 1, 0, 1, 1, 1, 0, () => Tiering, 0, 0]
);
export var Tiering = struct(n0, _Ti, 0, [_FT], [() => FreeTierConfig]);
export var AccountAssociationsList = list(n0, _AAL, 0, [() => AccountAssociationsListElement, 0]);
export var AccountIdFilterList = 64 | 0;

export var AttributesList = list(n0, _AL, 0, () => Attribute);
export var BillingGroupArnList = 64 | 0;

export var BillingGroupCostReportList = list(n0, _BGCRL, 0, () => BillingGroupCostReportElement);
export var BillingGroupCostReportResultsList = list(n0, _BGCRRL, 0, () => BillingGroupCostReportResultElement);
export var BillingGroupList = list(n0, _BGL, 0, [() => BillingGroupListElement, 0]);
export var BillingGroupStatusList = 64 | 0;

export var CustomLineItemArns = 64 | 0;

export var CustomLineItemList = list(n0, _CLIL, 0, [() => CustomLineItemListElement, 0]);
export var CustomLineItemNameList = list(n0, _CLINL, 0, [() => CustomLineItemName, 0]);
export var CustomLineItemVersionList = list(n0, _CLIVL, 0, [() => CustomLineItemVersionListElement, 0]);
export var GroupByAttributesList = 64 | 0;

export var ListResourcesAssociatedToCustomLineItemResponseList = list(
  n0,
  _LRATCLIRL,
  0,
  () => ListResourcesAssociatedToCustomLineItemResponseElement
);
export var PricingPlanArns = 64 | 0;

export var PricingPlanList = list(n0, _PPL, 0, [() => PricingPlanListElement, 0]);
export var PricingRuleArns = 64 | 0;

export var PricingRuleList = list(n0, _PRL, 0, [() => PricingRuleListElement, 0]);
export var GetBillingGroupCostReport = op(
  n0,
  _GBGCR,
  {
    [_h]: ["POST", "/get-billing-group-cost-report", 200],
  },
  () => GetBillingGroupCostReportInput,
  () => GetBillingGroupCostReportOutput
);
export var ListAccountAssociations = op(
  n0,
  _LAA,
  {
    [_h]: ["POST", "/list-account-associations", 200],
  },
  () => ListAccountAssociationsInput,
  () => ListAccountAssociationsOutput
);
export var ListBillingGroupCostReports = op(
  n0,
  _LBGCR,
  {
    [_h]: ["POST", "/list-billing-group-cost-reports", 200],
  },
  () => ListBillingGroupCostReportsInput,
  () => ListBillingGroupCostReportsOutput
);
export var ListBillingGroups = op(
  n0,
  _LBG,
  {
    [_h]: ["POST", "/list-billing-groups", 200],
  },
  () => ListBillingGroupsInput,
  () => ListBillingGroupsOutput
);
export var ListCustomLineItems = op(
  n0,
  _LCLI,
  {
    [_h]: ["POST", "/list-custom-line-items", 200],
  },
  () => ListCustomLineItemsInput,
  () => ListCustomLineItemsOutput
);
export var ListCustomLineItemVersions = op(
  n0,
  _LCLIV,
  {
    [_h]: ["POST", "/list-custom-line-item-versions", 200],
  },
  () => ListCustomLineItemVersionsInput,
  () => ListCustomLineItemVersionsOutput
);
export var ListPricingPlans = op(
  n0,
  _LPP,
  {
    [_h]: ["POST", "/list-pricing-plans", 200],
  },
  () => ListPricingPlansInput,
  () => ListPricingPlansOutput
);
export var ListPricingPlansAssociatedWithPricingRule = op(
  n0,
  _LPPAWPR,
  {
    [_h]: ["POST", "/list-pricing-plans-associated-with-pricing-rule", 200],
  },
  () => ListPricingPlansAssociatedWithPricingRuleInput,
  () => ListPricingPlansAssociatedWithPricingRuleOutput
);
export var ListPricingRules = op(
  n0,
  _LPR,
  {
    [_h]: ["POST", "/list-pricing-rules", 200],
  },
  () => ListPricingRulesInput,
  () => ListPricingRulesOutput
);
export var ListPricingRulesAssociatedToPricingPlan = op(
  n0,
  _LPRATPP,
  {
    [_h]: ["POST", "/list-pricing-rules-associated-to-pricing-plan", 200],
  },
  () => ListPricingRulesAssociatedToPricingPlanInput,
  () => ListPricingRulesAssociatedToPricingPlanOutput
);
export var ListResourcesAssociatedToCustomLineItem = op(
  n0,
  _LRATCLI,
  {
    [_h]: ["POST", "/list-resources-associated-to-custom-line-item", 200],
  },
  () => ListResourcesAssociatedToCustomLineItemInput,
  () => ListResourcesAssociatedToCustomLineItemOutput
);
