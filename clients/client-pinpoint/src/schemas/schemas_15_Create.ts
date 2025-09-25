// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _CET,
  _CETR,
  _CETRr,
  _CPT,
  _CPTR,
  _CPTRr,
  _CST,
  _CSTR,
  _CSTRr,
  _CTMB,
  _CVT,
  _CVTR,
  _CVTRr,
  _ETR,
  _h,
  _M,
  _PNTR,
  _RID,
  _SMSTR,
  _TNe,
  _VTR,
  n0,
} from "./schemas_0";
import { PushNotificationTemplateRequest } from "./schemas_30_Push";
import { EmailTemplateRequest } from "./schemas_34_Email";
import { VoiceTemplateRequest } from "./schemas_40_Voice";
import { SMSTemplateRequest } from "./schemas_46_Sms";

/* eslint no-var: 0 */

export var CreateEmailTemplateRequest = struct(
  n0,
  _CETR,
  0,
  [_ETR, _TNe],
  [
    [() => EmailTemplateRequest, 16],
    [0, 1],
  ]
);
export var CreateEmailTemplateResponse = struct(n0, _CETRr, 0, [_CTMB], [[() => CreateTemplateMessageBody, 16]]);
export var CreatePushTemplateRequest = struct(
  n0,
  _CPTR,
  0,
  [_PNTR, _TNe],
  [
    [() => PushNotificationTemplateRequest, 16],
    [0, 1],
  ]
);
export var CreatePushTemplateResponse = struct(n0, _CPTRr, 0, [_CTMB], [[() => CreateTemplateMessageBody, 16]]);
export var CreateSmsTemplateRequest = struct(
  n0,
  _CSTR,
  0,
  [_SMSTR, _TNe],
  [
    [() => SMSTemplateRequest, 16],
    [0, 1],
  ]
);
export var CreateSmsTemplateResponse = struct(n0, _CSTRr, 0, [_CTMB], [[() => CreateTemplateMessageBody, 16]]);
export var CreateTemplateMessageBody = struct(n0, _CTMB, 0, [_Ar, _M, _RID], [0, 0, 0]);
export var CreateVoiceTemplateRequest = struct(
  n0,
  _CVTR,
  0,
  [_TNe, _VTR],
  [
    [0, 1],
    [() => VoiceTemplateRequest, 16],
  ]
);
export var CreateVoiceTemplateResponse = struct(n0, _CVTRr, 0, [_CTMB], [[() => CreateTemplateMessageBody, 16]]);
export var CreateEmailTemplate = op(
  n0,
  _CET,
  {
    [_h]: ["POST", "/v1/templates/{TemplateName}/email", 201],
  },
  () => CreateEmailTemplateRequest,
  () => CreateEmailTemplateResponse
);
export var CreatePushTemplate = op(
  n0,
  _CPT,
  {
    [_h]: ["POST", "/v1/templates/{TemplateName}/push", 201],
  },
  () => CreatePushTemplateRequest,
  () => CreatePushTemplateResponse
);
export var CreateSmsTemplate = op(
  n0,
  _CST,
  {
    [_h]: ["POST", "/v1/templates/{TemplateName}/sms", 201],
  },
  () => CreateSmsTemplateRequest,
  () => CreateSmsTemplateResponse
);
export var CreateVoiceTemplate = op(
  n0,
  _CVT,
  {
    [_h]: ["POST", "/v1/templates/{TemplateName}/voice", 201],
  },
  () => CreateVoiceTemplateRequest,
  () => CreateVoiceTemplateResponse
);
