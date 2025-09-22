// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

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
} from "../models/index";
import {
  _aSBTO,
  _B,
  _BIN,
  _c,
  _cA,
  _CE,
  _CEPM,
  _CPV,
  _cT,
  _CVE,
  _D,
  _DJE,
  _DJER,
  _DJERe,
  _e,
  _eI,
  _eN,
  _eS,
  _eTS,
  _eV,
  _ex,
  _GPJE,
  _GPJER,
  _GPJERe,
  _h,
  _hE,
  _hQ,
  _I,
  _iJD,
  _iJES,
  _iPJ,
  _IRE,
  _ISE,
  _ISTE,
  _jD,
  _JE,
  _JES,
  _JESL,
  _JESo,
  _jI,
  _L,
  _lUA,
  _m,
  _p,
  _pa,
  _qA,
  _qJ,
  _rI,
  _RNFE,
  _S,
  _s,
  _sA,
  _SCE,
  _SCER,
  _SCERt,
  _sD,
  _SNPJE,
  _SNPJER,
  _SNPJERt,
  _SQEE,
  _st,
  _sTIM,
  _SUE,
  _tA,
  _TE,
  _tN,
  _TSE,
  _UJE,
  _UJER,
  _UJERp,
  _UL,
  _VE,
  _vN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CertificateValidationException = error(
  n0,
  _CVE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __CertificateValidationException
);
export var CommandParameterValue = struct(n0, _CPV, 0, [_S, _B, _I, _L, _D, _BIN, _UL], [0, 2, 1, 1, 1, 21, 0]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _rI],
  [0, 0],

  __ConflictException
);
export var DescribeJobExecutionRequest = struct(
  n0,
  _DJER,
  0,
  [_jI, _tN, _iJD, _eN],
  [
    [0, 1],
    [0, 1],
    [
      2,
      {
        [_hQ]: _iJD,
      },
    ],
    [
      1,
      {
        [_hQ]: _eN,
      },
    ],
  ]
);
export var DescribeJobExecutionResponse = struct(n0, _DJERe, 0, [_ex], [() => JobExecution]);
export var GetPendingJobExecutionsRequest = struct(n0, _GPJER, 0, [_tN], [[0, 1]]);
export var GetPendingJobExecutionsResponse = struct(
  n0,
  _GPJERe,
  0,
  [_iPJ, _qJ],
  [() => JobExecutionSummaryList, () => JobExecutionSummaryList]
);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalServerException
);
export var InvalidRequestException = error(
  n0,
  _IRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidRequestException
);
export var InvalidStateTransitionException = error(
  n0,
  _ISTE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __InvalidStateTransitionException
);
export var JobExecution = struct(
  n0,
  _JE,
  0,
  [_jI, _tN, _st, _sD, _qA, _sA, _lUA, _aSBTO, _vN, _eN, _jD],
  [0, 0, 0, 128 | 0, 1, 1, 1, 1, 1, 1, 0]
);
export var JobExecutionState = struct(n0, _JES, 0, [_st, _sD, _vN], [0, 128 | 0, 1]);
export var JobExecutionSummary = struct(n0, _JESo, 0, [_jI, _qA, _sA, _lUA, _vN, _eN], [0, 1, 1, 1, 1, 1]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m],
  [0],

  __ServiceQuotaExceededException
);
export var ServiceUnavailableException = error(
  n0,
  _SUE,
  {
    [_e]: _s,
    [_hE]: 503,
  },
  [_m],
  [0],

  __ServiceUnavailableException
);
export var StartCommandExecutionRequest = struct(
  n0,
  _SCER,
  0,
  [_tA, _cA, _p, _eTS, _cT],
  [0, 0, () => CommandExecutionParameterMap, 1, [0, 4]]
);
export var StartCommandExecutionResponse = struct(n0, _SCERt, 0, [_eI], [0]);
export var StartNextPendingJobExecutionRequest = struct(n0, _SNPJER, 0, [_tN, _sD, _sTIM], [[0, 1], 128 | 0, 1]);
export var StartNextPendingJobExecutionResponse = struct(n0, _SNPJERt, 0, [_ex], [() => JobExecution]);
export var TerminalStateException = error(
  n0,
  _TSE,
  {
    [_e]: _c,
    [_hE]: 410,
  },
  [_m],
  [0],

  __TerminalStateException
);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m, _pa],
  [0, 21],

  __ThrottlingException
);
export var UpdateJobExecutionRequest = struct(
  n0,
  _UJER,
  0,
  [_jI, _tN, _st, _sD, _sTIM, _eV, _iJES, _iJD, _eN],
  [[0, 1], [0, 1], 0, 128 | 0, 1, 1, 2, 2, 1]
);
export var UpdateJobExecutionResponse = struct(n0, _UJERp, 0, [_eS, _jD], [() => JobExecutionState, 0]);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ValidationException
);
export var Unit = "unit" as const;

export var JobExecutionSummaryList = list(n0, _JESL, 0, () => JobExecutionSummary);
export var CommandExecutionParameterMap = map(n0, _CEPM, 0, 0, () => CommandParameterValue);
export var DetailsMap = 128 | 0;

export var DescribeJobExecution = op(
  n0,
  _DJE,
  {
    [_h]: ["GET", "/things/{thingName}/jobs/{jobId}", 200],
  },
  () => DescribeJobExecutionRequest,
  () => DescribeJobExecutionResponse
);
export var GetPendingJobExecutions = op(
  n0,
  _GPJE,
  {
    [_h]: ["GET", "/things/{thingName}/jobs", 200],
  },
  () => GetPendingJobExecutionsRequest,
  () => GetPendingJobExecutionsResponse
);
export var StartCommandExecution = op(
  n0,
  _SCE,
  {
    [_h]: ["POST", "/command-executions", 200],
  },
  () => StartCommandExecutionRequest,
  () => StartCommandExecutionResponse
);
export var StartNextPendingJobExecution = op(
  n0,
  _SNPJE,
  {
    [_h]: ["PUT", "/things/{thingName}/jobs/$next", 200],
  },
  () => StartNextPendingJobExecutionRequest,
  () => StartNextPendingJobExecutionResponse
);
export var UpdateJobExecution = op(
  n0,
  _UJE,
  {
    [_h]: ["POST", "/things/{thingName}/jobs/{jobId}", 200],
  },
  () => UpdateJobExecutionRequest,
  () => UpdateJobExecutionResponse
);
