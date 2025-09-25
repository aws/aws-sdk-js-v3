// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DFWM, _DFWMR, _DFWMRe, _EI, _OI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeregisterFromWorkMailRequest = struct(n0, _DFWMR, 0, [_OI, _EI], [0, 0]);
export var DeregisterFromWorkMailResponse = struct(n0, _DFWMRe, 0, [], []);
export var DeregisterFromWorkMail = op(
  n0,
  _DFWM,
  2,
  () => DeregisterFromWorkMailRequest,
  () => DeregisterFromWorkMailResponse
);
