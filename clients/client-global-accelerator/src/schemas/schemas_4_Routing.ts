// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import { _c, _CE, _e, _EGA, _EInd, _hE, _M, _RCRE, _RCRER, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ConflictException
);
export var RemoveCustomRoutingEndpointsRequest = struct(n0, _RCRER, 0, [_EInd, _EGA], [64 | 0, 0]);
export var EndpointIds = 64 | 0;

export var RemoveCustomRoutingEndpoints = op(
  n0,
  _RCRE,
  0,
  () => RemoveCustomRoutingEndpointsRequest,
  () => Unit
);
