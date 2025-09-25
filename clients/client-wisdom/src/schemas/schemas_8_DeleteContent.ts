// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cI, _DC, _DCR, _DCRe, _ht, _kBI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteContentRequest = struct(
  n0,
  _DCR,
  0,
  [_kBI, _cI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteContentResponse = struct(n0, _DCRe, 0, [], []);
export var DeleteContent = op(
  n0,
  _DC,
  {
    [_ht]: ["DELETE", "/knowledgeBases/{knowledgeBaseId}/contents/{contentId}", 204],
  },
  () => DeleteContentRequest,
  () => DeleteContentResponse
);
