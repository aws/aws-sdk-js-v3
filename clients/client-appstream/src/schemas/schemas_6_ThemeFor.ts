// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ATD,
  _CT,
  _DN,
  _DTFSe,
  _DTFSRes,
  _DTFSResc,
  _FL,
  _FLURL,
  _FSL,
  _OLSL,
  _S,
  _SN,
  _TFL,
  _TFLh,
  _TFURL,
  _Th,
  _TOLURL,
  _TS,
  _TT,
  _TTT,
  _UTFS,
  _UTFSR,
  _UTFSRp,
  n0,
  S3Location,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeThemeForStackRequest = struct(n0, _DTFSRes, 0, [_SN], [0]);
export var DescribeThemeForStackResult = struct(n0, _DTFSResc, 0, [_Th], [() => Theme]);
export var Theme = struct(
  n0,
  _Th,
  0,
  [_SN, _S, _TTT, _TS, _TFL, _TOLURL, _TFURL, _CT],
  [0, 0, 0, 0, () => ThemeFooterLinks, 0, 0, 4]
);
export var ThemeFooterLink = struct(n0, _TFLh, 0, [_DN, _FLURL], [0, 0]);
export var UpdateThemeForStackRequest = struct(
  n0,
  _UTFSR,
  0,
  [_SN, _FL, _TT, _TS, _OLSL, _FSL, _S, _ATD],
  [0, () => ThemeFooterLinks, 0, 0, () => S3Location, () => S3Location, 0, 64 | 0]
);
export var UpdateThemeForStackResult = struct(n0, _UTFSRp, 0, [_Th], [() => Theme]);
export var ThemeAttributes = 64 | 0;

export var ThemeFooterLinks = list(n0, _TFL, 0, () => ThemeFooterLink);
export var DescribeThemeForStack = op(
  n0,
  _DTFSe,
  0,
  () => DescribeThemeForStackRequest,
  () => DescribeThemeForStackResult
);
export var UpdateThemeForStack = op(
  n0,
  _UTFS,
  0,
  () => UpdateThemeForStackRequest,
  () => UpdateThemeForStackResult
);
