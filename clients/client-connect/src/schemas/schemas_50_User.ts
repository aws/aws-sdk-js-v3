// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _ACn,
  _ACtt,
  _ANt,
  _ATC,
  _AUP,
  _AUPR,
  _AVt,
  _CPAR,
  _CPAr,
  _DPAe,
  _DPARe,
  _DPARes,
  _DUP,
  _DUPR,
  _EVVOA,
  _h,
  _hQ,
  _II,
  _IPAC,
  _IRO,
  _Level__,
  _LMR,
  _LMT,
  _LUP,
  _LUPR,
  _LUPRi,
  _mR,
  _MRa,
  _N,
  _NT,
  _nT,
  _OC,
  _PA,
  _PAC,
  _PAr,
  _PASC,
  _PASCL,
  _PASSL,
  _PAV,
  _Pu,
  _SC,
  _SCe,
  _SL,
  _SPAe,
  _SPAR,
  _SPARe,
  _UI,
  _UP,
  _UPAp,
  _UPARpd,
  _UPD,
  _UPDL,
  _UPL,
  _UPs,
  _UUP,
  _UUPR,
  _Va,
  n0,
  StringCondition,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateUserProficienciesRequest = struct(
  n0,
  _AUPR,
  0,
  [_II, _UI, _UP],
  [[0, 1], [0, 1], () => UserProficiencyList]
);
export var CreatePredefinedAttributeRequest = struct(
  n0,
  _CPAR,
  0,
  [_II, _N, _Va, _Pu, _ACtt],
  [[0, 1], 0, () => PredefinedAttributeValues, 64 | 0, () => InputPredefinedAttributeConfiguration]
);
export var DescribePredefinedAttributeRequest = struct(
  n0,
  _DPARe,
  0,
  [_II, _N],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribePredefinedAttributeResponse = struct(n0, _DPARes, 0, [_PA], [() => PredefinedAttribute]);
export var DisassociateUserProficienciesRequest = struct(
  n0,
  _DUPR,
  0,
  [_II, _UI, _UP],
  [[0, 1], [0, 1], () => UserProficiencyDisassociateList]
);
export var InputPredefinedAttributeConfiguration = struct(n0, _IPAC, 0, [_EVVOA], [2]);
export var ListUserProficienciesRequest = struct(
  n0,
  _LUPR,
  0,
  [_II, _UI, _NT, _MRa],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListUserProficienciesResponse = struct(
  n0,
  _LUPRi,
  0,
  [_NT, _UPL, _LMT, _LMR],
  [0, () => UserProficiencyList, 4, 0]
);
export var PredefinedAttribute = struct(
  n0,
  _PA,
  0,
  [_N, _Va, _Pu, _ACtt, _LMT, _LMR],
  [0, () => PredefinedAttributeValues, 64 | 0, () => PredefinedAttributeConfiguration, 4, 0]
);
export var PredefinedAttributeConfiguration = struct(n0, _PAC, 0, [_EVVOA, _IRO], [2, 2]);
export var PredefinedAttributeSearchCriteria = struct(
  n0,
  _PASC,
  0,
  [_OC, _ACn, _SC],
  [() => PredefinedAttributeSearchConditionList, () => PredefinedAttributeSearchConditionList, () => StringCondition]
);
export var SearchPredefinedAttributesRequest = struct(
  n0,
  _SPAR,
  0,
  [_II, _NT, _MRa, _SCe],
  [0, 0, 1, () => PredefinedAttributeSearchCriteria]
);
export var SearchPredefinedAttributesResponse = struct(
  n0,
  _SPARe,
  0,
  [_PAr, _NT, _ATC],
  [() => PredefinedAttributeSearchSummaryList, 0, 1]
);
export var UpdatePredefinedAttributeRequest = struct(
  n0,
  _UPARpd,
  0,
  [_II, _N, _Va, _Pu, _ACtt],
  [[0, 1], [0, 1], () => PredefinedAttributeValues, 64 | 0, () => InputPredefinedAttributeConfiguration]
);
export var UpdateUserProficienciesRequest = struct(
  n0,
  _UUPR,
  0,
  [_II, _UI, _UP],
  [[0, 1], [0, 1], () => UserProficiencyList]
);
export var UserProficiency = struct(n0, _UPs, 0, [_ANt, _AVt, _Level__], [0, 0, 1]);
export var UserProficiencyDisassociate = struct(n0, _UPD, 0, [_ANt, _AVt], [0, 0]);
export var PredefinedAttributePurposeNameList = 64 | 0;

export var PredefinedAttributeSearchConditionList = list(n0, _PASCL, 0, () => PredefinedAttributeSearchCriteria);
export var PredefinedAttributeSearchSummaryList = list(n0, _PASSL, 0, () => PredefinedAttribute);
export var PredefinedAttributeStringValuesList = 64 | 0;

export var UserProficiencyDisassociateList = list(n0, _UPDL, 0, () => UserProficiencyDisassociate);
export var UserProficiencyList = list(n0, _UPL, 0, () => UserProficiency);
export var PredefinedAttributeValues = uni(n0, _PAV, 0, [_SL], [64 | 0]);
export var AssociateUserProficiencies = op(
  n0,
  _AUP,
  {
    [_h]: ["POST", "/users/{InstanceId}/{UserId}/associate-proficiencies", 200],
  },
  () => AssociateUserProficienciesRequest,
  () => Unit
);
export var CreatePredefinedAttribute = op(
  n0,
  _CPAr,
  {
    [_h]: ["PUT", "/predefined-attributes/{InstanceId}", 200],
  },
  () => CreatePredefinedAttributeRequest,
  () => Unit
);
export var DescribePredefinedAttribute = op(
  n0,
  _DPAe,
  {
    [_h]: ["GET", "/predefined-attributes/{InstanceId}/{Name}", 200],
  },
  () => DescribePredefinedAttributeRequest,
  () => DescribePredefinedAttributeResponse
);
export var DisassociateUserProficiencies = op(
  n0,
  _DUP,
  {
    [_h]: ["POST", "/users/{InstanceId}/{UserId}/disassociate-proficiencies", 200],
  },
  () => DisassociateUserProficienciesRequest,
  () => Unit
);
export var ListUserProficiencies = op(
  n0,
  _LUP,
  {
    [_h]: ["GET", "/users/{InstanceId}/{UserId}/proficiencies", 200],
  },
  () => ListUserProficienciesRequest,
  () => ListUserProficienciesResponse
);
export var SearchPredefinedAttributes = op(
  n0,
  _SPAe,
  {
    [_h]: ["POST", "/search-predefined-attributes", 200],
  },
  () => SearchPredefinedAttributesRequest,
  () => SearchPredefinedAttributesResponse
);
export var UpdatePredefinedAttribute = op(
  n0,
  _UPAp,
  {
    [_h]: ["POST", "/predefined-attributes/{InstanceId}/{Name}", 200],
  },
  () => UpdatePredefinedAttributeRequest,
  () => Unit
);
export var UpdateUserProficiencies = op(
  n0,
  _UUP,
  {
    [_h]: ["POST", "/users/{InstanceId}/{UserId}/proficiencies", 200],
  },
  () => UpdateUserProficienciesRequest,
  () => Unit
);
