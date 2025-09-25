// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aN, _ht, _o, _sta, _TA, _TAR, _TARe, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var TestAlarmRequest = struct(n0, _TAR, 0, [_aN, _sta], [0, 0]);
export var TestAlarmResult = struct(n0, _TARe, 0, [_o], [() => OperationList]);
export var TestAlarm = op(
  n0,
  _TA,
  {
    [_ht]: ["GET", "/ls/api/2016-11-28/TestAlarm", 200],
  },
  () => TestAlarmRequest,
  () => TestAlarmResult
);
