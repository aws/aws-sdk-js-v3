// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AZ,
  _aZ,
  _AZI,
  _aZI,
  _CD,
  _cD,
  _CT,
  _cT,
  _DRIM,
  _DRIMR,
  _DRIMRe,
  _EDf,
  _eDf,
  _eQN,
  _Fi,
  _Fil,
  _IC,
  _iC,
  _IT,
  _iT,
  _it,
  _MRo,
  _mRS,
  _NTe,
  _nTe,
  _Pl,
  _pl,
  _RIC,
  _rII,
  _RIIes,
  _RIIese,
  _RIIeser,
  _RIM,
  _RIMe,
  _RIMI,
  _rIMI,
  _RIMIe,
  _RIMISL,
  _RIML,
  _RIMR,
  _RIMRL,
  _rIMS,
  _rIS,
  _Sc,
  _sc,
  _SMt,
  _sMt,
  _Sta,
  _sta,
  _TCa,
  _tCar,
  _UDpd,
  _uDpd,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeReservedInstancesModificationsRequest = struct(
  n0,
  _DRIMR,
  0,
  [_RIMI, _NTe, _Fi],
  [
    [
      () => ReservedInstancesModificationIdStringList,
      {
        [_xN]: _RIMIe,
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
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
  ]
);
export var DescribeReservedInstancesModificationsResult = struct(
  n0,
  _DRIMRe,
  0,
  [_NTe, _RIM],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => ReservedInstancesModificationList,
      {
        [_eQN]: `ReservedInstancesModificationsSet`,
        [_xN]: _rIMS,
      },
    ],
  ]
);
export var ReservedInstancesConfiguration = struct(
  n0,
  _RIC,
  0,
  [_AZ, _IC, _IT, _Pl, _Sc, _AZI],
  [
    [
      0,
      {
        [_eQN]: `AvailabilityZone`,
        [_xN]: _aZ,
      },
    ],
    [
      1,
      {
        [_eQN]: `InstanceCount`,
        [_xN]: _iC,
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
        [_eQN]: `Platform`,
        [_xN]: _pl,
      },
    ],
    [
      0,
      {
        [_eQN]: `Scope`,
        [_xN]: _sc,
      },
    ],
    [
      0,
      {
        [_eQN]: `AvailabilityZoneId`,
        [_xN]: _aZI,
      },
    ],
  ]
);
export var ReservedInstancesId = struct(
  n0,
  _RIIes,
  0,
  [_RIIes],
  [
    [
      0,
      {
        [_eQN]: `ReservedInstancesId`,
        [_xN]: _rII,
      },
    ],
  ]
);
export var ReservedInstancesModification = struct(
  n0,
  _RIMe,
  0,
  [_CT, _CD, _EDf, _MRo, _RIIese, _RIMIe, _Sta, _SMt, _UDpd],
  [
    [
      0,
      {
        [_eQN]: `ClientToken`,
        [_xN]: _cT,
      },
    ],
    [
      4,
      {
        [_eQN]: `CreateDate`,
        [_xN]: _cD,
      },
    ],
    [
      4,
      {
        [_eQN]: `EffectiveDate`,
        [_xN]: _eDf,
      },
    ],
    [
      () => ReservedInstancesModificationResultList,
      {
        [_eQN]: `ModificationResultSet`,
        [_xN]: _mRS,
      },
    ],
    [
      () => ReservedIntancesIds,
      {
        [_eQN]: `ReservedInstancesSet`,
        [_xN]: _rIS,
      },
    ],
    [
      0,
      {
        [_eQN]: `ReservedInstancesModificationId`,
        [_xN]: _rIMI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
    [
      0,
      {
        [_eQN]: `StatusMessage`,
        [_xN]: _sMt,
      },
    ],
    [
      4,
      {
        [_eQN]: `UpdateDate`,
        [_xN]: _uDpd,
      },
    ],
  ]
);
export var ReservedInstancesModificationResult = struct(
  n0,
  _RIMR,
  0,
  [_RIIes, _TCa],
  [
    [
      0,
      {
        [_eQN]: `ReservedInstancesId`,
        [_xN]: _rII,
      },
    ],
    [
      () => ReservedInstancesConfiguration,
      {
        [_eQN]: `TargetConfiguration`,
        [_xN]: _tCar,
      },
    ],
  ]
);
export var ReservedInstancesModificationIdStringList = list(n0, _RIMISL, 0, [
  0,
  {
    [_xN]: _RIMIe,
  },
]);
export var ReservedInstancesModificationList = list(n0, _RIML, 0, [
  () => ReservedInstancesModification,
  {
    [_xN]: _it,
  },
]);
export var ReservedInstancesModificationResultList = list(n0, _RIMRL, 0, [
  () => ReservedInstancesModificationResult,
  {
    [_xN]: _it,
  },
]);
export var ReservedIntancesIds = list(n0, _RIIeser, 0, [
  () => ReservedInstancesId,
  {
    [_xN]: _it,
  },
]);
export var DescribeReservedInstancesModifications = op(
  n0,
  _DRIM,
  0,
  () => DescribeReservedInstancesModificationsRequest,
  () => DescribeReservedInstancesModificationsResult
);
