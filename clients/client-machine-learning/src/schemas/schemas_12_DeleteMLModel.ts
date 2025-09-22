// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMLM, _DMLMI, _DMLMO, _MLMI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMLModelInput = struct(n0, _DMLMI, 0, [_MLMI], [0]);
export var DeleteMLModelOutput = struct(n0, _DMLMO, 0, [_MLMI], [0]);
export var DeleteMLModel = op(
  n0,
  _DMLM,
  0,
  () => DeleteMLModelInput,
  () => DeleteMLModelOutput
);
