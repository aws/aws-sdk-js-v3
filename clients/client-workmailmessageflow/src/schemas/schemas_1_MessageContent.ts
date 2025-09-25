// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import {
  InvalidContentLocation as __InvalidContentLocation,
  MessageFrozen as __MessageFrozen,
  MessageRejected as __MessageRejected,
  ResourceNotFoundException as __ResourceNotFoundException,
} from "../models/index";
import {
  _b,
  _c,
  _co,
  _e,
  _GRMC,
  _GRMCR,
  _GRMCRe,
  _h,
  _hE,
  _ICL,
  _k,
  _m,
  _mC,
  _mCB,
  _MF,
  _mI,
  _MR,
  _oV,
  _PRMC,
  _PRMCR,
  _PRMCRu,
  _RMC,
  _RNFE,
  _s,
  _SR,
  _sR,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var messageContentBlob = sim(n0, _mCB, 42, {
  [_s]: 1,
});
export var GetRawMessageContentRequest = struct(n0, _GRMCR, 0, [_mI], [[0, 1]]);
export var GetRawMessageContentResponse = struct(n0, _GRMCRe, 0, [_mC], [[() => messageContentBlob, 16]]);
export var InvalidContentLocation = error(
  n0,
  _ICL,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidContentLocation
);
export var MessageFrozen = error(
  n0,
  _MF,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __MessageFrozen
);
export var MessageRejected = error(
  n0,
  _MR,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __MessageRejected
);
export var PutRawMessageContentRequest = struct(n0, _PRMCR, 0, [_mI, _co], [[0, 1], () => RawMessageContent]);
export var PutRawMessageContentResponse = struct(n0, _PRMCRu, 0, [], []);
export var RawMessageContent = struct(n0, _RMC, 0, [_sR], [() => S3Reference]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var S3Reference = struct(n0, _SR, 0, [_b, _k, _oV], [0, 0, 0]);
export var GetRawMessageContent = op(
  n0,
  _GRMC,
  {
    [_h]: ["GET", "/messages/{messageId}", 200],
  },
  () => GetRawMessageContentRequest,
  () => GetRawMessageContentResponse
);
export var PutRawMessageContent = op(
  n0,
  _PRMC,
  {
    [_h]: ["POST", "/messages/{messageId}", 200],
  },
  () => PutRawMessageContentRequest,
  () => PutRawMessageContentResponse
);
