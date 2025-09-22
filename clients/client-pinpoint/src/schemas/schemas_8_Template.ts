// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ADM,
  _APNS,
  _Ar,
  _B,
  _Bai,
  _CD,
  _Defa,
  _DSe,
  _ETRm,
  _GCM,
  _GET,
  _GETR,
  _GETRe,
  _GPT,
  _GPTR,
  _GPTRe,
  _GST,
  _GSTR,
  _GSTRe,
  _GVT,
  _GVTR,
  _GVTRe,
  _h,
  _He,
  _HPt,
  _hQ,
  _I,
  _jN,
  _LC,
  _LMD,
  _LOTR,
  _LTi,
  _LTR,
  _LTRi,
  _NT,
  _nt,
  _p,
  _PNTRu,
  _Pre,
  _PS,
  _ps,
  _RI,
  _SMSTRe,
  _Sub,
  _t,
  _TDe,
  _TNe,
  _TP,
  _TR,
  _TRe,
  _TT,
  _tt,
  _V,
  _v,
  _VI,
  _VTRo,
  n0,
} from "./schemas_0";
import {
  AndroidPushNotificationTemplate,
  APNSPushNotificationTemplate,
  DefaultPushNotificationTemplate,
} from "./schemas_30_Push";
import { ListOfMessageHeader } from "./schemas_42_Campaign";

/* eslint no-var: 0 */

export var EmailTemplateResponse = struct(
  n0,
  _ETRm,
  0,
  [_Ar, _CD, _DSe, _HPt, _LMD, _RI, _Sub, _He, _t, _TDe, _TNe, _TT, _TP, _V],
  [
    0,
    0,
    0,
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
    0,
    0,
    0,
  ]
);
export var GetEmailTemplateRequest = struct(
  n0,
  _GETR,
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
export var GetEmailTemplateResponse = struct(n0, _GETRe, 0, [_ETRm], [[() => EmailTemplateResponse, 16]]);
export var GetPushTemplateRequest = struct(
  n0,
  _GPTR,
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
export var GetPushTemplateResponse = struct(n0, _GPTRe, 0, [_PNTRu], [[() => PushNotificationTemplateResponse, 16]]);
export var GetSmsTemplateRequest = struct(
  n0,
  _GSTR,
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
export var GetSmsTemplateResponse = struct(n0, _GSTRe, 0, [_SMSTRe], [[() => SMSTemplateResponse, 16]]);
export var GetVoiceTemplateRequest = struct(
  n0,
  _GVTR,
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
export var GetVoiceTemplateResponse = struct(n0, _GVTRe, 0, [_VTRo], [[() => VoiceTemplateResponse, 16]]);
export var ListTemplatesRequest = struct(
  n0,
  _LTR,
  0,
  [_NT, _PS, _Pre, _TT],
  [
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      0,
      {
        [_hQ]: _ps,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      0,
      {
        [_hQ]: _tt,
      },
    ],
  ]
);
export var ListTemplatesResponse = struct(n0, _LTRi, 0, [_TR], [[() => TemplatesResponse, 16]]);
export var PushNotificationTemplateResponse = struct(
  n0,
  _PNTRu,
  0,
  [_ADM, _APNS, _Ar, _Bai, _CD, _Defa, _DSe, _GCM, _LMD, _RI, _t, _TDe, _TNe, _TT, _V],
  [
    () => AndroidPushNotificationTemplate,
    () => APNSPushNotificationTemplate,
    0,
    () => AndroidPushNotificationTemplate,
    0,
    () => DefaultPushNotificationTemplate,
    0,
    () => AndroidPushNotificationTemplate,
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
    0,
    0,
  ]
);
export var SMSTemplateResponse = struct(
  n0,
  _SMSTRe,
  0,
  [_Ar, _B, _CD, _DSe, _LMD, _RI, _t, _TDe, _TNe, _TT, _V],
  [
    0,
    0,
    0,
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
    0,
    0,
  ]
);
export var TemplateResponse = struct(
  n0,
  _TRe,
  0,
  [_Ar, _CD, _DSe, _LMD, _t, _TDe, _TNe, _TT, _V],
  [
    0,
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
    0,
    0,
  ]
);
export var TemplatesResponse = struct(n0, _TR, 0, [_I, _NT], [[() => ListOfTemplateResponse, 0], 0]);
export var VoiceTemplateResponse = struct(
  n0,
  _VTRo,
  0,
  [_Ar, _B, _CD, _DSe, _LC, _LMD, _t, _TDe, _TNe, _TT, _V, _VI],
  [
    0,
    0,
    0,
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
    0,
    0,
    0,
  ]
);
export var ListOfTemplateResponse = list(n0, _LOTR, 0, [() => TemplateResponse, 0]);
export var GetEmailTemplate = op(
  n0,
  _GET,
  {
    [_h]: ["GET", "/v1/templates/{TemplateName}/email", 200],
  },
  () => GetEmailTemplateRequest,
  () => GetEmailTemplateResponse
);
export var GetPushTemplate = op(
  n0,
  _GPT,
  {
    [_h]: ["GET", "/v1/templates/{TemplateName}/push", 200],
  },
  () => GetPushTemplateRequest,
  () => GetPushTemplateResponse
);
export var GetSmsTemplate = op(
  n0,
  _GST,
  {
    [_h]: ["GET", "/v1/templates/{TemplateName}/sms", 200],
  },
  () => GetSmsTemplateRequest,
  () => GetSmsTemplateResponse
);
export var GetVoiceTemplate = op(
  n0,
  _GVT,
  {
    [_h]: ["GET", "/v1/templates/{TemplateName}/voice", 200],
  },
  () => GetVoiceTemplateRequest,
  () => GetVoiceTemplateResponse
);
export var ListTemplates = op(
  n0,
  _LTi,
  {
    [_h]: ["GET", "/v1/templates", 200],
  },
  () => ListTemplatesRequest,
  () => ListTemplatesResponse
);
