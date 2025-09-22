// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AE,
  _AET,
  _AETu,
  _ALD,
  _ALDR,
  _ALDRd,
  _ALUAE,
  _ALUAER,
  _ALUAERd,
  _ATc,
  _CCD,
  _CDr,
  _Ci,
  _CN,
  _Co,
  _CR,
  _CRh,
  _CRLT,
  _CRT,
  _De,
  _DLT,
  _DN,
  _ECD,
  _ECDT,
  _EF,
  _EFT,
  _EI,
  _ER,
  _ERT,
  _ERv,
  _ET,
  _FD,
  _FV,
  _IA,
  _L,
  _LD,
  _LDR,
  _LDRi,
  _MR,
  _NT,
  _Pro,
  _PTa,
  _RD,
  _RL,
  _Ti,
  _U,
  _UPI,
  n0,
  TokenModelType,
  UsernameType,
} from "./schemas_0";
import { DeviceType } from "./schemas_32_Device";

/* eslint no-var: 0 */

export var AdminListDevicesRequest = struct(n0, _ALDR, 0, [_UPI, _U, _L, _PTa], [0, [() => UsernameType, 0], 1, 0]);
export var AdminListDevicesResponse = struct(n0, _ALDRd, 0, [_De, _PTa], [[() => DeviceListType, 0], 0]);
export var AdminListUserAuthEventsRequest = struct(
  n0,
  _ALUAER,
  0,
  [_UPI, _U, _MR, _NT],
  [0, [() => UsernameType, 0], 1, 0]
);
export var AdminListUserAuthEventsResponse = struct(n0, _ALUAERd, 0, [_AE, _NT], [() => AuthEventsType, 0]);
export var AuthEventType = struct(
  n0,
  _AET,
  0,
  [_EI, _ET, _CDr, _ER, _ERv, _CR, _ECD, _EF],
  [
    0,
    0,
    4,
    0,
    () => EventRiskType,
    () => ChallengeResponseListType,
    () => EventContextDataType,
    () => EventFeedbackType,
  ]
);
export var ChallengeResponseType = struct(n0, _CRT, 0, [_CN, _CRh], [0, 0]);
export var EventContextDataType = struct(n0, _ECDT, 0, [_IA, _DN, _Ti, _Ci, _Co], [0, 0, 0, 0, 0]);
export var EventFeedbackType = struct(n0, _EFT, 0, [_FV, _Pro, _FD], [0, 0, 4]);
export var EventRiskType = struct(n0, _ERT, 0, [_RD, _RL, _CCD], [0, 0, 2]);
export var ListDevicesRequest = struct(n0, _LDR, 0, [_ATc, _L, _PTa], [[() => TokenModelType, 0], 1, 0]);
export var ListDevicesResponse = struct(n0, _LDRi, 0, [_De, _PTa], [[() => DeviceListType, 0], 0]);
export var AuthEventsType = list(n0, _AETu, 0, () => AuthEventType);
export var ChallengeResponseListType = list(n0, _CRLT, 0, () => ChallengeResponseType);
export var DeviceListType = list(n0, _DLT, 0, [() => DeviceType, 0]);
export var AdminListDevices = op(
  n0,
  _ALD,
  0,
  () => AdminListDevicesRequest,
  () => AdminListDevicesResponse
);
export var AdminListUserAuthEvents = op(
  n0,
  _ALUAE,
  0,
  () => AdminListUserAuthEventsRequest,
  () => AdminListUserAuthEventsResponse
);
export var ListDevices = op(
  n0,
  _LD,
  0,
  () => ListDevicesRequest,
  () => ListDevicesResponse
);
