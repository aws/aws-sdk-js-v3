// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _Do,
  _ET,
  _IPT,
  _LR,
  _LS,
  _LSi,
  _LSis,
  _LSR,
  _LSRi,
  _MRa,
  _NT,
  _Serv,
  _SI,
  _Sta,
  _UC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListedServer = struct(n0, _LS, 0, [_Ar, _Do, _IPT, _ET, _LR, _SI, _Sta, _UC], [0, 0, 0, 0, 0, 0, 0, 1]);
export var ListServersRequest = struct(n0, _LSR, 0, [_MRa, _NT], [1, 0]);
export var ListServersResponse = struct(n0, _LSRi, 0, [_NT, _Serv], [0, () => ListedServers]);
export var ListedServers = list(n0, _LSi, 0, () => ListedServer);
export var ListServers = op(
  n0,
  _LSis,
  0,
  () => ListServersRequest,
  () => ListServersResponse
);
