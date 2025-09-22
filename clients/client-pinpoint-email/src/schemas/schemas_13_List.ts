// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CS, _h, _hQ, _LCS, _LCSR, _LCSRi, _NT, _PS, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListConfigurationSetsRequest = struct(
  n0,
  _LCSR,
  0,
  [_NT, _PS],
  [
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _PS,
      },
    ],
  ]
);
export var ListConfigurationSetsResponse = struct(n0, _LCSRi, 0, [_CS, _NT], [64 | 0, 0]);
export var ConfigurationSetNameList = 64 | 0;

export var ListConfigurationSets = op(
  n0,
  _LCS,
  {
    [_h]: ["GET", "/v1/email/configuration-sets", 200],
  },
  () => ListConfigurationSetsRequest,
  () => ListConfigurationSetsResponse
);
