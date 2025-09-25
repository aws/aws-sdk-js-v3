// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DEI, _DEIR, _DEIRe, _EI, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEmailIdentityRequest = struct(n0, _DEIR, 0, [_EI], [[0, 1]]);
export var DeleteEmailIdentityResponse = struct(n0, _DEIRe, 0, [], []);
export var DeleteEmailIdentity = op(
  n0,
  _DEI,
  {
    [_h]: ["DELETE", "/v2/email/identities/{EmailIdentity}", 200],
  },
  () => DeleteEmailIdentityRequest,
  () => DeleteEmailIdentityResponse
);
