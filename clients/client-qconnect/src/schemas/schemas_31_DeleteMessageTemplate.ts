// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMTe, _DMTRel, _DMTRele, _htt, _kBI, _mTI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMessageTemplateRequest = struct(
  n0,
  _DMTRel,
  0,
  [_kBI, _mTI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteMessageTemplateResponse = struct(n0, _DMTRele, 0, [], []);
export var DeleteMessageTemplate = op(
  n0,
  _DMTe,
  {
    [_htt]: ["DELETE", "/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}", 204],
  },
  () => DeleteMessageTemplateRequest,
  () => DeleteMessageTemplateResponse
);
