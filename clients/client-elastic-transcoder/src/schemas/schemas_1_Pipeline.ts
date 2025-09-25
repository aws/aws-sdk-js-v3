// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ac,
  _AKKA,
  _Ar,
  _As,
  _B,
  _CC,
  _Cod,
  _Com,
  _CP,
  _CPR,
  _CPRr,
  _Er,
  _G,
  _GT,
  _h,
  _hQ,
  _I,
  _IB,
  _LP,
  _LPR,
  _LPRi,
  _Mes,
  _Mess,
  _N,
  _No,
  _NPT,
  _OB,
  _Pe,
  _Per,
  _Pi,
  _Pip,
  _POC,
  _Pro,
  _PT,
  _Ro,
  _RP,
  _RPR,
  _RPRe,
  _SC,
  _St,
  _Su,
  _TC,
  _To,
  _TR,
  _TRR,
  _TRRe,
  _UP,
  _UPN,
  _UPNR,
  _UPNRp,
  _UPR,
  _UPRp,
  _UPS,
  _UPSR,
  _UPSRp,
  _Wa,
  _War,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreatePipelineRequest = struct(
  n0,
  _CPR,
  0,
  [_N, _IB, _OB, _Ro, _AKKA, _No, _CC, _TC],
  [0, 0, 0, 0, 0, () => Notifications, () => PipelineOutputConfig, () => PipelineOutputConfig]
);
export var CreatePipelineResponse = struct(n0, _CPRr, 0, [_Pi, _Wa], [() => Pipeline, () => Warnings]);
export var ListPipelinesRequest = struct(
  n0,
  _LPR,
  0,
  [_As, _PT],
  [
    [
      0,
      {
        [_hQ]: _As,
      },
    ],
    [
      0,
      {
        [_hQ]: _PT,
      },
    ],
  ]
);
export var ListPipelinesResponse = struct(n0, _LPRi, 0, [_Pip, _NPT], [() => Pipelines, 0]);
export var Notifications = struct(n0, _No, 0, [_Pro, _Com, _War, _Er], [0, 0, 0, 0]);
export var Permission = struct(n0, _Pe, 0, [_GT, _G, _Ac], [0, 0, 64 | 0]);
export var Pipeline = struct(
  n0,
  _Pi,
  0,
  [_I, _Ar, _N, _St, _IB, _OB, _Ro, _AKKA, _No, _CC, _TC],
  [0, 0, 0, 0, 0, 0, 0, 0, () => Notifications, () => PipelineOutputConfig, () => PipelineOutputConfig]
);
export var PipelineOutputConfig = struct(n0, _POC, 0, [_B, _SC, _Per], [0, 0, () => Permissions]);
export var ReadPipelineRequest = struct(n0, _RPR, 0, [_I], [[0, 1]]);
export var ReadPipelineResponse = struct(n0, _RPRe, 0, [_Pi, _Wa], [() => Pipeline, () => Warnings]);
export var TestRoleRequest = struct(n0, _TRR, 0, [_Ro, _IB, _OB, _To], [0, 0, 0, 64 | 0]);
export var TestRoleResponse = struct(n0, _TRRe, 0, [_Su, _Mes], [0, 64 | 0]);
export var UpdatePipelineNotificationsRequest = struct(n0, _UPNR, 0, [_I, _No], [[0, 1], () => Notifications]);
export var UpdatePipelineNotificationsResponse = struct(n0, _UPNRp, 0, [_Pi], [() => Pipeline]);
export var UpdatePipelineRequest = struct(
  n0,
  _UPR,
  0,
  [_I, _N, _IB, _Ro, _AKKA, _No, _CC, _TC],
  [[0, 1], 0, 0, 0, 0, () => Notifications, () => PipelineOutputConfig, () => PipelineOutputConfig]
);
export var UpdatePipelineResponse = struct(n0, _UPRp, 0, [_Pi, _Wa], [() => Pipeline, () => Warnings]);
export var UpdatePipelineStatusRequest = struct(n0, _UPSR, 0, [_I, _St], [[0, 1], 0]);
export var UpdatePipelineStatusResponse = struct(n0, _UPSRp, 0, [_Pi], [() => Pipeline]);
export var Warning = struct(n0, _War, 0, [_Cod, _Mess], [0, 0]);
export var AccessControls = 64 | 0;

export var ExceptionMessages = 64 | 0;

export var Permissions = list(n0, _Per, 0, () => Permission);
export var Pipelines = list(n0, _Pip, 0, () => Pipeline);
export var SnsTopics = 64 | 0;

export var Warnings = list(n0, _Wa, 0, () => Warning);
export var CreatePipeline = op(
  n0,
  _CP,
  {
    [_h]: ["POST", "/2012-09-25/pipelines", 201],
  },
  () => CreatePipelineRequest,
  () => CreatePipelineResponse
);
export var ListPipelines = op(
  n0,
  _LP,
  {
    [_h]: ["GET", "/2012-09-25/pipelines", 200],
  },
  () => ListPipelinesRequest,
  () => ListPipelinesResponse
);
export var ReadPipeline = op(
  n0,
  _RP,
  {
    [_h]: ["GET", "/2012-09-25/pipelines/{Id}", 200],
  },
  () => ReadPipelineRequest,
  () => ReadPipelineResponse
);
export var TestRole = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/2012-09-25/roleTests", 200],
  },
  () => TestRoleRequest,
  () => TestRoleResponse
);
export var UpdatePipeline = op(
  n0,
  _UP,
  {
    [_h]: ["PUT", "/2012-09-25/pipelines/{Id}", 200],
  },
  () => UpdatePipelineRequest,
  () => UpdatePipelineResponse
);
export var UpdatePipelineNotifications = op(
  n0,
  _UPN,
  {
    [_h]: ["POST", "/2012-09-25/pipelines/{Id}/notifications", 200],
  },
  () => UpdatePipelineNotificationsRequest,
  () => UpdatePipelineNotificationsResponse
);
export var UpdatePipelineStatus = op(
  n0,
  _UPS,
  {
    [_h]: ["POST", "/2012-09-25/pipelines/{Id}/status", 200],
  },
  () => UpdatePipelineStatusRequest,
  () => UpdatePipelineStatusResponse
);
