const _AFN = "AfterFragmentNumber";
const _CLEE = "ClientLimitExceededException";
const _CLEEo = "ConnectionLimitExceededException";
const _CT = "ContentType";
const _CT_ = "Content-Type";
const _CTo = "ContinuationToken";
const _GM = "GetMedia";
const _GMI = "GetMediaInput";
const _GMO = "GetMediaOutput";
const _IAE = "InvalidArgumentException";
const _IEE = "InvalidEndpointException";
const _M = "Message";
const _NAE = "NotAuthorizedException";
const _P = "Payload";
const _RNFE = "ResourceNotFoundException";
const _SARN = "StreamARN";
const _SN = "StreamName";
const _SS = "StartSelector";
const _SST = "StartSelectorType";
const _ST = "StartTimestamp";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _s = "streaming";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.kinesisvideomedia";
const n0 = "com.amazonaws.kinesisvideomedia";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  ClientLimitExceededException as __ClientLimitExceededException,
  ConnectionLimitExceededException as __ConnectionLimitExceededException,
  InvalidArgumentException as __InvalidArgumentException,
  InvalidEndpointException as __InvalidEndpointException,
  NotAuthorizedException as __NotAuthorizedException,
  ResourceNotFoundException as __ResourceNotFoundException,
} from "../models/errors";
import { KinesisVideoMediaServiceException as __KinesisVideoMediaServiceException } from "../models/KinesisVideoMediaServiceException";

/* eslint no-var: 0 */

export var Payload: StaticSimpleSchema = [
  0,
  n0,
  _P,
  {
    [_s]: 1,
  },
  42,
];
export var ClientLimitExceededException: StaticErrorSchema = [
  -3,
  n0,
  _CLEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ClientLimitExceededException, __ClientLimitExceededException);

export var ConnectionLimitExceededException: StaticErrorSchema = [
  -3,
  n0,
  _CLEEo,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ConnectionLimitExceededException, __ConnectionLimitExceededException);

export var GetMediaInput: StaticStructureSchema = [3, n0, _GMI, 0, [_SN, _SARN, _SS], [0, 0, () => StartSelector]];
export var GetMediaOutput: StaticStructureSchema = [
  3,
  n0,
  _GMO,
  0,
  [_CT, _P],
  [
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
    [() => Payload, 16],
  ],
];
export var InvalidArgumentException: StaticErrorSchema = [
  -3,
  n0,
  _IAE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidArgumentException, __InvalidArgumentException);

export var InvalidEndpointException: StaticErrorSchema = [
  -3,
  n0,
  _IEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidEndpointException, __InvalidEndpointException);

export var NotAuthorizedException: StaticErrorSchema = [
  -3,
  n0,
  _NAE,
  {
    [_e]: _c,
    [_hE]: 401,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(NotAuthorizedException, __NotAuthorizedException);

export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var StartSelector: StaticStructureSchema = [3, n0, _SS, 0, [_SST, _AFN, _ST, _CTo], [0, 0, 4, 0]];
export var __Unit = "unit" as const;

export var KinesisVideoMediaServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "KinesisVideoMediaServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(KinesisVideoMediaServiceException, __KinesisVideoMediaServiceException);

export var GetMedia: StaticOperationSchema = [
  9,
  n0,
  _GM,
  {
    [_h]: ["POST", "/getMedia", 200],
  },
  () => GetMediaInput,
  () => GetMediaOutput,
];
