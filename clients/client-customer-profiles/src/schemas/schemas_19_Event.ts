// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DN,
  _DS,
  _ESA,
  _ESN,
  _ESS,
  _ESSL,
  _h,
  _hQ,
  _It,
  _LES,
  _LESR,
  _LESRi,
  _MR,
  _mr,
  _NT,
  _nt,
  _SS,
  _St,
  _Sta,
  _Ta,
  _U,
  _US,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DestinationSummary = struct(n0, _DS, 0, [_U, _Sta, _US], [0, 0, 4]);
export var EventStreamSummary = struct(
  n0,
  _ESS,
  0,
  [_DN, _ESN, _ESA, _St, _SS, _DS, _Ta],
  [0, 0, 0, 0, 4, () => DestinationSummary, 128 | 0]
);
export var ListEventStreamsRequest = struct(
  n0,
  _LESR,
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
export var ListEventStreamsResponse = struct(n0, _LESRi, 0, [_It, _NT], [() => EventStreamSummaryList, 0]);
export var EventStreamSummaryList = list(n0, _ESSL, 0, () => EventStreamSummary);
export var ListEventStreams = op(
  n0,
  _LES,
  {
    [_h]: ["GET", "/domains/{DomainName}/event-streams", 200],
  },
  () => ListEventStreamsRequest,
  () => ListEventStreamsResponse
);
