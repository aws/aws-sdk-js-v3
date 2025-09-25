// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CIha, _DSel, _DSR, _DSRe, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteScheduleRequest = struct(n0, _DSR, 0, [_CIha], [[0, 1]]);
export var DeleteScheduleResponse = struct(n0, _DSRe, 0, [], []);
export var DeleteSchedule = op(
  n0,
  _DSel,
  {
    [_ht]: ["DELETE", "/prod/channels/{ChannelId}/schedule", 200],
  },
  () => DeleteScheduleRequest,
  () => DeleteScheduleResponse
);
