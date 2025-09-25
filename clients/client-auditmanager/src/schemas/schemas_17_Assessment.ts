// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _aPI,
  _aPT,
  _c,
  _CCMS,
  _CCMSr,
  _CCR,
  _CCr,
  _CCRr,
  _cMS,
  _cont,
  _d,
  _e,
  _h,
  _hE,
  _m,
  _n,
  _sD,
  _sF,
  _sK,
  _sNo,
  _SQEE,
  _sSUO,
  _sT,
  _t,
  _tI,
  _tT,
  n0,
} from "./schemas_0";
import {
  ActionPlanInstructions,
  ActionPlanTitle,
  Control,
  SourceKeyword,
  TestingInformation,
  TroubleshootingText,
} from "./schemas_1_Control";
import { ControlDescription } from "./schemas_25_Assessment";

/* eslint no-var: 0 */

export var CreateControlMappingSource = struct(
  n0,
  _CCMS,
  0,
  [_sNo, _sD, _sSUO, _sT, _sK, _sF, _tT],
  [0, 0, 0, 0, () => SourceKeyword, 0, [() => TroubleshootingText, 0]]
);
export var CreateControlRequest = struct(
  n0,
  _CCR,
  0,
  [_n, _d, _tI, _aPT, _aPI, _cMS, _t],
  [
    0,
    [() => ControlDescription, 0],
    [() => TestingInformation, 0],
    [() => ActionPlanTitle, 0],
    [() => ActionPlanInstructions, 0],
    [() => CreateControlMappingSources, 0],
    128 | 0,
  ]
);
export var CreateControlResponse = struct(n0, _CCRr, 0, [_cont], [[() => Control, 0]]);
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
export var CreateControlMappingSources = list(n0, _CCMSr, 0, [() => CreateControlMappingSource, 0]);
export var CreateControl = op(
  n0,
  _CCr,
  {
    [_h]: ["POST", "/controls", 200],
  },
  () => CreateControlRequest,
  () => CreateControlResponse
);
