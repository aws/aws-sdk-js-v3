const _B = "Body";
const _By = "Bytes";
const _CS = "CompletionState";
const _DT = "DataType";
const _EC = "ErrorCode";
const _EN = "EndpointName";
const _IEWBS = "InvokeEndpointWithBidirectionalStream";
const _IEWBSI = "InvokeEndpointWithBidirectionalStreamInput";
const _IEWBSO = "InvokeEndpointWithBidirectionalStreamOutput";
const _IPV = "InvokedProductionVariant";
const _ISE = "InternalServerError";
const _ISF = "InternalStreamFailure";
const _IVE = "InputValidationError";
const _LSA = "LogStreamArn";
const _M = "Message";
const _ME = "ModelError";
const _MIP = "ModelInvocationPath";
const _MQS = "ModelQueryString";
const _MSE = "ModelStreamError";
const _OM = "OriginalMessage";
const _OSC = "OriginalStatusCode";
const _P = "P";
const _PP = "PayloadPart";
const _RPP = "RequestPayloadPart";
const _RPPe = "ResponsePayloadPart";
const _RSE = "RequestStreamEvent";
const _RSEe = "ResponseStreamEvent";
const _SB = "SensitiveBlob";
const _SUE = "ServiceUnavailableError";
const _TV = "TargetVariant";
const _XAIPV = "X-Amzn-Invoked-Production-Variant";
const _XASMIP = "X-Amzn-SageMaker-Model-Invocation-Path";
const _XASMQS = "X-Amzn-SageMaker-Model-Query-String";
const _XASTV = "X-Amzn-SageMaker-Target-Variant";
const _c = "client";
const _e = "error";
const _eH = "eventHeader";
const _eP = "eventPayload";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.sagemakerruntimehttp2";
const _st = "streaming";
const n0 = "com.amazonaws.sagemakerruntimehttp2";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  InputValidationError as __InputValidationError,
  InternalServerError as __InternalServerError,
  InternalStreamFailure as __InternalStreamFailure,
  ModelError as __ModelError,
  ModelStreamError as __ModelStreamError,
  ServiceUnavailableError as __ServiceUnavailableError,
} from "../models/errors";
import { SageMakerRuntimeHTTP2ServiceException as __SageMakerRuntimeHTTP2ServiceException } from "../models/SageMakerRuntimeHTTP2ServiceException";

/* eslint no-var: 0 */

export var SensitiveBlob: StaticSimpleSchema = [0, n0, _SB, 8, 21];
export var InputValidationError: StaticErrorSchema = [
  -3,
  n0,
  _IVE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _EC],
  [0, 0],
];
TypeRegistry.for(n0).registerError(InputValidationError, __InputValidationError);

export var InternalServerError: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M, _EC],
  [0, 0],
];
TypeRegistry.for(n0).registerError(InternalServerError, __InternalServerError);

export var InternalStreamFailure: StaticErrorSchema = [
  -3,
  n0,
  _ISF,
  {
    [_e]: _s,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InternalStreamFailure, __InternalStreamFailure);

export var InvokeEndpointWithBidirectionalStreamInput: StaticStructureSchema = [
  3,
  n0,
  _IEWBSI,
  0,
  [_EN, _B, _TV, _MIP, _MQS],
  [
    [0, 1],
    [() => RequestStreamEvent, 16],
    [
      0,
      {
        [_hH]: _XASTV,
      },
    ],
    [
      0,
      {
        [_hH]: _XASMIP,
      },
    ],
    [
      0,
      {
        [_hH]: _XASMQS,
      },
    ],
  ],
];
export var InvokeEndpointWithBidirectionalStreamOutput: StaticStructureSchema = [
  3,
  n0,
  _IEWBSO,
  0,
  [_B, _IPV],
  [
    [() => ResponseStreamEvent, 16],
    [
      0,
      {
        [_hH]: _XAIPV,
      },
    ],
  ],
];
export var ModelError: StaticErrorSchema = [
  -3,
  n0,
  _ME,
  {
    [_e]: _c,
    [_hE]: 424,
  },
  [_M, _OSC, _OM, _LSA, _EC],
  [0, 1, 0, 0, 0],
];
TypeRegistry.for(n0).registerError(ModelError, __ModelError);

export var ModelStreamError: StaticErrorSchema = [
  -3,
  n0,
  _MSE,
  {
    [_e]: _c,
  },
  [_M, _EC],
  [0, 0],
];
TypeRegistry.for(n0).registerError(ModelStreamError, __ModelStreamError);

export var RequestPayloadPart: StaticStructureSchema = [
  3,
  n0,
  _RPP,
  0,
  [_By, _DT, _CS, _P],
  [
    [
      () => SensitiveBlob,
      {
        [_eP]: 1,
      },
    ],
    [
      0,
      {
        [_eH]: 1,
      },
    ],
    [
      0,
      {
        [_eH]: 1,
      },
    ],
    [
      0,
      {
        [_eH]: 1,
      },
    ],
  ],
];
export var ResponsePayloadPart: StaticStructureSchema = [
  3,
  n0,
  _RPPe,
  0,
  [_By, _DT, _CS, _P],
  [
    [
      () => SensitiveBlob,
      {
        [_eP]: 1,
      },
    ],
    [
      0,
      {
        [_eH]: 1,
      },
    ],
    [
      0,
      {
        [_eH]: 1,
      },
    ],
    [
      0,
      {
        [_eH]: 1,
      },
    ],
  ],
];
export var ServiceUnavailableError: StaticErrorSchema = [
  -3,
  n0,
  _SUE,
  {
    [_e]: _s,
    [_hE]: 503,
  },
  [_M, _EC],
  [0, 0],
];
TypeRegistry.for(n0).registerError(ServiceUnavailableError, __ServiceUnavailableError);

export var SageMakerRuntimeHTTP2ServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "SageMakerRuntimeHTTP2ServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(SageMakerRuntimeHTTP2ServiceException, __SageMakerRuntimeHTTP2ServiceException);

export var RequestStreamEvent: StaticStructureSchema = [
  3,
  n0,
  _RSE,
  {
    [_st]: 1,
  },
  [_PP],
  [[() => RequestPayloadPart, 0]],
];
export var ResponseStreamEvent: StaticStructureSchema = [
  3,
  n0,
  _RSEe,
  {
    [_st]: 1,
  },
  [_PP, _MSE, _ISF],
  [
    [() => ResponsePayloadPart, 0],
    [() => ModelStreamError, 0],
    [() => InternalStreamFailure, 0],
  ],
];
export var InvokeEndpointWithBidirectionalStream: StaticOperationSchema = [
  9,
  n0,
  _IEWBS,
  {
    [_h]: ["POST", "/endpoints/{EndpointName}/invocations-bidirectional-stream", 200],
  },
  () => InvokeEndpointWithBidirectionalStreamInput,
  () => InvokeEndpointWithBidirectionalStreamOutput,
];
