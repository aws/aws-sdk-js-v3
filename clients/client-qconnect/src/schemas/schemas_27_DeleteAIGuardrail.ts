// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aGI, _aI, _DAIG, _DAIGR, _DAIGRe, _htt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAIGuardrailRequest = struct(
  n0,
  _DAIGR,
  0,
  [_aI, _aGI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteAIGuardrailResponse = struct(n0, _DAIGRe, 0, [], []);
export var DeleteAIGuardrail = op(
  n0,
  _DAIG,
  {
    [_htt]: ["DELETE", "/assistants/{assistantId}/aiguardrails/{aiGuardrailId}", 202],
  },
  () => DeleteAIGuardrailRequest,
  () => DeleteAIGuardrailResponse
);
