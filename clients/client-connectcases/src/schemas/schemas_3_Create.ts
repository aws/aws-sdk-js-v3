// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _BPFO,
  _BPFOR,
  _BPFORa,
  _c,
  _CD,
  _CDR,
  _CDRr,
  _CFR,
  _CFr,
  _CFRr,
  _CL,
  _CLR,
  _CLRr,
  _co,
  _CT,
  _CTR,
  _CTRr,
  _d,
  _dA,
  _DF,
  _DFR,
  _DFRe,
  _dI,
  _dS,
  _e,
  _eC,
  _er,
  _fA,
  _fI,
  _FOE,
  _FOEL,
  _h,
  _hE,
  _lA,
  _lC,
  _lI,
  _m,
  _n,
  _o,
  _rF,
  _rul,
  _s,
  _SQEE,
  _t,
  _tA,
  _tI,
  _UL,
  _ULR,
  _ULRp,
  _v,
  n0,
} from "./schemas_0";
import { LayoutContent } from "./schemas_9_Layout";
import { LayoutConfiguration, RequiredFieldList, TemplateCaseRuleList } from "./schemas_10_Template";
import { FieldOptionsList } from "./schemas_12_Options";

/* eslint no-var: 0 */

export var BatchPutFieldOptionsRequest = struct(
  n0,
  _BPFOR,
  0,
  [_dI, _fI, _o],
  [[0, 1], [0, 1], () => FieldOptionsList]
);
export var BatchPutFieldOptionsResponse = struct(n0, _BPFORa, 0, [_er], [() => FieldOptionErrorList]);
export var CreateDomainRequest = struct(n0, _CDR, 0, [_n], [0]);
export var CreateDomainResponse = struct(n0, _CDRr, 0, [_dI, _dA, _dS], [0, 0, 0]);
export var CreateFieldRequest = struct(n0, _CFR, 0, [_dI, _n, _t, _d], [[0, 1], 0, 0, 0]);
export var CreateFieldResponse = struct(n0, _CFRr, 0, [_fI, _fA], [0, 0]);
export var CreateLayoutRequest = struct(n0, _CLR, 0, [_dI, _n, _co], [[0, 1], 0, () => LayoutContent]);
export var CreateLayoutResponse = struct(n0, _CLRr, 0, [_lI, _lA], [0, 0]);
export var CreateTemplateRequest = struct(
  n0,
  _CTR,
  0,
  [_dI, _n, _d, _lC, _rF, _s, _rul],
  [[0, 1], 0, 0, () => LayoutConfiguration, () => RequiredFieldList, 0, () => TemplateCaseRuleList]
);
export var CreateTemplateResponse = struct(n0, _CTRr, 0, [_tI, _tA], [0, 0]);
export var DeleteFieldRequest = struct(
  n0,
  _DFR,
  0,
  [_dI, _fI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteFieldResponse = struct(n0, _DFRe, 0, [], []);
export var FieldOptionError = struct(n0, _FOE, 0, [_m, _eC, _v], [0, 0, 0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m],
  [0],

  __ServiceQuotaExceededException
);
export var UpdateLayoutRequest = struct(n0, _ULR, 0, [_dI, _lI, _n, _co], [[0, 1], [0, 1], 0, () => LayoutContent]);
export var UpdateLayoutResponse = struct(n0, _ULRp, 0, [], []);
export var FieldOptionErrorList = list(n0, _FOEL, 0, () => FieldOptionError);
export var BatchPutFieldOptions = op(
  n0,
  _BPFO,
  {
    [_h]: ["PUT", "/domains/{domainId}/fields/{fieldId}/options", 200],
  },
  () => BatchPutFieldOptionsRequest,
  () => BatchPutFieldOptionsResponse
);
export var CreateDomain = op(
  n0,
  _CD,
  {
    [_h]: ["POST", "/domains", 200],
  },
  () => CreateDomainRequest,
  () => CreateDomainResponse
);
export var CreateField = op(
  n0,
  _CFr,
  {
    [_h]: ["POST", "/domains/{domainId}/fields", 200],
  },
  () => CreateFieldRequest,
  () => CreateFieldResponse
);
export var CreateLayout = op(
  n0,
  _CL,
  {
    [_h]: ["POST", "/domains/{domainId}/layouts", 200],
  },
  () => CreateLayoutRequest,
  () => CreateLayoutResponse
);
export var CreateTemplate = op(
  n0,
  _CT,
  {
    [_h]: ["POST", "/domains/{domainId}/templates", 200],
  },
  () => CreateTemplateRequest,
  () => CreateTemplateResponse
);
export var DeleteField = op(
  n0,
  _DF,
  {
    [_h]: ["DELETE", "/domains/{domainId}/fields/{fieldId}", 200],
  },
  () => DeleteFieldRequest,
  () => DeleteFieldResponse
);
export var UpdateLayout = op(
  n0,
  _UL,
  {
    [_h]: ["PUT", "/domains/{domainId}/layouts/{layoutId}", 200],
  },
  () => UpdateLayoutRequest,
  () => UpdateLayoutResponse
);
