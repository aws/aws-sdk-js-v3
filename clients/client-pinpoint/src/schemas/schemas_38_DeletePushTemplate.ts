// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPT, _DPTR, _DPTRe, _h, _hQ, _MB, _TNe, _V, _v, MessageBody, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePushTemplateRequest = struct(
  n0,
  _DPTR,
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
export var DeletePushTemplateResponse = struct(n0, _DPTRe, 0, [_MB], [[() => MessageBody, 16]]);
export var DeletePushTemplate = op(
  n0,
  _DPT,
  {
    [_h]: ["DELETE", "/v1/templates/{TemplateName}/push", 202],
  },
  () => DeletePushTemplateRequest,
  () => DeletePushTemplateResponse
);
