const _ADE = "AccessDeniedException";
const _CAR = "CreateAbuseReport";
const _CARR = "CreateAbuseReportRequest";
const _CARRr = "CreateAbuseReportResponse";
const _CE = "ConflictException";
const _GARS = "GetAbuseReportStatus";
const _GARSR = "GetAbuseReportStatusRequest";
const _GARSRe = "GetAbuseReportStatusResponse";
const _ISE = "InternalServerException";
const _LARS = "ListAbuseReportStatuses";
const _LARSR = "ListAbuseReportStatusesRequest";
const _LARSRi = "ListAbuseReportStatusesResponse";
const _RA = "Retry-After";
const _RD = "ReportData";
const _RNFE = "ResourceNotFoundException";
const _RSL = "ReportStatusList";
const _RSLI = "ReportStatusListItem";
const _SR = "SubmissionRequirement";
const _SRE = "SubmissionRequirementException";
const _SRL = "SubmissionRequirementList";
const _TE = "ThrottlingException";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFL = "ValidationExceptionFieldList";
const _c = "client";
const _cI = "correlationId";
const _cT = "clientToken";
const _co = "code";
const _d = "description";
const _e = "error";
const _fL = "fieldList";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _lUA = "lastUpdatedAt";
const _m = "message";
const _mR = "maxResults";
const _nT = "nextToken";
const _p = "path";
const _qC = "quotaCode";
const _r = "report";
const _rAS = "retryAfterSeconds";
const _rC = "reasonCode";
const _rI = "resourceId";
const _rIe = "reportId";
const _re = "reports";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.abusesignal";
const _sA = "submittedAt";
const _sC = "serviceCode";
const _se = "server";
const _st = "status";
const _uR = "unmetRequirements";
const _x = "xarf";
const n0 = "com.amazonaws.abusesignal";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticStructureSchema,
  StaticUnionSchema,
} from "@smithy/types";

import { AbuseSignalServiceException } from "../models/AbuseSignalServiceException";
import {
  AccessDeniedException,
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  SubmissionRequirementException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";

/* eslint no-var: 0 */
const _s_registry = new TypeRegistry(_s);
export var AbuseSignalServiceException$: StaticErrorSchema = [-3, _s, "AbuseSignalServiceException", 0, [], []];
_s_registry.registerError(AbuseSignalServiceException$, AbuseSignalServiceException);
const n0_registry = new TypeRegistry(n0);
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_m],
  [0], 1
];
n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE,
  { [_e]: _c, [_hE]: 409 },
  [_m],
  [0], 1
];
n0_registry.registerError(ConflictException$, ConflictException);
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_m, _rAS],
  [0, [1, { [_hH]: _RA }]], 1
];
n0_registry.registerError(InternalServerException$, InternalServerException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_m, _rI],
  [0, 0], 2
];
n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var SubmissionRequirementException$: StaticErrorSchema = [-3, n0, _SRE,
  { [_e]: _c, [_hE]: 422 },
  [_m, _uR],
  [0, () => SubmissionRequirementList], 1
];
n0_registry.registerError(SubmissionRequirementException$, SubmissionRequirementException);
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c, [_hE]: 429 },
  [_m, _sC, _qC, _rAS],
  [0, 0, 0, [1, { [_hH]: _RA }]], 1
];
n0_registry.registerError(ThrottlingException$, ThrottlingException);
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_m, _fL],
  [0, () => ValidationExceptionFieldList], 1
];
n0_registry.registerError(ValidationException$, ValidationException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
  n0_registry,
]
export var CreateAbuseReportRequest$: StaticStructureSchema = [3, n0, _CARR,
  0,
  [_r, _cI, _cT],
  [[() => ReportData$, 0], 0, 0], 1
];
export var CreateAbuseReportResponse$: StaticStructureSchema = [3, n0, _CARRr,
  0,
  [_rIe, _cI],
  [0, 0], 1
];
export var GetAbuseReportStatusRequest$: StaticStructureSchema = [3, n0, _GARSR,
  0,
  [_rIe],
  [[0, 1]], 1
];
export var GetAbuseReportStatusResponse$: StaticStructureSchema = [3, n0, _GARSRe,
  0,
  [_rIe, _st, _d, _sA, _cI, _rC, _lUA],
  [0, 0, 0, 4, 0, 0, 4], 4
];
export var ListAbuseReportStatusesRequest$: StaticStructureSchema = [3, n0, _LARSR,
  0,
  [_cI, _nT, _mR],
  [[0, { [_hQ]: _cI }], [0, { [_hQ]: _nT }], [1, { [_hQ]: _mR }]]
];
export var ListAbuseReportStatusesResponse$: StaticStructureSchema = [3, n0, _LARSRi,
  0,
  [_re, _nT],
  [() => ReportStatusList, 0], 1
];
export var ReportStatusListItem$: StaticStructureSchema = [3, n0, _RSLI,
  0,
  [_rIe, _st, _d, _cI, _rC],
  [0, 0, 0, 0, 0], 3
];
export var SubmissionRequirement$: StaticStructureSchema = [3, n0, _SR,
  0,
  [_p, _m, _co],
  [0, 0, 0], 2
];
export var ValidationExceptionField$: StaticStructureSchema = [3, n0, _VEF,
  0,
  [_p, _m],
  [0, 0], 2
];
var ReportStatusList: StaticListSchema = [1, n0, _RSL,
  0, () => ReportStatusListItem$
];
var SubmissionRequirementList: StaticListSchema = [1, n0, _SRL,
  0, () => SubmissionRequirement$
];
var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL,
  0, () => ValidationExceptionField$
];
export var ReportData$: StaticUnionSchema = [4, n0, _RD,
  8,
  [_x],
  [15]
];
export var CreateAbuseReport$: StaticOperationSchema = [9, n0, _CAR,
  { [_h]: ["POST", "/v1/abuse", 202] }, () => CreateAbuseReportRequest$, () => CreateAbuseReportResponse$
];
export var GetAbuseReportStatus$: StaticOperationSchema = [9, n0, _GARS,
  { [_h]: ["GET", "/v1/abuse/{reportId}", 200] }, () => GetAbuseReportStatusRequest$, () => GetAbuseReportStatusResponse$
];
export var ListAbuseReportStatuses$: StaticOperationSchema = [9, n0, _LARS,
  { [_h]: ["GET", "/v1/abusestatuses", 200] }, () => ListAbuseReportStatusesRequest$, () => ListAbuseReportStatusesResponse$
];
