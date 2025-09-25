// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { TooManyTagsException as __TooManyTagsException } from "../models/index";
import {
  _Ar,
  _BN,
  _C,
  _c,
  _CTr,
  _CWLLG,
  _De,
  _Des,
  _DL,
  _Do,
  _Dom,
  _DSe,
  _DSIe,
  _DSOe,
  _e,
  _EIx,
  _h,
  _hE,
  _hQ,
  _L,
  _LC,
  _LD,
  _LDo,
  _LGA,
  _LS,
  _LSI,
  _LSO,
  _LSS,
  _LTFR,
  _LTFRI,
  _LTFRO,
  _M,
  _MD,
  _MR,
  _mR,
  _N,
  _NT,
  _nT,
  _OK,
  _RA,
  _RAe,
  _S,
  _s,
  _SC,
  _SCL,
  _SE,
  _SEt,
  _Si,
  _SL,
  _SLi,
  _SM,
  _SSL,
  _SSLn,
  _St,
  _T,
  _TK,
  _tK,
  _TMTE,
  _TR,
  _TRI,
  _TRO,
  _TS,
  _UR,
  _URI,
  _URO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CloudWatchLogsLogGroup = struct(n0, _CWLLG, 0, [_LGA], [0]);
export var DescribeSimulationInput = struct(
  n0,
  _DSIe,
  0,
  [_S],
  [
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
  ]
);
export var DescribeSimulationOutput = struct(
  n0,
  _DSOe,
  0,
  [_N, _EIx, _Ar, _De, _RA, _CTr, _St, _TS, _SSL, _SE, _LC, _LSS, _MD, _SSLn, _SEt],
  [
    0,
    0,
    0,
    0,
    0,
    4,
    0,
    0,
    () => S3Location,
    0,
    () => LoggingConfiguration,
    () => LiveSimulationState,
    0,
    () => S3Location,
    0,
  ]
);
export var Domain = struct(n0, _Do, 0, [_N, _L], [0, 0]);
export var ListSimulationsInput = struct(
  n0,
  _LSI,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListSimulationsOutput = struct(n0, _LSO, 0, [_Si, _NT], [() => SimulationList, 0]);
export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_RAe], [[0, 1]]);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_T], [128 | 0]);
export var LiveSimulationState = struct(n0, _LSS, 0, [_Dom, _C], [() => DomainList, () => SimulationClockList]);
export var LogDestination = struct(n0, _LD, 0, [_CWLLG], [() => CloudWatchLogsLogGroup]);
export var LoggingConfiguration = struct(n0, _LC, 0, [_Des], [() => LogDestinations]);
export var S3Location = struct(n0, _SL, 0, [_BN, _OK], [0, 0]);
export var SimulationClock = struct(n0, _SC, 0, [_St, _TS], [0, 0]);
export var SimulationMetadata = struct(n0, _SM, 0, [_N, _Ar, _CTr, _St, _TS], [0, 0, 4, 0, 0]);
export var TagResourceInput = struct(n0, _TRI, 0, [_RAe, _T], [[0, 1], 128 | 0]);
export var TagResourceOutput = struct(n0, _TRO, 0, [], []);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyTagsException
);
export var UntagResourceInput = struct(
  n0,
  _URI,
  0,
  [_RAe, _TK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceOutput = struct(n0, _URO, 0, [], []);
export var DomainList = list(n0, _DL, 0, () => Domain);
export var LogDestinations = list(n0, _LDo, 0, () => LogDestination);
export var SimulationClockList = list(n0, _SCL, 0, () => SimulationClock);
export var SimulationList = list(n0, _SLi, 0, () => SimulationMetadata);
export var TagKeyList = 64 | 0;

export var TagMap = 128 | 0;

export var DescribeSimulation = op(
  n0,
  _DSe,
  {
    [_h]: ["GET", "/describesimulation", 200],
  },
  () => DescribeSimulationInput,
  () => DescribeSimulationOutput
);
export var ListSimulations = op(
  n0,
  _LS,
  {
    [_h]: ["GET", "/listsimulations", 200],
  },
  () => ListSimulationsInput,
  () => ListSimulationsOutput
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
