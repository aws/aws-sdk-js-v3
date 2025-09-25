// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _DVG, _VG, _vG, _VGi, _vGI, _VGL, _vGS, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var VirtualGateway = struct(n0, _VG, 0, [_vGI, _vGS], [0, 0]);
export var VirtualGateways = struct(n0, _VGi, 0, [_vG], [() => VirtualGatewayList]);
export var VirtualGatewayList = list(n0, _VGL, 0, () => VirtualGateway);
export var DescribeVirtualGateways = op(
  n0,
  _DVG,
  0,
  () => Unit,
  () => VirtualGateways
);
