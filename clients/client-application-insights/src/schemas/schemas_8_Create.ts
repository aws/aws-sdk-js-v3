// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceInUseException as __ResourceInUseException } from "../models/index";
import {
  _aQE,
  _c,
  _CCR,
  _CCr,
  _CCRr,
  _CLP,
  _CLPR,
  _CLPRr,
  _CN,
  _e,
  _hE,
  _LP,
  _M,
  _NCN,
  _P,
  _PN,
  _PSN,
  _Ra,
  _RGN,
  _RIUE,
  _RL,
  _UC,
  _UCR,
  _UCRp,
  _ULP,
  _ULPR,
  _ULPRp,
  n0,
} from "./schemas_0";
import { LogPattern } from "./schemas_4_Log";

/* eslint no-var: 0 */

export var CreateComponentRequest = struct(n0, _CCR, 0, [_RGN, _CN, _RL], [0, 0, 64 | 0]);
export var CreateComponentResponse = struct(n0, _CCRr, 0, [], []);
export var CreateLogPatternRequest = struct(n0, _CLPR, 0, [_RGN, _PSN, _PN, _P, _Ra], [0, 0, 0, 0, 1]);
export var CreateLogPatternResponse = struct(n0, _CLPRr, 0, [_LP, _RGN], [() => LogPattern, 0]);
export var ResourceInUseException = error(
  n0,
  _RIUE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ResourceInUseException`, 400],
  },
  [_M],
  [0],

  __ResourceInUseException
);
export var UpdateComponentRequest = struct(n0, _UCR, 0, [_RGN, _CN, _NCN, _RL], [0, 0, 0, 64 | 0]);
export var UpdateComponentResponse = struct(n0, _UCRp, 0, [], []);
export var UpdateLogPatternRequest = struct(n0, _ULPR, 0, [_RGN, _PSN, _PN, _P, _Ra], [0, 0, 0, 0, 1]);
export var UpdateLogPatternResponse = struct(n0, _ULPRp, 0, [_RGN, _LP], [0, () => LogPattern]);
export var CreateComponent = op(
  n0,
  _CCr,
  0,
  () => CreateComponentRequest,
  () => CreateComponentResponse
);
export var CreateLogPattern = op(
  n0,
  _CLP,
  0,
  () => CreateLogPatternRequest,
  () => CreateLogPatternResponse
);
export var UpdateComponent = op(
  n0,
  _UC,
  0,
  () => UpdateComponentRequest,
  () => UpdateComponentResponse
);
export var UpdateLogPattern = op(
  n0,
  _ULP,
  0,
  () => UpdateLogPatternRequest,
  () => UpdateLogPatternResponse
);
