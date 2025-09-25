// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _Ar, _DDSe, _DDSRel, _DDSRele, _DSIat, _h, _RI, _St, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDataSourceRequest = struct(
  n0,
  _DDSRel,
  0,
  [_AAI, _DSIat],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteDataSourceResponse = struct(n0, _DDSRele, 0, [_Ar, _DSIat, _RI, _St], [0, 0, 0, [1, 32]]);
export var DeleteDataSource = op(
  n0,
  _DDSe,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/data-sources/{DataSourceId}", 200],
  },
  () => DeleteDataSourceRequest,
  () => DeleteDataSourceResponse
);
