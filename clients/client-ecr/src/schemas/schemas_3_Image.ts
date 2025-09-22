// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ImageAlreadyExistsException as __ImageAlreadyExistsException,
  ImageDigestDoesNotMatchException as __ImageDigestDoesNotMatchException,
  ImageNotFoundException as __ImageNotFoundException,
  ImageTagAlreadyExistsException as __ImageTagAlreadyExistsException,
  LifecyclePolicyPreviewNotFoundException as __LifecyclePolicyPreviewNotFoundException,
  ReferencedImagesNotFoundException as __ReferencedImagesNotFoundException,
  ScanNotFoundException as __ScanNotFoundException,
  UnableToGetUpstreamImageException as __UnableToGetUpstreamImageException,
  UnsupportedImageTypeException as __UnsupportedImageTypeException,
} from "../models/index";
import {
  _A,
  _a,
  _aAI,
  _ac,
  _ad,
  _aECI,
  _AECID,
  _AL,
  _aMT,
  _aMTr,
  _ar,
  _aRP,
  _at,
  _au,
  _BDI,
  _BDIR,
  _BDIRa,
  _BGI,
  _BGIR,
  _BGIRa,
  _bS,
  _c,
  _CS,
  _CSA,
  _CSAL,
  _CSD,
  _CSL,
  _cv,
  _d,
  _det,
  _DI,
  _DIF,
  _DIR,
  _DIRe,
  _DIRS,
  _DIRSR,
  _DIRSRe,
  _DISF,
  _DISFR,
  _DISFRe,
  _e,
  _eAx,
  _eF,
  _EISF,
  _EISFL,
  _eITC,
  _ep,
  _f,
  _fA,
  _fAi,
  _fC,
  _fi,
  _fin,
  _fIV,
  _fOA,
  _fP,
  _fR,
  _fSC,
  _GLPP,
  _GLPPR,
  _GLPPRe,
  _I,
  _i,
  _IAEE,
  _ID,
  _iD,
  _id,
  _IDDNME,
  _IDL,
  _iDm,
  _IF,
  _IFL,
  _iH,
  _II,
  _iI,
  _IIL,
  _iIm,
  _IL,
  _iM,
  _im,
  _iMMT,
  _INFE,
  _iPA,
  _IRS,
  _IRSL,
  _iSCA,
  _ISF,
  _iSF,
  _ISFL,
  _ISFm,
  _ISFS,
  _iSFS,
  _iSIB,
  _ISS,
  _iSS,
  _iT,
  _ITAEE,
  _iTm,
  _iUC,
  _k,
  _LI,
  _LIF,
  _LIR,
  _LIRi,
  _lIUA,
  _lOA,
  _LPPF,
  _LPPNFE,
  _LPPR,
  _LPPRL,
  _LPPS,
  _LPRA,
  _lPT,
  _lRPT,
  _m,
  _me,
  _mR,
  _n,
  _nT,
  _p,
  _pA,
  _PI,
  _PIR,
  _PIRu,
  _pM,
  _pR,
  _PVD,
  _pVD,
  _R,
  _r,
  _RDe,
  _Re,
  _rea,
  _rec,
  _reg,
  _rel,
  _rem,
  _Res,
  _res,
  _rI,
  _RINFE,
  _RLe,
  _rN,
  _rS,
  _rU,
  _rV,
  _s,
  _sc,
  _SD,
  _sD,
  _se,
  _SIS,
  _SISR,
  _SISRt,
  _sLH,
  _SNFE,
  _sS,
  _st,
  _sU,
  _su,
  _sV,
  _t,
  _te,
  _ti,
  _tS,
  _ty,
  _u,
  _uA,
  _UITE,
  _ur,
  _UTGUIE,
  _v,
  _vCA,
  _ve,
  _vI,
  _VP,
  _vP,
  _VPL,
  _vS,
  _vSUA,
  _vUA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Attribute = struct(n0, _A, 0, [_k, _v], [0, 0]);
export var AwsEcrContainerImageDetails = struct(
  n0,
  _AECID,
  0,
  [_a, _au, _iH, _iT, _p, _pA, _lIUA, _iUC, _r, _rN],
  [0, 0, 0, 64 | 0, 0, 4, 4, 1, 0, 0]
);
export var BatchDeleteImageRequest = struct(n0, _BDIR, 0, [_rI, _rN, _iI], [0, 0, () => ImageIdentifierList]);
export var BatchDeleteImageResponse = struct(
  n0,
  _BDIRa,
  0,
  [_iI, _f],
  [() => ImageIdentifierList, () => ImageFailureList]
);
export var BatchGetImageRequest = struct(
  n0,
  _BGIR,
  0,
  [_rI, _rN, _iI, _aMT],
  [0, 0, () => ImageIdentifierList, 64 | 0]
);
export var BatchGetImageResponse = struct(n0, _BGIRa, 0, [_i, _f], [() => ImageList, () => ImageFailureList]);
export var CvssScore = struct(n0, _CS, 0, [_bS, _sV, _s, _ve], [1, 0, 0, 0]);
export var CvssScoreAdjustment = struct(n0, _CSA, 0, [_m, _rea], [0, 0]);
export var CvssScoreDetails = struct(
  n0,
  _CSD,
  0,
  [_ad, _sc, _sS, _sV, _ve],
  [() => CvssScoreAdjustmentList, 1, 0, 0, 0]
);
export var DescribeImageReplicationStatusRequest = struct(
  n0,
  _DIRSR,
  0,
  [_rN, _iIm, _rI],
  [0, () => ImageIdentifier, 0]
);
export var DescribeImageReplicationStatusResponse = struct(
  n0,
  _DIRSRe,
  0,
  [_rN, _iIm, _rS],
  [0, () => ImageIdentifier, () => ImageReplicationStatusList]
);
export var DescribeImageScanFindingsRequest = struct(
  n0,
  _DISFR,
  0,
  [_rI, _rN, _iIm, _nT, _mR],
  [0, 0, () => ImageIdentifier, 0, 1]
);
export var DescribeImageScanFindingsResponse = struct(
  n0,
  _DISFRe,
  0,
  [_rI, _rN, _iIm, _iSS, _iSF, _nT],
  [0, 0, () => ImageIdentifier, () => ImageScanStatus, () => ImageScanFindings, 0]
);
export var DescribeImagesFilter = struct(n0, _DIF, 0, [_tS], [0]);
export var DescribeImagesRequest = struct(
  n0,
  _DIR,
  0,
  [_rI, _rN, _iI, _nT, _mR, _fi],
  [0, 0, () => ImageIdentifierList, 0, 1, () => DescribeImagesFilter]
);
export var DescribeImagesResponse = struct(n0, _DIRe, 0, [_iD, _nT], [() => ImageDetailList, 0]);
export var EnhancedImageScanFinding = struct(
  n0,
  _EISF,
  0,
  [_aAI, _d, _fA, _fOA, _lOA, _pVD, _rem, _res, _sc, _sD, _se, _st, _ti, _ty, _uA, _fAi, _eAx],
  [
    0,
    0,
    0,
    4,
    4,
    () => PackageVulnerabilityDetails,
    () => Remediation,
    () => ResourceList,
    1,
    () => ScoreDetails,
    0,
    0,
    0,
    0,
    4,
    0,
    0,
  ]
);
export var GetLifecyclePolicyPreviewRequest = struct(
  n0,
  _GLPPR,
  0,
  [_rI, _rN, _iI, _nT, _mR, _fi],
  [0, 0, () => ImageIdentifierList, 0, 1, () => LifecyclePolicyPreviewFilter]
);
export var GetLifecyclePolicyPreviewResponse = struct(
  n0,
  _GLPPRe,
  0,
  [_rI, _rN, _lPT, _st, _nT, _pR, _su],
  [0, 0, 0, 0, 0, () => LifecyclePolicyPreviewResultList, () => LifecyclePolicyPreviewSummary]
);
export var Image = struct(n0, _I, 0, [_rI, _rN, _iIm, _iM, _iMMT], [0, 0, () => ImageIdentifier, 0, 0]);
export var ImageAlreadyExistsException = error(
  n0,
  _IAEE,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __ImageAlreadyExistsException
);
export var ImageDetail = struct(
  n0,
  _ID,
  0,
  [_rI, _rN, _iDm, _iT, _iSIB, _iPA, _iSS, _iSFS, _iMMT, _aMTr, _lRPT],
  [0, 0, 0, 64 | 0, 1, 4, () => ImageScanStatus, () => ImageScanFindingsSummary, 0, 0, 4]
);
export var ImageDigestDoesNotMatchException = error(
  n0,
  _IDDNME,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __ImageDigestDoesNotMatchException
);
export var ImageFailure = struct(n0, _IF, 0, [_iIm, _fC, _fR], [() => ImageIdentifier, 0, 0]);
export var ImageIdentifier = struct(n0, _II, 0, [_iDm, _iTm], [0, 0]);
export var ImageNotFoundException = error(
  n0,
  _INFE,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __ImageNotFoundException
);
export var ImageReplicationStatus = struct(n0, _IRS, 0, [_reg, _rI, _st, _fC], [0, 0, 0, 0]);
export var ImageScanFinding = struct(n0, _ISF, 0, [_n, _d, _u, _se, _at], [0, 0, 0, 0, () => AttributeList]);
export var ImageScanFindings = struct(
  n0,
  _ISFm,
  0,
  [_iSCA, _vSUA, _fSC, _fin, _eF],
  [4, 4, 128 | 1, () => ImageScanFindingList, () => EnhancedImageScanFindingList]
);
export var ImageScanFindingsSummary = struct(n0, _ISFS, 0, [_iSCA, _vSUA, _fSC], [4, 4, 128 | 1]);
export var ImageScanStatus = struct(n0, _ISS, 0, [_st, _d], [0, 0]);
export var ImageTagAlreadyExistsException = error(
  n0,
  _ITAEE,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __ImageTagAlreadyExistsException
);
export var LifecyclePolicyPreviewFilter = struct(n0, _LPPF, 0, [_tS], [0]);
export var LifecyclePolicyPreviewNotFoundException = error(
  n0,
  _LPPNFE,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __LifecyclePolicyPreviewNotFoundException
);
export var LifecyclePolicyPreviewResult = struct(
  n0,
  _LPPR,
  0,
  [_iT, _iDm, _iPA, _ac, _aRP],
  [64 | 0, 0, 4, () => LifecyclePolicyRuleAction, 1]
);
export var LifecyclePolicyPreviewSummary = struct(n0, _LPPS, 0, [_eITC], [1]);
export var LifecyclePolicyRuleAction = struct(n0, _LPRA, 0, [_ty], [0]);
export var ListImagesFilter = struct(n0, _LIF, 0, [_tS], [0]);
export var ListImagesRequest = struct(n0, _LIR, 0, [_rI, _rN, _nT, _mR, _fi], [0, 0, 0, 1, () => ListImagesFilter]);
export var ListImagesResponse = struct(n0, _LIRi, 0, [_iI, _nT], [() => ImageIdentifierList, 0]);
export var PackageVulnerabilityDetails = struct(
  n0,
  _PVD,
  0,
  [_cv, _rU, _rV, _s, _sU, _vCA, _vS, _vUA, _vI, _vP],
  [() => CvssScoreList, 64 | 0, 64 | 0, 0, 0, 4, 0, 4, 0, () => VulnerablePackagesList]
);
export var PutImageRequest = struct(n0, _PIR, 0, [_rI, _rN, _iM, _iMMT, _iTm, _iDm], [0, 0, 0, 0, 0, 0]);
export var PutImageResponse = struct(n0, _PIRu, 0, [_im], [() => Image]);
export var Recommendation = struct(n0, _R, 0, [_ur, _te], [0, 0]);
export var ReferencedImagesNotFoundException = error(
  n0,
  _RINFE,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __ReferencedImagesNotFoundException
);
export var Remediation = struct(n0, _Re, 0, [_rec], [() => Recommendation]);
export var Resource = struct(n0, _Res, 0, [_det, _id, _t, _ty], [() => ResourceDetails, 0, 128 | 0, 0]);
export var ResourceDetails = struct(n0, _RDe, 0, [_aECI], [() => AwsEcrContainerImageDetails]);
export var ScanNotFoundException = error(
  n0,
  _SNFE,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __ScanNotFoundException
);
export var ScoreDetails = struct(n0, _SD, 0, [_cv], [() => CvssScoreDetails]);
export var StartImageScanRequest = struct(n0, _SISR, 0, [_rI, _rN, _iIm], [0, 0, () => ImageIdentifier]);
export var StartImageScanResponse = struct(
  n0,
  _SISRt,
  0,
  [_rI, _rN, _iIm, _iSS],
  [0, 0, () => ImageIdentifier, () => ImageScanStatus]
);
export var UnableToGetUpstreamImageException = error(
  n0,
  _UTGUIE,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __UnableToGetUpstreamImageException
);
export var UnsupportedImageTypeException = error(
  n0,
  _UITE,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __UnsupportedImageTypeException
);
export var VulnerablePackage = struct(
  n0,
  _VP,
  0,
  [_ar, _ep, _fP, _n, _pM, _rel, _sLH, _ve, _fIV],
  [0, 1, 0, 0, 0, 0, 0, 0, 0]
);
export var AttributeList = list(n0, _AL, 0, () => Attribute);
export var CvssScoreAdjustmentList = list(n0, _CSAL, 0, () => CvssScoreAdjustment);
export var CvssScoreList = list(n0, _CSL, 0, () => CvssScore);
export var EnhancedImageScanFindingList = list(n0, _EISFL, 0, () => EnhancedImageScanFinding);
export var ImageDetailList = list(n0, _IDL, 0, () => ImageDetail);
export var ImageFailureList = list(n0, _IFL, 0, () => ImageFailure);
export var ImageIdentifierList = list(n0, _IIL, 0, () => ImageIdentifier);
export var ImageList = list(n0, _IL, 0, () => Image);
export var ImageReplicationStatusList = list(n0, _IRSL, 0, () => ImageReplicationStatus);
export var ImageScanFindingList = list(n0, _ISFL, 0, () => ImageScanFinding);
export var ImageTagList = 64 | 0;

export var ImageTagsList = 64 | 0;

export var LifecyclePolicyPreviewResultList = list(n0, _LPPRL, 0, () => LifecyclePolicyPreviewResult);
export var MediaTypeList = 64 | 0;

export var ReferenceUrlsList = 64 | 0;

export var RelatedVulnerabilitiesList = 64 | 0;

export var ResourceList = list(n0, _RLe, 0, () => Resource);
export var VulnerablePackagesList = list(n0, _VPL, 0, () => VulnerablePackage);
export var FindingSeverityCounts = 128 | 1;

export var Tags = 128 | 0;

export var BatchDeleteImage = op(
  n0,
  _BDI,
  0,
  () => BatchDeleteImageRequest,
  () => BatchDeleteImageResponse
);
export var BatchGetImage = op(
  n0,
  _BGI,
  0,
  () => BatchGetImageRequest,
  () => BatchGetImageResponse
);
export var DescribeImageReplicationStatus = op(
  n0,
  _DIRS,
  0,
  () => DescribeImageReplicationStatusRequest,
  () => DescribeImageReplicationStatusResponse
);
export var DescribeImages = op(
  n0,
  _DI,
  0,
  () => DescribeImagesRequest,
  () => DescribeImagesResponse
);
export var DescribeImageScanFindings = op(
  n0,
  _DISF,
  0,
  () => DescribeImageScanFindingsRequest,
  () => DescribeImageScanFindingsResponse
);
export var GetLifecyclePolicyPreview = op(
  n0,
  _GLPP,
  0,
  () => GetLifecyclePolicyPreviewRequest,
  () => GetLifecyclePolicyPreviewResponse
);
export var ListImages = op(
  n0,
  _LI,
  0,
  () => ListImagesRequest,
  () => ListImagesResponse
);
export var PutImage = op(
  n0,
  _PI,
  0,
  () => PutImageRequest,
  () => PutImageResponse
);
export var StartImageScan = op(
  n0,
  _SIS,
  0,
  () => StartImageScanRequest,
  () => StartImageScanResponse
);
