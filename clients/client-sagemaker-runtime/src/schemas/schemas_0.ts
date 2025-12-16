const _A = "Accept";
const _B = "Body";
const _BB = "BodyBlob";
const _By = "Bytes";
const _CA = "CustomAttributes";
const _CAH = "CustomAttributesHeader";
const _CSI = "ClosedSessionId";
const _CT = "ContentType";
const _CT_ = "Content-Type";
const _EC = "ErrorCode";
const _EE = "EnableExplanations";
const _EN = "EndpointName";
const _FL = "FailureLocation";
const _ICN = "InferenceComponentName";
const _IDE = "InternalDependencyException";
const _IE = "InvokeEndpoint";
const _IEA = "InvokeEndpointAsync";
const _IEAI = "InvokeEndpointAsyncInput";
const _IEAO = "InvokeEndpointAsyncOutput";
const _IEI = "InvokeEndpointInput";
const _IEO = "InvokeEndpointOutput";
const _IEWRS = "InvokeEndpointWithResponseStream";
const _IEWRSI = "InvokeEndpointWithResponseStreamInput";
const _IEWRSO = "InvokeEndpointWithResponseStreamOutput";
const _IF = "InternalFailure";
const _II = "InferenceId";
const _IL = "InputLocation";
const _IPV = "InvokedProductionVariant";
const _ISF = "InternalStreamFailure";
const _ITS = "InvocationTimeoutSeconds";
const _LSA = "LogStreamArn";
const _M = "Message";
const _ME = "ModelError";
const _MNRE = "ModelNotReadyException";
const _MSE = "ModelStreamError";
const _NSI = "NewSessionId";
const _OL = "OutputLocation";
const _OM = "OriginalMessage";
const _OSC = "OriginalStatusCode";
const _PB = "PartBlob";
const _PP = "PayloadPart";
const _RS = "ResponseStream";
const _RTTLS = "RequestTTLSeconds";
const _SI = "SessionId";
const _SU = "ServiceUnavailable";
const _TCH = "TargetContainerHostname";
const _TM = "TargetModel";
const _TV = "TargetVariant";
const _VE = "ValidationError";
const _XASA = "X-Amzn-SageMaker-Accept";
const _XASCA = "X-Amzn-SageMaker-Custom-Attributes";
const _XASCSI = "X-Amzn-SageMaker-Closed-Session-Id";
const _XASCT = "X-Amzn-SageMaker-Content-Type";
const _XASEE = "X-Amzn-SageMaker-Enable-Explanations";
const _XASF = "X-Amzn-SageMaker-FailureLocation";
const _XASI = "X-Amzn-SageMaker-InputLocation";
const _XASIC = "X-Amzn-SageMaker-Inference-Component";
const _XASII = "X-Amzn-SageMaker-Inference-Id";
const _XASI_ = "X-Amzn-SageMaker-InvocationTimeoutSeconds";
const _XASNSI = "X-Amzn-SageMaker-New-Session-Id";
const _XASO = "X-Amzn-SageMaker-OutputLocation";
const _XASR = "X-Amzn-SageMaker-RequestTTLSeconds";
const _XASSI = "X-Amzn-SageMaker-Session-Id";
const _XASTCH = "X-Amzn-SageMaker-Target-Container-Hostname";
const _XASTM = "X-Amzn-SageMaker-Target-Model";
const _XASTV = "X-Amzn-SageMaker-Target-Variant";
const _aQE = "awsQueryError";
const _c = "client";
const _e = "error";
const _eP = "eventPayload";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.sagemakerruntime";
const _st = "streaming";
const _xAIPV = "x-Amzn-Invoked-Production-Variant";
const n0 = "com.amazonaws.sagemakerruntime";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  InternalDependencyException,
  InternalFailure,
  InternalStreamFailure,
  ModelError,
  ModelNotReadyException,
  ModelStreamError,
  ServiceUnavailable,
  ValidationError,
} from "../models/errors";
import { SageMakerRuntimeServiceException } from "../models/SageMakerRuntimeServiceException";

