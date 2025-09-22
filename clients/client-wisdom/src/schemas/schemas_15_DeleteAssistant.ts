// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _DA, _DAR, _DARe, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAssistantRequest = struct(n0, _DAR, 0, [_aI], [[0, 1]]);
export var DeleteAssistantResponse = struct(n0, _DARe, 0, [], []);
export var DeleteAssistant = op(
  n0,
  _DA,
  {
    [_ht]: ["DELETE", "/assistants/{assistantId}", 204],
  },
  () => DeleteAssistantRequest,
  () => DeleteAssistantResponse
);
