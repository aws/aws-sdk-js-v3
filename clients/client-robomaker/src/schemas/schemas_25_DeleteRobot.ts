// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _DRR, _DRRe, _h, _r, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRobotRequest = struct(n0, _DRR, 0, [_r], [0]);
export var DeleteRobotResponse = struct(n0, _DRRe, 0, [], []);
export var DeleteRobot = op(
  n0,
  _DR,
  {
    [_h]: ["POST", "/deleteRobot", 200],
  },
  () => DeleteRobotRequest,
  () => DeleteRobotResponse
);
