// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CFCI, _CPCA, _CPCAR, _CPCARr, _CT, _h, _ICI, _II, _RTe, _SCI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreatePersistentContactAssociationRequest = struct(
  n0,
  _CPCAR,
  0,
  [_II, _ICI, _RTe, _SCI, _CT],
  [[0, 1], [0, 1], 0, 0, 0]
);
export var CreatePersistentContactAssociationResponse = struct(n0, _CPCARr, 0, [_CFCI], [0]);
export var CreatePersistentContactAssociation = op(
  n0,
  _CPCA,
  {
    [_h]: ["POST", "/contact/persistent-contact-association/{InstanceId}/{InitialContactId}", 200],
  },
  () => CreatePersistentContactAssociationRequest,
  () => CreatePersistentContactAssociationResponse
);
