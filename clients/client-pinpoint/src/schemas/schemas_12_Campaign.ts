// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ac,
  _ADMM,
  _AI,
  _Al,
  _An,
  _APNSM,
  _Ar,
  _ATd,
  _B,
  _BA,
  _BC,
  _BCo,
  _BM,
  _BR,
  _CCM,
  _CCR,
  _CCr,
  _CCRr,
  _CCu,
  _CD,
  _CDC,
  _CEF,
  _CEM,
  _CI,
  _CIAM,
  _CIAT,
  _CIATR,
  _CIATRr,
  _CM,
  _CNV,
  _cnv,
  _Co,
  _CR,
  _CRa,
  _CSa,
  _CSam,
  _CSM,
  _D,
  _Da,
  _DBC,
  _DC,
  _DCe,
  _DCel,
  _DCR,
  _DCRe,
  _Di,
  _DM,
  _DS,
  _DU,
  _EDnd,
  _EF,
  _EI,
  _EIn,
  _EMm,
  _ET,
  _ETn,
  _FA,
  _Fr,
  _FT,
  _GC,
  _GCe,
  _GCMM,
  _GCR,
  _GCRe,
  _GCRet,
  _GCReta,
  _GCV,
  _GCVe,
  _GCVR,
  _GCVRe,
  _GCVRet,
  _GCVReta,
  _GIAM,
  _GIAMR,
  _GIAMRe,
  _GIAT,
  _GIATR,
  _GIATRe,
  _h,
  _HB,
  _HCe,
  _He,
  _Hea,
  _Ho,
  _HP,
  _hQ,
  _I,
  _IACS,
  _IAM,
  _IAMB,
  _IAMBC,
  _IAMC,
  _IAMCn,
  _IAMCnp,
  _IAMHC,
  _IAMR,
  _IATR,
  _IATRn,
  _Id,
  _IIU,
  _ILT,
  _IOS,
  _IP,
  _ISIU,
  _IU,
  _JB,
  _jN,
  _L,
  _La,
  _Li,
  _LMD,
  _LOCR,
  _LOIAMC,
  _LOIAMCi,
  _LOTRi,
  _LOWTR,
  _M,
  _MB,
  _MCe,
  _MT,
  _MU,
  _N,
  _NT,
  _OBC,
  _ON,
  _PB,
  _Pr,
  _PS,
  _ps,
  _QT,
  _RC,
  _RID,
  _SB,
  _Sc,
  _SCe,
  _SI,
  _SIe,
  _SMSM,
  _SP,
  _SPi,
  _ST,
  _St,
  _SV,
  _T,
  _t,
  _TCe,
  _TCex,
  _TCMB,
  _TCo,
  _TD,
  _TDe,
  _Te,
  _TI,
  _Ti,
  _TIem,
  _TN,
  _TNe,
  _to,
  _Tok,
  _TRr,
  _TT,
  _TTL,
  _U,
  _UC,
  _UCR,
  _UCRp,
  _UIAT,
  _UIATR,
  _UIATRp,
  _V,
  _v,
  _WCR,
  _We,
  _WTR,
  EventDimensions,
  MessageBody,
  n0,
  QuietTime,
} from "./schemas_0";
import { CampaignHook, CampaignLimits } from "./schemas_9_Campaign";
import { ListOfMessageHeader } from "./schemas_42_Campaign";
import { TemplateConfiguration } from "./schemas_49_Campaign";

/* eslint no-var: 0 */

