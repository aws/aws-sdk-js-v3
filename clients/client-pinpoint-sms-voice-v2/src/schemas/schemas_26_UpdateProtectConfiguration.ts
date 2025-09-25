// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AD, _CTr, _DPE, _PCA, _PCI, _UPC, _UPCR, _UPCRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateProtectConfigurationRequest = struct(n0, _UPCR, 0, [_PCI, _DPE], [0, 2]);
export var UpdateProtectConfigurationResult = struct(n0, _UPCRp, 0, [_PCA, _PCI, _CTr, _AD, _DPE], [0, 0, 4, 2, 2]);
export var UpdateProtectConfiguration = op(
  n0,
  _UPC,
  0,
  () => UpdateProtectConfigurationRequest,
  () => UpdateProtectConfigurationResult
);
