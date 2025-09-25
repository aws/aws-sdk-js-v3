// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _Da, _DE, _DER, _DERe, _Du, _EL, _ET, _Ev, _Eve, _M, _MR, _NTex, _SNo, _ST, _STt, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeEventsRequest = struct(n0, _DER, 0, [_SNo, _ST, _STt, _ET, _Du, _MR, _NTex], [0, 0, 4, 4, 1, 1, 0]);
export var DescribeEventsResponse = struct(n0, _DERe, 0, [_NTex, _Ev], [0, [() => EventList, 0]]);
export var Event = struct(n0, _Eve, 0, [_SNo, _ST, _M, _Da], [0, 0, 0, 4]);
export var EventList = list(n0, _EL, 0, [
  () => Event,
  {
    [_xN]: _Eve,
  },
]);
export var DescribeEvents = op(
  n0,
  _DE,
  0,
  () => DescribeEventsRequest,
  () => DescribeEventsResponse
);
