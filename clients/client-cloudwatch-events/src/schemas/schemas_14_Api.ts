// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DAD, _DADR, _DADRe, _N, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteApiDestinationRequest = struct(n0, _DADR, 0, [_N], [0]);
export var DeleteApiDestinationResponse = struct(n0, _DADRe, 0, [], []);
export var DeleteApiDestination = op(
  n0,
  _DAD,
  0,
  () => DeleteApiDestinationRequest,
  () => DeleteApiDestinationResponse
);
