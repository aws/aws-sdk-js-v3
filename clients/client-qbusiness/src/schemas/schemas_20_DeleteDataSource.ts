// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aIp, _DDS, _DDSR, _DDSRe, _dSI, _ht, _iI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDataSourceRequest = struct(
  n0,
  _DDSR,
  0,
  [_aIp, _iI, _dSI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteDataSourceResponse = struct(n0, _DDSRe, 0, [], []);
export var DeleteDataSource = op(
  n0,
  _DDS,
  {
    [_ht]: ["DELETE", "/applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}", 200],
  },
  () => DeleteDataSourceRequest,
  () => DeleteDataSourceResponse
);
