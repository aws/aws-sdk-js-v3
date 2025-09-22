// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CAA, _DCAA, _DCAAR, _DCAARe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCrossAccountAuthorizationRequest = struct(n0, _DCAAR, 0, [_CAA], [[0, 1]]);
export var DeleteCrossAccountAuthorizationResponse = struct(n0, _DCAARe, 0, [], []);
export var DeleteCrossAccountAuthorization = op(
  n0,
  _DCAA,
  {
    [_h]: ["DELETE", "/crossaccountauthorizations/{CrossAccountAuthorization}", 200],
  },
  () => DeleteCrossAccountAuthorizationRequest,
  () => DeleteCrossAccountAuthorizationResponse
);
