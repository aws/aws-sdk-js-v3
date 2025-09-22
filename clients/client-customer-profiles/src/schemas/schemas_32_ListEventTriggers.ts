// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CA,
  _D,
  _DN,
  _ETN,
  _ETSI,
  _ETSL,
  _h,
  _hQ,
  _It,
  _LET,
  _LETR,
  _LETRi,
  _LUA,
  _MR,
  _mr,
  _NT,
  _nt,
  _OTN,
  _Ta,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EventTriggerSummaryItem = struct(n0, _ETSI, 0, [_OTN, _ETN, _D, _CA, _LUA, _Ta], [0, 0, 0, 4, 4, 128 | 0]);
export var ListEventTriggersRequest = struct(
  n0,
  _LETR,
  0,
  [_DN, _NT, _MR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
  ]
);
export var ListEventTriggersResponse = struct(n0, _LETRi, 0, [_It, _NT], [[() => EventTriggerSummaryList, 0], 0]);
export var EventTriggerSummaryList = list(n0, _ETSL, 8, () => EventTriggerSummaryItem);
export var ListEventTriggers = op(
  n0,
  _LET,
  {
    [_h]: ["GET", "/domains/{DomainName}/event-triggers", 200],
  },
  () => ListEventTriggersRequest,
  () => ListEventTriggersResponse
);
