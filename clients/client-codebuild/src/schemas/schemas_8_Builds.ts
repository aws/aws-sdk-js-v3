// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _bD,
  _BDB,
  _BDBI,
  _BDBO,
  _BND,
  _bND,
  _BNDu,
  _DBB,
  _DBBI,
  _DBBO,
  _i,
  _id,
  _LB,
  _LBFP,
  _LBFPI,
  _LBFPO,
  _LBI,
  _LBO,
  _nT,
  _pN,
  _sC,
  _sO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchDeleteBuildsInput = struct(n0, _BDBI, 0, [_i], [64 | 0]);
export var BatchDeleteBuildsOutput = struct(n0, _BDBO, 0, [_bD, _bND], [64 | 0, () => BuildsNotDeleted]);
export var BuildNotDeleted = struct(n0, _BND, 0, [_id, _sC], [0, 0]);
export var DeleteBuildBatchInput = struct(n0, _DBBI, 0, [_id], [0]);
export var DeleteBuildBatchOutput = struct(n0, _DBBO, 0, [_sC, _bD, _bND], [0, 64 | 0, () => BuildsNotDeleted]);
export var ListBuildsForProjectInput = struct(n0, _LBFPI, 0, [_pN, _sO, _nT], [0, 0, 0]);
export var ListBuildsForProjectOutput = struct(n0, _LBFPO, 0, [_i, _nT], [64 | 0, 0]);
export var ListBuildsInput = struct(n0, _LBI, 0, [_sO, _nT], [0, 0]);
export var ListBuildsOutput = struct(n0, _LBO, 0, [_i, _nT], [64 | 0, 0]);
export var BuildIds = 64 | 0;

export var BuildsNotDeleted = list(n0, _BNDu, 0, () => BuildNotDeleted);
export var BatchDeleteBuilds = op(
  n0,
  _BDB,
  0,
  () => BatchDeleteBuildsInput,
  () => BatchDeleteBuildsOutput
);
export var DeleteBuildBatch = op(
  n0,
  _DBB,
  0,
  () => DeleteBuildBatchInput,
  () => DeleteBuildBatchOutput
);
export var ListBuilds = op(
  n0,
  _LB,
  0,
  () => ListBuildsInput,
  () => ListBuildsOutput
);
export var ListBuildsForProject = op(
  n0,
  _LBFP,
  0,
  () => ListBuildsForProjectInput,
  () => ListBuildsForProjectOutput
);
