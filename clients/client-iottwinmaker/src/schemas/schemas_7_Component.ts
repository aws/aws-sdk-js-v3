// smithy-typescript generated code
import { list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _aACCR,
  _aACR,
  _aAPR,
  _aAPVR,
  _cC,
  _CCMR,
  _CCR,
  _CCRo,
  _CCT,
  _cCT,
  _CCTR,
  _CCTRo,
  _CCTRom,
  _CCTRomp,
  _CCTRr,
  _CCTRre,
  _cCU,
  _CCUMR,
  _CCUR,
  _cDT,
  _CER,
  _CEr,
  _CERr,
  _CM,
  _CMR,
  _cN,
  _co,
  _con,
  _cP,
  _CPGR,
  _CPGRo,
  _CPGRom,
  _CPGRomp,
  _CR,
  _CRo,
  _CS,
  _cS,
  _CSo,
  _cTI,
  _cTN,
  _CTS,
  _cTS,
  _CTSo,
  _cU,
  _CUMR,
  _CUR,
  _d,
  _DC,
  _DCT,
  _DCTR,
  _DCTRe,
  _DE,
  _def,
  _DER,
  _DERe,
  _dI,
  _dN,
  _dTa,
  _dVe,
  _e,
  _eF,
  _eI,
  _eIx,
  _eN,
  _end,
  _ES,
  _eS,
  _ESn,
  _f,
  _fi,
  _FR,
  _FRu,
  _FRun,
  _FRunc,
  _GCT,
  _GCTR,
  _GCTRe,
  _GE,
  _GER,
  _GERe,
  _gT,
  _h,
  _hCE,
  _hQ,
  _iAs,
  _iB,
  _iEI,
  _iI,
  _iN,
  _iR,
  _iRIE,
  _iS,
  _iSE,
  _iSI,
  _iTS,
  _l,
  _LC,
  _LCR,
  _LCRi,
  _LCT,
  _LCTF,
  _LCTFi,
  _LCTR,
  _LCTRi,
  _LE,
  _LEF,
  _LEFi,
  _LER,
  _LERi,
  _LF,
  _mR,
  _na,
  _nTe,
  _pD,
  _PDR,
  _PDRro,
  _PDRrop,
  _pEI,
  _pEU,
  _PEUR,
  _pG,
  _PGR,
  _PGRr,
  _PGRro,
  _PGRrop,
  _pGU,
  _pN,
  _PR,
  _pr,
  _PRr,
  _PRro,
  _PRrop,
  _pU,
  _rP,
  _S,
  _s,
  _sc,
  _sS,
  _st,
  _ta,
  _UCT,
  _UCTR,
  _UCTRp,
  _uDT,
  _UE,
  _UER,
  _UERp,
  _uT,
  _v,
  _wI,
  n0,
} from "./schemas_0";
import { DataType, DataValue, PropertyDefinitionResponse } from "./schemas_4_Get";
import { ErrorDetails } from "./schemas_13_List";

/* eslint no-var: 0 */

