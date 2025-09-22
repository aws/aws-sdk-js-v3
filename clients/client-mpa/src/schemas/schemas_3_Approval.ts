// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _A,
  _Ar,
  _AS,
  _ATRA,
  _ATRAp,
  _D,
  _DIATV,
  _DIATVR,
  _DIATVRe,
  _h,
  _MAR,
  _MN,
  _MNAS,
  _PII,
  _PISA,
  _UAT,
  _UATR,
  _UATRp,
  _VI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Description = sim(n0, _D, 0, 8);
export var ApprovalTeamRequestApprover = struct(n0, _ATRA, 0, [_PII, _PISA], [0, 0]);
export var DeleteInactiveApprovalTeamVersionRequest = struct(
  n0,
  _DIATVR,
  0,
  [_Ar, _VI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteInactiveApprovalTeamVersionResponse = struct(n0, _DIATVRe, 0, [], []);
export var MofNApprovalStrategy = struct(n0, _MNAS, 0, [_MAR], [1]);
export var UpdateApprovalTeamRequest = struct(
  n0,
  _UATR,
  0,
  [_AS, _A, _D, _Ar],
  [() => ApprovalStrategy, () => ApprovalTeamRequestApprovers, [() => Description, 0], [0, 1]]
);
export var UpdateApprovalTeamResponse = struct(n0, _UATRp, 0, [_VI], [0]);
export var ApprovalTeamRequestApprovers = list(n0, _ATRAp, 0, () => ApprovalTeamRequestApprover);
export var ApprovalStrategy = uni(n0, _AS, 0, [_MN], [() => MofNApprovalStrategy]);
export var DeleteInactiveApprovalTeamVersion = op(
  n0,
  _DIATV,
  {
    [_h]: ["DELETE", "/approval-teams/{Arn}/{VersionId}", 200],
  },
  () => DeleteInactiveApprovalTeamVersionRequest,
  () => DeleteInactiveApprovalTeamVersionResponse
);
export var UpdateApprovalTeam = op(
  n0,
  _UAT,
  {
    [_h]: ["PATCH", "/approval-teams/{Arn}", 200],
  },
  () => UpdateApprovalTeamRequest,
  () => UpdateApprovalTeamResponse
);
