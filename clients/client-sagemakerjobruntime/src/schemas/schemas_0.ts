const _ADE = "AccessDeniedException";
const _B = "Body";
const _CE = "ConflictException";
const _CR = "CompleteRollout";
const _CRR = "CompleteRolloutRequest";
const _CRRo = "CompleteRolloutResponse";
const _CT = "ClientToken";
const _CT_ = "Content-Type";
const _CTo = "ContentType";
const _IRB = "InferenceRequestBody";
const _IRBn = "InferenceResponseBody";
const _ISE = "InternalServiceError";
const _JA = "JobArn";
const _M = "Message";
const _R = "Rewards";
const _RNFE = "ResourceNotFoundException";
const _RS = "ResponseStream";
const _S = "Status";
const _SQEE = "ServiceQuotaExceededException";
const _SR = "SampleRequest";
const _SRa = "SampleResponse";
const _SWRS = "SampleWithResponseStream";
const _SWRSR = "SampleWithResponseStreamRequest";
const _SWRSRa = "SampleWithResponseStreamResponse";
const _Sa = "Sample";
const _TE = "ThrottlingException";
const _TI = "TrajectoryId";
const _UR = "UpdateReward";
const _URR = "UpdateRewardRequest";
const _URRp = "UpdateRewardResponse";
const _VE = "ValidationException";
const _XASJA = "X-Amzn-SageMaker-Job-Arn";
const _XASTI = "X-Amzn-SageMaker-Trajectory-Id";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.sagemakerjobruntime";
const _se = "server";
const _sen = "sensitive";
const _st = "streaming";
const n0 = "com.amazonaws.sagemakerjobruntime";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  AccessDeniedException,
  ConflictException,
  InternalServiceError,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";
import { SagemakerJobRuntimeServiceException } from "../models/SagemakerJobRuntimeServiceException";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var SagemakerJobRuntimeServiceException$: StaticErrorSchema = [-3, _s, "SagemakerJobRuntimeServiceException", 0, [], []];
_s_registry.registerError(SagemakerJobRuntimeServiceException$, SagemakerJobRuntimeServiceException);
const n0_registry = TypeRegistry.for(n0);
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_M],
  [0], 1
];
n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE,
  { [_e]: _c, [_hE]: 409 },
  [_M],
  [0], 1
];
n0_registry.registerError(ConflictException$, ConflictException);
export var InternalServiceError$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_M],
  [0], 1
];
n0_registry.registerError(InternalServiceError$, InternalServiceError);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_M],
  [0], 1
];
n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ServiceQuotaExceededException$: StaticErrorSchema = [-3, n0, _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_M],
  [0], 1
];
n0_registry.registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c, [_hE]: 429 },
  [_M],
  [0], 1
];
n0_registry.registerError(ThrottlingException$, ThrottlingException);
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_M],
  [0], 1
];
n0_registry.registerError(ValidationException$, ValidationException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
  n0_registry,
]
var InferenceRequestBody: StaticSimpleSchema = [0, n0, _IRB, 8, 21];
var InferenceResponseBody: StaticSimpleSchema = [0, n0, _IRBn, 8, 21];
var ResponseStream: StaticSimpleSchema = [0, n0, _RS, { [_sen]: 1, [_st]: 1 }, 42];
export var CompleteRolloutRequest$: StaticStructureSchema = [3, n0, _CRR,
  0,
  [_JA, _TI, _S, _CT],
  [[0, { [_hH]: _XASJA }], 0, 0, [0, 4]], 2
];
export var CompleteRolloutResponse$: StaticStructureSchema = [3, n0, _CRRo,
  0,
  [],
  []
];
export var SampleRequest$: StaticStructureSchema = [3, n0, _SR,
  0,
  [_JA, _TI, _B],
  [[0, { [_hH]: _XASJA }], [0, { [_hH]: _XASTI }], [() => InferenceRequestBody, 16]], 3
];
export var SampleResponse$: StaticStructureSchema = [3, n0, _SRa,
  0,
  [_B, _CTo],
  [[() => InferenceResponseBody, 16], [0, { [_hH]: _CT_ }]], 1
];
export var SampleWithResponseStreamRequest$: StaticStructureSchema = [3, n0, _SWRSR,
  0,
  [_JA, _TI, _B],
  [[0, { [_hH]: _XASJA }], [0, { [_hH]: _XASTI }], [() => InferenceRequestBody, 16]], 3
];
export var SampleWithResponseStreamResponse$: StaticStructureSchema = [3, n0, _SWRSRa,
  0,
  [_B, _CTo],
  [[() => ResponseStream, 16], [0, { [_hH]: _CT_ }]], 1
];
export var UpdateRewardRequest$: StaticStructureSchema = [3, n0, _URR,
  0,
  [_JA, _TI, _R, _CT],
  [[0, { [_hH]: _XASJA }], 0, 64 | 1, [0, 4]], 3
];
export var UpdateRewardResponse$: StaticStructureSchema = [3, n0, _URRp,
  0,
  [],
  []
];
var DoubleList = 64 | 1;
export var CompleteRollout$: StaticOperationSchema = [9, n0, _CR,
  { [_h]: ["POST", "/complete-rollout", 200] }, () => CompleteRolloutRequest$, () => CompleteRolloutResponse$
];
export var Sample$: StaticOperationSchema = [9, n0, _Sa,
  { [_h]: ["POST", "/sample", 200] }, () => SampleRequest$, () => SampleResponse$
];
export var SampleWithResponseStream$: StaticOperationSchema = [9, n0, _SWRS,
  { [_h]: ["POST", "/sample-with-response-stream", 200] }, () => SampleWithResponseStreamRequest$, () => SampleWithResponseStreamResponse$
];
export var UpdateReward$: StaticOperationSchema = [9, n0, _UR,
  { [_h]: ["POST", "/update-reward", 200] }, () => UpdateRewardRequest$, () => UpdateRewardResponse$
];
