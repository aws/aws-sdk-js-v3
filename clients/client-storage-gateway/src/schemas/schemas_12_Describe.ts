// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DT, _UVTLDT, _UVTLDTI, _UVTLDTO, _VTLDARNe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateVTLDeviceTypeInput = struct(n0, _UVTLDTI, 0, [_VTLDARNe, _DT], [0, 0]);
export var UpdateVTLDeviceTypeOutput = struct(n0, _UVTLDTO, 0, [_VTLDARNe], [0]);
export var UpdateVTLDeviceType = op(
  n0,
  _UVTLDT,
  0,
  () => UpdateVTLDeviceTypeInput,
  () => UpdateVTLDeviceTypeOutput
);
