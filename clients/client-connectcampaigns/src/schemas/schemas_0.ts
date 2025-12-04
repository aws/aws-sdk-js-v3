const _A = "Attributes";
const _ADC = "AgentlessDialerConfig";
const _ADE = "AccessDeniedException";
const _AMDC = "AnswerMachineDetectionConfig";
const _C = "Campaign";
const _CC = "CreateCampaign";
const _CCR = "CreateCampaignRequest";
const _CCRr = "CreateCampaignResponse";
const _CE = "ConflictException";
const _CF = "CampaignFilters";
const _CS = "CampaignSummary";
const _CSL = "CampaignSummaryList";
const _DC = "DialerConfig";
const _DCIC = "DeleteConnectInstanceConfig";
const _DCICR = "DeleteConnectInstanceConfigRequest";
const _DCR = "DeleteCampaignRequest";
const _DCRe = "DescribeCampaignRequest";
const _DCRes = "DescribeCampaignResponse";
const _DCe = "DeleteCampaign";
const _DCes = "DescribeCampaign";
const _DIOJ = "DeleteInstanceOnboardingJob";
const _DIOJR = "DeleteInstanceOnboardingJobRequest";
const _DPN = "DestinationPhoneNumber";
const _DR = "DialRequest";
const _DRL = "DialRequestList";
const _EC = "EncryptionConfig";
const _FCSR = "FailedCampaignStateResponse";
const _FCSRL = "FailedCampaignStateResponseList";
const _FR = "FailedRequest";
const _FRL = "FailedRequestList";
const _GCIC = "GetConnectInstanceConfig";
const _GCICR = "GetConnectInstanceConfigRequest";
const _GCICRe = "GetConnectInstanceConfigResponse";
const _GCS = "GetCampaignState";
const _GCSB = "GetCampaignStateBatch";
const _GCSBR = "GetCampaignStateBatchRequest";
const _GCSBRe = "GetCampaignStateBatchResponse";
const _GCSR = "GetCampaignStateRequest";
const _GCSRe = "GetCampaignStateResponse";
const _GIOJS = "GetInstanceOnboardingJobStatus";
const _GIOJSR = "GetInstanceOnboardingJobStatusRequest";
const _GIOJSRe = "GetInstanceOnboardingJobStatusResponse";
const _IC = "InstanceConfig";
const _ICSE = "InvalidCampaignStateException";
const _IIF = "InstanceIdFilter";
const _IOJS = "InstanceOnboardingJobStatus";
const _ISE = "InternalServerException";
const _ISEn = "InvalidStateException";
const _LC = "ListCampaigns";
const _LCR = "ListCampaignsRequest";
const _LCRi = "ListCampaignsResponse";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _OCC = "OutboundCallConfig";
const _PC = "PauseCampaign";
const _PCR = "PauseCampaignRequest";
const _PDC = "PredictiveDialerConfig";
const _PDCr = "ProgressiveDialerConfig";
const _PDRB = "PutDialRequestBatch";
const _PDRBR = "PutDialRequestBatchRequest";
const _PDRBRu = "PutDialRequestBatchResponse";
const _RC = "ResumeCampaign";
const _RCR = "ResumeCampaignRequest";
const _RNFE = "ResourceNotFoundException";
const _SC = "StartCampaign";
const _SCR = "StartCampaignRequest";
const _SCRt = "StopCampaignRequest";
const _SCSR = "SuccessfulCampaignStateResponse";
const _SCSRL = "SuccessfulCampaignStateResponseList";
const _SCt = "StopCampaign";
const _SIOJ = "StartInstanceOnboardingJob";
const _SIOJR = "StartInstanceOnboardingJobRequest";
const _SIOJRt = "StartInstanceOnboardingJobResponse";
const _SQEE = "ServiceQuotaExceededException";
const _SR = "SuccessfulRequest";
const _SRL = "SuccessfulRequestList";
const _TE = "ThrottlingException";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _UCDC = "UpdateCampaignDialerConfig";
const _UCDCR = "UpdateCampaignDialerConfigRequest";
const _UCN = "UpdateCampaignName";
const _UCNR = "UpdateCampaignNameRequest";
const _UCOCC = "UpdateCampaignOutboundCallConfig";
const _UCOCCR = "UpdateCampaignOutboundCallConfigRequest";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _VE = "ValidationException";
const _a = "arn";
const _aAMP = "awaitAnswerMachinePrompt";
const _aDC = "agentlessDialerConfig";
const _aMDC = "answerMachineDetectionConfig";
const _at = "attributes";
const _bA = "bandwidthAllocation";
const _c = "client";
const _cCFI = "connectContactFlowId";
const _cI = "campaignId";
const _cIC = "connectInstanceConfig";
const _cII = "connectInstanceId";
const _cIOJS = "connectInstanceOnboardingJobStatus";
const _cIa = "campaignIds";
const _cQI = "connectQueueId";
const _cSL = "campaignSummaryList";
const _cSPN = "connectSourcePhoneNumber";
const _cT = "clientToken";
const _ca = "campaign";
const _dC = "dialingCapacity";
const _dCi = "dialerConfig";
const _dR = "dialRequests";
const _e = "error";
const _eAMD = "enableAnswerMachineDetection";
const _eC = "encryptionConfig";
const _eT = "expirationTime";
const _eTn = "encryptionType";
const _en = "enabled";
const _f = "filters";
const _fC = "failureCode";
const _fR = "failedRequests";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _i = "id";
const _iIF = "instanceIdFilter";
const _kA = "keyArn";
const _m = "message";
const _mR = "maxResults";
const _n = "name";
const _nT = "nextToken";
const _o = "operator";
const _oCC = "outboundCallConfig";
const _pDC = "progressiveDialerConfig";
const _pDCr = "predictiveDialerConfig";
const _pN = "phoneNumber";
const _s = "state";
const _sLRA = "serviceLinkedRoleArn";
const _sR = "successfulRequests";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.connectcampaigns";
const _st = "status";
const _t = "tags";
const _tK = "tagKeys";
const _v = "value";
const _xAET = "xAmzErrorType";
const _xaE = "x-amzn-ErrorType";
const n0 = "com.amazonaws.connectcampaigns";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { ConnectCampaignsServiceException as __ConnectCampaignsServiceException } from "../models/ConnectCampaignsServiceException";
import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  InvalidCampaignStateException as __InvalidCampaignStateException,
  InvalidStateException as __InvalidStateException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/errors";

