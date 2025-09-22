// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _At,
  _BPS,
  _G,
  _LL,
  _M,
  _O,
  _OM,
  _OT,
  _PD,
  _PDF,
  _PP,
  _SDCF,
  _TEA,
  _TMr,
  _TQ,
  _Ui,
  _UTE,
  _UTER,
  _UTERp,
  _VM,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Options = struct(
  n0,
  _O,
  0,
  [_VM, _OM, _At, _M, _Ui, _G, _PDF, _PD, _PP, _BPS, _TQ, _LL, _TMr, _SDCF, _OT],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
);
export var UpdateTaskExecutionRequest = struct(n0, _UTER, 0, [_TEA, _O], [0, () => Options]);
export var UpdateTaskExecutionResponse = struct(n0, _UTERp, 0, [], []);
export var UpdateTaskExecution = op(
  n0,
  _UTE,
  0,
  () => UpdateTaskExecutionRequest,
  () => UpdateTaskExecutionResponse
);
