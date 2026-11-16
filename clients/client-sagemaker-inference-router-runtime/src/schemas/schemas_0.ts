const _A = "Accept";
const _ADE = "AccessDeniedException";
const _B = "Body";
const _CA = "CustomAttributes";
const _CAH = "CustomAttributesHeader";
const _CT = "ContentType";
const _CT_ = "Content-Type";
const _F = "Filename";
const _FL = "FailureLocation";
const _IDE = "InternalDependencyException";
const _IF = "InternalFailure";
const _II = "InferenceId";
const _IIR = "InvokeInferenceRouter";
const _IIRA = "InvokeInferenceRouterAsync";
const _IIRAI = "InvokeInferenceRouterAsyncInput";
const _IIRAO = "InvokeInferenceRouterAsyncOutput";
const _IIRI = "InvokeInferenceRouterInput";
const _IIRO = "InvokeInferenceRouterOutput";
const _IL = "InputLocation";
const _IPV = "InvokedProductionVariant";
const _IRBB = "InferenceRouterBodyBlob";
const _IRN = "InferenceRouterName";
const _IRRA = "InvokedRoutedResourceArn";
const _ITS = "InvocationTimeoutSeconds";
const _LSA = "LogStreamArn";
const _M = "Message";
const _ME = "ModelError";
const _MNRE = "ModelNotReadyException";
const _OL = "OutputLocation";
const _OM = "OriginalMessage";
const _OSC = "OriginalStatusCode";
const _PAI = "PrefixAwareId";
const _RR = "RoutingReason";
const _RTE = "RequestTimeoutException";
const _RTN = "RoutingTargetName";
const _RTTLS = "RequestTTLSeconds";
const _SOPE = "S3OutputPathExtension";
const _SUE = "ServiceUnavailableException";
const _TE = "ThrottlingException";
const _VE = "ValidationException";
const _XAIPV = "X-Amzn-Invoked-Production-Variant";
const _XASA = "X-Amzn-SageMaker-Accept";
const _XASCA = "X-Amzn-SageMaker-Custom-Attributes";
const _XASCT = "X-Amzn-SageMaker-Content-Type";
const _XASF = "X-Amzn-SageMaker-Filename";
const _XASF_ = "X-Amzn-SageMaker-FailureLocation";
const _XASI = "X-Amzn-SageMaker-InputLocation";
const _XASII = "X-Amzn-SageMaker-Inference-Id";
const _XASIRR = "X-Amzn-SageMaker-Invoked-Routing-Reason";
const _XASIRRA = "X-Amzn-SageMaker-Invoked-Routed-Resource-Arn";
const _XASI_ = "X-Amzn-SageMaker-InvocationTimeoutSeconds";
const _XASO = "X-Amzn-SageMaker-OutputLocation";
const _XASPAI = "X-Amzn-SageMaker-Prefix-Aware-Id";
const _XASR = "X-Amzn-SageMaker-RequestTTLSeconds";
const _XASRTN = "X-Amzn-SageMaker-Routing-Target-Name";
const _XASS = "X-Amzn-SageMaker-S3OutputPathExtension";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.sagemakerinferencerouterruntime";
const _se = "server";
const n0 = "com.amazonaws.sagemakerinferencerouterruntime";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  AccessDeniedException,
  InternalDependencyException,
  InternalFailure,
  ModelError,
  ModelNotReadyException,
  RequestTimeoutException,
  ServiceUnavailableException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";
import {
  SageMakerInferenceRouterRuntimeServiceException,
} from "../models/SageMakerInferenceRouterRuntimeServiceException";

