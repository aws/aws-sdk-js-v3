// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAIc, _AAIR, _AAIRc, _AI, _h, _II, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AcceptAdministratorInvitationRequest = struct(n0, _AAIR, 0, [_AI, _II], [0, 0]);
export var AcceptAdministratorInvitationResponse = struct(n0, _AAIRc, 0, [], []);
export var AcceptAdministratorInvitation = op(
  n0,
  _AAIc,
  {
    [_h]: ["POST", "/administrator", 200],
  },
  () => AcceptAdministratorInvitationRequest,
  () => AcceptAdministratorInvitationResponse
);
