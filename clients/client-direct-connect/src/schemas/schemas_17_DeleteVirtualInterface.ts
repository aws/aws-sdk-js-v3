// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DVI, _DVIR, _DVIRe, _vII, _vIS, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVirtualInterfaceRequest = struct(n0, _DVIR, 0, [_vII], [0]);
export var DeleteVirtualInterfaceResponse = struct(n0, _DVIRe, 0, [_vIS], [0]);
export var DeleteVirtualInterface = op(
  n0,
  _DVI,
  0,
  () => DeleteVirtualInterfaceRequest,
  () => DeleteVirtualInterfaceResponse
);
