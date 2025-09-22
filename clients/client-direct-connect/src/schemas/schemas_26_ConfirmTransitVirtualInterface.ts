// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CTVI, _CTVIR, _CTVIRo, _dCGI, _vII, _vIS, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConfirmTransitVirtualInterfaceRequest = struct(n0, _CTVIR, 0, [_vII, _dCGI], [0, 0]);
export var ConfirmTransitVirtualInterfaceResponse = struct(n0, _CTVIRo, 0, [_vIS], [0]);
export var ConfirmTransitVirtualInterface = op(
  n0,
  _CTVI,
  0,
  () => ConfirmTransitVirtualInterfaceRequest,
  () => ConfirmTransitVirtualInterfaceResponse
);
