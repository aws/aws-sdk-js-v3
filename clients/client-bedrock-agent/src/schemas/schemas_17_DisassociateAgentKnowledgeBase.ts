// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _aV, _DAKB, _DAKBR, _DAKBRi, _h, _kBI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateAgentKnowledgeBaseRequest = struct(
  n0,
  _DAKBR,
  0,
  [_aI, _aV, _kBI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DisassociateAgentKnowledgeBaseResponse = struct(n0, _DAKBRi, 0, [], []);
export var DisassociateAgentKnowledgeBase = op(
  n0,
  _DAKB,
  {
    [_h]: ["DELETE", "/agents/{agentId}/agentversions/{agentVersion}/knowledgebases/{knowledgeBaseId}/", 204],
  },
  () => DisassociateAgentKnowledgeBaseRequest,
  () => DisassociateAgentKnowledgeBaseResponse
);
