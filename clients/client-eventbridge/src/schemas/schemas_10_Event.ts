// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _Ar, _CB, _CT, _ES, _ESL, _ESv, _ET, _L, _LES, _LESR, _LESRi, _N, _NP, _NT, _St, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EventSource = struct(n0, _ES, 0, [_Ar, _CB, _CT, _ET, _N, _St], [0, 0, 4, 4, 0, 0]);
export var ListEventSourcesRequest = struct(n0, _LESR, 0, [_NP, _NT, _L], [0, 0, 1]);
export var ListEventSourcesResponse = struct(n0, _LESRi, 0, [_ESv, _NT], [() => EventSourceList, 0]);
export var EventSourceList = list(n0, _ESL, 0, () => EventSource);
export var ListEventSources = op(
  n0,
  _LES,
  0,
  () => ListEventSourcesRequest,
  () => ListEventSourcesResponse
);
