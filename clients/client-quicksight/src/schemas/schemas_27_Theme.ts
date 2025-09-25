// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _Acc,
  _AFc,
  _an,
  _ANl,
  _Ar,
  _Bor,
  _BS,
  _BTI,
  _Co,
  _Conf,
  _CSr,
  _CT,
  _CTre,
  _CTRre,
  _CTRrea,
  _Dan,
  _DCP,
  _De,
  _DFan,
  _DFime,
  _Di,
  _DTesc,
  _DTRescr,
  _DTRescri,
  _EFC,
  _Er,
  _FFo,
  _FFon,
  _FLo,
  _Fon,
  _GSu,
  _Gu,
  _h,
  _hQ,
  _LTis,
  _LTRis,
  _LTRist,
  _LUT,
  _LVN,
  _M,
  _Mar,
  _Me,
  _MFe,
  _MMG,
  _MR,
  _mr,
  _MSarg,
  _N,
  _NT,
  _nt,
  _PBri,
  _Per,
  _PFr,
  _RI,
  _SBec,
  _SFec,
  _SFu,
  _She,
  _Sho,
  _SSh,
  _St,
  _Suc,
  _T,
  _t,
  _Ta,
  _TCh,
  _TEh,
  _TELh,
  _The,
  _TI,
  _Til,
  _TL,
  _TLS,
  _TShe,
  _TSi,
  _TSLh,
  _TVh,
  _Ty,
  _UICP,
  _UTp,
  _UTRpd,
  _UTRpda,
  _VAe,
  _VD,
  _Ve,
  _VN,
  _vn,
  _W,
  _WF,
  n0,
  ResourcePermissionList,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BorderStyle = struct(n0, _BS, 0, [_Sho], [2]);
export var CreateThemeRequest = struct(
  n0,
  _CTRre,
  0,
  [_AAI, _TI, _N, _BTI, _VD, _Conf, _Per, _Ta],
  [[0, 1], [0, 1], 0, 0, 0, () => ThemeConfiguration, () => ResourcePermissionList, () => TagList]
);
export var CreateThemeResponse = struct(n0, _CTRrea, 0, [_Ar, _VAe, _TI, _CSr, _St, _RI], [0, 0, 0, 0, [1, 32], 0]);
export var DataColorPalette = struct(n0, _DCP, 0, [_Co, _MMG, _EFC], [64 | 0, 64 | 0, 0]);
export var DescribeThemeRequest = struct(
  n0,
  _DTRescr,
  0,
  [_AAI, _TI, _VN, _ANl],
  [
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _vn,
      },
    ],
    [
      0,
      {
        [_hQ]: _an,
      },
    ],
  ]
);
export var DescribeThemeResponse = struct(n0, _DTRescri, 0, [_The, _St, _RI], [() => Theme, [1, 32], 0]);
export var Font = struct(n0, _Fon, 0, [_FFo], [0]);
export var GutterStyle = struct(n0, _GSu, 0, [_Sho], [2]);
export var ListThemesRequest = struct(
  n0,
  _LTRis,
  0,
  [_AAI, _NT, _MR, _T],
  [
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
    [
      0,
      {
        [_hQ]: _t,
      },
    ],
  ]
);
export var ListThemesResponse = struct(n0, _LTRist, 0, [_TSLh, _NT, _St, _RI], [() => ThemeSummaryList, 0, [1, 32], 0]);
export var MarginStyle = struct(n0, _MSarg, 0, [_Sho], [2]);
export var SheetStyle = struct(n0, _SSh, 0, [_Til, _TL], [() => TileStyle, () => TileLayoutStyle]);
export var Theme = struct(n0, _The, 0, [_Ar, _N, _TI, _Ve, _CT, _LUT, _T], [0, 0, 0, () => ThemeVersion, 4, 4, 0]);
export var ThemeConfiguration = struct(
  n0,
  _TCh,
  0,
  [_DCP, _UICP, _She, _Ty],
  [() => DataColorPalette, () => UIColorPalette, () => SheetStyle, () => Typography]
);
export var ThemeError = struct(n0, _TEh, 0, [_T, _M], [0, 0]);
export var ThemeSummary = struct(n0, _TShe, 0, [_Ar, _N, _TI, _LVN, _CT, _LUT], [0, 0, 0, 1, 4, 4]);
export var ThemeVersion = struct(
  n0,
  _TVh,
  0,
  [_VN, _Ar, _De, _BTI, _CT, _Conf, _Er, _St],
  [1, 0, 0, 0, 4, () => ThemeConfiguration, () => ThemeErrorList, 0]
);
export var TileLayoutStyle = struct(n0, _TLS, 0, [_Gu, _Mar], [() => GutterStyle, () => MarginStyle]);
export var TileStyle = struct(n0, _TSi, 0, [_Bor], [() => BorderStyle]);
export var Typography = struct(n0, _Ty, 0, [_FFon], [() => FontList]);
export var UIColorPalette = struct(
  n0,
  _UICP,
  0,
  [_PFr, _PBri, _SFec, _SBec, _Acc, _AFc, _Dan, _DFan, _W, _WF, _Suc, _SFu, _Di, _DFime, _Me, _MFe],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var UpdateThemeRequest = struct(
  n0,
  _UTRpd,
  0,
  [_AAI, _TI, _N, _BTI, _VD, _Conf],
  [[0, 1], [0, 1], 0, 0, 0, () => ThemeConfiguration]
);
export var UpdateThemeResponse = struct(n0, _UTRpda, 0, [_TI, _Ar, _VAe, _CSr, _St, _RI], [0, 0, 0, 0, [1, 32], 0]);
export var ColorList = 64 | 0;

export var FontList = list(n0, _FLo, 0, () => Font);
export var ThemeErrorList = list(n0, _TELh, 0, () => ThemeError);
export var ThemeSummaryList = list(n0, _TSLh, 0, () => ThemeSummary);
export var CreateTheme = op(
  n0,
  _CTre,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/themes/{ThemeId}", 200],
  },
  () => CreateThemeRequest,
  () => CreateThemeResponse
);
export var DescribeTheme = op(
  n0,
  _DTesc,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/themes/{ThemeId}", 200],
  },
  () => DescribeThemeRequest,
  () => DescribeThemeResponse
);
export var ListThemes = op(
  n0,
  _LTis,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/themes", 200],
  },
  () => ListThemesRequest,
  () => ListThemesResponse
);
export var UpdateTheme = op(
  n0,
  _UTp,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/themes/{ThemeId}", 200],
  },
  () => UpdateThemeRequest,
  () => UpdateThemeResponse
);
