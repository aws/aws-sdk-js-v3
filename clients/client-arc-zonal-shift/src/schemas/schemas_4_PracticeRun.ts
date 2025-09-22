// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  ResourceNotFoundException as __ResourceNotFoundException,
} from "../models/index";
import {
  _a,
  _aF,
  _aI,
  _au,
  _aW,
  _aWp,
  _BA,
  _bA,
  _bD,
  _bW,
  _c,
  _CC,
  _CE,
  _co,
  _CPR,
  _CPRC,
  _CPRCR,
  _CPRCRr,
  _CPRR,
  _CPRRa,
  _CZS,
  _CZSR,
  _DPRC,
  _DPRCR,
  _DPRCRe,
  _e,
  _eI,
  _eTx,
  _GMR,
  _GMRR,
  _GMRRe,
  _h,
  _hE,
  _m,
  _n,
  _OA,
  _oA,
  _PRC,
  _pRC,
  _r,
  _rI,
  _RNFE,
  _s,
  _SPR,
  _SPRR,
  _SPRRt,
  _sT,
  _SZS,
  _SZSR,
  _t,
  _UPRC,
  _UPRCR,
  _UPRCRp,
  _UZAC,
  _UZACR,
  _UZACRp,
  _UZS,
  _UZSR,
  _zAS,
  _ZS,
  _zS,
  _zSI,
  n0,
} from "./schemas_0";
import { AutoshiftsInResource, ZonalShiftsInResource } from "./schemas_1_Zonal";

/* eslint no-var: 0 */

