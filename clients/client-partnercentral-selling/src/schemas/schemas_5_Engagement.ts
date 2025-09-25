// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _AI, _C, _CN, _EM, _EML, _EMn, _h, _I, _LEM, _LEMR, _LEMRi, _MR, _NT, _WU, n0 } from "./schemas_0";
import { MemberCompanyName } from "./schemas_14_Engagement";
import { AwsAccount } from "./schemas_18_Engagement";

/* eslint no-var: 0 */

export var EngagementMember = struct(
  n0,
  _EM,
  0,
  [_CN, _WU, _AI],
  [[() => MemberCompanyName, 0], 0, [() => AwsAccount, 0]]
);
export var ListEngagementMembersRequest = struct(n0, _LEMR, 0, [_C, _I, _MR, _NT], [0, 0, 1, 0]);
export var ListEngagementMembersResponse = struct(n0, _LEMRi, 0, [_EML, _NT], [[() => EngagementMembers, 0], 0]);
export var EngagementMembers = list(n0, _EMn, 0, [() => EngagementMember, 0]);
export var ListEngagementMembers = op(
  n0,
  _LEM,
  {
    [_h]: ["POST", "/ListEngagementMembers", 200],
  },
  () => ListEngagementMembersRequest,
  () => ListEngagementMembersResponse
);
