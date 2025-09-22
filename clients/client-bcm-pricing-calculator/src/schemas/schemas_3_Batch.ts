// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _aQE,
  _ar,
  _BDBSUM,
  _BDBSUME,
  _BDBSUMEa,
  _BDBSUMR,
  _BDBSUMRa,
  _BDWEU,
  _BDWEUE,
  _BDWEUEa,
  _BDWEUR,
  _BDWEURa,
  _bI,
  _bSI,
  _c,
  _cAr,
  _CBS,
  _CBSR,
  _CBSRr,
  _cC,
  _cT,
  _CWE,
  _CWER,
  _CWERr,
  _e,
  _eA,
  _eC,
  _eM,
  _er,
  _fM,
  _hE,
  _hH,
  _i,
  _id,
  _iT,
  _m,
  _mARTS,
  _mARTSe,
  _n,
  _qC,
  _rI,
  _rT,
  _rTa,
  _rTat,
  _s,
  _sARTS,
  _sC,
  _SQEE,
  _t,
  _tC,
  _TR,
  _TRR,
  _TRRa,
  _UP,
  _UPR,
  _UPRp,
  _wEI,
  _XACT,
  BillInterval,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchDeleteBillScenarioUsageModificationError = struct(n0, _BDBSUME, 0, [_i, _eM, _eC], [0, 0, 0]);
export var BatchDeleteBillScenarioUsageModificationRequest = struct(n0, _BDBSUMR, 0, [_bSI, _id], [0, 64 | 0]);
export var BatchDeleteBillScenarioUsageModificationResponse = struct(
  n0,
  _BDBSUMRa,
  0,
  [_er],
  [() => BatchDeleteBillScenarioUsageModificationErrors]
);
export var BatchDeleteWorkloadEstimateUsageError = struct(n0, _BDWEUE, 0, [_i, _eM, _eC], [0, 0, 0]);
export var BatchDeleteWorkloadEstimateUsageRequest = struct(n0, _BDWEUR, 0, [_wEI, _id], [0, 64 | 0]);
export var BatchDeleteWorkloadEstimateUsageResponse = struct(
  n0,
  _BDWEURa,
  0,
  [_er],
  [() => BatchDeleteWorkloadEstimateUsageErrors]
);
export var CreateBillScenarioRequest = struct(
  n0,
  _CBSR,
  0,
  [_n, _cT, _t],
  [
    0,
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    128 | 0,
  ]
);
export var CreateBillScenarioResponse = struct(
  n0,
  _CBSRr,
  0,
  [_i, _n, _bI, _s, _cAr, _eA, _fM],
  [0, 0, () => BillInterval, 0, 4, 4, 0]
);
export var CreateWorkloadEstimateRequest = struct(
  n0,
  _CWER,
  0,
  [_n, _cT, _rTa, _t],
  [
    0,
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    0,
    128 | 0,
  ]
);
export var CreateWorkloadEstimateResponse = struct(
  n0,
  _CWERr,
  0,
  [_i, _n, _cAr, _eA, _rTa, _rTat, _s, _tC, _cC, _fM],
  [0, 0, 4, 4, 0, 4, 0, 1, 0, 0]
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
    [_aQE]: [`ServiceQuotaCode`, 402],
  },
  [_m, _rI, _rT, _sC, _qC],
  [0, 0, 0, 0, 0],

  __ServiceQuotaExceededException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_ar, _t], [0, 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UpdatePreferencesRequest = struct(n0, _UPR, 0, [_mARTS, _mARTSe, _sARTS], [64 | 0, 64 | 0, 64 | 0]);
export var UpdatePreferencesResponse = struct(n0, _UPRp, 0, [_mARTS, _mARTSe, _sARTS], [64 | 0, 64 | 0, 64 | 0]);
export var BatchDeleteBillScenarioUsageModificationEntries = 64 | 0;

export var BatchDeleteBillScenarioUsageModificationErrors = list(
  n0,
  _BDBSUMEa,
  0,
  () => BatchDeleteBillScenarioUsageModificationError
);
export var BatchDeleteWorkloadEstimateUsageEntries = 64 | 0;

export var BatchDeleteWorkloadEstimateUsageErrors = list(n0, _BDWEUEa, 0, () => BatchDeleteWorkloadEstimateUsageError);
export var BatchDeleteBillScenarioUsageModification = op(
  n0,
  _BDBSUM,
  2,
  () => BatchDeleteBillScenarioUsageModificationRequest,
  () => BatchDeleteBillScenarioUsageModificationResponse
);
export var BatchDeleteWorkloadEstimateUsage = op(
  n0,
  _BDWEU,
  2,
  () => BatchDeleteWorkloadEstimateUsageRequest,
  () => BatchDeleteWorkloadEstimateUsageResponse
);
export var CreateBillScenario = op(
  n0,
  _CBS,
  2,
  () => CreateBillScenarioRequest,
  () => CreateBillScenarioResponse
);
export var CreateWorkloadEstimate = op(
  n0,
  _CWE,
  2,
  () => CreateWorkloadEstimateRequest,
  () => CreateWorkloadEstimateResponse
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UpdatePreferences = op(
  n0,
  _UP,
  2,
  () => UpdatePreferencesRequest,
  () => UpdatePreferencesResponse
);
