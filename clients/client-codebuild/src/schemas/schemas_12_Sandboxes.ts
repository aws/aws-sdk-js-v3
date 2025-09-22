// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _i, _LS, _LSI, _LSO, _mR, _nT, _sO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListSandboxesInput = struct(n0, _LSI, 0, [_mR, _sO, _nT], [1, 0, 0]);
export var ListSandboxesOutput = struct(n0, _LSO, 0, [_i, _nT], [64 | 0, 0]);
export var SandboxIds = 64 | 0;

export var ListSandboxes = op(
  n0,
  _LS,
  0,
  () => ListSandboxesInput,
  () => ListSandboxesOutput
);
