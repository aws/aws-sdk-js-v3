const _A = "Accept";
const _ADE = "AccessDeniedException";
const _B = "Body";
const _BGE = "BadGatewayException";
const _By = "Bytes";
const _CIT = "CustomerIdentityToken";
const _CT = "ContentType";
const _CT_ = "Content-Type";
const _EC = "ErrorCode";
const _GI = "GatewayId";
const _GTE = "GatewayTimeoutException";
const _IGIG = "InvokeGlobalInferenceGateway";
const _IGIGI = "InvokeGlobalInferenceGatewayInput";
const _IGIGO = "InvokeGlobalInferenceGatewayOutput";
const _IGIGWRS = "InvokeGlobalInferenceGatewayWithResponseStream";
const _IGIGWRSI = "InvokeGlobalInferenceGatewayWithResponseStreamInput";
const _IGIGWRSO = "InvokeGlobalInferenceGatewayWithResponseStreamOutput";
const _ISE = "InternalServerException";
const _ISF = "InternalStreamFailure";
const _M = "Message";
const _MSE = "ModelStreamError";
const _PP = "PayloadPart";
const _PTLE = "PayloadTooLargeException";
const _RI = "ResourceId";
const _RNFE = "ResourceNotFoundException";
const _RPB = "RequestPayloadBlob";
const _RPBe = "ResponsePayloadBlob";
const _RS = "ResponseStream";
const _RT = "ResourceType";
const _SCB = "StreamChunkBlob";
const _SUE = "ServiceUnavailableException";
const _TE = "ThrottlingException";
const _XASCIT = "X-Amzn-SageMaker-Customer-Identity-Token";
const _a = "application/json";
const _c = "client";
const _e = "error";
const _eP = "eventPayload";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _mT = "mediaType";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.sagemakergatewayruntime";
const _se = "server";
const _sen = "sensitive";
const _st = "streaming";
const n0 = "com.amazonaws.sagemakergatewayruntime";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
  StaticUnionSchema,
} from "@smithy/types";

import {
  AccessDeniedException,
  BadGatewayException,
  GatewayTimeoutException,
  InternalServerException,
  InternalStreamFailure,
  ModelStreamError,
  PayloadTooLargeException,
  ResourceNotFoundException,
  ServiceUnavailableException,
  ThrottlingException,
} from "../models/errors";
import { SageMakerGatewayRuntimeServiceException } from "../models/SageMakerGatewayRuntimeServiceException";

