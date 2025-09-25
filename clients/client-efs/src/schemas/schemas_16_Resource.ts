// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { AccessPointNotFound as __AccessPointNotFound } from "../models/index";
import { _API, _APNF, _c, _DAP, _DAPR, _e, _EC, _h, _hE, _M, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AccessPointNotFound = error(
  n0,
  _APNF,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_EC, _M],
  [0, 0],

  __AccessPointNotFound
);
export var DeleteAccessPointRequest = struct(n0, _DAPR, 0, [_API], [[0, 1]]);
export var DeleteAccessPoint = op(
  n0,
  _DAP,
  {
    [_h]: ["DELETE", "/2015-02-01/access-points/{AccessPointId}", 204],
  },
  () => DeleteAccessPointRequest,
  () => Unit
);
