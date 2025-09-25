// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DWC, _DWCR, _DWCRe, _h, _wCA, _wCS, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWorkerConfigurationRequest = struct(n0, _DWCR, 0, [_wCA], [[0, 1]]);
export var DeleteWorkerConfigurationResponse = struct(n0, _DWCRe, 0, [_wCA, _wCS], [0, 0]);
export var DeleteWorkerConfiguration = op(
  n0,
  _DWC,
  {
    [_h]: ["DELETE", "/v1/worker-configurations/{workerConfigurationArn}", 200],
  },
  () => DeleteWorkerConfigurationRequest,
  () => DeleteWorkerConfigurationResponse
);
