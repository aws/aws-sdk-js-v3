// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aIDc,
  _cSID,
  _DJLI,
  _DJLIR,
  _DJLIRe,
  _eDv,
  _ev,
  _ht,
  _i,
  _jID,
  _JL,
  _JLED,
  _JLo,
  _lDT,
  _mR,
  _nT,
  _rE,
  _sSIDo,
  _tIID,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeJobLogItemsRequest = struct(n0, _DJLIR, 0, [_jID, _mR, _nT, _aIDc], [0, 1, 0, 0]);
export var DescribeJobLogItemsResponse = struct(n0, _DJLIRe, 0, [_i, _nT], [() => JobLogs, 0]);
export var JobLog = struct(n0, _JL, 0, [_lDT, _ev, _eDv], [0, 0, () => JobLogEventData]);
export var JobLogEventData = struct(n0, _JLED, 0, [_sSIDo, _cSID, _tIID, _rE], [0, 0, 0, 0]);
export var JobLogs = list(n0, _JLo, 0, () => JobLog);
export var DescribeJobLogItems = op(
  n0,
  _DJLI,
  {
    [_ht]: ["POST", "/DescribeJobLogItems", 200],
  },
  () => DescribeJobLogItemsRequest,
  () => DescribeJobLogItemsResponse
);
