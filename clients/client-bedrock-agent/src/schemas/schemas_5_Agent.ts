// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _AA,
  _aAA,
  _AAC,
  _AACR,
  _AACRs,
  _aAg,
  _AAHE,
  _aAHE,
  _AAHEg,
  _aAI,
  _aAl,
  _aAN,
  _aAS,
  _AC,
  _aCg,
  _ACS,
  _aCS,
  _ACSg,
  _AD,
  _aD,
  _aI,
  _aIg,
  _aIS,
  _aMRF,
  _ar,
  _aV,
  _cA,
  _CAA,
  _CAAR,
  _CAARr,
  _cEKA,
  _CI,
  _cI,
  _cIo,
  _cN,
  _CP,
  _CPR,
  _CPRr,
  _CPV,
  _CPVR,
  _CPVRr,
  _cT,
  _d,
  _dV,
  _eD,
  _fR,
  _GAA,
  _GAAR,
  _GAARe,
  _GAC,
  _GACR,
  _GACRe,
  _gAR,
  _GP,
  _GPR,
  _GPRe,
  _h,
  _hQ,
  _iCn,
  _id,
  _k,
  _LAC,
  _LACR,
  _LACRi,
  _lUA,
  _meta,
  _mI,
  _mR,
  _n,
  _nT,
  _PARro,
  _PGAR,
  _pI,
  _PME,
  _PMK,
  _PML,
  _PMV,
  _PV,
  _pV,
  _PVL,
  _rC,
  _rCH,
  _sD,
  _ta,
  _tCem,
  _tT,
  _uA,
  _UAA,
  _UAAR,
  _UAARp,
  _UAC,
  _UACR,
  _UACRp,
  _UP,
  _UPR,
  _UPRp,
  _v,
  _va,
  _value,
  n0,
} from "./schemas_0";
import { AgentAliasRoutingConfiguration } from "./schemas_8_Agent";
import { PromptInferenceConfiguration, PromptTemplateConfiguration } from "./schemas_10_Flow";

/* eslint no-var: 0 */

