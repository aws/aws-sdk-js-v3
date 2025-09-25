// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _MPI, _RIeq, _SEPA, _SEPAM, _SEPAR, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartExtensionPackAssociationMessage = struct(n0, _SEPAM, 0, [_MPI], [0]);
export var StartExtensionPackAssociationResponse = struct(n0, _SEPAR, 0, [_RIeq], [0]);
export var StartExtensionPackAssociation = op(
  n0,
  _SEPA,
  0,
  () => StartExtensionPackAssociationMessage,
  () => StartExtensionPackAssociationResponse
);
