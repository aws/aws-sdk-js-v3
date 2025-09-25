// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACS,
  _aCSg,
  _ACSL,
  _AI,
  _aI,
  _AIg,
  _aIg,
  _aIge,
  _ANI,
  _ANIL,
  _aNIL,
  _aT,
  _BDA,
  _BDAE,
  _BDAEa,
  _BDAR,
  _BDARa,
  _C,
  _CA,
  _CAR,
  _CARr,
  _cC,
  _cI,
  _cIo,
  _cIon,
  _co,
  _con,
  _cS,
  _cT,
  _d,
  _DA,
  _dA,
  _DAe,
  _DAes,
  _DARes,
  _DAResc,
  _DC,
  _DCA,
  _DCR,
  _DCRe,
  _dP,
  _dSI,
  _eC,
  _eM,
  _er,
  _F,
  _f,
  _Fi,
  _fi,
  _fN,
  _h,
  _hN,
  _iA,
  _kDC,
  _LC,
  _LCR,
  _LCRi,
  _lHPT,
  _LSN,
  _LSNR,
  _LSNRi,
  _mA,
  _mR,
  _n,
  _NCD,
  _nCI,
  _NDL,
  _ne,
  _nT,
  _oB,
  _OBE,
  _OBL,
  _oS,
  _pIN,
  _rT,
  _SDCBAI,
  _SDCBAIR,
  _SDCBAIRt,
  _SDCBAIRto,
  _SDCBAIRtop,
  _SDCBAIt,
  _sO,
  _sSI,
  _tP,
  _v,
  _val,
  _w,
  n0,
} from "./schemas_0";
import { FilterValues } from "./schemas_12_Describe";

/* eslint no-var: 0 */

export var AgentConfigurationStatus = struct(n0, _ACS, 0, [_aI, _oS, _d], [0, 2, 0]);
export var AgentInfo = struct(
  n0,
  _AI,
  0,
  [_aI, _hN, _aNIL, _cI, _v, _h, _lHPT, _cS, _aT, _rT],
  [0, 0, [() => AgentNetworkInfoList, 0], 0, 0, 0, 0, 0, 0, 0]
);
export var AgentNetworkInfo = struct(n0, _ANI, 8, [_iA, _mA], [0, 0]);
export var BatchDeleteAgentError = struct(n0, _BDAE, 0, [_aI, _eM, _eC], [0, 0, 0]);
export var BatchDeleteAgentsRequest = struct(n0, _BDAR, 0, [_dA], [() => DeleteAgents]);
export var BatchDeleteAgentsResponse = struct(n0, _BDARa, 0, [_er], [() => BatchDeleteAgentErrors]);
export var CreateApplicationRequest = struct(n0, _CAR, 0, [_n, _d, _w], [0, 0, 0]);
export var CreateApplicationResponse = struct(n0, _CARr, 0, [_cIon], [0]);
export var DeleteAgent = struct(n0, _DA, 0, [_aI, _f], [0, 2]);
export var DescribeAgentsRequest = struct(n0, _DARes, 0, [_aIg, _fi, _mR, _nT], [64 | 0, [() => Filters, 0], 1, 0]);
export var DescribeAgentsResponse = struct(n0, _DAResc, 0, [_aIge, _nT], [[() => AgentsInfo, 0], 0]);
export var DescribeConfigurationsRequest = struct(n0, _DCR, 0, [_cIo], [64 | 0]);
export var DescribeConfigurationsResponse = struct(n0, _DCRe, 0, [_co], [list(n0, _DCA, 0, 128 | 0)]);
export var Filter = struct(n0, _F, 0, [_n, _val, _con], [0, [() => FilterValues, 0], 0]);
export var ListConfigurationsRequest = struct(
  n0,
  _LCR,
  0,
  [_cT, _fi, _mR, _nT, _oB],
  [0, [() => Filters, 0], 1, 0, () => OrderByList]
);
export var ListConfigurationsResponse = struct(n0, _LCRi, 0, [_co, _nT], [list(n0, _C, 0, 128 | 0), 0]);
export var ListServerNeighborsRequest = struct(n0, _LSNR, 0, [_cIon, _pIN, _nCI, _mR, _nT], [0, 2, 64 | 0, 1, 0]);
export var ListServerNeighborsResponse = struct(n0, _LSNRi, 0, [_ne, _nT, _kDC], [() => NeighborDetailsList, 0, 1]);
export var NeighborConnectionDetail = struct(n0, _NCD, 0, [_sSI, _dSI, _dP, _tP, _cC], [0, 0, 1, 0, 1]);
export var OrderByElement = struct(n0, _OBE, 0, [_fN, _sO], [0, 0]);
export var StartDataCollectionByAgentIdsRequest = struct(n0, _SDCBAIR, 0, [_aIg], [64 | 0]);
export var StartDataCollectionByAgentIdsResponse = struct(
  n0,
  _SDCBAIRt,
  0,
  [_aCSg],
  [() => AgentConfigurationStatusList]
);
export var StopDataCollectionByAgentIdsRequest = struct(n0, _SDCBAIRto, 0, [_aIg], [64 | 0]);
export var StopDataCollectionByAgentIdsResponse = struct(
  n0,
  _SDCBAIRtop,
  0,
  [_aCSg],
  [() => AgentConfigurationStatusList]
);
export var AgentConfigurationStatusList = list(n0, _ACSL, 0, () => AgentConfigurationStatus);
export var AgentIds = 64 | 0;

