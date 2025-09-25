// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _De,
  _EBE,
  _en,
  _h,
  _KKEGQ,
  _PF,
  _PP,
  _PPDS,
  _TA,
  _TN,
  _UT,
  _UTp,
  _UTR,
  _UTRp,
  n0,
  Timestamp,
} from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateTrackerRequest = struct(
  n0,
  _UTR,
  0,
  [_TN, _PP, _PPDS, _De, _PF, _EBE, _KKEGQ],
  [[0, 1], 0, 0, 0, 0, 2, 2]
);
export var UpdateTrackerResponse = struct(n0, _UTRp, 0, [_TN, _TA, _UT], [0, 0, [() => Timestamp, 0]]);
export var UpdateTracker = op(
  n0,
  _UTp,
  {
    [_h]: ["PATCH", "/tracking/v0/trackers/{TrackerName}", 200],
    [_en]: ["cp.tracking."],
  },
  () => UpdateTrackerRequest,
  () => UpdateTrackerResponse
);
