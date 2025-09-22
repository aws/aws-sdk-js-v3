// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AAC,
  _ACn,
  _ACnd,
  _AOCL,
  _ATC,
  _CFMo,
  _CFMSC,
  _CFMSCL,
  _CFMSF,
  _CFMSSL,
  _CFon,
  _CFSC,
  _CFSCL,
  _CFSF,
  _CFSSL,
  _Con,
  _Cond,
  _CPTF,
  _CPUAF,
  _CTom,
  _D,
  _DC,
  _DUI,
  _FNi,
  _FNir,
  _h,
  _HGC,
  _HGI,
  _HGMT,
  _HOOL,
  _HOOo,
  _HOOOo,
  _HOOOSC,
  _HOOOSCL,
  _HOOSC,
  _HOOSCL,
  _HOOSF,
  _I,
  _II,
  _IId,
  _LCi,
  _LN,
  _MRa,
  _MV,
  _MVa,
  _NC,
  _NT,
  _OC,
  _ORI,
  _PCh,
  _PLro,
  _Prom,
  _PSC,
  _PSCL,
  _PSF,
  _QCSC,
  _QCSCL,
  _QCSF,
  _QCSSL,
  _QCui,
  _QSC,
  _QSCL,
  _QSF,
  _QSSL,
  _QTC,
  _Qu,
  _RPI,
  _RPL,
  _RPo,
  _RPSC,
  _RPSCL,
  _RPSF,
  _SC,
  _SCe,
  _SCF,
  _SCFM,
  _SCFMR,
  _SCFMRe,
  _SCFR,
  _SCFRe,
  _SCta,
  _SCtat,
  _SF,
  _SHOO,
  _SHOOO,
  _SHOOOR,
  _SHOOORe,
  _SHOOR,
  _SHOORe,
  _SPe,
  _SPea,
  _SPIe,
  _SPN,
  _SPR,
  _SPRe,
  _SPSC,
  _SPSCL,
  _SPSF,
  _SPSS,
  _SPSSL,
  _SQ,
  _SQC,
  _SQCR,
  _SQCRe,
  _SQR,
  _SQRe,
  _SRP,
  _SRPR,
  _SRPRe,
  _SSP,
  _SSPR,
  _SSPRe,
  _SUe,
  _SUR,
  _SURe,
  _Ta,
  _TC,
  _TCa,
  _TCy,
  _TF,
  _TLT,
  _TOCL,
  _U,
  _UAF,
  _UIIL,
  _USC,
  _USCL,
  _Use,
  _USF,
  _USS,
  _USSL,
  _V,
  n0,
  StringCondition,
  TagAndConditionList,
  TagCondition,
} from "./schemas_0";
import { QuickConnect } from "./schemas_2_Quick";
import { HoursOfOperation, HoursOfOperationOverrideList } from "./schemas_6_Hours";
import { Queue } from "./schemas_10_Email";
import { AgentFirstName, AgentLastName } from "./schemas_12_User";
import { ContactFlow } from "./schemas_16_Contact";
import { ContactFlowModule } from "./schemas_19_Flow";
import { Prompt } from "./schemas_66_Prompt";
import { RoutingProfile } from "./schemas_74_Routing";
import { UserPhoneConfig } from "./schemas_78_User";

/* eslint no-var: 0 */

