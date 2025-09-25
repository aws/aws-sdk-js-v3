// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import {
  _K,
  _LQT,
  _LQTR,
  _LQTRi,
  _QU,
  _T,
  _Ta,
  _TK,
  _TKa,
  _TM,
  _TQ,
  _TQR,
  _UQ,
  _UQR,
  _V,
  _xF,
  _xN,
  n0,
} from "./schemas_0";
import { Unit } from "./schemas_2_Message";

/* eslint no-var: 0 */

export var ListQueueTagsRequest = struct(n0, _LQTR, 0, [_QU], [0]);
export var ListQueueTagsResult = struct(
  n0,
  _LQTRi,
  0,
  [_Ta],
  [
    [
      () => TagMap,
      {
        [_xN]: _T,
        [_xF]: 1,
      },
    ],
  ]
);
export var TagQueueRequest = struct(
  n0,
  _TQR,
  0,
  [_QU, _Ta],
  [
    0,
    [
      () => TagMap,
      {
        [_xN]: _T,
        [_xF]: 1,
      },
    ],
  ]
);
export var UntagQueueRequest = struct(
  n0,
  _UQR,
  0,
  [_QU, _TK],
  [
    0,
    [
      64 | 0,
      {
        [_xN]: _TKa,
        [_xF]: 1,
      },
    ],
  ]
);
export var TagKeyList = 64 | 0;

export var TagMap = map(
  n0,
  _TM,
  0,
  [
    0,
    {
      [_xN]: _K,
    },
  ],
  [
    0,
    {
      [_xN]: _V,
    },
  ]
);
export var ListQueueTags = op(
  n0,
  _LQT,
  0,
  () => ListQueueTagsRequest,
  () => ListQueueTagsResult
);
export var TagQueue = op(
  n0,
  _TQ,
  0,
  () => TagQueueRequest,
  () => Unit
);
export var UntagQueue = op(
  n0,
  _UQ,
  0,
  () => UntagQueueRequest,
  () => Unit
);
