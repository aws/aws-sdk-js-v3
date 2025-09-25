// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CPVIo, _CPVIRon, _CPVIRonf, _vII, _vIS, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConfirmPublicVirtualInterfaceRequest = struct(n0, _CPVIRon, 0, [_vII], [0]);
export var ConfirmPublicVirtualInterfaceResponse = struct(n0, _CPVIRonf, 0, [_vIS], [0]);
export var ConfirmPublicVirtualInterface = op(
  n0,
  _CPVIo,
  0,
  () => ConfirmPublicVirtualInterfaceRequest,
  () => ConfirmPublicVirtualInterfaceResponse
);
