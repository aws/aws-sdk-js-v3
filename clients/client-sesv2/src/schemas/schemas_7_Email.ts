// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { AccountSuspendedException as __AccountSuspendedException } from "../models/index";
import {
  _A,
  _AL,
  _ASE,
  _At,
  _B,
  _c,
  _CCVET,
  _CCVETR,
  _CCVETRr,
  _CD,
  _CDo,
  _CDTR,
  _CDTRR,
  _CDTRRr,
  _CET,
  _CETR,
  _CETRr,
  _Ch,
  _CI,
  _Con,
  _CT,
  _CTE,
  _CVET,
  _CVETL,
  _CVETM,
  _Da,
  _DTS,
  _e,
  _EC,
  _ETC,
  _FEA,
  _FN,
  _FRURL,
  _GCVET,
  _GCVETR,
  _GCVETRe,
  _GET,
  _GETR,
  _GETRe,
  _H,
  _h,
  _He,
  _hE,
  _hQ,
  _LCVET,
  _LCVETR,
  _LCVETRi,
  _m,
  _Me,
  _MH,
  _MHL,
  _Na,
  _NT,
  _PS,
  _Ra,
  _RC,
  _RI,
  _RM,
  _RNe,
  _Si,
  _SRURL,
  _Su,
  _T,
  _Ta,
  _TAe,
  _TC,
  _TD,
  _Te,
  _TN,
  _TS,
  _UCVET,
  _UCVETR,
  _UCVETRp,
  _UET,
  _UETR,
  _UETRp,
  _V,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccountSuspendedException = error(
  n0,
  _ASE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __AccountSuspendedException
);
export var Attachment = struct(n0, _A, 0, [_RC, _CD, _FN, _CDo, _CI, _CTE, _CT], [21, 0, 0, 0, 0, 0, 0]);
export var Body = struct(n0, _B, 0, [_T, _H], [() => Content, () => Content]);
export var Content = struct(n0, _Con, 0, [_Da, _Ch], [0, 0]);
export var CreateCustomVerificationEmailTemplateRequest = struct(
  n0,
  _CCVETR,
  0,
  [_TN, _FEA, _TS, _TC, _SRURL, _FRURL],
  [0, 0, 0, 0, 0, 0]
);
export var CreateCustomVerificationEmailTemplateResponse = struct(n0, _CCVETRr, 0, [], []);
export var CreateDeliverabilityTestReportRequest = struct(
  n0,
  _CDTRR,
  0,
  [_RNe, _FEA, _Con, _Ta],
  [0, 0, () => EmailContent, () => TagList]
);
export var CreateDeliverabilityTestReportResponse = struct(n0, _CDTRRr, 0, [_RI, _DTS], [0, 0]);
export var CreateEmailTemplateRequest = struct(n0, _CETR, 0, [_TN, _TC], [0, () => EmailTemplateContent]);
export var CreateEmailTemplateResponse = struct(n0, _CETRr, 0, [], []);
export var CustomVerificationEmailTemplateMetadata = struct(
  n0,
  _CVETM,
  0,
  [_TN, _FEA, _TS, _SRURL, _FRURL],
  [0, 0, 0, 0, 0]
);
export var EmailContent = struct(n0, _EC, 0, [_Si, _Ra, _Te], [() => Message, () => RawMessage, () => Template]);
export var EmailTemplateContent = struct(n0, _ETC, 0, [_Su, _T, _H], [0, 0, 0]);
export var GetCustomVerificationEmailTemplateRequest = struct(n0, _GCVETR, 0, [_TN], [[0, 1]]);
export var GetCustomVerificationEmailTemplateResponse = struct(
  n0,
  _GCVETRe,
  0,
  [_TN, _FEA, _TS, _TC, _SRURL, _FRURL],
  [0, 0, 0, 0, 0, 0]
);
export var GetEmailTemplateRequest = struct(n0, _GETR, 0, [_TN], [[0, 1]]);
export var GetEmailTemplateResponse = struct(n0, _GETRe, 0, [_TN, _TC], [0, () => EmailTemplateContent]);
export var ListCustomVerificationEmailTemplatesRequest = struct(
  n0,
  _LCVETR,
  0,
  [_NT, _PS],
  [
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _PS,
      },
    ],
  ]
);
export var ListCustomVerificationEmailTemplatesResponse = struct(
  n0,
  _LCVETRi,
  0,
  [_CVET, _NT],
  [() => CustomVerificationEmailTemplatesList, 0]
);
export var Message = struct(
  n0,
  _Me,
  0,
  [_Su, _B, _He, _At],
  [() => Content, () => Body, () => MessageHeaderList, () => AttachmentList]
);
export var MessageHeader = struct(n0, _MH, 0, [_Na, _V], [0, 0]);
export var RawMessage = struct(n0, _RM, 0, [_Da], [21]);
export var Template = struct(
  n0,
  _Te,
  0,
  [_TN, _TAe, _TC, _TD, _He, _At],
  [0, 0, () => EmailTemplateContent, 0, () => MessageHeaderList, () => AttachmentList]
);
export var UpdateCustomVerificationEmailTemplateRequest = struct(
  n0,
  _UCVETR,
  0,
  [_TN, _FEA, _TS, _TC, _SRURL, _FRURL],
  [[0, 1], 0, 0, 0, 0, 0]
);
export var UpdateCustomVerificationEmailTemplateResponse = struct(n0, _UCVETRp, 0, [], []);
export var UpdateEmailTemplateRequest = struct(n0, _UETR, 0, [_TN, _TC], [[0, 1], () => EmailTemplateContent]);
export var UpdateEmailTemplateResponse = struct(n0, _UETRp, 0, [], []);
export var AttachmentList = list(n0, _AL, 0, () => Attachment);
export var CustomVerificationEmailTemplatesList = list(n0, _CVETL, 0, () => CustomVerificationEmailTemplateMetadata);
export var MessageHeaderList = list(n0, _MHL, 0, () => MessageHeader);
export var CreateCustomVerificationEmailTemplate = op(
  n0,
  _CCVET,
  {
    [_h]: ["POST", "/v2/email/custom-verification-email-templates", 200],
  },
  () => CreateCustomVerificationEmailTemplateRequest,
  () => CreateCustomVerificationEmailTemplateResponse
);
export var CreateDeliverabilityTestReport = op(
  n0,
  _CDTR,
  {
    [_h]: ["POST", "/v2/email/deliverability-dashboard/test", 200],
  },
  () => CreateDeliverabilityTestReportRequest,
  () => CreateDeliverabilityTestReportResponse
);
export var CreateEmailTemplate = op(
  n0,
  _CET,
  {
    [_h]: ["POST", "/v2/email/templates", 200],
  },
  () => CreateEmailTemplateRequest,
  () => CreateEmailTemplateResponse
);
export var GetCustomVerificationEmailTemplate = op(
  n0,
  _GCVET,
  {
    [_h]: ["GET", "/v2/email/custom-verification-email-templates/{TemplateName}", 200],
  },
  () => GetCustomVerificationEmailTemplateRequest,
  () => GetCustomVerificationEmailTemplateResponse
);
export var GetEmailTemplate = op(
  n0,
  _GET,
  {
    [_h]: ["GET", "/v2/email/templates/{TemplateName}", 200],
  },
  () => GetEmailTemplateRequest,
  () => GetEmailTemplateResponse
);
export var ListCustomVerificationEmailTemplates = op(
  n0,
  _LCVET,
  {
    [_h]: ["GET", "/v2/email/custom-verification-email-templates", 200],
  },
  () => ListCustomVerificationEmailTemplatesRequest,
  () => ListCustomVerificationEmailTemplatesResponse
);
export var UpdateCustomVerificationEmailTemplate = op(
  n0,
  _UCVET,
  {
    [_h]: ["PUT", "/v2/email/custom-verification-email-templates/{TemplateName}", 200],
  },
  () => UpdateCustomVerificationEmailTemplateRequest,
  () => UpdateCustomVerificationEmailTemplateResponse
);
export var UpdateEmailTemplate = op(
  n0,
  _UET,
  {
    [_h]: ["PUT", "/v2/email/templates/{TemplateName}", 200],
  },
  () => UpdateEmailTemplateRequest,
  () => UpdateEmailTemplateResponse
);
