// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _b,
  _CLMRG,
  _CLMRGR,
  _CLMRGRr,
  _CT,
  _CTR,
  _CTr,
  _CTre,
  _CTRr,
  _D,
  _EID,
  _GLMRG,
  _GLMRGR,
  _GLMRGRe,
  _kP,
  _LA,
  _lCA,
  _LMRGA,
  _LRFR,
  _LRGT,
  _LRS,
  _p,
  _RAo,
  _RC,
  _RCA,
  _RF,
  _RG,
  _RGN,
  _RTep,
  _SL,
  _T,
  _TI,
  _To,
  _TP,
  _TT,
  _Ty,
  _ULMRG,
  _ULMRGR,
  _ULMRGRp,
  _v,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_3_License";

/* eslint no-var: 0 */

export var CreateLicenseManagerReportGeneratorRequest = struct(
  n0,
  _CLMRGR,
  0,
  [_RGN, _Ty, _RC, _RF, _CT, _D, _T],
  [0, 64 | 0, () => ReportContext, () => ReportFrequency, 0, 0, () => TagList]
);
export var CreateLicenseManagerReportGeneratorResponse = struct(n0, _CLMRGRr, 0, [_LMRGA], [0]);
export var CreateTokenRequest = struct(n0, _CTR, 0, [_LA, _RAo, _EID, _TP, _CT], [0, 64 | 0, 1, 64 | 0, 0]);
export var CreateTokenResponse = struct(n0, _CTRr, 0, [_TI, _TT, _To], [0, 0, 0]);
export var GetLicenseManagerReportGeneratorRequest = struct(n0, _GLMRGR, 0, [_LMRGA], [0]);
export var GetLicenseManagerReportGeneratorResponse = struct(n0, _GLMRGRe, 0, [_RG], [() => ReportGenerator]);
export var ReportContext = struct(n0, _RC, 0, [_lCA], [64 | 0]);
export var ReportFrequency = struct(n0, _RF, 0, [_v, _p], [1, 0]);
export var ReportGenerator = struct(
  n0,
  _RG,
  0,
  [_RGN, _RTep, _RC, _RF, _LMRGA, _LRS, _LRFR, _LRGT, _RCA, _D, _SL, _CTr, _T],
  [0, 64 | 0, () => ReportContext, () => ReportFrequency, 0, 0, 0, 0, 0, 0, () => S3Location, 0, () => TagList]
);
export var S3Location = struct(n0, _SL, 0, [_b, _kP], [0, 0]);
export var UpdateLicenseManagerReportGeneratorRequest = struct(
  n0,
  _ULMRGR,
  0,
  [_LMRGA, _RGN, _Ty, _RC, _RF, _CT, _D],
  [0, 0, 64 | 0, () => ReportContext, () => ReportFrequency, 0, 0]
);
export var UpdateLicenseManagerReportGeneratorResponse = struct(n0, _ULMRGRp, 0, [], []);
export var ArnList = 64 | 0;

export var ReportTypeList = 64 | 0;

export var CreateLicenseManagerReportGenerator = op(
  n0,
  _CLMRG,
  0,
  () => CreateLicenseManagerReportGeneratorRequest,
  () => CreateLicenseManagerReportGeneratorResponse
);
export var CreateToken = op(
  n0,
  _CTre,
  0,
  () => CreateTokenRequest,
  () => CreateTokenResponse
);
export var GetLicenseManagerReportGenerator = op(
  n0,
  _GLMRG,
  0,
  () => GetLicenseManagerReportGeneratorRequest,
  () => GetLicenseManagerReportGeneratorResponse
);
export var UpdateLicenseManagerReportGenerator = op(
  n0,
  _ULMRG,
  0,
  () => UpdateLicenseManagerReportGeneratorRequest,
  () => UpdateLicenseManagerReportGeneratorResponse
);
