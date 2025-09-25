// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIOR,
  _AIORS,
  _AIOUE,
  _AIOUES,
  _AOR,
  _AORd,
  _AOUE,
  _AOUEd,
  _Ca,
  _CIRD,
  _CIRDR,
  _CIRDRr,
  _CIre,
  _CIRrea,
  _CIRreat,
  _CT,
  _De,
  _de,
  _DIel,
  _DIR,
  _DIRD,
  _DIRDR,
  _DIRDRe,
  _DIRe,
  _DR,
  _DRDAI,
  _dRDAI,
  _DRDI,
  _dRDI,
  _EPG,
  _ePG,
  _eQN,
  _IApa,
  _iApa,
  _IDs,
  _iDs,
  _IIp,
  _iIp,
  _IOR,
  _IORS,
  _IOUE,
  _IOUES,
  _Ip,
  _ip,
  _IRD,
  _iRD,
  _iRDAp,
  _IRDApa,
  _IRDI,
  _iRDI,
  _IRDR,
  _iRDR,
  _IRp,
  _iRp,
  _it,
  _MAe,
  _mAe,
  _MIo,
  _MIR,
  _MIRD,
  _MIRDR,
  _MIRDRo,
  _MIRo,
  _OEP,
  _oEP,
  _OI,
  _oI,
  _OR,
  _ORp,
  _oRS,
  _OUE,
  _oUES,
  _PDSI,
  _pDSI,
  _PDSIr,
  _pDSIr,
  _RDAC,
  _rDAC,
  _RIOR,
  _RIORS,
  _RIOUE,
  _RIOUES,
  _RN,
  _rNe,
  _ROR,
  _RORe,
  _ROUE,
  _ROUEe,
  _SCc,
  _sCc,
  _SMta,
  _sMta,
  _St,
  _st,
  _T,
  _Tie,
  _tie,
  _TS,
  _tS,
  _TSa,
  _xN,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddIpamOperatingRegion = struct(n0, _AIOR, 0, [_RN], [0]);
