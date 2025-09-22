// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _ACw,
  _AFRFR,
  _AFRFRR,
  _AFRFRRs,
  _AFRFW,
  _AFRFWR,
  _AFRFWRs,
  _AKI,
  _aKI,
  _AQRFR,
  _AQRFRR,
  _AQRFRRs,
  _AQRFU,
  _AQRFUR,
  _AQRFURs,
  _AQRFW,
  _AQRFWR,
  _AQRFWRs,
  _cr,
  _end,
  _ex,
  _fI,
  _fIl,
  _h,
  _hQ,
  _qI,
  _SAK,
  _sAK,
  _ST,
  _sT,
  _wI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessKeyId = sim(n0, _AKI, 0, 8);
export var SecretAccessKey = sim(n0, _SAK, 0, 8);
export var SessionToken = sim(n0, _ST, 0, 8);
export var AssumeFleetRoleForReadRequest = struct(
  n0,
  _AFRFRR,
  0,
  [_fI, _fIl],
  [
    [0, 1],
    [0, 1],
  ]
);
export var AssumeFleetRoleForReadResponse = struct(n0, _AFRFRRs, 8, [_cr], [[() => AwsCredentials, 0]]);
export var AssumeFleetRoleForWorkerRequest = struct(
  n0,
  _AFRFWR,
  0,
  [_fI, _fIl, _wI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var AssumeFleetRoleForWorkerResponse = struct(n0, _AFRFWRs, 8, [_cr], [[() => AwsCredentials, 0]]);
export var AssumeQueueRoleForReadRequest = struct(
  n0,
  _AQRFRR,
  0,
  [_fI, _qI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var AssumeQueueRoleForReadResponse = struct(n0, _AQRFRRs, 8, [_cr], [[() => AwsCredentials, 0]]);
export var AssumeQueueRoleForUserRequest = struct(
  n0,
  _AQRFUR,
  0,
  [_fI, _qI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var AssumeQueueRoleForUserResponse = struct(n0, _AQRFURs, 8, [_cr], [[() => AwsCredentials, 0]]);
export var AssumeQueueRoleForWorkerRequest = struct(
  n0,
  _AQRFWR,
  0,
  [_fI, _fIl, _wI, _qI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _qI,
      },
    ],
  ]
);
export var AssumeQueueRoleForWorkerResponse = struct(n0, _AQRFWRs, 8, [_cr], [[() => AwsCredentials, 0]]);
export var AwsCredentials = struct(
  n0,
  _ACw,
  8,
  [_aKI, _sAK, _sT, _ex],
  [[() => AccessKeyId, 0], [() => SecretAccessKey, 0], [() => SessionToken, 0], 5]
);
export var AssumeFleetRoleForRead = op(
  n0,
  _AFRFR,
  {
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/fleets/{fleetId}/read-roles", 200],
    [_end]: ["management."],
  },
  () => AssumeFleetRoleForReadRequest,
  () => AssumeFleetRoleForReadResponse
);
export var AssumeFleetRoleForWorker = op(
  n0,
  _AFRFW,
  {
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/fleet-roles", 200],
    [_end]: ["scheduling."],
  },
  () => AssumeFleetRoleForWorkerRequest,
  () => AssumeFleetRoleForWorkerResponse
);
export var AssumeQueueRoleForRead = op(
  n0,
  _AQRFR,
  {
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/queues/{queueId}/read-roles", 200],
    [_end]: ["management."],
  },
  () => AssumeQueueRoleForReadRequest,
  () => AssumeQueueRoleForReadResponse
);
export var AssumeQueueRoleForUser = op(
  n0,
  _AQRFU,
  {
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/queues/{queueId}/user-roles", 200],
    [_end]: ["management."],
  },
  () => AssumeQueueRoleForUserRequest,
  () => AssumeQueueRoleForUserResponse
);
export var AssumeQueueRoleForWorker = op(
  n0,
  _AQRFW,
  {
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/queue-roles", 200],
    [_end]: ["scheduling."],
  },
  () => AssumeQueueRoleForWorkerRequest,
  () => AssumeQueueRoleForWorkerResponse
);
