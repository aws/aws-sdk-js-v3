// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _Da, _DE, _DEM, _Du, _EL, _EM, _ET, _Ev, _Eve, _M, _Me, _MR, _SIo, _ST, _STt, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeEventsMessage = struct(n0, _DEM, 0, [_SIo, _ST, _STt, _ET, _Du, _MR, _M], [0, 0, 4, 4, 1, 1, 0]);
export var Event = struct(n0, _Ev, 0, [_SIo, _ST, _Me, _Da], [0, 0, 0, 4]);
export var EventsMessage = struct(n0, _EM, 0, [_M, _Eve], [0, [() => EventList, 0]]);
export var EventList = list(n0, _EL, 0, [
  () => Event,
  {
    [_xN]: _Ev,
  },
]);
export var DescribeEvents = op(
  n0,
  _DE,
  0,
  () => DescribeEventsMessage,
  () => EventsMessage
);
