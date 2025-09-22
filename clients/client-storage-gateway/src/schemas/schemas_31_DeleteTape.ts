// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _BGR, _DTe, _DTI, _DTO, _GARN, _TARN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTapeInput = struct(n0, _DTI, 0, [_GARN, _TARN, _BGR], [0, 0, 2]);
export var DeleteTapeOutput = struct(n0, _DTO, 0, [_TARN], [0]);
export var DeleteTape = op(
  n0,
  _DTe,
  0,
  () => DeleteTapeInput,
  () => DeleteTapeOutput
);