export var ComponentPropertyGroupRequest = struct(n0, _CPGR, 0, [_gT, _pN, _uT], [0, 64 | 0, 0]);
export var ComponentPropertyGroupResponse = struct(n0, _CPGRo, 0, [_gT, _pN, _iI], [0, 64 | 0, 2]);
export var ComponentRequest = struct(
  n0,
  _CR,
  0,
  [_d, _cTI, _pr, _pG],
  [0, 0, () => PropertyRequests, () => ComponentPropertyGroupRequests]
);
export var ComponentResponse = struct(
  n0,
  _CRo,
  0,
  [_cN, _d, _cTI, _s, _dI, _pr, _pG, _sS, _aAPR, _cC, _aACCR],
  [
    0,
    0,
    0,
    () => Status,
    0,
    () => PropertyResponses,
    () => ComponentPropertyGroupResponses,
    0,
    2,
    () => CompositeComponentResponse,
    2,
  ]
);
export var ComponentSummary = struct(
  n0,
  _CS,
  0,
  [_cN, _cTI, _dI, _d, _pG, _s, _sS, _cP],
  [0, 0, 0, 0, () => ComponentPropertyGroupResponses, () => Status, 0, 0]
);
export var ComponentTypeSummary = struct(
  n0,
  _CTS,
  0,
  [_a, _cTI, _cDT, _uDT, _d, _s, _cTN],
  [0, 0, 4, 4, 0, () => Status, 0]
);
export var ComponentUpdateRequest = struct(
  n0,
  _CUR,
  0,
  [_uT, _d, _cTI, _pU, _pGU],
  [0, 0, 0, () => PropertyRequests, () => ComponentPropertyGroupRequests]
);
export var CompositeComponentRequest = struct(
  n0,
  _CCR,
  0,
  [_d, _pr, _pG],
  [0, () => PropertyRequests, () => ComponentPropertyGroupRequests]
);
export var CompositeComponentTypeRequest = struct(n0, _CCTR, 0, [_cTI], [0]);
export var CompositeComponentTypeResponse = struct(n0, _CCTRo, 0, [_cTI, _iI], [0, 2]);
export var CompositeComponentUpdateRequest = struct(
  n0,
  _CCUR,
  0,
  [_uT, _d, _pU, _pGU],
  [0, 0, () => PropertyRequests, () => ComponentPropertyGroupRequests]
);
export var CreateComponentTypeRequest = struct(
  n0,
  _CCTRr,
  0,
  [_wI, _iS, _cTI, _d, _pD, _eF, _f, _ta, _pG, _cTN, _cCT],
  [
    [0, 1],
    2,
    [0, 1],
    0,
    () => PropertyDefinitionsRequest,
    64 | 0,
    () => FunctionsRequest,
    128 | 0,
    () => PropertyGroupsRequest,
    0,
    () => CompositeComponentTypesRequest,
  ]
);
export var CreateComponentTypeResponse = struct(n0, _CCTRre, 0, [_a, _cDT, _st], [0, 4, 0]);
export var CreateEntityRequest = struct(
  n0,
  _CER,
  0,
  [_wI, _eI, _eN, _d, _co, _cC, _pEI, _ta],
  [[0, 1], 0, 0, 0, () => ComponentsMapRequest, () => CompositeComponentsMapRequest, 0, 128 | 0]
);
export var CreateEntityResponse = struct(n0, _CERr, 0, [_eI, _a, _cDT, _st], [0, 0, 4, 0]);
export var DataConnector = struct(n0, _DC, 0, [_l, _iN], [() => LambdaFunction, 2]);
export var DeleteComponentTypeRequest = struct(
  n0,
  _DCTR,
  0,
  [_wI, _cTI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteComponentTypeResponse = struct(n0, _DCTRe, 0, [_st], [0]);
export var DeleteEntityRequest = struct(
  n0,
  _DER,
  0,
  [_wI, _eI, _iR],
  [
    [0, 1],
    [0, 1],
    [
      2,
      {
        [_hQ]: _iR,
      },
    ],
  ]
);
export var DeleteEntityResponse = struct(n0, _DERe, 0, [_st], [0]);
export var EntitySummary = struct(
  n0,
  _ES,
  0,
  [_eI, _eN, _a, _pEI, _s, _d, _hCE, _cDT, _uDT],
  [0, 0, 0, 0, () => Status, 0, 2, 4, 4]
);
export var FunctionRequest = struct(n0, _FR, 0, [_rP, _sc, _iB], [64 | 0, 0, () => DataConnector]);
export var FunctionResponse = struct(n0, _FRu, 0, [_rP, _sc, _iB, _iI], [64 | 0, 0, () => DataConnector, 2]);
export var GetComponentTypeRequest = struct(
  n0,
  _GCTR,
  0,
  [_wI, _cTI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetComponentTypeResponse = struct(
  n0,
  _GCTRe,
  0,
  [_wI, _iS, _cTI, _d, _pD, _eF, _f, _cDT, _uDT, _a, _iAs, _iSI, _s, _pG, _sS, _cTN, _cCT],
  [
    0,
    2,
    0,
    0,
    () => PropertyDefinitionsResponse,
    64 | 0,
    () => FunctionsResponse,
    4,
    4,
    0,
    2,
    2,
    () => Status,
    () => PropertyGroupsResponse,
    0,
    0,
    () => CompositeComponentTypesResponse,
  ]
);
export var GetEntityRequest = struct(
  n0,
  _GER,
  0,
  [_wI, _eI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetEntityResponse = struct(
  n0,
  _GERe,
  0,
  [_eI, _eN, _a, _s, _wI, _d, _co, _pEI, _hCE, _cDT, _uDT, _sS, _aACR],
  [0, 0, 0, () => Status, 0, 0, () => ComponentsMap, 0, 2, 4, 4, 0, 2]
);
export var LambdaFunction = struct(n0, _LF, 0, [_a], [0]);
export var ListComponentsRequest = struct(n0, _LCR, 0, [_wI, _eI, _cP, _mR, _nTe], [[0, 1], [0, 1], 0, 1, 0]);
export var ListComponentsResponse = struct(n0, _LCRi, 0, [_cS, _nTe], [() => ComponentSummaries, 0]);
export var ListComponentTypesRequest = struct(
  n0,
  _LCTR,
  0,
  [_wI, _fi, _nTe, _mR],
  [[0, 1], () => ListComponentTypesFilters, 0, 1]
);
export var ListComponentTypesResponse = struct(
  n0,
  _LCTRi,
  0,
  [_wI, _cTS, _nTe, _mR],
  [0, () => ComponentTypeSummaries, 0, 1]
);
export var ListEntitiesRequest = struct(n0, _LER, 0, [_wI, _fi, _mR, _nTe], [[0, 1], () => ListEntitiesFilters, 1, 0]);
export var ListEntitiesResponse = struct(n0, _LERi, 0, [_eS, _nTe], [() => EntitySummaries, 0]);
export var ParentEntityUpdateRequest = struct(n0, _PEUR, 0, [_uT, _pEI], [0, 0]);
export var PropertyDefinitionRequest = struct(
  n0,
  _PDR,
  0,
  [_dTa, _iRIE, _iEI, _iSE, _iTS, _dVe, _con, _dN],
  [() => DataType, 2, 2, 2, 2, () => DataValue, 128 | 0, 0]
);
export var PropertyGroupRequest = struct(n0, _PGR, 0, [_gT, _pN], [0, 64 | 0]);
export var PropertyGroupResponse = struct(n0, _PGRr, 0, [_gT, _pN, _iI], [0, 64 | 0, 2]);
export var PropertyRequest = struct(n0, _PR, 0, [_def, _v, _uT], [() => PropertyDefinitionRequest, () => DataValue, 0]);
export var PropertyResponse = struct(
  n0,
  _PRr,
  0,
  [_def, _v, _aAPVR],
  [() => PropertyDefinitionResponse, () => DataValue, 2]
);
export var Status = struct(n0, _S, 0, [_st, _e], [0, () => ErrorDetails]);
export var UpdateComponentTypeRequest = struct(
  n0,
  _UCTR,
  0,
  [_wI, _iS, _cTI, _d, _pD, _eF, _f, _pG, _cTN, _cCT],
  [
    [0, 1],
    2,
    [0, 1],
    0,
    () => PropertyDefinitionsRequest,
    64 | 0,
    () => FunctionsRequest,
    () => PropertyGroupsRequest,
    0,
    () => CompositeComponentTypesRequest,
  ]
);
export var UpdateComponentTypeResponse = struct(n0, _UCTRp, 0, [_wI, _a, _cTI, _st], [0, 0, 0, 0]);
export var UpdateEntityRequest = struct(
  n0,
  _UER,
  0,
  [_wI, _eI, _eN, _d, _cU, _cCU, _pEU],
  [
    [0, 1],
    [0, 1],
    0,
    0,
    () => ComponentUpdatesMapRequest,
    () => CompositeComponentUpdatesMapRequest,
    () => ParentEntityUpdateRequest,
  ]
);
export var UpdateEntityResponse = struct(n0, _UERp, 0, [_uDT, _st], [4, 0]);
export var ComponentSummaries = list(n0, _CSo, 0, () => ComponentSummary);
export var ComponentTypeSummaries = list(n0, _CTSo, 0, () => ComponentTypeSummary);
export var EntitySummaries = list(n0, _ESn, 0, () => EntitySummary);
export var ExtendsFrom = 64 | 0;

export var ListComponentTypesFilters = list(n0, _LCTF, 0, () => ListComponentTypesFilter);
export var ListEntitiesFilters = list(n0, _LEF, 0, () => ListEntitiesFilter);
export var PropertyNames = 64 | 0;

export var RequiredProperties = 64 | 0;

export var ComponentPropertyGroupRequests = map(n0, _CPGRom, 0, 0, () => ComponentPropertyGroupRequest);
export var ComponentPropertyGroupResponses = map(n0, _CPGRomp, 0, 0, () => ComponentPropertyGroupResponse);
export var ComponentsMap = map(n0, _CM, 0, 0, () => ComponentResponse);
export var ComponentsMapRequest = map(n0, _CMR, 0, 0, () => ComponentRequest);
export var ComponentUpdatesMapRequest = map(n0, _CUMR, 0, 0, () => ComponentUpdateRequest);
export var CompositeComponentResponse = map(n0, _CCRo, 0, 0, () => ComponentSummary);
export var CompositeComponentsMapRequest = map(n0, _CCMR, 0, 0, () => CompositeComponentRequest);
export var CompositeComponentTypesRequest = map(n0, _CCTRom, 0, 0, () => CompositeComponentTypeRequest);
export var CompositeComponentTypesResponse = map(n0, _CCTRomp, 0, 0, () => CompositeComponentTypeResponse);
export var CompositeComponentUpdatesMapRequest = map(n0, _CCUMR, 0, 0, () => CompositeComponentUpdateRequest);
export var FunctionsRequest = map(n0, _FRun, 0, 0, () => FunctionRequest);
export var FunctionsResponse = map(n0, _FRunc, 0, 0, () => FunctionResponse);
export var PropertyDefinitionsRequest = map(n0, _PDRro, 0, 0, () => PropertyDefinitionRequest);
export var PropertyDefinitionsResponse = map(n0, _PDRrop, 0, 0, () => PropertyDefinitionResponse);
export var PropertyGroupsRequest = map(n0, _PGRro, 0, 0, () => PropertyGroupRequest);
export var PropertyGroupsResponse = map(n0, _PGRrop, 0, 0, () => PropertyGroupResponse);
export var PropertyRequests = map(n0, _PRro, 0, 0, () => PropertyRequest);
export var PropertyResponses = map(n0, _PRrop, 0, 0, () => PropertyResponse);
export var ListComponentTypesFilter = uni(n0, _LCTFi, 0, [_eF, _na, _iAs], [0, 0, 2]);
export var ListEntitiesFilter = uni(n0, _LEFi, 0, [_pEI, _cTI, _eIx], [0, 0, 0]);
export var CreateComponentType = op(
  n0,
  _CCT,
  {
    [_h]: ["POST", "/workspaces/{workspaceId}/component-types/{componentTypeId}", 200],
    [_end]: ["api."],
  },
  () => CreateComponentTypeRequest,
  () => CreateComponentTypeResponse
);
export var CreateEntity = op(
  n0,
  _CEr,
  {
    [_h]: ["POST", "/workspaces/{workspaceId}/entities", 200],
    [_end]: ["api."],
  },
  () => CreateEntityRequest,
  () => CreateEntityResponse
);
export var DeleteComponentType = op(
  n0,
  _DCT,
  {
    [_h]: ["DELETE", "/workspaces/{workspaceId}/component-types/{componentTypeId}", 200],
    [_end]: ["api."],
  },
  () => DeleteComponentTypeRequest,
  () => DeleteComponentTypeResponse
);
export var DeleteEntity = op(
  n0,
  _DE,
  {
    [_h]: ["DELETE", "/workspaces/{workspaceId}/entities/{entityId}", 200],
    [_end]: ["api."],
  },
  () => DeleteEntityRequest,
  () => DeleteEntityResponse
);
export var GetComponentType = op(
  n0,
  _GCT,
  {
    [_h]: ["GET", "/workspaces/{workspaceId}/component-types/{componentTypeId}", 200],
    [_end]: ["api."],
  },
  () => GetComponentTypeRequest,
  () => GetComponentTypeResponse
);
export var GetEntity = op(
  n0,
  _GE,
  {
    [_h]: ["GET", "/workspaces/{workspaceId}/entities/{entityId}", 200],
    [_end]: ["api."],
  },
  () => GetEntityRequest,
  () => GetEntityResponse
);
export var ListComponents = op(
  n0,
  _LC,
  {
    [_h]: ["POST", "/workspaces/{workspaceId}/entities/{entityId}/components-list", 200],
    [_end]: ["api."],
  },
  () => ListComponentsRequest,
  () => ListComponentsResponse
);
export var ListComponentTypes = op(
  n0,
  _LCT,
  {
    [_h]: ["POST", "/workspaces/{workspaceId}/component-types-list", 200],
    [_end]: ["api."],
  },
  () => ListComponentTypesRequest,
  () => ListComponentTypesResponse
);
export var ListEntities = op(
  n0,
  _LE,
  {
    [_h]: ["POST", "/workspaces/{workspaceId}/entities-list", 200],
    [_end]: ["api."],
  },
  () => ListEntitiesRequest,
  () => ListEntitiesResponse
);
export var UpdateComponentType = op(
  n0,
  _UCT,
  {
    [_h]: ["PUT", "/workspaces/{workspaceId}/component-types/{componentTypeId}", 200],
    [_end]: ["api."],
  },
  () => UpdateComponentTypeRequest,
  () => UpdateComponentTypeResponse
);
export var UpdateEntity = op(
  n0,
  _UE,
  {
    [_h]: ["PUT", "/workspaces/{workspaceId}/entities/{entityId}", 200],
    [_end]: ["api."],
  },
  () => UpdateEntityRequest,
  () => UpdateEntityResponse
);
