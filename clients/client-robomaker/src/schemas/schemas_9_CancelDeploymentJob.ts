// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CDJ, _CDJR, _CDJRa, _h, _jo, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelDeploymentJobRequest = struct(n0, _CDJR, 0, [_jo], [0]);
export var CancelDeploymentJobResponse = struct(n0, _CDJRa, 0, [], []);
export var CancelDeploymentJob = op(
  n0,
  _CDJ,
  {
    [_h]: ["POST", "/cancelDeploymentJob", 200],
  },
  () => CancelDeploymentJobRequest,
  () => CancelDeploymentJobResponse
);
