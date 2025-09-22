// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _CFM, _CFMR, _CFMRr, _DFM, _DFMR, _DFMRe, _FI, _FM, _h, _MI, _MT, _RI, _St, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateFolderMembershipRequest = struct(
  n0,
  _CFMR,
  0,
  [_AAI, _FI, _MI, _MT],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var CreateFolderMembershipResponse = struct(n0, _CFMRr, 0, [_St, _FM, _RI], [1, () => FolderMember, 0]);
export var DeleteFolderMembershipRequest = struct(
  n0,
  _DFMR,
  0,
  [_AAI, _FI, _MI, _MT],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteFolderMembershipResponse = struct(n0, _DFMRe, 0, [_St, _RI], [1, 0]);
export var FolderMember = struct(n0, _FM, 0, [_MI, _MT], [0, 0]);
export var CreateFolderMembership = op(
  n0,
  _CFM,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/folders/{FolderId}/members/{MemberType}/{MemberId}", 200],
  },
  () => CreateFolderMembershipRequest,
  () => CreateFolderMembershipResponse
);
export var DeleteFolderMembership = op(
  n0,
  _DFM,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/folders/{FolderId}/members/{MemberType}/{MemberId}", 200],
  },
  () => DeleteFolderMembershipRequest,
  () => DeleteFolderMembershipResponse
);
