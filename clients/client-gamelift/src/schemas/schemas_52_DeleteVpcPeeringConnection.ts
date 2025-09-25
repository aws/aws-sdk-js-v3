// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DVPC, _DVPCI, _DVPCO, _FI, _VPCI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVpcPeeringConnectionInput = struct(n0, _DVPCI, 0, [_FI, _VPCI], [0, 0]);
export var DeleteVpcPeeringConnectionOutput = struct(n0, _DVPCO, 0, [], []);
export var DeleteVpcPeeringConnection = op(
  n0,
  _DVPC,
  0,
  () => DeleteVpcPeeringConnectionInput,
  () => DeleteVpcPeeringConnectionOutput
);
