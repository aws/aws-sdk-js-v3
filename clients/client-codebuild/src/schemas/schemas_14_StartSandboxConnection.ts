// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _sI, _sIe, _SSC, _SSCI, _SSCO, _SSMS, _sSs, _sU, _tV, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var SSMSession = struct(n0, _SSMS, 0, [_sIe, _tV, _sU], [0, 0, 0]);
export var StartSandboxConnectionInput = struct(n0, _SSCI, 0, [_sI], [0]);
export var StartSandboxConnectionOutput = struct(n0, _SSCO, 0, [_sSs], [() => SSMSession]);
export var StartSandboxConnection = op(
  n0,
  _SSC,
  0,
  () => StartSandboxConnectionInput,
  () => StartSandboxConnectionOutput
);
