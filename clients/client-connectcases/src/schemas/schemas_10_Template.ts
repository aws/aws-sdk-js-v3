// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cRI,
  _d,
  _dI,
  _dL,
  _DT,
  _DTR,
  _DTRe,
  _fI,
  _h,
  _LC,
  _lC,
  _n,
  _RF,
  _rF,
  _RFL,
  _rul,
  _s,
  _TCRL,
  _tI,
  _TR,
  _UT,
  _UTR,
  _UTRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTemplateRequest = struct(
  n0,
  _DTR,
  0,
  [_dI, _tI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteTemplateResponse = struct(n0, _DTRe, 0, [], []);
export var LayoutConfiguration = struct(n0, _LC, 0, [_dL], [0]);
export var RequiredField = struct(n0, _RF, 0, [_fI], [0]);
export var TemplateRule = struct(n0, _TR, 0, [_cRI, _fI], [0, 0]);
export var UpdateTemplateRequest = struct(
  n0,
  _UTR,
  0,
  [_dI, _tI, _n, _d, _lC, _rF, _s, _rul],
  [[0, 1], [0, 1], 0, 0, () => LayoutConfiguration, () => RequiredFieldList, 0, () => TemplateCaseRuleList]
);
export var UpdateTemplateResponse = struct(n0, _UTRp, 0, [], []);
export var RequiredFieldList = list(n0, _RFL, 0, () => RequiredField);
export var TemplateCaseRuleList = list(n0, _TCRL, 0, () => TemplateRule);
export var DeleteTemplate = op(
  n0,
  _DT,
  {
    [_h]: ["DELETE", "/domains/{domainId}/templates/{templateId}", 200],
  },
  () => DeleteTemplateRequest,
  () => DeleteTemplateResponse
);
export var UpdateTemplate = op(
  n0,
  _UT,
  {
    [_h]: ["PUT", "/domains/{domainId}/templates/{templateId}", 200],
  },
  () => UpdateTemplateRequest,
  () => UpdateTemplateResponse
);
