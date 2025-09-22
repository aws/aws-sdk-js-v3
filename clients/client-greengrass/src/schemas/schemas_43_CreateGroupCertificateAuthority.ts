// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ACT, _CGCA, _CGCAR, _CGCARr, _GCAA, _GI, _h, _hH, _XACT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateGroupCertificateAuthorityRequest = struct(
  n0,
  _CGCAR,
  0,
  [_ACT, _GI],
  [
    [
      0,
      {
        [_hH]: _XACT,
      },
    ],
    [0, 1],
  ]
);
export var CreateGroupCertificateAuthorityResponse = struct(n0, _CGCARr, 0, [_GCAA], [0]);
export var CreateGroupCertificateAuthority = op(
  n0,
  _CGCA,
  {
    [_h]: ["POST", "/greengrass/groups/{GroupId}/certificateauthorities", 200],
  },
  () => CreateGroupCertificateAuthorityRequest,
  () => CreateGroupCertificateAuthorityResponse
);
