// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AA,
  _AAc,
  _AACRI,
  _AACS,
  _AADRI,
  _AADS,
  _AAFP,
  _AAFPp,
  _AAL,
  _AALFP,
  _AALFPp,
  _AALp,
  _AAOS,
  _AAp,
  _AAppl,
  _AAppli,
  _AI,
  _CAA,
  _CAAR,
  _CAAr,
  _CAARr,
  _CAARre,
  _CAARrea,
  _CD,
  _DAA,
  _DAACS,
  _DAACSR,
  _DAACSRe,
  _DAADS,
  _DAADSR,
  _DAADSRe,
  _DAAe,
  _DAAes,
  _DAAR,
  _DAARe,
  _DAARel,
  _DAARele,
  _DAARes,
  _DAAResc,
  _F,
  _FR,
  _IA,
  _LAA,
  _LAAF,
  _LAAFi,
  _LAAFP,
  _LAAFPi,
  _LAAFPR,
  _LAAFPRi,
  _LAAFPRis,
  _LAAFPRist,
  _LAAi,
  _LAAR,
  _LAARi,
  _LAARis,
  _LAARist,
  _MR,
  _NT,
  _PI,
  _PSA,
  _PT,
  _RI,
  _St,
  _TI,
  _TT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccountAssignment = struct(n0, _AA, 0, [_AI, _PSA, _PT, _PI], [0, 0, 0, 0]);
