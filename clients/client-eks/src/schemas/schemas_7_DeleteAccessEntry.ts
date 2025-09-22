// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cN, _DAE, _DAER, _DAERe, _ht, _pA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAccessEntryRequest = struct(
  n0,
  _DAER,
  0,
  [_cN, _pA],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteAccessEntryResponse = struct(n0, _DAERe, 0, [], []);
export var DeleteAccessEntry = op(
  n0,
  _DAE,
  {
    [_ht]: ["DELETE", "/clusters/{clusterName}/access-entries/{principalArn}", 200],
  },
  () => DeleteAccessEntryRequest,
  () => DeleteAccessEntryResponse
);
