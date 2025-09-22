// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _aA,
  _aAA,
  _aAI,
  _aAs,
  _aC,
  _aCp,
  _ADAVRM,
  _ADAVRMR,
  _ADAVRMRd,
  _aI,
  _AIM,
  _aN,
  _ap,
  _aR,
  _aS,
  _as,
  _aV,
  _bN,
  _c,
  _CA,
  _CAR,
  _CARr,
  _CAVAC,
  _CAVACR,
  _CAVACRr,
  _CAVR,
  _CAVRR,
  _CAVRRr,
  _CRP,
  _CRPR,
  _CRPRr,
  _CRT,
  _CRTR,
  _CRTRr,
  _cTl,
  _d,
  _dLC,
  _eCA,
  _er,
  _ES,
  _eS,
  _eSk,
  _ESL,
  _ex,
  _fo,
  _h,
  _hE,
  _id,
  _IRTDAV,
  _IRTDAVR,
  _IRTDAVRm,
  _iS,
  _lRI,
  _m,
  _mEI,
  _n,
  _na,
  _pA,
  _pD,
  _pM,
  _pN,
  _po,
  _pR,
  _pRI,
  _rIec,
  _rM,
  _rN,
  _rT,
  _rTe,
  _rTec,
  _SAA,
  _SAAR,
  _SAARt,
  _sAo,
  _SME,
  _SMER,
  _SMERt,
  _SQEE,
  _st,
  _t,
  _ta,
  _ti,
  _tSe,
  _TSL,
  _UAVRpd,
  _UAVRR,
  _UAVRRp,
  n0,
  TagMap,
} from "./schemas_0";
import { App, EventSubscriptionList, PermissionModel } from "./schemas_1_App";
import { AppAssessment, DisruptionPolicy, ResiliencyPolicy } from "./schemas_3_App";
import { RecommendationTemplate } from "./schemas_5_List";
import { LogicalResourceId } from "./schemas_8_App";
import { ResourceMappingList } from "./schemas_13_App";
import { AppComponent, PhysicalResource } from "./schemas_15_App";
import { TerraformSource } from "./schemas_27_App";

/* eslint no-var: 0 */

export var AddDraftAppVersionResourceMappingsRequest = struct(
  n0,
  _ADAVRMR,
  0,
  [_aA, _rM],
  [0, () => ResourceMappingList]
);
export var AddDraftAppVersionResourceMappingsResponse = struct(
  n0,
  _ADAVRMRd,
  0,
  [_aA, _aV, _rM],
  [0, 0, () => ResourceMappingList]
);
export var CreateAppRequest = struct(
  n0,
  _CAR,
  0,
  [_n, _d, _pA, _ta, _cTl, _aS, _pM, _eS, _aAA],
  [0, 0, 0, [() => TagMap, 0], [0, 4], 0, () => PermissionModel, () => EventSubscriptionList, 0]
);
export var CreateAppResponse = struct(n0, _CARr, 0, [_ap], [[() => App, 0]]);
export var CreateAppVersionAppComponentRequest = struct(
  n0,
  _CAVACR,
  0,
  [_aA, _id, _n, _t, _aI, _cTl],
  [0, 0, 0, 0, map(n0, _AIM, 0, 0, 64 | 0), [0, 4]]
);
export var CreateAppVersionAppComponentResponse = struct(n0, _CAVACRr, 0, [_aA, _aV, _aCp], [0, 0, () => AppComponent]);
export var CreateAppVersionResourceRequest = struct(
  n0,
  _CAVRR,
  0,
  [_aA, _rN, _lRI, _pRI, _aR, _aAI, _rT, _aC, _aI, _cTl],
  [0, 0, () => LogicalResourceId, 0, 0, 0, 0, 64 | 0, map(n0, _AIM, 0, 0, 64 | 0), [0, 4]]
);
export var CreateAppVersionResourceResponse = struct(n0, _CAVRRr, 0, [_aA, _aV, _pR], [0, 0, () => PhysicalResource]);
export var CreateRecommendationTemplateRequest = struct(
  n0,
  _CRTR,
  0,
  [_rIec, _fo, _rTe, _aAs, _n, _cTl, _ta, _bN],
  [64 | 0, 0, 64 | 0, 0, 0, [0, 4], [() => TagMap, 0], 0]
);
export var CreateRecommendationTemplateResponse = struct(n0, _CRTRr, 0, [_rTec], [[() => RecommendationTemplate, 0]]);
export var CreateResiliencyPolicyRequest = struct(
  n0,
  _CRPR,
  0,
  [_pN, _pD, _dLC, _ti, _po, _cTl, _ta],
  [0, 0, 0, 0, () => DisruptionPolicy, [0, 4], [() => TagMap, 0]]
);
export var CreateResiliencyPolicyResponse = struct(n0, _CRPRr, 0, [_po], [[() => ResiliencyPolicy, 0]]);
export var EksSource = struct(n0, _ES, 0, [_eCA, _na], [0, 64 | 0]);
export var ImportResourcesToDraftAppVersionRequest = struct(
  n0,
  _IRTDAVR,
  0,
  [_aA, _sAo, _tSe, _iS, _eSk],
  [0, 64 | 0, () => TerraformSourceList, 0, () => EksSourceList]
);
export var ImportResourcesToDraftAppVersionResponse = struct(
  n0,
  _IRTDAVRm,
  0,
  [_aA, _aV, _sAo, _st, _tSe, _eSk],
  [0, 0, 64 | 0, 0, () => TerraformSourceList, () => EksSourceList]
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_er]: _c,
    [_hE]: 402,
  },
  [_m],
  [0],

  __ServiceQuotaExceededException
);
export var StartAppAssessmentRequest = struct(
  n0,
  _SAAR,
  0,
  [_aA, _aV, _aN, _cTl, _ta],
  [0, 0, 0, [0, 4], [() => TagMap, 0]]
);
export var StartAppAssessmentResponse = struct(n0, _SAARt, 0, [_as], [[() => AppAssessment, 0]]);
export var StartMetricsExportRequest = struct(n0, _SMER, 0, [_bN, _cTl], [0, [0, 4]]);
export var StartMetricsExportResponse = struct(n0, _SMERt, 0, [_mEI, _st], [0, 0]);
export var UpdateAppVersionResourceRequest = struct(
  n0,
  _UAVRR,
  0,
  [_aA, _rN, _lRI, _pRI, _aR, _aAI, _rT, _aC, _aI, _ex],
  [0, 0, () => LogicalResourceId, 0, 0, 0, 0, 64 | 0, map(n0, _AIM, 0, 0, 64 | 0), 2]
);
export var UpdateAppVersionResourceResponse = struct(n0, _UAVRRp, 0, [_aA, _aV, _pR], [0, 0, () => PhysicalResource]);
export var ArnList = 64 | 0;

