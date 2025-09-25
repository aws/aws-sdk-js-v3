// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CVL,
  _CVM,
  _CVo,
  _DN,
  _dN,
  _GCV,
  _GCVR,
  _GCVRe,
  _h,
  _hQ,
  _LVi,
  _LVR,
  _LVRi,
  _MR,
  _mR,
  _NT,
  _nT,
  _SV,
  _TV,
  _Ve,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CompatibleVersionsMap = struct(n0, _CVM, 0, [_SV, _TV], [0, 64 | 0]);
export var GetCompatibleVersionsRequest = struct(
  n0,
  _GCVR,
  0,
  [_DN],
  [
    [
      0,
      {
        [_hQ]: _dN,
      },
    ],
  ]
);
export var GetCompatibleVersionsResponse = struct(n0, _GCVRe, 0, [_CVo], [() => CompatibleVersionsList]);
export var ListVersionsRequest = struct(
  n0,
  _LVR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListVersionsResponse = struct(n0, _LVRi, 0, [_Ve, _NT], [64 | 0, 0]);
export var CompatibleVersionsList = list(n0, _CVL, 0, () => CompatibleVersionsMap);
export var VersionList = 64 | 0;

export var GetCompatibleVersions = op(
  n0,
  _GCV,
  {
    [_h]: ["GET", "/2021-01-01/opensearch/compatibleVersions", 200],
  },
  () => GetCompatibleVersionsRequest,
  () => GetCompatibleVersionsResponse
);
export var ListVersions = op(
  n0,
  _LVi,
  {
    [_h]: ["GET", "/2021-01-01/opensearch/versions", 200],
  },
  () => ListVersionsRequest,
  () => ListVersionsResponse
);
