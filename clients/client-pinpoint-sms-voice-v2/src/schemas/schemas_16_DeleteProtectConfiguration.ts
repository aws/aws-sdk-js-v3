// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AD, _CTr, _DPC, _DPCR, _DPCRe, _DPE, _PCA, _PCI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteProtectConfigurationRequest = struct(n0, _DPCR, 0, [_PCI], [0]);
export var DeleteProtectConfigurationResult = struct(n0, _DPCRe, 0, [_PCA, _PCI, _CTr, _AD, _DPE], [0, 0, 4, 2, 2]);
export var DeleteProtectConfiguration = op(
  n0,
  _DPC,
  0,
  () => DeleteProtectConfigurationRequest,
  () => DeleteProtectConfigurationResult
);
