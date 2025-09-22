// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _FSARN, _FSI, _FSIi, _FSIL, _FSS, _FST, _GARN, _L, _LFS, _LFSI, _LFSO, _M, _NM, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var FileShareInfo = struct(n0, _FSI, 0, [_FST, _FSARN, _FSIi, _FSS, _GARN], [0, 0, 0, 0, 0]);
export var ListFileSharesInput = struct(n0, _LFSI, 0, [_GARN, _L, _M], [0, 1, 0]);
export var ListFileSharesOutput = struct(n0, _LFSO, 0, [_M, _NM, _FSIL], [0, 0, () => FileShareInfoList]);
export var FileShareInfoList = list(n0, _FSIL, 0, () => FileShareInfo);
export var ListFileShares = op(
  n0,
  _LFS,
  0,
  () => ListFileSharesInput,
  () => ListFileSharesOutput
);
