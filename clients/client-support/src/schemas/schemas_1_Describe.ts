// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { CaseCreationLimitExceeded as __CaseCreationLimitExceeded } from "../models/index";
import {
  _aSI,
  _aT,
  _bT,
  _C,
  _c,
  _ca,
  _cat,
  _cB,
  _CC,
  _cC,
  _CCLE,
  _CCR,
  _CCRr,
  _CD,
  _cEA,
  _cI,
  _cIL,
  _CL,
  _CLa,
  _co,
  _com,
  _cT,
  _CTO,
  _CTOL,
  _DC,
  _DCCO,
  _DCCOR,
  _DCCORe,
  _DCR,
  _DCRe,
  _DI,
  _dI,
  _di,
  _DS,
  _DSL,
  _DSLe,
  _DSLR,
  _DSLRe,
  _DSLRes,
  _DSLResc,
  _DSR,
  _DSRe,
  _dWS,
  _DWSL,
  _e,
  _eDT,
  _eTn,
  _iC,
  _iRC,
  _iT,
  _l,
  _lA,
  _m,
  _mR,
  _n,
  _nT,
  _rC,
  _RCC,
  _S,
  _s,
  _sB,
  _sC,
  _sCe,
  _sCL,
  _sDT,
  _se,
  _SH,
  _sH,
  _SHL,
  _SL,
  _sL,
  _SLe,
  _SLL,
  _SLLu,
  _SLu,
  _sLu,
  _sT,
  _st,
  _t,
  _tC,
  n0,
} from "./schemas_0";
import { CommunicationList } from "./schemas_5_Case";

/* eslint no-var: 0 */

export var CaseCreationLimitExceeded = error(
  n0,
  _CCLE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __CaseCreationLimitExceeded
);
export var CaseDetails = struct(
  n0,
  _CD,
  0,
  [_cI, _dI, _s, _st, _sC, _cC, _sCe, _sB, _tC, _rC, _cEA, _l],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, () => RecentCaseCommunications, 64 | 0, 0]
);
export var Category = struct(n0, _C, 0, [_co, _n], [0, 0]);
export var CommunicationTypeOptions = struct(
  n0,
  _CTO,
  0,
  [_t, _sH, _dWS],
  [0, () => SupportedHoursList, () => DatesWithoutSupportList]
);
export var CreateCaseRequest = struct(
  n0,
  _CCR,
  0,
  [_s, _sC, _sCe, _cC, _cB, _cEA, _l, _iT, _aSI],
  [0, 0, 0, 0, 0, 64 | 0, 0, 0, 0]
);
export var CreateCaseResponse = struct(n0, _CCRr, 0, [_cI], [0]);
export var DateInterval = struct(n0, _DI, 0, [_sDT, _eDT], [0, 0]);
export var DescribeCasesRequest = struct(
  n0,
  _DCR,
  0,
  [_cIL, _dI, _aT, _bT, _iRC, _nT, _mR, _l, _iC],
  [64 | 0, 0, 0, 0, 2, 0, 1, 0, 2]
);
export var DescribeCasesResponse = struct(n0, _DCRe, 0, [_ca, _nT], [() => CaseList, 0]);
export var DescribeCreateCaseOptionsRequest = struct(n0, _DCCOR, 0, [_iT, _sC, _l, _cC], [0, 0, 0, 0]);
export var DescribeCreateCaseOptionsResponse = struct(
  n0,
  _DCCORe,
  0,
  [_lA, _cT],
  [0, () => CommunicationTypeOptionsList]
);
export var DescribeServicesRequest = struct(n0, _DSR, 0, [_sCL, _l], [64 | 0, 0]);
export var DescribeServicesResponse = struct(n0, _DSRe, 0, [_se], [() => ServiceList]);
export var DescribeSeverityLevelsRequest = struct(n0, _DSLR, 0, [_l], [0]);
export var DescribeSeverityLevelsResponse = struct(n0, _DSLRe, 0, [_sL], [() => SeverityLevelsList]);
export var DescribeSupportedLanguagesRequest = struct(n0, _DSLRes, 0, [_iT, _sC, _cC], [0, 0, 0]);
export var DescribeSupportedLanguagesResponse = struct(n0, _DSLResc, 0, [_sLu], [() => SupportedLanguagesList]);
export var RecentCaseCommunications = struct(n0, _RCC, 0, [_com, _nT], [() => CommunicationList, 0]);
export var Service = struct(n0, _S, 0, [_co, _n, _cat], [0, 0, () => CategoryList]);
export var SeverityLevel = struct(n0, _SL, 0, [_co, _n], [0, 0]);
export var SupportedHour = struct(n0, _SH, 0, [_sT, _eTn], [0, 0]);
export var SupportedLanguage = struct(n0, _SLu, 0, [_co, _l, _di], [0, 0, 0]);
export var CaseIdList = 64 | 0;

export var CaseList = list(n0, _CL, 0, () => CaseDetails);
export var CategoryList = list(n0, _CLa, 0, () => Category);
export var CommunicationTypeOptionsList = list(n0, _CTOL, 0, () => CommunicationTypeOptions);
export var DatesWithoutSupportList = list(n0, _DWSL, 0, () => DateInterval);
export var ServiceCodeList = 64 | 0;

export var ServiceList = list(n0, _SLe, 0, () => Service);
export var SeverityLevelsList = list(n0, _SLL, 0, () => SeverityLevel);
export var SupportedHoursList = list(n0, _SHL, 0, () => SupportedHour);
export var SupportedLanguagesList = list(n0, _SLLu, 0, () => SupportedLanguage);
export var CreateCase = op(
  n0,
  _CC,
  0,
  () => CreateCaseRequest,
  () => CreateCaseResponse
);
export var DescribeCases = op(
  n0,
  _DC,
  0,
  () => DescribeCasesRequest,
  () => DescribeCasesResponse
);
export var DescribeCreateCaseOptions = op(
  n0,
  _DCCO,
  0,
  () => DescribeCreateCaseOptionsRequest,
  () => DescribeCreateCaseOptionsResponse
);
export var DescribeServices = op(
  n0,
  _DS,
  0,
  () => DescribeServicesRequest,
  () => DescribeServicesResponse
);
export var DescribeSeverityLevels = op(
  n0,
  _DSL,
  0,
  () => DescribeSeverityLevelsRequest,
  () => DescribeSeverityLevelsResponse
);
export var DescribeSupportedLanguages = op(
  n0,
  _DSLe,
  0,
  () => DescribeSupportedLanguagesRequest,
  () => DescribeSupportedLanguagesResponse
);
