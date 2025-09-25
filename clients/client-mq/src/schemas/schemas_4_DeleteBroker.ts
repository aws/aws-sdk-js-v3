// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _bI, _BIr, _DB, _DBR, _DBRe, _ht, _jN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBrokerRequest = struct(n0, _DBR, 0, [_BIr], [[0, 1]]);
export var DeleteBrokerResponse = struct(
  n0,
  _DBRe,
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
export var DeleteBroker = op(
  n0,
  _DB,
  {
    [_ht]: ["DELETE", "/v1/brokers/{BrokerId}", 200],
  },
  () => DeleteBrokerRequest,
  () => DeleteBrokerResponse
);
