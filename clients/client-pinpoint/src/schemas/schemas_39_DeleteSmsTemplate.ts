// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DST, _DSTR, _DSTRe, _h, _hQ, _MB, _TNe, _V, _v, MessageBody, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSmsTemplateRequest = struct(
  n0,
  _DSTR,
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
export var DeleteSmsTemplateResponse = struct(n0, _DSTRe, 0, [_MB], [[() => MessageBody, 16]]);
export var DeleteSmsTemplate = op(
  n0,
  _DST,
  {
    [_h]: ["DELETE", "/v1/templates/{TemplateName}/sms", 202],
  },
  () => DeleteSmsTemplateRequest,
  () => DeleteSmsTemplateResponse
);
