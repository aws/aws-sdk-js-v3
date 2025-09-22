// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CA,
  _CAon,
  _CC,
  _CCR,
  _CCRr,
  _CDI,
  _CI,
  _cI,
  _CIo,
  _CL,
  _CLI,
  _Co,
  _Conn,
  _D,
  _DC,
  _DCR,
  _DCRe,
  _DI,
  _dI,
  _GC,
  _GCR,
  _GCRe,
  _GNI,
  _h,
  _hQ,
  _LI,
  _MR,
  _mR,
  _NT,
  _nT,
  _S,
  _T,
  _UC,
  _UCR,
  _UCRp,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Connection = struct(
  n0,
  _Co,
  0,
  [_CI, _CAon, _GNI, _DI, _CDI, _LI, _CLI, _D, _CA, _S, _T],
  [0, 0, 0, 0, 0, 0, 0, 0, 4, 0, () => TagList]
);
export var CreateConnectionRequest = struct(
  n0,
  _CCR,
  0,
  [_GNI, _DI, _CDI, _LI, _CLI, _D, _T],
  [[0, 1], 0, 0, 0, 0, 0, () => TagList]
);
export var CreateConnectionResponse = struct(n0, _CCRr, 0, [_Co], [() => Connection]);
export var DeleteConnectionRequest = struct(
  n0,
  _DCR,
  0,
  [_GNI, _CI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteConnectionResponse = struct(n0, _DCRe, 0, [_Co], [() => Connection]);
export var GetConnectionsRequest = struct(
  n0,
  _GCR,
  0,
  [_GNI, _CIo, _DI, _MR, _NT],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _cI,
      },
    ],
    [
      0,
      {
        [_hQ]: _dI,
      },
    ],
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
export var GetConnectionsResponse = struct(n0, _GCRe, 0, [_Conn, _NT], [() => ConnectionList, 0]);
export var UpdateConnectionRequest = struct(n0, _UCR, 0, [_GNI, _CI, _LI, _CLI, _D], [[0, 1], [0, 1], 0, 0, 0]);
export var UpdateConnectionResponse = struct(n0, _UCRp, 0, [_Co], [() => Connection]);
export var ConnectionIdList = 64 | 0;

export var ConnectionList = list(n0, _CL, 0, () => Connection);
export var CreateConnection = op(
  n0,
  _CC,
  {
    [_h]: ["POST", "/global-networks/{GlobalNetworkId}/connections", 200],
  },
  () => CreateConnectionRequest,
  () => CreateConnectionResponse
);
export var DeleteConnection = op(
  n0,
  _DC,
  {
    [_h]: ["DELETE", "/global-networks/{GlobalNetworkId}/connections/{ConnectionId}", 200],
  },
  () => DeleteConnectionRequest,
  () => DeleteConnectionResponse
);
export var GetConnections = op(
  n0,
  _GC,
  {
    [_h]: ["GET", "/global-networks/{GlobalNetworkId}/connections", 200],
  },
  () => GetConnectionsRequest,
  () => GetConnectionsResponse
);
export var UpdateConnection = op(
  n0,
  _UC,
  {
    [_h]: ["PATCH", "/global-networks/{GlobalNetworkId}/connections/{ConnectionId}", 200],
  },
  () => UpdateConnectionRequest,
  () => UpdateConnectionResponse
);
