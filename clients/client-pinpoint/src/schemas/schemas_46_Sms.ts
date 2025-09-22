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
  _MB,
  _RI,
  _SMSTR,
  _t,
  _TDe,
  _TNe,
  _UST,
  _USTR,
  _USTRp,
  _V,
  _v,
  MessageBody,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SMSTemplateRequest = struct(
  n0,
  _SMSTR,
  0,
  [_B, _DSe, _RI, _t, _TDe],
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
  ]
);
export var UpdateSmsTemplateRequest = struct(
  n0,
  _USTR,
  0,
  [_CNV, _SMSTR, _TNe, _V],
  [
    [
      2,
      {
        [_hQ]: _cnv,
      },
    ],
    [() => SMSTemplateRequest, 16],
    [0, 1],
    [
      0,
      {
        [_hQ]: _v,
      },
    ],
  ]
);
export var UpdateSmsTemplateResponse = struct(n0, _USTRp, 0, [_MB], [[() => MessageBody, 16]]);
export var UpdateSmsTemplate = op(
  n0,
  _UST,
  {
    [_h]: ["PUT", "/v1/templates/{TemplateName}/sms", 202],
  },
  () => UpdateSmsTemplateRequest,
  () => UpdateSmsTemplateResponse
);