export var AccountAssignmentForPrincipal = struct(n0, _AAFP, 0, [_AI, _PSA, _PI, _PT], [0, 0, 0, 0]);
export var AccountAssignmentOperationStatus = struct(
  n0,
  _AAOS,
  0,
  [_St, _RI, _FR, _TI, _TT, _PSA, _PT, _PI, _CD],
  [0, 0, 0, 0, 0, 0, 0, 0, 4]
);
export var ApplicationAssignment = struct(n0, _AAppl, 0, [_AAp, _PI, _PT], [0, 0, 0]);
export var ApplicationAssignmentForPrincipal = struct(n0, _AAFPp, 0, [_AAp, _PI, _PT], [0, 0, 0]);
export var CreateAccountAssignmentRequest = struct(n0, _CAAR, 0, [_IA, _TI, _TT, _PSA, _PT, _PI], [0, 0, 0, 0, 0, 0]);
export var CreateAccountAssignmentResponse = struct(n0, _CAARr, 0, [_AACS], [() => AccountAssignmentOperationStatus]);
export var CreateApplicationAssignmentRequest = struct(n0, _CAARre, 0, [_AAp, _PI, _PT], [0, 0, 0]);
export var CreateApplicationAssignmentResponse = struct(n0, _CAARrea, 0, [], []);
export var DeleteAccountAssignmentRequest = struct(n0, _DAAR, 0, [_IA, _TI, _TT, _PSA, _PT, _PI], [0, 0, 0, 0, 0, 0]);
export var DeleteAccountAssignmentResponse = struct(n0, _DAARe, 0, [_AADS], [() => AccountAssignmentOperationStatus]);
export var DeleteApplicationAssignmentRequest = struct(n0, _DAARel, 0, [_AAp, _PI, _PT], [0, 0, 0]);
export var DeleteApplicationAssignmentResponse = struct(n0, _DAARele, 0, [], []);
export var DescribeAccountAssignmentCreationStatusRequest = struct(n0, _DAACSR, 0, [_IA, _AACRI], [0, 0]);
export var DescribeAccountAssignmentCreationStatusResponse = struct(
  n0,
  _DAACSRe,
  0,
  [_AACS],
  [() => AccountAssignmentOperationStatus]
);
export var DescribeAccountAssignmentDeletionStatusRequest = struct(n0, _DAADSR, 0, [_IA, _AADRI], [0, 0]);
export var DescribeAccountAssignmentDeletionStatusResponse = struct(
  n0,
  _DAADSRe,
  0,
  [_AADS],
  [() => AccountAssignmentOperationStatus]
);
export var DescribeApplicationAssignmentRequest = struct(n0, _DAARes, 0, [_AAp, _PI, _PT], [0, 0, 0]);
export var DescribeApplicationAssignmentResponse = struct(n0, _DAAResc, 0, [_PT, _PI, _AAp], [0, 0, 0]);
export var ListAccountAssignmentsFilter = struct(n0, _LAAF, 0, [_AI], [0]);
export var ListAccountAssignmentsForPrincipalRequest = struct(
  n0,
  _LAAFPR,
  0,
  [_IA, _PI, _PT, _F, _NT, _MR],
  [0, 0, 0, () => ListAccountAssignmentsFilter, 0, 1]
);
export var ListAccountAssignmentsForPrincipalResponse = struct(
  n0,
  _LAAFPRi,
  0,
  [_AAc, _NT],
  [() => AccountAssignmentListForPrincipal, 0]
);
export var ListAccountAssignmentsRequest = struct(n0, _LAAR, 0, [_IA, _AI, _PSA, _MR, _NT], [0, 0, 0, 1, 0]);
export var ListAccountAssignmentsResponse = struct(n0, _LAARi, 0, [_AAc, _NT], [() => AccountAssignmentList, 0]);
export var ListApplicationAssignmentsFilter = struct(n0, _LAAFi, 0, [_AAp], [0]);
export var ListApplicationAssignmentsForPrincipalRequest = struct(
  n0,
  _LAAFPRis,
  0,
  [_IA, _PI, _PT, _F, _NT, _MR],
  [0, 0, 0, () => ListApplicationAssignmentsFilter, 0, 1]
);
export var ListApplicationAssignmentsForPrincipalResponse = struct(
  n0,
  _LAAFPRist,
  0,
  [_AAppli, _NT],
  [() => ApplicationAssignmentListForPrincipal, 0]
);
export var ListApplicationAssignmentsRequest = struct(n0, _LAARis, 0, [_AAp, _MR, _NT], [0, 1, 0]);
export var ListApplicationAssignmentsResponse = struct(
  n0,
  _LAARist,
  0,
  [_AAppli, _NT],
  [() => ApplicationAssignmentsList, 0]
);
export var AccountAssignmentList = list(n0, _AAL, 0, () => AccountAssignment);
export var AccountAssignmentListForPrincipal = list(n0, _AALFP, 0, () => AccountAssignmentForPrincipal);
export var ApplicationAssignmentListForPrincipal = list(n0, _AALFPp, 0, () => ApplicationAssignmentForPrincipal);
export var ApplicationAssignmentsList = list(n0, _AALp, 0, () => ApplicationAssignment);
export var CreateAccountAssignment = op(
  n0,
  _CAA,
  0,
  () => CreateAccountAssignmentRequest,
  () => CreateAccountAssignmentResponse
);
export var CreateApplicationAssignment = op(
  n0,
  _CAAr,
  0,
  () => CreateApplicationAssignmentRequest,
  () => CreateApplicationAssignmentResponse
);
export var DeleteAccountAssignment = op(
  n0,
  _DAA,
  0,
  () => DeleteAccountAssignmentRequest,
  () => DeleteAccountAssignmentResponse
);
export var DeleteApplicationAssignment = op(
  n0,
  _DAAe,
  2,
  () => DeleteApplicationAssignmentRequest,
  () => DeleteApplicationAssignmentResponse
);
export var DescribeAccountAssignmentCreationStatus = op(
  n0,
  _DAACS,
  0,
  () => DescribeAccountAssignmentCreationStatusRequest,
  () => DescribeAccountAssignmentCreationStatusResponse
);
export var DescribeAccountAssignmentDeletionStatus = op(
  n0,
  _DAADS,
  0,
  () => DescribeAccountAssignmentDeletionStatusRequest,
  () => DescribeAccountAssignmentDeletionStatusResponse
);
export var DescribeApplicationAssignment = op(
  n0,
  _DAAes,
  0,
  () => DescribeApplicationAssignmentRequest,
  () => DescribeApplicationAssignmentResponse
);
export var ListAccountAssignments = op(
  n0,
  _LAA,
  0,
  () => ListAccountAssignmentsRequest,
  () => ListAccountAssignmentsResponse
);
export var ListAccountAssignmentsForPrincipal = op(
  n0,
  _LAAFP,
  0,
  () => ListAccountAssignmentsForPrincipalRequest,
  () => ListAccountAssignmentsForPrincipalResponse
);
export var ListApplicationAssignments = op(
  n0,
  _LAAi,
  0,
  () => ListApplicationAssignmentsRequest,
  () => ListApplicationAssignmentsResponse
);
export var ListApplicationAssignmentsForPrincipal = op(
  n0,
  _LAAFPi,
  0,
  () => ListApplicationAssignmentsForPrincipalRequest,
  () => ListApplicationAssignmentsForPrincipalResponse
);
