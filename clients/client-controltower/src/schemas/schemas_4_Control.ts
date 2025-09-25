// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _a,
  _bI,
  _bV,
  _c,
  _cI,
  _DB,
  _DBI,
  _DBO,
  _DC,
  _DCI,
  _DCO,
  _e,
  _EBI,
  _eBI,
  _EBn,
  _EBO,
  _EBP,
  _EBPn,
  _ECI,
  _eCI,
  _ECn,
  _ECO,
  _ECP,
  _ECPn,
  _h,
  _hE,
  _k,
  _m,
  _oI,
  _p,
  _REB,
  _REBI,
  _REBO,
  _REC,
  _RECI,
  _RECO,
  _SQEE,
  _t,
  _tI,
  _UEB,
  _UEBI,
  _UEBO,
  _UEC,
  _UECI,
  _UECO,
  _va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DisableBaselineInput = struct(n0, _DBI, 0, [_eBI], [0]);
export var DisableBaselineOutput = struct(n0, _DBO, 0, [_oI], [0]);
export var DisableControlInput = struct(n0, _DCI, 0, [_cI, _tI], [0, 0]);
export var DisableControlOutput = struct(n0, _DCO, 0, [_oI], [0]);
export var EnableBaselineInput = struct(
  n0,
  _EBI,
  0,
  [_bV, _p, _bI, _tI, _t],
  [0, () => EnabledBaselineParameters, 0, 0, 128 | 0]
);
export var EnableBaselineOutput = struct(n0, _EBO, 0, [_oI, _a], [0, 0]);
export var EnableControlInput = struct(
  n0,
  _ECI,
  0,
  [_cI, _tI, _t, _p],
  [0, 0, 128 | 0, () => EnabledControlParameters]
);
export var EnableControlOutput = struct(n0, _ECO, 0, [_oI, _a], [0, 0]);
export var EnabledBaselineParameter = struct(n0, _EBP, 0, [_k, _va], [0, 15]);
export var EnabledControlParameter = struct(n0, _ECP, 0, [_k, _va], [0, 15]);
export var ResetEnabledBaselineInput = struct(n0, _REBI, 0, [_eBI], [0]);
export var ResetEnabledBaselineOutput = struct(n0, _REBO, 0, [_oI], [0]);
export var ResetEnabledControlInput = struct(n0, _RECI, 0, [_eCI], [0]);
export var ResetEnabledControlOutput = struct(n0, _RECO, 0, [_oI], [0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m],
  [0],

  __ServiceQuotaExceededException
);
export var UpdateEnabledBaselineInput = struct(n0, _UEBI, 0, [_bV, _p, _eBI], [0, () => EnabledBaselineParameters, 0]);
export var UpdateEnabledBaselineOutput = struct(n0, _UEBO, 0, [_oI], [0]);
export var UpdateEnabledControlInput = struct(n0, _UECI, 0, [_p, _eCI], [() => EnabledControlParameters, 0]);
export var UpdateEnabledControlOutput = struct(n0, _UECO, 0, [_oI], [0]);
export var EnabledBaselineParameters = list(n0, _EBPn, 0, () => EnabledBaselineParameter);
export var EnabledControlParameters = list(n0, _ECPn, 0, () => EnabledControlParameter);
export var DisableBaseline = op(
  n0,
  _DB,
  {
    [_h]: ["POST", "/disable-baseline", 200],
  },
  () => DisableBaselineInput,
  () => DisableBaselineOutput
);
export var DisableControl = op(
  n0,
  _DC,
  {
    [_h]: ["POST", "/disable-control", 200],
  },
  () => DisableControlInput,
  () => DisableControlOutput
);
export var EnableBaseline = op(
  n0,
  _EBn,
  {
    [_h]: ["POST", "/enable-baseline", 200],
  },
  () => EnableBaselineInput,
  () => EnableBaselineOutput
);
export var EnableControl = op(
  n0,
  _ECn,
  {
    [_h]: ["POST", "/enable-control", 200],
  },
  () => EnableControlInput,
  () => EnableControlOutput
);
export var ResetEnabledBaseline = op(
  n0,
  _REB,
  {
    [_h]: ["POST", "/reset-enabled-baseline", 200],
  },
  () => ResetEnabledBaselineInput,
  () => ResetEnabledBaselineOutput
);
export var ResetEnabledControl = op(
  n0,
  _REC,
  {
    [_h]: ["POST", "/reset-enabled-control", 200],
  },
  () => ResetEnabledControlInput,
  () => ResetEnabledControlOutput
);
export var UpdateEnabledBaseline = op(
  n0,
  _UEB,
  {
    [_h]: ["POST", "/update-enabled-baseline", 200],
  },
  () => UpdateEnabledBaselineInput,
  () => UpdateEnabledBaselineOutput
);
export var UpdateEnabledControl = op(
  n0,
  _UEC,
  {
    [_h]: ["POST", "/update-enabled-control", 200],
  },
  () => UpdateEnabledControlInput,
  () => UpdateEnabledControlOutput
);