/* eslint no-var: 0 */
const _s_registry = new TypeRegistry(_s);
export var SageMakerGatewayRuntimeServiceException$: StaticErrorSchema = [-3, _s, "SageMakerGatewayRuntimeServiceException", 0, [], []];
_s_registry.registerError(SageMakerGatewayRuntimeServiceException$, SageMakerGatewayRuntimeServiceException);
const n0_registry = new TypeRegistry(n0);
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_M],
  [0], 1
];
n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
export var BadGatewayException$: StaticErrorSchema = [-3, n0, _BGE,
  { [_e]: _se, [_hE]: 502 },
  [_M],
  [0], 1
];
n0_registry.registerError(BadGatewayException$, BadGatewayException);
export var GatewayTimeoutException$: StaticErrorSchema = [-3, n0, _GTE,
  { [_e]: _se, [_hE]: 504 },
  [_M],
  [0], 1
];
n0_registry.registerError(GatewayTimeoutException$, GatewayTimeoutException);
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_M],
  [0], 1
];
n0_registry.registerError(InternalServerException$, InternalServerException);
export var InternalStreamFailure$: StaticErrorSchema = [-3, n0, _ISF,
  { [_e]: _se },
  [_M],
  [0], 1
];
n0_registry.registerError(InternalStreamFailure$, InternalStreamFailure);
export var ModelStreamError$: StaticErrorSchema = [-3, n0, _MSE,
  { [_e]: _c },
  [_M, _EC],
  [0, 0], 1
];
n0_registry.registerError(ModelStreamError$, ModelStreamError);
export var PayloadTooLargeException$: StaticErrorSchema = [-3, n0, _PTLE,
  { [_e]: _c, [_hE]: 413 },
  [_M],
  [0], 1
];
n0_registry.registerError(PayloadTooLargeException$, PayloadTooLargeException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_M, _RI, _RT],
  [0, 0, 0], 1
];
n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ServiceUnavailableException$: StaticErrorSchema = [-3, n0, _SUE,
  { [_e]: _se, [_hE]: 503 },
  [_M],
  [0], 1
];
n0_registry.registerError(ServiceUnavailableException$, ServiceUnavailableException);
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c, [_hE]: 429 },
  [_M],
  [0], 1
];
n0_registry.registerError(ThrottlingException$, ThrottlingException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
  n0_registry,
]
var CustomerIdentityToken: StaticSimpleSchema = [0, n0, _CIT, 8, 0];
var RequestPayloadBlob: StaticSimpleSchema = [0, n0, _RPB, { [_mT]: _a, [_sen]: 1 }, 21];
var ResponsePayloadBlob: StaticSimpleSchema = [0, n0, _RPBe, { [_mT]: _a, [_sen]: 1 }, 21];
var StreamChunkBlob: StaticSimpleSchema = [0, n0, _SCB, 8, 21];
export var InvokeGlobalInferenceGatewayInput$: StaticStructureSchema = [3, n0, _IGIGI,
  0,
  [_GI, _CT, _B, _A, _CIT],
  [[0, 1], [0, { [_hH]: _CT_ }], [() => RequestPayloadBlob, 16], [0, { [_hH]: _A }], [() => CustomerIdentityToken, { [_hH]: _XASCIT }]], 3
];
export var InvokeGlobalInferenceGatewayOutput$: StaticStructureSchema = [3, n0, _IGIGO,
  0,
  [_B],
  [[() => ResponsePayloadBlob, 16]]
];
export var InvokeGlobalInferenceGatewayWithResponseStreamInput$: StaticStructureSchema = [3, n0, _IGIGWRSI,
  0,
  [_GI, _CT, _B, _A, _CIT],
  [[0, 1], [0, { [_hH]: _CT_ }], [() => RequestPayloadBlob, 16], [0, { [_hH]: _A }], [() => CustomerIdentityToken, { [_hH]: _XASCIT }]], 3
];
export var InvokeGlobalInferenceGatewayWithResponseStreamOutput$: StaticStructureSchema = [3, n0, _IGIGWRSO,
  0,
  [_B],
  [[() => ResponseStream$, 16]]
];
export var PayloadPart$: StaticStructureSchema = [3, n0, _PP,
  0,
  [_By],
  [[() => StreamChunkBlob, { [_eP]: 1 }]]
];
export var ResponseStream$: StaticUnionSchema = [4, n0, _RS,
  { [_st]: 1 },
  [_PP, _MSE, _ISF],
  [[() => PayloadPart$, 0], [() => ModelStreamError$, 0], [() => InternalStreamFailure$, 0]]
];
export var InvokeGlobalInferenceGateway$: StaticOperationSchema = [9, n0, _IGIG,
  { [_h]: ["POST", "/global-inference-gateway/{GatewayId}/invocations", 200] }, () => InvokeGlobalInferenceGatewayInput$, () => InvokeGlobalInferenceGatewayOutput$
];
export var InvokeGlobalInferenceGatewayWithResponseStream$: StaticOperationSchema = [9, n0, _IGIGWRS,
  { [_h]: ["POST", "/global-inference-gateway/{GatewayId}/invocations-response-stream", 200] }, () => InvokeGlobalInferenceGatewayWithResponseStreamInput$, () => InvokeGlobalInferenceGatewayWithResponseStreamOutput$
];
