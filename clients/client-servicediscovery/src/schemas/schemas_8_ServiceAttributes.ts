// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ServiceAttributesLimitExceededException as __ServiceAttributesLimitExceededException } from "../models/index";
import { _A, _c, _DSA, _DSAR, _DSARe, _e, _hE, _M, _SALEE, _SI, _USA, _USAR, _USARp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteServiceAttributesRequest = struct(n0, _DSAR, 0, [_SI, _A], [0, 64 | 0]);
export var DeleteServiceAttributesResponse = struct(n0, _DSARe, 0, [], []);
export var ServiceAttributesLimitExceededException = error(
  n0,
  _SALEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ServiceAttributesLimitExceededException
);
export var UpdateServiceAttributesRequest = struct(n0, _USAR, 0, [_SI, _A], [0, 128 | 0]);
export var UpdateServiceAttributesResponse = struct(n0, _USARp, 0, [], []);
export var ServiceAttributeKeyList = 64 | 0;

export var ServiceAttributesMap = 128 | 0;

export var DeleteServiceAttributes = op(
  n0,
  _DSA,
  0,
  () => DeleteServiceAttributesRequest,
  () => DeleteServiceAttributesResponse
);
export var UpdateServiceAttributes = op(
  n0,
  _USA,
  0,
  () => UpdateServiceAttributesRequest,
  () => UpdateServiceAttributesResponse
);
