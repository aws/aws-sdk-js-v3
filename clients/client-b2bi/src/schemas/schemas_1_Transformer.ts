// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _AO,
  _aO,
  _cFC,
  _cLVR,
  _CSMT,
  _CSMTR,
  _CSMTRr,
  _CSo,
  _CT,
  _cTA,
  _CTFD,
  _cTR,
  _eI,
  _eLVR,
  _eP,
  _eRVR,
  _ET,
  _eT,
  _fC,
  _fD,
  _fF,
  _fL,
  _h,
  _iF,
  _IFS,
  _mL,
  _mLi,
  _mT,
  _mTa,
  _oSF,
  _OSFS,
  _oSL,
  _pFC,
  _pSFC,
  _r,
  _sB,
  _sO,
  _so,
  _tar,
  _TC,
  _TCR,
  _TCRe,
  _TD,
  _tD,
  _TP,
  _TPR,
  _TPRe,
  _tS,
  _v,
  _vM,
  _vO,
  _vR,
  _x,
  _XAOd,
  _XCLVR,
  _xD,
  _XDe,
  _XELVR,
  _XERVR,
  _XSO,
  _XVO,
  _XVR,
  _XVRa,
  n0,
} from "./schemas_0";
import { S3Location } from "./schemas_10_Capability";

/* eslint no-var: 0 */

export var AdvancedOptions = struct(n0, _AO, 0, [_x], [() => X12AdvancedOptions]);
export var ConversionSource = struct(n0, _CSo, 0, [_fF, _iF], [0, () => InputFileSource]);
export var ConversionTarget = struct(
  n0,
  _CT,
  0,
  [_fF, _fD, _oSF, _aO],
  [0, () => ConversionTargetFormatDetails, () => OutputSampleFileSource, () => AdvancedOptions]
);
export var CreateStarterMappingTemplateRequest = struct(
  n0,
  _CSMTR,
  0,
  [_oSL, _mT, _tD],
  [() => S3Location, 0, () => TemplateDetails]
);
export var CreateStarterMappingTemplateResponse = struct(n0, _CSMTRr, 0, [_mTa], [0]);
export var TestConversionRequest = struct(n0, _TCR, 0, [_so, _tar], [() => ConversionSource, () => ConversionTarget]);
export var TestConversionResponse = struct(n0, _TCRe, 0, [_cFC, _vM], [0, 64 | 0]);
export var TestParsingRequest = struct(
  n0,
  _TPR,
  0,
  [_iF, _fF, _eT, _aO],
  [() => S3Location, 0, () => EdiType, () => AdvancedOptions]
);
export var TestParsingResponse = struct(n0, _TPRe, 0, [_pFC, _pSFC, _vM], [0, 64 | 0, 64 | 0]);
export var X12AdvancedOptions = struct(n0, _XAOd, 0, [_sO, _vO], [() => X12SplitOptions, () => X12ValidationOptions]);
export var X12CodeListValidationRule = struct(n0, _XCLVR, 0, [_eI, _cTA, _cTR], [0, 64 | 0, 64 | 0]);
export var X12Details = struct(n0, _XDe, 0, [_tS, _v], [0, 0]);
export var X12ElementLengthValidationRule = struct(n0, _XELVR, 0, [_eI, _mL, _mLi], [0, 1, 1]);
export var X12ElementRequirementValidationRule = struct(n0, _XERVR, 0, [_eP, _r], [0, 0]);
export var X12SplitOptions = struct(n0, _XSO, 0, [_sB], [0]);
export var X12ValidationOptions = struct(n0, _XVO, 0, [_vR], [() => X12ValidationRules]);
export var CodeList = 64 | 0;

export var ParsedSplitFileContentsList = 64 | 0;

export var ValidationMessages = 64 | 0;

export var X12ValidationRules = list(n0, _XVR, 0, () => X12ValidationRule);
export var ConversionTargetFormatDetails = uni(n0, _CTFD, 0, [_x], [() => X12Details]);
export var EdiType = uni(n0, _ET, 0, [_xD], [() => X12Details]);
export var InputFileSource = uni(n0, _IFS, 0, [_fC], [0]);
export var OutputSampleFileSource = uni(n0, _OSFS, 0, [_fL], [() => S3Location]);
export var TemplateDetails = uni(n0, _TD, 0, [_x], [() => X12Details]);
export var X12ValidationRule = uni(
  n0,
  _XVRa,
  0,
  [_cLVR, _eLVR, _eRVR],
  [() => X12CodeListValidationRule, () => X12ElementLengthValidationRule, () => X12ElementRequirementValidationRule]
);
export var CreateStarterMappingTemplate = op(
  n0,
  _CSMT,
  {
    [_h]: ["POST", "/createmappingstarttemplate", 200],
  },
  () => CreateStarterMappingTemplateRequest,
  () => CreateStarterMappingTemplateResponse
);
export var TestConversion = op(
  n0,
  _TC,
  {
    [_h]: ["POST", "/testconversion", 200],
  },
  () => TestConversionRequest,
  () => TestConversionResponse
);
export var TestParsing = op(
  n0,
  _TP,
  {
    [_h]: ["POST", "/testparsing", 201],
  },
  () => TestParsingRequest,
  () => TestParsingResponse
);
