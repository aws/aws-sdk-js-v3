// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDPP, _DDPPR, _lGI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDataProtectionPolicyRequest = struct(n0, _DDPPR, 0, [_lGI], [0]);
export var DeleteDataProtectionPolicy = op(
  n0,
  _DDPP,
  0,
  () => DeleteDataProtectionPolicyRequest,
  () => Unit
);
