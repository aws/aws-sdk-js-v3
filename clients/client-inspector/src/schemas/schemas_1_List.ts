// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _AF,
  _aH,
  _aHC,
  _aHCg,
  _aHD,
  _aHg,
  _aI,
  _aIg,
  _AP,
  _aP,
  _APL,
  _ARA,
  _aRA,
  _ARAL,
  _aRAs,
  _aRAss,
  _ARF,
  _aSG,
  _aSGu,
  _aTA,
  _aTAss,
  _aTAsse,
  _ATF,
  _ATFs,
  _aTNP,
  _aV,
  _bD,
  _cTR,
  _cTRr,
  _de,
  _DR,
  _dR,
  _eA,
  _eD,
  _EP,
  _eP,
  _EPL,
  _ES,
  _eS,
  _ESL,
  _ev,
  _fA,
  _FF,
  _fi,
  _GEP,
  _GEPR,
  _GEPRe,
  _h,
  _iA,
  _kV,
  _l,
  _LAR,
  _LARA,
  _LARAR,
  _LARARi,
  _LARR,
  _LARRi,
  _LAT,
  _LATi,
  _LATR,
  _LATRi,
  _LATRis,
  _LATRist,
  _LE,
  _LER,
  _LERi,
  _LES,
  _LESR,
  _LESRi,
  _LF,
  _LFR,
  _LFRi,
  _LRP,
  _LRPR,
  _LRPRi,
  _mR,
  _mS,
  _mSa,
  _nP,
  _nT,
  _oS,
  _PA,
  _pAA,
  _PAR,
  _PARr,
  _pS,
  _pT,
  _r,
  _rAes,
  _rN,
  _rPA,
  _sAu,
  _sc,
  _sCTR,
  _seve,
  _SLu,
  _st,
  _sTR,
  _Su,
  _su,
  _tA,
  _ti,
  _tM,
  _TR,
  _uAs,
  n0,
} from "./schemas_0";
import { AttributeList, ScopeList } from "./schemas_9_Describe";
import { TelemetryMetadataList } from "./schemas_10_";

/* eslint no-var: 0 */

export var AgentFilter = struct(n0, _AF, 0, [_aH, _aHC], [64 | 0, 64 | 0]);
export var AgentPreview = struct(n0, _AP, 0, [_h, _aI, _aSG, _aHg, _aV, _oS, _kV, _iA], [0, 0, 0, 0, 0, 0, 0, 0]);
export var AssessmentRunAgent = struct(
  n0,
  _ARA,
  0,
  [_aI, _aRA, _aHg, _aHCg, _aHD, _aSG, _tM],
  [0, 0, 0, 0, 0, 0, () => TelemetryMetadataList]
);
export var AssessmentRunFilter = struct(
  n0,
  _ARF,
  0,
  [_nP, _st, _dR, _rPA, _sTR, _cTR, _sCTR],
  [0, 64 | 0, () => DurationRange, 64 | 0, () => TimestampRange, () => TimestampRange, () => TimestampRange]
);
export var AssessmentTargetFilter = struct(n0, _ATF, 0, [_aTNP], [0]);
export var AssessmentTemplateFilter = struct(n0, _ATFs, 0, [_nP, _dR, _rPA], [0, () => DurationRange, 64 | 0]);
export var DurationRange = struct(n0, _DR, 0, [_mS, _mSa], [1, 1]);
export var EventSubscription = struct(n0, _ES, 0, [_ev, _sAu], [0, 4]);
export var ExclusionPreview = struct(
  n0,
  _EP,
  0,
  [_ti, _de, _r, _sc, _a],
  [0, 0, 0, () => ScopeList, () => AttributeList]
);
export var FindingFilter = struct(
  n0,
  _FF,
  0,
  [_aIg, _aSGu, _rN, _seve, _rPA, _a, _uAs, _cTRr],
  [64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, () => AttributeList, () => AttributeList, () => TimestampRange]
);
export var GetExclusionsPreviewRequest = struct(n0, _GEPR, 0, [_aTA, _pT, _nT, _mR, _l], [0, 0, 0, 1, 0]);
export var GetExclusionsPreviewResponse = struct(n0, _GEPRe, 0, [_pS, _eP, _nT], [0, () => ExclusionPreviewList, 0]);
export var ListAssessmentRunAgentsRequest = struct(n0, _LARAR, 0, [_aRA, _fi, _nT, _mR], [0, () => AgentFilter, 0, 1]);
export var ListAssessmentRunAgentsResponse = struct(n0, _LARARi, 0, [_aRAss, _nT], [() => AssessmentRunAgentList, 0]);
export var ListAssessmentRunsRequest = struct(
  n0,
  _LARR,
  0,
  [_aTAsse, _fi, _nT, _mR],
  [64 | 0, () => AssessmentRunFilter, 0, 1]
);
export var ListAssessmentRunsResponse = struct(n0, _LARRi, 0, [_aRAs, _nT], [64 | 0, 0]);
export var ListAssessmentTargetsRequest = struct(n0, _LATR, 0, [_fi, _nT, _mR], [() => AssessmentTargetFilter, 0, 1]);
export var ListAssessmentTargetsResponse = struct(n0, _LATRi, 0, [_aTAss, _nT], [64 | 0, 0]);
export var ListAssessmentTemplatesRequest = struct(
  n0,
  _LATRis,
  0,
  [_aTAss, _fi, _nT, _mR],
  [64 | 0, () => AssessmentTemplateFilter, 0, 1]
);
export var ListAssessmentTemplatesResponse = struct(n0, _LATRist, 0, [_aTAsse, _nT], [64 | 0, 0]);
export var ListEventSubscriptionsRequest = struct(n0, _LESR, 0, [_rAes, _nT, _mR], [0, 0, 1]);
export var ListEventSubscriptionsResponse = struct(n0, _LESRi, 0, [_su, _nT], [() => SubscriptionList, 0]);
export var ListExclusionsRequest = struct(n0, _LER, 0, [_aRA, _nT, _mR], [0, 0, 1]);
export var ListExclusionsResponse = struct(n0, _LERi, 0, [_eA, _nT], [64 | 0, 0]);
export var ListFindingsRequest = struct(n0, _LFR, 0, [_aRAs, _fi, _nT, _mR], [64 | 0, () => FindingFilter, 0, 1]);
export var ListFindingsResponse = struct(n0, _LFRi, 0, [_fA, _nT], [64 | 0, 0]);
export var ListRulesPackagesRequest = struct(n0, _LRPR, 0, [_nT, _mR], [0, 1]);
export var ListRulesPackagesResponse = struct(n0, _LRPRi, 0, [_rPA, _nT], [64 | 0, 0]);
export var PreviewAgentsRequest = struct(n0, _PAR, 0, [_pAA, _nT, _mR], [0, 0, 1]);
export var PreviewAgentsResponse = struct(n0, _PARr, 0, [_aP, _nT], [() => AgentPreviewList, 0]);
export var Subscription = struct(n0, _Su, 0, [_rAes, _tA, _eS], [0, 0, () => EventSubscriptionList]);
export var TimestampRange = struct(n0, _TR, 0, [_bD, _eD], [4, 4]);
export var AgentHealthCodeList = 64 | 0;

