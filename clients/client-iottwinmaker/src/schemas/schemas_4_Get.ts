// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import {
  ConnectorFailureException as __ConnectorFailureException,
  ConnectorTimeoutException as __ConnectorTimeoutException,
} from "../models/index";
import {
  _aAPVR,
  _aV,
  _BPPE,
  _BPPEE,
  _BPPV,
  _BPPVR,
  _BPPVRa,
  _bV,
  _c,
  _CFE,
  _cN,
  _con,
  _cP,
  _CTE,
  _cTI,
  _def,
  _dN,
  _DT,
  _dTa,
  _DV,
  _dV,
  _dVe,
  _DVL,
  _DVM,
  _E,
  _e,
  _eC,
  _eDT,
  _EE,
  _eE,
  _eI,
  _eIP,
  _eM,
  _en,
  _end,
  _ent,
  _EPR,
  _ePR,
  _Er,
  _er,
  _eT,
  _ex,
  _GPV,
  _GPVH,
  _GPVHR,
  _GPVHRe,
  _GPVR,
  _GPVRe,
  _h,
  _hE,
  _i,
  _iEI,
  _iF,
  _iI,
  _iIS,
  _iIs,
  _IP,
  _iRIE,
  _iSE,
  _iT,
  _iTS,
  _iV,
  _LP,
  _LPR,
  _LPRi,
  _lV,
  _lVi,
  _m,
  _mR,
  _mV,
  _nT,
  _nTe,
  _o,
  _OB,
  _oB,
  _OBL,
  _oBT,
  _op,
  _PDRr,
  _PF,
  _pF,
  _PFr,
  _pGN,
  _PLV,
  _PLVM,
  _pNr,
  _pR,
  _PS,
  _pS,
  _PSr,
  _PTV,
  _PV,
  _pV,
  _PVE,
  _PVH,
  _PVL,
  _PVr,
  _pVr,
  _R,
  _re,
  _rT,
  _RV,
  _rV,
  _sDT,
  _sP,
  _sT,
  _sV,
  _t,
  _TC,
  _tC,
  _tCN,
  _tCTI,
  _tEI,
  _ti,
  _tim,
  _TPV,
  _tPV,
  _TPVa,
  _uOM,
  _V,
  _v,
  _va,
  _wI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchPutPropertyError = struct(n0, _BPPE, 0, [_eC, _eM, _en], [0, 0, () => PropertyValueEntry]);
export var BatchPutPropertyErrorEntry = struct(n0, _BPPEE, 0, [_er], [() => Errors]);
export var BatchPutPropertyValuesRequest = struct(n0, _BPPVR, 0, [_wI, _ent], [[0, 1], () => Entries]);
export var BatchPutPropertyValuesResponse = struct(n0, _BPPVRa, 0, [_eE], [() => ErrorEntries]);
export var ConnectorFailureException = error(
  n0,
  _CFE,
  {
    [_e]: _c,
    [_hE]: 424,
  },
  [_m],
  [0],

  __ConnectorFailureException
);
export var ConnectorTimeoutException = error(
  n0,
  _CTE,
  {
    [_e]: _c,
    [_hE]: 424,
  },
  [_m],
  [0],

  __ConnectorTimeoutException
);
export var DataType = struct(
  n0,
  _DT,
  0,
  [_t, _nT, _aV, _uOM, _re],
  [0, () => DataType, () => DataValueList, 0, () => Relationship]
);
export var DataValue = struct(
  n0,
  _DV,
  0,
  [_bV, _dV, _iV, _lV, _sV, _lVi, _mV, _rV, _ex],
  [2, 1, 1, 1, 0, () => DataValueList, () => DataValueMap, () => RelationshipValue, 0]
);
export var EntityPropertyReference = struct(n0, _EPR, 0, [_cN, _cP, _eIP, _eI, _pNr], [0, 0, 128 | 0, 0, 0]);
export var GetPropertyValueHistoryRequest = struct(
  n0,
  _GPVHR,
  0,
  [_wI, _eI, _cN, _cP, _cTI, _sP, _pF, _sDT, _eDT, _i, _nTe, _mR, _oBT, _sT, _eT],
  [[0, 1], 0, 0, 0, 0, 64 | 0, () => PropertyFilters, 4, 4, () => InterpolationParameters, 0, 1, 0, 0, 0]
);
export var GetPropertyValueHistoryResponse = struct(n0, _GPVHRe, 0, [_pV, _nTe], [() => PropertyValueList, 0]);
export var GetPropertyValueRequest = struct(
  n0,
  _GPVR,
  0,
  [_cN, _cP, _cTI, _eI, _sP, _wI, _mR, _nTe, _pGN, _tC],
  [0, 0, 0, 0, 64 | 0, [0, 1], 1, 0, 0, () => TabularConditions]
);
export var GetPropertyValueResponse = struct(
  n0,
  _GPVRe,
  0,
  [_pV, _nTe, _tPV],
  [() => PropertyLatestValueMap, 0, () => TabularPropertyValues]
);
export var InterpolationParameters = struct(n0, _IP, 0, [_iT, _iIS], [0, 1]);
export var ListPropertiesRequest = struct(n0, _LPR, 0, [_wI, _cN, _cP, _eI, _mR, _nTe], [[0, 1], 0, 0, 0, 1, 0]);
export var ListPropertiesResponse = struct(n0, _LPRi, 0, [_pS, _nTe], [() => PropertySummaries, 0]);
export var OrderBy = struct(n0, _OB, 0, [_o, _pNr], [0, 0]);
export var PropertyDefinitionResponse = struct(
  n0,
  _PDRr,
  0,
  [_dTa, _iTS, _iRIE, _iEI, _iSE, _iIs, _iF, _iI, _dVe, _con, _dN],
  [() => DataType, 2, 2, 2, 2, 2, 2, 2, () => DataValue, 128 | 0, 0]
);
export var PropertyFilter = struct(n0, _PF, 0, [_pNr, _op, _v], [0, 0, () => DataValue]);
export var PropertyLatestValue = struct(n0, _PLV, 0, [_pR, _pVr], [() => EntityPropertyReference, () => DataValue]);
export var PropertySummary = struct(
  n0,
  _PS,
  0,
  [_def, _pNr, _v, _aAPVR],
  [() => PropertyDefinitionResponse, 0, () => DataValue, 2]
);
export var PropertyValue = struct(n0, _PV, 0, [_ti, _v, _tim], [4, () => DataValue, 0]);
export var PropertyValueEntry = struct(n0, _PVE, 0, [_ePR, _pV], [() => EntityPropertyReference, () => PropertyValues]);
export var PropertyValueHistory = struct(n0, _PVH, 0, [_ePR, _va], [() => EntityPropertyReference, () => Values]);
export var Relationship = struct(n0, _R, 0, [_tCTI, _rT], [0, 0]);
export var RelationshipValue = struct(n0, _RV, 0, [_tEI, _tCN], [0, 0]);
export var TabularConditions = struct(n0, _TC, 0, [_oB, _pF], [() => OrderByList, () => PropertyFilters]);
export var DataValueList = list(n0, _DVL, 0, () => DataValue);
export var Entries = list(n0, _E, 0, () => PropertyValueEntry);
export var ErrorEntries = list(n0, _EE, 0, () => BatchPutPropertyErrorEntry);
export var Errors = list(n0, _Er, 0, () => BatchPutPropertyError);
export var OrderByList = list(n0, _OBL, 0, () => OrderBy);
export var PropertyFilters = list(n0, _PFr, 0, () => PropertyFilter);
export var PropertySummaries = list(n0, _PSr, 0, () => PropertySummary);
export var PropertyValueList = list(n0, _PVL, 0, () => PropertyValueHistory);
export var PropertyValues = list(n0, _PVr, 0, () => PropertyValue);
export var SelectedPropertyList = 64 | 0;

export var TabularPropertyValue = list(n0, _TPVa, 0, () => PropertyTableValue);
export var TabularPropertyValues = list(n0, _TPV, 0, () => TabularPropertyValue);
export var Values = list(n0, _V, 0, () => PropertyValue);
export var Configuration = 128 | 0;

export var DataValueMap = map(n0, _DVM, 0, 0, () => DataValue);
export var ExternalIdProperty = 128 | 0;

export var PropertyLatestValueMap = map(n0, _PLVM, 0, 0, () => PropertyLatestValue);
export var PropertyTableValue = map(n0, _PTV, 0, 0, () => DataValue);
export var BatchPutPropertyValues = op(
  n0,
  _BPPV,
  {
    [_h]: ["POST", "/workspaces/{workspaceId}/entity-properties", 200],
    [_end]: ["data."],
  },
  () => BatchPutPropertyValuesRequest,
  () => BatchPutPropertyValuesResponse
);
export var GetPropertyValue = op(
  n0,
  _GPV,
  {
    [_h]: ["POST", "/workspaces/{workspaceId}/entity-properties/value", 200],
    [_end]: ["data."],
  },
  () => GetPropertyValueRequest,
  () => GetPropertyValueResponse
);
export var GetPropertyValueHistory = op(
  n0,
  _GPVH,
  {
    [_h]: ["POST", "/workspaces/{workspaceId}/entity-properties/history", 200],
    [_end]: ["data."],
  },
  () => GetPropertyValueHistoryRequest,
  () => GetPropertyValueHistoryResponse
);
export var ListProperties = op(
  n0,
  _LP,
  {
    [_h]: ["POST", "/workspaces/{workspaceId}/properties-list", 200],
    [_end]: ["api."],
  },
  () => ListPropertiesRequest,
  () => ListPropertiesResponse
);
