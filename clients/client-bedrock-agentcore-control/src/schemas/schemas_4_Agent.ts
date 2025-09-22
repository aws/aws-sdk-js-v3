// smithy-typescript generated code
import { list, map, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _aC,
  _AR,
  _aR,
  _ARA,
  _aRA,
  _aRAg,
  _ARE,
  _aREA,
  _AREg,
  _ARg,
  _aRI,
  _aRN,
  _aRV,
  _cA,
  _CAR,
  _CARE,
  _CARER,
  _CARERr,
  _CARR,
  _CARRr,
  _CC,
  _cC,
  _cTl,
  _cU,
  _d,
  _DAR,
  _DARE,
  _DARER,
  _DARERe,
  _DARR,
  _DARRe,
  _EN,
  _eN,
  _eV,
  _EVM,
  _fR,
  _GAR,
  _GARE,
  _GARER,
  _GARERe,
  _GARR,
  _GARRe,
  _h,
  _hQ,
  _i,
  _iT,
  _LAR,
  _LARE,
  _LARER,
  _LARERi,
  _LARR,
  _LARRi,
  _LARV,
  _LARVR,
  _LARVRi,
  _lUA,
  _lV,
  _mR,
  _n,
  _NC,
  _nC,
  _nM,
  _nMC,
  _nT,
  _PC,
  _pC,
  _rA,
  _rE,
  _rHA,
  _RHC,
  _rHC,
  _s,
  _sP,
  _t,
  _tV,
  _UAR,
  _UARE,
  _UARER,
  _UARERp,
  _UARR,
  _UARRp,
  _v,
  _wID,
  Description,
  n0,
} from "./schemas_0";
import { AuthorizerConfiguration, VpcConfig, WorkloadIdentityDetails } from "./schemas_13_Create";

/* eslint no-var: 0 */

