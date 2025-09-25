// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _DDSRP, _DDSRPR, _DDSRPRe, _DSI, _h, _RI, _St, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDataSetRefreshPropertiesRequest = struct(
  n0,
  _DDSRPR,
  0,
  [_AAI, _DSI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteDataSetRefreshPropertiesResponse = struct(n0, _DDSRPRe, 0, [_RI, _St], [0, [1, 32]]);
export var DeleteDataSetRefreshProperties = op(
  n0,
  _DDSRP,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-properties", 200],
  },
  () => DeleteDataSetRefreshPropertiesRequest,
  () => DeleteDataSetRefreshPropertiesResponse
);
