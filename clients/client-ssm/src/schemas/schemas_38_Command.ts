// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  InvalidPluginName as __InvalidPluginName,
  InvocationDoesNotExist as __InvocationDoesNotExist,
} from "../models/index";
import {
  _aQE,
  _c,
  _CI,
  _Co,
  _CWLGN,
  _CWOC,
  _CWOE,
  _DN,
  _DV,
  _e,
  _EEDT,
  _EETx,
  _ESDT,
  _GCI,
  _GCIR,
  _GCIRe,
  _IDNE,
  _II,
  _IPN,
  _PN,
  _RCe,
  _SD,
  _SEC,
  _SEU,
  _SOC,
  _SOU,
  _St,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CloudWatchOutputConfig = struct(n0, _CWOC, 0, [_CWLGN, _CWOE], [0, 2]);
export var GetCommandInvocationRequest = struct(n0, _GCIR, 0, [_CI, _II, _PN], [0, 0, 0]);
export var GetCommandInvocationResult = struct(
  n0,
  _GCIRe,
  0,
  [_CI, _II, _Co, _DN, _DV, _PN, _RCe, _ESDT, _EETx, _EEDT, _St, _SD, _SOC, _SOU, _SEC, _SEU, _CWOC],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, () => CloudWatchOutputConfig]
);
export var InvalidPluginName = error(
  n0,
  _IPN,
  {
    [_e]: _c,
    [_aQE]: [`InvalidPluginName`, 404],
  },
  [],
  [],

  __InvalidPluginName
);
export var InvocationDoesNotExist = error(
  n0,
  _IDNE,
  {
    [_e]: _c,
    [_aQE]: [`InvocationDoesNotExist`, 400],
  },
  [],
  [],

  __InvocationDoesNotExist
);
export var GetCommandInvocation = op(
  n0,
  _GCI,
  0,
  () => GetCommandInvocationRequest,
  () => GetCommandInvocationResult
);
