// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _B,
  _GMRAPRet,
  _GMRAPRR,
  _GMRAPRRe,
  _h,
  _hCR,
  _hH,
  _hL,
  _Mr,
  _MRAPRu,
  _Regi,
  _RLo,
  _Ro,
  _Rou,
  _RU,
  _SMRAPR,
  _SMRAPRR,
  _SMRAPRRu,
  _TDP,
  _xaai,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetMultiRegionAccessPointRoutesRequest = struct(
  n0,
  _GMRAPRR,
  0,
  [_AI, _Mr],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
  ]
);
export var GetMultiRegionAccessPointRoutesResult = struct(n0, _GMRAPRRe, 0, [_Mr, _Ro], [0, [() => RouteList, 0]]);
export var MultiRegionAccessPointRoute = struct(n0, _MRAPRu, 0, [_B, _Regi, _TDP], [0, 0, 1]);
export var SubmitMultiRegionAccessPointRoutesRequest = struct(
  n0,
  _SMRAPRR,
  0,
  [_AI, _Mr, _RU],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
    [() => RouteList, 0],
  ]
);
export var SubmitMultiRegionAccessPointRoutesResult = struct(n0, _SMRAPRRu, 0, [], []);
export var RouteList = list(n0, _RLo, 0, [
  () => MultiRegionAccessPointRoute,
  {
    [_xN]: _Rou,
  },
]);
export var GetMultiRegionAccessPointRoutes = op(
  n0,
  _GMRAPRet,
  {
    [_h]: ["GET", "/v20180820/mrap/instances/{Mrap+}/routes", 200],
    [_hCR]: 1,
  },
  () => GetMultiRegionAccessPointRoutesRequest,
  () => GetMultiRegionAccessPointRoutesResult
);
export var SubmitMultiRegionAccessPointRoutes = op(
  n0,
  _SMRAPR,
  {
    [_h]: ["PATCH", "/v20180820/mrap/instances/{Mrap+}/routes", 200],
    [_hCR]: 1,
  },
  () => SubmitMultiRegionAccessPointRoutesRequest,
  () => SubmitMultiRegionAccessPointRoutesResult
);
