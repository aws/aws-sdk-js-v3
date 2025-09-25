// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DC, _DCR, _DCRi, _ht, _nCA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateChannelRequest = struct(n0, _DCR, 0, [_a, _nCA], [[0, 1], 0]);
export var DisassociateChannelResponse = struct(n0, _DCRi, 0, [], []);
export var DisassociateChannel = op(
  n0,
  _DC,
  {
    [_ht]: ["POST", "/channels/disassociate/{arn}", 200],
  },
  () => DisassociateChannelRequest,
  () => DisassociateChannelResponse
);
