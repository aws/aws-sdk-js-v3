// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _h,
  _hQ,
  _jN,
  _KV,
  _KVa,
  _kVa,
  _LKV,
  _LKVR,
  _LKVRi,
  _lOKV,
  _MR,
  _mR,
  _NT,
  _nT,
  _Sta,
  _sta,
  _V,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var KafkaVersion = struct(
  n0,
  _KV,
  0,
  [_V, _Sta],
  [
    [
      0,
      {
        [_jN]: _v,
      },
    ],
    [
      0,
      {
        [_jN]: _sta,
      },
    ],
  ]
);
export var ListKafkaVersionsRequest = struct(
  n0,
  _LKVR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListKafkaVersionsResponse = struct(
  n0,
  _LKVRi,
  0,
  [_KVa, _NT],
  [
    [
      () => __listOfKafkaVersion,
      {
        [_jN]: _kVa,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var __listOfKafkaVersion = list(n0, _lOKV, 0, [() => KafkaVersion, 0]);
export var ListKafkaVersions = op(
  n0,
  _LKV,
  {
    [_h]: ["GET", "/v1/kafka-versions", 200],
  },
  () => ListKafkaVersionsRequest,
  () => ListKafkaVersionsResponse
);
