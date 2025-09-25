// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import { ConcurrentUpdatingException as __ConcurrentUpdatingException } from "../models/index";
import {
  _AAI,
  _AIs,
  _ANs,
  _as,
  _ASs,
  _CIAMPA,
  _CIAMPAR,
  _CIAMPARr,
  _CUE,
  _DIAMPA,
  _DIAMPAe,
  _DIAMPAR,
  _DIAMPARe,
  _DIAMPARes,
  _DIAMPAResc,
  _e,
  _h,
  _hE,
  _hQ,
  _IAMPA,
  _IAMPAo,
  _IAMPAS,
  _IAMPASL,
  _Id,
  _IMd,
  _LIAMPA,
  _LIAMPAR,
  _LIAMPARi,
  _M,
  _MR,
  _mr,
  _Na,
  _NT,
  _nt,
  _PA,
  _RI,
  _s,
  _St,
  _UIAMPA,
  _UIAMPAR,
  _UIAMPARp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConcurrentUpdatingException = error(
  n0,
  _CUE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M, _RI],
  [0, 0],

  __ConcurrentUpdatingException
);
export var CreateIAMPolicyAssignmentRequest = struct(
  n0,
  _CIAMPAR,
  0,
  [_AAI, _ANs, _ASs, _PA, _Id, _Na],
  [[0, 1], 0, 0, 0, map(n0, _IMd, 0, 0, 64 | 0), [0, 1]]
);
export var CreateIAMPolicyAssignmentResponse = struct(
  n0,
  _CIAMPARr,
  0,
  [_ANs, _AIs, _ASs, _PA, _Id, _RI, _St],
  [0, 0, 0, 0, map(n0, _IMd, 0, 0, 64 | 0), 0, [1, 32]]
);
export var DeleteIAMPolicyAssignmentRequest = struct(
  n0,
  _DIAMPAR,
  0,
  [_AAI, _ANs, _Na],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteIAMPolicyAssignmentResponse = struct(n0, _DIAMPARe, 0, [_ANs, _RI, _St], [0, 0, [1, 32]]);
export var DescribeIAMPolicyAssignmentRequest = struct(
  n0,
  _DIAMPARes,
  0,
  [_AAI, _ANs, _Na],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DescribeIAMPolicyAssignmentResponse = struct(
  n0,
  _DIAMPAResc,
  0,
  [_IAMPA, _RI, _St],
  [() => IAMPolicyAssignment, 0, [1, 32]]
);
export var IAMPolicyAssignment = struct(
  n0,
  _IAMPA,
  0,
  [_AAI, _AIs, _ANs, _PA, _Id, _ASs],
  [0, 0, 0, 0, map(n0, _IMd, 0, 0, 64 | 0), 0]
);
export var IAMPolicyAssignmentSummary = struct(n0, _IAMPAS, 0, [_ANs, _ASs], [0, 0]);
export var ListIAMPolicyAssignmentsRequest = struct(
  n0,
  _LIAMPAR,
  0,
  [_AAI, _ASs, _Na, _NT, _MR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _as,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
  ]
);
export var ListIAMPolicyAssignmentsResponse = struct(
  n0,
  _LIAMPARi,
  0,
  [_IAMPAo, _NT, _RI, _St],
  [() => IAMPolicyAssignmentSummaryList, 0, 0, [1, 32]]
);
export var UpdateIAMPolicyAssignmentRequest = struct(
  n0,
  _UIAMPAR,
  0,
  [_AAI, _ANs, _Na, _ASs, _PA, _Id],
  [[0, 1], [0, 1], [0, 1], 0, 0, map(n0, _IMd, 0, 0, 64 | 0)]
);
export var UpdateIAMPolicyAssignmentResponse = struct(
  n0,
  _UIAMPARp,
  0,
  [_ANs, _AIs, _PA, _Id, _ASs, _RI, _St],
  [0, 0, 0, map(n0, _IMd, 0, 0, 64 | 0), 0, 0, [1, 32]]
);
export var IAMPolicyAssignmentSummaryList = list(n0, _IAMPASL, 0, () => IAMPolicyAssignmentSummary);
export var IdentityNameList = 64 | 0;

export var IdentityMap = map(n0, _IMd, 0, 0, 64 | 0);
export var CreateIAMPolicyAssignment = op(
  n0,
  _CIAMPA,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments", 200],
  },
  () => CreateIAMPolicyAssignmentRequest,
  () => CreateIAMPolicyAssignmentResponse
);
export var DeleteIAMPolicyAssignment = op(
  n0,
  _DIAMPA,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/namespace/{Namespace}/iam-policy-assignments/{AssignmentName}", 200],
  },
  () => DeleteIAMPolicyAssignmentRequest,
  () => DeleteIAMPolicyAssignmentResponse
);
export var DescribeIAMPolicyAssignment = op(
  n0,
  _DIAMPAe,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments/{AssignmentName}", 200],
  },
  () => DescribeIAMPolicyAssignmentRequest,
  () => DescribeIAMPolicyAssignmentResponse
);
export var ListIAMPolicyAssignments = op(
  n0,
  _LIAMPA,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/namespaces/{Namespace}/v2/iam-policy-assignments", 200],
  },
  () => ListIAMPolicyAssignmentsRequest,
  () => ListIAMPolicyAssignmentsResponse
);
export var UpdateIAMPolicyAssignment = op(
  n0,
  _UIAMPA,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments/{AssignmentName}", 200],
  },
  () => UpdateIAMPolicyAssignmentRequest,
  () => UpdateIAMPolicyAssignmentResponse
);
