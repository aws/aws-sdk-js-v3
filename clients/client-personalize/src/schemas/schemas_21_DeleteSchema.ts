// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSe, _DSR, _sA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSchemaRequest = struct(n0, _DSR, 0, [_sA], [0]);
export var DeleteSchema = op(
  n0,
  _DSe,
  2,
  () => DeleteSchemaRequest,
  () => Unit
);
