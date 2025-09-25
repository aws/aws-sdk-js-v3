// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DR,
  _dR,
  _eQN,
  _II,
  _iI,
  _IIn,
  _IML,
  _IMn,
  _IMns,
  _iSn,
  _it,
  _MIon,
  _MIRon,
  _MIRoni,
  _mo,
  _Mon,
  _St,
  _st,
  _UInm,
  _UIR,
  _UIRn,
  _xN,
  n0,
} from "./schemas_0";
import { InstanceIdStringList } from "./schemas_330_Instances";

/* eslint no-var: 0 */

export var InstanceMonitoring = struct(
  n0,
  _IMn,
  0,
  [_II, _Mon],
  [
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
    [
      () => Monitoring,
      {
        [_eQN]: `Monitoring`,
        [_xN]: _mo,
      },
    ],
  ]
);
export var Monitoring = struct(
  n0,
  _Mon,
  0,
  [_St],
  [
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
  ]
);
export var MonitorInstancesRequest = struct(
  n0,
  _MIRon,
  0,
  [_IIn, _DR],
  [
    [
      () => InstanceIdStringList,
      {
        [_xN]: _II,
      },
    ],
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var MonitorInstancesResult = struct(
  n0,
  _MIRoni,
  0,
  [_IMns],
  [
    [
      () => InstanceMonitoringList,
      {
        [_eQN]: `InstancesSet`,
        [_xN]: _iSn,
      },
    ],
  ]
);
export var UnmonitorInstancesRequest = struct(
  n0,
  _UIR,
  0,
  [_IIn, _DR],
  [
    [
      () => InstanceIdStringList,
      {
        [_xN]: _II,
      },
    ],
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var UnmonitorInstancesResult = struct(
  n0,
  _UIRn,
  0,
  [_IMns],
  [
    [
      () => InstanceMonitoringList,
      {
        [_eQN]: `InstancesSet`,
        [_xN]: _iSn,
      },
    ],
  ]
);
export var InstanceMonitoringList = list(n0, _IML, 0, [
  () => InstanceMonitoring,
  {
    [_xN]: _it,
  },
]);
export var MonitorInstances = op(
  n0,
  _MIon,
  0,
  () => MonitorInstancesRequest,
  () => MonitorInstancesResult
);
export var UnmonitorInstances = op(
  n0,
  _UInm,
  0,
  () => UnmonitorInstancesRequest,
  () => UnmonitorInstancesResult
);
