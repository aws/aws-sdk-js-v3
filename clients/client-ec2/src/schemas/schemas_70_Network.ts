// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aIt,
  _AItt,
  _ANI,
  _ANIR,
  _ANIRt,
  _DI,
  _dI,
  _DR,
  _dR,
  _EQC,
  _eQN,
  _ESE,
  _ESS,
  _ESUE,
  _ESUS,
  _II,
  _iI,
  _NCI,
  _nCI,
  _NII,
  _nII,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AttachNetworkInterfaceRequest = struct(
  n0,
  _ANIR,
  0,
  [_NCI, _ESS, _EQC, _DR, _NII, _II, _DI],
  [
    1,
    () => EnaSrdSpecification,
    1,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkInterfaceId`,
        [_xN]: _nII,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
    [
      1,
      {
        [_eQN]: `DeviceIndex`,
        [_xN]: _dI,
      },
    ],
  ]
);
export var AttachNetworkInterfaceResult = struct(
  n0,
  _ANIRt,
  0,
  [_AItt, _NCI],
  [
    [
      0,
      {
        [_eQN]: `AttachmentId`,
        [_xN]: _aIt,
      },
    ],
    [
      1,
      {
        [_eQN]: `NetworkCardIndex`,
        [_xN]: _nCI,
      },
    ],
  ]
);
export var EnaSrdSpecification = struct(n0, _ESS, 0, [_ESE, _ESUS], [2, () => EnaSrdUdpSpecification]);
export var EnaSrdUdpSpecification = struct(n0, _ESUS, 0, [_ESUE], [2]);
export var AttachNetworkInterface = op(
  n0,
  _ANI,
  0,
  () => AttachNetworkInterfaceRequest,
  () => AttachNetworkInterfaceResult
);
