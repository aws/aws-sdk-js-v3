// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CLN, _DCL, _DCLR, _DCLRe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteContactListRequest = struct(n0, _DCLR, 0, [_CLN], [[0, 1]]);
export var DeleteContactListResponse = struct(n0, _DCLRe, 0, [], []);
export var DeleteContactList = op(
  n0,
  _DCL,
  {
    [_h]: ["DELETE", "/v2/email/contact-lists/{ContactListName}", 200],
  },
  () => DeleteContactListRequest,
  () => DeleteContactListResponse
);
