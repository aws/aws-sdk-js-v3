// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _C,
  _c,
  _CE,
  _CR,
  _CRR,
  _CRRr,
  _D,
  _e,
  _h,
  _hE,
  _jN,
  _M,
  _RA,
  _RN,
  _T,
  _t,
  _URp,
  _URRp,
  _URRpd,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_C, _M],
  [0, 0],

  __ConflictException
);
export var CreateRegistryRequest = struct(
  n0,
  _CRR,
  0,
  [_D, _RN, _T],
  [
    0,
    [0, 1],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var CreateRegistryResponse = struct(
  n0,
  _CRRr,
  0,
  [_D, _RA, _RN, _T],
  [
    0,
    0,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var UpdateRegistryRequest = struct(n0, _URRp, 0, [_D, _RN], [0, [0, 1]]);
export var UpdateRegistryResponse = struct(
  n0,
  _URRpd,
  0,
  [_D, _RA, _RN, _T],
  [
    0,
    0,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var CreateRegistry = op(
  n0,
  _CR,
  {
    [_h]: ["POST", "/v1/registries/name/{RegistryName}", 201],
  },
  () => CreateRegistryRequest,
  () => CreateRegistryResponse
);
export var UpdateRegistry = op(
  n0,
  _URp,
  {
    [_h]: ["PUT", "/v1/registries/name/{RegistryName}", 200],
  },
  () => UpdateRegistryRequest,
  () => UpdateRegistryResponse
);
