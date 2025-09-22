// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAZ,
  _AZ,
  _aZIv,
  _AZL,
  _AZM,
  _AZML,
  _AZv,
  _DAZe,
  _DAZR,
  _DAZRe,
  _DR,
  _dR,
  _eQN,
  _Fi,
  _Fil,
  _GLN,
  _gLN,
  _GN,
  _gN,
  _it,
  _Me,
  _me,
  _Mes,
  _mS,
  _NBG,
  _nBG,
  _OIS,
  _oIS,
  _PZI,
  _pZI,
  _PZN,
  _pZN,
  _RN,
  _rNe,
  _St,
  _xN,
  _ZI,
  _zI,
  _ZIo,
  _ZISL,
  _ZN,
  _zN,
  _ZNo,
  _ZNSL,
  _zS,
  _ZT,
  _zT,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AvailabilityZone = struct(
  n0,
  _AZ,
  0,
  [_OIS, _Mes, _RN, _ZN, _ZI, _GN, _NBG, _ZT, _PZN, _PZI, _GLN, _St],
  [
    [
      0,
      {
        [_eQN]: `OptInStatus`,
        [_xN]: _oIS,
      },
    ],
    [
      () => AvailabilityZoneMessageList,
      {
        [_eQN]: `MessageSet`,
        [_xN]: _mS,
      },
    ],
    [
      0,
      {
        [_eQN]: `RegionName`,
        [_xN]: _rNe,
      },
    ],
    [
      0,
      {
        [_eQN]: `ZoneName`,
        [_xN]: _zN,
      },
    ],
    [
      0,
      {
        [_eQN]: `ZoneId`,
        [_xN]: _zI,
      },
    ],
    [
      0,
      {
        [_eQN]: `GroupName`,
        [_xN]: _gN,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkBorderGroup`,
        [_xN]: _nBG,
      },
    ],
    [
      0,
      {
        [_eQN]: `ZoneType`,
        [_xN]: _zT,
      },
    ],
    [
      0,
      {
        [_eQN]: `ParentZoneName`,
        [_xN]: _pZN,
      },
    ],
    [
      0,
      {
        [_eQN]: `ParentZoneId`,
        [_xN]: _pZI,
      },
    ],
    [
      0,
      {
        [_eQN]: `GroupLongName`,
        [_xN]: _gLN,
      },
    ],
    [
      0,
      {
        [_eQN]: `ZoneState`,
        [_xN]: _zS,
      },
    ],
  ]
);
export var AvailabilityZoneMessage = struct(
  n0,
  _AZM,
  0,
  [_Me],
  [
    [
      0,
      {
        [_eQN]: `Message`,
        [_xN]: _me,
      },
    ],
  ]
);
export var DescribeAvailabilityZonesRequest = struct(
  n0,
  _DAZR,
  0,
  [_ZNo, _ZIo, _AAZ, _DR, _Fi],
  [
    [
      () => ZoneNameStringList,
      {
        [_xN]: _ZN,
      },
    ],
    [
      () => ZoneIdStringList,
      {
        [_xN]: _ZI,
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
export var DescribeAvailabilityZonesResult = struct(
  n0,
  _DAZRe,
  0,
  [_AZv],
  [
    [
      () => AvailabilityZoneList,
      {
        [_eQN]: `AvailabilityZoneInfo`,
        [_xN]: _aZIv,
      },
    ],
  ]
);
export var AvailabilityZoneList = list(n0, _AZL, 0, [
  () => AvailabilityZone,
  {
    [_xN]: _it,
  },
]);
export var AvailabilityZoneMessageList = list(n0, _AZML, 0, [
  () => AvailabilityZoneMessage,
  {
    [_xN]: _it,
  },
]);
export var ZoneIdStringList = list(n0, _ZISL, 0, [
  0,
  {
    [_xN]: _ZI,
  },
]);
export var ZoneNameStringList = list(n0, _ZNSL, 0, [
  0,
  {
    [_xN]: _ZN,
  },
]);
export var DescribeAvailabilityZones = op(
  n0,
  _DAZe,
  0,
  () => DescribeAvailabilityZonesRequest,
  () => DescribeAvailabilityZonesResult
);
