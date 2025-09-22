// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { TooManyRequestsException as __TooManyRequestsException } from "../models/index";
import {
  _B,
  _C,
  _c,
  _Co,
  _e,
  _ES,
  _ESR,
  _ESRx,
  _GCBS,
  _GCBSR,
  _GCBSRe,
  _h,
  _hE,
  _hQ,
  _L,
  _M,
  _RN,
  _SAc,
  _SN,
  _SV,
  _sV,
  _TMRE,
  _Ty,
  _ty,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ExportSchemaRequest = struct(
  n0,
  _ESR,
  0,
  [_RN, _SN, _SV, _Ty],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _sV,
      },
    ],
    [
      0,
      {
        [_hQ]: _ty,
      },
    ],
  ]
);
export var ExportSchemaResponse = struct(n0, _ESRx, 0, [_Co, _SAc, _SN, _SV, _Ty], [0, 0, 0, 0, 0]);
export var GetCodeBindingSourceRequest = struct(
  n0,
  _GCBSR,
  0,
  [_L, _RN, _SN, _SV],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _sV,
      },
    ],
  ]
);
export var GetCodeBindingSourceResponse = struct(n0, _GCBSRe, 0, [_B], [[21, 16]]);
export var TooManyRequestsException = error(
  n0,
  _TMRE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_C, _M],
  [0, 0],

  __TooManyRequestsException
);
export var ExportSchema = op(
  n0,
  _ES,
  {
    [_h]: ["GET", "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/export", 200],
  },
  () => ExportSchemaRequest,
  () => ExportSchemaResponse
);
export var GetCodeBindingSource = op(
  n0,
  _GCBS,
  {
    [_h]: ["GET", "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/language/{Language}/source", 200],
  },
  () => GetCodeBindingSourceRequest,
  () => GetCodeBindingSourceResponse
);
