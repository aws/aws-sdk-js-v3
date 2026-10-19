const _A = "Accept";
const _APC = "AdamParamsConfig";
const _CE = "ConflictException";
const _CLC = "ComputeLogprobsConfig";
const _CLR = "ComputeLogprobsResult";
const _CT = "Content-Type";
const _D = "Datum";
const _DL = "DatumList";
const _ESO = "ExecuteSamplingOperation";
const _ESOI = "ExecuteSamplingOperationInput";
const _ESOO = "ExecuteSamplingOperationOutput";
const _ETC = "EncodedTextChunk";
const _ETCL = "EncodedTextChunkList";
const _ETO = "ExecuteTrainingOperation";
const _ETOI = "ExecuteTrainingOperationInput";
const _ETOO = "ExecuteTrainingOperationOutput";
const _FBC = "ForwardBackwardConfig";
const _FBR = "ForwardBackwardResult";
const _FC = "ForwardConfig";
const _FR = "ForwardResult";
const _GSOR = "GetSamplingOperationResult";
const _GSORI = "GetSamplingOperationResultInput";
const _GSORO = "GetSamplingOperationResultOutput";
const _GTOR = "GetTrainingOperationResult";
const _GTORI = "GetTrainingOperationResultInput";
const _GTORO = "GetTrainingOperationResultOutput";
const _IB = "InferenceBody";
const _ISE = "InternalServerException";
const _LSC = "LoadStateConfig";
const _LSR = "LoadStateResult";
const _LWFSC = "LoadWeightsForSamplingConfig";
const _LWFSR = "LoadWeightsForSamplingResult";
const _MI = "ModelInput";
const _OC = "OperationConfig";
const _OR = "OperationResult";
const _OSC = "OptimizerStepConfig";
const _OSR = "OptimizerStepResult";
const _RNFE = "ResourceNotFoundException";
const _SC = "SampleConfig";
const _SOC = "SampleOperationConfig";
const _SOR = "SampleOperationResult";
const _SP = "SamplingParams";
const _SR = "SampleResponse";
const _SRS = "SampleResponseStream";
const _SS = "SampledSequence";
const _SSC = "SaveStateConfig";
const _SSL = "SampledSequenceList";
const _SSR = "SaveStateResult";
const _STS = "SampleTrainingSession";
const _STSI = "SampleTrainingSessionInput";
const _STSO = "SampleTrainingSessionOutput";
const _STSWRS = "SampleTrainingSessionWithResponseStream";
const _STSWRSI = "SampleTrainingSessionWithResponseStreamInput";
const _STSWRSO = "SampleTrainingSessionWithResponseStreamOutput";
const _STU = "SampleTokenUsage";
const _SWC = "SaveWeightsConfig";
const _SWR = "SaveWeightsResult";
const _TD = "TensorData";
const _TDM = "TensorDataMap";
const _TDML = "TensorDataMapList";
const _TE = "ThrottlingException";
const _TL = "TokenLogprob";
const _TLL = "TokenLogprobList";
const _TPLL = "TopkPromptLogprobsList";
const _TTU = "TrainingTokenUsage";
const _VE = "ValidationException";
const _XASMP = "X-Amzn-SageMaker-Model-Package";
const _a = "accept";
const _aPC = "adamParamsConfig";
const _b = "beta1";
const _be = "beta2";
const _bo = "body";
const _c = "client";
const _cL = "computeLogprobs";
const _cT = "clientToken";
const _cTo = "contentType";
const _ch = "chunks";
const _d = "decode";
const _dL = "datumList";
const _da = "data";
const _de = "description";
const _dt = "dtype";
const _e = "error";
const _eD = "errorDetails";
const _ep = "eps";
const _f = "forward";
const _fB = "forwardBackward";
const _gCN = "gradClipNorm";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _iPL = "includePromptLogprobs";
const _l = "logprobs";
const _lFC = "lossFnConfig";
const _lFI = "lossFnInputs";
const _lFN = "lossFnName";
const _lFO = "lossFnOutputs";
const _lFOT = "lossFnOutputType";
const _lO = "loadOptimizer";
const _lPLR = "loraPlusLrRatio";
const _lR = "learningRate";
const _lS = "loadState";
const _lWFS = "loadWeightsForSampling";
const _lo = "logprob";
const _m = "message";
const _mI = "modelInput";
const _mPA = "modelPackageArn";
const _mT = "mediaType";
const _mTa = "maxTokens";
const _mW = "mergeWeights";
const _me = "metrics";
const _nS = "numSamples";
const _oC = "operationConfig";
const _oI = "operationId";
const _oR = "operationResult";
const _oS = "optimizerStep";
const _p = "prompt";
const _pL = "promptLogprobs";
const _pr = "prefill";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.sagemakertrainingsessionruntime";
const _sN = "sequenceNumber";
const _sP = "samplingParams";
const _sR = "stopReason";
const _sS = "saveState";
const _sW = "saveWeights";
const _sa = "sample";
const _se = "server";
const _see = "seed";
const _sen = "sensitive";
const _seq = "sequences";
const _sh = "shape";
const _st = "streaming";
const _sta = "status";
const _sto = "stop";
const _t = "tokens";
const _tI = "tokenId";
const _tK = "topK";
const _tP = "topP";
const _tPL = "topkPromptLogprobs";
const _tSN = "trainingSessionName";
const _tT = "trainingTokens";
const _tU = "tokenUsage";
const _te = "temperature";
const _ts = "text/event-stream";
const _ty = "type";
const _wD = "weightDecay";
const n0 = "com.amazonaws.sagemakertrainingsessionruntime";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
  StaticUnionSchema,
} from "@smithy/types";

