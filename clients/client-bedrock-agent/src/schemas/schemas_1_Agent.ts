// smithy-typescript generated code
import { list, map, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _A,
  _a,
  _aA,
  _AAG,
  _aAG,
  _aC,
  _AGE,
  _aGE,
  _aGI,
  _aGN,
  _aGS,
  _aI,
  _aMRF,
  _aN,
  _APIS,
  _aRRA,
  _aS,
  _aSp,
  _AV,
  _aV,
  _BPT,
  _bPT,
  _CA,
  _cA,
  _CAAG,
  _CAAGR,
  _CAAGRr,
  _CAR,
  _CARr,
  _cCu,
  _cEKA,
  _CO,
  _cO,
  _cT,
  _d,
  _eMT,
  _ex,
  _F,
  _fM,
  _fR,
  _fS,
  _FSu,
  _Fu,
  _fu,
  _GAAG,
  _GAAGR,
  _GAAGRe,
  _GAe,
  _GAR,
  _GARe,
  _GAV,
  _GAVR,
  _GAVRe,
  _gC,
  _h,
  _I,
  _i,
  _ICn,
  _iCn,
  _iSTTLIS,
  _lam,
  _MC,
  _mC,
  _mL,
  _mRS,
  _n,
  _OE,
  _oL,
  _oT,
  _P,
  _p,
  _pA,
  _pa,
  _pAGS,
  _pAGSP,
  _pAS,
  _pCM,
  _PCr,
  _pCr,
  _PCro,
  _PD,
  _PM,
  _pMa,
  _POC,
  _pOC,
  _pSr,
  _pTro,
  _rA,
  _rCe,
  _re,
  _s_,
  _sBN,
  _sDt,
  _SI,
  _sOK,
  _sS,
  _sSC,
  _SSCe,
  _t,
  _ta,
  _te,
  _tK,
  _tP,
  _uA,
  _UAAG,
  _UAAGR,
  _UAAGRp,
  _UAp,
  _UAR,
  _UARp,
  _v,
  n0,
} from "./schemas_0";
import { GuardrailConfiguration } from "./schemas_11_Flow";

/* eslint no-var: 0 */

