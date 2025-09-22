// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _AL, _ALs, _As, _CC, _h, _LA, _LAR, _LARi, _MR, _NTe, _R, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociationListing = struct(n0, _AL, 0, [_R], [0]);
export var ListAssociationsRequest = struct(n0, _LAR, 0, [_CC, _MR, _NTe], [0, 1, 0]);
export var ListAssociationsResult = struct(n0, _LARi, 0, [_As, _NTe], [() => AssociationList, 0]);
export var AssociationList = list(n0, _ALs, 0, () => AssociationListing);
export var ListAssociations = op(
  n0,
  _LA,
  {
    [_h]: ["POST", "/list-associations", 200],
  },
  () => ListAssociationsRequest,
  () => ListAssociationsResult
);
