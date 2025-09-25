// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _BBF, _fi, _i, _LBB, _LBBFP, _LBBFPI, _LBBFPO, _LBBI, _LBBO, _mR, _nT, _pN, _sO, _st, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var BuildBatchFilter = struct(n0, _BBF, 0, [_st], [0]);
export var ListBuildBatchesForProjectInput = struct(
  n0,
  _LBBFPI,
  0,
  [_pN, _fi, _mR, _sO, _nT],
  [0, () => BuildBatchFilter, 1, 0, 0]
);
export var ListBuildBatchesForProjectOutput = struct(n0, _LBBFPO, 0, [_i, _nT], [64 | 0, 0]);
export var ListBuildBatchesInput = struct(n0, _LBBI, 0, [_fi, _mR, _sO, _nT], [() => BuildBatchFilter, 1, 0, 0]);
export var ListBuildBatchesOutput = struct(n0, _LBBO, 0, [_i, _nT], [64 | 0, 0]);
export var BuildBatchIds = 64 | 0;

export var ListBuildBatches = op(
  n0,
  _LBB,
  0,
  () => ListBuildBatchesInput,
  () => ListBuildBatchesOutput
);
export var ListBuildBatchesForProject = op(
  n0,
  _LBBFP,
  0,
  () => ListBuildBatchesForProjectInput,
  () => ListBuildBatchesForProjectOutput
);
