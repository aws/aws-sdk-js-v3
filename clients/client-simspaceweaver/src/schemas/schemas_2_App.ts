// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
} from "../models/index";
import {
  _A,
  _a,
  _Ar,
  _BN,
  _c,
  _CE,
  _CS,
  _CSI,
  _CSO,
  _CT,
  _CTr,
  _D,
  _d,
  _DA,
  _DAI,
  _DAO,
  _De,
  _Do,
  _DS,
  _DSI,
  _DSO,
  _e,
  _EIx,
  _h,
  _hE,
  _hQ,
  _LO,
  _M,
  _MD,
  _N,
  _OKP,
  _RA,
  _S,
  _s,
  _SA,
  _SAI,
  _SAIt,
  _SAO,
  _SAOt,
  _SAt,
  _SCI,
  _SCIt,
  _SCO,
  _SCOt,
  _SCt,
  _SCto,
  _SD,
  _SQEE,
  _SS,
  _SSI,
  _SSIt,
  _SSL,
  _SSLn,
  _SSO,
  _SSOt,
  _SSt,
  _T,
  n0,
} from "./schemas_0";
import { S3Location } from "./schemas_1_Resource";
import { LaunchOverrides } from "./schemas_6_App";

/* eslint no-var: 0 */

export var ClientToken = sim(n0, _CT, 0, 8);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ConflictException
);
export var CreateSnapshotInput = struct(n0, _CSI, 0, [_S, _D], [0, () => S3Destination]);
export var CreateSnapshotOutput = struct(n0, _CSO, 0, [], []);
export var DeleteAppInput = struct(
  n0,
  _DAI,
  0,
  [_S, _Do, _A],
  [
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _a,
      },
    ],
  ]
);
export var DeleteAppOutput = struct(n0, _DAO, 0, [], []);
export var DeleteSimulationInput = struct(
  n0,
  _DSI,
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
export var DeleteSimulationOutput = struct(n0, _DSO, 0, [], []);
export var S3Destination = struct(n0, _SD, 0, [_BN, _OKP], [0, 0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M],
  [0],

  __ServiceQuotaExceededException
);
export var StartAppInput = struct(
  n0,
  _SAI,
  0,
  [_CT, _S, _Do, _N, _De, _LO],
  [[() => ClientToken, 4], 0, 0, 0, 0, () => LaunchOverrides]
);
export var StartAppOutput = struct(n0, _SAO, 0, [_N, _Do, _S], [0, 0, 0]);
export var StartClockInput = struct(n0, _SCI, 0, [_S], [0]);
export var StartClockOutput = struct(n0, _SCO, 0, [], []);
export var StartSimulationInput = struct(
  n0,
  _SSI,
  0,
  [_CT, _N, _De, _RA, _SSL, _MD, _T, _SSLn],
  [[() => ClientToken, 4], 0, 0, 0, () => S3Location, 0, 128 | 0, () => S3Location]
);
export var StartSimulationOutput = struct(n0, _SSO, 0, [_Ar, _EIx, _CTr], [0, 0, 4]);
export var StopAppInput = struct(n0, _SAIt, 0, [_S, _Do, _A], [0, 0, 0]);
export var StopAppOutput = struct(n0, _SAOt, 0, [], []);
export var StopClockInput = struct(n0, _SCIt, 0, [_S], [0]);
export var StopClockOutput = struct(n0, _SCOt, 0, [], []);
export var StopSimulationInput = struct(n0, _SSIt, 0, [_S], [0]);
export var StopSimulationOutput = struct(n0, _SSOt, 0, [], []);
export var CreateSnapshot = op(
  n0,
  _CS,
  {
    [_h]: ["POST", "/createsnapshot", 200],
  },
  () => CreateSnapshotInput,
  () => CreateSnapshotOutput
);
export var DeleteApp = op(
  n0,
  _DA,
  {
    [_h]: ["DELETE", "/deleteapp", 200],
  },
  () => DeleteAppInput,
  () => DeleteAppOutput
);
export var DeleteSimulation = op(
  n0,
  _DS,
  {
    [_h]: ["DELETE", "/deletesimulation", 200],
  },
  () => DeleteSimulationInput,
  () => DeleteSimulationOutput
);
export var StartApp = op(
  n0,
  _SA,
  {
    [_h]: ["POST", "/startapp", 200],
  },
  () => StartAppInput,
  () => StartAppOutput
);
export var StartClock = op(
  n0,
  _SCt,
  {
    [_h]: ["POST", "/startclock", 200],
  },
  () => StartClockInput,
  () => StartClockOutput
);
export var StartSimulation = op(
  n0,
  _SS,
  {
    [_h]: ["POST", "/startsimulation", 200],
  },
  () => StartSimulationInput,
  () => StartSimulationOutput
);
export var StopApp = op(
  n0,
  _SAt,
  {
    [_h]: ["POST", "/stopapp", 200],
  },
  () => StopAppInput,
  () => StopAppOutput
);
export var StopClock = op(
  n0,
  _SCto,
  {
    [_h]: ["POST", "/stopclock", 200],
  },
  () => StopClockInput,
  () => StopClockOutput
);
export var StopSimulation = op(
  n0,
  _SSt,
  {
    [_h]: ["POST", "/stopsimulation", 200],
  },
  () => StopSimulationInput,
  () => StopSimulationOutput
);
