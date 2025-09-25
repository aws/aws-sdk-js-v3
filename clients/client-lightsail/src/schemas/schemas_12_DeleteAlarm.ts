// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aN, _DA, _DAR, _DARe, _ht, _o, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAlarmRequest = struct(n0, _DAR, 0, [_aN], [0]);
export var DeleteAlarmResult = struct(n0, _DARe, 0, [_o], [() => OperationList]);
export var DeleteAlarm = op(
  n0,
  _DA,
  {
    [_ht]: ["DELETE", "/ls/api/2016-11-28/DeleteAlarm", 200],
  },
  () => DeleteAlarmRequest,
  () => DeleteAlarmResult
);
