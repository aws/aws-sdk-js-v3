// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _dNa,
  _DVCe,
  _DVCRe,
  _DVCRes,
  _h,
  _hQ,
  _ht,
  _i,
  _lSD,
  _mR,
  _nT,
  _sST,
  _t,
  _VC,
  _vCID,
  _VCL,
  _vUUID,
  n0,
  TagsMap,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeVcenterClientsRequest = struct(
  n0,
  _DVCRe,
  0,
  [_mR, _nT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var DescribeVcenterClientsResponse = struct(n0, _DVCRes, 0, [_i, _nT], [[() => VcenterClientList, 0], 0]);
export var VcenterClient = struct(
  n0,
  _VC,
  0,
  [_vCID, _a, _h, _vUUID, _dNa, _lSD, _sST, _t],
  [0, 0, 0, 0, 0, 0, [() => TagsMap, 0], [() => TagsMap, 0]]
);
export var VcenterClientList = list(n0, _VCL, 0, [() => VcenterClient, 0]);
export var DescribeVcenterClients = op(
  n0,
  _DVCe,
  {
    [_ht]: ["GET", "/DescribeVcenterClients", 200],
  },
  () => DescribeVcenterClientsRequest,
  () => DescribeVcenterClientsResponse
);
