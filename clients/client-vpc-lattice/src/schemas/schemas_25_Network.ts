// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DSNSA, _DSNSAR, _DSNSARe, _h, _i, _sNSAI, _st, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteServiceNetworkServiceAssociationRequest = struct(n0, _DSNSAR, 0, [_sNSAI], [[0, 1]]);
export var DeleteServiceNetworkServiceAssociationResponse = struct(n0, _DSNSARe, 0, [_i, _st, _a], [0, 0, 0]);
export var DeleteServiceNetworkServiceAssociation = op(
  n0,
  _DSNSA,
  {
    [_h]: ["DELETE", "/servicenetworkserviceassociations/{serviceNetworkServiceAssociationIdentifier}", 200],
  },
  () => DeleteServiceNetworkServiceAssociationRequest,
  () => DeleteServiceNetworkServiceAssociationResponse
);
