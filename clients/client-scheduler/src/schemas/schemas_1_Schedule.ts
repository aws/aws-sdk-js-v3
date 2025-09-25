// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ResourceNotFoundException as __ResourceNotFoundException } from "../models/index";
import {
  _A,
  _AAC,
  _aC,
  _API,
  _AVC,
  _b,
  _c,
  _CD,
  _cP,
  _CPS,
  _CPSI,
  _CS,
  _CSI,
  _CSO,
  _CT,
  _cT,
  _D,
  _DLC,
  _DS,
  _DSG,
  _DSGI,
  _DSGO,
  _DSI,
  _DSO,
  _DT,
  _e,
  _EBP,
  _ED,
  _EEC,
  _EECSMT,
  _EP,
  _ex,
  _f,
  _FTW,
  _G,
  _GN,
  _gN,
  _GS,
  _GSG,
  _GSGI,
  _GSGO,
  _GSI,
  _GSO,
  _h,
  _hE,
  _hQ,
  _I,
  _iT,
  _KKA,
  _KP,
  _LMD,
  _LS,
  _LSI,
  _LSO,
  _LT,
  _LTFR,
  _LTFRI,
  _LTFRO,
  _M,
  _MEAIS,
  _MGI,
  _Mo,
  _MR,
  _MRA,
  _MWIM,
  _N,
  _NC,
  _NP,
  _NT,
  _PC,
  _PCl,
  _PK,
  _PPL,
  _PS,
  _PSl,
  _PT,
  _PV,
  _RA,
  _RAo,
  _RI,
  _RNFE,
  _RP,
  _S,
  _SA,
  _Sc,
  _SD,
  _SE,
  _SET,
  _SG,
  _SGch,
  _SL,
  _SMPP,
  _SMPPa,
  _SMPPL,
  _So,
  _SP,
  _SS,
  _St,
  _T,
  _t,
  _Ta,
  _TC,
  _TDA,
  _TK,
  _TR,
  _TRI,
  _TRO,
  _TS,
  _UR,
  _URI,
  _URO,
  _US,
  _USI,
  _USO,
  _V,
  _w,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_3_Schedule";

/* eslint no-var: 0 */

export var AwsVpcConfiguration = struct(n0, _AVC, 0, [_S, _SG, _API], [64 | 0, 64 | 0, 0]);
export var CapacityProviderStrategyItem = struct(n0, _CPSI, 0, [_cP, _w, _b], [0, 1, 1]);
export var CreateScheduleInput = struct(
  n0,
  _CSI,
  0,
  [_N, _GN, _SE, _SD, _ED, _D, _SET, _St, _KKA, _Ta, _FTW, _CT, _AAC],
  [[0, 1], 0, 0, 4, 4, 0, 0, 0, 0, () => Target, () => FlexibleTimeWindow, [0, 4], 0]
);
export var CreateScheduleOutput = struct(n0, _CSO, 0, [_SA], [0]);
export var DeadLetterConfig = struct(n0, _DLC, 0, [_A], [0]);
export var DeleteScheduleGroupInput = struct(
  n0,
  _DSGI,
  0,
  [_N, _CT],
  [
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var DeleteScheduleGroupOutput = struct(n0, _DSGO, 0, [], []);
export var DeleteScheduleInput = struct(
  n0,
  _DSI,
  0,
  [_N, _GN, _CT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _gN,
      },
    ],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var DeleteScheduleOutput = struct(n0, _DSO, 0, [], []);
export var EcsParameters = struct(
  n0,
  _EP,
  0,
  [_TDA, _TC, _LT, _NC, _PV, _G, _CPS, _EECSMT, _EEC, _PC, _PS, _PT, _RI, _T],
  [
    0,
    1,
    0,
    () => NetworkConfiguration,
    0,
    0,
    () => CapacityProviderStrategy,
    2,
    2,
    () => PlacementConstraints,
    () => PlacementStrategies,
    0,
    0,
    list(n0, _T, 0, 128 | 0),
  ]
);
export var EventBridgeParameters = struct(n0, _EBP, 0, [_DT, _So], [0, 0]);
export var FlexibleTimeWindow = struct(n0, _FTW, 0, [_Mo, _MWIM], [0, 1]);
export var GetScheduleGroupInput = struct(n0, _GSGI, 0, [_N], [[0, 1]]);
export var GetScheduleGroupOutput = struct(n0, _GSGO, 0, [_A, _N, _St, _CD, _LMD], [0, 0, 0, 4, 4]);
export var GetScheduleInput = struct(
  n0,
  _GSI,
  0,
  [_N, _GN],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _gN,
      },
    ],
  ]
);
export var GetScheduleOutput = struct(
  n0,
  _GSO,
  0,
  [_A, _GN, _N, _SE, _SD, _ED, _D, _SET, _St, _CD, _LMD, _KKA, _Ta, _FTW, _AAC],
  [0, 0, 0, 0, 4, 4, 0, 0, 0, 4, 4, 0, () => Target, () => FlexibleTimeWindow, 0]
);
export var KinesisParameters = struct(n0, _KP, 0, [_PK], [0]);
export var ListSchedulesInput = struct(
  n0,
  _LSI,
  0,
  [_GN, _NP, _St, _NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _SGch,
      },
    ],
    [
      0,
      {
        [_hQ]: _NP,
      },
    ],
    [
      0,
      {
        [_hQ]: _St,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListSchedulesOutput = struct(n0, _LSO, 0, [_NT, _Sc], [0, () => ScheduleList]);
export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_RA], [[0, 1]]);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_T], [() => TagList]);
export var NetworkConfiguration = struct(n0, _NC, 0, [_aC], [() => AwsVpcConfiguration]);
export var PlacementConstraint = struct(n0, _PCl, 0, [_t, _ex], [0, 0]);
export var PlacementStrategy = struct(n0, _PS, 0, [_t, _f], [0, 0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ResourceNotFoundException
);
export var RetryPolicy = struct(n0, _RP, 0, [_MEAIS, _MRA], [1, 1]);
export var SageMakerPipelineParameter = struct(n0, _SMPP, 0, [_N, _V], [0, 0]);
export var SageMakerPipelineParameters = struct(n0, _SMPPa, 0, [_PPL], [() => SageMakerPipelineParameterList]);
export var ScheduleSummary = struct(
  n0,
  _SS,
  0,
  [_A, _N, _GN, _St, _CD, _LMD, _Ta],
  [0, 0, 0, 0, 4, 4, () => TargetSummary]
);
export var SqsParameters = struct(n0, _SP, 0, [_MGI], [0]);
export var TagResourceInput = struct(n0, _TRI, 0, [_RA, _T], [[0, 1], () => TagList]);
export var TagResourceOutput = struct(n0, _TRO, 0, [], []);
export var Target = struct(
  n0,
  _Ta,
  0,
  [_A, _RAo, _DLC, _RP, _I, _EP, _EBP, _KP, _SMPPa, _SP],
  [
    0,
    0,
    () => DeadLetterConfig,
    () => RetryPolicy,
    0,
    () => EcsParameters,
    () => EventBridgeParameters,
    () => KinesisParameters,
    () => SageMakerPipelineParameters,
    () => SqsParameters,
  ]
);
export var TargetSummary = struct(n0, _TS, 0, [_A], [0]);
export var UntagResourceInput = struct(
  n0,
  _URI,
  0,
  [_RA, _TK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _TK,
      },
    ],
  ]
);
export var UntagResourceOutput = struct(n0, _URO, 0, [], []);
export var UpdateScheduleInput = struct(
  n0,
  _USI,
  0,
  [_N, _GN, _SE, _SD, _ED, _D, _SET, _St, _KKA, _Ta, _FTW, _CT, _AAC],
  [[0, 1], 0, 0, 4, 4, 0, 0, 0, 0, () => Target, () => FlexibleTimeWindow, [0, 4], 0]
);
export var UpdateScheduleOutput = struct(n0, _USO, 0, [_SA], [0]);
export var CapacityProviderStrategy = list(n0, _CPS, 0, () => CapacityProviderStrategyItem);
export var PlacementConstraints = list(n0, _PC, 0, () => PlacementConstraint);
export var PlacementStrategies = list(n0, _PSl, 0, () => PlacementStrategy);
export var SageMakerPipelineParameterList = list(n0, _SMPPL, 0, () => SageMakerPipelineParameter);
export var ScheduleList = list(n0, _SL, 0, () => ScheduleSummary);
export var SecurityGroups = 64 | 0;

