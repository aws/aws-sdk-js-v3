// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _Co,
  _DKVS,
  _DKVSe,
  _DKVSR,
  _DKVSRe,
  _DKVSRes,
  _ET,
  _h,
  _hH,
  _IM,
  _IM_,
  _KVS,
  _N,
  _UKVS,
  _UKVSR,
  _UKVSRp,
  n0,
  Unit,
} from "./schemas_0";
import { KeyValueStore } from "./schemas_35_KeyValue";

/* eslint no-var: 0 */

export var DeleteKeyValueStoreRequest = struct(
  n0,
  _DKVSR,
  0,
  [_N, _IM],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
  ]
);
export var DescribeKeyValueStoreRequest = struct(n0, _DKVSRe, 0, [_N], [[0, 1]]);
export var DescribeKeyValueStoreResult = struct(
  n0,
  _DKVSRes,
  0,
  [_KVS, _ET],
  [
    [() => KeyValueStore, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var UpdateKeyValueStoreRequest = struct(
  n0,
  _UKVSR,
  0,
  [_N, _Co, _IM],
  [
    [0, 1],
    0,
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
  ]
);
export var UpdateKeyValueStoreResult = struct(
  n0,
  _UKVSRp,
  0,
  [_KVS, _ET],
  [
    [() => KeyValueStore, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var DeleteKeyValueStore = op(
  n0,
  _DKVS,
  {
    [_h]: ["DELETE", "/2020-05-31/key-value-store/{Name}", 204],
  },
  () => DeleteKeyValueStoreRequest,
  () => Unit
);
export var DescribeKeyValueStore = op(
  n0,
  _DKVSe,
  {
    [_h]: ["GET", "/2020-05-31/key-value-store/{Name}", 200],
  },
  () => DescribeKeyValueStoreRequest,
  () => DescribeKeyValueStoreResult
);
export var UpdateKeyValueStore = op(
  n0,
  _UKVS,
  {
    [_h]: ["PUT", "/2020-05-31/key-value-store/{Name}", 200],
  },
  () => UpdateKeyValueStoreRequest,
  () => UpdateKeyValueStoreResult
);
