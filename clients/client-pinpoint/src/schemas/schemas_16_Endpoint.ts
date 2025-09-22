// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _AC,
  _Ac,
  _Ad,
  _Add,
  _ADMM,
  _AI,
  _APN,
  _APNSM,
  _APNSPT,
  _At,
  _ATp,
  _AV,
  _AVC,
  _B,
  _Ba,
  _BIa,
  _BM,
  _BO,
  _C,
  _Ca,
  _CD,
  _Char,
  _Ci,
  _CIo,
  _CIoh,
  _CK,
  _CKo,
  _Cou,
  _CSV,
  _CT,
  _Da,
  _DE,
  _De,
  _DER,
  _DERe,
  _DM,
  _DMC,
  _DPNM,
  _Du,
  _DUE,
  _DUER,
  _DUERe,
  _EA,
  _EB,
  _EBI,
  _EBR,
  _ED,
  _EDn,
  _EI,
  _EIn,
  _EIR,
  _EIRv,
  _EIRve,
  _EL,
  _EMm,
  _End,
  _Endp,
  _ER,
  _ERn,
  _ERnd,
  _ERv,
  _ERve,
  _ESC,
  _ESn,
  _ETv,
  _EU,
  _Ev,
  _Eve,
  _FA,
  _FFA,
  _GCMM,
  _GE,
  _GER,
  _GERe,
  _GUE,
  _GUER,
  _GUERe,
  _h,
  _He,
  _HPt,
  _I,
  _Id,
  _IIU,
  _IR,
  _IRt,
  _IU,
  _Ke,
  _Lat,
  _LC,
  _Lo,
  _Loc,
  _LOEBI,
  _LOER,
  _Lon,
  _M,
  _Ma,
  _MB,
  _MCe,
  _MD,
  _Me,
  _MOAC,
  _Mod,
  _MOE,
  _MOEB,
  _MOEIR,
  _MOESC,
  _MOIR,
  _MOMOEMR,
  _MR,
  _MRe,
  _Ms,
  _MT,
  _MU,
  _MV,
  _ON,
  _OO,
  _P,
  _PAM,
  _PC,
  _PE,
  _PER,
  _PERu,
  _PEu,
  _Pr,
  _PV,
  _R,
  _RC,
  _RE,
  _Re,
  _Res,
  _RIe,
  _RPN,
  _RTA,
  _SC,
  _SE,
  _Se,
  _SEP,
  _SIe,
  _SIIU,
  _SMe,
  _SMR,
  _SMRe,
  _SMSM,
  _SN,
  _So,
  _SP,
  _STt,
  _STto,
  _Su,
  _Sub,
  _SUM,
  _SUMR,
  _SUMRe,
  _SUMRen,
  _SUMRend,
  _T,
  _TCe,
  _Ti,
  _TIem,
  _TIh,
  _Tim,
  _TIr,
  _TO,
  _TP,
  _TTL,
  _U,
  _UA,
  _UE,
  _UEB,
  _UEBR,
  _UEBRp,
  _UER,
  _UERp,
  _UI,
  _Us,
  _Use,
  _VI,
  _VM,
  MessageBody,
  n0,
} from "./schemas_0";
import { MapOfEndpointMessageResult, MessageResponse } from "./schemas_26_Send";
import { ListOfMessageHeader } from "./schemas_42_Campaign";
import { TemplateConfiguration } from "./schemas_49_Campaign";

/* eslint no-var: 0 */

