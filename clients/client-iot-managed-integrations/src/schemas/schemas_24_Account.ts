// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAIc, _D, _h, _N, _UAA, _UAAR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateAccountAssociationRequest = struct(n0, _UAAR, 0, [_AAIc, _N, _D], [[0, 1], 0, 0]);
export var UpdateAccountAssociation = op(
  n0,
  _UAA,
  {
    [_h]: ["PUT", "/account-associations/{AccountAssociationId}", 204],
  },
  () => UpdateAccountAssociationRequest,
  () => Unit
);
