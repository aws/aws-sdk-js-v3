// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _DCi, _DCR, _DCRi, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateCertificateRequest = struct(n0, _DCR, 0, [_A], [[0, 1]]);
export var DisassociateCertificateResponse = struct(n0, _DCRi, 0, [], []);
export var DisassociateCertificate = op(
  n0,
  _DCi,
  {
    [_ht]: ["DELETE", "/2017-08-29/certificates/{Arn}", 202],
  },
  () => DisassociateCertificateRequest,
  () => DisassociateCertificateResponse
);