export var AgentHealthList = 64 | 0;

export var AgentIdList = 64 | 0;

export var AgentPreviewList = list(n0, _APL, 0, () => AgentPreview);
export var AssessmentRunAgentList = list(n0, _ARAL, 0, () => AssessmentRunAgent);
export var AssessmentRunStateList = 64 | 0;

export var AutoScalingGroupList = 64 | 0;

export var EventSubscriptionList = list(n0, _ESL, 0, () => EventSubscription);
export var ExclusionPreviewList = list(n0, _EPL, 0, () => ExclusionPreview);
export var FilterRulesPackageArnList = 64 | 0;

export var ListParentArnList = 64 | 0;

export var ListReturnedArnList = 64 | 0;

export var RuleNameList = 64 | 0;

export var SeverityList = 64 | 0;

export var SubscriptionList = list(n0, _SLu, 0, () => Subscription);
export var GetExclusionsPreview = op(
  n0,
  _GEP,
  0,
  () => GetExclusionsPreviewRequest,
  () => GetExclusionsPreviewResponse
);
export var ListAssessmentRunAgents = op(
  n0,
  _LARA,
  0,
  () => ListAssessmentRunAgentsRequest,
  () => ListAssessmentRunAgentsResponse
);
export var ListAssessmentRuns = op(
  n0,
  _LAR,
  0,
  () => ListAssessmentRunsRequest,
  () => ListAssessmentRunsResponse
);
export var ListAssessmentTargets = op(
  n0,
  _LAT,
  0,
  () => ListAssessmentTargetsRequest,
  () => ListAssessmentTargetsResponse
);
export var ListAssessmentTemplates = op(
  n0,
  _LATi,
  0,
  () => ListAssessmentTemplatesRequest,
  () => ListAssessmentTemplatesResponse
);
export var ListEventSubscriptions = op(
  n0,
  _LES,
  0,
  () => ListEventSubscriptionsRequest,
  () => ListEventSubscriptionsResponse
);
export var ListExclusions = op(
  n0,
  _LE,
  0,
  () => ListExclusionsRequest,
  () => ListExclusionsResponse
);
export var ListFindings = op(
  n0,
  _LF,
  0,
  () => ListFindingsRequest,
  () => ListFindingsResponse
);
export var ListRulesPackages = op(
  n0,
  _LRP,
  0,
  () => ListRulesPackagesRequest,
  () => ListRulesPackagesResponse
);
export var PreviewAgents = op(
  n0,
  _PA,
  0,
  () => PreviewAgentsRequest,
  () => PreviewAgentsResponse
);
