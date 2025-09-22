// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidNextTokenException as __InvalidNextTokenException } from "../models/index";
import {
  _AIm,
  _c,
  _CIL,
  _CIo,
  _CIom,
  _DS,
  _DSe,
  _DSL,
  _e,
  _INTE,
  _LCI,
  _LCIR,
  _LCIRi,
  _LSV,
  _LSVR,
  _LSVRi,
  _M,
  _MR,
  _N,
  _NT,
  _SN,
  _SV,
  _SVe,
  _SVL,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CompatibleImage = struct(n0, _CIo, 0, [_AIm, _N], [0, 0]);
export var DependentService = struct(n0, _DS, 0, [_SN, _SV], [0, () => ServiceVersion]);
export var InvalidNextTokenException = error(
  n0,
  _INTE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidNextTokenException
);
export var ListCompatibleImagesRequest = struct(n0, _LCIR, 0, [_MR, _NT], [1, 0]);
export var ListCompatibleImagesResult = struct(n0, _LCIRi, 0, [_CIom, _NT], [() => CompatibleImageList, 0]);
export var ListServiceVersionsRequest = struct(
  n0,
  _LSVR,
  0,
  [_SN, _DSe, _MR, _NT],
  [0, () => DependentServiceList, 1, 0]
);
export var ListServiceVersionsResult = struct(
  n0,
  _LSVRi,
  0,
  [_SVe, _SN, _DSe, _NT],
  [() => ServiceVersionList, 0, () => DependentServiceList, 0]
);
export var ServiceVersion = struct(n0, _SV, 0, [_V], [0]);
export var CompatibleImageList = list(n0, _CIL, 0, () => CompatibleImage);
export var DependentServiceList = list(n0, _DSL, 0, () => DependentService);
export var ServiceVersionList = list(n0, _SVL, 0, () => ServiceVersion);
export var ListCompatibleImages = op(
  n0,
  _LCI,
  0,
  () => ListCompatibleImagesRequest,
  () => ListCompatibleImagesResult
);
export var ListServiceVersions = op(
  n0,
  _LSV,
  0,
  () => ListServiceVersionsRequest,
  () => ListServiceVersionsResult
);
