// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AI,
  _DES,
  _DESR,
  _DESRe,
  _DSA,
  _EIx,
  _ES,
  _GES,
  _GESR,
  _GESRe,
  _h,
  _LMD,
  _LUB,
  _PES,
  _PESR,
  _PESRu,
  _RA,
  _WES,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEventStreamRequest = struct(n0, _DESR, 0, [_AI], [[0, 1]]);
export var DeleteEventStreamResponse = struct(n0, _DESRe, 0, [_ES], [[() => EventStream, 16]]);
export var EventStream = struct(n0, _ES, 0, [_AI, _DSA, _EIx, _LMD, _LUB, _RA], [0, 0, 0, 0, 0, 0]);
export var GetEventStreamRequest = struct(n0, _GESR, 0, [_AI], [[0, 1]]);
export var GetEventStreamResponse = struct(n0, _GESRe, 0, [_ES], [[() => EventStream, 16]]);
export var PutEventStreamRequest = struct(
  n0,
  _PESR,
  0,
  [_AI, _WES],
  [
    [0, 1],
    [() => WriteEventStream, 16],
  ]
);
export var PutEventStreamResponse = struct(n0, _PESRu, 0, [_ES], [[() => EventStream, 16]]);
export var WriteEventStream = struct(n0, _WES, 0, [_DSA, _RA], [0, 0]);
export var DeleteEventStream = op(
  n0,
  _DES,
  {
    [_h]: ["DELETE", "/v1/apps/{ApplicationId}/eventstream", 200],
  },
  () => DeleteEventStreamRequest,
  () => DeleteEventStreamResponse
);
export var GetEventStream = op(
  n0,
  _GES,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/eventstream", 200],
  },
  () => GetEventStreamRequest,
  () => GetEventStreamResponse
);
export var PutEventStream = op(
  n0,
  _PES,
  {
    [_h]: ["POST", "/v1/apps/{ApplicationId}/eventstream", 200],
  },
  () => PutEventStreamRequest,
  () => PutEventStreamResponse
);
