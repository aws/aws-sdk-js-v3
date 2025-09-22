// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DE, _DER, _EA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteExplainabilityRequest = struct(n0, _DER, 0, [_EA], [0]);
export var DeleteExplainability = op(
  n0,
  _DE,
  2,
  () => DeleteExplainabilityRequest,
  () => Unit
);
