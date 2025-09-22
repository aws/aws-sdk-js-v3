// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _a,
  _ar,
  _BGSK,
  _BGSKR,
  _BGSKRa,
  _cA,
  _CSK,
  _CSKR,
  _CSKRr,
  _DSK,
  _DSKR,
  _er,
  _GSK,
  _GSKR,
  _GSKRe,
  _ht,
  _SK,
  _sK,
  _SKt,
  _sKt,
  _SKV,
  _ta,
  _va,
  n0,
} from "./schemas_0";
import { Unit } from "./schemas_4_Channel";
import { BatchErrors } from "./schemas_8_Resource";

/* eslint no-var: 0 */

export var StreamKeyValue = sim(n0, _SKV, 0, 8);
export var BatchGetStreamKeyRequest = struct(n0, _BGSKR, 0, [_ar], [64 | 0]);
export var BatchGetStreamKeyResponse = struct(n0, _BGSKRa, 0, [_sK, _er], [[() => StreamKeys, 0], () => BatchErrors]);
export var CreateStreamKeyRequest = struct(n0, _CSKR, 0, [_cA, _ta], [0, 128 | 0]);
export var CreateStreamKeyResponse = struct(n0, _CSKRr, 0, [_sKt], [[() => StreamKey, 0]]);
export var DeleteStreamKeyRequest = struct(n0, _DSKR, 0, [_a], [0]);
export var GetStreamKeyRequest = struct(n0, _GSKR, 0, [_a], [0]);
export var GetStreamKeyResponse = struct(n0, _GSKRe, 0, [_sKt], [[() => StreamKey, 0]]);
export var StreamKey = struct(n0, _SK, 0, [_a, _va, _cA, _ta], [0, [() => StreamKeyValue, 0], 0, 128 | 0]);
export var StreamKeyArnList = 64 | 0;

export var StreamKeys = list(n0, _SKt, 0, [() => StreamKey, 0]);
export var BatchGetStreamKey = op(
  n0,
  _BGSK,
  {
    [_ht]: ["POST", "/BatchGetStreamKey", 200],
  },
  () => BatchGetStreamKeyRequest,
  () => BatchGetStreamKeyResponse
);
export var CreateStreamKey = op(
  n0,
  _CSK,
  {
    [_ht]: ["POST", "/CreateStreamKey", 200],
  },
  () => CreateStreamKeyRequest,
  () => CreateStreamKeyResponse
);
export var DeleteStreamKey = op(
  n0,
  _DSK,
  {
    [_ht]: ["POST", "/DeleteStreamKey", 204],
  },
  () => DeleteStreamKeyRequest,
  () => Unit
);
export var GetStreamKey = op(
  n0,
  _GSK,
  {
    [_ht]: ["POST", "/GetStreamKey", 200],
  },
  () => GetStreamKeyRequest,
  () => GetStreamKeyResponse
);
