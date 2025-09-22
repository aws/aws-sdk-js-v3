// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DNP, _DNPR, _DNPRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteNetworkProfileRequest = struct(n0, _DNPR, 0, [_a], [0]);
export var DeleteNetworkProfileResult = struct(n0, _DNPRe, 0, [], []);
export var DeleteNetworkProfile = op(
  n0,
  _DNP,
  0,
  () => DeleteNetworkProfileRequest,
  () => DeleteNetworkProfileResult
);
