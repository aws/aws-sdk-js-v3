// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AICv,
  _aICv,
  _AZ,
  _aZ,
  _CD,
  _cD,
  _CT,
  _DR,
  _DSI,
  _DSIA,
  _DSIAR,
  _DSIARe,
  _DSIR,
  _DSIRe,
  _eQN,
  _ETa,
  _Fi,
  _Fil,
  _Fre,
  _fre,
  _FSST,
  _fSST,
  _FSSTR,
  _HPo,
  _hPo,
  _IC,
  _iC,
  _Int,
  _int,
  _IT,
  _iT,
  _it,
  _LTat,
  _MR,
  _MSDIH,
  _MSDIHi,
  _MTDID,
  _mTDID,
  _MTDIDi,
  _mTDIDi,
  _NPet,
  _nPet,
  _NSST,
  _nSST,
  _NTe,
  _nTe,
  _OD,
  _ODc,
  _ODcc,
  _ODRS,
  _ODS,
  _oDS,
  _ORTE,
  _oRTE,
  _OU,
  _oU,
  _Pl,
  _pl,
  _PRSu,
  _PRu,
  _PRur,
  _PSET,
  _pSET,
  _PSI,
  _PSIR,
  _PSIRu,
  _PSIS,
  _PTu,
  _pTu,
  _Rec,
  _rec,
  _SDIH,
  _sDIH,
  _SDTRR,
  _SIA,
  _SIAS,
  _sIAS,
  _SIc,
  _SIIc,
  _sIIc,
  _SIIch,
  _SIIRS,
  _SIRc,
  _SIRR,
  _SIS,
  _sIS,
  _SSTR,
  _SSTRR,
  _TED,
  _tED,
  _TSD,
  _tSD,
  _TSIH,
  _tSIH,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeScheduledInstanceAvailabilityRequest = struct(
  n0,
  _DSIAR,
  0,
  [_DR, _Fi, _FSSTR, _MR, _MSDIH, _MSDIHi, _NTe, _Rec],
  [
    2,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    () => SlotDateTimeRangeRequest,
    1,
    1,
    1,
    0,
    [() => ScheduledInstanceRecurrenceRequest, 0],
  ]
);
export var DescribeScheduledInstanceAvailabilityResult = struct(
  n0,
  _DSIARe,
  0,
  [_NTe, _SIAS],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => ScheduledInstanceAvailabilitySet,
      {
        [_eQN]: `ScheduledInstanceAvailabilitySet`,
        [_xN]: _sIAS,
      },
    ],
  ]
);
export var DescribeScheduledInstancesRequest = struct(
  n0,
  _DSIR,
  0,
  [_DR, _Fi, _MR, _NTe, _SIIc, _SSTR],
  [
    2,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    0,
    [
      () => ScheduledInstanceIdRequestSet,
      {
        [_xN]: _SIIch,
      },
    ],
    () => SlotStartTimeRangeRequest,
  ]
);
export var DescribeScheduledInstancesResult = struct(
  n0,
  _DSIRe,
  0,
  [_NTe, _SIS],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => ScheduledInstanceSet,
      {
        [_eQN]: `ScheduledInstanceSet`,
        [_xN]: _sIS,
      },
    ],
  ]
);
export var PurchaseRequest = struct(n0, _PRu, 0, [_IC, _PTu], [1, 0]);
export var PurchaseScheduledInstancesRequest = struct(
  n0,
  _PSIR,
  0,
  [_CT, _DR, _PRur],
  [
    [0, 4],
    2,
    [
      () => PurchaseRequestSet,
      {
        [_xN]: _PRu,
      },
    ],
  ]
);
export var PurchaseScheduledInstancesResult = struct(
  n0,
  _PSIRu,
  0,
  [_SIS],
  [
    [
      () => PurchasedScheduledInstanceSet,
      {
        [_eQN]: `ScheduledInstanceSet`,
        [_xN]: _sIS,
      },
    ],
  ]
);
export var ScheduledInstance = struct(
  n0,
  _SIc,
  0,
  [_AZ, _CD, _HPo, _IC, _IT, _NPet, _NSST, _Pl, _PSET, _Rec, _SIIch, _SDIH, _TED, _TSD, _TSIH],
  [
    [
      0,
      {
        [_eQN]: `AvailabilityZone`,
        [_xN]: _aZ,
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
      0,
      {
        [_eQN]: `HourlyPrice`,
        [_xN]: _hPo,
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
        [_eQN]: `NetworkPlatform`,
        [_xN]: _nPet,
      },
    ],
    [
      4,
      {
        [_eQN]: `NextSlotStartTime`,
        [_xN]: _nSST,
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
      4,
      {
        [_eQN]: `PreviousSlotEndTime`,
        [_xN]: _pSET,
      },
    ],
    [
      () => ScheduledInstanceRecurrence,
      {
        [_eQN]: `Recurrence`,
        [_xN]: _rec,
      },
    ],
    [
      0,
      {
        [_eQN]: `ScheduledInstanceId`,
        [_xN]: _sIIc,
      },
    ],
    [
      1,
      {
        [_eQN]: `SlotDurationInHours`,
        [_xN]: _sDIH,
      },
    ],
    [
      4,
      {
        [_eQN]: `TermEndDate`,
        [_xN]: _tED,
      },
    ],
    [
      4,
      {
        [_eQN]: `TermStartDate`,
        [_xN]: _tSD,
      },
    ],
    [
      1,
      {
        [_eQN]: `TotalScheduledInstanceHours`,
        [_xN]: _tSIH,
      },
    ],
  ]
);
export var ScheduledInstanceAvailability = struct(
  n0,
  _SIA,
  0,
  [_AZ, _AICv, _FSST, _HPo, _IT, _MTDID, _MTDIDi, _NPet, _Pl, _PTu, _Rec, _SDIH, _TSIH],
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
        [_eQN]: `AvailableInstanceCount`,
        [_xN]: _aICv,
      },
    ],
    [
      4,
      {
        [_eQN]: `FirstSlotStartTime`,
        [_xN]: _fSST,
      },
    ],
    [
      0,
      {
        [_eQN]: `HourlyPrice`,
        [_xN]: _hPo,
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
        [_eQN]: `MaxTermDurationInDays`,
        [_xN]: _mTDID,
      },
    ],
    [
      1,
      {
        [_eQN]: `MinTermDurationInDays`,
        [_xN]: _mTDIDi,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkPlatform`,
        [_xN]: _nPet,
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
        [_eQN]: `PurchaseToken`,
        [_xN]: _pTu,
      },
    ],
    [
      () => ScheduledInstanceRecurrence,
      {
        [_eQN]: `Recurrence`,
        [_xN]: _rec,
      },
    ],
    [
      1,
      {
        [_eQN]: `SlotDurationInHours`,
        [_xN]: _sDIH,
      },
    ],
    [
      1,
      {
        [_eQN]: `TotalScheduledInstanceHours`,
        [_xN]: _tSIH,
      },
    ],
  ]
);
export var ScheduledInstanceRecurrence = struct(
  n0,
  _SIRc,
  0,
  [_Fre, _Int, _ODS, _ORTE, _OU],
  [
    [
      0,
      {
        [_eQN]: `Frequency`,
        [_xN]: _fre,
      },
    ],
    [
      1,
      {
        [_eQN]: `Interval`,
        [_xN]: _int,
      },
    ],
    [
      () => OccurrenceDaySet,
      {
        [_eQN]: `OccurrenceDaySet`,
        [_xN]: _oDS,
      },
    ],
    [
      2,
      {
        [_eQN]: `OccurrenceRelativeToEnd`,
        [_xN]: _oRTE,
      },
    ],
    [
      0,
      {
        [_eQN]: `OccurrenceUnit`,
        [_xN]: _oU,
      },
    ],
  ]
);
export var ScheduledInstanceRecurrenceRequest = struct(
  n0,
  _SIRR,
  0,
  [_Fre, _Int, _OD, _ORTE, _OU],
  [
    0,
    1,
    [
      () => OccurrenceDayRequestSet,
      {
        [_xN]: _ODc,
      },
    ],
    2,
    0,
  ]
);
export var SlotDateTimeRangeRequest = struct(n0, _SDTRR, 0, [_ETa, _LTat], [4, 4]);
export var SlotStartTimeRangeRequest = struct(n0, _SSTRR, 0, [_ETa, _LTat], [4, 4]);
export var OccurrenceDayRequestSet = list(n0, _ODRS, 0, [
  1,
  {
    [_xN]: _ODcc,
  },
]);
export var OccurrenceDaySet = list(n0, _ODS, 0, [
  1,
  {
    [_xN]: _it,
  },
]);
export var PurchasedScheduledInstanceSet = list(n0, _PSIS, 0, [
  () => ScheduledInstance,
  {
    [_xN]: _it,
  },
]);
export var PurchaseRequestSet = list(n0, _PRSu, 0, [
  () => PurchaseRequest,
  {
    [_xN]: _PRu,
  },
]);
export var ScheduledInstanceAvailabilitySet = list(n0, _SIAS, 0, [
  () => ScheduledInstanceAvailability,
  {
    [_xN]: _it,
  },
]);
export var ScheduledInstanceIdRequestSet = list(n0, _SIIRS, 0, [
  0,
  {
    [_xN]: _SIIch,
  },
]);
export var ScheduledInstanceSet = list(n0, _SIS, 0, [
  () => ScheduledInstance,
  {
    [_xN]: _it,
  },
]);
export var DescribeScheduledInstanceAvailability = op(
  n0,
  _DSIA,
  0,
  () => DescribeScheduledInstanceAvailabilityRequest,
  () => DescribeScheduledInstanceAvailabilityResult
);
export var DescribeScheduledInstances = op(
  n0,
  _DSI,
  0,
  () => DescribeScheduledInstancesRequest,
  () => DescribeScheduledInstancesResult
);
export var PurchaseScheduledInstances = op(
  n0,
  _PSI,
  0,
  () => PurchaseScheduledInstancesRequest,
  () => PurchaseScheduledInstancesResult
);
