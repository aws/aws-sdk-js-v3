// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceInUse as __ResourceInUse } from "../models/index";
import { _c, _DS, _DSR, _DSRe, _e, _hE, _I, _M, _RIU, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteServiceRequest = struct(n0, _DSR, 0, [_I], [0]);
export var DeleteServiceResponse = struct(n0, _DSRe, 0, [], []);
export var ResourceInUse = error(
  n0,
  _RIU,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ResourceInUse
);
export var DeleteService = op(
  n0,
  _DS,
  0,
  () => DeleteServiceRequest,
  () => DeleteServiceResponse
);
