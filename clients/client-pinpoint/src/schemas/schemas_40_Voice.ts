// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _B,
  _CNV,
  _cnv,
  _DSe,
  _h,
  _hQ,
  _jN,
  _LC,
  _MB,
  _t,
  _TDe,
  _TNe,
  _UVT,
  _UVTR,
  _UVTRp,
  _V,
  _v,
  _VI,
  _VTR,
  MessageBody,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateVoiceTemplateRequest = struct(
  n0,
  _UVTR,
  0,
  [_CNV, _TNe, _V, _VTR],
  [
    [
      2,
      {
        [_hQ]: _cnv,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _v,
      },
    ],
    [() => VoiceTemplateRequest, 16],
  ]
);
export var UpdateVoiceTemplateResponse = struct(n0, _UVTRp, 0, [_MB], [[() => MessageBody, 16]]);
export var VoiceTemplateRequest = struct(
  n0,
  _VTR,
  0,
  [_B, _DSe, _LC, _t, _TDe, _VI],
  [
    0,
    0,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    0,
    0,
  ]
);
export var UpdateVoiceTemplate = op(
  n0,
  _UVT,
  {
    [_h]: ["PUT", "/v1/templates/{TemplateName}/voice", 202],
  },
  () => UpdateVoiceTemplateRequest,
  () => UpdateVoiceTemplateResponse
);
