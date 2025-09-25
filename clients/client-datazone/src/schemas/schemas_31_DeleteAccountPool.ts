// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DAP, _DAPI, _DAPO, _dI, _ht, _i, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAccountPoolInput = struct(
  n0,
  _DAPI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteAccountPoolOutput = struct(n0, _DAPO, 0, [], []);
export var DeleteAccountPool = op(
  n0,
  _DAP,
  {
    [_ht]: ["DELETE", "/v2/domains/{domainIdentifier}/account-pools/{identifier}", 204],
  },
  () => DeleteAccountPoolInput,
  () => DeleteAccountPoolOutput
);
