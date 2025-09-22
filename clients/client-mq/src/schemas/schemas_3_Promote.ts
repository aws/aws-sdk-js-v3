// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _bI, _BIr, _ht, _jN, _Mo, _mo, _PR, _Pr, _PRr, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PromoteRequest = struct(
  n0,
  _PR,
  0,
  [_BIr, _Mo],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _mo,
      },
    ],
  ]
);
export var PromoteResponse = struct(
  n0,
  _PRr,
  0,
  [_BIr],
  [
    [
      0,
      {
        [_jN]: _bI,
      },
    ],
  ]
);
export var Promote = op(
  n0,
  _Pr,
  {
    [_ht]: ["POST", "/v1/brokers/{BrokerId}/promote", 200],
  },
  () => PromoteRequest,
  () => PromoteResponse
);
