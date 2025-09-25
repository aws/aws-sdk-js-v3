// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aAI, _aI, _DAA, _DAAR, _DAARe, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAssistantAssociationRequest = struct(
  n0,
  _DAAR,
  0,
  [_aAI, _aI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteAssistantAssociationResponse = struct(n0, _DAARe, 0, [], []);
export var DeleteAssistantAssociation = op(
  n0,
  _DAA,
  {
    [_ht]: ["DELETE", "/assistants/{assistantId}/associations/{assistantAssociationId}", 204],
  },
  () => DeleteAssistantAssociationRequest,
  () => DeleteAssistantAssociationResponse
);