export var CancelPracticeRunRequest = struct(n0, _CPRR, 0, [_zSI], [[0, 1]]);
export var CancelPracticeRunResponse = struct(
  n0,
  _CPRRa,
  0,
  [_zSI, _rI, _aF, _eTx, _sT, _s, _co],
  [0, 0, 0, 4, 4, 0, 0]
);
export var CancelZonalShiftRequest = struct(n0, _CZSR, 0, [_zSI], [[0, 1]]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _r, _zSI],
  [0, 0, 0],

  __ConflictException
);
export var ControlCondition = struct(n0, _CC, 0, [_t, _aI], [0, 0]);
export var CreatePracticeRunConfigurationRequest = struct(
  n0,
  _CPRCR,
  0,
  [_rI, _bW, _bD, _bA, _aW, _oA],
  [0, 64 | 0, 64 | 0, () => BlockingAlarms, 64 | 0, () => OutcomeAlarms]
);
export var CreatePracticeRunConfigurationResponse = struct(
  n0,
  _CPRCRr,
  0,
  [_a, _n, _zAS, _pRC],
  [0, 0, 0, () => PracticeRunConfiguration]
);
export var DeletePracticeRunConfigurationRequest = struct(n0, _DPRCR, 0, [_rI], [[0, 1]]);
export var DeletePracticeRunConfigurationResponse = struct(n0, _DPRCRe, 0, [_a, _n, _zAS], [0, 0, 0]);
export var GetManagedResourceRequest = struct(n0, _GMRR, 0, [_rI], [[0, 1]]);
export var GetManagedResourceResponse = struct(
  n0,
  _GMRRe,
  0,
  [_a, _n, _aWp, _zS, _au, _pRC, _zAS],
  [0, 0, 128 | 1, () => ZonalShiftsInResource, () => AutoshiftsInResource, () => PracticeRunConfiguration, 0]
);
export var PracticeRunConfiguration = struct(
  n0,
  _PRC,
  0,
  [_bA, _oA, _bW, _aW, _bD],
  [() => BlockingAlarms, () => OutcomeAlarms, 64 | 0, 64 | 0, 64 | 0]
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var StartPracticeRunRequest = struct(n0, _SPRR, 0, [_rI, _aF, _co], [0, 0, 0]);
export var StartPracticeRunResponse = struct(
  n0,
  _SPRRt,
  0,
  [_zSI, _rI, _aF, _eTx, _sT, _s, _co],
  [0, 0, 0, 4, 4, 0, 0]
);
export var StartZonalShiftRequest = struct(n0, _SZSR, 0, [_rI, _aF, _eI, _co], [0, 0, 0, 0]);
export var UpdatePracticeRunConfigurationRequest = struct(
  n0,
  _UPRCR,
  0,
  [_rI, _bW, _bD, _bA, _aW, _oA],
  [[0, 1], 64 | 0, 64 | 0, () => BlockingAlarms, 64 | 0, () => OutcomeAlarms]
);
export var UpdatePracticeRunConfigurationResponse = struct(
  n0,
  _UPRCRp,
  0,
  [_a, _n, _zAS, _pRC],
  [0, 0, 0, () => PracticeRunConfiguration]
);
export var UpdateZonalAutoshiftConfigurationRequest = struct(n0, _UZACR, 0, [_rI, _zAS], [[0, 1], 0]);
export var UpdateZonalAutoshiftConfigurationResponse = struct(n0, _UZACRp, 0, [_rI, _zAS], [0, 0]);
export var UpdateZonalShiftRequest = struct(n0, _UZSR, 0, [_zSI, _co, _eI], [[0, 1], 0, 0]);
export var ZonalShift = struct(n0, _ZS, 0, [_zSI, _rI, _aF, _eTx, _sT, _s, _co], [0, 0, 0, 4, 4, 0, 0]);
export var AllowedWindows = 64 | 0;

export var BlockedDates = 64 | 0;

export var BlockedWindows = 64 | 0;

export var BlockingAlarms = list(n0, _BA, 0, () => ControlCondition);
export var OutcomeAlarms = list(n0, _OA, 0, () => ControlCondition);
export var CancelPracticeRun = op(
  n0,
  _CPR,
  {
    [_h]: ["DELETE", "/practiceruns/{zonalShiftId}", 200],
  },
  () => CancelPracticeRunRequest,
  () => CancelPracticeRunResponse
);
export var CancelZonalShift = op(
  n0,
  _CZS,
  {
    [_h]: ["DELETE", "/zonalshifts/{zonalShiftId}", 200],
  },
  () => CancelZonalShiftRequest,
  () => ZonalShift
);
export var CreatePracticeRunConfiguration = op(
  n0,
  _CPRC,
  {
    [_h]: ["POST", "/configuration", 201],
  },
  () => CreatePracticeRunConfigurationRequest,
  () => CreatePracticeRunConfigurationResponse
);
export var DeletePracticeRunConfiguration = op(
  n0,
  _DPRC,
  {
    [_h]: ["DELETE", "/configuration/{resourceIdentifier}", 200],
  },
  () => DeletePracticeRunConfigurationRequest,
  () => DeletePracticeRunConfigurationResponse
);
export var GetManagedResource = op(
  n0,
  _GMR,
  {
    [_h]: ["GET", "/managedresources/{resourceIdentifier}", 200],
  },
  () => GetManagedResourceRequest,
  () => GetManagedResourceResponse
);
export var StartPracticeRun = op(
  n0,
  _SPR,
  {
    [_h]: ["POST", "/practiceruns", 200],
  },
  () => StartPracticeRunRequest,
  () => StartPracticeRunResponse
);
export var StartZonalShift = op(
  n0,
  _SZS,
  {
    [_h]: ["POST", "/zonalshifts", 201],
  },
  () => StartZonalShiftRequest,
  () => ZonalShift
);
export var UpdatePracticeRunConfiguration = op(
  n0,
  _UPRC,
  {
    [_h]: ["PATCH", "/configuration/{resourceIdentifier}", 200],
  },
  () => UpdatePracticeRunConfigurationRequest,
  () => UpdatePracticeRunConfigurationResponse
);
export var UpdateZonalAutoshiftConfiguration = op(
  n0,
  _UZAC,
  {
    [_h]: ["PUT", "/managedresources/{resourceIdentifier}", 200],
  },
  () => UpdateZonalAutoshiftConfigurationRequest,
  () => UpdateZonalAutoshiftConfigurationResponse
);
export var UpdateZonalShift = op(
  n0,
  _UZS,
  {
    [_h]: ["PATCH", "/zonalshifts/{zonalShiftId}", 200],
  },
  () => UpdateZonalShiftRequest,
  () => ZonalShift
);
