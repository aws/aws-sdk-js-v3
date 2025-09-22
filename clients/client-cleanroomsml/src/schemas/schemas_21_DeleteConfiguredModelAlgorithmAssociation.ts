// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cMAAA, _DCMAA, _DCMAAR, _ht, _mI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteConfiguredModelAlgorithmAssociationRequest = struct(
  n0,
  _DCMAAR,
  0,
  [_cMAAA, _mI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteConfiguredModelAlgorithmAssociation = op(
  n0,
  _DCMAA,
  {
    [_ht]: [
      "DELETE",
      "/memberships/{membershipIdentifier}/configured-model-algorithm-associations/{configuredModelAlgorithmAssociationArn}",
      200,
    ],
  },
  () => DeleteConfiguredModelAlgorithmAssociationRequest,
  () => Unit
);
