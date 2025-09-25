// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ReportGenerationLimitExceededException as __ReportGenerationLimitExceededException } from "../models/index";
import {
  _A,
  _AD,
  _ADc,
  _ANc,
  _aQE,
  _C,
  _c,
  _E,
  _e,
  _ED,
  _EDL,
  _eDLT,
  _EDr,
  _EI,
  _EP,
  _GOAR,
  _GOARe,
  _GOARR,
  _GOARRe,
  _GOARRet,
  _GOARRetr,
  _Gr,
  _GSLAD,
  _GSLADe,
  _GSLADR,
  _GSLADRe,
  _GSLADRet,
  _GSLADRete,
  _GSLADWE,
  _GSLADWER,
  _GSLADWERe,
  _hE,
  _I,
  _IT,
  _JCD,
  _JCDo,
  _JI,
  _JS,
  _JT,
  _LA,
  _LAE,
  _LAEa,
  _LAR,
  _LARa,
  _LAT,
  _LATa,
  _M,
  _m,
  _Ma,
  _MI,
  _N,
  _NOSA,
  _NOSNA,
  _OPI,
  _P,
  _R,
  _RGLEE,
  _SK,
  _SLA,
  _SLAe,
  _SN,
  _SNe,
  _TAE,
  _TALA,
  _TALAr,
  _Ty,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDetail = struct(n0, _AD, 0, [_SN, _SNe, _R, _EP, _LAT, _TAE], [0, 0, 0, 0, 4, 1]);
export var EntityDetails = struct(n0, _ED, 0, [_EI, _LA], [() => EntityInfo, 4]);
export var EntityInfo = struct(n0, _EI, 0, [_A, _N, _Ty, _I, _P], [0, 0, 0, 0, 0]);
export var ErrorDetails = struct(n0, _EDr, 0, [_M, _C], [0, 0]);
export var GenerateOrganizationsAccessReportRequest = struct(n0, _GOARR, 0, [_EP, _OPI], [0, 0]);
export var GenerateOrganizationsAccessReportResponse = struct(n0, _GOARRe, 0, [_JI], [0]);
export var GenerateServiceLastAccessedDetailsRequest = struct(n0, _GSLADR, 0, [_A, _Gr], [0, 0]);
export var GenerateServiceLastAccessedDetailsResponse = struct(n0, _GSLADRe, 0, [_JI], [0]);
export var GetOrganizationsAccessReportRequest = struct(n0, _GOARRet, 0, [_JI, _MI, _Ma, _SK], [0, 1, 0, 0]);
export var GetOrganizationsAccessReportResponse = struct(
  n0,
  _GOARRetr,
  0,
  [_JS, _JCD, _JCDo, _NOSA, _NOSNA, _ADc, _IT, _Ma, _EDr],
  [0, 4, 4, 1, 1, () => AccessDetails, 2, 0, () => ErrorDetails]
);
export var GetServiceLastAccessedDetailsRequest = struct(n0, _GSLADRet, 0, [_JI, _MI, _Ma], [0, 1, 0]);
export var GetServiceLastAccessedDetailsResponse = struct(
  n0,
  _GSLADRete,
  0,
  [_JS, _JT, _JCD, _SLA, _JCDo, _IT, _Ma, _E],
  [0, 0, 4, () => ServicesLastAccessed, 4, 2, 0, () => ErrorDetails]
);
export var GetServiceLastAccessedDetailsWithEntitiesRequest = struct(
  n0,
  _GSLADWER,
  0,
  [_JI, _SNe, _MI, _Ma],
  [0, 0, 1, 0]
);
export var GetServiceLastAccessedDetailsWithEntitiesResponse = struct(
  n0,
  _GSLADWERe,
  0,
  [_JS, _JCD, _JCDo, _EDL, _IT, _Ma, _E],
  [0, 4, 4, () => entityDetailsListType, 2, 0, () => ErrorDetails]
);
export var ReportGenerationLimitExceededException = error(
  n0,
  _RGLEE,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`ReportGenerationLimitExceeded`, 409],
  },
  [_m],
  [0],

  __ReportGenerationLimitExceededException
);
export var ServiceLastAccessed = struct(
  n0,
  _SLAe,
  0,
  [_SN, _LA, _SNe, _LAE, _LAR, _TAE, _TALA],
  [0, 4, 0, 0, 0, 1, () => TrackedActionsLastAccessed]
);
export var TrackedActionLastAccessed = struct(n0, _TALAr, 0, [_ANc, _LAEa, _LATa, _LARa], [0, 0, 4, 0]);
export var AccessDetails = list(n0, _ADc, 0, () => AccessDetail);
export var entityDetailsListType = list(n0, _eDLT, 0, () => EntityDetails);
export var ServicesLastAccessed = list(n0, _SLA, 0, () => ServiceLastAccessed);
export var TrackedActionsLastAccessed = list(n0, _TALA, 0, () => TrackedActionLastAccessed);
export var GenerateOrganizationsAccessReport = op(
  n0,
  _GOAR,
  0,
  () => GenerateOrganizationsAccessReportRequest,
  () => GenerateOrganizationsAccessReportResponse
);
export var GenerateServiceLastAccessedDetails = op(
  n0,
  _GSLAD,
  0,
  () => GenerateServiceLastAccessedDetailsRequest,
  () => GenerateServiceLastAccessedDetailsResponse
);
export var GetOrganizationsAccessReport = op(
  n0,
  _GOARe,
  0,
  () => GetOrganizationsAccessReportRequest,
  () => GetOrganizationsAccessReportResponse
);
export var GetServiceLastAccessedDetails = op(
  n0,
  _GSLADe,
  0,
  () => GetServiceLastAccessedDetailsRequest,
  () => GetServiceLastAccessedDetailsResponse
);
export var GetServiceLastAccessedDetailsWithEntities = op(
  n0,
  _GSLADWE,
  0,
  () => GetServiceLastAccessedDetailsWithEntitiesRequest,
  () => GetServiceLastAccessedDetailsWithEntitiesResponse
);
