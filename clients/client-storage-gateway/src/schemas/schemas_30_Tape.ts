// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CTP,
  _CTPI,
  _CTPO,
  _DTP,
  _DTPI,
  _DTPO,
  _L,
  _LTP,
  _LTPI,
  _LTPO,
  _M,
  _PARN,
  _PARNo,
  _PIo,
  _PIoo,
  _PN,
  _PS,
  _RLT,
  _RLTID,
  _SC,
  _T,
  n0,
  Tags,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateTapePoolInput = struct(n0, _CTPI, 0, [_PN, _SC, _RLT, _RLTID, _T], [0, 0, 0, 1, () => Tags]);
export var CreateTapePoolOutput = struct(n0, _CTPO, 0, [_PARN], [0]);
export var DeleteTapePoolInput = struct(n0, _DTPI, 0, [_PARN], [0]);
export var DeleteTapePoolOutput = struct(n0, _DTPO, 0, [_PARN], [0]);
export var ListTapePoolsInput = struct(n0, _LTPI, 0, [_PARNo, _M, _L], [64 | 0, 0, 1]);
export var ListTapePoolsOutput = struct(n0, _LTPO, 0, [_PIo, _M], [() => PoolInfos, 0]);
export var PoolInfo = struct(n0, _PIoo, 0, [_PARN, _PN, _SC, _RLT, _RLTID, _PS], [0, 0, 0, 0, 1, 0]);
export var PoolARNs = 64 | 0;

export var PoolInfos = list(n0, _PIo, 0, () => PoolInfo);
export var CreateTapePool = op(
  n0,
  _CTP,
  0,
  () => CreateTapePoolInput,
  () => CreateTapePoolOutput
);
export var DeleteTapePool = op(
  n0,
  _DTP,
  0,
  () => DeleteTapePoolInput,
  () => DeleteTapePoolOutput
);
export var ListTapePools = op(
  n0,
  _LTP,
  0,
  () => ListTapePoolsInput,
  () => ListTapePoolsOutput
);
