// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DKB, _DKBR, _DKBRe, _htt, _kBI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteKnowledgeBaseRequest = struct(n0, _DKBR, 0, [_kBI], [[0, 1]]);
export var DeleteKnowledgeBaseResponse = struct(n0, _DKBRe, 0, [], []);
export var DeleteKnowledgeBase = op(
  n0,
  _DKB,
  {
    [_htt]: ["DELETE", "/knowledgeBases/{knowledgeBaseId}", 204],
  },
  () => DeleteKnowledgeBaseRequest,
  () => DeleteKnowledgeBaseResponse
);
