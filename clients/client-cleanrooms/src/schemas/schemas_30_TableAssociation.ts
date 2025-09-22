// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cTAIo, _DCTA, _DCTAI, _DCTAO, _h, _mIe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteConfiguredTableAssociationInput = struct(
  n0,
  _DCTAI,
  0,
  [_cTAIo, _mIe],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteConfiguredTableAssociationOutput = struct(n0, _DCTAO, 0, [], []);
export var DeleteConfiguredTableAssociation = op(
  n0,
  _DCTA,
  {
    [_h]: [
      "DELETE",
      "/memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}",
      204,
    ],
  },
  () => DeleteConfiguredTableAssociationInput,
  () => DeleteConfiguredTableAssociationOutput
);
