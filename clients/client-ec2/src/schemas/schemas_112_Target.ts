// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACVTN,
  _ACVTNR,
  _ACVTNRs,
  _AIs,
  _aIs,
  _AIsso,
  _ASs,
  _Co,
  _co,
  _CT,
  _CVEI,
  _cVEI,
  _CVTN,
  _cVTN,
  _DCVTN,
  _DCVTNi,
  _DCVTNR,
  _DCVTNRe,
  _DCVTNRi,
  _DCVTNRis,
  _DR,
  _eQN,
  _Fi,
  _Fil,
  _it,
  _Me,
  _me,
  _MR,
  _NTe,
  _nTe,
  _SG,
  _sGe,
  _SIu,
  _Sta,
  _sta,
  _TNa,
  _TNI,
  _tNI,
  _TNS,
  _VI,
  _vI,
  _xN,
  FilterList,
  n0,
  ValueStringList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateClientVpnTargetNetworkRequest = struct(n0, _ACVTNR, 0, [_CVEI, _SIu, _CT, _DR], [0, 0, [0, 4], 2]);
export var AssociateClientVpnTargetNetworkResult = struct(
  n0,
  _ACVTNRs,
  0,
  [_AIs, _Sta],
  [
    [
      0,
      {
        [_eQN]: `AssociationId`,
        [_xN]: _aIs,
      },
    ],
    [
      () => AssociationStatus,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
  ]
);
export var AssociationStatus = struct(
  n0,
  _ASs,
  0,
  [_Co, _Me],
  [
    [
      0,
      {
        [_eQN]: `Code`,
        [_xN]: _co,
      },
    ],
    [
      0,
      {
        [_eQN]: `Message`,
        [_xN]: _me,
      },
    ],
  ]
);
export var DescribeClientVpnTargetNetworksRequest = struct(
  n0,
  _DCVTNR,
  0,
  [_CVEI, _AIsso, _MR, _NTe, _Fi, _DR],
  [
    0,
    [() => ValueStringList, 0],
    1,
    0,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    2,
  ]
);
export var DescribeClientVpnTargetNetworksResult = struct(
  n0,
  _DCVTNRe,
  0,
  [_CVTN, _NTe],
  [
    [
      () => TargetNetworkSet,
      {
        [_eQN]: `ClientVpnTargetNetworks`,
        [_xN]: _cVTN,
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
export var DisassociateClientVpnTargetNetworkRequest = struct(n0, _DCVTNRi, 0, [_CVEI, _AIs, _DR], [0, 0, 2]);
export var DisassociateClientVpnTargetNetworkResult = struct(
  n0,
  _DCVTNRis,
  0,
  [_AIs, _Sta],
  [
    [
      0,
      {
        [_eQN]: `AssociationId`,
        [_xN]: _aIs,
      },
    ],
    [
      () => AssociationStatus,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
  ]
);
export var TargetNetwork = struct(
  n0,
  _TNa,
  0,
  [_AIs, _VI, _TNI, _CVEI, _Sta, _SG],
  [
    [
      0,
      {
        [_eQN]: `AssociationId`,
        [_xN]: _aIs,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpcId`,
        [_xN]: _vI,
      },
    ],
    [
      0,
      {
        [_eQN]: `TargetNetworkId`,
        [_xN]: _tNI,
      },
    ],
    [
      0,
      {
        [_eQN]: `ClientVpnEndpointId`,
        [_xN]: _cVEI,
      },
    ],
    [
      () => AssociationStatus,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `SecurityGroups`,
        [_xN]: _sGe,
      },
    ],
  ]
);
export var TargetNetworkSet = list(n0, _TNS, 0, [
  () => TargetNetwork,
  {
    [_xN]: _it,
  },
]);
export var AssociateClientVpnTargetNetwork = op(
  n0,
  _ACVTN,
  0,
  () => AssociateClientVpnTargetNetworkRequest,
  () => AssociateClientVpnTargetNetworkResult
);
export var DescribeClientVpnTargetNetworks = op(
  n0,
  _DCVTN,
  0,
  () => DescribeClientVpnTargetNetworksRequest,
  () => DescribeClientVpnTargetNetworksResult
);
export var DisassociateClientVpnTargetNetwork = op(
  n0,
  _DCVTNi,
  0,
  () => DisassociateClientVpnTargetNetworkRequest,
  () => DisassociateClientVpnTargetNetworkResult
);
