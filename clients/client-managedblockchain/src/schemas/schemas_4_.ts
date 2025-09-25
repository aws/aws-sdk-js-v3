// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { IllegalActionException as __IllegalActionException } from "../models/index";
import { _c, _e, _h, _hE, _IAE, _II, _M, _RI, _RII, _RIO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var IllegalActionException = error(
  n0,
  _IAE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __IllegalActionException
);
export var RejectInvitationInput = struct(n0, _RII, 0, [_II], [[0, 1]]);
export var RejectInvitationOutput = struct(n0, _RIO, 0, [], []);
export var RejectInvitation = op(
  n0,
  _RI,
  {
    [_h]: ["DELETE", "/invitations/{InvitationId}", 200],
  },
  () => RejectInvitationInput,
  () => RejectInvitationOutput
);
