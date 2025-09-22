// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIs,
  _AIsso,
  _APNGA,
  _APNGAR,
  _APNGARs,
  _DNG,
  _DNGA,
  _DNGAR,
  _DNGARi,
  _DNGe,
  _DNGR,
  _DNGRe,
  _DNGRes,
  _DNGResc,
  _DR,
  _EAIL,
  _eQN,
  _Fil,
  _it,
  _MDDS,
  _MR,
  _NGA,
  _NGa,
  _nGAS,
  _NGI,
  _nGI,
  _NGIa,
  _NGISL,
  _NGL,
  _nGS,
  _NTe,
  _nTe,
  _PIAC,
  _PIAr,
  _PIAri,
  _UPNGA,
  _UPNGAR,
  _UPNGARn,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";
import { IpList, NatGateway, NatGatewayAddressList } from "./schemas_80_Nat";

/* eslint no-var: 0 */

export var AssignPrivateNatGatewayAddressRequest = struct(
  n0,
  _APNGAR,
  0,
  [_NGI, _PIAri, _PIAC, _DR],
  [
    0,
    [
      () => IpList,
      {
        [_xN]: _PIAr,
      },
    ],
    1,
    2,
  ]
);
export var AssignPrivateNatGatewayAddressResult = struct(
  n0,
  _APNGARs,
  0,
  [_NGI, _NGA],
  [
    [
      0,
      {
        [_eQN]: `NatGatewayId`,
        [_xN]: _nGI,
      },
    ],
    [
      () => NatGatewayAddressList,
      {
        [_eQN]: `NatGatewayAddressSet`,
        [_xN]: _nGAS,
      },
    ],
  ]
);
export var DeleteNatGatewayRequest = struct(
  n0,
  _DNGR,
  0,
  [_DR, _NGI],
  [
    2,
    [
      0,
      {
        [_xN]: _NGI,
      },
    ],
  ]
);
export var DeleteNatGatewayResult = struct(
  n0,
  _DNGRe,
  0,
  [_NGI],
  [
    [
      0,
      {
        [_eQN]: `NatGatewayId`,
        [_xN]: _nGI,
      },
    ],
  ]
);
export var DescribeNatGatewaysRequest = struct(
  n0,
  _DNGRes,
  0,
  [_DR, _Fil, _MR, _NGIa, _NTe],
  [
    2,
    [() => FilterList, 0],
    1,
    [
      () => NatGatewayIdStringList,
      {
        [_xN]: _NGI,
      },
    ],
    0,
  ]
);
export var DescribeNatGatewaysResult = struct(
  n0,
  _DNGResc,
  0,
  [_NGa, _NTe],
  [
    [
      () => NatGatewayList,
      {
        [_eQN]: `NatGatewaySet`,
        [_xN]: _nGS,
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
export var DisassociateNatGatewayAddressRequest = struct(
  n0,
  _DNGAR,
  0,
  [_NGI, _AIsso, _MDDS, _DR],
  [
    0,
    [
      () => EipAssociationIdList,
      {
        [_xN]: _AIs,
      },
    ],
    1,
    2,
  ]
);
export var DisassociateNatGatewayAddressResult = struct(
  n0,
  _DNGARi,
  0,
  [_NGI, _NGA],
  [
    [
      0,
      {
        [_eQN]: `NatGatewayId`,
        [_xN]: _nGI,
      },
    ],
    [
      () => NatGatewayAddressList,
      {
        [_eQN]: `NatGatewayAddressSet`,
        [_xN]: _nGAS,
      },
    ],
  ]
);
export var UnassignPrivateNatGatewayAddressRequest = struct(
  n0,
  _UPNGAR,
  0,
  [_NGI, _PIAri, _MDDS, _DR],
  [
    0,
    [
      () => IpList,
      {
        [_xN]: _PIAr,
      },
    ],
    1,
    2,
  ]
);
export var UnassignPrivateNatGatewayAddressResult = struct(
  n0,
  _UPNGARn,
  0,
  [_NGI, _NGA],
  [
    [
      0,
      {
        [_eQN]: `NatGatewayId`,
        [_xN]: _nGI,
      },
    ],
    [
      () => NatGatewayAddressList,
      {
        [_eQN]: `NatGatewayAddressSet`,
        [_xN]: _nGAS,
      },
    ],
  ]
);
export var EipAssociationIdList = list(n0, _EAIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var NatGatewayIdStringList = list(n0, _NGISL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var NatGatewayList = list(n0, _NGL, 0, [
  () => NatGateway,
  {
    [_xN]: _it,
  },
]);
export var AssignPrivateNatGatewayAddress = op(
  n0,
  _APNGA,
  0,
  () => AssignPrivateNatGatewayAddressRequest,
  () => AssignPrivateNatGatewayAddressResult
);
export var DeleteNatGateway = op(
  n0,
  _DNG,
  0,
  () => DeleteNatGatewayRequest,
  () => DeleteNatGatewayResult
);
export var DescribeNatGateways = op(
  n0,
  _DNGe,
  0,
  () => DescribeNatGatewaysRequest,
  () => DescribeNatGatewaysResult
);
export var DisassociateNatGatewayAddress = op(
  n0,
  _DNGA,
  0,
  () => DisassociateNatGatewayAddressRequest,
  () => DisassociateNatGatewayAddressResult
);
export var UnassignPrivateNatGatewayAddress = op(
  n0,
  _UPNGA,
  0,
  () => UnassignPrivateNatGatewayAddressRequest,
  () => UnassignPrivateNatGatewayAddressResult
);
