// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aEOM, _h, _jN, _s, _UADC, _UADCR, _UADCRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateAutomatedDiscoveryConfigurationRequest = struct(
  n0,
  _UADCR,
  0,
  [_aEOM, _s],
  [
    [
      0,
      {
        [_jN]: _aEOM,
      },
    ],
    [
      0,
      {
        [_jN]: _s,
      },
    ],
  ]
);
export var UpdateAutomatedDiscoveryConfigurationResponse = struct(n0, _UADCRp, 0, [], []);
export var UpdateAutomatedDiscoveryConfiguration = op(
  n0,
  _UADC,
  {
    [_h]: ["PUT", "/automated-discovery/configuration", 200],
  },
  () => UpdateAutomatedDiscoveryConfigurationRequest,
  () => UpdateAutomatedDiscoveryConfigurationResponse
);
