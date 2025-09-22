// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aIDc,
  _aIDp,
  _DSSe,
  _DSSRes,
  _DSSResc,
  _DSSRF,
  _f,
  _ht,
  _i,
  _iA,
  _lCS,
  _mR,
  _nT,
  _rTe,
  _sSID,
  _SSL,
  n0,
} from "./schemas_0";
import { SourceServer } from "./schemas_5_Replication";

/* eslint no-var: 0 */

export var DescribeSourceServersRequest = struct(
  n0,
  _DSSRes,
  0,
  [_f, _mR, _nT, _aIDc],
  [() => DescribeSourceServersRequestFilters, 1, 0, 0]
);
export var DescribeSourceServersRequestFilters = struct(
  n0,
  _DSSRF,
  0,
  [_sSID, _iA, _rTe, _lCS, _aIDp],
  [64 | 0, 2, 64 | 0, 64 | 0, 64 | 0]
);
export var DescribeSourceServersResponse = struct(n0, _DSSResc, 0, [_i, _nT], [[() => SourceServersList, 0], 0]);
export var DescribeSourceServersRequestApplicationIDs = 64 | 0;

export var DescribeSourceServersRequestFiltersIDs = 64 | 0;

export var LifeCycleStates = 64 | 0;

export var ReplicationTypes = 64 | 0;

export var SourceServersList = list(n0, _SSL, 0, [() => SourceServer, 0]);
export var DescribeSourceServers = op(
  n0,
  _DSSe,
  {
    [_ht]: ["POST", "/DescribeSourceServers", 200],
  },
  () => DescribeSourceServersRequest,
  () => DescribeSourceServersResponse
);