export var EndpointName = sim(n0, _EN, 0, 8);
export var AgentRuntime = struct(
  n0,
  _AR,
  0,
  [_aRA, _aRI, _aRV, _aRN, _d, _lUA, _s],
  [0, 0, 0, 0, [() => Description, 0], 5, 0]
);
export var AgentRuntimeEndpoint = struct(
  n0,
  _ARE,
  0,
  [_n, _lV, _tV, _aREA, _aRA, _s, _i, _d, _cA, _lUA],
  [[() => EndpointName, 0], 0, 0, 0, 0, 0, 0, 0, 5, 5]
);
export var ContainerConfiguration = struct(n0, _CC, 0, [_cU], [0]);
export var CreateAgentRuntimeEndpointRequest = struct(
  n0,
  _CARER,
  0,
  [_aRI, _n, _aRV, _d, _cTl, _t],
  [[0, 1], [() => EndpointName, 0], 0, 0, [0, 4], 128 | 0]
);
export var CreateAgentRuntimeEndpointResponse = struct(n0, _CARERr, 0, [_tV, _aREA, _aRA, _s, _cA], [0, 0, 0, 0, 5]);
export var CreateAgentRuntimeRequest = struct(
  n0,
  _CARR,
  0,
  [_aRN, _d, _aRAg, _rA, _nC, _pC, _cTl, _eV, _aC, _rHC, _t],
  [
    0,
    [() => Description, 0],
    () => AgentRuntimeArtifact,
    0,
    () => NetworkConfiguration,
    () => ProtocolConfiguration,
    [0, 4],
    [() => EnvironmentVariablesMap, 0],
    () => AuthorizerConfiguration,
    () => RequestHeaderConfiguration,
    128 | 0,
  ]
);
export var CreateAgentRuntimeResponse = struct(
  n0,
  _CARRr,
  0,
  [_aRA, _wID, _aRI, _aRV, _cA, _s],
  [0, () => WorkloadIdentityDetails, 0, 0, 5, 0]
);
export var DeleteAgentRuntimeEndpointRequest = struct(
  n0,
  _DARER,
  0,
  [_aRI, _eN, _cTl],
  [
    [0, 1],
    [() => EndpointName, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cTl,
      },
    ],
  ]
);
export var DeleteAgentRuntimeEndpointResponse = struct(n0, _DARERe, 0, [_s], [0]);
export var DeleteAgentRuntimeRequest = struct(n0, _DARR, 0, [_aRI], [[0, 1]]);
export var DeleteAgentRuntimeResponse = struct(n0, _DARRe, 0, [_s], [0]);
export var GetAgentRuntimeEndpointRequest = struct(
  n0,
  _GARER,
  0,
  [_aRI, _eN],
  [
    [0, 1],
    [() => EndpointName, 1],
  ]
);
export var GetAgentRuntimeEndpointResponse = struct(
  n0,
  _GARERe,
  0,
  [_lV, _tV, _aREA, _aRA, _d, _s, _cA, _lUA, _fR, _n, _i],
  [0, 0, 0, 0, 0, 0, 5, 5, 0, [() => EndpointName, 0], 0]
);
export var GetAgentRuntimeRequest = struct(
  n0,
  _GARR,
  0,
  [_aRI, _aRV],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _v,
      },
    ],
  ]
);
export var GetAgentRuntimeResponse = struct(
  n0,
  _GARRe,
  0,
  [_aRA, _wID, _aRN, _d, _aRI, _aRV, _cA, _lUA, _rA, _aRAg, _nC, _pC, _eV, _aC, _rHC, _s],
  [
    0,
    () => WorkloadIdentityDetails,
    0,
    [() => Description, 0],
    0,
    0,
    5,
    5,
    0,
    () => AgentRuntimeArtifact,
    () => NetworkConfiguration,
    () => ProtocolConfiguration,
    [() => EnvironmentVariablesMap, 0],
    () => AuthorizerConfiguration,
    () => RequestHeaderConfiguration,
    0,
  ]
);
export var ListAgentRuntimeEndpointsRequest = struct(
  n0,
  _LARER,
  0,
  [_aRI, _mR, _nT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListAgentRuntimeEndpointsResponse = struct(
  n0,
  _LARERi,
  0,
  [_rE, _nT],
  [[() => AgentRuntimeEndpoints, 0], 0]
);
export var ListAgentRuntimesRequest = struct(
  n0,
  _LARR,
  0,
  [_mR, _nT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListAgentRuntimesResponse = struct(n0, _LARRi, 0, [_aR, _nT], [[() => AgentRuntimes, 0], 0]);
export var ListAgentRuntimeVersionsRequest = struct(
  n0,
  _LARVR,
  0,
  [_aRI, _mR, _nT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListAgentRuntimeVersionsResponse = struct(n0, _LARVRi, 0, [_aR, _nT], [[() => AgentRuntimes, 0], 0]);
export var NetworkConfiguration = struct(n0, _NC, 0, [_nM, _nMC], [0, () => VpcConfig]);
export var ProtocolConfiguration = struct(n0, _PC, 0, [_sP], [0]);
export var UpdateAgentRuntimeEndpointRequest = struct(
  n0,
  _UARER,
  0,
  [_aRI, _eN, _aRV, _d, _cTl],
  [[0, 1], [() => EndpointName, 1], 0, 0, [0, 4]]
);
export var UpdateAgentRuntimeEndpointResponse = struct(
  n0,
  _UARERp,
  0,
  [_lV, _tV, _aREA, _aRA, _s, _cA, _lUA],
  [0, 0, 0, 0, 0, 5, 5]
);
export var UpdateAgentRuntimeRequest = struct(
  n0,
  _UARR,
  0,
  [_aRI, _d, _aRAg, _rA, _nC, _pC, _cTl, _eV, _aC, _rHC],
  [
    [0, 1],
    [() => Description, 0],
    () => AgentRuntimeArtifact,
    0,
    () => NetworkConfiguration,
    () => ProtocolConfiguration,
    [0, 4],
    [() => EnvironmentVariablesMap, 0],
    () => AuthorizerConfiguration,
    () => RequestHeaderConfiguration,
  ]
);
export var UpdateAgentRuntimeResponse = struct(
  n0,
  _UARRp,
  0,
  [_aRA, _aRI, _wID, _aRV, _cA, _lUA, _s],
  [0, 0, () => WorkloadIdentityDetails, 0, 5, 5, 0]
);
export var AgentRuntimeEndpoints = list(n0, _AREg, 0, [() => AgentRuntimeEndpoint, 0]);
export var AgentRuntimes = list(n0, _ARg, 0, [() => AgentRuntime, 0]);
export var RequestHeaderAllowlist = 64 | 0;

export var EnvironmentVariablesMap = map(n0, _EVM, 8, 0, 0);
export var AgentRuntimeArtifact = uni(n0, _ARA, 0, [_cC], [() => ContainerConfiguration]);
export var RequestHeaderConfiguration = uni(n0, _RHC, 0, [_rHA], [64 | 0]);
export var CreateAgentRuntime = op(
  n0,
  _CAR,
  {
    [_h]: ["PUT", "/runtimes/", 201],
  },
  () => CreateAgentRuntimeRequest,
  () => CreateAgentRuntimeResponse
);
export var CreateAgentRuntimeEndpoint = op(
  n0,
  _CARE,
  {
    [_h]: ["PUT", "/runtimes/{agentRuntimeId}/runtime-endpoints/", 200],
  },
  () => CreateAgentRuntimeEndpointRequest,
  () => CreateAgentRuntimeEndpointResponse
);
export var DeleteAgentRuntime = op(
  n0,
  _DAR,
  {
    [_h]: ["DELETE", "/runtimes/{agentRuntimeId}/", 200],
  },
  () => DeleteAgentRuntimeRequest,
  () => DeleteAgentRuntimeResponse
);
export var DeleteAgentRuntimeEndpoint = op(
  n0,
  _DARE,
  {
    [_h]: ["DELETE", "/runtimes/{agentRuntimeId}/runtime-endpoints/{endpointName}/", 200],
  },
  () => DeleteAgentRuntimeEndpointRequest,
  () => DeleteAgentRuntimeEndpointResponse
);
export var GetAgentRuntime = op(
  n0,
  _GAR,
  {
    [_h]: ["GET", "/runtimes/{agentRuntimeId}/", 200],
  },
  () => GetAgentRuntimeRequest,
  () => GetAgentRuntimeResponse
);
export var GetAgentRuntimeEndpoint = op(
  n0,
  _GARE,
  {
    [_h]: ["GET", "/runtimes/{agentRuntimeId}/runtime-endpoints/{endpointName}/", 200],
  },
  () => GetAgentRuntimeEndpointRequest,
  () => GetAgentRuntimeEndpointResponse
);
export var ListAgentRuntimeEndpoints = op(
  n0,
  _LARE,
  {
    [_h]: ["POST", "/runtimes/{agentRuntimeId}/runtime-endpoints/", 200],
  },
  () => ListAgentRuntimeEndpointsRequest,
  () => ListAgentRuntimeEndpointsResponse
);
export var ListAgentRuntimes = op(
  n0,
  _LAR,
  {
    [_h]: ["POST", "/runtimes/", 200],
  },
  () => ListAgentRuntimesRequest,
  () => ListAgentRuntimesResponse
);
export var ListAgentRuntimeVersions = op(
  n0,
  _LARV,
  {
    [_h]: ["POST", "/runtimes/{agentRuntimeId}/versions/", 200],
  },
  () => ListAgentRuntimeVersionsRequest,
  () => ListAgentRuntimeVersionsResponse
);
export var UpdateAgentRuntime = op(
  n0,
  _UAR,
  {
    [_h]: ["PUT", "/runtimes/{agentRuntimeId}/", 201],
  },
  () => UpdateAgentRuntimeRequest,
  () => UpdateAgentRuntimeResponse
);
export var UpdateAgentRuntimeEndpoint = op(
  n0,
  _UARE,
  {
    [_h]: ["PUT", "/runtimes/{agentRuntimeId}/runtime-endpoints/{endpointName}/", 200],
  },
  () => UpdateAgentRuntimeEndpointRequest,
  () => UpdateAgentRuntimeEndpointResponse
);
