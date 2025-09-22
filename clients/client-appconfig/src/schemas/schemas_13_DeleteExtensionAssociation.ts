// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DEA, _DEAR, _EAI, _h, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteExtensionAssociationRequest = struct(n0, _DEAR, 0, [_EAI], [[0, 1]]);
export var DeleteExtensionAssociation = op(
  n0,
  _DEA,
  {
    [_h]: ["DELETE", "/extensionassociations/{ExtensionAssociationId}", 204],
  },
  () => DeleteExtensionAssociationRequest,
  () => Unit
);
