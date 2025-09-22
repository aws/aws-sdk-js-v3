// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DCLS, _DCLSR, _DCLSRe, _h, _hQ, _sN, _sV, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCustomLogSourceRequest = struct(
  n0,
  _DCLSR,
  0,
  [_sN, _sV],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _sV,
      },
    ],
  ]
);
export var DeleteCustomLogSourceResponse = struct(n0, _DCLSRe, 0, [], []);
export var DeleteCustomLogSource = op(
  n0,
  _DCLS,
  {
    [_h]: ["DELETE", "/v1/datalake/logsources/custom/{sourceName}", 200],
  },
  () => DeleteCustomLogSourceRequest,
  () => DeleteCustomLogSourceResponse
);