export var BasePromptTemplate = sim(n0, _BPT, 0, 8);
export var Instruction = sim(n0, _I, 0, 8);
export var Payload = sim(n0, _P, 0, 8);
export var Agent = struct(
  n0,
  _A,
  0,
  [
    _aI,
    _aN,
    _aA,
    _aV,
    _cT,
    _i,
    _aS,
    _fM,
    _d,
    _oT,
    _cO,
    _iSTTLIS,
    _aRRA,
    _cEKA,
    _cA,
    _uA,
    _pA,
    _fR,
    _rA,
    _pOC,
    _gC,
    _mC,
    _aC,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    [() => Instruction, 0],
    0,
    0,
    0,
    0,
    () => CustomOrchestration,
    1,
    0,
    0,
    5,
    5,
    5,
    64 | 0,
    64 | 0,
    [() => PromptOverrideConfiguration, 0],
    () => GuardrailConfiguration,
    () => MemoryConfiguration,
    0,
  ]
);
export var AgentActionGroup = struct(
  n0,
  _AAG,
  0,
  [_aI, _aV, _aGI, _aGN, _cT, _d, _cA, _uA, _pAS, _pAGSP, _aGE, _aSp, _fS, _aGS],
  [0, 0, 0, 0, 0, 0, 5, 5, 0, 128 | 0, () => ActionGroupExecutor, [() => APISchema, 0], () => FunctionSchema, 0]
);
export var AgentVersion = struct(
  n0,
  _AV,
  0,
  [_aI, _aN, _aA, _v, _i, _aS, _fM, _d, _iSTTLIS, _aRRA, _cEKA, _cA, _uA, _fR, _rA, _pOC, _gC, _mC, _aC],
  [
    0,
    0,
    0,
    0,
    [() => Instruction, 0],
    0,
    0,
    0,
    1,
    0,
    0,
    5,
    5,
    64 | 0,
    64 | 0,
    [() => PromptOverrideConfiguration, 0],
    () => GuardrailConfiguration,
    () => MemoryConfiguration,
    0,
  ]
);
export var CreateAgentActionGroupRequest = struct(
  n0,
  _CAAGR,
  0,
  [_aI, _aV, _aGN, _cT, _d, _pAGS, _pAGSP, _aGE, _aSp, _aGS, _fS],
  [[0, 1], [0, 1], 0, [0, 4], 0, 0, 128 | 0, () => ActionGroupExecutor, [() => APISchema, 0], 0, () => FunctionSchema]
);
export var CreateAgentActionGroupResponse = struct(n0, _CAAGRr, 0, [_aAG], [[() => AgentActionGroup, 0]]);
export var CreateAgentRequest = struct(
  n0,
  _CAR,
  0,
  [_aN, _cT, _i, _fM, _d, _oT, _cO, _iSTTLIS, _aRRA, _cEKA, _ta, _pOC, _gC, _mC, _aC],
  [
    0,
    [0, 4],
    [() => Instruction, 0],
    0,
    0,
    0,
    () => CustomOrchestration,
    1,
    0,
    0,
    128 | 0,
    [() => PromptOverrideConfiguration, 0],
    () => GuardrailConfiguration,
    () => MemoryConfiguration,
    0,
  ]
);
export var CreateAgentResponse = struct(n0, _CARr, 0, [_a], [[() => Agent, 0]]);
export var CustomOrchestration = struct(n0, _CO, 0, [_ex], [() => OrchestrationExecutor]);
export var Function = struct(n0, _F, 0, [_n, _d, _p, _rCe], [0, 0, () => ParameterMap, 0]);
export var GetAgentActionGroupRequest = struct(
  n0,
  _GAAGR,
  0,
  [_aI, _aV, _aGI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetAgentActionGroupResponse = struct(n0, _GAAGRe, 0, [_aAG], [[() => AgentActionGroup, 0]]);
export var GetAgentRequest = struct(n0, _GAR, 0, [_aI], [[0, 1]]);
export var GetAgentResponse = struct(n0, _GARe, 0, [_a], [[() => Agent, 0]]);
export var GetAgentVersionRequest = struct(
  n0,
  _GAVR,
  0,
  [_aI, _aV],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetAgentVersionResponse = struct(n0, _GAVRe, 0, [_aV], [[() => AgentVersion, 0]]);
export var InferenceConfiguration = struct(n0, _ICn, 0, [_te, _tP, _tK, _mL, _sS], [1, 1, 1, 1, 64 | 0]);
export var MemoryConfiguration = struct(n0, _MC, 0, [_eMT, _sDt, _sSC], [64 | 0, 1, () => SessionSummaryConfiguration]);
export var ParameterDetail = struct(n0, _PD, 0, [_d, _t, _re], [0, 0, 2]);
export var PromptConfiguration = struct(
  n0,
  _PCr,
  0,
  [_pTro, _pCM, _pSr, _bPT, _iCn, _pMa, _fM, _aMRF],
  [0, 0, 0, [() => BasePromptTemplate, 0], () => InferenceConfiguration, 0, 0, 15]
);
export var PromptOverrideConfiguration = struct(n0, _POC, 8, [_pCr, _oL], [[() => PromptConfigurations, 0], 0]);
export var S3Identifier = struct(n0, _SI, 0, [_sBN, _sOK], [0, 0]);
export var SessionSummaryConfiguration = struct(n0, _SSCe, 0, [_mRS], [1]);
export var UpdateAgentActionGroupRequest = struct(
  n0,
  _UAAGR,
  0,
  [_aI, _aV, _aGI, _aGN, _d, _pAGS, _pAGSP, _aGE, _aGS, _aSp, _fS],
  [[0, 1], [0, 1], [0, 1], 0, 0, 0, 128 | 0, () => ActionGroupExecutor, 0, [() => APISchema, 0], () => FunctionSchema]
);
export var UpdateAgentActionGroupResponse = struct(n0, _UAAGRp, 0, [_aAG], [[() => AgentActionGroup, 0]]);
export var UpdateAgentRequest = struct(
  n0,
  _UAR,
  0,
  [_aI, _aN, _i, _fM, _d, _oT, _cO, _iSTTLIS, _aRRA, _cEKA, _pOC, _gC, _mC, _aC],
  [
    [0, 1],
    0,
    [() => Instruction, 0],
    0,
    0,
    0,
    () => CustomOrchestration,
    1,
    0,
    0,
    [() => PromptOverrideConfiguration, 0],
    () => GuardrailConfiguration,
    () => MemoryConfiguration,
    0,
  ]
);
export var UpdateAgentResponse = struct(n0, _UARp, 0, [_a], [[() => Agent, 0]]);
export var EnabledMemoryTypes = 64 | 0;

export var Functions = list(n0, _Fu, 0, () => Function);
export var PromptConfigurations = list(n0, _PCro, 0, [() => PromptConfiguration, 0]);
export var RecommendedActions = 64 | 0;

export var ActionGroupSignatureParams = 128 | 0;

export var ParameterMap = map(n0, _PM, 0, 0, () => ParameterDetail);
export var ActionGroupExecutor = uni(n0, _AGE, 0, [_lam, _cCu], [0, 0]);
export var APISchema = uni(n0, _APIS, 0, [_s_, _pa], [() => S3Identifier, [() => Payload, 0]]);
export var FunctionSchema = uni(n0, _FSu, 0, [_fu], [() => Functions]);
export var OrchestrationExecutor = uni(n0, _OE, 0, [_lam], [0]);
export var CreateAgent = op(
  n0,
  _CA,
  {
    [_h]: ["PUT", "/agents/", 202],
  },
  () => CreateAgentRequest,
  () => CreateAgentResponse
);
export var CreateAgentActionGroup = op(
  n0,
  _CAAG,
  {
    [_h]: ["PUT", "/agents/{agentId}/agentversions/{agentVersion}/actiongroups/", 200],
  },
  () => CreateAgentActionGroupRequest,
  () => CreateAgentActionGroupResponse
);
export var GetAgent = op(
  n0,
  _GAe,
  {
    [_h]: ["GET", "/agents/{agentId}/", 200],
  },
  () => GetAgentRequest,
  () => GetAgentResponse
);
export var GetAgentActionGroup = op(
  n0,
  _GAAG,
  {
    [_h]: ["GET", "/agents/{agentId}/agentversions/{agentVersion}/actiongroups/{actionGroupId}/", 200],
  },
  () => GetAgentActionGroupRequest,
  () => GetAgentActionGroupResponse
);
export var GetAgentVersion = op(
  n0,
  _GAV,
  {
    [_h]: ["GET", "/agents/{agentId}/agentversions/{agentVersion}/", 200],
  },
  () => GetAgentVersionRequest,
  () => GetAgentVersionResponse
);
export var UpdateAgent = op(
  n0,
  _UAp,
  {
    [_h]: ["PUT", "/agents/{agentId}/", 202],
  },
  () => UpdateAgentRequest,
  () => UpdateAgentResponse
);
export var UpdateAgentActionGroup = op(
  n0,
  _UAAG,
  {
    [_h]: ["PUT", "/agents/{agentId}/agentversions/{agentVersion}/actiongroups/{actionGroupId}/", 200],
  },
  () => UpdateAgentActionGroupRequest,
  () => UpdateAgentActionGroupResponse
);
