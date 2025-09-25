// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aID, _aIDc, _ASS, _ASSR, _ASSRs, _ht, _sSID, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateSourceServersRequest = struct(n0, _ASSR, 0, [_aID, _sSID, _aIDc], [0, 64 | 0, 0]);
export var AssociateSourceServersResponse = struct(n0, _ASSRs, 0, [], []);
export var AssociateSourceServersRequestSourceServerIDs = 64 | 0;

export var AssociateSourceServers = op(
  n0,
  _ASS,
  {
    [_ht]: ["POST", "/AssociateSourceServers", 200],
  },
  () => AssociateSourceServersRequest,
  () => AssociateSourceServersResponse
);
