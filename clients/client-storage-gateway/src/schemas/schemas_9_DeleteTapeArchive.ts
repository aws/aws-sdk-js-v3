// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _BGR, _DTA, _DTAI, _DTAO, _TARN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTapeArchiveInput = struct(n0, _DTAI, 0, [_TARN, _BGR], [0, 2]);
export var DeleteTapeArchiveOutput = struct(n0, _DTAO, 0, [_TARN], [0]);
export var DeleteTapeArchive = op(
  n0,
  _DTA,
  0,
  () => DeleteTapeArchiveInput,
  () => DeleteTapeArchiveOutput
);
