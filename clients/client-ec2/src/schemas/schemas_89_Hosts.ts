// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AH,
  _AHR,
  _AHRl,
  _AIss,
  _AIsse,
  _aP,
  _APu,
  _AZ,
  _aZ,
  _AZI,
  _CT,
  _cT,
  _eQN,
  _HI,
  _hIS,
  _HM,
  _HR,
  _IF,
  _IT,
  _iT,
  _it,
  _OA,
  _Q,
  _q,
  _RHILe,
  _TS,
  _TSa,
  _xN,
  n0,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AllocateHostsRequest = struct(
  n0,
  _AHR,
  0,
  [_IF, _TS, _HR, _OA, _HM, _AIss, _AZI, _APu, _CT, _IT, _Q, _AZ],
  [
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    0,
    0,
    0,
    [
      64 | 0,
      {
        [_xN]: _AIsse,
      },
    ],
    0,
    [
      0,
      {
        [_eQN]: `AutoPlacement`,
        [_xN]: _aP,
      },
    ],
    [
      0,
      {
        [_eQN]: `ClientToken`,
        [_xN]: _cT,
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
        [_eQN]: `Quantity`,
        [_xN]: _q,
      },
    ],
    [
      0,
      {
        [_eQN]: `AvailabilityZone`,
        [_xN]: _aZ,
      },
    ],
  ]
);
export var AllocateHostsResult = struct(
  n0,
  _AHRl,
  0,
  [_HI],
  [
    [
      () => ResponseHostIdList,
      {
        [_eQN]: `HostIdSet`,
        [_xN]: _hIS,
      },
    ],
  ]
);
export var AssetIdList = 64 | 0;

export var ResponseHostIdList = list(n0, _RHILe, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var AllocateHosts = op(
  n0,
  _AH,
  0,
  () => AllocateHostsRequest,
  () => AllocateHostsResult
);
