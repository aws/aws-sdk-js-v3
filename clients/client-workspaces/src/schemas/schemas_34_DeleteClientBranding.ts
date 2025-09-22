// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DCB, _DCBR, _DCBRe, _P, _RI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteClientBrandingRequest = struct(n0, _DCBR, 0, [_RI, _P], [0, 64 | 0]);
export var DeleteClientBrandingResult = struct(n0, _DCBRe, 0, [], []);
export var ClientDeviceTypeList = 64 | 0;

export var DeleteClientBranding = op(
  n0,
  _DCB,
  0,
  () => DeleteClientBrandingRequest,
  () => DeleteClientBrandingResult
);
