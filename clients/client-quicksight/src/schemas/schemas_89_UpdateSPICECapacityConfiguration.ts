// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _h, _PMu, _RI, _St, _USPICECC, _USPICECCR, _USPICECCRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateSPICECapacityConfigurationRequest = struct(n0, _USPICECCR, 0, [_AAI, _PMu], [[0, 1], 0]);
export var UpdateSPICECapacityConfigurationResponse = struct(n0, _USPICECCRp, 0, [_RI, _St], [0, [1, 32]]);
export var UpdateSPICECapacityConfiguration = op(
  n0,
  _USPICECC,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/spice-capacity-configuration", 200],
  },
  () => UpdateSPICECapacityConfigurationRequest,
  () => UpdateSPICECapacityConfigurationResponse
);
