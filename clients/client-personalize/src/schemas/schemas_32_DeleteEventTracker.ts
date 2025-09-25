// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DET, _DETR, _eTA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEventTrackerRequest = struct(n0, _DETR, 0, [_eTA], [0]);
export var DeleteEventTracker = op(
  n0,
  _DET,
  2,
  () => DeleteEventTrackerRequest,
  () => Unit
);
