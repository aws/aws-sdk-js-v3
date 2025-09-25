// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _h, _hQ, _n, _Na, _RI, _St, _UAWTEG, _UAWTEGR, _UAWTEGRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateApplicationWithTokenExchangeGrantRequest = struct(
  n0,
  _UAWTEGR,
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
export var UpdateApplicationWithTokenExchangeGrantResponse = struct(n0, _UAWTEGRp, 0, [_St, _RI], [[1, 32], 0]);
export var UpdateApplicationWithTokenExchangeGrant = op(
  n0,
  _UAWTEG,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/application-with-token-exchange-grant", 200],
  },
  () => UpdateApplicationWithTokenExchangeGrantRequest,
  () => UpdateApplicationWithTokenExchangeGrantResponse
);
