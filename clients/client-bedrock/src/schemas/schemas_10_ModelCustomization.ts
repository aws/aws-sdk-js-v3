// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _jI, _SMCJ, _SMCJR, _SMCJRt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopModelCustomizationJobRequest = struct(n0, _SMCJR, 0, [_jI], [[0, 1]]);
export var StopModelCustomizationJobResponse = struct(n0, _SMCJRt, 0, [], []);
export var StopModelCustomizationJob = op(
  n0,
  _SMCJ,
  {
    [_ht]: ["POST", "/model-customization-jobs/{jobIdentifier}/stop", 200],
  },
  () => StopModelCustomizationJobRequest,
  () => StopModelCustomizationJobResponse
);