export var Subnets = 64 | 0;

export var TagKeyList = 64 | 0;

export var Tags = list(n0, _T, 0, 128 | 0);
export var TagMap = 128 | 0;

export var CreateSchedule = op(
  n0,
  _CS,
  {
    [_h]: ["POST", "/schedules/{Name}", 200],
  },
  () => CreateScheduleInput,
  () => CreateScheduleOutput
);
export var DeleteSchedule = op(
  n0,
  _DS,
  {
    [_h]: ["DELETE", "/schedules/{Name}", 200],
  },
  () => DeleteScheduleInput,
  () => DeleteScheduleOutput
);
export var DeleteScheduleGroup = op(
  n0,
  _DSG,
  {
    [_h]: ["DELETE", "/schedule-groups/{Name}", 200],
  },
  () => DeleteScheduleGroupInput,
  () => DeleteScheduleGroupOutput
);
export var GetSchedule = op(
  n0,
  _GS,
  {
    [_h]: ["GET", "/schedules/{Name}", 200],
  },
  () => GetScheduleInput,
  () => GetScheduleOutput
);
export var GetScheduleGroup = op(
  n0,
  _GSG,
  {
    [_h]: ["GET", "/schedule-groups/{Name}", 200],
  },
  () => GetScheduleGroupInput,
  () => GetScheduleGroupOutput
);
export var ListSchedules = op(
  n0,
  _LS,
  {
    [_h]: ["GET", "/schedules", 200],
  },
  () => ListSchedulesInput,
  () => ListSchedulesOutput
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
  },
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{ResourceArn}", 200],
  },
  () => TagResourceInput,
  () => TagResourceOutput
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{ResourceArn}", 200],
  },
  () => UntagResourceInput,
  () => UntagResourceOutput
);
export var UpdateSchedule = op(
  n0,
  _US,
  {
    [_h]: ["PUT", "/schedules/{Name}", 200],
  },
  () => UpdateScheduleInput,
  () => UpdateScheduleOutput
);
