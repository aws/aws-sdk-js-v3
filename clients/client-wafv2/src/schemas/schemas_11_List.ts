// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIURL,
  _APIK,
  _APIKS,
  _APIKSe,
  _ARN,
  _CDV,
  _CT,
  _D,
  _Id,
  _IPSe,
  _IPSSe,
  _LAMRG,
  _LAMRGR,
  _LAMRGRi,
  _LAMRGV,
  _LAMRGVR,
  _LAMRGVRi,
  _LAPIK,
  _LAPIKR,
  _LAPIKRi,
  _Li,
  _LIPS,
  _LIPSR,
  _LIPSRi,
  _LMRS,
  _LMRSR,
  _LMRSRi,
  _LMSR,
  _LMSRR,
  _LMSRRi,
  _LN,
  _LRG,
  _LRGR,
  _LRGRi,
  _LRPS,
  _LRPSR,
  _LRPSRi,
  _LT,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _LUT,
  _LWACL,
  _LWACLR,
  _LWACLRi,
  _MRG,
  _MRGSa,
  _MRGSan,
  _MRGV,
  _MRGVa,
  _MRSa,
  _MRSS,
  _MRSSa,
  _N,
  _NM,
  _Pl,
  _RARN,
  _RGSu,
  _RGu,
  _RPSe,
  _RPSSe,
  _RS,
  _RSel,
  _RV,
  _Sc,
  _TD,
  _Ti,
  _TIFR,
  _TL,
  _V,
  _Ve,
  _VN,
  _VS,
  _WACLe,
  _WACLSe,
  n0,
} from "./schemas_0";
import { RuleGroupSummary } from "./schemas_9_Rule";
import { TagList } from "./schemas_22_Create";
import { RegexPatternSetSummary } from "./schemas_23_Pattern";
import { IPSetSummary } from "./schemas_25_IPSet";
import { WebACLSummary } from "./schemas_28_WebA";

/* eslint no-var: 0 */

