// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _Ar,
  _CT,
  _De,
  _h,
  _hQ,
  _LTVi,
  _LTVRis,
  _LTVRist,
  _MR,
  _mr,
  _NT,
  _nt,
  _RI,
  _St,
  _TI,
  _TVSh,
  _TVSLh,
  _VN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListThemeVersionsRequest = struct(
  n0,
  _LTVRis,
  0,
  [_AAI, _TI, _NT, _MR],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
  ]
);
export var ListThemeVersionsResponse = struct(
  n0,
  _LTVRist,
  0,
  [_TVSLh, _NT, _St, _RI],
  [() => ThemeVersionSummaryList, 0, [1, 32], 0]
);
export var ThemeVersionSummary = struct(n0, _TVSh, 0, [_VN, _Ar, _De, _CT, _St], [1, 0, 0, 4, 0]);
export var ThemeVersionSummaryList = list(n0, _TVSLh, 0, () => ThemeVersionSummary);
export var ListThemeVersions = op(
  n0,
  _LTVi,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/themes/{ThemeId}/versions", 200],
  },
  () => ListThemeVersionsRequest,
  () => ListThemeVersionsResponse
);
