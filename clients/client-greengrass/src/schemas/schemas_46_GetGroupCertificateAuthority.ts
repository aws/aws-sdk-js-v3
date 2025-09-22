// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CAI, _GCAA, _GCAI, _GGCA, _GGCAR, _GGCARe, _GI, _h, _PEC, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetGroupCertificateAuthorityRequest = struct(
  n0,
  _GGCAR,
  0,
  [_CAI, _GI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetGroupCertificateAuthorityResponse = struct(n0, _GGCARe, 0, [_GCAA, _GCAI, _PEC], [0, 0, 0]);
export var GetGroupCertificateAuthority = op(
  n0,
  _GGCA,
  {
    [_h]: ["GET", "/greengrass/groups/{GroupId}/certificateauthorities/{CertificateAuthorityId}", 200],
  },
  () => GetGroupCertificateAuthorityRequest,
  () => GetGroupCertificateAuthorityResponse
);
