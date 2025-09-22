// smithy-typescript generated code
import { list, map, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _ac,
  _AI,
  _aI,
  _AIc,
  _AIL,
  _AT,
  _aT,
  _at,
  _aTc,
  _AV,
  _b,
  _BA,
  _BGP,
  _BGPEI,
  _BGPEL,
  _BGPI,
  _BGPII,
  _BGPIL,
  _BGPO,
  _BGPOI,
  _BGPOL,
  _BIA,
  _BIAI,
  _BIAII,
  _BIAIL,
  _BIAO,
  _BIAOI,
  _BIAOL,
  _BIAWT,
  _BIAWTI,
  _BIAWTII,
  _BIAWTIL,
  _BIAWTO,
  _BIAWTOI,
  _BIAWTOL,
  _cD,
  _CDo,
  _CJ,
  _cJ,
  _CM,
  _cM,
  _co,
  _con,
  _CP,
  _CPI,
  _CPO,
  _cT,
  _D,
  _d,
  _DA,
  _da,
  _de,
  _dec,
  _des,
  _DP,
  _dP,
  _DPI,
  _DPIe,
  _DPL,
  _DPO,
  _Du,
  _du,
  _EA,
  _ED,
  _eD,
  _EEI,
  _EEL,
  _ef,
  _EI,
  _eI,
  _EIn,
  _eIn,
  _EInt,
  _EL,
  _eL,
  _en,
  _ER,
  _er,
  _ET,
  _eT,
  _fi,
  _GP,
  _GPI,
  _GPO,
  _IA,
  _IAI,
  _IAO,
  _IAs,
  _IAWT,
  _IAWTI,
  _IAWTO,
  _id,
  _ip,
  _iT,
  _l,
  _LA,
  _LP,
  _LPI,
  _LPO,
  _lUD,
  _m,
  _mR,
  _nT,
  _p,
  _pa,
  _PD,
  _PDD,
  _PDI,
  _PF,
  _PI,
  _pI,
  _PL,
  _PLo,
  _po,
  _pSI,
  _pT,
  _pTI,
  _r,
  _RA,
  _re,
  _rec,
  _req,
  _res,
  _s,
  _SA,
  _SAe,
  _set,
  _SPD,
  _SPDD,
  _SPDI,
  _SPDt,
  _st,
  _sta,
  _T,
  _tL,
  _TLPD,
  _TLPDD,
  _TLPDI,
  _u,
  _UP,
  _UPD,
  _UPI,
  _UPO,
  _USPD,
  n0,
} from "./schemas_0";
import { PolicyStatement } from "./schemas_12_Policy";

/* eslint no-var: 0 */