export var APIKeySummary = struct(n0, _APIKS, 0, [_TD, _APIK, _CT, _V], [64 | 0, 0, 4, 1]);
export var ListAPIKeysRequest = struct(n0, _LAPIKR, 0, [_Sc, _NM, _Li], [0, 0, 1]);
export var ListAPIKeysResponse = struct(n0, _LAPIKRi, 0, [_NM, _APIKSe, _AIURL], [0, () => APIKeySummaries, 0]);
export var ListAvailableManagedRuleGroupsRequest = struct(n0, _LAMRGR, 0, [_Sc, _NM, _Li], [0, 0, 1]);
export var ListAvailableManagedRuleGroupsResponse = struct(
  n0,
  _LAMRGRi,
  0,
  [_NM, _MRG],
  [0, () => ManagedRuleGroupSummaries]
);
export var ListAvailableManagedRuleGroupVersionsRequest = struct(
  n0,
  _LAMRGVR,
  0,
  [_VN, _N, _Sc, _NM, _Li],
  [0, 0, 0, 0, 1]
);
export var ListAvailableManagedRuleGroupVersionsResponse = struct(
  n0,
  _LAMRGVRi,
  0,
  [_NM, _Ve, _CDV],
  [0, () => ManagedRuleGroupVersions, 0]
);
export var ListIPSetsRequest = struct(n0, _LIPSR, 0, [_Sc, _NM, _Li], [0, 0, 1]);
export var ListIPSetsResponse = struct(n0, _LIPSRi, 0, [_NM, _IPSe], [0, () => IPSetSummaries]);
export var ListManagedRuleSetsRequest = struct(n0, _LMRSR, 0, [_Sc, _NM, _Li], [0, 0, 1]);
export var ListManagedRuleSetsResponse = struct(n0, _LMRSRi, 0, [_NM, _MRSa], [0, () => ManagedRuleSetSummaries]);
export var ListMobileSdkReleasesRequest = struct(n0, _LMSRR, 0, [_Pl, _NM, _Li], [0, 0, 1]);
export var ListMobileSdkReleasesResponse = struct(n0, _LMSRRi, 0, [_RS, _NM], [() => ReleaseSummaries, 0]);
export var ListRegexPatternSetsRequest = struct(n0, _LRPSR, 0, [_Sc, _NM, _Li], [0, 0, 1]);
export var ListRegexPatternSetsResponse = struct(n0, _LRPSRi, 0, [_NM, _RPSe], [0, () => RegexPatternSetSummaries]);
export var ListRuleGroupsRequest = struct(n0, _LRGR, 0, [_Sc, _NM, _Li], [0, 0, 1]);
export var ListRuleGroupsResponse = struct(n0, _LRGRi, 0, [_NM, _RGu], [0, () => RuleGroupSummaries]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_NM, _Li, _RARN], [0, 1, 0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_NM, _TIFR], [0, () => TagInfoForResource]);
export var ListWebACLsRequest = struct(n0, _LWACLR, 0, [_Sc, _NM, _Li], [0, 0, 1]);
export var ListWebACLsResponse = struct(n0, _LWACLRi, 0, [_NM, _WACLe], [0, () => WebACLSummaries]);
export var ManagedRuleGroupSummary = struct(n0, _MRGSa, 0, [_VN, _N, _VS, _D], [0, 0, 2, 0]);
export var ManagedRuleGroupVersion = struct(n0, _MRGV, 0, [_N, _LUT], [0, 4]);
export var ManagedRuleSetSummary = struct(n0, _MRSS, 0, [_N, _Id, _D, _LT, _ARN, _LN], [0, 0, 0, 0, 0, 0]);
export var ReleaseSummary = struct(n0, _RSel, 0, [_RV, _Ti], [0, 4]);
export var TagInfoForResource = struct(n0, _TIFR, 0, [_RARN, _TL], [0, () => TagList]);
export var APIKeySummaries = list(n0, _APIKSe, 0, () => APIKeySummary);
export var IPSetSummaries = list(n0, _IPSSe, 0, () => IPSetSummary);
export var ManagedRuleGroupSummaries = list(n0, _MRGSan, 0, () => ManagedRuleGroupSummary);
export var ManagedRuleGroupVersions = list(n0, _MRGVa, 0, () => ManagedRuleGroupVersion);
export var ManagedRuleSetSummaries = list(n0, _MRSSa, 0, () => ManagedRuleSetSummary);
export var RegexPatternSetSummaries = list(n0, _RPSSe, 0, () => RegexPatternSetSummary);
export var ReleaseSummaries = list(n0, _RS, 0, () => ReleaseSummary);
export var RuleGroupSummaries = list(n0, _RGSu, 0, () => RuleGroupSummary);
export var WebACLSummaries = list(n0, _WACLSe, 0, () => WebACLSummary);
export var ListAPIKeys = op(
  n0,
  _LAPIK,
  0,
  () => ListAPIKeysRequest,
  () => ListAPIKeysResponse
);
export var ListAvailableManagedRuleGroups = op(
  n0,
  _LAMRG,
  0,
  () => ListAvailableManagedRuleGroupsRequest,
  () => ListAvailableManagedRuleGroupsResponse
);
export var ListAvailableManagedRuleGroupVersions = op(
  n0,
  _LAMRGV,
  0,
  () => ListAvailableManagedRuleGroupVersionsRequest,
  () => ListAvailableManagedRuleGroupVersionsResponse
);
export var ListIPSets = op(
  n0,
  _LIPS,
  0,
  () => ListIPSetsRequest,
  () => ListIPSetsResponse
);
export var ListManagedRuleSets = op(
  n0,
  _LMRS,
  0,
  () => ListManagedRuleSetsRequest,
  () => ListManagedRuleSetsResponse
);
export var ListMobileSdkReleases = op(
  n0,
  _LMSR,
  0,
  () => ListMobileSdkReleasesRequest,
  () => ListMobileSdkReleasesResponse
);
export var ListRegexPatternSets = op(
  n0,
  _LRPS,
  0,
  () => ListRegexPatternSetsRequest,
  () => ListRegexPatternSetsResponse
);
export var ListRuleGroups = op(
  n0,
  _LRG,
  0,
  () => ListRuleGroupsRequest,
  () => ListRuleGroupsResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var ListWebACLs = op(
  n0,
  _LWACL,
  0,
  () => ListWebACLsRequest,
  () => ListWebACLsResponse
);
