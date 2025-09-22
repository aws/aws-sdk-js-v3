// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DCSC, _DCSCR, _DCSCRe, _ht, _sCA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCisScanConfigurationRequest = struct(n0, _DCSCR, 0, [_sCA], [0]);
export var DeleteCisScanConfigurationResponse = struct(n0, _DCSCRe, 0, [_sCA], [0]);
export var DeleteCisScanConfiguration = op(
  n0,
  _DCSC,
  {
    [_ht]: ["POST", "/cis/scan-configuration/delete", 200],
  },
  () => DeleteCisScanConfigurationRequest,
  () => DeleteCisScanConfigurationResponse
);
