// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _BC,
  _BCL,
  _BGCR,
  _BGCREL,
  _BGCRL,
  _BGCRR,
  _BGCRRa,
  _BO,
  _bV,
  _CCRR,
  _CCRre,
  _CCRRr,
  _con,
  _cR,
  _cRA,
  _CRD,
  _CRE,
  _CRI,
  _cRI,
  _CRIL,
  _cTr,
  _d,
  _de,
  _dI,
  _dV,
  _dVo,
  _eC,
  _EOV,
  _er,
  _eT,
  _eV,
  _fI,
  _GCRR,
  _h,
  _i,
  _lMT,
  _m,
  _n,
  _nET,
  _OO,
  _oO,
  _OT,
  _oT,
  _r,
  _RCR,
  _re,
  _ru,
  _sV,
  _ta,
  _UCRpd,
  _UCRR,
  _UCRRp,
  n0,
} from "./schemas_0";
import { Tags } from "./schemas_4_Get";

/* eslint no-var: 0 */

export var BatchGetCaseRuleRequest = struct(n0, _BGCRR, 0, [_dI, _cR], [[0, 1], () => CaseRuleIdentifierList]);
export var BatchGetCaseRuleResponse = struct(
  n0,
  _BGCRRa,
  0,
  [_cR, _er],
  [[() => BatchGetCaseRuleList, 0], () => BatchGetCaseRuleErrorList]
);
export var BooleanOperands = struct(n0, _BO, 0, [_oO, _oT, _r], [() => OperandOne, () => OperandTwo, 2]);
export var CaseRuleError = struct(n0, _CRE, 0, [_i, _eC, _m], [0, 0, 0]);
export var CaseRuleIdentifier = struct(n0, _CRI, 0, [_i], [0]);
export var CreateCaseRuleRequest = struct(n0, _CCRR, 0, [_dI, _n, _d, _ru], [[0, 1], 0, 0, () => CaseRuleDetails]);
export var CreateCaseRuleResponse = struct(n0, _CCRRr, 0, [_cRI, _cRA], [0, 0]);
export var EmptyOperandValue = struct(n0, _EOV, 0, [], []);
export var GetCaseRuleResponse = struct(
  n0,
  _GCRR,
  0,
  [_cRI, _n, _cRA, _ru, _d, _de, _cTr, _lMT, _ta],
  [0, 0, 0, () => CaseRuleDetails, 0, 2, 5, 5, [() => Tags, 0]]
);
export var RequiredCaseRule = struct(n0, _RCR, 0, [_dV, _con], [2, () => BooleanConditionList]);
export var UpdateCaseRuleRequest = struct(
  n0,
  _UCRR,
  0,
  [_dI, _cRI, _n, _d, _ru],
  [[0, 1], [0, 1], 0, 0, () => CaseRuleDetails]
);
export var UpdateCaseRuleResponse = struct(n0, _UCRRp, 0, [], []);
export var BatchGetCaseRuleErrorList = list(n0, _BGCREL, 0, () => CaseRuleError);
export var BatchGetCaseRuleList = list(n0, _BGCRL, 0, [() => GetCaseRuleResponse, 0]);
export var BooleanConditionList = list(n0, _BCL, 0, () => BooleanCondition);
export var CaseRuleIdentifierList = list(n0, _CRIL, 0, () => CaseRuleIdentifier);
export var BooleanCondition = uni(n0, _BC, 0, [_eT, _nET], [() => BooleanOperands, () => BooleanOperands]);
export var CaseRuleDetails = uni(n0, _CRD, 0, [_re], [() => RequiredCaseRule]);
export var OperandOne = uni(n0, _OO, 0, [_fI], [0]);
export var OperandTwo = uni(n0, _OT, 0, [_sV, _bV, _dVo, _eV], [0, 2, 1, () => EmptyOperandValue]);
export var BatchGetCaseRule = op(
  n0,
  _BGCR,
  {
    [_h]: ["POST", "/domains/{domainId}/rules-batch", 200],
  },
  () => BatchGetCaseRuleRequest,
  () => BatchGetCaseRuleResponse
);
export var CreateCaseRule = op(
  n0,
  _CCRre,
  {
    [_h]: ["POST", "/domains/{domainId}/case-rules", 200],
  },
  () => CreateCaseRuleRequest,
  () => CreateCaseRuleResponse
);
export var UpdateCaseRule = op(
  n0,
  _UCRpd,
  {
    [_h]: ["PUT", "/domains/{domainId}/case-rules/{caseRuleId}", 200],
  },
  () => UpdateCaseRuleRequest,
  () => UpdateCaseRuleResponse
);
