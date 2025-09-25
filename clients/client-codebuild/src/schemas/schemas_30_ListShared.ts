// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _LSP, _LSPI, _LSPO, _mR, _nT, _p, _sB, _sO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListSharedProjectsInput = struct(n0, _LSPI, 0, [_sB, _sO, _mR, _nT], [0, 0, 1, 0]);
export var ListSharedProjectsOutput = struct(n0, _LSPO, 0, [_nT, _p], [0, 64 | 0]);
export var ProjectArns = 64 | 0;

export var ListSharedProjects = op(
  n0,
  _LSP,
  0,
  () => ListSharedProjectsInput,
  () => ListSharedProjectsOutput
);
