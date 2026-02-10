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
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.kinesisvideomedia";
const _st = "streaming";
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
  ClientLimitExceededException,
  ConnectionLimitExceededException,
  InvalidArgumentException,
  InvalidEndpointException,
  NotAuthorizedException,
  ResourceNotFoundException,
} from "../models/errors";
import { KinesisVideoMediaServiceException } from "../models/KinesisVideoMediaServiceException";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var KinesisVideoMediaServiceException$: StaticErrorSchema = [-3, _s, "KinesisVideoMediaServiceException", 0, [], []];
_s_registry.registerError(KinesisVideoMediaServiceException$, KinesisVideoMediaServiceException);
const n0_registry = TypeRegistry.for(n0);
export var ClientLimitExceededException$: StaticErrorSchema = [-3, n0, _CLEE,
  { [_e]: _c, [_hE]: 400 },
  [_M],
  [0]
];
n0_registry.registerError(ClientLimitExceededException$, ClientLimitExceededException);
export var ConnectionLimitExceededException$: StaticErrorSchema = [-3, n0, _CLEEo,
  { [_e]: _c, [_hE]: 400 },
  [_M],
  [0]
];
n0_registry.registerError(ConnectionLimitExceededException$, ConnectionLimitExceededException);
export var InvalidArgumentException$: StaticErrorSchema = [-3, n0, _IAE,
  { [_e]: _c, [_hE]: 400 },
  [_M],
  [0]
];
n0_registry.registerError(InvalidArgumentException$, InvalidArgumentException);
export var InvalidEndpointException$: StaticErrorSchema = [-3, n0, _IEE,
  { [_e]: _c, [_hE]: 400 },
  [_M],
  [0]
];
n0_registry.registerError(InvalidEndpointException$, InvalidEndpointException);
export var NotAuthorizedException$: StaticErrorSchema = [-3, n0, _NAE,
  { [_e]: _c, [_hE]: 401 },
  [_M],
  [0]
];
n0_registry.registerError(NotAuthorizedException$, NotAuthorizedException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_M],
  [0]
];
n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
  n0_registry,
]
var Payload: StaticSimpleSchema = [0, n0, _P, { [_st]: 1 }, 42];
export var GetMediaInput$: StaticStructureSchema = [3, n0, _GMI,
  0,
  [_SS, _SN, _SARN],
  [() => StartSelector$, 0, 0], 1
];
export var GetMediaOutput$: StaticStructureSchema = [3, n0, _GMO,
  0,
  [_CT, _P],
  [[0, { [_hH]: _CT_ }], [() => Payload, 16]]
];
export var StartSelector$: StaticStructureSchema = [3, n0, _SS,
  0,
  [_SST, _AFN, _ST, _CTo],
  [0, 0, 4, 0], 1
];
export var GetMedia$: StaticOperationSchema = [9, n0, _GM,
  { [_h]: ["POST", "/getMedia", 200] }, () => GetMediaInput$, () => GetMediaOutput$
];
