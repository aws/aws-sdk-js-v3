// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CLon,
  _Co,
  _Con,
  _DCe,
  _DCesc,
  _DCMe,
  _DCMesc,
  _DCRel,
  _DCResc,
  _EA,
  _EI,
  _F,
  _LFM,
  _Ma,
  _MR,
  _RIA,
  _RII,
  _S,
  _TCe,
  _TCM,
  _TCR,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Connection = struct(n0, _Co, 0, [_RIA, _EA, _S, _LFM, _EI, _RII], [0, 0, 0, 0, 0, 0]);
export var DeleteConnectionMessage = struct(n0, _DCMe, 0, [_EA, _RIA], [0, 0]);
export var DeleteConnectionResponse = struct(n0, _DCRel, 0, [_Co], [() => Connection]);
export var DescribeConnectionsMessage = struct(n0, _DCMesc, 0, [_F, _MR, _Ma], [[() => FilterList, 0], 1, 0]);
export var DescribeConnectionsResponse = struct(n0, _DCResc, 0, [_Ma, _Con], [0, [() => ConnectionList, 0]]);
export var TestConnectionMessage = struct(n0, _TCM, 0, [_RIA, _EA], [0, 0]);
export var TestConnectionResponse = struct(n0, _TCR, 0, [_Co], [() => Connection]);
export var ConnectionList = list(n0, _CLon, 0, [
  () => Connection,
  {
    [_xN]: _Co,
  },
]);
export var DeleteConnection = op(
  n0,
  _DCe,
  0,
  () => DeleteConnectionMessage,
  () => DeleteConnectionResponse
);
export var DescribeConnections = op(
  n0,
  _DCesc,
  0,
  () => DescribeConnectionsMessage,
  () => DescribeConnectionsResponse
);
export var TestConnection = op(
  n0,
  _TCe,
  0,
  () => TestConnectionMessage,
  () => TestConnectionResponse
);
