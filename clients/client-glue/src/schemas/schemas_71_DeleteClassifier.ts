// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DCe, _DCRel, _DCRele, _N, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteClassifierRequest = struct(n0, _DCRel, 0, [_N], [0]);
export var DeleteClassifierResponse = struct(n0, _DCRele, 0, [], []);
export var DeleteClassifier = op(
  n0,
  _DCe,
  0,
  () => DeleteClassifierRequest,
  () => DeleteClassifierResponse
);
