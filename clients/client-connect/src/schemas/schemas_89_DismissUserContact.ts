// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _DUCi, _DUCRi, _DUCRis, _h, _II, _UI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DismissUserContactRequest = struct(n0, _DUCRi, 0, [_UI, _II, _CI], [[0, 1], [0, 1], 0]);
export var DismissUserContactResponse = struct(n0, _DUCRis, 0, [], []);
export var DismissUserContact = op(
  n0,
  _DUCi,
  {
    [_h]: ["POST", "/users/{InstanceId}/{UserId}/contact", 200],
  },
  () => DismissUserContactRequest,
  () => DismissUserContactResponse
);
