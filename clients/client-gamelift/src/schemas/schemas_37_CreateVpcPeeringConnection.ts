// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CVPC, _CVPCI, _CVPCO, _FI, _PVAAI, _PVI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateVpcPeeringConnectionInput = struct(n0, _CVPCI, 0, [_FI, _PVAAI, _PVI], [0, 0, 0]);
export var CreateVpcPeeringConnectionOutput = struct(n0, _CVPCO, 0, [], []);
export var CreateVpcPeeringConnection = op(
  n0,
  _CVPC,
  0,
  () => CreateVpcPeeringConnectionInput,
  () => CreateVpcPeeringConnectionOutput
);
