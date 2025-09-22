// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _GMRete,
  _GMRR,
  _hM,
  _ht,
  _MR,
  _PMRR,
  _PMRu,
  _pO,
  _rAI,
  _rI,
  _rMes,
  _rP,
  _sC,
  _UMRpd,
  _UMRR,
  ListOfPatchOperation,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetMethodResponseRequest = struct(
  n0,
  _GMRR,
  0,
  [_rAI, _rI, _hM, _sC],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var MethodResponse = struct(n0, _MR, 0, [_sC, _rP, _rMes], [0, 128 | 2, 128 | 0]);
export var PutMethodResponseRequest = struct(
  n0,
  _PMRR,
  0,
  [_rAI, _rI, _hM, _sC, _rP, _rMes],
  [[0, 1], [0, 1], [0, 1], [0, 1], 128 | 2, 128 | 0]
);
export var UpdateMethodResponseRequest = struct(
  n0,
  _UMRR,
  0,
  [_rAI, _rI, _hM, _sC, _pO],
  [[0, 1], [0, 1], [0, 1], [0, 1], () => ListOfPatchOperation]
);
export var MapOfStringToBoolean = 128 | 2;

export var GetMethodResponse = op(
  n0,
  _GMRete,
  {
    [_ht]: ["GET", "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/responses/{statusCode}", 200],
  },
  () => GetMethodResponseRequest,
  () => MethodResponse
);
export var PutMethodResponse = op(
  n0,
  _PMRu,
  {
    [_ht]: ["PUT", "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/responses/{statusCode}", 201],
  },
  () => PutMethodResponseRequest,
  () => MethodResponse
);
export var UpdateMethodResponse = op(
  n0,
  _UMRpd,
  {
    [_ht]: ["PATCH", "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/responses/{statusCode}", 201],
  },
  () => UpdateMethodResponseRequest,
  () => MethodResponse
);
