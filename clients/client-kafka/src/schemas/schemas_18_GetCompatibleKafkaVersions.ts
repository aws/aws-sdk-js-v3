// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CA,
  _cA,
  _CKV,
  _cKV,
  _CKVo,
  _GCKV,
  _GCKVR,
  _GCKVRe,
  _h,
  _hQ,
  _jN,
  _lOCKV,
  _SV,
  _sV,
  _TV,
  _tV,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CompatibleKafkaVersion = struct(
  n0,
  _CKV,
  0,
  [_SV, _TV],
  [
    [
      0,
      {
        [_jN]: _sV,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _tV,
      },
    ],
  ]
);
export var GetCompatibleKafkaVersionsRequest = struct(
  n0,
  _GCKVR,
  0,
  [_CA],
  [
    [
      0,
      {
        [_hQ]: _cA,
      },
    ],
  ]
);
export var GetCompatibleKafkaVersionsResponse = struct(
  n0,
  _GCKVRe,
  0,
  [_CKVo],
  [
    [
      () => __listOfCompatibleKafkaVersion,
      {
        [_jN]: _cKV,
      },
    ],
  ]
);
export var __listOfCompatibleKafkaVersion = list(n0, _lOCKV, 0, [() => CompatibleKafkaVersion, 0]);
export var GetCompatibleKafkaVersions = op(
  n0,
  _GCKV,
  {
    [_h]: ["GET", "/v1/compatible-kafka-versions", 200],
  },
  () => GetCompatibleKafkaVersionsRequest,
  () => GetCompatibleKafkaVersionsResponse
);
