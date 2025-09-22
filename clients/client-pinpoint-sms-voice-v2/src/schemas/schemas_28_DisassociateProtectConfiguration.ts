// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSA, _CSN, _DPCi, _DPCRi, _DPCRis, _PCA, _PCI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateProtectConfigurationRequest = struct(n0, _DPCRi, 0, [_PCI, _CSN], [0, 0]);
export var DisassociateProtectConfigurationResult = struct(n0, _DPCRis, 0, [_CSA, _CSN, _PCA, _PCI], [0, 0, 0, 0]);
export var DisassociateProtectConfiguration = op(
  n0,
  _DPCi,
  0,
  () => DisassociateProtectConfigurationRequest,
  () => DisassociateProtectConfigurationResult
);
