// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CLN, _DCel, _DCR, _DCRe, _EA, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteContactRequest = struct(
  n0,
  _DCR,
  0,
  [_CLN, _EA],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteContactResponse = struct(n0, _DCRe, 0, [], []);
export var DeleteContact = op(
  n0,
  _DCel,
  {
    [_h]: ["DELETE", "/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}", 200],
  },
  () => DeleteContactRequest,
  () => DeleteContactResponse
);
