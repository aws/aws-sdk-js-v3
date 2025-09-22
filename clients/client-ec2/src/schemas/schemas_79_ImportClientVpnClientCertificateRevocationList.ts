// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CRL, _CVEI, _DR, _eQN, _ICVCCRL, _ICVCCRLR, _ICVCCRLRm, _R, _r, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ImportClientVpnClientCertificateRevocationListRequest = struct(
  n0,
  _ICVCCRLR,
  0,
  [_CVEI, _CRL, _DR],
  [0, 0, 2]
);
export var ImportClientVpnClientCertificateRevocationListResult = struct(
  n0,
  _ICVCCRLRm,
  0,
  [_R],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
  ]
);
export var ImportClientVpnClientCertificateRevocationList = op(
  n0,
  _ICVCCRL,
  0,
  () => ImportClientVpnClientCertificateRevocationListRequest,
  () => ImportClientVpnClientCertificateRevocationListResult
);
