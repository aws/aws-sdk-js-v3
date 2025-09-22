// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ARN,
  _Co,
  _h,
  _hQ,
  _I,
  _Id,
  _KVS,
  _KVSL,
  _KVSSL,
  _LKVS,
  _LKVSR,
  _LKVSRi,
  _LMT,
  _Ma,
  _MI,
  _N,
  _NM,
  _Q,
  _S,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var KeyValueStore = struct(n0, _KVS, 0, [_N, _Id, _Co, _ARN, _S, _LMT], [0, 0, 0, 0, 0, 4]);
export var KeyValueStoreList = struct(n0, _KVSL, 0, [_NM, _MI, _Q, _I], [0, 1, 1, [() => KeyValueStoreSummaryList, 0]]);
export var ListKeyValueStoresRequest = struct(
  n0,
  _LKVSR,
  0,
  [_Ma, _MI, _S],
  [
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
    [
      0,
      {
        [_hQ]: _S,
      },
    ],
  ]
);
export var ListKeyValueStoresResult = struct(n0, _LKVSRi, 0, [_KVSL], [[() => KeyValueStoreList, 16]]);
export var KeyValueStoreSummaryList = list(n0, _KVSSL, 0, [
  () => KeyValueStore,
  {
    [_xN]: _KVS,
  },
]);
export var ListKeyValueStores = op(
  n0,
  _LKVS,
  {
    [_h]: ["GET", "/2020-05-31/key-value-store", 200],
  },
  () => ListKeyValueStoresRequest,
  () => ListKeyValueStoresResult
);
