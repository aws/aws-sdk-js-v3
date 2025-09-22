// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _DWel, _DWRel, _DWRele, _LSW, _LSWR, _LSWRi, _MR, _NCa, _NT, _Suc, _SWu, _WNo, n0 } from "./schemas_0";
import { SubscribedWorkteam } from "./schemas_60_Workteam";

/* eslint no-var: 0 */

export var DeleteWorkteamRequest = struct(n0, _DWRel, 0, [_WNo], [0]);
export var DeleteWorkteamResponse = struct(n0, _DWRele, 0, [_Suc], [2]);
export var ListSubscribedWorkteamsRequest = struct(n0, _LSWR, 0, [_NCa, _NT, _MR], [0, 0, 1]);
export var ListSubscribedWorkteamsResponse = struct(n0, _LSWRi, 0, [_SWu, _NT], [() => SubscribedWorkteams, 0]);
export var SubscribedWorkteams = list(n0, _SWu, 0, () => SubscribedWorkteam);
export var DeleteWorkteam = op(
  n0,
  _DWel,
  0,
  () => DeleteWorkteamRequest,
  () => DeleteWorkteamResponse
);
export var ListSubscribedWorkteams = op(
  n0,
  _LSW,
  0,
  () => ListSubscribedWorkteamsRequest,
  () => ListSubscribedWorkteamsResponse
);
