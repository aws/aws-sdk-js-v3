// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _ANl,
  _Ar,
  _CTA,
  _CTAR,
  _CTARr,
  _DTAes,
  _DTARes,
  _DTAResc,
  _h,
  _hQ,
  _LTA,
  _LTAR,
  _LTARi,
  _MR,
  _mr_,
  _NT,
  _nt,
  _RI,
  _St,
  _TAe,
  _TAL,
  _TIe,
  _TVN,
  _UTA,
  _UTAR,
  _UTARp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateTemplateAliasRequest = struct(n0, _CTAR, 0, [_AAI, _TIe, _ANl, _TVN], [[0, 1], [0, 1], [0, 1], 1]);
export var CreateTemplateAliasResponse = struct(n0, _CTARr, 0, [_TAe, _St, _RI], [() => TemplateAlias, [1, 32], 0]);
export var DescribeTemplateAliasRequest = struct(
  n0,
  _DTARes,
  0,
  [_AAI, _TIe, _ANl],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DescribeTemplateAliasResponse = struct(n0, _DTAResc, 0, [_TAe, _St, _RI], [() => TemplateAlias, [1, 32], 0]);
export var ListTemplateAliasesRequest = struct(
  n0,
  _LTAR,
  0,
  [_AAI, _TIe, _NT, _MR],
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
export var ListTemplateAliasesResponse = struct(
  n0,
  _LTARi,
  0,
  [_TAL, _St, _RI, _NT],
  [() => TemplateAliasList, [1, 32], 0, 0]
);
export var TemplateAlias = struct(n0, _TAe, 0, [_ANl, _Ar, _TVN], [0, 0, 1]);
export var UpdateTemplateAliasRequest = struct(n0, _UTAR, 0, [_AAI, _TIe, _ANl, _TVN], [[0, 1], [0, 1], [0, 1], 1]);
export var UpdateTemplateAliasResponse = struct(n0, _UTARp, 0, [_TAe, _St, _RI], [() => TemplateAlias, [1, 32], 0]);
export var TemplateAliasList = list(n0, _TAL, 0, () => TemplateAlias);
export var CreateTemplateAlias = op(
  n0,
  _CTA,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}", 200],
  },
  () => CreateTemplateAliasRequest,
  () => CreateTemplateAliasResponse
);
export var DescribeTemplateAlias = op(
  n0,
  _DTAes,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}", 200],
  },
  () => DescribeTemplateAliasRequest,
  () => DescribeTemplateAliasResponse
);
export var ListTemplateAliases = op(
  n0,
  _LTA,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/templates/{TemplateId}/aliases", 200],
  },
  () => ListTemplateAliasesRequest,
  () => ListTemplateAliasesResponse
);
export var UpdateTemplateAlias = op(
  n0,
  _UTA,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}", 200],
  },
  () => UpdateTemplateAliasRequest,
  () => UpdateTemplateAliasResponse
);
