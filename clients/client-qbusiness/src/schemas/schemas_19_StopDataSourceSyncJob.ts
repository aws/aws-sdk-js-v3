// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aIp, _dSI, _ht, _iI, _SDSSJRto, _SDSSJRtop, _SDSSJt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopDataSourceSyncJobRequest = struct(
  n0,
  _SDSSJRto,
  0,
  [_dSI, _aIp, _iI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var StopDataSourceSyncJobResponse = struct(n0, _SDSSJRtop, 0, [], []);
export var StopDataSourceSyncJob = op(
  n0,
  _SDSSJt,
  {
    [_ht]: ["POST", "/applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}/stopsync", 200],
  },
  () => StopDataSourceSyncJobRequest,
  () => StopDataSourceSyncJobResponse
);
