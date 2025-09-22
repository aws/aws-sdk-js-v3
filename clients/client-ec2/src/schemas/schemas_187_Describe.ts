// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _APIAss,
  _Ar,
  _AZ,
  _BDM,
  _BDMl,
  _CT,
  _CTr,
  _cTr,
  _De,
  _DI,
  _DKPe,
  _DKPRes,
  _DKPResc,
  _DN,
  _DOT,
  _DR,
  _dR,
  _Eb,
  _En,
  _Enc,
  _EO,
  _eQN,
  _Fi,
  _Fil,
  _G,
  _GN,
  _Gr,
  _IA,
  _IAC,
  _IApv,
  _IC,
  _IIm,
  _IIP,
  _IIS,
  _iIS,
  _Io,
  _IPK,
  _IT,
  _it,
  _KFe,
  _kFe,
  _KI,
  _KN,
  _kN,
  _KNe,
  _KNSL,
  _KP,
  _KPI,
  _kPI,
  _KPIe,
  _KPIey,
  _KPISL,
  _KPL,
  _kS,
  _KT,
  _kT,
  _LSa,
  _Mon,
  _N,
  _ND,
  _NIe,
  _NIet,
  _NII,
  _PIACr,
  _PIACri,
  _PIACS,
  _PIAr,
  _PK,
  _pK,
  _Pla,
  _Prim,
  _RIa,
  _RSIRu,
  _RSIRun,
  _RSIu,
  _SGI,
  _SGIe,
  _SIBDM,
  _SIBDMS,
  _SIE,
  _SIIA,
  _SIIAL,
  _SIIch,
  _SIIIP,
  _SILS,
  _SIM,
  _SIn,
  _SINI,
  _SINIS,
  _SIP,
  _SIPIAC,
  _SISGIS,
  _SIu,
  _SPIAC,
  _T,
  _tS,
  _UDs,
  _VN,
  _VSo,
  _VT,
  _xN,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeKeyPairsRequest = struct(
  n0,
  _DKPRes,
  0,
  [_KNe, _KPIe, _IPK, _DR, _Fi],
  [
    [
      () => KeyNameStringList,
      {
        [_xN]: _KN,
      },
    ],
    [
      () => KeyPairIdStringList,
      {
        [_xN]: _KPI,
      },
    ],
    2,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
  ]
);
export var DescribeKeyPairsResult = struct(
  n0,
  _DKPResc,
  0,
  [_KP],
  [
    [
      () => KeyPairList,
      {
        [_eQN]: `KeySet`,
        [_xN]: _kS,
      },
    ],
  ]
);
export var KeyPairInfo = struct(
  n0,
  _KPIey,
  0,
  [_KPI, _KT, _T, _PK, _CTr, _KN, _KFe],
  [
    [
      0,
      {
        [_eQN]: `KeyPairId`,
        [_xN]: _kPI,
      },
    ],
    [
      0,
      {
        [_eQN]: `KeyType`,
        [_xN]: _kT,
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
        [_eQN]: `PublicKey`,
        [_xN]: _pK,
      },
    ],
    [
      4,
      {
        [_eQN]: `CreateTime`,
        [_xN]: _cTr,
      },
    ],
    [
      0,
      {
        [_eQN]: `KeyName`,
        [_xN]: _kN,
      },
    ],
    [
      0,
      {
        [_eQN]: `KeyFingerprint`,
        [_xN]: _kFe,
      },
    ],
  ]
);
export var RunScheduledInstancesRequest = struct(
  n0,
  _RSIRu,
  0,
  [_CT, _DR, _IC, _LSa, _SIIch],
  [[0, 4], 2, 1, [() => ScheduledInstancesLaunchSpecification, 0], 0]
);
export var RunScheduledInstancesResult = struct(
  n0,
  _RSIRun,
  0,
  [_IIS],
  [
    [
      () => InstanceIdSet,
      {
        [_eQN]: `InstanceIdSet`,
        [_xN]: _iIS,
      },
    ],
  ]
);
export var ScheduledInstancesBlockDeviceMapping = struct(
  n0,
  _SIBDM,
  0,
  [_DN, _Eb, _ND, _VN],
  [0, () => ScheduledInstancesEbs, 0, 0]
);
export var ScheduledInstancesEbs = struct(n0, _SIE, 0, [_DOT, _Enc, _Io, _SIn, _VSo, _VT], [2, 2, 1, 0, 1, 0]);
export var ScheduledInstancesIamInstanceProfile = struct(n0, _SIIIP, 0, [_Ar, _N], [0, 0]);
export var ScheduledInstancesIpv6Address = struct(n0, _SIIA, 0, [_IApv], [0]);
export var ScheduledInstancesLaunchSpecification = struct(
  n0,
  _SILS,
  8,
  [_BDMl, _EO, _IIP, _IIm, _IT, _KI, _KN, _Mon, _NIet, _Pla, _RIa, _SGIe, _SIu, _UDs],
  [
    [
      () => ScheduledInstancesBlockDeviceMappingSet,
      {
        [_xN]: _BDM,
      },
    ],
    2,
    () => ScheduledInstancesIamInstanceProfile,
    0,
    0,
    0,
    0,
    () => ScheduledInstancesMonitoring,
    [
      () => ScheduledInstancesNetworkInterfaceSet,
      {
        [_xN]: _NIe,
      },
    ],
    () => ScheduledInstancesPlacement,
    0,
    [
      () => ScheduledInstancesSecurityGroupIdSet,
      {
        [_xN]: _SGI,
      },
    ],
    0,
    0,
  ]
);
export var ScheduledInstancesMonitoring = struct(n0, _SIM, 0, [_En], [2]);
export var ScheduledInstancesNetworkInterface = struct(
  n0,
  _SINI,
  0,
  [_APIAss, _DOT, _De, _DI, _G, _IAC, _IA, _NII, _PIAr, _PIACr, _SPIAC, _SIu],
  [
    2,
    2,
    0,
    1,
    [
      () => ScheduledInstancesSecurityGroupIdSet,
      {
        [_xN]: _Gr,
      },
    ],
    1,
    [
      () => ScheduledInstancesIpv6AddressList,
      {
        [_xN]: _IApv,
      },
    ],
    0,
    0,
    [
      () => PrivateIpAddressConfigSet,
      {
        [_xN]: _PIACri,
      },
    ],
    1,
    0,
  ]
);
export var ScheduledInstancesPlacement = struct(n0, _SIP, 0, [_AZ, _GN], [0, 0]);
export var ScheduledInstancesPrivateIpAddressConfig = struct(n0, _SIPIAC, 0, [_Prim, _PIAr], [2, 0]);
export var InstanceIdSet = list(n0, _IIS, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var KeyNameStringList = list(n0, _KNSL, 0, [
  0,
  {
    [_xN]: _KN,
  },
]);
export var KeyPairIdStringList = list(n0, _KPISL, 0, [
  0,
  {
    [_xN]: _KPI,
  },
]);
export var KeyPairList = list(n0, _KPL, 0, [
  () => KeyPairInfo,
  {
    [_xN]: _it,
  },
]);
export var PrivateIpAddressConfigSet = list(n0, _PIACS, 0, [
  () => ScheduledInstancesPrivateIpAddressConfig,
  {
    [_xN]: _PIACS,
  },
]);
export var ScheduledInstancesBlockDeviceMappingSet = list(n0, _SIBDMS, 0, [
  () => ScheduledInstancesBlockDeviceMapping,
  {
    [_xN]: _BDM,
  },
]);
export var ScheduledInstancesIpv6AddressList = list(n0, _SIIAL, 0, [
  () => ScheduledInstancesIpv6Address,
  {
    [_xN]: _IApv,
  },
]);
export var ScheduledInstancesNetworkInterfaceSet = list(n0, _SINIS, 0, [
  () => ScheduledInstancesNetworkInterface,
  {
    [_xN]: _NIe,
  },
]);
export var ScheduledInstancesSecurityGroupIdSet = list(n0, _SISGIS, 0, [
  0,
  {
    [_xN]: _SGI,
  },
]);
export var DescribeKeyPairs = op(
  n0,
  _DKPe,
  0,
  () => DescribeKeyPairsRequest,
  () => DescribeKeyPairsResult
);
export var RunScheduledInstances = op(
  n0,
  _RSIu,
  0,
  () => RunScheduledInstancesRequest,
  () => RunScheduledInstancesResult
);
