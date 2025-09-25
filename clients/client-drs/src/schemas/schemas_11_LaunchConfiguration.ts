// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _a,
  _cPI,
  _cT,
  _eBA,
  _ht,
  _L,
  _l,
  _LCT,
  _lCT,
  _lCTID,
  _lD,
  _lISI,
  _oB,
  _pLE,
  _t,
  _tITRSM,
  _ULCT,
  _ULCTR,
  _ULCTRp,
  n0,
  TagsMap,
} from "./schemas_0";

/* eslint no-var: 0 */

export var LaunchConfigurationTemplate = struct(
  n0,
  _LCT,
  0,
  [_lCTID, _a, _t, _lD, _tITRSM, _cPI, _cT, _l, _eBA, _pLE, _lISI],
  [0, 0, [() => TagsMap, 0], 0, 0, 2, 2, () => Licensing, 0, 2, 2]
);
export var Licensing = struct(n0, _L, 0, [_oB], [2]);
export var UpdateLaunchConfigurationTemplateRequest = struct(
  n0,
  _ULCTR,
  0,
  [_lCTID, _lD, _tITRSM, _cPI, _cT, _l, _eBA, _pLE, _lISI],
  [0, 0, 0, 2, 2, () => Licensing, 0, 2, 2]
);
export var UpdateLaunchConfigurationTemplateResponse = struct(
  n0,
  _ULCTRp,
  0,
  [_lCT],
  [[() => LaunchConfigurationTemplate, 0]]
);
export var UpdateLaunchConfigurationTemplate = op(
  n0,
  _ULCT,
  {
    [_ht]: ["POST", "/UpdateLaunchConfigurationTemplate", 200],
  },
  () => UpdateLaunchConfigurationTemplateRequest,
  () => UpdateLaunchConfigurationTemplateResponse
);