export var AgentNetworkInfoList = list(n0, _ANIL, 0, [() => AgentNetworkInfo, 0]);
export var AgentsInfo = list(n0, _AIg, 0, [() => AgentInfo, 0]);
export var BatchDeleteAgentErrors = list(n0, _BDAEa, 0, () => BatchDeleteAgentError);
export var Configurations = list(n0, _C, 0, 128 | 0);
export var DeleteAgents = list(n0, _DAe, 0, () => DeleteAgent);
export var DescribeConfigurationsAttributes = list(n0, _DCA, 0, 128 | 0);
export var Filters = list(n0, _Fi, 0, [() => Filter, 0]);
export var NeighborDetailsList = list(n0, _NDL, 0, () => NeighborConnectionDetail);
export var OrderByList = list(n0, _OBL, 0, () => OrderByElement);
export var Configuration = 128 | 0;

export var DescribeConfigurationsAttribute = 128 | 0;

export var BatchDeleteAgents = op(
  n0,
  _BDA,
  0,
  () => BatchDeleteAgentsRequest,
  () => BatchDeleteAgentsResponse
);
export var CreateApplication = op(
  n0,
  _CA,
  0,
  () => CreateApplicationRequest,
  () => CreateApplicationResponse
);
export var DescribeAgents = op(
  n0,
  _DAes,
  0,
  () => DescribeAgentsRequest,
  () => DescribeAgentsResponse
);
export var DescribeConfigurations = op(
  n0,
  _DC,
  0,
  () => DescribeConfigurationsRequest,
  () => DescribeConfigurationsResponse
);
export var ListConfigurations = op(
  n0,
  _LC,
  0,
  () => ListConfigurationsRequest,
  () => ListConfigurationsResponse
);
export var ListServerNeighbors = op(
  n0,
  _LSN,
  0,
  () => ListServerNeighborsRequest,
  () => ListServerNeighborsResponse
);
export var StartDataCollectionByAgentIds = op(
  n0,
  _SDCBAI,
  0,
  () => StartDataCollectionByAgentIdsRequest,
  () => StartDataCollectionByAgentIdsResponse
);
export var StopDataCollectionByAgentIds = op(
  n0,
  _SDCBAIt,
  0,
  () => StopDataCollectionByAgentIdsRequest,
  () => StopDataCollectionByAgentIdsResponse
);
