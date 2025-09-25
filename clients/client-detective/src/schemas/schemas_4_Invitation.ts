// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _AIcc,
  _AIR,
  _c,
  _CE,
  _CG,
  _CGR,
  _CGRr,
  _DMi,
  _DMRi,
  _e,
  _GA,
  _h,
  _hE,
  _M,
  _RI,
  _RIR,
  _T,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AcceptInvitationRequest = struct(n0, _AIR, 0, [_GA], [0]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ConflictException
);
export var CreateGraphRequest = struct(n0, _CGR, 0, [_T], [128 | 0]);
export var CreateGraphResponse = struct(n0, _CGRr, 0, [_GA], [0]);
export var DisassociateMembershipRequest = struct(n0, _DMRi, 0, [_GA], [0]);
export var RejectInvitationRequest = struct(n0, _RIR, 0, [_GA], [0]);
export var AcceptInvitation = op(
  n0,
  _AIcc,
  {
    [_h]: ["PUT", "/invitation", 200],
  },
  () => AcceptInvitationRequest,
  () => Unit
);
export var CreateGraph = op(
  n0,
  _CG,
  {
    [_h]: ["POST", "/graph", 200],
  },
  () => CreateGraphRequest,
  () => CreateGraphResponse
);
export var DisassociateMembership = op(
  n0,
  _DMi,
  {
    [_h]: ["POST", "/membership/removal", 200],
  },
  () => DisassociateMembershipRequest,
  () => Unit
);
export var RejectInvitation = op(
  n0,
  _RI,
  {
    [_h]: ["POST", "/invitation/removal", 200],
  },
  () => RejectInvitationRequest,
  () => Unit
);
