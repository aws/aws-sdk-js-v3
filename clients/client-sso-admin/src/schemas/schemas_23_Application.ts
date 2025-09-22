// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAp, _DAG, _DAGR, _GT, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteApplicationGrantRequest = struct(n0, _DAGR, 0, [_AAp, _GT], [0, 0]);
export var DeleteApplicationGrant = op(
  n0,
  _DAG,
  2,
  () => DeleteApplicationGrantRequest,
  () => Unit
);