/* eslint no-var: 0 */

export var DestinationPhoneNumber: StaticSimpleSchema = [0, n0, _DPN, 8, 0];
export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m, _xAET],
  [
    0,
    [
      0,
      {
        [_hH]: _xaE,
      },
    ],
  ],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var AgentlessDialerConfig: StaticStructureSchema = [3, n0, _ADC, 0, [_dC], [1]];
export var AnswerMachineDetectionConfig: StaticStructureSchema = [3, n0, _AMDC, 0, [_eAMD, _aAMP], [2, 2]];
export var Campaign: StaticStructureSchema = [
  3,
  n0,
  _C,
  0,
  [_i, _a, _n, _cII, _dCi, _oCC, _t],
  [0, 0, 0, 0, () => DialerConfig, () => OutboundCallConfig, 128 | 0],
];
export var CampaignFilters: StaticStructureSchema = [3, n0, _CF, 0, [_iIF], [() => InstanceIdFilter]];
export var CampaignSummary: StaticStructureSchema = [3, n0, _CS, 0, [_i, _a, _n, _cII], [0, 0, 0, 0]];
export var ConflictException: StaticErrorSchema = [
  -3,
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _xAET],
  [
    0,
    [
      0,
      {
        [_hH]: _xaE,
      },
    ],
  ],
];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);

