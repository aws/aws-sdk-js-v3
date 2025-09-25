// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _BOMF, _EI, _h, _MFD, _PEIMFA, _PEIMFAR, _PEIMFARu, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutEmailIdentityMailFromAttributesRequest = struct(n0, _PEIMFAR, 0, [_EI, _MFD, _BOMF], [[0, 1], 0, 0]);
export var PutEmailIdentityMailFromAttributesResponse = struct(n0, _PEIMFARu, 0, [], []);
export var PutEmailIdentityMailFromAttributes = op(
  n0,
  _PEIMFA,
  {
    [_h]: ["PUT", "/v2/email/identities/{EmailIdentity}/mail-from", 200],
  },
  () => PutEmailIdentityMailFromAttributesRequest,
  () => PutEmailIdentityMailFromAttributesResponse
);
