// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _Ar, _DDS, _DDSR, _DDSRe, _DSI, _h, _RI, _St, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDataSetRequest = struct(
  n0,
  _DDSR,
  0,
  [_AAI, _DSI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteDataSetResponse = struct(n0, _DDSRe, 0, [_Ar, _DSI, _RI, _St], [0, 0, 0, [1, 32]]);
export var DeleteDataSet = op(
  n0,
  _DDS,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/data-sets/{DataSetId}", 200],
  },
  () => DeleteDataSetRequest,
  () => DeleteDataSetResponse
);