import {
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";
import {
  SageMakerTrainingSessionRuntimeServiceException,
} from "../models/SageMakerTrainingSessionRuntimeServiceException";

/* eslint no-var: 0 */
const _s_registry = new TypeRegistry(_s);
export var SageMakerTrainingSessionRuntimeServiceException$: StaticErrorSchema = [-3, _s, "SageMakerTrainingSessionRuntimeServiceException", 0, [], []];
_s_registry.registerError(SageMakerTrainingSessionRuntimeServiceException$, SageMakerTrainingSessionRuntimeServiceException);
const n0_registry = new TypeRegistry(n0);
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE,
  { [_e]: _c, [_hE]: 409 },
  [_m],
  [0], 1
];
n0_registry.registerError(ConflictException$, ConflictException);
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_m],
  [0], 1
];
n0_registry.registerError(InternalServerException$, InternalServerException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_m],
  [0], 1
];
n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c, [_hE]: 429 },
  [_m],
  [0], 1
];
n0_registry.registerError(ThrottlingException$, ThrottlingException);
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
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
var InferenceBody: StaticSimpleSchema = [0, n0, _IB, 8, 21];
var SampleResponseStream: StaticSimpleSchema = [0, n0, _SRS, { [_mT]: _ts, [_sen]: 1, [_st]: 1 }, 42];
export var AdamParamsConfig$: StaticStructureSchema = [3, n0, _APC,
  0,
  [_lR, _b, _be, _ep, _wD, _gCN, _lPLR],
  [1, 1, 1, 1, 1, 1, 1], 1
];
export var ComputeLogprobsConfig$: StaticStructureSchema = [3, n0, _CLC,
  0,
  [_p, _mPA],
  [[() => ModelInput$, 0], 0], 1
];
export var ComputeLogprobsResult$: StaticStructureSchema = [3, n0, _CLR,
  0,
  [_l],
  [64 | 1], 1
];
export var Datum$: StaticStructureSchema = [3, n0, _D,
  8,
  [_mI, _lFI],
  [[() => ModelInput$, 0], () => TensorDataMap], 1
];
export var EncodedTextChunk$: StaticStructureSchema = [3, n0, _ETC,
  0,
  [_t, _ty],
  [64 | 1, 0], 2
];
export var ExecuteSamplingOperationInput$: StaticStructureSchema = [3, n0, _ESOI,
  0,
  [_tSN, _oC],
  [[0, 1], [() => SampleOperationConfig$, 0]], 2
];
export var ExecuteSamplingOperationOutput$: StaticStructureSchema = [3, n0, _ESOO,
  0,
  [_oI],
  [0], 1
];
export var ExecuteTrainingOperationInput$: StaticStructureSchema = [3, n0, _ETOI,
  0,
  [_tSN, _sN, _oC, _cT],
  [[0, 1], 1, [() => OperationConfig$, 0], 0], 3
];
export var ExecuteTrainingOperationOutput$: StaticStructureSchema = [3, n0, _ETOO,
  0,
  [_oI],
  [0], 1
];
export var ForwardBackwardConfig$: StaticStructureSchema = [3, n0, _FBC,
  0,
  [_lFN, _dL, _lFC],
  [0, [() => DatumList, 0], 15], 2
];
export var ForwardBackwardResult$: StaticStructureSchema = [3, n0, _FBR,
  0,
  [_lFOT, _lFO, _me, _tU],
  [0, () => TensorDataMapList, 128 | 1, () => TrainingTokenUsage$]
];
export var ForwardConfig$: StaticStructureSchema = [3, n0, _FC,
  0,
  [_lFN, _dL, _lFC],
  [0, [() => DatumList, 0], 15], 2
];
export var ForwardResult$: StaticStructureSchema = [3, n0, _FR,
  0,
  [_lFOT, _lFO, _me, _tU],
  [0, () => TensorDataMapList, 128 | 1, () => TrainingTokenUsage$]
];
export var GetSamplingOperationResultInput$: StaticStructureSchema = [3, n0, _GSORI,
  0,
  [_tSN, _oI],
  [[0, 1], [0, 1]], 2
];
export var GetSamplingOperationResultOutput$: StaticStructureSchema = [3, n0, _GSORO,
  0,
  [_sta, _oR, _eD],
  [0, [() => SampleOperationResult$, 0], 0], 1
];
export var GetTrainingOperationResultInput$: StaticStructureSchema = [3, n0, _GTORI,
  0,
  [_tSN, _oI],
  [[0, 1], [0, 1]], 2
];
export var GetTrainingOperationResultOutput$: StaticStructureSchema = [3, n0, _GTORO,
  0,
  [_sta, _oR, _eD, _tU],
  [0, () => OperationResult$, 0, () => TrainingTokenUsage$], 1
];
export var LoadStateConfig$: StaticStructureSchema = [3, n0, _LSC,
  0,
  [_mPA, _lO],
  [0, 2], 2
];
export var LoadStateResult$: StaticStructureSchema = [3, n0, _LSR,
  0,
  [],
  []
];
export var LoadWeightsForSamplingConfig$: StaticStructureSchema = [3, n0, _LWFSC,
  0,
  [_mPA],
  [0], 1
];
export var LoadWeightsForSamplingResult$: StaticStructureSchema = [3, n0, _LWFSR,
  0,
  [],
  []
];
export var ModelInput$: StaticStructureSchema = [3, n0, _MI,
  8,
  [_ch],
  [() => EncodedTextChunkList], 1
];
export var OptimizerStepConfig$: StaticStructureSchema = [3, n0, _OSC,
  0,
  [_aPC],
  [() => AdamParamsConfig$], 1
];
export var OptimizerStepResult$: StaticStructureSchema = [3, n0, _OSR,
  0,
  [_me],
  [128 | 1]
];
export var SampleConfig$: StaticStructureSchema = [3, n0, _SC,
  0,
  [_p, _nS, _sP, _iPL, _tPL, _mPA],
  [[() => ModelInput$, 0], 1, () => SamplingParams$, 2, 1, 0], 3
];
export var SampledSequence$: StaticStructureSchema = [3, n0, _SS,
  0,
  [_sR, _t, _l, _tU],
  [0, 64 | 1, 64 | 1, () => SampleTokenUsage$], 2
];
export var SampleResponse$: StaticStructureSchema = [3, n0, _SR,
  8,
  [_seq, _pL, _tPL],
  [() => SampledSequenceList, 64 | 1, () => TopkPromptLogprobsList], 1
];
export var SampleTokenUsage$: StaticStructureSchema = [3, n0, _STU,
  0,
  [_pr, _d],
  [1, 1], 2
];
export var SampleTrainingSessionInput$: StaticStructureSchema = [3, n0, _STSI,
  0,
  [_tSN, _cTo, _a, _mPA, _bo],
  [[0, 1], [0, { [_hH]: _CT }], [0, { [_hH]: _A }], [0, { [_hH]: _XASMP }], [() => InferenceBody, 16]], 1
];
export var SampleTrainingSessionOutput$: StaticStructureSchema = [3, n0, _STSO,
  0,
  [_bo, _cTo],
  [[() => InferenceBody, 16], [0, { [_hH]: _CT }]], 1
];
export var SampleTrainingSessionWithResponseStreamInput$: StaticStructureSchema = [3, n0, _STSWRSI,
  0,
  [_tSN, _cTo, _a, _mPA, _bo],
  [[0, 1], [0, { [_hH]: _CT }], [0, { [_hH]: _A }], [0, { [_hH]: _XASMP }], [() => InferenceBody, 16]], 1
];
export var SampleTrainingSessionWithResponseStreamOutput$: StaticStructureSchema = [3, n0, _STSWRSO,
  0,
  [_bo, _cTo],
  [[() => SampleResponseStream, 16], [0, { [_hH]: _CT }]], 1
];
export var SamplingParams$: StaticStructureSchema = [3, n0, _SP,
  0,
  [_mTa, _te, _tK, _tP, _see, _sto],
  [1, 1, 1, 1, 1, 64 | 0], 1
];
export var SaveStateConfig$: StaticStructureSchema = [3, n0, _SSC,
  0,
  [_de],
  [0]
];
export var SaveStateResult$: StaticStructureSchema = [3, n0, _SSR,
  0,
  [_mPA],
  [0], 1
];
export var SaveWeightsConfig$: StaticStructureSchema = [3, n0, _SWC,
  0,
  [_mW, _de],
  [2, 0]
];
export var SaveWeightsResult$: StaticStructureSchema = [3, n0, _SWR,
  0,
  [_mPA],
  [0]
];
export var TensorData$: StaticStructureSchema = [3, n0, _TD,
  0,
  [_da, _dt, _sh],
  [15, 0, 64 | 1], 2
];
export var TokenLogprob$: StaticStructureSchema = [3, n0, _TL,
  0,
  [_tI, _lo],
  [1, 1], 2
];
export var TrainingTokenUsage$: StaticStructureSchema = [3, n0, _TTU,
  0,
  [_tT],
  [1]
];
var DatumList: StaticListSchema = [1, n0, _DL,
  0, [() => Datum$,
    0]
];
var DoubleList = 64 | 1;
var EncodedTextChunkList: StaticListSchema = [1, n0, _ETCL,
  0, () => EncodedTextChunk$
];
var IntegerList = 64 | 1;
var SampledSequenceList: StaticListSchema = [1, n0, _SSL,
  0, () => SampledSequence$
];
var StopSequenceList = 64 | 0;
var TensorDataMapList: StaticListSchema = [1, n0, _TDML,
  0, () => TensorDataMap
];
var TokenLogprobList: StaticListSchema = [1, n0, _TLL,
  0, () => TokenLogprob$
];
var TopkPromptLogprobsList: StaticListSchema = [1, n0, _TPLL,
  0, () => TokenLogprobList
];
var MetricsMap = 128 | 1;
var TensorDataMap: StaticMapSchema = [2, n0, _TDM,
  0, 0, () => TensorData$
];
export var OperationConfig$: StaticUnionSchema = [4, n0, _OC,
  0,
  [_f, _fB, _oS, _sW, _sS, _lS],
  [[() => ForwardConfig$, 0], [() => ForwardBackwardConfig$, 0], () => OptimizerStepConfig$, () => SaveWeightsConfig$, () => SaveStateConfig$, () => LoadStateConfig$]
];
export var OperationResult$: StaticUnionSchema = [4, n0, _OR,
  0,
  [_f, _fB, _oS, _sW, _sS, _lS],
  [() => ForwardResult$, () => ForwardBackwardResult$, () => OptimizerStepResult$, () => SaveWeightsResult$, () => SaveStateResult$, () => LoadStateResult$]
];
export var SampleOperationConfig$: StaticUnionSchema = [4, n0, _SOC,
  0,
  [_sa, _cL, _lWFS],
  [[() => SampleConfig$, 0], [() => ComputeLogprobsConfig$, 0], () => LoadWeightsForSamplingConfig$]
];
export var SampleOperationResult$: StaticUnionSchema = [4, n0, _SOR,
  0,
  [_sa, _cL, _lWFS],
  [[() => SampleResponse$, 0], () => ComputeLogprobsResult$, () => LoadWeightsForSamplingResult$]
];
export var ExecuteSamplingOperation$: StaticOperationSchema = [9, n0, _ESO,
  { [_h]: ["POST", "/v1/training-sessions/{trainingSessionName}/sampling-operations", 200] }, () => ExecuteSamplingOperationInput$, () => ExecuteSamplingOperationOutput$
];
export var ExecuteTrainingOperation$: StaticOperationSchema = [9, n0, _ETO,
  { [_h]: ["POST", "/v1/training-sessions/{trainingSessionName}/operations", 200] }, () => ExecuteTrainingOperationInput$, () => ExecuteTrainingOperationOutput$
];
export var GetSamplingOperationResult$: StaticOperationSchema = [9, n0, _GSOR,
  { [_h]: ["GET", "/v1/training-sessions/{trainingSessionName}/sampling-operations/{operationId}", 200] }, () => GetSamplingOperationResultInput$, () => GetSamplingOperationResultOutput$
];
export var GetTrainingOperationResult$: StaticOperationSchema = [9, n0, _GTOR,
  { [_h]: ["GET", "/v1/training-sessions/{trainingSessionName}/operations/{operationId}", 200] }, () => GetTrainingOperationResultInput$, () => GetTrainingOperationResultOutput$
];
export var SampleTrainingSession$: StaticOperationSchema = [9, n0, _STS,
  { [_h]: ["POST", "/training-sessions/{trainingSessionName}/sample", 200] }, () => SampleTrainingSessionInput$, () => SampleTrainingSessionOutput$
];
export var SampleTrainingSessionWithResponseStream$: StaticOperationSchema = [9, n0, _STSWRS,
  { [_h]: ["POST", "/training-sessions/{trainingSessionName}/sample-with-response-stream", 200] }, () => SampleTrainingSessionWithResponseStreamInput$, () => SampleTrainingSessionWithResponseStreamOutput$
];
