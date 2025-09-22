// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aGI, _aI, _DAIGV, _DAIGVR, _DAIGVRe, _htt, _vN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAIGuardrailVersionRequest = struct(
  n0,
  _DAIGVR,
  0,
  [_aI, _aGI, _vN],
  [
    [0, 1],
    [0, 1],
    [1, 1],
  ]
);
export var DeleteAIGuardrailVersionResponse = struct(n0, _DAIGVRe, 0, [], []);
export var DeleteAIGuardrailVersion = op(
  n0,
  _DAIGV,
  {
    [_htt]: ["DELETE", "/assistants/{assistantId}/aiguardrails/{aiGuardrailId}/versions/{versionNumber}", 202],
  },
  () => DeleteAIGuardrailVersionRequest,
  () => DeleteAIGuardrailVersionResponse
);
