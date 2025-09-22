// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _DDS, _DDSR, _DDSRe, _h, _n, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDataSourceRequest = struct(
  n0,
  _DDSR,
  0,
  [_aI, _n],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteDataSourceResponse = struct(n0, _DDSRe, 0, [], []);
export var DeleteDataSource = op(
  n0,
  _DDS,
  {
    [_h]: ["DELETE", "/v1/apis/{apiId}/datasources/{name}", 200],
  },
  () => DeleteDataSourceRequest,
  () => DeleteDataSourceResponse
);
