// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _DTRP, _DTRPI, _DTRPO, _GARN, _L, _M, _TARN, _TRPI, _TRPIa, _TRPT, _TS, _TSIB, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeTapeRecoveryPointsInput = struct(n0, _DTRPI, 0, [_GARN, _M, _L], [0, 0, 1]);
export var DescribeTapeRecoveryPointsOutput = struct(
  n0,
  _DTRPO,
  0,
  [_GARN, _TRPI, _M],
  [0, () => TapeRecoveryPointInfos, 0]
);
export var TapeRecoveryPointInfo = struct(n0, _TRPIa, 0, [_TARN, _TRPT, _TSIB, _TS], [0, 4, 1, 0]);
export var TapeRecoveryPointInfos = list(n0, _TRPI, 0, () => TapeRecoveryPointInfo);
export var DescribeTapeRecoveryPoints = op(
  n0,
  _DTRP,
  0,
  () => DescribeTapeRecoveryPointsInput,
  () => DescribeTapeRecoveryPointsOutput
);
