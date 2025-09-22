// smithy-typescript generated code
import { list, map, op, sim, struct } from "@smithy/core/schema";

import {
  _ADt,
  _AIt,
  _AL,
  _AMt,
  _At,
  _BGCAFP,
  _BGCAFPE,
  _BGCAFPEL,
  _BGCAFPR,
  _BGCAFPRa,
  _CA,
  _CADL,
  _CAFPL,
  _CAN,
  _CAV,
  _CAVa,
  _CAVL,
  _CCAD,
  _CCADR,
  _CCADRr,
  _CDL,
  _CDLR,
  _CDLRr,
  _CO,
  _Cod,
  _Cond,
  _D,
  _Di,
  _DN,
  _DNi,
  _DT,
  _E,
  _End,
  _Er,
  _F,
  _FAD,
  _FDi,
  _FDL,
  _FG,
  _GCAD,
  _GCADR,
  _GCADRe,
  _GCAFP,
  _GCAFPR,
  _GCAFPRe,
  _GDL,
  _GDLR,
  _GDLRe,
  _GL,
  _Gr,
  _h,
  _hQ,
  _I,
  _ID,
  _IDP,
  _It,
  _L,
  _LCAD,
  _LCADI,
  _LCADR,
  _LCADRi,
  _LCAFP,
  _LCAFPI,
  _LCAFPR,
  _LCAFPRi,
  _LDL,
  _LDLR,
  _LDLRi,
  _LDN,
  _LI,
  _LL,
  _LOT,
  _LT,
  _LUA,
  _M,
  _MR,
  _mr,
  _N,
  _NT,
  _nt,
  _OC,
  _Op,
  _PI,
  _PIr,
  _PP,
  _R,
  _Re,
  _S,
  _sSTens,
  _Sta,
  _Star,
  _T,
  _Ta,
  _TF,
  _TSi,
  _Ty,
  _UCAD,
  _UCADR,
  _UCADRp,
  _UDL,
  _UDLR,
  _UDLRp,
  _UHD,
  _Un,
  _V,
  _Va,
  _Ve,
  _VR,
  n0,
  sensitiveText,
} from "./schemas_0";
import { ConditionOverrides } from "./schemas_14_Get";

/* eslint no-var: 0 */

