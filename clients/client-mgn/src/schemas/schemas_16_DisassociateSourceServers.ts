// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aID, _aIDc, _DSSi, _DSSRi, _DSSRis, _ht, _sSID, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateSourceServersRequest = struct(n0, _DSSRi, 0, [_aID, _sSID, _aIDc], [0, 64 | 0, 0]);
export var DisassociateSourceServersResponse = struct(n0, _DSSRis, 0, [], []);
export var DisassociateSourceServersRequestSourceServerIDs = 64 | 0;

export var DisassociateSourceServers = op(
  n0,
  _DSSi,
  {
    [_ht]: ["POST", "/DisassociateSourceServers", 200],
  },
  () => DisassociateSourceServersRequest,
  () => DisassociateSourceServersResponse
);