/* eslint no-var: 0 */
var BodyBlob: StaticSimpleSchema = [0, n0, _BB, 8, 21];
var CustomAttributesHeader: StaticSimpleSchema = [0, n0, _CAH, 8, 0];
var PartBlob: StaticSimpleSchema = [0, n0, _PB, 8, 21];
export var InternalDependencyException$: StaticErrorSchema = [-3, n0, _IDE, { [_e]: _s, [_hE]: 530 }, [_M], [0]];
TypeRegistry.for(n0).registerError(InternalDependencyException$, InternalDependencyException);
export var InternalFailure$: StaticErrorSchema = [-3, n0, _IF, { [_e]: _s, [_hE]: 500 }, [_M], [0]];
TypeRegistry.for(n0).registerError(InternalFailure$, InternalFailure);
export var InternalStreamFailure$: StaticErrorSchema = [-3, n0, _ISF, { [_e]: _s }, [_M], [0]];
TypeRegistry.for(n0).registerError(InternalStreamFailure$, InternalStreamFailure);
export var InvokeEndpointAsyncInput$: StaticStructureSchema = [
  3,
  n0,
  _IEAI,
  0,
  [_EN, _CT, _A, _CA, _II, _IL, _RTTLS, _ITS],
  [
    [0, 1],
    [0, { [_hH]: _XASCT }],
    [0, { [_hH]: _XASA }],
    [() => CustomAttributesHeader, { [_hH]: _XASCA }],
    [0, { [_hH]: _XASII }],
    [0, { [_hH]: _XASI }],
    [1, { [_hH]: _XASR }],
    [1, { [_hH]: _XASI_ }],
  ],
];
export var InvokeEndpointAsyncOutput$: StaticStructureSchema = [
  3,
  n0,
  _IEAO,
  0,
  [_II, _OL, _FL],
  [0, [0, { [_hH]: _XASO }], [0, { [_hH]: _XASF }]],
];
export var InvokeEndpointInput$: StaticStructureSchema = [
  3,
  n0,
  _IEI,
  0,
  [_EN, _B, _CT, _A, _CA, _TM, _TV, _TCH, _II, _EE, _ICN, _SI],
  [
    [0, 1],
    [() => BodyBlob, 16],
    [0, { [_hH]: _CT_ }],
    [0, { [_hH]: _A }],
    [() => CustomAttributesHeader, { [_hH]: _XASCA }],
    [0, { [_hH]: _XASTM }],
    [0, { [_hH]: _XASTV }],
    [0, { [_hH]: _XASTCH }],
    [0, { [_hH]: _XASII }],
    [0, { [_hH]: _XASEE }],
    [0, { [_hH]: _XASIC }],
    [0, { [_hH]: _XASSI }],
  ],
];
export var InvokeEndpointOutput$: StaticStructureSchema = [
  3,
  n0,
  _IEO,
  0,
  [_B, _CT, _IPV, _CA, _NSI, _CSI],
  [
    [() => BodyBlob, 16],
    [0, { [_hH]: _CT_ }],
    [0, { [_hH]: _xAIPV }],
    [() => CustomAttributesHeader, { [_hH]: _XASCA }],
    [0, { [_hH]: _XASNSI }],
    [0, { [_hH]: _XASCSI }],
  ],
];
export var InvokeEndpointWithResponseStreamInput$: StaticStructureSchema = [
  3,
  n0,
  _IEWRSI,
  0,
  [_EN, _B, _CT, _A, _CA, _TV, _TCH, _II, _ICN, _SI],
  [
    [0, 1],
    [() => BodyBlob, 16],
    [0, { [_hH]: _CT_ }],
    [0, { [_hH]: _XASA }],
    [() => CustomAttributesHeader, { [_hH]: _XASCA }],
    [0, { [_hH]: _XASTV }],
    [0, { [_hH]: _XASTCH }],
    [0, { [_hH]: _XASII }],
    [0, { [_hH]: _XASIC }],
    [0, { [_hH]: _XASSI }],
  ],
];
export var InvokeEndpointWithResponseStreamOutput$: StaticStructureSchema = [
  3,
  n0,
  _IEWRSO,
  0,
  [_B, _CT, _IPV, _CA],
  [
    [() => ResponseStream$, 16],
    [0, { [_hH]: _XASCT }],
    [0, { [_hH]: _xAIPV }],
    [() => CustomAttributesHeader, { [_hH]: _XASCA }],
  ],
];
export var ModelError$: StaticErrorSchema = [
  -3,
  n0,
  _ME,
  { [_e]: _c, [_hE]: 424 },
  [_M, _OSC, _OM, _LSA],
  [0, 1, 0, 0],
];
TypeRegistry.for(n0).registerError(ModelError$, ModelError);
export var ModelNotReadyException$: StaticErrorSchema = [
  -3,
  n0,
  _MNRE,
  { [_e]: _c, [_hE]: 429, [_aQE]: [`ModelNotReadyException`, 429] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ModelNotReadyException$, ModelNotReadyException);
export var ModelStreamError$: StaticErrorSchema = [-3, n0, _MSE, { [_e]: _c }, [_M, _EC], [0, 0]];
TypeRegistry.for(n0).registerError(ModelStreamError$, ModelStreamError);
export var PayloadPart$: StaticStructureSchema = [3, n0, _PP, 0, [_By], [[() => PartBlob, { [_eP]: 1 }]]];
export var ServiceUnavailable$: StaticErrorSchema = [-3, n0, _SU, { [_e]: _s, [_hE]: 503 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ServiceUnavailable$, ServiceUnavailable);
export var ValidationError$: StaticErrorSchema = [-3, n0, _VE, { [_e]: _c, [_hE]: 400 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ValidationError$, ValidationError);
export var SageMakerRuntimeServiceException$: StaticErrorSchema = [
  -3,
  _sm,
  "SageMakerRuntimeServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(SageMakerRuntimeServiceException$, SageMakerRuntimeServiceException);
export var ResponseStream$: StaticStructureSchema = [
  3,
  n0,
  _RS,
  { [_st]: 1 },
  [_PP, _MSE, _ISF],
  [
    [() => PayloadPart$, 0],
    [() => ModelStreamError$, 0],
    [() => InternalStreamFailure$, 0],
  ],
];
export var InvokeEndpoint$: StaticOperationSchema = [
  9,
  n0,
  _IE,
  { [_h]: ["POST", "/endpoints/{EndpointName}/invocations", 200] },
  () => InvokeEndpointInput$,
  () => InvokeEndpointOutput$,
];
export var InvokeEndpointAsync$: StaticOperationSchema = [
  9,
  n0,
  _IEA,
  { [_h]: ["POST", "/endpoints/{EndpointName}/async-invocations", 202] },
  () => InvokeEndpointAsyncInput$,
  () => InvokeEndpointAsyncOutput$,
];
export var InvokeEndpointWithResponseStream$: StaticOperationSchema = [
  9,
  n0,
  _IEWRS,
  { [_h]: ["POST", "/endpoints/{EndpointName}/invocations-response-stream", 200] },
  () => InvokeEndpointWithResponseStreamInput$,
  () => InvokeEndpointWithResponseStreamOutput$,
];
