// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _APC, _APCR, _APCRs, _CSA, _CSN, _PCA, _PCI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateProtectConfigurationRequest = struct(n0, _APCR, 0, [_PCI, _CSN], [0, 0]);
export var AssociateProtectConfigurationResult = struct(n0, _APCRs, 0, [_CSA, _CSN, _PCA, _PCI], [0, 0, 0, 0]);
export var AssociateProtectConfiguration = op(
  n0,
  _APC,
  0,
  () => AssociateProtectConfigurationRequest,
  () => AssociateProtectConfigurationResult
);
