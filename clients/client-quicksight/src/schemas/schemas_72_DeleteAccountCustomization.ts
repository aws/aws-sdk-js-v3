// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _DAC, _DACR, _DACRe, _h, _hQ, _n, _Na, _RI, _St, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAccountCustomizationRequest = struct(
  n0,
  _DACR,
  0,
  [_AAI, _Na],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
  ]
);
export var DeleteAccountCustomizationResponse = struct(n0, _DACRe, 0, [_RI, _St], [0, [1, 32]]);
export var DeleteAccountCustomization = op(
  n0,
  _DAC,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/customizations", 200],
  },
  () => DeleteAccountCustomizationRequest,
  () => DeleteAccountCustomizationResponse
);