export var ActionId = sim(n0, _AI, 0, 8);
export var ActionType = sim(n0, _AT, 0, 8);
export var BooleanAttribute = sim(n0, _BA, 2, 8);
export var CedarJson = sim(n0, _CJ, 0, 8);
export var DatetimeAttribute = sim(n0, _DA, 0, 8);
export var Decimal = sim(n0, _D, 0, 8);
export var Duration = sim(n0, _Du, 0, 8);
export var EntityId = sim(n0, _EI, 0, 8);
export var EntityType = sim(n0, _ET, 0, 8);
export var IpAddr = sim(n0, _IA, 0, 8);
export var LongAttribute = sim(n0, _LA, 1, 8);
export var StaticPolicyDescription = sim(n0, _SPD, 0, 8);
export var StringAttribute = sim(n0, _SA, 0, 8);
export var Token = sim(n0, _T, 0, 8);
export var ActionIdentifier = struct(
  n0,
  _AIc,
  0,
  [_aT, _aI],
  [
    [() => ActionType, 0],
    [() => ActionId, 0],
  ]
);
export var BatchGetPolicyErrorItem = struct(n0, _BGPEI, 0, [_co, _pSI, _pI, _m], [0, 0, 0, 0]);
export var BatchGetPolicyInput = struct(n0, _BGPI, 0, [_r], [() => BatchGetPolicyInputList]);
export var BatchGetPolicyInputItem = struct(n0, _BGPII, 0, [_pSI, _pI], [0, 0]);
export var BatchGetPolicyOutput = struct(
  n0,
  _BGPO,
  0,
  [_re, _er],
  [[() => BatchGetPolicyOutputList, 0], () => BatchGetPolicyErrorList]
);
export var BatchGetPolicyOutputItem = struct(
  n0,
  _BGPOI,
  0,
  [_pSI, _pI, _pT, _d, _cD, _lUD],
  [0, 0, 0, [() => PolicyDefinitionDetail, 0], 5, 5]
);
export var BatchIsAuthorizedInput = struct(
  n0,
  _BIAI,
  0,
  [_pSI, _en, _r],
  [0, [() => EntitiesDefinition, 0], [() => BatchIsAuthorizedInputList, 0]]
);
export var BatchIsAuthorizedInputItem = struct(
  n0,
  _BIAII,
  0,
  [_p, _a, _res, _con],
  [
    [() => EntityIdentifier, 0],
    [() => ActionIdentifier, 0],
    [() => EntityIdentifier, 0],
    [() => ContextDefinition, 0],
  ]
);
export var BatchIsAuthorizedOutput = struct(n0, _BIAO, 0, [_re], [[() => BatchIsAuthorizedOutputList, 0]]);
export var BatchIsAuthorizedOutputItem = struct(
  n0,
  _BIAOI,
  0,
  [_req, _de, _dP, _er],
  [[() => BatchIsAuthorizedInputItem, 0], 0, () => DeterminingPolicyList, [() => EvaluationErrorList, 0]]
);
export var BatchIsAuthorizedWithTokenInput = struct(
  n0,
  _BIAWTI,
  0,
  [_pSI, _iT, _aTc, _en, _r],
  [0, [() => Token, 0], [() => Token, 0], [() => EntitiesDefinition, 0], [() => BatchIsAuthorizedWithTokenInputList, 0]]
);
export var BatchIsAuthorizedWithTokenInputItem = struct(
  n0,
  _BIAWTII,
  0,
  [_a, _res, _con],
  [
    [() => ActionIdentifier, 0],
    [() => EntityIdentifier, 0],
    [() => ContextDefinition, 0],
  ]
);
export var BatchIsAuthorizedWithTokenOutput = struct(
  n0,
  _BIAWTO,
  0,
  [_p, _re],
  [
    [() => EntityIdentifier, 0],
    [() => BatchIsAuthorizedWithTokenOutputList, 0],
  ]
);
export var BatchIsAuthorizedWithTokenOutputItem = struct(
  n0,
  _BIAWTOI,
  0,
  [_req, _de, _dP, _er],
  [[() => BatchIsAuthorizedWithTokenInputItem, 0], 0, () => DeterminingPolicyList, [() => EvaluationErrorList, 0]]
);
export var CreatePolicyInput = struct(n0, _CPI, 0, [_cT, _pSI, _d], [[0, 4], 0, [() => PolicyDefinition, 0]]);
export var CreatePolicyOutput = struct(
  n0,
  _CPO,
  0,
  [_pSI, _pI, _pT, _p, _res, _ac, _cD, _lUD, _ef],
  [0, 0, 0, [() => EntityIdentifier, 0], [() => EntityIdentifier, 0], [() => ActionIdentifierList, 0], 5, 5, 0]
);
export var DeletePolicyInput = struct(n0, _DPI, 0, [_pSI, _pI], [0, 0]);
export var DeletePolicyOutput = struct(n0, _DPO, 0, [], []);
export var DeterminingPolicyItem = struct(n0, _DPIe, 0, [_pI], [0]);
export var EntityIdentifier = struct(
  n0,
  _EIn,
  0,
  [_eT, _eI],
  [
    [() => EntityType, 0],
    [() => EntityId, 0],
  ]
);
export var EntityItem = struct(
  n0,
  _EInt,
  0,
  [_id, _at, _pa],
  [
    [() => EntityIdentifier, 0],
    [() => EntityAttributes, 0],
    [() => ParentList, 0],
  ]
);
export var EvaluationErrorItem = struct(n0, _EEI, 8, [_eD], [0]);
export var GetPolicyInput = struct(n0, _GPI, 0, [_pSI, _pI], [0, 0]);
export var GetPolicyOutput = struct(
  n0,
  _GPO,
  0,
  [_pSI, _pI, _pT, _p, _res, _ac, _d, _cD, _lUD, _ef],
  [
    0,
    0,
    0,
    [() => EntityIdentifier, 0],
    [() => EntityIdentifier, 0],
    [() => ActionIdentifierList, 0],
    [() => PolicyDefinitionDetail, 0],
    5,
    5,
    0,
  ]
);
export var IsAuthorizedInput = struct(
  n0,
  _IAI,
  0,
  [_pSI, _p, _a, _res, _con, _en],
  [
    0,
    [() => EntityIdentifier, 0],
    [() => ActionIdentifier, 0],
    [() => EntityIdentifier, 0],
    [() => ContextDefinition, 0],
    [() => EntitiesDefinition, 0],
  ]
);
export var IsAuthorizedOutput = struct(
  n0,
  _IAO,
  0,
  [_de, _dP, _er],
  [0, () => DeterminingPolicyList, [() => EvaluationErrorList, 0]]
);
export var IsAuthorizedWithTokenInput = struct(
  n0,
  _IAWTI,
  0,
  [_pSI, _iT, _aTc, _a, _res, _con, _en],
  [
    0,
    [() => Token, 0],
    [() => Token, 0],
    [() => ActionIdentifier, 0],
    [() => EntityIdentifier, 0],
    [() => ContextDefinition, 0],
    [() => EntitiesDefinition, 0],
  ]
);
export var IsAuthorizedWithTokenOutput = struct(
  n0,
  _IAWTO,
  0,
  [_de, _dP, _er, _p],
  [0, () => DeterminingPolicyList, [() => EvaluationErrorList, 0], [() => EntityIdentifier, 0]]
);
export var ListPoliciesInput = struct(n0, _LPI, 0, [_pSI, _nT, _mR, _fi], [0, 0, 1, [() => PolicyFilter, 0]]);
export var ListPoliciesOutput = struct(n0, _LPO, 0, [_nT, _po], [0, [() => PolicyList, 0]]);
export var PolicyFilter = struct(
  n0,
  _PF,
  0,
  [_p, _res, _pT, _pTI],
  [[() => EntityReference, 0], [() => EntityReference, 0], 0, 0]
);
export var PolicyItem = struct(
  n0,
  _PI,
  0,
  [_pSI, _pI, _pT, _p, _res, _ac, _d, _cD, _lUD, _ef],
  [
    0,
    0,
    0,
    [() => EntityIdentifier, 0],
    [() => EntityIdentifier, 0],
    [() => ActionIdentifierList, 0],
    [() => PolicyDefinitionItem, 0],
    5,
    5,
    0,
  ]
);
export var StaticPolicyDefinition = struct(
  n0,
  _SPDt,
  0,
  [_des, _s],
  [
    [() => StaticPolicyDescription, 0],
    [() => PolicyStatement, 0],
  ]
);
export var StaticPolicyDefinitionDetail = struct(
  n0,
  _SPDD,
  0,
  [_des, _s],
  [
    [() => StaticPolicyDescription, 0],
    [() => PolicyStatement, 0],
  ]
);
export var StaticPolicyDefinitionItem = struct(n0, _SPDI, 0, [_des], [[() => StaticPolicyDescription, 0]]);
export var TemplateLinkedPolicyDefinition = struct(
  n0,
  _TLPD,
  0,
  [_pTI, _p, _res],
  [0, [() => EntityIdentifier, 0], [() => EntityIdentifier, 0]]
);
export var TemplateLinkedPolicyDefinitionDetail = struct(
  n0,
  _TLPDD,
  0,
  [_pTI, _p, _res],
  [0, [() => EntityIdentifier, 0], [() => EntityIdentifier, 0]]
);
export var TemplateLinkedPolicyDefinitionItem = struct(
  n0,
  _TLPDI,
  0,
  [_pTI, _p, _res],
  [0, [() => EntityIdentifier, 0], [() => EntityIdentifier, 0]]
);
export var UpdatePolicyInput = struct(n0, _UPI, 0, [_pSI, _pI, _d], [0, 0, [() => UpdatePolicyDefinition, 0]]);
export var UpdatePolicyOutput = struct(
  n0,
  _UPO,
  0,
  [_pSI, _pI, _pT, _p, _res, _ac, _cD, _lUD, _ef],
  [0, 0, 0, [() => EntityIdentifier, 0], [() => EntityIdentifier, 0], [() => ActionIdentifierList, 0], 5, 5, 0]
);
export var UpdateStaticPolicyDefinition = struct(
  n0,
  _USPD,
  0,
  [_des, _s],
  [
    [() => StaticPolicyDescription, 0],
    [() => PolicyStatement, 0],
  ]
);
export var ActionIdentifierList = list(n0, _AIL, 0, [() => ActionIdentifier, 0]);
export var BatchGetPolicyErrorList = list(n0, _BGPEL, 0, () => BatchGetPolicyErrorItem);
export var BatchGetPolicyInputList = list(n0, _BGPIL, 0, () => BatchGetPolicyInputItem);
export var BatchGetPolicyOutputList = list(n0, _BGPOL, 0, [() => BatchGetPolicyOutputItem, 0]);
export var BatchIsAuthorizedInputList = list(n0, _BIAIL, 0, [() => BatchIsAuthorizedInputItem, 0]);
export var BatchIsAuthorizedOutputList = list(n0, _BIAOL, 0, [() => BatchIsAuthorizedOutputItem, 0]);
export var BatchIsAuthorizedWithTokenInputList = list(n0, _BIAWTIL, 0, [() => BatchIsAuthorizedWithTokenInputItem, 0]);
export var BatchIsAuthorizedWithTokenOutputList = list(n0, _BIAWTOL, 0, [
  () => BatchIsAuthorizedWithTokenOutputItem,
  0,
]);
export var DeterminingPolicyList = list(n0, _DPL, 0, () => DeterminingPolicyItem);
export var EntityList = list(n0, _EL, 0, [() => EntityItem, 0]);
export var EvaluationErrorList = list(n0, _EEL, 0, [() => EvaluationErrorItem, 0]);
export var ParentList = list(n0, _PL, 0, [() => EntityIdentifier, 0]);
export var PolicyList = list(n0, _PLo, 0, [() => PolicyItem, 0]);
export var SetAttribute = list(n0, _SAe, 0, [() => AttributeValue, 0]);
export var ContextMap = map(n0, _CM, 8, [0, 0], [() => AttributeValue, 0]);
export var EntityAttributes = map(n0, _EA, 0, [0, 0], [() => AttributeValue, 0]);
export var RecordAttribute = map(n0, _RA, 0, [0, 0], [() => AttributeValue, 0]);
export var AttributeValue = uni(
  n0,
  _AV,
  0,
  [_b, _eIn, _l, _st, _set, _rec, _ip, _dec, _da, _du],
  [
    [() => BooleanAttribute, 0],
    [() => EntityIdentifier, 0],
    [() => LongAttribute, 0],
    [() => StringAttribute, 0],
    [() => SetAttribute, 0],
    [() => RecordAttribute, 0],
    [() => IpAddr, 0],
    [() => Decimal, 0],
    [() => DatetimeAttribute, 0],
    [() => Duration, 0],
  ]
);
export var ContextDefinition = uni(
  n0,
  _CDo,
  0,
  [_cM, _cJ],
  [
    [() => ContextMap, 0],
    [() => CedarJson, 0],
  ]
);
export var EntitiesDefinition = uni(
  n0,
  _ED,
  0,
  [_eL, _cJ],
  [
    [() => EntityList, 0],
    [() => CedarJson, 0],
  ]
);
export var EntityReference = uni(n0, _ER, 0, [_u, _id], [2, [() => EntityIdentifier, 0]]);
export var PolicyDefinition = uni(
  n0,
  _PD,
  0,
  [_sta, _tL],
  [
    [() => StaticPolicyDefinition, 0],
    [() => TemplateLinkedPolicyDefinition, 0],
  ]
);
export var PolicyDefinitionDetail = uni(
  n0,
  _PDD,
  0,
  [_sta, _tL],
  [
    [() => StaticPolicyDefinitionDetail, 0],
    [() => TemplateLinkedPolicyDefinitionDetail, 0],
  ]
);
export var PolicyDefinitionItem = uni(
  n0,
  _PDI,
  0,
  [_sta, _tL],
  [
    [() => StaticPolicyDefinitionItem, 0],
    [() => TemplateLinkedPolicyDefinitionItem, 0],
  ]
);
export var UpdatePolicyDefinition = uni(n0, _UPD, 0, [_sta], [[() => UpdateStaticPolicyDefinition, 0]]);
export var BatchGetPolicy = op(
  n0,
  _BGP,
  0,
  () => BatchGetPolicyInput,
  () => BatchGetPolicyOutput
);
export var BatchIsAuthorized = op(
  n0,
  _BIA,
  0,
  () => BatchIsAuthorizedInput,
  () => BatchIsAuthorizedOutput
);
export var BatchIsAuthorizedWithToken = op(
  n0,
  _BIAWT,
  0,
  () => BatchIsAuthorizedWithTokenInput,
  () => BatchIsAuthorizedWithTokenOutput
);
export var CreatePolicy = op(
  n0,
  _CP,
  2,
  () => CreatePolicyInput,
  () => CreatePolicyOutput
);
export var DeletePolicy = op(
  n0,
  _DP,
  2,
  () => DeletePolicyInput,
  () => DeletePolicyOutput
);
export var GetPolicy = op(
  n0,
  _GP,
  0,
  () => GetPolicyInput,
  () => GetPolicyOutput
);
export var IsAuthorized = op(
  n0,
  _IAs,
  0,
  () => IsAuthorizedInput,
  () => IsAuthorizedOutput
);
export var IsAuthorizedWithToken = op(
  n0,
  _IAWT,
  0,
  () => IsAuthorizedWithTokenInput,
  () => IsAuthorizedWithTokenOutput
);
export var ListPolicies = op(
  n0,
  _LP,
  0,
  () => ListPoliciesInput,
  () => ListPoliciesOutput
);
export var UpdatePolicy = op(
  n0,
  _UP,
  2,
  () => UpdatePolicyInput,
  () => UpdatePolicyOutput
);
