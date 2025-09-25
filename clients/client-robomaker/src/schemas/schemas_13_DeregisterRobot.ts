// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRe, _DRRer, _DRRere, _f, _h, _r, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeregisterRobotRequest = struct(n0, _DRRer, 0, [_f, _r], [0, 0]);
export var DeregisterRobotResponse = struct(n0, _DRRere, 0, [_f, _r], [0, 0]);
export var DeregisterRobot = op(
  n0,
  _DRe,
  {
    [_h]: ["POST", "/deregisterRobot", 200],
  },
  () => DeregisterRobotRequest,
  () => DeregisterRobotResponse
);
