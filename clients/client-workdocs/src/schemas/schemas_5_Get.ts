// smithy-typescript generated code
import { error, map, op, sim, struct } from "@smithy/core/schema";

import { InvalidPasswordException as __InvalidPasswordException } from "../models/index";
import {
  _A,
  _AT,
  _c,
  _CCT,
  _CIr,
  _CMT,
  _CMu,
  _CT,
  _CTo,
  _DI,
  _DSUM,
  _DTUM,
  _DVM,
  _e,
  _F,
  _f,
  _GDV,
  _GDVR,
  _GDVRe,
  _h,
  _hE,
  _hH,
  _hQ,
  _ICM,
  _iCM,
  _Id,
  _IPE,
  _M,
  _Me,
  _MTo,
  _N,
  _S,
  _Si,
  _Sig,
  _Sou,
  _Th,
  _UT,
  _VI,
  AuthenticationHeaderType,
  n0,
  ResourceNameType,
} from "./schemas_0";

/* eslint no-var: 0 */

export var UrlType = sim(n0, _UT, 0, 8);
export var DocumentVersionMetadata = struct(
  n0,
  _DVM,
  0,
  [_Id, _N, _CTo, _Si, _Sig, _S, _CT, _MTo, _CCT, _CMT, _CIr, _Th, _Sou],
  [
    0,
    [() => ResourceNameType, 0],
    0,
    1,
    0,
    0,
    4,
    4,
    4,
    4,
    0,
    [() => DocumentThumbnailUrlMap, 0],
    [() => DocumentSourceUrlMap, 0],
  ]
);
export var GetDocumentVersionRequest = struct(
  n0,
  _GDVR,
  0,
  [_AT, _DI, _VI, _F, _ICM],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _f,
      },
    ],
    [
      2,
      {
        [_hQ]: _iCM,
      },
    ],
  ]
);
export var GetDocumentVersionResponse = struct(
  n0,
  _GDVRe,
  0,
  [_Me, _CMu],
  [[() => DocumentVersionMetadata, 0], 128 | 0]
);
export var InvalidPasswordException = error(
  n0,
  _IPE,
  {
    [_e]: _c,
    [_hE]: 401,
  },
  [_M],
  [0],

  __InvalidPasswordException
);
export var DocumentSourceUrlMap = map(n0, _DSUM, 0, [0, 0], [() => UrlType, 0]);
export var DocumentThumbnailUrlMap = map(n0, _DTUM, 0, [0, 0], [() => UrlType, 0]);
export var GetDocumentVersion = op(
  n0,
  _GDV,
  {
    [_h]: ["GET", "/api/v1/documents/{DocumentId}/versions/{VersionId}", 200],
  },
  () => GetDocumentVersionRequest,
  () => GetDocumentVersionResponse
);
