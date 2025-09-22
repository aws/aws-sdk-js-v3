// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _I, _II, _SDSSJRto, _SDSSJt, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var StopDataSourceSyncJobRequest = struct(n0, _SDSSJRto, 0, [_I, _II], [0, 0]);
export var StopDataSourceSyncJob = op(
  n0,
  _SDSSJt,
  0,
  () => StopDataSourceSyncJobRequest,
  () => Unit
);