export var sensitiveString1To2000000 = sim(n0, _sSTens, 0, 8);
export var Statistic = sim(n0, _S, 0, 8);
export var AttributeDetails = struct(n0, _ADt, 8, [_At, _E], [() => AttributeList, 0]);
export var AttributeItem = struct(n0, _AIt, 0, [_N], [0]);
export var BatchGetCalculatedAttributeForProfileError = struct(n0, _BGCAFPE, 0, [_Cod, _M, _PI], [0, 0, 0]);
export var BatchGetCalculatedAttributeForProfileRequest = struct(
  n0,
  _BGCAFPR,
  0,
  [_CAN, _DN, _PIr, _CO],
  [[0, 1], [0, 1], 64 | 0, [() => ConditionOverrides, 0]]
);
export var BatchGetCalculatedAttributeForProfileResponse = struct(
  n0,
  _BGCAFPRa,
  0,
  [_Er, _CAV, _CO],
  [
    () => BatchGetCalculatedAttributeForProfileErrorList,
    () => CalculatedAttributeValueList,
    [() => ConditionOverrides, 0],
  ]
);
export var CalculatedAttributeValue = struct(n0, _CAVa, 0, [_CAN, _DNi, _IDP, _PI, _Va, _LOT], [0, 0, 0, 0, 0, 4]);
export var Conditions = struct(n0, _Cond, 8, [_R, _OC, _T], [() => Range, 1, () => Threshold]);
export var CreateCalculatedAttributeDefinitionRequest = struct(
  n0,
  _CCADR,
  0,
  [_DN, _CAN, _DNi, _D, _ADt, _Cond, _F, _S, _UHD, _Ta],
  [
    [0, 1],
    [0, 1],
    0,
    [() => sensitiveText, 0],
    [() => AttributeDetails, 0],
    [() => Conditions, 0],
    () => Filter,
    [() => Statistic, 0],
    2,
    128 | 0,
  ]
);
export var CreateCalculatedAttributeDefinitionResponse = struct(
  n0,
  _CCADRr,
  0,
  [_CAN, _DNi, _D, _ADt, _Cond, _F, _S, _CA, _LUA, _UHD, _Sta, _Re, _Ta],
  [
    0,
    0,
    [() => sensitiveText, 0],
    [() => AttributeDetails, 0],
    [() => Conditions, 0],
    () => Filter,
    [() => Statistic, 0],
    4,
    4,
    2,
    0,
    () => Readiness,
    128 | 0,
  ]
);
export var CreateDomainLayoutRequest = struct(
  n0,
  _CDLR,
  0,
  [_DN, _LDN, _D, _DNi, _ID, _LT, _L, _Ta],
  [[0, 1], [0, 1], [() => sensitiveText, 0], 0, 2, 0, [() => sensitiveString1To2000000, 0], 128 | 0]
);
export var CreateDomainLayoutResponse = struct(
  n0,
  _CDLRr,
  0,
  [_LDN, _D, _DNi, _ID, _LT, _L, _Ve, _Ta, _CA, _LUA],
  [0, [() => sensitiveText, 0], 0, 2, 0, [() => sensitiveString1To2000000, 0], 0, 128 | 0, 4, 4]
);
export var Filter = struct(n0, _F, 0, [_I, _Gr], [0, () => GroupList]);
export var FilterAttributeDimension = struct(n0, _FAD, 0, [_DT, _V], [0, 64 | 0]);
export var FilterDimension = struct(n0, _FDi, 0, [_At], [() => AttributeMap]);
export var FilterGroup = struct(n0, _FG, 0, [_Ty, _Di], [0, () => FilterDimensionList]);
export var GetCalculatedAttributeDefinitionRequest = struct(
  n0,
  _GCADR,
  0,
  [_DN, _CAN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetCalculatedAttributeDefinitionResponse = struct(
  n0,
  _GCADRe,
  0,
  [_CAN, _DNi, _D, _CA, _LUA, _S, _F, _Cond, _ADt, _UHD, _Sta, _Re, _Ta],
  [
    0,
    0,
    [() => sensitiveText, 0],
    4,
    4,
    [() => Statistic, 0],
    () => Filter,
    [() => Conditions, 0],
    [() => AttributeDetails, 0],
    2,
    0,
    () => Readiness,
    128 | 0,
  ]
);
export var GetCalculatedAttributeForProfileRequest = struct(
  n0,
  _GCAFPR,
  0,
  [_DN, _PI, _CAN],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetCalculatedAttributeForProfileResponse = struct(
  n0,
  _GCAFPRe,
  0,
  [_CAN, _DNi, _IDP, _Va, _LOT],
  [0, 0, 0, 0, 4]
);
export var GetDomainLayoutRequest = struct(
  n0,
  _GDLR,
  0,
  [_DN, _LDN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetDomainLayoutResponse = struct(
  n0,
  _GDLRe,
  0,
  [_LDN, _D, _DNi, _ID, _LT, _L, _Ve, _CA, _LUA, _Ta],
  [0, [() => sensitiveText, 0], 0, 2, 0, [() => sensitiveString1To2000000, 0], 0, 4, 4, 128 | 0]
);
export var LayoutItem = struct(
  n0,
  _LI,
  0,
  [_LDN, _D, _DNi, _ID, _LT, _Ta, _CA, _LUA],
  [0, [() => sensitiveText, 0], 0, 2, 0, 128 | 0, 4, 4]
);
export var ListCalculatedAttributeDefinitionItem = struct(
  n0,
  _LCADI,
  0,
  [_CAN, _DNi, _D, _CA, _LUA, _UHD, _Sta, _Ta],
  [0, 0, [() => sensitiveText, 0], 4, 4, 2, 0, 128 | 0]
);
export var ListCalculatedAttributeDefinitionsRequest = struct(
  n0,
  _LCADR,
  0,
  [_DN, _NT, _MR],
  [
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
        [_hQ]: _mr,
      },
    ],
  ]
);
export var ListCalculatedAttributeDefinitionsResponse = struct(
  n0,
  _LCADRi,
  0,
  [_It, _NT],
  [[() => CalculatedAttributeDefinitionsList, 0], 0]
);
export var ListCalculatedAttributeForProfileItem = struct(
  n0,
  _LCAFPI,
  0,
  [_CAN, _DNi, _IDP, _Va, _LOT],
  [0, 0, 0, 0, 4]
);
export var ListCalculatedAttributesForProfileRequest = struct(
  n0,
  _LCAFPR,
  0,
  [_NT, _MR, _DN, _PI],
  [
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [0, 1],
    [0, 1],
  ]
);
export var ListCalculatedAttributesForProfileResponse = struct(
  n0,
  _LCAFPRi,
  0,
  [_It, _NT],
  [() => CalculatedAttributesForProfileList, 0]
);
export var ListDomainLayoutsRequest = struct(
  n0,
  _LDLR,
  0,
  [_DN, _NT, _MR],
  [
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
        [_hQ]: _mr,
      },
    ],
  ]
);
export var ListDomainLayoutsResponse = struct(n0, _LDLRi, 0, [_It, _NT], [[() => LayoutList, 0], 0]);
export var Range = struct(n0, _R, 0, [_Va, _Un, _VR, _TSi, _TF], [1, 0, () => ValueRange, 0, 0]);
export var Readiness = struct(n0, _Re, 0, [_PP, _M], [1, 0]);
export var Threshold = struct(n0, _T, 0, [_Va, _Op], [0, 0]);
export var UpdateCalculatedAttributeDefinitionRequest = struct(
  n0,
  _UCADR,
  0,
  [_DN, _CAN, _DNi, _D, _Cond],
  [[0, 1], [0, 1], 0, [() => sensitiveText, 0], [() => Conditions, 0]]
);
export var UpdateCalculatedAttributeDefinitionResponse = struct(
  n0,
  _UCADRp,
  0,
  [_CAN, _DNi, _D, _CA, _LUA, _S, _Cond, _ADt, _UHD, _Sta, _Re, _Ta],
  [
    0,
    0,
    [() => sensitiveText, 0],
    4,
    4,
    [() => Statistic, 0],
    [() => Conditions, 0],
    [() => AttributeDetails, 0],
    2,
    0,
    () => Readiness,
    128 | 0,
  ]
);
export var UpdateDomainLayoutRequest = struct(
  n0,
  _UDLR,
  0,
  [_DN, _LDN, _D, _DNi, _ID, _LT, _L],
  [[0, 1], [0, 1], [() => sensitiveText, 0], 0, 2, 0, [() => sensitiveString1To2000000, 0]]
);
export var UpdateDomainLayoutResponse = struct(
  n0,
  _UDLRp,
  0,
  [_LDN, _D, _DNi, _ID, _LT, _L, _Ve, _CA, _LUA, _Ta],
  [0, [() => sensitiveText, 0], 0, 2, 0, [() => sensitiveString1To2000000, 0], 0, 4, 4, 128 | 0]
);
export var ValueRange = struct(n0, _VR, 0, [_Star, _End], [1, 1]);
export var AttributeList = list(n0, _AL, 0, () => AttributeItem);
export var BatchGetCalculatedAttributeForProfileErrorList = list(
  n0,
  _BGCAFPEL,
  0,
  () => BatchGetCalculatedAttributeForProfileError
);
export var BatchGetCalculatedAttributeForProfileIdList = 64 | 0;

export var CalculatedAttributeDefinitionsList = list(n0, _CADL, 8, [() => ListCalculatedAttributeDefinitionItem, 0]);
export var CalculatedAttributesForProfileList = list(n0, _CAFPL, 0, () => ListCalculatedAttributeForProfileItem);
export var CalculatedAttributeValueList = list(n0, _CAVL, 0, () => CalculatedAttributeValue);
export var FilterDimensionList = list(n0, _FDL, 0, () => FilterDimension);
export var GroupList = list(n0, _GL, 0, () => FilterGroup);
export var LayoutList = list(n0, _LL, 0, [() => LayoutItem, 0]);
export var ValueList = 64 | 0;

export var AttributeMap = map(n0, _AMt, 0, 0, () => FilterAttributeDimension);
export var BatchGetCalculatedAttributeForProfile = op(
  n0,
  _BGCAFP,
  {
    [_h]: ["POST", "/domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}/batch-get-for-profiles", 200],
  },
  () => BatchGetCalculatedAttributeForProfileRequest,
  () => BatchGetCalculatedAttributeForProfileResponse
);
export var CreateCalculatedAttributeDefinition = op(
  n0,
  _CCAD,
  {
    [_h]: ["POST", "/domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}", 200],
  },
  () => CreateCalculatedAttributeDefinitionRequest,
  () => CreateCalculatedAttributeDefinitionResponse
);
export var CreateDomainLayout = op(
  n0,
  _CDL,
  {
    [_h]: ["POST", "/domains/{DomainName}/layouts/{LayoutDefinitionName}", 200],
  },
  () => CreateDomainLayoutRequest,
  () => CreateDomainLayoutResponse
);
export var GetCalculatedAttributeDefinition = op(
  n0,
  _GCAD,
  {
    [_h]: ["GET", "/domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}", 200],
  },
  () => GetCalculatedAttributeDefinitionRequest,
  () => GetCalculatedAttributeDefinitionResponse
);
export var GetCalculatedAttributeForProfile = op(
  n0,
  _GCAFP,
  {
    [_h]: ["GET", "/domains/{DomainName}/profile/{ProfileId}/calculated-attributes/{CalculatedAttributeName}", 200],
  },
  () => GetCalculatedAttributeForProfileRequest,
  () => GetCalculatedAttributeForProfileResponse
);
export var GetDomainLayout = op(
  n0,
  _GDL,
  {
    [_h]: ["GET", "/domains/{DomainName}/layouts/{LayoutDefinitionName}", 200],
  },
  () => GetDomainLayoutRequest,
  () => GetDomainLayoutResponse
);
export var ListCalculatedAttributeDefinitions = op(
  n0,
  _LCAD,
  {
    [_h]: ["GET", "/domains/{DomainName}/calculated-attributes", 200],
  },
  () => ListCalculatedAttributeDefinitionsRequest,
  () => ListCalculatedAttributeDefinitionsResponse
);
export var ListCalculatedAttributesForProfile = op(
  n0,
  _LCAFP,
  {
    [_h]: ["GET", "/domains/{DomainName}/profile/{ProfileId}/calculated-attributes", 200],
  },
  () => ListCalculatedAttributesForProfileRequest,
  () => ListCalculatedAttributesForProfileResponse
);
export var ListDomainLayouts = op(
  n0,
  _LDL,
  {
    [_h]: ["GET", "/domains/{DomainName}/layouts", 200],
  },
  () => ListDomainLayoutsRequest,
  () => ListDomainLayoutsResponse
);
export var UpdateCalculatedAttributeDefinition = op(
  n0,
  _UCAD,
  {
    [_h]: ["PUT", "/domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}", 200],
  },
  () => UpdateCalculatedAttributeDefinitionRequest,
  () => UpdateCalculatedAttributeDefinitionResponse
);
export var UpdateDomainLayout = op(
  n0,
  _UDL,
  {
    [_h]: ["PUT", "/domains/{DomainName}/layouts/{LayoutDefinitionName}", 200],
  },
  () => UpdateDomainLayoutRequest,
  () => UpdateDomainLayoutResponse
);
