// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _PASA, _PASAR, _PASARu, _SEe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutAccountSendingAttributesRequest = struct(n0, _PASAR, 0, [_SEe], [2]);
export var PutAccountSendingAttributesResponse = struct(n0, _PASARu, 0, [], []);
export var PutAccountSendingAttributes = op(
  n0,
  _PASA,
  {
    [_h]: ["PUT", "/v2/email/account/sending", 200],
  },
  () => PutAccountSendingAttributesRequest,
  () => PutAccountSendingAttributesResponse
);
