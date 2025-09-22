// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _ar,
  _BGF,
  _BGFEL,
  _BGFIL,
  _BGFL,
  _BGFR,
  _BGFRa,
  _co,
  _cTr,
  _d,
  _dA,
  _de,
  _dI,
  _dS,
  _eC,
  _er,
  _f,
  _fA,
  _FE,
  _fI,
  _GD,
  _GDR,
  _GDRe,
  _GFR,
  _GL,
  _GLR,
  _GLRe,
  _GT,
  _GTR,
  _GTRe,
  _h,
  _i,
  _lA,
  _lC,
  _lI,
  _lMT,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _n,
  _na,
  _rF,
  _rul,
  _s,
  _sp,
  _T,
  _t,
  _tA,
  _ta,
  _tI,
  _TRa,
  _TRR,
  n0,
  Unit,
} from "./schemas_0";
import { FieldIdentifier } from "./schemas_7_Case";
import { LayoutContent } from "./schemas_9_Layout";
import { LayoutConfiguration, RequiredFieldList, TemplateCaseRuleList } from "./schemas_10_Template";

/* eslint no-var: 0 */

export var BatchGetFieldRequest = struct(n0, _BGFR, 0, [_dI, _f], [[0, 1], () => BatchGetFieldIdentifierList]);
export var BatchGetFieldResponse = struct(
  n0,
  _BGFRa,
  0,
  [_f, _er],
  [[() => BatchGetFieldList, 0], () => BatchGetFieldErrorList]
);
export var FieldError = struct(n0, _FE, 0, [_i, _eC, _m], [0, 0, 0]);
export var GetDomainRequest = struct(n0, _GDR, 0, [_dI], [[0, 1]]);
export var GetDomainResponse = struct(n0, _GDRe, 0, [_dI, _dA, _n, _cTr, _dS, _ta], [0, 0, 0, 5, 0, [() => Tags, 0]]);
export var GetFieldResponse = struct(
  n0,
  _GFR,
  0,
  [_fI, _n, _fA, _d, _t, _na, _ta, _de, _cTr, _lMT],
  [0, 0, 0, 0, 0, 0, [() => Tags, 0], 2, 5, 5]
);
export var GetLayoutRequest = struct(
  n0,
  _GLR,
  0,
  [_dI, _lI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetLayoutResponse = struct(
  n0,
  _GLRe,
  0,
  [_lI, _lA, _n, _co, _ta, _de, _cTr, _lMT],
  [0, 0, 0, () => LayoutContent, [() => Tags, 0], 2, 5, 5]
);
export var GetTemplateRequest = struct(
  n0,
  _GTR,
  0,
  [_dI, _tI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetTemplateResponse = struct(
  n0,
  _GTRe,
  0,
  [_tI, _tA, _n, _d, _lC, _rF, _ta, _s, _de, _cTr, _lMT, _rul],
  [
    0,
    0,
    0,
    0,
    () => LayoutConfiguration,
    () => RequiredFieldList,
    [() => Tags, 0],
    0,
    2,
    5,
    5,
    () => TemplateCaseRuleList,
  ]
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_ar], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_ta], [[() => Tags, 0]]);
export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_ar, _ta],
  [
    [0, 1],
    [() => Tags, 0],
  ]
);
export var BatchGetFieldErrorList = list(n0, _BGFEL, 0, () => FieldError);
export var BatchGetFieldIdentifierList = list(n0, _BGFIL, 0, () => FieldIdentifier);
export var BatchGetFieldList = list(n0, _BGFL, 0, [() => GetFieldResponse, 0]);
export var Tags = map(
  n0,
  _T,
  {
    [_sp]: 1,
  },
  0,
  0
);
export var BatchGetField = op(
  n0,
  _BGF,
  {
    [_h]: ["POST", "/domains/{domainId}/fields-batch", 200],
  },
  () => BatchGetFieldRequest,
  () => BatchGetFieldResponse
);
export var GetDomain = op(
  n0,
  _GD,
  {
    [_h]: ["POST", "/domains/{domainId}", 200],
  },
  () => GetDomainRequest,
  () => GetDomainResponse
);
export var GetLayout = op(
  n0,
  _GL,
  {
    [_h]: ["POST", "/domains/{domainId}/layouts/{layoutId}", 200],
  },
  () => GetLayoutRequest,
  () => GetLayoutResponse
);
export var GetTemplate = op(
  n0,
  _GT,
  {
    [_h]: ["POST", "/domains/{domainId}/templates/{templateId}", 200],
  },
  () => GetTemplateRequest,
  () => GetTemplateResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{arn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TRa,
  {
    [_h]: ["POST", "/tags/{arn}", 200],
  },
  () => TagResourceRequest,
  () => Unit
);
