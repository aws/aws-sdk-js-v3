// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _EI, _h, _PEIDA, _PEIDAR, _PEIDARu, _SE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutEmailIdentityDkimAttributesRequest = struct(n0, _PEIDAR, 0, [_EI, _SE], [[0, 1], 2]);
export var PutEmailIdentityDkimAttributesResponse = struct(n0, _PEIDARu, 0, [], []);
export var PutEmailIdentityDkimAttributes = op(
  n0,
  _PEIDA,
  {
    [_h]: ["PUT", "/v2/email/identities/{EmailIdentity}/dkim", 200],
  },
  () => PutEmailIdentityDkimAttributesRequest,
  () => PutEmailIdentityDkimAttributesResponse
);
