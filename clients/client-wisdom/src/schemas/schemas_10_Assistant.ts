// smithy-typescript generated code
import { op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aA,
  _aAA,
  _AAD,
  _aAI,
  _AAOD,
  _aAs,
  _aD,
  _aI,
  _aT,
  _GAA,
  _GAAR,
  _GAARe,
  _ht,
  _kBA,
  _KBAD,
  _kBAn,
  _kBI,
  _t,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssistantAssociationData = struct(
  n0,
  _AAD,
  0,
  [_aAI, _aAA, _aI, _aA, _aT, _aD, _t],
  [0, 0, 0, 0, 0, () => AssistantAssociationOutputData, 128 | 0]
);
export var GetAssistantAssociationRequest = struct(
  n0,
  _GAAR,
  0,
  [_aAI, _aI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetAssistantAssociationResponse = struct(n0, _GAARe, 0, [_aAs], [() => AssistantAssociationData]);
export var KnowledgeBaseAssociationData = struct(n0, _KBAD, 0, [_kBI, _kBA], [0, 0]);
export var AssistantAssociationOutputData = uni(n0, _AAOD, 0, [_kBAn], [() => KnowledgeBaseAssociationData]);
export var GetAssistantAssociation = op(
  n0,
  _GAA,
  {
    [_ht]: ["GET", "/assistants/{assistantId}/associations/{assistantAssociationId}", 200],
  },
  () => GetAssistantAssociationRequest,
  () => GetAssistantAssociationResponse
);