/* eslint no-var: 0 */
const _s_registry = new TypeRegistry(_s);
export var SageMakerInferenceRouterRuntimeServiceException$: StaticErrorSchema = [-3, _s, "SageMakerInferenceRouterRuntimeServiceException", 0, [], []];
_s_registry.registerError(SageMakerInferenceRouterRuntimeServiceException$, SageMakerInferenceRouterRuntimeServiceException);
const n0_registry = new TypeRegistry(n0);
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_M],
  [0]
];
n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
export var InternalDependencyException$: StaticErrorSchema = [-3, n0, _IDE,
  { [_e]: _se, [_hE]: 530 },
  [_M],
  [0]
];
n0_registry.registerError(InternalDependencyException$, InternalDependencyException);
export var InternalFailure$: StaticErrorSchema = [-3, n0, _IF,
  { [_e]: _se, [_hE]: 500 },
  [_M],
  [0]
];
n0_registry.registerError(InternalFailure$, InternalFailure);
export var ModelError$: StaticErrorSchema = [-3, n0, _ME,
  { [_e]: _c, [_hE]: 424 },
  [_M, _OSC, _OM, _LSA],
  [0, 1, 0, 0]
];
n0_registry.registerError(ModelError$, ModelError);
export var ModelNotReadyException$: StaticErrorSchema = [-3, n0, _MNRE,
  { [_e]: _c, [_hE]: 429 },
  [_M],
  [0]
];
n0_registry.registerError(ModelNotReadyException$, ModelNotReadyException);
export var RequestTimeoutException$: StaticErrorSchema = [-3, n0, _RTE,
  { [_e]: _c, [_hE]: 408 },
  [_M],
  [0]
];
n0_registry.registerError(RequestTimeoutException$, RequestTimeoutException);
export var ServiceUnavailableException$: StaticErrorSchema = [-3, n0, _SUE,
  { [_e]: _se, [_hE]: 503 },
  [_M],
  [0]
];
n0_registry.registerError(ServiceUnavailableException$, ServiceUnavailableException);
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c, [_hE]: 429 },
  [_M],
  [0]
];
n0_registry.registerError(ThrottlingException$, ThrottlingException);
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_M],
  [0]
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
var CustomAttributesHeader: StaticSimpleSchema = [0, n0, _CAH, 8, 0];
var InferenceRouterBodyBlob: StaticSimpleSchema = [0, n0, _IRBB, 8, 21];
export var InvokeInferenceRouterAsyncInput$: StaticStructureSchema = [3, n0, _IIRAI,
  0,
  [_IRN, _RTN, _IL, _CT, _A, _CA, _II, _SOPE, _F, _RTTLS, _ITS],
  [[0, 1], [0, { [_hH]: _XASRTN }], [0, { [_hH]: _XASI }], [0, { [_hH]: _XASCT }], [0, { [_hH]: _XASA }], [() => CustomAttributesHeader, { [_hH]: _XASCA }], [0, { [_hH]: _XASII }], [0, { [_hH]: _XASS }], [0, { [_hH]: _XASF }], [1, { [_hH]: _XASR }], [1, { [_hH]: _XASI_ }]], 3
];
export var InvokeInferenceRouterAsyncOutput$: StaticStructureSchema = [3, n0, _IIRAO,
  0,
  [_II, _OL, _FL],
  [0, [0, { [_hH]: _XASO }], [0, { [_hH]: _XASF_ }]]
];
export var InvokeInferenceRouterInput$: StaticStructureSchema = [3, n0, _IIRI,
  0,
  [_IRN, _RTN, _B, _CT, _A, _II, _PAI, _CA],
  [[0, 1], [0, { [_hH]: _XASRTN }], [() => InferenceRouterBodyBlob, 16], [0, { [_hH]: _CT_ }], [0, { [_hH]: _A }], [0, { [_hH]: _XASII }], [0, { [_hH]: _XASPAI }], [() => CustomAttributesHeader, { [_hH]: _XASCA }]], 3
];
export var InvokeInferenceRouterOutput$: StaticStructureSchema = [3, n0, _IIRO,
  0,
  [_B, _CT, _IRRA, _RR, _IPV, _CA],
  [[() => InferenceRouterBodyBlob, 16], [0, { [_hH]: _CT_ }], [0, { [_hH]: _XASIRRA }], [0, { [_hH]: _XASIRR }], [0, { [_hH]: _XAIPV }], [() => CustomAttributesHeader, { [_hH]: _XASCA }]]
];
export var InvokeInferenceRouter$: StaticOperationSchema = [9, n0, _IIR,
  { [_h]: ["POST", "/inference-routers/{InferenceRouterName}/invocations", 200] }, () => InvokeInferenceRouterInput$, () => InvokeInferenceRouterOutput$
];
export var InvokeInferenceRouterAsync$: StaticOperationSchema = [9, n0, _IIRA,
  { [_h]: ["POST", "/inference-routers/{InferenceRouterName}/async-invocations", 202] }, () => InvokeInferenceRouterAsyncInput$, () => InvokeInferenceRouterAsyncOutput$
];
