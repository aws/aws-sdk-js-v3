// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AL,
  _aTA,
  _aTAs,
  _aTNs,
  _CATr,
  _CATRre,
  _CATRrea,
  _dIS,
  _k,
  _rPA,
  _S,
  _SL,
  _uAFF,
  _UAL,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Attribute = struct(n0, _A, 0, [_k, _v], [0, 0]);
export var CreateAssessmentTemplateRequest = struct(
  n0,
  _CATRre,
  0,
  [_aTAs, _aTNs, _dIS, _rPA, _uAFF],
  [0, 0, 1, 64 | 0, () => UserAttributeList]
);
export var CreateAssessmentTemplateResponse = struct(n0, _CATRrea, 0, [_aTA], [0]);
export var Scope = struct(n0, _S, 0, [_k, _v], [0, 0]);
export var AssessmentTemplateRulesPackageArnList = 64 | 0;

export var AttributeList = list(n0, _AL, 0, () => Attribute);
export var ScopeList = list(n0, _SL, 0, () => Scope);
export var UserAttributeList = list(n0, _UAL, 0, () => Attribute);
export var CreateAssessmentTemplate = op(
  n0,
  _CATr,
  0,
  () => CreateAssessmentTemplateRequest,
  () => CreateAssessmentTemplateResponse
);
