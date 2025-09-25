// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DSNVA, _DSNVAR, _DSNVARe, _h, _i, _sNVAI, _st, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteServiceNetworkVpcAssociationRequest = struct(n0, _DSNVAR, 0, [_sNVAI], [[0, 1]]);
export var DeleteServiceNetworkVpcAssociationResponse = struct(n0, _DSNVARe, 0, [_i, _st, _a], [0, 0, 0]);
export var DeleteServiceNetworkVpcAssociation = op(
  n0,
  _DSNVA,
  {
    [_h]: ["DELETE", "/servicenetworkvpcassociations/{serviceNetworkVpcAssociationIdentifier}", 200],
  },
  () => DeleteServiceNetworkVpcAssociationRequest,
  () => DeleteServiceNetworkVpcAssociationResponse
);
