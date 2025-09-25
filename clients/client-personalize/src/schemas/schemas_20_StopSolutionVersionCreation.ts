// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _SSVC, _SSVCR, _sVA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var StopSolutionVersionCreationRequest = struct(n0, _SSVCR, 0, [_sVA], [0]);
export var StopSolutionVersionCreation = op(
  n0,
  _SSVC,
  2,
  () => StopSolutionVersionCreationRequest,
  () => Unit
);
