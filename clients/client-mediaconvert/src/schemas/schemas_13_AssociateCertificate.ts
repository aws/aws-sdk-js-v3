// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _a, _ACR, _ACRs, _ACs, _ht, _jN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateCertificateRequest = struct(
  n0,
  _ACR,
  0,
  [_A],
  [
    [
      0,
      {
        [_jN]: _a,
      },
    ],
  ]
);
export var AssociateCertificateResponse = struct(n0, _ACRs, 0, [], []);
export var AssociateCertificate = op(
  n0,
  _ACs,
  {
    [_ht]: ["POST", "/2017-08-29/certificates", 201],
  },
  () => AssociateCertificateRequest,
  () => AssociateCertificateResponse
);
