// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIc,
  _AL,
  _AN,
  _An,
  _ARP,
  _ARR,
  _As,
  _ASs,
  _CTo,
  _EC,
  _HITI,
  _HITRP,
  _HITRR,
  _Ke,
  _LAFHIT,
  _LAFHITR,
  _LAFHITRi,
  _LQR,
  _LQRR,
  _LQRRi,
  _LQT,
  _LQTR,
  _LQTRi,
  _LRPRFHIT,
  _LRPRFHITR,
  _LRPRFHITRi,
  _LWB,
  _LWBR,
  _LWBRi,
  _LWWQT,
  _LWWQTR,
  _LWWQTRi,
  _MBOBC,
  _MBR,
  _MR,
  _NR,
  _NT,
  _PL,
  _QIu,
  _QL,
  _QRI,
  _QRL,
  _QRu,
  _QRua,
  _QTI,
  _QTL,
  _QTu,
  _Qua,
  _Que,
  _R,
  _RAD,
  _RADL,
  _RAe,
  _RAev,
  _Res,
  _RR,
  _RRD,
  _RRDL,
  _RRe,
  _RRev,
  _S,
  _SI,
  _ST,
  _STu,
  _Te,
  _TI,
  _TT,
  _V,
  _WB,
  _WBL,
  _WBo,
  _WI,
  n0,
} from "./schemas_0";
import { QualificationType } from "./schemas_4_Qualification";
import { ReviewPolicy } from "./schemas_8_HIT";
import { Assignment } from "./schemas_10_Assignment";
import { Qualification } from "./schemas_11_HIT";

/* eslint no-var: 0 */

export var ListAssignmentsForHITRequest = struct(n0, _LAFHITR, 0, [_HITI, _NT, _MR, _ASs], [0, 0, 1, 64 | 0]);
export var ListAssignmentsForHITResponse = struct(n0, _LAFHITRi, 0, [_NT, _NR, _As], [0, 1, () => AssignmentList]);
export var ListQualificationRequestsRequest = struct(n0, _LQRR, 0, [_QTI, _NT, _MR], [0, 0, 1]);
export var ListQualificationRequestsResponse = struct(
  n0,
  _LQRRi,
  0,
  [_NR, _NT, _QRu],
  [1, 0, () => QualificationRequestList]
);
export var ListQualificationTypesRequest = struct(n0, _LQTR, 0, [_Que, _MBR, _MBOBC, _NT, _MR], [0, 2, 2, 0, 1]);
export var ListQualificationTypesResponse = struct(
  n0,
  _LQTRi,
  0,
  [_NR, _NT, _QTu],
  [1, 0, () => QualificationTypeList]
);
export var ListReviewPolicyResultsForHITRequest = struct(
  n0,
  _LRPRFHITR,
  0,
  [_HITI, _PL, _RAe, _RR, _NT, _MR],
  [0, 64 | 0, 2, 2, 0, 1]
);
export var ListReviewPolicyResultsForHITResponse = struct(
  n0,
  _LRPRFHITRi,
  0,
  [_HITI, _ARP, _HITRP, _ARR, _HITRR, _NT],
  [0, () => ReviewPolicy, () => ReviewPolicy, () => ReviewReport, () => ReviewReport, 0]
);
export var ListWorkerBlocksRequest = struct(n0, _LWBR, 0, [_NT, _MR], [0, 1]);
export var ListWorkerBlocksResponse = struct(n0, _LWBRi, 0, [_NT, _NR, _WB], [0, 1, () => WorkerBlockList]);
export var ListWorkersWithQualificationTypeRequest = struct(n0, _LWWQTR, 0, [_QTI, _S, _NT, _MR], [0, 0, 0, 1]);
export var ListWorkersWithQualificationTypeResponse = struct(
  n0,
  _LWWQTRi,
  0,
  [_NT, _NR, _Qua],
  [0, 1, () => QualificationList]
);
export var QualificationRequest = struct(n0, _QRua, 0, [_QRI, _QTI, _WI, _Te, _An, _ST], [0, 0, 0, 0, 0, 4]);
export var ReviewActionDetail = struct(
  n0,
  _RAD,
  0,
  [_AIc, _AN, _TI, _TT, _S, _CTo, _Res, _EC],
  [0, 0, 0, 0, 0, 4, 0, 0]
);
export var ReviewReport = struct(
  n0,
  _RRe,
  0,
  [_RRev, _RAev],
  [() => ReviewResultDetailList, () => ReviewActionDetailList]
);
export var ReviewResultDetail = struct(n0, _RRD, 0, [_AIc, _SI, _STu, _QIu, _Ke, _V], [0, 0, 0, 0, 0, 0]);
export var WorkerBlock = struct(n0, _WBo, 0, [_WI, _R], [0, 0]);
export var AssignmentList = list(n0, _AL, 0, () => Assignment);
export var AssignmentStatusList = 64 | 0;

export var QualificationList = list(n0, _QL, 0, () => Qualification);
export var QualificationRequestList = list(n0, _QRL, 0, () => QualificationRequest);
export var QualificationTypeList = list(n0, _QTL, 0, () => QualificationType);
export var ReviewActionDetailList = list(n0, _RADL, 0, () => ReviewActionDetail);
export var ReviewPolicyLevelList = 64 | 0;

export var ReviewResultDetailList = list(n0, _RRDL, 0, () => ReviewResultDetail);
export var WorkerBlockList = list(n0, _WBL, 0, () => WorkerBlock);
export var ListAssignmentsForHIT = op(
  n0,
  _LAFHIT,
  2,
  () => ListAssignmentsForHITRequest,
  () => ListAssignmentsForHITResponse
);
export var ListQualificationRequests = op(
  n0,
  _LQR,
  2,
  () => ListQualificationRequestsRequest,
  () => ListQualificationRequestsResponse
);
export var ListQualificationTypes = op(
  n0,
  _LQT,
  2,
  () => ListQualificationTypesRequest,
  () => ListQualificationTypesResponse
);
export var ListReviewPolicyResultsForHIT = op(
  n0,
  _LRPRFHIT,
  2,
  () => ListReviewPolicyResultsForHITRequest,
  () => ListReviewPolicyResultsForHITResponse
);
export var ListWorkerBlocks = op(
  n0,
  _LWB,
  2,
  () => ListWorkerBlocksRequest,
  () => ListWorkerBlocksResponse
);
export var ListWorkersWithQualificationType = op(
  n0,
  _LWWQT,
  2,
  () => ListWorkersWithQualificationTypeRequest,
  () => ListWorkersWithQualificationTypeResponse
);
