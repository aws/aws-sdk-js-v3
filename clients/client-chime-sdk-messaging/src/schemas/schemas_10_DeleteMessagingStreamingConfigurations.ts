// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AIA, _DMSC, _DMSCR, _h, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMessagingStreamingConfigurationsRequest = struct(n0, _DMSCR, 0, [_AIA], [[0, 1]]);
export var DeleteMessagingStreamingConfigurations = op(
  n0,
  _DMSC,
  {
    [_h]: ["DELETE", "/app-instances/{AppInstanceArn}/streaming-configurations", 204],
  },
  () => DeleteMessagingStreamingConfigurationsRequest,
  () => Unit
);
