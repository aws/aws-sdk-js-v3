// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aC,
  _ACv,
  _AIC,
  _aIC,
  _AICL,
  _aIss,
  _AIsse,
  _AMIT,
  _aMIT,
  _aP,
  _APu,
  _ATll,
  _aTll,
  _AVC,
  _aVC,
  _AZ,
  _aZ,
  _AZI,
  _aZI,
  _Cor,
  _cor,
  _CT,
  _cT,
  _DH,
  _DHR,
  _DHRe,
  _DMH,
  _DMHR,
  _DMHRe,
  _eQN,
  _f,
  _Fi,
  _Fil,
  _H,
  _HI,
  _hI,
  _HIL,
  _HIo,
  _HIos,
  _HL,
  _HM,
  _hM,
  _Ho,
  _HP,
  _hP,
  _HR,
  _hR,
  _HRI,
  _hRI,
  _hS,
  _ICn,
  _IF,
  _iF,
  _II,
  _iI,
  _Ins,
  _ins,
  _IT,
  _iT,
  _it,
  _MH,
  _MHa,
  _MHL,
  _mHS,
  _MOSLRG,
  _mOSLRG,
  _MOSLSV,
  _mOSLSVS,
  _MOSVSL,
  _MR,
  _mR,
  _NTe,
  _nTe,
  _OA,
  _oA,
  _OI,
  _oI,
  _RHIL,
  _RTel,
  _rTel,
  _so,
  _Soc,
  _St,
  _st,
  _T,
  _tC,
  _TCo,
  _tS,
  _TVC,
  _tVC,
  _xN,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AvailableCapacity = struct(
  n0,
  _ACv,
  0,
  [_AIC, _AVC],
  [
    [
      () => AvailableInstanceCapacityList,
      {
        [_eQN]: `AvailableInstanceCapacity`,
        [_xN]: _aIC,
      },
    ],
    [
      1,
      {
        [_eQN]: `AvailableVCpus`,
        [_xN]: _aVC,
      },
    ],
  ]
);
export var DescribeHostsRequest = struct(
  n0,
  _DHR,
  0,
  [_HI, _NTe, _MR, _Fil],
  [
    [
      () => RequestHostIdList,
      {
        [_eQN]: `HostId`,
        [_xN]: _hI,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      1,
      {
        [_eQN]: `MaxResults`,
        [_xN]: _mR,
      },
    ],
    [
      () => FilterList,
      {
        [_eQN]: `Filter`,
        [_xN]: _f,
      },
    ],
  ]
);
export var DescribeHostsResult = struct(
  n0,
  _DHRe,
  0,
  [_H, _NTe],
  [
    [
      () => HostList,
      {
        [_eQN]: `HostSet`,
        [_xN]: _hS,
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
export var DescribeMacHostsRequest = struct(
  n0,
  _DMHR,
  0,
  [_Fi, _HI, _MR, _NTe],
  [
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    [
      () => RequestHostIdList,
      {
        [_xN]: _HIo,
      },
    ],
    1,
    0,
  ]
);
export var DescribeMacHostsResult = struct(
  n0,
  _DMHRe,
  0,
  [_MH, _NTe],
  [
    [
      () => MacHostList,
      {
        [_eQN]: `MacHostSet`,
        [_xN]: _mHS,
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
export var Host = struct(
  n0,
  _Ho,
  0,
  [
    _APu,
    _AZ,
    _ACv,
    _CT,
    _HIo,
    _HP,
    _HRI,
    _Ins,
    _St,
    _ATll,
    _RTel,
    _T,
    _HR,
    _AMIT,
    _OI,
    _AZI,
    _MOSLRG,
    _OA,
    _HM,
    _AIsse,
  ],
  [
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
        [_eQN]: `AvailabilityZone`,
        [_xN]: _aZ,
      },
    ],
    [
      () => AvailableCapacity,
      {
        [_eQN]: `AvailableCapacity`,
        [_xN]: _aC,
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
        [_eQN]: `HostId`,
        [_xN]: _hI,
      },
    ],
    [
      () => HostProperties,
      {
        [_eQN]: `HostProperties`,
        [_xN]: _hP,
      },
    ],
    [
      0,
      {
        [_eQN]: `HostReservationId`,
        [_xN]: _hRI,
      },
    ],
    [
      () => HostInstanceList,
      {
        [_eQN]: `Instances`,
        [_xN]: _ins,
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
      4,
      {
        [_eQN]: `AllocationTime`,
        [_xN]: _aTll,
      },
    ],
    [
      4,
      {
        [_eQN]: `ReleaseTime`,
        [_xN]: _rTel,
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
        [_eQN]: `HostRecovery`,
        [_xN]: _hR,
      },
    ],
    [
      0,
      {
        [_eQN]: `AllowsMultipleInstanceTypes`,
        [_xN]: _aMIT,
      },
    ],
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
        [_eQN]: `AvailabilityZoneId`,
        [_xN]: _aZI,
      },
    ],
    [
      2,
      {
        [_eQN]: `MemberOfServiceLinkedResourceGroup`,
        [_xN]: _mOSLRG,
      },
    ],
    [
      0,
      {
        [_eQN]: `OutpostArn`,
        [_xN]: _oA,
      },
    ],
    [
      0,
      {
        [_eQN]: `HostMaintenance`,
        [_xN]: _hM,
      },
    ],
    [
      0,
      {
        [_eQN]: `AssetId`,
        [_xN]: _aIss,
      },
    ],
  ]
);
export var HostInstance = struct(
  n0,
  _HIos,
  0,
  [_II, _IT, _OI],
  [
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
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
      0,
      {
        [_eQN]: `OwnerId`,
        [_xN]: _oI,
      },
    ],
  ]
);
export var HostProperties = struct(
  n0,
  _HP,
  0,
  [_Cor, _IT, _IF, _Soc, _TVC],
  [
    [
      1,
      {
        [_eQN]: `Cores`,
        [_xN]: _cor,
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
      0,
      {
        [_eQN]: `InstanceFamily`,
        [_xN]: _iF,
      },
    ],
    [
      1,
      {
        [_eQN]: `Sockets`,
        [_xN]: _so,
      },
    ],
    [
      1,
      {
        [_eQN]: `TotalVCpus`,
        [_xN]: _tVC,
      },
    ],
  ]
);
export var InstanceCapacity = struct(
  n0,
  _ICn,
  0,
  [_ACv, _IT, _TCo],
  [
    [
      1,
      {
        [_eQN]: `AvailableCapacity`,
        [_xN]: _aC,
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
        [_eQN]: `TotalCapacity`,
        [_xN]: _tC,
      },
    ],
  ]
);
export var MacHost = struct(
  n0,
  _MHa,
  0,
  [_HIo, _MOSLSV],
  [
    [
      0,
      {
        [_eQN]: `HostId`,
        [_xN]: _hI,
      },
    ],
    [
      () => MacOSVersionStringList,
      {
        [_eQN]: `MacOSLatestSupportedVersionSet`,
        [_xN]: _mOSLSVS,
      },
    ],
  ]
);
export var AvailableInstanceCapacityList = list(n0, _AICL, 0, [
  () => InstanceCapacity,
  {
    [_xN]: _it,
  },
]);
export var HostInstanceList = list(n0, _HIL, 0, [
  () => HostInstance,
  {
    [_xN]: _it,
  },
]);
export var HostList = list(n0, _HL, 0, [
  () => Host,
  {
    [_xN]: _it,
  },
]);
export var MacHostList = list(n0, _MHL, 0, [
  () => MacHost,
  {
    [_xN]: _it,
  },
]);
export var MacOSVersionStringList = list(n0, _MOSVSL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var RequestHostIdList = list(n0, _RHIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var DescribeHosts = op(
  n0,
  _DH,
  0,
  () => DescribeHostsRequest,
  () => DescribeHostsResult
);
export var DescribeMacHosts = op(
  n0,
  _DMH,
  0,
  () => DescribeMacHostsRequest,
  () => DescribeMacHostsResult
);
