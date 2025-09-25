// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _AAIc, _h, _hQ, _It, _LMTAA, _LMTAAR, _LMTAARi, _MR, _MTA, _MTAL, _MTI, _NT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListManagedThingAccountAssociationsRequest = struct(
  n0,
  _LMTAAR,
  0,
  [_MTI, _AAIc, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _MTI,
      },
    ],
    [
      0,
      {
        [_hQ]: _AAIc,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListManagedThingAccountAssociationsResponse = struct(
  n0,
  _LMTAARi,
  0,
  [_It, _NT],
  [() => ManagedThingAssociationList, 0]
);
export var ManagedThingAssociation = struct(n0, _MTA, 0, [_MTI, _AAIc], [0, 0]);
export var ManagedThingAssociationList = list(n0, _MTAL, 0, () => ManagedThingAssociation);
export var ListManagedThingAccountAssociations = op(
  n0,
  _LMTAA,
  {
    [_h]: ["GET", "/managed-thing-associations", 200],
  },
  () => ListManagedThingAccountAssociationsRequest,
  () => ListManagedThingAccountAssociationsResponse
);
