// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _aAI,
  _ASw,
  _aSw,
  _CNIPr,
  _CNIPRre,
  _CNIPRrea,
  _DNIPesc,
  _DNIPRescr,
  _DNIPRescri,
  _DR,
  _eQN,
  _Fi,
  _Fil,
  _IPnt,
  _iPnt,
  _it,
  _MR,
  _NII,
  _nII,
  _nIPe,
  _NIPet,
  _NIPetw,
  _NIPIe,
  _nIPIe,
  _NIPIetw,
  _NIPLe,
  _NIPS,
  _NTe,
  _nTe,
  _Pe,
  _per,
  _PSe,
  _pSe,
  _SMt,
  _sMt,
  _St,
  _st,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateNetworkInterfacePermissionRequest = struct(
  n0,
  _CNIPRre,
  0,
  [_NII, _AAI, _ASw, _Pe, _DR],
  [0, 0, 0, 0, 2]
);
export var CreateNetworkInterfacePermissionResult = struct(
  n0,
  _CNIPRrea,
  0,
  [_IPnt],
  [
    [
      () => NetworkInterfacePermission,
      {
        [_eQN]: `InterfacePermission`,
        [_xN]: _iPnt,
      },
    ],
  ]
);
export var DescribeNetworkInterfacePermissionsRequest = struct(
  n0,
  _DNIPRescr,
  0,
  [_NIPIetw, _Fi, _NTe, _MR],
  [
    [
      64 | 0,
      {
        [_xN]: _NIPIe,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    0,
    1,
  ]
);
export var DescribeNetworkInterfacePermissionsResult = struct(
  n0,
  _DNIPRescri,
  0,
  [_NIPet, _NTe],
  [
    [
      () => NetworkInterfacePermissionList,
      {
        [_eQN]: `NetworkInterfacePermissions`,
        [_xN]: _nIPe,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
  ]
);
export var NetworkInterfacePermission = struct(
  n0,
  _NIPetw,
  0,
  [_NIPIe, _NII, _AAI, _ASw, _Pe, _PSe],
  [
    [
      0,
      {
        [_eQN]: `NetworkInterfacePermissionId`,
        [_xN]: _nIPIe,
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
        [_eQN]: `AwsAccountId`,
        [_xN]: _aAI,
      },
    ],
    [
      0,
      {
        [_eQN]: `AwsService`,
        [_xN]: _aSw,
      },
    ],
    [
      0,
      {
        [_eQN]: `Permission`,
        [_xN]: _per,
      },
    ],
    [
      () => NetworkInterfacePermissionState,
      {
        [_eQN]: `PermissionState`,
        [_xN]: _pSe,
      },
    ],
  ]
);
export var NetworkInterfacePermissionState = struct(
  n0,
  _NIPS,
  0,
  [_St, _SMt],
  [
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
    [
      0,
      {
        [_eQN]: `StatusMessage`,
        [_xN]: _sMt,
      },
    ],
  ]
);
export var NetworkInterfacePermissionIdList = 64 | 0;

export var NetworkInterfacePermissionList = list(n0, _NIPLe, 0, [
  () => NetworkInterfacePermission,
  {
    [_xN]: _it,
  },
]);
export var CreateNetworkInterfacePermission = op(
  n0,
  _CNIPr,
  0,
  () => CreateNetworkInterfacePermissionRequest,
  () => CreateNetworkInterfacePermissionResult
);
export var DescribeNetworkInterfacePermissions = op(
  n0,
  _DNIPesc,
  0,
  () => DescribeNetworkInterfacePermissionsRequest,
  () => DescribeNetworkInterfacePermissionsResult
);
