// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _aA,
  _aAAs,
  _AAD,
  _AAID,
  _aAIs,
  _AAOD,
  _AAS,
  _aAs,
  _AASL,
  _aASs,
  _aD,
  _aI,
  _aT,
  _CAA,
  _CAAR,
  _CAARr,
  _cTl,
  _GAA,
  _GAAR,
  _GAARe,
  _hQ,
  _htt,
  _kBA,
  _KBAD,
  _kBAn,
  _kBI,
  _LAA,
  _LAAR,
  _LAARi,
  _mR,
  _nT,
  _ta,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssistantAssociationData = struct(
  n0,
  _AAD,
  0,
  [_aAIs, _aAAs, _aI, _aA, _aT, _aD, _ta],
  [0, 0, 0, 0, 0, () => AssistantAssociationOutputData, 128 | 0]
);
export var AssistantAssociationSummary = struct(
  n0,
  _AAS,
  0,
  [_aAIs, _aAAs, _aI, _aA, _aT, _aD, _ta],
  [0, 0, 0, 0, 0, () => AssistantAssociationOutputData, 128 | 0]
);
export var CreateAssistantAssociationRequest = struct(
  n0,
  _CAAR,
  0,
  [_aI, _aT, _a, _cTl, _ta],
  [[0, 1], 0, () => AssistantAssociationInputData, [0, 4], 128 | 0]
);
export var CreateAssistantAssociationResponse = struct(n0, _CAARr, 0, [_aAs], [() => AssistantAssociationData]);
export var GetAssistantAssociationRequest = struct(
  n0,
  _GAAR,
  0,
  [_aAIs, _aI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetAssistantAssociationResponse = struct(n0, _GAARe, 0, [_aAs], [() => AssistantAssociationData]);
export var KnowledgeBaseAssociationData = struct(n0, _KBAD, 0, [_kBI, _kBA], [0, 0]);
export var ListAssistantAssociationsRequest = struct(
  n0,
  _LAAR,
  0,
  [_nT, _mR, _aI],
  [
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
    [0, 1],
  ]
);
export var ListAssistantAssociationsResponse = struct(
  n0,
  _LAARi,
  0,
  [_aASs, _nT],
  [() => AssistantAssociationSummaryList, 0]
);
export var AssistantAssociationSummaryList = list(n0, _AASL, 0, () => AssistantAssociationSummary);
export var AssistantAssociationInputData = uni(n0, _AAID, 0, [_kBI], [0]);
export var AssistantAssociationOutputData = uni(n0, _AAOD, 0, [_kBAn], [() => KnowledgeBaseAssociationData]);
export var CreateAssistantAssociation = op(
  n0,
  _CAA,
  {
    [_htt]: ["POST", "/assistants/{assistantId}/associations", 200],
  },
  () => CreateAssistantAssociationRequest,
  () => CreateAssistantAssociationResponse
);
export var GetAssistantAssociation = op(
  n0,
  _GAA,
  {
    [_htt]: ["GET", "/assistants/{assistantId}/associations/{assistantAssociationId}", 200],
  },
  () => GetAssistantAssociationRequest,
  () => GetAssistantAssociationResponse
);
export var ListAssistantAssociations = op(
  n0,
  _LAA,
  {
    [_htt]: ["GET", "/assistants/{assistantId}/associations", 200],
  },
  () => ListAssistantAssociationsRequest,
  () => ListAssistantAssociationsResponse
);
