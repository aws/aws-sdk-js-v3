// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CCRLS,
  _Co,
  _co,
  _CRL,
  _cRL,
  _CVEI,
  _DR,
  _ECVCCRL,
  _ECVCCRLR,
  _ECVCCRLRx,
  _eQN,
  _Me,
  _me,
  _Sta,
  _sta,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClientCertificateRevocationListStatus = struct(
  n0,
  _CCRLS,
  0,
  [_Co, _Me],
  [
    [
      0,
      {
        [_eQN]: `Code`,
        [_xN]: _co,
      },
    ],
    [
      0,
      {
        [_eQN]: `Message`,
        [_xN]: _me,
      },
    ],
  ]
);
export var ExportClientVpnClientCertificateRevocationListRequest = struct(n0, _ECVCCRLR, 0, [_CVEI, _DR], [0, 2]);
export var ExportClientVpnClientCertificateRevocationListResult = struct(
  n0,
  _ECVCCRLRx,
  0,
  [_CRL, _Sta],
  [
    [
      0,
      {
        [_eQN]: `CertificateRevocationList`,
        [_xN]: _cRL,
      },
    ],
    [
      () => ClientCertificateRevocationListStatus,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
  ]
);
export var ExportClientVpnClientCertificateRevocationList = op(
  n0,
  _ECVCCRL,
  0,
  () => ExportClientVpnClientCertificateRevocationListRequest,
  () => ExportClientVpnClientCertificateRevocationListResult
);
