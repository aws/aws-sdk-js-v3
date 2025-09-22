// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DVT, _DVTR, _DVTRe, _h, _hQ, _MB, _TNe, _V, _v, MessageBody, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVoiceTemplateRequest = struct(
  n0,
  _DVTR,
  0,
  [_TNe, _V],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _v,
      },
    ],
  ]
);
export var DeleteVoiceTemplateResponse = struct(n0, _DVTRe, 0, [_MB], [[() => MessageBody, 16]]);
export var DeleteVoiceTemplate = op(
  n0,
  _DVT,
  {
    [_h]: ["DELETE", "/v1/templates/{TemplateName}/voice", 202],
  },
  () => DeleteVoiceTemplateRequest,
  () => DeleteVoiceTemplateResponse
);
