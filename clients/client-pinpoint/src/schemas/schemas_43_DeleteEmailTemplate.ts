// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DET, _DETR, _DETRe, _h, _hQ, _MB, _TNe, _V, _v, MessageBody, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEmailTemplateRequest = struct(
  n0,
  _DETR,
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
export var DeleteEmailTemplateResponse = struct(n0, _DETRe, 0, [_MB], [[() => MessageBody, 16]]);
export var DeleteEmailTemplate = op(
  n0,
  _DET,
  {
    [_h]: ["DELETE", "/v1/templates/{TemplateName}/email", 202],
  },
  () => DeleteEmailTemplateRequest,
  () => DeleteEmailTemplateResponse
);
