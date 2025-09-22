// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _a,
  _Ac,
  _AKI,
  _b,
  _CD,
  _cDo,
  _CT,
  _cT,
  _DPI,
  _ER,
  _eT,
  _f,
  _fa,
  _fOW,
  _GE,
  _GER,
  _GS,
  _GSR,
  _hH,
  _hQ,
  _ht,
  _IAK,
  _IAKR,
  _id,
  _IDP,
  _IDPR,
  _mo,
  _par,
  _rAI,
  _sN,
  _SR,
  _sT,
  _w,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApiKeyIds = struct(n0, _AKI, 0, [_id, _w], [64 | 0, 64 | 0]);
export var DocumentationPartIds = struct(n0, _DPI, 0, [_id, _w], [64 | 0, 64 | 0]);
export var ExportResponse = struct(
  n0,
  _ER,
  0,
  [_cT, _cDo, _b],
  [
    [
      0,
      {
        [_hH]: _CT,
      },
    ],
    [
      0,
      {
        [_hH]: _CD,
      },
    ],
    [21, 16],
  ]
);
export var GetExportRequest = struct(
  n0,
  _GER,
  0,
  [_rAI, _sN, _eT, _par, _a],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [128 | 0, 64],
    [
      0,
      {
        [_hH]: _Ac,
      },
    ],
  ]
);
export var GetSdkRequest = struct(
  n0,
  _GSR,
  0,
  [_rAI, _sN, _sT, _par],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [128 | 0, 64],
  ]
);
export var ImportApiKeysRequest = struct(
  n0,
  _IAKR,
  0,
  [_b, _f, _fOW],
  [
    [21, 16],
    [
      0,
      {
        [_hQ]: _f,
      },
    ],
    [
      2,
      {
        [_hQ]: _fa,
      },
    ],
  ]
);
export var ImportDocumentationPartsRequest = struct(
  n0,
  _IDPR,
  0,
  [_rAI, _mo, _fOW, _b],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _mo,
      },
    ],
    [
      2,
      {
        [_hQ]: _fa,
      },
    ],
    [21, 16],
  ]
);
export var SdkResponse = struct(
  n0,
  _SR,
  0,
  [_cT, _cDo, _b],
  [
    [
      0,
      {
        [_hH]: _CT,
      },
    ],
    [
      0,
      {
        [_hH]: _CD,
      },
    ],
    [21, 16],
  ]
);
export var GetExport = op(
  n0,
  _GE,
  {
    [_ht]: ["GET", "/restapis/{restApiId}/stages/{stageName}/exports/{exportType}", 200],
  },
  () => GetExportRequest,
  () => ExportResponse
);
export var GetSdk = op(
  n0,
  _GS,
  {
    [_ht]: ["GET", "/restapis/{restApiId}/stages/{stageName}/sdks/{sdkType}", 200],
  },
  () => GetSdkRequest,
  () => SdkResponse
);
export var ImportApiKeys = op(
  n0,
  _IAK,
  {
    [_ht]: ["POST", "/apikeys?mode=import", 201],
  },
  () => ImportApiKeysRequest,
  () => ApiKeyIds
);
export var ImportDocumentationParts = op(
  n0,
  _IDP,
  {
    [_ht]: ["PUT", "/restapis/{restApiId}/documentation/parts", 200],
  },
  () => ImportDocumentationPartsRequest,
  () => DocumentationPartIds
);
