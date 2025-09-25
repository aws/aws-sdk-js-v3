// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DINA, _DINAI, _DINAO, _h, _iNAI, _mIe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteIdNamespaceAssociationInput = struct(
  n0,
  _DINAI,
  0,
  [_iNAI, _mIe],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteIdNamespaceAssociationOutput = struct(n0, _DINAO, 0, [], []);
export var DeleteIdNamespaceAssociation = op(
  n0,
  _DINA,
  {
    [_h]: [
      "DELETE",
      "/memberships/{membershipIdentifier}/idnamespaceassociations/{idNamespaceAssociationIdentifier}",
      204,
    ],
  },
  () => DeleteIdNamespaceAssociationInput,
  () => DeleteIdNamespaceAssociationOutput
);
