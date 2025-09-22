// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DSNRA, _DSNRAR, _DSNRARe, _h, _i, _sNRAI, _st, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteServiceNetworkResourceAssociationRequest = struct(n0, _DSNRAR, 0, [_sNRAI], [[0, 1]]);
export var DeleteServiceNetworkResourceAssociationResponse = struct(n0, _DSNRARe, 0, [_i, _a, _st], [0, 0, 0]);
export var DeleteServiceNetworkResourceAssociation = op(
  n0,
  _DSNRA,
  {
    [_h]: ["DELETE", "/servicenetworkresourceassociations/{serviceNetworkResourceAssociationIdentifier}", 200],
  },
  () => DeleteServiceNetworkResourceAssociationRequest,
  () => DeleteServiceNetworkResourceAssociationResponse
);
