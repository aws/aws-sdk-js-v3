// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GARN, _RTRP, _RTRPI, _RTRPO, _TARN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RetrieveTapeRecoveryPointInput = struct(n0, _RTRPI, 0, [_TARN, _GARN], [0, 0]);
export var RetrieveTapeRecoveryPointOutput = struct(n0, _RTRPO, 0, [_TARN], [0]);
export var RetrieveTapeRecoveryPoint = op(
  n0,
  _RTRP,
  0,
  () => RetrieveTapeRecoveryPointInput,
  () => RetrieveTapeRecoveryPointOutput
);
