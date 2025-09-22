// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSVV, _CSVVI, _CSVVR, _DF, _Er, _SD, _Va, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CheckSchemaVersionValidityInput = struct(n0, _CSVVI, 0, [_DF, _SD], [0, 0]);
export var CheckSchemaVersionValidityResponse = struct(n0, _CSVVR, 0, [_Va, _Er], [2, 0]);
export var CheckSchemaVersionValidity = op(
  n0,
  _CSVV,
  0,
  () => CheckSchemaVersionValidityInput,
  () => CheckSchemaVersionValidityResponse
);
