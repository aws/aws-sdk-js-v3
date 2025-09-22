// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _f, _h, _r, _RR, _RRR, _RRRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RegisterRobotRequest = struct(n0, _RRR, 0, [_f, _r], [0, 0]);
export var RegisterRobotResponse = struct(n0, _RRRe, 0, [_f, _r], [0, 0]);
export var RegisterRobot = op(
  n0,
  _RR,
  {
    [_h]: ["POST", "/registerRobot", 200],
  },
  () => RegisterRobotRequest,
  () => RegisterRobotResponse
);
