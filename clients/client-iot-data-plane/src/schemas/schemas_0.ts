export const _CE = "ConflictException";
export const _DC = "DeleteConnection";
export const _DCR = "DeleteConnectionRequest";
export const _DTS = "DeleteThingShadow";
export const _DTSR = "DeleteThingShadowRequest";
export const _DTSRe = "DeleteThingShadowResponse";
export const _FE = "ForbiddenException";
export const _GRM = "GetRetainedMessage";
export const _GRMR = "GetRetainedMessageRequest";
export const _GRMRe = "GetRetainedMessageResponse";
export const _GTS = "GetThingShadow";
export const _GTSR = "GetThingShadowRequest";
export const _GTSRe = "GetThingShadowResponse";
export const _IFE = "InternalFailureException";
export const _IRE = "InvalidRequestException";
export const _LNSFT = "ListNamedShadowsForThing";
export const _LNSFTR = "ListNamedShadowsForThingRequest";
export const _LNSFTRi = "ListNamedShadowsForThingResponse";
export const _LRM = "ListRetainedMessages";
export const _LRMR = "ListRetainedMessagesRequest";
export const _LRMRi = "ListRetainedMessagesResponse";
export const _MNAE = "MethodNotAllowedException";
export const _P = "Publish";
export const _PR = "PublishRequest";
export const _RETLE = "RequestEntityTooLargeException";
export const _RML = "RetainedMessageList";
export const _RMS = "RetainedMessageSummary";
export const _RNFE = "ResourceNotFoundException";
export const _SJUP = "SynthesizedJsonUserProperties";
export const _SUE = "ServiceUnavailableException";
export const _TE = "ThrottlingException";
export const _UDEE = "UnsupportedDocumentEncodingException";
export const _UE = "UnauthorizedException";
export const _UTS = "UpdateThingShadow";
export const _UTSR = "UpdateThingShadowRequest";
export const _UTSRp = "UpdateThingShadowResponse";
export const _a = "application/json";
export const _c = "client";
export const _cD = "correlationData";
export const _cI = "clientId";
export const _cS = "cleanSession";
export const _cT = "contentType";
export const _e = "error";
export const _h = "http";
export const _hE = "httpError";
export const _hH = "httpHeader";
export const _hQ = "httpQuery";
export const _lMT = "lastModifiedTime";
export const _m = "message";
export const _mE = "messageExpiry";
export const _mR = "maxResults";
export const _mT = "mediaType";
export const _n = "name";
export const _nT = "nextToken";
export const _p = "payload";
export const _pFI = "payloadFormatIndicator";
export const _pS = "pageSize";
export const _pSa = "payloadSize";
export const _pWM = "preventWillMessage";
export const _q = "qos";
export const _r = "results";
export const _rT = "retainedTopics";
export const _rTe = "responseTopic";
export const _re = "retain";
export const _s = "server";
export const _sN = "shadowName";
export const _t = "topic";
export const _tN = "thingName";
export const _ti = "timestamp";
export const _uP = "userProperties";
export const _xamcd = "x-amz-mqtt5-correlation-data";
export const _xampfi = "x-amz-mqtt5-payload-format-indicator";
export const _xamup = "x-amz-mqtt5-user-properties";
export const n0 = "com.amazonaws.iotdataplane";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { IoTDataPlaneServiceException as __IoTDataPlaneServiceException } from "../models/IoTDataPlaneServiceException";

/* eslint no-var: 0 */

export var IoTDataPlaneServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.iotdataplane",
  "IoTDataPlaneServiceException",
  0,
  [],
  [],
  __IoTDataPlaneServiceException
);
