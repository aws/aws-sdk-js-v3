// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _da,
  _E,
  _eCr,
  _eIv,
  _EL,
  _eM,
  _en,
  _eRv,
  _ev,
  _fEC,
  _h,
  _p,
  _PPE,
  _PPER,
  _PPERE,
  _PPEREL,
  _PPERu,
  _ti,
  _ty,
  JsonValue,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Event = struct(n0, _E, 0, [_ti, _ty, _da], [4, 0, [() => JsonValue, 0]]);
export var PutProjectEventsRequest = struct(
  n0,
  _PPER,
  0,
  [_p, _ev],
  [
    [0, 1],
    [() => EventList, 0],
  ]
);
export var PutProjectEventsResponse = struct(n0, _PPERu, 0, [_fEC, _eRv], [1, () => PutProjectEventsResultEntryList]);
export var PutProjectEventsResultEntry = struct(n0, _PPERE, 0, [_eIv, _eCr, _eM], [0, 0, 0]);
export var EventList = list(n0, _EL, 0, [() => Event, 0]);
export var PutProjectEventsResultEntryList = list(n0, _PPEREL, 0, () => PutProjectEventsResultEntry);
export var PutProjectEvents = op(
  n0,
  _PPE,
  {
    [_h]: ["POST", "/events/projects/{project}", 200],
    [_en]: ["dataplane."],
  },
  () => PutProjectEventsRequest,
  () => PutProjectEventsResponse
);
