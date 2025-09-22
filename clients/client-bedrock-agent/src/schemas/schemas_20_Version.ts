// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DP, _DPR, _DPRe, _h, _hQ, _id, _pI, _pV, _v, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePromptRequest = struct(
  n0,
  _DPR,
  0,
  [_pI, _pV],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _pV,
      },
    ],
  ]
);
export var DeletePromptResponse = struct(n0, _DPRe, 0, [_id, _v], [0, 0]);
export var DeletePrompt = op(
  n0,
  _DP,
  {
    [_h]: ["DELETE", "/prompts/{promptIdentifier}/", 200],
  },
  () => DeletePromptRequest,
  () => DeletePromptResponse
);
