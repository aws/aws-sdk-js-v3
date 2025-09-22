// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIAT, _DIATR, _DIATRe, _h, _hQ, _MB, _TNe, _V, _v, MessageBody, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteInAppTemplateRequest = struct(
  n0,
  _DIATR,
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
export var DeleteInAppTemplateResponse = struct(n0, _DIATRe, 0, [_MB], [[() => MessageBody, 16]]);
export var DeleteInAppTemplate = op(
  n0,
  _DIAT,
  {
    [_h]: ["DELETE", "/v1/templates/{TemplateName}/inapp", 202],
  },
  () => DeleteInAppTemplateRequest,
  () => DeleteInAppTemplateResponse
);
