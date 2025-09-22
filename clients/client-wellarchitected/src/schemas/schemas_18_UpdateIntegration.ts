// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CRT, _h, _ISn, _UI, _UII, _WI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateIntegrationInput = struct(n0, _UII, 0, [_WI, _CRT, _ISn], [[0, 1], [0, 4], 0]);
export var UpdateIntegration = op(
  n0,
  _UI,
  {
    [_h]: ["POST", "/workloads/{WorkloadId}/updateIntegration", 200],
  },
  () => UpdateIntegrationInput,
  () => Unit
);