export var AttributeAndCondition = struct(
  n0,
  _AAC,
  0,
  [_TC, _HGC],
  [() => TagAndConditionList, () => HierarchyGroupCondition]
);
export var Condition = struct(n0, _Con, 0, [_SC, _NC], [() => StringCondition, () => NumberCondition]);
export var ContactFlowModuleSearchCriteria = struct(
  n0,
  _CFMSC,
  0,
  [_OC, _ACn, _SC, _SCta, _SCtat],
  [() => ContactFlowModuleSearchConditionList, () => ContactFlowModuleSearchConditionList, () => StringCondition, 0, 0]
);
export var ContactFlowModuleSearchFilter = struct(n0, _CFMSF, 0, [_TF], [() => ControlPlaneTagFilter]);
export var ContactFlowSearchCriteria = struct(
  n0,
  _CFSC,
  0,
  [_OC, _ACn, _SC, _TCy, _SCta, _SCtat],
  [() => ContactFlowSearchConditionList, () => ContactFlowSearchConditionList, () => StringCondition, 0, 0, 0]
);
export var ContactFlowSearchFilter = struct(n0, _CFSF, 0, [_TF], [() => ControlPlaneTagFilter]);
export var ControlPlaneTagFilter = struct(
  n0,
  _CPTF,
  0,
  [_OC, _ACn, _TCa],
  [() => TagOrConditionList, () => TagAndConditionList, () => TagCondition]
);
export var ControlPlaneUserAttributeFilter = struct(
  n0,
  _CPUAF,
  0,
  [_OC, _ACnd, _TCa, _HGC],
  [() => AttributeOrConditionList, () => AttributeAndCondition, () => TagCondition, () => HierarchyGroupCondition]
);
export var DateCondition = struct(n0, _DC, 0, [_FNi, _V, _CTom], [0, 0, 0]);
export var HierarchyGroupCondition = struct(n0, _HGC, 0, [_V, _HGMT], [0, 0]);
export var HoursOfOperationOverrideSearchCriteria = struct(
  n0,
  _HOOOSC,
  0,
  [_OC, _ACn, _SC, _DC],
  [
    () => HoursOfOperationOverrideSearchConditionList,
    () => HoursOfOperationOverrideSearchConditionList,
    () => StringCondition,
    () => DateCondition,
  ]
);
export var HoursOfOperationSearchCriteria = struct(
  n0,
  _HOOSC,
  0,
  [_OC, _ACn, _SC],
  [() => HoursOfOperationSearchConditionList, () => HoursOfOperationSearchConditionList, () => StringCondition]
);
export var HoursOfOperationSearchFilter = struct(n0, _HOOSF, 0, [_TF], [() => ControlPlaneTagFilter]);
export var ListCondition = struct(n0, _LCi, 0, [_TLT, _Cond], [0, () => Conditions]);
export var NumberCondition = struct(n0, _NC, 0, [_FNi, _MV, _MVa, _CTom], [0, 1, 1, 0]);
export var PromptSearchCriteria = struct(
  n0,
  _PSC,
  0,
  [_OC, _ACn, _SC],
  [() => PromptSearchConditionList, () => PromptSearchConditionList, () => StringCondition]
);
export var PromptSearchFilter = struct(n0, _PSF, 0, [_TF], [() => ControlPlaneTagFilter]);
export var QueueSearchCriteria = struct(
  n0,
  _QSC,
  0,
  [_OC, _ACn, _SC, _QTC],
  [() => QueueSearchConditionList, () => QueueSearchConditionList, () => StringCondition, 0]
);
export var QueueSearchFilter = struct(n0, _QSF, 0, [_TF], [() => ControlPlaneTagFilter]);
export var QuickConnectSearchCriteria = struct(
  n0,
  _QCSC,
  0,
  [_OC, _ACn, _SC],
  [() => QuickConnectSearchConditionList, () => QuickConnectSearchConditionList, () => StringCondition]
);
export var QuickConnectSearchFilter = struct(n0, _QCSF, 0, [_TF], [() => ControlPlaneTagFilter]);
export var RoutingProfileSearchCriteria = struct(
  n0,
  _RPSC,
  0,
  [_OC, _ACn, _SC],
  [() => RoutingProfileSearchConditionList, () => RoutingProfileSearchConditionList, () => StringCondition]
);
export var RoutingProfileSearchFilter = struct(n0, _RPSF, 0, [_TF], [() => ControlPlaneTagFilter]);
export var SearchContactFlowModulesRequest = struct(
  n0,
  _SCFMR,
  0,
  [_II, _NT, _MRa, _SF, _SCe],
  [0, 0, 1, () => ContactFlowModuleSearchFilter, () => ContactFlowModuleSearchCriteria]
);
export var SearchContactFlowModulesResponse = struct(
  n0,
  _SCFMRe,
  0,
  [_CFMo, _NT, _ATC],
  [() => ContactFlowModuleSearchSummaryList, 0, 1]
);
export var SearchContactFlowsRequest = struct(
  n0,
  _SCFR,
  0,
  [_II, _NT, _MRa, _SF, _SCe],
  [0, 0, 1, () => ContactFlowSearchFilter, () => ContactFlowSearchCriteria]
);
export var SearchContactFlowsResponse = struct(
  n0,
  _SCFRe,
  0,
  [_CFon, _NT, _ATC],
  [() => ContactFlowSearchSummaryList, 0, 1]
);
export var SearchHoursOfOperationOverridesRequest = struct(
  n0,
  _SHOOOR,
  0,
  [_II, _NT, _MRa, _SF, _SCe],
  [0, 0, 1, () => HoursOfOperationSearchFilter, () => HoursOfOperationOverrideSearchCriteria]
);
export var SearchHoursOfOperationOverridesResponse = struct(
  n0,
  _SHOOORe,
  0,
  [_HOOOo, _NT, _ATC],
  [() => HoursOfOperationOverrideList, 0, 1]
);
export var SearchHoursOfOperationsRequest = struct(
  n0,
  _SHOOR,
  0,
  [_II, _NT, _MRa, _SF, _SCe],
  [0, 0, 1, () => HoursOfOperationSearchFilter, () => HoursOfOperationSearchCriteria]
);
export var SearchHoursOfOperationsResponse = struct(
  n0,
  _SHOORe,
  0,
  [_HOOo, _NT, _ATC],
  [() => HoursOfOperationList, 0, 1]
);
export var SearchPromptsRequest = struct(
  n0,
  _SPR,
  0,
  [_II, _NT, _MRa, _SF, _SCe],
  [0, 0, 1, () => PromptSearchFilter, () => PromptSearchCriteria]
);
export var SearchPromptsResponse = struct(n0, _SPRe, 0, [_Prom, _NT, _ATC], [() => PromptList, 0, 1]);
export var SearchQueuesRequest = struct(
  n0,
  _SQR,
  0,
  [_II, _NT, _MRa, _SF, _SCe],
  [0, 0, 1, () => QueueSearchFilter, () => QueueSearchCriteria]
);
export var SearchQueuesResponse = struct(n0, _SQRe, 0, [_Qu, _NT, _ATC], [() => QueueSearchSummaryList, 0, 1]);
export var SearchQuickConnectsRequest = struct(
  n0,
  _SQCR,
  0,
  [_II, _NT, _MRa, _SF, _SCe],
  [0, 0, 1, () => QuickConnectSearchFilter, () => QuickConnectSearchCriteria]
);
export var SearchQuickConnectsResponse = struct(
  n0,
  _SQCRe,
  0,
  [_QCui, _NT, _ATC],
  [() => QuickConnectSearchSummaryList, 0, 1]
);
export var SearchRoutingProfilesRequest = struct(
  n0,
  _SRPR,
  0,
  [_II, _NT, _MRa, _SF, _SCe],
  [0, 0, 1, () => RoutingProfileSearchFilter, () => RoutingProfileSearchCriteria]
);
export var SearchRoutingProfilesResponse = struct(n0, _SRPRe, 0, [_RPo, _NT, _ATC], [() => RoutingProfileList, 0, 1]);
export var SearchSecurityProfilesRequest = struct(
  n0,
  _SSPR,
  0,
  [_II, _NT, _MRa, _SCe, _SF],
  [0, 0, 1, () => SecurityProfileSearchCriteria, () => SecurityProfilesSearchFilter]
);
export var SearchSecurityProfilesResponse = struct(
  n0,
  _SSPRe,
  0,
  [_SPe, _NT, _ATC],
  [() => SecurityProfilesSearchSummaryList, 0, 1]
);
export var SearchUsersRequest = struct(
  n0,
  _SUR,
  0,
  [_II, _NT, _MRa, _SF, _SCe],
  [0, 0, 1, () => UserSearchFilter, () => UserSearchCriteria]
);
export var SearchUsersResponse = struct(n0, _SURe, 0, [_Use, _NT, _ATC], [[() => UserSearchSummaryList, 0], 0, 1]);
export var SecurityProfileSearchCriteria = struct(
  n0,
  _SPSC,
  0,
  [_OC, _ACn, _SC],
  [() => SecurityProfileSearchConditionList, () => SecurityProfileSearchConditionList, () => StringCondition]
);
export var SecurityProfileSearchSummary = struct(n0, _SPSS, 0, [_I, _ORI, _A, _SPN, _D, _Ta], [0, 0, 0, 0, 0, 128 | 0]);
export var SecurityProfilesSearchFilter = struct(n0, _SPSF, 0, [_TF], [() => ControlPlaneTagFilter]);
export var UserIdentityInfoLite = struct(
  n0,
  _UIIL,
  0,
  [_FNir, _LN],
  [
    [() => AgentFirstName, 0],
    [() => AgentLastName, 0],
  ]
);
export var UserSearchCriteria = struct(
  n0,
  _USC,
  0,
  [_OC, _ACn, _SC, _LCi, _HGC],
  [
    () => UserSearchConditionList,
    () => UserSearchConditionList,
    () => StringCondition,
    () => ListCondition,
    () => HierarchyGroupCondition,
  ]
);
export var UserSearchFilter = struct(
  n0,
  _USF,
  0,
  [_TF, _UAF],
  [() => ControlPlaneTagFilter, () => ControlPlaneUserAttributeFilter]
);
export var UserSearchSummary = struct(
  n0,
  _USS,
  0,
  [_A, _DUI, _HGI, _I, _IId, _PCh, _RPI, _SPIe, _Ta, _U],
  [0, 0, 0, 0, [() => UserIdentityInfoLite, 0], () => UserPhoneConfig, 0, 64 | 0, 128 | 0, 0]
);
export var AttributeOrConditionList = list(n0, _AOCL, 0, () => AttributeAndCondition);
export var Conditions = list(n0, _Cond, 0, () => Condition);
export var ContactFlowModuleSearchConditionList = list(n0, _CFMSCL, 0, () => ContactFlowModuleSearchCriteria);
export var ContactFlowModuleSearchSummaryList = list(n0, _CFMSSL, 0, () => ContactFlowModule);
export var ContactFlowSearchConditionList = list(n0, _CFSCL, 0, () => ContactFlowSearchCriteria);
export var ContactFlowSearchSummaryList = list(n0, _CFSSL, 0, () => ContactFlow);
export var HoursOfOperationList = list(n0, _HOOL, 0, () => HoursOfOperation);
export var HoursOfOperationOverrideSearchConditionList = list(
  n0,
  _HOOOSCL,
  0,
  () => HoursOfOperationOverrideSearchCriteria
);
export var HoursOfOperationSearchConditionList = list(n0, _HOOSCL, 0, () => HoursOfOperationSearchCriteria);
export var PromptList = list(n0, _PLro, 0, () => Prompt);
export var PromptSearchConditionList = list(n0, _PSCL, 0, () => PromptSearchCriteria);
export var QueueSearchConditionList = list(n0, _QSCL, 0, () => QueueSearchCriteria);
export var QueueSearchSummaryList = list(n0, _QSSL, 0, () => Queue);
export var QuickConnectSearchConditionList = list(n0, _QCSCL, 0, () => QuickConnectSearchCriteria);
export var QuickConnectSearchSummaryList = list(n0, _QCSSL, 0, () => QuickConnect);
export var RoutingProfileList = list(n0, _RPL, 0, () => RoutingProfile);
export var RoutingProfileSearchConditionList = list(n0, _RPSCL, 0, () => RoutingProfileSearchCriteria);
export var SecurityProfileSearchConditionList = list(n0, _SPSCL, 0, () => SecurityProfileSearchCriteria);
export var SecurityProfilesSearchSummaryList = list(n0, _SPSSL, 0, () => SecurityProfileSearchSummary);
export var TagOrConditionList = list(n0, _TOCL, 0, () => TagAndConditionList);
export var UserSearchConditionList = list(n0, _USCL, 0, () => UserSearchCriteria);
export var UserSearchSummaryList = list(n0, _USSL, 0, [() => UserSearchSummary, 0]);
export var SearchContactFlowModules = op(
  n0,
  _SCFM,
  {
    [_h]: ["POST", "/search-contact-flow-modules", 200],
  },
  () => SearchContactFlowModulesRequest,
  () => SearchContactFlowModulesResponse
);
export var SearchContactFlows = op(
  n0,
  _SCF,
  {
    [_h]: ["POST", "/search-contact-flows", 200],
  },
  () => SearchContactFlowsRequest,
  () => SearchContactFlowsResponse
);
export var SearchHoursOfOperationOverrides = op(
  n0,
  _SHOOO,
  {
    [_h]: ["POST", "/search-hours-of-operation-overrides", 200],
  },
  () => SearchHoursOfOperationOverridesRequest,
  () => SearchHoursOfOperationOverridesResponse
);
export var SearchHoursOfOperations = op(
  n0,
  _SHOO,
  {
    [_h]: ["POST", "/search-hours-of-operations", 200],
  },
  () => SearchHoursOfOperationsRequest,
  () => SearchHoursOfOperationsResponse
);
export var SearchPrompts = op(
  n0,
  _SPea,
  {
    [_h]: ["POST", "/search-prompts", 200],
  },
  () => SearchPromptsRequest,
  () => SearchPromptsResponse
);
export var SearchQueues = op(
  n0,
  _SQ,
  {
    [_h]: ["POST", "/search-queues", 200],
  },
  () => SearchQueuesRequest,
  () => SearchQueuesResponse
);
export var SearchQuickConnects = op(
  n0,
  _SQC,
  {
    [_h]: ["POST", "/search-quick-connects", 200],
  },
  () => SearchQuickConnectsRequest,
  () => SearchQuickConnectsResponse
);
export var SearchRoutingProfiles = op(
  n0,
  _SRP,
  {
    [_h]: ["POST", "/search-routing-profiles", 200],
  },
  () => SearchRoutingProfilesRequest,
  () => SearchRoutingProfilesResponse
);
export var SearchSecurityProfiles = op(
  n0,
  _SSP,
  {
    [_h]: ["POST", "/search-security-profiles", 200],
  },
  () => SearchSecurityProfilesRequest,
  () => SearchSecurityProfilesResponse
);
export var SearchUsers = op(
  n0,
  _SUe,
  {
    [_h]: ["POST", "/search-users", 200],
  },
  () => SearchUsersRequest,
  () => SearchUsersResponse
);
