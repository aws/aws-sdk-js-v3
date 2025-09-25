// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _a,
  _bPIT,
  _bPIVSIGB,
  _cFN,
  _CMTP,
  _cMTP,
  _CMTPu,
  _cMTPu,
  _cTIM,
  _dPJI,
  _eMST,
  _h,
  _hQ,
  _i,
  _id,
  _iDSL,
  _iQL,
  _l,
  _lIo,
  _LIR,
  _LLJ,
  _LLJI,
  _LLJO,
  _LMLDPJ,
  _LMLDPJI,
  _LMLDPJO,
  _LMLE,
  _LMLEI,
  _LMLEO,
  _LMLMTJ,
  _LMLMTJI,
  _LMLMTJi,
  _LMLMTJIi,
  _LMLMTJO,
  _LMLMTJOi,
  _mHPONOTJ,
  _mHPOPTJ,
  _mI,
  _mMTJI,
  _mTo,
  _mTOSL,
  _nIRA,
  _p,
  _pDPJI,
  _pDSL,
  _pIT,
  _pIVSIGB,
  _pMTJI,
  _pTOIS,
  _s,
  _sGI,
  _sIRA,
  _SMLDPJ,
  _SMLDPJI,
  _SMLDPJO,
  _SMLMTJ,
  _SMLMTJI,
  _SMLMTJIt,
  _SMLMTJO,
  _SMLMTJOt,
  _SMLMTJt,
  _sOEKMSK,
  _sSDP,
  _sub,
  _tEPS,
  _tEPSr,
  _tIT,
  _tIVSIGB,
  _tJN,
  _tMSL,
  _tTOIS,
  _vEKMSK,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CustomModelTrainingParameters = struct(n0, _CMTP, 0, [_sSDP, _tEPS, _tEPSr], [0, 0, 0]);
export var CustomModelTransformParameters = struct(n0, _CMTPu, 0, [_sSDP, _tEPSr], [0, 0]);
export var ListLoaderJobsInput = struct(
  n0,
  _LLJI,
  0,
  [_l, _iQL],
  [
    [
      1,
      {
        [_hQ]: _l,
      },
    ],
    [
      2,
      {
        [_hQ]: _iQL,
      },
    ],
  ]
);
export var ListLoaderJobsOutput = struct(n0, _LLJO, 0, [_s, _p], [0, () => LoaderIdResult]);
export var ListMLDataProcessingJobsInput = struct(
  n0,
  _LMLDPJI,
  0,
  [_mI, _nIRA],
  [
    [
      1,
      {
        [_hQ]: _mI,
      },
    ],
    [
      0,
      {
        [_hQ]: _nIRA,
      },
    ],
  ]
);
export var ListMLDataProcessingJobsOutput = struct(n0, _LMLDPJO, 0, [_id], [64 | 0]);
export var ListMLEndpointsInput = struct(
  n0,
  _LMLEI,
  0,
  [_mI, _nIRA],
  [
    [
      1,
      {
        [_hQ]: _mI,
      },
    ],
    [
      0,
      {
        [_hQ]: _nIRA,
      },
    ],
  ]
);
export var ListMLEndpointsOutput = struct(n0, _LMLEO, 0, [_id], [64 | 0]);
export var ListMLModelTrainingJobsInput = struct(
  n0,
  _LMLMTJI,
  0,
  [_mI, _nIRA],
  [
    [
      1,
      {
        [_hQ]: _mI,
      },
    ],
    [
      0,
      {
        [_hQ]: _nIRA,
      },
    ],
  ]
);
export var ListMLModelTrainingJobsOutput = struct(n0, _LMLMTJO, 0, [_id], [64 | 0]);
export var ListMLModelTransformJobsInput = struct(
  n0,
  _LMLMTJIi,
  0,
  [_mI, _nIRA],
  [
    [
      1,
      {
        [_hQ]: _mI,
      },
    ],
    [
      0,
      {
        [_hQ]: _nIRA,
      },
    ],
  ]
);
export var ListMLModelTransformJobsOutput = struct(n0, _LMLMTJOi, 0, [_id], [64 | 0]);
export var LoaderIdResult = struct(n0, _LIR, 0, [_lIo], [64 | 0]);
export var StartMLDataProcessingJobInput = struct(
  n0,
  _SMLDPJI,
  0,
  [_i, _pDPJI, _iDSL, _pDSL, _sIRA, _nIRA, _pIT, _pIVSIGB, _pTOIS, _mTo, _cFN, _sub, _sGI, _vEKMSK, _sOEKMSK],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 64 | 0, 64 | 0, 0, 0]
);
export var StartMLDataProcessingJobOutput = struct(n0, _SMLDPJO, 0, [_i, _a, _cTIM], [0, 0, 1]);
export var StartMLModelTrainingJobInput = struct(
  n0,
  _SMLMTJI,
  0,
  [
    _i,
    _pMTJI,
    _dPJI,
    _tMSL,
    _sIRA,
    _nIRA,
    _bPIT,
    _tIT,
    _tIVSIGB,
    _tTOIS,
    _mHPONOTJ,
    _mHPOPTJ,
    _sub,
    _sGI,
    _vEKMSK,
    _sOEKMSK,
    _eMST,
    _cMTP,
  ],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 64 | 0, 64 | 0, 0, 0, 2, () => CustomModelTrainingParameters]
);
export var StartMLModelTrainingJobOutput = struct(n0, _SMLMTJO, 0, [_i, _a, _cTIM], [0, 0, 1]);
export var StartMLModelTransformJobInput = struct(
  n0,
  _SMLMTJIt,
  0,
  [_i, _dPJI, _mMTJI, _tJN, _mTOSL, _sIRA, _nIRA, _cMTPu, _bPIT, _bPIVSIGB, _sub, _sGI, _vEKMSK, _sOEKMSK],
  [0, 0, 0, 0, 0, 0, 0, () => CustomModelTransformParameters, 0, 1, 64 | 0, 64 | 0, 0, 0]
);
export var StartMLModelTransformJobOutput = struct(n0, _SMLMTJOt, 0, [_i, _a, _cTIM], [0, 0, 1]);
export var StringList = 64 | 0;

