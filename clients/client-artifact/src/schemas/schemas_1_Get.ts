// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _a,
  _aA,
  _aAI,
  _ADE,
  _AS,
  _aS,
  _aT,
  _aTc,
  _c,
  _cA,
  _ca,
  _CAL,
  _cAr,
  _CAS,
  _CE,
  _cN,
  _d,
  _dA,
  _dPU,
  _e,
  _eE,
  _eS,
  _fL,
  _GAS,
  _GASR,
  _GASRe,
  _GR,
  _GRM,
  _GRMR,
  _GRMRe,
  _GRR,
  _GRRe,
  _GTFR,
  _GTFRR,
  _GTFRRe,
  _h,
  _hE,
  _hH,
  _hQ,
  _i,
  _ISE,
  _LCA,
  _LCAR,
  _LCARi,
  _lMA,
  _LR,
  _LRR,
  _LRRi,
  _m,
  _mR,
  _n,
  _nSS,
  _nT,
  _oA,
  _PAS,
  _PASR,
  _PASRu,
  _pE,
  _pN,
  _pS,
  _qC,
  _r,
  _RA,
  _rAS,
  _RD,
  _rD,
  _re,
  _rI,
  _rIe,
  _RL,
  _RNFE,
  _RS,
  _rT,
  _rV,
  _s,
  _sC,
  _se,
  _ser,
  _sM,
  _sN,
  _SQEE,
  _t,
  _tA,
  _TE,
  _tT,
  _tTe,
  _uS,
  _v,
  _VE,
  _VEF,
  _VEFL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var AccountSettings = struct(n0, _AS, 0, [_nSS], [0]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _rI, _rT],
  [0, 0, 0],

  __ConflictException
);
export var CustomerAgreementSummary = struct(
  n0,
  _CAS,
  0,
  [_n, _a, _i, _aA, _aAI, _oA, _eS, _eE, _s, _d, _aT, _tT, _t],
  [0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 64 | 0, 64 | 0, 0]
);
export var GetAccountSettingsRequest = struct(n0, _GASR, 0, [], []);
export var GetAccountSettingsResponse = struct(n0, _GASRe, 0, [_aS], [() => AccountSettings]);
export var GetReportMetadataRequest = struct(
  n0,
  _GRMR,
  0,
  [_rIe, _rV],
  [
    [
      0,
      {
        [_hQ]: _rIe,
      },
    ],
    [
      1,
      {
        [_hQ]: _rV,
      },
    ],
  ]
);
export var GetReportMetadataResponse = struct(n0, _GRMRe, 0, [_rD], [() => ReportDetail]);
export var GetReportRequest = struct(
  n0,
  _GRR,
  0,
  [_rIe, _rV, _tTe],
  [
    [
      0,
      {
        [_hQ]: _rIe,
      },
    ],
    [
      1,
      {
        [_hQ]: _rV,
      },
    ],
    [
      0,
      {
        [_hQ]: _tTe,
      },
    ],
  ]
);
export var GetReportResponse = struct(n0, _GRRe, 0, [_dPU], [0]);
export var GetTermForReportRequest = struct(
  n0,
  _GTFRR,
  0,
  [_rIe, _rV],
  [
    [
      0,
      {
        [_hQ]: _rIe,
      },
    ],
    [
      1,
      {
        [_hQ]: _rV,
      },
    ],
  ]
);
export var GetTermForReportResponse = struct(n0, _GTFRRe, 0, [_dPU, _tTe], [0, 0]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m, _rAS],
  [
    0,
    [
      1,
      {
        [_hH]: _RA,
      },
    ],
  ],

  __InternalServerException
);
export var ListCustomerAgreementsRequest = struct(
  n0,
  _LCAR,
  0,
  [_mR, _nT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListCustomerAgreementsResponse = struct(n0, _LCARi, 0, [_cA, _nT], [() => CustomerAgreementList, 0]);
export var ListReportsRequest = struct(
  n0,
  _LRR,
  0,
  [_mR, _nT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListReportsResponse = struct(n0, _LRRi, 0, [_r, _nT], [() => ReportsList, 0]);
export var PutAccountSettingsRequest = struct(n0, _PASR, 0, [_nSS], [0]);
export var PutAccountSettingsResponse = struct(n0, _PASRu, 0, [_aS], [() => AccountSettings]);
export var ReportDetail = struct(
  n0,
  _RD,
  0,
  [_i, _n, _d, _pS, _pE, _cAr, _lMA, _dA, _s, _a, _ser, _ca, _cN, _pN, _tA, _v, _aTc, _sN, _uS, _sM],
  [0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0]
);
export var ReportSummary = struct(
  n0,
  _RS,
  0,
  [_i, _n, _s, _a, _v, _uS, _d, _pS, _pE, _ser, _ca, _cN, _pN, _sM, _aTc],
  [0, 0, 0, 0, 1, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0]
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m, _rI, _rT],
  [0, 0, 0],

  __ResourceNotFoundException
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _rI, _rT, _sC, _qC],
  [0, 0, 0, 0, 0],

  __ServiceQuotaExceededException
);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m, _sC, _qC, _rAS],
  [
    0,
    0,
    0,
    [
      1,
      {
        [_hH]: _RA,
      },
    ],
  ],

  __ThrottlingException
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _re, _fL],
  [0, 0, () => ValidationExceptionFieldList],

  __ValidationException
);
export var ValidationExceptionField = struct(n0, _VEF, 0, [_n, _m], [0, 0]);
export var Unit = "unit" as const;

export var AgreementTerms = 64 | 0;

export var CustomerAgreementList = list(n0, _CAL, 0, () => CustomerAgreementSummary);
export var ReportsList = list(n0, _RL, 0, () => ReportSummary);
export var ValidationExceptionFieldList = list(n0, _VEFL, 0, () => ValidationExceptionField);
export var GetAccountSettings = op(
  n0,
  _GAS,
  {
    [_h]: ["GET", "/v1/account-settings/get", 200],
  },
  () => GetAccountSettingsRequest,
  () => GetAccountSettingsResponse
);
export var GetReport = op(
  n0,
  _GR,
  {
    [_h]: ["GET", "/v1/report/get", 200],
  },
  () => GetReportRequest,
  () => GetReportResponse
);
export var GetReportMetadata = op(
  n0,
  _GRM,
  {
    [_h]: ["GET", "/v1/report/getMetadata", 200],
  },
  () => GetReportMetadataRequest,
  () => GetReportMetadataResponse
);
export var GetTermForReport = op(
  n0,
  _GTFR,
  {
    [_h]: ["GET", "/v1/report/getTermForReport", 200],
  },
  () => GetTermForReportRequest,
  () => GetTermForReportResponse
);
export var ListCustomerAgreements = op(
  n0,
  _LCA,
  {
    [_h]: ["GET", "/v1/customer-agreement/list", 200],
  },
  () => ListCustomerAgreementsRequest,
  () => ListCustomerAgreementsResponse
);
export var ListReports = op(
  n0,
  _LR,
  {
    [_h]: ["GET", "/v1/report/list", 200],
  },
  () => ListReportsRequest,
  () => ListReportsResponse
);
export var PutAccountSettings = op(
  n0,
  _PAS,
  {
    [_h]: ["PUT", "/v1/account-settings/put", 200],
  },
  () => PutAccountSettingsRequest,
  () => PutAccountSettingsResponse
);
