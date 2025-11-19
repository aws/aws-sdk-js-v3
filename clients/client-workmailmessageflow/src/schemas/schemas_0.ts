const _GRMC = "GetRawMessageContent";
const _GRMCR = "GetRawMessageContentRequest";
const _GRMCRe = "GetRawMessageContentResponse";
const _ICL = "InvalidContentLocation";
const _MF = "MessageFrozen";
const _MR = "MessageRejected";
const _PRMC = "PutRawMessageContent";
const _PRMCR = "PutRawMessageContentRequest";
const _PRMCRu = "PutRawMessageContentResponse";
const _RMC = "RawMessageContent";
const _RNFE = "ResourceNotFoundException";
const _SR = "S3Reference";
const _b = "bucket";
const _c = "client";
const _co = "content";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _k = "key";
const _m = "message";
const _mC = "messageContent";
const _mCB = "messageContentBlob";
const _mI = "messageId";
const _oV = "objectVersion";
const _s = "streaming";
const _sR = "s3Reference";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.workmailmessageflow";
const n0 = "com.amazonaws.workmailmessageflow";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticOperationSchema, StaticSimpleSchema, StaticStructureSchema } from "@smithy/types";

import {
  InvalidContentLocation as __InvalidContentLocation,
  MessageFrozen as __MessageFrozen,
  MessageRejected as __MessageRejected,
  ResourceNotFoundException as __ResourceNotFoundException,
} from "../models/errors";
import { WorkMailMessageFlowServiceException as __WorkMailMessageFlowServiceException } from "../models/WorkMailMessageFlowServiceException";

/* eslint no-var: 0 */

export var messageContentBlob: StaticSimpleSchema = [
  0,
  n0,
  _mCB,
  {
    [_s]: 1,
  },
  42,
];
export var GetRawMessageContentRequest: StaticStructureSchema = [3, n0, _GRMCR, 0, [_mI], [[0, 1]]];
export var GetRawMessageContentResponse: StaticStructureSchema = [
  3,
  n0,
  _GRMCRe,
  0,
  [_mC],
  [[() => messageContentBlob, 16]],
];
export var InvalidContentLocation: StaticErrorSchema = [
  -3,
  n0,
  _ICL,
  {
    [_e]: _c,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidContentLocation, __InvalidContentLocation);

export var MessageFrozen: StaticErrorSchema = [
  -3,
  n0,
  _MF,
  {
    [_e]: _c,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(MessageFrozen, __MessageFrozen);

export var MessageRejected: StaticErrorSchema = [
  -3,
  n0,
  _MR,
  {
    [_e]: _c,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(MessageRejected, __MessageRejected);

export var PutRawMessageContentRequest: StaticStructureSchema = [
  3,
  n0,
  _PRMCR,
  0,
  [_mI, _co],
  [[0, 1], () => RawMessageContent],
];
export var PutRawMessageContentResponse: StaticStructureSchema = [3, n0, _PRMCRu, 0, [], []];
export var RawMessageContent: StaticStructureSchema = [3, n0, _RMC, 0, [_sR], [() => S3Reference]];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var S3Reference: StaticStructureSchema = [3, n0, _SR, 0, [_b, _k, _oV], [0, 0, 0]];
export var WorkMailMessageFlowServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "WorkMailMessageFlowServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(WorkMailMessageFlowServiceException, __WorkMailMessageFlowServiceException);

export var GetRawMessageContent: StaticOperationSchema = [
  9,
  n0,
  _GRMC,
  {
    [_h]: ["GET", "/messages/{messageId}", 200],
  },
  () => GetRawMessageContentRequest,
  () => GetRawMessageContentResponse,
];
export var PutRawMessageContent: StaticOperationSchema = [
  9,
  n0,
  _PRMC,
  {
    [_h]: ["POST", "/messages/{messageId}", 200],
  },
  () => PutRawMessageContentRequest,
  () => PutRawMessageContentResponse,
];
