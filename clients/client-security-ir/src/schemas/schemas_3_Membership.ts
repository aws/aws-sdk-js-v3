// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aI,
  _aIc,
  _BGMAD,
  _BGMADR,
  _BGMADRa,
  _CM,
  _CMR,
  _CMRa,
  _e,
  _er,
  _GMADE,
  _GMADEe,
  _GMADI,
  _GMADIe,
  _h,
  _i,
  _LM,
  _LMI,
  _LMIi,
  _LMR,
  _LMRi,
  _m,
  _mA,
  _mI,
  _mR,
  _mS,
  _nT,
  _r,
  _rS,
  _rTel,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchGetMemberAccountDetailsRequest = struct(n0, _BGMADR, 0, [_mI, _aI], [[0, 1], 64 | 0]);
export var BatchGetMemberAccountDetailsResponse = struct(
  n0,
  _BGMADRa,
  0,
  [_i, _er],
  [() => GetMembershipAccountDetailItems, () => GetMembershipAccountDetailErrors]
);
export var CancelMembershipRequest = struct(n0, _CMR, 0, [_mI], [[0, 1]]);
export var CancelMembershipResponse = struct(n0, _CMRa, 0, [_mI], [0]);
export var GetMembershipAccountDetailError = struct(n0, _GMADE, 0, [_aIc, _e, _m], [0, 0, 0]);
export var GetMembershipAccountDetailItem = struct(n0, _GMADI, 0, [_aIc, _rS, _rTel], [0, 0, 0]);
export var ListMembershipItem = struct(n0, _LMI, 0, [_mI, _aIc, _r, _mA, _mS], [0, 0, 0, 0, 0]);
export var ListMembershipsRequest = struct(n0, _LMR, 0, [_nT, _mR], [0, 1]);
export var ListMembershipsResponse = struct(n0, _LMRi, 0, [_nT, _i], [0, () => ListMembershipItems]);
export var AWSAccountIds = 64 | 0;

export var GetMembershipAccountDetailErrors = list(n0, _GMADEe, 0, () => GetMembershipAccountDetailError);
export var GetMembershipAccountDetailItems = list(n0, _GMADIe, 0, () => GetMembershipAccountDetailItem);
export var ListMembershipItems = list(n0, _LMIi, 0, () => ListMembershipItem);
export var BatchGetMemberAccountDetails = op(
  n0,
  _BGMAD,
  {
    [_h]: ["POST", "/v1/membership/{membershipId}/batch-member-details", 200],
  },
  () => BatchGetMemberAccountDetailsRequest,
  () => BatchGetMemberAccountDetailsResponse
);
export var CancelMembership = op(
  n0,
  _CM,
  {
    [_h]: ["PUT", "/v1/membership/{membershipId}", 200],
  },
  () => CancelMembershipRequest,
  () => CancelMembershipResponse
);
export var ListMemberships = op(
  n0,
  _LM,
  {
    [_h]: ["POST", "/v1/memberships", 200],
  },
  () => ListMembershipsRequest,
  () => ListMembershipsResponse
);
