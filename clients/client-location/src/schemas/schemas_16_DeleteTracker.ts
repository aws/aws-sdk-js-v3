// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DTe, _DTR, _DTRe, _en, _h, _TN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTrackerRequest = struct(n0, _DTR, 0, [_TN], [[0, 1]]);
export var DeleteTrackerResponse = struct(n0, _DTRe, 0, [], []);
export var DeleteTracker = op(
  n0,
  _DTe,
  {
    [_h]: ["DELETE", "/tracking/v0/trackers/{TrackerName}", 200],
    [_en]: ["cp.tracking."],
  },
  () => DeleteTrackerRequest,
  () => DeleteTrackerResponse
);
