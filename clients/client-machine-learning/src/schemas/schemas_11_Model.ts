// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _MLMI, _MLMN, _ST, _UMLM, _UMLMI, _UMLMO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateMLModelInput = struct(n0, _UMLMI, 0, [_MLMI, _MLMN, _ST], [0, 0, 1]);
export var UpdateMLModelOutput = struct(n0, _UMLMO, 0, [_MLMI], [0]);
export var UpdateMLModel = op(
  n0,
  _UMLM,
  0,
  () => UpdateMLModelInput,
  () => UpdateMLModelOutput
);
