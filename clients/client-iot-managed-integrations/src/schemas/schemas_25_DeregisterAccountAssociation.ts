// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAIc, _DAAe, _DAARe, _h, _MTI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeregisterAccountAssociationRequest = struct(n0, _DAARe, 0, [_MTI, _AAIc], [0, 0]);
export var DeregisterAccountAssociation = op(
  n0,
  _DAAe,
  {
    [_h]: ["PUT", "/managed-thing-associations/deregister", 200],
  },
  () => DeregisterAccountAssociationRequest,
  () => Unit
);
