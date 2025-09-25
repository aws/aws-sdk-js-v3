// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAIc, _DAA, _DAAR, _h, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAccountAssociationRequest = struct(n0, _DAAR, 0, [_AAIc], [[0, 1]]);
export var DeleteAccountAssociation = op(
  n0,
  _DAA,
  {
    [_h]: ["DELETE", "/account-associations/{AccountAssociationId}", 200],
  },
  () => DeleteAccountAssociationRequest,
  () => Unit
);
