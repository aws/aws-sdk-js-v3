// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aCL,
  _aIJA,
  _aIJI,
  _AJAC,
  _aJAC,
  _AJACL,
  _AJACw,
  _AJERC,
  _aJERC,
  _AJERR,
  _AJPUC,
  _aJPUC,
  _AJRIC,
  _AJTC,
  _aJTC,
  _aPd,
  _aSJI,
  _at,
  _bRPM,
  _buc,
  _cAe,
  _cAr,
  _cCe,
  _CCS,
  _cCS,
  _cD,
  _cNe,
  _cod,
  _COTAU,
  _COTAUR,
  _COTAURr,
  _cPOD,
  _CS,
  _CSCC,
  _cSo,
  _CSR,
  _CSr,
  _CSRr,
  _CSS,
  _d,
  _Des,
  _des,
  _DSe,
  _DSRes,
  _DSResc,
  _EI,
  _eIr,
  _eIS,
  _eR,
  _fi,
  _fIil,
  _FL,
  _fL,
  _fN,
  _fT,
  _fTil,
  _fV,
  _GOTAU,
  _GOTAUR,
  _GOTAURe,
  _h,
  _hA,
  _iD,
  _iF,
  _iPTIM,
  _ke,
  _lMD,
  _lUA,
  _me,
  _mNOET,
  _mPM,
  _nONT,
  _nOST,
  _OTAUF,
  _OTAUFp,
  _OTAUI,
  _oUA,
  _oUF,
  _oUI,
  _oUIt,
  _oUS,
  _pl,
  _pre,
  _pro,
  _rA,
  _rIC,
  _sAi,
  _sAtr,
  _SD,
  _sDe,
  _SF,
  _SFt,
  _SI,
  _si,
  _sIt,
  _sItr,
  _SL,
  _sL,
  _sPNi,
  _SPP,
  _sPP,
  _SSJP,
  _sSJP,
  _Str,
  _str,
  _sVtr,
  _ta,
  _tag,
  _tP,
  _tSa,
  _US,
  _USR,
  _USRp,
  _ve,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AwsJobAbortConfig = struct(n0, _AJAC, 0, [_aCL], [() => AwsJobAbortCriteriaList]);
