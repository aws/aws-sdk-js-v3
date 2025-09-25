// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ATS, _ATSR, _ATSRs, _h, _hQ, _pA, _tSA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateTrustStoreRequest = struct(
  n0,
  _ATSR,
  0,
  [_pA, _tSA],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _tSA,
      },
    ],
  ]
);
export var AssociateTrustStoreResponse = struct(n0, _ATSRs, 0, [_pA, _tSA], [0, 0]);
export var AssociateTrustStore = op(
  n0,
  _ATS,
  {
    [_h]: ["PUT", "/portals/{portalArn+}/trustStores", 200],
  },
  () => AssociateTrustStoreRequest,
  () => AssociateTrustStoreResponse
);
