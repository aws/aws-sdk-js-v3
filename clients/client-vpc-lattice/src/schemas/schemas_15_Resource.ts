// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DREA, _DREAR, _DREARe, _h, _i, _rCA, _rCIe, _rEAI, _vEI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteResourceEndpointAssociationRequest = struct(n0, _DREAR, 0, [_rEAI], [[0, 1]]);
export var DeleteResourceEndpointAssociationResponse = struct(
  n0,
  _DREARe,
  0,
  [_i, _a, _rCIe, _rCA, _vEI],
  [0, 0, 0, 0, 0]
);
export var DeleteResourceEndpointAssociation = op(
  n0,
  _DREA,
  {
    [_h]: ["DELETE", "/resourceendpointassociations/{resourceEndpointAssociationIdentifier}", 200],
  },
  () => DeleteResourceEndpointAssociationRequest,
  () => DeleteResourceEndpointAssociationResponse
);
