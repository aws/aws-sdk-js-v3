// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aI,
  _c,
  _cA,
  _CJS,
  _CJSL,
  _CT,
  _CTD,
  _cTl,
  _CTR,
  _CTRr,
  _eN,
  _en,
  _ent,
  _ET,
  _ETR,
  _ETRx,
  _GT,
  _GTR,
  _GTRe,
  _h,
  _hQ,
  _i,
  _iT,
  _k,
  _LCJ,
  _LCJR,
  _LCJRi,
  _mA,
  _mR,
  _n,
  _nT,
  _o,
  _T,
  _tag,
  _the,
  _TL,
  _tTC,
  _TV,
  _TVh,
  _TVL,
  _UT,
  _uT,
  _UTD,
  _UTR,
  _UTRp,
  _v,
  _val,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CodegenJobSummary = struct(n0, _CJS, 0, [_aI, _eN, _i, _cA, _mA], [0, 0, 0, 5, 5]);
export var CreateThemeData = struct(
  n0,
  _CTD,
  0,
  [_n, _v, _o, _tag],
  [0, () => ThemeValuesList, () => ThemeValuesList, 128 | 0]
);
export var CreateThemeRequest = struct(
  n0,
  _CTR,
  0,
  [_aI, _eN, _cTl, _tTC],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cTl,
      },
    ],
    [() => CreateThemeData, 16],
  ]
);
export var CreateThemeResponse = struct(n0, _CTRr, 0, [_en], [[() => Theme, 16]]);
export var ExportThemesRequest = struct(
  n0,
  _ETR,
  0,
  [_aI, _eN, _nT],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ExportThemesResponse = struct(n0, _ETRx, 0, [_ent, _nT], [() => ThemeList, 0]);
export var GetThemeRequest = struct(
  n0,
  _GTR,
  0,
  [_aI, _eN, _i],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetThemeResponse = struct(n0, _GTRe, 0, [_the], [[() => Theme, 16]]);
export var ListCodegenJobsRequest = struct(
  n0,
  _LCJR,
  0,
  [_aI, _eN, _nT, _mR],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListCodegenJobsResponse = struct(n0, _LCJRi, 0, [_ent, _nT], [() => CodegenJobSummaryList, 0]);
export var Theme = struct(
  n0,
  _T,
  0,
  [_aI, _eN, _i, _n, _cA, _mA, _v, _o, _tag],
  [0, 0, 0, 0, 5, 5, () => ThemeValuesList, () => ThemeValuesList, 128 | 0]
);
export var ThemeValue = struct(n0, _TV, 0, [_val, _c], [0, () => ThemeValuesList]);
export var ThemeValues = struct(n0, _TVh, 0, [_k, _val], [0, () => ThemeValue]);
export var UpdateThemeData = struct(
  n0,
  _UTD,
  0,
  [_i, _n, _v, _o],
  [0, 0, () => ThemeValuesList, () => ThemeValuesList]
);
export var UpdateThemeRequest = struct(
  n0,
  _UTR,
  0,
  [_aI, _eN, _i, _cTl, _uT],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cTl,
      },
    ],
    [() => UpdateThemeData, 16],
  ]
);
export var UpdateThemeResponse = struct(n0, _UTRp, 0, [_en], [[() => Theme, 16]]);
export var CodegenJobSummaryList = list(n0, _CJSL, 0, () => CodegenJobSummary);
export var ThemeList = list(n0, _TL, 0, () => Theme);
export var ThemeValuesList = list(n0, _TVL, 0, () => ThemeValues);
export var CreateTheme = op(
  n0,
  _CT,
  {
    [_h]: ["POST", "/app/{appId}/environment/{environmentName}/themes", 200],
  },
  () => CreateThemeRequest,
  () => CreateThemeResponse
);
export var ExportThemes = op(
  n0,
  _ET,
  {
    [_h]: ["GET", "/export/app/{appId}/environment/{environmentName}/themes", 200],
  },
  () => ExportThemesRequest,
  () => ExportThemesResponse
);
export var GetTheme = op(
  n0,
  _GT,
  {
    [_h]: ["GET", "/app/{appId}/environment/{environmentName}/themes/{id}", 200],
  },
  () => GetThemeRequest,
  () => GetThemeResponse
);
export var ListCodegenJobs = op(
  n0,
  _LCJ,
  {
    [_h]: ["GET", "/app/{appId}/environment/{environmentName}/codegen-jobs", 200],
  },
  () => ListCodegenJobsRequest,
  () => ListCodegenJobsResponse
);
export var UpdateTheme = op(
  n0,
  _UT,
  {
    [_h]: ["PATCH", "/app/{appId}/environment/{environmentName}/themes/{id}", 200],
  },
  () => UpdateThemeRequest,
  () => UpdateThemeResponse
);