export var AddIpamOrganizationalUnitExclusion = struct(n0, _AIOUE, 0, [_OEP], [0]);
export var CreateIpamRequest = struct(
  n0,
  _CIRrea,
  0,
  [_DR, _De, _OR, _TS, _CT, _Tie, _EPG, _MAe],
  [
    2,
    0,
    [
      () => AddIpamOperatingRegionSet,
      {
        [_xN]: _ORp,
      },
    ],
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    [0, 4],
    0,
    2,
    0,
  ]
);
export var CreateIpamResourceDiscoveryRequest = struct(
  n0,
  _CIRDR,
  0,
  [_DR, _De, _OR, _TS, _CT],
  [
    2,
    0,
    [
      () => AddIpamOperatingRegionSet,
      {
        [_xN]: _ORp,
      },
    ],
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    [0, 4],
  ]
);
export var CreateIpamResourceDiscoveryResult = struct(
  n0,
  _CIRDRr,
  0,
  [_IRD],
  [
    [
      () => IpamResourceDiscovery,
      {
        [_eQN]: `IpamResourceDiscovery`,
        [_xN]: _iRD,
      },
    ],
  ]
);
export var CreateIpamResult = struct(
  n0,
  _CIRreat,
  0,
  [_Ip],
  [
    [
      () => Ipam,
      {
        [_eQN]: `Ipam`,
        [_xN]: _ip,
      },
    ],
  ]
);
export var DeleteIpamRequest = struct(n0, _DIR, 0, [_DR, _IIp, _Ca], [2, 0, 2]);
export var DeleteIpamResourceDiscoveryRequest = struct(n0, _DIRDR, 0, [_DR, _IRDI], [2, 0]);
export var DeleteIpamResourceDiscoveryResult = struct(
  n0,
  _DIRDRe,
  0,
  [_IRD],
  [
    [
      () => IpamResourceDiscovery,
      {
        [_eQN]: `IpamResourceDiscovery`,
        [_xN]: _iRD,
      },
    ],
  ]
);
export var DeleteIpamResult = struct(
  n0,
  _DIRe,
  0,
  [_Ip],
  [
    [
      () => Ipam,
      {
        [_eQN]: `Ipam`,
        [_xN]: _ip,
      },
    ],
  ]
);
export var Ipam = struct(
  n0,
  _Ip,
  0,
  [_OI, _IIp, _IApa, _IRp, _PDSI, _PDSIr, _SCc, _De, _OR, _St, _T, _DRDI, _DRDAI, _RDAC, _SMta, _Tie, _EPG, _MAe],
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
      0,
      {
        [_eQN]: `PublicDefaultScopeId`,
        [_xN]: _pDSI,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrivateDefaultScopeId`,
        [_xN]: _pDSIr,
      },
    ],
    [
      1,
      {
        [_eQN]: `ScopeCount`,
        [_xN]: _sCc,
      },
    ],
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
    [
      () => IpamOperatingRegionSet,
      {
        [_eQN]: `OperatingRegionSet`,
        [_xN]: _oRS,
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
    [
      0,
      {
        [_eQN]: `DefaultResourceDiscoveryId`,
        [_xN]: _dRDI,
      },
    ],
    [
      0,
      {
        [_eQN]: `DefaultResourceDiscoveryAssociationId`,
        [_xN]: _dRDAI,
      },
    ],
    [
      1,
      {
        [_eQN]: `ResourceDiscoveryAssociationCount`,
        [_xN]: _rDAC,
      },
    ],
    [
      0,
      {
        [_eQN]: `StateMessage`,
        [_xN]: _sMta,
      },
    ],
    [
      0,
      {
        [_eQN]: `Tier`,
        [_xN]: _tie,
      },
    ],
    [
      2,
      {
        [_eQN]: `EnablePrivateGua`,
        [_xN]: _ePG,
      },
    ],
    [
      0,
      {
        [_eQN]: `MeteredAccount`,
        [_xN]: _mAe,
      },
    ],
  ]
);
export var IpamOperatingRegion = struct(
  n0,
  _IOR,
  0,
  [_RN],
  [
    [
      0,
      {
        [_eQN]: `RegionName`,
        [_xN]: _rNe,
      },
    ],
  ]
);
export var IpamOrganizationalUnitExclusion = struct(
  n0,
  _IOUE,
  0,
  [_OEP],
  [
    [
      0,
      {
        [_eQN]: `OrganizationsEntityPath`,
        [_xN]: _oEP,
      },
    ],
  ]
);
export var IpamResourceDiscovery = struct(
  n0,
  _IRD,
  0,
  [_OI, _IRDI, _IRDApa, _IRDR, _De, _OR, _IDs, _St, _T, _OUE],
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
        [_eQN]: `IpamResourceDiscoveryId`,
        [_xN]: _iRDI,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpamResourceDiscoveryArn`,
        [_xN]: _iRDAp,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpamResourceDiscoveryRegion`,
        [_xN]: _iRDR,
      },
    ],
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
    [
      () => IpamOperatingRegionSet,
      {
        [_eQN]: `OperatingRegionSet`,
        [_xN]: _oRS,
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
    [
      () => IpamOrganizationalUnitExclusionSet,
      {
        [_eQN]: `OrganizationalUnitExclusionSet`,
        [_xN]: _oUES,
      },
    ],
  ]
);
export var ModifyIpamRequest = struct(
  n0,
  _MIR,
  0,
  [_DR, _IIp, _De, _AOR, _ROR, _Tie, _EPG, _MAe],
  [
    2,
    0,
    0,
    [
      () => AddIpamOperatingRegionSet,
      {
        [_xN]: _AORd,
      },
    ],
    [
      () => RemoveIpamOperatingRegionSet,
      {
        [_xN]: _RORe,
      },
    ],
    0,
    2,
    0,
  ]
);
export var ModifyIpamResourceDiscoveryRequest = struct(
  n0,
  _MIRDR,
  0,
  [_DR, _IRDI, _De, _AOR, _ROR, _AOUE, _ROUE],
  [
    2,
    0,
    0,
    [
      () => AddIpamOperatingRegionSet,
      {
        [_xN]: _AORd,
      },
    ],
    [
      () => RemoveIpamOperatingRegionSet,
      {
        [_xN]: _RORe,
      },
    ],
    [
      () => AddIpamOrganizationalUnitExclusionSet,
      {
        [_xN]: _AOUEd,
      },
    ],
    [
      () => RemoveIpamOrganizationalUnitExclusionSet,
      {
        [_xN]: _ROUEe,
      },
    ],
  ]
);
export var ModifyIpamResourceDiscoveryResult = struct(
  n0,
  _MIRDRo,
  0,
  [_IRD],
  [
    [
      () => IpamResourceDiscovery,
      {
        [_eQN]: `IpamResourceDiscovery`,
        [_xN]: _iRD,
      },
    ],
  ]
);
export var ModifyIpamResult = struct(
  n0,
  _MIRo,
  0,
  [_Ip],
  [
    [
      () => Ipam,
      {
        [_eQN]: `Ipam`,
        [_xN]: _ip,
      },
    ],
  ]
);
export var RemoveIpamOperatingRegion = struct(n0, _RIOR, 0, [_RN], [0]);
export var RemoveIpamOrganizationalUnitExclusion = struct(n0, _RIOUE, 0, [_OEP], [0]);
export var AddIpamOperatingRegionSet = list(n0, _AIORS, 0, () => AddIpamOperatingRegion);
export var AddIpamOrganizationalUnitExclusionSet = list(n0, _AIOUES, 0, () => AddIpamOrganizationalUnitExclusion);
export var IpamOperatingRegionSet = list(n0, _IORS, 0, [
  () => IpamOperatingRegion,
  {
    [_xN]: _it,
  },
]);
export var IpamOrganizationalUnitExclusionSet = list(n0, _IOUES, 0, [
  () => IpamOrganizationalUnitExclusion,
  {
    [_xN]: _it,
  },
]);
export var RemoveIpamOperatingRegionSet = list(n0, _RIORS, 0, () => RemoveIpamOperatingRegion);
export var RemoveIpamOrganizationalUnitExclusionSet = list(n0, _RIOUES, 0, () => RemoveIpamOrganizationalUnitExclusion);
export var CreateIpam = op(
  n0,
  _CIre,
  0,
  () => CreateIpamRequest,
  () => CreateIpamResult
);
export var CreateIpamResourceDiscovery = op(
  n0,
  _CIRD,
  0,
  () => CreateIpamResourceDiscoveryRequest,
  () => CreateIpamResourceDiscoveryResult
);
export var DeleteIpam = op(
  n0,
  _DIel,
  0,
  () => DeleteIpamRequest,
  () => DeleteIpamResult
);
export var DeleteIpamResourceDiscovery = op(
  n0,
  _DIRD,
  0,
  () => DeleteIpamResourceDiscoveryRequest,
  () => DeleteIpamResourceDiscoveryResult
);
export var ModifyIpam = op(
  n0,
  _MIo,
  0,
  () => ModifyIpamRequest,
  () => ModifyIpamResult
);
export var ModifyIpamResourceDiscovery = op(
  n0,
  _MIRD,
  0,
  () => ModifyIpamResourceDiscoveryRequest,
  () => ModifyIpamResourceDiscoveryResult
);