export var CampaignCustomMessage = struct(n0, _CCM, 0, [_Da], [0]);
export var CampaignEmailMessage = struct(n0, _CEM, 0, [_B, _FA, _He, _HB, _T], [0, 0, () => ListOfMessageHeader, 0, 0]);
export var CampaignEventFilter = struct(n0, _CEF, 0, [_Di, _FT], [() => EventDimensions, 0]);
export var CampaignInAppMessage = struct(
  n0,
  _CIAM,
  0,
  [_B, _Co, _CCu, _La],
  [0, () => ListOfInAppMessageContent, 128 | 0, 0]
);
export var CampaignResponse = struct(
  n0,
  _CR,
  0,
  [
    _ATd,
    _AI,
    _Ar,
    _CD,
    _CDC,
    _DS,
    _D,
    _HP,
    _Ho,
    _Id,
    _IP,
    _LMD,
    _L,
    _MCe,
    _N,
    _Sc,
    _SI,
    _SV,
    _St,
    _t,
    _TCe,
    _TD,
    _TN,
    _V,
    _Pr,
  ],
  [
    () => ListOfTreatmentResource,
    0,
    0,
    0,
    () => CustomDeliveryConfiguration,
    () => CampaignState,
    0,
    1,
    () => CampaignHook,
    0,
    2,
    0,
    () => CampaignLimits,
    () => MessageConfiguration,
    0,
    () => Schedule,
    0,
    1,
    () => CampaignState,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    () => TemplateConfiguration,
    0,
    0,
    1,
    1,
  ]
);
export var CampaignSmsMessage = struct(n0, _CSM, 0, [_B, _MT, _ON, _SIe, _EI, _TIem], [0, 0, 0, 0, 0, 0]);
export var CampaignsResponse = struct(n0, _CRa, 0, [_I, _NT], [[() => ListOfCampaignResponse, 0], 0]);
export var CampaignState = struct(n0, _CSa, 0, [_CSam], [0]);
export var CreateCampaignRequest = struct(
  n0,
  _CCR,
  0,
  [_AI, _WCR],
  [
    [0, 1],
    [() => WriteCampaignRequest, 16],
  ]
);
export var CreateCampaignResponse = struct(n0, _CCRr, 0, [_CR], [[() => CampaignResponse, 16]]);
export var CreateInAppTemplateRequest = struct(
  n0,
  _CIATR,
  0,
  [_IATR, _TNe],
  [
    [() => InAppTemplateRequest, 16],
    [0, 1],
  ]
);
export var CreateInAppTemplateResponse = struct(n0, _CIATRr, 0, [_TCMB], [[() => TemplateCreateMessageBody, 16]]);
export var CustomDeliveryConfiguration = struct(n0, _CDC, 0, [_DU, _ETn], [0, 64 | 0]);
export var DefaultButtonConfiguration = struct(n0, _DBC, 0, [_BC, _BR, _BA, _Li, _Te, _TCex], [0, 1, 0, 0, 0, 0]);
export var DeleteCampaignRequest = struct(
  n0,
  _DCR,
  0,
  [_AI, _CI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteCampaignResponse = struct(n0, _DCRe, 0, [_CR], [[() => CampaignResponse, 16]]);
export var GetCampaignRequest = struct(
  n0,
  _GCR,
  0,
  [_AI, _CI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetCampaignResponse = struct(n0, _GCRe, 0, [_CR], [[() => CampaignResponse, 16]]);
export var GetCampaignsRequest = struct(
  n0,
  _GCRet,
  0,
  [_AI, _PS, _Tok],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _ps,
      },
    ],
    [
      0,
      {
        [_hQ]: _to,
      },
    ],
  ]
);
export var GetCampaignsResponse = struct(n0, _GCReta, 0, [_CRa], [[() => CampaignsResponse, 16]]);
export var GetCampaignVersionRequest = struct(
  n0,
  _GCVR,
  0,
  [_AI, _CI, _V],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetCampaignVersionResponse = struct(n0, _GCVRe, 0, [_CR], [[() => CampaignResponse, 16]]);
export var GetCampaignVersionsRequest = struct(
  n0,
  _GCVRet,
  0,
  [_AI, _CI, _PS, _Tok],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _ps,
      },
    ],
    [
      0,
      {
        [_hQ]: _to,
      },
    ],
  ]
);
export var GetCampaignVersionsResponse = struct(n0, _GCVReta, 0, [_CRa], [[() => CampaignsResponse, 16]]);
export var GetInAppMessagesRequest = struct(
  n0,
  _GIAMR,
  0,
  [_AI, _EIn],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetInAppMessagesResponse = struct(n0, _GIAMRe, 0, [_IAMR], [[() => InAppMessagesResponse, 16]]);
export var GetInAppTemplateRequest = struct(
  n0,
  _GIATR,
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
export var GetInAppTemplateResponse = struct(n0, _GIATRe, 0, [_IATRn], [[() => InAppTemplateResponse, 16]]);
export var InAppCampaignSchedule = struct(
  n0,
  _IACS,
  0,
  [_EDnd, _EF, _QT],
  [0, () => CampaignEventFilter, () => QuietTime]
);
export var InAppMessage = struct(n0, _IAM, 0, [_Co, _CCu, _La], [() => ListOfInAppMessageContent, 128 | 0, 0]);
export var InAppMessageBodyConfig = struct(n0, _IAMBC, 0, [_Al, _B, _TCex], [0, 0, 0]);
export var InAppMessageButton = struct(
  n0,
  _IAMB,
  0,
  [_An, _DCe, _IOS, _We],
  [
    () => OverrideButtonConfiguration,
    () => DefaultButtonConfiguration,
    () => OverrideButtonConfiguration,
    () => OverrideButtonConfiguration,
  ]
);
export var InAppMessageCampaign = struct(
  n0,
  _IAMC,
  0,
  [_CI, _DC, _IAM, _Pr, _Sc, _SCe, _TCo, _TI],
  [0, 1, () => InAppMessage, 1, () => InAppCampaignSchedule, 1, 1, 0]
);
export var InAppMessageContent = struct(
  n0,
  _IAMCn,
  0,
  [_BC, _BCo, _HCe, _IU, _PB, _SB],
  [
    0,
    () => InAppMessageBodyConfig,
    () => InAppMessageHeaderConfig,
    0,
    () => InAppMessageButton,
    () => InAppMessageButton,
  ]
);
export var InAppMessageHeaderConfig = struct(n0, _IAMHC, 0, [_Al, _Hea, _TCex], [0, 0, 0]);
export var InAppMessagesResponse = struct(n0, _IAMR, 0, [_IAMCnp], [() => ListOfInAppMessageCampaign]);
export var InAppTemplateRequest = struct(
  n0,
  _IATR,
  0,
  [_Co, _CCu, _La, _t, _TDe],
  [
    () => ListOfInAppMessageContent,
    128 | 0,
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
export var InAppTemplateResponse = struct(
  n0,
  _IATRn,
  0,
  [_Ar, _Co, _CD, _CCu, _LMD, _La, _t, _TDe, _TNe, _TT, _V],
  [
    0,
    () => ListOfInAppMessageContent,
    0,
    128 | 0,
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
export var Message = struct(
  n0,
  _M,
  0,
  [_Ac, _B, _IIU, _ISIU, _IU, _JB, _MU, _RC, _SP, _TTL, _T, _U],
  [0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0]
);
export var MessageConfiguration = struct(
  n0,
  _MCe,
  0,
  [_ADMM, _APNSM, _BM, _CM, _DM, _EMm, _GCMM, _SMSM, _IAM],
  [
    () => Message,
    () => Message,
    () => Message,
    () => CampaignCustomMessage,
    () => Message,
    () => CampaignEmailMessage,
    () => Message,
    () => CampaignSmsMessage,
    () => CampaignInAppMessage,
  ]
);
export var OverrideButtonConfiguration = struct(n0, _OBC, 0, [_BA, _Li], [0, 0]);
export var Schedule = struct(
  n0,
  _Sc,
  0,
  [_ET, _EF, _Fr, _ILT, _QT, _ST, _Ti],
  [0, () => CampaignEventFilter, 0, 2, () => QuietTime, 0, 0]
);
export var TemplateCreateMessageBody = struct(n0, _TCMB, 0, [_Ar, _M, _RID], [0, 0, 0]);
export var TreatmentResource = struct(
  n0,
  _TRr,
  0,
  [_CDC, _Id, _MCe, _Sc, _SPi, _St, _TCe, _TD, _TN],
  [
    () => CustomDeliveryConfiguration,
    0,
    () => MessageConfiguration,
    () => Schedule,
    1,
    () => CampaignState,
    () => TemplateConfiguration,
    0,
    0,
  ]
);
export var UpdateCampaignRequest = struct(
  n0,
  _UCR,
  0,
  [_AI, _CI, _WCR],
  [
    [0, 1],
    [0, 1],
    [() => WriteCampaignRequest, 16],
  ]
);
export var UpdateCampaignResponse = struct(n0, _UCRp, 0, [_CR], [[() => CampaignResponse, 16]]);
export var UpdateInAppTemplateRequest = struct(
  n0,
  _UIATR,
  0,
  [_CNV, _IATR, _TNe, _V],
  [
    [
      2,
      {
        [_hQ]: _cnv,
      },
    ],
    [() => InAppTemplateRequest, 16],
    [0, 1],
    [
      0,
      {
        [_hQ]: _v,
      },
    ],
  ]
);
export var UpdateInAppTemplateResponse = struct(n0, _UIATRp, 0, [_MB], [[() => MessageBody, 16]]);
export var WriteCampaignRequest = struct(
  n0,
  _WCR,
  0,
  [_ATd, _CDC, _D, _HP, _Ho, _IP, _L, _MCe, _N, _Sc, _SI, _SV, _t, _TCe, _TD, _TN, _Pr],
  [
    () => ListOfWriteTreatmentResource,
    () => CustomDeliveryConfiguration,
    0,
    1,
    () => CampaignHook,
    2,
    () => CampaignLimits,
    () => MessageConfiguration,
    0,
    () => Schedule,
    0,
    1,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    () => TemplateConfiguration,
    0,
    0,
    1,
  ]
);
export var WriteTreatmentResource = struct(
  n0,
  _WTR,
  0,
  [_CDC, _MCe, _Sc, _SPi, _TCe, _TD, _TN],
  [() => CustomDeliveryConfiguration, () => MessageConfiguration, () => Schedule, 1, () => TemplateConfiguration, 0, 0]
);
export var ListOfCampaignResponse = list(n0, _LOCR, 0, [() => CampaignResponse, 0]);
export var ListOfInAppMessageCampaign = list(n0, _LOIAMC, 0, () => InAppMessageCampaign);
export var ListOfInAppMessageContent = list(n0, _LOIAMCi, 0, () => InAppMessageContent);
export var ListOfTreatmentResource = list(n0, _LOTRi, 0, () => TreatmentResource);
export var ListOfWriteTreatmentResource = list(n0, _LOWTR, 0, () => WriteTreatmentResource);
export var CreateCampaign = op(
  n0,
  _CCr,
  {
    [_h]: ["POST", "/v1/apps/{ApplicationId}/campaigns", 201],
  },
  () => CreateCampaignRequest,
  () => CreateCampaignResponse
);
export var CreateInAppTemplate = op(
  n0,
  _CIAT,
  {
    [_h]: ["POST", "/v1/templates/{TemplateName}/inapp", 201],
  },
  () => CreateInAppTemplateRequest,
  () => CreateInAppTemplateResponse
);
export var DeleteCampaign = op(
  n0,
  _DCel,
  {
    [_h]: ["DELETE", "/v1/apps/{ApplicationId}/campaigns/{CampaignId}", 200],
  },
  () => DeleteCampaignRequest,
  () => DeleteCampaignResponse
);
export var GetCampaign = op(
  n0,
  _GC,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/campaigns/{CampaignId}", 200],
  },
  () => GetCampaignRequest,
  () => GetCampaignResponse
);
export var GetCampaigns = op(
  n0,
  _GCe,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/campaigns", 200],
  },
  () => GetCampaignsRequest,
  () => GetCampaignsResponse
);
export var GetCampaignVersion = op(
  n0,
  _GCV,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/campaigns/{CampaignId}/versions/{Version}", 200],
  },
  () => GetCampaignVersionRequest,
  () => GetCampaignVersionResponse
);
export var GetCampaignVersions = op(
  n0,
  _GCVe,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/campaigns/{CampaignId}/versions", 200],
  },
  () => GetCampaignVersionsRequest,
  () => GetCampaignVersionsResponse
);
export var GetInAppMessages = op(
  n0,
  _GIAM,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/endpoints/{EndpointId}/inappmessages", 200],
  },
  () => GetInAppMessagesRequest,
  () => GetInAppMessagesResponse
);
export var GetInAppTemplate = op(
  n0,
  _GIAT,
  {
    [_h]: ["GET", "/v1/templates/{TemplateName}/inapp", 200],
  },
  () => GetInAppTemplateRequest,
  () => GetInAppTemplateResponse
);
export var UpdateCampaign = op(
  n0,
  _UC,
  {
    [_h]: ["PUT", "/v1/apps/{ApplicationId}/campaigns/{CampaignId}", 200],
  },
  () => UpdateCampaignRequest,
  () => UpdateCampaignResponse
);
export var UpdateInAppTemplate = op(
  n0,
  _UIAT,
  {
    [_h]: ["PUT", "/v1/templates/{TemplateName}/inapp", 202],
  },
  () => UpdateInAppTemplateRequest,
  () => UpdateInAppTemplateResponse
);