export var CreateCampaignRequest: StaticStructureSchema = [
  3,
  n0,
  _CCR,
  0,
  [_n, _cII, _dCi, _oCC, _t],
  [0, 0, () => DialerConfig, () => OutboundCallConfig, 128 | 0],
];
export var CreateCampaignResponse: StaticStructureSchema = [3, n0, _CCRr, 0, [_i, _a, _t], [0, 0, 128 | 0]];
export var DeleteCampaignRequest: StaticStructureSchema = [3, n0, _DCR, 0, [_i], [[0, 1]]];
export var DeleteConnectInstanceConfigRequest: StaticStructureSchema = [3, n0, _DCICR, 0, [_cII], [[0, 1]]];
export var DeleteInstanceOnboardingJobRequest: StaticStructureSchema = [3, n0, _DIOJR, 0, [_cII], [[0, 1]]];
export var DescribeCampaignRequest: StaticStructureSchema = [3, n0, _DCRe, 0, [_i], [[0, 1]]];
export var DescribeCampaignResponse: StaticStructureSchema = [3, n0, _DCRes, 0, [_ca], [() => Campaign]];
export var DialRequest: StaticStructureSchema = [
  3,
  n0,
  _DR,
  0,
  [_cT, _pN, _eT, _at],
  [0, [() => DestinationPhoneNumber, 0], 5, [() => Attributes, 0]],
];
export var EncryptionConfig: StaticStructureSchema = [3, n0, _EC, 0, [_en, _eTn, _kA], [2, 0, 0]];
export var FailedCampaignStateResponse: StaticStructureSchema = [3, n0, _FCSR, 0, [_cI, _fC], [0, 0]];
export var FailedRequest: StaticStructureSchema = [3, n0, _FR, 0, [_cT, _i, _fC], [0, 0, 0]];
export var GetCampaignStateBatchRequest: StaticStructureSchema = [3, n0, _GCSBR, 0, [_cIa], [64 | 0]];
export var GetCampaignStateBatchResponse: StaticStructureSchema = [
  3,
  n0,
  _GCSBRe,
  0,
  [_sR, _fR],
  [() => SuccessfulCampaignStateResponseList, () => FailedCampaignStateResponseList],
];
export var GetCampaignStateRequest: StaticStructureSchema = [3, n0, _GCSR, 0, [_i], [[0, 1]]];
export var GetCampaignStateResponse: StaticStructureSchema = [3, n0, _GCSRe, 0, [_s], [0]];
export var GetConnectInstanceConfigRequest: StaticStructureSchema = [3, n0, _GCICR, 0, [_cII], [[0, 1]]];
export var GetConnectInstanceConfigResponse: StaticStructureSchema = [
  3,
  n0,
  _GCICRe,
  0,
  [_cIC],
  [() => InstanceConfig],
];
export var GetInstanceOnboardingJobStatusRequest: StaticStructureSchema = [3, n0, _GIOJSR, 0, [_cII], [[0, 1]]];
export var GetInstanceOnboardingJobStatusResponse: StaticStructureSchema = [
  3,
  n0,
  _GIOJSRe,
  0,
  [_cIOJS],
  [() => InstanceOnboardingJobStatus],
];
export var InstanceConfig: StaticStructureSchema = [3, n0, _IC, 0, [_cII, _sLRA, _eC], [0, 0, () => EncryptionConfig]];
export var InstanceIdFilter: StaticStructureSchema = [3, n0, _IIF, 0, [_v, _o], [0, 0]];
export var InstanceOnboardingJobStatus: StaticStructureSchema = [3, n0, _IOJS, 0, [_cII, _st, _fC], [0, 0, 0]];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m, _xAET],
  [
    0,
    [
      0,
      {
        [_hH]: _xaE,
      },
    ],
  ],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var InvalidCampaignStateException: StaticErrorSchema = [
  -3,
  n0,
  _ICSE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_s, _m, _xAET],
  [
    0,
    0,
    [
      0,
      {
        [_hH]: _xaE,
      },
    ],
  ],
];
TypeRegistry.for(n0).registerError(InvalidCampaignStateException, __InvalidCampaignStateException);

