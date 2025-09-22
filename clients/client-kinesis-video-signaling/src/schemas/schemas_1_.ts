// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ClientLimitExceededException as __ClientLimitExceededException,
  InvalidArgumentException as __InvalidArgumentException,
  InvalidClientException as __InvalidClientException,
  NotAuthorizedException as __NotAuthorizedException,
  ResourceNotFoundException as __ResourceNotFoundException,
  SessionExpiredException as __SessionExpiredException,
} from "../models/index";
import {
  _A,
  _c,
  _CARN,
  _CI,
  _CLEE,
  _e,
  _GISC,
  _GISCR,
  _GISCRe,
  _h,
  _hE,
  _IAE,
  _ICE,
  _IS,
  _ISL,
  _M,
  _m,
  _MP,
  _NAE,
  _P,
  _RNFE,
  _S,
  _SAOTM,
  _SAOTMR,
  _SAOTMRe,
  _SCI,
  _SEE,
  _T,
  _U,
  _Ur,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClientLimitExceededException = error(
  n0,
  _CLEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ClientLimitExceededException
);
export var GetIceServerConfigRequest = struct(n0, _GISCR, 0, [_CARN, _CI, _S, _U], [0, 0, 0, 0]);
export var GetIceServerConfigResponse = struct(n0, _GISCRe, 0, [_ISL], [() => IceServerList]);
export var IceServer = struct(n0, _IS, 0, [_Ur, _U, _P, _T], [64 | 0, 0, 0, 1]);
export var InvalidArgumentException = error(
  n0,
  _IAE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidArgumentException
);
export var InvalidClientException = error(
  n0,
  _ICE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidClientException
);
export var NotAuthorizedException = error(
  n0,
  _NAE,
  {
    [_e]: _c,
    [_hE]: 401,
  },
  [_M],
  [0],

  __NotAuthorizedException
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ResourceNotFoundException
);
export var SendAlexaOfferToMasterRequest = struct(n0, _SAOTMR, 0, [_CARN, _SCI, _MP], [0, 0, 0]);
export var SendAlexaOfferToMasterResponse = struct(n0, _SAOTMRe, 0, [_A], [0]);
export var SessionExpiredException = error(
  n0,
  _SEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __SessionExpiredException
);
export var Unit = "unit" as const;

export var IceServerList = list(n0, _ISL, 0, () => IceServer);
export var Uris = 64 | 0;

export var GetIceServerConfig = op(
  n0,
  _GISC,
  {
    [_h]: ["POST", "/v1/get-ice-server-config", 200],
  },
  () => GetIceServerConfigRequest,
  () => GetIceServerConfigResponse
);
export var SendAlexaOfferToMaster = op(
  n0,
  _SAOTM,
  {
    [_h]: ["POST", "/v1/send-alexa-offer-to-master", 200],
  },
  () => SendAlexaOfferToMasterRequest,
  () => SendAlexaOfferToMasterResponse
);