export var AwsJobAbortCriteria = struct(n0, _AJACw, 0, [_fT, _a, _tP, _mNOET], [0, 0, 1, 1]);
export var AwsJobExecutionsRolloutConfig = struct(n0, _AJERC, 0, [_mPM, _eR], [1, () => AwsJobExponentialRolloutRate]);
export var AwsJobExponentialRolloutRate = struct(
  n0,
  _AJERR,
  0,
  [_bRPM, _iF, _rIC],
  [1, 1, () => AwsJobRateIncreaseCriteria]
);
export var AwsJobPresignedUrlConfig = struct(n0, _AJPUC, 0, [_eIS], [1]);
export var AwsJobRateIncreaseCriteria = struct(n0, _AJRIC, 0, [_nONT, _nOST], [1, 1]);
export var AwsJobTimeoutConfig = struct(n0, _AJTC, 0, [_iPTIM], [1]);
export var CodeSigning = struct(
  n0,
  _CS,
  0,
  [_aSJI, _sSJP, _cCS],
  [0, () => StartSigningJobParameter, () => CustomCodeSigning]
);
export var CodeSigningCertificateChain = struct(n0, _CSCC, 0, [_cNe, _iD], [0, 0]);
export var CodeSigningSignature = struct(n0, _CSS, 0, [_iD], [21]);
export var CreateOTAUpdateRequest = struct(
  n0,
  _COTAUR,
  0,
  [_oUI, _d, _ta, _pro, _tSa, _aJERC, _aJPUC, _aJAC, _aJTC, _fi, _rA, _aPd, _tag],
  [
    [0, 1],
    0,
    64 | 0,
    64 | 0,
    0,
    () => AwsJobExecutionsRolloutConfig,
    () => AwsJobPresignedUrlConfig,
    () => AwsJobAbortConfig,
    () => AwsJobTimeoutConfig,
    () => OTAUpdateFiles,
    0,
    128 | 0,
    () => TagList,
  ]
);
export var CreateOTAUpdateResponse = struct(n0, _COTAURr, 0, [_oUI, _aIJI, _oUA, _aIJA, _oUS], [0, 0, 0, 0, 0]);
export var CreateStreamRequest = struct(
  n0,
  _CSR,
  0,
  [_sIt, _d, _fi, _rA, _tag],
  [[0, 1], 0, () => StreamFiles, 0, () => TagList]
);
export var CreateStreamResponse = struct(n0, _CSRr, 0, [_sIt, _sAtr, _d, _sVtr], [0, 0, 0, 1]);
export var CustomCodeSigning = struct(
  n0,
  _CCS,
  0,
  [_si, _cCe, _hA, _sAi],
  [() => CodeSigningSignature, () => CodeSigningCertificateChain, 0, 0]
);
export var DescribeStreamRequest = struct(n0, _DSRes, 0, [_sIt], [[0, 1]]);
export var DescribeStreamResponse = struct(n0, _DSResc, 0, [_sItr], [() => StreamInfo]);
export var Destination = struct(n0, _Des, 0, [_sDe], [() => S3Destination]);
export var ErrorInfo = struct(n0, _EI, 0, [_cod, _me], [0, 0]);
export var FileLocation = struct(n0, _FL, 0, [_str, _sL], [() => _Stream, () => S3Location]);
export var GetOTAUpdateRequest = struct(n0, _GOTAUR, 0, [_oUI], [[0, 1]]);
export var GetOTAUpdateResponse = struct(n0, _GOTAURe, 0, [_oUIt], [() => OTAUpdateInfo]);
export var OTAUpdateFile = struct(
  n0,
  _OTAUF,
  0,
  [_fN, _fTil, _fV, _fL, _cSo, _at],
  [0, 1, 0, () => FileLocation, () => CodeSigning, 128 | 0]
);
export var OTAUpdateInfo = struct(
  n0,
  _OTAUI,
  0,
  [_oUI, _oUA, _cD, _lMD, _d, _ta, _pro, _aJERC, _aJPUC, _tSa, _oUF, _oUS, _aIJI, _aIJA, _eIr, _aPd],
  [
    0,
    0,
    4,
    4,
    0,
    64 | 0,
    64 | 0,
    () => AwsJobExecutionsRolloutConfig,
    () => AwsJobPresignedUrlConfig,
    0,
    () => OTAUpdateFiles,
    0,
    0,
    0,
    () => ErrorInfo,
    128 | 0,
  ]
);
export var S3Destination = struct(n0, _SD, 0, [_buc, _pre], [0, 0]);
export var S3Location = struct(n0, _SL, 0, [_buc, _ke, _ve], [0, 0, 0]);
export var SigningProfileParameter = struct(n0, _SPP, 0, [_cAe, _pl, _cPOD], [0, 0, 0]);
export var StartSigningJobParameter = struct(
  n0,
  _SSJP,
  0,
  [_sPP, _sPNi, _des],
  [() => SigningProfileParameter, 0, () => Destination]
);
export var _Stream = struct(n0, _Str, 0, [_sIt, _fIil], [0, 1]);
export var StreamFile = struct(n0, _SF, 0, [_fIil, _sL], [1, () => S3Location]);
export var StreamInfo = struct(
  n0,
  _SI,
  0,
  [_sIt, _sAtr, _sVtr, _d, _fi, _cAr, _lUA, _rA],
  [0, 0, 1, 0, () => StreamFiles, 4, 4, 0]
);
export var UpdateStreamRequest = struct(n0, _USR, 0, [_sIt, _d, _fi, _rA], [[0, 1], 0, () => StreamFiles, 0]);
export var UpdateStreamResponse = struct(n0, _USRp, 0, [_sIt, _sAtr, _d, _sVtr], [0, 0, 0, 1]);
export var AwsJobAbortCriteriaList = list(n0, _AJACL, 0, () => AwsJobAbortCriteria);
export var OTAUpdateFiles = list(n0, _OTAUFp, 0, () => OTAUpdateFile);
export var Protocols = 64 | 0;

export var StreamFiles = list(n0, _SFt, 0, () => StreamFile);
export var Targets = 64 | 0;

export var AdditionalParameterMap = 128 | 0;

export var AttributesMap = 128 | 0;

export var CreateOTAUpdate = op(
  n0,
  _COTAU,
  {
    [_h]: ["POST", "/otaUpdates/{otaUpdateId}", 200],
  },
  () => CreateOTAUpdateRequest,
  () => CreateOTAUpdateResponse
);
export var CreateStream = op(
  n0,
  _CSr,
  {
    [_h]: ["POST", "/streams/{streamId}", 200],
  },
  () => CreateStreamRequest,
  () => CreateStreamResponse
);
export var DescribeStream = op(
  n0,
  _DSe,
  {
    [_h]: ["GET", "/streams/{streamId}", 200],
  },
  () => DescribeStreamRequest,
  () => DescribeStreamResponse
);
export var GetOTAUpdate = op(
  n0,
  _GOTAU,
  {
    [_h]: ["GET", "/otaUpdates/{otaUpdateId}", 200],
  },
  () => GetOTAUpdateRequest,
  () => GetOTAUpdateResponse
);
export var UpdateStream = op(
  n0,
  _US,
  {
    [_h]: ["PUT", "/streams/{streamId}", 200],
  },
  () => UpdateStreamRequest,
  () => UpdateStreamResponse
);
