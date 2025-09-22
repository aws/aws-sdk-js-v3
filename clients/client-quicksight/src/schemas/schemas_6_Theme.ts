// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _ANl,
  _Ar,
  _CTAr,
  _CTARre,
  _CTARrea,
  _DTAesc,
  _DTARescr,
  _DTARescri,
  _h,
  _hQ,
  _LTAi,
  _LTARis,
  _LTARist,
  _MR,
  _mr_,
  _NT,
  _nt,
  _RI,
  _St,
  _TAh,
  _TALh,
  _TI,
  _TVNh,
  _UTAp,
  _UTARpd,
  _UTARpda,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateThemeAliasRequest = struct(n0, _CTARre, 0, [_AAI, _TI, _ANl, _TVNh], [[0, 1], [0, 1], [0, 1], 1]);
export var CreateThemeAliasResponse = struct(n0, _CTARrea, 0, [_TAh, _St, _RI], [() => ThemeAlias, [1, 32], 0]);
export var DescribeThemeAliasRequest = struct(
  n0,
  _DTARescr,
  0,
  [_AAI, _TI, _ANl],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DescribeThemeAliasResponse = struct(n0, _DTARescri, 0, [_TAh, _St, _RI], [() => ThemeAlias, [1, 32], 0]);
export var ListThemeAliasesRequest = struct(
  n0,
  _LTARis,
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
        [_hQ]: _mr_,
      },
    ],
  ]
);
export var ListThemeAliasesResponse = struct(
  n0,
  _LTARist,
  0,
  [_TALh, _St, _RI, _NT],
  [() => ThemeAliasList, [1, 32], 0, 0]
);
export var ThemeAlias = struct(n0, _TAh, 0, [_Ar, _ANl, _TVNh], [0, 0, 1]);
export var UpdateThemeAliasRequest = struct(n0, _UTARpd, 0, [_AAI, _TI, _ANl, _TVNh], [[0, 1], [0, 1], [0, 1], 1]);
export var UpdateThemeAliasResponse = struct(n0, _UTARpda, 0, [_TAh, _St, _RI], [() => ThemeAlias, [1, 32], 0]);
export var ThemeAliasList = list(n0, _TALh, 0, () => ThemeAlias);
export var CreateThemeAlias = op(
  n0,
  _CTAr,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}", 200],
  },
  () => CreateThemeAliasRequest,
  () => CreateThemeAliasResponse
);
export var DescribeThemeAlias = op(
  n0,
  _DTAesc,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}", 200],
  },
  () => DescribeThemeAliasRequest,
  () => DescribeThemeAliasResponse
);
export var ListThemeAliases = op(
  n0,
  _LTAi,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/themes/{ThemeId}/aliases", 200],
  },
  () => ListThemeAliasesRequest,
  () => ListThemeAliasesResponse
);
export var UpdateThemeAlias = op(
  n0,
  _UTAp,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}", 200],
  },
  () => UpdateThemeAliasRequest,
  () => UpdateThemeAliasResponse
);
