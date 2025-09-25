// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _DD,
  _DFl,
  _GMGS,
  _GMGSR,
  _GMGSRe,
  _h,
  _I,
  _LRWAN,
  _LRWANMS,
  _PSP,
  _SMGS,
  _SMGSR,
  _SMGSRt,
  _SST,
  _STes,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetMulticastGroupSessionRequest = struct(n0, _GMGSR, 0, [_I], [[0, 1]]);
export var GetMulticastGroupSessionResponse = struct(n0, _GMGSRe, 0, [_LRWAN], [() => LoRaWANMulticastSession]);
export var LoRaWANMulticastSession = struct(n0, _LRWANMS, 0, [_DD, _DFl, _SST, _STes, _PSP], [1, 1, 5, 1, 1]);
export var StartMulticastGroupSessionRequest = struct(
  n0,
  _SMGSR,
  0,
  [_I, _LRWAN],
  [[0, 1], () => LoRaWANMulticastSession]
);
export var StartMulticastGroupSessionResponse = struct(n0, _SMGSRt, 0, [], []);
export var GetMulticastGroupSession = op(
  n0,
  _GMGS,
  {
    [_h]: ["GET", "/multicast-groups/{Id}/session", 200],
  },
  () => GetMulticastGroupSessionRequest,
  () => GetMulticastGroupSessionResponse
);
export var StartMulticastGroupSession = op(
  n0,
  _SMGS,
  {
    [_h]: ["PUT", "/multicast-groups/{Id}/session", 204],
  },
  () => StartMulticastGroupSessionRequest,
  () => StartMulticastGroupSessionResponse
);