export var AddressConfiguration = struct(
  n0,
  _AC,
  0,
  [_BO, _CT, _C, _RC, _Su, _TO],
  [0, 0, 128 | 0, 0, map(n0, _Ms, 0, 0, 64 | 0), 0]
);
export var ADMMessage = struct(
  n0,
  _ADMM,
  0,
  [_Ac, _B, _CK, _Da, _EA, _IR, _IIU, _IU, _MD, _RC, _SP, _SIIU, _So, _Su, _T, _U],
  [0, 0, 0, 128 | 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, map(n0, _Ms, 0, 0, 64 | 0), 0, 0]
);
export var APNSMessage = struct(
  n0,
  _APNSM,
  0,
  [_APNSPT, _Ac, _Ba, _B, _Ca, _CIo, _Da, _MU, _PAM, _Pr, _RC, _SP, _So, _Su, _TIh, _TTL, _T, _U],
  [0, 0, 1, 0, 0, 0, 128 | 0, 0, 0, 0, 0, 2, 0, map(n0, _Ms, 0, 0, 64 | 0), 0, 1, 0, 0]
);
export var BaiduMessage = struct(
  n0,
  _BM,
  0,
  [_Ac, _B, _Da, _IR, _IIU, _IU, _RC, _SP, _SIIU, _So, _Su, _TTL, _T, _U],
  [0, 0, 128 | 0, 0, 0, 0, 0, 2, 0, 0, map(n0, _Ms, 0, 0, 64 | 0), 1, 0, 0]
);
export var DefaultMessage = struct(n0, _DM, 0, [_B, _Su], [0, map(n0, _Ms, 0, 0, 64 | 0)]);
export var DefaultPushNotificationMessage = struct(
  n0,
  _DPNM,
  0,
  [_Ac, _B, _Da, _SP, _Su, _T, _U],
  [0, 0, 128 | 0, 2, map(n0, _Ms, 0, 0, 64 | 0), 0, 0]
);
export var DeleteEndpointRequest = struct(
  n0,
  _DER,
  0,
  [_AI, _EIn],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteEndpointResponse = struct(n0, _DERe, 0, [_ER], [[() => EndpointResponse, 16]]);
export var DeleteUserEndpointsRequest = struct(
  n0,
  _DUER,
  0,
  [_AI, _UI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteUserEndpointsResponse = struct(n0, _DUERe, 0, [_ERn], [[() => EndpointsResponse, 16]]);
export var DirectMessageConfiguration = struct(
  n0,
  _DMC,
  0,
  [_ADMM, _APNSM, _BM, _DM, _DPNM, _EMm, _GCMM, _SMSM, _VM],
  [
    () => ADMMessage,
    () => APNSMessage,
    () => BaiduMessage,
    () => DefaultMessage,
    () => DefaultPushNotificationMessage,
    () => EmailMessage,
    () => GCMMessage,
    () => SMSMessage,
    () => VoiceMessage,
  ]
);
export var EmailMessage = struct(
  n0,
  _EMm,
  0,
  [_B, _FFA, _FA, _RE, _RTA, _SE, _Su],
  [0, 0, 0, () => RawEmail, 64 | 0, () => SimpleEmail, map(n0, _Ms, 0, 0, 64 | 0)]
);
export var EndpointBatchItem = struct(
  n0,
  _EBI,
  0,
  [_Ad, _At, _CT, _De, _ED, _ESn, _Id, _Lo, _Me, _OO, _RIe, _Us],
  [
    0,
    map(n0, _Ms, 0, 0, 64 | 0),
    0,
    () => EndpointDemographic,
    0,
    0,
    0,
    () => EndpointLocation,
    128 | 1,
    0,
    0,
    () => EndpointUser,
  ]
);
export var EndpointBatchRequest = struct(n0, _EBR, 0, [_I], [() => ListOfEndpointBatchItem]);
export var EndpointDemographic = struct(
  n0,
  _EDn,
  0,
  [_AV, _Loc, _Ma, _Mod, _MV, _P, _PV, _Ti],
  [0, 0, 0, 0, 0, 0, 0, 0]
);
export var EndpointItemResponse = struct(n0, _EIR, 0, [_M, _SC], [0, 1]);
export var EndpointLocation = struct(n0, _EL, 0, [_Ci, _Cou, _Lat, _Lon, _PC, _Re], [0, 0, 1, 1, 0, 0]);
export var EndpointRequest = struct(
  n0,
  _ERnd,
  0,
  [_Ad, _At, _CT, _De, _ED, _ESn, _Lo, _Me, _OO, _RIe, _Us],
  [
    0,
    map(n0, _Ms, 0, 0, 64 | 0),
    0,
    () => EndpointDemographic,
    0,
    0,
    () => EndpointLocation,
    128 | 1,
    0,
    0,
    () => EndpointUser,
  ]
);
export var EndpointResponse = struct(
  n0,
  _ER,
  0,
  [_Ad, _AI, _At, _CT, _CIoh, _CD, _De, _ED, _ESn, _Id, _Lo, _Me, _OO, _RIe, _Us],
  [
    0,
    0,
    map(n0, _Ms, 0, 0, 64 | 0),
    0,
    0,
    0,
    () => EndpointDemographic,
    0,
    0,
    0,
    () => EndpointLocation,
    128 | 1,
    0,
    0,
    () => EndpointUser,
  ]
);
export var EndpointSendConfiguration = struct(
  n0,
  _ESC,
  0,
  [_BO, _C, _RC, _Su, _TO],
  [0, 128 | 0, 0, map(n0, _Ms, 0, 0, 64 | 0), 0]
);
export var EndpointsResponse = struct(n0, _ERn, 0, [_I], [() => ListOfEndpointResponse]);
export var EndpointUser = struct(n0, _EU, 0, [_UA, _UI], [map(n0, _Ms, 0, 0, 64 | 0), 0]);
export var Event = struct(
  n0,
  _Ev,
  0,
  [_APN, _ATp, _AVC, _At, _CSV, _ETv, _Me, _SN, _Se, _Tim],
  [0, 0, 0, 128 | 0, 0, 0, 128 | 1, 0, () => Session, 0]
);
export var EventItemResponse = struct(n0, _EIRv, 0, [_M, _SC], [0, 1]);
export var EventsBatch = struct(n0, _EB, 0, [_End, _Eve], [() => PublicEndpoint, () => MapOfEvent]);
export var EventsRequest = struct(n0, _ERv, 0, [_BIa], [() => MapOfEventsBatch]);
export var EventsResponse = struct(n0, _ERve, 0, [_Res], [() => MapOfItemResponse]);
export var GCMMessage = struct(
  n0,
  _GCMM,
  0,
  [_Ac, _B, _CKo, _Da, _IR, _IIU, _IU, _PAM, _Pr, _RC, _RPN, _SP, _SIIU, _So, _Su, _TTL, _T, _U],
  [0, 0, 0, 128 | 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, map(n0, _Ms, 0, 0, 64 | 0), 1, 0, 0]
);
export var GetEndpointRequest = struct(
  n0,
  _GER,
  0,
  [_AI, _EIn],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetEndpointResponse = struct(n0, _GERe, 0, [_ER], [[() => EndpointResponse, 16]]);
export var GetUserEndpointsRequest = struct(
  n0,
  _GUER,
  0,
  [_AI, _UI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetUserEndpointsResponse = struct(n0, _GUERe, 0, [_ERn], [[() => EndpointsResponse, 16]]);
export var ItemResponse = struct(
  n0,
  _IRt,
  0,
  [_EIR, _EIRve],
  [() => EndpointItemResponse, () => MapOfEventItemResponse]
);
export var MessageRequest = struct(
  n0,
  _MR,
  0,
  [_Add, _C, _Endp, _MCe, _TCe, _TIr],
  [
    () => MapOfAddressConfiguration,
    128 | 0,
    () => MapOfEndpointSendConfiguration,
    () => DirectMessageConfiguration,
    () => TemplateConfiguration,
    0,
  ]
);
export var PublicEndpoint = struct(
  n0,
  _PE,
  0,
  [_Ad, _At, _CT, _De, _ED, _ESn, _Lo, _Me, _OO, _RIe, _Us],
  [
    0,
    map(n0, _Ms, 0, 0, 64 | 0),
    0,
    () => EndpointDemographic,
    0,
    0,
    () => EndpointLocation,
    128 | 1,
    0,
    0,
    () => EndpointUser,
  ]
);
export var PutEventsRequest = struct(
  n0,
  _PER,
  0,
  [_AI, _ERv],
  [
    [0, 1],
    [() => EventsRequest, 16],
  ]
);
export var PutEventsResponse = struct(n0, _PERu, 0, [_ERve], [[() => EventsResponse, 16]]);
export var RawEmail = struct(n0, _RE, 0, [_Da], [21]);
export var SendMessagesRequest = struct(
  n0,
  _SMR,
  0,
  [_AI, _MR],
  [
    [0, 1],
    [() => MessageRequest, 16],
  ]
);
export var SendMessagesResponse = struct(n0, _SMRe, 0, [_MRe], [[() => MessageResponse, 16]]);
export var SendUsersMessageRequest = struct(
  n0,
  _SUMR,
  0,
  [_C, _MCe, _TCe, _TIr, _Use],
  [128 | 0, () => DirectMessageConfiguration, () => TemplateConfiguration, 0, () => MapOfEndpointSendConfiguration]
);
export var SendUsersMessageResponse = struct(
  n0,
  _SUMRe,
  0,
  [_AI, _RIe, _R],
  [0, 0, () => MapOfMapOfEndpointMessageResult]
);
export var SendUsersMessagesRequest = struct(
  n0,
  _SUMRen,
  0,
  [_AI, _SUMR],
  [
    [0, 1],
    [() => SendUsersMessageRequest, 16],
  ]
);
export var SendUsersMessagesResponse = struct(n0, _SUMRend, 0, [_SUMRe], [[() => SendUsersMessageResponse, 16]]);
export var Session = struct(n0, _Se, 0, [_Du, _Id, _STt, _STto], [1, 0, 0, 0]);
export var SimpleEmail = struct(
  n0,
  _SE,
  0,
  [_HPt, _Sub, _TP, _He],
  [() => SimpleEmailPart, () => SimpleEmailPart, () => SimpleEmailPart, () => ListOfMessageHeader]
);
export var SimpleEmailPart = struct(n0, _SEP, 0, [_Char, _Da], [0, 0]);
export var SMSMessage = struct(
  n0,
  _SMSM,
  0,
  [_B, _Ke, _MU, _MT, _ON, _SIe, _Su, _EI, _TIem],
  [0, 0, 0, 0, 0, 0, map(n0, _Ms, 0, 0, 64 | 0), 0, 0]
);
export var UpdateEndpointRequest = struct(
  n0,
  _UER,
  0,
  [_AI, _EIn, _ERnd],
  [
    [0, 1],
    [0, 1],
    [() => EndpointRequest, 16],
  ]
);
export var UpdateEndpointResponse = struct(n0, _UERp, 0, [_MB], [[() => MessageBody, 16]]);
export var UpdateEndpointsBatchRequest = struct(
  n0,
  _UEBR,
  0,
  [_AI, _EBR],
  [
    [0, 1],
    [() => EndpointBatchRequest, 16],
  ]
);
export var UpdateEndpointsBatchResponse = struct(n0, _UEBRp, 0, [_MB], [[() => MessageBody, 16]]);
export var VoiceMessage = struct(n0, _VM, 0, [_B, _LC, _ON, _Su, _VI], [0, 0, 0, map(n0, _Ms, 0, 0, 64 | 0), 0]);
export var ListOfEndpointBatchItem = list(n0, _LOEBI, 0, () => EndpointBatchItem);
export var ListOfEndpointResponse = list(n0, _LOER, 0, () => EndpointResponse);
export var MapOf__double = 128 | 1;

export var MapOfAddressConfiguration = map(n0, _MOAC, 0, 0, () => AddressConfiguration);
export var MapOfEndpointSendConfiguration = map(n0, _MOESC, 0, 0, () => EndpointSendConfiguration);
export var MapOfEvent = map(n0, _MOE, 0, 0, () => Event);
export var MapOfEventItemResponse = map(n0, _MOEIR, 0, 0, () => EventItemResponse);
export var MapOfEventsBatch = map(n0, _MOEB, 0, 0, () => EventsBatch);
export var MapOfItemResponse = map(n0, _MOIR, 0, 0, () => ItemResponse);
export var MapOfListOf__string = map(n0, _Ms, 0, 0, 64 | 0);
export var MapOfMapOfEndpointMessageResult = map(n0, _MOMOEMR, 0, 0, () => MapOfEndpointMessageResult);
export var DeleteEndpoint = op(
  n0,
  _DE,
  {
    [_h]: ["DELETE", "/v1/apps/{ApplicationId}/endpoints/{EndpointId}", 202],
  },
  () => DeleteEndpointRequest,
  () => DeleteEndpointResponse
);
export var DeleteUserEndpoints = op(
  n0,
  _DUE,
  {
    [_h]: ["DELETE", "/v1/apps/{ApplicationId}/users/{UserId}", 202],
  },
  () => DeleteUserEndpointsRequest,
  () => DeleteUserEndpointsResponse
);
export var GetEndpoint = op(
  n0,
  _GE,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/endpoints/{EndpointId}", 200],
  },
  () => GetEndpointRequest,
  () => GetEndpointResponse
);
export var GetUserEndpoints = op(
  n0,
  _GUE,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/users/{UserId}", 200],
  },
  () => GetUserEndpointsRequest,
  () => GetUserEndpointsResponse
);
export var PutEvents = op(
  n0,
  _PEu,
  {
    [_h]: ["POST", "/v1/apps/{ApplicationId}/events", 202],
  },
  () => PutEventsRequest,
  () => PutEventsResponse
);
export var SendMessages = op(
  n0,
  _SMe,
  {
    [_h]: ["POST", "/v1/apps/{ApplicationId}/messages", 200],
  },
  () => SendMessagesRequest,
  () => SendMessagesResponse
);
export var SendUsersMessages = op(
  n0,
  _SUM,
  {
    [_h]: ["POST", "/v1/apps/{ApplicationId}/users-messages", 200],
  },
  () => SendUsersMessagesRequest,
  () => SendUsersMessagesResponse
);
export var UpdateEndpoint = op(
  n0,
  _UE,
  {
    [_h]: ["PUT", "/v1/apps/{ApplicationId}/endpoints/{EndpointId}", 202],
  },
  () => UpdateEndpointRequest,
  () => UpdateEndpointResponse
);
export var UpdateEndpointsBatch = op(
  n0,
  _UEB,
  {
    [_h]: ["PUT", "/v1/apps/{ApplicationId}/endpoints", 202],
  },
  () => UpdateEndpointsBatchRequest,
  () => UpdateEndpointsBatchResponse
);
