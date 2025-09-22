// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _at,
  _cA,
  _cB,
  _CJ,
  _CJR,
  _CJRr,
  _CSP,
  _CSPR,
  _CSPRr,
  _cT,
  _de,
  _dN,
  _eA,
  _end,
  _fI,
  _fS,
  _FSL,
  _fSL,
  _FSLL,
  _fSLN,
  _fSLTA,
  _fSLTR,
  _GJ,
  _GJR,
  _GJRe,
  _GSP,
  _GSPFQ,
  _GSPFQR,
  _GSPFQRe,
  _GSPR,
  _GSPRe,
  _h,
  _hH,
  _iMH,
  _iMP,
  _iT,
  _JD,
  _jI,
  _JT,
  _lS,
  _lSM,
  _man,
  _mFTC,
  _MP,
  _MPL,
  _mRPT,
  _mWCa,
  _n,
  _oF,
  _oRD,
  _p,
  _pa,
  _pr,
  _qI,
  _rPF,
  _rPo,
  _sAt,
  _sJI,
  _sPI,
  _t,
  _te,
  _tFRC,
  _tRS,
  _tRSC,
  _tT,
  _tTRS,
  _uA,
  _uB,
  _USP,
  _USPR,
  _USPRp,
  _XACT,
  n0,
} from "./schemas_0";
import { JobParameters } from "./schemas_2_Get";

/* eslint no-var: 0 */

export var JobDescription = sim(n0, _JD, 0, 8);
export var JobTemplate = sim(n0, _JT, 0, 8);
export var Attachments = struct(n0, _A, 0, [_man, _fS], [[() => ManifestPropertiesList, 0], 0]);
export var CreateJobRequest = struct(
  n0,
  _CJR,
  0,
  [_fI, _qI, _cT, _te, _tT, _pr, _p, _at, _sPI, _tTRS, _mFTC, _mRPT, _mWCa, _sJI],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    [() => JobTemplate, 0],
    0,
    1,
    [() => JobParameters, 0],
    [() => Attachments, 0],
    0,
    0,
    1,
    1,
    1,
    0,
  ]
);
export var CreateJobResponse = struct(n0, _CJRr, 0, [_jI], [0]);
export var CreateStorageProfileRequest = struct(
  n0,
  _CSPR,
  0,
  [_cT, _fI, _dN, _oF, _fSL],
  [
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    [0, 1],
    0,
    0,
    [() => FileSystemLocationsList, 0],
  ]
);
export var CreateStorageProfileResponse = struct(n0, _CSPRr, 0, [_sPI], [0]);
export var FileSystemLocation = struct(n0, _FSL, 8, [_n, _pa, _t], [0, 0, 0]);
export var GetJobRequest = struct(
  n0,
  _GJR,
  0,
  [_fI, _qI, _jI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetJobResponse = struct(
  n0,
  _GJRe,
  0,
  [
    _jI,
    _n,
    _lS,
    _lSM,
    _pr,
    _cA,
    _cB,
    _uA,
    _uB,
    _sAt,
    _eA,
    _tRS,
    _tTRS,
    _tRSC,
    _tFRC,
    _sPI,
    _mFTC,
    _mRPT,
    _p,
    _at,
    _de,
    _mWCa,
    _sJI,
  ],
  [
    0,
    0,
    0,
    0,
    1,
    5,
    0,
    5,
    0,
    5,
    5,
    0,
    0,
    128 | 1,
    1,
    0,
    1,
    1,
    [() => JobParameters, 0],
    [() => Attachments, 0],
    [() => JobDescription, 0],
    1,
    0,
  ]
);
export var GetStorageProfileForQueueRequest = struct(
  n0,
  _GSPFQR,
  0,
  [_fI, _qI, _sPI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetStorageProfileForQueueResponse = struct(
  n0,
  _GSPFQRe,
  0,
  [_sPI, _dN, _oF, _fSL],
  [0, 0, 0, [() => FileSystemLocationsList, 0]]
);
export var GetStorageProfileRequest = struct(
  n0,
  _GSPR,
  0,
  [_fI, _sPI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetStorageProfileResponse = struct(
  n0,
  _GSPRe,
  0,
  [_sPI, _dN, _oF, _cA, _cB, _uA, _uB, _fSL],
  [0, 0, 0, 5, 0, 5, 0, [() => FileSystemLocationsList, 0]]
);
export var ManifestProperties = struct(n0, _MP, 8, [_fSLN, _rPo, _rPF, _oRD, _iMP, _iMH], [0, 0, 0, 64 | 0, 0, 0]);
export var UpdateStorageProfileRequest = struct(
  n0,
  _USPR,
  0,
  [_cT, _fI, _sPI, _dN, _oF, _fSLTA, _fSLTR],
  [
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    [0, 1],
    [0, 1],
    0,
    0,
    [() => FileSystemLocationsList, 0],
    [() => FileSystemLocationsList, 0],
  ]
);
export var UpdateStorageProfileResponse = struct(n0, _USPRp, 0, [], []);
export var FileSystemLocationsList = list(n0, _FSLL, 0, [() => FileSystemLocation, 0]);
export var ManifestPropertiesList = list(n0, _MPL, 0, [() => ManifestProperties, 0]);
export var OutputRelativeDirectoriesList = 64 | 0;

export var CreateJob = op(
  n0,
  _CJ,
  {
    [_h]: ["POST", "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs", 201],
    [_end]: ["management."],
  },
  () => CreateJobRequest,
  () => CreateJobResponse
);
export var CreateStorageProfile = op(
  n0,
  _CSP,
  {
    [_h]: ["POST", "/2023-10-12/farms/{farmId}/storage-profiles", 200],
    [_end]: ["management."],
  },
  () => CreateStorageProfileRequest,
  () => CreateStorageProfileResponse
);
export var GetJob = op(
  n0,
  _GJ,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}", 200],
  },
  () => GetJobRequest,
  () => GetJobResponse
);
export var GetStorageProfile = op(
  n0,
  _GSP,
  {
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/storage-profiles/{storageProfileId}", 200],
    [_end]: ["management."],
  },
  () => GetStorageProfileRequest,
  () => GetStorageProfileResponse
);
export var GetStorageProfileForQueue = op(
  n0,
  _GSPFQ,
  {
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/queues/{queueId}/storage-profiles/{storageProfileId}", 200],
    [_end]: ["management."],
  },
  () => GetStorageProfileForQueueRequest,
  () => GetStorageProfileForQueueResponse
);
export var UpdateStorageProfile = op(
  n0,
  _USP,
  {
    [_h]: ["PATCH", "/2023-10-12/farms/{farmId}/storage-profiles/{storageProfileId}", 200],
    [_end]: ["management."],
  },
  () => UpdateStorageProfileRequest,
  () => UpdateStorageProfileResponse
);
