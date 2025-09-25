// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DVPA, _DVPAI, _DVPAO, _GLAAI, _PVI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVpcPeeringAuthorizationInput = struct(n0, _DVPAI, 0, [_GLAAI, _PVI], [0, 0]);
export var DeleteVpcPeeringAuthorizationOutput = struct(n0, _DVPAO, 0, [], []);
export var DeleteVpcPeeringAuthorization = op(
  n0,
  _DVPA,
  0,
  () => DeleteVpcPeeringAuthorizationInput,
  () => DeleteVpcPeeringAuthorizationOutput
);
