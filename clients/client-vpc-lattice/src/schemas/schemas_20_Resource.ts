// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRC, _DRCR, _DRCRe, _h, _rCI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteResourceConfigurationRequest = struct(n0, _DRCR, 0, [_rCI], [[0, 1]]);
export var DeleteResourceConfigurationResponse = struct(n0, _DRCRe, 0, [], []);
export var DeleteResourceConfiguration = op(
  n0,
  _DRC,
  {
    [_h]: ["DELETE", "/resourceconfigurations/{resourceConfigurationIdentifier}", 204],
  },
  () => DeleteResourceConfigurationRequest,
  () => DeleteResourceConfigurationResponse
);
