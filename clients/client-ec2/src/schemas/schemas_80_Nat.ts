// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import {
  _aI,
  _AIl,
  _AIs,
  _aIs,
  _CTon,
  _cTonn,
  _CTr,
  _cTr,
  _DTel,
  _dTel,
  _eQN,
  _FCa,
  _fCa,
  _FM,
  _fM,
  _ILp,
  _IPsr,
  _iPsr,
  _it,
  _NG,
  _NGA,
  _NGAa,
  _NGAL,
  _nGAS,
  _NGI,
  _nGI,
  _NII,
  _nII,
  _PB,
  _pB,
  _PI,
  _pI,
  _PIri,
  _pIriv,
  _Prov,
  _prov,
  _PTr,
  _pTr,
  _Req,
  _req,
  _RTeq,
  _rTeq,
  _SIu,
  _sIu,
  _St,
  _st,
  _Sta,
  _sta,
  _T,
  _tS,
  _VI,
  _vI,
  _xN,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var NatGateway = struct(
  n0,
  _NG,
  0,
  [_CTr, _DTel, _FCa, _FM, _NGA, _NGI, _PB, _St, _SIu, _VI, _T, _CTon],
  [
    [
      4,
      {
        [_eQN]: `CreateTime`,
        [_xN]: _cTr,
      },
    ],
    [
      4,
      {
        [_eQN]: `DeleteTime`,
        [_xN]: _dTel,
      },
    ],
    [
      0,
      {
        [_eQN]: `FailureCode`,
        [_xN]: _fCa,
      },
    ],
    [
      0,
      {
        [_eQN]: `FailureMessage`,
        [_xN]: _fM,
      },
    ],
    [
      () => NatGatewayAddressList,
      {
        [_eQN]: `NatGatewayAddressSet`,
        [_xN]: _nGAS,
      },
    ],
    [
      0,
      {
        [_eQN]: `NatGatewayId`,
        [_xN]: _nGI,
      },
    ],
    [
      () => ProvisionedBandwidth,
      {
        [_eQN]: `ProvisionedBandwidth`,
        [_xN]: _pB,
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
      0,
      {
        [_eQN]: `SubnetId`,
        [_xN]: _sIu,
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
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
    [
      0,
      {
        [_eQN]: `ConnectivityType`,
        [_xN]: _cTonn,
      },
    ],
  ]
);
export var NatGatewayAddress = struct(
  n0,
  _NGAa,
  0,
  [_AIl, _NII, _PIri, _PI, _AIs, _IPsr, _FM, _Sta],
  [
    [
      0,
      {
        [_eQN]: `AllocationId`,
        [_xN]: _aI,
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
        [_eQN]: `PrivateIp`,
        [_xN]: _pIriv,
      },
    ],
    [
      0,
      {
        [_eQN]: `PublicIp`,
        [_xN]: _pI,
      },
    ],
    [
      0,
      {
        [_eQN]: `AssociationId`,
        [_xN]: _aIs,
      },
    ],
    [
      2,
      {
        [_eQN]: `IsPrimary`,
        [_xN]: _iPsr,
      },
    ],
    [
      0,
      {
        [_eQN]: `FailureMessage`,
        [_xN]: _fM,
      },
    ],
    [
      0,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
  ]
);
export var ProvisionedBandwidth = struct(
  n0,
  _PB,
  0,
  [_PTr, _Prov, _RTeq, _Req, _Sta],
  [
    [
      4,
      {
        [_eQN]: `ProvisionTime`,
        [_xN]: _pTr,
      },
    ],
    [
      0,
      {
        [_eQN]: `Provisioned`,
        [_xN]: _prov,
      },
    ],
    [
      4,
      {
        [_eQN]: `RequestTime`,
        [_xN]: _rTeq,
      },
    ],
    [
      0,
      {
        [_eQN]: `Requested`,
        [_xN]: _req,
      },
    ],
    [
      0,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
  ]
);
export var IpList = list(n0, _ILp, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var NatGatewayAddressList = list(n0, _NGAL, 0, [
  () => NatGatewayAddress,
  {
    [_xN]: _it,
  },
]);
