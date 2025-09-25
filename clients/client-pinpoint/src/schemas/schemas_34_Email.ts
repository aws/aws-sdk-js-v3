// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CNV,
  _cnv,
  _DSe,
  _ETR,
  _h,
  _He,
  _HPt,
  _hQ,
  _jN,
  _MB,
  _RI,
  _Sub,
  _t,
  _TDe,
  _TNe,
  _TP,
  _UET,
  _UETR,
  _UETRp,
  _V,
  _v,
  MessageBody,
  n0,
} from "./schemas_0";
import { ListOfMessageHeader } from "./schemas_42_Campaign";

/* eslint no-var: 0 */

export var EmailTemplateRequest = struct(
  n0,
  _ETR,
  0,
  [_DSe, _HPt, _RI, _Sub, _He, _t, _TDe, _TP],
  [
    0,
    0,
    0,
    0,
    () => ListOfMessageHeader,
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
export var UpdateEmailTemplateRequest = struct(
  n0,
  _UETR,
  0,
  [_CNV, _ETR, _TNe, _V],
  [
    [
      2,
      {
        [_hQ]: _cnv,
      },
    ],
    [() => EmailTemplateRequest, 16],
    [0, 1],
    [
      0,
      {
        [_hQ]: _v,
      },
    ],
  ]
);
export var UpdateEmailTemplateResponse = struct(n0, _UETRp, 0, [_MB], [[() => MessageBody, 16]]);
export var UpdateEmailTemplate = op(
  n0,
  _UET,
  {
    [_h]: ["PUT", "/v1/templates/{TemplateName}/email", 202],
  },
  () => UpdateEmailTemplateRequest,
  () => UpdateEmailTemplateResponse
);
