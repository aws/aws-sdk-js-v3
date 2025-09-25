// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DQR, _DQRR, _DQRRe, _ht, _kBI, _qRI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteQuickResponseRequest = struct(
  n0,
  _DQRR,
  0,
  [_kBI, _qRI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteQuickResponseResponse = struct(n0, _DQRRe, 0, [], []);
export var DeleteQuickResponse = op(
  n0,
  _DQR,
  {
    [_ht]: ["DELETE", "/knowledgeBases/{knowledgeBaseId}/quickResponses/{quickResponseId}", 204],
  },
  () => DeleteQuickResponseRequest,
  () => DeleteQuickResponseResponse
);
