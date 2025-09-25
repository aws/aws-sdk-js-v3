// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _CA,
  _CFT,
  _CFTR,
  _CFTRr,
  _CMG,
  _CMGR,
  _CMGRr,
  _CRT,
  _D,
  _DC,
  _De,
  _FIMS,
  _FSB,
  _FUI,
  _FUR,
  _GL,
  _GMG,
  _GMGR,
  _GMGRe,
  _h,
  _I,
  _LRWAN,
  _LRWANFT,
  _LRWANM,
  _LRWANMG,
  _N,
  _NODIG,
  _NODR,
  _PGa,
  _PGM,
  _RP,
  _RR,
  _St,
  _Ta,
  _TI,
  _UFT,
  _UFTR,
  _UFTRp,
  _UMG,
  _UMGR,
  _UMGRp,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateFuotaTaskRequest = struct(
  n0,
  _CFTR,
  0,
  [_N, _D, _CRT, _LRWAN, _FUI, _FUR, _Ta, _RP, _FSB, _FIMS, _De],
  [0, 0, [0, 4], () => LoRaWANFuotaTask, 0, 0, () => TagList, 1, 1, 1, 0]
);
export var CreateFuotaTaskResponse = struct(n0, _CFTRr, 0, [_Ar, _I], [0, 0]);
export var CreateMulticastGroupRequest = struct(
  n0,
  _CMGR,
  0,
  [_N, _D, _CRT, _LRWAN, _Ta],
  [0, 0, [0, 4], () => LoRaWANMulticast, () => TagList]
);
export var CreateMulticastGroupResponse = struct(n0, _CMGRr, 0, [_Ar, _I], [0, 0]);
export var GetMulticastGroupRequest = struct(n0, _GMGR, 0, [_I], [[0, 1]]);
export var GetMulticastGroupResponse = struct(
  n0,
  _GMGRe,
  0,
  [_Ar, _I, _N, _D, _St, _LRWAN, _CA],
  [0, 0, 0, 0, 0, () => LoRaWANMulticastGet, 4]
);
export var LoRaWANFuotaTask = struct(n0, _LRWANFT, 0, [_RR], [0]);
export var LoRaWANMulticast = struct(n0, _LRWANM, 0, [_RR, _DC, _PGa], [0, 0, () => ParticipatingGatewaysMulticast]);
export var LoRaWANMulticastGet = struct(
  n0,
  _LRWANMG,
  0,
  [_RR, _DC, _NODR, _NODIG, _PGa],
  [0, 0, 1, 1, () => ParticipatingGatewaysMulticast]
);
export var ParticipatingGatewaysMulticast = struct(n0, _PGM, 0, [_GL, _TI], [64 | 0, 1]);
export var UpdateFuotaTaskRequest = struct(
  n0,
  _UFTR,
  0,
  [_I, _N, _D, _LRWAN, _FUI, _FUR, _RP, _FSB, _FIMS, _De],
  [[0, 1], 0, 0, () => LoRaWANFuotaTask, 0, 0, 1, 1, 1, 0]
);
export var UpdateFuotaTaskResponse = struct(n0, _UFTRp, 0, [], []);
export var UpdateMulticastGroupRequest = struct(
  n0,
  _UMGR,
  0,
  [_I, _N, _D, _LRWAN],
  [[0, 1], 0, 0, () => LoRaWANMulticast]
);
export var UpdateMulticastGroupResponse = struct(n0, _UMGRp, 0, [], []);
export var GatewayListMulticast = 64 | 0;

export var CreateFuotaTask = op(
  n0,
  _CFT,
  {
    [_h]: ["POST", "/fuota-tasks", 201],
  },
  () => CreateFuotaTaskRequest,
  () => CreateFuotaTaskResponse
);
export var CreateMulticastGroup = op(
  n0,
  _CMG,
  {
    [_h]: ["POST", "/multicast-groups", 201],
  },
  () => CreateMulticastGroupRequest,
  () => CreateMulticastGroupResponse
);
export var GetMulticastGroup = op(
  n0,
  _GMG,
  {
    [_h]: ["GET", "/multicast-groups/{Id}", 200],
  },
  () => GetMulticastGroupRequest,
  () => GetMulticastGroupResponse
);
export var UpdateFuotaTask = op(
  n0,
  _UFT,
  {
    [_h]: ["PATCH", "/fuota-tasks/{Id}", 204],
  },
  () => UpdateFuotaTaskRequest,
  () => UpdateFuotaTaskResponse
);
export var UpdateMulticastGroup = op(
  n0,
  _UMG,
  {
    [_h]: ["PATCH", "/multicast-groups/{Id}", 204],
  },
  () => UpdateMulticastGroupRequest,
  () => UpdateMulticastGroupResponse
);
