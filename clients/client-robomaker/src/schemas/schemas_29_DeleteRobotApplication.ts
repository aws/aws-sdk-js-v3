// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ap, _aV, _DRA, _DRAR, _DRARe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRobotApplicationRequest = struct(n0, _DRAR, 0, [_ap, _aV], [0, 0]);
export var DeleteRobotApplicationResponse = struct(n0, _DRARe, 0, [], []);
export var DeleteRobotApplication = op(
  n0,
  _DRA,
  {
    [_h]: ["POST", "/deleteRobotApplication", 200],
  },
  () => DeleteRobotApplicationRequest,
  () => DeleteRobotApplicationResponse
);
