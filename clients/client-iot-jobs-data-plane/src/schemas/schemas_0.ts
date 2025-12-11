const _B = "B";
const _BIN = "BIN";
const _CE = "ConflictException";
const _CEPM = "CommandExecutionParameterMap";
const _CPV = "CommandParameterValue";
const _CVE = "CertificateValidationException";
const _D = "D";
const _DJE = "DescribeJobExecution";
const _DJER = "DescribeJobExecutionRequest";
const _DJERe = "DescribeJobExecutionResponse";
const _GPJE = "GetPendingJobExecutions";
const _GPJER = "GetPendingJobExecutionsRequest";
const _GPJERe = "GetPendingJobExecutionsResponse";
const _I = "I";
const _IRE = "InvalidRequestException";
const _ISE = "InternalServerException";
const _ISTE = "InvalidStateTransitionException";
const _JE = "JobExecution";
const _JES = "JobExecutionState";
const _JESL = "JobExecutionSummaryList";
const _JESo = "JobExecutionSummary";
const _L = "L";
const _RNFE = "ResourceNotFoundException";
const _S = "S";
const _SCE = "StartCommandExecution";
const _SCER = "StartCommandExecutionRequest";
const _SCERt = "StartCommandExecutionResponse";
const _SNPJE = "StartNextPendingJobExecution";
const _SNPJER = "StartNextPendingJobExecutionRequest";
const _SNPJERt = "StartNextPendingJobExecutionResponse";
const _SQEE = "ServiceQuotaExceededException";
const _SUE = "ServiceUnavailableException";
const _TE = "ThrottlingException";
const _TSE = "TerminalStateException";
const _UJE = "UpdateJobExecution";
const _UJER = "UpdateJobExecutionRequest";
const _UJERp = "UpdateJobExecutionResponse";
const _UL = "UL";
const _VE = "ValidationException";
const _aSBTO = "approximateSecondsBeforeTimedOut";
const _c = "client";
const _cA = "commandArn";
const _cT = "clientToken";
const _e = "error";
const _eI = "executionId";
const _eN = "executionNumber";
const _eS = "executionState";
const _eTS = "executionTimeoutSeconds";
const _eV = "expectedVersion";
const _ex = "execution";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _iJD = "includeJobDocument";
const _iJES = "includeJobExecutionState";
const _iPJ = "inProgressJobs";
const _jD = "jobDocument";
const _jI = "jobId";
const _lUA = "lastUpdatedAt";
const _m = "message";
const _p = "parameters";
const _pa = "payload";
const _qA = "queuedAt";
const _qJ = "queuedJobs";
const _rI = "resourceId";
const _s = "server";
const _sA = "startedAt";
const _sD = "statusDetails";
const _sTIM = "stepTimeoutInMinutes";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.iotjobsdataplane";
const _st = "status";
const _tA = "targetArn";
const _tN = "thingName";
const _vN = "versionNumber";
const n0 = "com.amazonaws.iotjobsdataplane";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  CertificateValidationException as __CertificateValidationException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  InvalidRequestException as __InvalidRequestException,
  InvalidStateTransitionException as __InvalidStateTransitionException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ServiceUnavailableException as __ServiceUnavailableException,
  TerminalStateException as __TerminalStateException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/errors";
import { IoTJobsDataPlaneServiceException as __IoTJobsDataPlaneServiceException } from "../models/IoTJobsDataPlaneServiceException";

