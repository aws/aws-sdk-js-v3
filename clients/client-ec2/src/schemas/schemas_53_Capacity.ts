// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aIc,
  _AIcc,
  _AICv,
  _aICv,
  _CRI,
  _cRI,
  _DR,
  _eQN,
  _GCRU,
  _GCRUR,
  _GCRURe,
  _IT,
  _iT,
  _it,
  _IU,
  _IUn,
  _IUS,
  _iUS,
  _MR,
  _NTe,
  _nTe,
  _St,
  _st,
  _TIC,
  _tIC,
  _UIC,
  _uIC,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetCapacityReservationUsageRequest = struct(n0, _GCRUR, 0, [_CRI, _NTe, _MR, _DR], [0, 0, 1, 2]);
export var GetCapacityReservationUsageResult = struct(
  n0,
  _GCRURe,
  0,
  [_NTe, _CRI, _IT, _TIC, _AICv, _St, _IU],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      0,
      {
        [_eQN]: `CapacityReservationId`,
        [_xN]: _cRI,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceType`,
        [_xN]: _iT,
      },
    ],
    [
      1,
      {
        [_eQN]: `TotalInstanceCount`,
        [_xN]: _tIC,
      },
    ],
    [
      1,
      {
        [_eQN]: `AvailableInstanceCount`,
        [_xN]: _aICv,
      },
    ],
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
    [
      () => InstanceUsageSet,
      {
        [_eQN]: `InstanceUsageSet`,
        [_xN]: _iUS,
      },
    ],
  ]
);
export var InstanceUsage = struct(
  n0,
  _IUn,
  0,
  [_AIcc, _UIC],
  [
    [
      0,
      {
        [_eQN]: `AccountId`,
        [_xN]: _aIc,
      },
    ],
    [
      1,
      {
        [_eQN]: `UsedInstanceCount`,
        [_xN]: _uIC,
      },
    ],
  ]
);
export var InstanceUsageSet = list(n0, _IUS, 0, [
  () => InstanceUsage,
  {
    [_xN]: _it,
  },
]);
export var GetCapacityReservationUsage = op(
  n0,
  _GCRU,
  0,
  () => GetCapacityReservationUsageRequest,
  () => GetCapacityReservationUsageResult
);
