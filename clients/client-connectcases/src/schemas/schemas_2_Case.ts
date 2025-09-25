// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _b,
  _bV,
  _C,
  _cA,
  _cAa,
  _CC,
  _CCR,
  _CCr,
  _CCRr,
  _CE,
  _cE,
  _cI,
  _co,
  _com,
  _conta,
  _CRIR,
  _CRIr,
  _CRIRr,
  _cT,
  _cTl,
  _DC,
  _DCR,
  _DCRe,
  _dI,
  _DRI,
  _DRIR,
  _DRIRe,
  _dVo,
  _EFV,
  _eV,
  _f,
  _fAi,
  _FC,
  _fI,
  _file,
  _FV,
  _FVL,
  _FVU,
  _h,
  _i,
  _n,
  _pB,
  _rIA,
  _rII,
  _RIIC,
  _SFVUL,
  _SIC,
  _sIC,
  _SICl,
  _sl,
  _SN,
  _sV,
  _t,
  _tFV,
  _tI,
  _tSM,
  _uA,
  _uAV,
  _UC,
  _UCR,
  _UCRp,
  _UU,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CustomEntity = sim(n0, _CE, 0, 8);
export var SlaName = sim(n0, _SN, 0, 8);
export var CommentContent = struct(n0, _CC, 0, [_b, _cT], [0, 0]);
export var Contact = struct(n0, _C, 0, [_cA], [0]);
export var CreateCaseRequest = struct(
  n0,
  _CCR,
  0,
  [_dI, _tI, _f, _cTl, _pB],
  [[0, 1], 0, () => FieldValueList, [0, 4], [() => UserUnion, 0]]
);
export var CreateCaseResponse = struct(n0, _CCRr, 0, [_cI, _cAa], [0, 0]);
export var CreateRelatedItemRequest = struct(
  n0,
  _CRIR,
  0,
  [_dI, _cI, _t, _co, _pB],
  [[0, 1], [0, 1], 0, [() => RelatedItemInputContent, 0], [() => UserUnion, 0]]
);
export var CreateRelatedItemResponse = struct(n0, _CRIRr, 0, [_rII, _rIA], [0, 0]);
export var DeleteCaseRequest = struct(
  n0,
  _DCR,
  0,
  [_dI, _cI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteCaseResponse = struct(n0, _DCRe, 0, [], []);
export var DeleteRelatedItemRequest = struct(
  n0,
  _DRIR,
  0,
  [_dI, _cI, _rII],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteRelatedItemResponse = struct(n0, _DRIRe, 0, [], []);
export var EmptyFieldValue = struct(n0, _EFV, 0, [], []);
export var FieldValue = struct(n0, _FV, 0, [_i, _v], [0, () => FieldValueUnion]);
export var FileContent = struct(n0, _FC, 0, [_fAi], [0]);
export var SlaInputConfiguration = struct(
  n0,
  _SIC,
  0,
  [_n, _t, _fI, _tFV, _tSM],
  [[() => SlaName, 0], 0, 0, () => SlaFieldValueUnionList, 1]
);
export var UpdateCaseRequest = struct(
  n0,
  _UCR,
  0,
  [_dI, _cI, _f, _pB],
  [[0, 1], [0, 1], () => FieldValueList, [() => UserUnion, 0]]
);
export var UpdateCaseResponse = struct(n0, _UCRp, 0, [], []);
export var FieldValueList = list(n0, _FVL, 0, () => FieldValue);
export var SlaFieldValueUnionList = list(n0, _SFVUL, 0, () => FieldValueUnion);
export var FieldValueUnion = uni(n0, _FVU, 0, [_sV, _dVo, _bV, _eV, _uAV], [0, 1, 2, () => EmptyFieldValue, 0]);
export var RelatedItemInputContent = uni(
  n0,
  _RIIC,
  0,
  [_conta, _com, _file, _sl],
  [() => Contact, () => CommentContent, () => FileContent, [() => SlaInputContent, 0]]
);
export var SlaInputContent = uni(n0, _SICl, 0, [_sIC], [[() => SlaInputConfiguration, 0]]);
export var UserUnion = uni(n0, _UU, 0, [_uA, _cE], [0, [() => CustomEntity, 0]]);
export var CreateCase = op(
  n0,
  _CCr,
  {
    [_h]: ["POST", "/domains/{domainId}/cases", 200],
  },
  () => CreateCaseRequest,
  () => CreateCaseResponse
);
export var CreateRelatedItem = op(
  n0,
  _CRIr,
  {
    [_h]: ["POST", "/domains/{domainId}/cases/{caseId}/related-items/", 200],
  },
  () => CreateRelatedItemRequest,
  () => CreateRelatedItemResponse
);
export var DeleteCase = op(
  n0,
  _DC,
  {
    [_h]: ["DELETE", "/domains/{domainId}/cases/{caseId}", 200],
  },
  () => DeleteCaseRequest,
  () => DeleteCaseResponse
);
export var DeleteRelatedItem = op(
  n0,
  _DRI,
  {
    [_h]: ["DELETE", "/domains/{domainId}/cases/{caseId}/related-items/{relatedItemId}", 200],
  },
  () => DeleteRelatedItemRequest,
  () => DeleteRelatedItemResponse
);
export var UpdateCase = op(
  n0,
  _UC,
  {
    [_h]: ["PUT", "/domains/{domainId}/cases/{caseId}", 200],
  },
  () => UpdateCaseRequest,
  () => UpdateCaseResponse
);