/* eslint no-var: 0 */
export var CertificateValidationException: StaticErrorSchema = [-3, n0, _CVE, { [_e]: _c, [_hE]: 400 }, [_m], [0]];
TypeRegistry.for(n0).registerError(CertificateValidationException, __CertificateValidationException);
export var CommandParameterValue: StaticStructureSchema = [
  3,
  n0,
  _CPV,
  0,
  [_S, _B, _I, _L, _D, _BIN, _UL],
  [0, 2, 1, 1, 1, 21, 0],
];
export var ConflictException: StaticErrorSchema = [-3, n0, _CE, { [_e]: _c, [_hE]: 409 }, [_m, _rI], [0, 0]];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);
export var DescribeJobExecutionRequest: StaticStructureSchema = [
  3,
  n0,
  _DJER,
  0,
  [_jI, _tN, _iJD, _eN],
  [
    [0, 1],
    [0, 1],
    [2, { [_hQ]: _iJD }],
    [1, { [_hQ]: _eN }],
  ],
];
export var DescribeJobExecutionResponse: StaticStructureSchema = [3, n0, _DJERe, 0, [_ex], [() => JobExecution]];
export var GetPendingJobExecutionsRequest: StaticStructureSchema = [3, n0, _GPJER, 0, [_tN], [[0, 1]]];
export var GetPendingJobExecutionsResponse: StaticStructureSchema = [
  3,
  n0,
  _GPJERe,
  0,
  [_iPJ, _qJ],
  [() => JobExecutionSummaryList, () => JobExecutionSummaryList],
];
export var InternalServerException: StaticErrorSchema = [-3, n0, _ISE, { [_e]: _s, [_hE]: 500 }, [_m], [0]];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);
export var InvalidRequestException: StaticErrorSchema = [-3, n0, _IRE, { [_e]: _c, [_hE]: 400 }, [_m], [0]];
TypeRegistry.for(n0).registerError(InvalidRequestException, __InvalidRequestException);
export var InvalidStateTransitionException: StaticErrorSchema = [-3, n0, _ISTE, { [_e]: _c, [_hE]: 409 }, [_m], [0]];
TypeRegistry.for(n0).registerError(InvalidStateTransitionException, __InvalidStateTransitionException);
export var JobExecution: StaticStructureSchema = [
  3,
  n0,
  _JE,
  0,
  [_jI, _tN, _st, _sD, _qA, _sA, _lUA, _aSBTO, _vN, _eN, _jD],
  [0, 0, 0, 128 | 0, 1, 1, 1, 1, 1, 1, 0],
];
export var JobExecutionState: StaticStructureSchema = [3, n0, _JES, 0, [_st, _sD, _vN], [0, 128 | 0, 1]];
export var JobExecutionSummary: StaticStructureSchema = [
  3,
  n0,
  _JESo,
  0,
  [_jI, _qA, _sA, _lUA, _vN, _eN],
  [0, 1, 1, 1, 1, 1],
];
export var ResourceNotFoundException: StaticErrorSchema = [-3, n0, _RNFE, { [_e]: _c, [_hE]: 404 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);
export var ServiceQuotaExceededException: StaticErrorSchema = [-3, n0, _SQEE, { [_e]: _c, [_hE]: 402 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);
export var ServiceUnavailableException: StaticErrorSchema = [-3, n0, _SUE, { [_e]: _s, [_hE]: 503 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ServiceUnavailableException, __ServiceUnavailableException);
export var StartCommandExecutionRequest: StaticStructureSchema = [
  3,
  n0,
  _SCER,
  0,
  [_tA, _cA, _p, _eTS, _cT],
  [0, 0, () => CommandExecutionParameterMap, 1, [0, 4]],
];
export var StartCommandExecutionResponse: StaticStructureSchema = [3, n0, _SCERt, 0, [_eI], [0]];
export var StartNextPendingJobExecutionRequest: StaticStructureSchema = [
  3,
  n0,
  _SNPJER,
  0,
  [_tN, _sD, _sTIM],
  [[0, 1], 128 | 0, 1],
];
export var StartNextPendingJobExecutionResponse: StaticStructureSchema = [
  3,
  n0,
  _SNPJERt,
  0,
  [_ex],
  [() => JobExecution],
];
export var TerminalStateException: StaticErrorSchema = [-3, n0, _TSE, { [_e]: _c, [_hE]: 410 }, [_m], [0]];
TypeRegistry.for(n0).registerError(TerminalStateException, __TerminalStateException);
export var ThrottlingException: StaticErrorSchema = [-3, n0, _TE, { [_e]: _c, [_hE]: 429 }, [_m, _pa], [0, 21]];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);
export var UpdateJobExecutionRequest: StaticStructureSchema = [
  3,
  n0,
  _UJER,
  0,
  [_jI, _tN, _st, _sD, _sTIM, _eV, _iJES, _iJD, _eN],
  [[0, 1], [0, 1], 0, 128 | 0, 1, 1, 2, 2, 1],
];
export var UpdateJobExecutionResponse: StaticStructureSchema = [
  3,
  n0,
  _UJERp,
  0,
  [_eS, _jD],
  [() => JobExecutionState, 0],
];
export var ValidationException: StaticErrorSchema = [-3, n0, _VE, { [_e]: _c, [_hE]: 400 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);
export var IoTJobsDataPlaneServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "IoTJobsDataPlaneServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(IoTJobsDataPlaneServiceException, __IoTJobsDataPlaneServiceException);
export var JobExecutionSummaryList: StaticListSchema = [1, n0, _JESL, 0, () => JobExecutionSummary];
export var CommandExecutionParameterMap: StaticMapSchema = [2, n0, _CEPM, 0, 0, () => CommandParameterValue];
export var DetailsMap = 128 | 0;
export var DescribeJobExecution: StaticOperationSchema = [
  9,
  n0,
  _DJE,
  { [_h]: ["GET", "/things/{thingName}/jobs/{jobId}", 200] },
  () => DescribeJobExecutionRequest,
  () => DescribeJobExecutionResponse,
];
export var GetPendingJobExecutions: StaticOperationSchema = [
  9,
  n0,
  _GPJE,
  { [_h]: ["GET", "/things/{thingName}/jobs", 200] },
  () => GetPendingJobExecutionsRequest,
  () => GetPendingJobExecutionsResponse,
];
export var StartCommandExecution: StaticOperationSchema = [
  9,
  n0,
  _SCE,
  { [_h]: ["POST", "/command-executions", 200] },
  () => StartCommandExecutionRequest,
  () => StartCommandExecutionResponse,
];
export var StartNextPendingJobExecution: StaticOperationSchema = [
  9,
  n0,
  _SNPJE,
  { [_h]: ["PUT", "/things/{thingName}/jobs/$next", 200] },
  () => StartNextPendingJobExecutionRequest,
  () => StartNextPendingJobExecutionResponse,
];
export var UpdateJobExecution: StaticOperationSchema = [
  9,
  n0,
  _UJE,
  { [_h]: ["POST", "/things/{thingName}/jobs/{jobId}", 200] },
  () => UpdateJobExecutionRequest,
  () => UpdateJobExecutionResponse,
];
