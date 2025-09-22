// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AIRD,
  _AIRDR,
  _AIRDRs,
  _CT,
  _DIRDi,
  _DIRDRi,
  _DIRDRis,
  _DR,
  _eQN,
  _IApa,
  _iApa,
  _IDs,
  _iDs,
  _IIp,
  _iIp,
  _IRDA,
  _iRDA,
  _IRDAA,
  _iRDAA,
  _iRDAI,
  _IRDAIp,
  _IRDI,
  _iRDI,
  _IRp,
  _iRp,
  _OI,
  _oI,
  _RDS,
  _rDS,
  _St,
  _st,
  _T,
  _TS,
  _tS,
  _TSa,
  _xN,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateIpamResourceDiscoveryRequest = struct(
  n0,
  _AIRDR,
  0,
  [_DR, _IIp, _IRDI, _TS, _CT],
  [
    2,
    0,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    [0, 4],
  ]
);
export var AssociateIpamResourceDiscoveryResult = struct(
  n0,
  _AIRDRs,
  0,
  [_IRDA],
  [
    [
      () => IpamResourceDiscoveryAssociation,
      {
        [_eQN]: `IpamResourceDiscoveryAssociation`,
        [_xN]: _iRDA,
      },
    ],
  ]
);
export var DisassociateIpamResourceDiscoveryRequest = struct(n0, _DIRDRi, 0, [_DR, _IRDAIp], [2, 0]);
export var DisassociateIpamResourceDiscoveryResult = struct(
  n0,
  _DIRDRis,
  0,
  [_IRDA],
  [
    [
      () => IpamResourceDiscoveryAssociation,
      {
        [_eQN]: `IpamResourceDiscoveryAssociation`,
        [_xN]: _iRDA,
      },
    ],
  ]
);
export var IpamResourceDiscoveryAssociation = struct(
  n0,
  _IRDA,
  0,
  [_OI, _IRDAIp, _IRDAA, _IRDI, _IIp, _IApa, _IRp, _IDs, _RDS, _St, _T],
  [
    [
      0,
      {
        [_eQN]: `OwnerId`,
        [_xN]: _oI,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpamResourceDiscoveryAssociationId`,
        [_xN]: _iRDAI,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpamResourceDiscoveryAssociationArn`,
        [_xN]: _iRDAA,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpamResourceDiscoveryId`,
        [_xN]: _iRDI,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpamId`,
        [_xN]: _iIp,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpamArn`,
        [_xN]: _iApa,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpamRegion`,
        [_xN]: _iRp,
      },
    ],
    [
      2,
      {
        [_eQN]: `IsDefault`,
        [_xN]: _iDs,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceDiscoveryStatus`,
        [_xN]: _rDS,
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
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
  ]
);
export var AssociateIpamResourceDiscovery = op(
  n0,
  _AIRD,
  0,
  () => AssociateIpamResourceDiscoveryRequest,
  () => AssociateIpamResourceDiscoveryResult
);
export var DisassociateIpamResourceDiscovery = op(
  n0,
  _DIRDi,
  0,
  () => DisassociateIpamResourceDiscoveryRequest,
  () => DisassociateIpamResourceDiscoveryResult
);
