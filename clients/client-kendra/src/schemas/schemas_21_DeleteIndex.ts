// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIe, _DIR, _I, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteIndexRequest = struct(n0, _DIR, 0, [_I], [0]);
export var DeleteIndex = op(
  n0,
  _DIe,
  0,
  () => DeleteIndexRequest,
  () => Unit
);
