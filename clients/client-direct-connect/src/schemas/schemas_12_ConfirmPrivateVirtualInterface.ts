// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CPVI, _CPVIR, _CPVIRo, _dCGI, _vGI, _vII, _vIS, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConfirmPrivateVirtualInterfaceRequest = struct(n0, _CPVIR, 0, [_vII, _vGI, _dCGI], [0, 0, 0]);
export var ConfirmPrivateVirtualInterfaceResponse = struct(n0, _CPVIRo, 0, [_vIS], [0]);
export var ConfirmPrivateVirtualInterface = op(
  n0,
  _CPVI,
  0,
  () => ConfirmPrivateVirtualInterfaceRequest,
  () => ConfirmPrivateVirtualInterfaceResponse
);