export var CollaborationInstruction = sim(n0, _CI, 0, 8);
export var PromptMetadataKey = sim(n0, _PMK, 0, 8);
export var PromptMetadataValue = sim(n0, _PMV, 0, 8);
export var AgentAlias = struct(
  n0,
  _AA,
  0,
  [_aI, _aAI, _aAN, _aAA, _cT, _d, _rC, _cA, _uA, _aAHE, _aAS, _fR, _aIS],
  [0, 0, 0, 0, 0, 0, () => AgentAliasRoutingConfiguration, 5, 5, () => AgentAliasHistoryEvents, 0, 64 | 0, 0]
);
export var AgentAliasHistoryEvent = struct(n0, _AAHE, 0, [_rC, _eD, _sD], [() => AgentAliasRoutingConfiguration, 5, 5]);
export var AgentCollaborator = struct(
  n0,
  _AC,
  0,
  [_aI, _aV, _aD, _cI, _cIo, _cN, _cA, _lUA, _rCH, _cT],
  [0, 0, () => AgentDescriptor, 0, [() => CollaborationInstruction, 0], 0, 5, 5, 0, 0]
);
export var AgentCollaboratorSummary = struct(
  n0,
  _ACS,
  0,
  [_aI, _aV, _cI, _aD, _cIo, _rCH, _cN, _cA, _lUA],
  [0, 0, 0, () => AgentDescriptor, [() => CollaborationInstruction, 0], 0, 0, 5, 5]
);
export var AgentDescriptor = struct(n0, _AD, 0, [_aAl], [0]);
export var AssociateAgentCollaboratorRequest = struct(
  n0,
  _AACR,
  0,
  [_aI, _aV, _aD, _cN, _cIo, _rCH, _cT],
  [[0, 1], [0, 1], () => AgentDescriptor, 0, [() => CollaborationInstruction, 0], 0, [0, 4]]
);
export var AssociateAgentCollaboratorResponse = struct(n0, _AACRs, 0, [_aCg], [[() => AgentCollaborator, 0]]);
export var CreateAgentAliasRequest = struct(
  n0,
  _CAAR,
  0,
  [_aI, _aAN, _cT, _d, _rC, _ta],
  [[0, 1], 0, [0, 4], 0, () => AgentAliasRoutingConfiguration, 128 | 0]
);
export var CreateAgentAliasResponse = struct(n0, _CAARr, 0, [_aAg], [() => AgentAlias]);
export var CreatePromptRequest = struct(
  n0,
  _CPR,
  0,
  [_n, _d, _cEKA, _dV, _va, _cT, _ta],
  [0, 0, 0, 0, [() => PromptVariantList, 0], [0, 4], 128 | 0]
);
export var CreatePromptResponse = struct(
  n0,
  _CPRr,
  0,
  [_n, _d, _cEKA, _dV, _va, _id, _ar, _v, _cA, _uA],
  [0, 0, 0, 0, [() => PromptVariantList, 0], 0, 0, 0, 5, 5]
);
export var CreatePromptVersionRequest = struct(n0, _CPVR, 0, [_pI, _d, _cT, _ta], [[0, 1], 0, [0, 4], 128 | 0]);
export var CreatePromptVersionResponse = struct(
  n0,
  _CPVRr,
  0,
  [_n, _d, _cEKA, _dV, _va, _id, _ar, _v, _cA, _uA],
  [0, 0, 0, 0, [() => PromptVariantList, 0], 0, 0, 0, 5, 5]
);
export var GetAgentAliasRequest = struct(
  n0,
  _GAAR,
  0,
  [_aI, _aAI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetAgentAliasResponse = struct(n0, _GAARe, 0, [_aAg], [() => AgentAlias]);
export var GetAgentCollaboratorRequest = struct(
  n0,
  _GACR,
  0,
  [_aI, _aV, _cI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetAgentCollaboratorResponse = struct(n0, _GACRe, 0, [_aCg], [[() => AgentCollaborator, 0]]);
export var GetPromptRequest = struct(
  n0,
  _GPR,
  0,
  [_pI, _pV],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _pV,
      },
    ],
  ]
);
export var GetPromptResponse = struct(
  n0,
  _GPRe,
  0,
  [_n, _d, _cEKA, _dV, _va, _id, _ar, _v, _cA, _uA],
  [0, 0, 0, 0, [() => PromptVariantList, 0], 0, 0, 0, 5, 5]
);
export var ListAgentCollaboratorsRequest = struct(n0, _LACR, 0, [_aI, _aV, _mR, _nT], [[0, 1], [0, 1], 1, 0]);
export var ListAgentCollaboratorsResponse = struct(
  n0,
  _LACRi,
  0,
  [_aCS, _nT],
  [[() => AgentCollaboratorSummaries, 0], 0]
);
export var PromptAgentResource = struct(n0, _PARro, 8, [_aIg], [0]);
export var PromptMetadataEntry = struct(
  n0,
  _PME,
  8,
  [_k, _value],
  [
    [() => PromptMetadataKey, 0],
    [() => PromptMetadataValue, 0],
  ]
);
export var PromptVariant = struct(
  n0,
  _PV,
  8,
  [_n, _tT, _tCem, _mI, _iCn, _meta, _aMRF, _gAR],
  [
    0,
    0,
    [() => PromptTemplateConfiguration, 0],
    0,
    () => PromptInferenceConfiguration,
    [() => PromptMetadataList, 0],
    15,
    [() => PromptGenAiResource, 0],
  ]
);
export var UpdateAgentAliasRequest = struct(
  n0,
  _UAAR,
  0,
  [_aI, _aAI, _aAN, _d, _rC, _aIS],
  [[0, 1], [0, 1], 0, 0, () => AgentAliasRoutingConfiguration, 0]
);
export var UpdateAgentAliasResponse = struct(n0, _UAARp, 0, [_aAg], [() => AgentAlias]);
export var UpdateAgentCollaboratorRequest = struct(
  n0,
  _UACR,
  0,
  [_aI, _aV, _cI, _aD, _cN, _cIo, _rCH],
  [[0, 1], [0, 1], [0, 1], () => AgentDescriptor, 0, [() => CollaborationInstruction, 0], 0]
);
export var UpdateAgentCollaboratorResponse = struct(n0, _UACRp, 0, [_aCg], [[() => AgentCollaborator, 0]]);
export var UpdatePromptRequest = struct(
  n0,
  _UPR,
  0,
  [_n, _d, _cEKA, _dV, _va, _pI],
  [0, 0, 0, 0, [() => PromptVariantList, 0], [0, 1]]
);
export var UpdatePromptResponse = struct(
  n0,
  _UPRp,
  0,
  [_n, _d, _cEKA, _dV, _va, _id, _ar, _v, _cA, _uA],
  [0, 0, 0, 0, [() => PromptVariantList, 0], 0, 0, 0, 5, 5]
);
export var AgentAliasHistoryEvents = list(n0, _AAHEg, 0, () => AgentAliasHistoryEvent);
export var AgentCollaboratorSummaries = list(n0, _ACSg, 0, [() => AgentCollaboratorSummary, 0]);
export var PromptMetadataList = list(n0, _PML, 8, [() => PromptMetadataEntry, 0]);
export var PromptVariantList = list(n0, _PVL, 8, [() => PromptVariant, 0]);
export var PromptGenAiResource = uni(n0, _PGAR, 8, [_a], [[() => PromptAgentResource, 0]]);
export var AssociateAgentCollaborator = op(
  n0,
  _AAC,
  {
    [_h]: ["PUT", "/agents/{agentId}/agentversions/{agentVersion}/agentcollaborators/", 200],
  },
  () => AssociateAgentCollaboratorRequest,
  () => AssociateAgentCollaboratorResponse
);
export var CreateAgentAlias = op(
  n0,
  _CAA,
  {
    [_h]: ["PUT", "/agents/{agentId}/agentaliases/", 202],
  },
  () => CreateAgentAliasRequest,
  () => CreateAgentAliasResponse
);
export var CreatePrompt = op(
  n0,
  _CP,
  {
    [_h]: ["POST", "/prompts/", 201],
  },
  () => CreatePromptRequest,
  () => CreatePromptResponse
);
export var CreatePromptVersion = op(
  n0,
  _CPV,
  {
    [_h]: ["POST", "/prompts/{promptIdentifier}/versions", 201],
  },
  () => CreatePromptVersionRequest,
  () => CreatePromptVersionResponse
);
export var GetAgentAlias = op(
  n0,
  _GAA,
  {
    [_h]: ["GET", "/agents/{agentId}/agentaliases/{agentAliasId}/", 200],
  },
  () => GetAgentAliasRequest,
  () => GetAgentAliasResponse
);
export var GetAgentCollaborator = op(
  n0,
  _GAC,
  {
    [_h]: ["GET", "/agents/{agentId}/agentversions/{agentVersion}/agentcollaborators/{collaboratorId}/", 200],
  },
  () => GetAgentCollaboratorRequest,
  () => GetAgentCollaboratorResponse
);
export var GetPrompt = op(
  n0,
  _GP,
  {
    [_h]: ["GET", "/prompts/{promptIdentifier}/", 200],
  },
  () => GetPromptRequest,
  () => GetPromptResponse
);
export var ListAgentCollaborators = op(
  n0,
  _LAC,
  {
    [_h]: ["POST", "/agents/{agentId}/agentversions/{agentVersion}/agentcollaborators/", 200],
  },
  () => ListAgentCollaboratorsRequest,
  () => ListAgentCollaboratorsResponse
);
export var UpdateAgentAlias = op(
  n0,
  _UAA,
  {
    [_h]: ["PUT", "/agents/{agentId}/agentaliases/{agentAliasId}/", 202],
  },
  () => UpdateAgentAliasRequest,
  () => UpdateAgentAliasResponse
);
export var UpdateAgentCollaborator = op(
  n0,
  _UAC,
  {
    [_h]: ["PUT", "/agents/{agentId}/agentversions/{agentVersion}/agentcollaborators/{collaboratorId}/", 200],
  },
  () => UpdateAgentCollaboratorRequest,
  () => UpdateAgentCollaboratorResponse
);
export var UpdatePrompt = op(
  n0,
  _UP,
  {
    [_h]: ["PUT", "/prompts/{promptIdentifier}/", 200],
  },
  () => UpdatePromptRequest,
  () => UpdatePromptResponse
);
