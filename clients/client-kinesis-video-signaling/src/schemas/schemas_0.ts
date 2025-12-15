const _A = "Answer";
const _CARN = "ChannelARN";
const _CI = "ClientId";
const _CLEE = "ClientLimitExceededException";
const _GISC = "GetIceServerConfig";
const _GISCR = "GetIceServerConfigRequest";
const _GISCRe = "GetIceServerConfigResponse";
const _IAE = "InvalidArgumentException";
const _ICE = "InvalidClientException";
const _IS = "IceServer";
const _ISL = "IceServerList";
const _M = "Message";
const _MP = "MessagePayload";
const _NAE = "NotAuthorizedException";
const _P = "Password";
const _RNFE = "ResourceNotFoundException";
const _S = "Service";
const _SAOTM = "SendAlexaOfferToMaster";
const _SAOTMR = "SendAlexaOfferToMasterRequest";
const _SAOTMRe = "SendAlexaOfferToMasterResponse";
const _SCI = "SenderClientId";
const _SEE = "SessionExpiredException";
const _T = "Ttl";
const _U = "Username";
const _Ur = "Uris";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _m = "message";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.kinesisvideosignaling";
const n0 = "com.amazonaws.kinesisvideosignaling";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  ClientLimitExceededException,
  InvalidArgumentException,
  InvalidClientException,
  NotAuthorizedException,
  ResourceNotFoundException,
  SessionExpiredException,
} from "../models/errors";
import { KinesisVideoSignalingServiceException } from "../models/KinesisVideoSignalingServiceException";

/* eslint no-var: 0 */
export var ClientLimitExceededException$: StaticErrorSchema = [-3, n0, _CLEE, { [_e]: _c, [_hE]: 400 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ClientLimitExceededException$, ClientLimitExceededException);
export var GetIceServerConfigRequest$: StaticStructureSchema = [3, n0, _GISCR, 0, [_CARN, _CI, _S, _U], [0, 0, 0, 0]];
export var GetIceServerConfigResponse$: StaticStructureSchema = [3, n0, _GISCRe, 0, [_ISL], [() => IceServerList]];
export var IceServer$: StaticStructureSchema = [3, n0, _IS, 0, [_Ur, _U, _P, _T], [64 | 0, 0, 0, 1]];
export var InvalidArgumentException$: StaticErrorSchema = [-3, n0, _IAE, { [_e]: _c, [_hE]: 400 }, [_M], [0]];
TypeRegistry.for(n0).registerError(InvalidArgumentException$, InvalidArgumentException);
export var InvalidClientException$: StaticErrorSchema = [-3, n0, _ICE, { [_e]: _c, [_hE]: 400 }, [_m], [0]];
TypeRegistry.for(n0).registerError(InvalidClientException$, InvalidClientException);
export var NotAuthorizedException$: StaticErrorSchema = [-3, n0, _NAE, { [_e]: _c, [_hE]: 401 }, [_M], [0]];
TypeRegistry.for(n0).registerError(NotAuthorizedException$, NotAuthorizedException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE, { [_e]: _c, [_hE]: 404 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var SendAlexaOfferToMasterRequest$: StaticStructureSchema = [3, n0, _SAOTMR, 0, [_CARN, _SCI, _MP], [0, 0, 0]];
export var SendAlexaOfferToMasterResponse$: StaticStructureSchema = [3, n0, _SAOTMRe, 0, [_A], [0]];
export var SessionExpiredException$: StaticErrorSchema = [-3, n0, _SEE, { [_e]: _c, [_hE]: 400 }, [_m], [0]];
TypeRegistry.for(n0).registerError(SessionExpiredException$, SessionExpiredException);
export var KinesisVideoSignalingServiceException$: StaticErrorSchema = [
  -3,
  _s,
  "KinesisVideoSignalingServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_s).registerError(KinesisVideoSignalingServiceException$, KinesisVideoSignalingServiceException);
var IceServerList: StaticListSchema = [1, n0, _ISL, 0, () => IceServer$];
var Uris = 64 | 0;
export var GetIceServerConfig$: StaticOperationSchema = [
  9,
  n0,
  _GISC,
  { [_h]: ["POST", "/v1/get-ice-server-config", 200] },
  () => GetIceServerConfigRequest$,
  () => GetIceServerConfigResponse$,
];
export var SendAlexaOfferToMaster$: StaticOperationSchema = [
  9,
  n0,
  _SAOTM,
  { [_h]: ["POST", "/v1/send-alexa-offer-to-master", 200] },
  () => SendAlexaOfferToMasterRequest$,
  () => SendAlexaOfferToMasterResponse$,
];
