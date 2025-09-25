// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPC, _DPCR, _DPCRe, _h, _I, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePackagingConfigurationRequest = struct(n0, _DPCR, 0, [_I], [[0, 1]]);
export var DeletePackagingConfigurationResponse = struct(n0, _DPCRe, 0, [], []);
export var DeletePackagingConfiguration = op(
  n0,
  _DPC,
  {
    [_h]: ["DELETE", "/packaging_configurations/{Id}", 202],
  },
  () => DeletePackagingConfigurationRequest,
  () => DeletePackagingConfigurationResponse
);