export var InvalidStateException: StaticErrorSchema = [
  -3,
  n0,
  _ISEn,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _xAET],
  [
    0,
    [
      0,
      {
        [_hH]: _xaE,
      },
    ],
  ],
];
TypeRegistry.for(n0).registerError(InvalidStateException, __InvalidStateException);

export var ListCampaignsRequest: StaticStructureSchema = [
  3,
  n0,
  _LCR,
  0,
  [_mR, _nT, _f],
  [1, 0, () => CampaignFilters],
];
export var ListCampaignsResponse: StaticStructureSchema = [
  3,
  n0,
  _LCRi,
  0,
  [_nT, _cSL],
  [0, () => CampaignSummaryList],
];
export var ListTagsForResourceRequest: StaticStructureSchema = [3, n0, _LTFRR, 0, [_a], [[0, 1]]];
export var ListTagsForResourceResponse: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_t], [128 | 0]];
export var OutboundCallConfig: StaticStructureSchema = [
  3,
  n0,
  _OCC,
  0,
  [_cCFI, _cSPN, _cQI, _aMDC],
  [0, 0, 0, () => AnswerMachineDetectionConfig],
];
export var PauseCampaignRequest: StaticStructureSchema = [3, n0, _PCR, 0, [_i], [[0, 1]]];
export var PredictiveDialerConfig: StaticStructureSchema = [3, n0, _PDC, 0, [_bA, _dC], [1, 1]];
export var ProgressiveDialerConfig: StaticStructureSchema = [3, n0, _PDCr, 0, [_bA, _dC], [1, 1]];
export var PutDialRequestBatchRequest: StaticStructureSchema = [
  3,
  n0,
  _PDRBR,
  0,
  [_i, _dR],
  [
    [0, 1],
    [() => DialRequestList, 0],
  ],
];
export var PutDialRequestBatchResponse: StaticStructureSchema = [
  3,
  n0,
  _PDRBRu,
  0,
  [_sR, _fR],
  [() => SuccessfulRequestList, () => FailedRequestList],
];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m, _xAET],
  [
    0,
    [
      0,
      {
        [_hH]: _xaE,
      },
    ],
  ],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var ResumeCampaignRequest: StaticStructureSchema = [3, n0, _RCR, 0, [_i], [[0, 1]]];
export var ServiceQuotaExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _xAET],
  [
    0,
    [
      0,
      {
        [_hH]: _xaE,
      },
    ],
  ],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);

export var StartCampaignRequest: StaticStructureSchema = [3, n0, _SCR, 0, [_i], [[0, 1]]];
export var StartInstanceOnboardingJobRequest: StaticStructureSchema = [
  3,
  n0,
  _SIOJR,
  0,
  [_cII, _eC],
  [[0, 1], () => EncryptionConfig],
];
export var StartInstanceOnboardingJobResponse: StaticStructureSchema = [
  3,
  n0,
  _SIOJRt,
  0,
  [_cIOJS],
  [() => InstanceOnboardingJobStatus],
];
export var StopCampaignRequest: StaticStructureSchema = [3, n0, _SCRt, 0, [_i], [[0, 1]]];
export var SuccessfulCampaignStateResponse: StaticStructureSchema = [3, n0, _SCSR, 0, [_cI, _s], [0, 0]];
export var SuccessfulRequest: StaticStructureSchema = [3, n0, _SR, 0, [_cT, _i], [0, 0]];
export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_a, _t], [[0, 1], 128 | 0]];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m, _xAET],
  [
    0,
    [
      0,
      {
        [_hH]: _xaE,
      },
    ],
  ],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var UntagResourceRequest: StaticStructureSchema = [
  3,
  n0,
  _URR,
  0,
  [_a, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ],
];
export var UpdateCampaignDialerConfigRequest: StaticStructureSchema = [
  3,
  n0,
  _UCDCR,
  0,
  [_i, _dCi],
  [[0, 1], () => DialerConfig],
];
export var UpdateCampaignNameRequest: StaticStructureSchema = [3, n0, _UCNR, 0, [_i, _n], [[0, 1], 0]];
export var UpdateCampaignOutboundCallConfigRequest: StaticStructureSchema = [
  3,
  n0,
  _UCOCCR,
  0,
  [_i, _cCFI, _cSPN, _aMDC],
  [[0, 1], 0, 0, () => AnswerMachineDetectionConfig],
];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _xAET],
  [
    0,
    [
      0,
      {
        [_hH]: _xaE,
      },
    ],
  ],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var __Unit = "unit" as const;

