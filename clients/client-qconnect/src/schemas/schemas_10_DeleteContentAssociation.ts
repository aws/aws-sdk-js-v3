// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cAI, _cI, _DCA, _DCAR, _DCARe, _htt, _kBI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteContentAssociationRequest = struct(
  n0,
  _DCAR,
  0,
  [_kBI, _cI, _cAI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteContentAssociationResponse = struct(n0, _DCARe, 0, [], []);
export var DeleteContentAssociation = op(
  n0,
  _DCA,
  {
    [_htt]: [
      "DELETE",
      "/knowledgeBases/{knowledgeBaseId}/contents/{contentId}/associations/{contentAssociationId}",
      204,
    ],
  },
  () => DeleteContentAssociationRequest,
  () => DeleteContentAssociationResponse
);
