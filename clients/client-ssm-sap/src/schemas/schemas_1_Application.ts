// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _AI,
  _c,
  _CE,
  _e,
  _h,
  _hE,
  _IEIS,
  _M,
  _OI,
  _SA,
  _SAI,
  _SAIt,
  _SAO,
  _SAOt,
  _SAR,
  _SARI,
  _SARO,
  _SAt,
  _SCE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ConflictException
);
export var StartApplicationInput = struct(n0, _SAI, 0, [_AI], [0]);
export var StartApplicationOutput = struct(n0, _SAO, 0, [_OI], [0]);
export var StartApplicationRefreshInput = struct(n0, _SARI, 0, [_AI], [0]);
export var StartApplicationRefreshOutput = struct(n0, _SARO, 0, [_OI], [0]);
export var StopApplicationInput = struct(n0, _SAIt, 0, [_AI, _SCE, _IEIS], [0, 0, 2]);
export var StopApplicationOutput = struct(n0, _SAOt, 0, [_OI], [0]);
export var StartApplication = op(
  n0,
  _SA,
  {
    [_h]: ["POST", "/start-application", 200],
  },
  () => StartApplicationInput,
  () => StartApplicationOutput
);
export var StartApplicationRefresh = op(
  n0,
  _SAR,
  {
    [_h]: ["POST", "/start-application-refresh", 200],
  },
  () => StartApplicationRefreshInput,
  () => StartApplicationRefreshOutput
);
export var StopApplication = op(
  n0,
  _SAt,
  {
    [_h]: ["POST", "/stop-application", 200],
  },
  () => StopApplicationInput,
  () => StopApplicationOutput
);