export var ConnectCampaignsServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "ConnectCampaignsServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(ConnectCampaignsServiceException, __ConnectCampaignsServiceException);

export var CampaignIdList = 64 | 0;

export var CampaignSummaryList: StaticListSchema = [1, n0, _CSL, 0, () => CampaignSummary];
export var DialRequestList: StaticListSchema = [1, n0, _DRL, 0, [() => DialRequest, 0]];
export var FailedCampaignStateResponseList: StaticListSchema = [1, n0, _FCSRL, 0, () => FailedCampaignStateResponse];
export var FailedRequestList: StaticListSchema = [1, n0, _FRL, 0, () => FailedRequest];
export var SuccessfulCampaignStateResponseList: StaticListSchema = [
  1,
  n0,
  _SCSRL,
  0,
  () => SuccessfulCampaignStateResponse,
];
export var SuccessfulRequestList: StaticListSchema = [1, n0, _SRL, 0, () => SuccessfulRequest];
export var TagKeyList = 64 | 0;

export var Attributes: StaticMapSchema = [2, n0, _A, 8, 0, 0];
export var TagMap = 128 | 0;

export var DialerConfig: StaticStructureSchema = [
  3,
  n0,
  _DC,
  0,
  [_pDC, _pDCr, _aDC],
  [() => ProgressiveDialerConfig, () => PredictiveDialerConfig, () => AgentlessDialerConfig],
];
export var CreateCampaign: StaticOperationSchema = [
  9,
  n0,
  _CC,
  {
    [_h]: ["PUT", "/campaigns", 200],
  },
  () => CreateCampaignRequest,
  () => CreateCampaignResponse,
];
export var DeleteCampaign: StaticOperationSchema = [
  9,
  n0,
  _DCe,
  {
    [_h]: ["DELETE", "/campaigns/{id}", 200],
  },
  () => DeleteCampaignRequest,
  () => __Unit,
];
export var DeleteConnectInstanceConfig: StaticOperationSchema = [
  9,
  n0,
  _DCIC,
  {
    [_h]: ["DELETE", "/connect-instance/{connectInstanceId}/config", 200],
  },
  () => DeleteConnectInstanceConfigRequest,
  () => __Unit,
];
export var DeleteInstanceOnboardingJob: StaticOperationSchema = [
  9,
  n0,
  _DIOJ,
  {
    [_h]: ["DELETE", "/connect-instance/{connectInstanceId}/onboarding", 200],
  },
  () => DeleteInstanceOnboardingJobRequest,
  () => __Unit,
];
export var DescribeCampaign: StaticOperationSchema = [
  9,
  n0,
  _DCes,
  {
    [_h]: ["GET", "/campaigns/{id}", 200],
  },
  () => DescribeCampaignRequest,
  () => DescribeCampaignResponse,
];
export var GetCampaignState: StaticOperationSchema = [
  9,
  n0,
  _GCS,
  {
    [_h]: ["GET", "/campaigns/{id}/state", 200],
  },
  () => GetCampaignStateRequest,
  () => GetCampaignStateResponse,
];
export var GetCampaignStateBatch: StaticOperationSchema = [
  9,
  n0,
  _GCSB,
  {
    [_h]: ["POST", "/campaigns-state", 200],
  },
  () => GetCampaignStateBatchRequest,
  () => GetCampaignStateBatchResponse,
];
export var GetConnectInstanceConfig: StaticOperationSchema = [
  9,
  n0,
  _GCIC,
  {
    [_h]: ["GET", "/connect-instance/{connectInstanceId}/config", 200],
  },
  () => GetConnectInstanceConfigRequest,
  () => GetConnectInstanceConfigResponse,
];
export var GetInstanceOnboardingJobStatus: StaticOperationSchema = [
  9,
  n0,
  _GIOJS,
  {
    [_h]: ["GET", "/connect-instance/{connectInstanceId}/onboarding", 200],
  },
  () => GetInstanceOnboardingJobStatusRequest,
  () => GetInstanceOnboardingJobStatusResponse,
];
export var ListCampaigns: StaticOperationSchema = [
  9,
  n0,
  _LC,
  {
    [_h]: ["POST", "/campaigns-summary", 200],
  },
  () => ListCampaignsRequest,
  () => ListCampaignsResponse,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{arn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse,
];
export var PauseCampaign: StaticOperationSchema = [
  9,
  n0,
  _PC,
  {
    [_h]: ["POST", "/campaigns/{id}/pause", 200],
  },
  () => PauseCampaignRequest,
  () => __Unit,
];
export var PutDialRequestBatch: StaticOperationSchema = [
  9,
  n0,
  _PDRB,
  {
    [_h]: ["PUT", "/campaigns/{id}/dial-requests", 200],
  },
  () => PutDialRequestBatchRequest,
  () => PutDialRequestBatchResponse,
];
export var ResumeCampaign: StaticOperationSchema = [
  9,
  n0,
  _RC,
  {
    [_h]: ["POST", "/campaigns/{id}/resume", 200],
  },
  () => ResumeCampaignRequest,
  () => __Unit,
];
export var StartCampaign: StaticOperationSchema = [
  9,
  n0,
  _SC,
  {
    [_h]: ["POST", "/campaigns/{id}/start", 200],
  },
  () => StartCampaignRequest,
  () => __Unit,
];
export var StartInstanceOnboardingJob: StaticOperationSchema = [
  9,
  n0,
  _SIOJ,
  {
    [_h]: ["PUT", "/connect-instance/{connectInstanceId}/onboarding", 200],
  },
  () => StartInstanceOnboardingJobRequest,
  () => StartInstanceOnboardingJobResponse,
];
export var StopCampaign: StaticOperationSchema = [
  9,
  n0,
  _SCt,
  {
    [_h]: ["POST", "/campaigns/{id}/stop", 200],
  },
  () => StopCampaignRequest,
  () => __Unit,
];
export var TagResource: StaticOperationSchema = [
  9,
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{arn}", 200],
  },
  () => TagResourceRequest,
  () => __Unit,
];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{arn}", 200],
  },
  () => UntagResourceRequest,
  () => __Unit,
];
export var UpdateCampaignDialerConfig: StaticOperationSchema = [
  9,
  n0,
  _UCDC,
  {
    [_h]: ["POST", "/campaigns/{id}/dialer-config", 200],
  },
  () => UpdateCampaignDialerConfigRequest,
  () => __Unit,
];
export var UpdateCampaignName: StaticOperationSchema = [
  9,
  n0,
  _UCN,
  {
    [_h]: ["POST", "/campaigns/{id}/name", 200],
  },
  () => UpdateCampaignNameRequest,
  () => __Unit,
];
export var UpdateCampaignOutboundCallConfig: StaticOperationSchema = [
  9,
  n0,
  _UCOCC,
  {
    [_h]: ["POST", "/campaigns/{id}/outbound-call-config", 200],
  },
  () => UpdateCampaignOutboundCallConfigRequest,
  () => __Unit,
];
