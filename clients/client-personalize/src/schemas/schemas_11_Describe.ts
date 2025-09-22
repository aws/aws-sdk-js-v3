// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aIc,
  _cDT,
  _CET,
  _CETR,
  _CETRr,
  _DETe,
  _DETRe,
  _DETRes,
  _dGA,
  _ET,
  _eTA,
  _eTv,
  _lUDT,
  _n,
  _s,
  _t,
  _tI,
  n0,
  Tags,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateEventTrackerRequest = struct(n0, _CETR, 0, [_n, _dGA, _t], [0, 0, [() => Tags, 0]]);
export var CreateEventTrackerResponse = struct(n0, _CETRr, 0, [_eTA, _tI], [0, 0]);
export var DescribeEventTrackerRequest = struct(n0, _DETRe, 0, [_eTA], [0]);
export var DescribeEventTrackerResponse = struct(n0, _DETRes, 0, [_eTv], [() => EventTracker]);
export var EventTracker = struct(n0, _ET, 0, [_n, _eTA, _aIc, _tI, _dGA, _s, _cDT, _lUDT], [0, 0, 0, 0, 0, 0, 4, 4]);
export var CreateEventTracker = op(
  n0,
  _CET,
  2,
  () => CreateEventTrackerRequest,
  () => CreateEventTrackerResponse
);
export var DescribeEventTracker = op(
  n0,
  _DETe,
  2,
  () => DescribeEventTrackerRequest,
  () => DescribeEventTrackerResponse
);
