// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _Ar,
  _ARp,
  _ARpp,
  _CA,
  _CAR,
  _CARr,
  _CARre,
  _CD,
  _DAe,
  _DAR,
  _DARe,
  _GA,
  _GAe,
  _GAR,
  _GARe,
  _GARet,
  _GARetp,
  _h,
  _hQ,
  _I,
  _Id,
  _jN,
  _LOARi,
  _N,
  _NT,
  _PS,
  _ps,
  _t,
  _to,
  _Tok,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApplicationResponse = struct(
  n0,
  _ARp,
  0,
  [_Ar, _Id, _N, _t, _CD],
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
    0,
  ]
);
export var ApplicationsResponse = struct(n0, _ARpp, 0, [_I, _NT], [[() => ListOfApplicationResponse, 0], 0]);
export var CreateApplicationRequest = struct(
  n0,
  _CAR,
  0,
  [_N, _t],
  [
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var CreateAppRequest = struct(n0, _CARr, 0, [_CAR], [[() => CreateApplicationRequest, 16]]);
export var CreateAppResponse = struct(n0, _CARre, 0, [_ARp], [[() => ApplicationResponse, 16]]);
export var DeleteAppRequest = struct(n0, _DAR, 0, [_AI], [[0, 1]]);
export var DeleteAppResponse = struct(n0, _DARe, 0, [_ARp], [[() => ApplicationResponse, 16]]);
export var GetAppRequest = struct(n0, _GAR, 0, [_AI], [[0, 1]]);
export var GetAppResponse = struct(n0, _GARe, 0, [_ARp], [[() => ApplicationResponse, 16]]);
export var GetAppsRequest = struct(
  n0,
  _GARet,
  0,
  [_PS, _Tok],
  [
    [
      0,
      {
        [_hQ]: _ps,
      },
    ],
    [
      0,
      {
        [_hQ]: _to,
      },
    ],
  ]
);
export var GetAppsResponse = struct(n0, _GARetp, 0, [_ARpp], [[() => ApplicationsResponse, 16]]);
export var ListOfApplicationResponse = list(n0, _LOARi, 0, [() => ApplicationResponse, 0]);
export var CreateApp = op(
  n0,
  _CA,
  {
    [_h]: ["POST", "/v1/apps", 201],
  },
  () => CreateAppRequest,
  () => CreateAppResponse
);
export var DeleteApp = op(
  n0,
  _DAe,
  {
    [_h]: ["DELETE", "/v1/apps/{ApplicationId}", 200],
  },
  () => DeleteAppRequest,
  () => DeleteAppResponse
);
export var GetApp = op(
  n0,
  _GA,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}", 200],
  },
  () => GetAppRequest,
  () => GetAppResponse
);
export var GetApps = op(
  n0,
  _GAe,
  {
    [_h]: ["GET", "/v1/apps", 200],
  },
  () => GetAppsRequest,
  () => GetAppsResponse
);
