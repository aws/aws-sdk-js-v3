// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Det,
  _DT,
  _E,
  _EBN,
  _ECr,
  _EI,
  _EM,
  _FEC,
  _PE,
  _PER,
  _PERE,
  _PEREL,
  _PERELu,
  _PEREu,
  _PERu,
  _Re,
  _So,
  _TH,
  _Ti,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var PutEventsRequest = struct(n0, _PER, 0, [_E], [() => PutEventsRequestEntryList]);
export var PutEventsRequestEntry = struct(
  n0,
  _PERE,
  0,
  [_Ti, _So, _Re, _DT, _Det, _EBN, _TH],
  [4, 0, 64 | 0, 0, 0, 0, 0]
);
export var PutEventsResponse = struct(n0, _PERu, 0, [_FEC, _E], [1, () => PutEventsResultEntryList]);
export var PutEventsResultEntry = struct(n0, _PEREu, 0, [_EI, _ECr, _EM], [0, 0, 0]);
export var EventResourceList = 64 | 0;

export var PutEventsRequestEntryList = list(n0, _PEREL, 0, () => PutEventsRequestEntry);
export var PutEventsResultEntryList = list(n0, _PERELu, 0, () => PutEventsResultEntry);
export var PutEvents = op(
  n0,
  _PE,
  0,
  () => PutEventsRequest,
  () => PutEventsResponse
);