export var EksNamespaceList = 64 | 0;

export var EksSourceList = list(n0, _ESL, 0, () => EksSource);
export var TerraformSourceList = list(n0, _TSL, 0, () => TerraformSource);
export var AddDraftAppVersionResourceMappings = op(
  n0,
  _ADAVRM,
  {
    [_h]: ["POST", "/add-draft-app-version-resource-mappings", 200],
  },
  () => AddDraftAppVersionResourceMappingsRequest,
  () => AddDraftAppVersionResourceMappingsResponse
);
export var CreateApp = op(
  n0,
  _CA,
  {
    [_h]: ["POST", "/create-app", 200],
  },
  () => CreateAppRequest,
  () => CreateAppResponse
);
export var CreateAppVersionAppComponent = op(
  n0,
  _CAVAC,
  {
    [_h]: ["POST", "/create-app-version-app-component", 200],
  },
  () => CreateAppVersionAppComponentRequest,
  () => CreateAppVersionAppComponentResponse
);
export var CreateAppVersionResource = op(
  n0,
  _CAVR,
  {
    [_h]: ["POST", "/create-app-version-resource", 200],
  },
  () => CreateAppVersionResourceRequest,
  () => CreateAppVersionResourceResponse
);
export var CreateRecommendationTemplate = op(
  n0,
  _CRT,
  {
    [_h]: ["POST", "/create-recommendation-template", 200],
  },
  () => CreateRecommendationTemplateRequest,
  () => CreateRecommendationTemplateResponse
);
export var CreateResiliencyPolicy = op(
  n0,
  _CRP,
  {
    [_h]: ["POST", "/create-resiliency-policy", 200],
  },
  () => CreateResiliencyPolicyRequest,
  () => CreateResiliencyPolicyResponse
);
export var ImportResourcesToDraftAppVersion = op(
  n0,
  _IRTDAV,
  {
    [_h]: ["POST", "/import-resources-to-draft-app-version", 200],
  },
  () => ImportResourcesToDraftAppVersionRequest,
  () => ImportResourcesToDraftAppVersionResponse
);
export var StartAppAssessment = op(
  n0,
  _SAA,
  {
    [_h]: ["POST", "/start-app-assessment", 200],
  },
  () => StartAppAssessmentRequest,
  () => StartAppAssessmentResponse
);
export var StartMetricsExport = op(
  n0,
  _SME,
  {
    [_h]: ["POST", "/start-metrics-export", 200],
  },
  () => StartMetricsExportRequest,
  () => StartMetricsExportResponse
);
export var UpdateAppVersionResource = op(
  n0,
  _UAVRpd,
  {
    [_h]: ["POST", "/update-app-version-resource", 200],
  },
  () => UpdateAppVersionResourceRequest,
  () => UpdateAppVersionResourceResponse
);
