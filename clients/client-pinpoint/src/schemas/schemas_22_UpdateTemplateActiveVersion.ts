// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _MB, _TAVR, _TNe, _TT, _UTAV, _UTAVR, _UTAVRp, _V, MessageBody, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var TemplateActiveVersionRequest = struct(n0, _TAVR, 0, [_V], [0]);
export var UpdateTemplateActiveVersionRequest = struct(
  n0,
  _UTAVR,
  0,
  [_TAVR, _TNe, _TT],
  [
    [() => TemplateActiveVersionRequest, 16],
    [0, 1],
    [0, 1],
  ]
);
export var UpdateTemplateActiveVersionResponse = struct(n0, _UTAVRp, 0, [_MB], [[() => MessageBody, 16]]);
export var UpdateTemplateActiveVersion = op(
  n0,
  _UTAV,
  {
    [_h]: ["PUT", "/v1/templates/{TemplateName}/{TemplateType}/active-version", 200],
  },
  () => UpdateTemplateActiveVersionRequest,
  () => UpdateTemplateActiveVersionResponse
);
