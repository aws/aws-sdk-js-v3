// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ThrottlingException as __ThrottlingException } from "../models/index";
import {
  _aQE,
  _c,
  _cate,
  _ch,
  _cIh,
  _cIhe,
  _cO,
  _cSS,
  _de,
  _DTAC,
  _DTACR,
  _DTACRe,
  _DTACRes,
  _DTACRR,
  _DTACRRe,
  _DTACRS,
  _DTACRSR,
  _DTACRSRe,
  _DTACS,
  _DTACSR,
  _DTACSRe,
  _e,
  _eMS,
  _ePMS,
  _fR,
  _hE,
  _hFR,
  _i,
  _iS,
  _l,
  _m,
  _me,
  _n,
  _r,
  _re,
  _rF,
  _rI,
  _rIe,
  _rP,
  _rS,
  _rSe,
  _SLt,
  _sp,
  _st,
  _sta,
  _su,
  _TACD,
  _TACL,
  _TACOS,
  _TACR,
  _TACRSL,
  _TACS,
  _TACSL,
  _TACSS,
  _TARD,
  _TARDL,
  _TARS,
  _TE,
  _ti,
  n0,
} from "./schemas_0";
import { TrustedAdvisorCheckRefreshStatus } from "./schemas_2_Advisor";

/* eslint no-var: 0 */

export var DescribeTrustedAdvisorCheckRefreshStatusesRequest = struct(n0, _DTACRSR, 0, [_cIh], [[() => StringList, 0]]);
export var DescribeTrustedAdvisorCheckRefreshStatusesResponse = struct(
  n0,
  _DTACRSRe,
  0,
  [_sta],
  [() => TrustedAdvisorCheckRefreshStatusList]
);
export var DescribeTrustedAdvisorCheckResultRequest = struct(n0, _DTACRR, 0, [_cIhe, _l], [0, 0]);
export var DescribeTrustedAdvisorCheckResultResponse = struct(
  n0,
  _DTACRRe,
  0,
  [_r],
  [[() => TrustedAdvisorCheckResult, 0]]
);
export var DescribeTrustedAdvisorChecksRequest = struct(n0, _DTACR, 0, [_l], [0]);
export var DescribeTrustedAdvisorChecksResponse = struct(n0, _DTACRe, 0, [_ch], [[() => TrustedAdvisorCheckList, 0]]);
export var DescribeTrustedAdvisorCheckSummariesRequest = struct(n0, _DTACSR, 0, [_cIh], [[() => StringList, 0]]);
export var DescribeTrustedAdvisorCheckSummariesResponse = struct(
  n0,
  _DTACSRe,
  0,
  [_su],
  [() => TrustedAdvisorCheckSummaryList]
);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`Throttling`, 400],
  },
  [_m],
  [0],

  __ThrottlingException
);
export var TrustedAdvisorCategorySpecificSummary = struct(
  n0,
  _TACSS,
  0,
  [_cO],
  [() => TrustedAdvisorCostOptimizingSummary]
);
export var TrustedAdvisorCheckDescription = struct(
  n0,
  _TACD,
  0,
  [_i, _n, _de, _cate, _me],
  [0, 0, 0, 0, [() => StringList, 0]]
);
export var TrustedAdvisorCheckResult = struct(
  n0,
  _TACR,
  0,
  [_cIhe, _ti, _st, _rS, _cSS, _fR],
  [
    0,
    0,
    0,
    () => TrustedAdvisorResourcesSummary,
    () => TrustedAdvisorCategorySpecificSummary,
    [() => TrustedAdvisorResourceDetailList, 0],
  ]
);
export var TrustedAdvisorCheckSummary = struct(
  n0,
  _TACS,
  0,
  [_cIhe, _ti, _st, _hFR, _rS, _cSS],
  [0, 0, 0, 2, () => TrustedAdvisorResourcesSummary, () => TrustedAdvisorCategorySpecificSummary]
);
export var TrustedAdvisorCostOptimizingSummary = struct(n0, _TACOS, 0, [_eMS, _ePMS], [1, 1]);
export var TrustedAdvisorResourceDetail = struct(
  n0,
  _TARD,
  0,
  [_st, _re, _rI, _iS, _me],
  [0, 0, 0, 2, [() => StringList, 0]]
);
export var TrustedAdvisorResourcesSummary = struct(n0, _TARS, 0, [_rP, _rF, _rIe, _rSe], [1, 1, 1, 1]);
export var StringList = list(
  n0,
  _SLt,
  {
    [_sp]: 1,
  },
  0
);
export var TrustedAdvisorCheckList = list(n0, _TACL, 0, [() => TrustedAdvisorCheckDescription, 0]);
export var TrustedAdvisorCheckRefreshStatusList = list(n0, _TACRSL, 0, () => TrustedAdvisorCheckRefreshStatus);
export var TrustedAdvisorCheckSummaryList = list(n0, _TACSL, 0, () => TrustedAdvisorCheckSummary);
export var TrustedAdvisorResourceDetailList = list(n0, _TARDL, 0, [() => TrustedAdvisorResourceDetail, 0]);
export var DescribeTrustedAdvisorCheckRefreshStatuses = op(
  n0,
  _DTACRS,
  0,
  () => DescribeTrustedAdvisorCheckRefreshStatusesRequest,
  () => DescribeTrustedAdvisorCheckRefreshStatusesResponse
);
export var DescribeTrustedAdvisorCheckResult = op(
  n0,
  _DTACRes,
  0,
  () => DescribeTrustedAdvisorCheckResultRequest,
  () => DescribeTrustedAdvisorCheckResultResponse
);
export var DescribeTrustedAdvisorChecks = op(
  n0,
  _DTAC,
  0,
  () => DescribeTrustedAdvisorChecksRequest,
  () => DescribeTrustedAdvisorChecksResponse
);
export var DescribeTrustedAdvisorCheckSummaries = op(
  n0,
  _DTACS,
  0,
  () => DescribeTrustedAdvisorCheckSummariesRequest,
  () => DescribeTrustedAdvisorCheckSummariesResponse
);
