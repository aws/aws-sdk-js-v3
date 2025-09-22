// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _ADE,
  _b,
  _c,
  _cA,
  _DRD,
  _DRDR,
  _DRDRe,
  _dSL,
  _e,
  _f,
  _GRD,
  _GRDR,
  _GRDRe,
  _h,
  _hE,
  _hQ,
  _IAU,
  _IAUR,
  _IAURm,
  _iI,
  _ISE,
  _k,
  _LRD,
  _LRDR,
  _LRDRi,
  _lU,
  _lUA,
  _m,
  _mR,
  _nT,
  _p,
  _PRD,
  _PRDR,
  _PRDRu,
  _r,
  _RD,
  _rD,
  _rDe,
  _RDL,
  _rF,
  _rI,
  _s,
  _SL,
  _SQEE,
  _SSL,
  _sSL,
  _TE,
  _URD,
  _URDR,
  _URDRp,
  _VE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var DeleteReportDefinitionRequest = struct(n0, _DRDR, 0, [_rI], [[0, 1]]);
export var DeleteReportDefinitionResult = struct(n0, _DRDRe, 0, [_rI], [0]);
export var GetReportDefinitionRequest = struct(n0, _GRDR, 0, [_rI], [[0, 1]]);
export var GetReportDefinitionResult = struct(
  n0,
  _GRDRe,
  0,
  [_rI, _rD, _rF, _f, _dSL, _cA, _lU],
  [0, 0, 0, 0, () => S3Location, 4, 4]
);
export var ImportApplicationUsageRequest = struct(n0, _IAUR, 0, [_sSL], [() => SourceS3Location]);
export var ImportApplicationUsageResult = struct(n0, _IAURm, 0, [_iI], [0]);
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
export var ListReportDefinitionsRequest = struct(
  n0,
  _LRDR,
  0,
  [_nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListReportDefinitionsResult = struct(n0, _LRDRi, 0, [_rDe, _nT], [() => ReportDefinitionList, 0]);
export var PutReportDefinitionRequest = struct(n0, _PRDR, 0, [_rI, _rD, _rF, _f, _dSL], [0, 0, 0, 0, () => S3Location]);
export var PutReportDefinitionResult = struct(n0, _PRDRu, 0, [_rI], [0]);
export var ReportDefinition = struct(
  n0,
  _RD,
  0,
  [_rI, _rD, _rF, _f, _dSL, _cA, _lUA],
  [0, 0, 0, 0, () => S3Location, 4, 4]
);
export var S3Location = struct(n0, _SL, 0, [_b, _p], [0, 0]);
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
export var SourceS3Location = struct(n0, _SSL, 0, [_b, _k, _r], [0, 0, 0]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],

  __ThrottlingException
);
export var UpdateReportDefinitionRequest = struct(
  n0,
  _URDR,
  0,
  [_rI, _rD, _rF, _f, _dSL],
  [[0, 1], 0, 0, 0, () => S3Location]
);
export var UpdateReportDefinitionResult = struct(n0, _URDRp, 0, [_rI], [0]);
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

export var ReportDefinitionList = list(n0, _RDL, 0, () => ReportDefinition);
export var DeleteReportDefinition = op(
  n0,
  _DRD,
  {
    [_h]: ["DELETE", "/reportDefinition/{reportId}", 200],
  },
  () => DeleteReportDefinitionRequest,
  () => DeleteReportDefinitionResult
);
export var GetReportDefinition = op(
  n0,
  _GRD,
  {
    [_h]: ["GET", "/reportDefinition/{reportId}", 200],
  },
  () => GetReportDefinitionRequest,
  () => GetReportDefinitionResult
);
export var ImportApplicationUsage = op(
  n0,
  _IAU,
  {
    [_h]: ["POST", "/importApplicationUsage", 200],
  },
  () => ImportApplicationUsageRequest,
  () => ImportApplicationUsageResult
);
export var ListReportDefinitions = op(
  n0,
  _LRD,
  {
    [_h]: ["GET", "/reportDefinition", 200],
  },
  () => ListReportDefinitionsRequest,
  () => ListReportDefinitionsResult
);
export var PutReportDefinition = op(
  n0,
  _PRD,
  {
    [_h]: ["POST", "/reportDefinition", 200],
  },
  () => PutReportDefinitionRequest,
  () => PutReportDefinitionResult
);
export var UpdateReportDefinition = op(
  n0,
  _URD,
  {
    [_h]: ["PUT", "/reportDefinition/{reportId}", 200],
  },
  () => UpdateReportDefinitionRequest,
  () => UpdateReportDefinitionResult
);