export var ListLoaderJobs = op(
  n0,
  _LLJ,
  {
    [_h]: ["GET", "/loader", 200],
  },
  () => ListLoaderJobsInput,
  () => ListLoaderJobsOutput
);
export var ListMLDataProcessingJobs = op(
  n0,
  _LMLDPJ,
  {
    [_h]: ["GET", "/ml/dataprocessing", 200],
  },
  () => ListMLDataProcessingJobsInput,
  () => ListMLDataProcessingJobsOutput
);
export var ListMLEndpoints = op(
  n0,
  _LMLE,
  {
    [_h]: ["GET", "/ml/endpoints", 200],
  },
  () => ListMLEndpointsInput,
  () => ListMLEndpointsOutput
);
export var ListMLModelTrainingJobs = op(
  n0,
  _LMLMTJ,
  {
    [_h]: ["GET", "/ml/modeltraining", 200],
  },
  () => ListMLModelTrainingJobsInput,
  () => ListMLModelTrainingJobsOutput
);
export var ListMLModelTransformJobs = op(
  n0,
  _LMLMTJi,
  {
    [_h]: ["GET", "/ml/modeltransform", 200],
  },
  () => ListMLModelTransformJobsInput,
  () => ListMLModelTransformJobsOutput
);
export var StartMLDataProcessingJob = op(
  n0,
  _SMLDPJ,
  {
    [_h]: ["POST", "/ml/dataprocessing", 200],
  },
  () => StartMLDataProcessingJobInput,
  () => StartMLDataProcessingJobOutput
);
export var StartMLModelTrainingJob = op(
  n0,
  _SMLMTJ,
  {
    [_h]: ["POST", "/ml/modeltraining", 200],
  },
  () => StartMLModelTrainingJobInput,
  () => StartMLModelTrainingJobOutput
);
export var StartMLModelTransformJob = op(
  n0,
  _SMLMTJt,
  {
    [_h]: ["POST", "/ml/modeltransform", 200],
  },
  () => StartMLModelTransformJobInput,
  () => StartMLModelTransformJobOutput
);
