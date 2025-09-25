// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _kBI, _RKBTU, _RKBTUR, _RKBTURe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RemoveKnowledgeBaseTemplateUriRequest = struct(n0, _RKBTUR, 0, [_kBI], [[0, 1]]);
export var RemoveKnowledgeBaseTemplateUriResponse = struct(n0, _RKBTURe, 0, [], []);
export var RemoveKnowledgeBaseTemplateUri = op(
  n0,
  _RKBTU,
  {
    [_ht]: ["DELETE", "/knowledgeBases/{knowledgeBaseId}/templateUri", 204],
  },
  () => RemoveKnowledgeBaseTemplateUriRequest,
  () => RemoveKnowledgeBaseTemplateUriResponse
);
