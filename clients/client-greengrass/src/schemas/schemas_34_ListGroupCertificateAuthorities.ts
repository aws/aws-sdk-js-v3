// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _GCA, _GCAA, _GCAI, _GCAP, _GI, _h, _LGCA, _LGCAR, _LGCARi, _lOGCAP, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GroupCertificateAuthorityProperties = struct(n0, _GCAP, 0, [_GCAA, _GCAI], [0, 0]);
export var ListGroupCertificateAuthoritiesRequest = struct(n0, _LGCAR, 0, [_GI], [[0, 1]]);
export var ListGroupCertificateAuthoritiesResponse = struct(
  n0,
  _LGCARi,
  0,
  [_GCA],
  [() => __listOfGroupCertificateAuthorityProperties]
);
export var __listOfGroupCertificateAuthorityProperties = list(
  n0,
  _lOGCAP,
  0,
  () => GroupCertificateAuthorityProperties
);
export var ListGroupCertificateAuthorities = op(
  n0,
  _LGCA,
  {
    [_h]: ["GET", "/greengrass/groups/{GroupId}/certificateauthorities", 200],
  },
  () => ListGroupCertificateAuthoritiesRequest,
  () => ListGroupCertificateAuthoritiesResponse
);
