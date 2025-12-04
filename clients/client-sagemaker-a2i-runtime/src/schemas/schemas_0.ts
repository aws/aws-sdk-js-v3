const _CC = "ContentClassifiers";
const _CE = "ConflictException";
const _CT = "CreationTime";
const _CTA = "CreationTimeAfter";
const _CTB = "CreationTimeBefore";
const _DA = "DataAttributes";
const _DHL = "DeleteHumanLoop";
const _DHLR = "DeleteHumanLoopRequest";
const _DHLRe = "DeleteHumanLoopResponse";
const _DHLRes = "DescribeHumanLoopRequest";
const _DHLResc = "DescribeHumanLoopResponse";
const _DHLe = "DescribeHumanLoop";
const _FC = "FailureCode";
const _FDA = "FlowDefinitionArn";
const _FR = "FailureReason";
const _HLA = "HumanLoopArn";
const _HLDA = "HumanLoopDataAttributes";
const _HLI = "HumanLoopInput";
const _HLN = "HumanLoopName";
const _HLO = "HumanLoopOutput";
const _HLS = "HumanLoopStatus";
const _HLSu = "HumanLoopSummary";
const _HLSum = "HumanLoopSummaries";
const _IC = "InputContent";
const _ISE = "InternalServerException";
const _LHL = "ListHumanLoops";
const _LHLR = "ListHumanLoopsRequest";
const _LHLRi = "ListHumanLoopsResponse";
const _M = "Message";
const _MR = "MaxResults";
const _NT = "NextToken";
const _OSU = "OutputS3Uri";
const _RNFE = "ResourceNotFoundException";
const _SHL = "StartHumanLoop";
const _SHLR = "StartHumanLoopRequest";
const _SHLRt = "StartHumanLoopResponse";
const _SHLRto = "StopHumanLoopRequest";
const _SHLRtop = "StopHumanLoopResponse";
const _SHLt = "StopHumanLoop";
const _SO = "SortOrder";
const _SQEE = "ServiceQuotaExceededException";
const _TE = "ThrottlingException";
const _VE = "ValidationException";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.sagemakera2iruntime";
const n0 = "com.amazonaws.sagemakera2iruntime";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/errors";
import { SageMakerA2IRuntimeServiceException as __SageMakerA2IRuntimeServiceException } from "../models/SageMakerA2IRuntimeServiceException";

/* eslint no-var: 0 */
export var ConflictException: StaticErrorSchema = [-3, n0, _CE, { [_e]: _c, [_hE]: 409 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);
export var DeleteHumanLoopRequest: StaticStructureSchema = [3, n0, _DHLR, 0, [_HLN], [[0, 1]]];
export var DeleteHumanLoopResponse: StaticStructureSchema = [3, n0, _DHLRe, 0, [], []];
export var DescribeHumanLoopRequest: StaticStructureSchema = [3, n0, _DHLRes, 0, [_HLN], [[0, 1]]];
export var DescribeHumanLoopResponse: StaticStructureSchema = [
  3,
  n0,
  _DHLResc,
  0,
  [_CT, _FR, _FC, _HLS, _HLN, _HLA, _FDA, _HLO],
  [5, 0, 0, 0, 0, 0, 0, () => HumanLoopOutput],
];
export var HumanLoopDataAttributes: StaticStructureSchema = [3, n0, _HLDA, 0, [_CC], [64 | 0]];
export var HumanLoopInput: StaticStructureSchema = [3, n0, _HLI, 0, [_IC], [0]];
export var HumanLoopOutput: StaticStructureSchema = [3, n0, _HLO, 0, [_OSU], [0]];
export var HumanLoopSummary: StaticStructureSchema = [3, n0, _HLSu, 0, [_HLN, _HLS, _CT, _FR, _FDA], [0, 0, 5, 0, 0]];
export var InternalServerException: StaticErrorSchema = [-3, n0, _ISE, { [_e]: _s, [_hE]: 500 }, [_M], [0]];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);
export var ListHumanLoopsRequest: StaticStructureSchema = [
  3,
  n0,
  _LHLR,
  0,
  [_CTA, _CTB, _FDA, _SO, _NT, _MR],
  [
    [5, { [_hQ]: _CTA }],
    [5, { [_hQ]: _CTB }],
    [0, { [_hQ]: _FDA }],
    [0, { [_hQ]: _SO }],
    [0, { [_hQ]: _NT }],
    [1, { [_hQ]: _MR }],
  ],
];
export var ListHumanLoopsResponse: StaticStructureSchema = [
  3,
  n0,
  _LHLRi,
  0,
  [_HLSum, _NT],
  [() => HumanLoopSummaries, 0],
];
export var ResourceNotFoundException: StaticErrorSchema = [-3, n0, _RNFE, { [_e]: _c, [_hE]: 404 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);
export var ServiceQuotaExceededException: StaticErrorSchema = [-3, n0, _SQEE, { [_e]: _c, [_hE]: 402 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);
export var StartHumanLoopRequest: StaticStructureSchema = [
  3,
  n0,
  _SHLR,
  0,
  [_HLN, _FDA, _HLI, _DA],
  [0, 0, () => HumanLoopInput, () => HumanLoopDataAttributes],
];
export var StartHumanLoopResponse: StaticStructureSchema = [3, n0, _SHLRt, 0, [_HLA], [0]];
export var StopHumanLoopRequest: StaticStructureSchema = [3, n0, _SHLRto, 0, [_HLN], [0]];
export var StopHumanLoopResponse: StaticStructureSchema = [3, n0, _SHLRtop, 0, [], []];
export var ThrottlingException: StaticErrorSchema = [-3, n0, _TE, { [_e]: _c, [_hE]: 429 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);
export var ValidationException: StaticErrorSchema = [-3, n0, _VE, { [_e]: _c, [_hE]: 400 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);
export var __Unit = "unit" as const;
export var SageMakerA2IRuntimeServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "SageMakerA2IRuntimeServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(SageMakerA2IRuntimeServiceException, __SageMakerA2IRuntimeServiceException);
export var ContentClassifiers = 64 | 0;
export var HumanLoopSummaries: StaticListSchema = [1, n0, _HLSum, 0, () => HumanLoopSummary];
export var DeleteHumanLoop: StaticOperationSchema = [
  9,
  n0,
  _DHL,
  { [_h]: ["DELETE", "/human-loops/{HumanLoopName}", 200] },
  () => DeleteHumanLoopRequest,
  () => DeleteHumanLoopResponse,
];
export var DescribeHumanLoop: StaticOperationSchema = [
  9,
  n0,
  _DHLe,
  { [_h]: ["GET", "/human-loops/{HumanLoopName}", 200] },
  () => DescribeHumanLoopRequest,
  () => DescribeHumanLoopResponse,
];
export var ListHumanLoops: StaticOperationSchema = [
  9,
  n0,
  _LHL,
  { [_h]: ["GET", "/human-loops", 200] },
  () => ListHumanLoopsRequest,
  () => ListHumanLoopsResponse,
];
export var StartHumanLoop: StaticOperationSchema = [
  9,
  n0,
  _SHL,
  { [_h]: ["POST", "/human-loops", 200] },
  () => StartHumanLoopRequest,
  () => StartHumanLoopResponse,
];
export var StopHumanLoop: StaticOperationSchema = [
  9,
  n0,
  _SHLt,
  { [_h]: ["POST", "/human-loops/stop", 200] },
  () => StopHumanLoopRequest,
  () => StopHumanLoopResponse,
];
