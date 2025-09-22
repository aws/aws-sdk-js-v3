// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ACT, _ACTR, _cI, _h, _hQ, _sAA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AcceptCertificateTransferRequest = struct(
  n0,
  _ACTR,
  0,
  [_cI, _sAA],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _sAA,
      },
    ],
  ]
);
export var AcceptCertificateTransfer = op(
  n0,
  _ACT,
  {
    [_h]: ["PATCH", "/accept-certificate-transfer/{certificateId}", 200],
  },
  () => AcceptCertificateTransferRequest,
  () => Unit
);
