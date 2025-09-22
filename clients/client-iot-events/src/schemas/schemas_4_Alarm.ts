// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aMN, _DAM, _DAMR, _DAMRe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAlarmModelRequest = struct(n0, _DAMR, 0, [_aMN], [[0, 1]]);
export var DeleteAlarmModelResponse = struct(n0, _DAMRe, 0, [], []);
export var DeleteAlarmModel = op(
  n0,
  _DAM,
  {
    [_h]: ["DELETE", "/alarm-models/{alarmModelName}", 204],
  },
  () => DeleteAlarmModelRequest,
  () => DeleteAlarmModelResponse
);
