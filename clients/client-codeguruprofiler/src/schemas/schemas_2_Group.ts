// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
} from "../models/index";
import {
  _aG,
  _ANC,
  _ANCR,
  _ANCRd,
  _c,
  _CE,
  _cl,
  _DPG,
  _DPGR,
  _DPGRe,
  _e,
  _h,
  _hE,
  _hQ,
  _mes,
  _nC,
  _pGN,
  _po,
  _PP,
  _PPR,
  _PPRu,
  _pri,
  _rI,
  _RP,
  _RPR,
  _RPRe,
  _SQEE,
  n0,
} from "./schemas_0";
import { Channels, NotificationConfiguration } from "./schemas_1_Notification";

/* eslint no-var: 0 */

export var AddNotificationChannelsRequest = struct(n0, _ANCR, 0, [_pGN, _c], [[0, 1], () => Channels]);
export var AddNotificationChannelsResponse = struct(n0, _ANCRd, 0, [_nC], [() => NotificationConfiguration]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _cl,
    [_hE]: 409,
  },
  [_mes],
  [0],

  __ConflictException
);
export var DeleteProfilingGroupRequest = struct(n0, _DPGR, 0, [_pGN], [[0, 1]]);
export var DeleteProfilingGroupResponse = struct(n0, _DPGRe, 0, [], []);
export var PutPermissionRequest = struct(n0, _PPR, 0, [_pGN, _aG, _pri, _rI], [[0, 1], [0, 1], 64 | 0, 0]);
export var PutPermissionResponse = struct(n0, _PPRu, 0, [_po, _rI], [0, 0]);
export var RemovePermissionRequest = struct(
  n0,
  _RPR,
  0,
  [_pGN, _aG, _rI],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _rI,
      },
    ],
  ]
);
export var RemovePermissionResponse = struct(n0, _RPRe, 0, [_po, _rI], [0, 0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _cl,
    [_hE]: 402,
  },
  [_mes],
  [0],

  __ServiceQuotaExceededException
);
export var Principals = 64 | 0;

export var AddNotificationChannels = op(
  n0,
  _ANC,
  {
    [_h]: ["POST", "/profilingGroups/{profilingGroupName}/notificationConfiguration", 200],
  },
  () => AddNotificationChannelsRequest,
  () => AddNotificationChannelsResponse
);
export var DeleteProfilingGroup = op(
  n0,
  _DPG,
  {
    [_h]: ["DELETE", "/profilingGroups/{profilingGroupName}", 204],
  },
  () => DeleteProfilingGroupRequest,
  () => DeleteProfilingGroupResponse
);
export var PutPermission = op(
  n0,
  _PP,
  {
    [_h]: ["PUT", "/profilingGroups/{profilingGroupName}/policy/{actionGroup}", 200],
  },
  () => PutPermissionRequest,
  () => PutPermissionResponse
);
export var RemovePermission = op(
  n0,
  _RP,
  {
    [_h]: ["DELETE", "/profilingGroups/{profilingGroupName}/policy/{actionGroup}", 200],
  },
  () => RemovePermissionRequest,
  () => RemovePermissionResponse
);
